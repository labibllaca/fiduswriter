/* This file has been automatically generated. DO NOT EDIT IT. 
 Changes will be overwritten. Edit print-book.es6.js and run ./es6-transpile.sh */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CSLExporter = undefined;

var _statics = require('../statics');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Converts a BibDB to a DB of the CSL type.
 * @param bibDB The bibliography database to convert.
 */

var CSLExporter = exports.CSLExporter = (function () {
    function CSLExporter(bibDB) {
        _classCallCheck(this, CSLExporter);

        this.bibDB = bibDB;
        this.cslDB = {};
        this.convertAll();
    }

    _createClass(CSLExporter, [{
        key: 'convertAll',
        value: function convertAll() {
            for (var bibId in this.bibDB) {
                this.cslDB[bibId] = this.getCSLEntry(bibId);
                this.cslDB[bibId].id = bibId;
            }
        }
        /** Converts one BibDB entry to CSL format.
         * @function getCSLEntry
         * @param id The id identifying the bibliography entry.
         */

    }, {
        key: 'getCSLEntry',
        value: function getCSLEntry(id) {
            var bib = this.bibDB[id],
                cslOutput = {};

            for (var fKey in bib) {
                if (bib[fKey] !== '' && fKey in _statics.BibFieldTypes && 'csl' in _statics.BibFieldTypes[fKey]) {
                    var fType = _statics.BibFieldTypes[fKey]['type'];
                    if ('f_date' == fType) {
                        cslOutput[_statics.BibFieldTypes[fKey]['csl']] = this._reformDate(bib[fKey]);
                    } else if ('l_name' == fType) {
                        cslOutput[_statics.BibFieldTypes[fKey]['csl']] = this._reformName(bib[fKey]);
                    } else {
                        cslOutput[_statics.BibFieldTypes[fKey]['csl']] = bib[fKey];
                    }
                }
            }
            cslOutput['type'] = _statics.BibEntryTypes[bib.entry_type].csl;
            return cslOutput;
        }
    }, {
        key: '_reformDate',
        value: function _reformDate(theValue) {
            //reform date-field
            var dates = theValue.split('/'),
                datesValue = [],
                len = dates.length;
            for (var i = 0; i < len; i++) {
                var eachDate = dates[i];
                var dateParts = eachDate.split('-');
                var dateValue = [];
                var len2 = dateParts.length;
                for (var j = 0; j < len2; j++) {
                    var datePart = dateParts[j];
                    if (datePart != parseInt(datePart)) break;
                    dateValue[dateValue.length] = datePart;
                }
                datesValue[datesValue.length] = dateValue;
            }

            return {
                'date-parts': datesValue
            };
        }
    }, {
        key: '_reformName',
        value: function _reformName(theValue) {
            //reform name-field
            var names = theValue.substring(1, theValue.length - 1).split('} and {'),
                namesValue = [],
                len = names.length;
            for (var i = 0; i < len; i++) {
                var eachName = names[i];
                var nameParts = eachName.split('} {');
                var nameValue = undefined;
                if (nameParts.length > 1) {
                    nameValue = {
                        'family': nameParts[1].replace(/[{}]/g, ''),
                        'given': nameParts[0].replace(/[{}]/g, '')
                    };
                } else {
                    nameValue = {
                        'literal': nameParts[0].replace(/[{}]/g, '')
                    };
                }
                namesValue[namesValue.length] = nameValue;
            }

            return namesValue;
        }
    }]);

    return CSLExporter;
})();

},{"../statics":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @file Sets up strings for working with TeX 
 This file is automatically created using ./manage.py create_bibliography_js
*/
/** A list of special chars in Tex and their unicode equivalent. */
var texSpecialChars = exports.texSpecialChars = [{ 'unicode': "—", 'tex': "{---}" }, { 'unicode': "¡", 'tex': "{\\textexclamdown}" }, { 'unicode': "¢", 'tex': "{\\textcent}" }, { 'unicode': "£", 'tex': "{\\textsterling}" }, { 'unicode': "¥", 'tex': "{\\textyen}" }, { 'unicode': "¦", 'tex': "{\\textbrokenbar}" }, { 'unicode': "§", 'tex': "{\\textsection}" }, { 'unicode': "¨", 'tex': "{\\textasciidieresis}" }, { 'unicode': "©", 'tex': "{\\textcopyright}" }, { 'unicode': "ª", 'tex': "{\\textordfeminine}" }, { 'unicode': "«", 'tex': "{\\guillemotleft}" }, { 'unicode': "¬", 'tex': "{\\textlnot}" }, { 'unicode': "®", 'tex': "{\\textregistered}" }, { 'unicode': "¯", 'tex': "{\\textasciimacron}" }, { 'unicode': "°", 'tex': "{\\textdegree}" }, { 'unicode': "±", 'tex': "{\\textpm}" }, { 'unicode': "²", 'tex': "{\\texttwosuperior}" }, { 'unicode': "³", 'tex': "{\\textthreesuperior}" }, { 'unicode': "´", 'tex': "{\\textasciiacute}" }, { 'unicode': "µ", 'tex': "{\\textmu}" }, { 'unicode': "¶", 'tex': "{\\textparagraph}" }, { 'unicode': "·", 'tex': "{\\textperiodcentered}" }, { 'unicode': "¸", 'tex': "{\\c\\ }" }, { 'unicode': "¹", 'tex': "{\\textonesuperior}" }, { 'unicode': "º", 'tex': "{\\textordmasculine}" }, { 'unicode': "»", 'tex': "{\\guillemotright}" }, { 'unicode': "¼", 'tex': "{\\textonequarter}" }, { 'unicode': "½", 'tex': "{\\textonehalf}" }, { 'unicode': "¾", 'tex': "{\\textthreequarters}" }, { 'unicode': "¿", 'tex': "{\\textquestiondown}" }, { 'unicode': "Æ", 'tex': "{\\AE}" }, { 'unicode': "Ð", 'tex': "{\\DH}" }, { 'unicode': "×", 'tex': "{\\texttimes}" }, { 'unicode': "Þ", 'tex': "{\\TH}" }, { 'unicode': "ß", 'tex': "{\\ss}" }, { 'unicode': "æ", 'tex': "{\\ae}" }, { 'unicode': "ð", 'tex': "{\\dh}" }, { 'unicode': "÷", 'tex': "{\\textdiv}" }, { 'unicode': "þ", 'tex': "{\\th}" }, { 'unicode': "ı", 'tex': "{\\i}" }, { 'unicode': "Ŋ", 'tex': "{\\NG}" }, { 'unicode': "ŋ", 'tex': "{\\ng}" }, { 'unicode': "Œ", 'tex': "{\\OE}" }, { 'unicode': "œ", 'tex': "{\\oe}" }, { 'unicode': "ˆ", 'tex': "{\\textasciicircum}" }, { 'unicode': "˜", 'tex': "{\\~}" }, { 'unicode': "˝", 'tex': "{\\textacutedbl}" }, { 'unicode': "–", 'tex': "{\\textendash}" }, { 'unicode': "—", 'tex': "{\\textemdash}" }, { 'unicode': "―", 'tex': "{\\textemdash}" }, { 'unicode': "‖", 'tex': "{\\textbardbl}" }, { 'unicode': "‗", 'tex': "{\\textunderscore}" }, { 'unicode': "‘", 'tex': "{\\textquoteleft}" }, { 'unicode': "’", 'tex': "{\\textquoteright}" }, { 'unicode': "‚", 'tex': "{\\quotesinglbase}" }, { 'unicode': "“", 'tex': "{\\textquotedblleft}" }, { 'unicode': "”", 'tex': "{\\textquotedblright}" }, { 'unicode': "„", 'tex': "{\\quotedblbase}" }, { 'unicode': "‟", 'tex': "{\\quotedblbase}" }, { 'unicode': "†", 'tex': "{\\textdagger}" }, { 'unicode': "‡", 'tex': "{\\textdaggerdbl}" }, { 'unicode': "•", 'tex': "{\\textbullet}" }, { 'unicode': "…", 'tex': "{\\textellipsis}" }, { 'unicode': "‰", 'tex': "{\\textperthousand}" }, { 'unicode': "‹", 'tex': "{\\guilsinglleft}" }, { 'unicode': "›", 'tex': "{\\guilsinglright}" }, { 'unicode': "⁄", 'tex': "{\\textfractionsolidus}" }, { 'unicode': "€", 'tex': "{\\texteuro}" }, { 'unicode': "℃", 'tex': "{\\textcelsius}" }, { 'unicode': "№", 'tex': "{\\textnumero}" }, { 'unicode': "℗", 'tex': "{\\textcircledP}" }, { 'unicode': "℠", 'tex': "{\\textservicemark}" }, { 'unicode': "™", 'tex': "{\\texttrademark}" }, { 'unicode': "Ω", 'tex': "{\\textohm}" }, { 'unicode': "℮", 'tex': "{\\textestimated}" }, { 'unicode': "←", 'tex': "{\\textleftarrow}" }, { 'unicode': "↑", 'tex': "{\\textuparrow}" }, { 'unicode': "→", 'tex': "{\\textrightarrow}" }, { 'unicode': "↓", 'tex': "{\\textdownarrow}" }, { 'unicode': "∞", 'tex': "{\\infty}" }, { 'unicode': "∼", 'tex': "{\\~}" }, { 'unicode': "⋕", 'tex': "{\\#}" }, { 'unicode': "〈", 'tex': "{\\textlangle}" }, { 'unicode': "〉", 'tex': "{\\textrangle}" }, { 'unicode': "␣", 'tex': "{\\textvisiblespace}" }, { 'unicode': "◦", 'tex': "{\\textopenbullet}" }, { 'unicode': "✁", 'tex': "{\\%<}" }, { 'unicode': "À", 'tex': "{\\`A}" }, { 'unicode': "Á", 'tex': "{\\'A}" }, { 'unicode': "Â", 'tex': "{\\^A}" }, { 'unicode': "Ã", 'tex': "{\\~A}" }, { 'unicode': "Ä", 'tex': "{\\\"A}" }, { 'unicode': "Å", 'tex': "{\\rA}" }, { 'unicode': "Ç", 'tex': "{\\cC}" }, { 'unicode': "È", 'tex': "{\\`E}" }, { 'unicode': "É", 'tex': "{\\'E}" }, { 'unicode': "Ê", 'tex': "{\\^E}" }, { 'unicode': "Ë", 'tex': "{\\\"E}" }, { 'unicode': "Ì", 'tex': "{\\`I}" }, { 'unicode': "Í", 'tex': "{\\'I}" }, { 'unicode': "Î", 'tex': "{\\^I}" }, { 'unicode': "Ï", 'tex': "{\\\"I}" }, { 'unicode': "Ñ", 'tex': "{\\~N}" }, { 'unicode': "Ò", 'tex': "{\\`O}" }, { 'unicode': "Ó", 'tex': "{\\'O}" }, { 'unicode': "Ô", 'tex': "{\\^O}" }, { 'unicode': "Õ", 'tex': "{\\~O}" }, { 'unicode': "Ö", 'tex': "{\\\"O}" }, { 'unicode': "Ù", 'tex': "{\\`U}" }, { 'unicode': "Ú", 'tex': "{\\'U}" }, { 'unicode': "Û", 'tex': "{\\^U}" }, { 'unicode': "Ü", 'tex': "{\\\"U}" }, { 'unicode': "Ý", 'tex': "{\\'Y}" }, { 'unicode': "à", 'tex': "{\\`a}" }, { 'unicode': "á", 'tex': "{\\'a}" }, { 'unicode': "â", 'tex': "{\\^a}" }, { 'unicode': "ã", 'tex': "{\\~a}" }, { 'unicode': "ä", 'tex': "{\\\"a}" }, { 'unicode': "å", 'tex': "{\\ra}" }, { 'unicode': "ç", 'tex': "{\\cc}" }, { 'unicode': "è", 'tex': "{\\`e}" }, { 'unicode': "é", 'tex': "{\\'e}" }, { 'unicode': "ê", 'tex': "{\\^e}" }, { 'unicode': "ë", 'tex': "{\\\"e}" }, { 'unicode': "ì", 'tex': "{\\`i}" }, { 'unicode': "í", 'tex': "{\\'i}" }, { 'unicode': "î", 'tex': "{\\^i}" }, { 'unicode': "ï", 'tex': "{\\\"i}" }, { 'unicode': "ñ", 'tex': "{\\~n}" }, { 'unicode': "ò", 'tex': "{\\`o}" }, { 'unicode': "ó", 'tex': "{\\'o}" }, { 'unicode': "ô", 'tex': "{\\^o}" }, { 'unicode': "õ", 'tex': "{\\~o}" }, { 'unicode': "ö", 'tex': "{\\\"o}" }, { 'unicode': "ù", 'tex': "{\\`u}" }, { 'unicode': "ú", 'tex': "{\\'u}" }, { 'unicode': "û", 'tex': "{\\^u}" }, { 'unicode': "ü", 'tex': "{\\\"u}" }, { 'unicode': "ý", 'tex': "{\\'y}" }, { 'unicode': "ÿ", 'tex': "{\\\"y}" }, { 'unicode': "Ā", 'tex': "{\\=A}" }, { 'unicode': "ā", 'tex': "{\\=a}" }, { 'unicode': "Ă", 'tex': '{\\uA}' }, { 'unicode': "ă", 'tex': '{\\ua}' }, { 'unicode': "Ą", 'tex': "{\\kA}" }, { 'unicode': "ą", 'tex': "{\\ka}" }, { 'unicode': "Ć", 'tex': "{\\'C}" }, { 'unicode': "ć", 'tex': "{\\'c}" }, { 'unicode': "Ĉ", 'tex': "{\\^C}" }, { 'unicode': "ĉ", 'tex': "{\\^c}" }, { 'unicode': "Ċ", 'tex': "{\\.C}" }, { 'unicode': "ċ", 'tex': "{\\.c}" }, { 'unicode': "Č", 'tex': "{\\vC}" }, { 'unicode': "č", 'tex': "{\\vc}" }, { 'unicode': "Ď", 'tex': "{\\vD}" }, { 'unicode': "ď", 'tex': "{\\vd}" }, { 'unicode': "Ē", 'tex': "{\\=E}" }, { 'unicode': "ē", 'tex': "{\\=e}" }, { 'unicode': "Ĕ", 'tex': '{\\uE}' }, { 'unicode': "ĕ", 'tex': '{\\ue}' }, { 'unicode': "Ė", 'tex': "{\\.E}" }, { 'unicode': "ė", 'tex': "{\\.e}" }, { 'unicode': "Ę", 'tex': "{\\kE}" }, { 'unicode': "ę", 'tex': "{\\ke}" }, { 'unicode': "Ě", 'tex': "{\\vE}" }, { 'unicode': "ě", 'tex': "{\\ve}" }, { 'unicode': "Ĝ", 'tex': "{\\^G}" }, { 'unicode': "ĝ", 'tex': "{\\^g}" }, { 'unicode': "Ğ", 'tex': '{\\uG}' }, { 'unicode': "ğ", 'tex': '{\\ug}' }, { 'unicode': "Ġ", 'tex': "{\\.G}" }, { 'unicode': "ġ", 'tex': "{\\.g}" }, { 'unicode': "Ģ", 'tex': "{\\cG}" }, { 'unicode': "ģ", 'tex': "{\\cg}" }, { 'unicode': "Ĥ", 'tex': "{\\^H}" }, { 'unicode': "ĥ", 'tex': "{\\^h}" }, { 'unicode': "Ĩ", 'tex': "{\\~I}" }, { 'unicode': "ĩ", 'tex': "{\\~i}" }, { 'unicode': "Ī", 'tex': "{\\=I}" }, { 'unicode': "ī", 'tex': "{\\=i}" }, { 'unicode': "Ĭ", 'tex': '{\\uI}' }, { 'unicode': "ĭ", 'tex': '{\\ui}' }, { 'unicode': "Į", 'tex': "{\\kI}" }, { 'unicode': "į", 'tex': "{\\ki}" }, { 'unicode': "İ", 'tex': "{\\.I}" }, { 'unicode': "Ĵ", 'tex': "{\\^J}" }, { 'unicode': "ĵ", 'tex': "{\\^j}" }, { 'unicode': "Ķ", 'tex': "{\\cK}" }, { 'unicode': "ķ", 'tex': "{\\ck}" }, { 'unicode': "Ĺ", 'tex': "{\\'L}" }, { 'unicode': "ĺ", 'tex': "{\\'l}" }, { 'unicode': "Ļ", 'tex': "{\\cL}" }, { 'unicode': "ļ", 'tex': "{\\cl}" }, { 'unicode': "Ľ", 'tex': "{\\vL}" }, { 'unicode': "ľ", 'tex': "{\\vl}" }, { 'unicode': "Ł", 'tex': "\\\\L{}" }, { 'unicode': "ł", 'tex': "\\\\l{}" }, { 'unicode': "Ń", 'tex': "{\\'N}" }, { 'unicode': "ń", 'tex': "{\\'n}" }, { 'unicode': "Ņ", 'tex': "{\\cN}" }, { 'unicode': "ņ", 'tex': "{\\cn}" }, { 'unicode': "Ň", 'tex': "{\\vN}" }, { 'unicode': "ň", 'tex': "{\\vn}" }, { 'unicode': "Ō", 'tex': "{\\=O}" }, { 'unicode': "ō", 'tex': "{\\=o}" }, { 'unicode': "Ŏ", 'tex': '{\\uO}' }, { 'unicode': "ŏ", 'tex': '{\\uo}' }, { 'unicode': "Ő", 'tex': "{\\HO}" }, { 'unicode': "ő", 'tex': "{\\Ho}" }, { 'unicode': "Ŕ", 'tex': "{\\'R}" }, { 'unicode': "ŕ", 'tex': "{\\'r}" }, { 'unicode': "Ŗ", 'tex': "{\\cR}" }, { 'unicode': "ŗ", 'tex': "{\\cr}" }, { 'unicode': "Ř", 'tex': "{\\vR}" }, { 'unicode': "ř", 'tex': "{\\vr}" }, { 'unicode': "Ś", 'tex': "{\\'S}" }, { 'unicode': "ś", 'tex': "{\\'s}" }, { 'unicode': "Ŝ", 'tex': "{\\^S}" }, { 'unicode': "ŝ", 'tex': "{\\^s}" }, { 'unicode': "Ş", 'tex': "{\\cS}" }, { 'unicode': "ş", 'tex': "{\\cs}" }, { 'unicode': "Š", 'tex': "{\\vS}" }, { 'unicode': "š", 'tex': "{\\vs}" }, { 'unicode': "Ţ", 'tex': "{\\cT}" }, { 'unicode': "ţ", 'tex': "{\\ct}" }, { 'unicode': "Ť", 'tex': "{\\vT}" }, { 'unicode': "ť", 'tex': "{\\vt}" }, { 'unicode': "Ũ", 'tex': "{\\~U}" }, { 'unicode': "ũ", 'tex': "{\\~u}" }, { 'unicode': "Ū", 'tex': "{\\=U}" }, { 'unicode': "ū", 'tex': "{\\=u}" }, { 'unicode': "Ŭ", 'tex': '{\\uU}' }, { 'unicode': "ŭ", 'tex': '{\\uu}' }, { 'unicode': "Ű", 'tex': "{\\HU}" }, { 'unicode': "ű", 'tex': "{\\Hu}" }, { 'unicode': "Ų", 'tex': "{\\kU}" }, { 'unicode': "ų", 'tex': "{\\ku}" }, { 'unicode': "Ŵ", 'tex': "{\\^W}" }, { 'unicode': "ŵ", 'tex': "{\\^w}" }, { 'unicode': "Ŷ", 'tex': "{\\^Y}" }, { 'unicode': "ŷ", 'tex': "{\\^y}" }, { 'unicode': "Ÿ", 'tex': "{\\\"Y}" }, { 'unicode': "Ź", 'tex': "{\\'Z}" }, { 'unicode': "ź", 'tex': "{\\'z}" }, { 'unicode': "Ż", 'tex': "{\\.Z}" }, { 'unicode': "ż", 'tex': "{\\.z}" }, { 'unicode': "Ž", 'tex': "{\\vZ}" }, { 'unicode': "ž", 'tex': "{\\vz}" }, { 'unicode': "Ǎ", 'tex': "{\\vA}" }, { 'unicode': "ǎ", 'tex': "{\\va}" }, { 'unicode': "Ǐ", 'tex': "{\\vI}" }, { 'unicode': "ǐ", 'tex': "{\\vi}" }, { 'unicode': "Ǒ", 'tex': "{\\vO}" }, { 'unicode': "ǒ", 'tex': "{\\vo}" }, { 'unicode': "Ǔ", 'tex': "{\\vU}" }, { 'unicode': "ǔ", 'tex': "{\\vu}" }, { 'unicode': "Ǧ", 'tex': "{\\vG}" }, { 'unicode': "ǧ", 'tex': "{\\vg}" }, { 'unicode': "Ǩ", 'tex': "{\\vK}" }, { 'unicode': "ǩ", 'tex': "{\\vk}" }, { 'unicode': "Ǫ", 'tex': "{\\kO}" }, { 'unicode': "ǫ", 'tex': "{\\ko}" }, { 'unicode': "ǰ", 'tex': "{\\vj}" }, { 'unicode': "Ǵ", 'tex': "{\\'G}" }, { 'unicode': "ǵ", 'tex': "{\\'g}" }, { 'unicode': "Ḃ", 'tex': "{\\.B}" }, { 'unicode': "ḃ", 'tex': "{\\.b}" }, { 'unicode': "Ḅ", 'tex': "{\\dB}" }, { 'unicode': "ḅ", 'tex': "{\\db}" }, { 'unicode': "Ḇ", 'tex': "{\\bB}" }, { 'unicode': "ḇ", 'tex': "{\\bb}" }, { 'unicode': "Ḋ", 'tex': "{\\.D}" }, { 'unicode': "ḋ", 'tex': "{\\.d}" }, { 'unicode': "Ḍ", 'tex': "{\\dD}" }, { 'unicode': "ḍ", 'tex': "{\\dd}" }, { 'unicode': "Ḏ", 'tex': "{\\bD}" }, { 'unicode': "ḏ", 'tex': "{\\bd}" }, { 'unicode': "Ḑ", 'tex': "{\\cD}" }, { 'unicode': "ḑ", 'tex': "{\\cd}" }, { 'unicode': "Ḟ", 'tex': "{\\.F}" }, { 'unicode': "ḟ", 'tex': "{\\.f}" }, { 'unicode': "Ḡ", 'tex': "{\\=G}" }, { 'unicode': "ḡ", 'tex': "{\\=g}" }, { 'unicode': "Ḣ", 'tex': "{\\.H}" }, { 'unicode': "ḣ", 'tex': "{\\.h}" }, { 'unicode': "Ḥ", 'tex': "{\\dH}" }, { 'unicode': "ḥ", 'tex': "{\\dh}" }, { 'unicode': "Ḧ", 'tex': "{\\\"H}" }, { 'unicode': "ḧ", 'tex': "{\\\"h}" }, { 'unicode': "Ḩ", 'tex': "{\\cH}" }, { 'unicode': "ḩ", 'tex': "{\\ch}" }, { 'unicode': "Ḱ", 'tex': "{\\'K}" }, { 'unicode': "ḱ", 'tex': "{\\'k}" }, { 'unicode': "Ḳ", 'tex': "{\\dK}" }, { 'unicode': "ḳ", 'tex': "{\\dk}" }, { 'unicode': "Ḵ", 'tex': "{\\bK}" }, { 'unicode': "ḵ", 'tex': "{\\bk}" }, { 'unicode': "Ḷ", 'tex': "{\\dL}" }, { 'unicode': "ḷ", 'tex': "{\\dl}" }, { 'unicode': "Ḻ", 'tex': "{\\bL}" }, { 'unicode': "ḻ", 'tex': "{\\bl}" }, { 'unicode': "Ḿ", 'tex': "{\\'M}" }, { 'unicode': "ḿ", 'tex': "{\\'m}" }, { 'unicode': "Ṁ", 'tex': "{\\.M}" }, { 'unicode': "ṁ", 'tex': "{\\.m}" }, { 'unicode': "Ṃ", 'tex': "{\\dM}" }, { 'unicode': "ṃ", 'tex': "{\\dm}" }, { 'unicode': "Ṅ", 'tex': "{\\.N}" }, { 'unicode': "ṅ", 'tex': "{\\.n}" }, { 'unicode': "Ṇ", 'tex': "{\\dN}" }, { 'unicode': "ṇ", 'tex': "{\\dn}" }, { 'unicode': "Ṉ", 'tex': "{\\bN}" }, { 'unicode': "ṉ", 'tex': "{\\bn}" }, { 'unicode': "Ṕ", 'tex': "{\\'P}" }, { 'unicode': "ṕ", 'tex': "{\\'p}" }, { 'unicode': "Ṗ", 'tex': "{\\.P}" }, { 'unicode': "ṗ", 'tex': "{\\.p}" }, { 'unicode': "Ṙ", 'tex': "{\\.R}" }, { 'unicode': "ṙ", 'tex': "{\\.r}" }, { 'unicode': "Ṛ", 'tex': "{\\dR}" }, { 'unicode': "ṛ", 'tex': "{\\dr}" }, { 'unicode': "Ṟ", 'tex': "{\\bR}" }, { 'unicode': "ṟ", 'tex': "{\\br}" }, { 'unicode': "Ṡ", 'tex': "{\\.S}" }, { 'unicode': "ṡ", 'tex': "{\\.s}" }, { 'unicode': "Ṣ", 'tex': "{\\dS}" }, { 'unicode': "ṣ", 'tex': "{\\ds}" }, { 'unicode': "Ṫ", 'tex': "{\\.T}" }, { 'unicode': "ṫ", 'tex': "{\\.t}" }, { 'unicode': "Ṭ", 'tex': "{\\dT}" }, { 'unicode': "ṭ", 'tex': "{\\dt}" }, { 'unicode': "Ṯ", 'tex': "{\\bT}" }, { 'unicode': "ṯ", 'tex': "{\\bt}" }, { 'unicode': "Ṽ", 'tex': "{\\~V}" }, { 'unicode': "ṽ", 'tex': "{\\~v}" }, { 'unicode': "Ṿ", 'tex': "{\\dV}" }, { 'unicode': "ṿ", 'tex': "{\\dv}" }, { 'unicode': "Ẁ", 'tex': "{\\`W}" }, { 'unicode': "ẁ", 'tex': "{\\`w}" }, { 'unicode': "Ẃ", 'tex': "{\\'W}" }, { 'unicode': "ẃ", 'tex': "{\\'w}" }, { 'unicode': "Ẅ", 'tex': "{\\\"W}" }, { 'unicode': "ẅ", 'tex': "{\\\"w}" }, { 'unicode': "Ẇ", 'tex': "{\\.W}" }, { 'unicode': "ẇ", 'tex': "{\\.w}" }, { 'unicode': "Ẉ", 'tex': "{\\dW}" }, { 'unicode': "ẉ", 'tex': "{\\dw}" }, { 'unicode': "Ẋ", 'tex': "{\\.X}" }, { 'unicode': "ẋ", 'tex': "{\\.x}" }, { 'unicode': "Ẍ", 'tex': "{\\\"X}" }, { 'unicode': "ẍ", 'tex': "{\\\"x}" }, { 'unicode': "Ẏ", 'tex': "{\\.Y}" }, { 'unicode': "ẏ", 'tex': "{\\.y}" }, { 'unicode': "Ẑ", 'tex': "{\\^Z}" }, { 'unicode': "ẑ", 'tex': "{\\^z}" }, { 'unicode': "Ẓ", 'tex': "{\\dZ}" }, { 'unicode': "ẓ", 'tex': "{\\dz}" }, { 'unicode': "Ẕ", 'tex': "{\\bZ}" }, { 'unicode': "ẕ", 'tex': "{\\bz}" }, { 'unicode': "ẖ", 'tex': "{\\bh}" }, { 'unicode': "ẗ", 'tex': "{\\\"t}" }, { 'unicode': "Ạ", 'tex': "{\\dA}" }, { 'unicode': "ạ", 'tex': "{\\da}" }, { 'unicode': "Ẹ", 'tex': "{\\dE}" }, { 'unicode': "ẹ", 'tex': "{\\de}" }, { 'unicode': "Ẽ", 'tex': "{\\~E}" }, { 'unicode': "ẽ", 'tex': "{\\~e}" }, { 'unicode': "Ị", 'tex': "{\\dI}" }, { 'unicode': "ị", 'tex': "{\\di}" }, { 'unicode': "Ọ", 'tex': "{\\dO}" }, { 'unicode': "ọ", 'tex': "{\\do}" }, { 'unicode': "Ụ", 'tex': "{\\dU}" }, { 'unicode': "ụ", 'tex': "{\\du}" }, { 'unicode': "Ỳ", 'tex': "{\\`Y}" }, { 'unicode': "ỳ", 'tex': "{\\`y}" }, { 'unicode': "Ỵ", 'tex': "{\\dY}" }, { 'unicode': "ỵ", 'tex': "{\\dy}" }, { 'unicode': "Ỹ", 'tex': "{\\~Y}" }, { 'unicode': "ỹ", 'tex': "{\\~y}" }, { 'unicode': "£", 'tex': "{\\pounds}" }, { 'unicode': "„", 'tex': "{\\glqq}" }, { 'unicode': "“", 'tex': "{\\grqq}" }, { 'unicode': "À", 'tex': "{\\`{A}}" }, { 'unicode': "Á", 'tex': "{\\'{A}}" }, { 'unicode': "Â", 'tex': "{\\^{A}}" }, { 'unicode': "Ã", 'tex': "{\\~{A}}" }, { 'unicode': "Ä", 'tex': "{\\\"{A}}" }, { 'unicode': "Å", 'tex': "{\\r{A}}" }, { 'unicode': "Ç", 'tex': "{\\c{C}}" }, { 'unicode': "È", 'tex': "{\\`{E}}" }, { 'unicode': "É", 'tex': "{\\'{E}}" }, { 'unicode': "Ê", 'tex': "{\\^{E}}" }, { 'unicode': "Ë", 'tex': "{\\\"{E}}" }, { 'unicode': "Ì", 'tex': "{\\`{I}}" }, { 'unicode': "Í", 'tex': "{\\'{I}}" }, { 'unicode': "Î", 'tex': "{\\^{I}}" }, { 'unicode': "Ï", 'tex': "{\\\"{I}}" }, { 'unicode': "Ñ", 'tex': "{\\~{N}}" }, { 'unicode': "Ò", 'tex': "{\\`{O}}" }, { 'unicode': "Ó", 'tex': "{\\'{O}}" }, { 'unicode': "Ô", 'tex': "{\\^{O}}" }, { 'unicode': "Õ", 'tex': "{\\~{O}}" }, { 'unicode': "Ö", 'tex': "{\\\"{O}}" }, { 'unicode': "Ù", 'tex': "{\\`{U}}" }, { 'unicode': "Ú", 'tex': "{\\'{U}}" }, { 'unicode': "Û", 'tex': "{\\^{U}}" }, { 'unicode': "Ü", 'tex': "{\\\"{U}}" }, { 'unicode': "Ý", 'tex': "{\\'{Y}}" }, { 'unicode': "à", 'tex': "{\\`{a}}" }, { 'unicode': "á", 'tex': "{\\'{a}}" }, { 'unicode': "â", 'tex': "{\\^{a}}" }, { 'unicode': "ã", 'tex': "{\\~{a}}" }, { 'unicode': "ä", 'tex': "{\\\"{a}}" }, { 'unicode': "å", 'tex': "{\\r{a}}" }, { 'unicode': "ç", 'tex': "{\\c{c}}" }, { 'unicode': "è", 'tex': "{\\`{e}}" }, { 'unicode': "é", 'tex': "{\\'{e}}" }, { 'unicode': "ê", 'tex': "{\\^{e}}" }, { 'unicode': "ë", 'tex': "{\\\"{e}}" }, { 'unicode': "ì", 'tex': "{\\`{i}}" }, { 'unicode': "í", 'tex': "{\\'{i}}" }, { 'unicode': "î", 'tex': "{\\^{i}}" }, { 'unicode': "ï", 'tex': "{\\\"{i}}" }, { 'unicode': "ñ", 'tex': "{\\~{n}}" }, { 'unicode': "ò", 'tex': "{\\`{o}}" }, { 'unicode': "ó", 'tex': "{\\'{o}}" }, { 'unicode': "ô", 'tex': "{\\^{o}}" }, { 'unicode': "õ", 'tex': "{\\~{o}}" }, { 'unicode': "ö", 'tex': "{\\\"{o}}" }, { 'unicode': "ù", 'tex': "{\\`{u}}" }, { 'unicode': "ú", 'tex': "{\\'{u}}" }, { 'unicode': "û", 'tex': "{\\^{u}}" }, { 'unicode': "ü", 'tex': "{\\\"{u}}" }, { 'unicode': "ý", 'tex': "{\\'{y}}" }, { 'unicode': "ÿ", 'tex': "{\\\"{y}}" }, { 'unicode': "Ā", 'tex': "{\\={A}}" }, { 'unicode': "ā", 'tex': "{\\={a}}" }, { 'unicode': "Ă", 'tex': '{\\u{A}}' }, { 'unicode': "ă", 'tex': '{\\u{a}}' }, { 'unicode': "Ą", 'tex': "{\\k{A}}" }, { 'unicode': "ą", 'tex': "{\\k{a}}" }, { 'unicode': "Ć", 'tex': "{\\'{C}}" }, { 'unicode': "ć", 'tex': "{\\'{c}}" }, { 'unicode': "Ĉ", 'tex': "{\\^{C}}" }, { 'unicode': "ĉ", 'tex': "{\\^{c}}" }, { 'unicode': "Ċ", 'tex': "{\\.{C}}" }, { 'unicode': "ċ", 'tex': "{\\.{c}}" }, { 'unicode': "Č", 'tex': "{\\v{C}}" }, { 'unicode': "č", 'tex': "{\\v{c}}" }, { 'unicode': "Ď", 'tex': "{\\v{D}}" }, { 'unicode': "ď", 'tex': "{\\v{d}}" }, { 'unicode': "Ē", 'tex': "{\\={E}}" }, { 'unicode': "ē", 'tex': "{\\={e}}" }, { 'unicode': "Ĕ", 'tex': '{\\u{E}}' }, { 'unicode': "ĕ", 'tex': '{\\u{e}}' }, { 'unicode': "Ė", 'tex': "{\\.{E}}" }, { 'unicode': "ė", 'tex': "{\\.{e}}" }, { 'unicode': "Ę", 'tex': "{\\k{E}}" }, { 'unicode': "ę", 'tex': "{\\k{e}}" }, { 'unicode': "Ě", 'tex': "{\\v{E}}" }, { 'unicode': "ě", 'tex': "{\\v{e}}" }, { 'unicode': "Ĝ", 'tex': "{\\^{G}}" }, { 'unicode': "ĝ", 'tex': "{\\^{g}}" }, { 'unicode': "Ğ", 'tex': '{\\u{G}}' }, { 'unicode': "ğ", 'tex': '{\\u{g}}' }, { 'unicode': "Ġ", 'tex': "{\\.{G}}" }, { 'unicode': "ġ", 'tex': "{\\.{g}}" }, { 'unicode': "Ģ", 'tex': "{\\c{G}}" }, { 'unicode': "ģ", 'tex': "{\\c{g}}" }, { 'unicode': "Ĥ", 'tex': "{\\^{H}}" }, { 'unicode': "ĥ", 'tex': "{\\^{h}}" }, { 'unicode': "Ĩ", 'tex': "{\\~{I}}" }, { 'unicode': "ĩ", 'tex': "{\\~{i}}" }, { 'unicode': "Ī", 'tex': "{\\={I}}" }, { 'unicode': "ī", 'tex': "{\\={i}}" }, { 'unicode': "Ĭ", 'tex': '{\\u{I}}' }, { 'unicode': "ĭ", 'tex': '{\\u{i}}' }, { 'unicode': "Į", 'tex': "{\\k{I}}" }, { 'unicode': "į", 'tex': "{\\k{i}}" }, { 'unicode': "İ", 'tex': "{\\.{I}}" }, { 'unicode': "Ĵ", 'tex': "{\\^{J}}" }, { 'unicode': "ĵ", 'tex': "{\\^{j}}" }, { 'unicode': "Ķ", 'tex': "{\\c{K}}" }, { 'unicode': "ķ", 'tex': "{\\c{k}}" }, { 'unicode': "Ĺ", 'tex': "{\\'{L}}" }, { 'unicode': "ĺ", 'tex': "{\\'{l}}" }, { 'unicode': "Ļ", 'tex': "{\\c{L}}" }, { 'unicode': "ļ", 'tex': "{\\c{l}}" }, { 'unicode': "Ľ", 'tex': "{\\v{L}}" }, { 'unicode': "ľ", 'tex': "{\\v{l}}" }, { 'unicode': "Ł", 'tex': "{\\L{}}" }, { 'unicode': "ł", 'tex': "{\\l{}}" }, { 'unicode': "Ń", 'tex': "{\\'{N}}" }, { 'unicode': "ń", 'tex': "{\\'{n}}" }, { 'unicode': "Ņ", 'tex': "{\\c{N}}" }, { 'unicode': "ņ", 'tex': "{\\c{n}}" }, { 'unicode': "Ň", 'tex': "{\\v{N}}" }, { 'unicode': "ň", 'tex': "{\\v{n}}" }, { 'unicode': "Ō", 'tex': "{\\={O}}" }, { 'unicode': "ō", 'tex': "{\\={o}}" }, { 'unicode': "Ŏ", 'tex': '{\\u{O}}' }, { 'unicode': "ŏ", 'tex': '{\\u{o}}' }, { 'unicode': "Ő", 'tex': "{\\H{O}}" }, { 'unicode': "ő", 'tex': "{\\H{o}}" }, { 'unicode': "Ŕ", 'tex': "{\\'{R}}" }, { 'unicode': "ŕ", 'tex': "{\\'{r}}" }, { 'unicode': "Ŗ", 'tex': "{\\c{R}}" }, { 'unicode': "ŗ", 'tex': "{\\c{r}}" }, { 'unicode': "Ř", 'tex': "{\\v{R}}" }, { 'unicode': "ř", 'tex': "{\\v{r}}" }, { 'unicode': "Ś", 'tex': "{\\'{S}}" }, { 'unicode': "ś", 'tex': "{\\'{s}}" }, { 'unicode': "Ŝ", 'tex': "{\\^{S}}" }, { 'unicode': "ŝ", 'tex': "{\\^{s}}" }, { 'unicode': "Ş", 'tex': "{\\c{S}}" }, { 'unicode': "ş", 'tex': "{\\c{s}}" }, { 'unicode': "Š", 'tex': "{\\v{S}}" }, { 'unicode': "š", 'tex': "{\\v{s}}" }, { 'unicode': "Ţ", 'tex': "{\\c{T}}" }, { 'unicode': "ţ", 'tex': "{\\c{t}}" }, { 'unicode': "Ť", 'tex': "{\\v{T}}" }, { 'unicode': "ť", 'tex': "{\\v{t}}" }, { 'unicode': "Ũ", 'tex': "{\\~{U}}" }, { 'unicode': "ũ", 'tex': "{\\~{u}}" }, { 'unicode': "Ū", 'tex': "{\\={U}}" }, { 'unicode': "ū", 'tex': "{\\={u}}" }, { 'unicode': "Ŭ", 'tex': '{\\u{U}}' }, { 'unicode': "ŭ", 'tex': '{\\u{u}}' }, { 'unicode': "Ű", 'tex': "{\\H{U}}" }, { 'unicode': "ű", 'tex': "{\\H{u}}" }, { 'unicode': "Ų", 'tex': "{\\k{U}}" }, { 'unicode': "ų", 'tex': "{\\k{u}}" }, { 'unicode': "Ŵ", 'tex': "{\\^{W}}" }, { 'unicode': "ŵ", 'tex': "{\\^{w}}" }, { 'unicode': "Ŷ", 'tex': "{\\^{Y}}" }, { 'unicode': "ŷ", 'tex': "{\\^{y}}" }, { 'unicode': "Ÿ", 'tex': "{\\\"{Y}}" }, { 'unicode': "Ź", 'tex': "{\\'{Z}}" }, { 'unicode': "ź", 'tex': "{\\'{z}}" }, { 'unicode': "Ż", 'tex': "{\\.{Z}}" }, { 'unicode': "ż", 'tex': "{\\.{z}}" }, { 'unicode': "Ž", 'tex': "{\\v{Z}}" }, { 'unicode': "ž", 'tex': "{\\v{z}}" }, { 'unicode': "Ǎ", 'tex': "{\\v{A}}" }, { 'unicode': "ǎ", 'tex': "{\\v{a}}" }, { 'unicode': "Ǐ", 'tex': "{\\v{I}}" }, { 'unicode': "ǐ", 'tex': "{\\v{i}}" }, { 'unicode': "Ǒ", 'tex': "{\\v{O}}" }, { 'unicode': "ǒ", 'tex': "{\\v{o}}" }, { 'unicode': "Ǔ", 'tex': "{\\v{U}}" }, { 'unicode': "ǔ", 'tex': "{\\v{u}}" }, { 'unicode': "Ǧ", 'tex': "{\\v{G}}" }, { 'unicode': "ǧ", 'tex': "{\\v{g}}" }, { 'unicode': "Ǩ", 'tex': "{\\v{K}}" }, { 'unicode': "ǩ", 'tex': "{\\v{k}}" }, { 'unicode': "Ǫ", 'tex': "{\\k{O}}" }, { 'unicode': "ǫ", 'tex': "{\\k{o}}" }, { 'unicode': "ǰ", 'tex': "{\\v{j}}" }, { 'unicode': "Ǵ", 'tex': "{\\'{G}}" }, { 'unicode': "ǵ", 'tex': "{\\'{g}}" }, { 'unicode': "Ḃ", 'tex': "{\\.{B}}" }, { 'unicode': "ḃ", 'tex': "{\\.{b}}" }, { 'unicode': "Ḅ", 'tex': "{\\d{B}}" }, { 'unicode': "ḅ", 'tex': "{\\d{b}}" }, { 'unicode': "Ḇ", 'tex': "{\\b{B}}" }, { 'unicode': "ḇ", 'tex': "{\\b{b}}" }, { 'unicode': "Ḋ", 'tex': "{\\.{D}}" }, { 'unicode': "ḋ", 'tex': "{\\.{d}}" }, { 'unicode': "Ḍ", 'tex': "{\\d{D}}" }, { 'unicode': "ḍ", 'tex': "{\\d{d}}" }, { 'unicode': "Ḏ", 'tex': "{\\b{D}}" }, { 'unicode': "ḏ", 'tex': "{\\b{d}}" }, { 'unicode': "Ḑ", 'tex': "{\\c{D}}" }, { 'unicode': "ḑ", 'tex': "{\\c{d}}" }, { 'unicode': "Ḟ", 'tex': "{\\.{F}}" }, { 'unicode': "ḟ", 'tex': "{\\.{f}}" }, { 'unicode': "Ḡ", 'tex': "{\\={G}}" }, { 'unicode': "ḡ", 'tex': "{\\={g}}" }, { 'unicode': "Ḣ", 'tex': "{\\.{H}}" }, { 'unicode': "ḣ", 'tex': "{\\.{h}}" }, { 'unicode': "Ḥ", 'tex': "{\\d{H}}" }, { 'unicode': "ḥ", 'tex': "{\\d{h}}" }, { 'unicode': "Ḧ", 'tex': "{\\\"{H}}" }, { 'unicode': "ḧ", 'tex': "{\\\"{h}}" }, { 'unicode': "Ḩ", 'tex': "{\\c{H}}" }, { 'unicode': "ḩ", 'tex': "{\\c{h}}" }, { 'unicode': "Ḱ", 'tex': "{\\'{K}}" }, { 'unicode': "ḱ", 'tex': "{\\'{k}}" }, { 'unicode': "Ḳ", 'tex': "{\\d{K}}" }, { 'unicode': "ḳ", 'tex': "{\\d{k}}" }, { 'unicode': "Ḵ", 'tex': "{\\b{K}}" }, { 'unicode': "ḵ", 'tex': "{\\b{k}}" }, { 'unicode': "Ḷ", 'tex': "{\\d{L}}" }, { 'unicode': "ḷ", 'tex': "{\\d{l}}" }, { 'unicode': "Ḻ", 'tex': "{\\b{L}}" }, { 'unicode': "ḻ", 'tex': "{\\b{l}}" }, { 'unicode': "Ḿ", 'tex': "{\\'{M}}" }, { 'unicode': "ḿ", 'tex': "{\\'{m}}" }, { 'unicode': "Ṁ", 'tex': "{\\.{M}}" }, { 'unicode': "ṁ", 'tex': "{\\.{m}}" }, { 'unicode': "Ṃ", 'tex': "{\\d{M}}" }, { 'unicode': "ṃ", 'tex': "{\\d{m}}" }, { 'unicode': "Ṅ", 'tex': "{\\.{N}}" }, { 'unicode': "ṅ", 'tex': "{\\.{n}}" }, { 'unicode': "Ṇ", 'tex': "{\\d{N}}" }, { 'unicode': "ṇ", 'tex': "{\\d{n}}" }, { 'unicode': "Ṉ", 'tex': "{\\b{N}}" }, { 'unicode': "ṉ", 'tex': "{\\b{n}}" }, { 'unicode': "Ṕ", 'tex': "{\\'{P}}" }, { 'unicode': "ṕ", 'tex': "{\\'{p}}" }, { 'unicode': "Ṗ", 'tex': "{\\.{P}}" }, { 'unicode': "ṗ", 'tex': "{\\.{p}}" }, { 'unicode': "Ṙ", 'tex': "{\\.{R}}" }, { 'unicode': "ṙ", 'tex': "{\\.{r}}" }, { 'unicode': "Ṛ", 'tex': "{\\d{R}}" }, { 'unicode': "ṛ", 'tex': "{\\d{r}}" }, { 'unicode': "Ṟ", 'tex': "{\\b{R}}" }, { 'unicode': "ṟ", 'tex': "{\\b{r}}" }, { 'unicode': "Ṡ", 'tex': "{\\.{S}}" }, { 'unicode': "ṡ", 'tex': "{\\.{s}}" }, { 'unicode': "Ṣ", 'tex': "{\\d{S}}" }, { 'unicode': "ṣ", 'tex': "{\\d{s}}" }, { 'unicode': "Ṫ", 'tex': "{\\.{T}}" }, { 'unicode': "ṫ", 'tex': "{\\.{t}}" }, { 'unicode': "Ṭ", 'tex': "{\\d{T}}" }, { 'unicode': "ṭ", 'tex': "{\\d{t}}" }, { 'unicode': "Ṯ", 'tex': "{\\b{T}}" }, { 'unicode': "ṯ", 'tex': "{\\b{t}}" }, { 'unicode': "Ṽ", 'tex': "{\\~{V}}" }, { 'unicode': "ṽ", 'tex': "{\\~{v}}" }, { 'unicode': "Ṿ", 'tex': "{\\d{V}}" }, { 'unicode': "ṿ", 'tex': "{\\d{v}}" }, { 'unicode': "Ẁ", 'tex': "{\\`{W}}" }, { 'unicode': "ẁ", 'tex': "{\\`{w}}" }, { 'unicode': "Ẃ", 'tex': "{\\'{W}}" }, { 'unicode': "ẃ", 'tex': "{\\'{w}}" }, { 'unicode': "Ẅ", 'tex': "{\\\"{W}}" }, { 'unicode': "ẅ", 'tex': "{\\\"{w}}" }, { 'unicode': "Ẇ", 'tex': "{\\.{W}}" }, { 'unicode': "ẇ", 'tex': "{\\.{w}}" }, { 'unicode': "Ẉ", 'tex': "{\\d{W}}" }, { 'unicode': "ẉ", 'tex': "{\\d{w}}" }, { 'unicode': "Ẋ", 'tex': "{\\.{X}}" }, { 'unicode': "ẋ", 'tex': "{\\.{x}}" }, { 'unicode': "Ẍ", 'tex': "{\\\"{X}}" }, { 'unicode': "ẍ", 'tex': "{\\\"{x}}" }, { 'unicode': "Ẏ", 'tex': "{\\.{Y}}" }, { 'unicode': "ẏ", 'tex': "{\\.{y}}" }, { 'unicode': "Ẑ", 'tex': "{\\^{Z}}" }, { 'unicode': "ẑ", 'tex': "{\\^{z}}" }, { 'unicode': "Ẓ", 'tex': "{\\d{Z}}" }, { 'unicode': "ẓ", 'tex': "{\\d{z}}" }, { 'unicode': "Ẕ", 'tex': "{\\b{Z}}" }, { 'unicode': "ẕ", 'tex': "{\\b{z}}" }, { 'unicode': "ẖ", 'tex': "{\\b{h}}" }, { 'unicode': "ẗ", 'tex': "{\\\"{t}}" }, { 'unicode': "Ạ", 'tex': "{\\d{A}}" }, { 'unicode': "ạ", 'tex': "{\\d{a}}" }, { 'unicode': "Ẹ", 'tex': "{\\d{E}}" }, { 'unicode': "ẹ", 'tex': "{\\d{e}}" }, { 'unicode': "Ẽ", 'tex': "{\\~{E}}" }, { 'unicode': "ẽ", 'tex': "{\\~{e}}" }, { 'unicode': "Ị", 'tex': "{\\d{I}}" }, { 'unicode': "ị", 'tex': "{\\d{i}}" }, { 'unicode': "Ọ", 'tex': "{\\d{O}}" }, { 'unicode': "ọ", 'tex': "{\\d{o}}" }, { 'unicode': "Ụ", 'tex': "{\\d{U}}" }, { 'unicode': "ụ", 'tex': "{\\d{u}}" }, { 'unicode': "Ỳ", 'tex': "{\\`{Y}}" }, { 'unicode': "ỳ", 'tex': "{\\`{y}}" }, { 'unicode': "Ỵ", 'tex': "{\\d{Y}}" }, { 'unicode': "ỵ", 'tex': "{\\d{y}}" }, { 'unicode': "Ỹ", 'tex': "{\\~{Y}}" }, { 'unicode': "ỹ", 'tex': "{\\~{y}}" }];
/** A list of field types of Bibligraphy DB with lookup by field name. */
var BibFieldTypes = exports.BibFieldTypes = {
  abstract: {
    'id': 1, 'type': 'f_literal', 'name': 'abstract', 'biblatex': 'abstract', 'csl': 'abstract', 'title': gettext('Abstract') },
  addendum: {
    'id': 2, 'type': 'f_literal', 'name': 'addendum', 'biblatex': 'addendum', 'title': gettext('Addendum') },
  afterword: {
    'id': 3, 'type': 'l_name', 'name': 'afterword', 'biblatex': 'afterword', 'title': gettext('Afterword') },
  annotation: {
    'id': 4, 'type': 'f_literal', 'name': 'annotation', 'biblatex': 'annotation', 'title': gettext('Annotation') },
  annotator: {
    'id': 5, 'type': 'l_name', 'name': 'annotator', 'biblatex': 'annotator', 'title': gettext('Annotations author(s)') },
  author: {
    'id': 6, 'type': 'l_name', 'name': 'author', 'biblatex': 'author', 'csl': 'author', 'title': gettext('Author(s)') },
  authortype: {
    'id': 7, 'type': 'f_key', 'name': 'authortype', 'biblatex': 'authortype', 'title': gettext('Author type') },
  bookauthor: {
    'id': 8, 'type': 'l_name', 'name': 'bookauthor', 'biblatex': 'bookauthor', 'csl': 'container-author', 'title': gettext('Book author(s)') },
  bookpagination: {
    'id': 9, 'type': 'f_key', 'name': 'bookpagination', 'biblatex': 'bookpagination', 'title': gettext('Book pagination'), 'localization': 'pagination' },
  booksubtitle: {
    'id': 10, 'type': 'f_literal', 'name': 'booksubtitle', 'biblatex': 'booksubtitle', 'title': gettext('Book subtitle') },
  booktitle: {
    'id': 11, 'type': 'f_literal', 'name': 'booktitle', 'biblatex': 'booktitle', 'csl': 'container-title', 'title': gettext('Book title') },
  booktitleaddon: {
    'id': 12, 'type': 'f_literal', 'name': 'booktitleaddon', 'biblatex': 'booktitleaddon', 'title': gettext('Book title annex') },
  chapter: {
    'id': 13, 'type': 'f_literal', 'name': 'chapter', 'biblatex': 'chapter', 'csl': 'chapter-number', 'title': gettext('Chapter or section') },
  commentator: {
    'id': 14, 'type': 'l_name', 'name': 'commentator', 'biblatex': 'commentator', 'title': gettext('Author(s) of a commentary') },
  date: {
    'id': 15, 'type': 'f_date', 'name': 'date', 'biblatex': 'date', 'csl': 'issued', 'title': gettext('Publication date') },
  doi: {
    'id': 16, 'type': 'f_verbatim', 'name': 'doi', 'biblatex': 'doi', 'csl': 'DOI', 'title': gettext('Digital Object Identifier') },
  edition: {
    'id': 17, 'type': 'f_integer', 'name': 'edition', 'biblatex': 'edition', 'csl': 'edition', 'title': gettext('Edition') },
  editor: {
    'id': 18, 'type': 'l_name', 'name': 'editor', 'biblatex': 'editor', 'csl': 'editor', 'title': gettext('Editor(s)') },
  editora: {
    'id': 19, 'type': 'l_name', 'name': 'editora', 'biblatex': 'editora', 'title': gettext('Secondary editor') },
  editorb: {
    'id': 20, 'type': 'l_name', 'name': 'editorb', 'biblatex': 'editorb', 'title': gettext('Secondary editor 2') },
  editorc: {
    'id': 21, 'type': 'l_name', 'name': 'editorc', 'biblatex': 'editorc', 'title': gettext('Secondary editor 3') },
  editortype: {
    'id': 22, 'type': 'f_key', 'name': 'editortype', 'biblatex': 'editortype', 'title': gettext('Role of editor(s)') },
  editoratype: {
    'id': 23, 'type': 'f_key', 'name': 'editoratype', 'biblatex': 'editoratype', 'title': gettext('Role of secondary editor') },
  editorbtype: {
    'id': 24, 'type': 'f_key', 'name': 'editorbtype', 'biblatex': 'editorbtype', 'title': gettext('Role of secondary editor 2') },
  editorctype: {
    'id': 25, 'type': 'f_key', 'name': 'editorctype', 'biblatex': 'editorctype', 'title': gettext('Role of secondary editor 3') },
  eid: {
    'id': 26, 'type': 'f_literal', 'name': 'eid', 'biblatex': 'eid', 'title': gettext('Electronic identifier of an article') },
  entrysubtype: {
    'id': 27, 'type': 'f_literal', 'name': 'entrysubtype', 'biblatex': 'entrysubtype', 'title': gettext('Entry subtype') },
  eprint: {
    'id': 28, 'type': 'f_verbatim', 'name': 'eprint', 'biblatex': 'eprint', 'title': gettext('Electronic identifier of an online publication') },
  eprintclass: {
    'id': 29, 'type': 'l_literal', 'name': 'eprintclass', 'biblatex': 'eprintclass', 'title': gettext('Additional information to an online publication') },
  eprinttype: {
    'id': 30, 'type': 'f_literal', 'name': 'eprinttype', 'biblatex': 'eprinttype', 'title': gettext('Eprint identifier type') },
  eventdate: {
    'id': 31, 'type': 'f_date', 'name': 'eventdate', 'biblatex': 'eventdate', 'csl': 'event-date', 'title': gettext('Event date') },
  eventtitle: {
    'id': 32, 'type': 'f_literal', 'name': 'eventtitle', 'biblatex': 'eventtitle', 'csl': 'event', 'title': gettext('Event title') },
  file: {
    'id': 33, 'type': 'f_verbatim', 'name': 'file', 'biblatex': 'file', 'title': gettext('Local link to the work') },
  foreword: {
    'id': 34, 'type': 'l_name', 'name': 'foreword', 'biblatex': 'foreword', 'title': gettext('Foreword author(s)') },
  holder: {
    'id': 35, 'type': 'l_name', 'name': 'holder', 'biblatex': 'holder', 'title': gettext('Patent holder(s)') },
  howpublished: {
    'id': 36, 'type': 'f_literal', 'name': 'howpublished', 'biblatex': 'howpublished', 'csl': 'medium', 'title': gettext('Publication notice') },
  indextitle: {
    'id': 37, 'type': 'f_literal', 'name': 'indextitle', 'biblatex': 'indextitle', 'title': gettext('Title for indexing') },
  institution: {
    'id': 38, 'type': 'l_literal', 'name': 'institution', 'biblatex': 'institution', 'title': gettext('Institution') },
  introduction: {
    'id': 39, 'type': 'l_name', 'name': 'introduction', 'biblatex': 'introduction', 'title': gettext('Author(s) of an introduction to the work') },
  isan: {
    'id': 40, 'type': 'f_literal', 'name': 'isan', 'biblatex': 'isan', 'title': gettext('ISAN') },
  isbn: {
    'id': 41, 'type': 'f_literal', 'name': 'isbn', 'biblatex': 'isbn', 'csl': 'ISBN', 'title': gettext('ISBN') },
  ismn: {
    'id': 42, 'type': 'f_literal', 'name': 'ismn', 'biblatex': 'ismn', 'title': gettext('ISMN') },
  isrn: {
    'id': 43, 'type': 'f_literal', 'name': 'isrn', 'biblatex': 'isrn', 'title': gettext('ISRN') },
  issn: {
    'id': 44, 'type': 'f_literal', 'name': 'issn', 'biblatex': 'issn', 'csl': 'ISSN', 'title': gettext('ISSN') },
  issue: {
    'id': 45, 'type': 'f_literal', 'name': 'issue', 'biblatex': 'issue', 'csl': 'issue', 'title': gettext('Issue') },
  issuesubtitle: {
    'id': 46, 'type': 'f_literal', 'name': 'issuesubtitle', 'biblatex': 'issuesubtitle', 'title': gettext('Issue subtitle') },
  issuetitle: {
    'id': 47, 'type': 'f_literal', 'name': 'issuetitle', 'biblatex': 'issuetitle', 'title': gettext('Issue title') },
  iswc: {
    'id': 48, 'type': 'f_literal', 'name': 'iswc', 'biblatex': 'iswc', 'title': gettext('ISWC') },
  journalsubtitle: {
    'id': 49, 'type': 'f_literal', 'name': 'journalsubtitle', 'biblatex': 'journalsubtitle', 'title': gettext('Subtitle of publication') },
  journaltitle: {
    'id': 50, 'type': 'f_literal', 'name': 'journaltitle', 'biblatex': 'journaltitle', 'csl': 'container-title', 'title': gettext('Title of publication') },
  label: {
    'id': 51, 'type': 'f_literal', 'name': 'label', 'biblatex': 'label', 'title': gettext('Label') },
  language: {
    'id': 52, 'type': 'l_key', 'name': 'language', 'biblatex': 'language', 'csl': 'language', 'title': gettext('Language(s)') },
  library: {
    'id': 53, 'type': 'f_literal', 'name': 'library', 'biblatex': 'library', 'title': gettext('Library information') },
  location: {
    'id': 54, 'type': 'l_literal', 'name': 'location', 'biblatex': 'location', 'csl': 'publisher-place', 'title': gettext('Location(s) of publication') },
  mainsubtitle: {
    'id': 55, 'type': 'f_literal', 'name': 'mainsubtitle', 'biblatex': 'mainsubtitle', 'title': gettext('Main subtitle') },
  maintitle: {
    'id': 56, 'type': 'f_literal', 'name': 'maintitle', 'biblatex': 'maintitle', 'title': gettext('Maintitle') },
  maintitleaddon: {
    'id': 57, 'type': 'f_literal', 'name': 'maintitleaddon', 'biblatex': 'maintitleaddon', 'title': gettext('Annex to the maintitle') },
  nameaddon: {
    'id': 58, 'type': 'f_literal', 'name': 'nameaddon', 'biblatex': 'nameaddon', 'title': gettext('author name addon') },
  note: {
    'id': 59, 'type': 'f_literal', 'name': 'note', 'biblatex': 'note', 'csl': 'note', 'title': gettext('Note') },
  number: {
    'id': 60, 'type': 'f_literal', 'name': 'number', 'biblatex': 'number', 'csl': 'number', 'title': gettext('Number of the work in a series') },
  organization: {
    'id': 61, 'type': 'l_literal', 'name': 'organization', 'biblatex': 'organization', 'title': gettext('Organization(s)') },
  origdate: {
    'id': 62, 'type': 'f_date', 'name': 'origdate', 'biblatex': 'origdate', 'csl': 'original-date', 'title': gettext('Publication date of the original work') },
  origlanguage: {
    'id': 63, 'type': 'f_key', 'name': 'origlanguage', 'biblatex': 'origlanguage', 'title': gettext('Language of the original work') },
  origlocation: {
    'id': 64, 'type': 'l_literal', 'name': 'origlocation', 'biblatex': 'origlocation', 'csl': 'original-publisher-place', 'title': gettext('Publication location of the original edition') },
  origpublisher: {
    'id': 65, 'type': 'l_literal', 'name': 'origpublisher', 'biblatex': 'origpublisher', 'csl': 'original-publisher', 'title': gettext('Publisher of the original edition') },
  origtitle: {
    'id': 66, 'type': 'f_literal', 'name': 'origtitle', 'biblatex': 'origtitle', 'csl': 'original-title', 'title': gettext('Title of the original work') },
  pages: {
    'id': 67, 'type': 'f_range', 'name': 'pages', 'biblatex': 'pages', 'csl': 'page', 'title': gettext('Page numbers or page ranges') },
  pagetotal: {
    'id': 68, 'type': 'f_literal', 'name': 'pagetotal', 'biblatex': 'pagetotal', 'csl': 'number-of-pages', 'title': gettext('Total number of pages') },
  pagination: {
    'id': 69, 'type': 'f_key', 'name': 'pagination', 'biblatex': 'pagination', 'title': gettext('Pagination'), 'localization': 'pagination' },
  part: {
    'id': 70, 'type': 'f_literal', 'name': 'part', 'biblatex': 'part', 'title': gettext('Number of a partial volume') },
  publisher: {
    'id': 71, 'type': 'l_literal', 'name': 'publisher', 'biblatex': 'publisher', 'csl': 'publisher', 'title': gettext('Publisher(s)') },
  pubstate: {
    'id': 72, 'type': 'f_key', 'name': 'pubstate', 'biblatex': 'pubstate', 'csl': 'status', 'title': gettext('Publication state of the work'), 'localization': 'publication_state' },
  reprinttitle: {
    'id': 73, 'type': 'f_literal', 'name': 'reprinttitle', 'biblatex': 'reprinttitle', 'title': gettext('Title of reprint') },
  series: {
    'id': 74, 'type': 'f_literal', 'name': 'series', 'biblatex': 'series', 'csl': 'collection-title', 'title': gettext('Name of series') },
  shortauthor: {
    'id': 75, 'type': 'l_name', 'name': 'shortauthor', 'biblatex': 'shortauthor', 'title': gettext('Abbreviated author(s)') },
  shorteditor: {
    'id': 76, 'type': 'l_name', 'name': 'shorteditor', 'biblatex': 'shorteditor', 'title': gettext('Abbreviated editor(s)') },
  shorthand: {
    'id': 77, 'type': 'f_literal', 'name': 'shorthand', 'biblatex': 'shorthand', 'title': gettext('Shorthand') },
  shorthandintro: {
    'id': 78, 'type': 'f_literal', 'name': 'shorthandintro', 'biblatex': 'shorthandintro', 'title': gettext('Shorthand intro') },
  shortjournal: {
    'id': 79, 'type': 'f_literal', 'name': 'shortjournal', 'biblatex': 'shortjournal', 'csl': 'container-title-short', 'title': gettext('Acronym of the publication\'s title') },
  shortseries: {
    'id': 80, 'type': 'f_literal', 'name': 'shortseries', 'biblatex': 'shortseries', 'title': gettext('Acronym of the series') },
  shorttitle: {
    'id': 81, 'type': 'f_literal', 'name': 'shorttitle', 'biblatex': 'shorttitle', 'csl': 'title-short', 'title': gettext('Abridged title') },
  subtitle: {
    'id': 82, 'type': 'f_literal', 'name': 'subtitle', 'biblatex': 'subtitle', 'title': gettext('Subtitle') },
  title: {
    'id': 83, 'type': 'f_literal', 'name': 'title', 'biblatex': 'title', 'csl': 'title', 'title': gettext('Title') },
  titleaddon: {
    'id': 84, 'type': 'f_literal', 'name': 'titleaddon', 'biblatex': 'titleaddon', 'title': gettext('Title addon') },
  translator: {
    'id': 85, 'type': 'l_name', 'name': 'translator', 'biblatex': 'translator', 'csl': 'translator', 'title': gettext('Translator(s)') },
  type: {
    'id': 86, 'type': 'f_key', 'name': 'type', 'biblatex': 'type', 'title': gettext('Manual type'), 'localization': 'types' },
  url: {
    'id': 87, 'type': 'f_uri', 'name': 'url', 'biblatex': 'url', 'csl': 'URL', 'title': gettext('URL') },
  urldate: {
    'id': 88, 'type': 'f_date', 'name': 'urldate', 'biblatex': 'urldate', 'csl': 'accessed', 'title': gettext('Access date') },
  venue: {
    'id': 89, 'type': 'f_literal', 'name': 'venue', 'biblatex': 'venue', 'csl': 'event-place', 'title': gettext('Location of a conference') },
  version: {
    'id': 90, 'type': 'f_literal', 'name': 'version', 'biblatex': 'version', 'csl': 'version', 'title': gettext('Version') },
  volume: {
    'id': 91, 'type': 'f_literal', 'name': 'volume', 'biblatex': 'volume', 'csl': 'volume', 'title': gettext('Volume') },
  volumes: {
    'id': 92, 'type': 'f_literal', 'name': 'volumes', 'biblatex': 'volumes', 'csl': 'number-of-volumes', 'title': gettext('Total number of volumes') }
};
/** A list of all bibentry types and their fields. */
var BibEntryTypes = exports.BibEntryTypes = {
  1: {
    'id': 1, 'order': 1, 'name': 'article', 'biblatex': 'article', 'csl': 'article', 'title': gettext('Article'), 'required': ['journaltitle', 'title', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'annotator', 'commentator', 'doi', 'editor', 'editora', 'editorb', 'editorc', 'eid', 'eprint', 'eprintclass', 'eprinttype', 'issn', 'issue', 'issuesubtitle', 'issuetitle', 'journalsubtitle', 'language', 'note', 'number', 'origlanguage', 'pages', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'version', 'volume']
  },
  2: {
    'id': 2, 'order': 10, 'name': 'book', 'biblatex': 'book', 'csl': 'book', 'title': gettext('Book'), 'required': ['title', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'chapter', 'commentator', 'doi', 'edition', 'editor', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'pagetotal', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  3: {
    'id': 3, 'order': 11, 'name': 'mvbook', 'biblatex': 'mvbook', 'csl': 'book', 'title': gettext('Multi-volume book'), 'required': ['title', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'commentator', 'doi', 'edition', 'editor', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'note', 'number', 'origlanguage', 'pagetotal', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volumes']
  },
  4: {
    'id': 4, 'order': 12, 'name': 'inbook', 'biblatex': 'inbook', 'csl': 'chapter', 'title': gettext('In book'), 'required': ['title', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'bookauthor', 'booksubtitle', 'booktitleaddon', 'chapter', 'commentator', 'doi', 'edition', 'editor', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  5: {
    'id': 5, 'order': 13, 'name': 'bookinbook', 'biblatex': 'bookinbook', 'csl': 'chapter', 'title': gettext('Book in book'), 'required': ['title', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'bookauthor', 'booksubtitle', 'booktitleaddon', 'chapter', 'commentator', 'doi', 'edition', 'editor', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  6: {
    'id': 6, 'order': 14, 'name': 'suppbook', 'biblatex': 'suppbook', 'csl': 'chapter', 'title': gettext('Supplemental material in a book'), 'required': ['title', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'bookauthor', 'booksubtitle', 'booktitleaddon', 'chapter', 'commentator', 'doi', 'edition', 'editor', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  7: {
    'id': 7, 'order': 15, 'name': 'booklet', 'biblatex': 'booklet', 'csl': 'pamphlet', 'title': gettext('Booklet'), 'required': ['title', 'date'],
    'eitheror': ['editor', 'author'],
    'optional': ['titleaddon', 'addendum', 'pages', 'howpublished', 'type', 'pubstate', 'chapter', 'doi', 'subtitle', 'language', 'location', 'url', 'urldate', 'pagetotal', 'note', 'eprint', 'eprintclass', 'eprinttype']
  },
  8: {
    'id': 8, 'order': 20, 'name': 'collection', 'biblatex': 'collection', 'csl': 'dataset', 'title': gettext('Collection'), 'required': ['editor', 'title', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'chapter', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'pagetotal', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  9: {
    'id': 9, 'order': 21, 'name': 'mvcollection', 'biblatex': 'mvcollection', 'csl': 'dataset', 'title': gettext('Multi-volume collection'), 'required': ['editor', 'title', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'note', 'number', 'origlanguage', 'pagetotal', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volumes']
  },
  10: {
    'id': 10, 'order': 22, 'name': 'incollection', 'biblatex': 'incollection', 'csl': 'entry', 'title': gettext('In collection'), 'required': ['title', 'editor', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'booksubtitle', 'booktitleaddon', 'chapter', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  11: {
    'id': 11, 'order': 23, 'name': 'suppcollection', 'biblatex': 'suppcollection', 'csl': 'entry', 'title': gettext('Supplemental material in a collection'), 'required': ['title', 'editor', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'booksubtitle', 'booktitleaddon', 'chapter', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  12: {
    'id': 12, 'order': 40, 'name': 'manual', 'biblatex': 'manual', 'csl': 'book', 'title': gettext('Manual'), 'required': ['title', 'date'],
    'eitheror': ['editor', 'author'],
    'optional': ['addendum', 'chapter', 'doi', 'edition', 'eprint', 'eprintclass', 'eprinttype', 'isbn', 'language', 'location', 'note', 'number', 'organization', 'pages', 'pagetotal', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'type', 'url', 'urldate', 'version']
  },
  13: {
    'id': 13, 'order': 41, 'name': 'misc', 'biblatex': 'misc', 'csl': 'entry', 'title': gettext('Miscellany'), 'required': ['title', 'date'],
    'eitheror': ['editor', 'author'],
    'optional': ['addendum', 'howpublished', 'type', 'pubstate', 'organization', 'doi', 'subtitle', 'language', 'location', 'url', 'urldate', 'titleaddon', 'version', 'note', 'eprint', 'eprintclass', 'eprinttype']
  },
  14: {
    'id': 14, 'order': 42, 'name': 'online', 'biblatex': 'online', 'csl': 'webpage', 'title': gettext('Online resource'), 'required': ['date', 'title', 'url'],
    'eitheror': ['editor', 'author'],
    'optional': ['addendum', 'pubstate', 'subtitle', 'language', 'urldate', 'titleaddon', 'version', 'note', 'organization']
  },
  15: {
    'id': 15, 'order': 43, 'name': 'patent', 'biblatex': 'patent', 'csl': 'patent', 'title': gettext('Patent'), 'required': ['title', 'number', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'holder', 'location', 'pubstate', 'doi', 'subtitle', 'titleaddon', 'type', 'url', 'urldate', 'version', 'note', 'eprint', 'eprintclass', 'eprinttype']
  },
  16: {
    'id': 16, 'order': 50, 'name': 'periodical', 'biblatex': 'periodical', 'csl': 'book', 'title': gettext('Periodical'), 'required': ['editor', 'title', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'volume', 'pubstate', 'number', 'series', 'issn', 'issue', 'issuesubtitle', 'issuetitle', 'doi', 'subtitle', 'editora', 'editorb', 'editorc', 'url', 'urldate', 'language', 'note', 'eprint', 'eprintclass', 'eprinttype']
  },
  17: {
    'id': 17, 'order': 51, 'name': 'suppperiodical', 'biblatex': 'suppperiodical', 'csl': 'entry', 'title': gettext('Supplemental material in a periodical'), 'required': ['journaltitle', 'title', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'annotator', 'commentator', 'doi', 'editor', 'editora', 'editorb', 'editorc', 'eid', 'eprint', 'eprintclass', 'eprinttype', 'issn', 'issue', 'issuesubtitle', 'issuetitle', 'journalsubtitle', 'language', 'note', 'number', 'origlanguage', 'pages', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'version', 'volume']
  },
  18: {
    'id': 18, 'order': 60, 'name': 'proceedings', 'biblatex': 'proceedings', 'csl': 'entry', 'title': gettext('Proceedings'), 'required': ['editor', 'title', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'chapter', 'doi', 'eprint', 'eprintclass', 'eprinttype', 'eventdate', 'eventtitle', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'organization', 'pages', 'pagetotal', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'url', 'urldate', 'venue', 'volume', 'volumes']
  },
  19: {
    'id': 19, 'order': 61, 'name': 'mvproceedings', 'biblatex': 'mvproceedings', 'csl': 'entry', 'title': gettext('Multi-volume proceedings'), 'required': ['editor', 'title', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'doi', 'eprint', 'eprintclass', 'eprinttype', 'eventdate', 'eventtitle', 'isbn', 'language', 'location', 'note', 'number', 'organization', 'pagetotal', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'url', 'urldate', 'venue', 'volumes']
  },
  20: {
    'id': 20, 'order': 62, 'name': 'inproceedings', 'biblatex': 'inproceedings', 'csl': 'paper-conference', 'title': gettext('Article in a proceedings'), 'required': ['title', 'editor', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'booksubtitle', 'booktitleaddon', 'chapter', 'doi', 'eprint', 'eprintclass', 'eprinttype', 'eventdate', 'eventtitle', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'organization', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'url', 'urldate', 'venue', 'volume', 'volumes']
  },
  21: {
    'id': 21, 'order': 70, 'name': 'reference', 'biblatex': 'book', 'csl': 'reference', 'title': gettext('Reference'), 'required': ['editor', 'title', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'chapter', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'pagetotal', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  22: {
    'id': 22, 'order': 71, 'name': 'mvreference', 'biblatex': 'mvreference', 'csl': 'book', 'title': gettext('Multi-volume work of reference'), 'required': ['editor', 'title', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'note', 'number', 'origlanguage', 'pagetotal', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volumes']
  },
  23: {
    'id': 23, 'order': 72, 'name': 'inreference', 'biblatex': 'inreference', 'csl': 'entry', 'title': gettext('Article in a work of reference'), 'required': ['title', 'editor', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'booksubtitle', 'booktitleaddon', 'chapter', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  24: {
    'id': 24, 'order': 80, 'name': 'report', 'biblatex': 'report', 'csl': 'report', 'title': gettext('Report'), 'required': ['author', 'title', 'type', 'institution', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'pages', 'pagetotal', 'pubstate', 'number', 'isrn', 'chapter', 'doi', 'subtitle', 'language', 'location', 'url', 'urldate', 'titleaddon', 'version', 'note', 'eprint', 'eprintclass', 'eprinttype']
  },
  25: {
    'id': 25, 'order': 81, 'name': 'thesis', 'biblatex': 'thesis', 'csl': 'thesis', 'title': gettext('Thesis'), 'required': ['author', 'title', 'type', 'institution', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'pages', 'pagetotal', 'pubstate', 'isbn', 'chapter', 'doi', 'subtitle', 'language', 'location', 'url', 'urldate', 'titleaddon', 'note', 'eprint', 'eprintclass', 'eprinttype']
  },
  26: {
    'id': 26, 'order': 90, 'name': 'unpublished', 'biblatex': 'unpublished', 'csl': 'manuscript', 'title': gettext('Unpublished'), 'required': ['title', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'howpublished', 'pubstate', 'isbn', 'date', 'subtitle', 'language', 'location', 'url', 'urldate', 'titleaddon', 'note']
  },
  27: {
    'id': 27, 'order': 2, 'name': 'article-magazine', 'biblatex': 'article', 'csl': 'article-magazine', 'title': gettext('Magazine article'), 'required': ['journaltitle', 'title', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'annotator', 'commentator', 'doi', 'editor', 'editora', 'editorb', 'editorc', 'eid', 'eprint', 'eprintclass', 'eprinttype', 'issn', 'issue', 'issuesubtitle', 'issuetitle', 'journalsubtitle', 'language', 'note', 'number', 'origlanguage', 'pages', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'version', 'volume']
  },
  28: {
    'id': 28, 'order': 3, 'name': 'article-newspaper', 'biblatex': 'article', 'csl': 'article-newspaper', 'title': gettext('Newspaper article'), 'required': ['journaltitle', 'title', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'annotator', 'commentator', 'doi', 'editor', 'editora', 'editorb', 'editorc', 'eid', 'eprint', 'eprintclass', 'eprinttype', 'issn', 'issue', 'issuesubtitle', 'issuetitle', 'journalsubtitle', 'language', 'note', 'number', 'origlanguage', 'pages', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'version', 'volume']
  },
  29: {
    'id': 29, 'order': 4, 'name': 'article-journal', 'biblatex': 'article', 'csl': 'article-journal', 'title': gettext('Journal article'), 'required': ['journaltitle', 'title', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'annotator', 'commentator', 'doi', 'editor', 'editora', 'editorb', 'editorc', 'eid', 'eprint', 'eprintclass', 'eprinttype', 'issn', 'issue', 'issuesubtitle', 'issuetitle', 'journalsubtitle', 'language', 'note', 'number', 'origlanguage', 'pages', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'version', 'volume']
  },
  30: {
    'id': 30, 'order': 73, 'name': 'entry-encyclopedia', 'biblatex': 'inreference', 'csl': 'entry-encyclopedia', 'title': gettext('Encyclopedia entry'), 'required': ['title', 'editor', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'booksubtitle', 'booktitleaddon', 'chapter', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  31: {
    'id': 31, 'order': 74, 'name': 'entry-dictionary', 'biblatex': 'inreference', 'csl': 'entry-dictionary', 'title': gettext('Dictionary entry'), 'required': ['title', 'editor', 'booktitle', 'author', 'date'],
    'eitheror': [],
    'optional': ['addendum', 'afterword', 'annotator', 'booksubtitle', 'booktitleaddon', 'chapter', 'commentator', 'doi', 'edition', 'editora', 'editorb', 'editorc', 'eprint', 'eprintclass', 'eprinttype', 'foreword', 'introduction', 'isbn', 'language', 'location', 'mainsubtitle', 'maintitle', 'maintitleaddon', 'note', 'number', 'origlanguage', 'pages', 'part', 'publisher', 'pubstate', 'series', 'subtitle', 'titleaddon', 'translator', 'url', 'urldate', 'volume', 'volumes']
  },
  32: {
    'id': 32, 'order': 5, 'name': 'post-weblog', 'biblatex': 'online', 'csl': 'post-weblog', 'title': gettext('Blog post'), 'required': ['date', 'title', 'url'],
    'eitheror': ['editor', 'author'],
    'optional': ['addendum', 'pubstate', 'subtitle', 'language', 'urldate', 'titleaddon', 'version', 'note', 'organization']
  },
  33: {
    'id': 33, 'order': 30, 'name': 'post', 'biblatex': 'online', 'csl': 'post', 'title': gettext('Forum post'), 'required': ['date', 'title', 'url'],
    'eitheror': ['editor', 'author'],
    'optional': ['addendum', 'pubstate', 'subtitle', 'language', 'urldate', 'titleaddon', 'version', 'note', 'organization']
  }
};
/** A list of all the bibliography keys and their full name. */
var LocalizationKeys = exports.LocalizationKeys = [{
  'type': 'publication_state', 'name': 'inpreparation', 'title': 'in\ preparation'
}, {
  'type': 'publication_state', 'name': 'submitted', 'title': 'submitted\ to\ a\ journal\ or\ conference'
}, {
  'type': 'publication_state', 'name': 'forthcoming', 'title': 'forthcoming'
}, {
  'type': 'publication_state', 'name': 'inpress', 'title': 'in\ press'
}, {
  'type': 'publication_state', 'name': 'prepublished', 'title': 'pre\-published'
}, {
  'type': 'pagination', 'name': 'page', 'title': 'page'
}, {
  'type': 'pagination', 'name': 'column', 'title': 'column'
}, {
  'type': 'pagination', 'name': 'section', 'title': 'section'
}, {
  'type': 'pagination', 'name': 'paragraph', 'title': 'paragraph'
}, {
  'type': 'pagination', 'name': 'verse', 'title': 'verse'
}, {
  'type': 'pagination', 'name': 'line', 'title': 'line'
}, {
  'type': 'types', 'name': 'mathesis', 'title': 'master\’s\ thesis'
}, {
  'type': 'types', 'name': 'phdthesis', 'title': 'PhD\ thesis'
}, {
  'type': 'types', 'name': 'candthesis', 'title': 'Candidate\ thesis'
}, {
  'type': 'types', 'name': 'techreport', 'title': 'technical\ report'
}, {
  'type': 'types', 'name': 'resreport', 'title': 'research\ report'
}, {
  'type': 'types', 'name': 'software', 'title': 'computer\ software'
}, {
  'type': 'types', 'name': 'datacd', 'title': 'data\ cd'
}, {
  'type': 'types', 'name': 'audiocd', 'title': 'audio\ cd'
}, {
  'type': 'types', 'name': 'software', 'title': 'computer\ software'
}];

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Connects Fidus Writer citation system with citeproc */

var citeprocSys = exports.citeprocSys = (function () {
    function citeprocSys(cslDB) {
        _classCallCheck(this, citeprocSys);

        this.cslDB = cslDB;
        this.abbreviations = {
            "default": {}
        };
        this.abbrevsname = "default";
    }

    _createClass(citeprocSys, [{
        key: "retrieveItem",
        value: function retrieveItem(id) {
            return this.cslDB[id];
        }
    }, {
        key: "retrieveLocale",
        value: function retrieveLocale(lang) {
            return citeproc.locals[lang];
        }
    }, {
        key: "getAbbreviation",
        value: function getAbbreviation(dummy, obj, jurisdiction, vartype, key) {
            try {
                if (this.abbreviations[this.abbrevsname][vartype][key]) {
                    obj["default"][vartype][key] = this.abbreviations[this.abbrevsname][vartype][key];
                } else {
                    obj["default"][vartype][key] = "";
                }
            } catch (e) {
                // There is breakage here that needs investigating.
            }
        }
    }]);

    return citeprocSys;
})();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatCitations = undefined;

var _citeprocSys = require("./citeproc-sys");

var _csl = require("../bibliography/exporter/csl");

/**
 * Functions to display citations and the bibliography.
 */

var formatCitations = exports.formatCitations = function formatCitations(contentElement, citationstyle, aBibDB) {
    var bibliographyHTML = '',
        allCitations = jQuery(contentElement).find('.citation'),
        listedWorksCounter = 0,
        citeprocParams = [],
        bibFormats = [],
        citationsIds = [],
        cslGetter = new _csl.CSLExporter(aBibDB),

    // TODO: Figure out if this conversion should be done earlier and cached
    cslDB = cslGetter.cslDB;

    allCitations.each(function (i) {
        var entries = this.dataset.bibEntry ? this.dataset.bibEntry.split(',') : [];
        var allCitationsListed = true;

        var len = entries.length;
        for (var j = 0; j < len; j++) {
            if (aBibDB.hasOwnProperty(entries[j])) {
                continue;
            }
            allCitationsListed = false;
            break;
        }

        if (allCitationsListed) {
            var pages = this.dataset.bibPage ? this.dataset.bibPage.split(',,,') : [],
                prefixes = this.dataset.bibBefore ? this.dataset.bibBefore.split(',,,') : [],

            //suffixes = this.dataset.bibAfter.split(',,,'),
            citationItem = undefined,
                citationItems = [];

            listedWorksCounter += entries.length;

            for (var j = 0; j < len; j++) {
                citationItem = {
                    id: entries[j]
                };
                if ('' != pages[j]) {
                    citationItem.locator = pages[j];
                }
                if ('' != prefixes[j]) {
                    citationItem.prefix = prefixes[j];
                }
                //if('' != suffixes[j]) { citationItem.suffix = pages[j] }
                citationItems.push(citationItem);
            }

            //            bibFormats.push(i)
            bibFormats.push(this.dataset.bibFormat);
            citeprocParams.push({
                citationItems: citationItems,
                properties: {
                    noteIndex: bibFormats.length
                }
            });
        }
    });

    if (listedWorksCounter == 0) {
        return '';
    }

    var citeprocObj = getFormattedCitations(citeprocParams, citationstyle, bibFormats, cslDB);

    for (var j = 0; j < citeprocObj.citations.length; j++) {
        var citationText = citeprocObj.citations[j][0][1];
        if ('note' == citeprocObj.citationtype) {
            citationText = '<span class="pagination-footnote"><span><span>' + citationText + '</span></span></span>';
        }
        allCitations[j].innerHTML = citationText;
    }

    bibliographyHTML += '<h1>' + gettext('Bibliography') + '</h1>';
    // Add entry to bibliography

    for (var j = 0; j < citeprocObj.bibliography[1].length; j++) {
        bibliographyHTML += citeprocObj.bibliography[1][j];
    }

    return bibliographyHTML;
    // Delete entries that are exactly the same
    //bibliographyHTML = _.unique(bibliographyHTML.split('<p>')).join('<p>')
    //bibliographyHTML = bibliographyHTML.replace(/<div class="csl-entry">/g, '<p>')
    //return bibliographyHTML.replace(/<\/div>/g, '</p>')
};

var getFormattedCitations = function getFormattedCitations(citations, citationStyle, citationFormats, cslDB) {

    if (citeproc.styles.hasOwnProperty(citationStyle)) {
        citationStyle = citeproc.styles[citationStyle];
    } else {
        for (styleName in citeproc.styles) {
            citationStyle = citeproc.styles[styleName];
            break;
        }
    }

    var citeprocInstance = new CSL.Engine(new _citeprocSys.citeprocSys(cslDB), citationStyle.definition);

    var inText = citeprocInstance.cslXml.className === 'in-text';

    var len = citations.length;

    var citationTexts = [];

    for (var i = 0; i < len; i++) {
        var citation = citations[i],
            citationText = citeprocInstance.appendCitationCluster(citation);

        if (inText && 'textcite' == citationFormats[i]) {
            var newCiteText = '',
                items = citation.citationItems,
                len2 = items.length;

            for (var j = 0; j < len2; j++) {
                var onlyNameOption = [{
                    id: items[j].id,
                    "author-only": 1
                }];

                var onlyDateOption = [{
                    id: items[j].id,
                    "suppress-author": 1
                }];

                if (items[j].locator) {
                    onlyDateOption[0].locator = items[j].locator;
                }

                if (items[j].label) {
                    onlyDateOption[0].label = items[j].label;
                }

                if (items[j].prefix) {
                    onlyDateOption[0].prefix = items[j].prefix;
                }

                if (items[j].suffix) {
                    onlyDateOption[0].suffix = items[j].suffix;
                }

                if (0 < j) {
                    newCiteText += '; ';
                }
                newCiteText += citeprocInstance.makeCitationCluster(onlyNameOption);
                newCiteText += ' ' + citeprocInstance.makeCitationCluster(onlyDateOption);
            }

            citationText[0][1] = newCiteText;
        }

        citationTexts.push(citationText);
    }

    return {
        'citations': citationTexts,
        'bibliography': citeprocInstance.makeBibliography(),
        'citationtype': citeprocInstance.cslXml.className
    };
};

var stripValues = function stripValues(bibValue) {
    return bibValue.replace(/[\{\}]/g, '');
};

var getAuthor = function getAuthor(bibData) {
    var author = bibData.author,
        returnObject = {};
    if ('' == author || 'undefined' == typeof author) {
        author = bibData.editor;
    }
    var splitAuthor = author.split("{");
    if (splitAuthor.length > 2) {
        returnObject.firstName = author.split("{")[1].replace(/[\{\}]/g, '').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        returnObject.lastName = author.split("{")[2].replace(/[\{\}]/g, '').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    } else {
        returnObject.firstName = '';
        returnObject.lastName = author.split("{")[1].replace(/[\{\}]/g, '').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    return returnObject;
};

var yearFromDateString = function yearFromDateString(dateString) {
    // This mirrors the formatting of the date as returned by Python in bibliography/models.py
    var dates = dateString.split('/');
    var newValue = [];
    for (var x = 0; x < dates.length; x++) {
        var dateParts = dates[x].split('-');
        // Only make use of the first value (to/from years), discarding month and day values
        if (isNaN(dateParts[0])) {
            break;
        }
        newValue.push(dateParts[0]);
    }
    if (newValue.length === 0) {
        return 'Unpublished';
    } else if (newValue.length === 1) {
        return newValue[0];
    } else {
        return newValue[0] + '-' + newValue[1];
    }
};

},{"../bibliography/exporter/csl":1,"./citeproc-sys":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** Same functionality as objToNode/nodeToObj in diffDOM.js, but also offers output in XHTML format (obj2Node) and without form support. */
var obj2Node = exports.obj2Node = function obj2Node(obj, docType) {
    var parser = undefined;
    if (obj === undefined) {
        return false;
    }
    if (docType === 'xhtml') {
        parser = new DOMParser().parseFromString('<xml/>', "text/xml");
    } else {
        parser = document;
    }

    function inner(obj, insideSvg) {
        var node = undefined;
        if (obj.hasOwnProperty('t')) {
            node = parser.createTextNode(obj.t);
        } else if (obj.hasOwnProperty('co')) {
            node = parser.createComment(obj.co);
        } else {
            if (obj.nn === 'svg' || insideSvg) {
                node = parser.createElementNS('http://www.w3.org/2000/svg', obj.nn);
                insideSvg = true;
            } else if (obj.nn === 'script') {
                // Do not allow scripts
                return parser.createTextNode('');
            } else {
                node = parser.createElement(obj.nn);
            }
            if (obj.a) {
                for (var i = 0; i < obj.a.length; i++) {
                    node.setAttribute(obj.a[i][0], obj.a[i][1]);
                }
            }
            if (obj.c) {
                for (var i = 0; i < obj.c.length; i++) {
                    node.appendChild(inner(obj.c[i], insideSvg));
                }
            }
        }
        return node;
    }
    return inner(obj);
};

var node2Obj = exports.node2Obj = function node2Obj(node) {
    var obj = {};

    if (node.nodeType === 3) {
        obj.t = node.data;
    } else if (node.nodeType === 8) {
        obj.co = node.data;
    } else {
        obj.nn = node.nodeName;
        if (node.attributes && node.attributes.length > 0) {
            obj.a = [];
            for (var i = 0; i < node.attributes.length; i++) {
                obj.a.push([node.attributes[i].name, node.attributes[i].value]);
            }
        }
        if (node.childNodes && node.childNodes.length > 0) {
            obj.c = [];
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i]) {
                    obj.c.push(node2Obj(node.childNodes[i]));
                }
            }
        }
    }
    return obj;
};

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrintBook = undefined;

var _templates = require("./templates");

var _json = require("../exporter/json");

var _format = require("../citations/format");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Helper functions for the book print page.
*/

var PrintBook = exports.PrintBook = (function () {
    // A class that contains everything that happens on the book print page.
    // It is currently not possible to initialize more thna one editor class, as it
    // contains bindings to menu items, etc. that are uniquely defined.

    function PrintBook() {
        _classCallCheck(this, PrintBook);

        this.pageSizes = {
            folio: {
                width: 12,
                height: 15
            },
            quarto: {
                width: 9.5,
                height: 12
            },
            octavo: {
                width: 6,
                height: 9
            },
            a5: {
                width: 5.83,
                height: 8.27
            },
            a4: {
                width: 8.27,
                height: 11.69
            }
        };
        this.documentOwners = [];
        this.bindEvents();
    }

    _createClass(PrintBook, [{
        key: "setTheBook",
        value: function setTheBook(aBook) {
            var that = this;

            aBook.settings = JSON.parse(aBook.settings);
            aBook.metadata = JSON.parse(aBook.metadata);
            for (var i = 0; i < aBook.chapters.length; i++) {
                aBook.chapters[i].metadata = JSON.parse(aBook.chapters[i].metadata);
                aBook.chapters[i].settings = JSON.parse(aBook.chapters[i].settings);
                if (this.documentOwners.indexOf(aBook.chapters[i].owner) === -1) {
                    this.documentOwners.push(aBook.chapters[i].owner);
                }
            }
            this.theBook = aBook;
            this.setDocumentStyle(this.theBook.settings.documentstyle);

            paginationConfig['pageHeight'] = this.pageSizes[this.theBook.settings.papersize].height;
            paginationConfig['pageWidth'] = this.pageSizes[this.theBook.settings.papersize].width;

            var bibGetter = new BibliographyDB(this.documentOwners.join(','), false, false, false);
            bibGetter.getBibDB(function (bibDB) {
                that.bibDB = bibDB;
                that.fillPrintPage();
            });
        }
    }, {
        key: "modelToViewNode",
        value: function modelToViewNode(node) {
            // TODO: add needed changes
            return node;
        }

        /* TODO: IS this still useful? Should it be part of the modeltoViewNode?
        createFootnoteView = function (htmlFragment, number) {
            let fn = document.createElement('span'), id
            fn.classList.add('pagination-footnote')
             fn.appendChild(document.createElement('span'))
            fn.firstChild.appendChild(document.createElement('span'))
            fn.firstChild.firstChild.appendChild(htmlFragment)
             if (typeof number === 'undefined') {
                number = document.getElementById('flow').querySelectorAll('.pagination-footnote').length
                 while (document.getElementById('pagination-footnote-'+number)) {
                    number++
                }
            }
             fn.id = 'pagination-footnote-'+ number
            return fn
        }*/

    }, {
        key: "getBookData",
        value: function getBookData(id) {
            var that = this;
            $.ajax({
                url: '/book/book/',
                data: {
                    'id': id
                },
                type: 'POST',
                dataType: 'json',
                success: function success(response, textStatus, jqXHR) {
                    that.setTheBook(response.book);
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                    $.addAlert('error', jqXHR.responseText);
                },
                complete: function complete() {
                    $.deactivateWait();
                }
            });
        }
    }, {
        key: "fillPrintPage",
        value: function fillPrintPage() {
            var bibliography = jQuery('#bibliography');
            jQuery(document.body).addClass(this.theBook.settings.documentstyle);
            jQuery('#book')[0].outerHTML = (0, _templates.bookPrintTemplate)({
                theBook: this.theBook,
                modelToViewNode: this.modelToViewNode,
                obj2Node: _json.obj2Node
            });

            jQuery(bibliography).html((0, _format.formatCitations)(document.body, this.theBook.settings.citationstyle, this.bibDB));

            if (jQuery(bibliography).text().trim().length === 0) {
                jQuery(bibliography).parent().remove();
            }

            paginationConfig['frontmatterContents'] = (0, _templates.bookPrintStartTemplate)({ theBook: this.theBook });

            // TODO: render equations
            pagination.initiate();
            pagination.applyBookLayout();
            jQuery("#pagination-contents").addClass('user-contents');
            jQuery('head title').html(jQuery('#document-title').text());
        }
    }, {
        key: "setDocumentStyle",
        value: function setDocumentStyle() {
            var theValue = this.theBook.settings.documentstyle;
            var documentStyleLink = document.getElementById('document-style-link'),
                newDocumentStyleLink = document.createElement('link');
            newDocumentStyleLink.setAttribute("rel", "stylesheet");
            newDocumentStyleLink.setAttribute("type", "text/css");
            newDocumentStyleLink.setAttribute("id", "document-style-link");
            newDocumentStyleLink.setAttribute("href", staticUrl + 'css/document/' + theValue + '.css');

            documentStyleLink.parentElement.replaceChild(newDocumentStyleLink, documentStyleLink);
        }
    }, {
        key: "bindEvents",
        value: function bindEvents() {
            var that = this;
            jQuery(document).ready(function () {
                var pathnameParts = window.location.pathname.split('/'),
                    bookId = parseInt(pathnameParts[pathnameParts.length - 2], 10);

                that.getBookData(bookId);
            });
        }
    }]);

    return PrintBook;
})();

},{"../citations/format":4,"../exporter/json":5,"./templates":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** A template for the initial pages of a book before the contents begin. */
var bookPrintStartTemplate = exports.bookPrintStartTemplate = _.template('\
    <h1 id="document-title"><%= theBook.title %></h1>\
    <% if (theBook.metadata.subtitle && theBook.metadata.subtitle != "" ) { %>\
        <h2 id="metadata-subtitle"><%= theBook.metadata.subtitle %></h2>\
    <% } %>\
    <% if (theBook.metadata.author && theBook.metadata.author != "" ) { %>\
        <h3><%= theBook.metadata.author %></h3>\
    <% } %>\
<div class="pagination-pagebreak"></div>\
    <% if (theBook.metadata.publisher && theBook.metadata.publisher != "" ) { %>\
        <div class="publisher"><%= theBook.metadata.publisher %></div>\
    <% } %>\
    <% if (theBook.metadata.copyright && theBook.metadata.copyright != "" ) { %>\
        <div class="copyright"><%= theBook.metadata.copyright %></div>\
    <% } %>\
<div class="pagination-pagebreak">\
');

/** A template for the print view of a book. */
var bookPrintTemplate = exports.bookPrintTemplate = _.template('\
<% _.each(theBook.chapters, function (chapter) { %>\
    <% var tempNode; %>\
    <% if (chapter.part && chapter.part != "") { %>\
        <div class="part">\
            <h1><%= chapter.part %></h1>\
        </div>\
    <% } %>\
    <div class="chapter">\
        <h1 class="title"><%= chapter.title %></h1>\
        <% if (chapter.settings) { %>\
            <% if (chapter.settings["metadata-subtitle"] && chapter.metadata.subtitle) { %>\
                <% tempNode = obj2Node(chapter.metadata.subtitle) %>\
                <% if (tempNode.textContent.length > 0) { %>\
                    <h2 class="metadata-subtitle"><%= tempNode.textContent %></h2>\
                <% } %>\
            <% } %>\
            <% if (chapter.settings["metadata-abstract"] && chapter.metadata.abstract ) { %>\
                <% tempNode = obj2Node(chapter.metadata.abstract) %>\
                <% if (tempNode.textContent.length > 0) { %>\
                    <h2 class="metadata-abstract"><%= tempNode.textContent %></h2>\
                <% } %>\
            <% } %>\
        <% } %>\
        <%= modelToViewNode(obj2Node(JSON.parse(chapter.contents))).innerHTML %>\
    </div>\
<% }); %>\
');

},{}],8:[function(require,module,exports){
"use strict";

var _printBook = require("./es6_modules/print-book/print-book");

/* Create thePrintBook and make it available to the general namespace for debugging
purposes.*/

var thePrintBook = new _printBook.PrintBook();
window.thePrintBook = thePrintBook;

},{"./es6_modules/print-book/print-book":6}]},{},[8]);
