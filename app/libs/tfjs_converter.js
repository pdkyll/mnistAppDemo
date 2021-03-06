/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
}(this, function (e, t) {
    "use strict";
    var a, r, n = function () {
        return (n = Object.assign || function (e) {
            for (var t, a = 1, r = arguments.length; a < r; a++) for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };

    function s(e, t, a, r) {
        return new (a || (a = Promise))(function (n, s) {
            function o(e) {
                try {
                    i(r.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function p(e) {
                try {
                    i(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function i(e) {
                e.done ? n(e.value) : new a(function (t) {
                    t(e.value)
                }).then(o, p)
            }

            i((r = r.apply(e, t || [])).next())
        })
    }

    function o(e, t) {
        var a, r, n, s, o = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return s = {
            next: p(0),
            throw: p(1),
            return: p(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
            return this
        }), s;

        function p(s) {
            return function (p) {
                return function (s) {
                    if (a) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (a = 1, r && (n = 2 & s[0] ? r.return : s[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, s[1])).done) return n;
                        switch (r = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                            case 0:
                            case 1:
                                n = s;
                                break;
                            case 4:
                                return o.label++, {value: s[1], done: !1};
                            case 5:
                                o.label++, r = s[1], s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < n[1]) {
                                    o.label = n[1], n = s;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(s);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        s = t.call(e, o)
                    } catch (e) {
                        s = [6, e], r = 0
                    } finally {
                        a = n = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {value: s[0] ? s[1] : void 0, done: !0}
                }([s, p])
            }
        }
    }

    function p(e, t, a, r) {
        var n = t.inputParams[e];
        if (n && void 0 !== n.inputIndexStart) {
            var s = n.inputIndexStart,
                o = 0 === n.inputIndexEnd ? void 0 : void 0 === n.inputIndexEnd ? s + 1 : n.inputIndexEnd;
            if ("tensor" === n.type) return i(t.inputNames[n.inputIndexStart], a, r);
            if ("tensors" === n.type) return t.inputNames.slice(s, o).map(function (e) {
                return i(e, a, r)
            });
            var p = Array.prototype.slice.call(i(t.inputNames.slice(s)[0], a, r).dataSync());
            return "number" === n.type ? p[0] : p
        }
        var u = t.attrParams[e];
        return u && u.value
    }

    function i(e, t, a) {
        var r = c(e), n = r[0], s = r[1], o = a.currentContextIds.find(function (e) {
            return !!t[m(n, e)]
        });
        return void 0 !== o ? t[m(n, o)][s] : void 0
    }

    function u(e, t) {
        var a = c(e), r = a[0], n = a[1];
        return [m(r, t && t.currentContextId), n]
    }

    function m(e, t) {
        return t ? e + "-" + t : e
    }

    function c(e) {
        var t = e.lastIndexOf(":");
        return -1 === t ? [e, 0] : [e.substring(0, t), Number(e.substring(t + 1))]
    }

    function y(e, t) {
        for (var a = [], r = 0; r < e.length; r += t) a.push(e.slice(r, r + t));
        return a
    }

    !function (e) {
        e[e.DT_INVALID = 0] = "DT_INVALID", e[e.DT_FLOAT = 1] = "DT_FLOAT", e[e.DT_DOUBLE = 2] = "DT_DOUBLE", e[e.DT_INT32 = 3] = "DT_INT32", e[e.DT_UINT8 = 4] = "DT_UINT8", e[e.DT_INT16 = 5] = "DT_INT16", e[e.DT_INT8 = 6] = "DT_INT8", e[e.DT_STRING = 7] = "DT_STRING", e[e.DT_COMPLEX64 = 8] = "DT_COMPLEX64", e[e.DT_INT64 = 9] = "DT_INT64", e[e.DT_BOOL = 10] = "DT_BOOL", e[e.DT_QINT8 = 11] = "DT_QINT8", e[e.DT_QUINT8 = 12] = "DT_QUINT8", e[e.DT_QINT32 = 13] = "DT_QINT32", e[e.DT_BFLOAT16 = 14] = "DT_BFLOAT16", e[e.DT_FLOAT_REF = 101] = "DT_FLOAT_REF", e[e.DT_DOUBLE_REF = 102] = "DT_DOUBLE_REF", e[e.DT_INT32_REF = 103] = "DT_INT32_REF", e[e.DT_UINT8_REF = 104] = "DT_UINT8_REF", e[e.DT_INT16_REF = 105] = "DT_INT16_REF", e[e.DT_INT8_REF = 106] = "DT_INT8_REF", e[e.DT_STRING_REF = 107] = "DT_STRING_REF", e[e.DT_COMPLEX64_REF = 108] = "DT_COMPLEX64_REF", e[e.DT_INT64_REF = 109] = "DT_INT64_REF", e[e.DT_BOOL_REF = 110] = "DT_BOOL_REF", e[e.DT_QINT8_REF = 111] = "DT_QINT8_REF", e[e.DT_QUINT8_REF = 112] = "DT_QUINT8_REF", e[e.DT_QINT32_REF = 113] = "DT_QINT32_REF", e[e.DT_BFLOAT16_REF = 114] = "DT_BFLOAT16_REF"
    }(a || (a = {})), function (e) {
        !function (e) {
            e[e.LEGACY = 0] = "LEGACY", e[e.V1 = 1] = "V1", e[e.V2 = 2] = "V2"
        }(e.CheckpointFormatVersion || (e.CheckpointFormatVersion = {}))
    }(r || (r = {}));
    var d = Object.freeze({
            json: [{
                tfOpName: "Add",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "AddN",
                category: "arithmetic",
                inputs: [{start: 0, end: 0, name: "tensors", type: "tensors"}]
            }, {
                tfOpName: "BiasAdd",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Sub",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "RealDiv",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Div",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "FloorDiv",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Mul",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Maximum",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}]
            }, {
                tfOpName: "Minimum",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}]
            }, {
                tfOpName: "Pow",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "SquaredDifference",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Mod",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "FloorMod",
                category: "arithmetic",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }]
        }), l = Object.freeze({
            json: [{
                tfOpName: "Abs",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Acos",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Asin",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Atan",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Atan2",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "y", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Ceil",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "ClipByValue",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "clip_value_min", name: "clipValueMin", type: "number"}, {
                    tfName: "clip_value_max",
                    name: "clipValueMax",
                    type: "number"
                }]
            }, {
                tfOpName: "Cos",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Cosh",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Elu",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Exp",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Floor",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Log",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Neg",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Relu",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Relu6",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}, {
                    tfName: "clipValueMin",
                    name: "clipValueMin",
                    type: "number",
                    defaultValue: 0
                }, {tfName: "clipValueMax", name: "clipValueMax", type: "number", defaultValue: 6}]
            }, {
                tfOpName: "Selu",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Sigmoid",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Sin",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Sinh",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Sqrt",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Rsqrt",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Square",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Tan",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Tanh",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Sign",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Round",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Expm1",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Log1p",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Reciprocal",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Softplus",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Asinh",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Acosh",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Atanh",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Erf",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Prod",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axes", type: "number[]"}],
                attrs: [{tfName: "keep_dims", name: "keepDims", type: "bool", notSupported: !0}, {
                    tfName: "T",
                    name: "dtype",
                    type: "dtype",
                    notSupported: !0
                }]
            }, {
                tfOpName: "LeakyRelu",
                category: "basic_math",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "alpha", name: "alpha", type: "number", defaultValue: .2}, {
                    tfName: "T",
                    name: "dtype",
                    type: "dtype",
                    notSupported: !0
                }]
            }]
        }), f = Object.freeze({
            json: [{
                tfOpName: "LoopCond",
                category: "control",
                inputs: [{start: 0, name: "pred", type: "tensor"}]
            }, {
                tfOpName: "Switch",
                category: "control",
                inputs: [{start: 0, name: "data", type: "tensor"}, {start: 1, name: "pred", type: "tensor"}]
            }, {
                tfOpName: "Merge",
                category: "control",
                inputs: [{start: 0, end: 0, name: "tensors", type: "tensors"}]
            }, {
                tfOpName: "Enter",
                category: "control",
                inputs: [{start: 0, name: "tensor", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}, {
                    tfName: "frame_name",
                    name: "frameName",
                    type: "string"
                }, {tfName: "is_constant", name: "isConstant", type: "bool"}]
            }, {
                tfOpName: "Exit",
                category: "control",
                inputs: [{start: 0, name: "tensor", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "NextIteration",
                category: "control",
                inputs: [{start: 0, name: "tensor", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "TensorArrayV3",
                category: "control",
                inputs: [{start: 0, name: "size", type: "number"}],
                attrs: [{tfName: "dtype", name: "dtype", type: "dtype"}, {
                    tfName: "element_shape",
                    name: "elementShape",
                    type: "shape"
                }, {tfName: "dynamic_size", name: "dynamicSize", type: "bool"}, {
                    tfName: "clear_after_read",
                    name: "clearAfterRead",
                    type: "bool"
                }, {
                    tfName: "identical_element_shapes",
                    name: "identicalElementShapes",
                    type: "bool"
                }, {tfName: "tensor_array_name", name: "name", type: "string"}]
            }, {
                tfOpName: "TensorArrayWriteV3",
                category: "control",
                inputs: [{start: 0, name: "tensorArrayId", type: "number"}, {
                    start: 1,
                    name: "index",
                    type: "number"
                }, {start: 2, name: "tensor", type: "tensor"}, {start: 3, name: "flowIn", type: "number"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "TensorArrayReadV3",
                category: "control",
                inputs: [{start: 0, name: "tensorArrayId", type: "number"}, {
                    start: 1,
                    name: "index",
                    type: "number"
                }, {start: 2, name: "flowIn", type: "number"}],
                attrs: [{tfName: "dtype", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "TensorArrayGatherV3",
                category: "control",
                inputs: [{start: 0, name: "tensorArrayId", type: "number"}, {
                    start: 1,
                    name: "indices",
                    type: "number[]"
                }, {start: 2, name: "flowIn", type: "number"}],
                attrs: [{tfName: "dtype", name: "dtype", type: "dtype"}, {
                    tfName: "element_shape",
                    name: "elementShape",
                    type: "shape"
                }]
            }, {
                tfOpName: "TensorArrayScatterV3",
                category: "control",
                inputs: [{start: 0, name: "tensorArrayId", type: "number"}, {
                    start: 1,
                    name: "indices",
                    type: "number[]"
                }, {start: 2, name: "tensor", type: "tensor"}, {start: 3, name: "flowIn", type: "number"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype"}]
            }, {
                tfOpName: "TensorArrayConcatV3",
                category: "control",
                inputs: [{start: 0, name: "tensorArrayId", type: "number"}, {start: 1, name: "flowIn", type: "number"}],
                attrs: [{tfName: "dtype", name: "dtype", type: "dtype"}, {
                    tfName: "element_shape_except0",
                    name: "elementShapeExcept0",
                    type: "shape",
                    notSupported: !0
                }]
            }, {
                tfOpName: "TensorArraySplitV3",
                category: "control",
                inputs: [{start: 0, name: "tensorArrayId", type: "number"}, {
                    start: 1,
                    name: "tensor",
                    type: "tensor"
                }, {start: 2, name: "lengths", type: "number[]"}, {start: 3, name: "flowIn", type: "number"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype"}]
            }, {
                tfOpName: "TensorArraySizeV3",
                category: "control",
                inputs: [{start: 0, name: "tensorArrayId", type: "number"}, {start: 1, name: "flowIn", type: "number"}]
            }, {
                tfOpName: "TensorArrayCloseV3",
                category: "control",
                inputs: [{start: 0, name: "tensorArrayId", type: "number"}]
            }]
        }), h = Object.freeze({
            json: [{
                tfOpName: "AvgPool",
                category: "convolution",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "strides", name: "strides", type: "number[]"}, {
                    tfName: "padding",
                    name: "pad",
                    type: "string"
                }, {tfName: "data_format", name: "dataFormat", type: "string", notSupported: !0}, {
                    tfName: "ksize",
                    name: "kernelSize",
                    type: "number[]"
                }, {tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "MaxPool",
                category: "convolution",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "strides", name: "strides", type: "number[]"}, {
                    tfName: "padding",
                    name: "pad",
                    type: "string"
                }, {tfName: "data_format", name: "dataFormat", type: "string", notSupported: !0}, {
                    tfName: "ksize",
                    name: "kernelSize",
                    type: "number[]"
                }, {tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Conv1D",
                category: "convolution",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "filter", type: "tensor"}],
                attrs: [{tfName: "stride", name: "stride", type: "number"}, {
                    tfName: "padding",
                    name: "pad",
                    type: "string"
                }, {tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NWC"}, {
                    tfName: "T",
                    name: "dtype",
                    type: "dtype",
                    notSupported: !0
                }, {tfName: "dilation", name: "dilation", type: "number", defaultValue: 1}]
            }, {
                tfOpName: "Conv2D",
                category: "convolution",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "filter", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}, {
                    tfName: "strides",
                    name: "strides",
                    type: "number[]"
                }, {tfName: "padding", name: "pad", type: "string"}, {
                    tfName: "useCudnnOnGpu",
                    name: "useCudnnOnGpu",
                    type: "bool"
                }, {tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC"}, {
                    tfName: "dilations",
                    name: "dilations",
                    type: "number[]"
                }]
            }, {
                tfOpName: "Conv2DBackpropInput",
                category: "convolution",
                inputs: [{start: 2, name: "x", type: "tensor"}, {start: 1, name: "filter", type: "tensor"}, {
                    start: 0,
                    name: "outputShape",
                    type: "number[]"
                }],
                attrs: [{tfName: "strides", name: "strides", type: "number[]"}, {
                    tfName: "padding",
                    name: "pad",
                    type: "string"
                }, {tfName: "data_format", name: "dataFormat", type: "string", notSupported: !0}]
            }, {
                tfOpName: "DepthwiseConv2d",
                category: "convolution",
                inputs: [{start: 0, name: "input", type: "tensor"}, {start: 1, name: "filter", type: "tensor"}],
                attrs: [{tfName: "strides", name: "strides", type: "number[]"}, {
                    tfName: "padding",
                    name: "pad",
                    type: "string"
                }, {tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC"}, {
                    tfName: "dilations",
                    name: "dilations",
                    type: "number[]"
                }]
            }, {
                tfOpName: "DepthwiseConv2dNative",
                category: "convolution",
                inputs: [{start: 0, name: "input", type: "tensor"}, {start: 1, name: "filter", type: "tensor"}],
                attrs: [{tfName: "strides", name: "strides", type: "number[]"}, {
                    tfName: "padding",
                    name: "pad",
                    type: "string"
                }, {tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC"}, {
                    tfName: "dilations",
                    name: "dilations",
                    type: "number[]"
                }]
            }]
        }), N = Object.freeze({
            json: [{
                tfOpName: "Fill",
                category: "creation",
                inputs: [{start: 0, name: "shape", type: "number[]"}, {start: 1, name: "value", type: "number"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype"}]
            }, {
                tfOpName: "LinSpace",
                category: "creation",
                inputs: [{start: 0, name: "start", type: "number"}, {start: 1, name: "stop", type: "number"}, {
                    start: 2,
                    name: "num",
                    type: "number"
                }],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "OneHot",
                category: "creation",
                inputs: [{start: 0, name: "indices", type: "tensor"}, {start: 1, name: "depth", type: "number"}, {
                    start: 2,
                    name: "onValue",
                    type: "number",
                    defaultValue: 1
                }, {start: 3, name: "offValue", type: "number", defaultValue: 0}],
                attrs: [{tfName: "axis", name: "axis", type: "number", notSupported: !0}, {
                    tfName: "T",
                    name: "dtype",
                    type: "dtype",
                    notSupported: !0
                }]
            }, {
                tfOpName: "Ones",
                category: "creation",
                inputs: [{start: 0, name: "shape", type: "number[]"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype"}]
            }, {
                tfOpName: "OnesLike",
                category: "creation",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "dtype", name: "dtype", type: "dtype"}]
            }, {
                tfOpName: "RandomUniform",
                category: "creation",
                inputs: [{start: 0, name: "shape", type: "number[]"}],
                attrs: [{tfName: "minval", name: "minval", type: "number", defaultValue: 0}, {
                    tfName: "maxval",
                    name: "maxval",
                    type: "number",
                    defaultValue: 1
                }, {tfName: "dtype", name: "dtype", type: "dtype"}, {
                    tfName: "seed",
                    name: "seed",
                    type: "number",
                    defaultValue: 0
                }, {tfName: "seed2", name: "seed2", type: "number", defaultValue: 0, notSupported: !0}, {
                    tfName: "T",
                    name: "T",
                    type: "number",
                    notSupported: !0
                }]
            }, {
                tfOpName: "Range",
                category: "creation",
                inputs: [{start: 0, name: "start", type: "number"}, {start: 1, name: "stop", type: "number"}, {
                    start: 2,
                    name: "step",
                    type: "number",
                    defaultValue: 0
                }],
                attrs: [{tfName: "Tidx", name: "dtype", type: "dtype"}]
            }, {
                tfOpName: "TruncatedNormal",
                category: "creation",
                inputs: [{start: 0, name: "shape", type: "number[]"}],
                attrs: [{tfName: "means", name: "mean", type: "number", defaultValue: 0}, {
                    tfName: "stddev",
                    name: "stdDev",
                    type: "number",
                    defaultValue: 1
                }, {tfName: "seed", name: "seed", type: "number"}, {
                    tfName: "seed2",
                    name: "seed2",
                    type: "number",
                    defaultValue: 0,
                    notSupported: !0
                }, {tfName: "dtype", name: "dtype", type: "dtype"}, {
                    tfName: "T",
                    name: "T",
                    type: "number",
                    notSupported: !0
                }]
            }, {
                tfOpName: "Zeros",
                category: "creation",
                inputs: [{start: 0, name: "shape", type: "number[]"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype"}]
            }, {
                tfOpName: "ZerosLike",
                category: "creation",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype"}]
            }]
        }), g = Object.freeze({
            json: [{
                tfOpName: "NonMaxSuppressionV2",
                category: "dynamic",
                inputs: [{start: 0, name: "boxes", type: "tensor"}, {start: 1, name: "scores", type: "tensor"}, {
                    start: 2,
                    name: "maxOutputSize",
                    type: "number"
                }, {start: 3, name: "iouThreshold", type: "number"}]
            }, {
                tfOpName: "NonMaxSuppressionV3",
                category: "dynamic",
                inputs: [{start: 0, name: "boxes", type: "tensor"}, {start: 1, name: "scores", type: "tensor"}, {
                    start: 2,
                    name: "maxOutputSize",
                    type: "number"
                }, {start: 3, name: "iouThreshold", type: "number"}, {start: 4, name: "scoreThreshold", type: "number"}]
            }, {
                tfOpName: "Where",
                category: "dynamic",
                inputs: [{start: 0, name: "condition", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "ListDiff",
                category: "dynamic",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "y", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }]
        }), b = Object.freeze({
            json: [{
                tfOpName: "TopKV2",
                category: "evaluation",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "k", type: "number"}],
                attrs: [{tfName: "sorted", name: "sorted", type: "bool"}]
            }]
        }), x = Object.freeze({
            json: [{
                tfOpName: "PlaceholderWithDefault",
                category: "graph",
                inputs: [{start: 0, name: "default", type: "tensor"}],
                attrs: [{tfName: "shape", name: "shape", type: "shape"}, {tfName: "dtype", name: "dtype", type: "dtype"}]
            }, {
                tfOpName: "Placeholder",
                category: "graph",
                attrs: [{tfName: "shape", name: "shape", type: "shape"}, {tfName: "dtype", name: "dtype", type: "dtype"}]
            }, {tfOpName: "Const", category: "graph"}, {
                tfOpName: "Identity",
                category: "graph",
                inputs: [{start: 0, name: "x", type: "tensor"}]
            }, {
                tfOpName: "IdentityN",
                category: "graph",
                inputs: [{start: 0, end: 0, name: "x", type: "tensors"}]
            }, {
                tfOpName: "Snapshot",
                category: "graph",
                inputs: [{start: 0, name: "x", type: "tensor"}]
            }, {tfOpName: "Rank", category: "graph", inputs: [{start: 0, name: "x", type: "tensor"}]}, {
                tfOpName: "Size",
                category: "graph",
                inputs: [{start: 0, name: "x", type: "tensor"}]
            }, {tfOpName: "Shape", category: "graph", inputs: [{start: 0, name: "x", type: "tensor"}]}, {
                tfOpName: "ShapeN",
                category: "graph",
                inputs: [{start: 0, end: 0, name: "x", type: "tensors"}]
            }, {
                tfOpName: "Print",
                category: "graph",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "data", type: "tensors"}],
                attrs: [{tfName: "message", name: "message", type: "string"}, {
                    tfName: "first_n",
                    name: "firstN",
                    type: "number",
                    notSupported: !0
                }, {tfName: "summarize", name: "summarize", type: "number", defaultValue: 3}]
            }, {tfOpName: "NoOp", category: "graph", inputs: []}, {
                tfOpName: "StopGradient",
                category: "graph",
                inputs: [{start: 0, name: "x", type: "tensor"}]
            }, {
                tfOpName: "FakeQuantWithMinMaxVars",
                category: "graph",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "min", name: "min", type: "number"}, {tfName: "max", name: "max", type: "number"}]
            }]
        }), T = Object.freeze({
            json: [{
                tfOpName: "ResizeBilinear",
                category: "image",
                inputs: [{start: 0, name: "images", type: "tensor"}, {start: 1, name: "size", type: "number[]"}],
                attrs: [{tfName: "align_corners", name: "alignCorners", type: "bool"}, {
                    tfName: "T",
                    name: "dtype",
                    type: "dtype",
                    notSupported: !0
                }]
            }, {
                tfOpName: "ResizeNearestNeighbor",
                category: "image",
                inputs: [{start: 0, name: "images", type: "tensor"}, {start: 1, name: "size", type: "number[]"}],
                attrs: [{tfName: "align_corners", name: "alignCorners", type: "bool"}, {
                    tfName: "T",
                    name: "dtype",
                    type: "dtype",
                    notSupported: !0
                }]
            }, {
                tfOpName: "CropAndResize",
                category: "image",
                inputs: [{start: 0, name: "image", type: "tensor"}, {start: 1, name: "boxes", type: "tensor"}, {
                    start: 2,
                    name: "boxInd",
                    type: "tensor"
                }, {start: 3, name: "cropSize", type: "number[]"}],
                attrs: [{tfName: "method", name: "method", type: "string"}, {
                    tfName: "extrapolation_value",
                    name: "extrapolationValue",
                    type: "number"
                }]
            }]
        }), O = Object.freeze({
            json: [{
                tfOpName: "Equal",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "NotEqual",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Greater",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "GreaterEqual",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Less",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "LessEqual",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "LogicalAnd",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "LogicalNot",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "LogicalOr",
                category: "logical",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Select",
                category: "logical",
                inputs: [{start: 0, name: "condition", type: "tensor"}, {start: 1, name: "a", type: "tensor"}, {
                    start: 2,
                    name: "b",
                    type: "tensor"
                }],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }]
        }), v = Object.freeze({
            json: [{
                tfOpName: "MatMul",
                category: "matrices",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "transpose_a", name: "transposeA", type: "bool", defaultValue: !1}, {
                    tfName: "transpose_b",
                    name: "transposeB",
                    type: "bool",
                    defaultValue: !1
                }, {tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "BatchMatMul",
                category: "matrices",
                inputs: [{start: 0, name: "a", type: "tensor"}, {start: 1, name: "b", type: "tensor"}],
                attrs: [{tfName: "adj_x", name: "transposeA", type: "bool", defaultValue: !1}, {
                    tfName: "adj_y",
                    name: "transposeB",
                    type: "bool",
                    defaultValue: !1
                }, {tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }, {
                tfOpName: "Transpose",
                category: "matrices",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "perm", type: "number[]"}],
                attrs: [{tfName: "T", name: "dtype", type: "dtype", notSupported: !0}]
            }]
        }), S = Object.freeze({
            json: [{
                tfOpName: "FusedBatchNorm",
                category: "normalization",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "scale", type: "tensor"}, {
                    start: 2,
                    name: "offset",
                    type: "tensor"
                }, {start: 3, name: "mean", type: "tensor"}, {start: 4, name: "variance", type: "tensor"}],
                attrs: [{tfName: "epsilon", name: "epsilon", type: "number", defaultValue: .001}, {
                    tfName: "data_format",
                    name: "dataFormat",
                    type: "string",
                    notSupported: !0
                }]
            }, {
                tfOpName: "FusedBatchNormV2",
                category: "normalization",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "scale", type: "tensor"}, {
                    start: 2,
                    name: "offset",
                    type: "tensor"
                }, {start: 3, name: "mean", type: "tensor"}, {start: 4, name: "variance", type: "tensor"}],
                attrs: [{tfName: "epsilon", name: "epsilon", type: "number", defaultValue: .001}, {
                    tfName: "data_format",
                    name: "dataFormat",
                    type: "string",
                    notSupported: !0
                }]
            }, {
                tfOpName: "LRN",
                category: "normalization",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "depth_radius", name: "radius", type: "number", defaultValue: 5}, {
                    tfName: "bias",
                    name: "bias",
                    type: "number",
                    defaultValue: 1
                }, {tfName: "alpha", name: "alpha", type: "number", defaultValue: 1}, {
                    tfName: "beta",
                    name: "beta",
                    type: "number",
                    defaultValue: .5
                }]
            }, {
                tfOpName: "Softmax",
                category: "normalization",
                inputs: [{start: 0, name: "x", type: "tensor"}]
            }, {
                tfOpName: "LogSoftmax",
                category: "normalization",
                inputs: [{start: 0, name: "x", type: "tensor"}]
            }, {
                tfOpName: "SparseToDense",
                category: "normalization",
                inputs: [{start: 0, name: "sparseIndices", type: "tensor"}, {
                    start: 1,
                    name: "outputShape",
                    type: "number[]"
                }, {start: 2, name: "sparseValues", type: "tensor"}, {start: 3, name: "defaultValue", type: "tensor"}],
                attrs: [{
                    tfName: "validate_indices",
                    name: "validateIndices",
                    type: "bool",
                    defaultValue: !0,
                    notSupported: !0
                }]
            }]
        }), w = Object.freeze({
            json: [{
                tfOpName: "Max",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number[]"}],
                attrs: [{tfName: "keep_dims", name: "keepDims", type: "bool"}]
            }, {
                tfOpName: "Mean",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number[]"}],
                attrs: [{tfName: "keep_dims", name: "keepDims", type: "bool"}]
            }, {
                tfOpName: "Min",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number[]"}],
                attrs: [{tfName: "keep_dims", name: "keepDims", type: "bool"}]
            }, {
                tfOpName: "Sum",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number[]"}],
                attrs: [{tfName: "keep_dims", name: "keepDims", type: "bool"}]
            }, {
                tfOpName: "All",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number[]"}],
                attrs: [{tfName: "keep_dims", name: "keepDims", type: "bool"}]
            }, {
                tfOpName: "Any",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number[]"}],
                attrs: [{tfName: "keep_dims", name: "keepDims", type: "bool"}]
            }, {
                tfOpName: "ArgMax",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number"}]
            }, {
                tfOpName: "ArgMin",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number"}]
            }, {
                tfOpName: "Prod",
                category: "reduction",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number[]"}],
                attrs: [{tfName: "keep_dims", name: "keepDims", type: "bool"}]
            }]
        }), _ = Object.freeze({
            json: [{
                tfOpName: "ConcatV2",
                category: "slice_join",
                inputs: [{start: 0, end: -1, name: "tensors", type: "tensors"}, {start: -1, name: "axis", type: "number"}]
            }, {
                tfOpName: "Concat",
                category: "slice_join",
                inputs: [{start: 1, end: 0, name: "tensors", type: "tensors"}, {start: 0, name: "axis", type: "number"}]
            }, {
                tfOpName: "GatherV2",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "indices", type: "tensor"}, {
                    start: 2,
                    name: "axis",
                    type: "number",
                    defaultValue: 0
                }]
            }, {
                tfOpName: "Gather",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "indices", type: "tensor"}],
                attrs: [{tfName: "axis", name: "axis", type: "number", defaultValue: 0}, {
                    tfName: "validate_indices",
                    name: "validateIndices",
                    type: "bool",
                    notSupported: !0
                }]
            }, {
                tfOpName: "Reverse",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "dims", type: "bool", notSupported: !0}]
            }, {
                tfOpName: "ReverseV2",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number[]"}]
            }, {
                tfOpName: "Slice",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "begin", type: "number[]"}, {
                    start: 2,
                    name: "size",
                    type: "number[]"
                }]
            }, {
                tfOpName: "StridedSlice",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "begin", type: "number[]"}, {
                    start: 2,
                    name: "end",
                    type: "number[]"
                }, {start: 3, name: "strides", type: "number[]"}],
                attrs: [{tfName: "begin_mask", name: "beginMask", type: "number", defaultValue: 0}, {
                    tfName: "end_mask",
                    name: "endMask",
                    type: "number",
                    defaultValue: 0
                }, {
                    tfName: "new_axis_mask",
                    name: "newAxisMask",
                    type: "number",
                    defaultValue: 0
                }, {
                    tfName: "ellipsis_mask",
                    name: "ellipsisMask",
                    type: "number",
                    defaultValue: 0
                }, {tfName: "shrink_axis_mask", name: "shrinkAxisMask", type: "number", defaultValue: 0}]
            }, {
                tfOpName: "Pack",
                category: "slice_join",
                inputs: [{start: 0, end: 0, name: "tensors", type: "tensors"}],
                attrs: [{tfName: "axis", name: "axis", type: "number", defaultValue: 0}]
            }, {
                tfOpName: "Unpack",
                category: "slice_join",
                inputs: [{start: 0, name: "tensor", type: "tensor"}],
                attrs: [{tfName: "axis", name: "axis", type: "number", defaultValue: 0}, {
                    tfName: "num",
                    name: "num",
                    type: "number",
                    defaultValue: 0,
                    notSupported: !0
                }]
            }, {
                tfOpName: "Tile",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "reps", type: "number[]"}]
            }, {
                tfOpName: "Split",
                category: "slice_join",
                inputs: [{start: 0, name: "axis", type: "number", defaultValue: 0}, {start: 1, name: "x", type: "tensor"}],
                attrs: [{tfName: "num_split", name: "numOrSizeSplits", type: "number", defaultValue: 1}]
            }, {
                tfOpName: "SplitV",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {
                    start: 1,
                    name: "numOrSizeSplits",
                    type: "number[]"
                }, {start: 2, name: "axis", type: "number", defaultValue: 0}]
            }, {
                tfOpName: "ScatterNd",
                category: "slice_join",
                inputs: [{start: 0, name: "indices", type: "tensor"}, {start: 1, name: "values", type: "tensor"}, {
                    start: 2,
                    name: "shape",
                    type: "number[]"
                }]
            }, {
                tfOpName: "GatherNd",
                category: "slice_join",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "indices", type: "tensor"}]
            }, {
                tfOpName: "SparseToDense",
                category: "slice_join",
                inputs: [{start: 0, name: "sparseIndices", type: "tensor"}, {
                    start: 1,
                    name: "outputShape",
                    type: "number[]"
                }, {start: 2, name: "sparseValues", type: "tensor"}, {start: 3, name: "defaultValue", type: "tensor"}],
                attrs: [{
                    tfName: "validate_indices",
                    name: "validateIndices",
                    type: "bool",
                    defaultValue: !1,
                    notSupported: !0
                }]
            }]
        }), A = Object.freeze({
            json: [{
                tfOpName: "FFT",
                category: "spectral",
                inputs: [{start: 0, name: "x", type: "tensor"}]
            }, {tfOpName: "IFFT", category: "spectral", inputs: [{start: 0, name: "x", type: "tensor"}]}, {
                tfOpName: "RFFT",
                category: "spectral",
                inputs: [{start: 0, name: "x", type: "tensor"}, {
                    start: 1,
                    name: "fft_length",
                    type: "number",
                    notSupported: !0
                }]
            }, {
                tfOpName: "IRFFT",
                category: "spectral",
                inputs: [{start: 0, name: "x", type: "tensor"}, {
                    start: 1,
                    name: "fft_length",
                    type: "number",
                    notSupported: !0
                }]
            }]
        }), D = Object.freeze({
            json: [{
                tfOpName: "Cast",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "SrcT", name: "sdtype", type: "dtype", notSupported: !0}, {
                    tfName: "DstT",
                    name: "dtype",
                    type: "dtype"
                }]
            }, {
                tfOpName: "ExpandDims",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "axis", type: "number"}]
            }, {
                tfOpName: "Pad",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "padding", type: "number[]"}],
                attrs: [{tfName: "constant_value", name: "constantValue", type: "number", defaultValue: 0}]
            }, {
                tfOpName: "PadV2",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "padding", type: "number[]"}, {
                    start: 2,
                    name: "constantValue",
                    type: "number",
                    defaultValue: 0
                }]
            }, {
                tfOpName: "Reshape",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "shape", type: "number[]"}]
            }, {
                tfOpName: "Squeeze",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "axis", tfDeprecatedName: "squeeze_dims", name: "axis", type: "number[]"}]
            }, {
                tfOpName: "SpaceToBatchND",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "blockShape", type: "number[]"}, {
                    start: 2,
                    name: "paddings",
                    type: "number[]"
                }]
            }, {
                tfOpName: "BatchToSpaceND",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}, {start: 1, name: "blockShape", type: "number[]"}, {
                    start: 2,
                    name: "crops",
                    type: "number[]"
                }]
            }, {
                tfOpName: "DepthToSpace",
                category: "transformation",
                inputs: [{start: 0, name: "x", type: "tensor"}],
                attrs: [{tfName: "block_size", name: "blockSize", type: "number"}, {
                    tfName: "data_format",
                    name: "dataFormat",
                    type: "string"
                }]
            }]
        }), E = ["Switch", "Merge", "Enter", "Exit", "NextIteration"],
        I = ["NonMaxSuppressionV2", "NonMaxSuppressionV3", "Where"], V = function () {
            function e() {
                var e = [d, l, f, h, N, g, b, O, T, x, v, S, w, _, A, D], t = [].concat.apply([], e.map(function (e) {
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
                return E.some(function (t) {
                    return t === e.op
                })
            }, e.prototype.isDynamicShape = function (e) {
                return I.some(function (t) {
                    return t === e.op
                })
            }, e.prototype.transformGraph = function (e) {
                var t = this, a = !1, r = !1, n = [], s = [], o = e.node.reduce(function (e, o) {
                    return e[o.name] = t.mapNode(o), t.isControlFlow(o) && (a = !0), t.isDynamicShape(o) && (r = !0), "Placeholder" === o.op && n.push(e[o.name]), "Const" === o.op && s.push(e[o.name]), e
                }, {}), p = [], i = [];
                return Object.keys(o).forEach(function (e) {
                    var t = o[e];
                    t.inputNames.forEach(function (e) {
                        var a = u(e)[0];
                        t.inputs.push(o[a]), o[a].children.push(t)
                    }), 0 === t.inputs.length && p.push(t)
                }), Object.keys(o).forEach(function (e) {
                    var t = o[e];
                    0 === t.children.length && i.push(t)
                }), {nodes: o, inputs: p, outputs: i, weights: s, placeholders: n, withControlFlow: a, withDynamicShape: r}
            }, e.prototype.mapNode = function (e) {
                var t = this, a = this.opMappers[e.op];
                if (void 0 === a) throw new Error("Tensorflow Op is not supported: " + e.op);
                var r = {
                    name: e.name, op: e.op, category: a.category, inputNames: (e.input || []).map(function (e) {
                        return e.startsWith("^") ? e.substr(1) : e
                    }), inputs: [], children: [], inputParams: {}, attrParams: {}
                };
                return null == e.attr && (e.attr = {}), null != a.inputs && (r.inputParams = a.inputs.reduce(function (e, t) {
                    return e[t.name] = {type: t.type, inputIndexStart: t.start, inputIndexEnd: t.end}, e
                }, {})), null != a.attrs && (r.attrParams = a.attrs.reduce(function (a, r) {
                    var n = r.type, s = void 0;
                    switch (r.type) {
                        case"string":
                            void 0 === (s = t.getStringParam(e.attr, r.tfName, r.defaultValue)) && r.tfDeprecatedName && (s = t.getStringParam(e.attr, r.tfDeprecatedName, r.defaultValue));
                            break;
                        case"number":
                            void 0 === (s = t.getNumberParam(e.attr, r.tfName, r.defaultValue || 0)) && r.tfDeprecatedName && (s = t.getNumberParam(e.attr, r.tfDeprecatedName, r.defaultValue));
                            break;
                        case"number[]":
                            void 0 === (s = t.getNumericArrayParam(e.attr, r.tfName, r.defaultValue)) && r.tfDeprecatedName && (s = t.getNumericArrayParam(e.attr, r.tfDeprecatedName, r.defaultValue));
                            break;
                        case"bool":
                            void 0 === (s = t.getBoolParam(e.attr, r.tfName, r.defaultValue)) && r.tfDeprecatedName && (s = t.getBoolParam(e.attr, r.tfDeprecatedName, r.defaultValue));
                            break;
                        case"shape":
                            void 0 === (s = t.getTensorShapeParam(e.attr, r.tfName, r.defaultValue)) && r.tfDeprecatedName && (s = t.getTensorShapeParam(e.attr, r.tfDeprecatedName, r.defaultValue));
                            break;
                        case"dtype":
                            void 0 === (s = t.getDtypeParam(e.attr, r.tfName, r.defaultValue)) && r.tfDeprecatedName && (s = t.getDtypeParam(e.attr, r.tfDeprecatedName, r.defaultValue));
                            break;
                        case"tensor":
                        case"tensors":
                            break;
                        default:
                            throw new Error("Unsupported param type: " + r.type + " for op: " + e.op)
                    }
                    return a[r.name] = {value: s, type: n}, a
                }, {})), r
            }, e.prototype.decodeBase64 = function (e) {
                var a = t.ENV.global;
                if (void 0 !== a.atob) return a.atob(e);
                if ("undefined" != typeof Buffer) return new Buffer(e, "base64").toString();
                throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")
            }, e.prototype.getStringParam = function (e, t, a, r) {
                void 0 === r && (r = !1);
                var n = e[t];
                if (void 0 !== n) {
                    var s = Array.isArray(n.s) ? String.fromCharCode.apply(null, n.s) : this.decodeBase64(n.s);
                    return r ? s : s.toLowerCase()
                }
                return a
            }, e.prototype.getBoolParam = function (e, t, a) {
                var r = e[t];
                return r ? r.b : a
            }, e.prototype.getNumberParam = function (e, t, a) {
                var r = e[t] || {}, n = r.i ? r.i : r.f ? r.f : a;
                return "number" == typeof n ? n : parseInt(n, 10)
            }, e.prototype.getDtypeParam = function (e, t, r) {
                var n = e[t];
                if (n && n.type) {
                    var s = n.type;
                    switch ("string" == typeof n.type && (s = a[n.type]), s) {
                        case a.DT_FLOAT:
                            return "float32";
                        case a.DT_INT32:
                            return "int32";
                        case a.DT_BOOL:
                            return "bool";
                        default:
                            return r
                    }
                }
                return r
            }, e.prototype.getTensorShapeParam = function (e, t, a) {
                var r = e[t];
                if (r && r.shape) {
                    if (r.shape.unknownRank) return;
                    if (null != r.shape.dim) return r.shape.dim.map(function (e) {
                        return "number" == typeof e.size ? e.size : parseInt(e.size, 10)
                    })
                }
                return a
            }, e.prototype.getNumericArrayParam = function (e, t, a) {
                var r = e[t];
                return r ? (r.list.f && r.list.f.length ? r.list.f : r.list.i).map(function (e) {
                    return "number" == typeof e ? e : parseInt(e, 10)
                }) : a
            }, e
        }(), k = function (e, a, r) {
            switch (e.op) {
                case"BiasAdd":
                case"Add":
                    return [t.add(p("a", e, a, r), p("b", e, a, r))];
                case"AddN":
                    return [t.addN(p("tensors", e, a, r))];
                case"FloorMod":
                case"Mod":
                    return [t.mod(p("a", e, a, r), p("b", e, a, r))];
                case"Mul":
                    return [t.mul(p("a", e, a, r), p("b", e, a, r))];
                case"RealDiv":
                case"Div":
                    return [t.div(p("a", e, a, r), p("b", e, a, r))];
                case"FloorDiv":
                    return [t.floorDiv(p("a", e, a, r), p("b", e, a, r))];
                case"Sub":
                    return [t.sub(p("a", e, a, r), p("b", e, a, r))];
                case"Minimum":
                    return [t.minimum(p("a", e, a, r), p("b", e, a, r))];
                case"Maximum":
                    return [t.maximum(p("a", e, a, r), p("b", e, a, r))];
                case"Pow":
                    return [t.pow(p("a", e, a, r), p("b", e, a, r))];
                case"SquaredDifference":
                    return [t.squaredDifference(p("a", e, a, r), p("b", e, a, r))];
                default:
                    throw TypeError("Node type " + e.op + " is not implemented")
            }
        }, M = function (e, a, r) {
            switch (e.op) {
                case"Abs":
                    return [t.abs(p("x", e, a, r))];
                case"Acos":
                    return [t.acos(p("x", e, a, r))];
                case"Acosh":
                    return [t.acosh(p("x", e, a, r))];
                case"Asin":
                    return [t.asin(p("x", e, a, r))];
                case"Asinh":
                    return [t.asinh(p("x", e, a, r))];
                case"Atan":
                    return [t.atan(p("x", e, a, r))];
                case"Atan2":
                    return [t.atan2(p("x", e, a, r), p("y", e, a, r))];
                case"Atanh":
                    return [t.atanh(p("x", e, a, r))];
                case"Ceil":
                    return [t.ceil(p("x", e, a, r))];
                case"Cos":
                    return [t.cos(p("x", e, a, r))];
                case"Cosh":
                    return [t.cosh(p("x", e, a, r))];
                case"Elu":
                    return [t.elu(p("x", e, a, r))];
                case"Erf":
                    return [t.erf(p("x", e, a, r))];
                case"Exp":
                    return [t.exp(p("x", e, a, r))];
                case"Expm1":
                    return [t.expm1(p("x", e, a, r))];
                case"Floor":
                    return [t.floor(p("x", e, a, r))];
                case"Log":
                    return [t.log(p("x", e, a, r))];
                case"Log1p":
                    return [t.log1p(p("x", e, a, r))];
                case"Neg":
                    return [t.neg(p("x", e, a, r))];
                case"Reciprocal":
                    return [t.reciprocal(p("x", e, a, r))];
                case"Relu":
                    return [t.relu(p("x", e, a, r))];
                case"Round":
                    return [t.round(p("x", e, a, r))];
                case"Selu":
                    return [t.selu(p("x", e, a, r))];
                case"Sigmoid":
                    return [t.sigmoid(p("x", e, a, r))];
                case"Sin":
                    return [t.sin(p("x", e, a, r))];
                case"Sign":
                    return [t.sign(p("x", e, a, r))];
                case"Sinh":
                    return [t.sinh(p("x", e, a, r))];
                case"Softplus":
                    return [t.softplus(p("x", e, a, r))];
                case"Sqrt":
                    return [t.sqrt(p("x", e, a, r))];
                case"Square":
                    return [t.square(p("x", e, a, r))];
                case"Tanh":
                    return [t.tanh(p("x", e, a, r))];
                case"Tan":
                    return [t.tan(p("x", e, a, r))];
                case"Relu6":
                case"ClipByValue":
                    return [t.clipByValue(p("x", e, a, r), p("clipValueMin", e, a, r), p("clipValueMax", e, a, r))];
                case"Rsqrt":
                    return [t.rsqrt(i(e.inputNames[0], a, r))];
                case"Prod":
                    return [t.prod(p("x", e, a, r), p("axes", e, a, r))];
                case"LeakyRelu":
                    return [t.leakyRelu(p("x", e, a, r), p("alpha", e, a, r))];
                default:
                    throw TypeError("Node type " + e.op + " is not implemented")
            }
        }, C = function () {
            function e(t, a, r, n, s, o, p) {
                this.name = t, this.dtype = a, this.maxSize = r, this.elementShape = n, this.identicalElementShapes = s, this.dynamicSize = o, this.clearAfterRead = p, this.tensors = [], this.closed_ = !1, this.id = e.nextId++
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
                if (0 !== this.size() || null != this.elementShape && 0 !== this.elementShape.length || (this.elementShape = t.shape), this.assertShapesMatchAllowUndefinedSize(this.elementShape, t.shape, "TensorArray " + this.name + ": Could not write to TensorArray index " + e + "."), a && a.read) throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ", because it has already been read.");
                if (a && a.written) throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ", because it has already been written.");
                a.tensor = t, a.written = !0, this.tensors[e] = a
            }, e.prototype.writeMany = function (e, t) {
                var a = this;
                if (e.length !== t.length) throw new Error("TensorArray " + this.name + ": could not write multiple tensors,because the index size: " + e.length + " is not the same as tensors size: " + t.length + ".");
                e.forEach(function (e, r) {
                    return a.write(e, t[r])
                })
            }, e.prototype.gather = function (e, a) {
                if (a && a !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but gather requested dtype " + a);
                if (!e) {
                    e = [];
                    for (var r = 0; r < this.size(); r++) e.push(r)
                }
                if (0 === e.length) return t.tensor([], [0].concat(this.elementShape));
                var n = this.readMany(e);
                return this.assertShapesMatchAllowUndefinedSize(this.elementShape, n[0].shape, "TensorArray shape mismatch: "), t.stack(n, 0)
            }, e.prototype.concat = function (e) {
                if (e && e !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but concat requested dtype " + e);
                if (0 === this.size()) return t.tensor([], [0].concat(this.elementShape));
                for (var a = [], r = 0; r < this.size(); r++) a.push(r);
                var n = this.readMany(a);
                return this.assertShapesMatchAllowUndefinedSize(this.elementShape, n[0].shape, "TensorArray shape mismatch: tensor array shape (" + this.elementShape + ") vs first tensor shape (" + n[0].shape + ")"), t.concat(n, 0)
            }, e.prototype.scatter = function (e, a) {
                if (a.dtype !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + a.dtype);
                if (e.length !== a.shape[0]) throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + e.length + " vs. " + a.shape[0]);
                var r = Math.max.apply(Math, e);
                if (!this.dynamicSize && r >= this.maxSize) throw new Error("Max index must be < array size (" + r + "  vs. " + this.maxSize + ")");
                this.writeMany(e, t.unstack(a, 0))
            }, e.prototype.split = function (e, a) {
                var r = this;
                if (a.dtype !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + a.dtype);
                var n = 0, s = e.map(function (e) {
                    return n += e
                });
                if (n !== a.shape[0]) throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + n + ", and tensor's shape is: " + a.shape);
                if (!this.dynamicSize && e.length !== this.maxSize) throw new Error("TensorArray's size is not equal to the size of lengths (" + this.maxSize + " vs. " + e.length + "), and the TensorArray is not marked as dynamically resizeable");
                var o = 0 === n ? 0 : a.size / n, p = [];
                t.tidy(function () {
                    a = a.reshape([1, n, o]);
                    for (var i = 0; i < e.length; ++i) {
                        var u = [0, 0 === i ? 0 : s[i - 1], 0], m = [1, e[i], o];
                        p[i] = t.slice(a, u, m).reshape(r.elementShape)
                    }
                    return p
                });
                for (var i = [], u = 0; u < e.length; u++) i[u] = u;
                this.writeMany(i, p)
            }, e.prototype.assertShapesMatchAllowUndefinedSize = function (e, a, r) {
                void 0 === r && (r = ""), t.util.assert(this.shapesEqualAllowUndefinedSize(e, a), function () {
                    return r + " Shapes " + e + " and " + a + " must match"
                })
            }, e.prototype.shapesEqualAllowUndefinedSize = function (e, t) {
                if (e.length !== t.length) return !1;
                for (var a = 0; a < e.length; a++) if (-1 !== e[a] && -1 !== t[a] && e[a] !== t[a]) return !1;
                return !0
            }, e.nextId = 0, e
        }();
    var z = function (e, a, r) {
        switch (e.op) {
            case"Conv1D":
                var n = p("stride", e, a, r), s = p("pad", e, a, r), o = p("dataFormat", e, a, r).toUpperCase(),
                    i = p("dilation", e, a, r);
                return [t.conv1d(p("x", e, a, r), p("filter", e, a, r), n, s, o, i)];
            case"Conv2D":
                n = p("strides", e, a, r), s = p("pad", e, a, r), o = p("dataFormat", e, a, r).toUpperCase();
                var u = p("dilations", e, a, r);
                return [t.conv2d(p("x", e, a, r), p("filter", e, a, r), [n[1], n[2]], s, o, [u[0], u[1]])];
            case"Conv2DBackpropInput":
            case"Conv2dTranspose":
                var m = p("outputShape", e, a, r);
                n = p("strides", e, a, r), s = p("pad", e, a, r);
                return [t.conv2dTranspose(p("x", e, a, r), p("filter", e, a, r), m, [n[1], n[2]], s)];
            case"DepthwiseConv2dNative":
            case"DepthwiseConv2d":
                n = p("strides", e, a, r), s = p("pad", e, a, r), u = p("dilations", e, a, r), o = p("dataFormat", e, a, r).toUpperCase();
                return [t.depthwiseConv2d(p("input", e, a, r), p("filter", e, a, r), [n[1], n[2]], s, o, [u[0], u[1]])];
            case"AvgPool":
                n = p("strides", e, a, r), s = p("pad", e, a, r);
                var c = p("kernelSize", e, a, r);
                return [t.avgPool(p("x", e, a, r), [c[1], c[2]], [n[1], n[2]], s)];
            case"MaxPool":
                n = p("strides", e, a, r), s = p("pad", e, a, r), c = p("kernelSize", e, a, r);
                return [t.maxPool(p("x", e, a, r), [c[1], c[2]], [n[1], n[2]], s)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, F = function (e, a, r) {
        switch (e.op) {
            case"Fill":
                var n = p("shape", e, a, r), s = p("dtype", e, a, r), o = p("value", e, a, r);
                return [t.fill(n, o, s)];
            case"LinSpace":
                var i = p("start", e, a, r), u = p("stop", e, a, r), m = p("num", e, a, r);
                return [t.linspace(i, u, m)];
            case"OneHot":
                var c = p("indices", e, a, r), y = p("depth", e, a, r), d = p("onValue", e, a, r),
                    l = p("offValue", e, a, r);
                return [t.oneHot(c, y, d, l)];
            case"Ones":
                return [t.ones(p("shape", e, a, r), p("dtype", e, a, r))];
            case"OnesLike":
                return [t.onesLike(p("x", e, a, r))];
            case"RandomUniform":
                return [t.randomUniform(p("shape", e, a, r), p("minval", e, a, r), p("maxval", e, a, r), p("dtype", e, a, r))];
            case"Range":
                i = p("start", e, a, r);
                var f = p("stop", e, a, r), h = p("step", e, a, r);
                return [t.range(i, f, h, p("dtype", e, a, r))];
            case"TruncatedNormal":
                n = p("shape", e, a, r);
                var N = p("mean", e, a, r), g = p("stdDev", e, a, r), b = p("seed", e, a, r);
                return [t.truncatedNormal(n, N, g, p("dtype", e, a, r), b)];
            case"Zeros":
                return [t.zeros(p("shape", e, a, r), p("dtype", e, a, r))];
            case"ZerosLike":
                return [t.zerosLike(p("x", e, a, r))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    };
    var P = function (e, a, r) {
        switch (e.op) {
            case"TopKV2":
                var n = p("x", e, a, r), s = p("k", e, a, r), o = p("sorted", e, a, r), i = t.topk(n, s, o);
                return [i.values, i.indices];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, j = function (e, a, r) {
        switch (e.op) {
            case"Const":
                return a[e.name];
            case"PlaceholderWithDefault":
                var n = p("default", e, a, r);
                return [i(e.name, a, r) || n];
            case"Placeholder":
                return [i(e.name, a, r)];
            case"Identity":
            case"StopGradient":
            case"FakeQuantWithMinMaxVars":
                return [p("x", e, a, r).clone()];
            case"IdentityN":
                return p("x", e, a, r).map(function (e) {
                    return e.clone()
                });
            case"Snapshot":
                return [p("x", e, a, r).clone()];
            case"Shape":
                return [t.tensor1d(p("x", e, a, r).shape, "int32")];
            case"ShapeN":
                return p("x", e, a, r).map(function (e) {
                    return t.tensor1d(e.shape)
                });
            case"Size":
                return [t.scalar(p("x", e, a, r).size, "int32")];
            case"Rank":
                return [t.scalar(p("x", e, a, r).rank, "int32")];
            case"NoOp":
                return [];
            case"Print":
                var s = p("x", e, a, r), o = p("data", e, a, r), u = p("message", e, a, r), m = p("summarize", e, a, r);
                console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."), console.log(u);
                for (var c = 0; c < o.length; c++) console.log(Array.prototype.slice.call(o[c].dataSync()).slice(0, m));
                return [s];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, R = function (e, a, r) {
        switch (e.op) {
            case"ResizeBilinear":
                var n = p("images", e, a, r), s = p("size", e, a, r), o = p("alignCorners", e, a, r);
                return [t.image.resizeBilinear(n, [s[0], s[1]], o)];
            case"ResizeNearestNeighbor":
                n = p("images", e, a, r), s = p("size", e, a, r), o = p("alignCorners", e, a, r);
                return [t.image.resizeNearestNeighbor(n, [s[0], s[1]], o)];
            case"CropAndResize":
                var i = p("image", e, a, r), u = p("boxes", e, a, r), m = p("boxInd", e, a, r),
                    c = p("cropSize", e, a, r), y = p("method", e, a, r), d = p("extrapolationValue", e, a, r);
                return [t.image.cropAndResize(i, u, m, c, y, d)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, L = function (e, a, r) {
        switch (e.op) {
            case"Equal":
                return [t.equal(p("a", e, a, r), p("b", e, a, r))];
            case"NotEqual":
                return [t.notEqual(p("a", e, a, r), p("b", e, a, r))];
            case"Greater":
                return [t.greater(p("a", e, a, r), p("b", e, a, r))];
            case"GreaterEqual":
                return [t.greaterEqual(p("a", e, a, r), p("b", e, a, r))];
            case"Less":
                return [t.less(p("a", e, a, r), p("b", e, a, r))];
            case"LessEqual":
                return [t.lessEqual(p("a", e, a, r), p("b", e, a, r))];
            case"LogicalAnd":
                return [t.logicalAnd(p("a", e, a, r), p("b", e, a, r))];
            case"LogicalNot":
                return [t.logicalNot(p("a", e, a, r))];
            case"LogicalOr":
                return [t.logicalOr(p("a", e, a, r), p("b", e, a, r))];
            case"Select":
                return [t.where(p("condition", e, a, r), p("a", e, a, r), p("b", e, a, r))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, B = function (e, a, r) {
        switch (e.op) {
            case"BatchMatMul":
            case"MatMul":
                return [t.matMul(p("a", e, a, r), p("b", e, a, r), p("transposeA", e, a, r), p("transposeB", e, a, r))];
            case"Transpose":
                return [t.transpose(p("x", e, a, r), p("perm", e, a, r))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, q = function (e, a, r) {
        switch (e.op) {
            case"FusedBatchNorm":
            case"FusedBatchNormV2":
                return [t.batchNorm(p("x", e, a, r), p("mean", e, a, r), p("variance", e, a, r), p("offset", e, a, r), p("scale", e, a, r), p("epsilon", e, a, r))];
            case"LRN":
                return [t.localResponseNormalization(p("x", e, a, r), p("radius", e, a, r), p("bias", e, a, r), p("alpha", e, a, r), p("beta", e, a, r))];
            case"Softmax":
                return [t.softmax(p("x", e, a, r))];
            case"LogSoftmax":
                return [t.logSoftmax(p("x", e, a, r))];
            case"SparseToDense":
                return [t.sparseToDense(p("sparseIndices", e, a, r), p("outputShape", e, a, r), p("sparseValues", e, a, r), p("defaultValue", e, a, r))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, U = function (e, a, r) {
        switch (e.op) {
            case"Max":
                var n = p("axis", e, a, r), s = p("keepDims", e, a, r);
                return [t.max(p("x", e, a, r), n, s)];
            case"Mean":
                n = p("axis", e, a, r), s = p("keepDims", e, a, r);
                return [t.mean(p("x", e, a, r), n, s)];
            case"Min":
                n = p("axis", e, a, r), s = p("keepDims", e, a, r);
                return [t.min(p("x", e, a, r), n, s)];
            case"Sum":
                n = p("axis", e, a, r), s = p("keepDims", e, a, r);
                return [t.sum(p("x", e, a, r), n, s)];
            case"All":
                n = p("axis", e, a, r), s = p("keepDims", e, a, r);
                return [t.all(p("x", e, a, r), n, s)];
            case"Any":
                n = p("axis", e, a, r), s = p("keepDims", e, a, r);
                return [t.any(p("x", e, a, r), n, s)];
            case"ArgMax":
                n = p("axis", e, a, r);
                return [t.argMax(p("x", e, a, r), n)];
            case"ArgMin":
                n = p("axis", e, a, r);
                return [t.argMin(p("x", e, a, r), n)];
            case"Prod":
                n = p("axis", e, a, r), s = p("keepDims", e, a, r);
                return [t.prod(p("x", e, a, r), n, s)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, G = function (e, a, r) {
        switch (e.op) {
            case"ConcatV2":
            case"Concat":
                var n = p("axis", e, a, r), s = p("tensors", e, a, r);
                return [t.concat(s, n)];
            case"GatherV2":
            case"Gather":
                n = p("axis", e, a, r);
                var o = p("x", e, a, r), i = p("indices", e, a, r);
                return [t.gather(o, i.asType("int32"), n)];
            case"ReverseV2":
            case"Reverse":
                n = p("axis", e, a, r), o = p("x", e, a, r);
                return [t.reverse(o, n)];
            case"Slice":
                var u = p("begin", e, a, r), m = p("size", e, a, r);
                return [t.slice(p("x", e, a, r), u, m)];
            case"StridedSlice":
                u = p("begin", e, a, r);
                var c = p("end", e, a, r), y = p("strides", e, a, r), d = p("beginMask", e, a, r),
                    l = p("endMask", e, a, r), f = p("ellipsisMask", e, a, r), h = p("newAxisMask", e, a, r),
                    N = p("shrinkAxisMask", e, a, r), g = p("x", e, a, r);
                if (1 === u.length && g.shape.length > 1) for (var b = 1; b < g.shape.length; b++) u.push(0), c.push(g.shape[b]), y.push(y[0]);
                return [t.stridedSlice(g, u, c, y, d, l, f, h, N)];
            case"Pack":
                return t.tidy(function () {
                    var n = p("axis", e, a, r), s = p("tensors", e, a, r), o = s[0].shape, i = s[0].squeeze().shape,
                        u = s.map(function (e) {
                            var a = t.util.arraysEqual(e.shape, o);
                            if (!a && !t.util.arraysEqual(e.squeeze().shape, i)) throw new Error("the input tensors shape does not match");
                            return a ? e : e.reshape(o)
                        });
                    return [t.stack(u, n)]
                });
            case"Unpack":
                return t.tidy(function () {
                    var n = p("axis", e, a, r), s = p("tensor", e, a, r);
                    return t.unstack(s, n)
                });
            case"Tile":
                var x = p("reps", e, a, r);
                return [t.tile(p("x", e, a, r), x)];
            case"Split":
            case"SplitV":
                n = p("axis", e, a, r);
                var T = p("numOrSizeSplits", e, a, r);
                return t.split(p("x", e, a, r), T, n);
            case"ScatterNd":
                i = p("indices", e, a, r);
                var O = p("values", e, a, r), v = p("shape", e, a, r);
                return [t.scatterND(i, O, v)];
            case"GatherNd":
                var S = p("x", e, a, r);
                i = p("indices", e, a, r);
                return [t.gatherND(S, i)];
            case"SparseToDense":
                i = p("sparseIndices", e, a, r), v = p("outputShape", e, a, r);
                var w = p("sparseValues", e, a, r), _ = p("defaultValue", e, a, r);
                return [t.sparseToDense(i, w, v, w.dtype === _.dtype ? _ : _.asType(w.dtype))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, W = function (e, a, r) {
        switch (e.op) {
            case"FFT":
                return [t.fft(p("x", e, a, r))];
            case"IFFT":
                return [t.ifft(p("x", e, a, r))];
            case"RFFT":
                return [t.rfft(p("x", e, a, r))];
            case"IRFFT":
                return [t.irfft(p("x", e, a, r))];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    }, H = function (e, a, r) {
        switch (e.op) {
            case"Cast":
                return [t.cast(p("x", e, a, r), p("dtype", e, a, r))];
            case"ExpandDims":
                var n = p("axis", e, a, r);
                return [t.expandDims(p("x", e, a, r), n)];
            case"Squeeze":
                n = p("axis", e, a, r);
                return [t.squeeze(p("x", e, a, r), n)];
            case"Reshape":
                return [t.reshape(p("x", e, a, r), p("shape", e, a, r))];
            case"PadV2":
            case"Pad":
                return [t.pad(p("x", e, a, r), y(p("padding", e, a, r), 2), p("constantValue", e, a, r))];
            case"SpaceToBatchND":
                var s = p("blockShape", e, a, r), o = y(p("paddings", e, a, r), 2);
                return [t.spaceToBatchND(p("x", e, a, r), s, o)];
            case"BatchToSpaceND":
                s = p("blockShape", e, a, r);
                var i = y(p("crops", e, a, r), 2);
                return [t.batchToSpaceND(p("x", e, a, r), s, i)];
            case"DepthToSpace":
                var u = p("blockSize", e, a, r), m = p("dataFormat", e, a, r).toUpperCase();
                return [t.depthToSpace(p("x", e, a, r), u, m)];
            default:
                throw TypeError("Node type " + e.op + " is not implemented")
        }
    };

    function Q(e, a, r) {
        var n = function (e, a, r) {
            switch (e.category) {
                case"arithmetic":
                    return k(e, a, r);
                case"basic_math":
                    return M(e, a, r);
                case"control":
                    return function (e, a, r) {
                        return s(this, void 0, void 0, function () {
                            var n, s, u, m, c, y, d, l, f, h, N, g, b, x, T, O, v, S, w, _, A, D, E, I, V, k, M, z, F,
                                P, j, R, L, B, q;
                            return o(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        switch (e.op) {
                                            case"LoopCond":
                                                return [3, 1];
                                            case"Switch":
                                                return [3, 2];
                                            case"Merge":
                                                return [3, 4];
                                            case"Enter":
                                                return [3, 5];
                                            case"Exit":
                                                return [3, 6];
                                            case"NextIteration":
                                                return [3, 7];
                                            case"TensorArrayV3":
                                                return [3, 8];
                                            case"TensorArrayWriteV3":
                                                return [3, 9];
                                            case"TensorArrayReadV3":
                                                return [3, 10];
                                            case"TensorArrayGatherV3":
                                                return [3, 11];
                                            case"TensorArrayScatterV3":
                                                return [3, 12];
                                            case"TensorArrayConcatV3":
                                                return [3, 13];
                                            case"TensorArraySplitV3":
                                                return [3, 14];
                                            case"TensorArraySizeV3":
                                                return [3, 15];
                                            case"TensorArrayCloseV3":
                                                return [3, 16]
                                        }
                                        return [3, 17];
                                    case 1:
                                        return [2, [p("pred", e, a, r).clone()]];
                                    case 2:
                                        return n = p("pred", e, a, r), s = p("data", e, a, r), [4, n.data()];
                                    case 3:
                                        return [2, o.sent()[0] ? [void 0, s.clone()] : [s.clone(), void 0]];
                                    case 4:
                                        return [2, (u = e.inputNames.find(function (e) {
                                            return void 0 !== i(e, a, r)
                                        })) ? [i(u, a, r).clone()] : void 0];
                                    case 5:
                                        return m = p("frameName", e, a, r), c = p("tensor", e, a, r), r.enterFrame(m), [2, [c.clone()]];
                                    case 6:
                                        return y = p("tensor", e, a, r), r.exitFrame(), [2, [y.clone()]];
                                    case 7:
                                        return d = p("tensor", e, a, r), r.nextIteration(), [2, [d.clone()]];
                                    case 8:
                                        return l = p("size", e, a, r), f = p("dtype", e, a, r), h = p("elementShape", e, a, r), N = p("dynamicSize", e, a, r), g = p("clearAfterRead", e, a, r), b = p("identicalElementShapes", e, a, r), x = p("name", e, a, r), T = new C(x, f, l, h, b, N, g), r.addTensorArray(T), [2, [t.scalar(T.id), t.scalar(1)]];
                                    case 9:
                                        return O = p("tensorArrayId", e, a, r), v = p("index", e, a, r), S = p("tensor", e, a, r), r.getTensorArray(O).write(v, S), [2, [t.scalar(1)]];
                                    case 10:
                                        return w = p("tensorArrayId", e, a, r), _ = p("index", e, a, r), [2, [r.getTensorArray(w).read(_)]];
                                    case 11:
                                        return A = p("tensorArrayId", e, a, r), D = p("indices", e, a, r), E = p("dtype", e, a, r), [2, [r.getTensorArray(A).gather(D, E)]];
                                    case 12:
                                        return I = p("tensorArrayId", e, a, r), V = p("indices", e, a, r), k = p("tensor", e, a, r), r.getTensorArray(I).scatter(V, k), [2, [t.scalar(1)]];
                                    case 13:
                                        return M = p("tensorArrayId", e, a, r), z = r.getTensorArray(M), F = p("dtype", e, a, r), [2, [z.concat(F)]];
                                    case 14:
                                        return P = p("tensorArrayId", e, a, r), j = p("tensor", e, a, r), R = p("lengths", e, a, r), r.getTensorArray(P).split(R, j), [2, [t.scalar(1)]];
                                    case 15:
                                        return L = p("tensorArrayId", e, a, r), B = r.getTensorArray(L), [2, [t.scalar(B.size(), "int32")]];
                                    case 16:
                                        return q = p("tensorArrayId", e, a, r), r.getTensorArray(q).clearAndClose(), [2, []];
                                    case 17:
                                        throw TypeError("Node type " + e.op + " is not implemented")
                                }
                            })
                        })
                    }(e, a, r);
                case"convolution":
                    return z(e, a, r);
                case"creation":
                    return F(e, a, r);
                case"dynamic":
                    return function (e, a, r) {
                        return s(this, void 0, void 0, function () {
                            var n, s, i, u, m;
                            return o(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        switch (e.op) {
                                            case"NonMaxSuppressionV3":
                                            case"NonMaxSuppressionV2":
                                                return [3, 1];
                                            case"Where":
                                                return [3, 3];
                                            case"ListDiff":
                                                return [3, 5]
                                        }
                                        return [3, 7];
                                    case 1:
                                        return n = p("boxes", e, a, r), s = p("scores", e, a, r), i = p("maxOutputSize", e, a, r), u = p("iouThreshold", e, a, r), m = p("scoreThreshold", e, a, r), [4, t.image.nonMaxSuppressionAsync(n, s, i, u, m)];
                                    case 2:
                                        return [2, [o.sent()]];
                                    case 3:
                                        return [4, t.whereAsync(p("condition", e, a, r))];
                                    case 4:
                                        return [2, [o.sent()]];
                                    case 5:
                                        return [4, t.setdiff1dAsync(p("x", e, a, r), p("y", e, a, r))];
                                    case 6:
                                        return [2, o.sent()];
                                    case 7:
                                        throw TypeError("Node type " + e.op + " is not implemented")
                                }
                            })
                        })
                    }(e, a, r);
                case"evaluation":
                    return P(e, a, r);
                case"image":
                    return R(e, a, r);
                case"graph":
                    return j(e, a, r);
                case"logical":
                    return L(e, a, r);
                case"matrices":
                    return B(e, a, r);
                case"normalization":
                    return q(e, a, r);
                case"reduction":
                    return U(e, a, r);
                case"slice_join":
                    return G(e, a, r);
                case"spectral":
                    return W(e, a, r);
                case"transformation":
                    return H(e, a, r);
                default:
                    throw TypeError("Node type " + e.op + " is not implemented")
            }
        }(e, a, r);
        return n instanceof Promise ? n.then(function (e) {
            return [].concat(e)
        }) : [].concat(n)
    }

    var X = function () {
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
    }(), Z = function () {
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
                        shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
                        dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
                    }
                })
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "outputs", {
            get: function () {
                return this._outputs.map(function (e) {
                    return {
                        name: e.name,
                        shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
                        dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
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
                    for (var n = a.concat(this.graph.weights), s = {}; n.length > 0;) {
                        var o = n.pop();
                        s[o.name] = !0, t.push(o), o.children.forEach(function (e) {
                            !s[e.name] && e.inputNames.every(function (e) {
                                var t = u(e)[0];
                                return s[t]
                            }) && n.push(e)
                        })
                    }
                    this.compiledMap.set(r, t)
                }
            }
        }, e.prototype.execute = function (e, a, r) {
            var s = this;
            void 0 === a && (a = !0);
            var o = Object.keys(e).sort();
            this.checkInput(e, a), this.checkInputShapeAndType(e, a), this.compile(o.map(function (e) {
                return s.graph.nodes[e]
            }));
            var p = this.calculateOutputs(r);
            this.checkOutput(this.compiledMap.get(o.join(this.SEPERATOR)), p);
            var i = {};
            return t.tidy(function () {
                for (var t = new X(s._weightMap, i), a = n({}, s.weightMap, e), r = s.getFrozenTensorIds(a), u = {}, m = s.compiledMap.get(o.join(s.SEPERATOR)), c = 0; c < m.length; c++) {
                    var y = m[c];
                    if (a[y.name] || (a[y.name] = Q(y, a, t), s.checkTensorForDisposal(y.name, y, a, t, r, p, u)), p.every(function (e) {
                        return !!a[e]
                    })) break
                }
                return s.findOutputs(a, t, p)
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
        }, e.prototype.checkTensorForDisposal = function (e, t, a, r, n, s, o) {
            "control" !== t.category && -1 === s.indexOf(e) && (a[e].forEach(function (e) {
                null != e && (o[e.id] = (o[e.id] || 0) + t.children.length)
            }), t.inputs.forEach(function (e) {
                if ("control" !== e.category) {
                    var t = function (e, t, a) {
                        return t[m(e, a.currentContextId)]
                    }(e.name, a, r);
                    null != t && t.forEach(function (e) {
                        if (e && !n.has(e.id)) {
                            var t = o[e.id];
                            1 === t ? (e.dispose(), delete o[e.id]) : null != t && o[e.id]--
                        }
                    })
                }
            }))
        }, e.prototype.executeAsync = function (e, t) {
            return s(this, void 0, void 0, function () {
                var a, r, n, s, p, i, u, m, c = this;
                return o(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return this.checkInput(e, !1), this.checkInputShapeAndType(e, !1), a = {}, r = new X(this._weightMap, a), n = this.calculateOutputs(t), [4, this.executeWithControlFlow(e, r, n)];
                        case 1:
                            return s = o.sent(), p = this.findOutputs(s, r, t), i = Object.keys(p).map(function (e) {
                                return p[e].id
                            }), u = Object.keys(e).map(function (t) {
                                return e[t].map(function (e) {
                                    return e.id
                                })
                            }), m = [].concat.apply([], u), Object.keys(s).forEach(function (e) {
                                s[e].forEach(function (e) {
                                    e && !e.isDisposed && -1 === i.indexOf(e.id) && -1 === m.indexOf(e.id) && -1 === c.weightIds.indexOf(e.id) && e.dispose()
                                })
                            }), [2, p]
                    }
                })
            })
        }, e.prototype.executeWithControlFlow = function (e, t, a) {
            return s(this, void 0, void 0, function () {
                var r, s, p, i, u, m, c, y, d = this;
                return o(this, function (o) {
                    switch (o.label) {
                        case 0:
                            r = Object.keys(e), s = r.map(function (e) {
                                return d.graph.nodes[e]
                            }), p = s.concat(this.graph.weights).map(function (e) {
                                return {node: e, contexts: t.currentContext}
                            }), i = n({}, this.weightMap, e), u = {}, m = this.getFrozenTensorIds(i), c = {}, o.label = 1;
                        case 1:
                            return p.length > 0 ? (y = this.processStack(s, p, t, i, c, m, a, u), [4, Promise.all(y)]) : [3, 3];
                        case 2:
                            return o.sent(), [3, 1];
                        case 3:
                            return [2, i]
                    }
                })
            })
        }, e.prototype.processStack = function (e, t, a, r, n, s, o, i) {
            for (var m = this, c = [], y = function () {
                var y = t.pop();
                a.currentContext = y.contexts;
                var l = "";
                if ("Enter" === y.node.op && p("isConstant", y.node, r, a) && (l = u(y.node.name, a)[0]), -1 === e.indexOf(y.node)) {
                    var f = Q(y.node, r, a);
                    l || (l = u(y.node.name, a)[0]);
                    var h = a.currentContext;
                    f instanceof Promise ? c.push(f.then(function (e) {
                        return r[l] = e, a.currentContext = h, m.checkTensorForDisposal(l, y.node, r, a, s, o, i), m.processChildNodes(y.node, t, a, r, n), e
                    })) : (r[l] = f, d.checkTensorForDisposal(l, y.node, r, a, s, o, i), d.processChildNodes(y.node, t, a, r, n))
                } else d.processChildNodes(y.node, t, a, r, n)
            }, d = this; t.length > 0;) y();
            return c
        }, e.prototype.processChildNodes = function (e, t, a, r, n) {
            e.children.forEach(function (e) {
                var s = u(e.name, a)[0];
                n[s] || ("Merge" === e.op ? e.inputNames.some(function (e) {
                    return !!i(e, r, a)
                }) && (n[s] = !0, t.push({contexts: a.currentContext, node: e})) : e.inputNames.every(function (e) {
                    return !!i(e, r, a)
                }) && (n[s] = !0, t.push({contexts: a.currentContext, node: e})))
            })
        }, e.prototype.calculateOutputs = function (e) {
            return !e || e instanceof Array || (e = [e]), e || this.graph.outputs.map(function (e) {
                return e.name
            })
        }, e.prototype.findOutputs = function (e, t, a) {
            return this.calculateOutputs(a).reduce(function (a, r) {
                return a[r] = i(r, e, t), a
            }, {})
        }, e.prototype.dispose = function () {
            var e = this;
            Object.keys(this.weightMap).forEach(function (t) {
                return e.weightMap[t].forEach(function (e) {
                    return e.dispose()
                })
            })
        }, e.prototype.checkInputShapeAndType = function (e, a) {
            void 0 === a && (a = !0), this.placeholders.forEach(function (r) {
                var n = e[r.name];
                if (a || n) {
                    var s = n[0];
                    if (r.attrParams.shape && r.attrParams.shape.value) {
                        var o = r.attrParams.shape.value,
                            p = o.length === s.shape.length && s.shape.every(function (e, t) {
                                return -1 === o[t] || o[t] === e
                            });
                        t.util.assert(p, function () {
                            return "The shape of dict['" + r.name + "'] provided in model.execute(dict) must be [" + o + "], but was [" + s.shape + "]"
                        })
                    }
                    r.attrParams.dtype && r.attrParams.dtype.value && t.util.assert(s.dtype === r.attrParams.dtype.value, function () {
                        return "The dtype of dict['" + r.name + "'] provided in model.execute(dict) must be " + r.attrParams.dtype.value + ", but was " + s.dtype
                    })
                }
            })
        }, e.prototype.checkInput = function (e, t) {
            var a = this;
            void 0 === t && (t = !0);
            var r = Object.keys(e), n = [], s = [];
            this.inputNodes.forEach(function (e) {
                -1 === r.indexOf(e) && n.push(e)
            }), r.forEach(function (e) {
                -1 === a.inputNodes.indexOf(e) && s.push(e)
            });
            var o = s.filter(function (e) {
                return !a.graph.nodes[e]
            });
            if (n.length > 0 && t) throw new Error("The dict provided in model.execute(dict) has the keys [" + r + "], but is missing the required keys: [" + n + "].");
            if (s.length > 0 && t) throw new Error("The dict provided in model.execute(dict) has unused keys: [" + s + "]. Please provide only the following keys: [" + this.inputNodes + "].");
            if (o.length > 0) throw new Error("The dict provided in model.execute(dict) has keys: [" + o + "] not part of model graph.")
        }, e.prototype.checkOutput = function (e, t) {
            var a = e.map(function (e) {
                return e.name
            }), r = [];
            if (t.forEach(function (e) {
                var t = c(e)[0];
                -1 === a.indexOf(t) && r.push(t)
            }), r.length > 0) throw new Error("The following outputs are not generated by the execution: [" + r + "].")
        }, e
    }(), K = "?tfjs-format=file", Y = "model.json", J = function () {
        function e(e, t) {
            void 0 === t && (t = {}), this.modelUrl = e, this.loadOptions = t, this.version = "n/a", null == t && (this.loadOptions = {})
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
            var e = this.modelUrl;
            if (null != e.load) this.handler = e; else if (null != this.loadOptions.requestInit) this.handler = t.io.browserHTTPRequest(e, this.loadOptions); else {
                var a = t.io.getLoadHandlers(e, this.loadOptions.onProgress);
                if (0 === a.length) a.push(t.io.browserHTTPRequest(e, this.loadOptions)); else if (a.length > 1) throw new Error("Found more than one (" + a.length + ") load handlers for URL '" + [e] + "'");
                this.handler = a[0]
            }
        }, e.prototype.load = function () {
            return s(this, void 0, void 0, function () {
                var e, a, r;
                return o(this, function (n) {
                    switch (n.label) {
                        case 0:
                            if (this.findIOHandler(), null == this.handler.load) throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
                            return [4, this.handler.load()];
                        case 1:
                            return e = n.sent(), a = e.modelTopology, this.version = a.versions.producer + "." + a.versions.minConsumer, r = t.io.decodeWeights(e.weightData, e.weightSpecs), this.executor = new Z(V.Instance.transformGraph(a)), this.executor.weightMap = this.convertTensorMapToTensorsMap(r), [2, !0]
                    }
                })
            })
        }, e.prototype.predict = function (e, t) {
            return this.execute_(e, !0, this.outputNodes)
        }, e.prototype.constructTensorMap = function (e) {
            var a = e instanceof t.Tensor ? [e] : e;
            if (a.length !== this.inputNodes.length) throw new Error("Input tensor count mismatch,the graph model has " + this.inputNodes.length + " placeholders, while there are " + a.length + " input tensors.");
            return this.inputNodes.reduce(function (e, t, r) {
                return e[t] = a[r], e
            }, {})
        }, e.prototype.execute = function (e, t) {
            return this.execute_(e, !1, t)
        }, e.prototype.execute_ = function (e, a, r) {
            if (void 0 === a && (a = !0), r = r || this.outputNodes, (e instanceof t.Tensor || Array.isArray(e)) && (e = this.constructTensorMap(e)), this.executor.isControlFlowModel || this.executor.isDynamicShapeModel) throw new Error("The model contains control flow or dynamic shape ops, please use executeAsync method");
            var n = this.executor.execute(this.convertTensorMapToTensorsMap(e), a, r), s = Object.keys(n);
            return Array.isArray(r) && r.length > 1 ? r.map(function (e) {
                return n[e]
            }) : n[s[0]]
        }, e.prototype.executeAsync = function (e, a) {
            return s(this, void 0, void 0, function () {
                var r, n;
                return o(this, function (s) {
                    switch (s.label) {
                        case 0:
                            if (!this.executor.isControlFlowModel && !this.executor.isDynamicShapeModel) throw new Error("The model does not contain control flow or dynamic shape ops, please use execute method for better performance.");
                            return a = a || this.outputNodes, (e instanceof t.Tensor || Array.isArray(e)) && (e = this.constructTensorMap(e)), [4, this.executor.executeAsync(this.convertTensorMapToTensorsMap(e), a)];
                        case 1:
                            return r = s.sent(), n = Object.keys(r), [2, Array.isArray(a) && a.length > 1 ? a.map(function (e) {
                                return r[e]
                            }) : r[n[0]]]
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
    e.GraphModel = J, e.loadGraphModel = function (e, t) {
        return void 0 === t && (t = {}), s(this, void 0, void 0, function () {
            var a;
            return o(this, function (r) {
                switch (r.label) {
                    case 0:
                        if (null == e) throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
                        return null == t && (t = {}), t.fromTFHub && null == e.load && (e.endsWith("/") || (e += "/"), e = "" + e + Y + K), [4, (a = new J(e, t)).load()];
                    case 1:
                        return r.sent(), [2, a]
                }
            })
        })
    }, e.version_converter = "1.1.2", Object.defineProperty(e, "__esModule", {value: !0})
});
//# sourceMappingURL=tf-converter.min.js.map
