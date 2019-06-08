/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@tensorflow/tfjs-core")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs-core"], t) : t(e.tf = e.tf || {}, e.tf)
}(this, function (exports, tfc) {
    "use strict";
    var __assign = Object.assign || function (e) {
        for (var t, a = 1, r = arguments.length; a < r; a++) for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    };

    function __awaiter(e, t, a, r) {
        return new (a || (a = Promise))(function (n, o) {
            function s(e) {
                try {
                    p(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function i(e) {
                try {
                    p(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function p(e) {
                e.done ? n(e.value) : new a(function (t) {
                    t(e.value)
                }).then(s, i)
            }

            p((r = r.apply(e, t || [])).next())
        })
    }

    function __generator(e, t) {
        var a, r, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function i(o) {
            return function (i) {
                return function (o) {
                    if (a) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (a = 1, r && (n = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(n = n.call(r, o[1])).done) return n;
                        switch (r = 0, n && (o = [0, n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = t.call(e, s)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        a = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, i])
            }
        }
    }

    var commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function createCommonjsModule(e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }

    var aspromise = asPromise;

    function asPromise(e, t) {
        for (var a = new Array(arguments.length - 1), r = 0, n = 2, o = !0; n < arguments.length;) a[r++] = arguments[n++];
        return new Promise(function (n, s) {
            a[r] = function (e) {
                if (o) if (o = !1, e) s(e); else {
                    for (var t = new Array(arguments.length - 1), a = 0; a < t.length;) t[a++] = arguments[a];
                    n.apply(null, t)
                }
            };
            try {
                e.apply(t || null, a)
            } catch (e) {
                o && (o = !1, s(e))
            }
        })
    }

    var base64_1 = createCommonjsModule(function (e, t) {
        var a = t;
        a.length = function (e) {
            var t = e.length;
            if (!t) return 0;
            for (var a = 0; --t % 4 > 1 && "=" === e.charAt(t);) ++a;
            return Math.ceil(3 * e.length) / 4 - a
        };
        for (var r = new Array(64), n = new Array(123), o = 0; o < 64;) n[r[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
        a.encode = function (e, t, a) {
            for (var n, o = null, s = [], i = 0, p = 0; t < a;) {
                var u = e[t++];
                switch (p) {
                    case 0:
                        s[i++] = r[u >> 2], n = (3 & u) << 4, p = 1;
                        break;
                    case 1:
                        s[i++] = r[n | u >> 4], n = (15 & u) << 2, p = 2;
                        break;
                    case 2:
                        s[i++] = r[n | u >> 6], s[i++] = r[63 & u], p = 0
                }
                i > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), i = 0)
            }
            return p && (s[i++] = r[n], s[i++] = 61, 1 === p && (s[i++] = 61)), o ? (i && o.push(String.fromCharCode.apply(String, s.slice(0, i))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, i))
        };
        a.decode = function (e, t, a) {
            for (var r, o = a, s = 0, i = 0; i < e.length;) {
                var p = e.charCodeAt(i++);
                if (61 === p && s > 1) break;
                if (void 0 === (p = n[p])) throw Error("invalid encoding");
                switch (s) {
                    case 0:
                        r = p, s = 1;
                        break;
                    case 1:
                        t[a++] = r << 2 | (48 & p) >> 4, r = p, s = 2;
                        break;
                    case 2:
                        t[a++] = (15 & r) << 4 | (60 & p) >> 2, r = p, s = 3;
                        break;
                    case 3:
                        t[a++] = (3 & r) << 6 | p, s = 0
                }
            }
            if (1 === s) throw Error("invalid encoding");
            return a - o
        }, a.test = function (e) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
        }
    }), eventemitter = EventEmitter;

    function EventEmitter() {
        this._listeners = {}
    }

    EventEmitter.prototype.on = function (e, t, a) {
        return (this._listeners[e] || (this._listeners[e] = [])).push({fn: t, ctx: a || this}), this
    }, EventEmitter.prototype.off = function (e, t) {
        if (void 0 === e) this._listeners = {}; else if (void 0 === t) this._listeners[e] = []; else for (var a = this._listeners[e], r = 0; r < a.length;) a[r].fn === t ? a.splice(r, 1) : ++r;
        return this
    }, EventEmitter.prototype.emit = function (e) {
        var t = this._listeners[e];
        if (t) {
            for (var a = [], r = 1; r < arguments.length;) a.push(arguments[r++]);
            for (r = 0; r < t.length;) t[r].fn.apply(t[r++].ctx, a)
        }
        return this
    };
    var float_1 = factory(factory);

    function factory(e) {
        return "undefined" != typeof Float32Array ? function () {
            var t = new Float32Array([-0]), a = new Uint8Array(t.buffer), r = 128 === a[3];

            function n(e, r, n) {
                t[0] = e, r[n] = a[0], r[n + 1] = a[1], r[n + 2] = a[2], r[n + 3] = a[3]
            }

            function o(e, r, n) {
                t[0] = e, r[n] = a[3], r[n + 1] = a[2], r[n + 2] = a[1], r[n + 3] = a[0]
            }

            function s(e, r) {
                return a[0] = e[r], a[1] = e[r + 1], a[2] = e[r + 2], a[3] = e[r + 3], t[0]
            }

            function i(e, r) {
                return a[3] = e[r], a[2] = e[r + 1], a[1] = e[r + 2], a[0] = e[r + 3], t[0]
            }

            e.writeFloatLE = r ? n : o, e.writeFloatBE = r ? o : n, e.readFloatLE = r ? s : i, e.readFloatBE = r ? i : s
        }() : function () {
            function t(e, t, a, r) {
                var n = t < 0 ? 1 : 0;
                if (n && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 2147483648, a, r); else if (isNaN(t)) e(2143289344, a, r); else if (t > 3.4028234663852886e38) e((n << 31 | 2139095040) >>> 0, a, r); else if (t < 1.1754943508222875e-38) e((n << 31 | Math.round(t / 1.401298464324817e-45)) >>> 0, a, r); else {
                    var o = Math.floor(Math.log(t) / Math.LN2);
                    e((n << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, a, r)
                }
            }

            function a(e, t, a) {
                var r = e(t, a), n = 2 * (r >> 31) + 1, o = r >>> 23 & 255, s = 8388607 & r;
                return 255 === o ? s ? NaN : n * (1 / 0) : 0 === o ? 1.401298464324817e-45 * n * s : n * Math.pow(2, o - 150) * (s + 8388608)
            }

            e.writeFloatLE = t.bind(null, writeUintLE), e.writeFloatBE = t.bind(null, writeUintBE), e.readFloatLE = a.bind(null, readUintLE), e.readFloatBE = a.bind(null, readUintBE)
        }(), "undefined" != typeof Float64Array ? function () {
            var t = new Float64Array([-0]), a = new Uint8Array(t.buffer), r = 128 === a[7];

            function n(e, r, n) {
                t[0] = e, r[n] = a[0], r[n + 1] = a[1], r[n + 2] = a[2], r[n + 3] = a[3], r[n + 4] = a[4], r[n + 5] = a[5], r[n + 6] = a[6], r[n + 7] = a[7]
            }

            function o(e, r, n) {
                t[0] = e, r[n] = a[7], r[n + 1] = a[6], r[n + 2] = a[5], r[n + 3] = a[4], r[n + 4] = a[3], r[n + 5] = a[2], r[n + 6] = a[1], r[n + 7] = a[0]
            }

            function s(e, r) {
                return a[0] = e[r], a[1] = e[r + 1], a[2] = e[r + 2], a[3] = e[r + 3], a[4] = e[r + 4], a[5] = e[r + 5], a[6] = e[r + 6], a[7] = e[r + 7], t[0]
            }

            function i(e, r) {
                return a[7] = e[r], a[6] = e[r + 1], a[5] = e[r + 2], a[4] = e[r + 3], a[3] = e[r + 4], a[2] = e[r + 5], a[1] = e[r + 6], a[0] = e[r + 7], t[0]
            }

            e.writeDoubleLE = r ? n : o, e.writeDoubleBE = r ? o : n, e.readDoubleLE = r ? s : i, e.readDoubleBE = r ? i : s
        }() : function () {
            function t(e, t, a, r, n, o) {
                var s = r < 0 ? 1 : 0;
                if (s && (r = -r), 0 === r) e(0, n, o + t), e(1 / r > 0 ? 0 : 2147483648, n, o + a); else if (isNaN(r)) e(0, n, o + t), e(2146959360, n, o + a); else if (r > 1.7976931348623157e308) e(0, n, o + t), e((s << 31 | 2146435072) >>> 0, n, o + a); else {
                    var i;
                    if (r < 2.2250738585072014e-308) e((i = r / 5e-324) >>> 0, n, o + t), e((s << 31 | i / 4294967296) >>> 0, n, o + a); else {
                        var p = Math.floor(Math.log(r) / Math.LN2);
                        1024 === p && (p = 1023), e(4503599627370496 * (i = r * Math.pow(2, -p)) >>> 0, n, o + t), e((s << 31 | p + 1023 << 20 | 1048576 * i & 1048575) >>> 0, n, o + a)
                    }
                }
            }

            function a(e, t, a, r, n) {
                var o = e(r, n + t), s = e(r, n + a), i = 2 * (s >> 31) + 1, p = s >>> 20 & 2047,
                    u = 4294967296 * (1048575 & s) + o;
                return 2047 === p ? u ? NaN : i * (1 / 0) : 0 === p ? 5e-324 * i * u : i * Math.pow(2, p - 1075) * (u + 4503599627370496)
            }

            e.writeDoubleLE = t.bind(null, writeUintLE, 0, 4), e.writeDoubleBE = t.bind(null, writeUintBE, 4, 0), e.readDoubleLE = a.bind(null, readUintLE, 0, 4), e.readDoubleBE = a.bind(null, readUintBE, 4, 0)
        }(), e
    }

    function writeUintLE(e, t, a) {
        t[a] = 255 & e, t[a + 1] = e >>> 8 & 255, t[a + 2] = e >>> 16 & 255, t[a + 3] = e >>> 24
    }

    function writeUintBE(e, t, a) {
        t[a] = e >>> 24, t[a + 1] = e >>> 16 & 255, t[a + 2] = e >>> 8 & 255, t[a + 3] = 255 & e
    }

    function readUintLE(e, t) {
        return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
    }

    function readUintBE(e, t) {
        return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
    }

    var inquire_1 = inquire;

    function inquire(moduleName) {
        try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod
        } catch (e) {
        }
        return null
    }

    var utf8_1 = createCommonjsModule(function (e, t) {
        var a = t;
        a.length = function (e) {
            for (var t = 0, a = 0, r = 0; r < e.length; ++r) (a = e.charCodeAt(r)) < 128 ? t += 1 : a < 2048 ? t += 2 : 55296 == (64512 & a) && 56320 == (64512 & e.charCodeAt(r + 1)) ? (++r, t += 4) : t += 3;
            return t
        }, a.read = function (e, t, a) {
            if (a - t < 1) return "";
            for (var r, n = null, o = [], s = 0; t < a;) (r = e[t++]) < 128 ? o[s++] = r : r > 191 && r < 224 ? o[s++] = (31 & r) << 6 | 63 & e[t++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, o[s++] = 55296 + (r >> 10), o[s++] = 56320 + (1023 & r)) : o[s++] = (15 & r) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], s > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, o)), s = 0);
            return n ? (s && n.push(String.fromCharCode.apply(String, o.slice(0, s))), n.join("")) : String.fromCharCode.apply(String, o.slice(0, s))
        }, a.write = function (e, t, a) {
            for (var r, n, o = a, s = 0; s < e.length; ++s) (r = e.charCodeAt(s)) < 128 ? t[a++] = r : r < 2048 ? (t[a++] = r >> 6 | 192, t[a++] = 63 & r | 128) : 55296 == (64512 & r) && 56320 == (64512 & (n = e.charCodeAt(s + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & n), ++s, t[a++] = r >> 18 | 240, t[a++] = r >> 12 & 63 | 128, t[a++] = r >> 6 & 63 | 128, t[a++] = 63 & r | 128) : (t[a++] = r >> 12 | 224, t[a++] = r >> 6 & 63 | 128, t[a++] = 63 & r | 128);
            return a - o
        }
    }), pool_1 = pool;

    function pool(e, t, a) {
        var r = a || 8192, n = r >>> 1, o = null, s = r;
        return function (a) {
            if (a < 1 || a > n) return e(a);
            s + a > r && (o = e(r), s = 0);
            var i = t.call(o, s, s += a);
            return 7 & s && (s = 1 + (7 | s)), i
        }
    }

    var longbits = LongBits;

    function LongBits(e, t) {
        this.lo = e >>> 0, this.hi = t >>> 0
    }

    var zero = LongBits.zero = new LongBits(0, 0);
    zero.toNumber = function () {
        return 0
    }, zero.zzEncode = zero.zzDecode = function () {
        return this
    }, zero.length = function () {
        return 1
    };
    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
    LongBits.fromNumber = function (e) {
        if (0 === e) return zero;
        var t = e < 0;
        t && (e = -e);
        var a = e >>> 0, r = (e - a) / 4294967296 >>> 0;
        return t && (r = ~r >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++r > 4294967295 && (r = 0))), new LongBits(a, r)
    }, LongBits.from = function (e) {
        if ("number" == typeof e) return LongBits.fromNumber(e);
        if (minimal.isString(e)) {
            if (!minimal.Long) return LongBits.fromNumber(parseInt(e, 10));
            e = minimal.Long.fromString(e)
        }
        return e.low || e.high ? new LongBits(e.low >>> 0, e.high >>> 0) : zero
    }, LongBits.prototype.toNumber = function (e) {
        if (!e && this.hi >>> 31) {
            var t = 1 + ~this.lo >>> 0, a = ~this.hi >>> 0;
            return t || (a = a + 1 >>> 0), -(t + 4294967296 * a)
        }
        return this.lo + 4294967296 * this.hi
    }, LongBits.prototype.toLong = function (e) {
        return minimal.Long ? new minimal.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
            low: 0 | this.lo,
            high: 0 | this.hi,
            unsigned: Boolean(e)
        }
    };
    var charCodeAt = String.prototype.charCodeAt;
    LongBits.fromHash = function (e) {
        return e === zeroHash ? zero : new LongBits((charCodeAt.call(e, 0) | charCodeAt.call(e, 1) << 8 | charCodeAt.call(e, 2) << 16 | charCodeAt.call(e, 3) << 24) >>> 0, (charCodeAt.call(e, 4) | charCodeAt.call(e, 5) << 8 | charCodeAt.call(e, 6) << 16 | charCodeAt.call(e, 7) << 24) >>> 0)
    }, LongBits.prototype.toHash = function () {
        return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
    }, LongBits.prototype.zzEncode = function () {
        var e = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
    }, LongBits.prototype.zzDecode = function () {
        var e = -(1 & this.lo);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
    }, LongBits.prototype.length = function () {
        var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
        return 0 === a ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : a < 128 ? 9 : 10
    };
    var minimal = createCommonjsModule(function (e, t) {
        var a = t;

        function r(e, t, a) {
            for (var r = Object.keys(t), n = 0; n < r.length; ++n) void 0 !== e[r[n]] && a || (e[r[n]] = t[r[n]]);
            return e
        }

        function n(e) {
            function t(e, a) {
                if (!(this instanceof t)) return new t(e, a);
                Object.defineProperty(this, "message", {
                    get: function () {
                        return e
                    }
                }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {value: (new Error).stack || ""}), a && r(this, a)
            }

            return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return e
                }
            }), t.prototype.toString = function () {
                return this.name + ": " + this.message
            }, t
        }

        a.asPromise = aspromise, a.base64 = base64_1, a.EventEmitter = eventemitter, a.float = float_1, a.inquire = inquire_1, a.utf8 = utf8_1, a.pool = pool_1, a.LongBits = longbits, a.emptyArray = Object.freeze ? Object.freeze([]) : [], a.emptyObject = Object.freeze ? Object.freeze({}) : {}, a.isNode = Boolean(commonjsGlobal.process && commonjsGlobal.process.versions && commonjsGlobal.process.versions.node), a.isInteger = Number.isInteger || function (e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, a.isString = function (e) {
            return "string" == typeof e || e instanceof String
        }, a.isObject = function (e) {
            return e && "object" == typeof e
        }, a.isset = a.isSet = function (e, t) {
            var a = e[t];
            return !(null == a || !e.hasOwnProperty(t)) && ("object" != typeof a || (Array.isArray(a) ? a.length : Object.keys(a).length) > 0)
        }, a.Buffer = function () {
            try {
                var e = a.inquire("buffer").Buffer;
                return e.prototype.utf8Write ? e : null
            } catch (e) {
                return null
            }
        }(), a._Buffer_from = null, a._Buffer_allocUnsafe = null, a.newBuffer = function (e) {
            return "number" == typeof e ? a.Buffer ? a._Buffer_allocUnsafe(e) : new a.Array(e) : a.Buffer ? a._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
        }, a.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, a.Long = commonjsGlobal.dcodeIO && commonjsGlobal.dcodeIO.Long || a.inquire("long"), a.key2Re = /^true|false|0|1$/, a.key32Re = /^-?(?:0|[1-9][0-9]*)$/, a.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, a.longToHash = function (e) {
            return e ? a.LongBits.from(e).toHash() : a.LongBits.zeroHash
        }, a.longFromHash = function (e, t) {
            var r = a.LongBits.fromHash(e);
            return a.Long ? a.Long.fromBits(r.lo, r.hi, t) : r.toNumber(Boolean(t))
        }, a.merge = r, a.lcFirst = function (e) {
            return e.charAt(0).toLowerCase() + e.substring(1)
        }, a.newError = n, a.ProtocolError = n("ProtocolError"), a.oneOfGetter = function (e) {
            for (var t = {}, a = 0; a < e.length; ++a) t[e[a]] = 1;
            return function () {
                for (var e = Object.keys(this), a = e.length - 1; a > -1; --a) if (1 === t[e[a]] && void 0 !== this[e[a]] && null !== this[e[a]]) return e[a]
            }
        }, a.oneOfSetter = function (e) {
            return function (t) {
                for (var a = 0; a < e.length; ++a) e[a] !== t && delete this[e[a]]
            }
        }, a.toJSONOptions = {longs: String, enums: String, bytes: String, json: !0}, a._configure = function () {
            var e = a.Buffer;
            e ? (a._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, a) {
                return new e(t, a)
            }, a._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
                return new e(t)
            }) : a._Buffer_from = a._Buffer_allocUnsafe = null
        }
    }), writer = Writer, BufferWriter, LongBits$1 = minimal.LongBits, base64 = minimal.base64, utf8 = minimal.utf8;

    function Op(e, t, a) {
        this.fn = e, this.len = t, this.next = void 0, this.val = a
    }

    function noop() {
    }

    function State(e) {
        this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states
    }

    function Writer() {
        this.len = 0, this.head = new Op(noop, 0, 0), this.tail = this.head, this.states = null
    }

    function writeByte(e, t, a) {
        t[a] = 255 & e
    }

    function writeVarint32(e, t, a) {
        for (; e > 127;) t[a++] = 127 & e | 128, e >>>= 7;
        t[a] = e
    }

    function VarintOp(e, t) {
        this.len = e, this.next = void 0, this.val = t
    }

    function writeVarint64(e, t, a) {
        for (; e.hi;) t[a++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
        for (; e.lo > 127;) t[a++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
        t[a++] = e.lo
    }

    function writeFixed32(e, t, a) {
        t[a] = 255 & e, t[a + 1] = e >>> 8 & 255, t[a + 2] = e >>> 16 & 255, t[a + 3] = e >>> 24
    }

    Writer.create = minimal.Buffer ? function () {
        return (Writer.create = function () {
            return new BufferWriter
        })()
    } : function () {
        return new Writer
    }, Writer.alloc = function (e) {
        return new minimal.Array(e)
    }, minimal.Array !== Array && (Writer.alloc = minimal.pool(Writer.alloc, minimal.Array.prototype.subarray)), Writer.prototype._push = function (e, t, a) {
        return this.tail = this.tail.next = new Op(e, t, a), this.len += t, this
    }, VarintOp.prototype = Object.create(Op.prototype), VarintOp.prototype.fn = writeVarint32, Writer.prototype.uint32 = function (e) {
        return this.len += (this.tail = this.tail.next = new VarintOp((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this
    }, Writer.prototype.int32 = function (e) {
        return e < 0 ? this._push(writeVarint64, 10, LongBits$1.fromNumber(e)) : this.uint32(e)
    }, Writer.prototype.sint32 = function (e) {
        return this.uint32((e << 1 ^ e >> 31) >>> 0)
    }, Writer.prototype.uint64 = function (e) {
        var t = LongBits$1.from(e);
        return this._push(writeVarint64, t.length(), t)
    }, Writer.prototype.int64 = Writer.prototype.uint64, Writer.prototype.sint64 = function (e) {
        var t = LongBits$1.from(e).zzEncode();
        return this._push(writeVarint64, t.length(), t)
    }, Writer.prototype.bool = function (e) {
        return this._push(writeByte, 1, e ? 1 : 0)
    }, Writer.prototype.fixed32 = function (e) {
        return this._push(writeFixed32, 4, e >>> 0)
    }, Writer.prototype.sfixed32 = Writer.prototype.fixed32, Writer.prototype.fixed64 = function (e) {
        var t = LongBits$1.from(e);
        return this._push(writeFixed32, 4, t.lo)._push(writeFixed32, 4, t.hi)
    }, Writer.prototype.sfixed64 = Writer.prototype.fixed64, Writer.prototype.float = function (e) {
        return this._push(minimal.float.writeFloatLE, 4, e)
    }, Writer.prototype.double = function (e) {
        return this._push(minimal.float.writeDoubleLE, 8, e)
    };
    var writeBytes = minimal.Array.prototype.set ? function (e, t, a) {
        t.set(e, a)
    } : function (e, t, a) {
        for (var r = 0; r < e.length; ++r) t[a + r] = e[r]
    };
    Writer.prototype.bytes = function (e) {
        var t = e.length >>> 0;
        if (!t) return this._push(writeByte, 1, 0);
        if (minimal.isString(e)) {
            var a = Writer.alloc(t = base64.length(e));
            base64.decode(e, a, 0), e = a
        }
        return this.uint32(t)._push(writeBytes, t, e)
    }, Writer.prototype.string = function (e) {
        var t = utf8.length(e);
        return t ? this.uint32(t)._push(utf8.write, t, e) : this._push(writeByte, 1, 0)
    }, Writer.prototype.fork = function () {
        return this.states = new State(this), this.head = this.tail = new Op(noop, 0, 0), this.len = 0, this
    }, Writer.prototype.reset = function () {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Op(noop, 0, 0), this.len = 0), this
    }, Writer.prototype.ldelim = function () {
        var e = this.head, t = this.tail, a = this.len;
        return this.reset().uint32(a), a && (this.tail.next = e.next, this.tail = t, this.len += a), this
    }, Writer.prototype.finish = function () {
        for (var e = this.head.next, t = this.constructor.alloc(this.len), a = 0; e;) e.fn(e.val, t, a), a += e.len, e = e.next;
        return t
    }, Writer._configure = function (e) {
        BufferWriter = e
    };
    var writer_buffer = BufferWriter$1;
    (BufferWriter$1.prototype = Object.create(writer.prototype)).constructor = BufferWriter$1;
    var Buffer = minimal.Buffer;

    function BufferWriter$1() {
        writer.call(this)
    }

    BufferWriter$1.alloc = function (e) {
        return (BufferWriter$1.alloc = minimal._Buffer_allocUnsafe)(e)
    };
    var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && "set" === Buffer.prototype.set.name ? function (e, t, a) {
        t.set(e, a)
    } : function (e, t, a) {
        if (e.copy) e.copy(t, a, 0, e.length); else for (var r = 0; r < e.length;) t[a++] = e[r++]
    };

    function writeStringBuffer(e, t, a) {
        e.length < 40 ? minimal.utf8.write(e, t, a) : t.utf8Write(e, a)
    }

    BufferWriter$1.prototype.bytes = function (e) {
        minimal.isString(e) && (e = minimal._Buffer_from(e, "base64"));
        var t = e.length >>> 0;
        return this.uint32(t), t && this._push(writeBytesBuffer, t, e), this
    }, BufferWriter$1.prototype.string = function (e) {
        var t = Buffer.byteLength(e);
        return this.uint32(t), t && this._push(writeStringBuffer, t, e), this
    };
    var reader = Reader, BufferReader, LongBits$2 = minimal.LongBits, utf8$1 = minimal.utf8;

    function indexOutOfRange(e, t) {
        return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
    }

    function Reader(e) {
        this.buf = e, this.pos = 0, this.len = e.length
    }

    var create_array = "undefined" != typeof Uint8Array ? function (e) {
        if (e instanceof Uint8Array || Array.isArray(e)) return new Reader(e);
        throw Error("illegal buffer")
    } : function (e) {
        if (Array.isArray(e)) return new Reader(e);
        throw Error("illegal buffer")
    }, value;

    function readLongVarint() {
        var e = new LongBits$2(0, 0), t = 0;
        if (!(this.len - this.pos > 4)) {
            for (; t < 3; ++t) {
                if (this.pos >= this.len) throw indexOutOfRange(this);
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e
            }
            return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e
        }
        for (; t < 4; ++t) if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
        if (t = 0, this.len - this.pos > 4) {
            for (; t < 5; ++t) if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
        } else for (; t < 5; ++t) {
            if (this.pos >= this.len) throw indexOutOfRange(this);
            if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
        }
        throw Error("invalid varint encoding")
    }

    function readFixed32_end(e, t) {
        return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
    }

    function readFixed64() {
        if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
        return new LongBits$2(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4))
    }

    Reader.create = minimal.Buffer ? function (e) {
        return (Reader.create = function (e) {
            return minimal.Buffer.isBuffer(e) ? new BufferReader(e) : create_array(e)
        })(e)
    } : create_array, Reader.prototype._slice = minimal.Array.prototype.subarray || minimal.Array.prototype.slice, Reader.prototype.uint32 = (value = 4294967295, function () {
        if (value = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return value;
        if (value = (value | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return value;
        if (value = (value | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return value;
        if (value = (value | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return value;
        if (value = (value | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return value;
        if ((this.pos += 5) > this.len) throw this.pos = this.len, indexOutOfRange(this, 10);
        return value
    }), Reader.prototype.int32 = function () {
        return 0 | this.uint32()
    }, Reader.prototype.sint32 = function () {
        var e = this.uint32();
        return e >>> 1 ^ -(1 & e) | 0
    }, Reader.prototype.bool = function () {
        return 0 !== this.uint32()
    }, Reader.prototype.fixed32 = function () {
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
        return readFixed32_end(this.buf, this.pos += 4)
    }, Reader.prototype.sfixed32 = function () {
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
        return 0 | readFixed32_end(this.buf, this.pos += 4)
    }, Reader.prototype.float = function () {
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
        var e = minimal.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, e
    }, Reader.prototype.double = function () {
        if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
        var e = minimal.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, e
    }, Reader.prototype.bytes = function () {
        var e = this.uint32(), t = this.pos, a = this.pos + e;
        if (a > this.len) throw indexOutOfRange(this, e);
        return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, a) : t === a ? new this.buf.constructor(0) : this._slice.call(this.buf, t, a)
    }, Reader.prototype.string = function () {
        var e = this.bytes();
        return utf8$1.read(e, 0, e.length)
    }, Reader.prototype.skip = function (e) {
        if ("number" == typeof e) {
            if (this.pos + e > this.len) throw indexOutOfRange(this, e);
            this.pos += e
        } else do {
            if (this.pos >= this.len) throw indexOutOfRange(this)
        } while (128 & this.buf[this.pos++]);
        return this
    }, Reader.prototype.skipType = function (e) {
        switch (e) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (; ;) {
                    if (4 == (e = 7 & this.uint32())) break;
                    this.skipType(e)
                }
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + e + " at offset " + this.pos)
        }
        return this
    }, Reader._configure = function (e) {
        BufferReader = e;
        var t = minimal.Long ? "toLong" : "toNumber";
        minimal.merge(Reader.prototype, {
            int64: function () {
                return readLongVarint.call(this)[t](!1)
            }, uint64: function () {
                return readLongVarint.call(this)[t](!0)
            }, sint64: function () {
                return readLongVarint.call(this).zzDecode()[t](!1)
            }, fixed64: function () {
                return readFixed64.call(this)[t](!0)
            }, sfixed64: function () {
                return readFixed64.call(this)[t](!1)
            }
        })
    };
    var reader_buffer = BufferReader$1;

    function BufferReader$1(e) {
        reader.call(this, e)
    }

    (BufferReader$1.prototype = Object.create(reader.prototype)).constructor = BufferReader$1, minimal.Buffer && (BufferReader$1.prototype._slice = minimal.Buffer.prototype.slice), BufferReader$1.prototype.string = function () {
        var e = this.uint32();
        return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len))
    };
    var service = Service;

    function Service(e, t, a) {
        if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
        minimal.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(a)
    }

    (Service.prototype = Object.create(minimal.EventEmitter.prototype)).constructor = Service, Service.prototype.rpcCall = function e(t, a, r, n, o) {
        if (!n) throw TypeError("request must be specified");
        var s = this;
        if (!o) return minimal.asPromise(e, s, t, a, r, n);
        if (s.rpcImpl) try {
            return s.rpcImpl(t, a[s.requestDelimited ? "encodeDelimited" : "encode"](n).finish(), function (e, a) {
                if (e) return s.emit("error", e, t), o(e);
                if (null !== a) {
                    if (!(a instanceof r)) try {
                        a = r[s.responseDelimited ? "decodeDelimited" : "decode"](a)
                    } catch (e) {
                        return s.emit("error", e, t), o(e)
                    }
                    return s.emit("data", a, t), o(null, a)
                }
                s.end(!0)
            })
        } catch (e) {
            return s.emit("error", e, t), void setTimeout(function () {
                o(e)
            }, 0)
        } else setTimeout(function () {
            o(Error("already ended"))
        }, 0)
    }, Service.prototype.end = function (e) {
        return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
    };
    var rpc_1 = createCommonjsModule(function (e, t) {
            t.Service = service
        }), roots = {}, indexMinimal = createCommonjsModule(function (e, t) {
            var a = t;

            function r() {
                a.Reader._configure(a.BufferReader), a.util._configure()
            }

            a.build = "minimal", a.Writer = writer, a.BufferWriter = writer_buffer, a.Reader = reader, a.BufferReader = reader_buffer, a.util = minimal, a.rpc = rpc_1, a.roots = roots, a.configure = r, a.Writer._configure(a.BufferWriter), r()
        }), minimal$1 = indexMinimal, minimal_1 = minimal$1.roots, minimal_2 = minimal$1.Reader, minimal_3 = minimal$1.util,
        $Reader = minimal$1.Reader, $util = minimal$1.util,
        $root = minimal$1.roots.default || (minimal$1.roots.default = {}), valuesById, values, tensorflow;
    $root.tensorflow = (tensorflow = {}, tensorflow.Any = function () {
        function e(e) {
            if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.typeUrl = "", e.prototype.value = $util.newBuffer([]), e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.Any; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.typeUrl = e.string();
                        break;
                    case 2:
                        r.value = e.bytes();
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow.DataType = (valuesById = {}, (values = Object.create(valuesById))[valuesById[0] = "DT_INVALID"] = 0, values[valuesById[1] = "DT_FLOAT"] = 1, values[valuesById[2] = "DT_DOUBLE"] = 2, values[valuesById[3] = "DT_INT32"] = 3, values[valuesById[4] = "DT_UINT8"] = 4, values[valuesById[5] = "DT_INT16"] = 5, values[valuesById[6] = "DT_INT8"] = 6, values[valuesById[7] = "DT_STRING"] = 7, values[valuesById[8] = "DT_COMPLEX64"] = 8, values[valuesById[9] = "DT_INT64"] = 9, values[valuesById[10] = "DT_BOOL"] = 10, values[valuesById[11] = "DT_QINT8"] = 11, values[valuesById[12] = "DT_QUINT8"] = 12, values[valuesById[13] = "DT_QINT32"] = 13, values[valuesById[14] = "DT_BFLOAT16"] = 14, values[valuesById[101] = "DT_FLOAT_REF"] = 101, values[valuesById[102] = "DT_DOUBLE_REF"] = 102, values[valuesById[103] = "DT_INT32_REF"] = 103, values[valuesById[104] = "DT_UINT8_REF"] = 104, values[valuesById[105] = "DT_INT16_REF"] = 105, values[valuesById[106] = "DT_INT8_REF"] = 106, values[valuesById[107] = "DT_STRING_REF"] = 107, values[valuesById[108] = "DT_COMPLEX64_REF"] = 108, values[valuesById[109] = "DT_INT64_REF"] = 109, values[valuesById[110] = "DT_BOOL_REF"] = 110, values[valuesById[111] = "DT_QINT8_REF"] = 111, values[valuesById[112] = "DT_QUINT8_REF"] = 112, values[valuesById[113] = "DT_QINT32_REF"] = 113, values[valuesById[114] = "DT_BFLOAT16_REF"] = 114, values), tensorflow.TensorShape = function () {
        function e(e) {
            if (this.dim = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.dim = $util.emptyArray, e.prototype.unknownRank = !1, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.TensorShape; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 2:
                        r.dim && r.dim.length || (r.dim = []), r.dim.push($root.tensorflow.TensorShape.Dim.decode(e, e.uint32()));
                        break;
                    case 3:
                        r.unknownRank = e.bool();
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e.Dim = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0, e.prototype.name = "", e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.TensorShape.Dim; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.size = e.int64();
                            break;
                        case 2:
                            r.name = e.string();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e
    }(), tensorflow.Tensor = function () {
        function e(e) {
            if (this.floatVal = [], this.doubleVal = [], this.intVal = [], this.stringVal = [], this.scomplexVal = [], this.int64Val = [], this.boolVal = [], this.uint32Val = [], this.uint64Val = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.dtype = 0, e.prototype.tensorShape = null, e.prototype.versionNumber = 0, e.prototype.tensorContent = $util.newBuffer([]), e.prototype.floatVal = $util.emptyArray, e.prototype.doubleVal = $util.emptyArray, e.prototype.intVal = $util.emptyArray, e.prototype.stringVal = $util.emptyArray, e.prototype.scomplexVal = $util.emptyArray, e.prototype.int64Val = $util.emptyArray, e.prototype.boolVal = $util.emptyArray, e.prototype.uint32Val = $util.emptyArray, e.prototype.uint64Val = $util.emptyArray, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.Tensor; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.dtype = e.int32();
                        break;
                    case 2:
                        r.tensorShape = $root.tensorflow.TensorShape.decode(e, e.uint32());
                        break;
                    case 3:
                        r.versionNumber = e.int32();
                        break;
                    case 4:
                        r.tensorContent = e.bytes();
                        break;
                    case 5:
                        if (r.floatVal && r.floatVal.length || (r.floatVal = []), 2 == (7 & n)) for (var o = e.uint32() + e.pos; e.pos < o;) r.floatVal.push(e.float()); else r.floatVal.push(e.float());
                        break;
                    case 6:
                        if (r.doubleVal && r.doubleVal.length || (r.doubleVal = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.doubleVal.push(e.double()); else r.doubleVal.push(e.double());
                        break;
                    case 7:
                        if (r.intVal && r.intVal.length || (r.intVal = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.intVal.push(e.int32()); else r.intVal.push(e.int32());
                        break;
                    case 8:
                        r.stringVal && r.stringVal.length || (r.stringVal = []), r.stringVal.push(e.bytes());
                        break;
                    case 9:
                        if (r.scomplexVal && r.scomplexVal.length || (r.scomplexVal = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.scomplexVal.push(e.float()); else r.scomplexVal.push(e.float());
                        break;
                    case 10:
                        if (r.int64Val && r.int64Val.length || (r.int64Val = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.int64Val.push(e.int64()); else r.int64Val.push(e.int64());
                        break;
                    case 11:
                        if (r.boolVal && r.boolVal.length || (r.boolVal = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.boolVal.push(e.bool()); else r.boolVal.push(e.bool());
                        break;
                    case 16:
                        if (r.uint32Val && r.uint32Val.length || (r.uint32Val = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.uint32Val.push(e.uint32()); else r.uint32Val.push(e.uint32());
                        break;
                    case 17:
                        if (r.uint64Val && r.uint64Val.length || (r.uint64Val = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.uint64Val.push(e.uint64()); else r.uint64Val.push(e.uint64());
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow.AttrValue = function () {
        function e(e) {
            if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        var t;
        return e.prototype.list = null, e.prototype.s = $util.newBuffer([]), e.prototype.i = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0, e.prototype.f = 0, e.prototype.b = !1, e.prototype.type = 0, e.prototype.shape = null, e.prototype.tensor = null, e.prototype.placeholder = "", e.prototype.func = null, Object.defineProperty(e.prototype, "value", {
            get: $util.oneOfGetter(t = ["list", "s", "i", "f", "b", "type", "shape", "tensor", "placeholder", "func"]),
            set: $util.oneOfSetter(t)
        }), e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.AttrValue; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.list = $root.tensorflow.AttrValue.ListValue.decode(e, e.uint32());
                        break;
                    case 2:
                        r.s = e.bytes();
                        break;
                    case 3:
                        r.i = e.int64();
                        break;
                    case 4:
                        r.f = e.float();
                        break;
                    case 5:
                        r.b = e.bool();
                        break;
                    case 6:
                        r.type = e.int32();
                        break;
                    case 7:
                        r.shape = $root.tensorflow.TensorShape.decode(e, e.uint32());
                        break;
                    case 8:
                        r.tensor = $root.tensorflow.Tensor.decode(e, e.uint32());
                        break;
                    case 9:
                        r.placeholder = e.string();
                        break;
                    case 10:
                        r.func = $root.tensorflow.NameAttrList.decode(e, e.uint32());
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e.ListValue = function () {
            function e(e) {
                if (this.s = [], this.i = [], this.f = [], this.b = [], this.type = [], this.shape = [], this.tensor = [], this.func = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.s = $util.emptyArray, e.prototype.i = $util.emptyArray, e.prototype.f = $util.emptyArray, e.prototype.b = $util.emptyArray, e.prototype.type = $util.emptyArray, e.prototype.shape = $util.emptyArray, e.prototype.tensor = $util.emptyArray, e.prototype.func = $util.emptyArray, e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.AttrValue.ListValue; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 2:
                            r.s && r.s.length || (r.s = []), r.s.push(e.bytes());
                            break;
                        case 3:
                            if (r.i && r.i.length || (r.i = []), 2 == (7 & n)) for (var o = e.uint32() + e.pos; e.pos < o;) r.i.push(e.int64()); else r.i.push(e.int64());
                            break;
                        case 4:
                            if (r.f && r.f.length || (r.f = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.f.push(e.float()); else r.f.push(e.float());
                            break;
                        case 5:
                            if (r.b && r.b.length || (r.b = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.b.push(e.bool()); else r.b.push(e.bool());
                            break;
                        case 6:
                            if (r.type && r.type.length || (r.type = []), 2 == (7 & n)) for (o = e.uint32() + e.pos; e.pos < o;) r.type.push(e.int32()); else r.type.push(e.int32());
                            break;
                        case 7:
                            r.shape && r.shape.length || (r.shape = []), r.shape.push($root.tensorflow.TensorShape.decode(e, e.uint32()));
                            break;
                        case 8:
                            r.tensor && r.tensor.length || (r.tensor = []), r.tensor.push($root.tensorflow.Tensor.decode(e, e.uint32()));
                            break;
                        case 9:
                            r.func && r.func.length || (r.func = []), r.func.push($root.tensorflow.NameAttrList.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e
    }(), tensorflow.NameAttrList = function () {
        function e(e) {
            if (this.attr = {}, e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.name = "", e.prototype.attr = $util.emptyObject, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a, r = void 0 === t ? e.len : e.pos + t, n = new $root.tensorflow.NameAttrList; e.pos < r;) {
                var o = e.uint32();
                switch (o >>> 3) {
                    case 1:
                        n.name = e.string();
                        break;
                    case 2:
                        e.skip().pos++, n.attr === $util.emptyObject && (n.attr = {}), a = e.string(), e.pos++, n.attr[a] = $root.tensorflow.AttrValue.decode(e, e.uint32());
                        break;
                    default:
                        e.skipType(7 & o)
                }
            }
            return n
        }, e
    }(), tensorflow.NodeDef = function () {
        function e(e) {
            if (this.input = [], this.attr = {}, e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.name = "", e.prototype.op = "", e.prototype.input = $util.emptyArray, e.prototype.device = "", e.prototype.attr = $util.emptyObject, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a, r = void 0 === t ? e.len : e.pos + t, n = new $root.tensorflow.NodeDef; e.pos < r;) {
                var o = e.uint32();
                switch (o >>> 3) {
                    case 1:
                        n.name = e.string();
                        break;
                    case 2:
                        n.op = e.string();
                        break;
                    case 3:
                        n.input && n.input.length || (n.input = []), n.input.push(e.string());
                        break;
                    case 4:
                        n.device = e.string();
                        break;
                    case 5:
                        e.skip().pos++, n.attr === $util.emptyObject && (n.attr = {}), a = e.string(), e.pos++, n.attr[a] = $root.tensorflow.AttrValue.decode(e, e.uint32());
                        break;
                    default:
                        e.skipType(7 & o)
                }
            }
            return n
        }, e
    }(), tensorflow.VersionDef = function () {
        function e(e) {
            if (this.badConsumers = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.producer = 0, e.prototype.minConsumer = 0, e.prototype.badConsumers = $util.emptyArray, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.VersionDef; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.producer = e.int32();
                        break;
                    case 2:
                        r.minConsumer = e.int32();
                        break;
                    case 3:
                        if (r.badConsumers && r.badConsumers.length || (r.badConsumers = []), 2 == (7 & n)) for (var o = e.uint32() + e.pos; e.pos < o;) r.badConsumers.push(e.int32()); else r.badConsumers.push(e.int32());
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow.GraphDef = function () {
        function e(e) {
            if (this.node = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.node = $util.emptyArray, e.prototype.versions = null, e.prototype.library = null, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.GraphDef; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.node && r.node.length || (r.node = []), r.node.push($root.tensorflow.NodeDef.decode(e, e.uint32()));
                        break;
                    case 4:
                        r.versions = $root.tensorflow.VersionDef.decode(e, e.uint32());
                        break;
                    case 2:
                        r.library = $root.tensorflow.FunctionDefLibrary.decode(e, e.uint32());
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow.CollectionDef = function () {
        function e(e) {
            if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        var t;
        return e.prototype.nodeList = null, e.prototype.bytesList = null, e.prototype.int64List = null, e.prototype.floatList = null, e.prototype.anyList = null, Object.defineProperty(e.prototype, "kind", {
            get: $util.oneOfGetter(t = ["nodeList", "bytesList", "int64List", "floatList", "anyList"]),
            set: $util.oneOfSetter(t)
        }), e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.CollectionDef; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.nodeList = $root.tensorflow.CollectionDef.NodeList.decode(e, e.uint32());
                        break;
                    case 2:
                        r.bytesList = $root.tensorflow.CollectionDef.BytesList.decode(e, e.uint32());
                        break;
                    case 3:
                        r.int64List = $root.tensorflow.CollectionDef.Int64List.decode(e, e.uint32());
                        break;
                    case 4:
                        r.floatList = $root.tensorflow.CollectionDef.FloatList.decode(e, e.uint32());
                        break;
                    case 5:
                        r.anyList = $root.tensorflow.CollectionDef.AnyList.decode(e, e.uint32());
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e.NodeList = function () {
            function e(e) {
                if (this.value = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.value = $util.emptyArray, e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.CollectionDef.NodeList; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.value && r.value.length || (r.value = []), r.value.push(e.string());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e.BytesList = function () {
            function e(e) {
                if (this.value = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.value = $util.emptyArray, e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.CollectionDef.BytesList; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.value && r.value.length || (r.value = []), r.value.push(e.bytes());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e.Int64List = function () {
            function e(e) {
                if (this.value = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.value = $util.emptyArray, e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.CollectionDef.Int64List; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            if (r.value && r.value.length || (r.value = []), 2 == (7 & n)) for (var o = e.uint32() + e.pos; e.pos < o;) r.value.push(e.int64()); else r.value.push(e.int64());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e.FloatList = function () {
            function e(e) {
                if (this.value = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.value = $util.emptyArray, e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.CollectionDef.FloatList; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            if (r.value && r.value.length || (r.value = []), 2 == (7 & n)) for (var o = e.uint32() + e.pos; e.pos < o;) r.value.push(e.float()); else r.value.push(e.float());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e.AnyList = function () {
            function e(e) {
                if (this.value = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.value = $util.emptyArray, e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.CollectionDef.AnyList; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.value && r.value.length || (r.value = []), r.value.push($root.tensorflow.Any.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e
    }(), tensorflow.SaverDef = function () {
        function e(e) {
            if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        var t, a;
        return e.prototype.filenameTensorName = "", e.prototype.saveTensorName = "", e.prototype.restoreOpName = "", e.prototype.maxToKeep = 0, e.prototype.sharded = !1, e.prototype.keepCheckpointEveryNHours = 0, e.prototype.version = 0, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.SaverDef; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.filenameTensorName = e.string();
                        break;
                    case 2:
                        r.saveTensorName = e.string();
                        break;
                    case 3:
                        r.restoreOpName = e.string();
                        break;
                    case 4:
                        r.maxToKeep = e.int32();
                        break;
                    case 5:
                        r.sharded = e.bool();
                        break;
                    case 6:
                        r.keepCheckpointEveryNHours = e.float();
                        break;
                    case 7:
                        r.version = e.int32();
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e.CheckpointFormatVersion = (t = {}, (a = Object.create(t))[t[0] = "LEGACY"] = 0, a[t[1] = "V1"] = 1, a[t[2] = "V2"] = 2, a), e
    }(), tensorflow.TensorInfo = function () {
        function e(e) {
            if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        var t;
        return e.prototype.name = "", e.prototype.cooSparse = null, e.prototype.dtype = 0, e.prototype.tensorShape = null, Object.defineProperty(e.prototype, "encoding", {
            get: $util.oneOfGetter(t = ["name", "cooSparse"]),
            set: $util.oneOfSetter(t)
        }), e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.TensorInfo; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.name = e.string();
                        break;
                    case 4:
                        r.cooSparse = $root.tensorflow.TensorInfo.CooSparse.decode(e, e.uint32());
                        break;
                    case 2:
                        r.dtype = e.int32();
                        break;
                    case 3:
                        r.tensorShape = $root.tensorflow.TensorShape.decode(e, e.uint32());
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e.CooSparse = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.valuesTensorName = "", e.prototype.indicesTensorName = "", e.prototype.denseShapeTensorName = "", e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.TensorInfo.CooSparse; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.valuesTensorName = e.string();
                            break;
                        case 2:
                            r.indicesTensorName = e.string();
                            break;
                        case 3:
                            r.denseShapeTensorName = e.string();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e
    }(), tensorflow.SignatureDef = function () {
        function e(e) {
            if (this.inputs = {}, this.outputs = {}, e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.inputs = $util.emptyObject, e.prototype.outputs = $util.emptyObject, e.prototype.methodName = "", e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a, r = void 0 === t ? e.len : e.pos + t, n = new $root.tensorflow.SignatureDef; e.pos < r;) {
                var o = e.uint32();
                switch (o >>> 3) {
                    case 1:
                        e.skip().pos++, n.inputs === $util.emptyObject && (n.inputs = {}), a = e.string(), e.pos++, n.inputs[a] = $root.tensorflow.TensorInfo.decode(e, e.uint32());
                        break;
                    case 2:
                        e.skip().pos++, n.outputs === $util.emptyObject && (n.outputs = {}), a = e.string(), e.pos++, n.outputs[a] = $root.tensorflow.TensorInfo.decode(e, e.uint32());
                        break;
                    case 3:
                        n.methodName = e.string();
                        break;
                    default:
                        e.skipType(7 & o)
                }
            }
            return n
        }, e
    }(), tensorflow.AssetFileDef = function () {
        function e(e) {
            if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.tensorInfo = null, e.prototype.filename = "", e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.AssetFileDef; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.tensorInfo = $root.tensorflow.TensorInfo.decode(e, e.uint32());
                        break;
                    case 2:
                        r.filename = e.string();
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow.OpDef = function () {
        function e(e) {
            if (this.inputArg = [], this.outputArg = [], this.attr = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.name = "", e.prototype.inputArg = $util.emptyArray, e.prototype.outputArg = $util.emptyArray, e.prototype.attr = $util.emptyArray, e.prototype.deprecation = null, e.prototype.summary = "", e.prototype.description = "", e.prototype.isCommutative = !1, e.prototype.isAggregate = !1, e.prototype.isStateful = !1, e.prototype.allowsUninitializedInput = !1, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.OpDef; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.name = e.string();
                        break;
                    case 2:
                        r.inputArg && r.inputArg.length || (r.inputArg = []), r.inputArg.push($root.tensorflow.OpDef.ArgDef.decode(e, e.uint32()));
                        break;
                    case 3:
                        r.outputArg && r.outputArg.length || (r.outputArg = []), r.outputArg.push($root.tensorflow.OpDef.ArgDef.decode(e, e.uint32()));
                        break;
                    case 4:
                        r.attr && r.attr.length || (r.attr = []), r.attr.push($root.tensorflow.OpDef.AttrDef.decode(e, e.uint32()));
                        break;
                    case 8:
                        r.deprecation = $root.tensorflow.OpDef.OpDeprecation.decode(e, e.uint32());
                        break;
                    case 5:
                        r.summary = e.string();
                        break;
                    case 6:
                        r.description = e.string();
                        break;
                    case 18:
                        r.isCommutative = e.bool();
                        break;
                    case 16:
                        r.isAggregate = e.bool();
                        break;
                    case 17:
                        r.isStateful = e.bool();
                        break;
                    case 19:
                        r.allowsUninitializedInput = e.bool();
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e.ArgDef = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.name = "", e.prototype.description = "", e.prototype.type = 0, e.prototype.typeAttr = "", e.prototype.numberAttr = "", e.prototype.typeListAttr = "", e.prototype.isRef = !1, e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.OpDef.ArgDef; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.name = e.string();
                            break;
                        case 2:
                            r.description = e.string();
                            break;
                        case 3:
                            r.type = e.int32();
                            break;
                        case 4:
                            r.typeAttr = e.string();
                            break;
                        case 5:
                            r.numberAttr = e.string();
                            break;
                        case 6:
                            r.typeListAttr = e.string();
                            break;
                        case 16:
                            r.isRef = e.bool();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e.AttrDef = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.name = "", e.prototype.type = "", e.prototype.defaultValue = null, e.prototype.description = "", e.prototype.hasMinimum = !1, e.prototype.minimum = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0, e.prototype.allowedValues = null, e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.OpDef.AttrDef; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.name = e.string();
                            break;
                        case 2:
                            r.type = e.string();
                            break;
                        case 3:
                            r.defaultValue = $root.tensorflow.AttrValue.decode(e, e.uint32());
                            break;
                        case 4:
                            r.description = e.string();
                            break;
                        case 5:
                            r.hasMinimum = e.bool();
                            break;
                        case 6:
                            r.minimum = e.int64();
                            break;
                        case 7:
                            r.allowedValues = $root.tensorflow.AttrValue.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e.OpDeprecation = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.version = 0, e.prototype.explanation = "", e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.OpDef.OpDeprecation; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.version = e.int32();
                            break;
                        case 2:
                            r.explanation = e.string();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e
    }(), tensorflow.OpList = function () {
        function e(e) {
            if (this.op = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.op = $util.emptyArray, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.OpList; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.op && r.op.length || (r.op = []), r.op.push($root.tensorflow.OpDef.decode(e, e.uint32()));
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow.MetaGraphDef = function () {
        function e(e) {
            if (this.collectionDef = {}, this.signatureDef = {}, this.assetFileDef = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.metaInfoDef = null, e.prototype.graphDef = null, e.prototype.saverDef = null, e.prototype.collectionDef = $util.emptyObject, e.prototype.signatureDef = $util.emptyObject, e.prototype.assetFileDef = $util.emptyArray, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a, r = void 0 === t ? e.len : e.pos + t, n = new $root.tensorflow.MetaGraphDef; e.pos < r;) {
                var o = e.uint32();
                switch (o >>> 3) {
                    case 1:
                        n.metaInfoDef = $root.tensorflow.MetaGraphDef.MetaInfoDef.decode(e, e.uint32());
                        break;
                    case 2:
                        n.graphDef = $root.tensorflow.GraphDef.decode(e, e.uint32());
                        break;
                    case 3:
                        n.saverDef = $root.tensorflow.SaverDef.decode(e, e.uint32());
                        break;
                    case 4:
                        e.skip().pos++, n.collectionDef === $util.emptyObject && (n.collectionDef = {}), a = e.string(), e.pos++, n.collectionDef[a] = $root.tensorflow.CollectionDef.decode(e, e.uint32());
                        break;
                    case 5:
                        e.skip().pos++, n.signatureDef === $util.emptyObject && (n.signatureDef = {}), a = e.string(), e.pos++, n.signatureDef[a] = $root.tensorflow.SignatureDef.decode(e, e.uint32());
                        break;
                    case 6:
                        n.assetFileDef && n.assetFileDef.length || (n.assetFileDef = []), n.assetFileDef.push($root.tensorflow.AssetFileDef.decode(e, e.uint32()));
                        break;
                    default:
                        e.skipType(7 & o)
                }
            }
            return n
        }, e.MetaInfoDef = function () {
            function e(e) {
                if (this.tags = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
            }

            return e.prototype.metaGraphVersion = "", e.prototype.strippedOpList = null, e.prototype.anyInfo = null, e.prototype.tags = $util.emptyArray, e.prototype.tensorflowVersion = "", e.prototype.tensorflowGitVersion = "", e.decode = function (e, t) {
                e instanceof $Reader || (e = $Reader.create(e));
                for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.MetaGraphDef.MetaInfoDef; e.pos < a;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            r.metaGraphVersion = e.string();
                            break;
                        case 2:
                            r.strippedOpList = $root.tensorflow.OpList.decode(e, e.uint32());
                            break;
                        case 3:
                            r.anyInfo = $root.tensorflow.Any.decode(e, e.uint32());
                            break;
                        case 4:
                            r.tags && r.tags.length || (r.tags = []), r.tags.push(e.string());
                            break;
                        case 5:
                            r.tensorflowVersion = e.string();
                            break;
                        case 6:
                            r.tensorflowGitVersion = e.string();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return r
            }, e
        }(), e
    }(), tensorflow.SavedModel = function () {
        function e(e) {
            if (this.metaGraphs = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.savedModelSchemaVersion = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0, e.prototype.metaGraphs = $util.emptyArray, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.SavedModel; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.savedModelSchemaVersion = e.int64();
                        break;
                    case 2:
                        r.metaGraphs && r.metaGraphs.length || (r.metaGraphs = []), r.metaGraphs.push($root.tensorflow.MetaGraphDef.decode(e, e.uint32()));
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow.FunctionDefLibrary = function () {
        function e(e) {
            if (this.function = [], this.gradient = [], e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.function = $util.emptyArray, e.prototype.gradient = $util.emptyArray, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.FunctionDefLibrary; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.function && r.function.length || (r.function = []), r.function.push($root.tensorflow.FunctionDef.decode(e, e.uint32()));
                        break;
                    case 2:
                        r.gradient && r.gradient.length || (r.gradient = []), r.gradient.push($root.tensorflow.GradientDef.decode(e, e.uint32()));
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow.FunctionDef = function () {
        function e(e) {
            if (this.attr = {}, this.nodeDef = [], this.ret = {}, e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.signature = null, e.prototype.attr = $util.emptyObject, e.prototype.nodeDef = $util.emptyArray, e.prototype.ret = $util.emptyObject, e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a, r = void 0 === t ? e.len : e.pos + t, n = new $root.tensorflow.FunctionDef; e.pos < r;) {
                var o = e.uint32();
                switch (o >>> 3) {
                    case 1:
                        n.signature = $root.tensorflow.OpDef.decode(e, e.uint32());
                        break;
                    case 5:
                        e.skip().pos++, n.attr === $util.emptyObject && (n.attr = {}), a = e.string(), e.pos++, n.attr[a] = $root.tensorflow.AttrValue.decode(e, e.uint32());
                        break;
                    case 3:
                        n.nodeDef && n.nodeDef.length || (n.nodeDef = []), n.nodeDef.push($root.tensorflow.NodeDef.decode(e, e.uint32()));
                        break;
                    case 4:
                        e.skip().pos++, n.ret === $util.emptyObject && (n.ret = {}), a = e.string(), e.pos++, n.ret[a] = e.string();
                        break;
                    default:
                        e.skipType(7 & o)
                }
            }
            return n
        }, e
    }(), tensorflow.GradientDef = function () {
        function e(e) {
            if (e) for (var t = Object.keys(e), a = 0; a < t.length; ++a) null != e[t[a]] && (this[t[a]] = e[t[a]])
        }

        return e.prototype.functionName = "", e.prototype.gradientFunc = "", e.decode = function (e, t) {
            e instanceof $Reader || (e = $Reader.create(e));
            for (var a = void 0 === t ? e.len : e.pos + t, r = new $root.tensorflow.GradientDef; e.pos < a;) {
                var n = e.uint32();
                switch (n >>> 3) {
                    case 1:
                        r.functionName = e.string();
                        break;
                    case 2:
                        r.gradientFunc = e.string();
                        break;
                    default:
                        e.skipType(7 & n)
                }
            }
            return r
        }, e
    }(), tensorflow);
    var compiled_api = $root, compiled_api_1 = compiled_api.tensorflow;

    function getParamValue(e, t, a, r) {
        var n = t.params[e];
        if (n && void 0 !== n.inputIndex) {
            if ("tensor" === n.type) return getTensor(t.inputNames[n.inputIndex], a, r);
            if ("tensors" === n.type) return (0 === n.inputIndex ? 0 === n.inputParamLength ? t.inputNames : t.inputNames.slice(n.inputIndex, -n.inputParamLength) : t.inputNames.splice(n.inputIndex)).map(function (e) {
                return getTensor(e, a, r)
            });
            var o = Array.prototype.slice.call(getTensor(t.inputNames.slice(n.inputIndex)[0], a, r).dataSync());
            return "number" === n.type ? o[0] : o
        }
        return n && n.value
    }

    function getTensor(e, t, a) {
        var r = parseNodeName(e), n = r[0], o = r[1], s = a.currentContextIds.find(function (e) {
            return !!t[getNodeNameWithContextId(n, e)]
        });
        return void 0 !== s ? t[getNodeNameWithContextId(n, s)][o] : void 0
    }

    function getTensorsForCurrentContenxt(e, t, a) {
        return t[getNodeNameWithContextId(e, a.currentContextId)]
    }

    function getNodeNameAndIndex(e, t) {
        var a = parseNodeName(e), r = a[0], n = a[1];
        return [getNodeNameWithContextId(r, t && t.currentContextId), n]
    }

    function getNodeNameWithContextId(e, t) {
        return t ? e + "-" + t : e
    }

    function parseNodeName(e) {
        var t = e.lastIndexOf(":");
        return -1 === t ? [e, 0] : [e.substring(0, t), Number(e.substring(t + 1))]
    }

    function split(e, t) {
        for (var a = [], r = 0; r < e.length; r += t) a.push(e.slice(r, r + t));
        return a
    }

    var json = [{
            tfOpName: "Add",
            dlOpName: "add",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "AddN",
            dlOpName: "addN",
            category: "arithmetic",
            params: [{tfInputIndex: 0, tfInputParamLength: 0, dlParamName: "tensors", type: "tensors"}]
        }, {
            tfOpName: "BiasAdd",
            dlOpName: "add",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Sub",
            dlOpName: "sub",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "RealDiv",
            dlOpName: "div",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Div",
            dlOpName: "div",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "FloorDiv",
            dlOpName: "floorDiv",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Mul",
            dlOpName: "mul",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Maximum",
            dlOpName: "maximum",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }]
        }, {
            tfOpName: "Minimum",
            dlOpName: "minimum",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }]
        }, {
            tfOpName: "Pow",
            dlOpName: "pow",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "SquaredDifference",
            dlOpName: "squaredDifference",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Mod",
            dlOpName: "mod",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "FloorMod",
            dlOpName: "mod",
            category: "arithmetic",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }], arithmetic = Object.freeze({json: json}), json$1 = [{
            tfOpName: "Abs",
            dlOpName: "abs",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Acos",
            dlOpName: "acos",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Asin",
            dlOpName: "asin",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atan",
            dlOpName: "atan",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atan2",
            dlOpName: "atan2",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "y",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Ceil",
            dlOpName: "ceil",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ClipByValue",
            dlOpName: "clipByValue",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "clip_value_min",
                dlParamName: "clipValueMin",
                type: "number"
            }, {tfParamName: "clip_value_max", dlParamName: "clipValueMax", type: "number"}]
        }, {
            tfOpName: "Cos",
            dlOpName: "cos",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Cosh",
            dlOpName: "cosh",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Elu",
            dlOpName: "elu",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Exp",
            dlOpName: "exp",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Floor",
            dlOpName: "floor",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Log",
            dlOpName: "log",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Neg",
            dlOpName: "neg",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Relu",
            dlOpName: "relu",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Relu6",
            dlOpName: "clipByValue",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }, {dlParamName: "clipValueMin", type: "number", defaultValue: 0}, {
                dlParamName: "clipValueMax",
                type: "number",
                defaultValue: 6
            }]
        }, {
            tfOpName: "Selu",
            dlOpName: "selu",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sigmoid",
            dlOpName: "sigmoid",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sin",
            dlOpName: "sin",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sinh",
            dlOpName: "sinh",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sqrt",
            dlOpName: "sqrt",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Rsqrt",
            dlOpName: "rsqrt",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Square",
            dlOpName: "square",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Tan",
            dlOpName: "tan",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Tanh",
            dlOpName: "tanh",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sign",
            dlOpName: "sign",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Round",
            dlOpName: "round",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Expm1",
            dlOpName: "expm1",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Log1p",
            dlOpName: "log1p",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Reciprocal",
            dlOpName: "reciprocal",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Reciprocal",
            dlOpName: "reciprocal",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Softplus",
            dlOpName: "softplus",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Asinh",
            dlOpName: "asinh",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Acosh",
            dlOpName: "acosh",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atanh",
            dlOpName: "atanh",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Erf",
            dlOpName: "erf",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Prod",
            dlOpName: "prod",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axes",
                type: "number[]"
            }, {tfParamName: "keep_dims", dlParamName: "keepDims", type: "bool", notSupported: !0}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LeakyRelu",
            dlOpName: "leakyRelu",
            category: "basic_math",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "alpha",
                dlParamName: "alpha",
                type: "number",
                defaultValue: .2
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }], basicMath = Object.freeze({json: json$1}), json$2 = [{
            tfOpName: "LoopCond",
            dlOpName: "loopCond",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "pred", type: "tensor"}]
        }, {
            tfOpName: "Switch",
            dlOpName: "switch",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "data", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "pred",
                type: "tensor"
            }]
        }, {
            tfOpName: "Merge",
            dlOpName: "merge",
            category: "control",
            params: [{tfInputIndex: 0, tfInputParamLength: 0, dlParamName: "tensors", type: "tensors"}]
        }, {
            tfOpName: "Enter",
            dlOpName: "enter",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensor", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }, {tfParamName: "frame_name", dlParamName: "frameName", type: "string"}, {
                tfParamName: "is_constant",
                dlParamName: "isConstant",
                type: "bool"
            }]
        }, {
            tfOpName: "Exit",
            dlOpName: "exit",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensor", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "NextIteration",
            dlOpName: "nextIteration",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensor", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArrayV3",
            dlOpName: "tensorArray",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "size", type: "number"}, {
                tfParamName: "dtype",
                dlParamName: "dtype",
                type: "dtype"
            }, {tfParamName: "element_shape", dlParamName: "elementShape", type: "shape"}, {
                tfParamName: "dynamic_size",
                dlParamName: "dynamicSize",
                type: "bool"
            }, {
                tfParamName: "clear_after_read",
                dlParamName: "clearAfterRead",
                type: "bool"
            }, {
                tfParamName: "identical_element_shapes",
                dlParamName: "identicalElementShapes",
                type: "bool"
            }, {tfParamName: "tensor_array_name", dlParamName: "name", type: "string"}]
        }, {
            tfOpName: "TensorArrayWriteV3",
            dlOpName: "tensorArrayWrite",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensorArrayId", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "index",
                type: "number"
            }, {tfInputIndex: 2, dlParamName: "tensor", type: "tensor"}, {
                tfInputIndex: 3,
                dlParamName: "flowIn",
                type: "number"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "TensorArrayReadV3",
            dlOpName: "tensorArrayRead",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensorArrayId", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "index",
                type: "number"
            }, {tfInputIndex: 2, dlParamName: "flowIn", type: "number"}, {
                tfParamName: "dtype",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArrayGatherV3",
            dlOpName: "tensorArrayGather",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensorArrayId", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "indices",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "flowIn", type: "number"}, {
                tfParamName: "dtype",
                dlParamName: "dtype",
                type: "dtype"
            }, {tfParamName: "element_shape", dlParamName: "elementShape", type: "shape"}]
        }, {
            tfOpName: "TensorArrayScatterV3",
            dlOpName: "tensorArrayScatter",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensorArrayId", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "indices",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "tensor", type: "tensor"}, {
                tfInputIndex: 3,
                dlParamName: "flowIn",
                type: "number"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype"}]
        }, {
            tfOpName: "TensorArrayConcatV3",
            dlOpName: "tensorArrayConcat",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensorArrayId", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "flowIn",
                type: "number"
            }, {tfParamName: "dtype", dlParamName: "dtype", type: "dtype"}, {
                tfParamName: "element_shape_except0",
                dlParamName: "elementShapeExcept0",
                type: "shape",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArraySplitV3",
            dlOpName: "tensorArraySplit",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensorArrayId", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "tensor",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "lengths", type: "number[]"}, {
                tfInputIndex: 3,
                dlParamName: "flowIn",
                type: "number"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype"}]
        }, {
            tfOpName: "TensorArraySizeV3",
            dlOpName: "tensorArraySize",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensorArrayId", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "flowIn",
                type: "number"
            }]
        }, {
            tfOpName: "TensorArrayCloseV3",
            dlOpName: "tensorArrayClose",
            category: "control",
            params: [{tfInputIndex: 0, dlParamName: "tensorArrayId", type: "number"}]
        }], control = Object.freeze({json: json$2}), json$3 = [{
            tfOpName: "AvgPool",
            dlOpName: "avgPool",
            category: "convolution",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "strides",
                dlParamName: "strides",
                type: "number[]"
            }, {tfParamName: "padding", dlParamName: "pad", type: "string"}, {
                tfParamName: "data_format",
                dlParamName: "dataFormat",
                type: "string",
                notSupported: !0
            }, {tfParamName: "ksize", dlParamName: "kernelSize", type: "number[]"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MaxPool",
            dlOpName: "maxPool",
            category: "convolution",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "strides",
                dlParamName: "strides",
                type: "number[]"
            }, {tfParamName: "padding", dlParamName: "pad", type: "string"}, {
                tfParamName: "data_format",
                dlParamName: "dataFormat",
                type: "string",
                notSupported: !0
            }, {tfParamName: "ksize", dlParamName: "kernelSize", type: "number[]"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Conv1D",
            dlOpName: "conv1d",
            category: "convolution",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "filter",
                type: "tensor"
            }, {tfParamName: "stride", dlParamName: "stride", type: "number"}, {
                tfParamName: "padding",
                dlParamName: "pad",
                type: "string"
            }, {
                tfParamName: "data_format",
                dlParamName: "dataFormat",
                type: "string",
                defaultValue: "NWC"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}, {
                tfParamName: "dilation",
                dlParamName: "dilation",
                type: "number",
                defaultValue: 1
            }]
        }, {
            tfOpName: "Conv2D",
            dlOpName: "conv2d",
            category: "convolution",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "filter",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}, {
                tfParamName: "strides",
                dlParamName: "strides",
                type: "number[]"
            }, {tfParamName: "padding", dlParamName: "pad", type: "string"}, {
                tfParamName: "useCudnnOnGpu",
                dlParamName: "useCudnnOnGpu",
                type: "bool"
            }, {
                tfParamName: "data_format",
                dlParamName: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {tfParamName: "dilations", dlParamName: "dilations", type: "number[]"}]
        }, {
            tfOpName: "Conv2DBackpropInput",
            dlOpName: "conv2dTranspose",
            category: "convolution",
            params: [{tfInputIndex: 2, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "filter",
                type: "tensor"
            }, {tfInputIndex: 0, dlParamName: "outputShape", type: "number[]"}, {
                tfParamName: "strides",
                dlParamName: "strides",
                type: "number[]"
            }, {tfParamName: "padding", dlParamName: "pad", type: "string"}, {
                tfParamName: "data_format",
                dlParamName: "dataFormat",
                type: "string",
                notSupported: !0
            }]
        }, {
            tfOpName: "DepthwiseConv2d",
            dlOpName: "depthwiseConv2d",
            category: "convolution",
            params: [{tfInputIndex: 0, dlParamName: "input", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "filter",
                type: "tensor"
            }, {tfParamName: "strides", dlParamName: "strides", type: "number[]"}, {
                tfParamName: "padding",
                dlParamName: "pad",
                type: "string"
            }, {
                tfParamName: "data_format",
                dlParamName: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {tfParamName: "dilations", dlParamName: "dilations", type: "number[]"}]
        }, {
            tfOpName: "DepthwiseConv2dNative",
            dlOpName: "depthwiseConv2d",
            category: "convolution",
            params: [{tfInputIndex: 0, dlParamName: "input", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "filter",
                type: "tensor"
            }, {tfParamName: "strides", dlParamName: "strides", type: "number[]"}, {
                tfParamName: "padding",
                dlParamName: "pad",
                type: "string"
            }, {
                tfParamName: "data_format",
                dlParamName: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {tfParamName: "dilations", dlParamName: "dilations", type: "number[]"}]
        }], convolution = Object.freeze({json: json$3}), json$4 = [{
            tfOpName: "Fill",
            dlOpName: "fill",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "shape", type: "number[]"}, {
                tfInputIndex: 1,
                dlParamName: "value",
                type: "number"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype"}]
        }, {
            tfOpName: "LinSpace",
            dlOpName: "linspace",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "start", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "stop",
                type: "number"
            }, {tfInputIndex: 2, dlParamName: "num", type: "number"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "OneHot",
            dlOpName: "oneHot",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "indices", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "depth",
                type: "number"
            }, {tfInputIndex: 2, dlParamName: "onValue", type: "number", defaultValue: 1}, {
                tfInputIndex: 3,
                dlParamName: "offValue",
                type: "number",
                defaultValue: 0
            }, {tfParamName: "axis", dlParamName: "axis", type: "number", notSupported: !0}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Ones",
            dlOpName: "ones",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "shape", type: "number[]"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "OnesLike",
            dlOpName: "onesLike",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "dtype",
                dlParamName: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "RandomUniform",
            dlOpName: "randomUniform",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "shape", type: "number[]"}, {
                tfParamName: "minval",
                dlParamName: "minval",
                type: "number",
                defaultValue: 0
            }, {tfParamName: "maxval", dlParamName: "maxval", type: "number", defaultValue: 1}, {
                tfParamName: "dtype",
                dlParamName: "dtype",
                type: "dtype"
            }, {tfParamName: "seed", dlParamName: "seed", type: "number", defaultValue: 0}, {
                tfParamName: "seed2",
                dlParamName: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0
            }, {tfParamName: "T", dlParamName: "T", type: "number", notSupported: !0}]
        }, {
            tfOpName: "Range",
            dlOpName: "range",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "start", type: "number"}, {
                tfInputIndex: 1,
                dlParamName: "stop",
                type: "number"
            }, {tfInputIndex: 2, dlParamName: "step", type: "number", defaultValue: 0}, {
                tfParamName: "Tidx",
                dlParamName: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "truncatedNormal",
            dlOpName: "truncatedNormal",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "shape", type: "number[]"}, {
                tfParamName: "means",
                dlParamName: "mean",
                type: "number",
                defaultValue: 0
            }, {tfParamName: "stddev", dlParamName: "stdDev", type: "number", defaultValue: 1}, {
                tfParamName: "seed",
                dlParamName: "seed",
                type: "number"
            }, {
                tfParamName: "seed2",
                dlParamName: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0
            }, {tfParamName: "dtype", dlParamName: "dtype", type: "dtype"}, {
                tfParamName: "T",
                dlParamName: "T",
                type: "number",
                notSupported: !0
            }]
        }, {
            tfOpName: "Zeros",
            dlOpName: "zeros",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "shape", type: "number[]"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "ZerosLike",
            dlOpName: "zerosLike",
            category: "creation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype"
            }]
        }], creation = Object.freeze({json: json$4}), json$5 = [{
            tfOpName: "NonMaxSuppressionV2",
            dlOpName: "nonMaxSuppression",
            category: "dynamic",
            params: [{tfInputIndex: 0, dlParamName: "boxes", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "scores",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "maxOutputSize", type: "number"}, {
                tfInputIndex: 3,
                dlParamName: "iouThreshold",
                type: "number"
            }]
        }, {
            tfOpName: "NonMaxSuppressionV3",
            dlOpName: "nonMaxSuppression",
            category: "dynamic",
            params: [{tfInputIndex: 0, dlParamName: "boxes", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "scores",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "maxOutputSize", type: "number"}, {
                tfInputIndex: 3,
                dlParamName: "iouThreshold",
                type: "number"
            }, {tfInputIndex: 4, dlParamName: "scoreThreshold", type: "number"}]
        }, {
            tfOpName: "Where",
            dlOpName: "whereAsync",
            category: "dynamic",
            params: [{tfInputIndex: 0, dlParamName: "condition", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ListDiff",
            dlOpName: "setdiff1dAsync",
            category: "dynamic",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "y",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }], dynamic = Object.freeze({json: json$5}), json$6 = [{
            tfOpName: "TopKV2",
            dlOpName: "topK",
            category: "evaluation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "k",
                type: "number"
            }, {tfParamName: "sorted", dlParamName: "sorted", type: "bool"}]
        }], evaluation = Object.freeze({json: json$6}), json$7 = [{
            tfOpName: "PlaceholderWithDefault",
            dlOpName: "placeholder",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "default", type: "tensor"}, {
                tfParamName: "shape",
                dlParamName: "shape",
                type: "shape"
            }, {tfParamName: "dtype", dlParamName: "dtype", type: "dtype"}]
        }, {
            tfOpName: "Placeholder",
            dlOpName: "placeholder",
            category: "graph",
            params: [{tfParamName: "shape", dlParamName: "shape", type: "shape"}, {
                tfParamName: "dtype",
                dlParamName: "dtype",
                type: "dtype"
            }]
        }, {tfOpName: "Const", dlOpName: "const", category: "graph"}, {
            tfOpName: "Identity",
            dlOpName: "identity",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "Snapshot",
            dlOpName: "snapshot",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "Rank",
            dlOpName: "rank",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "Size",
            dlOpName: "size",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "Shape",
            dlOpName: "shape",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "ShapeN",
            dlOpName: "shapeN",
            category: "graph",
            params: [{tfInputIndex: 0, tfInputParamLength: 0, dlParamName: "x", type: "tensors"}]
        }, {
            tfOpName: "Print",
            dlOpName: "print",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                tfInputParamLength: 1,
                dlParamName: "data",
                type: "tensors"
            }, {tfParamName: "message", dlParamName: "message", type: "string"}, {
                tfParamName: "first_n",
                dlParamName: "firstN",
                type: "number",
                notSupprted: !0
            }, {tfParamName: "summarize", dlParamName: "summarize", type: "number", defaultValue: 3}]
        }, {tfOpName: "NoOp", dlOpName: "noop", category: "graph", params: []}, {
            tfOpName: "StopGradient",
            dlOpName: "stopGradient",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "FakeQuantWithMinMaxVars",
            dlOpName: "fakeQuantWithMinMaxVars",
            category: "graph",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "min",
                dlParamName: "min",
                type: "number"
            }, {tfParamName: "max", dlParamName: "max", type: "number"}]
        }], graph = Object.freeze({json: json$7}), json$8 = [{
            tfOpName: "ResizeBilinear",
            dlOpName: "resizeBilinear",
            category: "image",
            params: [{tfInputIndex: 0, dlParamName: "images", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "size",
                type: "number[]"
            }, {tfParamName: "align_corners", dlParamName: "alignCorners", type: "bool"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ResizeNearestNeighbor",
            dlOpName: "resizeNearestNeighbor",
            category: "image",
            params: [{tfInputIndex: 0, dlParamName: "images", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "size",
                type: "number[]"
            }, {tfParamName: "align_corners", dlParamName: "alignCorners", type: "bool"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "CropAndResize",
            dlOpName: "cropAndResize",
            category: "image",
            params: [{tfInputIndex: 0, dlParamName: "image", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "boxes",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "boxInd", type: "tensor"}, {
                tfInputIndex: 3,
                dlParamName: "cropSize",
                type: "number[]"
            }, {tfParamName: "method", dlParamName: "method", type: "string"}, {
                tfParamName: "extrapolation_value",
                dlParamName: "extrapolationValue",
                type: "number"
            }]
        }], image = Object.freeze({json: json$8}), json$9 = [{
            tfOpName: "Equal",
            dlOpName: "equal",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "NotEqual",
            dlOpName: "notEqual",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Greater",
            dlOpName: "greater",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "GreaterEqual",
            dlOpName: "greaterEqual",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Less",
            dlOpName: "less",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "LessEqual",
            dlOpName: "lessEqual",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "LogicalAnd",
            dlOpName: "logicalAnd",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "LogicalNot",
            dlOpName: "logicalNot",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LogicalOr",
            dlOpName: "logicalOr",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Select",
            dlOpName: "where",
            category: "logical",
            params: [{tfInputIndex: 0, dlParamName: "condition", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "a",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "b", type: "tensor"}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }], logical = Object.freeze({json: json$9}), json$10 = [{
            tfOpName: "MatMul",
            dlOpName: "matMul",
            category: "matrices",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {
                tfParamName: "transpose_a",
                dlParamName: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {tfParamName: "transpose_b", dlParamName: "transposeB", type: "bool", defaultValue: !1}, {
                tfParamName: "T",
                dlParamName: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "BatchMatMul",
            dlOpName: "matMul",
            category: "matrices",
            params: [{tfInputIndex: 0, dlParamName: "a", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "b",
                type: "tensor"
            }, {tfParamName: "adj_x", dlParamName: "transposeA", type: "bool", defaultValue: !1}, {
                tfParamName: "adj_y",
                dlParamName: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }, {
            tfOpName: "Transpose",
            dlOpName: "transpose",
            category: "matrices",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "perm",
                type: "number[]"
            }, {tfParamName: "T", dlParamName: "dtype", type: "dtype", notSupported: !0}]
        }], matrices = Object.freeze({json: json$10}), json$11 = [{
            tfOpName: "FusedBatchNorm",
            dlOpName: "batchNormalization",
            category: "normalization",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "scale",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "offset", type: "tensor"}, {
                tfInputIndex: 3,
                dlParamName: "mean",
                type: "tensor"
            }, {tfInputIndex: 4, dlParamName: "variance", type: "tensor"}, {
                tfParamName: "epsilon",
                dlParamName: "epsilon",
                type: "number",
                defaultValue: .001
            }, {tfParamName: "data_format", dlParamName: "dataFormat", type: "string", notSupported: !0}]
        }, {
            tfOpName: "FusedBatchNormV2",
            dlOpName: "batchNormalization",
            category: "normalization",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "scale",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "offset", type: "tensor"}, {
                tfInputIndex: 3,
                dlParamName: "mean",
                type: "tensor"
            }, {tfInputIndex: 4, dlParamName: "variance", type: "tensor"}, {
                tfParamName: "epsilon",
                dlParamName: "epsilon",
                type: "number",
                defaultValue: .001
            }, {tfParamName: "data_format", dlParamName: "dataFormat", type: "string", notSupported: !0}]
        }, {
            tfOpName: "LRN",
            dlOpName: "localResponseNormalization",
            category: "normalization",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "depth_radius",
                dlParamName: "radius",
                type: "number",
                defaultValue: 5
            }, {tfParamName: "bias", dlParamName: "bias", type: "number", defaultValue: 1}, {
                tfParamName: "alpha",
                dlParamName: "alpha",
                type: "number",
                defaultValue: 1
            }, {tfParamName: "beta", dlParamName: "beta", type: "number", defaultValue: .5}]
        }, {
            tfOpName: "Softmax",
            dlOpName: "softmax",
            category: "normalization",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "LogSoftmax",
            dlOpName: "logSoftmax",
            category: "normalization",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "SparseToDense",
            dlOpName: "sparseToDense",
            category: "normalization",
            params: [{tfInputIndex: 0, dlParamName: "sparseIndices", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "outputShape",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "sparseValues", type: "tensor"}, {
                tfInputIndex: 3,
                dlParamName: "defaultValue",
                type: "tensor"
            }, {
                tfParamName: "validate_indices",
                dlParamName: "validateIndices",
                type: "bool",
                defaultValue: !0,
                notSupported: !0
            }]
        }], normalization = Object.freeze({json: json$11}), json$12 = [{
            tfOpName: "Max",
            dlOpName: "max",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number[]"
            }, {tfParamName: "keep_dims", dlParamName: "keepDims", type: "bool"}]
        }, {
            tfOpName: "Mean",
            dlOpName: "mean",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number[]"
            }, {tfParamName: "keep_dims", dlParamName: "keepDims", type: "bool"}]
        }, {
            tfOpName: "Min",
            dlOpName: "min",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number[]"
            }, {tfParamName: "keep_dims", dlParamName: "keepDims", type: "bool"}]
        }, {
            tfOpName: "Sum",
            dlOpName: "sum",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number[]"
            }, {tfParamName: "keep_dims", dlParamName: "keepDims", type: "bool"}]
        }, {
            tfOpName: "All",
            dlOpName: "all",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number[]"
            }, {tfParamName: "keep_dims", dlParamName: "keepDims", type: "bool"}]
        }, {
            tfOpName: "Any",
            dlOpName: "any",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number[]"
            }, {tfParamName: "keep_dims", dlParamName: "keepDims", type: "bool"}]
        }, {
            tfOpName: "ArgMax",
            dlOpName: "argMax",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "ArgMin",
            dlOpName: "argMin",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "Prod",
            dlOpName: "prod",
            category: "reduction",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number[]"
            }, {tfParamName: "keep_dims", dlParamName: "keepDims", type: "bool"}]
        }], reduction = Object.freeze({json: json$12}), json$13 = [{
            tfOpName: "ConcatV2",
            dlOpName: "concat",
            category: "slice_join",
            params: [{tfInputIndex: 0, tfInputParamLength: 1, dlParamName: "tensors", type: "tensors"}, {
                tfInputIndex: -1,
                dlParamName: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "Concat",
            dlOpName: "concat",
            category: "slice_join",
            params: [{tfInputIndex: 1, tfInputParamLength: 1, dlParamName: "tensors", type: "tensors"}, {
                tfInputIndex: 0,
                dlParamName: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "GatherV2",
            dlOpName: "gather",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "indices",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "axis", type: "number", defaultValue: 0}]
        }, {
            tfOpName: "Gather",
            dlOpName: "gather",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "indices",
                type: "tensor"
            }, {
                tfParamName: "axis",
                dlParamName: "axis",
                type: "number",
                defaultValue: 0
            }, {tfParamName: "validate_indices", dlParamName: "validateIndices", type: "bool", notSupported: !0}]
        }, {
            tfOpName: "Reverse",
            dlOpName: "reverse",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "dims",
                type: "bool",
                notSupported: !0
            }]
        }, {
            tfOpName: "ReverseV2",
            dlOpName: "reverse",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "axis",
                type: "number[]"
            }]
        }, {
            tfOpName: "Slice",
            dlOpName: "slice",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "begin",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "size", type: "number[]"}]
        }, {
            tfOpName: "StridedSlice",
            dlOpName: "stridedSlice",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "begin",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "end", type: "number[]"}, {
                tfInputIndex: 3,
                dlParamName: "strides",
                type: "number[]"
            }, {
                tfParamName: "begin_mask",
                dlParamName: "beginMask",
                type: "number",
                defaultValue: 0
            }, {
                tfParamName: "end_mask",
                dlParamName: "endMask",
                type: "number",
                defaultValue: 0
            }, {
                tfParamName: "new_axis_mask",
                dlParamName: "newAxisMask",
                type: "number",
                defaultValue: 0
            }, {
                tfParamName: "ellipsis_mask",
                dlParamName: "ellipsisMask",
                type: "number",
                defaultValue: 0
            }, {tfParamName: "shrink_axis_mask", dlParamName: "shrinkAxisMask", type: "number", defaultValue: 0}]
        }, {
            tfOpName: "Pack",
            dlOpName: "stack",
            category: "slice_join",
            params: [{
                tfInputIndex: 0,
                tfInputParamLength: 0,
                dlParamName: "tensors",
                type: "tensors"
            }, {tfParamName: "axis", dlParamName: "axis", type: "number", defaultValue: 0}]
        }, {
            tfOpName: "Unpack",
            dlOpName: "unstack",
            category: "slice_join",
            params: [{tfInputIndex: 0, tfInputParamLength: 0, dlParamName: "tensor", type: "tensor"}, {
                tfParamName: "axis",
                dlParamName: "axis",
                type: "number",
                defaultValue: 0
            }, {tfParamName: "num", dlParamName: "num", type: "number", defaultValue: 0, notSupported: !0}]
        }, {
            tfOpName: "Tile",
            dlOpName: "tile",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "reps",
                type: "number[]"
            }]
        }, {
            tfOpName: "Split",
            dlOpName: "split",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "axis", type: "number", defaultValue: 0}, {
                tfInputIndex: 1,
                dlParamName: "x",
                type: "tensor"
            }, {tfParamName: "num_split", dlParamName: "numOrSizeSplits", type: "number", defaultValue: 1}]
        }, {
            tfOpName: "SplitV",
            dlOpName: "split",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "numOrSizeSplits",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "axis", type: "number", defaultValue: 0}]
        }, {
            tfOpName: "ScatterNd",
            dlOpName: "scatterNd",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "indices", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "values",
                type: "tensor"
            }, {tfInputIndex: 2, dlParamName: "shape", type: "number[]"}]
        }, {
            tfOpName: "GatherNd",
            dlOpName: "gatherNd",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "indices",
                type: "tensor"
            }]
        }, {
            tfOpName: "SparseToDense",
            dlOpName: "sparseToDense",
            category: "slice_join",
            params: [{tfInputIndex: 0, dlParamName: "sparseIndices", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "outputShape",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "sparseValues", type: "tensor"}, {
                tfInputIndex: 3,
                dlParamName: "defaultValue",
                type: "tensor"
            }, {
                tfParamName: "validate_indices",
                dlParamName: "validateIndices",
                type: "bool",
                defaultValue: !1,
                notSupported: !0
            }]
        }], sliceJoin = Object.freeze({json: json$13}), json$14 = [{
            tfOpName: "FFT",
            dlOpName: "fft",
            category: "spectral",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "IFFT",
            dlOpName: "ifft",
            category: "spectral",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}]
        }, {
            tfOpName: "RFFT",
            dlOpName: "rfft",
            category: "spectral",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "fft_length",
                type: "number",
                unsupported: !0
            }]
        }, {
            tfOpName: "IRFFT",
            dlOpName: "irfft",
            category: "spectral",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "fft_length",
                type: "number",
                unsupported: !0
            }]
        }], spectral = Object.freeze({json: json$14}), json$15 = [{
            tfOpName: "Cast",
            dlOpName: "cast",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "SrcT",
                dlParamName: "sdtype",
                type: "dtype",
                notSupported: !0
            }, {tfParamName: "DstT", dlParamName: "dtype", type: "dtype"}]
        }, {
            tfOpName: "ExpandDims",
            dlOpName: "expandDims",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                tfParamNameDeprecated: "dim",
                dlParamName: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "Pad",
            dlOpName: "pad",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "padding",
                type: "number[]"
            }, {tfParamName: "constant_value", dlParamName: "constantValue", type: "number", defaultValue: 0}]
        }, {
            tfOpName: "PadV2",
            dlOpName: "pad",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "padding",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "constantValue", type: "number", defaultValue: 0}]
        }, {
            tfOpName: "Reshape",
            dlOpName: "reshape",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "shape",
                type: "number[]"
            }]
        }, {
            tfOpName: "Squeeze",
            dlOpName: "squeeze",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "axis",
                tfParamNameDeprecated: "squeeze_dims",
                dlParamName: "axis",
                type: "number[]"
            }]
        }, {
            tfOpName: "SpaceToBatchND",
            dlOpName: "spaceToBatchND",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "blockShape",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "paddings", type: "number[]"}]
        }, {
            tfOpName: "BatchToSpaceND",
            dlOpName: "batchToSpaceND",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfInputIndex: 1,
                dlParamName: "blockShape",
                type: "number[]"
            }, {tfInputIndex: 2, dlParamName: "crops", type: "number[]"}]
        }, {
            tfOpName: "DepthToSpace",
            dlOpName: "depthToSpace",
            category: "transformation",
            params: [{tfInputIndex: 0, dlParamName: "x", type: "tensor"}, {
                tfParamName: "block_size",
                dlParamName: "blockSize",
                type: "number"
            }, {tfParamName: "data_format", dlParamName: "dataFormat", type: "string"}]
        }], transformation = Object.freeze({json: json$15}),
        CONTROL_FLOW_OPS = ["Switch", "Merge", "Enter", "Exit", "NextIteration"],
        DYNAMIC_SHAPE_OPS = ["NonMaxSuppressionV2", "NonMaxSuppressionV3", "Where"], OperationMapper = function () {
            function e() {
                var e = [arithmetic, basicMath, control, convolution, creation, dynamic, evaluation, logical, image, graph, matrices, normalization, reduction, sliceJoin, spectral, transformation],
                    t = [].concat.apply([], e.map(function (e) {
                        return e.json
                    }));
                this.opMappers = t.reduce(function (e, t) {
                    return e[t.tfOpName] = t, e
                }, {})
            }

            return Object.defineProperty(e, "Instance", {
                get: function () {
                    return this._instance || (this._instance = new this)
                }, enumerable: !0, configurable: !0
            }), e.prototype.isControlFlow = function (e) {
                return CONTROL_FLOW_OPS.some(function (t) {
                    return t === e.op
                })
            }, e.prototype.isDynamicShape = function (e) {
                return DYNAMIC_SHAPE_OPS.some(function (t) {
                    return t === e.op
                })
            }, e.prototype.transformGraph = function (e) {
                var t = this, a = !1, r = !1, n = [], o = [], s = e.node.reduce(function (e, s) {
                    return e[s.name] = t.mapNode(s), t.isControlFlow(s) && (a = !0), t.isDynamicShape(s) && (r = !0), "Placeholder" === s.op && n.push(e[s.name]), "Const" === s.op && o.push(e[s.name]), e
                }, {}), i = [], p = [];
                return Object.keys(s).forEach(function (e) {
                    var t = s[e];
                    t.inputNames.forEach(function (e) {
                        var a = getNodeNameAndIndex(e)[0];
                        t.inputs.push(s[a]), s[a].children.push(t)
                    }), 0 === t.inputs.length && i.push(t)
                }), Object.keys(s).forEach(function (e) {
                    var t = s[e];
                    0 === t.children.length && p.push(t)
                }), {nodes: s, inputs: i, outputs: p, weights: o, placeholders: n, withControlFlow: a, withDynamicShape: r}
            }, e.prototype.mapNode = function (e) {
                var t = this, a = this.opMappers[e.op];
                if (void 0 === a) throw new Error("Tensorflow Op is not supported: " + e.op);
                var r = {
                    name: e.name, op: a.dlOpName, category: a.category, inputNames: (e.input || []).map(function (e) {
                        return e.startsWith("^") ? e.substr(1) : e
                    }), inputs: [], children: [], params: {}
                };
                return a.params && (r.params = a.params.reduce(function (a, r) {
                    var n = r.tfInputIndex, o = r.tfInputParamLength, s = r.type, i = void 0;
                    if (void 0 === n) switch (r.type) {
                        case"string":
                            void 0 === (i = t.getStringParam(e.attr, r.tfParamName, r.defaultValue)) && r.tfParamNameDeprecated && (i = t.getStringParam(e.attr, r.tfParamNameDeprecated, r.defaultValue));
                            break;
                        case"number":
                            void 0 === (i = t.getNumberParam(e.attr, r.tfParamName, r.defaultValue || 0)) && r.tfParamNameDeprecated && (i = t.getNumberParam(e.attr, r.tfParamNameDeprecated, r.defaultValue));
                            break;
                        case"number[]":
                            void 0 === (i = t.getNumericArrayParam(e.attr, r.tfParamName, r.defaultValue)) && r.tfParamNameDeprecated && (i = t.getNumericArrayParam(e.attr, r.tfParamNameDeprecated, r.defaultValue));
                            break;
                        case"bool":
                            void 0 === (i = t.getBoolParam(e.attr, r.tfParamName, r.defaultValue)) && r.tfParamNameDeprecated && (i = t.getBoolParam(e.attr, r.tfParamNameDeprecated, r.defaultValue));
                            break;
                        case"shape":
                            void 0 === (i = t.getTensorShapeParam(e.attr, r.tfParamName, r.defaultValue)) && r.tfParamNameDeprecated && (i = t.getTensorShapeParam(e.attr, r.tfParamNameDeprecated, r.defaultValue));
                            break;
                        case"dtype":
                            void 0 === (i = t.getDtypeParam(e.attr, r.tfParamName, r.defaultValue)) && r.tfParamNameDeprecated && (i = t.getDtypeParam(e.attr, r.tfParamNameDeprecated, r.defaultValue));
                            break;
                        case"tensor":
                        case"tensors":
                            break;
                        default:
                            throw new Error("Unsupported param type: " + r.type + " for op: " + e.op)
                    }
                    return a[r.dlParamName] = {value: i, inputIndex: n, type: s, inputParamLength: o}, a
                }, {})), r
            }, e.prototype.getStringParam = function (e, t, a, r) {
                void 0 === r && (r = !1);
                var n = e[t];
                if (void 0 !== n) {
                    var o = String.fromCharCode.apply(null, n.s);
                    return r ? o : o.toLowerCase()
                }
                return a
            }, e.prototype.getBoolParam = function (e, t, a) {
                var r = e[t];
                return r ? r.b : a
            }, e.prototype.getNumberParam = function (e, t, a) {
                var r = e[t], n = r ? r[r.value] : a;
                return "number" == typeof n ? n : n.toInt()
            }, e.prototype.getDtypeParam = function (e, t, a) {
                var r = e[t];
                if (r && r.type) switch (r.type) {
                    case compiled_api_1.DataType.DT_FLOAT:
                        return "float32";
                    case compiled_api_1.DataType.DT_INT32:
                        return "int32";
                    case compiled_api_1.DataType.DT_BOOL:
                        return "bool";
                    default:
                        return a
                }
                return a
            }, e.prototype.getTensorShapeParam = function (e, t, a) {
                var r = e[t];
                return r && r.shape ? r.shape.dim.map(function (e) {
                    return "number" == typeof e.size ? e.size : e.size.toInt()
                }) : a
            }, e.prototype.getNumericArrayParam = function (e, t, a) {
                var r = e[t];
                return r ? (r.list.f && r.list.f.length ? r.list.f : r.list.i).map(function (e) {
                    return "number" == typeof e ? e : e.toInt()
                }) : a
            }, e
        }(), executeOp = function (e, t, a) {
            switch (e.op) {
                case"add":
                    return [tfc.add(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"addN":
                    return [tfc.addN(getParamValue("tensors", e, t, a))];
                case"mod":
                    return [tfc.mod(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"mul":
                    return [tfc.mul(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"div":
                    return [tfc.div(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"floorDiv":
                    return [tfc.floorDiv(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"sub":
                    return [tfc.sub(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"minimum":
                    return [tfc.minimum(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"maximum":
                    return [tfc.maximum(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"pow":
                    return [tfc.pow(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                case"squaredDifference":
                    return [tfc.squaredDifference(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
                default:
                    throw TypeError("Node type " + e.op + " is not implemented")
            }
        }, executeOp$1 = function (e, t, a) {
            switch (e.op) {
                case"abs":
                    return [tfc.abs(getParamValue("x", e, t, a))];
                case"acos":
                    return [tfc.acos(getParamValue("x", e, t, a))];
                case"acosh":
                    return [tfc.acosh(getParamValue("x", e, t, a))];
                case"asin":
                    return [tfc.asin(getParamValue("x", e, t, a))];
                case"asinh":
                    return [tfc.asinh(getParamValue("x", e, t, a))];
                case"atan":
                    return [tfc.atan(getParamValue("x", e, t, a))];
                case"atan2":
                    return [tfc.atan2(getParamValue("x", e, t, a), getParamValue("y", e, t, a))];
                case"atanh":
                    return [tfc.atanh(getParamValue("x", e, t, a))];
                case"ceil":
                    return [tfc.ceil(getParamValue("x", e, t, a))];
                case"cos":
                    return [tfc.cos(getParamValue("x", e, t, a))];
                case"cosh":
                    return [tfc.cosh(getParamValue("x", e, t, a))];
                case"elu":
                    return [tfc.elu(getParamValue("x", e, t, a))];
                case"erf":
                    return [tfc.erf(getParamValue("x", e, t, a))];
                case"exp":
                    return [tfc.exp(getParamValue("x", e, t, a))];
                case"expm1":
                    return [tfc.expm1(getParamValue("x", e, t, a))];
                case"floor":
                    return [tfc.floor(getParamValue("x", e, t, a))];
                case"log":
                    return [tfc.log(getParamValue("x", e, t, a))];
                case"log1p":
                    return [tfc.log1p(getParamValue("x", e, t, a))];
                case"neg":
                    return [tfc.neg(getParamValue("x", e, t, a))];
                case"reciprocal":
                    return [tfc.reciprocal(getParamValue("x", e, t, a))];
                case"relu":
                    return [tfc.relu(getParamValue("x", e, t, a))];
                case"round":
                    return [tfc.round(getParamValue("x", e, t, a))];
                case"selu":
                    return [tfc.selu(getParamValue("x", e, t, a))];
                case"sigmoid":
                    return [tfc.sigmoid(getParamValue("x", e, t, a))];
                case"sin":
                    return [tfc.sin(getParamValue("x", e, t, a))];
                case"sign":
                    return [tfc.sign(getParamValue("x", e, t, a))];
                case"sinh":
                    return [tfc.sinh(getParamValue("x", e, t, a))];
                case"softplus":
                    return [tfc.softplus(getParamValue("x", e, t, a))];
                case"sqrt":
                    return [tfc.sqrt(getParamValue("x", e, t, a))];
                case"square":
                    return [tfc.square(getParamValue("x", e, t, a))];
                case"tanh":
                    return [tfc.tanh(getParamValue("x", e, t, a))];
                case"tan":
                    return [tfc.tan(getParamValue("x", e, t, a))];
                case"clipByValue":
                    return [tfc.clipByValue(getParamValue("x", e, t, a), getParamValue("clipValueMin", e, t, a), getParamValue("clipValueMax", e, t, a))];
                case"rsqrt":
                    return [tfc.div(tfc.scalar(1, "float32"), tfc.sqrt(getTensor(e.inputNames[0], t, a)))];
                case"prod":
                    return [tfc.prod(getParamValue("x", e, t, a), getParamValue("axes", e, t, a))];
                case"leakyRelu":
                    return [tfc.leakyRelu(getParamValue("x", e, t, a), getParamValue("alpha", e, t, a))];
                default:
                    throw TypeError("Node type " + e.op + " is not implemented")
            }
        }, TensorArray = function () {
            function e(t, a, r, n, o, s, i) {
                this.name = t, this.dtype = a, this.maxSize = r, this.elementShape = n, this.identicalElementShapes = o, this.dynamicSize = s, this.clearAfterRead = i, this.tensors = [], this.closed_ = !1, this.id = e.nextId++
            }

            return Object.defineProperty(e.prototype, "closed", {
                get: function () {
                    return this.closed_
                }, enumerable: !0, configurable: !0
            }), e.prototype.clearAndClose = function () {
                this.tensors.forEach(function (e) {
                    return e.tensor.dispose()
                }), this.tensors = [], this.closed_ = !0
            }, e.prototype.size = function () {
                return this.tensors.length
            }, e.prototype.read = function (e) {
                if (this.closed_) throw new Error("TensorArray " + this.name + " has already been closed.");
                if (e < 0 || e >= this.tensors.length) throw new Error("Tried to read from index " + e + ", but array size is: " + this.tensors.length);
                var t = this.tensors[e];
                if (t.cleared) throw new Error("TensorArray " + this.name + ": Could not read index " + e + " twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).");
                return this.clearAfterRead && (t.cleared = !0), t.read = !0, t.tensor
            }, e.prototype.readMany = function (e) {
                var t = this;
                return e.map(function (e) {
                    return t.read(e)
                })
            }, e.prototype.write = function (e, t) {
                if (this.closed_) throw new Error("TensorArray " + this.name + " has already been closed.");
                if (e < 0 || !this.dynamicSize && e >= this.maxSize) throw new Error("Tried to write to index " + e + ", but array is not resizeable and size is: " + this.maxSize);
                var a = this.tensors[e] || {};
                if (t.dtype !== this.dtype) throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ",\n          because the value dtype is " + t.dtype + ", but TensorArray dtype is " + this.dtype + ".");
                if (0 === this.size() && 0 === this.elementShape.length && (this.elementShape = t.shape), this.assertShapesMatch(this.elementShape, t.shape, "TensorArray " + this.name + ": Could not write to TensorArray index " + e + "."), a && a.read) throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ", because it has already been read.");
                if (a && a.written) throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ", because it has already been written.");
                a.tensor = t, a.written = !0, this.tensors[e] = a
            }, e.prototype.writeMany = function (e, t) {
                var a = this;
                if (e.length !== t.length) throw new Error("TensorArray " + this.name + ": could not write multiple tensors,because the index size: " + e.length + " is not the same as tensors size: " + t.length + ".");
                e.forEach(function (e, r) {
                    return a.write(e, t[r])
                })
            }, e.prototype.gather = function (e, t) {
                if (t && t !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but gather requested dtype " + t);
                if (!e) {
                    e = [];
                    for (var a = 0; a < this.size(); a++) e.push(a)
                }
                if (0 === e.length) return tfc.tensor([], [0].concat(this.elementShape));
                var r = this.readMany(e);
                return this.assertShapesMatch(this.elementShape, r[0].shape, "TensorArray shape mismatch: "), tfc.stack(r, 0)
            }, e.prototype.concat = function (e) {
                if (e && e !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but concat requested dtype " + e);
                if (0 === this.size()) return tfc.tensor([], [0].concat(this.elementShape));
                for (var t = [], a = 0; a < this.size(); a++) t.push(a);
                var r = this.readMany(t);
                return this.assertShapesMatch(this.elementShape, r[0].shape, "TensorArray shape mismatch: tensor array shape (" + this.elementShape + ") vs first tensor shape (" + r[0].shape + ")"), tfc.concat(r, 0)
            }, e.prototype.scatter = function (e, t) {
                if (t.dtype !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + t.dtype);
                if (e.length !== t.shape[0]) throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + e.length + " vs. " + t.shape[0]);
                var a = Math.max.apply(Math, e);
                if (!this.dynamicSize && a >= this.maxSize) throw new Error("Max index must be < array size (" + a + "  vs. " + this.maxSize + ")");
                this.writeMany(e, tfc.unstack(t, 0))
            }, e.prototype.split = function (e, t) {
                var a = this;
                if (t.dtype !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + t.dtype);
                var r = 0, n = e.map(function (e) {
                    return r += e
                });
                if (r !== t.shape[0]) throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + r + ", and tensor's shape is: " + t.shape);
                if (!this.dynamicSize && e.length !== this.maxSize) throw new Error("TensorArray's size is not equal to the size of lengths (" + this.maxSize + " vs. " + e.length + "), and the TensorArray is not marked as dynamically resizeable");
                var o = 0 === r ? 0 : t.size / r, s = [];
                tfc.tidy(function () {
                    t = t.reshape([1, r, o]);
                    for (var i = 0; i < e.length; ++i) {
                        var p = [0, 0 === i ? 0 : n[i - 1], 0], u = [1, e[i], o];
                        s[i] = tfc.slice(t, p, u).reshape(a.elementShape)
                    }
                    return s
                });
                for (var i = [], p = 0; p < e.length; p++) i[p] = p;
                this.writeMany(i, s)
            }, e.prototype.assertShapesMatch = function (e, t, a) {
                void 0 === a && (a = ""), tfc.util.assert(this.arraysEqual(e, t), a + " Shapes " + e + " and " + t + " must match")
            }, e.prototype.arraysEqual = function (e, t) {
                if (e.length !== t.length) return !1;
                for (var a = 0; a < e.length; a++) if (-1 !== e[a] && -1 !== t[a] && e[a] !== t[a]) return !1;
                return !0
            }, e.nextId = 0, e
        }();

    function executeOp$2(e, t, a) {
        return __awaiter(this, void 0, void 0, function () {
            var r, n, o, s, i, p, u, m, l, d, f, c, y, h, N, g, P, x, b, I, v, O, w, V, T, k, _, S, A, $, D, j, E, B, C;
            return __generator(this, function (R) {
                switch (R.label) {
                    case 0:
                        switch (e.op) {
                            case"loopCond":
                                return [3, 1];
                            case"switch":
                                return [3, 2];
                            case"merge":
                                return [3, 4];
                            case"enter":
                                return [3, 5];
                            case"exit":
                                return [3, 6];
                            case"nextIteration":
                                return [3, 7];
                            case"tensorArray":
                                return [3, 8];
                            case"tensorArrayWrite":
                                return [3, 9];
                            case"tensorArrayRead":
                                return [3, 10];
                            case"tensorArrayGather":
                                return [3, 11];
                            case"tensorArrayScatter":
                                return [3, 12];
                            case"tensorArrayConcat":
                                return [3, 13];
                            case"tensorArraySplit":
                                return [3, 14];
                            case"tensorArraySize":
                                return [3, 15];
                            case"tensorArrayClose":
                                return [3, 16]
                        }
                        return [3, 17];
                    case 1:
                        return [2, [getParamValue("pred", e, t, a).clone()]];
                    case 2:
                        return r = getParamValue("pred", e, t, a), n = getParamValue("data", e, t, a), [4, r.data()];
                    case 3:
                        return [2, R.sent()[0] ? [void 0, n.clone()] : [n.clone(), void 0]];
                    case 4:
                        return [2, (o = e.inputNames.find(function (e) {
                            return void 0 !== getTensor(e, t, a)
                        })) ? [getTensor(o, t, a).clone()] : void 0];
                    case 5:
                        return s = getParamValue("frameName", e, t, a), i = getParamValue("tensor", e, t, a), a.enterFrame(s), [2, [i.clone()]];
                    case 6:
                        return p = getParamValue("tensor", e, t, a), a.exitFrame(), [2, [p.clone()]];
                    case 7:
                        return u = getParamValue("tensor", e, t, a), a.nextIteration(), [2, [u.clone()]];
                    case 8:
                        return m = getParamValue("size", e, t, a), l = getParamValue("dtype", e, t, a), d = getParamValue("elementShape", e, t, a), f = getParamValue("dynamicSize", e, t, a), c = getParamValue("clearAfterRead", e, t, a), y = getParamValue("identicalElementShapes", e, t, a), h = getParamValue("name", e, t, a), N = new TensorArray(h, l, m, d, y, f, c), a.addTensorArray(N), [2, [tfc.scalar(N.id), tfc.scalar(1)]];
                    case 9:
                        return g = getParamValue("tensorArrayId", e, t, a), P = getParamValue("index", e, t, a), x = getParamValue("tensor", e, t, a), a.getTensorArray(g).write(P, x), [2, [tfc.scalar(1)]];
                    case 10:
                        return b = getParamValue("tensorArrayId", e, t, a), I = getParamValue("index", e, t, a), [2, [a.getTensorArray(b).read(I)]];
                    case 11:
                        return v = getParamValue("tensorArrayId", e, t, a), O = getParamValue("indices", e, t, a), w = getParamValue("dtype", e, t, a), [2, [a.getTensorArray(v).gather(O, w)]];
                    case 12:
                        return V = getParamValue("tensorArrayId", e, t, a), T = getParamValue("indices", e, t, a), k = getParamValue("tensor", e, t, a), a.getTensorArray(V).scatter(T, k), [2, [tfc.scalar(1)]];
                    case 13:
                        return _ = getParamValue("tensorArrayId", e, t, a), S = a.getTensorArray(_), A = getParamValue("dtype", e, t, a), [2, [S.concat(A)]];
                    case 14:
                        return $ = getParamValue("tensorArrayId", e, t, a), D = getParamValue("tensor", e, t, a), j = getParamValue("lengths", e, t, a), a.getTensorArray($).split(j, D), [2, [tfc.scalar(1)]];
                    case 15:
                        return E = getParamValue("tensorArrayId", e, t, a), B = a.getTensorArray(E), [2, [tfc.scalar(B.size(), "int32")]];
                    case 16:
                        return C = getParamValue("tensorArrayId", e, t, a), a.getTensorArray(C).clearAndClose(), [2, []];
                    case 17:
                        throw TypeError("Node type " + e.op + " is not implemented")
                }
            })
        })
    }

    var executeOp$3 = function (e, t, a) {
        switch (e.op) {
            case"conv1d":
                var r = getParamValue("stride", e, t, a), n = getParamValue("pad", e, t, a),
                    o = getParamValue("dataFormat", e, t, a).toUpperCase(), s = getParamValue("dilation", e, t, a);
                return [tfc.conv1d(getParamValue("x", e, t, a), getParamValue("filter", e, t, a), r, n, o, s)];
            case"conv2d":
                r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), o = getParamValue("dataFormat", e, t, a).toUpperCase();
                var i = getParamValue("dilations", e, t, a);
                return [tfc.conv2d(getParamValue("x", e, t, a), getParamValue("filter", e, t, a), [r[1], r[2]], n, o, [i[0], i[1]])];
            case"conv2dTranspose":
                var p = getParamValue("outputShape", e, t, a);
                r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a);
                return [tfc.conv2dTranspose(getParamValue("x", e, t, a), getParamValue("filter", e, t, a), p, [r[1], r[2]], n)];
            case"depthwiseConv2d":
                r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), i = getParamValue("dilations", e, t, a), o = getParamValue("dataFormat", e, t, a).toUpperCase();
                return [tfc.depthwiseConv2d(getParamValue("input", e, t, a), getParamValue("filter", e, t, a), [r[1], r[2]], n, o, [i[0], i[1]])];
            case"avgPool":
                r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a);
                var u = getParamValue("kernelSize", e, t, a);
                return [tfc.avgPool(getParamValue("x", e, t, a), [u[1], u[2]], [r[1], r[2]], n)];
            case"maxPool":
                r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), u = getParamValue("kernelSize", e, t, a);
                return [tfc.maxPool(getParamValue("x", e, t, a), [u[1], u[2]], [r[1], r[2]], n)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$4 = function (e, t, a) {
        switch (e.op) {
            case"fill":
                var r = getParamValue("shape", e, t, a), n = getParamValue("dtype", e, t, a),
                    o = getParamValue("value", e, t, a);
                return [tfc.fill(r, o, n)];
            case"linspace":
                var s = getParamValue("start", e, t, a), i = getParamValue("stop", e, t, a),
                    p = getParamValue("num", e, t, a);
                return [tfc.linspace(s, i, p)];
            case"oneHot":
                var u = getParamValue("indices", e, t, a), m = getParamValue("depth", e, t, a),
                    l = getParamValue("onValue", e, t, a), d = getParamValue("offValue", e, t, a);
                return [tfc.oneHot(u, m, l, d)];
            case"ones":
                return [tfc.ones(getParamValue("shape", e, t, a), getParamValue("dtype", e, t, a))];
            case"onesLike":
                return [tfc.onesLike(getParamValue("x", e, t, a))];
            case"randomUniform":
                return [tfc.randomUniform(getParamValue("shape", e, t, a), getParamValue("minval", e, t, a), getParamValue("maxval", e, t, a), getParamValue("dtype", e, t, a))];
            case"range":
                s = getParamValue("start", e, t, a);
                var f = getParamValue("stop", e, t, a), c = getParamValue("step", e, t, a);
                return [tfc.range(s, f, c, getParamValue("dtype", e, t, a))];
            case"truncatedNormal":
                r = getParamValue("shape", e, t, a);
                var y = getParamValue("mean", e, t, a), h = getParamValue("stdDev", e, t, a),
                    N = getParamValue("seed", e, t, a);
                return [tfc.truncatedNormal(r, y, h, getParamValue("dtype", e, t, a), N)];
            case"zeros":
                return [tfc.zeros(getParamValue("shape", e, t, a), getParamValue("dtype", e, t, a))];
            case"zerosLike":
                return [tfc.zerosLike(getParamValue("x", e, t, a))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    };

    function executeOp$5(e, t, a) {
        return __awaiter(this, void 0, void 0, function () {
            var r, n, o, s, i;
            return __generator(this, function (p) {
                switch (p.label) {
                    case 0:
                        switch (e.op) {
                            case"nonMaxSuppression":
                                return [3, 1];
                            case"whereAsync":
                                return [3, 3];
                            case"setdiff1dAsync":
                                return [3, 5]
                        }
                        return [3, 7];
                    case 1:
                        return r = getParamValue("boxes", e, t, a), n = getParamValue("scores", e, t, a), o = getParamValue("maxOutputSize", e, t, a), s = getParamValue("iouThreshold", e, t, a), i = getParamValue("scoreThreshold", e, t, a), [4, tfc.image.nonMaxSuppressionAsync(r, n, o, s, i)];
                    case 2:
                        return [2, [p.sent()]];
                    case 3:
                        return [4, tfc.whereAsync(getParamValue("condition", e, t, a))];
                    case 4:
                        return [2, [p.sent()]];
                    case 5:
                        return [4, tfc.setdiff1dAsync(getParamValue("x", e, t, a), getParamValue("y", e, t, a))];
                    case 6:
                        return [2, p.sent()];
                    case 7:
                        throw TypeError("Node type " + e.op + " is not implemented")
                }
            })
        })
    }

    var executeOp$6 = function (e, t, a) {
        switch (e.op) {
            case"topK":
                var r = getParamValue("x", e, t, a), n = getParamValue("k", e, t, a),
                    o = getParamValue("sorted", e, t, a), s = tfc.topk(r, n, o);
                return [s.values, s.indices];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$7 = function (e, t, a) {
        switch (e.op) {
            case"const":
                return t[e.name];
            case"placeholder":
                var r = getParamValue("default", e, t, a);
                return [getTensor(e.name, t, a) || r];
            case"identity":
            case"stopGradient":
            case"fakeQuantWithMinMaxVars":
                return [getParamValue("x", e, t, a).clone()];
            case"snapshot":
                return [getParamValue("x", e, t, a).clone()];
            case"shape":
                return [tfc.tensor1d(getParamValue("x", e, t, a).shape, "int32")];
            case"shapeN":
                return getParamValue("x", e, t, a).map(function (e) {
                    return tfc.tensor1d(e.shape)
                });
            case"size":
                return [tfc.scalar(getParamValue("x", e, t, a).size, "int32")];
            case"rank":
                return [tfc.scalar(getParamValue("x", e, t, a).rank, "int32")];
            case"noop":
                return [];
            case"print":
                var n = getParamValue("x", e, t, a), o = getParamValue("data", e, t, a),
                    s = getParamValue("message", e, t, a), i = getParamValue("summarize", e, t, a);
                console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."), console.log(s);
                for (var p = 0; p < o.length; p++) console.log(Array.prototype.slice.call(o[0].dataSync()).slice(0, i));
                return [n];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$8 = function (e, t, a) {
        switch (e.op) {
            case"resizeBilinear":
                var r = getParamValue("images", e, t, a), n = getParamValue("size", e, t, a),
                    o = getParamValue("alignCorners", e, t, a);
                return [tfc.image.resizeBilinear(r, [n[0], n[1]], o)];
            case"resizeNearestNeighbor":
                r = getParamValue("images", e, t, a), n = getParamValue("size", e, t, a), o = getParamValue("alignCorners", e, t, a);
                return [tfc.image.resizeNearestNeighbor(r, [n[0], n[1]], o)];
            case"cropAndResize":
                var s = getParamValue("image", e, t, a), i = getParamValue("boxes", e, t, a),
                    p = getParamValue("boxInd", e, t, a), u = getParamValue("cropSize", e, t, a),
                    m = getParamValue("method", e, t, a), l = getParamValue("extrapolationValue", e, t, a);
                return [tfc.image.cropAndResize(s, i, p, u, m, l)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$9 = function (e, t, a) {
        switch (e.op) {
            case"equal":
                return [tfc.equal(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            case"notEqual":
                return [tfc.notEqual(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            case"greater":
                return [tfc.greater(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            case"greaterEqual":
                return [tfc.greaterEqual(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            case"less":
                return [tfc.less(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            case"lessEqual":
                return [tfc.lessEqual(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            case"logicalAnd":
                return [tfc.logicalAnd(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            case"logicalNot":
                return [tfc.logicalNot(getParamValue("a", e, t, a))];
            case"logicalOr":
                return [tfc.logicalOr(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            case"where":
                return [tfc.where(getParamValue("condition", e, t, a), getParamValue("a", e, t, a), getParamValue("b", e, t, a))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$10 = function (e, t, a) {
        switch (e.op) {
            case"matMul":
                return [tfc.matMul(getParamValue("a", e, t, a), getParamValue("b", e, t, a), getParamValue("transposeA", e, t, a), getParamValue("transposeB", e, t, a))];
            case"transpose":
                return [tfc.transpose(getParamValue("x", e, t, a), getParamValue("perm", e, t, a))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$11 = function (e, t, a) {
        switch (e.op) {
            case"batchNormalization":
                return [tfc.batchNormalization(getParamValue("x", e, t, a), getParamValue("mean", e, t, a), getParamValue("variance", e, t, a), getParamValue("epsilon", e, t, a), getParamValue("scale", e, t, a), getParamValue("offset", e, t, a))];
            case"localResponseNormalization":
                return [tfc.localResponseNormalization(getParamValue("x", e, t, a), getParamValue("radius", e, t, a), getParamValue("bias", e, t, a), getParamValue("alpha", e, t, a), getParamValue("beta", e, t, a))];
            case"softmax":
                return [tfc.softmax(getParamValue("x", e, t, a))];
            case"logSoftmax":
                return [tfc.logSoftmax(getParamValue("x", e, t, a))];
            case"sparseToDense":
                return [tfc.sparseToDense(getParamValue("sparseIndices", e, t, a), getParamValue("outputShape", e, t, a), getParamValue("sparseValues", e, t, a), getParamValue("defaultValue", e, t, a))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$12 = function (e, t, a) {
        switch (e.op) {
            case"max":
                var r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
                return [tfc.max(getParamValue("x", e, t, a), r, n)];
            case"mean":
                r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
                return [tfc.mean(getParamValue("x", e, t, a), r, n)];
            case"min":
                r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
                return [tfc.min(getParamValue("x", e, t, a), r, n)];
            case"sum":
                r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
                return [tfc.sum(getParamValue("x", e, t, a), r, n)];
            case"all":
                r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
                return [tfc.all(getParamValue("x", e, t, a), r, n)];
            case"any":
                r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
                return [tfc.any(getParamValue("x", e, t, a), r, n)];
            case"argMax":
                r = getParamValue("axis", e, t, a);
                return [tfc.argMax(getParamValue("x", e, t, a), r)];
            case"argMin":
                r = getParamValue("axis", e, t, a);
                return [tfc.argMin(getParamValue("x", e, t, a), r)];
            case"prod":
                r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
                return [tfc.prod(getParamValue("x", e, t, a), r, n)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$13 = function (e, t, a) {
        switch (e.op) {
            case"concat":
                var r = getParamValue("axis", e, t, a), n = getParamValue("tensors", e, t, a);
                return [tfc.concat(n, r)];
            case"gather":
                r = getParamValue("axis", e, t, a);
                var o = getParamValue("x", e, t, a), s = getParamValue("indices", e, t, a);
                return [tfc.gather(o, s, r)];
            case"reverse":
                r = getParamValue("axis", e, t, a), o = getParamValue("x", e, t, a);
                return [tfc.reverse(o, r)];
            case"slice":
                var i = getParamValue("begin", e, t, a), p = getParamValue("size", e, t, a);
                return [tfc.slice(getParamValue("x", e, t, a), i, p)];
            case"stridedSlice":
                i = getParamValue("begin", e, t, a);
                var u = getParamValue("end", e, t, a), m = getParamValue("strides", e, t, a),
                    l = getParamValue("beginMask", e, t, a), d = getParamValue("endMask", e, t, a),
                    f = getParamValue("ellipsisMask", e, t, a), c = getParamValue("newAxisMask", e, t, a),
                    y = getParamValue("shrinkAxisMask", e, t, a), h = getParamValue("x", e, t, a);
                if (1 === i.length && h.shape.length > 1) for (var N = 1; N < h.shape.length; N++) i.push(0), u.push(h.shape[N]), m.push(m[0]);
                return [tfc.stridedSlice(h, i, u, m, l, d, f, c, y)];
            case"stack":
                return tfc.tidy(function () {
                    var r = getParamValue("axis", e, t, a), n = getParamValue("tensors", e, t, a), o = n[0].shape,
                        s = n[0].squeeze().shape, i = n.map(function (e) {
                            var t = tfc.util.arraysEqual(e.shape, o);
                            if (!t && !tfc.util.arraysEqual(e.squeeze().shape, s)) throw new Error("the input tensors shape does not match");
                            return t ? e : e.reshape(o)
                        });
                    return [tfc.stack(i, r)]
                });
            case"unstack":
                return tfc.tidy(function () {
                    var r = getParamValue("axis", e, t, a), n = getParamValue("tensor", e, t, a);
                    return tfc.unstack(n, r)
                });
            case"tile":
                var g = getParamValue("reps", e, t, a);
                return [tfc.tile(getParamValue("x", e, t, a), g)];
            case"split":
                r = getParamValue("axis", e, t, a);
                var P = getParamValue("numOrSizeSplits", e, t, a);
                return tfc.split(getParamValue("x", e, t, a), P, r);
            case"scatterNd":
                s = getParamValue("indices", e, t, a);
                var x = getParamValue("values", e, t, a), b = getParamValue("shape", e, t, a);
                return [tfc.scatterND(s, x, b)];
            case"gatherNd":
                var I = getParamValue("x", e, t, a);
                s = getParamValue("indices", e, t, a);
                return [tfc.gatherND(I, s)];
            case"sparseToDense":
                s = getParamValue("sparseIndices", e, t, a), b = getParamValue("outputShape", e, t, a);
                var v = getParamValue("sparseValues", e, t, a), O = getParamValue("defaultValue", e, t, a);
                return [tfc.sparseToDense(s, v, b, O)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$14 = function (e, t, a) {
        switch (e.op) {
            case"fft":
                return [tfc.fft(getParamValue("x", e, t, a))];
            case"ifft":
                return [tfc.ifft(getParamValue("x", e, t, a))];
            case"rfft":
                return [tfc.rfft(getParamValue("x", e, t, a))];
            case"irfft":
                return [tfc.irfft(getParamValue("x", e, t, a))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, executeOp$15 = function (e, t, a) {
        switch (e.op) {
            case"cast":
                return [tfc.cast(getParamValue("x", e, t, a), getParamValue("dtype", e, t, a))];
            case"expandDims":
                var r = getParamValue("axis", e, t, a);
                return [tfc.expandDims(getParamValue("x", e, t, a), r)];
            case"squeeze":
                r = getParamValue("axis", e, t, a);
                return [tfc.squeeze(getParamValue("x", e, t, a), r)];
            case"reshape":
                return [tfc.reshape(getParamValue("x", e, t, a), getParamValue("shape", e, t, a))];
            case"pad":
                return [tfc.pad(getParamValue("x", e, t, a), split(getParamValue("padding", e, t, a), 2), getParamValue("constantValue", e, t, a))];
            case"spaceToBatchND":
                var n = getParamValue("blockShape", e, t, a), o = split(getParamValue("paddings", e, t, a), 2);
                return [tfc.spaceToBatchND(getParamValue("x", e, t, a), n, o)];
            case"batchToSpaceND":
                n = getParamValue("blockShape", e, t, a);
                var s = split(getParamValue("crops", e, t, a), 2);
                return [tfc.batchToSpaceND(getParamValue("x", e, t, a), n, s)];
            case"depthToSpace":
                var i = getParamValue("blockSize", e, t, a), p = getParamValue("dataFormat", e, t, a);
                return [tfc.depthToSpace(getParamValue("x", e, t, a), i, p)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    };

    function executeOp$16(e, t, a) {
        switch (e.category) {
            case"arithmetic":
                return executeOp(e, t, a);
            case"basic_math":
                return executeOp$1(e, t, a);
            case"control":
                return executeOp$2(e, t, a);
            case"convolution":
                return executeOp$3(e, t, a);
            case"creation":
                return executeOp$4(e, t, a);
            case"dynamic":
                return executeOp$5(e, t, a);
            case"evaluation":
                return executeOp$6(e, t, a);
            case"image":
                return executeOp$8(e, t, a);
            case"graph":
                return executeOp$7(e, t, a);
            case"logical":
                return executeOp$9(e, t, a);
            case"matrices":
                return executeOp$10(e, t, a);
            case"normalization":
                return executeOp$11(e, t, a);
            case"reduction":
                return executeOp$12(e, t, a);
            case"slice_join":
                return executeOp$13(e, t, a);
            case"spectral":
                return executeOp$14(e, t, a);
            case"transformation":
                return executeOp$15(e, t, a);
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }

    var ExecutionContext = function () {
            function e(e, t) {
                this.weightMap = e, this.tensorArrayMap = t, this.rootContext = {
                    id: 0,
                    frameName: "",
                    iterationId: 0
                }, this.contexts = [this.rootContext], this.lastId = 0, this.generateCurrentContextIds()
            }

            return e.prototype.newFrame = function (e, t) {
                return {id: e, frameName: t, iterationId: 0}
            }, Object.defineProperty(e.prototype, "currentContext", {
                get: function () {
                    return this.contexts
                }, set: function (e) {
                    this.contexts !== e && (this.contexts = e, this.generateCurrentContextIds())
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "currentContextId", {
                get: function () {
                    return this._currentContextIds[0]
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "currentContextIds", {
                get: function () {
                    return this._currentContextIds
                }, enumerable: !0, configurable: !0
            }), e.prototype.generateCurrentContextIds = function () {
                for (var e = [], t = 0; t < this.contexts.length - 1; t++) {
                    var a = this.contexts.slice(0, this.contexts.length - t);
                    e.push(this.contextIdforContexts(a))
                }
                e.push(""), this._currentContextIds = e
            }, e.prototype.contextIdforContexts = function (e) {
                return e ? e.map(function (e) {
                    return 0 === e.id && 0 === e.iterationId ? "" : e.frameName + "-" + e.iterationId
                }).join("/") : ""
            }, e.prototype.enterFrame = function (e) {
                this.contexts && (this.lastId++, this.contexts = this.contexts.slice(), this.contexts.push(this.newFrame(this.lastId, e)), this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))
            }, e.prototype.exitFrame = function () {
                if (!(this.contexts && this.contexts.length > 1)) throw new Error("Cannot exit frame, the context is empty");
                this.contexts = this.contexts.slice(), this.contexts.splice(-1), this.currentContextIds.shift()
            }, e.prototype.nextIteration = function () {
                if (!(this.contexts && this.contexts.length > 0)) throw new Error("Cannot increase frame iteration, the context is empty");
                this.contexts = this.contexts.slice(), this.lastId++;
                var e = Object.assign({}, this.contexts[this.contexts.length - 1]);
                e.iterationId += 1, e.id = this.lastId, this.contexts.splice(-1, 1, e), this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts))
            }, e.prototype.getWeight = function (e) {
                return this.weightMap[e]
            }, e.prototype.addTensorArray = function (e) {
                this.tensorArrayMap[e.id] = e
            }, e.prototype.getTensorArray = function (e) {
                return this.tensorArrayMap[e]
            }, e
        }(), GraphExecutor = function () {
            function e(e) {
                this.graph = e, this.compiledMap = new Map, this._weightMap = {}, this.SEPERATOR = ",", this.placeholders = e.placeholders, this._outputs = e.outputs, this.compile()
            }

            return Object.defineProperty(e.prototype, "weightMap", {
                get: function () {
                    return this._weightMap
                }, set: function (e) {
                    var t = Object.keys(e).map(function (t) {
                        return e[t].map(function (e) {
                            return e.id
                        })
                    });
                    this.weightIds = [].concat.apply([], t), this._weightMap = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "inputs", {
                get: function () {
                    return this.placeholders.map(function (e) {
                        return {
                            name: e.name,
                            shape: e.params.shape ? e.params.shape.value : void 0,
                            dtype: e.params.dtype ? e.params.dtype.value : void 0
                        }
                    })
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "outputs", {
                get: function () {
                    return this._outputs.map(function (e) {
                        return {
                            name: e.name,
                            shape: e.params.shape ? e.params.shape.value : void 0,
                            dtype: e.params.dtype ? e.params.dtype.value : void 0
                        }
                    })
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "inputNodes", {
                get: function () {
                    return this.placeholders.map(function (e) {
                        return e.name
                    })
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "outputNodes", {
                get: function () {
                    return this.outputs.map(function (e) {
                        return e.name
                    })
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isControlFlowModel", {
                get: function () {
                    return this.graph.withControlFlow
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "isDynamicShapeModel", {
                get: function () {
                    return this.graph.withDynamicShape
                }, enumerable: !0, configurable: !0
            }), e.prototype.compile = function (e) {
                if (!this.graph.withControlFlow && !this.graph.withDynamicShape) {
                    var t = [], a = e || this.graph.placeholders, r = a.map(function (e) {
                        return e.name
                    }).sort().join(this.SEPERATOR);
                    if (!this.compiledMap.get(r)) {
                        for (var n = a.concat(this.graph.weights), o = {}; n.length > 0;) {
                            var s = n.pop();
                            o[s.name] = !0, t.push(s), s.children.forEach(function (e) {
                                !o[e.name] && e.inputNames.every(function (e) {
                                    var t = getNodeNameAndIndex(e)[0];
                                    return o[t]
                                }) && n.push(e)
                            })
                        }
                        this.compiledMap.set(r, t)
                    }
                }
            }, e.prototype.execute = function (e, t, a) {
                var r = this;
                void 0 === t && (t = !0);
                var n = Object.keys(e).sort();
                this.checkInput(e, t), this.checkInputShapeAndType(e, t), this.compile(n.map(function (e) {
                    return r.graph.nodes[e]
                }));
                var o = this.calculateOutputs(a);
                this.checkOutput(this.compiledMap.get(n.join(this.SEPERATOR)), o);
                var s = {};
                return tfc.tidy(function () {
                    for (var t = new ExecutionContext(r._weightMap, s), a = __assign({}, r.weightMap, e), i = r.getFrozenTensorIds(a), p = {}, u = r.compiledMap.get(n.join(r.SEPERATOR)), m = 0; m < u.length; m++) {
                        var l = u[m];
                        if (a[l.name] || (a[l.name] = executeOp$16(l, a, t), r.checkTensorForDisposal(l.name, l, a, t, i, o, p)), o.every(function (e) {
                            return !!a[e]
                        })) break
                    }
                    return r.findOutputs(a, t, o)
                })
            }, e.prototype.getFrozenTensorIds = function (e) {
                var t = [].concat.apply([], Object.keys(e).map(function (t) {
                    return e[t]
                }).map(function (e) {
                    return e.map(function (e) {
                        return e.id
                    })
                }));
                return new Set(t)
            }, e.prototype.checkTensorForDisposal = function (e, t, a, r, n, o, s) {
                "control" !== t.category && -1 === o.indexOf(e) && (a[e].forEach(function (e) {
                    null != e && (s[e.id] = (s[e.id] || 0) + t.children.length)
                }), t.inputs.forEach(function (e) {
                    if ("control" !== e.category) {
                        var t = getTensorsForCurrentContenxt(e.name, a, r);
                        null != t && t.forEach(function (e) {
                            if (e && !n.has(e.id)) {
                                var t = s[e.id];
                                1 === t ? (e.dispose(), delete s[e.id]) : null != t && s[e.id]--
                            }
                        })
                    }
                }))
            }, e.prototype.executeAsync = function (e, t) {
                return __awaiter(this, void 0, void 0, function () {
                    var a, r, n, o, s, i, p, u, m = this;
                    return __generator(this, function (l) {
                        switch (l.label) {
                            case 0:
                                return this.checkInput(e, !1), this.checkInputShapeAndType(e, !1), a = {}, r = new ExecutionContext(this._weightMap, a), n = this.calculateOutputs(t), [4, this.executeWithControlFlow(e, r, n)];
                            case 1:
                                return o = l.sent(), s = this.findOutputs(o, r, t), i = Object.keys(s).map(function (e) {
                                    return s[e].id
                                }), p = Object.keys(e).map(function (t) {
                                    return e[t].map(function (e) {
                                        return e.id
                                    })
                                }), u = [].concat.apply([], p), Object.keys(o).forEach(function (e) {
                                    o[e].forEach(function (e) {
                                        e && -1 === i.indexOf(e.id) && -1 === u.indexOf(e.id) && -1 === m.weightIds.indexOf(e.id) && e.dispose()
                                    })
                                }), [2, s]
                        }
                    })
                })
            }, e.prototype.executeWithControlFlow = function (e, t, a) {
                return __awaiter(this, void 0, void 0, function () {
                    var r, n, o, s, i, p, u, m, l = this;
                    return __generator(this, function (d) {
                        switch (d.label) {
                            case 0:
                                r = Object.keys(e), n = r.map(function (e) {
                                    return l.graph.nodes[e]
                                }), o = n.concat(this.graph.weights).map(function (e) {
                                    return {node: e, contexts: t.currentContext}
                                }), s = __assign({}, this.weightMap, e), i = {}, p = this.getFrozenTensorIds(s), u = {}, d.label = 1;
                            case 1:
                                return o.length > 0 ? (m = this.processStack(n, o, t, s, u, p, a, i), [4, Promise.all(m)]) : [3, 3];
                            case 2:
                                return d.sent(), [3, 1];
                            case 3:
                                return [2, s]
                        }
                    })
                })
            }, e.prototype.processStack = function (e, t, a, r, n, o, s, i) {
                for (var p = this, u = [], m = function () {
                    var m = t.pop();
                    a.currentContext = m.contexts;
                    var d = "";
                    if ("enter" === m.node.op && getParamValue("isConstant", m.node, r, a) && (d = getNodeNameAndIndex(m.node.name, a)[0]), -1 === e.indexOf(m.node)) {
                        var f = executeOp$16(m.node, r, a);
                        d || (d = getNodeNameAndIndex(m.node.name, a)[0]);
                        var c = a.currentContext;
                        f instanceof Promise ? u.push(f.then(function (e) {
                            return r[d] = e, a.currentContext = c, p.checkTensorForDisposal(d, m.node, r, a, o, s, i), p.processChildNodes(m.node, t, a, r, n), e
                        })) : (r[d] = f, l.checkTensorForDisposal(d, m.node, r, a, o, s, i), l.processChildNodes(m.node, t, a, r, n))
                    } else l.processChildNodes(m.node, t, a, r, n)
                }, l = this; t.length > 0;) m();
                return u
            }, e.prototype.processChildNodes = function (e, t, a, r, n) {
                e.children.forEach(function (e) {
                    var o = getNodeNameAndIndex(e.name, a)[0];
                    n[o] || ("merge" === e.op ? e.inputNames.some(function (e) {
                        return !!getTensor(e, r, a)
                    }) && (n[o] = !0, t.push({contexts: a.currentContext, node: e})) : e.inputNames.every(function (e) {
                        return !!getTensor(e, r, a)
                    }) && (n[o] = !0, t.push({contexts: a.currentContext, node: e})))
                })
            }, e.prototype.calculateOutputs = function (e) {
                return !e || e instanceof Array || (e = [e]), e || this.graph.outputs.map(function (e) {
                    return e.name
                })
            }, e.prototype.findOutputs = function (e, t, a) {
                return this.calculateOutputs(a).reduce(function (a, r) {
                    return a[r] = getTensor(r, e, t), a
                }, {})
            }, e.prototype.dispose = function () {
                var e = this;
                Object.keys(this.weightMap).forEach(function (t) {
                    return e.weightMap[t].forEach(function (e) {
                        return e.dispose()
                    })
                })
            }, e.prototype.checkInputShapeAndType = function (e, t) {
                void 0 === t && (t = !0), this.placeholders.forEach(function (a) {
                    var r = e[a.name];
                    if (t || r) {
                        var n = r[0];
                        if (a.params.shape && a.params.shape.value) {
                            var o = a.params.shape.value, s = o.length === n.shape.length && n.shape.every(function (e, t) {
                                return -1 === o[t] || o[t] === e
                            });
                            tfc.util.assert(s, "The shape of dict['" + a.name + "'] provided in model.execute(dict) must be [" + o + "], but was [" + n.shape + "]")
                        }
                        a.params.dtype && a.params.dtype.value && tfc.util.assert(n.dtype === a.params.dtype.value, "The dtype of dict['" + a.name + "'] provided in model.execute(dict) must be " + a.params.dtype.value + ", but was " + n.dtype)
                    }
                })
            }, e.prototype.checkInput = function (e, t) {
                var a = this;
                void 0 === t && (t = !0);
                var r = Object.keys(e), n = [], o = [];
                this.inputNodes.forEach(function (e) {
                    -1 === r.indexOf(e) && n.push(e)
                }), r.forEach(function (e) {
                    -1 === a.inputNodes.indexOf(e) && o.push(e)
                });
                var s = o.filter(function (e) {
                    return !a.graph.nodes[e]
                });
                if (n.length > 0 && t) throw new Error("The dict provided in model.execute(dict) has the keys [" + r + "], but is missing the required keys: [" + n + "].");
                if (o.length > 0 && t) throw new Error("The dict provided in model.execute(dict) has unused keys: [" + o + "]. Please provide only the following keys: [" + this.inputNodes + "].");
                if (s.length > 0) throw new Error("The dict provided in model.execute(dict) has keys: [" + s + "] not part of model graph.")
            }, e.prototype.checkOutput = function (e, t) {
                var a = e.map(function (e) {
                    return e.name
                }), r = [];
                if (t.forEach(function (e) {
                    -1 === a.indexOf(e) && r.push(e)
                }), r.length > 0) throw new Error("The following outputs are not generated by the execution: [" + r + "].")
            }, e
        }(), TFHUB_SEARCH_PARAM = "?tfjs-format=file", DEFAULT_MODEL_NAME = "tensorflowjs_model.pb",
        DEFAULT_MANIFEST_NAME = "weights_manifest.json", FrozenModel = function () {
            function e(e, t, a, r) {
                this.modelUrl = e, this.weightManifestUrl = t, this.requestOption = a, this.weightPrefix = r, this.version = "n/a"
            }

            return Object.defineProperty(e.prototype, "modelVersion", {
                get: function () {
                    return this.version
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "inputNodes", {
                get: function () {
                    return this.executor.inputNodes
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "outputNodes", {
                get: function () {
                    return this.executor.outputNodes
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "inputs", {
                get: function () {
                    return this.executor.inputs
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "outputs", {
                get: function () {
                    return this.executor.outputs
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "weights", {
                get: function () {
                    return this.executor.weightMap
                }, enumerable: !0, configurable: !0
            }), e.prototype.findIOHandler = function () {
                var e = [this.modelUrl, this.weightManifestUrl];
                if (this.requestOption) this.handler = tfc.io.browserHTTPRequest(e, this.requestOption, this.weightPrefix); else {
                    var t = tfc.io.getLoadHandlers(e);
                    if (0 === t.length) t.push(tfc.io.browserHTTPRequest(e, this.requestOption)); else if (t.length > 1) throw new Error("Found more than one (" + t.length + ") load handlers for URL '" + [e] + "'");
                    this.handler = t[0]
                }
            }, e.prototype.load = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e, t, a;
                    return __generator(this, function (r) {
                        switch (r.label) {
                            case 0:
                                if (this.findIOHandler(), null == this.handler.load) throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
                                return [4, this.handler.load()];
                            case 1:
                                return e = r.sent(), t = compiled_api_1.GraphDef.decode(new Uint8Array(e.modelTopology)), this.version = t.versions.producer + "." + t.versions.minConsumer, a = tfc.io.decodeWeights(e.weightData, e.weightSpecs), this.executor = new GraphExecutor(OperationMapper.Instance.transformGraph(t)), this.executor.weightMap = this.convertTensorMapToTensorsMap(a), [2, !0]
                        }
                    })
                })
            }, e.prototype.predict = function (e, t) {
                return this.execute_(e, !0, this.outputNodes)
            }, e.prototype.constructTensorMap = function (e) {
                var t = e instanceof tfc.Tensor ? [e] : e;
                if (t.length !== this.inputNodes.length) throw new Error("Input tensor count mismatch,the frozen model has " + this.inputNodes.length + " placeholders, while there are " + t.length + " input tensors.");
                return this.inputNodes.reduce(function (e, a, r) {
                    return e[a] = t[r], e
                }, {})
            }, e.prototype.execute = function (e, t) {
                return this.execute_(e, !1, t)
            }, e.prototype.execute_ = function (e, t, a) {
                if (void 0 === t && (t = !0), a = a || this.outputNodes, (e instanceof tfc.Tensor || Array.isArray(e)) && (e = this.constructTensorMap(e)), this.executor.isControlFlowModel || this.executor.isDynamicShapeModel) throw new Error("The model contains control flow or dynamic shape ops, please use executeAsync method");
                var r = this.executor.execute(this.convertTensorMapToTensorsMap(e), t, a), n = Object.keys(r);
                return Array.isArray(a) && a.length > 1 ? a.map(function (e) {
                    return r[e]
                }) : r[n[0]]
            }, e.prototype.executeAsync = function (e, t) {
                return __awaiter(this, void 0, void 0, function () {
                    var a, r;
                    return __generator(this, function (n) {
                        switch (n.label) {
                            case 0:
                                if (!this.executor.isControlFlowModel && !this.executor.isDynamicShapeModel) throw new Error("The model does not contain control flow or dynamic shape ops, please use execute method for better performance.");
                                return t = t || this.outputNodes, (e instanceof tfc.Tensor || Array.isArray(e)) && (e = this.constructTensorMap(e)), [4, this.executor.executeAsync(this.convertTensorMapToTensorsMap(e), t)];
                            case 1:
                                return a = n.sent(), r = Object.keys(a), [2, Array.isArray(t) && t.length > 1 ? t.map(function (e) {
                                    return a[e]
                                }) : a[r[0]]]
                        }
                    })
                })
            }, e.prototype.convertTensorMapToTensorsMap = function (e) {
                return Object.keys(e).reduce(function (t, a) {
                    return t[a] = [e[a]], t
                }, {})
            }, e.prototype.dispose = function () {
                this.executor.dispose()
            }, e
        }();

    function loadFrozenModel(e, t, a) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return [4, (r = new FrozenModel(e, t, a)).load()];
                    case 1:
                        return n.sent(), [2, r]
                }
            })
        })
    }

    function loadTfHubModule(e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (a) {
                return e.endsWith("/") || (e += "/"), [2, loadFrozenModel("" + e + DEFAULT_MODEL_NAME + TFHUB_SEARCH_PARAM, "" + e + DEFAULT_MANIFEST_NAME + TFHUB_SEARCH_PARAM, t)]
            })
        })
    }

    var version = "0.7.0";
    exports.FrozenModel = FrozenModel, exports.loadFrozenModel = loadFrozenModel, exports.loadTfHubModule = loadTfHubModule, exports.version_converter = version, Object.defineProperty(exports, "__esModule", {value: !0})
});
//# sourceMappingURL=tf-converter.min.js.map
