
(function () {
    var exports = this,
        /** Sets up communicating with server (retrieving document, saving, collaboration, etc.). TODO
         * @namespace serverCommunications
         */
        serverCommunications = {};

    serverCommunications.connected = false;

    /** A list of messages to be sent. Only used when temporarily offline. Messages will be sent when returning back online. */
    serverCommunications.messagesToSend = [];


    serverCommunications.activateConnection = function () {
        serverCommunications.connected = true;
        if (serverCommunications.firstTimeConnection) {
            theEditor.waitingForDocument = false;
            theEditor.askForDocument();
        } else {
            theEditor.mod.footnotes.fnEditor.renderAllFootnotes();
            theEditor.mod.collab.docChanges.checkDiffVersion();
            serverCommunications.send({
                type: 'participant_update'
            });
            while (serverCommunications.messagesToSend.length > 0) {
                  serverCommunications.send(serverCommunications.messagesToSend.shift());
            }
        }
        serverCommunications.firstTimeConnection = false;
    };

    /** Sends data to server or keeps it in a list if currently offline. */
    serverCommunications.send = function (data) {
        if (serverCommunications.connected) {
            ws.send(JSON.stringify(data));
        } else if (data.type !== 'diff') {
            serverCommunications.messagesToSend.push(data);
        }
    };

    serverCommunications.receive = function (data) {
        switch (data.type) {
        case 'chat':
            chatHelpers.newMessage(data);
            break;
        case 'connections':
            theEditor.mod.collab.updateParticipantList(data.participant_list);
            if (theEditor.docInfo.control) {
                theEditor.docInfo.sentHash = false;
            }
            break;
        case 'welcome':
            serverCommunications.activateConnection();
            break;
        case 'document_data':
            theEditor.receiveDocument(data);
            break;
        case 'confirm_diff_version':
            theEditor.mod.collab.docChanges.cancelCurrentlyCheckingVersion();
            if (data.diff_version !== theEditor.pm.mod.collab.version) {
                theEditor.docInfo();
                return;
            }
            theEditor.mod.collab.docChanges.enableDiffSending();
            break;
        case 'diff':
            theEditor.mod.collab.docChanges.receiveFromCollaborators(data);
            break;
        case 'confirm_diff':
            theEditor.mod.collab.docChanges.confirmDiff(data.request_id);
            break;
        case 'setting_change':
            editorHelpers.setSetting(data.variable, data.value, false);
            editorHelpers.displaySetting.set(data.variable);
            break;
        case 'take_control':
            theEditor.takeControl();
            break;
        case 'check_hash':
            theEditor.checkHash(data.diff_version, data.hash);
            break;
        }
    };

    /** Whether the connection is established for the first time. */
    serverCommunications.firstTimeConnection = true;

    serverCommunications.bind = function () {
        var pathnameParts = window.location.pathname.split('/');
        window.documentId = parseInt(pathnameParts[pathnameParts.length -
            2], 10);

        if (isNaN(documentId)) {
            documentId = 0;
        }

        jQuery(document).ready(function () {

            function createWSConnection() {
                var wsPinger;

                try {
                    window.ws = new WebSocket('ws://' + websocketServer + ':' + websocketPort +
                      '/ws/doc/' + documentId);
                    ws.onopen = function () {
                      console.log('connection open');
                      jQuery('#unobtrusive_messages').html('');
                    };
                } catch (err) {
                    console.log(err)
                }


                ws.onmessage = function (event) {
                    var data = JSON.parse(event.data);
                    serverCommunications.receive(data);
                }
                ws.onclose = function (event) {
                    serverCommunications.connected = false;
                    clearInterval(wsPinger);
                    setTimeout(createWSConnection, 2000);
                    console.log('attempting to reconnect');
                    jQuery('#unobtrusive_messages').html(gettext('Disconnected. Attempting to reconnect...'))
                }
                wsPinger = setInterval(function () {
                    serverCommunications.send({
                        'type': 'ping'
                    })
                }, 50000);
            }
            createWSConnection();
        });



    };

    exports.serverCommunications = serverCommunications;

}).call(this);
