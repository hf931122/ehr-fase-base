const _0x4cfa = [
    'w6rCqlp2w5DCpQQ=',
    'w50dUQ==',
    'w6nDn8KWwpw=',
    'N8KKU8KjbQ==',
    'wqMGw5MnNcKuGg==',
    'A8Kucg==',
    'RA9cNw==',
    'UcKqw5I=',
    'wrYJw6c=',
    'wrIHw5AyNMK0Jkg=',
    'aGjDosKwLm8oKmk=',
    'wrF4wqPDvFg=',
    'PAQx',
    'wpIMwq/CqsKewrAsw7U=',
    'w5rDrDl5wqzCnQAjFA==',
    'UBVfFyjDt8O5',
    'w7l3wr45FMOe',
    'w67ClMOpw4hqw7gba8K8J1g=',
    'Z8Kcw7LCi8OTwo8yw6HCtQ==',
    'wqnClsOLBsKv',
    'wq5YPQ==',
    'ccKHw4DCmcOUwo4f',
    'w7lzwqA5Dg==',
    'PEjDj0vCmwM=',
    'b8K+LlE=',
    'eMKMw77Cn8OTwpU=',
    'wpdtwpEuw5kG',
    'JsOzFFbCgg==',
    'GcK+wp0o',
    'wrJ8wqXDn0h0K8Kmw6zCgcKACA=='
];
(function (_0x322adc, _0x4cfa1a) {
    const _0x52ca6a = function (_0x4f23e1) {
        while (--_0x4f23e1) {
            _0x322adc['push'](_0x322adc['shift']());
        }
    };
    _0x52ca6a(++_0x4cfa1a);
}(_0x4cfa, 0x136));
const _0x52ca = function (_0x322adc, _0x4cfa1a) {
    _0x322adc = _0x322adc - 0x0;
    let _0x52ca6a = _0x4cfa[_0x322adc];
    if (_0x52ca['aYIcFK'] === undefined) {
        (function () {
            const _0x222b64 = function () {
                let _0x5ae55a;
                try {
                    _0x5ae55a = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (_0x1151ca) {
                    _0x5ae55a = window;
                }
                return _0x5ae55a;
            };
            const _0x4da1b9 = _0x222b64();
            const _0x12963d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x4da1b9['atob'] || (_0x4da1b9['atob'] = function (_0x1d0b64) {
                const _0x1c4b3c = String(_0x1d0b64)['replace'](/=+$/, '');
                let _0x43d39e = '';
                for (let _0x387941 = 0x0, _0x2a3e82, _0x139d41, _0x14c2f9 = 0x0; _0x139d41 = _0x1c4b3c['charAt'](_0x14c2f9++); ~_0x139d41 && (_0x2a3e82 = _0x387941 % 0x4 ? _0x2a3e82 * 0x40 + _0x139d41 : _0x139d41, _0x387941++ % 0x4) ? _0x43d39e += String['fromCharCode'](0xff & _0x2a3e82 >> (-0x2 * _0x387941 & 0x6)) : 0x0) {
                    _0x139d41 = _0x12963d['indexOf'](_0x139d41);
                }
                return _0x43d39e;
            });
        }());
        const _0x39a628 = function (_0x2b2384, _0x256480) {
            let _0x49bc6e = [], _0x18564c = 0x0, _0x7448c0, _0x36ae68 = '', _0x3f081a = '';
            _0x2b2384 = atob(_0x2b2384);
            for (let _0x4733df = 0x0, _0x13718f = _0x2b2384['length']; _0x4733df < _0x13718f; _0x4733df++) {
                _0x3f081a += '%' + ('00' + _0x2b2384['charCodeAt'](_0x4733df)['toString'](0x10))['slice'](-0x2);
            }
            _0x2b2384 = decodeURIComponent(_0x3f081a);
            let _0x112964;
            for (_0x112964 = 0x0; _0x112964 < 0x100; _0x112964++) {
                _0x49bc6e[_0x112964] = _0x112964;
            }
            for (_0x112964 = 0x0; _0x112964 < 0x100; _0x112964++) {
                _0x18564c = (_0x18564c + _0x49bc6e[_0x112964] + _0x256480['charCodeAt'](_0x112964 % _0x256480['length'])) % 0x100;
                _0x7448c0 = _0x49bc6e[_0x112964];
                _0x49bc6e[_0x112964] = _0x49bc6e[_0x18564c];
                _0x49bc6e[_0x18564c] = _0x7448c0;
            }
            _0x112964 = 0x0;
            _0x18564c = 0x0;
            for (let _0x28f5f9 = 0x0; _0x28f5f9 < _0x2b2384['length']; _0x28f5f9++) {
                _0x112964 = (_0x112964 + 0x1) % 0x100;
                _0x18564c = (_0x18564c + _0x49bc6e[_0x112964]) % 0x100;
                _0x7448c0 = _0x49bc6e[_0x112964];
                _0x49bc6e[_0x112964] = _0x49bc6e[_0x18564c];
                _0x49bc6e[_0x18564c] = _0x7448c0;
                _0x36ae68 += String['fromCharCode'](_0x2b2384['charCodeAt'](_0x28f5f9) ^ _0x49bc6e[(_0x49bc6e[_0x112964] + _0x49bc6e[_0x18564c]) % 0x100]);
            }
            return _0x36ae68;
        };
        _0x52ca['luHdUG'] = _0x39a628;
        _0x52ca['KQdFoV'] = {};
        _0x52ca['aYIcFK'] = !![];
    }
    const _0x4f23e1 = _0x52ca['KQdFoV'][_0x322adc];
    if (_0x4f23e1 === undefined) {
        if (_0x52ca['hSUMKM'] === undefined) {
            _0x52ca['hSUMKM'] = !![];
        }
        _0x52ca6a = _0x52ca['luHdUG'](_0x52ca6a, _0x4cfa1a);
        _0x52ca['KQdFoV'][_0x322adc] = _0x52ca6a;
    } else {
        _0x52ca6a = _0x4f23e1;
    }
    return _0x52ca6a;
};
import _0x13786d from 'crypto-js';
import { JSEncrypt } from 'jsencrypt';
export default {
    'enHyPass'(_0x34ff8c, _0x412e0a) {
        let _0xb1b596 = this['splitUrl'](_0x34ff8c);
        let _0xa6401c = localStorage[ef([
                0x6,
                0x4,
                0x12,
                0x2f,
                0x12,
                0x4,
                0xc
            ])](ef([
                0xb,
                0xe,
                0x6,
                0x8,
                0xd
            ])), _0xc46c4a = '';
        if (_0xa6401c && _0xa6401c != _0x52ca('0x0', 'GO7#') && _0xa6401c != 'null') {
            _0xc46c4a = JSON[_0x52ca('0x1', 'ig]x')](_0xa6401c)[ef([
                0x0,
                0x2,
                0x2,
                0x4,
                0x11,
                0x11,
                0x39,
                0xe,
                0xa,
                0x4,
                0xd
            ])];
            _0xc46c4a && (_0xc46c4a = _0x13786d[_0x52ca('0x2', '6o5o')](_0xc46c4a)[_0x52ca('0x3', '*wLo')]()[_0x52ca('0x4', 'ul%y')](0x8, 0x18));
        }
        let _0x2229c6 = new Date()[ef([
            0x6,
            0x4,
            0x12,
            0x39,
            0x8,
            0xc,
            0x4
        ])]();
        let _0x2dd7a6 = eval('(' + localStorage[ef([
            0x6,
            0x4,
            0x12,
            0x2f,
            0x12,
            0x4,
            0xc
        ])](ef([
            0x2,
            0xe,
            0xd,
            0x5,
            0x8,
            0x6,
            0x25,
            0x25,
            0x3b,
            0x27,
            0x32,
            0x2f,
            0x2a,
            0x26,
            0x29,
            0x35,
            0x34,
            0x2c,
            0x2f,
            0x2d
        ])) + ')') || {};
        if (!_0x2dd7a6[ef([
                0xd,
                0x0,
                0xc,
                0x4
            ])]) {
            return;
        }
        let _0x4ef7cc = '';
        [
            0x5,
            0x7,
            0x9,
            '-',
            0xd,
            0x11,
            0x15,
            0x9,
            0x11,
            '-',
            0x1b,
            0xd,
            0x5,
            0x9
        ][_0x52ca('0x5', 'yIvl')]((_0x247ecc, _0x12034c) => {
            if (typeof _0x247ecc == _0x52ca('0x6', 'dZdH')) {
                _0x4ef7cc += _0x247ecc;
            } else {
                if (_0x12034c === 0x0 || _0x12034c === 0x4 || _0x12034c === 0xa) {
                    _0x4ef7cc += _0x2dd7a6[ef([
                        0xd,
                        0x0,
                        0xc,
                        0x4
                    ])][_0x247ecc]['toUpperCase']();
                } else {
                    _0x4ef7cc += _0x2dd7a6[ef([
                        0xd,
                        0x0,
                        0xc,
                        0x4
                    ])][_0x247ecc];
                }
            }
        });
        let _0x171dba = _0x2dd7a6[ef([
            0xd,
            0x0,
            0xc,
            0x4
        ])][_0x52ca('0x7', 'j2l6')](ef([
            0x1,
            0x0,
            0x2
        ])) + 0x3;
        let _0x169260 = _0x2dd7a6[ef([
            0xd,
            0x0,
            0xc,
            0x4
        ])][_0x52ca('0x8', '75Xx')](_0x171dba);
        const _0x1f47e1 = '1' + '1' + '1' + ef([0x0]) + '1' + '1' + '1';
        let _0x5edd6a = _0x169260[_0x52ca('0x9', 'LAJI')](_0x1f47e1)[_0x52ca('0xa', 'z%jb')](_0x3b7ebe => {
            return _0x3b7ebe ? _0x3b7ebe['substr'](0x4) : '';
        });
        let _0x47b852 = _0x2229c6 - _0x5edd6a[0x1] - Number(sessionStorage[ef([
            0x6,
            0x4,
            0x12,
            0x2f,
            0x12,
            0x4,
            0xc
        ])](ef([
            0x2,
            0xe,
            0x13,
            0xd,
            0x12,
            0x12
        ]))) + Number(_0x5edd6a[0x0] || '');
        let _0x4aa0e0 = _0xc46c4a + '+' + _0xb1b596 + '+' + _0x47b852;
        let _0x4ec2bb = this[_0x52ca('0xb', '75Xx')](_0x4aa0e0, _0x2dd7a6['key'], _0x2dd7a6['key2']);
        _0x412e0a[_0x4ef7cc] = _0x4ec2bb;
    },
    'splitUrl'(_0x34fe08) {
        let _0xfc87f3 = _0x34fe08['split']('?')[0x0];
        let _0x5712da = _0xfc87f3[_0x52ca('0xc', 'dZdH')](/ehrc\/|ehrcfis\/|ehr\/|ehrcmedical\/|ehrcphysical\/|ehrchiv\/|ehrcLnjk\/|ehrcjob\/|ehrcportal\//);
        let _0xb64463 = _0x5712da[_0x5712da[_0x52ca('0xd', 'zvpK')] - 0x1];
        if (_0xb64463['length'] > 0x3c) {
            let _0x51d806 = _0xb64463['split']('/'), _0x5ae18e = 0x0;
            _0x51d806[_0x52ca('0xe', 'ik&&')]((_0x5928de, _0x525e35) => {
                if (_0x5928de[_0x52ca('0xf', '75Xx')] > 0x14) {
                    _0x5ae18e = _0x525e35;
                    return !![];
                }
            });
            if (_0x5ae18e === 0x0) {
                _0x5ae18e = _0x51d806[_0x52ca('0x10', 'XvQ1')] - 0x2;
            }
            let _0x1c280a = _0x51d806[_0x52ca('0x11', '&E!N')](0x0, _0x5ae18e);
            return _0x1c280a[_0x52ca('0x12', 'l!tK')]('/');
        } else {
            return _0xb64463;
        }
    },
    'enPassR'(_0x1dc31a, _0x5bd443) {
        let _0x443265 = new JSEncrypt();
        _0x443265[_0x52ca('0x13', 'ig]x')](_0x5bd443);
        let _0x9cdff8 = _0x443265[_0x52ca('0x14', 'ugum')](_0x1dc31a);
        return _0x9cdff8;
    },
    'enPassD'(_0x3180c6, _0x2a7dae, _0x406091) {
        const _0x8ee665 = _0x13786d[_0x52ca('0x15', '*#L8')][_0x52ca('0x16', '%8L@')][_0x52ca('0x17', 'lBJ$')](_0x2a7dae);
        _0x3180c6 = this[_0x52ca('0x18', 'y(82')](_0x3180c6, _0x406091);
        let _0x1905d0 = _0x13786d[_0x52ca('0x19', 'lBJ$')]['encrypt'](_0x3180c6, _0x8ee665, {
            'mode': _0x13786d[_0x52ca('0x1a', '5]aU')][_0x52ca('0x1b', '75Xx')],
            'padding': _0x13786d[_0x52ca('0x1c', 'y(82')]['Pkcs7']
        });
        return _0x1905d0[_0x52ca('0x1d', 'y(82')]();
    }
}