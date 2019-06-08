!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).tf = e()
    }
}(function () {
    return function () {
        function e(t, n, r) {
            function i(o, s) {
                if (!n[o]) {
                    if (!t[o]) {
                        var u = "function" == typeof require && require;
                        if (!s && u) return u(o, !0);
                        if (a) return a(o, !0);
                        var l = new Error("Cannot find module '" + o + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                    }
                    var c = n[o] = {exports: {}};
                    t[o][0].call(c.exports, function (e) {
                        var n = t[o][1][e];
                        return i(n || e)
                    }, c, c.exports, e, t, n, r)
                }
                return n[o].exports
            }

            for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
            return i
        }

        return e
    }()({
        1: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("./doc"), a = function () {
                function e() {
                }

                return e.nextFrame = function () {
                    return new Promise(function (e) {
                        return requestAnimationFrame(function () {
                            return e()
                        })
                    })
                }, r([i.doc({heading: "Performance", subheading: "Timing"})], e, "nextFrame", null), e
            }();
            n.BrowserUtil = a
        }, {"./doc": 3}],
        2: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0}), n.isMobile = function () {
                var e = navigator.userAgent || navigator.vendor || window.opera;
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
            }
        }, {}],
        3: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0}), n.doc = function (e) {
                return function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                }
            }
        }, {}],
        4: [function (e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, i = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("./environment"), o = e("./globals"), s = e("./ops/ops"), u = e("./profiler"), l = e("./tape"),
                c = e("./tensor"), p = e("./util"), h = function () {
                    function e(e, t) {
                        this.backend = e, this.safeMode = t, this.registeredVariables = {}, this.refCounter = new WeakMap, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numDataBuffers = 0, this.gradientScopeCount = 0, this.customGradientDepth = 0, this.activeScope = {
                            keep: [],
                            track: []
                        }, this.scopeStack = [this.activeScope], this.profiler = new u.Profiler(e)
                    }

                    return e.prototype.runKernel = function (e, t, n) {
                        var r, i = this, o = [], s = function (e) {
                            return o.push(e), e
                        }, u = this.activeScope.name;
                        if (r = a.ENV.get("DEBUG") ? this.profiler.profileKernel(u, function () {
                            return e(i.backend, s)
                        }) : e(this.backend, s), null != this.activeTape && 0 === this.customGradientDepth) {
                            var l = {id: this.nextTapeNodeId++, name: u, inputs: t, output: r};
                            null != n && (l.gradient = function (e) {
                                return n(e, o)
                            }), this.activeTape.push(l)
                        }
                        return r
                    }, e.prototype.registerTensor = function (e) {
                        var t = this.refCounter.has(e.dataId) ? this.refCounter.get(e.dataId) : 0;
                        this.numTensors++, 0 === t && (this.numDataBuffers++, this.numBytes += p.sizeFromShape(e.shape) * p.bytesPerElement(e.dtype), this.backend.register(e.dataId, e.shape, e.dtype)), this.refCounter.set(e.dataId, t + 1), e instanceof c.Variable || this.track(e)
                    }, e.prototype.registerVariable = function (e) {
                        if (null != this.registeredVariables[e.name]) throw new Error("Variable with name " + e.name + " was already registered");
                        this.registeredVariables[e.name] = e
                    }, e.prototype.disposeTensor = function (e) {
                        if (this.refCounter.has(e.dataId)) {
                            this.numTensors--;
                            var t = this.refCounter.get(e.dataId);
                            t <= 1 ? (this.refCounter.delete(e.dataId), this.backend.disposeData(e.dataId), this.numDataBuffers--, this.numBytes -= p.sizeFromShape(e.shape) * p.bytesPerElement(e.dtype)) : this.refCounter.set(e.dataId, t - 1)
                        }
                    }, e.prototype.memory = function () {
                        var e = this.backend.memory();
                        return e.numTensors = this.numTensors, e.numDataBuffers = this.numDataBuffers, e.numBytes = this.numBytes, e
                    }, e.prototype.shouldRecord = function () {
                        return null != this.activeTape && 0 === this.customGradientDepth
                    }, e.prototype.addTapeNode = function (e, t, n) {
                        var r = {};
                        e.forEach(function (e, t) {
                            r[t] = e
                        });
                        var i = {
                            id: this.nextTapeNodeId++,
                            name: this.activeScope.name,
                            inputs: r,
                            output: t,
                            gradient: function (e) {
                                var t = {};
                                return n(e).forEach(function (e, n) {
                                    t[n] = function () {
                                        return e
                                    }
                                }), t
                            }
                        };
                        this.activeTape.push(i)
                    }, e.prototype.keep = function (e) {
                        if (1 === this.scopeStack.length && a.ENV.engine.safeMode) throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {...}) to avoid memory leaks.");
                        return this.activeScope.keep.push(e), e
                    }, e.prototype.startScope = function (e, t) {
                        void 0 === t && (t = !1), t && 0 === this.gradientScopeCount && (this.activeTape = []), t && this.gradientScopeCount++;
                        var n = {keep: [], track: []};
                        e && (n.name = e), this.scopeStack.push(n), this.activeScope = n
                    }, e.prototype.endScope = function (e, t) {
                        var n = this;
                        void 0 === t && (t = !1), t && 0 === --this.gradientScopeCount && (this.activeTape = null);
                        var r = this.activeScope.keep, i = p.extractTensorsFromContainer(e);
                        r = r.concat(i);
                        for (var a = 0; a < this.activeScope.track.length; a++) {
                            var o = this.activeScope.track[a];
                            p.isTensorInList(o, r) || (null != this.activeTape ? i.push(o) : o.dispose())
                        }
                        this.scopeStack.pop(), this.activeScope = 0 === this.scopeStack.length ? {
                            keep: [],
                            track: []
                        } : this.scopeStack[this.scopeStack.length - 1], i.forEach(function (e) {
                            p.isTensorInList(e, n.activeScope.keep) || n.track(e)
                        })
                    }, e.prototype.dispose = function () {
                    }, e.prototype.gradients = function (e, t, n, r) {
                        var i = this;
                        return void 0 === r && (r = !1), p.assert(t.length > 0, "gradients() received an empty list of xs."), o.tidy("gradients", function () {
                            var a = e();
                            p.assert(a instanceof c.Tensor, "The result y returned by f() must be a tensor.");
                            var o = l.getFilteredNodesXToY(i.activeTape, t, a);
                            if (!r && 0 === o.length && t.length > 0) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
                            var u = {};
                            return u[a.id] = null == n ? s.ones(a.shape) : n, l.backpropagateGradients(u, o), {
                                value: a,
                                grads: t.map(function (e) {
                                    return u[e.id]
                                })
                            }
                        }, !0)
                    }, e.prototype.customGrad = function (e) {
                        var t = this;
                        return p.assert(p.isFunction(e), "The f passed in customGrad(f) must be a function."), function () {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            p.assert(n.every(function (e) {
                                return e instanceof c.Tensor
                            }), "The args passed in customGrad(f)(x1, x2,...) must all be tensors"), t.customGradientDepth++;
                            var i, a = o.tidy(e.name, function () {
                                var t = e.apply(void 0, n), r = t.value, a = t.gradFunc;
                                return p.assert(r instanceof c.Tensor, "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"), p.assert(p.isFunction(a), "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."), i = a, r
                            }, !0);
                            if (t.customGradientDepth--, t.shouldRecord()) {
                                t.addTapeNode(n, a, function (e) {
                                    var t = i(e), r = Array.isArray(t) ? t : [t];
                                    return p.assert(r.length === n.length, "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."), p.assert(r.every(function (e) {
                                        return e instanceof c.Tensor
                                    }), "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."), r
                                })
                            }
                            return a
                        }
                    }, e.prototype.write = function (e, t) {
                        this.backend.write(e, t)
                    }, e.prototype.readSync = function (e) {
                        return this.backend.readSync(e)
                    }, e.prototype.read = function (e) {
                        return this.backend.read(e)
                    }, e.prototype.fromPixels = function (e, t) {
                        return this.backend.fromPixels(e, t)
                    }, e.prototype.time = function (e) {
                        return r(this, void 0, void 0, function () {
                            var t, n;
                            return i(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return t = performance.now(), [4, this.backend.time(e)];
                                    case 1:
                                        return n = r.sent(), n.wallMs = performance.now() - t, [2, n]
                                }
                            })
                        })
                    }, e.prototype.track = function (e) {
                        if (1 === this.scopeStack.length && this.safeMode) throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {op();...}); to avoid memory leaks.");
                        return this.activeScope.track.push(e), e
                    }, e
                }();
            n.Engine = h
        }, {
            "./environment": 5,
            "./globals": 6,
            "./ops/ops": 66,
            "./profiler": 87,
            "./tape": 88,
            "./tensor": 89,
            "./util": 95
        }],
        5: [function (e, t, n) {
            (function (t) {
                "use strict";

                function r(e, t) {
                    return null != e.getExtension(t)
                }

                function i(e) {
                    if (0 === e) throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
                    var t = document.createElement("canvas");
                    return 1 === e ? t.getContext("webgl") || t.getContext("experimental-webgl") : t.getContext("webgl2")
                }

                function a(e) {
                    if (null != e) {
                        var t = e.getExtension("WEBGL_lose_context");
                        if (null == t) throw new Error("Extension WEBGL_lose_context not supported on this browser.");
                        t.loseContext()
                    }
                }

                function o(e) {
                    var t = i(e);
                    return null != t && (a(t), !0)
                }

                function s(e) {
                    if (0 === e) return 0;
                    var t, n = i(e);
                    return t = r(n, "EXT_disjoint_timer_query_webgl2") && 2 === e ? 2 : r(n, "EXT_disjoint_timer_query") ? 1 : 0, null != n && a(n), t
                }

                function u(e) {
                    if (0 === e) return !1;
                    var t = i(e);
                    if (1 === e) {
                        if (!r(t, "OES_texture_float")) return !1
                    } else if (!r(t, "EXT_color_buffer_float")) return !1;
                    var n = t.createFramebuffer(), o = t.createTexture();
                    t.bindTexture(t.TEXTURE_2D, o);
                    var s = 2 === e ? t.RGBA32F : t.RGBA;
                    t.texImage2D(t.TEXTURE_2D, 0, s, 1, 1, 0, t.RGBA, t.FLOAT, null), t.bindFramebuffer(t.FRAMEBUFFER, n), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, o, 0);
                    var u = t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
                    t.readPixels(0, 0, 1, 1, t.RGBA, t.FLOAT, new Float32Array(4));
                    var l = t.getError() === t.NO_ERROR;
                    return a(t), u && l
                }

                function l(e) {
                    if (e > 0) return !1;
                    if (2 !== e) return !1;
                    var t = i(e), n = r(t, "WEBGL_get_buffer_sub_data_async");
                    return a(t), n
                }

                function c() {
                    var e = {};
                    if ("undefined" == typeof window) return e;
                    var t = v.getQueryParams(window.location.search);
                    if (b in t) {
                        var r = {};
                        t[b].split(",").forEach(function (e) {
                            var t = e.split(":"), n = t[0], i = t[1];
                            r[n] = i
                        }), n.URL_PROPERTIES.forEach(function (t) {
                            t.name in r && (console.log("Setting feature override from URL " + t.name + ": " + r[t.name]), t.type === d.NUMBER ? e[t.name] = +r[t.name] : t.type === d.BOOLEAN ? e[t.name] = "true" === r[t.name] : t.type === d.STRING ? e[t.name] = r[t.name] : console.warn("Unknown URL param: " + t.name + "."))
                        })
                    }
                    return e
                }

                function p() {
                    var e;
                    if ("undefined" != typeof window) e = window; else {
                        if (void 0 === t) throw new Error("Could not find a global object");
                        e = t
                    }
                    return e
                }

                var h = this && this.__decorate || function (e, t, n, r) {
                    var i, a = arguments.length,
                        o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                    return a > 3 && o && Object.defineProperty(t, n, o), o
                };
                Object.defineProperty(n, "__esModule", {value: !0});
                var d, f = e("./device_util"), g = e("./doc"), m = e("./engine"), v = e("./util");
                !function (e) {
                    e[e.NUMBER = 0] = "NUMBER", e[e.BOOLEAN = 1] = "BOOLEAN", e[e.STRING = 2] = "STRING"
                }(d = n.Type || (n.Type = {})), n.URL_PROPERTIES = [{
                    name: "DEBUG",
                    type: d.BOOLEAN
                }, {
                    name: "WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",
                    type: d.NUMBER
                }, {name: "WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", type: d.BOOLEAN}, {
                    name: "WEBGL_VERSION",
                    type: d.NUMBER
                }, {
                    name: "WEBGL_FLOAT_TEXTURE_ENABLED",
                    type: d.BOOLEAN
                }, {name: "WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED", type: d.BOOLEAN}, {
                    name: "BACKEND",
                    type: d.STRING
                }];
                var y = function () {
                    function e(e) {
                        this.features = {}, this.registry = {}, null != e && (this.features = e), this.get("DEBUG") && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")
                    }

                    return e.setBackend = function (e, t) {
                        if (void 0 === t && (t = !1), !(e in n.ENV.registry)) throw new Error("Backend type '" + e + "' not found in registry");
                        n.ENV.initBackend(e, t)
                    }, e.getBackend = function () {
                        return n.ENV.initDefaultBackend(), n.ENV.currentBackend
                    }, e.memory = function () {
                        return n.ENV.engine.memory()
                    }, e.prototype.get = function (e) {
                        return e in this.features ? this.features[e] : (this.features[e] = this.evaluateFeature(e), this.features[e])
                    }, e.prototype.set = function (e, t) {
                        this.features[e] = t
                    }, e.prototype.getBestBackendType = function () {
                        var e = this;
                        if (0 === Object.keys(this.registry).length) throw new Error("No backend found in registry.");
                        return Object.keys(this.registry).map(function (t) {
                            return {name: t, entry: e.registry[t]}
                        }).sort(function (e, t) {
                            return t.entry.priority - e.entry.priority
                        })[0].name
                    }, e.prototype.evaluateFeature = function (e) {
                        if ("DEBUG" === e) return !1;
                        if ("BACKEND" === e) return this.getBestBackendType();
                        if ("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION" === e) {
                            var t = this.get("WEBGL_VERSION");
                            return 0 === t ? 0 : s(t)
                        }
                        if ("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE" === e) return this.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && !f.isMobile();
                        if ("WEBGL_VERSION" === e) return o(2) ? 2 : o(1) ? 1 : 0;
                        if ("WEBGL_FLOAT_TEXTURE_ENABLED" === e) return u(this.get("WEBGL_VERSION"));
                        if ("WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED" === e) return l(this.get("WEBGL_VERSION"));
                        throw new Error("Unknown feature " + e + ".")
                    }, e.prototype.setFeatures = function (e) {
                        this.features = e
                    }, e.prototype.reset = function () {
                        this.features = c(), null != this.globalEngine && (this.globalEngine.dispose(), this.globalEngine = null)
                    }, e.prototype.initBackend = function (e, t) {
                        void 0 === t && (t = !1), this.currentBackend = e, null != this.globalEngine && this.globalEngine.dispose();
                        var r = n.ENV.findBackend(e);
                        this.globalEngine = new m.Engine(r, t)
                    }, e.prototype.findBackend = function (e) {
                        return e in this.registry ? this.registry[e].backend : null
                    }, e.prototype.registerBackend = function (e, t, n) {
                        void 0 === n && (n = 1), e in this.registry && console.warn(e + " backend was already registered");
                        try {
                            var r = t();
                            return this.registry[e] = {backend: r, priority: n}, !0
                        } catch (e) {
                            return console.warn(e.message), !1
                        }
                    }, e.prototype.removeBackend = function (e) {
                        if (!(e in this.registry)) throw new Error(e + " backend not found in registry");
                        this.registry[e].backend.dispose(), delete this.registry[e]
                    }, Object.defineProperty(e.prototype, "engine", {
                        get: function () {
                            return this.initDefaultBackend(), this.globalEngine
                        }, enumerable: !0, configurable: !0
                    }), e.prototype.initDefaultBackend = function () {
                        null == this.globalEngine && this.initBackend(n.ENV.get("BACKEND"), !1)
                    }, h([g.doc({heading: "Environment"})], e, "setBackend", null), h([g.doc({heading: "Environment"})], e, "getBackend", null), h([g.doc({
                        heading: "Performance",
                        subheading: "Memory"
                    })], e, "memory", null), e
                }();
                n.Environment = y;
                var b = "tfjsflags";
                n.ENV = function () {
                    var e = p();
                    return e.ENV = e.ENV || new y(c()), e.ENV
                }()
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"./device_util": 2, "./doc": 3, "./engine": 4, "./util": 95}],
        6: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./gradients"), i = e("./tracking");
            n.tidy = i.Tracking.tidy, n.keep = i.Tracking.keep, n.dispose = i.Tracking.dispose, n.time = i.Tracking.time, n.grad = r.Gradients.grad, n.valueAndGrad = r.Gradients.valueAndGrad, n.grads = r.Gradients.grads, n.valueAndGrads = r.Gradients.valueAndGrads, n.variableGrads = r.Gradients.variableGrads, n.customGrad = r.Gradients.customGrad
        }, {"./gradients": 7, "./tracking": 92}],
        7: [function (e, t, n) {
            "use strict";

            function r(e) {
                if (e.filter(function (e) {
                    return null == e
                }).length > 0) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")
            }

            var i = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("./doc"), o = e("./environment"), s = e("./globals"), u = e("./tensor"), l = e("./util"),
                c = function () {
                    function e() {
                    }

                    return e.gradScope = function (e, t) {
                        return s.tidy(e, t, !0)
                    }, e.grad = function (e) {
                        return l.assert(l.isFunction(e), "The f passed in grad(f) must be a function"), function (t, n) {
                            l.assert(t instanceof u.Tensor, "The x passed in grad(f)(x) must be a tensor"), l.assert(null == n || n instanceof u.Tensor, "The dy passed in grad(f)(x, dy) must be a tensor");
                            var i = o.ENV.engine.gradients(function () {
                                return e(t)
                            }, [t], n), a = i.value, s = i.grads;
                            return null != n && l.assertShapesMatch(a.shape, n.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"), a.dispose(), r(s), s[0]
                        }
                    }, e.grads = function (e) {
                        return l.assert(l.isFunction(e), "The f passed in grads(f) must be a function"), function (t, n) {
                            l.assert(Array.isArray(t) && t.every(function (e) {
                                return e instanceof u.Tensor
                            }), "The args passed in grads(f)(args) must be an array of tensors"), l.assert(null == n || n instanceof u.Tensor, "The dy passed in grads(f)(args, dy) must be a tensor");
                            var i = o.ENV.engine.gradients(function () {
                                return e.apply(void 0, t)
                            }, t, n), a = i.value, s = i.grads;
                            return null != n && l.assertShapesMatch(a.shape, n.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), a.dispose(), r(s), s
                        }
                    }, e.valueAndGrad = function (e) {
                        return l.assert(l.isFunction(e), "The f passed in valueAndGrad(f) must be a function"), function (t, n) {
                            l.assert(t instanceof u.Tensor, "The x passed in valueAndGrad(f)(x) must be a tensor"), l.assert(null == n || n instanceof u.Tensor, "The dy passed in valueAndGrad(f)(x, dy) must be a tensor");
                            var i = o.ENV.engine.gradients(function () {
                                return e(t)
                            }, [t], n), a = i.grads, s = i.value;
                            return r(a), {grad: a[0], value: s}
                        }
                    }, e.valueAndGrads = function (e) {
                        return l.assert(l.isFunction(e), "The f passed in valueAndGrads(f) must be a function"), function (t, n) {
                            l.assert(Array.isArray(t) && t.every(function (e) {
                                return e instanceof u.Tensor
                            }), "The args passed in valueAndGrads(f)(args) must be array of tensors"), l.assert(null == n || n instanceof u.Tensor, "The dy passed in valueAndGrads(f)(args, dy) must be a tensor");
                            var i = o.ENV.engine.gradients(function () {
                                return e.apply(void 0, t)
                            }, t, n);
                            return null != n && l.assertShapesMatch(i.value.shape, n.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), r(i.grads), i
                        }
                    }, e.variableGrads = function (e, t) {
                        if (l.assert(l.isFunction(e), "The f passed in variableGrads(f) must be a function"), l.assert(null == t || Array.isArray(t) && t.every(function (e) {
                            return e instanceof u.Variable
                        }), "The varList passed in variableGrads(f, varList) must be an array of variables"), null == t) {
                            t = [];
                            for (var n in o.ENV.engine.registeredVariables) t.push(o.ENV.engine.registeredVariables[n])
                        }
                        var r = t.length;
                        t = t.filter(function (e) {
                            return e.trainable
                        }), l.assert(t.length > 0, "variableGrads() expects at least one of the input variables to be trainable, but none of the " + r + " variables is trainable.");
                        var i = o.ENV.engine.gradients(e, t, null, !0), a = i.value, s = i.grads;
                        l.assert(s.some(function (e) {
                            return null != e
                        }), "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."), l.assert(0 === a.rank, "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + a.rank + " tensor");
                        var c = {};
                        return t.forEach(function (e, t) {
                            null != s[t] && (c[e.name] = s[t])
                        }), {value: a, grads: c}
                    }, e.customGrad = function (e) {
                        return o.ENV.engine.customGrad(e)
                    }, i([a.doc({
                        heading: "Training",
                        subheading: "Gradients"
                    })], e, "grad", null), i([a.doc({
                        heading: "Training",
                        subheading: "Gradients"
                    })], e, "grads", null), i([a.doc({
                        heading: "Training",
                        subheading: "Gradients"
                    })], e, "valueAndGrad", null), i([a.doc({
                        heading: "Training",
                        subheading: "Gradients"
                    })], e, "valueAndGrads", null), i([a.doc({
                        heading: "Training",
                        subheading: "Gradients"
                    })], e, "variableGrads", null), i([a.doc({
                        heading: "Training",
                        subheading: "Gradients"
                    })], e, "customGrad", null), e
                }();
            n.Gradients = c
        }, {"./doc": 3, "./environment": 5, "./globals": 6, "./tensor": 89, "./util": 95}],
        8: [function (e, t, n) {
            "use strict";

            function r(e) {
                for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t])
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("./browser_util"), a = e("./environment");
            n.environment = a;
            var o = e("./environment"), s = e("./kernels/webgl/gpgpu_util"), u = e("./kernels/webgl/webgl_util"),
                l = e("./test_util");
            n.test_util = l;
            var c = e("./util");
            n.util = c;
            var p = e("./version");
            n.version_core = p.version;
            var h = e("./optimizers/adadelta_optimizer");
            n.AdadeltaOptimizer = h.AdadeltaOptimizer;
            var d = e("./optimizers/adagrad_optimizer");
            n.AdagradOptimizer = d.AdagradOptimizer;
            var f = e("./optimizers/adam_optimizer");
            n.AdamOptimizer = f.AdamOptimizer;
            var g = e("./optimizers/adamax_optimizer");
            n.AdamaxOptimizer = g.AdamaxOptimizer;
            var m = e("./optimizers/momentum_optimizer");
            n.MomentumOptimizer = m.MomentumOptimizer;
            var v = e("./optimizers/optimizer");
            n.Optimizer = v.Optimizer;
            var y = e("./optimizers/rmsprop_optimizer");
            n.RMSPropOptimizer = y.RMSPropOptimizer;
            var b = e("./optimizers/sgd_optimizer");
            n.SGDOptimizer = b.SGDOptimizer;
            var w = e("./tensor");
            n.Tensor = w.Tensor, n.TensorBuffer = w.TensorBuffer, n.variable = w.variable, n.Variable = w.Variable;
            var x = e("./types");
            n.Rank = x.Rank;
            var A = e("./weights_loader");
            n.loadWeights = A.loadWeights, r(e("./ops/ops"));
            var E = e("./ops/loss_ops");
            n.Reduction = E.Reduction, r(e("./train")), r(e("./globals"));
            var _ = e("./environment");
            n.ENV = _.ENV, n.Environment = _.Environment, n.setBackend = o.Environment.setBackend, n.getBackend = o.Environment.getBackend, n.memory = o.Environment.memory;
            var T = e("./doc");
            n.doc = T.doc, n.nextFrame = i.BrowserUtil.nextFrame, n.webgl = {webgl_util: u, gpgpu_util: s}
        }, {
            "./browser_util": 1,
            "./doc": 3,
            "./environment": 5,
            "./globals": 6,
            "./kernels/webgl/gpgpu_util": 25,
            "./kernels/webgl/webgl_util": 45,
            "./ops/loss_ops": 59,
            "./ops/ops": 66,
            "./optimizers/adadelta_optimizer": 78,
            "./optimizers/adagrad_optimizer": 79,
            "./optimizers/adam_optimizer": 80,
            "./optimizers/adamax_optimizer": 81,
            "./optimizers/momentum_optimizer": 82,
            "./optimizers/optimizer": 83,
            "./optimizers/rmsprop_optimizer": 85,
            "./optimizers/sgd_optimizer": 86,
            "./tensor": 89,
            "./test_util": 91,
            "./train": 93,
            "./types": 94,
            "./util": 95,
            "./version": 96,
            "./weights_loader": 97
        }],
        9: [function (e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, i = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("seedrandom"), o = e("../environment"), s = e("../ops/axis_util"), u = e("../ops/broadcast_util"),
                l = e("../ops/concat_util"), c = e("../ops/ops"), p = e("../ops/ops"), h = e("../ops/selu_util"),
                d = e("../ops/erf_util"), f = e("../tensor"), g = e("../types"), m = e("../util"),
                v = e("./backend_util"), y = function () {
                    function e() {
                        this.data = new WeakMap, "undefined" != typeof document && (this.canvas = document.createElement("canvas"))
                    }

                    return e.prototype.register = function (e, t, n) {
                        if (this.data.has(e)) throw new Error("Data buffer is already registered");
                        this.data.set(e, null)
                    }, e.prototype.write = function (e, t) {
                        if (null == t) throw new Error("MathBackendCPU.write(): values can not be null");
                        this.throwIfNoData(e), this.data.set(e, t)
                    }, e.prototype.fromPixels = function (e, t) {
                        if (null == e) throw new Error("MathBackendCPU.writePixels(): pixels can not be null");
                        var n;
                        if (e instanceof ImageData) n = e.data; else if (e instanceof HTMLCanvasElement) n = e.getContext("2d").getImageData(0, 0, e.width, e.height).data; else {
                            if (!(e instanceof HTMLImageElement || e instanceof HTMLVideoElement)) throw new Error("pixels is of unknown type: " + e.constructor.name);
                            if (null == this.canvas) throw new Error("Can't read pixels from HTMLImageElement outside the browser.");
                            this.canvas.width = e.width, this.canvas.height = e.height, this.canvas.getContext("2d").drawImage(e, 0, 0, e.width, e.height), n = this.canvas.getContext("2d").getImageData(0, 0, e.width, e.height).data
                        }
                        var r;
                        if (4 === t) r = new Int32Array(n); else {
                            var i = e.width * e.height;
                            r = new Int32Array(i * t);
                            for (var a = 0; a < i; a++) for (var o = 0; o < t; ++o) r[a * t + o] = n[4 * a + o]
                        }
                        var s = [e.height, e.width, t];
                        return p.tensor3d(r, s, "int32")
                    }, e.prototype.read = function (e) {
                        return r(this, void 0, void 0, function () {
                            return i(this, function (t) {
                                return [2, this.readSync(e)]
                            })
                        })
                    }, e.prototype.readSync = function (e) {
                        return this.throwIfNoData(e), this.data.get(e)
                    }, e.prototype.disposeData = function (e) {
                        this.data.has(e) && this.data.delete(e)
                    }, e.prototype.time = function (e) {
                        return r(this, void 0, void 0, function () {
                            var t, n;
                            return i(this, function (r) {
                                return t = performance.now(), e(), n = performance.now() - t, [2, {kernelMs: n}]
                            })
                        })
                    }, e.prototype.memory = function () {
                        return {unreliable: !0}
                    }, e.prototype.throwIfNoData = function (e) {
                        if (!this.data.has(e)) throw new Error("CPU backend: No data found for this tensor. Did you change your backend in the middle of the program? New backends can't use Tensors created with previous backends")
                    }, e.prototype.slice = function (e, t, n) {
                        for (var r = c.buffer(n, e.dtype), i = 0; i < r.size; ++i) {
                            var a = r.indexToLoc(i), o = a.map(function (e, n) {
                                return e + t[n]
                            });
                            r.set.apply(r, [e.get.apply(e, o)].concat(a))
                        }
                        return r.toTensor()
                    }, e.prototype.reverse = function (e, t) {
                        for (var n = c.buffer(e.shape, e.dtype), r = e.buffer(), i = 0; i < n.size; i++) !function (i) {
                            var a = n.indexToLoc(i), o = a.slice();
                            t.forEach(function (t) {
                                return o[t] = e.shape[t] - 1 - o[t]
                            }), n.set.apply(n, [r.get.apply(r, o)].concat(a))
                        }(i);
                        return n.toTensor()
                    }, e.prototype.concat = function (e, t) {
                        var n = l.computeOutShape(e.shape, t.shape, 1), r = c.buffer(n, e.dtype);
                        if (1 === e.shape[0] && 1 === t.shape[0]) {
                            var i = e.dataSync(), a = t.dataSync(), o = r.values;
                            return o.set(i, 0), o.set(a, e.size), r.toTensor()
                        }
                        for (var s = 0; s < n[0]; ++s) {
                            for (u = 0; u < e.shape[1]; ++u) r.set(e.get(s, u), s, u);
                            for (var u = 0; u < t.shape[1]; ++u) r.set(t.get(s, u), s, u + e.shape[1])
                        }
                        return r.toTensor()
                    }, e.prototype.neg = function (e) {
                        return this.multiply(c.scalar(-1), e)
                    }, e.prototype.add = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, g.upcastType(e.dtype, t.dtype), function (e, t) {
                            return e + t
                        })
                    }, e.prototype.subtract = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, g.upcastType(e.dtype, t.dtype), function (e, t) {
                            return e - t
                        })
                    }, e.prototype.pow = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, e.dtype, function (e, t) {
                            return Math.pow(e, t)
                        })
                    }, e.prototype.matMul = function (e, t, n, r) {
                        for (var i = n ? e.shape[0] : e.shape[1], a = n ? e.shape[1] : e.shape[0], o = r ? t.shape[0] : t.shape[1], s = e.dataSync(), u = t.dataSync(), l = n ? [1, e.strides[0]] : [e.strides[0], 1], p = l[0], h = l[1], d = r ? [t.strides[0], 1] : [1, t.strides[0]], f = d[0], g = d[1], m = a * p, v = o * f, y = new Float32Array(a * o), b = 0, w = 0; w < m; w += p) for (var x = 0; x < v; x += f) {
                            for (var A = w, E = x, _ = 0, T = 0; T < i; ++T) _ += s[A] * u[E], A += h, E += g;
                            y[b++] = _
                        }
                        return c.tensor2d(y, [a, o])
                    }, e.prototype.multiply = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, g.upcastType(e.dtype, t.dtype), function (e, t) {
                            return e * t
                        })
                    }, e.prototype.divide = function (e, t) {
                        var n, r;
                        return "int32" === e.dtype && "int32" === t.dtype ? (r = "int32", n = function (e, t) {
                            return Math.floor(e / t)
                        }) : (r = "float32", n = function (e, t) {
                            return e / t
                        }), this.broadcastedBinaryOp(e, t, r, n)
                    }, e.prototype.sum = function (e, t) {
                        s.assertAxesAreInnerMostDims("sum", t, e.rank);
                        for (var n = s.computeOutAndReduceShapes(e.shape, t), r = n[0], i = n[1], a = g.upcastType(e.dtype, "int32"), o = c.zeros(r, a), u = m.sizeFromShape(i), l = o.dataSync(), p = e.dataSync(), h = 0; h < l.length; ++h) {
                            for (var d = h * u, f = 0, v = 0; v < u; ++v) f += p[d + v];
                            l[h] = f
                        }
                        return o
                    }, e.prototype.argMin = function (e, t) {
                        var n = [t];
                        s.assertAxesAreInnerMostDims("argMin", n, e.rank);
                        for (var r = s.computeOutAndReduceShapes(e.shape, n), i = r[0], a = r[1], o = c.zeros(i, "int32"), u = m.sizeFromShape(a), l = o.dataSync(), p = e.dataSync(), h = 0; h < l.length; ++h) {
                            for (var d = h * u, f = p[d], g = 0, v = 0; v < u; ++v) {
                                var y = p[d + v];
                                y < f && (f = y, g = v)
                            }
                            l[h] = g
                        }
                        return o
                    }, e.prototype.argMax = function (e, t) {
                        var n = [t];
                        s.assertAxesAreInnerMostDims("argMax", n, e.rank);
                        for (var r = s.computeOutAndReduceShapes(e.shape, n), i = r[0], a = r[1], o = c.zeros(i, "int32"), u = m.sizeFromShape(a), l = o.dataSync(), p = e.dataSync(), h = 0; h < l.length; ++h) {
                            for (var d = h * u, f = p[d], g = 0, v = 0; v < u; ++v) {
                                var y = p[d + v];
                                y > f && (f = y, g = v)
                            }
                            l[h] = g
                        }
                        return o
                    }, e.prototype.equal = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, "bool", function (e, t) {
                            return e === t ? 1 : 0
                        })
                    }, e.prototype.notEqual = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, "bool", function (e, t) {
                            return e !== t ? 1 : 0
                        })
                    }, e.prototype.less = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, "bool", function (e, t) {
                            return e < t ? 1 : 0
                        })
                    }, e.prototype.lessEqual = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, "bool", function (e, t) {
                            return e <= t ? 1 : 0
                        })
                    }, e.prototype.greater = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, "bool", function (e, t) {
                            return e > t ? 1 : 0
                        })
                    }, e.prototype.greaterEqual = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, "bool", function (e, t) {
                            return e >= t ? 1 : 0
                        })
                    }, e.prototype.logicalNot = function (e) {
                        for (var t = e.dataSync(), n = new Int32Array(t.length), r = 0; r < t.length; ++r) n[r] = t[r] ? 0 : 1;
                        return f.Tensor.make(e.shape, {values: n}, "bool")
                    }, e.prototype.logicalAnd = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, "bool", function (e, t) {
                            return e && t
                        })
                    }, e.prototype.logicalOr = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, "bool", function (e, t) {
                            return e || t
                        })
                    }, e.prototype.where = function (e, t, n, r) {
                        for (var i = e.dataSync(), a = t.dataSync(), o = n.dataSync(), s = c.zeros(t.shape, r), u = s.dataSync(), l = 0, p = 0 === e.rank || e.rank > 1 || 1 === t.rank ? 1 : t.shape[1], h = 0; h < i.length; h++) for (var d = 0; d < p; d++) 1 === i[h] ? u[l++] = a[h] : u[l++] = o[h];
                        return s
                    }, e.prototype.topKValues = function (e, t) {
                        return this.topK(e, t).values
                    }, e.prototype.topKIndices = function (e, t) {
                        return this.topK(e, t).indices
                    }, e.prototype.topK = function (e, t) {
                        for (var n = e.dataSync(), r = [], i = 0; i < n.length; i++) r.push({value: n[i], index: i});
                        r.sort(function (e, t) {
                            return t.value - e.value
                        });
                        for (var a = m.getTypedArrayFromDType(e.dtype, t), o = new Int32Array(t), i = 0; i < t; i++) a[i] = r[i].value, o[i] = r[i].index;
                        return {values: c.tensor1d(a, e.dtype), indices: c.tensor1d(o, "int32")}
                    }, e.prototype.min = function (e, t) {
                        s.assertAxesAreInnerMostDims("min", t, e.rank);
                        for (var n = s.computeOutAndReduceShapes(e.shape, t), r = n[0], i = n[1], a = c.zeros(r, e.dtype), o = m.sizeFromShape(i), u = a.dataSync(), l = e.dataSync(), p = 0; p < u.length; ++p) {
                            for (var h = p * o, d = l[0], f = 0; f < o; ++f) {
                                var g = l[h + f];
                                g < d && (d = g)
                            }
                            u[p] = d
                        }
                        return a
                    }, e.prototype.minimum = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, e.dtype, function (e, t) {
                            return Math.min(e, t)
                        })
                    }, e.prototype.mod = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, e.dtype, function (e, t) {
                            var n = e % t;
                            return e < 0 && t < 0 || e >= 0 && t >= 0 ? n : (n + t) % t
                        })
                    }, e.prototype.max = function (e, t) {
                        s.assertAxesAreInnerMostDims("max", t, e.rank);
                        for (var n = s.computeOutAndReduceShapes(e.shape, t), r = n[0], i = n[1], a = c.zeros(r, e.dtype), o = m.sizeFromShape(i), u = a.dataSync(), l = e.dataSync(), p = 0; p < u.length; ++p) {
                            for (var h = p * o, d = l[h], f = 0; f < o; ++f) {
                                var g = l[h + f];
                                g > d && (d = g)
                            }
                            u[p] = d
                        }
                        return a
                    }, e.prototype.maximum = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, e.dtype, function (e, t) {
                            return Math.max(e, t)
                        })
                    }, e.prototype.squaredDifference = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, e.dtype, function (e, t) {
                            var n = e - t;
                            return n * n
                        })
                    }, e.prototype.ceil = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) n[r] = Math.ceil(t[r]);
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.floor = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) n[r] = Math.floor(t[r]);
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.sign = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) t[r] < 0 ? n[r] = -1 : t[r] > 0 ? n[r] = 1 : n[r] = 0;
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.round = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) {
                            var i = Math.floor(t[r]);
                            t[r] - i < .5 ? n[r] = Math.floor(t[r]) : t[r] - i > .5 ? n[r] = Math.ceil(t[r]) : n[r] = i % 2 == 0 ? i : i + 1
                        }
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.exp = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) n[r] = Math.exp(t[r]);
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.expm1 = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) n[r] = Math.expm1(t[r]);
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.log = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) {
                            var i = t[r];
                            n[r] = Math.log(i)
                        }
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.log1p = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) {
                            var i = t[r];
                            n[r] = Math.log1p(i)
                        }
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.sqrt = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) {
                            var i = t[r];
                            n[r] = Math.sqrt(i)
                        }
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.rsqrt = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) {
                            var i = t[r];
                            n[r] = 1 / Math.sqrt(i)
                        }
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.square = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) {
                            var i = t[r];
                            n[r] = i * i
                        }
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.reciprocal = function (e) {
                        for (var t = e.dataSync(), n = new Float32Array(t.length), r = 0; r < t.length; ++r) n[r] = 1 / t[r];
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.relu = function (e) {
                        for (var t = c.zeros(e.shape, e.dtype), n = t.dataSync(), r = e.dataSync(), i = 0; i < r.length; ++i) n[i] = Math.max(0, r[i]);
                        return t
                    }, e.prototype.elu = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) {
                            var i = n[r];
                            t[r] = i >= 0 ? i : Math.exp(i) - 1
                        }
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.eluDer = function (e, t) {
                        for (var n = new Float32Array(t.size), r = t.dataSync(), i = e.dataSync(), a = 0; a < r.length; ++a) {
                            var o = r[a];
                            n[a] = o >= 1 ? i[a] : i[a] * (o + 1)
                        }
                        return f.Tensor.make(t.shape, {values: n})
                    }, e.prototype.selu = function (e) {
                        for (var t = h.SELU_SCALEALPHA, n = h.SELU_SCALE, r = new Float32Array(e.size), i = e.dataSync(), a = 0; a < i.length; ++a) {
                            var o = i[a];
                            r[a] = o >= 0 ? n * o : t * (Math.exp(o) - 1)
                        }
                        return f.Tensor.make(e.shape, {values: r})
                    }, e.prototype.clip = function (e, t, n) {
                        for (var r = new Float32Array(e.size), i = e.dataSync(), a = 0; a < i.length; ++a) r[a] = Math.min(n, Math.max(t, i[a]));
                        return f.Tensor.make(e.shape, {values: r})
                    }, e.prototype.abs = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.abs(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.int = function (e) {
                        for (var t = new Int32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = n[r];
                        return f.Tensor.make(e.shape, {values: t}, "int32")
                    }, e.prototype.sigmoid = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = 1 / (1 + Math.exp(-n[r]));
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.softplus = function (e) {
                        for (var t = Math.log(1.1920928955078125e-7) + 2, n = new Float32Array(e.size), r = e.dataSync(), i = 0; i < r.length; ++i) {
                            var a = r[i] > -t, o = r[i] < t, s = Math.exp(r[i]), u = void 0;
                            u = o ? s : a ? r[i] : Math.log(1 + s), n[i] = u
                        }
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.sin = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.sin(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.cos = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.cos(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.tan = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.tan(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.asin = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.asin(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.acos = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.acos(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.atan = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.atan(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.atan2 = function (e, t) {
                        return this.broadcastedBinaryOp(e, t, e.dtype, function (e, t) {
                            return Math.atan2(e, t)
                        })
                    }, e.prototype.sinh = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.sinh(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.cosh = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.cosh(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.tanh = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = m.tanh(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.asinh = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.asinh(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.acosh = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.acosh(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.atanh = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = 0; r < n.length; ++r) t[r] = Math.atanh(n[r]);
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.erf = function (e) {
                        for (var t = new Float32Array(e.size), n = e.dataSync(), r = d.ERF_P, i = d.ERF_A1, a = d.ERF_A2, o = d.ERF_A3, s = d.ERF_A4, u = d.ERF_A5, l = 0; l < n.length; ++l) {
                            var c = n[l], p = 1 / (1 + r * c);
                            t[l] = 1 - ((((u * p + s) * p + o) * p + a) * p + i) * p * Math.exp(-c * c)
                        }
                        return f.Tensor.make(e.shape, {values: t})
                    }, e.prototype.step = function (e, t) {
                        void 0 === t && (t = 0);
                        for (var n = new Float32Array(e.size), r = e.dataSync(), i = 0; i < r.length; ++i) {
                            var a = r[i];
                            isNaN(a) ? n[i] = NaN : n[i] = a > 0 ? 1 : t
                        }
                        return f.Tensor.make(e.shape, {values: n})
                    }, e.prototype.conv2d = function (e, t, n) {
                        for (var r = n.filterHeight, i = n.filterWidth, a = n.dilationHeight, o = n.dilationWidth, s = n.padInfo.left, u = n.padInfo.top, l = c.buffer(n.outShape, e.dtype), p = 0; p < n.batchSize; ++p) for (var h = 0; h < n.outChannels; ++h) for (var d = 0; d < n.outHeight; ++d) for (var f = d * n.strideHeight - s, g = 0; g < n.outWidth; ++g) {
                            for (var m = g * n.strideWidth - u, v = 0, y = 0; y < r; y++) {
                                var b = f + y * a;
                                if (!(b < 0 || b >= n.inHeight)) for (var w = 0; w < i; w++) {
                                    var x = m + w * o;
                                    if (!(x < 0 || x >= n.inWidth)) for (var A = 0; A < n.inChannels; ++A) v += e.get(p, b, x, A) * t.get(y, w, A, h)
                                }
                            }
                            l.set(v, p, d, g, h)
                        }
                        return l.toTensor()
                    }, e.prototype.conv2dDerInput = function (e, t, n) {
                        for (var r = n.filterHeight, i = n.filterWidth, a = r - 1 - n.padInfo.top, o = i - 1 - n.padInfo.left, s = n.strideHeight, u = n.strideWidth, l = c.buffer(n.inShape, "float32"), p = 0; p < n.batchSize; ++p) for (var h = 0; h < n.inChannels; ++h) for (var d = 0; d < n.inHeight; ++d) for (var f = d - o, g = Math.max(0, Math.ceil(f / s)), m = Math.min(n.outHeight, (r + f) / s), v = 0; v < n.inWidth; ++v) {
                            for (var y = v - a, b = Math.max(0, Math.ceil(y / u)), w = Math.min(n.outWidth, (i + y) / u), x = 0, A = g; A < m; ++A) for (var E = A * s - f, _ = b; _ < w; ++_) for (var T = _ * u - y, S = 0; S < n.outChannels; ++S) x += e.get(p, A, _, S) * t.get(r - 1 - E, i - 1 - T, h, S);
                            l.set(x, p, d, v, h)
                        }
                        return l.toTensor()
                    }, e.prototype.conv2dDerFilter = function (e, t, n) {
                        for (var r = n.strideHeight, i = n.strideWidth, a = n.filterHeight, o = n.filterWidth, s = c.buffer(n.filterShape, "float32"), u = n.padInfo.left, l = n.padInfo.top, p = 0; p < a; ++p) for (var h = Math.max(0, Math.ceil((l - p) / r)), d = Math.min(n.outHeight, (n.inHeight + l - p) / r), f = 0; f < o; ++f) for (var g = Math.max(0, Math.ceil((u - f) / i)), m = Math.min(n.outWidth, (n.inWidth + u - f) / i), v = 0; v < n.inChannels; ++v) for (var y = 0; y < n.outChannels; ++y) {
                            for (var b = 0, w = 0; w < n.batchSize; ++w) for (var x = h; x < d; ++x) for (var A = p + x * r - l, E = g; E < m; ++E) {
                                var _ = f + E * i - u;
                                b += e.get(w, A, _, v) * t.get(w, x, E, y)
                            }
                            s.set(b, p, f, v, y)
                        }
                        return s.toTensor()
                    }, e.prototype.depthwiseConv2D = function (e, t, n) {
                        for (var r = n.filterHeight, i = n.filterWidth, a = n.dilationHeight, o = n.dilationWidth, s = n.padInfo.left, u = n.padInfo.top, l = n.outChannels / n.inChannels, p = c.buffer(n.outShape, e.dtype), h = 0; h < n.batchSize; ++h) for (var d = 0; d < n.inChannels; ++d) for (var f = 0; f < n.outHeight; ++f) for (var g = f * n.strideHeight - s, m = 0; m < n.outWidth; ++m) for (var v = m * n.strideWidth - u, y = 0; y < l; ++y) {
                            for (var b = 0, w = 0; w < r; ++w) {
                                var x = g + w * a;
                                if (!(x < 0 || x >= n.inHeight)) for (var A = 0; A < i; ++A) {
                                    var E = v + A * o;
                                    E < 0 || E >= n.inWidth || (b += e.get(h, x, E, d) * t.get(w, A, d, y))
                                }
                            }
                            p.set(b, h, f, m, d * l + y)
                        }
                        return p.toTensor()
                    }, e.prototype.tile = function (e, t) {
                        for (var n = new Array(e.rank), r = 0; r < n.length; r++) n[r] = e.shape[r] * t[r];
                        for (var i = c.buffer(n, e.dtype), a = e.buffer(), r = 0; r < i.values.length; ++r) {
                            for (var o = i.indexToLoc(r), s = new Array(e.rank), u = 0; u < s.length; u++) s[u] = o[u] % e.shape[u];
                            var l = a.locToIndex(s);
                            i.values[r] = a.values[l]
                        }
                        return i.toTensor()
                    }, e.prototype.pad = function (e, t, n) {
                        var r = t.map(function (t, n) {
                            return t[0] + e.shape[n] + t[1]
                        }), i = t.map(function (e) {
                            return e[0]
                        }), a = e.buffer(), o = c.buffer(r, e.dtype);
                        0 !== n && o.values.fill(n);
                        for (var s = 0; s < e.size; s++) {
                            var u = a.indexToLoc(s), l = u.map(function (e, t) {
                                return e + i[t]
                            });
                            o.set.apply(o, [e.get.apply(e, u)].concat(l))
                        }
                        return o.toTensor()
                    }, e.prototype.transpose = function (e, t) {
                        for (var n = new Array(e.rank), r = 0; r < n.length; r++) n[r] = e.shape[t[r]];
                        for (var i = e.dataSync(), a = p.buffer(n, e.dtype), o = e.buffer(), r = 0; r < e.size; ++r) {
                            for (var s = o.indexToLoc(r), u = new Array(s.length), l = 0; l < u.length; l++) u[l] = s[t[l]];
                            var c = a.locToIndex(u);
                            a.values[c] = i[r]
                        }
                        return a.toTensor()
                    }, e.prototype.gather = function (e, t, n) {
                        var r = e.shape.slice(), i = t.dataSync();
                        r[n] = i.length;
                        for (var a = p.buffer(r, e.dtype), o = e.buffer(), s = 0; s < a.size; ++s) {
                            var u = a.indexToLoc(s), l = u.slice();
                            l[n] = i[u[n]];
                            var c = o.locToIndex(l);
                            a.values[s] = o.values[c]
                        }
                        return a.toTensor()
                    }, e.prototype.pool = function (e, t, n) {
                        for (var r = t.strideHeight, i = t.strideWidth, a = t.filterHeight, o = t.filterWidth, s = c.buffer(t.outShape, "float32"), u = t.padInfo.top, l = t.padInfo.left, p = 0; p < t.batchSize; ++p) for (var h = 0; h < t.inChannels; ++h) for (var d = 0; d < t.outHeight; ++d) for (var f = d * r - u, g = Math.max(0, f), m = Math.min(t.inHeight, a + f), v = 0; v < t.outWidth; ++v) {
                            for (var y = v * i - l, b = Math.max(0, y), w = Math.min(t.inWidth, o + y), x = "max" === n ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, A = 0, E = 0, _ = g; _ < m; ++_) {
                                for (var T = b; T < w; ++T) {
                                    var S = e.get(p, _, T, h);
                                    "max" === n && S > x ? x = S : "avg" === n && (A += S, E++)
                                }
                                if (isNaN(x)) break
                            }
                            s.set("avg" === n ? A / E : x, p, d, v, h)
                        }
                        return s.toTensor()
                    }, e.prototype.maxPool = function (e, t) {
                        return this.pool(e, t, "max")
                    }, e.prototype.maxPoolPositions = function (e, t) {
                        for (var n = c.buffer(t.outShape, "int32"), r = t.strideHeight, i = t.strideWidth, a = t.filterHeight, o = t.filterWidth, s = t.padInfo.top, u = t.padInfo.left, l = 0; l < t.batchSize; ++l) for (var p = 0; p < t.inChannels; ++p) for (var h = 0; h < t.outHeight; ++h) for (var d = h * r - s, f = Math.max(0, d), g = Math.min(t.inHeight, a + d), m = 0; m < t.outWidth; ++m) {
                            for (var v = m * i - u, y = Math.max(0, v), b = Math.min(t.inWidth, o + v), w = Number.NEGATIVE_INFINITY, x = -1, A = f; A < g; ++A) for (var E = A - d, _ = y; _ < b; ++_) {
                                var T = _ - v, S = e.get(l, A, _, p);
                                S > w && (w = S, x = E * o + T)
                            }
                            n.set(x, l, h, m, p)
                        }
                        return n.toTensor()
                    }, e.prototype.maxPoolBackprop = function (e, t, n, r) {
                        for (var i = this.maxPoolPositions(t, r), a = r.strideHeight, o = r.strideWidth, s = r.filterHeight, u = r.filterWidth, l = u - 1 - r.padInfo.left, p = s - 1 - r.padInfo.top, h = c.buffer(t.shape, "float32"), d = 0; d < r.batchSize; ++d) for (var f = 0; f < r.inChannels; ++f) for (var g = 0; g < r.inHeight; ++g) for (var m = 0; m < r.inWidth; ++m) {
                            for (var v = g - p, y = m - l, b = 0, w = 0; w < s; ++w) {
                                var x = (v + w) / a;
                                if (!(x < 0 || x >= r.outHeight || Math.floor(x) !== x)) for (var A = 0; A < u; ++A) {
                                    var E = (y + A) / o;
                                    if (!(E < 0 || E >= r.outWidth || Math.floor(E) !== E)) {
                                        var _ = s * u - 1 - i.get(d, x, E, f) === w * u + A ? 1 : 0;
                                        0 !== _ && (b += e.get(d, x, E, f) * _)
                                    }
                                }
                            }
                            h.set(b, d, g, m, f)
                        }
                        return h.toTensor()
                    }, e.prototype.avgPoolBackprop = function (e, t, n) {
                        for (var r = n.strideHeight, i = n.strideWidth, a = n.filterHeight, o = n.filterWidth, s = o - 1 - n.padInfo.left, u = a - 1 - n.padInfo.top, l = c.buffer(t.shape, "float32"), p = 1 / (a * o), h = 0; h < n.batchSize; ++h) for (var d = 0; d < n.inChannels; ++d) for (var f = 0; f < n.inHeight; ++f) for (var g = 0; g < n.inWidth; ++g) {
                            for (var m = f - u, v = g - s, y = 0, b = 0; b < a; ++b) {
                                var w = (m + b) / r;
                                if (!(w < 0 || w >= n.outHeight || Math.floor(w) !== w)) for (var x = 0; x < o; ++x) {
                                    var A = (v + x) / i;
                                    A < 0 || A >= n.outWidth || Math.floor(A) !== A || (y += e.get(h, w, A, d))
                                }
                            }
                            l.set(y * p, h, f, g, d)
                        }
                        return l.toTensor()
                    }, e.prototype.cast = function (e, t) {
                        return v.castTensor(e, t, this)
                    }, e.prototype.reshape = function (e, t) {
                        return v.reshapeTensor(e, t)
                    }, e.prototype.avgPool = function (e, t) {
                        return this.pool(e, t, "avg").toFloat()
                    }, e.prototype.resizeBilinear = function (e, t, n, r) {
                        for (var i = e.shape, a = i[0], o = i[1], s = i[2], u = i[3], l = c.buffer([a, t, n, u], e.dtype), p = r ? [o - 1, s - 1] : [o, s], h = r ? [t - 1, n - 1] : [t, n], d = 0; d < a; d++) for (var f = 0; f < t; f++) for (var g = 0; g < n; g++) for (var m = 0; m < u; m++) {
                            var v = p[0] * f / h[0], y = p[1] * g / h[1], b = Math.floor(v),
                                w = Math.min(o - 1, Math.ceil(v)), x = Math.floor(y), A = Math.min(s - 1, Math.ceil(y)),
                                E = e.get(d, b, x, m), _ = e.get(d, w, x, m), T = y - x,
                                S = E + (e.get(d, b, A, m) - E) * T,
                                C = S + (_ + (e.get(d, w, A, m) - _) * T - S) * (v - b);
                            l.set(C, d, f, g, m)
                        }
                        return l.toTensor()
                    }, e.prototype.resizeNearestNeighbor = function (e, t, n, r) {
                        for (var i = e.shape, a = i[0], o = i[1], s = i[2], u = i[3], l = c.buffer([a, t, n, u], e.dtype), p = r ? [o - 1, s - 1] : [o, s], h = r ? [t - 1, n - 1] : [t, n], d = 0; d < a; d++) for (var f = 0; f < t; f++) for (var g = 0; g < n; g++) for (var m = 0; m < u; m++) {
                            var v = p[0] * f / h[0], y = p[1] * g / h[1], b = Math.min(o - 1, Math.round(v)),
                                w = Math.min(s - 1, Math.round(y)), x = e.get(d, b, w, m);
                            l.set(x, d, f, g, m)
                        }
                        return l.toTensor()
                    }, e.prototype.batchNormalization = function (e, t, n, r, i, a) {
                        for (var o = e.dataSync(), s = t.dataSync(), u = n.dataSync(), l = i ? i.dataSync() : new Float32Array([1]), c = a ? a.dataSync() : new Float32Array([0]), h = new Float32Array(o.length), d = 0; d < o.length; d++) h[d] = c[d % c.length] + (o[d] - s[d % s.length]) * l[d % l.length] / Math.sqrt(u[d % u.length] + r);
                        return p.tensor4d(h, e.shape)
                    }, e.prototype.localResponseNormalization4D = function (e, t, n, r, i) {
                        for (var a = c.buffer(e.shape, "float32"), o = t, s = a.shape[3] - 1, u = 0; u < a.shape[0]; u++) for (var l = 0; l <= a.shape[1]; l++) for (var p = 0; p < a.shape[2]; p++) for (var h = 0; h < a.shape[3]; h++) {
                            var d = function (t, n, r, i) {
                                for (var a = 0, u = Math.max(0, i - o); u <= Math.min(i + o, s); u++) {
                                    var l = e.get(t, n, r, u);
                                    a += l * l
                                }
                                return a
                            }(u, l, p, h), f = e.get(u, l, p, h) * Math.pow(n + r * d, -i);
                            a.set(f, u, l, p, h)
                        }
                        return a.toTensor()
                    }, e.prototype.multinomial = function (e, t, n, r) {
                        for (var i = t ? e : c.softmax(e), o = i.shape[0], s = i.shape[1], u = c.zeros([o, n], "int32"), l = u.dataSync(), p = i.dataSync(), h = 0; h < o; ++h) {
                            var d = h * s, f = new Float32Array(s - 1);
                            f[0] = p[d];
                            for (var g = 1; g < f.length; ++g) f[g] = f[g - 1] + p[d + g];
                            for (var m = a.alea(r.toString()), v = h * n, y = 0; y < n; ++y) {
                                var b = m();
                                l[v + y] = f.length;
                                for (var w = 0; w < f.length; w++) if (b < f[w]) {
                                    l[v + y] = w;
                                    break
                                }
                            }
                        }
                        return u
                    }, e.prototype.oneHot = function (e, t, n, r) {
                        var i = new Float32Array(e.size * t);
                        i.fill(r);
                        for (var a = 0; a < e.size; ++a) i[a * t + e.get(a)] = n;
                        return c.tensor2d(i, [e.size, t])
                    }, e.prototype.broadcastedBinaryOp = function (e, t, n, r) {
                        for (var i = u.assertAndGetBroadcastShape(e.shape, t.shape), a = c.buffer(i, n), o = e.dataSync(), s = t.dataSync(), l = u.getBroadcastDims(e.shape, i), p = u.getBroadcastDims(t.shape, i), h = e.buffer(), d = t.buffer(), f = 0; f < a.values.length; ++f) !function (n) {
                            var i = a.indexToLoc(n), u = i.slice(-e.rank);
                            l.forEach(function (e) {
                                return u[e] = 0
                            });
                            var c = h.locToIndex(u), f = i.slice(-t.rank);
                            p.forEach(function (e) {
                                return f[e] = 0
                            });
                            var g = d.locToIndex(f);
                            a.values[n] = r(o[c], s[g])
                        }(f);
                        return a.toTensor()
                    }, e.prototype.dispose = function () {
                    },e
                }();
            n.MathBackendCPU = y, o.ENV.registerBackend("cpu", function () {
                return new y
            }, 1)
        }, {
            "../environment": 5,
            "../ops/axis_util": 47,
            "../ops/broadcast_util": 50,
            "../ops/concat_util": 53,
            "../ops/erf_util": 56,
            "../ops/ops": 66,
            "../ops/selu_util": 72,
            "../tensor": 89,
            "../types": 94,
            "../util": 95,
            "./backend_util": 10,
            seedrandom: 135
        }],
        10: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e(".."), i = e("../ops/array_ops");
            n.castTensor = function (e, t, n) {
                if (!r.util.hasEncodingLoss(e.dtype, t)) return r.Tensor.make(e.shape, {dataId: e.dataId}, t);
                if ("int32" === t) return n.int(e);
                if ("bool" === t) return n.notEqual(e, i.ArrayOps.scalar(0, e.dtype));
                throw new Error("Error in Cast: unknown dtype argument (" + t + ")")
            }, n.reshapeTensor = function (e, t) {
                return r.Tensor.make(t, {dataId: e.dataId}, e.dtype)
            }
        }, {"..": 8, "../ops/array_ops": 46}],
        11: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                if ("float32" === t) return e;
                if ("int32" === t || "bool" === t) {
                    for (var n = "int32" === t ? new Int32Array(e.length) : new Uint8Array(e.length), r = 0; r < n.length; ++r) n[r] = Math.round(e[r]);
                    return n
                }
                throw new Error("Unknown dtype " + t)
            }

            function i(e, t) {
                return e instanceof Float32Array ? e : new Float32Array(e)
            }

            var a = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, o = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var s = e("../environment"), u = e("../ops/axis_util"), l = e("../ops/ops"), c = e("../ops/reduce_util"),
                p = e("../tensor"), h = e("../types"), d = e("../util"), f = e("./backend_util"),
                g = e("./webgl/argminmax_gpu"), m = e("./webgl/avg_pool_backprop_gpu"), v = e("./webgl/batchnorm_gpu"),
                y = e("./webgl/binaryop_gpu"), b = e("./webgl/binaryop_gpu"), w = e("./webgl/clip_gpu"),
                x = e("./webgl/concat_gpu"), A = e("./webgl/conv_backprop_gpu"), E = e("./webgl/conv_gpu"),
                _ = e("./webgl/conv_gpu_depthwise"), T = e("./webgl/from_pixels_gpu"), S = e("./webgl/gather_gpu"),
                C = e("./webgl/gpgpu_context"), O = e("./webgl/gpgpu_math"), k = e("./webgl/logical_gpu"),
                N = e("./webgl/lrn_gpu"), R = e("./webgl/max_pool_backprop_gpu"), I = e("./webgl/mulmat_gpu"),
                z = e("./webgl/multinomial_gpu"), M = e("./webgl/onehot_gpu"), D = e("./webgl/pad_gpu"),
                P = e("./webgl/pool_gpu"), L = e("./webgl/reduce_gpu"), F = e("./webgl/resize_bilinear_gpu"),
                V = e("./webgl/resize_nearest_neighbor_gpu"), B = e("./webgl/reverse_gpu"), U = e("./webgl/slice_gpu"),
                j = e("./webgl/tex_util"), G = e("./webgl/texture_manager"), W = e("./webgl/tile_gpu"),
                q = e("./webgl/transpose_gpu"), H = e("./webgl/unaryop_gpu"), K = e("./webgl/unaryop_gpu"),
                X = e("./webgl/webgl_util"), Y = function () {
                    function e(e, t) {
                        if (void 0 === t && (t = !0), this.gpgpu = e, this.delayedStorage = t, this.texData = new WeakMap, this.uploadWaitMs = 0, this.downloadWaitMs = 0, this.binaryCache = {}, this.disposed = !1, s.ENV.get("WEBGL_VERSION") < 1) throw new Error("WebGL is not supported on this device");
                        null == e ? (this.gpgpu = new C.GPGPUContext, this.gpgpuCreatedLocally = !0) : this.gpgpuCreatedLocally = !1, "undefined" != typeof document && (this.canvas = document.createElement("canvas")), this.textureManager = new G.TextureManager(this.gpgpu)
                    }

                    return e.prototype.register = function (e, t, n) {
                        if (this.texData.has(e)) throw new Error("Data buffer is already registered");
                        this.texData.set(e, {
                            shape: t,
                            dtype: n,
                            values: null,
                            texture: null,
                            texShape: null,
                            texType: j.TextureType.FLOAT
                        })
                    }, e.prototype.fromPixels = function (e, t) {
                        if (null == e) throw new Error("MathBackendWebGL.writePixels(): pixels can not be null");
                        var n = [e.height, e.width], r = [e.height, e.width, t];
                        if (e instanceof HTMLVideoElement) {
                            if (null == this.canvas) throw new Error("Can't read pixels from HTMLImageElement outside the browser.");
                            this.canvas.width = e.width, this.canvas.height = e.height, this.canvas.getContext("2d").drawImage(e, 0, 0, e.width, e.height), e = this.canvas
                        }
                        var i = p.Tensor.make(n, {}, "int32");
                        this.texData.get(i.dataId).texType = j.TextureType.UNSIGNED_BYTE, this.gpgpu.uploadPixelDataToTexture(this.getTexture(i.dataId), e);
                        var a = new T.FromPixelsProgram(r), o = this.compileAndRun(a, [i]);
                        return i.dispose(), o
                    }, e.prototype.write = function (e, t) {
                        if (null == t) throw new Error("MathBackendWebGL.write(): values can not be null");
                        this.throwIfNoData(e);
                        var n = this.texData.get(e), r = n.texture, i = n.texShape, a = n.texType;
                        null != r && (this.textureManager.releaseTexture(r, i, a), n.texture = null, n.texShape = null), n.values = t, this.delayedStorage || this.uploadToGPU(e)
                    }, e.prototype.readSync = function (e) {
                        this.throwIfNoData(e);
                        var t = this.texData.get(e), n = t.texture, r = t.values, i = t.texShape;
                        if (null != r) return this.cacheOnCPU(e), r;
                        var a, o = null != this.activeTimers;
                        o && (a = performance.now());
                        var s = this.gpgpu.downloadMatrixFromTexture(n, i[0], i[1]);
                        return o && (this.downloadWaitMs += performance.now() - a), this.cacheOnCPU(e, s), t.values
                    }, e.prototype.read = function (e) {
                        return a(this, void 0, void 0, function () {
                            var t, n, r, i, a;
                            return o(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        return this.throwIfNoData(e), t = this.texData.get(e), n = t.texture, r = t.values, i = t.texShape, null != r ? (this.cacheOnCPU(e), [2, r]) : s.ENV.get("WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED") ? [4, this.gpgpu.downloadMatrixFromTextureAsync(n, i[0], i[1])] : [3, 2];
                                    case 1:
                                        return a = o.sent(), this.cacheOnCPU(e, a), [2, t.values];
                                    case 2:
                                        return 0 === s.ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? [2, this.readSync(e)] : [4, this.gpgpu.runQuery(function () {
                                        })];
                                    case 3:
                                        return o.sent(), [2, this.readSync(e)]
                                }
                            })
                        })
                    }, e.prototype.time = function (e) {
                        return a(this, void 0, void 0, function () {
                            var t, n, r, i, a, s;
                            return o(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        return t = this.activeTimers, n = [], r = !1, null == this.programTimersStack ? (this.programTimersStack = n, r = !0) : this.activeTimers.push(n), this.activeTimers = n, e(), i = d.flatten(this.activeTimers), this.activeTimers = t, r && (this.programTimersStack = null), [4, Promise.all(i).then(function (e) {
                                            var t = 0;
                                            return e.forEach(function (e) {
                                                return t += e
                                            }), t
                                        })];
                                    case 1:
                                        return a = o.sent(), s = {
                                            uploadWaitMs: this.uploadWaitMs,
                                            downloadWaitMs: this.downloadWaitMs,
                                            kernelMs: a,
                                            wallMs: null
                                        }, this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, s]
                                }
                            })
                        })
                    }, e.prototype.memory = function () {
                        return {unreliable: !1}
                    }, e.prototype.startTimer = function () {
                        return s.ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? this.gpgpu.beginQuery() : {
                            startMs: performance.now(),
                            endMs: null
                        }
                    }, e.prototype.endTimer = function (e) {
                        return s.ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? (this.gpgpu.endQuery(), e) : (e.endMs = performance.now(), e)
                    }, e.prototype.getQueryTime = function (e) {
                        return a(this, void 0, void 0, function () {
                            var t;
                            return o(this, function (n) {
                                return s.ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? [2, this.gpgpu.pollQueryTime(e)] : (t = e, [2, t.endMs - t.startMs])
                            })
                        })
                    }, e.prototype.disposeData = function (e) {
                        if (this.texData.has(e)) {
                            var t = this.texData.get(e), n = t.texture, r = t.texShape, i = t.texType;
                            null != n && this.textureManager.releaseTexture(n, r, i), this.texData.delete(e)
                        }
                    }, e.prototype.getTexture = function (e) {
                        return this.uploadToGPU(e), this.texData.get(e).texture
                    }, e.prototype.getTextureData = function (e) {
                        return this.uploadToGPU(e), this.texData.get(e)
                    }, e.prototype.getGPGPUContext = function () {
                        return this.gpgpu
                    }, e.prototype.slice = function (e, t, n) {
                        var r = new U.SliceProgram(n), i = r.getCustomSetupFunc(t);
                        return this.compileAndRun(r, [e], null, i)
                    }, e.prototype.reverse = function (e, t) {
                        var n = new B.ReverseProgram(e.shape, t);
                        return this.compileAndRun(n, [e])
                    }, e.prototype.concat = function (e, t) {
                        var n = new x.ConcatProgram(e.shape, t.shape);
                        return this.compileAndRun(n, [e, t])
                    }, e.prototype.neg = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.NEG);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.matMul = function (e, t, n, r) {
                        var i = new I.MatMulProgram(e.shape, t.shape, n, r);
                        return this.compileAndRun(i, [e, t])
                    }, e.prototype.multiply = function (e, t) {
                        var n = new b.BinaryOpProgram(y.MUL, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, h.upcastType(e.dtype, t.dtype));
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.batchNormalization = function (e, t, n, r, i, a) {
                        var o = [e, t, n], s = null;
                        null != a && (s = a.shape, o.push(a));
                        var u = null;
                        null != i && (u = i.shape, o.push(i));
                        var l = new v.BatchNormProgram(e.shape, t.shape, n.shape, s, u, r);
                        return this.compileAndRun(l, o)
                    }, e.prototype.localResponseNormalization4D = function (e, t, n, r, i) {
                        var a = new N.LRNProgram(e.shape, t, n, r, i);
                        return this.compileAndRun(a, [e])
                    }, e.prototype.tile = function (e, t) {
                        var n = new W.TileProgram(e.shape, t);
                        return this.compileAndRun(n, [e])
                    }, e.prototype.pad = function (e, t, n) {
                        var r = new D.PadProgram(e.shape, t, n);
                        return this.compileAndRun(r, [e])
                    }, e.prototype.transpose = function (e, t) {
                        var n = new q.TransposeProgram(e.shape, t);
                        return this.compileAndRun(n, [e])
                    }, e.prototype.gather = function (e, t, n) {
                        var r = new S.GatherProgram(e.shape, t.size, n);
                        return this.compileAndRun(r, [e, t])
                    }, e.prototype.reduce = function (e, t, n) {
                        var r = e.shape[0], i = e.shape[1],
                            a = {windowSize: c.computeOptimalWindowSize(i), inSize: i, batchSize: r},
                            o = new L.ReduceProgram(a, t), s = o.outputShape, u = s[0], l = s[1],
                            p = this.makeOutputArray([u, l], n);
                        return this.compileAndRun(o, [e], p), 1 === p.shape[1] ? p : this.reduce(p, t, n)
                    }, e.prototype.argReduce = function (e, t, n) {
                        void 0 === n && (n = null);
                        var r = e.shape[0], i = e.shape[1];
                        null != n && (r = n.shape[0], i = n.shape[1]);
                        var a = {windowSize: c.computeOptimalWindowSize(i), inSize: i, batchSize: r},
                            o = new g.ArgMinMaxProgram(a, t, null == n), s = o.outputShape, u = s[0], l = s[1],
                            p = this.makeOutputArray([u, l], "int32"), h = [e];
                        return null != n && h.push(n), this.compileAndRun(o, h, p), 1 === p.shape[1] ? p : this.argReduce(e, t, p)
                    }, e.prototype.sum = function (e, t) {
                        u.assertAxesAreInnerMostDims("sum", t, e.rank);
                        var n = u.computeOutAndReduceShapes(e.shape, t), r = n[0], i = n[1], a = d.sizeFromShape(i),
                            o = e.as2D(-1, a), s = h.sumOutType(e.dtype);
                        return this.reduce(o, "sum", s).reshape(r)
                    }, e.prototype.argMin = function (e, t) {
                        var n = [t];
                        u.assertAxesAreInnerMostDims("argMin", n, e.rank);
                        var r = u.computeOutAndReduceShapes(e.shape, n), i = r[0], a = r[1], o = d.sizeFromShape(a),
                            s = e.as2D(-1, o);
                        return this.argReduce(s, "min").reshape(i)
                    }, e.prototype.argMax = function (e, t) {
                        var n = [t];
                        u.assertAxesAreInnerMostDims("argMax", n, e.rank);
                        var r = u.computeOutAndReduceShapes(e.shape, n), i = r[0], a = r[1], o = d.sizeFromShape(a),
                            s = e.as2D(-1, o);
                        return this.argReduce(s, "max").reshape(i)
                    }, e.prototype.equal = function (e, t) {
                        var n = new b.BinaryOpProgram(y.EQUAL, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, "bool");
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.notEqual = function (e, t) {
                        var n = new b.BinaryOpProgram(y.NOT_EQUAL, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, "bool");
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.less = function (e, t) {
                        var n = new b.BinaryOpProgram(y.LESS, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, "bool");
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.lessEqual = function (e, t) {
                        var n = new b.BinaryOpProgram(y.LESS_EQUAL, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, "bool");
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.greater = function (e, t) {
                        var n = new b.BinaryOpProgram(y.GREATER, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, "bool");
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.greaterEqual = function (e, t) {
                        var n = new b.BinaryOpProgram(y.GREATER_EQUAL, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, "bool");
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.logicalNot = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.LOGICAL_NOT);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.logicalAnd = function (e, t) {
                        var n = new b.BinaryOpProgram(y.LOGICAL_AND, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, "bool");
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.logicalOr = function (e, t) {
                        var n = new b.BinaryOpProgram(y.LOGICAL_OR, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, "bool");
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.where = function (e, t, n, r) {
                        var i = new k.WhereProgram(e.rank, t.shape, t.rank), a = this.makeOutputArray(i.outputShape, r);
                        return this.compileAndRun(i, [e, t, n], a)
                    }, e.prototype.topKValues = function (e, t) {
                        throw new Error("topKValues GPU not yet implemented!")
                    }, e.prototype.topKIndices = function (e, t) {
                        throw new Error("topKIndices GPU not yet implemented!")
                    }, e.prototype.min = function (e, t) {
                        u.assertAxesAreInnerMostDims("min", t, e.rank);
                        var n = u.computeOutAndReduceShapes(e.shape, t), r = n[0], i = n[1], a = d.sizeFromShape(i),
                            o = e.as2D(-1, a);
                        return this.reduce(o, "min", o.dtype).reshape(r)
                    }, e.prototype.minimum = function (e, t) {
                        var n = new b.BinaryOpProgram(y.MIN, e.shape, t.shape);
                        return this.compileAndRun(n, [e, t])
                    }, e.prototype.mod = function (e, t) {
                        var n = new b.BinaryOpProgram(y.MOD, e.shape, t.shape);
                        return this.compileAndRun(n, [e, t])
                    }, e.prototype.max = function (e, t) {
                        u.assertAxesAreInnerMostDims("max", t, e.rank);
                        var n = u.computeOutAndReduceShapes(e.shape, t), r = n[0], i = n[1], a = d.sizeFromShape(i),
                            o = e.as2D(-1, a);
                        return this.reduce(o, "max", o.dtype).reshape(r)
                    }, e.prototype.maximum = function (e, t) {
                        var n = new b.BinaryOpProgram(y.MAX, e.shape, t.shape);
                        return this.compileAndRun(n, [e, t])
                    }, e.prototype.squaredDifference = function (e, t) {
                        var n = new b.BinaryOpProgram(y.SQUARED_DIFFERENCE, e.shape, t.shape);
                        return this.compileAndRun(n, [e, t])
                    }, e.prototype.divide = function (e, t) {
                        var n, r;
                        "int32" === e.dtype && "int32" === t.dtype ? (n = y.INT_DIV, r = "int32") : (n = y.DIV, r = "float32");
                        var i = new b.BinaryOpProgram(n, e.shape, t.shape), a = this.makeOutputArray(i.outputShape, r);
                        return this.compileAndRun(i, [e, t], a)
                    }, e.prototype.add = function (e, t) {
                        var n = new b.BinaryOpProgram(y.ADD, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, h.upcastType(e.dtype, t.dtype));
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.subtract = function (e, t) {
                        var n = new b.BinaryOpProgram(y.SUB, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, h.upcastType(e.dtype, t.dtype));
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.pow = function (e, t) {
                        var n = new b.BinaryOpProgram(y.POW, e.shape, t.shape),
                            r = this.makeOutputArray(n.outputShape, h.upcastType(e.dtype, t.dtype));
                        return this.compileAndRun(n, [e, t], r)
                    }, e.prototype.ceil = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.CEIL);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.floor = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.FLOOR);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.sign = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.SIGN);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.round = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ROUND);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.exp = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.EXP);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.expm1 = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.EXPM1);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.log = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.LOG);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.log1p = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.LOG1P);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.sqrt = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.SQRT);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.rsqrt = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.RSQRT);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.square = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.SQUARE);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.reciprocal = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.RECIPROCAL);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.relu = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.RELU);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.elu = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ELU);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.eluDer = function (e, t) {
                        var n = new b.BinaryOpProgram(y.ELU_DER, e.shape, t.shape);
                        return this.compileAndRun(n, [e, t])
                    }, e.prototype.selu = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.SELU);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.int = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.TO_INT), n = this.makeOutputArray(t.outputShape, "int32");
                        return this.compileAndRun(t, [e], n)
                    }, e.prototype.clip = function (e, t, n) {
                        var r = new w.ClipProgram(e.shape, t, n);
                        return this.compileAndRun(r, [e])
                    }, e.prototype.abs = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ABS);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.sigmoid = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.SIGMOID);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.softplus = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.SOFTPLUS);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.sin = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.SIN);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.cos = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.COS);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.tan = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.TAN);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.asin = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ASIN);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.acos = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ACOS);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.atan = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ATAN);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.atan2 = function (e, t) {
                        var n = new b.BinaryOpProgram(y.ATAN2, e.shape, t.shape);
                        return this.compileAndRun(n, [e, t])
                    }, e.prototype.sinh = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.SINH);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.cosh = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.COSH);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.tanh = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.TANH);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.asinh = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ASINH);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.acosh = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ACOSH);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.atanh = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ATANH);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.erf = function (e) {
                        var t = new K.UnaryOpProgram(e.shape, H.ERF);
                        return this.compileAndRun(t, [e])
                    }, e.prototype.step = function (e, t) {
                        var n = new K.UnaryOpProgram(e.shape, H.STEP(t));
                        return this.compileAndRun(n, [e])
                    }, e.prototype.conv2d = function (e, t, n) {
                        var r = new E.Conv2DProgram(n);
                        return this.compileAndRun(r, [e, t])
                    }, e.prototype.conv2dDerInput = function (e, t, n) {
                        var r = new A.Conv2DDerInputProgram(n);
                        return this.compileAndRun(r, [e, t])
                    }, e.prototype.conv2dDerFilter = function (e, t, n) {
                        var r = new A.Conv2DDerFilterProgram(n);
                        return this.compileAndRun(r, [e, t])
                    }, e.prototype.depthwiseConv2D = function (e, t, n) {
                        var r = new _.DepthwiseConv2DProgram(n);
                        return this.compileAndRun(r, [e, t])
                    }, e.prototype.maxPool = function (e, t) {
                        var n = new P.Pool2DProgram(t, "max", !1), r = this.makeOutputArray(n.outputShape, e.dtype);
                        return this.compileAndRun(n, [e], r)
                    }, e.prototype.avgPool = function (e, t) {
                        var n = new P.Pool2DProgram(t, "avg", !1), r = this.makeOutputArray(n.outputShape, "float32");
                        return this.compileAndRun(n, [e], r)
                    }, e.prototype.maxPoolBackprop = function (e, t, n, r) {
                        var i = new P.Pool2DProgram(r, "max", !0), a = this.compileAndRun(i, [t]),
                            o = new R.MaxPool2DBackpropProgram(r), s = this.makeOutputArray(o.outputShape, t.dtype),
                            u = this.compileAndRun(o, [e, a], s);
                        return a.dispose(), u
                    }, e.prototype.avgPoolBackprop = function (e, t, n) {
                        var r = new m.AvgPool2DBackpropProgram(n), i = this.makeOutputArray(r.outputShape, t.dtype);
                        return this.compileAndRun(r, [e], i)
                    }, e.prototype.cast = function (e, t) {
                        return f.castTensor(e, t, this)
                    }, e.prototype.reshape = function (e, t) {
                        return f.reshapeTensor(e, t)
                    }, e.prototype.resizeBilinear = function (e, t, n, r) {
                        var i = new F.ResizeBilinearProgram(e.shape, t, n, r);
                        return this.compileAndRun(i, [e])
                    }, e.prototype.resizeNearestNeighbor = function (e, t, n, r) {
                        var i = new V.ResizeNearestNeighborProgram(e.shape, t, n, r);
                        return this.compileAndRun(i, [e])
                    },e.prototype.multinomial = function (e, t, n, r) {
                        var i = t ? e : l.softmax(e), a = i.shape[0], o = i.shape[1], s = new z.MultinomialProgram(a, o, n),
                            u = this.makeOutputArray(s.outputShape, "int32"), c = s.getCustomSetupFunc(r);
                        return this.compileAndRun(s, [i], u, c)
                    },e.prototype.oneHot = function (e, t, n, r) {
                        var i = new M.OneHotProgram(e.size, t, n, r);
                        return this.compileAndRun(i, [e])
                    },e.prototype.makeOutputArray = function (e, t) {
                        return p.Tensor.make(e, {}, t)
                    },e.prototype.compileAndRun = function (e, t, n, r) {
                        var i = this;
                        null == n && (n = this.makeOutputArray(e.outputShape, t[0].dtype));
                        var a = t.map(function (e) {
                            return i.uploadToGPU(e.dataId), {tensor: e, texData: i.texData.get(e.dataId)}
                        });
                        this.uploadToGPU(n.dataId);
                        var o, s = {tensor: n, texData: this.texData.get(n.dataId)}, u = O.makeShaderKey(e, a, s),
                            l = this.getAndSaveBinary(u, function () {
                                return O.compileProgram(i.gpgpu, e, a, s)
                            }), c = null != this.activeTimers;
                        return c && (o = this.startTimer()), O.runProgram(l, a, s, r), c && (o = this.endTimer(o), this.activeTimers.push(this.getQueryTime(o))), n
                    },e.prototype.getAndSaveBinary = function (e, t) {
                        return e in this.binaryCache || (this.binaryCache[e] = t()), this.binaryCache[e]
                    },e.prototype.getTextureManager = function () {
                        return this.textureManager
                    },e.prototype.dispose = function () {
                        if (!this.disposed) {
                            for (var e in this.binaryCache) this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram);
                            this.textureManager.dispose(), this.canvas.remove(), this.gpgpuCreatedLocally && this.gpgpu.dispose(), this.disposed = !0
                        }
                    },e.prototype.throwIfNoData = function (e) {
                        if (!this.texData.has(e)) throw new Error("WebGL backend: No data found for this tensor. Did you change your backend in the middle of the program? New backends can't use Tensors created with previous backends")
                    },e.prototype.uploadToGPU = function (e) {
                        this.throwIfNoData(e);
                        var t = this.texData.get(e), n = t.shape, r = t.values, a = t.texture, o = (t.dtype, t.texType);
                        if (null == a) {
                            var s, u = null != this.activeTimers;
                            u && (s = performance.now());
                            var l = X.getTextureShapeFromLogicalShape(this.gpgpu.gl, n);
                            t.texShape = l;
                            var c = this.textureManager.acquireTexture(l, o);
                            t.texture = c, null != r && (this.gpgpu.uploadMatrixToTexture(c, l[0], l[1], i(r)), t.values = null, u && (this.uploadWaitMs += performance.now() - s))
                        }
                    },e.prototype.cacheOnCPU = function (e, t) {
                        var n = this.delayedStorage, i = this.texData.get(e), a = i.texture, o = i.texShape, s = i.dtype,
                            u = i.texType;
                        n && null != a && (this.textureManager.releaseTexture(a, o, u), i.texture = null, i.texShape = null), null != t && (i.values = r(t, s))
                    },e
                }();
            n.MathBackendWebGL = Y, s.ENV.registerBackend("webgl", function () {
                return new Y
            }, 2)
        }, {
            "../environment": 5,
            "../ops/axis_util": 47,
            "../ops/ops": 66,
            "../ops/reduce_util": 69,
            "../tensor": 89,
            "../types": 94,
            "../util": 95,
            "./backend_util": 10,
            "./webgl/argminmax_gpu": 12,
            "./webgl/avg_pool_backprop_gpu": 13,
            "./webgl/batchnorm_gpu": 14,
            "./webgl/binaryop_gpu": 15,
            "./webgl/clip_gpu": 16,
            "./webgl/concat_gpu": 17,
            "./webgl/conv_backprop_gpu": 18,
            "./webgl/conv_gpu": 19,
            "./webgl/conv_gpu_depthwise": 20,
            "./webgl/from_pixels_gpu": 21,
            "./webgl/gather_gpu": 22,
            "./webgl/gpgpu_context": 23,
            "./webgl/gpgpu_math": 24,
            "./webgl/logical_gpu": 26,
            "./webgl/lrn_gpu": 27,
            "./webgl/max_pool_backprop_gpu": 28,
            "./webgl/mulmat_gpu": 29,
            "./webgl/multinomial_gpu": 30,
            "./webgl/onehot_gpu": 31,
            "./webgl/pad_gpu": 32,
            "./webgl/pool_gpu": 33,
            "./webgl/reduce_gpu": 34,
            "./webgl/resize_bilinear_gpu": 35,
            "./webgl/resize_nearest_neighbor_gpu": 36,
            "./webgl/reverse_gpu": 37,
            "./webgl/slice_gpu": 39,
            "./webgl/tex_util": 40,
            "./webgl/texture_manager": 41,
            "./webgl/tile_gpu": 42,
            "./webgl/transpose_gpu": 43,
            "./webgl/unaryop_gpu": 44,
            "./webgl/webgl_util": 45
        }],
        12: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t, n) {
                    this.variableNames = ["A"];
                    var r = e.windowSize, i = e.batchSize, a = e.inSize, o = Math.ceil(a / r);
                    n || this.variableNames.push("bestIndicesA"), this.outputShape = [i, o];
                    var s = "max" === t ? ">" : "<",
                        u = n ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
                    this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r + ";\n\n        int bestIndex = 0;\n        float bestValue = getA(batch, inOffset);\n\n        for (int i = 0; i < " + r + "; i++) {\n          int inIdx = " + u + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + s + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    "
                }
            }();
            n.ArgMinMaxProgram = r
        }, {}],
        13: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e) {
                    this.variableNames = ["dy"], this.outputShape = e.inShape;
                    var t = e.filterHeight, n = e.filterWidth, r = e.strideHeight, i = e.strideWidth,
                        a = t - 1 - e.padInfo.top, o = n - 1 - e.padInfo.left, s = 1 / (t * n);
                    this.userCode = "\n      const ivec2 pads = ivec2(" + a + ", " + o + ");\n      const float avgMultiplier = float(" + s + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + t + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + i + ".0;\n\n            if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
                }
            }();
            n.AvgPool2DBackpropProgram = r
        }, {}],
        14: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../../ops/broadcast_util"), i = function () {
                return function (e, t, n, i, a, o) {
                    this.outputShape = [], this.supportsBroadcasting = !0, this.variableNames = ["x", "mean", "variance"], r.assertAndGetBroadcastShape(e, t), r.assertAndGetBroadcastShape(e, n);
                    var s = "0.0";
                    null != i && (r.assertAndGetBroadcastShape(e, i), this.variableNames.push("offset"), s = "getOffsetAtOutCoords()");
                    var u = "1.0";
                    null != a && (r.assertAndGetBroadcastShape(e, a), this.variableNames.push("scale"), u = "getScaleAtOutCoords()"), this.outputShape = e, this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + s + ";\n        float scale = " + u + ";\n        float inv = scale / sqrt(variance + float(" + o + "));\n        setOutput((x - mean) * inv + offset);\n      }\n    "
                }
            }();
            n.BatchNormProgram = i
        }, {"../../ops/broadcast_util": 50}],
        15: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../../ops/broadcast_util"), i = "\n  if (isNaN(a)) return a;\n  if (isNaN(b)) return b;\n";
            n.ADD = "return a + b;", n.SUB = "return a - b;", n.MUL = "return a * b;", n.DIV = "return a / b;", n.INT_DIV = "\n  float resultSign = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  int result = ia / ib;\n  int amodb = ia - ib * result;\n\n  if (resultSign < 0.0 && amodb != 0) {\n    result -= 1;\n  }\n  return float(result);\n", n.POW = "\n  return (round(mod(b, 2.0)) == 0 || round(mod(b, 2.0)) == 2) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n", n.SQUARED_DIFFERENCE = "return (a - b) * (a - b);", n.EQUAL = "return float(a == b);", n.NOT_EQUAL = "return float(a != b);", n.LESS = "return float(a < b);", n.LESS_EQUAL = "return float(a <= b);", n.GREATER = "return float(a > b);", n.GREATER_EQUAL = "return float(a >= b);", n.LOGICAL_AND = "return float(a >= 1.0 && b >= 1.0);", n.LOGICAL_OR = "return float(a >= 1.0 || b >= 1.0);", n.MAX = i + "\n  return max(a, b);\n", n.MIN = i + "\n  return min(a, b);\n", n.MOD = "return mod(a, b);", n.ATAN2 = i + "\n  return atan(a, b);\n", n.ELU_DER = "return (b >= 1.0) ? a : a * (b + 1.0);";
            var a = function () {
                return function (e, t, n) {
                    this.variableNames = ["A", "B"], this.supportsBroadcasting = !0, this.outputShape = r.assertAndGetBroadcastShape(t, n), this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + e + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    "
                }
            }();
            n.BinaryOpProgram = a
        }, {"../../ops/broadcast_util": 50}],
        16: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t, n) {
                    this.variableNames = ["A"], this.outputShape = e;
                    var r = t.toFixed(20), i = n.toFixed(20);
                    this.userCode = "\n      void main() {\n        float value = getAAtOutCoords();\n        if (isNaN(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, " + r + ", " + i + "));\n      }\n    "
                }
            }();
            n.ClipProgram = r
        }, {}],
        17: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../../ops/concat_util"), i = function () {
                return function (e, t) {
                    this.variableNames = ["A", "B"], this.outputShape = [], this.outputShape = r.computeOutShape(e, t, 1), this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        float value = 0.0;\n        if (yC < " + e[1] + ") {\n          value = getA(yR, yC);\n        } else {\n          yC -= " + e[1] + ";\n          value = getB(yR, yC);\n        }\n\n        setOutput(value);\n      }\n    "
                }
            }();
            n.ConcatProgram = i
        }, {"../../ops/concat_util": 53}],
        18: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e) {
                    this.variableNames = ["x", "dy"], this.outputShape = e.filterShape;
                    var t = e.strideHeight, n = e.strideWidth, r = e.padInfo.top, i = e.padInfo.left;
                    this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + e.batchSize + "; b++) {\n          for (int yR = 0; yR < " + e.outHeight + "; yR++) {\n            int xR = wR + yR * " + t + " - " + r + ";\n\n            if (xR < 0 || xR >= " + e.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + e.outWidth + "; yC++) {\n              int xC = wC + yC * " + n + " - " + i + ";\n\n              if (xC < 0 || xC >= " + e.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
                }
            }();
            n.Conv2DDerFilterProgram = r;
            var i = function () {
                return function (e) {
                    this.variableNames = ["dy", "W"], this.outputShape = e.inShape;
                    var t = e.filterHeight, n = e.filterWidth, r = e.strideHeight, i = e.strideWidth,
                        a = t - 1 - e.padInfo.top, o = n - 1 - e.padInfo.left;
                    this.userCode = "\n      const ivec2 pads = ivec2(" + a + ", " + o + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + t + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + t + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + i + ".0;\n\n            if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + e.outChannels + "; d2++) {\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
                }
            }();
            n.Conv2DDerInputProgram = i
        }, {}],
        19: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e) {
                    this.variableNames = ["x", "W"], this.outputShape = e.outShape;
                    var t = e.padInfo.top, n = e.padInfo.left, r = e.strideHeight, i = e.strideWidth,
                        a = e.dilationHeight, o = e.dilationWidth, s = e.filterHeight, u = e.filterWidth,
                        l = 4 * Math.floor(e.inChannels / 4), c = e.inChannels % 4;
                    this.userCode = "\n      const ivec2 strides = ivec2(" + r + ", " + i + ");\n      const ivec2 pads = ivec2(" + t + ", " + n + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s + "; wR++) {\n          int xR = xRCorner + wR * " + a + ";\n\n          if (xR < 0 || xR >= " + e.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + u + "; wC++) {\n            int xC = xCCorner + wC * " + o + ";\n\n            if (xC < 0 || xC >= " + e.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + l + "; d1 += 4) {\n              vec4 xValues = vec4(\n                getX(batch, xR, xC, d1),\n                getX(batch, xR, xC, d1 + 1),\n                getX(batch, xR, xC, d1 + 2),\n                getX(batch, xR, xC, d1 + 3)\n              );\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              dotProd += dot(xValues, wValues);\n            }\n\n            if (" + (1 === c) + ") {\n              dotProd +=\n                getX(batch, xR, xC, " + l + ") *\n                getW(wR, wC, " + l + ", d2);\n            } else if (" + (2 === c) + ") {\n              vec2 xValues = vec2(\n                getX(batch, xR, xC, " + l + "),\n                getX(batch, xR, xC, " + l + " + 1)\n              );\n              vec2 wValues = vec2(\n                getW(wR, wC, " + l + ", d2),\n                getW(wR, wC, " + l + " + 1, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            } else if (" + (3 === c) + ") {\n              vec3 xValues = vec3(\n                getX(batch, xR, xC, " + l + "),\n                getX(batch, xR, xC, " + l + " + 1),\n                getX(batch, xR, xC, " + l + " + 2)\n              );\n              vec3 wValues = vec3(\n                getW(wR, wC, " + l + ", d2),\n                getW(wR, wC, " + l + " + 1, d2),\n                getW(wR, wC, " + l + " + 2, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
                }
            }();
            n.Conv2DProgram = r
        }, {}],
        20: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e) {
                    this.variableNames = ["x", "W"], this.outputShape = e.outShape;
                    var t = e.inHeight, n = e.inWidth, r = e.padInfo.top, i = e.padInfo.left, a = e.strideHeight,
                        o = e.strideWidth, s = e.dilationHeight, u = e.dilationWidth, l = e.filterHeight,
                        c = e.filterWidth, p = e.outChannels / e.inChannels;
                    this.userCode = "\n      const ivec2 strides = ivec2(" + a + ", " + o + ");\n      const ivec2 pads = ivec2(" + r + ", " + i + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + p + ";\n        int q = d2 - d1 * " + p + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TODO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + l + "; wR++) {\n          int xR = xRCorner + wR * " + s + ";\n\n          if (xR < 0 || xR >= " + t + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + c + "; wC++) {\n            int xC = xCCorner + wC * " + u + ";\n\n            if (xC < 0 || xC >= " + n + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
                }
            }();
            n.DepthwiseConv2DProgram = r
        }, {}],
        21: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e) {
                    this.variableNames = ["A"];
                    var t = e[0], n = e[1];
                    this.outputShape = e, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + n + ".0, " + t + ".0);\n\n        vec4 values = texture2D(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    "
                }
            }();
            n.FromPixelsProgram = r
        }, {}],
        22: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                var n = e.length;
                if (n > 4) throw Error("Gather for rank " + n + " is not yet supported");
                if (1 === n) return "int(getIndices(resRC))";
                for (var r = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], i = [], a = 0; a < e.length; a++) a === t ? i.push("int(getIndices(" + r[a] + "))") : i.push("" + r[a]);
                return i.join()
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("./shader_compiler"), a = function () {
                return function (e, t, n) {
                    this.variableNames = ["A", "indices"];
                    var a = e.slice();
                    a[n] = t, this.outputShape = a, this.rank = a.length;
                    var o = i.getCoordsDataType(this.rank), s = r(e, n);
                    this.userCode = "\n      void main() {\n        " + o + " resRC = getOutputCoords();\n        setOutput(getA(" + s + "));\n      }\n    "
                }
            }();
            n.GatherProgram = a
        }, {"./shader_compiler": 38}],
        23: [function (e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, i = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("../../environment"), o = e("../../util"), s = e("./gpgpu_util"), u = e("./tex_util"),
                l = e("./webgl_util"), c = function () {
                    function e(e) {
                        this.outputTexture = null, this.program = null, this.disposed = !1, this.autoDebugValidate = !1, this.vertexAttrsAreBound = !1, this.gl = null != e ? e : s.createWebGLContext(), 1 === a.ENV.get("WEBGL_VERSION") ? (this.textureFloatExtension = l.getExtensionOrThrow(this.gl, "OES_texture_float"), this.colorBufferFloatExtension = this.gl.getExtension("WEBGL_color_buffer_float")) : this.colorBufferFloatExtension = l.getExtensionOrThrow(this.gl, "EXT_color_buffer_float"), this.loseContextExtension = l.getExtensionOrThrow(this.gl, "WEBGL_lose_context"), a.ENV.get("WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED") && (this.getBufferSubDataAsyncExtension = this.gl.getExtension("WEBGL_get_buffer_sub_data_async")), this.vertexBuffer = s.createVertexBuffer(this.gl), this.indexBuffer = s.createIndexBuffer(this.gl), this.framebuffer = l.createFramebuffer(this.gl)
                    }

                    return e.prototype.dispose = function () {
                        var e = this;
                        if (!this.disposed) {
                            null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."), null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
                            var t = this.gl;
                            l.callAndCheck(t, function () {
                                return t.finish()
                            }), l.callAndCheck(t, function () {
                                return t.bindFramebuffer(t.FRAMEBUFFER, null)
                            }), l.callAndCheck(t, function () {
                                return t.deleteFramebuffer(e.framebuffer)
                            }), l.callAndCheck(t, function () {
                                return t.bindBuffer(t.ARRAY_BUFFER, null)
                            }), l.callAndCheck(t, function () {
                                return t.deleteBuffer(e.vertexBuffer)
                            }), l.callAndCheck(t, function () {
                                return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
                            }), l.callAndCheck(t, function () {
                                return t.deleteBuffer(e.indexBuffer)
                            }), this.loseContextExtension.loseContext(), this.disposed = !0
                        }
                    }, e.prototype.enableAutomaticDebugValidation = function (e) {
                        this.autoDebugValidate = e, l.enableDebugWebGLErrorChecking(e)
                    }, e.prototype.createMatrixTexture = function (e, t) {
                        return this.throwIfDisposed(), s.createMatrixTexture(this.gl, e, t)
                    }, e.prototype.uploadPixelDataToTexture = function (e, t) {
                        this.throwIfDisposed(), s.uploadPixelDataToTexture(this.gl, e, t)
                    }, e.prototype.createPackedMatrixTexture = function (e, t) {
                        return this.throwIfDisposed(), s.createPackedMatrixTexture(this.gl, e, t)
                    }, e.prototype.deleteMatrixTexture = function (e) {
                        var t = this;
                        this.throwIfDisposed(), this.outputTexture === e && (l.unbindColorTextureFromFramebuffer(this.gl, this.framebuffer), this.outputTexture = null), l.callAndCheck(this.gl, function () {
                            return t.gl.deleteTexture(e)
                        })
                    }, e.prototype.uploadMatrixToTexture = function (e, t, n, r) {
                        this.throwIfDisposed();
                        return s.uploadMatrixToTexture(this.gl, e, t, n, r, 1)
                    }, e.prototype.uploadMatrixToPackedTexture = function (e, t, n, r) {
                        return this.throwIfDisposed(), s.uploadMatrixToPackedTexture(this.gl, e, t, n, r)
                    }, e.prototype.downloadMatrixFromTexture = function (e, t, n) {
                        var r = this;
                        return this.downloadMatrixDriver(e, function () {
                            return s.downloadMatrixFromOutputTexture(r.gl, t, n)
                        })
                    }, e.prototype.downloadMatrixFromTextureAsync = function (e, t, n) {
                        return r(this, void 0, void 0, function () {
                            var r = this;
                            return i(this, function (i) {
                                if (null == this.getBufferSubDataAsyncExtension) throw new Error("Cannot download matrix from output texture asynchronously, WEBGL_get_buffer_sub_data_async is not enabled.");
                                return [2, this.downloadMatrixDriverAsync(e, function () {
                                    return s.downloadMatrixFromOutputTextureAsync(r.gl, r.getBufferSubDataAsyncExtension, t, n)
                                })]
                            })
                        })
                    }, e.prototype.downloadMatrixFromRGBAColorTexture = function (e, t, n, r) {
                        var i = this;
                        return this.downloadMatrixDriver(e, function () {
                            return s.downloadMatrixFromRGBAColorTexture(i.gl, t, n, r)
                        })
                    }, e.prototype.downloadMatrixFromPackedTexture = function (e, t, n) {
                        var r = this;
                        return this.downloadMatrixDriver(e, function () {
                            return s.downloadMatrixFromPackedOutputTexture(r.gl, t, n)
                        })
                    }, e.prototype.createProgram = function (e) {
                        this.throwIfDisposed();
                        var t = this.gl, n = l.createFragmentShader(t, e), r = s.createVertexShader(t),
                            i = l.createProgram(t);
                        return l.callAndCheck(t, function () {
                            return t.attachShader(i, r)
                        }), l.callAndCheck(t, function () {
                            return t.attachShader(i, n)
                        }), l.linkProgram(t, i), this.autoDebugValidate && l.validateProgram(t, i), this.vertexAttrsAreBound || (this.setProgram(i), this.vertexAttrsAreBound = s.bindVertexProgramAttributeStreams(t, this.program, this.vertexBuffer)), i
                    }, e.prototype.deleteProgram = function (e) {
                        var t = this;
                        this.throwIfDisposed(), e === this.program && (this.program = null), null != e && l.callAndCheck(this.gl, function () {
                            return t.gl.deleteProgram(e)
                        })
                    }, e.prototype.setProgram = function (e) {
                        var t = this;
                        this.throwIfDisposed(), this.program = e, null != this.program && this.autoDebugValidate && l.validateProgram(this.gl, this.program), l.callAndCheck(this.gl, function () {
                            return t.gl.useProgram(e)
                        })
                    }, e.prototype.getUniformLocation = function (e, t, n) {
                        return void 0 === n && (n = !0), this.throwIfDisposed(), n ? l.getProgramUniformLocationOrThrow(this.gl, e, t) : l.getProgramUniformLocation(this.gl, e, t)
                    }, e.prototype.getAttributeLocation = function (e, t) {
                        var n = this;
                        return this.throwIfDisposed(), l.callAndCheck(this.gl, function () {
                            return n.gl.getAttribLocation(e, t)
                        })
                    }, e.prototype.getUniformLocationNoThrow = function (e, t) {
                        return this.throwIfDisposed(), this.gl.getUniformLocation(e, t)
                    }, e.prototype.setInputMatrixTexture = function (e, t, n) {
                        this.throwIfDisposed(), this.throwIfNoProgram(), l.bindTextureToProgramUniformSampler(this.gl, this.program, e, t, n)
                    }, e.prototype.setOutputMatrixTexture = function (e, t, n) {
                        this.setOutputMatrixTextureDriver(e, n, t)
                    }, e.prototype.setOutputPackedMatrixTexture = function (e, t, n) {
                        this.throwIfDisposed();
                        var r = u.getPackedMatrixTextureShapeWidthHeight(t, n), i = r[0], a = r[1];
                        this.setOutputMatrixTextureDriver(e, i, a)
                    }, e.prototype.setOutputMatrixWriteRegion = function (e, t, n, r) {
                        this.setOutputMatrixWriteRegionDriver(n, e, r, t)
                    }, e.prototype.setOutputPackedMatrixWriteRegion = function (e, t, n, r) {
                        throw new Error("setOutputPackedMatrixWriteRegion not implemented.")
                    }, e.prototype.debugValidate = function () {
                        null != this.program && l.validateProgram(this.gl, this.program), l.validateFramebuffer(this.gl)
                    }, e.prototype.executeProgram = function () {
                        this.throwIfDisposed(), this.throwIfNoProgram();
                        var e = this.gl;
                        this.autoDebugValidate && this.debugValidate(), l.callAndCheck(e, function () {
                            return e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0)
                        })
                    }, e.prototype.blockUntilAllProgramsCompleted = function () {
                        var e = this;
                        this.throwIfDisposed(), l.callAndCheck(this.gl, function () {
                            return e.gl.finish()
                        })
                    }, e.prototype.getQueryTimerExtension = function () {
                        return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = l.getExtensionOrThrow(this.gl, 2 === a.ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")), this.disjointQueryTimerExtension
                    }, e.prototype.getQueryTimerExtensionWebGL2 = function () {
                        return this.getQueryTimerExtension()
                    }, e.prototype.getQueryTimerExtensionWebGL1 = function () {
                        return this.getQueryTimerExtension()
                    }, e.prototype.runQuery = function (e) {
                        var t = this.beginQuery();
                        return e(), this.endQuery(), this.pollQueryTime(t)
                    }, e.prototype.beginQuery = function () {
                        if (2 === a.ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
                            var e = this.gl, t = this.getQueryTimerExtensionWebGL2(), n = e.createQuery();
                            return e.beginQuery(t.TIME_ELAPSED_EXT, n), n
                        }
                        var r = this.getQueryTimerExtensionWebGL1(), i = r.createQueryEXT();
                        return r.beginQueryEXT(r.TIME_ELAPSED_EXT, i), i
                    }, e.prototype.endQuery = function () {
                        if (2 !== a.ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
                            var e = this.getQueryTimerExtensionWebGL1();
                            e.endQueryEXT(e.TIME_ELAPSED_EXT)
                        } else {
                            var t = this.gl, n = this.getQueryTimerExtensionWebGL2();
                            t.endQuery(n.TIME_ELAPSED_EXT)
                        }
                    }, e.prototype.isQueryAvailable = function (e, t) {
                        if (0 === t) return !0;
                        if (2 === t) {
                            var n = this.gl, r = this.getQueryTimerExtensionWebGL2(),
                                i = n.getQueryParameter(e, n.QUERY_RESULT_AVAILABLE),
                                a = this.gl.getParameter(r.GPU_DISJOINT_EXT);
                            return i && !a
                        }
                        var i = (r = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e, r.QUERY_RESULT_AVAILABLE_EXT),
                            a = this.gl.getParameter(r.GPU_DISJOINT_EXT);
                        return i && !a
                    }, e.prototype.pollQueryTime = function (e) {
                        var t = this;
                        return new Promise(function (n, r) {
                            var i = a.ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION");
                            o.repeatedTry(function () {
                                return t.isQueryAvailable(e, i)
                            }).then(function () {
                                return n(t.getQueryTime(e, i))
                            }).catch(function () {
                                console.warn("Disjoint query timer never available."), n(-1)
                            })
                        })
                    }, e.prototype.getQueryTime = function (e, t) {
                        if (0 === t) return null;
                        if (2 === t) {
                            var n = this.gl;
                            return (i = n.getQueryParameter(e, n.QUERY_RESULT)) / 1e6
                        }
                        var r = this.getQueryTimerExtensionWebGL1(), i = r.getQueryObjectEXT(e, r.QUERY_RESULT_EXT);
                        return i / 1e6
                    }, e.prototype.downloadMatrixDriverSetup = function (e) {
                        this.throwIfDisposed(), l.bindColorTextureToFramebuffer(this.gl, e, this.framebuffer), this.autoDebugValidate && l.validateFramebuffer(this.gl)
                    }, e.prototype.downloadMatrixDriverTeardown = function () {
                        null != this.outputTexture ? (l.bindColorTextureToFramebuffer(this.gl, this.outputTexture, this.framebuffer), this.autoDebugValidate && l.validateFramebuffer(this.gl)) : l.unbindColorTextureFromFramebuffer(this.gl, this.framebuffer)
                    }, e.prototype.downloadMatrixDriver = function (e, t) {
                        this.downloadMatrixDriverSetup(e);
                        var n = t();
                        return this.downloadMatrixDriverTeardown(), n
                    }, e.prototype.downloadMatrixDriverAsync = function (e, t) {
                        return r(this, void 0, void 0, function () {
                            var n;
                            return i(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return this.downloadMatrixDriverSetup(e), [4, t()];
                                    case 1:
                                        return n = r.sent(), this.downloadMatrixDriverTeardown(), [2, n]
                                }
                            })
                        })
                    }, e.prototype.setOutputMatrixTextureDriver = function (e, t, n) {
                        this.throwIfDisposed();
                        var r = this.gl;
                        l.bindColorTextureToFramebuffer(r, e, this.framebuffer), this.autoDebugValidate && l.validateFramebuffer(r), this.outputTexture = e, l.callAndCheck(r, function () {
                            return r.viewport(0, 0, t, n)
                        }), l.callAndCheck(r, function () {
                            return r.scissor(0, 0, t, n)
                        })
                    }, e.prototype.setOutputMatrixWriteRegionDriver = function (e, t, n, r) {
                        var i = this;
                        this.throwIfDisposed(), l.callAndCheck(this.gl, function () {
                            return i.gl.scissor(e, t, n, r)
                        })
                    }, e.prototype.throwIfDisposed = function () {
                        if (this.disposed) throw new Error("Attempted to use disposed GPGPUContext.")
                    }, e.prototype.throwIfNoProgram = function () {
                        if (null == this.program) throw new Error("No GPU program is currently set.")
                    }, e
                }();
            n.GPGPUContext = c
        }, {"../../environment": 5, "../../util": 95, "./gpgpu_util": 25, "./tex_util": 40, "./webgl_util": 45}],
        24: [function (e, t, n) {
            "use strict";

            function r() {
                return !a.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED")
            }

            function i(e, t) {
                if (e.length !== t.length) throw Error("Binary was compiled with " + e.length + " inputs, but was executed with " + t.length + " inputs");
                e.forEach(function (e, n) {
                    var r = e.logicalShape, i = e.texShape, a = t[n].tensor.shape, s = t[n].texData.texShape;
                    if (!o.arraysEqual(r, a)) throw Error("Binary was compiled with different shapes than the current args. Shapes " + r + " and " + a + " must match");
                    if (!o.arraysEqual(i, s)) throw Error("Binary was compiled with different texture shapes than the current args. Shape " + i + " and " + s + " must match")
                })
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("../../environment"), o = e("../../util"), s = e("./shader_compiler"), u = "NaN";
            n.compileProgram = function (e, t, n, i) {
                for (var a = t.userCode, o = n.map(function (e, n) {
                    var r = {logicalShape: e.tensor.shape, texShape: e.texData.texShape};
                    return {name: t.variableNames[n], shapeInfo: r}
                }), l = o.map(function (e) {
                    return e.shapeInfo
                }), c = {
                    logicalShape: i.tensor.shape,
                    texShape: i.texData.texShape
                }, p = s.makeShader(o, c, a, !0 === t.supportsBroadcasting), h = e.createProgram(p), d = {}, f = 0; f < t.variableNames.length; f++) {
                    var g = t.variableNames[f];
                    d[g] = e.getUniformLocation(h, g)
                }
                r() && (d[u] = e.getUniformLocation(h, u, !1));
                return {
                    program: t,
                    source: p,
                    webGLProgram: h,
                    uniformLocations: d,
                    gpgpu: e,
                    inShapeInfos: l,
                    outShapeInfo: c
                }
            }, n.runProgram = function (e, t, n, a) {
                i(e.inShapeInfos, t), i([e.outShapeInfo], [n]);
                var o = n.texData.texture, s = n.texData.texShape, l = e.gpgpu;
                l.setOutputMatrixTexture(o, s[0], s[1]), l.setProgram(e.webGLProgram), t.forEach(function (t, n) {
                    var r = t.texData.texture, i = e.program.variableNames[n], a = e.uniformLocations[i];
                    l.setInputMatrixTexture(r, a, n)
                }), r() && l.gl.uniform1f(e.uniformLocations[u], NaN), null != a && a(l, e.webGLProgram), l.executeProgram()
            }, n.makeShaderKey = function (e, t, n) {
                var r = "";
                t.concat(n).forEach(function (e) {
                    r += e.tensor.shape + "_" + e.texData.texShape
                });
                var i = e.userCode, a = (!0 === e.supportsBroadcasting).toString(), o = e.constructor.name;
                return o += "_" + a + "_" + r + "_" + i
            }
        }, {"../../environment": 5, "../../util": 95, "./shader_compiler": 38}],
        25: [function (e, t, n) {
            "use strict";

            function r() {
                return {
                    alpha: !1,
                    antialias: !1,
                    premultipliedAlpha: !1,
                    preserveDrawingBuffer: !1,
                    depth: !1,
                    stencil: !1,
                    failIfMajorPerformanceCaveat: !0
                }
            }

            function i(e, t) {
                return d.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED") && 2 === d.ENV.get("WEBGL_VERSION") ? 4 === t ? e.RGBA32F : e.R32F : e.RGBA
            }

            function a(e, t) {
                return d.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED") && 2 === d.ENV.get("WEBGL_VERSION") ? 4 === t ? e.RGBA : e.RED : e.RGBA
            }

            function o(e) {
                return d.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED") ? e.FLOAT : e.UNSIGNED_BYTE
            }

            function s(e, t, n, r) {
                g.validateTextureSize(e, t, n);
                var s = g.createTexture(e), u = e.TEXTURE_2D, l = i(e, r), c = a(e, r);
                return g.callAndCheck(e, function () {
                    return e.bindTexture(u, s)
                }), g.callAndCheck(e, function () {
                    return e.texParameteri(u, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE)
                }), g.callAndCheck(e, function () {
                    return e.texParameteri(u, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
                }), g.callAndCheck(e, function () {
                    return e.texParameteri(u, e.TEXTURE_MIN_FILTER, e.NEAREST)
                }), g.callAndCheck(e, function () {
                    return e.texParameteri(u, e.TEXTURE_MAG_FILTER, e.NEAREST)
                }), g.callAndCheck(e, function () {
                    return e.texImage2D(u, 0, l, t, n, 0, c, o(e), null)
                }), g.callAndCheck(e, function () {
                    return e.bindTexture(e.TEXTURE_2D, null)
                }), s
            }

            function u(e, t, n, r, i, s) {
                var u = a(e, s);
                g.validateTextureSize(e, n, r), g.callAndCheck(e, function () {
                    return e.bindTexture(e.TEXTURE_2D, t)
                }), g.callAndCheck(e, function () {
                    return e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, n, r, u, o(e), i)
                }), g.callAndCheck(e, function () {
                    return e.bindTexture(e.TEXTURE_2D, null)
                })
            }

            function l(e, t, n) {
                return d.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED") ? new Float32Array(f.getUnpackedArraySizeFromMatrixSize(e * t, n)) : new Uint8Array(e * t * n)
            }

            function c(e, t, n, r) {
                if (d.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED")) {
                    var i = new Float32Array(t * n);
                    return f.decodeMatrixFromUnpackedArray(e, i, r), i
                }
                return f.decodeToFloatArray(e)
            }

            var p = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, h = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var d = e("../../environment"), f = e("./tex_util"), g = e("./webgl_util");
            n.getWebGLContextAttributes = r, n.createWebGLContext = function (e) {
                var t, n = r();
                return t = null != e ? g.createWebGLRenderingContextFromCanvas(e, n) : g.createWebGLRenderingContext(n), g.callAndCheck(t, function () {
                    return t.disable(t.DEPTH_TEST)
                }), g.callAndCheck(t, function () {
                    return t.disable(t.STENCIL_TEST)
                }), g.callAndCheck(t, function () {
                    return t.disable(t.BLEND)
                }), g.callAndCheck(t, function () {
                    return t.disable(t.DITHER)
                }), g.callAndCheck(t, function () {
                    return t.disable(t.POLYGON_OFFSET_FILL)
                }), g.callAndCheck(t, function () {
                    return t.disable(t.SAMPLE_COVERAGE)
                }), g.callAndCheck(t, function () {
                    return t.enable(t.SCISSOR_TEST)
                }), g.callAndCheck(t, function () {
                    return t.enable(t.CULL_FACE)
                }), g.callAndCheck(t, function () {
                    return t.cullFace(t.BACK)
                }), t
            }, n.createVertexShader = function (e) {
                return g.createVertexShader(e, "\n    precision highp float;\n    attribute vec3 clipSpacePos;\n    attribute vec2 uv;\n    varying vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")
            }, n.createVertexBuffer = function (e) {
                var t = new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]);
                return g.createStaticVertexBuffer(e, t)
            }, n.createIndexBuffer = function (e) {
                var t = new Uint16Array([0, 1, 2, 2, 1, 3]);
                return g.createStaticIndexBuffer(e, t)
            }, n.createMatrixTexture = function (e, t, n) {
                var r = f.getUnpackedMatrixTextureShapeWidthHeight(t, n);
                return s(e, r[0], r[1], 1)
            }, n.createColorMatrixTexture = function (e, t, n) {
                var r = f.getColorMatrixTextureShapeWidthHeight(t, n);
                return s(e, r[0], r[1], 4)
            }, n.createPackedMatrixTexture = function (e, t, n) {
                var r = f.getPackedMatrixTextureShapeWidthHeight(t, n);
                return s(e, r[0], r[1], 4)
            }, n.bindVertexProgramAttributeStreams = function (e, t, n) {
                return g.callAndCheck(e, function () {
                    return e.bindBuffer(e.ARRAY_BUFFER, n)
                }), g.bindVertexBufferToProgramAttribute(e, t, "clipSpacePos", n, 3, 20, 0) && g.bindVertexBufferToProgramAttribute(e, t, "uv", n, 2, 20, 12)
            }, n.uploadPixelDataToTexture = function (e, t, n) {
                g.callAndCheck(e, function () {
                    return e.bindTexture(e.TEXTURE_2D, t)
                }), g.callAndCheck(e, function () {
                    return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n)
                }), g.callAndCheck(e, function () {
                    return e.bindTexture(e.TEXTURE_2D, null)
                })
            }, n.uploadMatrixToTexture = function (e, t, n, r, i, a) {
                var o, s = f.getUnpackedMatrixTextureShapeWidthHeight(n, r), l = s[0], c = s[1];
                if (d.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED")) {
                    var p = 1 === a ? g.getChannelsPerTexture() : a;
                    1 === p ? o = i : (o = new Float32Array(f.getUnpackedArraySizeFromMatrixSize(i.length, p)), f.encodeMatrixToUnpackedArray(i, o, p))
                } else o = f.encodeFloatArray(i);
                u(e, t, l, c, o, a)
            }, n.uploadMatrixToPackedTexture = function (e, t, n, r, i) {
                var a = f.getPackedMatrixTextureShapeWidthHeight(n, r), o = a[0], s = a[1],
                    l = new Float32Array(f.getPackedRGBAArraySizeFromMatrixShape(n, r));
                f.encodeMatrixToPackedRGBA(i, n, r, l);
                u(e, t, o, s, l, 4)
            }, n.downloadMatrixFromOutputTextureAsync = function (e, t, n, r) {
                return p(this, void 0, void 0, function () {
                    var i, a, s, u, p;
                    return h(this, function (h) {
                        switch (h.label) {
                            case 0:
                                return i = e, a = 4, s = l(n, r, a), u = s instanceof Float32Array ? 4 * s.length : s, p = e.createBuffer(), g.callAndCheck(e, function () {
                                    return e.bindBuffer(i.PIXEL_PACK_BUFFER, p)
                                }), g.callAndCheck(e, function () {
                                    return e.bufferData(i.PIXEL_PACK_BUFFER, u, e.STATIC_DRAW)
                                }), g.callAndCheck(e, function () {
                                    return i.readPixels(0, 0, r, n, e.RGBA, o(e), 0)
                                }), [4, t.getBufferSubDataAsync(i.PIXEL_PACK_BUFFER, 0, s)];
                            case 1:
                                return h.sent(), [2, c(s, n, r, a)]
                        }
                    })
                })
            }, n.downloadMatrixFromOutputTexture = function (e, t, n) {
                var r = f.getUnpackedMatrixTextureShapeWidthHeight(t, n), i = r[0], a = r[1], s = l(t, n, 4);
                return g.callAndCheck(e, function () {
                    return e.readPixels(0, 0, i, a, e.RGBA, o(e), s)
                }), c(s, t, n, 4)
            }, n.downloadMatrixFromRGBAColorTexture = function (e, t, n, r) {
                var i = t * n * 4, a = new Uint8Array(i);
                g.callAndCheck(e, function () {
                    return e.readPixels(0, 0, n, t, e.RGBA, e.UNSIGNED_BYTE, a)
                });
                for (var o = new Float32Array(i), s = 0; s < a.length; s++) o[s] = a[s];
                var u = new Float32Array(t * n * r);
                return f.decodeMatrixFromUnpackedColorRGBAArray(o, u, r), u
            }, n.downloadMatrixFromPackedOutputTexture = function (e, t, n) {
                var r = f.getPackedMatrixTextureShapeWidthHeight(t, n), i = r[0], a = r[1],
                    s = new Float32Array(f.getPackedRGBAArraySizeFromMatrixShape(t, n));
                g.callAndCheck(e, function () {
                    return e.readPixels(0, 0, i, a, e.RGBA, o(e), s)
                });
                var u = new Float32Array(t * n);
                return f.decodeMatrixFromPackedRGBA(s, t, n, u)
            }
        }, {"../../environment": 5, "./tex_util": 40, "./webgl_util": 45}],
        26: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./shader_compiler"), i = function () {
                return function (e, t, n) {
                    this.variableNames = ["c", "a", "b"], this.outputShape = t;
                    var i, a;
                    if (n > 4) throw Error("Where for rank " + n + " is not yet supported");
                    if (1 === n) a = "resRC", i = "resRC"; else {
                        for (var o = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], s = [], u = [], l = 0; l < t.length; l++) u.push("" + o[l]), l < e && s.push("" + o[l]);
                        i = s.join(), a = u.join()
                    }
                    var c = r.getCoordsDataType(n);
                    this.userCode = "\n      void main() {\n        " + c + " resRC = getOutputCoords();\n        float cVal = getC(" + i + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + a + "));\n        } else {\n          setOutput(getB(" + a + "));\n        }\n      }\n    "
                }
            }();
            n.WhereProgram = i
        }, {"./shader_compiler": 38}],
        27: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t, n, r, i) {
                    this.variableNames = ["x"], this.outputShape = [];
                    var a = t, o = e[3] - 1;
                    this.outputShape = e;
                    var s, u = "float(" + n + ") + float(" + r + ") * sum";
                    s = .5 === i ? "inversesqrt(" + u + ")" : 1 === i ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + i + "));", this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + a + "; j <= " + a + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + o + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + s + ";\n        setOutput(val);\n      }\n    "
                }
            }();
            n.LRNProgram = r
        }, {}],
        28: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e) {
                    this.variableNames = ["dy", "maxPos"], this.outputShape = e.inShape;
                    var t = e.filterHeight, n = e.filterWidth, r = e.strideHeight, i = e.strideWidth,
                        a = t - 1 - e.padInfo.top, o = n - 1 - e.padInfo.left, s = t * n - 1;
                    this.userCode = "\n      const ivec2 pads = ivec2(" + a + ", " + o + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + t + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + i + ".0;\n\n            if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + s + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + n + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
                }
            }();
            n.MaxPool2DBackpropProgram = r
        }, {}],
        29: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t, n, r) {
                    void 0 === n && (n = !1), void 0 === r && (r = !1), this.variableNames = ["matrixA", "matrixB"];
                    var i = n ? e[1] : e[0], a = r ? t[0] : t[1], o = n ? e[0] : e[1];
                    this.outputShape = [i, a];
                    var s = function (e, t) {
                        return n ? t + " + " + e + ", aRow" : "aRow, " + t + " + " + e
                    }, u = function (e, t) {
                        return r ? "bCol, " + t + " + " + e : t + " + " + e + ", bCol"
                    }, l = 4 * Math.floor(o / 4), c = o % 4;
                    this.userCode = " float dotARowBCol(int aRow, int bCol) {\n      float result = 0.0;\n      for (int i = 0; i < " + l + "; i += 4) {\n        vec4 a = vec4(\n          getMatrixA(" + s(0, "i") + "),\n          getMatrixA(" + s(1, "i") + "),\n          getMatrixA(" + s(2, "i") + "),\n          getMatrixA(" + s(3, "i") + ")\n        );\n        vec4 b = vec4(\n          getMatrixB(" + u(0, "i") + "),\n          getMatrixB(" + u(1, "i") + "),\n          getMatrixB(" + u(2, "i") + "),\n          getMatrixB(" + u(3, "i") + ")\n        );\n\n        result += dot(a, b);\n      }\n\n      if (" + (1 === c) + ") {\n        result += getMatrixA(" + s(0, l) + ") *\n          getMatrixB(" + u(0, l) + ");\n      } else if (" + (2 === c) + ") {\n        vec2 a = vec2(\n          getMatrixA(" + s(0, l) + "),\n          getMatrixA(" + s(1, l) + ")\n        );\n        vec2 b = vec2(\n          getMatrixB(" + u(0, l) + "),\n          getMatrixB(" + u(1, l) + ")\n        );\n        result += dot(a, b);\n      } else if (" + (3 === c) + ") {\n        vec3 a = vec3(\n          getMatrixA(" + s(0, l) + "),\n          getMatrixA(" + s(1, l) + "),\n          getMatrixA(" + s(2, l) + ")\n        );\n        vec3 b = vec3(\n          getMatrixB(" + u(0, l) + "),\n          getMatrixB(" + u(1, l) + "),\n          getMatrixB(" + u(2, l) + ")\n        );\n        result += dot(a, b);\n      }\n\n      return result;\n    }\n\n    void main() {\n      ivec2 resRC = getOutputCoords();\n      setOutput(dotARowBCol(resRC.x, resRC.y));\n    }\n    "
                }
            }();
            n.MatMulProgram = r
        }, {}],
        30: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                function e(e, t, n) {
                    this.variableNames = ["probs"], this.outputShape = [e, n], this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (t - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (t - 1) + "));\n      }\n    "
                }

                return e.prototype.getCustomSetupFunc = function (e) {
                    var t = this;
                    return function (n, r) {
                        null == t.seedLoc && (t.seedLoc = n.getUniformLocation(r, "seed")), n.gl.uniform1f(t.seedLoc, e)
                    }
                }, e
            }();
            n.MultinomialProgram = r
        }, {}],
        31: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t, n, r) {
                    this.variableNames = ["indices"], this.outputShape = [e, t], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + r + "), float(" + n + "),\n                      float(index == coords.y)));\n      }\n    "
                }
            }();
            n.OneHotProgram = r
        }, {}],
        32: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./shader_compiler"), i = function () {
                return function (e, t, n) {
                    this.variableNames = ["x"], this.outputShape = t.map(function (t, n) {
                        return t[0] + e[n] + t[1]
                    });
                    var i = e.length, a = r.getCoordsDataType(i), o = t.map(function (e) {
                        return e[0]
                    }).join(","), s = t.map(function (t, n) {
                        return t[0] + e[n]
                    }).join(","), u = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, i);
                    this.userCode = 1 !== i ? "\n      " + a + " start = " + a + "(" + o + ");\n      " + a + " end = " + a + "(" + s + ");\n\n      void main() {\n        " + a + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + n + "));\n        } else {\n          " + a + " coords = outC - start;\n          setOutput(getX(" + u + "));\n        }\n      }\n    " : "\n        int start = " + o + ";\n        int end = " + s + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + n + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      "
                }
            }();
            n.PadProgram = i
        }, {"./shader_compiler": 38}],
        33: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t, n) {
                    if (this.variableNames = ["x"], "avg" === t && n) throw new Error("Cannot compute positions for average pool.");
                    var r = e.filterHeight, i = e.filterWidth, a = e.strideHeight, o = e.strideWidth, s = e.padInfo.top,
                        u = e.padInfo.left;
                    this.outputShape = e.outShape;
                    var l = "avg" === t, c = "0.0";
                    if (l || (c = "-1.0 / 0.0"), n) this.userCode = "\n        const ivec2 strides = ivec2(" + a + ", " + o + ");\n        const ivec2 pads = ivec2(" + s + ", " + u + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + r + "; wR++) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + e.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + i + "; wC++) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + e.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * " + i + " + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      "; else {
                        var p = t + "(" + t + "(" + t + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
                        "avg" === t && (p = "avgValue / count");
                        var h = 4 * Math.floor(i / 4), d = i % 4,
                            f = "\n      if (" + l + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
                        this.userCode = "\n      const ivec2 strides = ivec2(" + a + ", " + o + ");\n      const ivec2 pads = ivec2(" + s + ", " + u + ");\n      const float initializationValue = " + c + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + e.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + c + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + r + "; wR++) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + e.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + h + "; wC += 4) {\n            int xC = xCCorner + wC;\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              getValue(batch, xR, xC + 3, d)\n            );\n\n            " + f + "\n          }\n\n          int xC = xCCorner + " + h + ";\n          if (" + (1 === d) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + f + "\n          } else if (" + (2 === d) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + f + "\n          } else if (" + (3 === d) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              initializationValue\n            );\n\n            " + f + "\n          }\n        }\n        setOutput(" + p + ");\n      }\n    "
                    }
                }
            }();
            n.Pool2DProgram = r
        }, {}],
        34: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t) {
                    this.variableNames = ["x"];
                    var n = e.windowSize, r = e.batchSize, i = e.inSize, a = Math.ceil(i / n);
                    this.outputShape = [r, a];
                    var o = "sum" === t, s = "0.0";
                    o || (s = "min" === t ? "1.0 / 0.0" : "-1.0 / 0.0");
                    var u = "min" === t ? "min" : "max",
                        l = t + "(" + t + "(" + t + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
                    "sum" === t && (l = "sumValue");
                    var c = 4 * Math.floor(n / 4), p = n % 4,
                        h = "\n      if (" + o + ") {\n        sumValue += dot(values, ones);\n      } else {\n        minMaxValue = " + u + "(values, minMaxValue);\n      }\n    ",
                        d = "";
                    i % n > 0 && (d = "\n        if (inIdx < 0 || inIdx >= " + i + ") {\n          return initializationValue;\n        }\n      "), this.userCode = "\n      const float initializationValue = " + s + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + d + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + n + ";\n\n        vec4 minMaxValue = vec4(" + s + ");\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + c + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + h + "\n        }\n\n        int inIdx = inOffset + " + c + ";\n        if (" + (1 === p) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n          " + h + "\n        } else if (" + (2 === p) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n          " + h + "\n        } else if (" + (3 === p) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n          " + h + "\n        }\n        setOutput(" + l + ");\n      }\n    "
                }
            }();
            n.ReduceProgram = r
        }, {}],
        35: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t, n, r) {
                    this.variableNames = ["A"], this.outputShape = [];
                    var i = e[0], a = e[1], o = e[2], s = e[3];
                    this.outputShape = [i, t, n, s];
                    var u = r ? [a - 1, o - 1] : [a, o], l = r ? [t - 1, n - 1] : [t, n];
                    this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u[0] / l[0] + ",\n          " + u[1] / l[1] + ");\n      const vec2 inputShapeRC = vec2(" + a + ".0, " + o + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    "
                }
            }();
            n.ResizeBilinearProgram = r
        }, {}],
        36: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                return function (e, t, n, r) {
                    this.variableNames = ["A"], this.outputShape = [];
                    var i = e[0], a = e[1], o = e[2], s = e[3];
                    this.outputShape = [i, t, n, s];
                    var u = r ? [a - 1, o - 1] : [a, o], l = r ? [t - 1, n - 1] : [t, n];
                    this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u[0] / l[0] + ",\n          " + u[1] / l[1] + ");\n      const vec2 inputShapeRC = vec2(" + a + ".0, " + o + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + 0.5)));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    "
                }
            }();
            n.ResizeNearestNeighborProgram = r
        }, {}],
        37: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./shader_compiler"), i = function () {
                return function (e, t) {
                    this.variableNames = ["x"];
                    var n = e.length;
                    if (n > 4) throw new Error("WebGL backend: Reverse of rank-" + n + " tensor is not yet supported");
                    if (this.outputShape = e, 1 !== n) {
                        var i = function (n) {
                            return -1 !== t.indexOf(n) && 1 !== e[n] ? e[n] + " - coords[" + n + "] - 1" : "coords[" + n + "]"
                        }, a = e.map(function (e, t) {
                            return i(t)
                        }).join(","), o = r.getCoordsDataType(n);
                        this.userCode = "\n      void main() {\n        " + o + " coords = getOutputCoords();\n        setOutput(getX(" + a + "));\n      }\n    "
                    } else this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + e[0] + " - coord - 1));\n        }\n      "
                }
            }();
            n.ReverseProgram = i
        }, {"./shader_compiler": 38}],
        38: [function (e, t, n) {
            "use strict";

            function r() {
                return A.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED") ? O : S
            }

            function i() {
                return A.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED") ? k : C
            }

            function a(e) {
                var t = e.shapeInfo.logicalShape;
                switch (t.length) {
                    case 0:
                        return h(e);
                    case 1:
                        return d(e);
                    case 2:
                        return f(e);
                    case 3:
                        return g(e);
                    case 4:
                        return m(e);
                    default:
                        throw new Error(t.length + "-D input sampling is not yet supported")
                }
            }

            function o(e, t, n) {
                var r = v(e);
                return r += a(e), (n || E.arraysEqual(e.shapeInfo.logicalShape, t.logicalShape)) && (r += b(e, t, n)), r
            }

            function s(e, t) {
                switch (e.length) {
                    case 0:
                        return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
                    case 1:
                        return u(e, t);
                    case 2:
                        return p(e, t);
                    case 3:
                        return l(e, t);
                    case 4:
                        return c(e, t);
                    default:
                        throw new Error(e.length + "-D output sampling is not yet supported")
                }
            }

            function u(e, t) {
                return 1 === t[0] ? "\n      int getOutputCoords() {\n        return int(resultUV.x * " + t[1] + ".0);\n      }\n    " : 1 === t[1] ? "\n      int getOutputCoords() {\n        return int(resultUV.y * " + t[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + t[0] + ", " + t[1] + "));\n      return resTexRC.x * " + t[1] + " + resTexRC.y;\n    }\n  "
            }

            function l(e, t) {
                var n = e[1] * e[2], r = e[2];
                return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + t[0] + ", " + t[1] + "));\n      int index = resTexRC.x * " + t[1] + " + resTexRC.y;\n      int r = index / " + n + ";\n      index -= r * " + n + ";\n      int c = index / " + r + ";\n      int d = index - c * " + r + ";\n      return ivec3(r, c, d);\n    }\n  "
            }

            function c(e, t) {
                var n = e[3], r = e[2] * n, i = e[1] * r;
                return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + t[0] + ", " + t[1] + "));\n      int index = resTexRC.x * " + t[1] + " + resTexRC.y;\n\n      int r = index / " + i + ";\n      index -= r * " + i + ";\n\n      int c = index / " + r + ";\n      index -= c * " + r + ";\n\n      int d = index / " + n + ";\n      int d2 = index - d * " + n + ";\n\n      return ivec4(r, c, d, d2);\n    }\n  "
            }

            function p(e, t) {
                return E.arraysEqual(e, t) ? "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + t[0] + ", " + t[1] + "));\n      }\n    " : 1 === e[1] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + t[0] + ", " + t[1] + "));\n        int index = resTexRC.x * " + t[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    " : 1 === e[0] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + t[0] + ", " + t[1] + "));\n        int index = resTexRC.x * " + t[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    " : "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + t[0] + ", " + t[1] + "));\n      int index = resTexRC.x * " + t[1] + " + resTexRC.y;\n      int r = index / " + e[1] + ";\n      int c = index - r * " + e[1] + ";\n      return ivec2(r, c);\n    }\n  "
            }

            function h(e) {
                var t = e.name;
                return "\n    float " + ("get" + t.charAt(0).toUpperCase() + t.slice(1)) + "() {\n      return sampleTexture(" + t + ", halfCR);\n    }\n  "
            }

            function d(e) {
                var t = e.name, n = "get" + t.charAt(0).toUpperCase() + t.slice(1);
                return "\n    float " + n + "(int index) {\n      return " + n + "Flat(index);\n    }\n  "
            }

            function f(e) {
                var t = e.shapeInfo.logicalShape, n = e.shapeInfo.texShape, r = e.name,
                    i = "get" + r.charAt(0).toUpperCase() + r.slice(1), o = n[0], s = n[1];
                if (E.arraysEqual(t, n)) return "\n    float " + i + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + s + ".0, " + o + ".0);\n      return sampleTexture(" + r + ", uv);\n    }\n  ";
                var u = E.squeezeShape(t), l = u.newShape, c = u.keptDims, p = l;
                if (p.length < t.length) {
                    var h = ["row", "col"];
                    return "\n      " + a(w(e, p)) + "\n      float " + i + "(int row, int col) {\n        return " + i + "(" + x(h, c) + ");\n      }\n    "
                }
                return 1 === s ? "\n    float " + i + "(int row, int col) {\n      int index = row * " + t[1] + " + col;\n      vec2 uv = vec2(0.5, (float(index) + 0.5) / " + o + ".0);\n      return sampleTexture(" + r + ", uv);\n    }\n  " : 1 === o ? "\n    float " + i + "(int row, int col) {\n      int index = row * " + t[1] + " + col;\n      vec2 uv = vec2((float(index) + 0.5) / " + s + ".0, 0.5);\n      return sampleTexture(" + r + ", uv);\n    }\n  " : "\n  float " + i + "(int row, int col) {\n    vec2 uv = UVfrom2D(" + o + ", " + s + ", " + t[1] + ", row, col);\n    return sampleTexture(" + r + ", uv);\n  }\n"
            }

            function g(e) {
                var t = e.shapeInfo.texShape, n = e.shapeInfo.logicalShape, r = e.name,
                    i = "get" + r.charAt(0).toUpperCase() + r.slice(1), o = t[0], s = t[1], u = n[1] * n[2], l = n[2],
                    c = E.squeezeShape(n), p = c.newShape, h = c.keptDims, d = p;
                if (d.length < n.length) {
                    var f = ["row", "col", "depth"];
                    return "\n        " + a(w(e, d)) + "\n        float " + i + "(int row, int col, int depth) {\n          return " + i + "(" + x(f, h) + ");\n        }\n      "
                }
                return s === u ? "\n        float " + i + "(int row, int col, int depth) {\n          int texR = row;\n          int texC = col * " + l + " + depth;\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + s + ".0, " + o + ".0);\n          return sampleTexture(" + r + ", uv);\n        }\n      " : s === l ? "\n    float " + i + "(int row, int col, int depth) {\n      int texR = row * " + n[1] + " + col;\n      int texC = depth;\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + s + ".0, " + o + ".0);\n      return sampleTexture(" + r + ", uv);\n    }\n  " : "\n      float " + i + "(int row, int col, int depth) {\n        vec2 uv = UVfrom3D(\n            " + o + ", " + s + ", " + u + ", " + l + ", row, col, depth);\n        return sampleTexture(" + r + ", uv);\n      }\n  "
            }

            function m(e) {
                var t = e.shapeInfo.logicalShape, n = e.shapeInfo.texShape, r = e.name,
                    i = "get" + r.charAt(0).toUpperCase() + r.slice(1), o = n[0], s = n[1], u = t[3], l = t[2] * u,
                    c = t[1] * l, p = E.squeezeShape(t), h = p.newShape, d = p.keptDims;
                if (h.length < t.length) {
                    var f = ["row", "col", "depth", "depth2"];
                    return "\n      " + a(w(e, h)) + "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        return " + i + "(" + x(f, d) + ");\n      }\n    "
                }
                return s === c ? "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        int texR = row;\n        int texC = col * " + l + " + depth * " + u + " + depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + s + ".0, " + o + ".0);\n        return sampleTexture(" + r + ", uv);\n      }\n    " : s === u ? "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        int texR = row * " + t[1] * t[2] + " + col * " + t[2] + " + depth;\n        int texC = depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + s + ".0, " + o + ".0);\n        return sampleTexture(" + r + ", uv);\n      }\n    " : "\n    float " + i + "(int row, int col, int depth, int depth2) {\n      vec2 uv = UVfrom4D(" + o + ", " + s + ", " + c + ", " + l + ",\n          " + u + ", row, col, depth, depth2);\n      return sampleTexture(" + r + ", uv);\n    }\n  "
            }

            function v(e) {
                var t = e.name, n = e.shapeInfo.texShape, r = "get" + t.charAt(0).toUpperCase() + t.slice(1) + "Flat",
                    i = n[0], a = n[1];
                return 1 === a && 1 === i ? "\n      float " + r + "(int index) {\n        return sampleTexture(" + t + ", halfCR);\n      }\n    " : 1 === a ? "\n      float " + r + "(int index) {\n        vec2 uv = vec2(0.5, (float(index) + 0.5) / " + i + ".0);\n        return sampleTexture(" + t + ", uv);\n      }\n    " : 1 === i ? "\n      float " + r + "(int index) {\n        vec2 uv = vec2((float(index) + 0.5) / " + a + ".0, 0.5);\n        return sampleTexture(" + t + ", uv);\n      }\n    " : "\n    float " + r + "(int index) {\n      vec2 uv = UVfrom1D(" + i + ", " + a + ", index);\n      return sampleTexture(" + t + ", uv);\n    }\n  "
            }

            function y(e, t, n, r) {
                var i = e.shapeInfo.logicalShape.length, a = t.logicalShape.length, o = "int";
                2 === a ? o = "ivec2" : 3 === a ? o = "ivec3" : 4 === a && (o = "ivec4");
                var s, u = _.getBroadcastDims(e.shapeInfo.logicalShape, t.logicalShape), l = a - i;
                s = 0 === i ? "" : a < 2 && u.length >= 1 ? "coords = 0;" : u.map(function (e) {
                    return "coords[" + (e + l) + "] = 0;"
                }).join("\n");
                var c = "";
                return c = a < 2 && i > 0 ? "coords" : e.shapeInfo.logicalShape.map(function (e, t) {
                    return "coords[" + (t + l) + "]"
                }).join(", "), "\n    float " + r + "() {\n      " + o + " coords = getOutputCoords();\n      " + s + "\n      return get" + n + "(" + c + ");\n    }\n  "
            }

            function b(e, t, n) {
                var r = e.shapeInfo.texShape, i = e.name, a = i.charAt(0).toUpperCase() + i.slice(1),
                    o = "get" + a + "AtOutCoords", s = _.getBroadcastDims(e.shapeInfo.logicalShape, t.logicalShape),
                    u = e.shapeInfo.logicalShape.length, l = t.logicalShape.length, c = n && (l > u || s.length > 0),
                    p = _.broadcastDimsAreOuter(s);
                if (c && !p) return y(e, t, a, o);
                var h = t.texShape;
                if (E.arraysEqual(r, h)) return "\n      float " + o + "() {\n        return sampleTexture(" + i + ", resultUV);\n      }\n    ";
                var d = E.sizeFromShape(r), f = "";
                return c && p && (f = "\n        int mainPart = index / " + d + ";\n        index -= mainPart * " + d + ";\n      "), "\n    float " + o + "() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + h[0] + ", " + h[1] + "));\n      int index = resTexRC.x * " + h[1] + " + resTexRC.y;\n      " + f + "\n      int texR = index / " + r[1] + ";\n      int texC = index - texR * " + r[1] + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) /\n                 vec2(" + r[1] + ".0, " + r[0] + ".0);\n\n      return sampleTexture(" + i + ", uv);\n    }\n  "
            }

            function w(e, t) {
                var n = JSON.parse(JSON.stringify(e));
                return n.shapeInfo.logicalShape = t, n
            }

            function x(e, t) {
                return t.map(function (t) {
                    return e[t]
                }).join(", ")
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var A = e("../../environment"), E = e("../../util"), _ = e("../../ops/broadcast_util"), T = e("./tex_util");
            n.makeShader = function (e, t, n, a) {
                var u = r(), l = i(), c = e.map(function (e) {
                    return "uniform sampler2D " + e.name + ";"
                }).join("\n"), p = e.map(function (e) {
                    return o(e, t, a)
                }).join("\n"), h = t.texShape, d = s(t.logicalShape, h);
                return [N, u, l, c, d, p, n].join("\n")
            };
            var S = "\n  uniform float NaN;\n\n  const vec4 floatDeltas = vec4(\n      1.0,\n      1.0 / 255.0,\n      1.0 / (255.0 * 255.0),\n      1.0 / (255.0 * 255.0 * 255.0)\n  );\n  const float minValue = " + T.FLOAT_MIN + ".0;\n  const float maxValue = " + T.FLOAT_MAX + ".0;\n  const float range = (maxValue - minValue) / 255.0;\n  const vec2 dotRange = vec2(1.0, range);\n\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    vec4 sampleValue = texture2D(textureSampler, uv);\n    if (all(equal(sampleValue, vec4(" + T.BYTE_NAN_VALUE + ")))) {\n      return NaN;\n    }\n\n    vec4 encValue = floor(sampleValue * 255.0 + 0.5);\n    float decodedValue = dot(encValue, floatDeltas);\n    return dot(vec2(minValue, decodedValue), dotRange);\n  }\n",
                C = "\n  const vec4 floatPowers = vec4(\n    1.0,\n    255.0,\n    255.0 * 255.0,\n    255.0 * 255.0 * 255.0\n  );\n  const vec2 recipRange = vec2(1.0/range);\n  const vec2 recipRange255 = vec2(1.0/(maxValue - minValue));\n\n  void setOutput(float decodedValue) {\n    if (isNaN(decodedValue)) {\n      gl_FragColor = vec4(" + T.BYTE_NAN_VALUE + ");\n      return;\n    }\n\n    float a = dot(vec2(decodedValue, -minValue), recipRange);\n    float b = fract(a) * 255.0;\n    float c = fract(b) * 255.0;\n    float d = fract(c) * 255.0;\n    gl_FragColor = floor(vec4(a, b, c, d)) / 255.0;\n\n    // TODO(dsmilkov): Version above gets better accuracy but probably slower\n    // than the version below. Benchmark to determine if the accuracy is worth\n    // the cost.\n\n    // float normValue = dot(vec2(decodedValue, -minValue), recipRange255);\n    // vec4 f = normValue * floatPowers;\n    // gl_FragColor = floor(fract(f) * 255.0) / 255.0;\n  }\n",
                O = "\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    return texture2D(textureSampler, uv).r;\n  }\n",
                k = "\n  void setOutput(float val) {\n    gl_FragColor = vec4(val, 0, 0, 0);\n  }\n",
                N = "\n  precision highp float;\n  precision highp int;\n  varying vec2 resultUV;\n  const vec2 halfCR = vec2(0.5, 0.5);\n\n  bool isNaN(float val) {\n    float v1 = val * val;\n    float v2 = val * val;\n    return v1 == v2 ? false : true;\n  }\n\n  bool hasNaN(vec4 values) {\n    vec4 v1 = values * values;\n    vec4 v2 = values * values;\n    return any(notEqual(v1, v2));\n  }\n\n  float getNaN(vec4 values) {\n    return dot(vec4(1), values);\n  }\n\n  int round(float value) {\n    return int(floor(value + 0.5));\n  }\n\n  int imod(int x, int y) {\n    return x - y * (x / y);\n  }\n\n  const vec2 randomConst = vec2(\n    23.14069263277926, // e^pi (Gelfond's constant)\n     2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)\n  );\n\n  float random(float seed) {\n      return fract(cos(dot(resultUV * seed, randomConst)) * 12345.6789);\n  }\n\n  \nvec2 UVfrom1D(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  \nvec2 UVfrom2D(int texNumR, int texNumC, int numC, int row, int col) {\n  int index = row * numC + col;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  \nvec2 UVfrom3D(int texNumR, int texNumC, int stride0,\n    int stride1, int row, int col, int depth) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  \nvec2 UVfrom4D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int row, int col, int depth,\n    int depth2) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n";
            n.getCoordsDataType = function (e) {
                if (e <= 1) return "int";
                if (2 === e) return "ivec2";
                if (3 === e) return "ivec3";
                if (4 === e) return "ivec4";
                throw Error("GPU for rank " + e + " is not yet supported")
            }
        }, {"../../environment": 5, "../../ops/broadcast_util": 50, "../../util": 95, "./tex_util": 40}],
        39: [function (e, t, n) {
            "use strict";

            function r(e) {
                if (1 === e) return "sourceLoc";
                if (2 === e) return "sourceLoc.x, sourceLoc.y";
                if (3 === e) return "sourceLoc.x, sourceLoc.y, sourceLoc.z";
                if (4 === e) return "sourceLoc.x, sourceLoc.y, sourceLoc.z, sourceLoc.w";
                throw Error("Slicing for rank " + e + " is not yet supported")
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("./shader_compiler"), a = function () {
                function e(e) {
                    this.variableNames = ["source"], this.outputShape = e, this.rank = e.length;
                    var t = i.getCoordsDataType(this.rank), n = r(this.rank);
                    this.userCode = "\n      uniform " + t + " start;\n\n      void main() {\n        " + t + " sourceLoc = start + getOutputCoords();\n        setOutput(getSource(" + n + "));\n      }\n    "
                }

                return e.prototype.getCustomSetupFunc = function (e) {
                    var t = this;
                    if (e.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + e.length + ")");
                    return function (n, r) {
                        if (null != t.startLoc || (t.startLoc = n.getUniformLocationNoThrow(r, "start"), null != t.startLoc)) if (1 === t.rank) n.gl.uniform1i(t.startLoc, e[0]); else if (2 === t.rank) n.gl.uniform2i(t.startLoc, e[0], e[1]); else if (3 === t.rank) n.gl.uniform3i(t.startLoc, e[0], e[1], e[2]); else {
                            if (4 !== t.rank) throw Error("Slicing for rank " + t.rank + " is not yet supported");
                            n.gl.uniform4i(t.startLoc, e[0], e[1], e[2], e[3])
                        }
                    }
                }, e
            }();
            n.SliceProgram = a
        }, {"./shader_compiler": 38}],
        40: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return e * t
            }

            function i(e, t) {
                if (e % t != 0) throw new Error("unpackedSize (" + e + ") must be a multiple of " + t);
                return e / t
            }

            function a(e, t) {
                return [Math.ceil(t / 2), Math.ceil(e / 2)]
            }

            function o(e, t) {
                var n = a(e, t);
                return n[0] * n[1] * 4
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            !function (e) {
                e[e.FLOAT = 0] = "FLOAT", e[e.UNSIGNED_BYTE = 1] = "UNSIGNED_BYTE"
            }(n.TextureType || (n.TextureType = {})), n.getUnpackedMatrixTextureShapeWidthHeight = function (e, t) {
                return [t, e]
            }, n.getUnpackedArraySizeFromMatrixSize = r, n.getColorMatrixTextureShapeWidthHeight = function (e, t) {
                return [4 * t, e]
            }, n.getMatrixSizeFromUnpackedArraySize = i, n.encodeMatrixToUnpackedArray = function (e, t, n) {
                var i = r(e.length, n);
                if (t.length < i) throw new Error("unpackedArray length (" + t.length + ") must be >= " + i);
                for (var a = 0, o = 0; o < e.length; ++o) t[a] = e[o], a += n
            }, n.FLOAT_MAX = 2e4, n.FLOAT_MIN = -n.FLOAT_MAX;
            var s = (n.FLOAT_MAX - n.FLOAT_MIN) / 255, u = [1, 1 / 255, 1 / 65025, 1 / 16581375], l = [1, 255, 65025];
            n.BYTE_NAN_VALUE = 0, n.encodeFloatArray = function (e) {
                for (var t = new Uint8Array(4 * e.length), r = 0; r < t.length; r += 4) !function (r) {
                    var i = e[r / 4];
                    if (isNaN(i)) return t[r] = n.BYTE_NAN_VALUE, t[r + 1] = n.BYTE_NAN_VALUE, t[r + 2] = n.BYTE_NAN_VALUE, t[r + 3] = n.BYTE_NAN_VALUE, "continue";
                    var a = (i - n.FLOAT_MIN) / s, o = l.map(function (e) {
                        return e * a
                    }).map(function (e) {
                        return Math.floor(e % 1 * 255)
                    });
                    t[r] = Math.floor(a), t[r + 1] = o[0], t[r + 2] = o[1], t[r + 3] = o[2]
                }(r);
                return t
            }, n.decodeToFloatArray = function (e) {
                for (var t = new Float32Array(e.length / 4), r = 0; r < e.length; r += 4) !function (r) {
                    if (e[r] === n.BYTE_NAN_VALUE && e[r + 1] === n.BYTE_NAN_VALUE && e[r + 2] === n.BYTE_NAN_VALUE && e[r + 3] === n.BYTE_NAN_VALUE) return t[r / 4] = NaN, "continue";
                    var i = 0;
                    u.forEach(function (t, n) {
                        i += t * e[r + n]
                    });
                    var a = i * s + n.FLOAT_MIN;
                    t[r / 4] = a
                }(r);
                return t
            }, n.decodeMatrixFromUnpackedArray = function (e, t, n) {
                var r = i(e.length, n);
                if (t.length < r) throw new Error("matrix length (" + t.length + ") must be >= " + r);
                for (var a = 0, o = 0; o < e.length; o += n) t[a++] = e[o]
            }, n.decodeMatrixFromUnpackedColorRGBAArray = function (e, t, n) {
                var r = e.length * n / 4;
                if (t.length < r) throw new Error("matrix length (" + t.length + ") must be >= " + r);
                for (var i = 0, a = 0; a < e.length; a += 4) for (var o = 0; o < n; o++) t[i++] = e[a + o]
            }, n.getPackedMatrixTextureShapeWidthHeight = a, n.getPackedRGBAArraySizeFromMatrixShape = o, n.encodeMatrixToPackedRGBA = function (e, t, n, r) {
                var i = o(t, n);
                if (r.length < i) throw new Error("packedRGBA length (" + r.length + ") must be >= " + i);
                for (var s = a(t, n), u = s[0], l = s[1], c = n % 2 == 1, p = t % 2 == 1, h = Math.floor(n / 2), d = Math.floor(t / 2), f = c ? 4 : 0, g = n, m = 0, v = 0; v < d; ++v) {
                    for (var y = 2 * v * n, b = 0; b < h; ++b) w = y + 2 * b, r[m] = e[w], r[m + 1] = e[w + 1], r[m + 2] = e[w + g], r[m + 3] = e[w + g + 1], m += 4;
                    m += f
                }
                if (c) for (var w = n - 1, m = 4 * (u - 1), x = 2 * n, f = 4 * u, v = 0; v < d; ++v) r[m] = e[w], r[m + 2] = e[w + n], w += x, m += f;
                if (p) for (var w = (t - 1) * n, m = (l - 1) * u * 4, b = 0; b < h; ++b) r[m++] = e[w++], r[m++] = e[w++], m += 2;
                return c && p && (r[r.length - 4] = e[e.length - 1]), r
            }, n.decodeMatrixFromPackedRGBA = function (e, t, n, r) {
                var i = t * n;
                if (i < r.length) throw new Error("matrix length (" + r.length + ") must be >= " + i);
                for (var o = n % 2 == 1, s = t % 2 == 1, u = Math.floor(n / 2), l = Math.floor(t / 2), c = a(t, n), p = c[0], h = c[1], d = o ? 4 : 0, f = n + (o ? 1 : 0), g = 0, m = 0, v = n, y = 0; y < l; ++y) {
                    for (w = 0; w < u; ++w) r[m++] = e[g++], r[m++] = e[g++], r[v++] = e[g++], r[v++] = e[g++];
                    g += d, m += f, v += f
                }
                if (o) for (var g = 4 * (p - 1), b = n - 1, d = 4 * p, f = 2 * n, y = 0; y < l; ++y) r[b] = e[g], r[b + n] = e[g + 2], g += d, b += f;
                if (s) for (var g = (h - 1) * p * 4, b = (t - 1) * n, w = 0; w < u; ++w) r[b++] = e[g++], r[b++] = e[g++], g += 2;
                return o && s && (r[r.length - 1] = e[e.length - 4]), r
            }
        }, {}],
        41: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return e[0] + "_" + e[1] + "_" + t
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("./tex_util"), a = function () {
                function e(e) {
                    this.gpgpu = e, this.numUsedTextures = 0, this.numFreeTextures = 0, this.freeTextures = {}, this.logEnabled = !1, this.allocatedTextures = [], this.usedTextureCount = {}
                }

                return e.prototype.acquireTexture = function (e, t) {
                    void 0 === t && (t = i.TextureType.FLOAT);
                    var n = r(e, t);
                    if (n in this.freeTextures || (this.freeTextures[n] = []), n in this.usedTextureCount || (this.usedTextureCount[n] = 0), this.usedTextureCount[n]++, this.freeTextures[n].length > 0) return this.numFreeTextures--, this.numUsedTextures++, this.log(), this.freeTextures[n].shift();
                    this.numUsedTextures++, this.log();
                    var a = this.gpgpu.createMatrixTexture(e[0], e[1]);
                    return this.allocatedTextures.push(a), a
                }, e.prototype.releaseTexture = function (e, t, n) {
                    void 0 === n && (n = i.TextureType.FLOAT);
                    var a = r(t, n);
                    a in this.freeTextures || (this.freeTextures[a] = []), this.freeTextures[a].push(e), this.numFreeTextures++, this.numUsedTextures--, this.usedTextureCount[a]--, this.log()
                }, e.prototype.log = function () {
                    if (this.logEnabled) {
                        var e = this.numFreeTextures + this.numUsedTextures;
                        console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + e + ")")
                    }
                }, e.prototype.getNumUsedTextures = function () {
                    return this.numUsedTextures
                }, e.prototype.getNumFreeTextures = function () {
                    return this.numFreeTextures
                }, e.prototype.dispose = function () {
                    var e = this;
                    null != this.allocatedTextures && (this.allocatedTextures.forEach(function (t) {
                        e.gpgpu.deleteMatrixTexture(t)
                    }), this.freeTextures = null, this.allocatedTextures = null, this.usedTextureCount = null, this.numUsedTextures = 0, this.numFreeTextures = 0)
                }, e
            }();
            n.TextureManager = a
        }, {"./tex_util": 40}],
        42: [function (e, t, n) {
            "use strict";

            function r(e) {
                var t = e.length;
                if (t > 4) throw Error("Tile for rank " + t + " is not yet supported");
                if (1 === t) return "imod(resRC, " + e[0] + ")";
                for (var n = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], r = [], i = 0; i < e.length; i++) r.push("imod(" + n[i] + ", " + e[i] + ")");
                return r.join()
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("./shader_compiler"), a = function () {
                return function (e, t) {
                    this.variableNames = ["A"];
                    for (var n = new Array(e.length), a = 0; a < n.length; a++) n[a] = e[a] * t[a];
                    this.outputShape = n, this.rank = n.length;
                    var o = i.getCoordsDataType(this.rank), s = r(e);
                    this.userCode = "\n      void main() {\n        " + o + " resRC = getOutputCoords();\n        setOutput(getA(" + s + "));\n      }\n    "
                }
            }();
            n.TileProgram = a
        }, {"./shader_compiler": 38}],
        43: [function (e, t, n) {
            "use strict";

            function r(e) {
                var t = e.length;
                if (t > 4) throw Error("Transpose for rank " + t + " is not yet supported");
                for (var n = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], r = new Array(t), i = 0; i < e.length; i++) r[e[i]] = n[i];
                return r.join()
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("./shader_compiler"), a = function () {
                return function (e, t) {
                    this.variableNames = ["A"];
                    for (var n = new Array(e.length), a = 0; a < n.length; a++) n[a] = e[t[a]];
                    this.outputShape = n, this.rank = n.length;
                    var o = i.getCoordsDataType(this.rank), s = r(t);
                    this.userCode = "\n    void main() {\n      " + o + " resRC = getOutputCoords();\n      setOutput(getA(" + s + "));\n    }\n    "
                }
            }();
            n.TransposeProgram = a
        }, {"./shader_compiler": 38}],
        44: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../../ops/selu_util"), i = e("../../ops/erf_util"), a = function () {
                return function (e, t) {
                    this.variableNames = ["A"], this.outputShape = e, this.userCode = "\n      float unaryOperation(float x) {\n        " + t + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "
                }
            }();
            n.UnaryOpProgram = a;
            var o = "if (isNaN(x)) return x;";
            n.ABS = "return abs(x);", n.RELU = "return (x < 0.0) ? 0.0 : x;", n.ELU = "return (x >= 0.0) ? x : (exp(x) - 1.0);", n.SELU = "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = " + r.SELU_SCALEALPHA + ";\n  float scale = " + r.SELU_SCALE + ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n", n.STEP = function (e) {
                return void 0 === e && (e = 0), o + "\n    return x > 0.0 ? 1.0 : float(" + e + ");\n  "
            }, n.NEG = "return -x;", n.CEIL = "return ceil(x);", n.FLOOR = "return floor(x);", n.SIGN = "return sign(x);", n.ROUND = "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n", n.EXP = "return exp(x);", n.EXPM1 = "return exp(x) - 1.0;", n.LOG = "return log(x);", n.LOG1P = "return log(1.0 + x);", n.SQRT = "return sqrt(x);", n.RSQRT = "return inversesqrt(x);", n.SIGMOID = "return 1.0 / (1.0 + exp(-1.0 * x));", n.SOFTPLUS = "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n", n.SIN = "return sin(x);", n.COS = "return cos(x);", n.TAN = "return tan(x);", n.ASIN = "return asin(x);", n.ACOS = "return acos(x);", n.ATAN = o + "\n  return atan(x);\n", n.SINH = "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n", n.COSH = "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n", n.TANH = "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n", n.ASINH = "return log(x + sqrt(x * x + 1.0));", n.ACOSH = "return log(x + sqrt(x * x - 1.0));", n.ATANH = "return (log(1.0 + x) - log(1.0 - x)) / 2.0;", n.ERF = '\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas, \n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = ' + i.ERF_P + ";\n  float a1 = " + i.ERF_A1 + ";\n  float a2 = " + i.ERF_A2 + ";\n  float a3 = " + i.ERF_A3 + ";\n  float a4 = " + i.ERF_A4 + ";\n  float a5 = " + i.ERF_A5 + ";\n  \n  float t = 1.0 / (1.0 + p * x);\n  return 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x);\n", n.SQUARE = "return x * x;", n.RECIPROCAL = "return 1.0 / x;", n.LOGICAL_NOT = "return float(!(x >= 1.0));", n.TO_INT = "return float(int(x));"
        }, {"../../ops/erf_util": 56, "../../ops/selu_util": 72}],
        45: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                var n, r = g.ENV.get("WEBGL_VERSION");
                if (2 === r ? n = e.getContext("webgl2", t) : 1 === r && (n = e.getContext("webgl", t) || e.getContext("experimental-webgl", t)), 0 === r || null == n) throw new Error("This browser does not support WebGL.");
                return n
            }

            function i(e, t) {
                var n = t();
                return a(e), n
            }

            function a(e) {
                if (m) {
                    var t = e.getError();
                    if (t !== e.NO_ERROR) throw new Error("WebGL Error: " + o(e, t))
                }
            }

            function o(e, t) {
                switch (t) {
                    case e.NO_ERROR:
                        return "NO_ERROR";
                    case e.INVALID_ENUM:
                        return "INVALID_ENUM";
                    case e.INVALID_VALUE:
                        return "INVALID_VALUE";
                    case e.INVALID_OPERATION:
                        return "INVALID_OPERATION";
                    case e.INVALID_FRAMEBUFFER_OPERATION:
                        return "INVALID_FRAMEBUFFER_OPERATION";
                    case e.OUT_OF_MEMORY:
                        return "OUT_OF_MEMORY";
                    case e.CONTEXT_LOST_WEBGL:
                        return "CONTEXT_LOST_WEBGL";
                    default:
                        return "Unknown error code " + t
                }
            }

            function s(e, t) {
                var n = v.exec(t);
                if (null == n) return console.log("Couldn't parse line number in error: " + t), void console.log(e);
                for (var r = +n[1], i = e.split("\n"), a = i.length.toString().length + 2, o = i.map(function (e, t) {
                    return f.rightPad((t + 1).toString(), a) + e
                }), s = 0, u = 0; u < o.length; u++) s = Math.max(o[u].length, s);
                var l = o.slice(0, r - 1), c = o.slice(r - 1, r), p = o.slice(r);
                console.log(l.join("\n")), console.log(t.split("\n")[0]), console.log("%c " + f.rightPad(c[0], s), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(p.join("\n"))
            }

            function u(e) {
                return null != d ? d : d = i(e, function () {
                    return e.getParameter(e.MAX_TEXTURE_SIZE)
                })
            }

            function l(e, t, n) {
                h(e, n), i(e, function () {
                    return e.activeTexture(e.TEXTURE0 + n)
                }), i(e, function () {
                    return e.bindTexture(e.TEXTURE_2D, t)
                })
            }

            function c(e, t) {
                switch (t) {
                    case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                        return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
                    case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                        return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
                    case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                        return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
                    case e.FRAMEBUFFER_UNSUPPORTED:
                        return "FRAMEBUFFER_UNSUPPORTED";
                    default:
                        return "unknown error " + t
                }
            }

            function p(e, t, n) {
                var r = i(e, function () {
                    return t()
                });
                if (null == r) throw new Error(n);
                return r
            }

            function h(e, t) {
                var n = e.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1, r = t + e.TEXTURE0;
                if (r < e.TEXTURE0 || r > n) {
                    var i = "[gl.TEXTURE0, gl.TEXTURE" + n + "]";
                    throw new Error("textureUnit must be in " + i + ".")
                }
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var d = null, f = e("../../util"), g = e("../../environment");
            n.createWebGLRenderingContext = function (e) {
                var t = document.createElement("canvas");
                return t.width = 1, t.height = 1, r(t, e)
            }, n.createWebGLRenderingContextFromCanvas = r, n.callAndCheck = i;
            var m = !1;
            n.enableDebugWebGLErrorChecking = function (e) {
                m = e
            }, n.checkWebGLError = a, n.getWebGLErrorMessage = o, n.getExtensionOrThrow = function (e, t) {
                return p(e, function () {
                    return e.getExtension(t)
                }, 'Extension "' + t + '" not supported on this browser.')
            }, n.createVertexShader = function (e, t) {
                var n = p(e, function () {
                    return e.createShader(e.VERTEX_SHADER)
                }, "Unable to create vertex WebGLShader.");
                if (i(e, function () {
                    return e.shaderSource(n, t)
                }), i(e, function () {
                    return e.compileShader(n)
                }), !1 === e.getShaderParameter(n, e.COMPILE_STATUS)) throw console.log(e.getShaderInfoLog(n)), new Error("Failed to compile vertex shader.");
                return n
            }, n.createFragmentShader = function (e, t) {
                var n = p(e, function () {
                    return e.createShader(e.FRAGMENT_SHADER)
                }, "Unable to create fragment WebGLShader.");
                if (i(e, function () {
                    return e.shaderSource(n, t)
                }), i(e, function () {
                    return e.compileShader(n)
                }), !1 === e.getShaderParameter(n, e.COMPILE_STATUS)) throw s(t, e.getShaderInfoLog(n)), new Error("Failed to compile fragment shader.");
                return n
            };
            var v = /ERROR: [0-9]+:([0-9]+):/g;
            n.createProgram = function (e) {
                return p(e, function () {
                    return e.createProgram()
                }, "Unable to create WebGLProgram.")
            }, n.linkProgram = function (e, t) {
                if (i(e, function () {
                    return e.linkProgram(t)
                }), !1 === e.getProgramParameter(t, e.LINK_STATUS)) throw console.log(e.getProgramInfoLog(t)), new Error("Failed to link vertex and fragment shaders.")
            }, n.validateProgram = function (e, t) {
                if (i(e, function () {
                    return e.validateProgram(t)
                }), !1 === e.getProgramParameter(t, e.VALIDATE_STATUS)) throw console.log(e.getProgramInfoLog(t)), new Error("Shader program validation failed.")
            }, n.createStaticVertexBuffer = function (e, t) {
                var n = p(e, function () {
                    return e.createBuffer()
                }, "Unable to create WebGLBuffer");
                return i(e, function () {
                    return e.bindBuffer(e.ARRAY_BUFFER, n)
                }), i(e, function () {
                    return e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW)
                }), n
            }, n.createStaticIndexBuffer = function (e, t) {
                var n = p(e, function () {
                    return e.createBuffer()
                }, "Unable to create WebGLBuffer");
                return i(e, function () {
                    return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n)
                }), i(e, function () {
                    return e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, e.STATIC_DRAW)
                }), n
            }, n.queryMaxTextureSize = u, n.getChannelsPerTexture = function () {
                return g.ENV.get("WEBGL_FLOAT_TEXTURE_ENABLED") && 2 === g.ENV.get("WEBGL_VERSION") ? 1 : 4
            }, n.createTexture = function (e) {
                return p(e, function () {
                    return e.createTexture()
                }, "Unable to create WebGLTexture.")
            }, n.validateTextureSize = function (e, t, n) {
                var r = u(e);
                if (t <= 0 || n <= 0) throw i = "[" + t + "x" + n + "]", new Error("Requested texture size " + i + " is invalid.");
                if (t > r || n > r) {
                    var i = "[" + t + "x" + n + "]", a = "[" + r + "x" + r + "]";
                    throw new Error("Requested texture size " + i + " greater than WebGL maximum on this browser / GPU " + a + ".")
                }
            }, n.createFramebuffer = function (e) {
                return p(e, function () {
                    return e.createFramebuffer()
                }, "Unable to create WebGLFramebuffer.")
            }, n.bindVertexBufferToProgramAttribute = function (e, t, n, r, a, o, s) {
                var u = e.getAttribLocation(t, n);
                return -1 !== u && (i(e, function () {
                    return e.bindBuffer(e.ARRAY_BUFFER, r)
                }), i(e, function () {
                    return e.vertexAttribPointer(u, a, e.FLOAT, !1, o, s)
                }), i(e, function () {
                    return e.enableVertexAttribArray(u)
                }), !0)
            }, n.bindTextureUnit = l, n.unbindTextureUnit = function (e, t) {
                h(e, t), i(e, function () {
                    return e.activeTexture(e.TEXTURE0 + t)
                }), i(e, function () {
                    return e.bindTexture(e.TEXTURE_2D, null)
                })
            }, n.getProgramUniformLocationOrThrow = function (e, t, n) {
                return p(e, function () {
                    return e.getUniformLocation(t, n)
                }, 'uniform "' + n + '" not present in program.')
            }, n.getProgramUniformLocation = function (e, t, n) {
                return e.getUniformLocation(t, n)
            }, n.bindTextureToProgramUniformSampler = function (e, t, n, r, a) {
                i(e, function () {
                    return l(e, n, a)
                }), i(e, function () {
                    return e.uniform1i(r, a)
                })
            }, n.bindCanvasToFramebuffer = function (e) {
                i(e, function () {
                    return e.bindFramebuffer(e.FRAMEBUFFER, null)
                }), i(e, function () {
                    return e.viewport(0, 0, e.canvas.width, e.canvas.height)
                }), i(e, function () {
                    return e.scissor(0, 0, e.canvas.width, e.canvas.height)
                })
            }, n.bindColorTextureToFramebuffer = function (e, t, n) {
                i(e, function () {
                    return e.bindFramebuffer(e.FRAMEBUFFER, n)
                }), i(e, function () {
                    return e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0)
                })
            }, n.unbindColorTextureFromFramebuffer = function (e, t) {
                i(e, function () {
                    return e.bindFramebuffer(e.FRAMEBUFFER, t)
                }), i(e, function () {
                    return e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, null, 0)
                })
            }, n.validateFramebuffer = function (e) {
                var t = e.checkFramebufferStatus(e.FRAMEBUFFER);
                if (t !== e.FRAMEBUFFER_COMPLETE) throw new Error("Error binding framebuffer: " + c(e, t))
            }, n.getFramebufferErrorMessage = c, n.getTextureShapeFromLogicalShape = function (e, t) {
                2 !== t.length && (t = f.squeezeShape(t).newShape);
                var n = u(e), r = f.sizeFromShape(t);
                return t.length <= 1 && r <= n ? [r, 1] : 2 === t.length && t[0] <= n && t[1] <= n ? t : 3 === t.length && t[0] <= n && t[1] * t[2] <= n ? [t[0], t[1] * t[2]] : 4 === t.length && t[0] <= n && t[1] * t[2] * t[3] <= n ? [t[0], t[1] * t[2] * t[3]] : f.sizeToSquarishShape(r)
            }
        }, {"../../environment": 5, "../../util": 95}],
        46: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (null == t || "float32" === t) return new Float32Array(e);
                if ("int32" === t) return new Int32Array(e);
                if ("bool" === t) return new Uint8Array(e);
                throw new Error("Unknown data type $ {dtype}")
            }

            function i(e, t) {
                for (var n = r(e, t), i = 0; i < n.length; i++) n[i] = 1;
                return n
            }

            function a(e, t) {
                return o(e, t) ? e : (Array.isArray(e) && (e = f.flatten(e)), f.copyTypedArray(e, t))
            }

            function o(e, t) {
                return e instanceof Float32Array && "float32" === t || e instanceof Int32Array && "int32" === t || e instanceof Uint8Array && "bool" === t
            }

            var s = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }, u = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, l = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var c = e("../doc"), p = e("../environment"), h = e("../tensor"), d = e("../tensor_util"), f = e("../util"),
                g = e("./axis_util"), m = e("./concat"), v = e("./operation"), y = e("./rand"), b = function () {
                    function e() {
                    }

                    return e.tensor = function (e, t, n) {
                        void 0 === n && (n = "float32");
                        var r = f.inferShape(e);
                        return null != t && 1 !== r.length && f.assertShapesMatch(t, r, "Error creating a new Tensor. Inferred shape (" + r + ") does not match the provided shape (" + t + "). "), f.isTypedArray(e) || Array.isArray(e) || (e = [e]), t = t || r, h.Tensor.make(t, {values: a(e, n)}, n)
                    }, e.scalar = function (t, n) {
                        if (void 0 === n && (n = "float32"), f.isTypedArray(t) || Array.isArray(t)) throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean)");
                        return e.tensor(t, [], n)
                    }, e.tensor1d = function (t, n) {
                        void 0 === n && (n = "float32");
                        var r = f.inferShape(t);
                        if (1 !== r.length) throw new Error("tensor1d() requires values to be a flat/TypedArray");
                        return e.tensor(t, r, n)
                    }, e.tensor2d = function (t, n, r) {
                        void 0 === r && (r = "float32");
                        var i = f.inferShape(t);
                        if (2 !== i.length && 1 !== i.length) throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
                        if (1 === i.length && null == n) throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
                        return n = n || i, e.tensor(t, n, r)
                    }, e.tensor3d = function (t, n, r) {
                        void 0 === r && (r = "float32");
                        var i = f.inferShape(t);
                        if (3 !== i.length && 1 !== i.length) throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
                        if (1 === i.length && null == n) throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
                        return n = n || i, e.tensor(t, n, r)
                    }, e.tensor4d = function (t, n, r) {
                        void 0 === r && (r = "float32");
                        var i = f.inferShape(t);
                        if (4 !== i.length && 1 !== i.length) throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
                        if (1 === i.length && null == n) throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
                        return n = n || i, e.tensor(t, n, r)
                    }, e.ones = function (e, t) {
                        void 0 === t && (t = "float32");
                        var n = i(f.sizeFromShape(e), t);
                        return h.Tensor.make(e, {values: n}, t)
                    }, e.zeros = function (e, t) {
                        void 0 === t && (t = "float32");
                        var n = r(f.sizeFromShape(e), t);
                        return h.Tensor.make(e, {values: n}, t)
                    }, e.fill = function (e, t, n) {
                        void 0 === n && (n = "float32");
                        var r = f.getTypedArrayFromDType(n, f.sizeFromShape(e));
                        return r.fill(t), h.Tensor.make(e, {values: r}, n)
                    }, e.onesLike = function (t) {
                        return f.assertArgumentsAreTensors({x: t}, "onesLike"), e.ones(t.shape, t.dtype)
                    }, e.zerosLike = function (t) {
                        return f.assertArgumentsAreTensors({x: t}, "zerosLike"), e.zeros(t.shape, t.dtype)
                    }, e.clone = function (e) {
                        f.assertArgumentsAreTensors({x: e}, "clone");
                        return p.ENV.engine.runKernel(function (t) {
                            return h.Tensor.make(e.shape, {dataId: e.dataId}, e.dtype)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return e.toFloat()
                                }
                            }
                        })
                    }, e.randomNormal = function (t, n, r, i, a) {
                        if (void 0 === n && (n = 0), void 0 === r && (r = 1), null != i && "bool" === i) throw new Error("Unsupported data type " + i);
                        for (var o = new y.MPRandGauss(n, r, i, !1, a), s = e.buffer(t, i), u = 0; u < s.values.length; u++) s.values[u] = o.nextValue();
                        return s.toTensor()
                    }, e.truncatedNormal = function (t, n, r, i, a) {
                        if (void 0 === n && (n = 0), void 0 === r && (r = 1), null != i && "bool" === i) throw new Error("Unsupported data type " + i);
                        for (var o = new y.MPRandGauss(n, r, i, !0, a), s = e.buffer(t, i), u = 0; u < s.values.length; u++) s.values[u] = o.nextValue();
                        return s.toTensor()
                    }, e.randomUniform = function (t, n, r, i) {
                        void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = "float32");
                        for (var a = e.buffer(t, i), o = 0; o < a.values.length; o++) a.values[o] = f.randUniform(n, r);
                        return a.toTensor()
                    }, e.rand = function (e, t, n) {
                        var r = f.sizeFromShape(e), i = null;
                        if (null == n || "float32" === n) i = new Float32Array(r); else if ("int32" === n) i = new Int32Array(r); else {
                            if ("bool" !== n) throw new Error("Unknown data type " + n);
                            i = new Uint8Array(r)
                        }
                        for (var a = 0; a < r; a++) i[a] = t();
                        return h.Tensor.make(e, {values: i}, n)
                    }, e.multinomial = function (e, t, n, r) {
                        void 0 === r && (r = !1), f.assertArgumentsAreTensors({logits: e}, "multinomial");
                        var i = e.size, a = e.rank;
                        if (i < 2) throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + i + ".");
                        if (a > 2) throw new Error("Rank of probabilities must be 1 or 2, but is " + a);
                        n = n || Math.random();
                        var o = 1 === a ? e.as2D(1, -1) : e, s = p.ENV.engine.runKernel(function (e) {
                            return e.multinomial(o, r, t, n)
                        }, {logits2D: o});
                        return 1 === a ? s.as1D() : s
                    }, e.oneHot = function (e, t, n, r) {
                        if (void 0 === n && (n = 1), void 0 === r && (r = 0), f.assert("int32" === e.dtype, "Indices must be of dtype `int32`"), t < 2) throw new Error("Error in oneHot: depth must be >=2, but it is " + t);
                        return p.ENV.engine.runKernel(function (i) {
                            return i.oneHot(e, t, n, r)
                        }, {indices: e})
                    }, e.fromPixels = function (e, t) {
                        if (void 0 === t && (t = 3), t > 4) throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
                        return p.ENV.engine.fromPixels(e, t)
                    }, e.toPixels = function (e, t) {
                        return u(this, void 0, void 0, function () {
                            var n, r, i, a, o, s, u, c, p, h, d, g, m, v, y, b, w;
                            return l(this, function (l) {
                                switch (l.label) {
                                    case 0:
                                        if (f.assertArgumentsAreTensors({img: e}, "toPixels"), 2 !== e.rank && 3 !== e.rank) throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + e.rank + ".");
                                        if (n = e.shape.slice(0, 2), r = n[0], i = n[1], (a = 2 === e.rank ? 1 : e.shape[2]) > 4 || 2 === a) throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + a);
                                        return [4, e.min().data()];
                                    case 1:
                                        return o = l.sent()[0], [4, e.max().data()];
                                    case 2:
                                        if (s = l.sent()[0], "float32" === e.dtype) {
                                            if (o < 0 || s > 1) throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + o + " - " + s + "].")
                                        } else {
                                            if ("int32" !== e.dtype) throw new Error("Unsupported type for toPixels: " + e.dtype + ". Please use float32 or int32 tensors.");
                                            if (o < 0 || s > 255) throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + o + " - " + s + "].")
                                        }
                                        return [4, e.data()];
                                    case 3:
                                        for (u = l.sent(), c = "float32" === e.dtype ? 255 : 1, p = new Uint8ClampedArray(i * r * 4), h = 0; h < r * i; ++h) d = void 0, g = void 0, m = void 0, v = void 0, 1 === a ? (d = u[h] * c, g = u[h] * c, m = u[h] * c, v = 255) : 3 === a ? (d = u[3 * h] * c, g = u[3 * h + 1] * c, m = u[3 * h + 2] * c, v = 255) : 4 === a && (d = u[4 * h] * c, g = u[4 * h + 1] * c, m = u[4 * h + 2] * c, v = u[4 * h + 3] * c), p[(y = 4 * h) + 0] = Math.round(d), p[y + 1] = Math.round(g), p[y + 2] = Math.round(m), p[y + 3] = Math.round(v);
                                        return null != t && (t.width = i, t.height = r, b = t.getContext("2d"), w = new ImageData(p, i, r), b.putImageData(w, 0, 0)), [2, p]
                                }
                            })
                        })
                    }, e.reshape = function (e, t) {
                        f.assertArgumentsAreTensors({x: e}, "reshape"), t = f.inferFromImplicitShape(t, e.size), f.assert(e.size === f.sizeFromShape(t), "new shape and old shape must have the same number of elements.");
                        return p.ENV.engine.runKernel(function (n) {
                            return n.reshape(e, t)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.reshape(e.shape)
                                }
                            }
                        })
                    }, e.squeeze = function (t, n) {
                        return f.assertArgumentsAreTensors({x: t}, "squeeze"), e.reshape(t, f.squeezeShape(t.shape, n).newShape)
                    }, e.cast = function (e, t) {
                        f.assertArgumentsAreTensors({x: e}, "cast");
                        return p.ENV.engine.runKernel(function (n) {
                            return n.cast(e, t)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return e.clone()
                                }
                            }
                        })
                    }, e.tile = function (t, n) {
                        f.assertArgumentsAreTensors({x: t}, "tile"), f.assert(t.rank === n.length, "Error in transpose: rank of input " + t.rank + " must match length of reps " + n + ".");
                        return p.ENV.engine.runKernel(function (e) {
                            return e.tile(t, n)
                        }, {x: t}, function (r) {
                            return {
                                x: function () {
                                    var i = e.zerosLike(t);
                                    if (1 === t.rank) for (a = 0; a < n[0]; ++a) i = i.add(r.slice([a * t.shape[0]], [t.shape[0]])); else if (2 === t.rank) for (a = 0; a < n[0]; ++a) for (o = 0; o < n[1]; ++o) i = i.add(r.slice([a * t.shape[0], o * t.shape[1]], [t.shape[0], t.shape[1]])); else if (3 === t.rank) for (a = 0; a < n[0]; ++a) for (o = 0; o < n[1]; ++o) for (s = 0; s < n[2]; ++s) i = i.add(r.slice([a * t.shape[0], o * t.shape[1], s * t.shape[2]], [t.shape[0], t.shape[1], t.shape[2]])); else {
                                        if (4 !== t.rank) throw new Error("Gradient for tile operation is not implemented for rank-" + t.rank + " tensors yet.");
                                        for (var a = 0; a < n[0]; ++a) for (var o = 0; o < n[1]; ++o) for (var s = 0; s < n[2]; ++s) for (var u = 0; u < n[3]; ++u) i = i.add(r.slice([a * t.shape[0], o * t.shape[1], s * t.shape[2], u * t.shape[3]], [t.shape[0], t.shape[1], t.shape[2], t.shape[3]]))
                                    }
                                    return i
                                }
                            }
                        })
                    }, e.gather = function (e, t, n) {
                        void 0 === n && (n = 0), f.assertArgumentsAreTensors({
                            x: e,
                            indices: t
                        }, "gather"), f.assert("int32" === t.dtype, "Indices must be of dtype `int32`");
                        var r = g.parseAxisParam(n, e.shape);
                        return p.ENV.engine.runKernel(function (n) {
                            return n.gather(e, t, r[0])
                        }, {x: e, indices: t})
                    }, e.pad1d = function (t, n, r) {
                        return void 0 === r && (r = 0), f.assert(2 === n.length, "Invalid number of paddings. Must be length of 2."), e.pad(t, [n], r)
                    }, e.pad2d = function (t, n, r) {
                        return void 0 === r && (r = 0), f.assert(2 === n.length && 2 === n[0].length && 2 === n[1].length, "Invalid number of paddings. Must be length of 2 each."), e.pad(t, n, r)
                    }, e.pad3d = function (t, n, r) {
                        return void 0 === r && (r = 0), f.assert(3 === n.length && 2 === n[0].length && 2 === n[1].length && 2 === n[2].length, "Invalid number of paddings. Must be length of 2 each."), e.pad(t, n, r)
                    }, e.pad4d = function (t, n, r) {
                        return void 0 === r && (r = 0), f.assert(4 === n.length && 2 === n[0].length && 2 === n[1].length && 2 === n[2].length && 2 === n[3].length, "Invalid number of paddings. Must be length of 2 each."), e.pad(t, n, r)
                    }, e.pad = function (e, t, n) {
                        if (void 0 === n && (n = 0), f.assertArgumentsAreTensors({x: e}, "pad"), 0 === e.rank) throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
                        var r = t.map(function (e) {
                            return e[0]
                        });
                        return p.ENV.engine.runKernel(function (r) {
                            return r.pad(e, t, n)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.slice(r, e.shape)
                                }
                            }
                        })
                    }, e.stack = function (e, t) {
                        if (void 0 === t && (t = 0), f.assertArgumentsAreTensors({tensors: e}, "stack"), f.assert(e.length >= 1, "Pass at least one tensor to tf.stack"), 1 === e.length) return e[0].expandDims(t);
                        var n = e[0].rank, r = e[0].shape, i = e[0].dtype;
                        f.assert(t <= n, "Axis must be <= rank of the tensor"), e.forEach(function (e) {
                            f.assertShapesMatch(r, e.shape, "All tensors passed to stack must have matching shapes")
                        }), e.forEach(function (e) {
                            f.assert(i === e.dtype, "All tensors passed to stack must have matching dtypes")
                        });
                        var a = e.map(function (e) {
                            return e.expandDims(t)
                        });
                        return m.ConcatOps.concat(a, t)
                    }, e.split = function (e, t, n) {
                        void 0 === n && (n = 0), f.assertArgumentsAreTensors({x: e}, "split"), n = g.parseAxisParam(n, e.shape)[0];
                        var r;
                        "number" == typeof t ? (f.assert(e.shape[n] % t == 0, "Number of splits must evenly divide the axis."), r = Array(t).fill(e.shape[n] / t)) : (f.assert(e.shape[n] === t.reduce(function (e, t) {
                            return e + t
                        }), "The sum of sizes must match the size of the axis dimension."), r = t);
                        var i = Array(e.rank).fill(0), a = e.shape.slice();
                        return r.map(function (t) {
                            a[n] = t;
                            var r = e.slice(i, a);
                            return i[n] += t, r
                        })
                    }, e.expandDims = function (t, n) {
                        void 0 === n && (n = 0), f.assertArgumentsAreTensors({x: t}, "expandDims"), f.assert(n <= t.rank, "Axis must be <= rank of the tensor");
                        var r = t.shape.slice();
                        return r.splice(n, 0, 1), e.reshape(t, r)
                    }, e.linspace = function (t, n, i) {
                        if (0 === i) throw new Error("Cannot request zero samples");
                        var a = (n - t) / (i - 1), o = r(i, "float32");
                        o[0] = t;
                        for (var s = 1; s < o.length; s++) o[s] = o[s - 1] + a;
                        return e.tensor1d(o, "float32")
                    }, e.range = function (t, n, i, a) {
                        if (void 0 === i && (i = 1), void 0 === a && (a = "float32"), 0 === i) throw new Error("Cannot have a step of zero");
                        var o = t === n, s = t < n && i < 0, u = n < t && i > 1;
                        if (o || s || u) return e.zeros([0], a);
                        var l = r(Math.abs(Math.ceil((n - t) / i)), a);
                        n < t && 1 === i && (i = -1), l[0] = t;
                        for (var c = 1; c < l.length; c++) l[c] = l[c - 1] + i;
                        return e.tensor1d(l, a)
                    }, e.buffer = function (e, t, n) {
                        return void 0 === t && (t = "float32"), new h.TensorBuffer(e, t, n)
                    }, e.print = function (e, t) {
                        void 0 === t && (t = !1), console.log(d.tensorToString(e, t))
                    }, s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "tensor", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "scalar", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "tensor1d", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "tensor2d", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "tensor3d", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "tensor4d", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "ones", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "zeros", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "fill", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "onesLike", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "zerosLike", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "clone", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "randomNormal", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "truncatedNormal", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "randomUniform", null), s([v.operation], e, "rand", null), s([v.operation], e, "multinomial", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "oneHot", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    }), v.operation], e, "fromPixels", null), s([c.doc({heading: "Visualization"})], e, "toPixels", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Transformations"
                    }), v.operation], e, "reshape", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Transformations"
                    })], e, "squeeze", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Transformations"
                    }), v.operation], e, "cast", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Slicing and Joining"
                    }), v.operation], e, "tile", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Slicing and Joining"
                    }), v.operation], e, "gather", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Transformations"
                    }), v.operation], e, "pad", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Slicing and Joining"
                    }), v.operation], e, "stack", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Slicing and Joining"
                    }), v.operation], e, "split", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Transformations"
                    }), v.operation], e, "expandDims", null), s([v.operation, c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "linspace", null), s([v.operation, c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "range", null), s([c.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e, "buffer", null), s([c.doc({heading: "Tensors", subheading: "Creation"})], e, "print", null), e
                }();
            n.ArrayOps = b
        }, {
            "../doc": 3,
            "../environment": 5,
            "../tensor": 89,
            "../tensor_util": 90,
            "../util": 95,
            "./axis_util": 47,
            "./concat": 52,
            "./operation": 65,
            "./rand": 68
        }],
        47: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < e.length; ++n) if (e[e.length - n - 1] !== t - 1 - n) return !1;
                return !0
            }

            function i(e, t, n) {
                for (var r = e.length + t.length, i = [], a = 0, o = 0, s = 0; s < r; s++) -1 === n.indexOf(s) ? i.push(e[a++]) : i.push(t[o++]);
                return i
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("../util");
            n.axesAreInnerMostDims = r, n.combineLocations = i, n.computeOutAndReduceShapes = function (e, t) {
                for (var n = [], r = e.length, i = 0; i < r; i++) -1 === t.indexOf(i) && n.push(e[i]);
                return [n, t.map(function (t) {
                    return e[t]
                })]
            }, n.expandShapeToKeepDim = function (e, t) {
                return i(e, t.map(function (e) {
                    return 1
                }), t)
            }, n.parseAxisParam = function (e, t) {
                var n = t.length;
                return e = null == e ? t.map(function (e, t) {
                    return t
                }) : [].concat(e), a.assert(e.every(function (e) {
                    return e >= -n && e < n
                }), "All values in axis param must be in range [-" + n + ", " + n + ") but got axis " + e), a.assert(e.every(function (e) {
                    return a.isInt(e)
                }), "All values in axis param must be integers but got axis " + e), e.map(function (e) {
                    return e < 0 ? n + e : e
                })
            }, n.assertAxesAreInnerMostDims = function (e, t, n) {
                a.assert(r(t, n), e + " supports only inner-most axes for now. Got axes " + t + " and rank-" + n + " input.")
            }, n.getAxesPermutation = function (e, t) {
                if (r(e, t)) return null;
                for (var n = [], i = 0; i < t; ++i) -1 === e.indexOf(i) && n.push(i);
                return e.forEach(function (e) {
                    return n.push(e)
                }), n
            }, n.getUndoAxesPermutation = function (e) {
                return e.map(function (e, t) {
                    return [t, e]
                }).sort(function (e, t) {
                    return e[1] - t[1]
                }).map(function (e) {
                    return e[0]
                })
            }, n.getInnerMostAxes = function (e, t) {
                for (var n = [], r = t - e; r < t; ++r) n.push(r);
                return n
            }
        }, {"../util": 95}],
        48: [function (e, t, n) {
            "use strict";

            function r(e) {
                return null == e ? null : 0 === e.rank ? e.as1D() : 1 === e.rank ? e : 2 === e.rank ? e.as4D(1, 1, e.shape[0], e.shape[1]) : 3 === e.rank ? e.as4D(1, e.shape[0], e.shape[1], e.shape[2]) : e
            }

            var i = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("../doc"), o = e("../environment"), s = e("../util"), u = e("./array_ops"),
                l = e("./broadcast_util"), c = e("./operation"), p = e("./ops"), h = function () {
                    function e() {
                    }

                    return e.batchNormalization2d = function (t, n, r, i, a, o) {
                        return void 0 === i && (i = .001), s.assert(2 === t.rank, "Error in batchNormalization3D: x must be rank 3 but got rank " + t.rank + "."), s.assert(2 === n.rank || 1 === n.rank, "Error in batchNormalization2D: mean must be rank 2 or rank 1 but got rank " + n.rank + "."), s.assert(2 === r.rank || 1 === r.rank, "Error in batchNormalization2D: variance must be rank 2 or rank 1 but got rank " + r.rank + "."), null != a && s.assert(2 === a.rank || 1 === a.rank, "Error in batchNormalization2D: scale must be rank 2 or rank 1 but got rank " + a.rank + "."), null != o && s.assert(2 === o.rank || 1 === o.rank, "Error in batchNormalization2D: offset must be rank 2 or rank 1 but got rank " + o.rank + "."), e.batchNormalization(t, n, r, i, a, o)
                    }, e.batchNormalization3d = function (t, n, r, i, a, o) {
                        return void 0 === i && (i = .001), s.assert(3 === t.rank, "Error in batchNormalization3D: x must be rank 3 but got rank " + t.rank + "."), s.assert(3 === n.rank || 1 === n.rank, "Error in batchNormalization3D: mean must be rank 3 or rank 1 but got rank " + n.rank + "."), s.assert(3 === r.rank || 1 === r.rank, "Error in batchNormalization3D: variance must be rank 3 or rank 1 but got rank " + r.rank + "."), null != a && s.assert(3 === a.rank || 1 === a.rank, "Error in batchNormalization3D: scale must be rank 3 or rank 1 but got rank " + a.rank + "."), null != o && s.assert(3 === o.rank || 1 === o.rank, "Error in batchNormalization3D: offset must be rank 3 or rank 1 but got rank " + o.rank + "."), e.batchNormalization(t, n, r, i, a, o)
                    }, e.batchNormalization4d = function (t, n, r, i, a, o) {
                        return void 0 === i && (i = .001), s.assert(4 === t.rank, "Error in batchNormalization4D: x must be rank 4 but got rank " + t.rank + "."), s.assert(4 === n.rank || 1 === n.rank, "Error in batchNormalization4D: mean must be rank 4 or rank 1 but got rank " + n.rank + "."), s.assert(4 === r.rank || 1 === r.rank, "Error in batchNormalization4D: variance must be rank 4 or rank 1 but got rank " + r.rank + "."), null != a && s.assert(4 === a.rank || 1 === a.rank, "Error in batchNormalization4D: scale must be rank 4 or rank 1 but got rank " + a.rank + "."), null != o && s.assert(4 === o.rank || 1 === o.rank, "Error in batchNormalization4D: offset must be rank 4 or rank 1 but got rank " + o.rank + "."), e.batchNormalization(t, n, r, i, a, o)
                    }, e.batchNormalization = function (e, t, n, i, a, c) {
                        void 0 === i && (i = .001), s.assertArgumentsAreTensors({
                            x: e,
                            mean: t,
                            variance: n
                        }, "batchNormalization"), null != a && s.assertArgumentsAreTensors({scale: a}, "batchNormalization"), null != c && s.assertArgumentsAreTensors({offset: c}, "batchNormalization"), s.assert(t.rank === n.rank, "Batch normalization gradient requires mean and variance to have equal ranks."), s.assert(null == c || t.rank === c.rank, "Batch normalization gradient requires mean and offset to have equal ranks."), s.assert(null == a || t.rank === a.rank, "Batch normalization gradient requires mean and scale to have equal ranks.");
                        var h;
                        h = 0 === e.rank || 1 === e.rank ? e.as4D(1, 1, 1, e.size) : 2 === e.rank ? e.as4D(1, 1, e.shape[0], e.shape[1]) : 3 === e.rank ? e.as4D(1, e.shape[0], e.shape[1], e.shape[2]) : e;
                        return o.ENV.engine.runKernel(function (e) {
                            return e.batchNormalization(h, r(t), r(n), i, r(a), r(c))
                        }, {x: e, mean: t, variance: n, scale: a, offset: c}, function (r) {
                            var o = null == a ? u.ArrayOps.scalar(1) : a, s = l.getReductionAxes(t.shape, h.shape), c = [];
                            if (1 === t.rank) {
                                for (var d = 0; d < h.shape.length - 1; ++d) c.push(h.shape[d]);
                                c.push(1)
                            }
                            var f = e.sub(t), g = r.mul(o), m = p.rsqrt(n.add(u.ArrayOps.scalar(i))),
                                v = m.mul(m).mul(m).mul(u.ArrayOps.scalar(-.5));
                            return {
                                x: function () {
                                    return 1 === t.rank ? r.mul(u.ArrayOps.tile(m.as4D(1, 1, 1, t.shape[0]), c)).mul(o).reshape(e.shape) : r.mul(m).mul(o).reshape(e.shape)
                                }, mean: function () {
                                    var e = m.mul(u.ArrayOps.scalar(-1)).mul(g);
                                    return 1 === t.rank && (e = e.sum(s)), e.reshape(t.shape)
                                }, variance: function () {
                                    var e = v.mul(f).mul(g);
                                    return 1 === t.rank && (e = e.sum(s)), e.reshape(t.shape)
                                }, scale: function () {
                                    var e = f.mul(m), n = r.mul(e);
                                    return 1 === t.rank && (n = n.sum(s)), n.reshape(t.shape)
                                }, offset: function () {
                                    var e = r;
                                    return 1 === t.rank && (e = e.sum(s)), e.reshape(t.shape)
                                }
                            }
                        }).reshape(e.shape)
                    }, i([c.operation], e, "batchNormalization2d", null), i([c.operation], e, "batchNormalization3d", null), i([c.operation], e, "batchNormalization4d", null), i([a.doc({
                        heading: "Operations",
                        subheading: "Normalization"
                    })], e, "batchNormalization", null), e
                }();
            n.BatchNormOps = h
        }, {
            "../doc": 3,
            "../environment": 5,
            "../util": 95,
            "./array_ops": 46,
            "./broadcast_util": 50,
            "./operation": 65,
            "./ops": 66
        }],
        49: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../types"), s = e("../util"),
                u = e("./broadcast_util"), l = e("./operation"), c = e("./ops"), p = function () {
                    function e() {
                    }

                    return e.add = function (e, t) {
                        s.assertArgumentsAreTensors({a: e, b: t}, "add"), s.assertTypesMatch(e, t);
                        var n = u.assertAndGetBroadcastShape(e.shape, t.shape);
                        return a.ENV.engine.runKernel(function (n) {
                            return n.add(e, t)
                        }, {a: e, b: t}, function (r) {
                            return {
                                a: function () {
                                    var t = r, i = u.getReductionAxes(e.shape, n);
                                    return i.length > 0 && (t = t.sum(i)), t.reshape(e.shape)
                                }, b: function () {
                                    var e = r, i = u.getReductionAxes(t.shape, n);
                                    return i.length > 0 && (e = e.sum(i)), e.reshape(t.shape)
                                }
                            }
                        })
                    }, e.addStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in addStrict: "), e.add(t)
                    }, e.sub = function (e, t) {
                        s.assertArgumentsAreTensors({a: e, b: t}, "sub"), s.assertTypesMatch(e, t);
                        var n = u.assertAndGetBroadcastShape(e.shape, t.shape);
                        return a.ENV.engine.runKernel(function (n) {
                            return n.subtract(e, t)
                        }, {a: e, b: t}, function (r) {
                            return {
                                a: function () {
                                    var t = r, i = u.getReductionAxes(e.shape, n);
                                    return i.length > 0 && (t = t.sum(i)), t.reshape(e.shape)
                                }, b: function () {
                                    var e = r, i = u.getReductionAxes(t.shape, n);
                                    return i.length > 0 && (e = e.sum(i)), e.neg().reshape(t.shape)
                                }
                            }
                        })
                    }, e.subStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in subStrict: "), e.sub(t)
                    }, e.pow = function (e, t) {
                        s.assertArgumentsAreTensors({base: e, exp: t}, "pow");
                        var n = u.assertAndGetBroadcastShape(e.shape, t.shape);
                        e = e.cast(o.upcastType(e.dtype, t.dtype)), t = t.cast(o.upcastType(e.dtype, t.dtype));
                        return a.ENV.engine.runKernel(function (n, r) {
                            return r(n.pow(e, t))
                        }, {base: e, exp: t}, function (r, i) {
                            var a = i[0];
                            return {
                                base: function () {
                                    var i = r.mul(t.toFloat().mul(a.div(e))), o = u.getReductionAxes(e.shape, n);
                                    return o.length > 0 && (i = i.sum(o)), i.reshape(e.shape)
                                }, exp: function () {
                                    var i = r.mul(a.mul(e.log()).toFloat()), o = u.getReductionAxes(t.shape, n);
                                    return o.length > 0 && (i = i.sum(o)), i.reshape(t.shape)
                                }
                            }
                        })
                    }, e.powStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in powStrict: "), e.pow(t)
                    }, e.mul = function (e, t) {
                        s.assertArgumentsAreTensors({a: e, b: t}, "mul"), s.assertTypesMatch(e, t);
                        var n = u.assertAndGetBroadcastShape(e.shape, t.shape);
                        return a.ENV.engine.runKernel(function (n) {
                            return n.multiply(e, t)
                        }, {a: e, b: t}, function (r) {
                            return {
                                a: function () {
                                    var i = r.mul(t.toFloat()), a = u.getReductionAxes(e.shape, n);
                                    return a.length > 0 ? i.sum(a).reshape(e.shape) : i
                                }, b: function () {
                                    var i = r.mul(e.toFloat()), a = u.getReductionAxes(t.shape, n);
                                    return a.length > 0 ? i.sum(a).reshape(t.shape) : i
                                }
                            }
                        })
                    }, e.mulStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in multiplyStrict: "), e.mul(t)
                    }, e.div = function (e, t) {
                        s.assertArgumentsAreTensors({a: e, b: t}, "div"), s.assertTypesMatch(e, t);
                        var n = u.assertAndGetBroadcastShape(e.shape, t.shape);
                        return a.ENV.engine.runKernel(function (n) {
                            return n.divide(e, t)
                        }, {a: e, b: t}, function (r) {
                            return {
                                a: function () {
                                    var i = r.div(t.toFloat()), a = u.getReductionAxes(e.shape, n);
                                    return a.length > 0 ? i.sum(a).reshape(e.shape) : i
                                }, b: function () {
                                    var i = r.mul(e.toFloat()), a = u.getReductionAxes(t.shape, n);
                                    a.length > 0 && (i = i.sum(a).reshape(t.shape));
                                    var o = t.square();
                                    return i.div(o.toFloat()).neg()
                                }
                            }
                        })
                    }, e.divStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in divideStrict: "), e.div(t)
                    }, e.mod = function (e, t) {
                        s.assertArgumentsAreTensors({a: e, b: t}, "mod"), s.assertTypesMatch(e, t);
                        var n = u.assertAndGetBroadcastShape(e.shape, t.shape);
                        return a.ENV.engine.runKernel(function (n) {
                            return n.mod(e, t)
                        }, {a: e, b: t}, function (r) {
                            return {
                                a: function () {
                                    var t = u.getReductionAxes(e.shape, n);
                                    return t.length > 0 ? r.sum(t).reshape(e.shape) : r
                                }, b: function () {
                                    var i = r.mul(e.div(t).floor().neg()), a = u.getReductionAxes(t.shape, n);
                                    return a.length > 0 ? i.sum(a).reshape(t.shape) : i
                                }
                            }
                        })
                    }, e.modStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in modStrict: "), e.mod(t)
                    }, e.minimum = function (e, t) {
                        s.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "minimum"), s.assertTypesMatch(e, t), "bool" === e.dtype && (e = e.toInt()), "bool" === t.dtype && (t = t.toInt()), u.assertAndGetBroadcastShape(e.shape, t.shape);
                        return a.ENV.engine.runKernel(function (n) {
                            return n.minimum(e, t)
                        }, {a: e, b: t}, function (n) {
                            return {
                                a: function () {
                                    return n.mul(e.lessEqual(t).toFloat())
                                }, b: function () {
                                    return n.mul(e.greater(t).toFloat())
                                }
                            }
                        })
                    }, e.minimumStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in minimumStrict: "), e.minimum(t)
                    }, e.maximum = function (e, t) {
                        s.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "maximum"), s.assertTypesMatch(e, t), "bool" === e.dtype && (e = e.toInt()), "bool" === t.dtype && (t = t.toInt()), u.assertAndGetBroadcastShape(e.shape, t.shape);
                        return a.ENV.engine.runKernel(function (n) {
                            return n.maximum(e, t)
                        }, {a: e, b: t}, function (n) {
                            return {
                                a: function () {
                                    return n.mul(e.greaterEqual(t).toFloat())
                                }, b: function () {
                                    return n.mul(e.less(t).toFloat())
                                }
                            }
                        })
                    }, e.maximumStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in minimumStrict: "), e.maximum(t)
                    }, e.squaredDifference = function (e, t) {
                        s.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "squaredDifference"), s.assertTypesMatch(e, t), u.assertAndGetBroadcastShape(e.shape, t.shape);
                        return a.ENV.engine.runKernel(function (n) {
                            return n.squaredDifference(e, t)
                        }, {a: e, b: t}, function (n) {
                            var r = c.scalar(2);
                            return {
                                a: function () {
                                    return n.mul(e.sub(t).mul(r))
                                }, b: function () {
                                    return n.mul(t.sub(e).mul(r))
                                }
                            }
                        })
                    }, e.squaredDifferenceStrict = function (e, t) {
                        return s.assertShapesMatch(e.shape, t.shape, "Error in squaredDifferenceStrict: "), e.squaredDifference(t)
                    }, e.atan2 = function (t, n) {
                        s.assertArgumentsAreTensors({a: t, b: n}, "atan2"), s.assertTypesMatch(t, n);
                        var r = u.assertAndGetBroadcastShape(t.shape, n.shape);
                        return a.ENV.engine.runKernel(function (e) {
                            return e.atan2(t, n)
                        }, {a: t, b: n}, function (i) {
                            return {
                                a: function () {
                                    var a = e.add(c.square(t), c.square(n)), o = i.mul(n.div(a)),
                                        s = u.getReductionAxes(t.shape, r);
                                    return s.length > 0 && (o = o.sum(s)), o.reshape(t.shape)
                                }, b: function () {
                                    var a = e.add(c.square(t), c.square(n)), o = c.neg(i.mul(t.div(a))),
                                        s = u.getReductionAxes(n.shape, r);
                                    return s.length > 0 && (o = o.sum(s)), o.reshape(n.shape)
                                }
                            }
                        })
                    }, r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "add", null), r([l.operation], e, "addStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "sub", null), r([l.operation], e, "subStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "pow", null), r([l.operation], e, "powStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "mul", null), r([l.operation], e, "mulStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "div", null), r([l.operation], e, "divStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "mod", null), r([l.operation], e, "modStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "minimum", null), r([l.operation], e, "minimumStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "maximum", null), r([l.operation], e, "maximumStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Arithmetic"
                    }), l.operation], e, "squaredDifference", null), r([l.operation], e, "squaredDifferenceStrict", null), r([l.operation], e, "atan2", null), e
                }();
            n.BinaryOps = p
        }, {
            "../doc": 3,
            "../environment": 5,
            "../types": 94,
            "../util": 95,
            "./broadcast_util": 50,
            "./operation": 65,
            "./ops": 66
        }],
        50: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0}), n.getBroadcastDims = function (e, t) {
                for (var n = e.length, r = [], i = 0; i < n; i++) {
                    var a = n - 1 - i, o = e[a] || 1;
                    (t[t.length - 1 - i] || 1) > 1 && 1 === o && r.unshift(a)
                }
                return r
            }, n.getReductionAxes = function (e, t) {
                for (var n = [], r = 0; r < t.length; r++) {
                    var i = e[e.length - r - 1], a = t.length - r - 1, o = t[a];
                    (null == i || 1 === i && o > 1) && n.unshift(a)
                }
                return n
            }, n.broadcastDimsAreOuter = function (e) {
                for (var t = 0; t < e.length; t++) if (e[t] !== t) return !1;
                return !0
            }, n.assertAndGetBroadcastShape = function (e, t) {
                for (var n = [], r = "Operands could not be broadcast together with shapes " + e + " and " + t + ".", i = Math.max(e.length, t.length), a = 0; a < i; a++) {
                    var o = e[e.length - a - 1] || 1, s = t[t.length - a - 1] || 1;
                    if (o > 1 && s > 1 && o !== s) throw Error(r);
                    n.unshift(Math.max(o, s))
                }
                return n
            }
        }, {}],
        51: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./broadcast_util"),
                u = e("./operation"), l = function () {
                    function e() {
                    }

                    return e.notEqual = function (e, t) {
                        return o.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "notEqual"), o.assertTypesMatch(e, t), s.assertAndGetBroadcastShape(e.shape, t.shape), a.ENV.engine.runKernel(function (n) {
                            return n.notEqual(e, t)
                        }, {a: e, b: t})
                    }, e.notEqualStrict = function (e, t) {
                        return o.assertShapesMatch(e.shape, t.shape, "Error in notEqualStrict: "), e.notEqual(t)
                    }, e.less = function (e, t) {
                        return o.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "less"), o.assertTypesMatch(e, t), s.assertAndGetBroadcastShape(e.shape, t.shape), a.ENV.engine.runKernel(function (n) {
                            return n.less(e, t)
                        }, {a: e, b: t})
                    }, e.lessStrict = function (e, t) {
                        return o.assertShapesMatch(e.shape, t.shape, "Error in lessStrict: "), e.less(t)
                    }, e.equal = function (e, t) {
                        return o.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "equal"), o.assertTypesMatch(e, t), s.assertAndGetBroadcastShape(e.shape, t.shape), a.ENV.engine.runKernel(function (n) {
                            return n.equal(e, t)
                        }, {a: e, b: t})
                    }, e.equalStrict = function (e, t) {
                        return o.assertShapesMatch(e.shape, t.shape, "Error in equalStrict: "), e.equal(t)
                    }, e.lessEqual = function (e, t) {
                        return o.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "lessEqual"), o.assertTypesMatch(e, t), s.assertAndGetBroadcastShape(e.shape, t.shape), a.ENV.engine.runKernel(function (n) {
                            return n.lessEqual(e, t)
                        }, {a: e, b: t})
                    }, e.lessEqualStrict = function (e, t) {
                        return o.assertShapesMatch(e.shape, t.shape, "Error in lessEqualStrict: "), e.lessEqual(t)
                    }, e.greater = function (e, t) {
                        return o.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "greater"), o.assertTypesMatch(e, t), s.assertAndGetBroadcastShape(e.shape, t.shape), a.ENV.engine.runKernel(function (n) {
                            return n.greater(e, t)
                        }, {a: e, b: t})
                    }, e.greaterStrict = function (e, t) {
                        return o.assertShapesMatch(e.shape, t.shape, "Error in greaterStrict: "), e.greater(t)
                    }, e.greaterEqual = function (e, t) {
                        return o.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "greaterEqual"), o.assertTypesMatch(e, t), s.assertAndGetBroadcastShape(e.shape, t.shape), a.ENV.engine.runKernel(function (n) {
                            return n.greaterEqual(e, t)
                        }, {a: e, b: t})
                    }, e.greaterEqualStrict = function (e, t) {
                        return o.assertShapesMatch(e.shape, t.shape, "Error in greaterEqualStrict: "), e.greaterEqual(t)
                    }, r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), u.operation], e, "notEqual", null), r([u.operation], e, "notEqualStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), u.operation], e, "less", null), r([u.operation], e, "lessStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), u.operation], e, "equal", null), r([u.operation], e, "equalStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), u.operation], e, "lessEqual", null), r([u.operation], e, "lessEqualStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), u.operation], e, "greater", null), r([u.operation], e, "greaterStrict", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), u.operation], e, "greaterEqual", null), r([u.operation], e, "greaterEqualStrict", null), e
                }();
            n.CompareOps = l
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./broadcast_util": 50, "./operation": 65}],
        52: [function (e, t, n) {
            "use strict";

            function r(e, t, n) {
                l.assertParams(e.shape, t.shape, n);
                var r = l.computeOutShape(e.shape, t.shape, n), i = e.as2D(-1, s.sizeFromShape(e.shape.slice(n))),
                    a = t.as2D(-1, s.sizeFromShape(t.shape.slice(n))),
                    u = l.computeGradientSliceShapes(i.shape, a.shape), c = u.aBegin, p = u.aSize, h = u.bBegin,
                    d = u.bSize;
                return o.ENV.engine.runKernel(function (e) {
                    return e.concat(i, a)
                }, {a: i, b: a}, function (e) {
                    return {
                        a: function () {
                            return e.slice(c, p)
                        }, b: function () {
                            return e.slice(h, d)
                        }
                    }
                }).reshape(r)
            }

            var i = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("../doc"), o = e("../environment"), s = e("../util"), u = e("./axis_util"),
                l = e("./concat_util"), c = e("./operation"), p = function () {
                    function e() {
                    }

                    return e.concat1d = function (t) {
                        return e.concat(t, 0)
                    }, e.concat2d = function (t, n) {
                        return e.concat(t, n)
                    }, e.concat3d = function (t, n) {
                        return e.concat(t, n)
                    }, e.concat4d = function (t, n) {
                        return e.concat(t, n)
                    }, e.concat = function (e, t) {
                        void 0 === t && (t = 0), s.assert(e.length >= 1, "Pass at least one tensor to concat"), s.assertArgumentsAreTensors({tensors: e}, "concat");
                        var n = e[0];
                        if (1 === e.length) return n;
                        for (var i = u.parseAxisParam(t, n.shape), a = 1; a < e.length; ++a) n = r(n, e[a], i[0]);
                        return n
                    }, i([a.doc({
                        heading: "Tensors",
                        subheading: "Slicing and Joining"
                    }), c.operation], e, "concat", null), e
                }();
            n.ConcatOps = p
        }, {
            "../doc": 3,
            "../environment": 5,
            "../util": 95,
            "./axis_util": 47,
            "./concat_util": 53,
            "./operation": 65
        }],
        53: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../util");
            n.assertParams = function (e, t, n) {
                var i = e.length, a = t.length;
                r.assert(e.length === t.length, "Error in concat" + i + "D: rank of x1 (" + i + ") and x2 (" + a + ") must be the same."), r.assert(n >= 0 && n < i, "Error in concat" + i + "D: axis must be between 0 and " + (i - 1) + ".");
                for (var o = 0; o < i; o++) r.assert(o === n || e[o] === t[o], "Error in concat" + i + "D: Shape (" + e + ") does not match (" + t + ") along the non-concatenated axis " + o + ".")
            }, n.computeOutShape1D = function (e, t) {
                r.assert(1 === e.length && 1 === t.length, "x1 and x2 should be 1d array.");
                var n = e.slice();
                return n[0] += t[0], n
            }, n.computeOutShape = function (e, t, n) {
                r.assert(e.length === t.length, "x1 and x2 should have the same rank.");
                var i = e.slice();
                return i[n] += t[n], i
            }, n.computeGradientSliceShapes = function (e, t) {
                return {aBegin: [0, 0], aSize: e, bBegin: [0, e[1]], bSize: t}
            }
        }, {"../util": 95}],
        54: [function (e, t, n) {
            "use strict";

            function r(e) {
                return "number" == typeof e ? [e, e] : e
            }

            function i(e) {
                var t = r(e), n = t[0], i = t[1];
                return 1 === n && 1 === i
            }

            function a(e, t) {
                return i(e) || i(t)
            }

            var o = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var s = e("../doc"), u = e("../environment"), l = e("../util"), c = e("./conv_util"), p = e("./operation"),
                h = function () {
                    function e() {
                    }

                    return e.conv1d = function (t, n, r, i, o, s, u) {
                        void 0 === o && (o = "NWC"), void 0 === s && (s = 1), l.assertArgumentsAreTensors({
                            x: t,
                            filter: n
                        }, "conv1d");
                        var c = t, p = !1;
                        2 === t.rank && (p = !0, c = t.as3D(1, t.shape[0], t.shape[1])), l.assert(3 === c.rank, "Error in conv1d: input must be rank 3, but got rank " + c.rank + "."), l.assert(3 === n.rank, "Error in conv1d: filter must be rank 3, but got rank " + n.rank + "."), null != u && l.assert(l.isInt(i), "Error in conv1d: pad must be an integer when using, dimRoundingMode " + u + " but got pad " + i + "."), l.assert(c.shape[2] === n.shape[1], "Error in conv1d: depth of input (" + c.shape[2] + ") must match  input depth for filter " + n.shape[1] + "."), l.assert(a(r, s), "Error in conv1D: Either stride or dilation must be 1.Got stride " + r + " and dilation '" + s + "'"), l.assert("NWC" === o, "Error in conv1d: got dataFormat of " + o + " but only NWC is currently supported.");
                        var h = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]),
                            d = c.as4D(c.shape[0], 1, c.shape[1], c.shape[2]), f = [1, r], g = [1, s],
                            m = e.conv2d(d, h, f, i, "NHWC", g, u);
                        return p ? m.as2D(m.shape[2], m.shape[3]) : m.as3D(m.shape[0], m.shape[2], m.shape[3])
                    }, e.conv2d = function (t, n, r, o, s, p, h) {
                        void 0 === s && (s = "NHWC"), void 0 === p && (p = [1, 1]), l.assertArgumentsAreTensors({
                            x: t,
                            filter: n
                        }, "conv2d");
                        var d = t, f = !1;
                        3 === t.rank && (f = !0, d = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), l.assert(4 === d.rank, "Error in conv2d: input must be rank 4, but got rank " + d.rank + "."), l.assert(4 === n.rank, "Error in conv2d: filter must be rank 4, but got rank " + n.rank + "."), null != h && l.assert(l.isInt(o), "Error in conv2d: pad must be an integer when using, dimRoundingMode " + h + " but got pad " + o + "."), l.assert(d.shape[3] === n.shape[2], "Error in conv2d: depth of input (" + d.shape[3] + ") must match  input depth for filter " + n.shape[2] + "."), l.assert(a(r, p), "Error in conv2D: Either strides or dilations must be 1.Got strides " + r + " and dilations '" + p + "'"), l.assert("NHWC" === s, "Error in conv2d: got dataFormat of " + s + " but only NHWC is currently supported.");
                        var g = c.computeConv2DInfo(d.shape, n.shape, r, p, o, h),
                            m = u.ENV.engine.runKernel(function (e) {
                                return e.conv2d(d, n, g)
                            }, {x: d, filter: n}, function (t) {
                                return l.assert(i(p), "Error in gradient of conv2D: dilation rates greater than 1 are notyet supported in gradients. Got dilations '" + p + "'"), {
                                    x: function () {
                                        return e.conv2dDerInput(d.shape, t, n, r, o)
                                    }, filter: function () {
                                        return e.conv2dDerFilter(d, t, n.shape, r, o)
                                    }
                                }
                            });
                        return f ? m.as3D(m.shape[1], m.shape[2], m.shape[3]) : m
                    }, e.conv2dDerInput = function (e, t, n, r, i, a) {
                        l.assertArgumentsAreTensors({
                            dy: t,
                            filter: n
                        }, "conv2dDerInput"), l.assert(e.length === t.rank, "Length of inShape (" + e.length + ") and rank of dy (" + t.rank + ") must match");
                        var o = e, s = t, p = !1;
                        3 === t.rank && (p = !0, s = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]), o = [1, e[0], e[1], e[2]]);
                        var h = o[3], d = s.shape[3];
                        l.assert(4 === o.length, "Error in conv2dDerInput: inShape must be length 4, but got length " + o.length + "."), l.assert(4 === s.rank, "Error in conv2dDerInput: dy must be rank 4, but got rank " + s.rank), l.assert(4 === n.rank, "Error in conv2dDerInput: filter must be rank 4, but got rank " + n.rank), l.assert(h === n.shape[2], "Error in conv2dDerInput: depth of input (" + h + ") must match input depth for filter " + n.shape[2] + "."), l.assert(d === n.shape[3], "Error in conv2dDerInput: depth of output (" + d + ") mustmatch output depth for filter " + n.shape[3] + "."), null != a && l.assert(l.isInt(i), "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + i + ".");
                        var f = c.computeConv2DInfo(o, n.shape, r, 1, i, a), g = u.ENV.engine.runKernel(function (e) {
                            return e.conv2dDerInput(s, n, f)
                        }, {dy4D: s});
                        return p ? g.as3D(g.shape[1], g.shape[2], g.shape[3]) : g
                    }, e.conv2dDerFilter = function (e, t, n, r, i, a) {
                        l.assertArgumentsAreTensors({x: e, dy: t}, "conv2dDerFilter");
                        var o = e;
                        3 === e.rank && (o = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
                        var s = t;
                        3 === s.rank && (s = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), l.assert(4 === o.rank, "Error in conv2dDerFilter: input must be rank 4, but got shape " + o.shape + "."), l.assert(4 === s.rank, "Error in conv2dDerFilter: dy must be rank 4, but got shape " + s.shape + "."), l.assert(4 === n.length, "Error in conv2dDerFilter: filterShape must be length 4, but got " + n + "."), l.assert(o.shape[3] === n[2], "Error in conv2dDerFilter: depth of input " + o.shape[3] + ") must match input depth in filter (" + n[2] + "."), l.assert(s.shape[3] === n[3], "Error in conv2dDerFilter: depth of dy (" + s.shape[3] + ") must match output depth for filter (" + n[3] + ")."), null != a && l.assert(l.isInt(i), "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + i + ".");
                        var p = c.computeConv2DInfo(o.shape, n, r, 1, i, a);
                        return u.ENV.engine.runKernel(function (e) {
                            return e.conv2dDerFilter(o, s, p)
                        }, {x4D: o, dy4D: s})
                    }, e.conv2dTranspose = function (t, n, r, i, a, o) {
                        return l.assertArgumentsAreTensors({
                            x: t,
                            filter: n
                        }, "conv2dTranspose"), e.conv2dDerInput(r, t, n, i, a, o)
                    }, e.depthwiseConv2d = function (e, t, n, r, i, o, s) {
                        void 0 === i && (i = "NHWC"), void 0 === o && (o = [1, 1]), l.assertArgumentsAreTensors({
                            x: e,
                            filter: t
                        }, "depthwiseConv2d");
                        var p = e, h = !1;
                        3 === e.rank && (h = !0, p = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])), l.assert(4 === p.rank, "Error in depthwiseConv2D: input must be rank 4, but got rank " + p.rank + "."), l.assert(4 === t.rank, "Error in depthwiseConv2D: filter must be rank 4, but got rank " + t.rank + "."), l.assert(p.shape[3] === t.shape[2], "Error in depthwiseConv2D: number of input channels (" + p.shape[3] + ") must match the inChannels dimension in filter " + t.shape[2] + "."), null == o && (o = [1, 1]), l.assert(a(n, o), "Error in depthwiseConv2d: Either strides or dilations must be 1.Got strides " + n + " and dilations '" + o + "'"), null != s && l.assert(l.isInt(r), "Error in depthwiseConv2D: pad must be an integer when using, dimRoundingMode " + s + " but got pad " + r + ".");
                        var d = c.computeConv2DInfo(p.shape, t.shape, n, o, r, s, !0),
                            f = u.ENV.engine.runKernel(function (e) {
                                return e.depthwiseConv2D(p, t, d)
                            }, {x4D: p, filter: t});
                        return h ? f.as3D(f.shape[1], f.shape[2], f.shape[3]) : f
                    }, e.separableConv2d = function (t, n, r, i, a, o, s) {
                        void 0 === o && (o = [1, 1]), void 0 === s && (s = "NHWC"), l.assertArgumentsAreTensors({
                            x: t,
                            depthwiseFilter: n,
                            pointwiseFilter: r
                        }, "separableConv2d");
                        var u = t, c = !1;
                        if (3 === t.rank && (c = !0, u = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), "NCHW" === s) throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
                        l.assert(4 === u.rank, "Error in separableConv2d: input must be rank 4, but got rank " + u.rank + "."), l.assert(4 === n.rank, "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + n.rank + "."), l.assert(4 === r.rank, "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + n.rank + "."), l.assert(1 === r.shape[0], "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + r.shape[0] + "."), l.assert(1 === r.shape[1], "Error in separableConv2d: the second dimension of pointwise filter  must be 1, but got " + r.shape[1] + ".");
                        var p = n.shape[2], h = n.shape[3];
                        l.assert(r.shape[2] === p * h, "Error in separableConv2d: the third dimension of pointwise filter must be " + p * h + ", but got " + r.shape[2] + ".");
                        var d = e.depthwiseConv2d(u, n, i, a, s, o), f = e.conv2d(d, r, 1, "valid", s);
                        return c ? f.as3D(f.shape[1], f.shape[2], f.shape[3]) : f
                    }, o([s.doc({
                        heading: "Operations",
                        subheading: "Convolution"
                    }), p.operation], e, "conv1d", null), o([s.doc({
                        heading: "Operations",
                        subheading: "Convolution"
                    }), p.operation], e, "conv2d", null), o([p.operation], e, "conv2dDerInput", null), o([p.operation], e, "conv2dDerFilter", null), o([s.doc({
                        heading: "Operations",
                        subheading: "Convolution"
                    }), p.operation], e, "conv2dTranspose", null), o([s.doc({
                        heading: "Operations",
                        subheading: "Convolution"
                    }), p.operation], e, "depthwiseConv2d", null), o([s.doc({
                        heading: "Operations",
                        subheading: "Convolution"
                    }), p.operation], e, "separableConv2d", null), e
                }();
            n.ConvOps = h
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./conv_util": 55, "./operation": 65}],
        55: [function (e, t, n) {
            "use strict";

            function r(e, t, n, r, i, a, l, c) {
                void 0 === l && (l = !1), void 0 === c && (c = "channelsLast");
                var p = [-1, -1, -1, -1], h = p[0], d = p[1], f = p[2], g = p[3];
                if ("channelsLast" === c) h = e[0], d = e[1], f = e[2], g = e[3]; else {
                    if ("channelsFirst" !== c) throw new Error("Unknown dataFormat " + c);
                    h = e[0], g = e[1], d = e[2], f = e[3]
                }
                var m, v = t[0], y = t[1], b = t[3], w = o(n), x = w[0], A = w[1], E = o(r), _ = E[0], T = E[1],
                    S = u(i, d, f, x, A, s(v, _), s(y, T), a), C = S.padInfo, O = S.outHeight, k = S.outWidth,
                    N = l ? b * g : b;
                return "channelsFirst" === c ? m = [h, N, O, k] : "channelsLast" === c && (m = [h, O, k, N]), {
                    batchSize: h,
                    dataFormat: c,
                    inHeight: d,
                    inWidth: f,
                    inChannels: g,
                    outHeight: O,
                    outWidth: k,
                    outChannels: N,
                    padInfo: C,
                    strideHeight: x,
                    strideWidth: A,
                    filterHeight: v,
                    filterWidth: y,
                    dilationHeight: _,
                    dilationWidth: T,
                    inShape: e,
                    outShape: m,
                    filterShape: t
                }
            }

            function i(e, t, n, r, i, o) {
                null == i && (i = a(e, t, r));
                var s = e[0], u = e[1], p = l((s - t + 2 * i) / r + 1, o);
                c.assert(c.isInt(p), "The output # of rows (" + p + ") must be an integer. Change the stride and/or zero pad parameters");
                var h = l((u - t + 2 * i) / r + 1, o);
                return c.assert(c.isInt(h), "The output # of columns (" + h + ") must be an integer. Change the stride and/or zero pad parameters"), [p, h, n]
            }

            function a(e, t, n, r) {
                void 0 === r && (r = 1);
                var i = s(t, r);
                return Math.floor((e[0] * (n - 1) - n + i) / 2)
            }

            function o(e) {
                return "number" == typeof e ? [e, e] : e
            }

            function s(e, t) {
                return t <= 1 ? e : e + (e - 1) * (t - 1)
            }

            function u(e, t, n, r, a, o, s, u) {
                var l, c, p;
                if ("number" == typeof e) {
                    l = {top: e, bottom: e, left: e, right: e, type: 0 === e ? "VALID" : "NUMBER"};
                    var h = i([t, n, 1], o, 1, r, e, u);
                    c = h[0], p = h[1]
                } else if ("same" === e) {
                    var d = ((c = Math.ceil(t / r)) - 1) * r + o - t, f = ((p = Math.ceil(n / a)) - 1) * a + s - n,
                        g = Math.floor(d / 2), m = d - g, v = Math.floor(f / 2);
                    l = {top: g, bottom: m, left: v, right: f - v, type: "SAME"}
                } else {
                    if ("valid" !== e) throw Error("Unknown padding parameter: " + e);
                    l = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        type: "VALID"
                    }, c = Math.ceil((t - o + 1) / r), p = Math.ceil((n - s + 1) / a)
                }
                return {padInfo: l, outHeight: c, outWidth: p}
            }

            function l(e, t) {
                if (!t) return e;
                switch (t) {
                    case"round":
                        return Math.round(e);
                    case"ceil":
                        return Math.ceil(e);
                    case"floor":
                        return Math.floor(e);
                    default:
                        throw new Error("Unknown roundingMode " + t)
                }
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var c = e("../util");
            n.computePool2DInfo = function (e, t, n, i, a, s) {
                void 0 === s && (s = "channelsLast");
                var u, l = o(t), c = l[0], p = l[1];
                if ("channelsLast" === s) u = [c, p, e[3], e[3]]; else {
                    if ("channelsFirst" !== s) throw new Error("Unknown dataFormat " + s);
                    u = [c, p, e[1], e[1]]
                }
                return r(e, u, n, 1, i, a, !1, s)
            }, n.computeConv2DInfo = r, n.computeDefaultPad = a
        }, {"../util": 95}],
        56: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0}), n.ERF_P = .3275911, n.ERF_A1 = .254829592, n.ERF_A2 = -.284496736, n.ERF_A3 = 1.421413741, n.ERF_A4 = -1.453152027, n.ERF_A5 = 1.061405429
        }, {}],
        57: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./operation"), u = function () {
                function e() {
                }

                return e.resizeBilinear = function (e, t, n) {
                    void 0 === n && (n = !1), o.assertArgumentsAreTensors({images: e}, "resizeBilinear"), o.assert(3 === e.rank || 4 === e.rank, "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + e.rank + "."), o.assert(2 === t.length, "Error in resizeBilinear: new shape must 2D, but got shape " + t + ".");
                    var r = e, i = !1;
                    3 === e.rank && (i = !0, r = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
                    var s = t[0], u = t[1], l = a.ENV.engine.runKernel(function (e) {
                        return e.resizeBilinear(r, s, u, n)
                    }, {batchImages: r});
                    return i ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
                }, e.resizeNearestNeighbor = function (e, t, n) {
                    void 0 === n && (n = !1), o.assertArgumentsAreTensors({images: e}, "resizeNearestNeighbor"), o.assert(3 === e.rank || 4 === e.rank, "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + e.rank + "."), o.assert(2 === t.length, "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + t + "."), o.assert("float32" === e.dtype || "int32" === e.dtype, "`images` must have `int32` or `float32` as dtype");
                    var r = e, i = !1;
                    3 === e.rank && (i = !0, r = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
                    var s = t[0], u = t[1], l = a.ENV.engine.runKernel(function (e) {
                        return e.resizeNearestNeighbor(r, s, u, n)
                    }, {batchImages: r});
                    return i ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
                }, r([i.doc({
                    heading: "Operations",
                    subheading: "Images",
                    namespace: "image"
                }), s.operation], e, "resizeBilinear", null), r([i.doc({
                    heading: "Operations",
                    subheading: "Images",
                    namespace: "image"
                }), s.operation], e, "resizeNearestNeighbor", null), e
            }();
            n.ImageOps = u
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./operation": 65}],
        58: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../types"), s = e("../util"),
                u = e("./broadcast_util"), l = e("./operation"), c = function () {
                    function e() {
                    }

                    return e.logicalNot = function (e) {
                        return s.assertArgumentsAreTensors({x: e}, "logicalNot"), s.assert("bool" === e.dtype, "Error Array must be of type bool."), a.ENV.engine.runKernel(function (t) {
                            return t.logicalNot(e)
                        }, {x: e})
                    }, e.logicalAnd = function (e, t) {
                        return s.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "logicalAnd"), s.assert("bool" === e.dtype && "bool" === t.dtype, "Error Array must be of type bool."), u.assertAndGetBroadcastShape(e.shape, t.shape), a.ENV.engine.runKernel(function (n) {
                            return n.logicalAnd(e, t)
                        }, {a: e, b: t})
                    }, e.logicalOr = function (e, t) {
                        return s.assertArgumentsAreTensors({
                            a: e,
                            b: t
                        }, "logicalOr"), s.assert("bool" === e.dtype && "bool" === t.dtype, "Error Array must be of type bool."), u.assertAndGetBroadcastShape(e.shape, t.shape), a.ENV.engine.runKernel(function (n) {
                            return n.logicalOr(e, t)
                        }, {a: e, b: t})
                    }, e.logicalXor = function (t, n) {
                        return s.assertArgumentsAreTensors({
                            a: t,
                            b: n
                        }, "logicalXor"), s.assert("bool" === t.dtype && "bool" === n.dtype, "Error Array must be of type bool."), u.assertAndGetBroadcastShape(t.shape, n.shape), e.logicalOr(t, n).logicalAnd(e.logicalAnd(t, n).logicalNot())
                    }, e.where = function (e, t, n) {
                        s.assertArgumentsAreTensors({
                            condition: e,
                            a: t,
                            b: n
                        }, "where"), s.assert("bool" === e.dtype || "bool" === t.dtype || "bool" === n.dtype, "Error Array must be of type bool."), s.assertShapesMatch(t.shape, n.shape, "Error in where: "), 1 === e.rank ? s.assert(e.shape[0] === t.shape[0], "The first dimension of `a` must match the size of `condition`.") : s.assertShapesMatch(e.shape, n.shape, "Error in where: ");
                        var r = o.upcastType(t.dtype, n.dtype);
                        return a.ENV.engine.runKernel(function (i) {
                            return i.where(e, t, n, r)
                        }, {condition: e, a: t, b: n})
                    }, r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), l.operation], e, "logicalNot", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), l.operation], e, "logicalAnd", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), l.operation], e, "logicalOr", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), l.operation], e, "logicalXor", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Logical"
                    }), l.operation], e, "where", null), e
                }();
            n.LogicalOps = c
        }, {
            "../doc": 3,
            "../environment": 5,
            "../types": 94,
            "../util": 95,
            "./broadcast_util": 50,
            "./operation": 65
        }],
        59: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i, a = e("../doc"), o = e("../util"), s = e("./operation"), u = e("./ops");
            !function (e) {
                e[e.NONE = 0] = "NONE", e[e.MEAN = 1] = "MEAN", e[e.SUM = 2] = "SUM", e[e.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS"
            }(i = n.Reduction || (n.Reduction = {}));
            var l = function () {
                function e() {
                }

                return e.computeWeightedLoss = function (e, t, n) {
                    void 0 === n && (n = i.SUM_BY_NONZERO_WEIGHTS), o.assertArgumentsAreTensors({losses: e}, "computeWeightedLoss"), null != t && o.assertArgumentsAreTensors({weights: t}, "computeWeightedLoss");
                    var r = null == t ? e : e.mul(t);
                    if (n === i.NONE) return r;
                    if (n === i.SUM) return r.sum();
                    if (n === i.MEAN) return null == t ? r.mean() : r.sum().div(t.sum());
                    if (n === i.SUM_BY_NONZERO_WEIGHTS) {
                        if (null == t) return r.sum().div(u.scalar(e.size));
                        var a = t.notEqual(u.scalar(0)).sum().toFloat();
                        return r.sum().div(a)
                    }
                    throw Error("Unknown reduction: " + n)
                }, e.absoluteDifference = function (t, n, r, a) {
                    void 0 === a && (a = i.SUM_BY_NONZERO_WEIGHTS), o.assertArgumentsAreTensors({
                        labels: t,
                        predictions: n
                    }, "absoluteDifference"), null != r && o.assertArgumentsAreTensors({weights: r}, "absoluteDifference"), o.assertShapesMatch(t.shape, n.shape, "Error in absoluteDifference: ");
                    var s = t.sub(n).abs();
                    return e.computeWeightedLoss(s, r, a)
                }, r([a.doc({
                    heading: "Training",
                    subheading: "Losses",
                    namespace: "losses"
                }), s.operation], e, "computeWeightedLoss", null), r([a.doc({
                    heading: "Training",
                    subheading: "Losses",
                    namespace: "losses"
                }), s.operation], e, "absoluteDifference", null), e
            }();
            n.LossOps = l
        }, {"../doc": 3, "../util": 95, "./operation": 65, "./ops": 66}],
        60: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./operation"), u = function () {
                function e() {
                }

                return e.localResponseNormalization = function (e, t, n, r, i) {
                    void 0 === t && (t = 5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = .5), o.assertArgumentsAreTensors({x: e}, "localResponseNormalization"), o.assert(4 === e.rank || 3 === e.rank, "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + e.rank + "."), o.assert(o.isInt(t), "Error in localResponseNormalization3D: radius must be an integer\n                     but got radius " + t + ".");
                    var s = e, u = !1;
                    3 === e.rank && (u = !0, s = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
                    var l = a.ENV.engine.runKernel(function (e) {
                        return e.localResponseNormalization4D(s, t, n, r, i)
                    }, {x4D: s});
                    return u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
                }, r([i.doc({
                    heading: "Operations",
                    subheading: "Normalization"
                }), s.operation], e, "localResponseNormalization", null), e
            }();
            n.LRNOps = u
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./operation": 65}],
        61: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../util"), o = e("./operation"), s = function () {
                function e() {
                }

                return e.multiRNNCell = function (e, t, n, r) {
                    a.assertArgumentsAreTensors({data: t, c: n, h: r}, "multiRNNCell");
                    for (var i = t, o = [], s = 0; s < e.length; s++) {
                        var u = e[s](i, n[s], r[s]);
                        o.push(u[0]), o.push(u[1]), i = u[1]
                    }
                    for (var l = [], c = [], s = 0; s < o.length; s += 2) l.push(o[s]), c.push(o[s + 1]);
                    return [l, c]
                }, e.basicLSTMCell = function (e, t, n, r, i, o) {
                    a.assertArgumentsAreTensors({
                        forgetBias: e,
                        lstmKernel: t,
                        lstmBias: n,
                        data: r,
                        c: i,
                        h: o
                    }, "basicLSTMCell");
                    var s = r.concat(o, 1).matMul(t).add(n), u = s.shape[0], l = s.shape[1] / 4, c = [u, l],
                        p = s.slice([0, 0], c), h = s.slice([0, l], c), d = s.slice([0, 2 * l], c),
                        f = s.slice([0, 3 * l], c),
                        g = p.sigmoid().mulStrict(h.tanh()).addStrict(i.mulStrict(e.add(d).sigmoid()));
                    return [g, g.tanh().mulStrict(f.sigmoid())]
                }, r([i.doc({
                    heading: "Operations",
                    subheading: "RNN"
                }), o.operation], e, "multiRNNCell", null), r([i.doc({
                    heading: "Operations",
                    subheading: "RNN"
                }), o.operation], e, "basicLSTMCell", null), e
            }();
            n.LSTMOps = s
        }, {"../doc": 3, "../util": 95, "./operation": 65}],
        62: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./operation"), u = function () {
                function e() {
                }

                return e.matMul = function (e, t, n, r) {
                    void 0 === n && (n = !1), void 0 === r && (r = !1), o.assertArgumentsAreTensors({
                        a: e,
                        b: t
                    }, "matMul");
                    var i = n ? e.shape[0] : e.shape[1], s = r ? t.shape[1] : t.shape[0];
                    o.assert(2 === e.rank && 2 === t.rank, "Error in matMul: inputs must be rank 2, got ranks " + e.rank + " and " + t.rank + "."), o.assert(i === s, "Error in matMul: inner shapes (" + i + ") and (" + s + ") of Tensors with shapes " + e.shape + " and " + t.shape + " and transposeA=" + n + " and transposeB=" + r + " must match.");
                    return a.ENV.engine.runKernel(function (i) {
                        return i.matMul(e, t, n, r)
                    }, {a: e, b: t}, function (i) {
                        return n || r ? !n && r ? {
                            a: function () {
                                return i.matMul(t.toFloat(), !1, !1)
                            }, b: function () {
                                return i.matMul(e.toFloat(), !0, !1)
                            }
                        } : n && !r ? {
                            a: function () {
                                return t.toFloat().matMul(i, !1, !0)
                            }, b: function () {
                                return e.toFloat().matMul(i, !1, !1)
                            }
                        } : {
                            a: function () {
                                return t.toFloat().matMul(i, !0, !0)
                            }, b: function () {
                                return i.matMul(e.toFloat(), !0, !0)
                            }
                        } : {
                            a: function () {
                                return i.matMul(t.toFloat(), !1, !0)
                            }, b: function () {
                                return e.toFloat().matMul(i, !0, !1)
                            }
                        }
                    })
                }, e.vectorTimesMatrix = function (e, t) {
                    return o.assert(1 === e.rank, "Error in vectorTimesMatrix: first input must be rank 1, but got rank " + e.rank + "."), o.assert(2 === t.rank, "Error in vectorTimesMatrix: second input must be rank 2, but got rank " + t.rank + "."), o.assert(e.size === t.shape[0], "Error in vectorTimesMatrix: size of vector (" + e.size + ") must match first dimension of matrix (" + t.shape[0] + ")"), e.as2D(1, -1).matMul(t).as1D()
                }, e.matrixTimesVector = function (e, t) {
                    return o.assert(1 === t.rank, "Error in matrixTimesVector: second input must rank 1, but got rank " + t.rank + "."), o.assert(2 === e.rank, "Error in matrixTimesVector: first input must be a rank 2, but got rank " + e.rank + "."), o.assert(t.size === e.shape[1], "Error in matrixTimesVector: size of first rank 1 input " + t.size + " must match inner dimension of second rank 2 input, but got shape " + e.shape + "."), e.matMul(t.as2D(-1, 1)).as1D()
                }, e.dotProduct = function (e, t) {
                    return o.assert(1 === e.rank && 1 === t.rank, "Error in dotProduct: inputs must be rank 1, but got ranks " + e.rank + " and " + t.rank + "."), o.assert(e.size === t.size, "Error in dotProduct: size of inputs (" + e.size + ") and (" + t.size + ") must match."), e.as2D(1, -1).matMul(t.as2D(-1, 1)).asScalar()
                }, e.outerProduct = function (e, t) {
                    return o.assert(1 === e.rank && 1 === t.rank, "Error in outerProduct: inputs must be rank 1, but got ranks " + e.rank + " and " + t.rank + "."), e.as2D(-1, 1).matMul(t.as2D(1, -1))
                }, r([i.doc({
                    heading: "Operations",
                    subheading: "Matrices"
                }), s.operation], e, "matMul", null), r([s.operation], e, "vectorTimesMatrix", null), r([s.operation], e, "matrixTimesVector", null), r([s.operation], e, "dotProduct", null), r([i.doc({
                    heading: "Operations",
                    subheading: "Matrices"
                }), s.operation], e, "outerProduct", null), e
            }();
            n.MatmulOps = u
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./operation": 65}],
        63: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../util"), o = e("./array_ops"), s = e("./binary_ops"), u = e("./operation"),
                l = function () {
                    function e() {
                    }

                    return e.movingAverage = function (e, t, n, r, i) {
                        void 0 === i && (i = !0), a.assertArgumentsAreTensors({
                            v: e,
                            x: t
                        }, "movingAverage"), a.assertTypesMatch(e, t), a.assert(a.arraysEqual(e.shape, t.shape), "Shape mismatch in v and x");
                        var u = o.ArrayOps.scalar(1);
                        n = "number" == typeof n ? o.ArrayOps.scalar(n) : n;
                        var l = u.sub(n), c = t.sub(e).mul(l);
                        return i && (a.assert(null != r, "When using zeroDebias: true, step is required."), r = "number" == typeof r ? o.ArrayOps.scalar(r) : r, c = c.div(u.sub(s.BinaryOps.pow(n, r)))), e.add(c)
                    }, r([i.doc({
                        heading: "Operations",
                        subheading: "Moving Average"
                    }), u.operation], e, "movingAverage", null), e
                }();
            n.MovingAverageOps = l
        }, {"../doc": 3, "../util": 95, "./array_ops": 46, "./binary_ops": 49, "./operation": 65}],
        64: [function (e, t, n) {
            "use strict";

            function r(e, t, n) {
                if (void 0 === n && (n = null), 0 === e.rank) return e.abs();
                if (1 !== e.rank && null === n) return r(e.reshape([-1]), t, n);
                if (1 === e.rank || "number" == typeof n || n instanceof Array && 1 === n.length) {
                    if (1 === t) return e.abs().sum(n);
                    if (t === 1 / 0) return e.abs().max(n);
                    if (t === -1 / 0) return e.abs().min(n);
                    if ("euclidean" === t || 2 === t) return e.abs().pow(l.scalar(2, "int32")).sum(n).sqrt();
                    throw new Error("Error in norm: invalid ord value: " + t)
                }
                if (n instanceof Array && 2 === n.length) {
                    if (1 === t) return e.abs().sum(n[0]).max(n[1] - 1);
                    if (t === 1 / 0) return e.abs().sum(n[1]).max(n[0]);
                    if (t === -1 / 0) return e.abs().sum(n[1]).min(n[0]);
                    if ("fro" === t || "euclidean" === t) return e.square().sum(n).sqrt();
                    throw new Error("Error in norm: invalid ord value: " + t)
                }
                throw new Error("Error in norm: invalid axis: " + n)
            }

            var i = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("../doc"), o = e("../util"), s = e("./axis_util"), u = e("./operation"), l = e("./ops"),
                c = function () {
                    function e() {
                    }

                    return e.norm = function (e, t, n, i) {
                        void 0 === t && (t = "euclidean"), void 0 === n && (n = null), void 0 === i && (i = !1), o.assertArgumentsAreTensors({x: e}, "norm");
                        var a = r(e, t, n), u = a.shape;
                        if (i) {
                            var l = s.parseAxisParam(n, e.shape);
                            u = s.expandShapeToKeepDim(a.shape, l)
                        }
                        return a.reshape(u)
                    }, i([a.doc({heading: "Operations", subheading: "Matrices"}), u.operation], e, "norm", null), e
                }();
            n.NormOps = c
        }, {"../doc": 3, "../util": 95, "./axis_util": 47, "./operation": 65, "./ops": 66}],
        65: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../globals");
            n.operation = function (e, t, n) {
                var i = n.value;
                return n.value = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return r.tidy(t, function () {
                        return i.apply(void 0, e)
                    })
                }, n
            }
        }, {"../globals": 6}],
        66: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./array_ops"), i = e("./batchnorm"), a = e("./binary_ops"), o = e("./compare"),
                s = e("./concat"), u = e("./conv"), l = e("./image_ops"), c = e("./logical_ops"), p = e("./loss_ops"),
                h = e("./lrn"), d = e("./lstm"), f = e("./matmul"), g = e("./moving_average"), m = e("./norm"),
                v = e("./pool"), y = e("./reduction_ops"), b = e("./reverse"), w = e("./slice"), x = e("./softmax"),
                A = e("./transpose"), E = e("./unary_ops");
            n.batchNormalization = i.BatchNormOps.batchNormalization, n.batchNormalization2d = i.BatchNormOps.batchNormalization2d, n.batchNormalization3d = i.BatchNormOps.batchNormalization3d, n.batchNormalization4d = i.BatchNormOps.batchNormalization4d, n.concat = s.ConcatOps.concat, n.concat1d = s.ConcatOps.concat1d, n.concat2d = s.ConcatOps.concat2d, n.concat3d = s.ConcatOps.concat3d, n.concat4d = s.ConcatOps.concat4d, n.conv1d = u.ConvOps.conv1d, n.conv2d = u.ConvOps.conv2d, n.conv2dTranspose = u.ConvOps.conv2dTranspose, n.depthwiseConv2d = u.ConvOps.depthwiseConv2d, n.separableConv2d = u.ConvOps.separableConv2d, n.matMul = f.MatmulOps.matMul, n.matrixTimesVector = f.MatmulOps.matrixTimesVector, n.outerProduct = f.MatmulOps.outerProduct, n.vectorTimesMatrix = f.MatmulOps.vectorTimesMatrix, n.avgPool = v.PoolOps.avgPool, n.maxPool = v.PoolOps.maxPool, n.transpose = A.TransposeOps.transpose, n.reverse = b.ReverseOps.reverse, n.reverse1d = b.ReverseOps.reverse1d, n.reverse2d = b.ReverseOps.reverse2d, n.reverse3d = b.ReverseOps.reverse3d, n.reverse4d = b.ReverseOps.reverse4d, n.slice = w.SliceOps.slice, n.slice1d = w.SliceOps.slice1d, n.slice2d = w.SliceOps.slice2d, n.slice3d = w.SliceOps.slice3d, n.slice4d = w.SliceOps.slice4d, n.argMax = y.ReductionOps.argMax, n.argMin = y.ReductionOps.argMin, n.logSumExp = y.ReductionOps.logSumExp, n.max = y.ReductionOps.max, n.mean = y.ReductionOps.mean, n.min = y.ReductionOps.min, n.moments = y.ReductionOps.moments, n.sum = y.ReductionOps.sum, n.equal = o.CompareOps.equal, n.equalStrict = o.CompareOps.equalStrict, n.greater = o.CompareOps.greater, n.greaterStrict = o.CompareOps.greaterStrict, n.greaterEqual = o.CompareOps.greaterEqual, n.greaterEqualStrict = o.CompareOps.greaterEqualStrict, n.less = o.CompareOps.less, n.lessStrict = o.CompareOps.lessStrict, n.lessEqual = o.CompareOps.lessEqual, n.lessEqualStrict = o.CompareOps.lessEqualStrict, n.notEqual = o.CompareOps.notEqual, n.notEqualStrict = o.CompareOps.notEqualStrict, n.logicalNot = c.LogicalOps.logicalNot, n.logicalAnd = c.LogicalOps.logicalAnd, n.logicalOr = c.LogicalOps.logicalOr, n.logicalXor = c.LogicalOps.logicalXor, n.where = c.LogicalOps.where, n.abs = E.UnaryOps.abs, n.acos = E.UnaryOps.acos, n.acosh = E.UnaryOps.acosh, n.asin = E.UnaryOps.asin, n.asinh = E.UnaryOps.asinh, n.atan = E.UnaryOps.atan, n.atanh = E.UnaryOps.atanh, n.ceil = E.UnaryOps.ceil, n.clipByValue = E.UnaryOps.clipByValue, n.cos = E.UnaryOps.cos, n.cosh = E.UnaryOps.cosh, n.elu = E.UnaryOps.elu, n.exp = E.UnaryOps.exp, n.expm1 = E.UnaryOps.expm1, n.floor = E.UnaryOps.floor, n.sign = E.UnaryOps.sign, n.leakyRelu = E.UnaryOps.leakyRelu, n.log = E.UnaryOps.log, n.log1p = E.UnaryOps.log1p, n.logSigmoid = E.UnaryOps.logSigmoid, n.neg = E.UnaryOps.neg, n.prelu = E.UnaryOps.prelu, n.relu = E.UnaryOps.relu, n.reciprocal = E.UnaryOps.reciprocal, n.round = E.UnaryOps.round, n.selu = E.UnaryOps.selu, n.sigmoid = E.UnaryOps.sigmoid, n.sin = E.UnaryOps.sin, n.sinh = E.UnaryOps.sinh, n.softplus = E.UnaryOps.softplus, n.sqrt = E.UnaryOps.sqrt, n.rsqrt = E.UnaryOps.rsqrt, n.square = E.UnaryOps.square, n.step = E.UnaryOps.step, n.tan = E.UnaryOps.tan, n.tanh = E.UnaryOps.tanh, n.erf = E.UnaryOps.erf, n.add = a.BinaryOps.add, n.addStrict = a.BinaryOps.addStrict, n.atan2 = a.BinaryOps.atan2, n.div = a.BinaryOps.div, n.divStrict = a.BinaryOps.divStrict, n.maximum = a.BinaryOps.maximum, n.maximumStrict = a.BinaryOps.maximumStrict, n.minimum = a.BinaryOps.minimum,n.minimumStrict = a.BinaryOps.minimumStrict,n.mod = a.BinaryOps.mod,n.modStrict = a.BinaryOps.modStrict,n.mul = a.BinaryOps.mul,n.mulStrict = a.BinaryOps.mulStrict,n.pow = a.BinaryOps.pow,n.powStrict = a.BinaryOps.powStrict,n.sub = a.BinaryOps.sub,n.subStrict = a.BinaryOps.subStrict,n.squaredDifference = a.BinaryOps.squaredDifference,n.squaredDifferenceStrict = a.BinaryOps.squaredDifferenceStrict,n.norm = m.NormOps.norm,n.cast = r.ArrayOps.cast,n.clone = r.ArrayOps.clone,n.fromPixels = r.ArrayOps.fromPixels,n.toPixels = r.ArrayOps.toPixels,n.ones = r.ArrayOps.ones,n.onesLike = r.ArrayOps.onesLike,n.zeros = r.ArrayOps.zeros,n.zerosLike = r.ArrayOps.zerosLike,n.rand = r.ArrayOps.rand,n.randomNormal = r.ArrayOps.randomNormal,n.truncatedNormal = r.ArrayOps.truncatedNormal,n.randomUniform = r.ArrayOps.randomUniform,n.multinomial = r.ArrayOps.multinomial,n.reshape = r.ArrayOps.reshape,n.squeeze = r.ArrayOps.squeeze,n.tile = r.ArrayOps.tile,n.gather = r.ArrayOps.gather,n.oneHot = r.ArrayOps.oneHot,n.linspace = r.ArrayOps.linspace,n.range = r.ArrayOps.range,n.buffer = r.ArrayOps.buffer,n.fill = r.ArrayOps.fill,n.tensor = r.ArrayOps.tensor,n.scalar = r.ArrayOps.scalar,n.tensor1d = r.ArrayOps.tensor1d,n.tensor2d = r.ArrayOps.tensor2d,n.tensor3d = r.ArrayOps.tensor3d,n.tensor4d = r.ArrayOps.tensor4d,n.print = r.ArrayOps.print,n.expandDims = r.ArrayOps.expandDims,n.stack = r.ArrayOps.stack,n.split = r.ArrayOps.split,n.pad = r.ArrayOps.pad,n.pad1d = r.ArrayOps.pad1d,n.pad2d = r.ArrayOps.pad2d,n.pad3d = r.ArrayOps.pad3d,n.pad4d = r.ArrayOps.pad4d,n.movingAverage = g.MovingAverageOps.movingAverage,n.basicLSTMCell = d.LSTMOps.basicLSTMCell,n.multiRNNCell = d.LSTMOps.multiRNNCell,n.softmax = x.SoftmaxOps.softmax,n.localResponseNormalization = h.LRNOps.localResponseNormalization;
            var _ = e("../tensor"), T = e("../types");
            _.Tensor, T.Rank, p.Reduction, n.losses = {
                softmaxCrossEntropy: x.SoftmaxOps.softmaxCrossEntropy,
                absoluteDifference: p.LossOps.absoluteDifference,
                computeWeightedLoss: p.LossOps.computeWeightedLoss
            }, n.image = {
                resizeBilinear: l.ImageOps.resizeBilinear,
                resizeNearestNeighbor: l.ImageOps.resizeNearestNeighbor
            }
        }, {
            "../tensor": 89,
            "../types": 94,
            "./array_ops": 46,
            "./batchnorm": 48,
            "./binary_ops": 49,
            "./compare": 51,
            "./concat": 52,
            "./conv": 54,
            "./image_ops": 57,
            "./logical_ops": 58,
            "./loss_ops": 59,
            "./lrn": 60,
            "./lstm": 61,
            "./matmul": 62,
            "./moving_average": 63,
            "./norm": 64,
            "./pool": 67,
            "./reduction_ops": 70,
            "./reverse": 71,
            "./slice": 73,
            "./softmax": 75,
            "./transpose": 76,
            "./unary_ops": 77
        }],
        67: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./conv_util"), u = e("./operation"),
                l = function () {
                    function e() {
                    }

                    return e.maxPool = function (t, n, r, i, u) {
                        o.assertArgumentsAreTensors({x: t}, "maxPool");
                        var l = t, c = !1;
                        3 === t.rank && (c = !0, l = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), o.assert(4 === l.rank, "Error in maxPool: input must be rank 4 but got rank " + l.rank + "."), null != u && o.assert(o.isInt(i), "Error in maxPool: pad must be an integer when using, dimRoundingMode " + u + " but got pad " + i + ".");
                        var p = s.computePool2DInfo(l.shape, n, r, i, u), h = a.ENV.engine.runKernel(function (e, t) {
                            return t(e.maxPool(l, p))
                        }, {x: l}, function (t, a) {
                            var o = a[0];
                            return {
                                x: function () {
                                    return e.maxPoolBackprop(t, l, o, n, r, i)
                                }
                            }
                        });
                        return c ? h.as3D(h.shape[1], h.shape[2], h.shape[3]) : h
                    }, e.maxPoolBackprop = function (e, t, n, r, i, u, l) {
                        o.assertArgumentsAreTensors({
                            dy: e,
                            input: t,
                            output: n
                        }, "maxPoolBackprop"), o.assert(t.rank === e.rank, "Rank of input (" + t.rank + ") does not match rank of dy (" + e.rank + ")"), o.assert(4 === e.rank, "Error in maxPoolBackprop: dy must be rank 4 but got rank " + e.rank + "."), o.assert(4 === t.rank, "Error in maxPoolBackprop: input must be rank 4 but got rank " + t.rank + "."), null != l && o.assert(o.isInt(u), "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode " + l + " but got pad " + u + ".");
                        var c = s.computePool2DInfo(t.shape, r, i, u, l);
                        return a.ENV.engine.runKernel(function (r) {
                            return r.maxPoolBackprop(e, t, n, c)
                        }, {dy: e, input: t})
                    }, e.avgPool = function (t, n, r, i, u) {
                        o.assertArgumentsAreTensors({x: t}, "avgPool"), o.assert("float32" === t.dtype, "The input dtype to avgPool must be float32");
                        var l = t, c = !1;
                        3 === t.rank && (c = !0, l = t.as4D(1, t.shape[0], t.shape[1], t.shape[2])), o.assert(4 === l.rank, "Error in avgPool: x must be rank 4 but got rank " + l.rank + "."), null != u && o.assert(o.isInt(i), "Error in avgPool: pad must be an integer when using, dimRoundingMode " + u + " but got pad " + i + ".");
                        var p = s.computePool2DInfo(l.shape, n, r, i), h = a.ENV.engine.runKernel(function (e) {
                            return e.avgPool(l, p)
                        }, {x: l}, function (t) {
                            return {
                                x: function () {
                                    return e.avgPoolBackprop(t, l, n, r, i)
                                }
                            }
                        });
                        return h = h.cast(t.dtype), c ? h.as3D(h.shape[1], h.shape[2], h.shape[3]) : h
                    }, e.avgPoolBackprop = function (e, t, n, r, i) {
                        o.assertArgumentsAreTensors({
                            dy: e,
                            input: t
                        }, "avgPoolBackprop"), o.assert(t.rank === e.rank, "Rank of input (" + t.rank + ") does not match rank of dy (" + e.rank + ")");
                        var u = t, l = e, c = !1;
                        3 === t.rank && (c = !0, u = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]), l = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])), o.assert(4 === l.rank, "Error in avgPoolBackprop: dy must be rank 4 but got rank " + l.rank + "."), o.assert(4 === u.rank, "Error in avgPoolBackprop: input must be rank 4 but got rank " + u.rank + ".");
                        var p = s.computePool2DInfo(u.shape, n, r, i), h = a.ENV.engine.runKernel(function (e) {
                            return e.avgPoolBackprop(l, u, p)
                        }, {dy4D: l, input4D: u});
                        return c ? h.as3D(h.shape[1], h.shape[2], h.shape[3]) : h
                    }, r([i.doc({
                        heading: "Operations",
                        subheading: "Convolution"
                    }), u.operation], e, "maxPool", null), r([u.operation], e, "maxPoolBackprop", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Convolution"
                    }), u.operation], e, "avgPool", null), r([u.operation], e, "avgPoolBackprop", null), e
                }();
            n.PoolOps = l
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./conv_util": 55, "./operation": 65}],
        68: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("seedrandom"), i = function () {
                function e(e, t, n, i, a) {
                    this.mean = e, this.stdDev = t, this.dtype = n, this.nextVal = NaN, this.truncated = i, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
                    var o = a || Math.random();
                    this.random = r.alea(o.toString())
                }

                return e.prototype.nextValue = function () {
                    if (!isNaN(this.nextVal)) {
                        var e = this.nextVal;
                        return this.nextVal = NaN, e
                    }
                    for (var t, n, r = !1; !r;) {
                        var i = void 0, a = void 0, o = void 0;
                        do {
                            o = (i = 2 * this.random() - 1) * i + (a = 2 * this.random() - 1) * a
                        } while (o >= 1 || 0 === o);
                        var s = Math.sqrt(-2 * Math.log(o) / o);
                        t = this.mean + this.stdDev * i * s, n = this.mean + this.stdDev * a * s, this.truncated && !this.isValidTruncated(t) || (r = !0)
                    }
                    return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)), this.convertValue(t)
                }, e.prototype.convertValue = function (e) {
                    return null == this.dtype || "float32" === this.dtype ? e : Math.round(e)
                }, e.prototype.isValidTruncated = function (e) {
                    return e <= this.upper && e >= this.lower
                }, e
            }();
            n.MPRandGauss = i
        }, {seedrandom: 135}],
        69: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = t; n < e; ++n) if (e % n == 0) return n;
                return e
            }

            Object.defineProperty(n, "__esModule", {value: !0}), n.PARALLELIZE_THRESHOLD = 30, n.computeOptimalWindowSize = function (e) {
                return e <= n.PARALLELIZE_THRESHOLD ? e : r(e, Math.floor(Math.sqrt(e)))
            }
        }, {}],
        70: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../globals"), s = e("../util"), u = e("./axis_util"),
                l = e("./operation"), c = e("./ops"), p = function () {
                    function e() {
                    }

                    return e.logSumExp = function (e, t, n) {
                        void 0 === t && (t = null), void 0 === n && (n = !1), s.assertArgumentsAreTensors({x: e}, "logSumExp");
                        var r = u.parseAxisParam(t, e.shape), i = e.max(r, !0), a = e.sub(i).exp().sum(r).log(),
                            o = i.reshape(a.shape).add(a);
                        if (n) {
                            var l = u.expandShapeToKeepDim(o.shape, r);
                            return o.reshape(l)
                        }
                        return o
                    }, e.sum = function (e, t, n) {
                        void 0 === t && (t = null), void 0 === n && (n = !1), s.assertArgumentsAreTensors({x: e}, "sum"), "bool" === e.dtype && (e = e.toInt());
                        var r = u.parseAxisParam(t, e.shape);
                        return o.customGrad(function (e) {
                            var t = u.getAxesPermutation(r, e.rank), i = r, o = e;
                            null != t && (o = e.transpose(t), i = u.getInnerMostAxes(i.length, e.rank));
                            var s = a.ENV.engine.runKernel(function (e) {
                                return e.sum(o, i)
                            }, {permutedX: o});
                            if (n) {
                                var l = u.expandShapeToKeepDim(s.shape, r);
                                s = s.reshape(l)
                            }
                            return {
                                value: s, gradFunc: function (t) {
                                    var n = e.shape.slice();
                                    return r.forEach(function (e) {
                                        n[e] = 1
                                    }), t.reshape(n).mul(c.ones(e.shape, "float32"))
                                }
                            }
                        })(e)
                    }, e.mean = function (e, t, n) {
                        void 0 === t && (t = null), void 0 === n && (n = !1), s.assertArgumentsAreTensors({x: e}, "mean");
                        var r = u.parseAxisParam(t, e.shape), i = u.computeOutAndReduceShapes(e.shape, r)[1],
                            a = s.sizeFromShape(i);
                        return o.customGrad(function (e) {
                            var i = c.scalar(a);
                            return {
                                value: (i.dtype === e.dtype ? e : e.cast(i.dtype)).div(i).sum(t, n),
                                gradFunc: function (t) {
                                    var n = e.shape.slice();
                                    return r.forEach(function (e) {
                                        n[e] = 1
                                    }), t.reshape(n).mul(c.ones(e.shape, "float32")).div(i)
                                }
                            }
                        })(e)
                    }, e.min = function (e, t, n) {
                        void 0 === t && (t = null), void 0 === n && (n = !1), s.assertArgumentsAreTensors({x: e}, "min");
                        var r = u.parseAxisParam(t, e.shape), i = r, o = u.getAxesPermutation(i, e.rank);
                        null != o && (e = e.transpose(o), i = u.getInnerMostAxes(i.length, e.rank));
                        var l = a.ENV.engine.runKernel(function (t) {
                            return t.min(e, i)
                        }, {x: e});
                        if (n) {
                            var c = u.expandShapeToKeepDim(l.shape, r);
                            return l.reshape(c)
                        }
                        return l
                    }, e.max = function (e, t, n) {
                        void 0 === t && (t = null), void 0 === n && (n = !1), s.assertArgumentsAreTensors({x: e}, "max");
                        var r = u.parseAxisParam(t, e.shape), i = r, o = u.getAxesPermutation(i, e.rank);
                        null != o && (e = e.transpose(o), i = u.getInnerMostAxes(i.length, e.rank));
                        var l = a.ENV.engine.runKernel(function (t) {
                            return t.max(e, i)
                        }, {x: e});
                        if (n) {
                            var c = u.expandShapeToKeepDim(l.shape, r);
                            return l.reshape(c)
                        }
                        return l
                    }, e.argMin = function (e, t) {
                        void 0 === t && (t = 0), s.assertArgumentsAreTensors({x: e}, "argMin"), null == t && (t = 0);
                        var n = u.parseAxisParam(t, e.shape), r = u.getAxesPermutation(n, e.rank);
                        return null != r && (e = e.transpose(r), n = u.getInnerMostAxes(n.length, e.rank)), a.ENV.engine.runKernel(function (t) {
                            return t.argMin(e, n[0])
                        }, {x: e})
                    }, e.argMax = function (e, t) {
                        void 0 === t && (t = 0), s.assertArgumentsAreTensors({x: e}, "argMax"), null == t && (t = 0);
                        var n = u.parseAxisParam(t, e.shape), r = u.getAxesPermutation(n, e.rank);
                        return null != r && (e = e.transpose(r), n = u.getInnerMostAxes(n.length, e.rank)), a.ENV.engine.runKernel(function (t) {
                            return t.argMax(e, n[0])
                        }, {x: e})
                    }, e.moments = function (e, t, n) {
                        void 0 === t && (t = null), void 0 === n && (n = !1), s.assertArgumentsAreTensors({x: e}, "moments");
                        var r = u.parseAxisParam(t, e.shape), i = e.mean(r, n), a = i.shape;
                        return n || (a = u.expandShapeToKeepDim(i.shape, r)), {
                            mean: i,
                            variance: e.toFloat().sub(i.reshape(a)).square().mean(r, n)
                        }
                    }, r([i.doc({
                        heading: "Operations",
                        subheading: "Reduction"
                    }), l.operation], e, "logSumExp", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Reduction"
                    }), l.operation], e, "sum", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Reduction"
                    }), l.operation], e, "mean", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Reduction"
                    }), l.operation], e, "min", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Reduction"
                    }), l.operation], e, "max", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Reduction"
                    }), l.operation], e, "argMin", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Reduction"
                    }), l.operation], e, "argMax", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Normalization"
                    }), l.operation], e, "moments", null), e
                }();
            n.ReductionOps = p
        }, {
            "../doc": 3,
            "../environment": 5,
            "../globals": 6,
            "../util": 95,
            "./axis_util": 47,
            "./operation": 65,
            "./ops": 66
        }],
        71: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./axis_util"), u = e("./operation"),
                l = function () {
                    function e() {
                    }

                    return e.reverse1d = function (t) {
                        return o.assert(1 === t.rank, "Error in reverse1D: x must be rank 1 but got\n             rank " + t.rank + "."), e.reverse(t, 0)
                    }, e.reverse2d = function (t, n) {
                        return o.assert(2 === t.rank, "Error in reverse2D: x must be rank 2 but got\n             rank " + t.rank + "."), e.reverse(t, n)
                    }, e.reverse3d = function (t, n) {
                        return o.assert(3 === t.rank, "Error in reverse3D: x must be rank 3 but got\n             rank " + t.rank + "."), e.reverse(t, n)
                    }, e.reverse4d = function (t, n) {
                        return o.assert(4 === t.rank, "Error in reverse4D: x must be rank 4 but got\n             rank " + t.rank + "."), e.reverse(t, n)
                    }, e.reverse = function (e, t) {
                        if (o.assertArgumentsAreTensors({x: e}, "reverse"), 0 === e.rank) return e.clone();
                        var n = s.parseAxisParam(t, e.shape);
                        return a.ENV.engine.runKernel(function (t) {
                            return t.reverse(e, n)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return e.reverse(n)
                                }
                            }
                        }).reshapeAs(e)
                    }, r([i.doc({
                        heading: "Tensors",
                        subheading: "Slicing and Joining"
                    }), u.operation], e, "reverse", null), e
                }();
            n.ReverseOps = l
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./axis_util": 47, "./operation": 65}],
        72: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0}), n.SELU_SCALEALPHA = 1.7580993408473768, n.SELU_SCALE = 1.0507009873554805
        }, {}],
        73: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./operation"), u = e("./slice_util"),
                l = function () {
                    function e() {
                    }

                    return e.slice1d = function (t, n, r) {
                        return o.assert(1 === t.rank, "slice1d expects a rank-1 tensor, but got a rank-" + t.rank + " tensor"), e.slice(t, [n], [r])
                    }, e.slice2d = function (t, n, r) {
                        return o.assert(2 === t.rank, "slice1d expects a rank-2 tensor, but got a rank-" + t.rank + " tensor"), e.slice(t, n, r)
                    }, e.slice3d = function (t, n, r) {
                        return o.assert(3 === t.rank, "slice1d expects a rank-3 tensor, but got a rank-" + t.rank + " tensor"), e.slice(t, n, r)
                    }, e.slice4d = function (t, n, r) {
                        return o.assert(4 === t.rank, "slice1d expects a rank-4 tensor, but got a rank-" + t.rank + " tensor"), e.slice(t, n, r)
                    }, e.slice = function (e, t, n) {
                        if (o.assertArgumentsAreTensors({x: e}, "slice"), 0 === e.rank) throw new Error("Slicing scalar is not possible");
                        var r;
                        r = "number" == typeof t ? [t].concat(new Array(e.rank - 1).fill(0)) : t.length < e.rank ? t.concat(new Array(e.rank - t.length).fill(0)) : t;
                        var i;
                        i = null == n ? new Array(e.rank).fill(-1) : "number" == typeof n ? [n].concat(new Array(e.rank - 1).fill(-1)) : n.length < e.rank ? n.concat(new Array(e.rank - n.length).fill(-1)) : n, i = i.map(function (t, n) {
                            return t >= 0 ? t : (o.assert(-1 === t, "Bad value in size"), e.shape[n] - r[n])
                        }), u.assertParamsValid(e, r, i);
                        var s = e.shape;
                        return a.ENV.engine.runKernel(function (t) {
                            return t.slice(e, r, i)
                        }, {x: e}, function (e) {
                            for (var t = [], n = 0; n < e.rank; n++) t.push([r[n], s[n] - r[n] - i[n]]);
                            return {
                                x: function () {
                                    return e.pad(t)
                                }
                            }
                        })
                    }, r([i.doc({
                        heading: "Tensors",
                        subheading: "Slicing and Joining"
                    }), s.operation], e, "slice", null), e
                }();
            n.SliceOps = l
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./operation": 65, "./slice_util": 74}],
        74: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../util");
            n.assertParamsValid = function (e, t, n) {
                r.assert(e.rank === t.length, "Error in slice" + e.rank + "D: Length of begin " + t + " must match the rank of the array (" + e.rank + ")."), r.assert(e.rank === n.length, "Error in slice" + e.rank + "D: Length of size " + n + " must match the rank of the array (" + e.rank + ").");
                for (var i = 0; i < e.rank; ++i) r.assert(t[i] + n[i] <= e.shape[i], "Error in slice" + e.rank + "D: begin[" + i + "] + size[" + i + "] (" + (t[i] + n[i]) + ") would overflow input.shape[" + i + "] (" + e.shape[i] + ")")
            }
        }, {"../util": 95}],
        75: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../globals"), o = e("../util"), s = e("./axis_util"), u = e("./operation"),
                l = e("./ops"), c = function () {
                    function e() {
                    }

                    return e.softmax = function (e, t) {
                        if (void 0 === t && (t = -1), o.assertArgumentsAreTensors({logits: e}, "softmax"), -1 === t && (t = e.rank - 1), t !== e.rank - 1) throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and dim was " + t);
                        return a.customGrad(function (e) {
                            var n = e.logSumExp([t], !0), r = e.toFloat().sub(n).exp();
                            return {
                                value: r, gradFunc: function (e) {
                                    var n = e.mul(r);
                                    return n.sub(n.sum([t], !0).mul(r))
                                }
                            }
                        })(e)
                    }, e.softmaxCrossEntropy = function (e, t, n) {
                        if (void 0 === n && (n = -1), o.assertArgumentsAreTensors({
                            labels: e,
                            logits: t
                        }, "softmaxCrossEntropy"), o.assertShapesMatch(e.shape, t.shape, "Error in softmaxCrossEntropy: "), -1 === n && (n = t.rank - 1), n !== t.rank - 1) throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + t.rank + " and dim was " + n);
                        return a.customGrad(function (e, t) {
                            var r = t.softmax(n);
                            return {
                                value: l.scalar(1e-5).add(r).log().mul(e).neg().sum([n]), gradFunc: function (t) {
                                    var i = s.expandShapeToKeepDim(t.shape, [n]);
                                    return [t.reshape(i).mul(e.toFloat().sub(r)), t.reshape(i).mul(r.sub(e.toFloat()))]
                                }
                            }
                        })(e, t)
                    }, r([i.doc({
                        heading: "Operations",
                        subheading: "Normalization"
                    }), u.operation], e, "softmax", null), r([i.doc({
                        heading: "Training",
                        subheading: "Losses",
                        namespace: "losses"
                    }), u.operation], e, "softmaxCrossEntropy", null), e
                }();
            n.SoftmaxOps = c
        }, {"../doc": 3, "../globals": 6, "../util": 95, "./axis_util": 47, "./operation": 65, "./ops": 66}],
        76: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./axis_util"), u = e("./operation"),
                l = function () {
                    function e() {
                    }

                    return e.transpose = function (e, t) {
                        o.assertArgumentsAreTensors({x: e}, "transpose"), null == t && (t = e.shape.map(function (e, t) {
                            return t
                        }).reverse());
                        return o.assert(e.rank === t.length, "Error in transpose: rank of input " + e.rank + " must match length of perm " + t + "."), a.ENV.engine.runKernel(function (n) {
                            return n.transpose(e, t)
                        }, {x: e}, function (e) {
                            var n = s.getUndoAxesPermutation(t);
                            return {
                                x: function () {
                                    return e.transpose(n)
                                }
                            }
                        })
                    }, r([i.doc({heading: "Operations", subheading: "Matrices"}), u.operation], e, "transpose", null), e
                }();
            n.TransposeOps = l
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./axis_util": 47, "./operation": 65}],
        77: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../environment"), o = e("../util"), s = e("./operation"), u = e("./ops"),
                l = e("./ops"), c = e("./selu_util"), p = function () {
                    function e() {
                    }

                    return e.neg = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "neg");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.neg(e)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return e.neg()
                                }
                            }
                        })
                    }, e.ceil = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "ceil");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.ceil(e)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return u.zerosLike(e)
                                }
                            }
                        })
                    }, e.floor = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "floor");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.floor(e)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return u.zerosLike(e)
                                }
                            }
                        })
                    }, e.sign = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "sign");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.sign(e)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return u.zerosLike(e)
                                }
                            }
                        })
                    }, e.round = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "round");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.round(e)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return u.zerosLike(e)
                                }
                            }
                        })
                    }, e.exp = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "exp");
                        return a.ENV.engine.runKernel(function (t, n) {
                            return n(t.exp(e))
                        }, {x: e}, function (e, t) {
                            var n = t[0];
                            return {
                                x: function () {
                                    return e.mulStrict(n)
                                }
                            }
                        })
                    }, e.expm1 = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "expm1");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.expm1(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.mulStrict(e.exp())
                                }
                            }
                        })
                    }, e.log = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "log");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.log(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.divStrict(e.toFloat())
                                }
                            }
                        })
                    }, e.log1p = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "log1p");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.log1p(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.divStrict(e.add(u.scalar(1)))
                                }
                            }
                        })
                    }, e.sqrt = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "sqrt");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.sqrt(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.divStrict(e.toFloat().sqrt().mul(u.scalar(2)))
                                }
                            }
                        })
                    }, e.rsqrt = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "rsqrt");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.rsqrt(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.divStrict(e.pow(u.scalar(1.5)).mul(u.scalar(2))).neg()
                                }
                            }
                        })
                    }, e.square = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "square");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.square(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.mulStrict(e.toFloat().mul(u.scalar(2)))
                                }
                            }
                        })
                    }, e.reciprocal = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "reciprocal");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.reciprocal(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.divStrict(e.square().neg())
                                }
                            }
                        })
                    }, e.abs = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "abs");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.abs(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.mulStrict(e.toFloat().step(-1))
                                }
                            }
                        })
                    }, e.clipByValue = function (e, t, n) {
                        o.assertArgumentsAreTensors({x: e}, "clipByValue"), o.assert(t <= n, "Error in clip: min (" + t + ") must be less than or equal to max (" + n + ").");
                        return a.ENV.engine.runKernel(function (r) {
                            return r.clip(e, t, n)
                        }, {x: e}, function (r) {
                            return {
                                x: function () {
                                    return r.where(e.greater(u.scalar(t)).logicalAnd(e.less(u.scalar(n))), l.zerosLike(r))
                                }
                            }
                        })
                    }, e.relu = function (e) {
                        if (o.assertArgumentsAreTensors({x: e}, "relu"), "bool" === e.dtype) return e.toInt();
                        return a.ENV.engine.runKernel(function (t) {
                            return t.relu(e)
                        }, {x: e}, function (t) {
                            var n = e.step();
                            return {
                                x: function () {
                                    return t.mulStrict(n.toFloat())
                                }
                            }
                        })
                    }, e.elu = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "elu");
                        return a.ENV.engine.runKernel(function (t, n) {
                            return n(t.elu(e))
                        }, {x: e}, function (e, t) {
                            var n = t[0];
                            return {
                                x: function () {
                                    return a.ENV.engine.runKernel(function (t) {
                                        return t.eluDer(e, n)
                                    }, {dy: e, y: n})
                                }
                            }
                        })
                    }, e.selu = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "selu");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.selu(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    var n = e.greater(u.scalar(0)), r = u.scalar(c.SELU_SCALEALPHA),
                                        i = u.scalar(c.SELU_SCALE), a = t.mul(i), o = t.mul(r).mul(e.toFloat().exp());
                                    return u.where(n, a, o)
                                }
                            }
                        })
                    }, e.leakyRelu = function (e, t) {
                        return void 0 === t && (t = .2), o.assertArgumentsAreTensors({x: e}, "leakyRelu"), u.maximum(u.scalar(t).mul(e), e)
                    }, e.prelu = function (e, t) {
                        o.assertArgumentsAreTensors({x: e, alpha: t}, "prelu");
                        var n = u.scalar(0);
                        return u.maximum(n, e).add(t.mul(u.minimum(n, e)))
                    }, e.sigmoid = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "sigmoid");
                        return a.ENV.engine.runKernel(function (t, n) {
                            return n(t.sigmoid(e))
                        }, {x: e}, function (e, t) {
                            var n = t[0];
                            return {
                                x: function () {
                                    return e.mulStrict(n.mul(u.scalar(1).sub(n)))
                                }
                            }
                        })
                    }, e.logSigmoid = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "logSigmoid");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.softplus(e.neg()).neg()
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.mulStrict(e.neg().sigmoid())
                                }
                            }
                        })
                    }, e.softplus = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "softplus");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.softplus(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.mulStrict(e.sigmoid())
                                }
                            }
                        })
                    }, e.sin = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "sin");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.sin(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return e.toFloat().cos().mulStrict(t)
                                }
                            }
                        })
                    }, e.cos = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "cos");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.cos(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return e.toFloat().sin().neg().mulStrict(t)
                                }
                            }
                        })
                    }, e.tan = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "tan");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.tan(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.divStrict(e.cos().square())
                                }
                            }
                        })
                    }, e.asin = function (t) {
                        o.assertArgumentsAreTensors({x: t}, "asin");
                        return a.ENV.engine.runKernel(function (e) {
                            return e.asin(t)
                        }, {x: t}, function (n) {
                            return {
                                x: function () {
                                    return n.divStrict(e.sqrt(u.scalar(1).sub(t.toFloat().square())))
                                }
                            }
                        })
                    }, e.acos = function (t) {
                        o.assertArgumentsAreTensors({x: t}, "acos");
                        return a.ENV.engine.runKernel(function (e) {
                            return e.acos(t)
                        }, {x: t}, function (n) {
                            return {
                                x: function () {
                                    return n.divStrict(e.sqrt(u.scalar(1).sub(t.toFloat().square()))).neg()
                                }
                            }
                        })
                    }, e.atan = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "atan");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.atan(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.divStrict(u.scalar(1).add(e.toFloat().square()))
                                }
                            }
                        })
                    }, e.sinh = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "sinh");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.sinh(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return e.toFloat().cosh().mulStrict(t)
                                }
                            }
                        })
                    }, e.cosh = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "cosh");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.cosh(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return e.toFloat().sinh().mulStrict(t)
                                }
                            }
                        })
                    }, e.tanh = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "tanh");
                        return a.ENV.engine.runKernel(function (t, n) {
                            return n(t.tanh(e))
                        }, {x: e}, function (e, t) {
                            var n = t[0];
                            return {
                                x: function () {
                                    return u.scalar(1).sub(n.square()).mulStrict(e)
                                }
                            }
                        })
                    }, e.asinh = function (t) {
                        o.assertArgumentsAreTensors({x: t}, "asinh");
                        return a.ENV.engine.runKernel(function (e) {
                            return e.asinh(t)
                        }, {x: t}, function (n) {
                            return {
                                x: function () {
                                    return n.divStrict(e.sqrt(u.scalar(1).add(t.toFloat().square())))
                                }
                            }
                        })
                    }, e.acosh = function (t) {
                        o.assertArgumentsAreTensors({x: t}, "acosh");
                        return a.ENV.engine.runKernel(function (e) {
                            return e.acosh(t)
                        }, {x: t}, function (n) {
                            return {
                                x: function () {
                                    return n.divStrict(e.sqrt(t.toFloat().square().sub(u.scalar(1))))
                                }
                            }
                        })
                    }, e.atanh = function (e) {
                        o.assertArgumentsAreTensors({x: e}, "atanh");
                        return a.ENV.engine.runKernel(function (t) {
                            return t.atanh(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.divStrict(u.scalar(1).sub(e.toFloat().square()))
                                }
                            }
                        })
                    }, e.erf = function (e) {
                        o.assert("int32" === e.dtype || "float32" === e.dtype, "Input dtype must be `int32` or `float32`."), "int32" === e.dtype && (e = e.toFloat());
                        return a.ENV.engine.runKernel(function (t) {
                            return t.erf(e)
                        }, {x: e}, function (t) {
                            return {
                                x: function () {
                                    return t.mulStrict(u.scalar(2 / Math.sqrt(Math.PI)).mul(e.square().neg().exp()))
                                }
                            }
                        })
                    }, e.step = function (e, t) {
                        void 0 === t && (t = 0), o.assertArgumentsAreTensors({x: e}, "step");
                        return a.ENV.engine.runKernel(function (n) {
                            return n.step(e, t)
                        }, {x: e}, function (e) {
                            return {
                                x: function () {
                                    return u.zerosLike(e)
                                }
                            }
                        })
                    }, r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "neg", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "ceil", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "floor", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "sign", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "round", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "exp", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "expm1", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "log", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "log1p", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "sqrt", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "rsqrt", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "square", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "reciprocal", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "abs", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "clipByValue", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "relu", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "elu", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "selu", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "leakyRelu", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "prelu", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "sigmoid", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "logSigmoid", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "softplus", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "sin", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "cos", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "tan", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "asin", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "acos", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "atan", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "sinh", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "cosh", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "tanh", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "asinh", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "acosh", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "atanh", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "erf", null), r([i.doc({
                        heading: "Operations",
                        subheading: "Basic math"
                    }), s.operation], e, "step", null), e
                }();
            n.UnaryOps = p
        }, {"../doc": 3, "../environment": 5, "../util": 95, "./operation": 65, "./ops": 66, "./selu_util": 72}],
        78: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../environment"), a = e("../globals"), o = e("../ops/ops"), s = function (e) {
                function t(t, n, r) {
                    void 0 === r && (r = 1e-8);
                    var i = e.call(this) || this;
                    return i.accumulatedGrads = {}, i.accumulatedUpdates = {}, i.c = a.keep(o.scalar(-t)), i.epsilon = a.keep(o.scalar(r)), i.rho = a.keep(o.scalar(n)), i.oneMinusRho = a.keep(o.scalar(1 - n)), i
                }

                return r(t, e), t.prototype.applyGradients = function (e) {
                    var t = this, n = this;
                    for (var r in e) !function (r) {
                        var s = i.ENV.engine.registeredVariables[r];
                        null == n.accumulatedGrads[r] && a.tidy(function () {
                            t.accumulatedGrads[r] = o.zerosLike(s).variable(!1)
                        });
                        null == n.accumulatedUpdates[r] && a.tidy(function () {
                            t.accumulatedUpdates[r] = o.zerosLike(s).variable(!1)
                        });
                        var u = e[r], l = n.accumulatedGrads[r], c = n.accumulatedUpdates[r];
                        a.tidy(function () {
                            var e = t.rho.mul(l).add(t.oneMinusRho.mul(u.square())),
                                n = c.add(t.epsilon).sqrt().div(l.add(t.epsilon).sqrt()).mul(u),
                                i = t.rho.mul(c).add(t.oneMinusRho.mul(n.square()));
                            t.accumulatedGrads[r].assign(e), t.accumulatedUpdates[r].assign(i);
                            var a = t.c.mul(n).add(s);
                            s.assign(a)
                        })
                    }(r)
                }, t.prototype.dispose = function () {
                    var e = this;
                    this.c.dispose(), this.epsilon.dispose(), this.rho.dispose(), this.oneMinusRho.dispose(), null != this.accumulatedUpdates && (Object.keys(this.accumulatedUpdates).forEach(function (t) {
                        return e.accumulatedUpdates[t].dispose()
                    }), Object.keys(this.accumulatedGrads).forEach(function (t) {
                        return e.accumulatedGrads[t].dispose()
                    }))
                }, t
            }(e("./optimizer").Optimizer);
            n.AdadeltaOptimizer = s
        }, {"../environment": 5, "../globals": 6, "../ops/ops": 66, "./optimizer": 83}],
        79: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../environment"), a = e("../globals"), o = e("../ops/ops"), s = function (e) {
                function t(t, n) {
                    void 0 === n && (n = .1);
                    var r = e.call(this) || this;
                    return r.learningRate = t, r.initialAccumulatorValue = n, r.accumulatedGrads = {}, r.c = a.keep(o.scalar(-t)), r.epsilon = a.keep(o.scalar(1e-8)), r
                }

                return r(t, e), t.prototype.applyGradients = function (e) {
                    var t = this, n = this;
                    for (var r in e) !function (r) {
                        var s = i.ENV.engine.registeredVariables[r];
                        null == n.accumulatedGrads[r] && a.tidy(function () {
                            t.accumulatedGrads[r] = o.fill(s.shape, t.initialAccumulatorValue).variable(!1)
                        });
                        var u = e[r], l = n.accumulatedGrads[r];
                        a.tidy(function () {
                            var e = l.add(u.square());
                            t.accumulatedGrads[r].assign(e);
                            var n = t.c.mul(u.div(e.add(t.epsilon).sqrt())).add(s);
                            s.assign(n)
                        })
                    }(r)
                }, t.prototype.dispose = function () {
                    var e = this;
                    this.epsilon.dispose(), this.c.dispose(), null != this.accumulatedGrads && Object.keys(this.accumulatedGrads).forEach(function (t) {
                        return e.accumulatedGrads[t].dispose()
                    })
                }, t
            }(e("./optimizer").Optimizer);
            n.AdagradOptimizer = s
        }, {"../environment": 5, "../globals": 6, "../ops/ops": 66, "./optimizer": 83}],
        80: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../environment"), a = e("../globals"), o = e("../ops/ops"), s = function (e) {
                function t(t, n, r, i) {
                    void 0 === i && (i = 1e-8);
                    var s = e.call(this) || this;
                    return s.learningRate = t, s.accumulatedFirstMoment = {}, s.accumulatedSecondMoment = {}, s.c = a.keep(o.scalar(-t)), s.eps = a.keep(o.scalar(i)), s.beta1 = a.keep(o.scalar(n)), s.beta2 = a.keep(o.scalar(r)), a.tidy(function () {
                        s.accBeta1 = o.scalar(n).variable(), s.accBeta2 = o.scalar(r).variable()
                    }), s.oneMinusBeta1 = a.keep(o.scalar(1 - n)), s.oneMinusBeta2 = a.keep(o.scalar(1 - r)), s.one = a.keep(o.scalar(1)), s
                }

                return r(t, e), t.prototype.applyGradients = function (e) {
                    var t = this;
                    a.tidy(function () {
                        var n = t.one.sub(t.accBeta1), r = t.one.sub(t.accBeta2);
                        for (var a in e) {
                            var s = i.ENV.engine.registeredVariables[a];
                            if (null == t.accumulatedFirstMoment[a]) {
                                u = !1;
                                t.accumulatedFirstMoment[a] = o.zerosLike(s).variable(u)
                            }
                            if (null == t.accumulatedSecondMoment[a]) {
                                var u = !1;
                                t.accumulatedSecondMoment[a] = o.zerosLike(s).variable(u)
                            }
                            var l = e[a], c = t.accumulatedFirstMoment[a], p = t.accumulatedSecondMoment[a],
                                h = t.beta1.mul(c).add(t.oneMinusBeta1.mul(l)),
                                d = t.beta2.mul(p).add(t.oneMinusBeta2.mul(l.square())), f = h.div(n), g = d.div(r);
                            t.accumulatedFirstMoment[a].assign(h), t.accumulatedSecondMoment[a].assign(d);
                            var m = t.c.mul(f.div(t.eps.add(g.sqrt()))).add(s);
                            s.assign(m)
                        }
                        t.accBeta1.assign(t.accBeta1.mul(t.beta1)), t.accBeta2.assign(t.accBeta2.mul(t.beta2))
                    })
                }, t.prototype.dispose = function () {
                    var e = this;
                    this.c.dispose(), this.eps.dispose(), this.beta1.dispose(), this.beta2.dispose(), this.accBeta1.dispose(), this.accBeta2.dispose(), this.oneMinusBeta1.dispose(), this.oneMinusBeta2.dispose(), this.one.dispose(), null != this.accumulatedFirstMoment && Object.keys(this.accumulatedFirstMoment).forEach(function (t) {
                        return e.accumulatedFirstMoment[t].dispose()
                    }), null != this.accumulatedSecondMoment && Object.keys(this.accumulatedSecondMoment).forEach(function (t) {
                        return e.accumulatedSecondMoment[t].dispose()
                    })
                }, t
            }(e("./optimizer").Optimizer);
            n.AdamOptimizer = s
        }, {"../environment": 5, "../globals": 6, "../ops/ops": 66, "./optimizer": 83}],
        81: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../environment"), a = e("../globals"), o = e("../ops/ops"), s = function (e) {
                function t(t, n, r, i, s) {
                    void 0 === i && (i = 1e-8), void 0 === s && (s = 0);
                    var u = e.call(this) || this;
                    return u.learningRate = t, u.accumulatedFirstMoment = {}, u.accumulatedWeightedInfNorm = {}, u.c = a.keep(o.scalar(-t)), u.eps = a.keep(o.scalar(i)), u.beta1 = a.keep(o.scalar(n)), u.beta2 = a.keep(o.scalar(r)), u.decay = a.keep(o.scalar(s)), a.tidy(function () {
                        u.iteration = o.scalar(0).variable(), u.accBeta1 = o.scalar(n).variable()
                    }), u.oneMinusBeta1 = a.keep(o.scalar(1 - n)), u.one = a.keep(o.scalar(1)), u
                }

                return r(t, e), t.prototype.applyGradients = function (e) {
                    var t = this;
                    a.tidy(function () {
                        var n = t.one.sub(t.accBeta1), r = t.c.div(t.one.add(t.decay.mul(t.iteration)));
                        for (var a in e) {
                            var s = i.ENV.engine.registeredVariables[a];
                            if (null == t.accumulatedFirstMoment[a]) {
                                u = !1;
                                t.accumulatedFirstMoment[a] = o.zerosLike(s).variable(u)
                            }
                            if (null == t.accumulatedWeightedInfNorm[a]) {
                                var u = !1;
                                t.accumulatedWeightedInfNorm[a] = o.zerosLike(s).variable(u)
                            }
                            var l = e[a], c = t.accumulatedFirstMoment[a], p = t.accumulatedWeightedInfNorm[a],
                                h = t.beta1.mul(c).add(t.oneMinusBeta1.mul(l)), d = t.beta2.mul(p), f = l.abs(),
                                g = d.maximum(f);
                            t.accumulatedFirstMoment[a].assign(h), t.accumulatedWeightedInfNorm[a].assign(g);
                            var m = r.div(n).mul(h.div(t.eps.add(g))).add(s);
                            s.assign(m)
                        }
                        t.iteration.assign(t.iteration.add(t.one)), t.accBeta1.assign(t.accBeta1.mul(t.beta1))
                    })
                }, t.prototype.dispose = function () {
                    var e = this;
                    this.c.dispose(), this.eps.dispose(), this.accBeta1.dispose(), this.beta1.dispose(), this.beta2.dispose(), this.oneMinusBeta1.dispose(), this.decay.dispose(), this.iteration.dispose(), this.one.dispose(), null != this.accumulatedFirstMoment && Object.keys(this.accumulatedFirstMoment).forEach(function (t) {
                        return e.accumulatedFirstMoment[t].dispose()
                    }), null != this.accumulatedWeightedInfNorm && Object.keys(this.accumulatedWeightedInfNorm).forEach(function (t) {
                        return e.accumulatedWeightedInfNorm[t].dispose()
                    })
                }, t
            }(e("./optimizer").Optimizer);
            n.AdamaxOptimizer = s
        }, {"../environment": 5, "../globals": 6, "../ops/ops": 66, "./optimizer": 83}],
        82: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../environment"), a = e("../globals"), o = e("../ops/ops"), s = function (e) {
                function t(t, n, r) {
                    void 0 === r && (r = !1);
                    var i = e.call(this, t) || this;
                    return i.learningRate = t, i.momentum = n, i.useNesterov = r, i.m = o.scalar(i.momentum), i.accumulations = {}, i
                }

                return r(t, e), t.prototype.applyGradients = function (e) {
                    var t = this, n = this;
                    for (var r in e) !function (r) {
                        var s = i.ENV.engine.registeredVariables[r];
                        null == n.accumulations[r] && a.tidy(function () {
                            t.accumulations[r] = o.zerosLike(s).variable(!1)
                        });
                        var u = n.accumulations[r], l = e[r];
                        a.tidy(function () {
                            var e, n = t.m.mul(u).add(l);
                            e = t.useNesterov ? t.c.mul(l.add(n.mul(t.m))).add(s) : t.c.mul(n).add(s), t.accumulations[r].assign(n), s.assign(e)
                        })
                    }(r)
                }, t.prototype.dispose = function () {
                    if (e.prototype.dispose.call(this), this.m.dispose(), null != this.accumulations) for (var t in this.accumulations) this.accumulations[t].dispose()
                }, t.prototype.setMomentum = function (e) {
                    this.momentum = e
                }, t
            }(e("./sgd_optimizer").SGDOptimizer);
            n.MomentumOptimizer = s
        }, {"../environment": 5, "../globals": 6, "../ops/ops": 66, "./sgd_optimizer": 86}],
        83: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("../globals"), o = function () {
                function e() {
                }

                return e.prototype.minimize = function (e, t, n) {
                    void 0 === t && (t = !1);
                    var r = this.computeGradients(e, n), i = r.value, a = r.grads;
                    return this.applyGradients(a), Object.keys(a).forEach(function (e) {
                        return a[e].dispose()
                    }), t ? i : (i.dispose(), null)
                }, e.prototype.computeGradients = function (e, t) {
                    return a.variableGrads(e, t)
                }, r([i.doc({
                    heading: "Training",
                    subheading: "Optimizers"
                })], e.prototype, "minimize", null), e = r([i.doc({
                    heading: "Training",
                    subheading: "Classes",
                    namespace: "train"
                })], e)
            }();
            n.Optimizer = o
        }, {"../doc": 3, "../globals": 6}],
        84: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../doc"), a = e("./adadelta_optimizer"), o = e("./adagrad_optimizer"), s = e("./adam_optimizer"),
                u = e("./adamax_optimizer"), l = e("./momentum_optimizer"), c = e("./rmsprop_optimizer"),
                p = e("./sgd_optimizer"), h = function () {
                    function e() {
                    }

                    return e.sgd = function (e) {
                        return new p.SGDOptimizer(e)
                    }, e.momentum = function (e, t, n) {
                        return void 0 === n && (n = !1), new l.MomentumOptimizer(e, t, n)
                    }, e.rmsprop = function (e, t, n, r, i) {
                        return void 0 === t && (t = .9), void 0 === n && (n = 0), void 0 === r && (r = 1e-8), void 0 === i && (i = !1), new c.RMSPropOptimizer(e, t, n, r, i)
                    }, e.adam = function (e, t, n, r) {
                        return void 0 === e && (e = .001), void 0 === t && (t = .9), void 0 === n && (n = .999), void 0 === r && (r = 1e-8), new s.AdamOptimizer(e, t, n, r)
                    }, e.adadelta = function (e, t, n) {
                        return void 0 === e && (e = .001), void 0 === t && (t = .95), void 0 === n && (n = 1e-8), new a.AdadeltaOptimizer(e, t, n)
                    }, e.adamax = function (e, t, n, r, i) {
                        return void 0 === e && (e = .002), void 0 === t && (t = .9), void 0 === n && (n = .999), void 0 === r && (r = 1e-8), void 0 === i && (i = 0), new u.AdamaxOptimizer(e, t, n, r, i)
                    }, e.adagrad = function (e, t) {
                        return void 0 === t && (t = .1), new o.AdagradOptimizer(e, t)
                    }, r([i.doc({
                        heading: "Training",
                        subheading: "Optimizers",
                        namespace: "train"
                    })], e, "sgd", null), r([i.doc({
                        heading: "Training",
                        subheading: "Optimizers",
                        namespace: "train"
                    })], e, "momentum", null), r([i.doc({
                        heading: "Training",
                        subheading: "Optimizers",
                        namespace: "train"
                    })], e, "rmsprop", null), r([i.doc({
                        heading: "Training",
                        subheading: "Optimizers",
                        namespace: "train"
                    })], e, "adam", null), r([i.doc({
                        heading: "Training",
                        subheading: "Optimizers",
                        namespace: "train"
                    })], e, "adadelta", null), r([i.doc({
                        heading: "Training",
                        subheading: "Optimizers",
                        namespace: "train"
                    })], e, "adamax", null), r([i.doc({
                        heading: "Training",
                        subheading: "Optimizers",
                        namespace: "train"
                    })], e, "adagrad", null), e
                }();
            n.OptimizerConstructors = h
        }, {
            "../doc": 3,
            "./adadelta_optimizer": 78,
            "./adagrad_optimizer": 79,
            "./adam_optimizer": 80,
            "./adamax_optimizer": 81,
            "./momentum_optimizer": 82,
            "./rmsprop_optimizer": 85,
            "./sgd_optimizer": 86
        }],
        85: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../environment"), a = e("../globals"), o = e("../ops/ops"), s = function (e) {
                function t(t, n, r, i, s) {
                    void 0 === n && (n = .9), void 0 === r && (r = 0), void 0 === i && (i = 1e-8), void 0 === s && (s = !1);
                    var u = e.call(this) || this;
                    return u.learningRate = t, u.accumulatedMeanSquares = {}, u.accumulatedMeanGrads = {}, u.accumulatedMoments = {}, u.c = a.keep(o.scalar(t)), u.epsilon = a.keep(o.scalar(i)), u.decay = a.keep(o.scalar(n)), u.momentum = a.keep(o.scalar(r)), u.oneMinusDecay = a.keep(o.scalar(1 - n)), u.centered = s, u
                }

                return r(t, e), t.prototype.applyGradients = function (e) {
                    var t = this, n = this;
                    for (var r in e) !function (r) {
                        var s = i.ENV.engine.registeredVariables[r];
                        null == n.accumulatedMeanSquares[r] && a.tidy(function () {
                            t.accumulatedMeanSquares[r] = o.zerosLike(s).variable(!1)
                        });
                        null == n.accumulatedMeanGrads[r] && n.centered && a.tidy(function () {
                            t.accumulatedMeanGrads[r] = o.zerosLike(s).variable(!1)
                        });
                        null == n.accumulatedMoments[r] && a.tidy(function () {
                            t.accumulatedMoments[r] = o.zerosLike(s).variable(!1)
                        });
                        var u = n.accumulatedMeanSquares[r], l = n.accumulatedMeanGrads[r], c = n.accumulatedMoments[r],
                            p = e[r];
                        a.tidy(function () {
                            var e = t.decay.mul(u).add(t.oneMinusDecay.mul(p.square()));
                            if (t.centered) {
                                var n = t.decay.mul(l).add(t.oneMinusDecay.mul(p)),
                                    i = t.momentum.mul(c).add(t.c.mul(p).div(e.sub(n.square().add(t.epsilon)).sqrt()));
                                t.accumulatedMeanSquares[r].assign(e), t.accumulatedMeanGrads[r].assign(n), t.accumulatedMoments[r].assign(i), o = s.sub(i), s.assign(o)
                            } else {
                                var a = t.decay.mul(u).add(t.oneMinusDecay.mul(p.square())),
                                    i = t.momentum.mul(c).add(t.c.mul(p).div(a.add(t.epsilon).sqrt()));
                                t.accumulatedMeanSquares[r].assign(a), t.accumulatedMoments[r].assign(i);
                                var o = s.sub(i);
                                s.assign(o)
                            }
                        })
                    }(r)
                }, t.prototype.dispose = function () {
                    var e = this;
                    this.c.dispose(), this.epsilon.dispose(), this.decay.dispose(), this.momentum.dispose(), this.oneMinusDecay.dispose(), null != this.accumulatedMeanSquares && Object.keys(this.accumulatedMeanSquares).forEach(function (t) {
                        return e.accumulatedMeanSquares[t].dispose()
                    }), null != this.accumulatedMeanGrads && this.centered && Object.keys(this.accumulatedMeanGrads).forEach(function (t) {
                        return e.accumulatedMeanGrads[t].dispose()
                    }), null != this.accumulatedMoments && Object.keys(this.accumulatedMoments).forEach(function (t) {
                        return e.accumulatedMoments[t].dispose()
                    })
                }, t
            }(e("./optimizer").Optimizer);
            n.RMSPropOptimizer = s
        }, {"../environment": 5, "../globals": 6, "../ops/ops": 66, "./optimizer": 83}],
        86: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../environment"), a = e("../globals"), o = e("../ops/ops"), s = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.learningRate = t, n.setLearningRate(t), n
                }

                return r(t, e), t.prototype.applyGradients = function (e) {
                    var t = this;
                    Object.keys(e).forEach(function (n) {
                        var r = e[n], o = i.ENV.engine.registeredVariables[n];
                        a.tidy(function () {
                            var e = t.c.mul(r).add(o);
                            o.assign(e)
                        })
                    })
                }, t.prototype.setLearningRate = function (e) {
                    this.learningRate = e, null != this.c && this.c.dispose(), this.c = a.keep(o.scalar(-e))
                }, t.prototype.dispose = function () {
                    this.c.dispose()
                }, t
            }(e("./optimizer").Optimizer);
            n.SGDOptimizer = s
        }, {"../environment": 5, "../globals": 6, "../ops/ops": 66, "./optimizer": 83}],
        87: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./util"), i = function () {
                function e(e, t) {
                    this.backendTimer = e, this.logger = t, null == t && (this.logger = new a)
                }

                return e.prototype.profileKernel = function (e, t) {
                    var n, i = this, a = this.backendTimer.time(function () {
                        n = t()
                    }), o = n.dataSync();
                    return r.checkForNaN(o, n.dtype, e), a.then(function (t) {
                        i.logger.logKernelProfile(e, n, o, t.kernelMs)
                    }), n
                }, e
            }();
            n.Profiler = i;
            var a = function () {
                function e() {
                }

                return e.prototype.logKernelProfile = function (e, t, n, i) {
                    var a = r.rightPad(i + "ms", 9), o = r.rightPad(e, 25), s = t.rank, u = t.size,
                        l = r.rightPad(t.shape.toString(), 14);
                    console.log("%c" + o + "\t%c" + a + "\t%c" + s + "D " + l + "\t%c" + u, "font-weight:bold", "color:red", "color:blue", "color: orange")
                }, e
            }();
            n.Logger = a
        }, {"./util": 95}],
        88: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./util");
            n.getFilteredNodesXToY = function (e, t, n) {
                for (var r = {}, i = {}, a = 0; a < t.length; a++) r[t[a].id] = !0;
                for (a = 0; a < e.length; a++) {
                    h = (g = e[a]).inputs;
                    for (var o in h) {
                        for (var s = h[o], u = !1, l = 0; l < t.length; l++) if (r[s.id]) {
                            r[g.output.id] = !0, u = !0, i[g.id] = !0;
                            break
                        }
                        if (u) break
                    }
                }
                var c = {};
                c[n.id] = !0;
                for (var p = {}, a = e.length - 1; a >= 0; a--) {
                    var h = (g = e[a]).inputs, d = [];
                    for (d.push(g.output), l = 0; l < d.length; l++) if (c[d[l].id]) {
                        for (var o in h) c[h[o].id] = !0, p[g.id] = !0;
                        break
                    }
                }
                for (var f = [], a = 0; a < e.length; a++) {
                    var g = e[a];
                    if (i[g.id] && p[g.id]) {
                        var m = {};
                        for (var o in g.inputs) {
                            var v = g.inputs[o];
                            r[v.id] && (m[o] = v)
                        }
                        var y = Object.assign({}, g);
                        y.inputs = m, y.output = g.output, f.push(y)
                    }
                }
                return f
            }, n.backpropagateGradients = function (e, t) {
                for (var n = t.length - 1; n >= 0; n--) {
                    var i = t[n], a = e[i.output.id];
                    if (null == i.gradient) throw new Error("Cannot compute gradient: gradient function not found for " + i.name + ".");
                    var o = i.gradient(a);
                    for (var s in i.inputs) {
                        if (!(s in o)) throw new Error("Cannot backprop through input " + s + ". Available gradients found: " + Object.keys(o) + ".");
                        var u = o[s](), l = i.inputs[s];
                        if (!r.arraysEqual(u.shape, l.shape)) throw new Error("Error in gradient for op " + i.name + ". The gradient of input '" + s + "' has shape '" + u.shape + "', which does not match the shape of the input '" + l.shape + "'");
                        if (null == e[l.id]) e[l.id] = u; else {
                            var c = e[l.id];
                            e[l.id] = c.add(u), c.dispose()
                        }
                    }
                }
            }
        }, {"./util": 95}],
        89: [function (e, t, n) {
            "use strict";

            function r(e) {
                var t = e.length;
                if (t < 2) return [];
                var n = new Array(t - 1);
                n[t - 2] = e[t - 1];
                for (var r = t - 3; r >= 0; --r) n[r] = n[r + 1] * e[r + 1];
                return n
            }

            var i = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), a = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }, o = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, s = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var u = e("./doc"), l = e("./environment"), c = e("./ops/ops"), p = e("./tensor_util"), h = e("./util"),
                d = function () {
                    function e(e, t, n) {
                        if (this.dtype = t, null != n) {
                            var i = n.length, a = h.sizeFromShape(e);
                            h.assert(i === a, "Length of values '" + i + "' does not match the size inferred by the shape '" + a + "'")
                        }
                        this.shape = e.slice(), this.values = n || h.getTypedArrayFromDType(t, h.sizeFromShape(e)), this.strides = r(e), this.size = h.sizeFromShape(e)
                    }

                    return e.prototype.set = function (e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        0 === t.length && (t = [0]), h.assert(t.length === this.rank, "The number of provided coordinates (" + t.length + ") must match the rank (" + this.rank + ")");
                        var r = this.locToIndex(t);
                        this.values[r] = e
                    }, e.prototype.get = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        0 === e.length && (e = [0]);
                        for (var n = e[e.length - 1], r = 0; r < e.length - 1; ++r) n += this.strides[r] * e[r];
                        return this.values[n]
                    }, e.prototype.locToIndex = function (e) {
                        if (0 === this.rank) return 0;
                        if (1 === this.rank) return e[0];
                        for (var t = e[e.length - 1], n = 0; n < e.length - 1; ++n) t += this.strides[n] * e[n];
                        return t
                    }, e.prototype.indexToLoc = function (e) {
                        if (0 === this.rank) return [];
                        if (1 === this.rank) return [e];
                        for (var t = new Array(this.shape.length), n = 0; n < t.length - 1; ++n) t[n] = Math.floor(e / this.strides[n]), e -= t[n] * this.strides[n];
                        return t[t.length - 1] = e, t
                    }, Object.defineProperty(e.prototype, "rank", {
                        get: function () {
                            return this.shape.length
                        }, enumerable: !0, configurable: !0
                    }), e.prototype.toTensor = function () {
                        return f.make(this.shape, {values: this.values}, this.dtype)
                    }, a([u.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e.prototype, "set", null), a([u.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e.prototype, "get", null), a([u.doc({
                        heading: "Tensors",
                        subheading: "Creation"
                    })], e.prototype, "toTensor", null), e = a([u.doc({heading: "Tensors", subheading: "Classes"})], e)
                }();
            n.TensorBuffer = d;
            var f = function () {
                function e(e, n, i, a) {
                    this.isDisposed = !1, this.size = h.sizeFromShape(e), null != i && h.assert(this.size === i.length, "Constructing tensor of shape (" + this.size + ") should match the length of values (" + i.length + ")"), this.shape = e.slice(), this.dtype = n || "float32", this.strides = r(e), this.dataId = null != a ? a : {}, this.id = t.nextId++, this.rankType = this.rank < 5 ? this.rank.toString() : "higher", l.ENV.engine.registerTensor(this), null != i && l.ENV.engine.write(this.dataId, i)
                }

                return t = e, e.make = function (e, n, r) {
                    return new t(e, r, n.values, n.dataId)
                }, e.prototype.flatten = function () {
                    return this.throwIfDisposed(), this.as1D()
                }, e.prototype.asScalar = function () {
                    return this.throwIfDisposed(), h.assert(1 === this.size, "The array must have only 1 element."), this.reshape([])
                }, e.prototype.as1D = function () {
                    return this.throwIfDisposed(), this.reshape([this.size])
                }, e.prototype.as2D = function (e, t) {
                    return this.throwIfDisposed(), this.reshape([e, t])
                }, e.prototype.as3D = function (e, t, n) {
                    return this.throwIfDisposed(), this.reshape([e, t, n])
                }, e.prototype.as4D = function (e, t, n, r) {
                    return this.throwIfDisposed(), this.reshape([e, t, n, r])
                }, e.prototype.asType = function (e) {
                    return this.throwIfDisposed(), c.cast(this, e)
                }, Object.defineProperty(e.prototype, "rank", {
                    get: function () {
                        return this.shape.length
                    }, enumerable: !0, configurable: !0
                }), e.prototype.get = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.throwIfDisposed(), 0 === e.length && (e = [0]);
                    for (var n = e[e.length - 1], r = 0; r < e.length - 1; ++r) n += this.strides[r] * e[r];
                    return this.dataSync()[n]
                }, e.prototype.buffer = function () {
                    return c.buffer(this.shape, this.dtype, this.dataSync())
                }, e.prototype.data = function () {
                    return o(this, void 0, void 0, function () {
                        return s(this, function (e) {
                            return this.throwIfDisposed(), [2, l.ENV.engine.read(this.dataId)]
                        })
                    })
                }, e.prototype.dataSync = function () {
                    return this.throwIfDisposed(), l.ENV.engine.readSync(this.dataId)
                }, e.prototype.dispose = function () {
                    this.isDisposed || (this.isDisposed = !0, l.ENV.engine.disposeTensor(this))
                }, e.prototype.throwIfDisposed = function () {
                    if (this.isDisposed) throw new Error("Tensor is disposed.")
                }, e.prototype.toFloat = function () {
                    return this.asType("float32")
                }, e.prototype.toInt = function () {
                    return this.asType("int32")
                }, e.prototype.toBool = function () {
                    return this.asType("bool")
                }, e.prototype.print = function (e) {
                    return void 0 === e && (e = !1), c.print(this, e)
                }, e.prototype.reshape = function (e) {
                    return this.throwIfDisposed(), c.reshape(this, e)
                }, e.prototype.reshapeAs = function (e) {
                    return this.throwIfDisposed(), this.reshape(e.shape)
                }, e.prototype.expandDims = function (e) {
                    return void 0 === e && (e = 0), c.expandDims(this, e)
                }, e.prototype.squeeze = function (e) {
                    return this.throwIfDisposed(), c.squeeze(this, e)
                }, e.prototype.clone = function () {
                    return this.throwIfDisposed(), c.clone(this)
                }, e.prototype.toString = function (e) {
                    return void 0 === e && (e = !1), p.tensorToString(this, e)
                }, e.prototype.tile = function (e) {
                    return this.throwIfDisposed(), c.tile(this, e)
                }, e.prototype.gather = function (e, t) {
                    return void 0 === t && (t = 0), this.throwIfDisposed(), c.gather(this, e, t)
                }, e.prototype.matMul = function (e, t, n) {
                    return void 0 === t && (t = !1), void 0 === n && (n = !1), this.throwIfDisposed(), c.matMul(this, e, t, n)
                }, e.prototype.norm = function (e, t, n) {
                    return void 0 === e && (e = "euclidean"), void 0 === t && (t = null), void 0 === n && (n = !1), this.throwIfDisposed(), c.norm(this, e, t, n)
                }, e.prototype.slice = function (e, t) {
                    return this.throwIfDisposed(), c.slice(this, e, t)
                }, e.prototype.reverse = function (e) {
                    return this.throwIfDisposed(), c.reverse(this, e)
                }, e.prototype.concat = function (e, t) {
                    return void 0 === t && (t = 0), this.throwIfDisposed(), c.concat([this, e], t)
                }, e.prototype.stack = function (e, t) {
                    return void 0 === t && (t = 0), c.stack([this, e], t)
                }, e.prototype.pad = function (e, t) {
                    return void 0 === t && (t = 0), c.pad(this, e, t)
                }, e.prototype.batchNormalization = function (e, t, n, r, i) {
                    return void 0 === n && (n = .001), this.throwIfDisposed(), c.batchNormalization(this, e, t, n, r, i)
                }, e.prototype.logSumExp = function (e, t) {
                    return void 0 === e && (e = null), void 0 === t && (t = !1), this.throwIfDisposed(), c.logSumExp(this, e, t)
                }, e.prototype.sum = function (e, t) {
                    return void 0 === e && (e = null), void 0 === t && (t = !1), this.throwIfDisposed(), c.sum(this, e, t)
                }, e.prototype.mean = function (e, t) {
                    return void 0 === e && (e = null), void 0 === t && (t = !1), this.throwIfDisposed(), c.mean(this, e, t)
                }, e.prototype.min = function (e, t) {
                    return void 0 === e && (e = null), void 0 === t && (t = !1), this.throwIfDisposed(), c.min(this, e, t)
                }, e.prototype.max = function (e, t) {
                    return void 0 === e && (e = null), void 0 === t && (t = !1), this.throwIfDisposed(), c.max(this, e, t)
                }, e.prototype.argMin = function (e) {
                    return void 0 === e && (e = null), this.throwIfDisposed(), c.argMin(this, e)
                }, e.prototype.argMax = function (e) {
                    return void 0 === e && (e = null), this.throwIfDisposed(), c.argMax(this, e)
                }, e.prototype.cast = function (e) {
                    return this.throwIfDisposed(), c.cast(this, e)
                }, e.prototype.add = function (e) {
                    return this.throwIfDisposed(), c.add(this, e)
                }, e.prototype.addStrict = function (e) {
                    return this.throwIfDisposed(), c.addStrict(this, e)
                }, e.prototype.sub = function (e) {
                    return this.throwIfDisposed(), c.sub(this, e)
                }, e.prototype.subStrict = function (e) {
                    return this.throwIfDisposed(), c.subStrict(this, e)
                }, e.prototype.pow = function (e) {
                    return this.throwIfDisposed(), c.pow(this, e)
                }, e.prototype.powStrict = function (e) {
                    return this.throwIfDisposed(), c.powStrict(this, e)
                }, e.prototype.mul = function (e) {
                    return this.throwIfDisposed(), c.mul(this, e)
                }, e.prototype.mulStrict = function (e) {
                    return this.throwIfDisposed(), c.mulStrict(this, e)
                }, e.prototype.div = function (e) {
                    return this.throwIfDisposed(), c.div(this, e)
                }, e.prototype.divStrict = function (e) {
                    return this.throwIfDisposed(), c.divStrict(this, e)
                }, e.prototype.minimum = function (e) {
                    return this.throwIfDisposed(), c.minimum(this, e)
                }, e.prototype.minimumStrict = function (e) {
                    return this.throwIfDisposed(), c.minimumStrict(this, e)
                }, e.prototype.maximum = function (e) {
                    return this.throwIfDisposed(), c.maximum(this, e)
                }, e.prototype.maximumStrict = function (e) {
                    return this.throwIfDisposed(), c.maximumStrict(this, e)
                }, e.prototype.mod = function (e) {
                    return this.throwIfDisposed(), c.mod(this, e)
                }, e.prototype.modStrict = function (e) {
                    return this.throwIfDisposed(), c.modStrict(this, e)
                }, e.prototype.squaredDifference = function (e) {
                    return this.throwIfDisposed(), c.squaredDifference(this, e)
                }, e.prototype.squaredDifferenceStrict = function (e) {
                    return this.throwIfDisposed(), c.squaredDifferenceStrict(this, e)
                }, e.prototype.transpose = function (e) {
                    return this.throwIfDisposed(), c.transpose(this, e)
                }, e.prototype.notEqual = function (e) {
                    return this.throwIfDisposed(), c.notEqual(this, e)
                }, e.prototype.notEqualStrict = function (e) {
                    return this.throwIfDisposed(), c.notEqualStrict(this, e)
                }, e.prototype.less = function (e) {
                    return this.throwIfDisposed(), c.less(this, e)
                }, e.prototype.lessStrict = function (e) {
                    return this.throwIfDisposed(), c.lessStrict(this, e)
                }, e.prototype.equal = function (e) {
                    return this.throwIfDisposed(), c.equal(this, e)
                }, e.prototype.equalStrict = function (e) {
                    return this.throwIfDisposed(), c.equalStrict(this, e)
                }, e.prototype.lessEqual = function (e) {
                    return this.throwIfDisposed(), c.lessEqual(this, e)
                }, e.prototype.lessEqualStrict = function (e) {
                    return this.throwIfDisposed(), c.lessEqualStrict(this, e)
                }, e.prototype.greater = function (e) {
                    return this.throwIfDisposed(), c.greater(this, e)
                }, e.prototype.greaterStrict = function (e) {
                    return this.throwIfDisposed(), c.greaterStrict(this, e)
                }, e.prototype.greaterEqual = function (e) {
                    return this.throwIfDisposed(), c.greaterEqual(this, e)
                }, e.prototype.greaterEqualStrict = function (e) {
                    return this.throwIfDisposed(), c.greaterEqualStrict(this, e)
                }, e.prototype.logicalAnd = function (e) {
                    return this.throwIfDisposed(), c.logicalAnd(this, e)
                }, e.prototype.logicalOr = function (e) {
                    return this.throwIfDisposed(), c.logicalOr(this, e)
                }, e.prototype.logicalNot = function () {
                    return this.throwIfDisposed(), c.logicalNot(this)
                }, e.prototype.logicalXor = function (e) {
                    return this.throwIfDisposed(), c.logicalXor(this, e)
                }, e.prototype.where = function (e, t) {
                    return this.throwIfDisposed(), c.where(e, this, t)
                }, e.prototype.neg = function () {
                    return this.throwIfDisposed(), c.neg(this)
                }, e.prototype.ceil = function () {
                    return this.throwIfDisposed(), c.ceil(this)
                }, e.prototype.floor = function () {
                    return this.throwIfDisposed(), c.floor(this)
                }, e.prototype.sign = function () {
                    return this.throwIfDisposed(), c.sign(this)
                }, e.prototype.exp = function () {
                    return this.throwIfDisposed(), c.exp(this)
                }, e.prototype.expm1 = function () {
                    return this.throwIfDisposed(), c.expm1(this)
                }, e.prototype.log = function () {
                    return this.throwIfDisposed(), c.log(this)
                }, e.prototype.log1p = function () {
                    return this.throwIfDisposed(), c.log1p(this)
                }, e.prototype.sqrt = function () {
                    return this.throwIfDisposed(), c.sqrt(this)
                }, e.prototype.rsqrt = function () {
                    return this.throwIfDisposed(), c.rsqrt(this)
                }, e.prototype.square = function () {
                    return this.throwIfDisposed(), c.square(this)
                }, e.prototype.reciprocal = function () {
                    return this.throwIfDisposed(), c.reciprocal(this)
                }, e.prototype.abs = function () {
                    return this.throwIfDisposed(), c.abs(this)
                }, e.prototype.clipByValue = function (e, t) {
                    return this.throwIfDisposed(), c.clipByValue(this, e, t)
                }, e.prototype.relu = function () {
                    return this.throwIfDisposed(), c.relu(this)
                }, e.prototype.elu = function () {
                    return this.throwIfDisposed(), c.elu(this)
                }, e.prototype.selu = function () {
                    return this.throwIfDisposed(), c.selu(this)
                }, e.prototype.leakyRelu = function (e) {
                    return void 0 === e && (e = .2), this.throwIfDisposed(), c.leakyRelu(this, e)
                }, e.prototype.prelu = function (e) {
                    return this.throwIfDisposed(), c.prelu(this, e)
                }, e.prototype.sigmoid = function () {
                    return this.throwIfDisposed(), c.sigmoid(this)
                }, e.prototype.logSigmoid = function () {
                    return this.throwIfDisposed(), c.logSigmoid(this)
                },e.prototype.softplus = function () {
                    return this.throwIfDisposed(), c.softplus(this)
                },e.prototype.sin = function () {
                    return this.throwIfDisposed(), c.sin(this)
                },e.prototype.cos = function () {
                    return this.throwIfDisposed(), c.cos(this)
                },e.prototype.tan = function () {
                    return this.throwIfDisposed(), c.tan(this)
                },e.prototype.asin = function () {
                    return this.throwIfDisposed(), c.asin(this)
                },e.prototype.acos = function () {
                    return this.throwIfDisposed(), c.acos(this)
                },e.prototype.atan = function () {
                    return this.throwIfDisposed(), c.atan(this)
                },e.prototype.sinh = function () {
                    return this.throwIfDisposed(), c.sinh(this)
                },e.prototype.cosh = function () {
                    return this.throwIfDisposed(), c.cosh(this)
                },e.prototype.tanh = function () {
                    return this.throwIfDisposed(), c.tanh(this)
                },e.prototype.asinh = function () {
                    return this.throwIfDisposed(), c.asinh(this)
                },e.prototype.acosh = function () {
                    return this.throwIfDisposed(), c.acosh(this)
                },e.prototype.atanh = function () {
                    return this.throwIfDisposed(), c.atanh(this)
                },e.prototype.erf = function () {
                    return this.throwIfDisposed(), c.erf(this)
                },e.prototype.step = function (e) {
                    return void 0 === e && (e = 0), this.throwIfDisposed(), c.step(this, e)
                },e.prototype.softmax = function (e) {
                    return void 0 === e && (e = -1), this.throwIfDisposed(), c.softmax(this, e)
                },e.prototype.resizeBilinear = function (e, t) {
                    return void 0 === t && (t = !1), this.throwIfDisposed(), c.image.resizeBilinear(this, e, t)
                },e.prototype.resizeNearestNeighbor = function (e, t) {
                    return void 0 === t && (t = !1), this.throwIfDisposed(), c.image.resizeNearestNeighbor(this, e, t)
                },e.prototype.conv1d = function (e, t, n, r, i, a) {
                    return void 0 === r && (r = "NWC"), void 0 === i && (i = 1), this.throwIfDisposed(), c.conv1d(this, e, t, n, r, i, a)
                },e.prototype.conv2d = function (e, t, n, r, i, a) {
                    return void 0 === r && (r = "NHWC"), void 0 === i && (i = [1, 1]), this.throwIfDisposed(), c.conv2d(this, e, t, n, r, i, a)
                },e.prototype.conv2dTranspose = function (e, t, n, r, i) {
                    return this.throwIfDisposed(), c.conv2dTranspose(this, e, t, n, r, i)
                },e.prototype.depthwiseConv2D = function (e, t, n, r, i, a) {
                    return void 0 === r && (r = "NHWC"), void 0 === i && (i = [1, 1]), this.throwIfDisposed(), c.depthwiseConv2d(this, e, t, n, r, i, a)
                },e.prototype.avgPool = function (e, t, n, r) {
                    return this.throwIfDisposed(), c.avgPool(this, e, t, n, r)
                },e.prototype.maxPool = function (e, t, n, r) {
                    return this.throwIfDisposed(), c.maxPool(this, e, t, n, r)
                },e.prototype.localResponseNormalization = function (e, t, n, r) {
                    return void 0 === e && (e = 5), void 0 === t && (t = 1), void 0 === n && (n = 1), void 0 === r && (r = .5), c.localResponseNormalization(this, e, t, n, r)
                },e.prototype.variable = function (e, t, n) {
                    return void 0 === e && (e = !0), this.throwIfDisposed(), g.variable(this, e, t, n)
                },e.nextId = 0,a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "flatten", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "asScalar", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "as1D", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "as2D", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "as3D", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "as4D", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "asType", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "buffer", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "data", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "dataSync", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "dispose", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "toFloat", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "toInt", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "toBool", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "print", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "reshape", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "reshapeAs", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "expandDims", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "squeeze", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "clone", null),a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], e.prototype, "toString", null),e = t = a([u.doc({heading: "Tensors", subheading: "Classes"})], e);
                var t
            }();
            n.Tensor = f;
            var g = function (e) {
                function t(t, r, i) {
                    void 0 === r && (r = !0);
                    var a = e.call(this, t.shape, t.dtype, null, t.dataId) || this;
                    return a.trainable = r, a.name = i, null == a.name && (a.name = n.nextVarId.toString(), n.nextVarId++), l.ENV.engine.registerVariable(a), a
                }

                return i(t, e), n = t, t.variable = function (e, t, r, i) {
                    return void 0 === t && (t = !0), null != i && i !== e.dtype && (e = e.asType(i)), new n(e, t, r)
                }, t.prototype.assign = function (e) {
                    if (e.dtype !== this.dtype) throw new Error("dtype of the new value (" + e.dtype + ") and previous value (" + this.dtype + ") must match");
                    if (!h.arraysEqual(e.shape, this.shape)) throw new Error("shape of the new value (" + e.shape + ") and previous value (" + this.shape + ") must match");
                    l.ENV.engine.disposeTensor(this), this.dataId = e.dataId, l.ENV.engine.registerTensor(this)
                }, t.nextVarId = 0, a([u.doc({
                    heading: "Tensors",
                    subheading: "Classes"
                })], t.prototype, "assign", null), a([u.doc({
                    heading: "Tensors",
                    subheading: "Creation"
                })], t, "variable", null), t = n = a([u.doc({heading: "Tensors", subheading: "Classes"})], t);
                var n
            }(f);
            n.Variable = g;
            var m = g.variable;
            n.variable = m
        }, {"./doc": 3, "./environment": 5, "./ops/ops": 66, "./tensor_util": 90, "./util": 95}],
        90: [function (e, t, n) {
            "use strict";

            function r(e) {
                var t = e.dataSync(), n = e.size, r = e.strides[e.strides.length - 1], a = new Array(r).fill(0);
                if (e.rank > 1) for (var o = 0; o < n / r; o++) for (var s = o * r, u = 0; u < r; u++) a[u] = Math.max(a[u], i(t[s + u], 0).length);
                return a
            }

            function i(e, t) {
                return o.rightPad(parseFloat(e.toFixed(l)).toString(), t)
            }

            function a(e, t, n, r, o) {
                void 0 === o && (o = !0);
                var l = t[0], c = t.length;
                if (0 === c) return [e[0].toString()];
                if (1 === c) {
                    if (l > s) {
                        var p = Array.from(e.subarray(0, u)), h = Array.from(e.subarray(l - u, l));
                        return ["[" + p.map(function (e, t) {
                            return i(e, r[t])
                        }).join(", ") + ", ..., " + h.map(function (e, t) {
                            return i(e, r[l - u + t])
                        }).join(", ") + "]"]
                    }
                    return ["[" + Array.from(e).map(function (e, t) {
                        return i(e, r[t])
                    }).join(", ") + "]"]
                }
                var d = t.slice(1), f = n.slice(1), g = n[0], m = [];
                if (l > s) {
                    for (x = 0; x < u; x++) {
                        y = (v = x * g) + g;
                        m.push.apply(m, a(e.subarray(v, y), d, f, r, !1))
                    }
                    m.push("...");
                    for (x = l - u; x < l; x++) {
                        y = (v = x * g) + g;
                        m.push.apply(m, a(e.subarray(v, y), d, f, r, x === l - 1))
                    }
                } else for (x = 0; x < l; x++) {
                    var v = x * g, y = v + g;
                    m.push.apply(m, a(e.subarray(v, y), d, f, r, x === l - 1))
                }
                var b = 2 === c ? "," : "";
                m[0] = "[" + m[0] + b;
                for (x = 1; x < m.length - 1; x++) m[x] = " " + m[x] + b;
                for (var w = ",\n", x = 2; x < c; x++) w += "\n";
                return m[m.length - 1] = " " + m[m.length - 1] + "]" + (o ? "" : w), m
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var o = e("./util"), s = 20, u = 3, l = 7;
            n.tensorToString = function (e, t) {
                var n = e.dataSync(), i = r(e), o = a(n, e.shape, e.strides, i), s = ["Tensor"];
                return t && (s.push("  dtype: " + e.dtype), s.push("  rank: " + e.rank), s.push("  shape: [" + e.shape + "]"), s.push("  values:")), s.push(o.map(function (e) {
                    return "    " + e
                }).join("\n")), s.join("\n")
            }
        }, {"./util": 95}],
        91: [function (e, t, n) {
            "use strict";

            function r(e, t, r) {
                if (void 0 === r && (r = n.TEST_EPSILON), e instanceof l.Tensor || t instanceof l.Tensor) {
                    if (e instanceof l.Tensor && t instanceof l.Tensor) {
                        if (e.dtype !== t.dtype) throw new Error("Arrays are of different type actual: " + e.dtype + " vs expected: " + t.dtype + ".");
                        if (!c.arraysEqual(e.shape, t.shape)) throw new Error("Arrays are of different shape actual: " + e.shape + " vs expected: " + t.shape + ".")
                    }
                } else {
                    var a = e.constructor.name, o = t.constructor.name;
                    if (a !== o) throw new Error("Arrays are of different type actual: " + a + " vs expected: " + o)
                }
                var s, u;
                if (s = e instanceof l.Tensor ? e.dataSync() : e, u = t instanceof l.Tensor ? t.dataSync() : t, s.length !== u.length) throw new Error("Arrays have different lengths actual: " + s.length + " vs expected: " + u.length + ".\nActual:   " + s + ".\nExpected: " + u + ".");
                for (var p = 0; p < u.length; ++p) {
                    var h = s[p], d = u[p];
                    if (!i(h, Number(d), r)) throw new Error("Arrays differ: actual[" + p + "] = " + h + ", expected[" + p + "] = " + d + ".\nActual:   " + s + ".\nExpected: " + u + ".")
                }
            }

            function i(e, t, n) {
                return !(!isNaN(e) || !isNaN(t)) || !(isNaN(e) || isNaN(t) || Math.abs(e - t) > n)
            }

            function a(e, t, n) {
                describe(e, function () {
                    beforeAll(function () {
                        o.ENV.setFeatures(n), p(n)
                    }), beforeEach(function () {
                        d(n), n && null != n.BACKEND && o.Environment.setBackend(n.BACKEND), o.ENV.engine.startScope()
                    }), afterEach(function () {
                        o.ENV.engine.endScope(null), f(n)
                    }), afterAll(function () {
                        h(n), o.ENV.reset()
                    }), t()
                })
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var o = e("./environment"), s = e("./kernels/backend_cpu"), u = e("./kernels/backend_webgl"),
                l = e("./tensor"), c = e("./util");
            n.WEBGL_ENVS = {BACKEND: "test-webgl"}, n.CPU_ENVS = {BACKEND: "test-cpu"}, n.ALL_ENVS = {}, n.TEST_EPSILON = .001, n.expectArraysClose = r, n.expectPromiseToFail = function (e, t) {
                e().then(function () {
                    return t.fail()
                }, function () {
                    return t()
                })
            }, n.expectArraysEqual = function (e, t) {
                return r(e, t, 0)
            }, n.expectNumbersClose = function (e, t, r) {
                if (void 0 === r && (r = n.TEST_EPSILON), !i(e, t, r)) throw new Error("Numbers differ: actual === " + e + ", expected === " + t)
            }, n.expectValuesInRange = function (e, t, n) {
                var r;
                r = e instanceof l.Tensor ? e.dataSync() : e;
                for (var i = 0; i < r.length; i++) if (r[i] < t || r[i] > n) throw new Error("Value out of range:" + r[i] + " low: " + t + ", high: " + n)
            }, n.describeWithFlags = function (e, t, n) {
                g.filter(function (e) {
                    return Object.keys(t).every(function (n) {
                        return t[n] === e[n]
                    })
                }).forEach(function (t) {
                    a(e + " " + JSON.stringify(t), n, t)
                })
            };
            var p = function (e) {
                o.ENV.registerBackend("test-webgl", function () {
                    return new u.MathBackendWebGL
                }), o.ENV.registerBackend("test-cpu", function () {
                    return new s.MathBackendCPU
                })
            }, h = function (e) {
                o.ENV.removeBackend("test-webgl"), o.ENV.removeBackend("test-cpu")
            }, d = function (e) {
            }, f = function (e) {
            }, g = [{BACKEND: "test-webgl", WEBGL_FLOAT_TEXTURE_ENABLED: !0, WEBGL_VERSION: 1}, {
                BACKEND: "test-webgl",
                WEBGL_FLOAT_TEXTURE_ENABLED: !0,
                WEBGL_VERSION: 2
            }, {BACKEND: "test-cpu"}];
            n.setBeforeAll = function (e) {
                p = e
            }, n.setAfterAll = function (e) {
                h = e
            }, n.setBeforeEach = function (e) {
                d = e
            }, n.setAfterEach = function (e) {
                f = e
            }, n.setTestEnvFeatures = function (e) {
                g = e
            }
        }, {
            "./environment": 5,
            "./kernels/backend_cpu": 9,
            "./kernels/backend_webgl": 11,
            "./tensor": 89,
            "./util": 95
        }],
        92: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("./doc"), a = e("./environment"), o = e("./util"), s = function () {
                function e() {
                }

                return e.tidy = function (e, t, n) {
                    void 0 === n && (n = !1);
                    var r = null;
                    if (null == t) {
                        if ("function" != typeof e) throw new Error("Please provide a function to tidy()");
                        t = e
                    } else {
                        if ("string" != typeof e && !(e instanceof String)) throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
                        if ("function" != typeof t) throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
                        r = e
                    }
                    a.ENV.engine.startScope(r, n);
                    var i = t();
                    return i instanceof Promise && console.error("Cannot return a Promise inside of tidy."), a.ENV.engine.endScope(i, n), i
                }, e.dispose = function (e) {
                    o.extractTensorsFromAny(e).forEach(function (e) {
                        return e.dispose()
                    })
                }, e.keep = function (e) {
                    return a.ENV.engine.keep(e)
                }, e.time = function (e) {
                    return a.ENV.engine.time(e)
                }, r([i.doc({
                    heading: "Performance",
                    subheading: "Memory"
                })], e, "tidy", null), r([i.doc({
                    heading: "Performance",
                    subheading: "Memory"
                })], e, "keep", null), r([i.doc({heading: "Performance", subheading: "Timing"})], e, "time", null), e
            }();
            n.Tracking = s
        }, {"./doc": 3, "./environment": 5, "./util": 95}],
        93: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./optimizers/adadelta_optimizer"), i = e("./optimizers/adagrad_optimizer"),
                a = e("./optimizers/adam_optimizer"), o = e("./optimizers/adamax_optimizer"),
                s = e("./optimizers/momentum_optimizer"), u = e("./optimizers/optimizer_constructors"),
                l = e("./optimizers/rmsprop_optimizer"), c = e("./optimizers/sgd_optimizer");
            s.MomentumOptimizer, c.SGDOptimizer, r.AdadeltaOptimizer, i.AdagradOptimizer, l.RMSPropOptimizer, o.AdamaxOptimizer, a.AdamOptimizer, n.train = {
                sgd: u.OptimizerConstructors.sgd,
                momentum: u.OptimizerConstructors.momentum,
                adadelta: u.OptimizerConstructors.adadelta,
                adagrad: u.OptimizerConstructors.adagrad,
                rmsprop: u.OptimizerConstructors.rmsprop,
                adamax: u.OptimizerConstructors.adamax,
                adam: u.OptimizerConstructors.adam
            }
        }, {
            "./optimizers/adadelta_optimizer": 78,
            "./optimizers/adagrad_optimizer": 79,
            "./optimizers/adam_optimizer": 80,
            "./optimizers/adamax_optimizer": 81,
            "./optimizers/momentum_optimizer": 82,
            "./optimizers/optimizer_constructors": 84,
            "./optimizers/rmsprop_optimizer": 85,
            "./optimizers/sgd_optimizer": 86
        }],
        94: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return s[e][t]
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            !function (e) {
                e.float32 = "float32", e.int32 = "int32", e.bool = "bool"
            }(n.DType || (n.DType = {}));
            !function (e) {
                e.R0 = "R0", e.R1 = "R1", e.R2 = "R2", e.R3 = "R3", e.R4 = "R4"
            }(n.Rank || (n.Rank = {}));
            var i;
            !function (e) {
                e.float32 = "float32", e.int32 = "int32", e.bool = "int32"
            }(i || (i = {}));
            var a;
            !function (e) {
                e.float32 = "float32", e.int32 = "int32", e.bool = "bool"
            }(a || (a = {}));
            var o;
            !function (e) {
                e.float32 = "float32", e.int32 = "float32", e.bool = "float32"
            }(o || (o = {}));
            var s = {float32: o, int32: i, bool: a};
            n.upcastType = r, n.sumOutType = function (e) {
                return r(e, "int32")
            }
        }, {}],
        95: [function (e, t, n) {
            "use strict";

            function r(e, t, n) {
                a(e instanceof h.Tensor, "Argument '" + t + "' passed to '" + n + "' must be a Tensor, but got " + typeof e + ".")
            }

            function i(e) {
                for (var t = e.length, n = 0, r = 0; t > 0;) r = Math.random() * t | 0, n = e[--t], e[t] = e[r], e[r] = n
            }

            function a(e, t) {
                if (!e) throw new Error(t)
            }

            function o(e, t) {
                if (void 0 === t && (t = []), Array.isArray(e)) for (var n = 0; n < e.length; ++n) o(e[n], t); else t.push(e);
                return t
            }

            function s(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0
            }

            function u(e, t, n) {
                e[decodeURIComponent(t)] = decodeURIComponent(n || "")
            }

            function l(e) {
                return e instanceof Float32Array || e instanceof Int32Array || e instanceof Uint8Array
            }

            function c(e) {
                if (null == e) return [];
                if (e instanceof h.Tensor) return [e];
                var t = [], n = e;
                if (!p(n)) return [];
                for (var r in n) {
                    var i = o(n[r]).filter(function (e) {
                        return e instanceof h.Tensor
                    });
                    t.push.apply(t, i)
                }
                return t
            }

            function p(e) {
                return Array.isArray(e) || "object" == typeof e
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var h = e("./tensor");
            n.assertArgumentsAreTensors = function (e, t) {
                for (var n in e) !function (n) {
                    var i = e[n];
                    Array.isArray(i) ? i.forEach(function (e, i) {
                        r(e, n + "[" + i + "]", t)
                    }) : r(i, n, t)
                }(n)
            }, n.shuffle = i, n.clamp = function (e, t, n) {
                return Math.max(e, Math.min(t, n))
            }, n.randUniform = function (e, t) {
                return Math.random() * (t - e) + e
            }, n.distSquared = function (e, t) {
                for (var n = 0, r = 0; r < e.length; r++) {
                    var i = Number(e[r]) - Number(t[r]);
                    n += i * i
                }
                return n
            }, n.assert = a, n.assertShapesMatch = function (e, t, n) {
                void 0 === n && (n = ""), a(s(e, t), n + " Shapes " + e + " and " + t + " must match")
            }, n.assertTypesMatch = function (e, t) {
                a(e.dtype === t.dtype, " The dtypes of the first(" + e.dtype + ") and second(" + t.dtype + ") input must match")
            }, n.flatten = o, n.inferShape = function (e) {
                if (l(e)) return [e.length];
                if (!Array.isArray(e)) return [];
                for (var t = []; e instanceof Array;) t.push(e.length), e = e[0];
                return t
            }, n.sizeFromShape = function (e) {
                if (0 === e.length) return 1;
                for (var t = e[0], n = 1; n < e.length; n++) t *= e[n];
                return t
            }, n.isScalarShape = function (e) {
                return 0 === e.length
            }, n.arraysEqual = s, n.isInt = function (e) {
                return e % 1 == 0
            }, n.tanh = function (e) {
                if (null != Math.tanh) return Math.tanh(e);
                if (e === 1 / 0) return 1;
                if (e === -1 / 0) return -1;
                var t = Math.exp(2 * e);
                return (t - 1) / (t + 1)
            }, n.sizeToSquarishShape = function (e) {
                for (var t = Math.floor(Math.sqrt(e)); t > 1; --t) if (e % t == 0) return [t, e / t];
                return [1, e]
            }, n.createShuffledIndices = function (e) {
                for (var t = new Uint32Array(e), n = 0; n < e; ++n) t[n] = n;
                return i(t), t
            }, n.rightPad = function (e, t) {
                return t <= e.length ? e : e + " ".repeat(t - e.length)
            }, n.repeatedTry = function (e, t, n) {
                return void 0 === t && (t = function (e) {
                    return 0
                }), new Promise(function (r, i) {
                    var a = 0, o = function () {
                        if (e()) r(); else {
                            var s = t(++a);
                            null != n && a >= n ? i() : setTimeout(o, s)
                        }
                    };
                    setTimeout(o, 0)
                })
            }, n.getQueryParams = function (e) {
                var t = {};
                return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (e) {
                    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    return u(t, n[0], n[1]), n.join("=")
                }), t
            }, n.inferFromImplicitShape = function (e, t) {
                for (var n = 1, r = -1, i = 0; i < e.length; ++i) if (e[i] > 0) n *= e[i]; else if (-1 === e[i]) {
                    if (-1 !== r) throw Error("Shapes can only have 1 implicit size. Found - 1 at dim " + r + " and dim " + i);
                    r = i
                } else if (e[i] <= 0) throw Error("Shapes can not be <= 0. Found " + e[i] + " at dim " + i);
                if (-1 === r) {
                    if (t > 0 && t !== n) throw Error("Size(" + t + ") must match the product of shape " + e);
                    return e
                }
                if (t % n != 0) throw Error("The implicit shape can't be a fractional number. Got " + t + " / " + n);
                var a = e.slice();
                return a[r] = t / n, a
            }, n.squeezeShape = function (e, t) {
                for (var n = [], r = [], i = 0, a = 0; a < e.length; ++a) {
                    if (null != t) {
                        if (t[i] === a && e[a] > 1) throw new Error("Can't squeeze axis " + a + " since its dim '" + e[a] + "' is not 1");
                        (null == t[i] || t[i] > a) && 1 === e[a] && (n.push(e[a]), r.push(a)), t[i] <= a && i++
                    }
                    e[a] > 1 && (n.push(e[a]), r.push(a))
                }
                return {newShape: n, keptDims: r}
            }, n.getTypedArrayFromDType = function (e, t) {
                var n = null;
                if (null == e || "float32" === e) n = new Float32Array(t); else if ("int32" === e) n = new Int32Array(t); else {
                    if ("bool" !== e) throw new Error("Unknown data type " + e);
                    n = new Uint8Array(t)
                }
                return n
            }, n.isTensorInList = function (e, t) {
                for (var n = 0; n < t.length; n++) if (t[n].id === e.id) return !0;
                return !1
            }, n.checkForNaN = function (e, t, n) {
                if ("float32" === t) for (var r = 0; r < e.length; r++) if (isNaN(e[r])) throw Error("The result of the '" + n + "' has NaNs.")
            }, n.flattenNameArrayMap = function (e, t) {
                var n = [];
                if (e instanceof h.Tensor) n.push(e); else for (var r = e, i = 0; i < t.length; i++) n.push(r[t[i]]);
                return n
            }, n.unflattenToNameArrayMap = function (e, t) {
                if (e.length !== t.length) throw new Error("Cannot unflatten Tensor[], keys and arrays are not of same length.");
                for (var n = {}, r = 0; r < e.length; r++) n[e[r]] = t[r];
                return n
            }, n.hasEncodingLoss = function (e, t) {
                return !("float32" === t || "int32" === t && "float32" !== e || "bool" === t && "bool" === e)
            }, n.copyTypedArray = function (e, t) {
                if (null == t || "float32" === t) return new Float32Array(e);
                if ("int32" === t) return new Int32Array(e);
                if ("bool" === t) {
                    for (var n = new Uint8Array(e.length), r = 0; r < n.length; ++r) 0 !== Math.round(e[r]) && (n[r] = 1);
                    return n
                }
                throw new Error("Unknown data type " + t)
            }, n.isTypedArray = l, n.bytesPerElement = function (e) {
                if ("float32" === e || "int32" === e) return 4;
                if ("bool" === e) return 1;
                throw new Error("Unknown dtype " + e)
            }, n.isFunction = function (e) {
                return !!(e && e.constructor && e.call && e.apply)
            }, n.extractTensorsFromContainer = function (e) {
                return c(e)
            }, n.extractTensorsFromAny = c
        }, {"./tensor": 89}],
        96: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            n.version = "0.8.1"
        }, {}],
        97: [function (e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, i = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("./ops/ops"), o = e("./util"), s = {float32: 4, int32: 4};
            n.loadWeights = function (e, t, n, u) {
                return void 0 === t && (t = ""), r(this, void 0, void 0, function () {
                    var r, l, c, p, h, d, f, g, m, v, y;
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                if (r = e.map(function () {
                                    return !1
                                }), l = {}, c = null != n ? n.map(function () {
                                    return !1
                                }) : [], p = [], e.forEach(function (e, t) {
                                    var i = 0;
                                    e.weights.forEach(function (e) {
                                        var a = s[e.dtype] * o.sizeFromShape(e.shape), u = function () {
                                            r[t] = !0, null == l[t] && (l[t] = []), l[t].push({
                                                manifestEntry: e,
                                                groupOffset: i,
                                                sizeBytes: a
                                            })
                                        };
                                        null != n ? n.forEach(function (t, n) {
                                            t === e.name && (u(), c[n] = !0)
                                        }) : u(), p.push(e.name), i += a
                                    })
                                }), !c.every(function (e) {
                                    return e
                                })) throw h = n.filter(function (e, t) {
                                    return !c[t]
                                }), new Error("Could not find weights in manifest with names: " + h.join(", ") + ". \nManifest JSON has weights with names: " + p.join(", ") + ".");
                                return d = r.reduce(function (e, t, n) {
                                    return t && e.push(n), e
                                }, []), f = [], d.forEach(function (n) {
                                    e[n].paths.forEach(function (e) {
                                        var n = t + (t.endsWith("/") ? "" : "/") + e;
                                        f.push(fetch(n, u))
                                    })
                                }), [4, Promise.all(f)];
                            case 1:
                                return g = i.sent(), [4, Promise.all(g.map(function (e) {
                                    return e.arrayBuffer()
                                }))];
                            case 2:
                                return m = i.sent(), v = {}, y = 0, d.forEach(function (t) {
                                    for (var n = e[t].paths.length, r = 0, i = 0; i < n; i++) r += m[y + i].byteLength;
                                    for (var o = new ArrayBuffer(r), s = new Uint8Array(o), u = 0, c = 0; c < n; c++) {
                                        var p = new Uint8Array(m[y + c]);
                                        s.set(p, u), u += p.byteLength
                                    }
                                    l[t].forEach(function (e) {
                                        var t, n = o.slice(e.groupOffset, e.groupOffset + e.sizeBytes);
                                        if ("float32" === e.manifestEntry.dtype) t = new Float32Array(n); else {
                                            if ("int32" !== e.manifestEntry.dtype) throw new Error("Weight " + e.manifestEntry.name + " has unknown dtype " + e.manifestEntry.dtype + ".");
                                            t = new Int32Array(n)
                                        }
                                        var r = e.manifestEntry.name;
                                        if (null != v[r]) throw new Error("Duplicate weight with name " + r + ". Please make sure weights names are unique in the manifest JSON.");
                                        v[r] = a.tensor(t, e.manifestEntry.shape, e.manifestEntry.dtype)
                                    }), y += n
                                }), [2, v]
                        }
                    })
                })
            }
        }, {"./ops/ops": 66, "./util": 95}],
        98: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return void 0 === t && (t = 1), g.elu(e, t)
            }

            function i(e) {
                return g.selu(e)
            }

            function a(e) {
                return g.relu(e)
            }

            function o(e) {
                return g.minimum(f.scalar(6), g.relu(e))
            }

            function s(e) {
                return e
            }

            function u(e) {
                return g.sigmoid(e)
            }

            function l(e) {
                return g.hardSigmoid(e)
            }

            function c(e) {
                return g.softplus(e)
            }

            function p(e) {
                return g.softsign(e)
            }

            function h(e) {
                return g.tanh(e)
            }

            function d(e, t) {
                return void 0 === t && (t = -1), g.softmax(e, t)
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var f = e("@tensorflow/tfjs-core"), g = e("./backend/tfjs_backend"), m = e("./errors");
            n.getActivation = function (e) {
                if (null == e) return s;
                if ("elu" === e.toLowerCase()) return r;
                if ("hardsigmoid" === e.toLowerCase()) return l;
                if ("linear" === e.toLowerCase()) return s;
                if ("relu" === e.toLowerCase()) return a;
                if ("relu6" === e.toLowerCase()) return o;
                if ("selu" === e.toLowerCase()) return i;
                if ("sigmoid" === e.toLowerCase()) return u;
                if ("softmax" === e.toLowerCase()) return d;
                if ("softplus" === e.toLowerCase()) return c;
                if ("softsign" === e.toLowerCase()) return p;
                if ("tanh" === e.toLowerCase()) return h;
                throw new m.ValueError("Unsupported activation function " + e)
            }, n.elu = r, n.selu = i, n.relu = a, n.relu6 = o, n.linear = s, n.sigmoid = u, n.hardSigmoid = l, n.softplus = c, n.softsign = p, n.tanh = h, n.softmax = d, n.serializeActivation = function (e) {
                return e.name
            }
        }, {"./backend/tfjs_backend": 100, "./errors": 107, "@tensorflow/tfjs-core": 8}],
        99: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = 1e-7;
            n.epsilon = function () {
                return r
            }, n.setEpsilon = function (e) {
                r = e
            }, n.imageDataFormat = function () {
                return "channelsLast"
            }
        }, {}],
        100: [function (e, t, n) {
            "use strict";

            function r() {
                for (var e in re) for (var t in re[e]) re[e][t].dispose(), delete re[e][t]
            }

            function i(e, t) {
                return void 0 === t && (t = ne), null == re[t][e] && (re[t][e] = K.scalar(e, t), H.keep(re[t][e])), re[t][e]
            }

            function a(e) {
                return e.shape
            }

            function o(e) {
                return e.shape.length
            }

            function s(e, t) {
                if (null == t) return t;
                var n = a(e);
                return Array.isArray(t) ? t.map(function (e) {
                    return Z.pyNormalizeArrayIndex(n, e)
                }) : Z.pyNormalizeArrayIndex(n, t)
            }

            function u(e, t) {
                return e.reshape(t)
            }

            function l(e, t) {
                return H.transpose(e, t)
            }

            function c(e, t) {
                return H.reverse(e, t)
            }

            function p(e, t) {
                void 0 === t && (t = -1);
                var n = a(e).slice();
                return t < 0 && (t = n.length + t + 1), n.splice(t, 0, 1), u(e, n)
            }

            function h(e) {
                return u(e, [J.arrayProd(e.shape)])
            }

            function d(e, t, n) {
                switch (e.rank) {
                    case 1:
                        return H.slice1d(e, t, n);
                    case 2:
                        return H.slice2d(e, [t, 0], [n, e.shape[1]]);
                    case 3:
                        return H.slice3d(e, [t, 0, 0], [n, e.shape[1], e.shape[2]]);
                    case 4:
                        return H.slice4d(e, [t, 0, 0, 0], [n, e.shape[1], e.shape[2], e.shape[3]]);
                    default:
                        throw new Y.ValueError("sliceAlongFirstAxis() received an unsupported tensor rank: " + e.rank)
                }
            }

            function f(e, t, n, r, i) {
                return void 0 === i && (i = .001), K.tidy(function () {
                    var a = H.moments(e, r), o = a.mean, s = a.variance;
                    return [F(e, o, s, n, t, i), o, s]
                })
            }

            function g(e, t, n, r, i) {
                return void 0 === i && (i = .001), K.tidy(function () {
                    for (var a = H.moments(e, r), s = a.mean, l = a.variance, c = [], p = 0, h = J.range(0, o(e)); p < h.length; p++) {
                        var d = h[p];
                        -1 !== r.indexOf(d) ? c.push(1) : c.push(e.shape[d])
                    }
                    var f = u(s, c), g = u(l, c), m = null == t ? null : u(t, c), v = null == n ? null : u(n, c);
                    return [F(e, f, g, v, m, i), s, l]
                })
            }

            function m(e, t) {
                switch (e.rank) {
                    case 1:
                        return H.concat1d([e, t]);
                    case 2:
                        return H.concat2d([e, t], 0);
                    case 3:
                        return H.concat3d([e, t], 0);
                    case 4:
                        return H.concat4d([e, t], 0);
                    default:
                        throw new Y.ValueError("concatAlongFirstAxis() received an unsupported tensor rank: " + e.rank)
                }
            }

            function v(e, t) {
                if (Array.isArray(t) || (t = [t]), o(e) !== t.length) throw new Y.ValueError("The length of input n (" + t.length + ") does not match the number of dimensions in input x (" + o(e) + ")");
                return H.tile(e, t)
            }

            function y(e, t) {
                return H.zeros(e)
            }

            function b(e, t, n) {
                for (var r = [], i = 0; i < e; ++i) for (var a = 0; a < e; ++a) r.push(i === a ? 1 : 0);
                return K.tensor2d(r, [e, e])
            }

            function w(e) {
                return H.neg(e)
            }

            function x(e, t) {
                return H.sub(e, t)
            }

            function A(e, t) {
                return H.mul(e, t)
            }

            function E(e, t) {
                return H.div(e, t)
            }

            function _(e, t) {
                return H.mul(e, t)
            }

            function T(e, t) {
                return H.add(e, t)
            }

            function S(e, t, n, r, i) {
                return H.randomUniform(e, t, n)
            }

            function C(e, t, n, r, i) {
                return void 0 === t && (t = 0), void 0 === n && (n = 1), H.truncatedNormal(e, t, n)
            }

            function O(e, t, n, r, i) {
                if (void 0 === t && (t = 0), void 0 === n && (n = 1), r === Q.DType.bool) throw new Y.NotImplementedError("randomNormal does not support dType bool.");
                var a = r === Q.DType.float32 ? "float32" : "int32";
                return H.randomNormal(e, t, n, a, i)
            }

            function k(e) {
                var t = K.zerosLike(e), n = K.onesLike(e);
                return K.where(D(e, t), t, K.where(P(e, K.zerosLike(e)), n, _(i(-1), n)))
            }

            function N(e, t, n) {
                return H.sum(e, t, n)
            }

            function R(e) {
                return H.mulStrict(e, e)
            }

            function I(e) {
                return H.sqrt(e)
            }

            function z(e) {
                return H.log(e)
            }

            function M(e, t, n) {
                return H.clipByValue(e, t, n)
            }

            function D(e, t) {
                return H.equal(e, t)
            }

            function P(e, t) {
                return H.greater(e, t)
            }

            function L(e, t) {
                return H.maximum(e, t)
            }

            function F(e, t, n, r, i, a) {
                void 0 === a && (a = .001);
                var s;
                if (2 === o(e)) s = H.batchNormalization2d(e, t, n, a, i, r); else if (3 === o(e)) s = H.batchNormalization3d(e, t, n, a, i, r); else {
                    if (4 !== o(e)) throw new Y.NotImplementedError("batchNormalization is not implememnted for array of rank " + o(e) + " yet");
                    s = H.batchNormalization4d(e, t, n, a, i, r)
                }
                return s
            }

            function V(e, t, n) {
                if (null == n && (n = ee.imageDataFormat()), X.checkDataFormat(n), 1 !== o(t) && o(t) !== o(e)) throw new Y.ValueError("Unexpected bias dimensions: " + o(t) + "; expected it to be 1 or " + o(e));
                var r, i = t.shape;
                if (5 === o(e)) "channelsFirst" === n ? r = 1 === i.length ? e.add(t.reshape([1, i[0], 1, 1, 1])) : e.add(t.reshape([1, i[3], i[0], i[1], i[2]])) : "channelsLast" === n && (r = 1 === i.length ? e.add(t.reshape([1, 1, 1, 1, i[0]])) : e.add(t.reshape([1].concat(i)))); else if (4 === o(e)) "channelsFirst" === n ? r = 1 === i.length ? e.add(t.reshape([1, i[0], 1, 1])) : e.add(t.reshape([1, i[2], i[0], i[1]])) : "channelsLast" === n && (r = 1 === i.length ? e.add(t.reshape([1, 1, 1, i[0]])) : e.add(t.reshape([1].concat(i)))); else if (3 === o(e)) "channelsFirst" === n ? r = 1 === i.length ? e.add(t.reshape([1, i[0], 1])) : e.add(t.reshape([1, i[1], i[0]])) : "channelsLast" === n && (r = 1 === i.length ? e.add(t.reshape([1, 1, i[0]])) : e.add(t.reshape([1].concat(i)))); else {
                    if (!(o(e) < 3)) throw new Y.ValueError("Unsupported input rank by biasAdd: " + o(e));
                    r = e.add(t)
                }
                return r
            }

            function B(e, t) {
                return X.checkDataFormat(t), "channelsFirst" === t ? H.transpose(e, [0, 2, 3, 1]) : e
            }

            function U(e, t, n, r, i, a, o) {
                if (void 0 === r && (r = 1), void 0 === i && (i = "valid"), void 0 === o && (o = 1), null == a && (a = ee.imageDataFormat()), X.checkDataFormat(a), 3 !== e.shape.length) throw new Y.ValueError("The input of a conv1dWithBias operation should be 3, but is " + e.shape.length + " instead.");
                if (3 !== t.shape.length) throw new Y.ValueError("The kernel for a conv1dWithBias operation should be 3, but is " + t.shape.length + " instead");
                if (null != n && 1 !== n.shape.length) throw new Y.ValueError("The bias for a conv1dWithBias operation should be 1, but is " + t.shape.length + " instead");
                if ("channelsFirst" === a && (e = l(e, [0, 2, 1])), "casual" === i) throw new Y.NotImplementedError("The support for CASUAL padding mode in conv1dWithBias is not implemented yet.");
                var s = H.conv1d(e, t, r, "same" === i ? "same" : "valid", "NWC", o);
                return null != n && (s = V(s, n)), s
            }

            function j(e, t, n, r, i, a, s) {
                if (void 0 === r && (r = [1, 1]), void 0 === i && (i = "valid"), null == a && (a = ee.imageDataFormat()), X.checkDataFormat(a), 3 !== o(e) && 4 !== o(e)) throw new Y.ValueError("conv2dWithBias expects input to be of rank 3 or 4, but received " + o(e) + ".");
                if (3 !== o(t) && 4 !== o(t)) throw new Y.ValueError("conv2dWithBias expects kernel to be of rank 3 or 4, but received " + o(e) + ".");
                var u = B(e, a);
                if ("casual" === i) throw new Y.NotImplementedError("The support for CASUAL padding mode in conv1dWithBias is not implemented yet.");
                return u = H.conv2d(u, t, r, "same" === i ? "same" : "valid", "NHWC", s), null != n && (u = V(u, n)), "channelsFirst" === a && (u = H.transpose(u, [0, 3, 1, 2])), u
            }

            function G(e, t) {
                return void 0 === t && (t = -1), H.softmax(e, t)
            }

            function W(e, t, r) {
                return void 0 === r && (r = !1), t = r ? G(t) : E(t, N(t, a(t).length - 1, !0)), t = M(t, n.epsilon(), 1 - n.epsilon()), H.neg(H.sum(H.mul(e.toFloat(), H.log(t)), a(t).length - 1))
            }

            function q(e, t) {
                var n = H.maximum(t, H.zerosLike(t)), r = H.mul(t, e), a = H.log(H.add(i(1), H.exp(H.neg(H.abs(t)))));
                return H.add(H.sub(n, r), a)
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var H = e("@tensorflow/tfjs-core"), K = e("@tensorflow/tfjs-core"), X = e("../common"), Y = e("../errors"),
                Q = e("../types"), Z = e("../utils/generic_utils"), J = e("../utils/math_utils"), $ = e("./common"),
                ee = e("./common"), te = "webgl", ne = Q.DType.float32;
            n.disposeScalarCache = r, n.setBackend = function (e) {
                H.setBackend(e), te = e, r()
            }, n.getBackend = function () {
                return te
            }, n.keep = function (e) {
                return H.keep(e)
            };
            var re = {float32: {}, int32: {}};
            n.getScalar = i, n.epsilon = $.epsilon, n.isBackendSymbolic = function () {
                return !1
            }, n.shape = a, n.intShape = function (e) {
                return e.shape
            }, n.ndim = o, n.dtype = function (e) {
                return e instanceof K.Tensor ? ne : e.dtype
            }, n.normalizeAxis = s, n.countParams = function (e) {
                var t = e.shape;
                return t.length > 0 ? t.reduce(function (e, t) {
                    return e * t
                }) : 1
            }, n.cast = function (e, t) {
                return e.asType(t)
            }, n.reshape = u, n.transpose = l, n.permuteDimensions = l, n.reverse = c, n.expandDims = p, n.squeeze = function (e, t) {
                return H.squeeze(e, [t])
            }, n.temporalPadding = function (e, t) {
                if (3 !== o(e)) throw new Y.ValueError("temporalPadding expects input tensor to be 3-D, but received a " + o(e) + "-D tensor.");
                if (null == t && (t = [1, 1]), 2 !== t.length) throw new Y.ValueError("temporalPadding expects input padding pattern to be a length-2 array, but received a length-" + t.length + " array.");
                var n = [[0, 0], t, [0, 0]];
                return H.pad(e, n)
            }, n.spatial2dPadding = function (e, t, n) {
                if (4 !== o(e)) throw new Y.ValueError("temporalPadding expects input tensor to be 4-D, but received a " + o(e) + "-D tensor.");
                if (null == t && (t = [[1, 1], [1, 1]]), 2 !== t.length || 2 !== t[0].length || 2 !== t[1].length) throw new Y.ValueError("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");
                if (null == n && (n = ee.imageDataFormat()), "channelsLast" !== n && "channelsFirst" !== n) throw new Y.ValueError("Unknown data format: " + n + ". Supported data formats are 'channelsLast' and 'channelsFirst.");
                var r;
                return r = "channelsFirst" === n ? [[0, 0], [0, 0], t[0], t[1]] : [[0, 0], t[0], t[1], [0, 0]], H.pad(e, r)
            }, n.repeat = function (e, t) {
                if (2 !== e.shape.length) throw new Y.ValueError("repeat() expects a rank-2 tensor, but received a rank-" + e.shape.length + " tensor.");
                return v(p(e, 1), [1, t, 1])
            }, n.flatten = h, n.batchFlatten = function (e) {
                if (o(e) <= 1) throw new Y.ValueError("batchFlatten requires a minimum rank of 2. Got rank: " + o(e) + ".");
                return u(e, [e.shape[0], J.arrayProd(e.shape, 1)])
            }, n.sliceAlongFirstAxis = d, n.sliceAlongLastAxis = function (e, t, n) {
                switch (e.rank) {
                    case 1:
                        return H.slice1d(e, t, n);
                    case 2:
                        return H.slice2d(e, [0, t], [e.shape[0], n]);
                    case 3:
                        return H.slice3d(e, [0, 0, t], [e.shape[0], e.shape[1], n]);
                    case 4:
                        return H.slice4d(e, [0, 0, 0, t], [e.shape[0], e.shape[1], e.shape[2], n]);
                    default:
                        throw new Y.ValueError("sliceAlongLastAxis() received an unsupported tensor rank: " + e.rank)
                }
            }, n.normalizeBatchInTraining = function (e, t, n, r, i) {
                return void 0 === i && (i = .001), K.util.arraysEqual(r.slice().sort(), J.range(0, o(e) - 1)) ? f(e, t, n, r, i) : g(e, t, n, r, i)
            }, n.concatenate = function (e, t) {
                void 0 === t && (t = -1);
                var n;
                return t < 0 && (t = 0 !== (n = o(e[0])) ? n : 0), t === o(e[0]) && (t = -1), H.concat(e, t)
            }, n.concatAlongFirstAxis = m, n.tile = v, n.variable = function (e, t, n, r) {
                return new Q.LayerVariable(e, t, n, !0, r)
            }, n.batchGetValue = function (e) {
                return e.map(function (e) {
                    return e.read()
                })
            }, n.batchSetValue = function (e) {
                e.map(function (e) {
                    e[0].write(e[1])
                })
            }, n.zeros = y, n.zerosVariable = function (e, t, n) {
                return new Q.LayerVariable(y(e), t, n)
            }, n.zerosLike = function (e, t, n) {
                return new Q.LayerVariable(H.zerosLike(e), t, n)
            }, n.ones = function (e, t) {
                return H.ones(e)
            }, n.onesVariable = function (e, t, n) {
                var r = H.ones(e);
                return new Q.LayerVariable(r, t, n)
            }, n.onesLike = function (e, t, n) {
                var r = H.onesLike(e);
                return new Q.LayerVariable(r, t, n)
            }, n.identity = function (e) {
                return e.clone()
            }, n.eye = b, n.eyeVariable = function (e, t, n) {
                return new Q.LayerVariable(b(e, t), t, n)
            }, n.neg = w, n.add = function (e, t) {
                return H.add(e, t)
            }, n.subtract = x, n.multiply = A, n.divide = E, n.scalarTimesArray = _, n.scalarPlusArray = T, n.randomUniform = S, n.randomUniformVariable = function (e, t, n, r, i, a) {
                return void 0 === a && (a = "randomUniform"), new Q.LayerVariable(S(e, t, n, r, i), r, a)
            }, n.truncatedNormal = C, n.truncatedNormalVariable = function (e, t, n, r, i, a) {
                return void 0 === t && (t = 0), void 0 === n && (n = 1), void 0 === a && (a = "truncatedNormal"), new Q.LayerVariable(C(e, t, n, r, i), r, a)
            }, n.randomNormal = O, n.randomNormalVariable = function (e, t, n, r, i, a) {
                return void 0 === t && (t = 0), void 0 === n && (n = 1), void 0 === a && (a = "randomNormal"), new Q.LayerVariable(O(e, t, n, r, i), r, a)
            }, n.update = function (e, t) {
                return e.write(t)
            }, n.updateAdd = function (e, t) {
                return e.write(H.add(e.read(), t))
            }, n.updateSub = function (e, t) {
                return e.write(H.sub(e.read(), t))
            }, n.dot = function (e, t) {
                if (2 !== o(t)) throw new Y.NotImplementedError("dot support for y other than rank 2 is not yet implemented: y shape = " + a);
                if (2 === o(e)) return H.matMul(e, t);
                if (3 === o(e)) {
                    var n = e.shape[0], r = e.shape[1], i = e.shape[2];
                    return e = e.reshape([n * r, i]), H.matMul(e, t).reshape([n, r, t.shape[1]])
                }
                throw new Y.NotImplementedError("dot support for x of rank " + o(e) + " is not yet implemented: x shape = " + a)
            }, n.sign = k, n.qr = function (e) {
                if (2 !== e.shape.length) throw new Y.ValueError("qr() requires a 2D Tensor, but got a " + e.shape.length + "D Tensor.");
                if (e.shape[0] < e.shape[1]) throw new Y.ValueError("qr() requires x.shape[0] >= x.shape[1], but got shape: [" + e.shape + "]");
                for (var t = e.shape[0], n = e.shape[1], r = b(t), i = e, a = K.tensor2d([[1]], [1, 1]), o = 0; o < n; ++o) {
                    var s = i.slice([o, o], [t - o, 1]), u = H.norm(s), l = i.slice([o, o], [1, 1]), c = H.neg(k(l)),
                        p = l.sub(A(c, u)), h = E(s, p), d = void 0;
                    d = 1 === h.shape[0] ? a : a.concat(h.slice([1, 0], [h.shape[0] - 1, h.shape[1]]), 0);
                    var f = H.neg(E(H.matMul(c, p), u)), g = i.slice([o, 0], [t - o, n]), m = f.mul(d);
                    i = 0 === o ? g.sub(m.matMul(d.transpose().matMul(g))) : i.slice([0, 0], [o, n]).concat(g.sub(m.matMul(d.transpose().matMul(g))), 0);
                    var v = r.slice([0, o], [t, r.shape[1] - o]);
                    r = 0 === o ? v.sub(v.matMul(d).matMul(m.transpose())) : r.slice([0, 0], [t, o]).concat(v.sub(v.matMul(d).matMul(m.transpose())), 1)
                }
                return [r, i]
            }, n.oneHot = function (e, t) {
                if (1 !== o(e)) throw new Error("Only 1D one-hot tensors are supported in the deeplearn backend, at present.");
                return e = e.toInt(), H.oneHot(e, t).toFloat()
            }, n.mean = function (e, t, n) {
                return t = s(e, t), H.mean(e, t, n)
            }, n.argmax = function (e, t) {
                return void 0 === t && (t = -1), H.argMax(e, t)
            }, n.gather = function (e, t, n) {
                return t = Array.isArray(t) ? K.tensor1d(t, "int32") : t.toInt(), H.gather(e, t, n)
            }, n.max = function (e, t, n) {
                return H.max(e, t, n)
            }, n.min = function (e, t, n) {
                return H.min(e, t, n)
            }, n.minimum = function (e, t) {
                return H.minimum(e, t)
            }, n.sum = N, n.abs = function (e) {
                return H.abs(e)
            }, n.square = R, n.sqrt = I, n.exp = function (e) {
                return H.exp(e)
            }, n.log = z, n.pow = function (e, t) {
                if ("number" == typeof t && (t = K.scalar(Math.round(t), "int32")), "int32" !== t.dtype) throw new Y.NotImplementedError("Non-int32 dtype (" + t.dtype + ") is not supported by pow() yet");
                return H.pow(e, t)
            }, n.clip = M, n.equal = D, n.greater = P, n.greaterEqual = function (e, t) {
                return H.greaterEqual(e, t)
            }, n.maximum = L, n.sin = function (e) {
                return H.sin(e.value())
            }, n.cos = function (e) {
                return H.cos(e.value())
            }, n.batchNormalization = F, n.biasAdd = V, n.elu = function (e, t) {
                if (void 0 === t && (t = 1), 1 !== t) throw new Y.NotImplementedError("Support for alpha values other than 1 (" + t + ") is not implemented yet.");
                return H.elu(e)
            }, n.selu = function (e) {
                return H.selu(e)
            }, n.relu = function (e) {
                return H.relu(e)
            }, n.softplus = function (e) {
                return H.log(H.add(i(1), H.exp(e)))
            }, n.softsign = function (e) {
                return H.div(e, H.add(i(1), H.abs(e)))
            }, n.tanh = function (e) {
                return H.tanh(e)
            }, n.dropout = function (e, t, n, r) {
                if (null != n && !K.util.arraysEqual(e.shape, n)) throw new Y.NotImplementedError("Non-default noise shape is not implemented yet: " + JSON.stringify(n));
                if (null != r) throw new Y.NotImplementedError("seed is not implemented for dropout yet.");
                var a = H.step(H.add(w(t), S(e.shape, 0, 1, Q.DType.float32)));
                return a = H.mul(E(i(1), x(i(1), t)), a), H.mul(e, a)
            }, n.l2Normalize = function (e, t) {
                return E(e, I(L(N(R(e), t, !0), _(K.scalar(n.epsilon()), H.onesLike(e)))))
            }, n.conv1dWithBias = U, n.conv1d = function (e, t, n, r, i, a) {
                return void 0 === n && (n = 1), void 0 === r && (r = "valid"), void 0 === a && (a = 1), X.checkDataFormat(i), U(e, t, null, n, r, i, a)
            }, n.conv2d = function (e, t, n, r, i, a) {
                return void 0 === n && (n = [1, 1]), void 0 === r && (r = "valid"), X.checkDataFormat(i), j(e, t, null, n, r, i, a)
            }, n.conv2dWithBias = j, n.depthwiseConv2d = function (e, t, n, r, i, a) {
                void 0 === n && (n = [1, 1]), void 0 === r && (r = "valid"), null == i && (i = ee.imageDataFormat()), X.checkDataFormat(i);
                var s = B(e, i);
                if (4 !== o(e)) throw new Y.ValueError("Input for depthwiseConv2d is required to be 4-D, but is instead " + o(e) + "-D");
                if (4 !== o(t)) throw new Y.ValueError("depthwiseKernel is required to be 4-D, but is instead " + o(t) + "-D");
                return s = H.depthwiseConv2d(s, t, n, "same" === r ? "same" : "valid", "NHWC", a), "channelsFirst" === i && (s = H.transpose(s, [0, 3, 1, 2])), s
            }, n.pool2d = function (e, t, n, r, i, a) {
                X.checkDataFormat(i), X.checkPoolMode(a), X.checkPaddingMode(r), null == n && (n = [1, 1]), null == r && (r = "valid"), null == i && (i = ee.imageDataFormat()), null == a && (a = "max"), e = B(e, i);
                var o, s = "same" === r ? "same" : "valid";
                return o = "max" === a ? H.maxPool(e, t, n, s) : H.avgPool(e, t, n, s), "channelsFirst" === i && (o = H.transpose(o, [0, 3, 1, 2])), o
            }, n.nameScope = function (e, t) {
                return X.nameScope(e, t)
            }, n.floatx = function () {
                return Q.DType.float32
            };
            var ie = {};
            n.getUid = function (e) {
                return void 0 === e && (e = ""), e in ie || (ie[e] = 0), ie[e] += 1, e + ie[e].toString()
            }, n.softmax = G, n.categoricalCrossentropy = W, n.sparseCategoricalCrossentropy = function (e, t, n) {
                void 0 === n && (n = !1);
                var r = H.floor(h(e)).toInt(), i = a(t);
                return W(u(H.oneHot(r, i[i.length - 1]), i), t, n)
            }, n.binaryCrossentropy = function (e, t, r) {
                void 0 === r && (r = !1);
                var i;
                return i = r ? t : z(E(i = M(t, n.epsilon(), 1 - n.epsilon()), x(H.onesLike(i), i))), q(e, i)
            }, n.sigmoidCrossEntropyWithLogits = q, n.sigmoid = function (e) {
                return H.sigmoid(e)
            }, n.hardSigmoid = function (e) {
                return M(T(K.scalar(.5), _(K.scalar(.2), e)), 0, 1)
            }, n.inTrainPhase = function (e, t, n) {
                return void 0 === n && (n = !1), n ? e() : t()
            }, n.rnn = function (e, t, n, r, i, a, o, s) {
                void 0 === r && (r = !1), void 0 === o && (o = !1);
                var p = t.shape.length;
                if (p < 3) throw new Y.ValueError("Input should be at least 3D, but is " + p + "D.");
                if (t = l(t, [1, 0].concat(J.range(2, p))), null != i) throw new Y.NotImplementedError("The rnn() function of the deeplearn.js backend does not support masking yet.");
                if (null != a) throw new Y.NotImplementedError("The rnn() functoin of the deeplearn.js backend does not support constants yet.");
                o && console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."), r && (t = c(t, 0));
                for (var h, f, g = n, v = t.shape[0], y = 0; y < v; ++y) {
                    var b = d(t, y, 1), w = e(b = u(b, b.shape.slice(1)), g);
                    f = w[0], h = 0 === y ? f.reshape([1].concat(f.shape)) : m(h, f.reshape([1].concat(f.shape))), g = w[1]
                }
                return [f, l(h, [1, 0].concat(J.range(2, h.shape.length))), g]
            }, n.gradients = function (e, t) {
                var n = t.map(function (e) {
                    return e.read()
                }), r = K.variableGrads(e, n);
                return t.map(function (e) {
                    return r.grads[e.name]
                })
            }
        }, {
            "../common": 102,
            "../errors": 107,
            "../types": 128,
            "../utils/generic_utils": 130,
            "../utils/math_utils": 131,
            "./common": 99,
            "@tensorflow/tfjs-core": 8
        }],
        101: [function (e, t, n) {
            "use strict";

            function r(e) {
                return a(this, void 0, void 0, function () {
                    var t, n, r, i, a, s, u;
                    return o(this, function (o) {
                        switch (o.label) {
                            case 0:
                                if (null == e) return [2];
                                t = [], n = [];
                                for (r in e) "number" != typeof (i = e[r]) && (a = i, t.push(a.data()), n.push(r));
                                return [4, Promise.all(t)];
                            case 1:
                                for (s = o.sent(), u = 0; u < s.length; ++u) e[n[u]] = s[u][0];
                                return [2]
                        }
                    })
                })
            }

            var i = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), a = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, o = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var s = e("@tensorflow/tfjs-core"), u = e("./backend/tfjs_backend"), l = e("./utils/generic_utils"),
                c = function () {
                    function e() {
                        this.validationData = null, this.model = null
                    }

                    return e.prototype.setParams = function (e) {
                        this.params = e
                    }, e.prototype.setModel = function (e) {
                        this.model = e
                    }, e.prototype.onEpochBegin = function (e, t) {
                        return a(this, void 0, void 0, function () {
                            return o(this, function (e) {
                                return [2]
                            })
                        })
                    }, e.prototype.onEpochEnd = function (e, t) {
                        return a(this, void 0, void 0, function () {
                            return o(this, function (e) {
                                return [2]
                            })
                        })
                    }, e.prototype.onBatchBegin = function (e, t) {
                        return a(this, void 0, void 0, function () {
                            return o(this, function (e) {
                                return [2]
                            })
                        })
                    }, e.prototype.onBatchEnd = function (e, t) {
                        return a(this, void 0, void 0, function () {
                            return o(this, function (e) {
                                return [2]
                            })
                        })
                    }, e.prototype.onTrainBegin = function (e) {
                        return a(this, void 0, void 0, function () {
                            return o(this, function (e) {
                                return [2]
                            })
                        })
                    }, e.prototype.onTrainEnd = function (e) {
                        return a(this, void 0, void 0, function () {
                            return o(this, function (e) {
                                return [2]
                            })
                        })
                    }, e
                }();
            n.Callback = c;
            var p = function () {
                function e(e, t) {
                    void 0 === t && (t = 10), null == e && (e = []), this.callbacks = e, this.queueLength = t
                }

                return e.prototype.append = function (e) {
                    this.callbacks.push(e)
                }, e.prototype.setParams = function (e) {
                    for (var t = 0, n = this.callbacks; t < n.length; t++) n[t].setParams(e)
                }, e.prototype.setModel = function (e) {
                    for (var t = 0, n = this.callbacks; t < n.length; t++) n[t].setModel(e)
                }, e.prototype.onEpochBegin = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        var n, r, i;
                        return o(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    null == t && (t = {}), n = 0, r = this.callbacks, a.label = 1;
                                case 1:
                                    return n < r.length ? (i = r[n], [4, i.onEpochBegin(e, t)]) : [3, 4];
                                case 2:
                                    a.sent(), a.label = 3;
                                case 3:
                                    return n++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.onEpochEnd = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        var n, r, i;
                        return o(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    null == t && (t = {}), n = 0, r = this.callbacks, a.label = 1;
                                case 1:
                                    return n < r.length ? (i = r[n], [4, i.onEpochEnd(e, t)]) : [3, 4];
                                case 2:
                                    a.sent(), a.label = 3;
                                case 3:
                                    return n++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.onBatchBegin = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        var n, r, i;
                        return o(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    null == t && (t = {}), n = 0, r = this.callbacks, a.label = 1;
                                case 1:
                                    return n < r.length ? (i = r[n], [4, i.onBatchBegin(e, t)]) : [3, 4];
                                case 2:
                                    a.sent(), a.label = 3;
                                case 3:
                                    return n++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.onBatchEnd = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        var n, r, i;
                        return o(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    null == t && (t = {}), n = 0, r = this.callbacks, a.label = 1;
                                case 1:
                                    return n < r.length ? (i = r[n], [4, i.onBatchEnd(e, t)]) : [3, 4];
                                case 2:
                                    a.sent(), a.label = 3;
                                case 3:
                                    return n++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.onTrainBegin = function (e) {
                    return a(this, void 0, void 0, function () {
                        var t, n, r;
                        return o(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    null == e && (e = {}), t = 0, n = this.callbacks, i.label = 1;
                                case 1:
                                    return t < n.length ? (r = n[t], [4, r.onTrainBegin(e)]) : [3, 4];
                                case 2:
                                    i.sent(), i.label = 3;
                                case 3:
                                    return t++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.onTrainEnd = function (e) {
                    return a(this, void 0, void 0, function () {
                        var t, n, r;
                        return o(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    null == e && (e = {}), t = 0, n = this.callbacks, i.label = 1;
                                case 1:
                                    return t < n.length ? (r = n[t], [4, r.onTrainEnd(e)]) : [3, 4];
                                case 2:
                                    i.sent(), i.label = 3;
                                case 3:
                                    return t++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e
            }();
            n.CallbackList = p;
            var h = function (e) {
                function t() {
                    return e.call(this) || this
                }

                return i(t, e), t.prototype.onEpochBegin = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        return o(this, function (e) {
                            return this.seen = 0, this.totals = {}, [2]
                        })
                    })
                }, t.prototype.onBatchEnd = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        var e, n, r, i, a = this;
                        return o(this, function (o) {
                            null == t && (t = {}), e = null == t.size ? 0 : t.size, this.seen += e, n = function (n) {
                                var i = t[n];
                                "number" == typeof i ? (r.totals.hasOwnProperty(n) || (r.totals[n] = 0), r.totals[n] = r.totals[n] + i * e) : (r.totals.hasOwnProperty(n) || (r.totals[n] = u.getScalar(0)), s.tidy(function () {
                                    a.totals[n] = u.scalarPlusArray(a.totals[n], u.multiply(i, u.getScalar(e))), u.keep(a.totals[n])
                                }))
                            }, r = this;
                            for (i in t) n(i);
                            return [2]
                        })
                    })
                }, t.prototype.onEpochEnd = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        var e, n, r, i, a, l = this;
                        return o(this, function (o) {
                            if (null != t) for (e = function (e) {
                                if (null == n.totals[e]) return "continue";
                                "number" == typeof n.totals[e] ? t[e] = n.totals[e] / n.seen : s.tidy(function () {
                                    t[e] = u.scalarTimesArray(u.divide(u.getScalar(1), u.getScalar(l.seen)), l.totals[e]), u.keep(t[e])
                                })
                            }, n = this, r = 0, i = this.params.metrics; r < i.length; r++) a = i[r], e(a);
                            return [2]
                        })
                    })
                }, t
            }(c);
            n.BaseLogger = h, n.resolveScalarsInLogs = r, n.disposeTensorsInLogs = function (e) {
                if (null != e) for (var t in e) {
                    var n = e[t];
                    "number" != typeof n && n.dispose()
                }
            };
            var d = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return i(t, e), t.prototype.onTrainBegin = function (e) {
                    return a(this, void 0, void 0, function () {
                        return o(this, function (e) {
                            return this.epoch = [], this.history = {}, [2]
                        })
                    })
                }, t.prototype.onEpochEnd = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        var n;
                        return o(this, function (r) {
                            null == t && (t = {}), this.epoch.push(e);
                            for (n in t) null == this.history[n] && (this.history[n] = []), this.history[n].push(t[n]);
                            return [2]
                        })
                    })
                }, t.prototype.syncData = function () {
                    return a(this, void 0, void 0, function () {
                        var e, t, n, r, i, a, s, u, l;
                        return o(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    e = [], t = [], n = [];
                                    for (r in this.history) for (i = this.history[r], a = 0; a < i.length; ++a) "number" != typeof i[a] && (s = i[a], e.push(s.data()), t.push(r), n.push(a));
                                    return [4, Promise.all(e)];
                                case 1:
                                    for (u = o.sent(), l = 0; l < u.length; ++l) this.history[t[l]][n[l]].dispose(), this.history[t[l]][n[l]] = u[l][0];
                                    return [2]
                            }
                        })
                    })
                }, t
            }(c);
            n.History = d;
            var f = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.trainBegin = t.onTrainBegin, n.trainEnd = t.onTrainEnd, n.epochBegin = t.onEpochBegin, n.epochEnd = t.onEpochEnd, n.batchBegin = t.onBatchBegin, n.batchEnd = t.onBatchEnd, n
                }

                return i(t, e), t.prototype.onEpochBegin = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        return o(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return null == this.epochBegin ? [3, 3] : [4, r(t)];
                                case 1:
                                    return n.sent(), [4, this.epochBegin(e, t)];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.onEpochEnd = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        return o(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return null == this.epochEnd ? [3, 3] : [4, r(t)];
                                case 1:
                                    return n.sent(), [4, this.epochEnd(e, t)];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.onBatchBegin = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        return o(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return null == this.batchBegin ? [3, 3] : [4, r(t)];
                                case 1:
                                    return n.sent(), [4, this.batchBegin(e, t)];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.onBatchEnd = function (e, t) {
                    return a(this, void 0, void 0, function () {
                        return o(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return null == this.batchEnd ? [3, 3] : [4, r(t)];
                                case 1:
                                    return n.sent(), [4, this.batchEnd(e, t)];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.onTrainBegin = function (e) {
                    return a(this, void 0, void 0, function () {
                        return o(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return null == this.trainBegin ? [3, 3] : [4, r(e)];
                                case 1:
                                    return t.sent(), [4, this.trainBegin(e)];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.onTrainEnd = function (e) {
                    return a(this, void 0, void 0, function () {
                        return o(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return null == this.trainEnd ? [3, 3] : [4, r(e)];
                                case 1:
                                    return t.sent(), [4, this.trainEnd(e)];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(c);
            n.CustomCallback = f, n.standardizeCallbacks = function (e) {
                return null == e ? null : e instanceof c ? [e] : Array.isArray(e) && e[0] instanceof c ? e : l.toList(e).map(function (e) {
                    return new f(e)
                })
            }
        }, {"./backend/tfjs_backend": 100, "./utils/generic_utils": 130, "@tensorflow/tfjs-core": 8}],
        102: [function (e, t, n) {
            "use strict";

            function r() {
                return 0 === u.length ? "" : u.join(l) + l
            }

            function i(e) {
                return !!e.match(c)
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("./errors"), o = e("./utils/generic_utils"), s = new Map;
            o.SerializableEnumRegistry.register("data_format", {
                channels_first: "channelsFirst",
                channels_last: "channelsLast"
            }), n.VALID_DATA_FORMAT_VALUES = ["channelsFirst", "channelsLast", void 0, null], n.checkDataFormat = function (e) {
                if (null != e && n.VALID_DATA_FORMAT_VALUES.indexOf(e) < 0) throw new a.ValueError(e + " is not a valid DataFormat.  Valid values as " + n.VALID_DATA_FORMAT_VALUES)
            }, o.SerializableEnumRegistry.register("padding", {
                valid: "valid",
                same: "same",
                casual: "casual"
            }), n.VALID_PADDING_MODE_VALUES = ["valid", "same", "casual", void 0, null], n.checkPaddingMode = function (e) {
                if (null != e && n.VALID_PADDING_MODE_VALUES.indexOf(e) < 0) throw new a.ValueError(e + " is not a valid PaddingMode.  Valid values as " + n.VALID_PADDING_MODE_VALUES)
            }, n.VALID_POOL_MODE_VALUES = ["max", "avg", void 0, null], n.checkPoolMode = function (e) {
                if (null != e && n.VALID_POOL_MODE_VALUES.indexOf(e) < 0) throw new a.ValueError(e + " is not a valid PoolMode.  Valid values as " + n.VALID_POOL_MODE_VALUES)
            };
            var u = [], l = "/";
            n.nameScope = function (e, t) {
                u.push(e);
                try {
                    var n = t();
                    return u.pop(), n
                } catch (e) {
                    throw u.pop(), e
                }
            }, n.getScopedTensorName = function (e) {
                if (!i(e)) throw new Error("Not a valid tensor name: '" + e + "'");
                return r() + e
            }, n.getUniqueTensorName = function (e) {
                if (!i(e)) throw new Error("Not a valid tensor name: '" + e + "'");
                s.has(e) || s.set(e, 0);
                var t = s.get(e);
                if (s.set(e, s.get(e) + 1), t > 0) {
                    var n = e + "_" + t;
                    return s.set(n, 1), n
                }
                return e
            };
            var c = new RegExp(/^[A-Za-z][A-Za-z0-9\._\/]*$/);
            n.isValidTensorName = i
        }, {"./errors": 107, "./utils/generic_utils": 130}],
        103: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return u.sqrt(u.sum(u.square(e), t, !0))
            }

            function i(e, t) {
                return void 0 === t && (t = {}), c.deserializeKerasObject(e, c.ClassNameMap.getMap().pythonClassNameMap, t, "constraint")
            }

            var a = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), o = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var s = e("@tensorflow/tfjs-core"), u = e("./backend/tfjs_backend"), l = e("./types"),
                c = e("./utils/generic_utils"), p = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }

                    return a(t, e), t.prototype.getConfig = function () {
                        return {}
                    }, t = o([s.doc({heading: "Constraints", subheading: "Classes", namespace: "constraints"})], t)
                }(l.Serializable);
            n.Constraint = p;
            var h = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.defaultMaxValue = 2, n.defaultAxis = 0, n.maxValue = null != t.maxValue ? t.maxValue : n.defaultMaxValue, n.axis = null != t.axis ? t.axis : n.defaultAxis, n
                }

                return a(t, e), t.prototype.apply = function (e) {
                    var t = r(e, this.axis), n = u.clip(t, 0, this.maxValue);
                    return u.multiply(e, u.divide(n, u.scalarPlusArray(u.getScalar(u.epsilon()), t)))
                }, t.prototype.getClassName = function () {
                    return "MaxNorm"
                }, t.prototype.getConfig = function () {
                    return {maxValue: this.maxValue, axis: this.axis}
                }, t
            }(p);
            n.MaxNorm = h, c.ClassNameMap.register("MaxNorm", h);
            var d = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.defaultAxis = 0, n.axis = null != t.axis ? t.axis : n.defaultAxis, n
                }

                return a(t, e), t.prototype.apply = function (e) {
                    return u.divide(e, u.scalarPlusArray(u.getScalar(u.epsilon()), r(e, this.axis)))
                }, t.prototype.getClassName = function () {
                    return "UnitNorm"
                }, t.prototype.getConfig = function () {
                    return {axis: this.axis}
                }, t
            }(p);
            n.UnitNorm = d, c.ClassNameMap.register("UnitNorm", d);
            var f = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return a(t, e), t.prototype.apply = function (e) {
                    return u.relu(e)
                }, t.prototype.getClassName = function () {
                    return "NonNeg"
                }, t
            }(p);
            n.NonNeg = f, c.ClassNameMap.register("NonNeg", f);
            var g = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.defaultMinValue = 0, n.defaultMaxValue = 1, n.defaultRate = 1, n.defaultAxis = 0, n.minValue = null != t.minValue ? t.minValue : n.defaultMinValue, n.maxValue = null != t.maxValue ? t.maxValue : n.defaultMaxValue, n.rate = null != t.rate ? t.rate : n.defaultRate, n.axis = null != t.axis ? t.axis : n.defaultAxis, n
                }

                return a(t, e), t.prototype.apply = function (e) {
                    var t = r(e, this.axis),
                        n = u.add(u.scalarTimesArray(u.getScalar(this.rate), u.clip(t, this.minValue, this.maxValue)), u.scalarTimesArray(u.getScalar(1 - this.rate), t));
                    return u.multiply(e, u.divide(n, u.scalarPlusArray(u.getScalar(u.epsilon()), t)))
                }, t.prototype.getClassName = function () {
                    return "MinMaxNorm"
                }, t.prototype.getConfig = function () {
                    return {minValue: this.minValue, maxValue: this.maxValue, rate: this.rate, axis: this.axis}
                }, t
            }(p);
            n.MinMaxNorm = g, c.ClassNameMap.register("MinMaxNorm", g), n.CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
                maxNorm: "MaxNorm",
                minMaxNorm: "MinMaxNorm",
                nonNeg: "NonNeg",
                unitNorm: "UnitNorm"
            }, n.serializeConstraint = function (e) {
                return c.serializeKerasObject(e)
            }, n.deserializeConstraint = i, n.getConstraint = function (e) {
                return null == e ? null : "string" == typeof e ? i({
                    className: e in n.CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP ? n.CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP[e] : e,
                    config: {}
                }) : e instanceof p ? e : i(e)
            }
        }, {"./backend/tfjs_backend": 100, "./types": 128, "./utils/generic_utils": 130, "@tensorflow/tfjs-core": 8}],
        104: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (null != e.dtype && e.dtype !== t.dtype) throw new o.ValueError("The dtype of the feed (" + t.dtype + ") is incompatible with that of the key '" + e.name + "' (" + e.dtype + ").");
                if (null != e.shape) {
                    if (e.shape.length !== t.shape.length) throw new o.ValueError("The rank of feed (" + t.shape.length + ") does not match the rank of the key (" + e.shape.length + ").");
                    for (var n = 0; n < e.shape.length; ++n) if (null != e.shape[n] && e.shape[n] !== t.shape[n]) throw new o.ValueError("The " + n + "-th dimension of the feed (" + t.shape[n] + ") is incompatible with that of the key (" + e.shape[n] + ").")
                }
            }

            function i(e, t, n) {
                if (t.hasKey(e)) return t.getValue(e);
                if (e.sourceLayer instanceof s.InputLayer) throw new o.ValueError("Missing a feed value for SymbolicTensor from InputLayer '" + s.InputLayer.name + "'");
                for (var r = [], u = 0, l = e.inputs; u < l.length; u++) {
                    var c = i(l[u], t, n);
                    r.push(c)
                }
                var p = e.sourceLayer.apply(r, n);
                Array.isArray(p) || (p = [p]);
                for (var h = a(e), d = Array.isArray(h) ? h : [h], f = 0; f < d.length; ++f) t.add(d[f], p[f]);
                return 1 === p.length ? p[0] : p[e.outputTensorIndex]
            }

            function a(e) {
                var t;
                if (1 === e.sourceLayer.inboundNodes.length) t = e.sourceLayer.output; else {
                    for (var n = null, r = 0; r < e.sourceLayer.inboundNodes.length; ++r) for (var i = 0, a = e.sourceLayer.inboundNodes[r].outputTensors; i < a.length; i++) if (a[i].id === e.id) {
                        n = r;
                        break
                    }
                    t = e.sourceLayer.getOutputAt(n)
                }
                return t
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var o = e("../errors"), s = e("./topology"), u = function () {
                function e(t) {
                    if (this.id2Value = {}, t instanceof e) for (var n in t.id2Value) this.id2Value[n] = t.id2Value[n]; else {
                        if (null == t) return;
                        for (var r = 0, i = t; r < i.length; r++) {
                            var a = i[r];
                            this.add(a.key, a.value)
                        }
                    }
                }

                return e.prototype.add = function (e, t) {
                    if (r(e, t), null != this.id2Value[e.id]) throw new o.ValueError("Duplicate key: name=" + e.name + ", id=" + e.id);
                    return this.id2Value[e.id] = t, this
                }, e.prototype.addFeed = function (e) {
                    this.add(e.key, e.value)
                }, e.prototype.hasKey = function (e) {
                    return null != this.id2Value[e.id]
                }, e.prototype.getValue = function (e) {
                    if (null == this.id2Value[e.id]) throw new o.ValueError("Nonexistent key: " + JSON.stringify(e));
                    return this.id2Value[e.id]
                }, e
            }();
            n.FeedDict = u, n.execute = function (e, t, n) {
                for (var r = Array.isArray(e), a = r ? e : [e], o = [], s = new u(t), l = 0, c = a; l < c.length; l++) {
                    var p = c[l];
                    o.push(i(p, s, n))
                }
                return r ? o : o[0]
            }
        }, {"../errors": 107, "./topology": 105}],
        105: [function (e, t, n) {
            "use strict";

            function r(e) {
                for (var t = [], n = 0, r = e = v.toList(e); n < r.length; n++) {
                    var i = r[n];
                    t.push(d.intShape(i))
                }
                return v.singletonOrArray(t)
            }

            function i(e) {
                return m.DType.float32
            }

            function a(e, t, n) {
                if ((null == t || null != n && n > 0) && (t = e.sourceLayer, n = e.nodeIndex), 0 === t.inboundNodes.length) return [e];
                var r = t.inboundNodes[n];
                if (0 === r.inboundLayers.length) return r.inputTensors;
                for (var i = [], o = 0; o < r.inboundLayers.length; o++) for (var s = 0, u = a(r.inputTensors[o], r.inboundLayers[o], r.nodeIndices[o]); s < u.length; s++) {
                    var l = u[s];
                    -1 === i.indexOf(l) && i.push(l)
                }
                return i
            }

            function o(e, t, n) {
                var r = v.stringToDType(e);
                return h.Tensor.make(t, {values: 0 === t.length ? n : h.util.flatten(n)}, r)
            }

            function s(e, t, n, r) {
                if (!n.startsWith("2.")) throw new f.ValueError("Unsupported Keras version in weights being loaded: " + n);
                return t
            }

            function u(e, t) {
                for (var n = {}, r = 0, i = 0, a = t; i < a.length; i++) for (var o = 0, s = a[i].weights; o < s.length; o++) {
                    var u = s[o];
                    if (null != n[u.name]) throw new f.ValueError("Duplicate weight name: " + u.name);
                    n[u.name] = u, r++
                }
                var l = [];
                for (var c in e) l.push([n[c], e[c]]), delete n[c];
                var p = [];
                for (var h in n) p.push(h);
                if (p.length > 0) throw new f.ValueError(p.length + " of " + r + " weights are not set: " + p);
                d.batchSetValue(l)
            }

            function l(e, t, n) {
                void 0 === n && (n = !1);
                for (var r = e.keras_version, i = e.backend, a = t.map(function (e) {
                    return e.name
                }), u = {}, l = 0, c = t; l < c.length; l++) null != (T = c[l]).name && (null == u[T.name] && (u[T.name] = []), u[T.name].push(T));
                for (var p = e.weights, g = [], v = 0; v < a.length; ++v) {
                    var y = a[v], b = p[y];
                    null == b && (b = []);
                    for (var w = [], x = 0; x < b.length; ++x) {
                        var A = b[x];
                        w.push(new m.LayerVariable(o(A.dtype, A.shape, A.value)))
                    }
                    for (var E = 0, _ = u[y]; E < _.length; E++) {
                        var T = _[E], S = T.weights;
                        if ((w = s(T, w, r, i)).length !== S.length) {
                            if (!n) throw new f.ValueError("Layer #" + v + ' (named "' + T.name + '") expects ' + S.length + " weight(s), but the saved weights have " + w.length + " element(s).");
                            console.warn("Skipping loading of weights of layer " + T.name + " due to mismatch in number of weights: (" + w.length + " vs " + S.length + ").")
                        }
                        for (var C = 0; C < w.length; ++C) !n || h.util.arraysEqual(S[C].shape, w[C].shape) ? g.push([S[C], w[C].read()]) : console.warn("Skipping loading of weights for layer " + T.name + " due to mismatch in shape (" + S[C].shape + " vs " + w[C].shape + ")")
                    }
                }
                d.batchSetValue(g)
            }

            var c = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), p = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var h = e("@tensorflow/tfjs-core"), d = e("../backend/tfjs_backend"), f = e("../errors"),
                g = e("../layers/serialization"), m = e("../types"), v = e("../utils/generic_utils"),
                y = e("../utils/serialization_utils"), b = function () {
                    return function (e) {
                        this.dtype = e.dtype, this.shape = e.shape, null != e.shape ? this.ndim = e.shape.length : this.ndim = e.ndim, this.maxNDim = e.maxNDim, this.minNDim = e.minNDim, this.axes = e.axes || {}
                    }
                }();
            n.InputSpec = b;
            var w = 0, x = function () {
                function e(e, t) {
                    this.callArgs = t, this.id = w++, this.outboundLayer = e.outboundLayer, this.inboundLayers = e.inboundLayers, this.nodeIndices = e.nodeIndices, this.tensorIndices = e.tensorIndices, this.inputTensors = e.inputTensors, this.outputTensors = e.outputTensors, this.inputMasks = e.inputMasks, this.outputMasks = e.outputMasks, this.inputShapes = e.inputShapes, this.outputShapes = e.outputShapes;
                    for (var n = 0, r = e.inboundLayers; n < r.length; n++) {
                        var i = r[n];
                        null != i && i.outboundNodes.push(this)
                    }
                    e.outboundLayer.inboundNodes.push(this)
                }

                return e.prototype.getConfig = function () {
                    for (var e = [], t = 0, n = this.inboundLayers; t < n.length; t++) {
                        var r = n[t];
                        null != r ? e.push(r.name) : e.push(null)
                    }
                    return {
                        outboundLayer: this.outboundLayer ? this.outboundLayer.name : null,
                        inboundLayers: e,
                        nodeIndices: this.nodeIndices,
                        tensorIndices: this.tensorIndices
                    }
                }, e
            }();
            n.Node = x;
            var A = 0, E = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    n._callHook = null, n._addedWeightNames = [], n._stateful = !1, n.id = A++, n.activityRegularizer = null, n.inputSpec = null, n.supportsMasking = !1, n._trainableWeights = [], n._nonTrainableWeights = [], n._losses = [], n._updates = [], n._built = !1, n.inboundNodes = [], n.outboundNodes = [];
                    var r = t.name;
                    if (!r) {
                        var i = n.getClassName();
                        r = v.toSnakeCase(i) + "_" + d.getUid(i)
                    }
                    if (n.name = r, n.trainable = v.pyGetAttr(t, "trainable", !0), n.updatable = v.pyGetAttr(t, "updatable", !0), null != t.inputShape || null != t.batchInputShape) {
                        var a = void 0;
                        if (null != t.batchInputShape) a = t.batchInputShape; else if (null != t.inputShape) {
                            var o = null;
                            null != t.batchSize && (o = t.batchSize), a = [o].concat(t.inputShape)
                        }
                        n.batchInputShape = a;
                        var s = t.dtype;
                        null == s && (s = t.inputDType), null == s && (s = d.floatx()), n.dtype = s
                    }
                    return null != t.weights ? n.initialWeights = t.weights : n.initialWeights = null, n
                }

                return c(t, e), t.nodeKey = function (e, t) {
                    return e.name + "_ib-" + t.toString()
                }, t.prototype.getNodeAtIndex = function (e, t) {
                    if (0 === this.inboundNodes.length) throw new f.RuntimeError("The layer has never been called and thus has no defined " + t + ".");
                    if (this.inboundNodes.length <= e) throw new f.ValueError("Asked to get " + t + " at node " + e + ", but the layer has only " + this.inboundNodes.length + " inbound nodes.");
                    return this.inboundNodes[e]
                }, t.prototype.getInputAt = function (e) {
                    return v.singletonOrArray(this.getNodeAtIndex(e, "input").inputTensors)
                }, t.prototype.getOutputAt = function (e) {
                    return v.singletonOrArray(this.getNodeAtIndex(e, "output").outputTensors)
                }, Object.defineProperty(t.prototype, "input", {
                    get: function () {
                        if (this.inboundNodes.length > 1) throw new f.AttributeError("Layer " + this.name + ' has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use `getInputAt(nodeIndex)` instead.');
                        if (0 === this.inboundNodes.length) throw new f.AttributeError("Layer " + this.name + " is not connected, no input to return.");
                        return v.singletonOrArray(this.getNodeAtIndex(0, "input").inputTensors)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "output", {
                    get: function () {
                        if (0 === this.inboundNodes.length) throw new f.AttributeError("Layer " + this.name + " has no inbound nodes.");
                        if (this.inboundNodes.length > 1) throw new f.AttributeError("Layer " + this.name + ' has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use `getOutputAt(nodeIndex)` instead.');
                        return v.singletonOrArray(this.getNodeAtIndex(0, "output").outputTensors)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "losses", {
                    get: function () {
                        return this._losses
                    }, enumerable: !0, configurable: !0
                }), t.prototype.calculateLosses = function () {
                    return this.losses.map(function (e) {
                        return e()
                    })
                }, Object.defineProperty(t.prototype, "updates", {
                    get: function () {
                        return this._updates
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "built", {
                    get: function () {
                        return this._built
                    }, set: function (e) {
                        this._built = e
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "trainableWeights", {
                    get: function () {
                        return this.trainable ? this._trainableWeights : []
                    }, set: function (e) {
                        this._trainableWeights = e
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
                    get: function () {
                        return this.trainable ? this._nonTrainableWeights : this._trainableWeights.concat(this._nonTrainableWeights)
                    }, set: function (e) {
                        this._nonTrainableWeights = e
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "weights", {
                    get: function () {
                        return this.trainableWeights.concat(this.nonTrainableWeights)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "stateful", {
                    get: function () {
                        return this._stateful
                    }, enumerable: !0, configurable: !0
                }), t.prototype.assertInputCompatibility = function (e) {
                    if (e = v.toList(e), null != this.inputSpec && 0 !== this.inputSpec.length) {
                        var t = v.toList(this.inputSpec);
                        if (e.length !== t.length) throw new f.ValueError("Layer " + this.name + " expects " + t.length + " inputs, but it received " + e.length + " input tensors. Input received: " + e);
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n], i = t[n];
                            if (null != i) {
                                var a = d.ndim(r);
                                if (null != i.ndim && a !== i.ndim) throw new f.ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected ndim=" + i.ndim + ", found ndim=" + a);
                                if (null != i.maxNDim && a > i.maxNDim) throw new f.ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected max_ndim=" + i.maxNDim + ", found ndim=" + a);
                                if (null != i.minNDim && a < i.minNDim) throw new f.ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected min_ndim=" + i.minNDim + ", found ndim=" + a + ".");
                                if (null != i.dtype && d.dtype(r) !== i.dtype) {
                                    var o = d.dtype(r);
                                    throw new f.ValueError("Input " + n + " is incompatible with layer " + this.name + " : expected dtype=" + i.dtype + ", found dtype=" + o + ".")
                                }
                                if (i.axes) {
                                    p = d.intShape(r);
                                    for (var s in i.axes) {
                                        var u = Number(s), l = i.axes[s], c = u >= 0 ? p[u] : p[p.length + u];
                                        if (null != l && -1 === [l, null].indexOf(c)) throw new f.ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected axis " + u + " of input shape to have value " + l + " but got shape " + p + ".")
                                    }
                                }
                                if (null != i.shape) for (var p = d.intShape(r), h = 0; h < i.shape.length; ++h) {
                                    var g = i.shape[h], m = p[h];
                                    if (null != g && null != m && g !== m) throw new f.ValueError("Input " + n + " is incompatible with layer " + this.name + ": expected shape=" + i.shape + ", found shape=${xShape}.")
                                }
                            }
                        }
                    }
                }, t.prototype.call = function (e, t) {
                    return e
                }, t.prototype.invokeCallHook = function (e, t) {
                    null != this._callHook && this._callHook(e, t)
                }, t.prototype.setCallHook = function (e) {
                    this._callHook = e
                }, t.prototype.clearCallHook = function () {
                    this._callHook = null
                }, t.prototype.apply = function (e, t) {
                    var n = this;
                    t = t || {};
                    for (var a = v.toList(e), o = !0, s = 0, u = a; s < u.length; s++) if (!((h = u[s]) instanceof m.SymbolicTensor)) {
                        o = !1;
                        break
                    }
                    for (var l = !0, c = 0, p = a; c < p.length; c++) {
                        var h = p[c];
                        if (h instanceof m.SymbolicTensor) {
                            l = !1;
                            break
                        }
                    }
                    if (o === l) throw new f.ValueError("Arguments to apply() must be all SymbolicTensors or all Tensors");
                    return d.nameScope(this.name, function () {
                        if (!n.built) {
                            n.assertInputCompatibility(e);
                            for (var o = [], s = 0, u = v.toList(e); s < u.length; s++) {
                                var c = u[s];
                                o.push(d.intShape(c))
                            }
                            n.build(v.singletonOrArray(o)), n.built = !0, n.initialWeights && n.setWeights(n.initialWeights)
                        }
                        if (n.assertInputCompatibility(e), l) {
                            for (var p = n.call(e, t), h = [], g = 0, y = v.toList(p); g < y.length; g++) {
                                var b = y[g];
                                -1 !== a.indexOf(b) && (b = d.identity(b)), h.push(b)
                            }
                            if (p = v.singletonOrArray(h), null != n.activityRegularizer) throw new f.NotImplementedError("Layer invocation in the presence of activity regularizer(s) is not supported yet.");
                            return p
                        }
                        var w = r(e), x = n.computeOutputShape(w), p = void 0, A = i();
                        if (p = null != x && x.length > 0 && Array.isArray(x[0]) ? x.map(function (r, i) {
                            return new m.SymbolicTensor(A, r, n, v.toList(e), t, n.name, i)
                        }) : new m.SymbolicTensor(A, x, n, v.toList(e), t, n.name), n.addInboundNode(e, p, null, null, w, x, t), null != n.activityRegularizer) throw new f.NotImplementedError("Layer invocation in the presence of activity regularizer(s) is not supported yet.");
                        return p
                    })
                }, t.prototype.build = function (e) {
                    this.built = !0
                }, t.prototype.getWeights = function () {
                    return d.batchGetValue(this.weights)
                }, t.prototype.setWeights = function (e) {
                    var t = this.weights;
                    if (t.length !== e.length) throw new f.ValueError('You called setWeights(weights) on layer "' + this.name + '" with a weight list of length ' + e.length + ", but the layer was expecting " + t.length + " weights. Provided weights: " + e + "...");
                    if (0 !== t.length) {
                        for (var n = [], r = d.batchGetValue(t), i = 0; i < r.length; ++i) {
                            var a = r[i], o = t[i], s = e[i];
                            if (!h.util.arraysEqual(a.shape, s.shape)) throw new f.ValueError("Layer weight shape " + a.shape + " not compatible with provided weight shape " + s.shape);
                            n.push([o, s])
                        }
                        d.batchSetValue(n)
                    }
                }, t.prototype.addWeight = function (e, t, n, r, i, a, o) {
                    if (-1 !== this._addedWeightNames.indexOf(e)) throw new f.ValueError("Duplicate weight name " + e + " for layer " + this.name);
                    this._addedWeightNames.push(e), null == n && (n = d.floatx());
                    var s = new m.LayerVariable(r.apply(t, n), n, e, a, o);
                    return null != i && this.addLoss(function () {
                        return i.apply(s.read())
                    }), null == a && (a = !0), a ? this._trainableWeights.push(s) : this._nonTrainableWeights.push(s), s
                }, t.prototype.addLoss = function (e) {
                    if (!(null == e || Array.isArray(e) && 0 === e.length)) {
                        e = v.toList(e), void 0 !== this._losses && null !== this._losses && (t = this.losses).push.apply(t, e);
                        var t
                    }
                }, t.prototype.computeOutputShape = function (e) {
                    return e
                }, t.prototype.computeMask = function (e, t) {
                    var n = this;
                    if (!this.supportsMasking) {
                        if (null != t) {
                            if (!Array.isArray(t)) throw new TypeError("Layer " + this.name + " does not support masking,but was passed an inputMask.");
                            t.forEach(function (e) {
                                if (null != e) throw new TypeError("Layer " + n.name + " does not support masking,but was passed an inputMask.")
                            })
                        }
                        return null
                    }
                    return t
                }, t.prototype.addInboundNode = function (e, t, n, r, i, a, o) {
                    void 0 === o && (o = null);
                    var s = v.toList(e);
                    t = v.toList(t), n = v.toList(n), r = v.toList(r), i = v.normalizeShapeList(i), a = v.normalizeShapeList(a);
                    for (var u = [], l = [], c = [], p = 0, h = s; p < h.length; p++) {
                        var d = h[p];
                        u.push(d.sourceLayer), l.push(d.nodeIndex), c.push(d.tensorIndex)
                    }
                    new x({
                        outboundLayer: this,
                        inboundLayers: u,
                        nodeIndices: l,
                        tensorIndices: c,
                        inputTensors: s,
                        outputTensors: t,
                        inputMasks: n,
                        outputMasks: r,
                        inputShapes: i,
                        outputShapes: a
                    }, o);
                    for (var f = 0; f < t.length; f++) t[f].sourceLayer = this, t[f].nodeIndex = this.inboundNodes.length - 1, t[f].tensorIndex = f
                }, t.prototype.getConfig = function () {
                    var e = {name: this.name, trainable: this.trainable};
                    return null != this.batchInputShape && (e.batchInputShape = this.batchInputShape), null != this.dtype && (e.dtype = this.dtype), e
                }, t.fromConfig = function (e, t) {
                    return new e(t)
                }, p([h.doc({
                    heading: "Models",
                    subheading: "Classes"
                })], t.prototype, "apply", null), t = p([h.doc({
                    heading: "Layers",
                    subheading: "Classes",
                    namespace: "layers"
                })], t)
            }(m.Serializable);
            n.Layer = E;
            var _ = function (e) {
                function t(t) {
                    var n = e.call(this, {
                        dtype: t.dtype,
                        name: null != t.name ? t.name : d.getUid("input").toString()
                    }) || this;
                    if (null == t.batchSize && (t.batchSize = null), null == t.sparse && (t.sparse = !1), n.trainable = !1, n.built = !0, n.sparse = t.sparse, null != t.inputShape && null != t.batchInputShape) throw new f.ValueError("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");
                    var r = t.batchInputShape;
                    if (null == r) {
                        if (null == t.inputShape) throw new f.ValueError("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");
                        r = [t.batchSize].concat(t.inputShape)
                    } else if (null != t.batchSize) throw new f.ValueError("Cannot specify batchSize if batchInputShape isspecified when creating an InputLayer.");
                    var i = t.dtype || d.floatx();
                    n.batchInputShape = r, n.dtype = i, n.inputSpec = [{shape: r}];
                    var a = new m.SymbolicTensor(n.dtype, n.batchInputShape, n, [], {}, n.name);
                    return a.nodeIndex = 0, a.tensorIndex = 0, new x({
                        outboundLayer: n,
                        inboundLayers: [],
                        nodeIndices: [],
                        tensorIndices: [],
                        inputTensors: [a],
                        outputTensors: [a],
                        inputMasks: [null],
                        outputMasks: [null],
                        inputShapes: [r],
                        outputShapes: [r]
                    }), n
                }

                return c(t, e), t.prototype.apply = function (e, t) {
                    throw new f.ValueError("Cannot pass any input to an InputLayer's apply() method. InputLayer name: " + this.name)
                }, t.prototype.getClassName = function () {
                    return "InputLayer"
                }, t.prototype.getConfig = function () {
                    return {
                        batchInputShape: this.batchInputShape,
                        dtype: this.dtype,
                        sparse: this.sparse,
                        name: this.name
                    }
                }, t
            }(E);
            n.InputLayer = _, v.ClassNameMap.register("InputLayer", _), n.Input = function (e) {
                if (null == e.batchShape && null == e.shape) throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");
                if (null != e.batchShape && null != e.shape) throw new f.ValueError("Please provide either a `shape` or `batchShape` argument to Input, but not both.");
                var t = e.batchShape;
                null != e.shape && null == t && (t = [null].concat(e.shape));
                var n = e.dtype;
                return null == n && (n = d.floatx()), new _({
                    batchInputShape: t,
                    name: e.name,
                    dtype: n,
                    sparse: e.sparse
                }).inboundNodes[0].outputTensors[0]
            };
            var T = function (e) {
                function t(n) {
                    var r = e.call(this, {}) || this;
                    if (r.containerNodes = new Set, r.name = n.name, null == r.name) {
                        var i = r.getClassName().toLowerCase();
                        r.name = d.getUid(i)
                    }
                    if (r.supportsMasking = !1, r.trainable = !0, r.updatable = !0, Array.isArray(n.inputs) ? r.inputs = n.inputs.slice() : r.inputs = [n.inputs], Array.isArray(n.outputs) ? r.outputs = n.outputs.slice() : r.outputs = [n.outputs], v.unique(r.inputs).length !== r.inputs.length) throw new f.ValueError("The list of inputs passed to the model is redundant. All inputs should only appear once. Found: " + r.inputs.map(function (e) {
                        return e.name
                    }));
                    v.unique(r.outputs).length !== r.outputs.length && console.warn("The list of outputs passed to the model is redundant. All outputs should only appear once. Found: " + r.outputs.map(function (e) {
                        return e.name
                    })), r.inputLayers = [], r.inputLayersNodeIndices = [], r.inputLayersTensorIndices = [], r.outputLayers = [], r.outputLayersNodeIndices = [], r.outputLayersTensorIndices = [], r.layers = [];
                    for (var a = 0, o = r.outputs; a < o.length; a++) {
                        var s = (ae = o[a]).sourceLayer, u = ae.nodeIndex, l = ae.tensorIndex;
                        r.outputLayers.push(s), r.outputLayersNodeIndices.push(u), r.outputLayersTensorIndices.push(l)
                    }
                    for (var c = 0, p = r.inputs; c < p.length; c++) {
                        var s = (ae = p[c]).sourceLayer, u = ae.nodeIndex, l = ae.tensorIndex;
                        v.assert(0 === u, "input layer has >1 nodes"), v.assert(0 === l, "input layer has >1 tensors"), r.inputLayers.push(s), r.inputLayersNodeIndices.push(u), r.inputLayersTensorIndices.push(l)
                    }
                    r.inputNames = [], r.outputNames = [], r.feedInputShapes = [], r.feedInputNames = [], r.feedOutputNames = [];
                    for (M = 0; M < r.inputLayers.length; M++) {
                        if (!((s = r.inputLayers[M]) instanceof _)) throw new TypeError("Input layers to a Model must be InputLayer objects. Received inputs: " + n.inputs + ". Input " + M + " (0-based) originates from layer type " + s.getClassName() + ".");
                        r.inputNames.push(s.name), r.feedInputShapes.push(s.batchInputShape), r.feedInputNames.push(s.name)
                    }
                    for (var h = 0, g = r.outputLayers; h < g.length; h++) {
                        s = g[h];
                        r.outputNames.push(s.name)
                    }
                    r.internalInputShapes = r.inputs.map(function (e) {
                        return e.shape
                    }), r.internalOutputShapes = r.outputs.map(function (e) {
                        return e.shape
                    });
                    for (var m = {}, y = {}, b = {}, w = {}, A = {}, E = [], T = function (e, n, i, a, o, s) {
                        null != a && null != o && null != s || (a = e.sourceLayer, o = e.nodeIndex, s = e.tensorIndex);
                        var u = a.inboundNodes[o];
                        if (-1 !== i.indexOf(u)) throw new f.RuntimeError("The tensor " + e.name + ' at layer "' + a.name + '" is part of a cycle.');
                        if (-1 === n.indexOf(u)) {
                            r.containerNodes.add(t.nodeKey(a, o)), a.id in A || (A[a.id] = Object.keys(A).length), -1 === i.indexOf(u) && i.push(u);
                            for (var l = u.inboundLayers.length, c = 0; c < l; c++) {
                                var p = u.inputTensors[c], h = u.inboundLayers[c], d = u.nodeIndices[c],
                                    g = u.tensorIndices[c];
                                T(p, n, i, h, d, g)
                            }
                            for (n.push(u); i.indexOf(u) >= 0;) i.splice(i.indexOf(u), 1);
                            E.push(u)
                        }
                    }, S = [], C = [], O = 0, k = r.outputs; O < k.length; O++) {
                        ae = k[O];
                        T(ae, S, C)
                    }
                    for (var N = 0, R = E.slice().reverse(); N < R.length; N++) {
                        y[(ee = R[N]).id] = ee, ee.id in m || (m[ee.id] = 0);
                        var I = m[ee.id], z = null == b[ee.outboundLayer.id] ? 0 : b[ee.outboundLayer.id];
                        I = Math.max(I, z), b[ee.outboundLayer.id] = I, w[ee.outboundLayer.id] = ee.outboundLayer, m[ee.id] = I;
                        for (var M = 0; M < ee.inboundLayers.length; M++) {
                            var D = ee.inboundLayers[M], u = ee.nodeIndices[M], P = D.inboundNodes[u],
                                L = null == m[P.id] ? 0 : m[P.id];
                            m[P.id] = Math.max(I + 1, L), y[P.id] = P
                        }
                    }
                    var F = {};
                    for (var V in m) (I = m[V]) in F || (F[I] = []), F[I].push(y[V]);
                    var B = {};
                    for (var U in b) (I = b[U]) in B || (B[I] = []), B[I].push(w[U]);
                    var j = Object.keys(B).map(function (e) {
                        return parseInt(e, 10)
                    }).sort(v.reverseNumberCompare);
                    r.layers = [];
                    for (var G = 0, W = j; G < W.length; G++) {
                        var q = B[I = W[G]];
                        q.sort(function (e, t) {
                            var n = A[e.id], r = A[t.id];
                            return n < r ? -1 : n > r ? 1 : 0
                        });
                        for (var H = 0, K = q; H < K.length; H++) {
                            s = K[H];
                            r.layers.push(s)
                        }
                    }
                    r.layersByDepth = B, j = Object.keys(F).map(function (e) {
                        return parseInt(e, 10)
                    }).sort(v.reverseNumberCompare);
                    for (var X = r.inputs.slice(), Y = [], Q = 0, Z = j; Q < Z.length; Q++) for (var J = 0, $ = F[I = Z[Q]]; J < $.length; J++) {
                        var ee = $[J];
                        if (null != (s = ee.outboundLayer)) {
                            for (var te = 0, ne = ee.inputTensors; te < ne.length; te++) {
                                ae = ne[te];
                                if (-1 === X.indexOf(ae)) throw new f.RuntimeError("Graph disconnected: cannot obtain value for tensor " + ae + ' at layer "' + s.name + '". The following previous layers were accessed without issue: ' + Y)
                            }
                            for (var re = 0, ie = ee.outputTensors; re < ie.length; re++) {
                                var ae = ie[re];
                                X.push(ae)
                            }
                            Y.push(s.name)
                        }
                    }
                    r.nodesByDepth = F;
                    for (var oe = r.layers.map(function (e) {
                        return e.name
                    }), se = 0, ue = oe; se < ue.length; se++) !function (e) {
                        var t = oe.filter(function (t) {
                            return t === e
                        }).length;
                        if (1 !== t) throw new f.RuntimeError('The name "' + e + '" is used ' + t + " times in the model. All layer names should be unique. Layer names: " + JSON.stringify(oe))
                    }(ue[se]);
                    return r.outboundNodes = [], r.inboundNodes = [], new x({
                        outboundLayer: r,
                        inboundLayers: [],
                        nodeIndices: [],
                        tensorIndices: [],
                        inputTensors: r.inputs,
                        outputTensors: r.outputs,
                        inputMasks: r.inputs.map(function (e) {
                            return null
                        }),
                        outputMasks: r.outputs.map(function (e) {
                            return null
                        }),
                        inputShapes: r.inputs.map(function (e) {
                            return e.shape
                        }),
                        outputShapes: r.outputs.map(function (e) {
                            return e.shape
                        })
                    }), r.built = !0, r
                }

                return c(t, e), Object.defineProperty(t.prototype, "trainableWeights", {
                    get: function () {
                        if (this._trainableWeights.length > 0) throw new f.ValueError("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");
                        if (!this.trainable) return [];
                        for (var e = [], t = 0, n = this.layers; t < n.length; t++) {
                            var r = n[t];
                            e = e.concat(r.trainableWeights)
                        }
                        return e
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
                    get: function () {
                        for (var e = [], t = 0, n = this.layers; t < n.length; t++) {
                            o = n[t];
                            e.push.apply(e, o.nonTrainableWeights)
                        }
                        if (!this.trainable) {
                            for (var r = [], i = 0, a = this.layers; i < a.length; i++) {
                                var o = a[i];
                                r.push.apply(r, o.trainableWeights)
                            }
                            return r.concat(e)
                        }
                        return e
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "weights", {
                    get: function () {
                        return this.trainableWeights.concat(this.nonTrainableWeights)
                    }, enumerable: !0, configurable: !0
                }), t.prototype.loadWeights = function (e, t, n) {
                    void 0 === t && (t = !1), void 0 === n && (n = !1), n ? u(e, this.layers) : l(e, this.layers, t)
                }, t.prototype.updatedConfig = function () {
                    var e = this.getConfig();
                    return {
                        className: this.getClassName(),
                        config: e,
                        kerasVersion: "tfjs-layers pre-release",
                        backend: "TensorFlow.js"
                    }
                }, t.prototype.toJSON = function (e) {
                    var t = this.updatedConfig();
                    return JSON.stringify(y.convertTsToPythonic(t))
                }, t.prototype.call = function (e, t) {
                    e = v.toList(e);
                    var n;
                    return n = "mask" in t ? v.toList(t.mask) : v.pyListRepeat(null, e.length), this.runInternalGraph(e, n)[0]
                }, t.prototype.computeMask = function (e, t) {
                    e = v.toList(e);
                    var n;
                    return n = null == t ? v.pyListRepeat(null, e.length) : v.toList(t), this.runInternalGraph(e, n)[1]
                }, t.prototype.computeOutputShape = function (e) {
                    var t = v.normalizeShapeList(e);
                    if (t.length !== this.inputLayers.length) throw new f.ValueError("Invalid inputShape argument " + e + ": model has " + this.inputLayers.length + " tensor inputs.");
                    for (var n = {}, r = 0; r < t.length; r++) {
                        var i = this.inputLayers[r], a = t[r];
                        n[S = i.name + "_0_0"] = a
                    }
                    var o = Object.keys(this.nodesByDepth).map(function (e) {
                        return parseInt(e, 10)
                    }).sort(v.reverseNumberCompare);
                    if (o.length > 1) for (var s = 0, u = o; s < u.length; s++) for (var l = u[s], c = 0, p = this.nodesByDepth[l]; c < p.length; c++) {
                        var h = p[c], i = h.outboundLayer;
                        if (-1 === this.inputLayers.map(function (e) {
                            return e.id
                        }).indexOf(i.id)) {
                            for (var d = [], g = 0; g < h.inboundLayers.length; g++) {
                                var m = h.inboundLayers[g], y = h.nodeIndices[g], b = h.tensorIndices[g],
                                    w = n[S = m.name + "_" + y + "_" + b];
                                d.push(w)
                            }
                            for (var x = i.computeOutputShape(v.singletonOrArray(d)), A = v.normalizeShapeList(x), E = i.inboundNodes.indexOf(h), g = 0; g < A.length; g++) n[S = i.name + "_" + E + "_" + g] = A[g]
                        }
                    }
                    for (var _ = [], T = [], r = 0; r < this.outputLayers.length; r++) {
                        var i = this.outputLayers[r], E = this.outputLayersNodeIndices[r],
                            b = this.outputLayersTensorIndices[r], S = i.name + "_" + E + "_" + b;
                        T.push(S)
                    }
                    for (r = 0; r < T.length; r++) {
                        var C = T[r];
                        v.assert(C in n), _.push(n[C])
                    }
                    return v.singletonOrArray(_)
                }, t.prototype.runInternalGraph = function (e, t) {
                    null == t && (t = v.pyListRepeat(null, e.length));
                    for (var n = {}, r = 0; r < this.inputs.length; ++r) {
                        var i = this.inputs[r], a = e[r], o = t[r];
                        n[i.id] = [a, o]
                    }
                    for (var s = 0, u = Object.keys(this.nodesByDepth).map(function (e) {
                        return parseInt(e, 10)
                    }).sort(v.reverseNumberCompare); s < u.length; s++) for (var l = u[s], c = 0, p = this.nodesByDepth[l]; c < p.length; c++) {
                        for (var h = p[c], d = h.outboundLayer, g = h.inputTensors, m = h.outputTensors, y = new Array, b = 0, w = g; b < w.length; b++) (i = w[b]).id in n && y.push(n[i.id]);
                        if (y.length === g.length) {
                            var x = {}, A = void 0, E = void 0, _ = void 0, T = void 0;
                            if (null != h.callArgs && (x = h.callArgs), 1 === y.length) {
                                var S = y[0], C = S[0], O = S[1];
                                null == x.mask && (x.mask = O), _ = v.toList(d.call(C, x)), T = v.toList(d.computeMask(C, O)), A = [C], E = [O]
                            } else A = y.map(function (e) {
                                return e[0]
                            }), E = y.map(function (e) {
                                return e[1]
                            }), null == x.mask && (x.mask = E), _ = v.toList(d.call(A, x)), T = v.toList(d.computeMask(A, E));
                            if (d.activityRegularizer) throw new f.NotImplementedError("Model invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");
                            for (r = 0; r < m.length; ++r) {
                                var i = m[r], a = _[r], o = T[r];
                                n[i.id] = [a, o]
                            }
                        }
                    }
                    for (var k = [], N = [], R = [], I = 0, z = this.outputs; I < z.length; I++) {
                        i = z[I];
                        v.assert(i.id in n, "Could not compute output " + i.name + " : " + i.id);
                        var M = n[i.id], D = M[0], o = M[1];
                        R.push(D.shape), k.push(D), N.push(o)
                    }
                    return [k, N, R]
                }, t.prototype.buildNodeConversionMap = function (e) {
                    for (var n, r = {}, i = 0, a = this.layers; i < a.length; i++) {
                        var o = a[i];
                        n = o instanceof t ? 1 : 0;
                        for (var s = 0; s < o.inboundNodes.length; s++) {
                            var u = t.nodeKey(o, s);
                            u in this.containerNodes && (r[u] = n, n += 1)
                        }
                    }
                    return r
                }, t.prototype.getLayer = function (e, t) {
                    if (null != t) {
                        if (this.layers.length <= t) throw new f.ValueError("Was asked to retrieve layer at index " + t + ", but model only has " + this.layers.length + " layer(s).");
                        return this.layers[t]
                    }
                    if (null == e) throw new f.ValueError("Provide either a layer name or layer index");
                    for (var n = 0, r = this.layers; n < r.length; n++) {
                        var i = r[n];
                        if (i.name === e) return i
                    }
                    throw new f.ValueError("No such layer: " + e)
                }, t.prototype.calculateLosses = function () {
                    var e = this;
                    return h.tidy(function () {
                        for (var n = [], r = 0, i = e.layers; r < i.length; r++) for (var a = i[r], o = 0; o < a.inboundNodes.length; ++o) {
                            var s = t.nodeKey(a, o);
                            e.containerNodes.has(s) && n.push.apply(n, a.calculateLosses())
                        }
                        return n
                    })
                }, t.prototype.getConfig = function () {
                    for (var e = {name: this.name}, n = this.buildNodeConversionMap(this.layers), r = [], i = 0, a = this.layers; i < a.length; i++) {
                        for (var o = (b = a[i]).getClassName(), s = b.getConfig(), u = [], l = 0; l < b.inboundNodes.length; l++) {
                            var c = b.inboundNodes[l], p = t.nodeKey(b, l), h = {};
                            if (this.containerNodes.has(p) && (c.callArgs && (-1 === JSON.stringify(c.callArgs).indexOf("undefined") ? h = c.callArgs : (console.warn("Layer " + b.name + " was passed non-serializable keyword arguments: " + c.callArgs + ". They will not be included in the serialized model (and thus will be missing at deserialization time)."), h = {})), c.inboundLayers.length > 0)) {
                                for (var d = [], f = 0; f < c.inboundLayers.length; f++) {
                                    var g = c.inboundLayers[f], m = c.nodeIndices[f], v = c.tensorIndices[f];
                                    null !== (x = n[t.nodeKey(g, m)]) && void 0 !== x || (x = 0), d.push([g.name, x, v, h])
                                }
                                u.push(d)
                            }
                        }
                        r.push({name: b.name, className: o, config: s, inboundNodes: u})
                    }
                    e.layers = r;
                    for (var y = [], f = 0; f < this.inputLayers.length; f++) {
                        var b = this.inputLayers[f], m = this.inputLayersNodeIndices[f], p = t.nodeKey(b, m);
                        if (this.containerNodes.has(p)) {
                            null !== (x = n[p]) && void 0 !== x || (x = 0);
                            v = this.inputLayersTensorIndices[f];
                            y.push([b.name, x, v])
                        }
                    }
                    e.inputLayers = y;
                    for (var w = [], f = 0; f < this.outputLayers.length; f++) {
                        var b = this.outputLayers[f], m = this.outputLayersNodeIndices[f], p = t.nodeKey(b, m);
                        if (this.containerNodes.has(p)) {
                            var x = n[p];
                            null !== x && void 0 !== x || (x = 0);
                            v = this.outputLayersTensorIndices[f];
                            w.push([b.name, x, v])
                        }
                    }
                    return e.outputLayers = w, e
                }, t.fromConfig = function (e, t) {
                    function n(e, t) {
                        e.name in i ? i[e.name].push(t) : i[e.name] = [t]
                    }

                    for (var r = {}, i = {}, a = t.name, o = t.layers, s = 0, u = o; s < u.length; s++) !function (e) {
                        var i = e.name, a = g.deserialize(e, null != t.customObjects ? t.customObjects : {});
                        r[i] = a;
                        for (var o = 0, s = e.inboundNodes; o < s.length; o++) {
                            var u = s[o];
                            if (!(u instanceof Array)) throw new f.ValueError("Corrupted configuration, expected array for nodeData: " + u);
                            n(a, u)
                        }
                    }(p = u[s]);
                    for (; !v.isObjectEmpty(i);) for (var l = 0, c = o; l < c.length; l++) {
                        var p = c[l];
                        if ((S = r[p.name]).name in i) {
                            for (var h = 0, d = i[S.name]; h < d.length; h++) !function (e, t) {
                                for (var i, a = [], o = 0, s = t; o < s.length; o++) {
                                    var u = s[o], l = u[0], c = u[1], p = u[2];
                                    if (3 === u.length) i = {}; else {
                                        if (4 !== u.length) throw new f.ValueError("Improperly formatted model config for layer " + JSON.stringify(e) + ": " + JSON.stringify(u));
                                        i = u[3]
                                    }
                                    if (!(l in r)) return void n(e, t);
                                    var h = r[l];
                                    if (h.inboundNodes.length <= c) return void n(e, t);
                                    var d = h.inboundNodes[c];
                                    a.push(d.outputTensors[p])
                                }
                                a.length > 0 && e.apply(v.singletonOrArray(a), i)
                            }(S, d[h]);
                            delete i[S.name]
                        }
                    }
                    for (var m = [], y = [], b = 0, w = t.inputLayers; b < w.length; b++) {
                        var x = (p = w[b])[0], A = p[1], E = p[2];
                        v.assert(x in r);
                        C = (S = r[x]).inboundNodes[A].outputTensors;
                        m.push(C[E])
                    }
                    for (var _ = 0, T = t.outputLayers; _ < T.length; _++) {
                        var x = (p = T[_])[0], A = p[1], E = p[2];
                        v.assert(x in r);
                        var S = r[x], C = S.inboundNodes[A].outputTensors;
                        y.push(C[E])
                    }
                    return new e({inputs: m, outputs: y, name: a})
                }, Object.defineProperty(t.prototype, "stateful", {
                    get: function () {
                        if (this._stateful) throw new f.ValueError("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");
                        for (var e = 0, t = this.layers; e < t.length; e++) if (t[e].stateful) return !0;
                        return !1
                    }, enumerable: !0, configurable: !0
                }), p([h.doc({
                    heading: "Layers",
                    subheading: "Classes",
                    namespace: "layers",
                    subclasses: ["Model"]
                })], t.prototype, "getLayer", null), t
            }(E);
            n.Container = T, n.getSourceInputs = a, n.loadWeightsFromNamedTensorMap = u, n.loadWeightsFromJson = l
        }, {
            "../backend/tfjs_backend": 100,
            "../errors": 107,
            "../layers/serialization": 121,
            "../types": 128,
            "../utils/generic_utils": 130,
            "../utils/serialization_utils": 132,
            "@tensorflow/tfjs-core": 8
        }],
        106: [function (e, t, n) {
            "use strict";

            function r(e) {
                return e instanceof b.Tensor
            }

            function i(e) {
                return Array.isArray(e)
            }

            function a(e) {
                return !r(e) && !i(e)
            }

            function o(e, t, n, r, o) {
                if (void 0 === r && (r = !0), void 0 === o && (o = ""), null == t || 0 === t.length) {
                    if (null != e) {
                        var s = !1;
                        if (i(e) && e.length > 0) s = !0; else if (a(e)) {
                            for (var u in e) if (e.hasOwnProperty(u)) {
                                s = !0;
                                break
                            }
                        } else s = !0;
                        if (s) throw new A.ValueError("Error when checking model " + o + " expected no data, but got " + e)
                    }
                    return []
                }
                if (null == e) return t.map(function (e) {
                    return null
                });
                var l;
                if (a(e)) {
                    e = e, l = [];
                    for (var c = 0, p = t; c < p.length; c++) {
                        var h = p[c];
                        if (null == e[h]) throw new A.ValueError('No data provided for "' + h + '". Need data for each key in: ' + t);
                        l.push(e[h])
                    }
                } else if (i(e)) {
                    if ((e = e).length !== t.length) throw new A.ValueError("Error when checking model " + o + ": the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see " + t.length + " Tensor(s), but instead got the following list of Tensor(s): " + e);
                    l = e
                } else {
                    if (e = e, t.length > 1) throw new A.ValueError("The model " + o + " expects " + t.length + " Tensor(s), but only received one Tensor. Found: Tensor with shape " + e.shape);
                    l = [e]
                }
                for (d = 0; d < t.length; ++d) 1 === (f = l[d]).shape.length && (l[d] = w.expandDims(f, 1));
                if (null != n) for (var d = 0; d < t.length; ++d) if (null != n[d]) {
                    var f = l[d];
                    if (f.shape.length !== n[d].length) throw new A.ValueError("Error when checking " + o + ": expected " + t[d] + " to have " + n[d].length + " dimension(s). but got array with shape " + f.shape);
                    for (var g = 0; g < n[d].length; ++g) if (0 !== g || r) {
                        var m = f.shape[g], v = n[d][g];
                        if (null != v && v >= 0 && m !== v) throw new A.ValueError("Error when checking " + o + ": expected " + t[d] + " to have shape [" + n[d] + "], but got array with shape [" + f.shape + "].")
                    }
                }
                return l
            }

            function s(e, t, n) {
                var r = S.unique(e.map(function (e) {
                    return e.shape[0]
                }));
                r.sort();
                var i = S.unique(t.map(function (e) {
                    return e.shape[0]
                }));
                if (i.sort(), r.length > 1) throw new A.ValueError("All input Tensors (x) should have the same number of samples. Got array shapes: " + JSON.stringify(e.map(function (e) {
                    return e.shape
                })));
                if (i.length > 1) throw new A.ValueError("All target Tensors (y) should have the same number of samples. Got array shapes: " + JSON.stringify(t.map(function (e) {
                    return e.shape
                })));
                if (r.length > 0 && i.length > 0 && !b.util.arraysEqual(r, i)) throw new A.ValueError("Input Tensors should have the same number of samples as target Tensors. Found " + r[0] + " input sample(s) and " + i[0] + " target sample(s).")
            }

            function u(e, t, n) {
                for (var r = [E.meanSquaredError, E.binaryCrossentropy, E.categoricalCrossentropy], i = 0; i < e.length; ++i) {
                    var a = e[i], o = t[i], s = n[i];
                    if (null != o) {
                        if (o === E.categoricalCrossentropy && 1 === a.shape[a.shape.length - 1]) throw new A.ValueError("You are passing a target array of shape " + a.shape + " while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].");
                        if (-1 !== r.indexOf(o)) for (var u = a.shape.slice(1), l = s.slice(1), c = 0; c < u.length; ++c) {
                            var p = u[c], h = l[c];
                            if (null != h && p !== h) throw new A.ValueError("A target Tensor with shape " + a.shape + " was passed for an output of shape " + s + ", while using a loss function that expects targets to have the same shape as the output.")
                        }
                    }
                }
            }

            function l(e, t) {
                for (var n = [], r = 0, i = null; r < e;) (i = r + t) >= e && (i = e), n.push([r, i]), r = i;
                return n
            }

            function c(e, t, n) {
                return null == e ? [null] : Array.isArray(e) ? e.map(function (e) {
                    return w.sliceAlongFirstAxis(e, t, n - t)
                }) : w.sliceAlongFirstAxis(e, t, n - t)
            }

            function p(e, t) {
                return null == e ? null : Array.isArray(e) ? e.map(function (e) {
                    return p(e, t)
                }) : w.gather(e, "int32" === t.dtype ? t : t.toInt())
            }

            function h(e, t, n, r, i) {
                void 0 === r && (r = !0), void 0 === i && (i = "");
                var a;
                if (Array.isArray(e)) {
                    if (e.length !== t.length) throw new A.ValueError("Error when checking model " + i + ": the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see " + t.length + " Tensor(s), but instead got " + e.length + " Tensors(s).");
                    a = e
                } else {
                    if (t.length > 1) throw new A.ValueError("The model expects " + t.length + " " + i + " Tensors, but only received one Tensor. Found: array with shape " + JSON.stringify(e.shape) + ".");
                    a = [e]
                }
                if (null != n) for (var o = 0; o < t.length; ++o) if (null != n[o]) {
                    var s = a[o];
                    if (s.shape.length !== n[o].length) throw new A.ValueError("Error when checking " + i + ": expected " + t[o] + " to have " + n[o].length + " dimension(s), but got array with shape " + JSON.stringify(s.shape));
                    for (var u = 0; u < n[o].length; ++u) if (0 !== u || r) {
                        var l = s.shape[u], c = n[o][u];
                        if (null != c && c !== l) throw new A.ValueError("Error when checking " + i + ": expected " + t[o] + " to have shape " + JSON.stringify(n[o]) + " but got array with shape " + JSON.stringify(s.shape) + ".")
                    }
                }
            }

            function d(e, t) {
                if (null == e || Array.isArray(e) && 0 === e.length) return t.map(function (e) {
                    return []
                });
                if (Array.isArray(e)) return t.map(function (t) {
                    return e
                });
                if (null != e) {
                    for (var n = [], r = 0, i = t; r < i.length; r++) {
                        var a = i[r], o = e.hasOwnProperty(a) ? e[a] : [];
                        Array.isArray(o) || (o = [o]), n.push(o)
                    }
                    return n
                }
                throw new TypeError("Type of metrics argument not understood. Expected an Array or Object, found: " + e)
            }

            var f = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), g = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }, m = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, v = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var y = e("@tensorflow/tfjs-core"), b = e("@tensorflow/tfjs-core"), w = e("../backend/tfjs_backend"),
                x = e("../callbacks"), A = e("../errors"), E = e("../losses"), _ = e("../metrics"),
                T = e("../optimizers"), S = e("../utils/generic_utils"), C = e("../utils/math_utils"),
                O = e("./executor"), k = e("./topology");
            n.isDataTensor = r, n.isDataArray = i, n.isDataDict = a, n.standardizeInputData = o, n.checkArrayLengths = s, n.makeBatches = l, n.sliceArraysByIndices = p;
            !function (e) {
                e[e.SILENT = 0] = "SILENT", e[e.VERBOSE = 1] = "VERBOSE"
            }(n.ModelLoggingVerbosity || (n.ModelLoggingVerbosity = {}));
            var N = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return f(t, e), t.prototype.getClassName = function () {
                    return "Model"
                }, t.prototype.compile = function (e) {
                    var t = this;
                    if (null == e.loss && (e.loss = []), this.loss = e.loss, "string" == typeof e.optimizer) this.optimizer = T.getOptimizer(e.optimizer); else {
                        if (!(e.optimizer instanceof b.Optimizer)) throw new A.ValueError("User-defined optimizer must be an instance of tf.Optimizer.");
                        this.optimizer = e.optimizer
                    }
                    var n = [];
                    if (Array.isArray(e.loss) || "string" == typeof e.loss || "function" == typeof e.loss) if (Array.isArray(e.loss)) {
                        if (e.loss.length !== this.outputs.length) throw new A.ValueError("When passing an Array as loss, it should have one entry per model output. The model has " + this.outputs.length + " output(s), but you passed loss=" + e.loss + ".");
                        var r = e.loss;
                        n = r.map(function (e) {
                            return E.get(e)
                        })
                    } else {
                        var i = E.get(e.loss);
                        this.outputs.map(function (e) {
                            n.push(i)
                        })
                    } else {
                        e.loss = e.loss;
                        for (var a in e.loss) if (-1 === this.outputNames.indexOf(a)) throw new A.ValueError('Unknown entry in loss dictionary: "' + a + '". Only expect the following keys: ' + this.outputNames);
                        for (var o in this.outputNames) null == e.loss[o] && console.warn('Output "' + o + '" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ' + o + " during training"), n.push(E.get(e.loss[o]))
                    }
                    this.lossFunctions = n, this.feedOutputNames = [], this.feedOutputShapes = [], this.feedLossFns = [];
                    for (var s = 0; s < this.outputs.length; ++s) {
                        var u = this.internalOutputShapes[s], l = this.outputNames[s];
                        this.feedOutputNames.push(l), this.feedOutputShapes.push(u), this.feedLossFns.push(this.lossFunctions[s])
                    }
                    var c = [];
                    this.metrics = e.metrics, this.metricsNames = ["loss"], this.metricsTensors = [], w.nameScope("loss", function () {
                        for (var e = 0; e < t.outputs.length; ++e) if (-1 === c.indexOf(e)) {
                            var n = t.lossFunctions[e];
                            t.outputs.length > 1 && (t.metricsTensors.push([n, e]), t.metricsNames.push(t.outputNames[e] + "_loss"))
                        }
                    });
                    var p = d(e.metrics, this.outputNames), h = function (e, n, r) {
                        t.outputNames.length > 1 && (n = t.outputNames[e] + "_" + n), t.metricsNames.push(n), t.metricsTensors.push([r, e])
                    };
                    w.nameScope("metric", function () {
                        for (var e = 0; e < t.outputs.length; ++e) !function (e) {
                            if (-1 !== c.indexOf(e)) return "continue";
                            !function (n) {
                                for (var r, i, a, o = 0, s = p[e]; o < s.length; o++) !function (n) {
                                    if (-1 !== ["accuracy", "acc", "crossentropy", "ce"].indexOf(n)) {
                                        var o = t.internalOutputShapes[e];
                                        1 === o[o.length - 1] || t.lossFunctions[e] === E.binaryCrossentropy ? -1 !== ["accuracy", "acc"].indexOf(n) ? i = _.binaryAccuracy : -1 !== ["crossentropy", "ce"].indexOf(n) && (i = _.binaryCrossentropy) : t.lossFunctions[e] === E.sparseCategoricalCrossentropy ? -1 !== ["accuracy", "acc"].indexOf(n) ? i = _.sparseCategoricalAccuracy : -1 !== ["crossentropy", "ce"].indexOf(n) && (i = _.sparseCategoricalCrossentropy) : -1 !== ["accuracy", "acc"].indexOf(n) ? i = _.categoricalAccuracy : -1 !== ["crossentropy", "ce"].indexOf(n) && (i = _.categoricalCrossentropy);
                                        var s = void 0;
                                        -1 !== ["accuracy", "acc"].indexOf(n) ? s = "acc" : -1 !== ["crossentropy", "ce"].indexOf(n) && (s = "ce"), a = i, r = "" + s
                                    } else {
                                        var u = _.get(n);
                                        a = u, r = "" + n
                                    }
                                    var l;
                                    w.nameScope(r, function () {
                                        l = a
                                    }), h(e, r, l)
                                }(s[o])
                            }()
                        }(e)
                    }), this.collectedTrainableWeights = this.trainableWeights
                }, t.prototype.checkTrainableWeightsConsistency = function () {
                    null != this.collectedTrainableWeights && this.trainableWeights.length !== this.collectedTrainableWeights.length && console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")
                }, t.prototype.evaluate = function (e, t, n) {
                    void 0 === n && (n = {});
                    var r = null == n.batchSize ? 32 : n.batchSize, i = this.standardizeUserData(e, t, !0, r),
                        a = i[0].concat(i[1]);
                    this.makeTestFunction();
                    var o = this.testFunction, s = this.testLoop(o, a, r, n.verbose, n.steps);
                    return S.singletonOrArray(s)
                }, t.prototype.checkNumSamples = function (e, t, n, r) {
                    void 0 === r && (r = "steps");
                    var i;
                    if (null != n) {
                        if (i = null, null != t) throw new A.ValueError("If " + r + " is set, batchSize must be null or undefined.Got batchSize = " + t)
                    } else {
                        if (null == e) throw new A.ValueError("Either the input data should have a defined shape, or " + r + " shoud be specified.");
                        i = Array.isArray(e) ? e[0].shape[0] : e.shape[0]
                    }
                    return i
                }, t.prototype.predictLoop = function (e, t, n) {
                    var r = this;
                    void 0 === t && (t = 32), void 0 === n && (n = !1);
                    var i = this.checkNumSamples(e);
                    if (n) throw new A.NotImplementedError("Verbose predictLoop() is not implemented yet.");
                    for (var a = l(i, t), o = [], s = 0; s < a.length; ++s) !function (t) {
                        var n = y.tidy(function () {
                            var n = a[t][0], i = a[t][1], o = c(e, n, i), s = [];
                            if (Array.isArray(o)) for (var u = 0; u < o.length; ++u) s.push({
                                key: r.inputs[u],
                                value: o[u]
                            }); else s.push({key: r.inputs[0], value: o});
                            var l = new O.FeedDict(s);
                            return O.execute(r.outputs, l)
                        });
                        if (0 === t) for (var i = 0, s = n; i < s.length; i++) {
                            var u = s[i];
                            o.push(u)
                        } else for (var l = 0; l < n.length; ++l) o[l] = w.concatAlongFirstAxis(o[l], n[l])
                    }(s);
                    return S.singletonOrArray(o)
                }, t.prototype.predict = function (e, t) {
                    void 0 === t && (t = {}), h(e, this.inputNames, this.feedInputShapes, !1);
                    var n = null == t.batchSize ? 32 : t.batchSize;
                    return this.predictLoop(e, n)
                }, t.prototype.predictOnBatch = function (e) {
                    return h(e, this.inputNames, this.feedInputShapes, !0), this.predictLoop(e, e.shape[0])
                }, t.prototype.standardizeUserData = function (e, t, n, r) {
                    if (void 0 === n && (n = !0), null == this.optimizer) throw new A.RuntimeError("You must compile a model before training/testing. Use Model.compile(modelCompileConfig).");
                    for (var i = [], a = 0; a < this.feedOutputShapes.length; ++a) {
                        var l = this.feedOutputShapes[a];
                        this.feedLossFns[a] === E.sparseCategoricalCrossentropy ? i.push(l.slice(0, l.length - 1).concat([1])) : i.push(l)
                    }
                    if (e = o(e, this.feedInputNames, this.feedInputShapes, !1, "input"), t = o(t, this.feedOutputNames, i, !1, "target"), s(e, t), u(t, this.feedLossFns, this.feedOutputShapes), this.stateful && null != r && r > 0 && e[0].shape[0] % r != 0) throw new A.ValueError("In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size " + r + ". Found: " + e[0].shape[0] + " sample(s).");
                    return [e, t, null]
                }, t.prototype.fitLoop = function (e, t, n, r, i, a, o, s, u, c, h, d, f, g) {
                    return void 0 === d && (d = 0), m(this, void 0, void 0, function () {
                        var m, E, _, T, S, O, k = this;
                        return v(this, function (N) {
                            switch (N.label) {
                                case 0:
                                    if (null == r && (r = 32), null == i && (i = 100), null == c && (c = !0), null == d && (d = 0), m = !1, null != s && null != u && (m = !0), null != g && (m = !0, null == f)) throw new A.ValueError("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");
                                    if (null != (E = this.checkNumSamples(t, r, f, "steps_per_epoch")) && (_ = C.range(0, E)), this.history = new x.History, o = null == o ? [new x.BaseLogger] : [new x.BaseLogger].concat(o), o = o.concat([this.history]), a > 0) throw new A.NotImplementedError("Verbose mode is not implemented yet.");
                                    return (T = new x.CallbackList(o)).setModel(this), T.setParams({
                                        epochs: i,
                                        steps: f,
                                        verbose: a,
                                        doValidation: m,
                                        metrics: h
                                    }), [4, T.onTrainBegin()];
                                case 1:
                                    N.sent(), S = function (i) {
                                        var a, o, h, d, g;
                                        return v(this, function (S) {
                                            switch (S.label) {
                                                case 0:
                                                    return [4, T.onEpochBegin(i)];
                                                case 1:
                                                    if (S.sent(), a = {}, null == f) return [3, 2];
                                                    throw new A.NotImplementedError("stepsPerEpoch mode is not implemented yet.");
                                                case 2:
                                                    if ("batch" === c) throw new A.NotImplementedError("batch shuffling is not implemneted yet");
                                                    c && b.util.shuffle(_), o = b.tensor1d(_), h = l(E, r), d = function (i) {
                                                        var l;
                                                        return v(this, function (c) {
                                                            switch (c.label) {
                                                                case 0:
                                                                    return l = {}, [4, T.onBatchBegin(i, l)];
                                                                case 1:
                                                                    return c.sent(), y.tidy(function () {
                                                                        var c = h[i][0], d = h[i][1],
                                                                            f = w.sliceAlongFirstAxis(o, c, d - c);
                                                                        l.batch = i, l.size = d - c;
                                                                        for (var g = p(t, f), v = e(g), y = 0; y < n.length; ++y) {
                                                                            var b = n[y], x = v[y];
                                                                            l[b] = x, w.keep(x)
                                                                        }
                                                                        if (i === h.length - 1 && m) for (var A = k.testLoop(s, u, r), y = 0; y < n.length; ++y) {
                                                                            var b = n[y], x = A[y];
                                                                            w.keep(x), a["val_" + b] = x
                                                                        }
                                                                    }), [4, T.onBatchEnd(i, l)];
                                                                case 2:
                                                                    return c.sent(), x.disposeTensorsInLogs(l), [2]
                                                            }
                                                        })
                                                    }, g = 0, S.label = 3;
                                                case 3:
                                                    return g < h.length ? [5, d(g)] : [3, 6];
                                                case 4:
                                                    S.sent(), S.label = 5;
                                                case 5:
                                                    return ++g, [3, 3];
                                                case 6:
                                                    o.dispose(), S.label = 7;
                                                case 7:
                                                    return [4, T.onEpochEnd(i, a)];
                                                case 8:
                                                    return S.sent(), [2]
                                            }
                                        })
                                    }, O = d, N.label = 2;
                                case 2:
                                    return O < i ? [5, S(O)] : [3, 5];
                                case 3:
                                    N.sent(), N.label = 4;
                                case 4:
                                    return ++O, [3, 2];
                                case 5:
                                    return [4, T.onTrainEnd()];
                                case 6:
                                    return N.sent(), [4, this.history.syncData()];
                                case 7:
                                    return N.sent(), [2, this.history]
                            }
                        })
                    })
                }, t.prototype.testLoop = function (e, t, n, r, i) {
                    void 0 === r && (r = 0);
                    var a = this.checkNumSamples(t, n, i, "steps"), o = [];
                    if (1 === r) throw new A.NotImplementedError("Verbose mode is not implemented yet.");
                    if (null != i) throw new A.NotImplementedError("steps mode in testLoop() is not implemented yet");
                    for (var s = l(a, n), u = b.tensor1d(C.range(0, a)), c = 0; c < s.length; ++c) {
                        var h = s[c][0], d = s[c][1], f = e(p(t, w.sliceAlongFirstAxis(u, h, d - h)));
                        if (0 === c) for (m = 0; m < f.length; ++m) o.push(w.getScalar(0));
                        for (m = 0; m < f.length; ++m) {
                            var g = f[m];
                            o[m] = w.add(o[m], w.scalarTimesArray(w.getScalar(d - h), g))
                        }
                    }
                    for (var m = 0; m < o.length; ++m) o[m] = w.divide(o[m], w.getScalar(a));
                    return o
                }, t.prototype.getDedupedMetricsNames = function () {
                    for (var e = this.metricsNames, t = [], n = 0; n < e.length; ++n) {
                        var r = e[n], i = r;
                        S.count(e, r) > 1 && (i += "_" + S.count(e.slice(0, n), r)), t.push(i)
                    }
                    return t
                }, t.prototype.makeTestFunction = function () {
                    var e = this;
                    this.testFunction = function (t) {
                        return y.tidy(function () {
                            for (var n, r = [], i = t.slice(0, e.inputs.length), a = t.slice(e.inputs.length, e.inputs.length + e.outputs.length), o = [], s = 0; s < e.inputs.length; ++s) o.push({
                                key: e.inputs[s],
                                value: i[s]
                            });
                            for (var u = new O.FeedDict(o), l = O.execute(e.outputs, u), s = 0; s < e.lossFunctions.length; ++s) {
                                var c = e.lossFunctions[s], p = w.mean(c(a[s], l[s]));
                                n = 0 === s ? p : w.add(n, p), r.push(n)
                            }
                            for (s = 0; s < e.metricsTensors.length; ++s) {
                                var h = e.metricsTensors[s][0], d = e.metricsTensors[s][1], f = w.mean(h(a[d], l[d]));
                                r.push(f)
                            }
                            return r
                        })
                    }
                }, t.prototype.fit = function (e, t, n) {
                    return void 0 === n && (n = {}), m(this, void 0, void 0, function () {
                        var r, i, a, o, s, u, l, p, h, d, f, g, m, y, b, E, _, T = this;
                        return v(this, function (v) {
                            if (r = null == n.batchSize ? 32 : n.batchSize, i = this.standardizeUserData(e, t, !1, r), a = i[0], o = i[1], s = !1, null != n.validationData && n.validationData.length > 0) {
                                if (s = !0, 2 !== n.validationData.length) throw 3 === n.validationData.length ? new A.NotImplementedError("validationData including sample weights is not supported yet.") : new A.ValueError("When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; " + n.validationData + " is invalid.");
                                u = n.validationData[0], l = n.validationData[1], h = this.standardizeUserData(u, l, !0, r), u = h[0], l = h[1], p = u.concat(l)
                            } else null != n.validationSplit && n.validationSplit > 0 && n.validationSplit < 1 ? (s = !0, d = Math.floor(a[0].shape[0] * (1 - n.validationSplit)), f = a[0].shape[0], u = c(a, d, f), a = c(a, 0, d), l = c(o, d, f), o = c(o, 0, d), p = u.concat(l)) : null != n.validationSteps && (s = !0);
                            return g = a.concat(o), this.checkTrainableWeightsConsistency(), m = function (e) {
                                var t = [], n = [], r = e.slice(0, T.inputs.length),
                                    i = e.slice(T.inputs.length, T.inputs.length + T.outputs.length), a = [],
                                    o = T.collectedTrainableWeights.map(function (e) {
                                        return e.read()
                                    });
                                return [T.optimizer.minimize(function () {
                                    for (var e = [], o = 0; o < T.inputs.length; ++o) e.push({
                                        key: T.inputs[o],
                                        value: r[o]
                                    });
                                    for (var s, u = new O.FeedDict(e), l = O.execute(T.outputs, u, {training: !0}), o = 0; o < T.lossFunctions.length; ++o) {
                                        var c = (0, T.lossFunctions[o])(i[o], l[o]);
                                        t.push(c);
                                        var p = w.mean(c);
                                        n.push(p), s = 0 === o ? c : w.add(s, c)
                                    }
                                    for (o = 0; o < T.metricsTensors.length; ++o) {
                                        var h = T.metricsTensors[o][0], d = T.metricsTensors[o][1],
                                            f = w.mean(h(i[d], l[d]));
                                        w.keep(f), a.push(f)
                                    }
                                    return s = w.mean(s), T.calculateLosses().forEach(function (e) {
                                        s = w.add(s, e)
                                    }), s
                                }, !0, o)].concat(a)
                            }, y = this.getDedupedMetricsNames(), s ? (this.makeTestFunction(), b = this.testFunction, E = y.slice().concat(y.map(function (e) {
                                return "val_" + e
                            }))) : (b = null, p = [], E = y.slice()), _ = x.standardizeCallbacks(n.callbacks), [2, this.fitLoop(m, g, y, r, n.epochs, n.verbose, _, b, p, n.shuffle, E, null, null, null)]
                        })
                    })
                }, g([b.doc({
                    heading: "Models",
                    subheading: "Classes",
                    configParamIndices: [0]
                })], t.prototype, "compile", null), g([b.doc({
                    heading: "Models",
                    subheading: "Classes",
                    configParamIndices: [2]
                })], t.prototype, "evaluate", null), g([b.doc({
                    heading: "Models",
                    subheading: "Classes",
                    configParamIndices: [1]
                })], t.prototype, "predict", null), g([b.doc({
                    heading: "Models",
                    subheading: "Classes"
                })], t.prototype, "predictOnBatch", null), g([b.doc({
                    heading: "Models",
                    subheading: "Classes",
                    configParamIndices: [2]
                })], t.prototype, "fit", null), t = g([b.doc({heading: "Models", subheading: "Classes"})], t)
            }(k.Container);
            n.Model = N, S.ClassNameMap.register("Model", N)
        }, {
            "../backend/tfjs_backend": 100,
            "../callbacks": 101,
            "../errors": 107,
            "../losses": 123,
            "../metrics": 124,
            "../optimizers": 126,
            "../utils/generic_utils": 130,
            "../utils/math_utils": 131,
            "./executor": 104,
            "./topology": 105,
            "@tensorflow/tfjs-core": 8
        }],
        107: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = function (e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return Object.setPrototypeOf(r, t.prototype), r
                }

                return r(t, e), t
            }(Error);
            n.AttributeError = i;
            var a = function (e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return Object.setPrototypeOf(r, t.prototype), r
                }

                return r(t, e), t
            }(Error);
            n.RuntimeError = a;
            var o = function (e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return Object.setPrototypeOf(r, t.prototype), r
                }

                return r(t, e), t
            }(Error);
            n.ValueError = o;
            var s = function (e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return Object.setPrototypeOf(r, t.prototype), r
                }

                return r(t, e), t
            }(Error);
            n.NotImplementedError = s;
            var u = function (e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return Object.setPrototypeOf(r, t.prototype), r
                }

                return r(t, e), t
            }(Error);
            n.AssertionError = u;
            var l = function (e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return Object.setPrototypeOf(r, t.prototype), r
                }

                return r(t, e), t
            }(Error);
            n.IndexError = l
        }, {}],
        108: [function (e, t, n) {
            "use strict";
            var r = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("@tensorflow/tfjs-core"), a = e("./constraints"), o = e("./engine/topology"),
                s = e("./engine/training"), u = e("./initializers"), l = e("./layers/advanced_activations"),
                c = e("./layers/convolutional"), p = e("./layers/convolutional_depthwise"), h = e("./layers/core"),
                d = e("./layers/embeddings"), f = e("./layers/merge"), g = e("./layers/normalization"),
                m = e("./layers/padding"), v = e("./layers/pooling"), y = e("./layers/recurrent"),
                b = e("./layers/wrappers"), w = e("./losses"), x = e("./metrics"), A = e("./models"),
                E = e("./regularizers"), _ = function () {
                    function e() {
                    }

                    return e.model = function (e) {
                        return new s.Model(e)
                    }, e.sequential = function (e) {
                        return new A.Sequential(e)
                    }, e.loadModel = function (e) {
                        return A.loadModelInternal(e)
                    }, e.input = function (e) {
                        return o.Input(e)
                    }, r([i.doc({
                        heading: "Models",
                        subheading: "Creation",
                        configParamIndices: [0]
                    })], e, "model", null), r([i.doc({
                        heading: "Models",
                        subheading: "Creation",
                        configParamIndices: [0]
                    })], e, "sequential", null), r([i.doc({
                        heading: "Models",
                        subheading: "Loading",
                        useDocsFrom: "loadModelInternal"
                    })], e, "loadModel", null), r([i.doc({
                        heading: "Models",
                        subheading: "Inputs",
                        useDocsFrom: "Input",
                        configParamIndices: [0]
                    })], e, "input", null), e
                }();
            n.ModelExports = _;
            var T = function () {
                function e() {
                }

                return e.inputLayer = function (e) {
                    return new o.InputLayer(e)
                }, e.elu = function (e) {
                    return new l.ELU(e)
                }, e.leakyReLU = function (e) {
                    return new l.LeakyReLU(e)
                }, e.softmax = function (e) {
                    return new l.Softmax(e)
                }, e.thresholdedReLU = function (e) {
                    return new l.ThresholdedReLU(e)
                }, e.conv1d = function (e) {
                    return new c.Conv1D(e)
                }, e.conv2d = function (e) {
                    return new c.Conv2D(e)
                }, e.conv2dTranspose = function (e) {
                    return new c.Conv2DTranspose(e)
                }, e.separableConv2d = function (e) {
                    return new c.SeparableConv2D(e)
                }, e.depthwiseConv2d = function (e) {
                    return new p.DepthwiseConv2D(e)
                }, e.activation = function (e) {
                    return new h.Activation(e)
                }, e.dense = function (e) {
                    return new h.Dense(e)
                }, e.dropout = function (e) {
                    return new h.Dropout(e)
                }, e.flatten = function (e) {
                    return new h.Flatten(e)
                }, e.repeatVector = function (e) {
                    return new h.RepeatVector(e)
                }, e.reshape = function (e) {
                    return new h.Reshape(e)
                }, e.embedding = function (e) {
                    return new d.Embedding(e)
                }, e.add = function (e) {
                    return new f.Add(e)
                }, e.average = function (e) {
                    return new f.Average(e)
                }, e.concatenate = function (e) {
                    return new f.Concatenate(e)
                }, e.maximum = function (e) {
                    return new f.Maximum(e)
                }, e.minimum = function (e) {
                    return new f.Minimum(e)
                }, e.multiply = function (e) {
                    return new f.Multiply(e)
                }, e.batchNormalization = function (e) {
                    return new g.BatchNormalization(e)
                }, e.zeroPadding2d = function (e) {
                    return new m.ZeroPadding2D(e)
                }, e.averagePooling1d = function (e) {
                    return new v.AveragePooling1D(e)
                }, e.avgPool1d = function (t) {
                    return e.averagePooling1d(t)
                }, e.avgPooling1d = function (t) {
                    return e.averagePooling1d(t)
                }, e.averagePooling2d = function (e) {
                    return new v.AveragePooling2D(e)
                }, e.avgPool2d = function (t) {
                    return e.averagePooling2d(t)
                }, e.avgPooling2d = function (t) {
                    return e.averagePooling2d(t)
                }, e.globalAveragePooling1d = function (e) {
                    return new v.GlobalAveragePooling1D(e)
                }, e.globalAveragePooling2d = function (e) {
                    return new v.GlobalAveragePooling2D(e)
                }, e.globalMaxPooling1d = function (e) {
                    return new v.GlobalMaxPooling1D(e)
                }, e.globalMaxPooling2d = function (e) {
                    return new v.GlobalMaxPooling2D(e)
                }, e.maxPooling1d = function (e) {
                    return new v.MaxPooling1D(e)
                }, e.maxPooling2d = function (e) {
                    return new v.MaxPooling2D(e)
                }, e.gru = function (e) {
                    return new y.GRU(e)
                }, e.gruCell = function (e) {
                    return new y.GRUCell(e)
                }, e.lstm = function (e) {
                    return new y.LSTM(e)
                }, e.lstmCell = function (e) {
                    return new y.LSTMCell(e)
                }, e.simpleRNN = function (e) {
                    return new y.SimpleRNN(e)
                }, e.simpleRNNCell = function (e) {
                    return new y.SimpleRNNCell(e)
                }, e.rnn = function (e) {
                    return new y.RNN(e)
                }, e.stackedRNNCells = function (e) {
                    return new y.StackedRNNCells(e)
                }, e.bidirectional = function (e) {
                    return new b.Bidirectional(e)
                }, e.timeDistributed = function (e) {
                    return new b.TimeDistributed(e)
                }, e.Layer = o.Layer, e.RNNCell = y.RNNCell, e.input = _.input, r([i.doc({
                    heading: "Layers",
                    subheading: "Inputs",
                    namespace: "layers",
                    useDocsFrom: "InputLayer",
                    configParamIndices: [0]
                })], e, "inputLayer", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Advanced Activation",
                    namespace: "layers",
                    useDocsFrom: "ELU",
                    configParamIndices: [0]
                })], e, "elu", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Advanced Activation",
                    namespace: "layers",
                    useDocsFrom: "LeakyReLU",
                    configParamIndices: [0]
                })], e, "leakyReLU", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Advanced Activation",
                    namespace: "layers",
                    useDocsFrom: "Softmax",
                    configParamIndices: [0]
                })], e, "softmax", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Advanced Activation",
                    namespace: "layers",
                    useDocsFrom: "ThresholdedReLU",
                    configParamIndices: [0]
                })], e, "thresholdedReLU", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Convolutional",
                    namespace: "layers",
                    useDocsFrom: "Conv1D",
                    configParamIndices: [0]
                })], e, "conv1d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Convolutional",
                    namespace: "layers",
                    useDocsFrom: "Conv2D",
                    configParamIndices: [0]
                })], e, "conv2d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Convolutional",
                    namespace: "layers",
                    useDocsFrom: "Conv2DTranspose",
                    configParamIndices: [0]
                })], e, "conv2dTranspose", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Convolutional",
                    namespace: "layers",
                    useDocsFrom: "SeparableConv2D",
                    configParamIndices: [0]
                })], e, "separableConv2d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Convolutional",
                    namespace: "layers",
                    useDocsFrom: "DepthwiseConv2D",
                    configParamIndices: [0]
                })], e, "depthwiseConv2d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Basic",
                    namespace: "layers",
                    useDocsFrom: "Activation",
                    configParamIndices: [0]
                })], e, "activation", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Basic",
                    namespace: "layers",
                    useDocsFrom: "Dense",
                    configParamIndices: [0]
                })], e, "dense", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Basic",
                    namespace: "layers",
                    useDocsFrom: "Dropout",
                    configParamIndices: [0]
                })], e, "dropout", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Basic",
                    namespace: "layers",
                    useDocsFrom: "Flatten",
                    configParamIndices: [0]
                })], e, "flatten", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Basic",
                    namespace: "layers",
                    useDocsFrom: "RepeatVector",
                    configParamIndices: [0]
                })], e, "repeatVector", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Basic",
                    namespace: "layers",
                    useDocsFrom: "Reshape",
                    configParamIndices: [0]
                })], e, "reshape", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Basic",
                    namespace: "layers",
                    useDocsFrom: "Embedding",
                    configParamIndices: [0]
                })], e, "embedding", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Merge",
                    namespace: "layers",
                    useDocsFrom: "Add",
                    configParamIndices: [0]
                })], e, "add", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Merge",
                    namespace: "layers",
                    useDocsFrom: "Average",
                    configParamIndices: [0]
                })], e, "average", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Merge",
                    namespace: "layers",
                    useDocsFrom: "Concatenate",
                    configParamIndices: [0]
                })], e, "concatenate", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Merge",
                    namespace: "layers",
                    useDocsFrom: "Maximum",
                    configParamIndices: [0]
                })], e, "maximum", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Merge",
                    namespace: "layers",
                    useDocsFrom: "Minimum",
                    configParamIndices: [0]
                })], e, "minimum", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Merge",
                    namespace: "layers",
                    useDocsFrom: "Multiply",
                    configParamIndices: [0]
                })], e, "multiply", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Normalization",
                    namespace: "layers",
                    useDocsFrom: "BatchNormalization",
                    configParamIndices: [0]
                })], e, "batchNormalization", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Padding",
                    namespace: "layers",
                    useDocsFrom: "ZeroPadding2D",
                    configParamIndices: [0]
                })], e, "zeroPadding2d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Pooling",
                    namespace: "layers",
                    useDocsFrom: "AveragePooling1D",
                    configParamIndices: [0]
                })], e, "averagePooling1d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Pooling",
                    namespace: "layers",
                    useDocsFrom: "AveragePooling2D",
                    configParamIndices: [0]
                })], e, "averagePooling2d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Pooling",
                    namespace: "layers",
                    useDocsFrom: "GlobalAveragePooling1D",
                    configParamIndices: [0]
                })], e, "globalAveragePooling1d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Pooling",
                    namespace: "layers",
                    useDocsFrom: "GlobalAveragePooling2D",
                    configParamIndices: [0]
                })], e, "globalAveragePooling2d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Pooling",
                    namespace: "layers",
                    useDocsFrom: "GlobalMaxPooling1D",
                    configParamIndices: [0]
                })], e, "globalMaxPooling1d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Pooling",
                    namespace: "layers",
                    useDocsFrom: "GlobalMaxPooling2D",
                    configParamIndices: [0]
                })], e, "globalMaxPooling2d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Pooling",
                    namespace: "layers",
                    useDocsFrom: "MaxPooling1D",
                    configParamIndices: [0]
                })], e, "maxPooling1d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Pooling",
                    namespace: "layers",
                    useDocsFrom: "MaxPooling2D",
                    configParamIndices: [0]
                })], e, "maxPooling2d", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Recurrent",
                    namespace: "layers",
                    useDocsFrom: "GRU",
                    configParamIndices: [0]
                })], e, "gru", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Recurrent",
                    namespace: "layers",
                    useDocsFrom: "GRUCell",
                    configParamIndices: [0]
                })], e, "gruCell", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Recurrent",
                    namespace: "layers",
                    useDocsFrom: "LSTM",
                    configParamIndices: [0]
                })], e, "lstm", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Recurrent",
                    namespace: "layers",
                    useDocsFrom: "LSTMCell",
                    configParamIndices: [0]
                })], e, "lstmCell", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Recurrent",
                    namespace: "layers",
                    useDocsFrom: "SimpleRNN",
                    configParamIndices: [0]
                })], e, "simpleRNN", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Recurrent",
                    namespace: "layers",
                    useDocsFrom: "SimpleRNNCell",
                    configParamIndices: [0]
                })], e, "simpleRNNCell", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Recurrent",
                    namespace: "layers",
                    useDocsFrom: "RNN",
                    configParamIndices: [0]
                })], e, "rnn", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Recurrent",
                    namespace: "layers",
                    useDocsFrom: "RNN",
                    configParamIndices: [0]
                })], e, "stackedRNNCells", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Wrapper",
                    namespace: "layers",
                    useDocsFrom: "Bidirectional",
                    configParamIndices: [0]
                })], e, "bidirectional", null), r([i.doc({
                    heading: "Layers",
                    subheading: "Wrapper",
                    namespace: "layers",
                    useDocsFrom: "TimeDistributed",
                    configParamIndices: [0]
                })], e, "timeDistributed", null), e
            }();
            n.LayerExports = T;
            var S = function () {
                function e() {
                }

                return e.maxNorm = function (e) {
                    return new a.MaxNorm(e)
                }, e.unitNorm = function (e) {
                    return new a.UnitNorm(e)
                }, e.nonNeg = function () {
                    return new a.NonNeg
                }, e.minMaxNorm = function (e) {
                    return new a.MinMaxNorm(e)
                }, r([i.doc({
                    heading: "Constraints",
                    namespace: "constraints",
                    useDocsFrom: "MaxNorm",
                    configParamIndices: [0]
                })], e, "maxNorm", null), r([i.doc({
                    heading: "Constraints",
                    namespace: "constraints",
                    useDocsFrom: "UnitNorm",
                    configParamIndices: [0]
                })], e, "unitNorm", null), r([i.doc({
                    heading: "Constraints",
                    namespace: "constraints",
                    useDocsFrom: "NonNeg"
                })], e, "nonNeg", null), r([i.doc({
                    heading: "Constraints",
                    namespace: "constraints",
                    useDocsFrom: "MinMaxNormConfig",
                    configParamIndices: [0]
                })], e, "minMaxNorm", null), e
            }();
            n.ConstraintExports = S;
            var C = function () {
                function e() {
                }

                return e.zeros = function () {
                    return new u.Zeros
                }, e.ones = function () {
                    return new u.Ones
                }, e.constant = function (e) {
                    return new u.Constant(e)
                }, e.randomUniform = function (e) {
                    return new u.RandomUniform(e)
                }, e.randomNormal = function (e) {
                    return new u.RandomNormal(e)
                }, e.truncatedNormal = function (e) {
                    return new u.TruncatedNormal(e)
                }, e.identity = function (e) {
                    return new u.Identity(e)
                }, e.varianceScaling = function (e) {
                    return new u.VarianceScaling(e)
                }, e.glorotUniform = function (e) {
                    return new u.GlorotUniform(e)
                }, e.glorotNormal = function (e) {
                    return new u.GlorotNormal(e)
                }, e.heNormal = function (e) {
                    return new u.HeNormal(e)
                }, e.leCunNormal = function (e) {
                    return new u.LeCunNormal(e)
                }, e.orthogonal = function (e) {
                    return new u.Orthogonal(e)
                }, r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "Zeros"
                })], e, "zeros", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "Ones"
                })], e, "ones", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "Constant",
                    configParamIndices: [0]
                })], e, "constant", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "RandomUniform",
                    configParamIndices: [0]
                })], e, "randomUniform", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "RandomNormal",
                    configParamIndices: [0]
                })], e, "randomNormal", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "TruncatedNormal",
                    configParamIndices: [0]
                })], e, "truncatedNormal", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "Identity",
                    configParamIndices: [0]
                })], e, "identity", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "VarianceScaling",
                    configParamIndices: [0]
                })], e, "varianceScaling", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "GlorotUniform",
                    configParamIndices: [0]
                })], e, "glorotUniform", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "GlorotNormal",
                    configParamIndices: [0]
                })], e, "glorotNormal", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "HeNormal",
                    configParamIndices: [0]
                })], e, "heNormal", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "LeCunNormal",
                    configParamIndices: [0]
                })], e, "leCunNormal", null), r([i.doc({
                    heading: "Initializers",
                    namespace: "initializers",
                    useDocsFrom: "Orthogonal",
                    configParamIndices: [0]
                })], e, "orthogonal", null), e
            }();
            n.InitializerExports = C;
            var O = function () {
                function e() {
                }

                return e.binaryAccuracy = function (e, t) {
                    return x.binaryAccuracy(e, t)
                }, e.binaryCrossentropy = function (e, t) {
                    return x.binaryCrossentropy(e, t)
                }, e.categoricalAccuracy = function (e, t) {
                    return x.categoricalAccuracy(e, t)
                }, e.categoricalCrossentropy = function (e, t) {
                    return w.categoricalCrossentropy(e, t)
                }, e.cosineProximity = function (e, t) {
                    return w.cosineProximity(e, t)
                }, e.prototype.meanAbsoluteError = function (e, t) {
                    return w.meanAbsoluteError(e, t)
                }, e.prototype.meanAbsolutePercentageError = function (e, t) {
                    return w.meanAbsolutePercentageError(e, t)
                }, e.prototype.MAPE = function (e, t) {
                    return w.meanAbsolutePercentageError(e, t)
                }, e.prototype.mape = function (e, t) {
                    return w.meanAbsolutePercentageError(e, t)
                }, e.meanSquaredError = function (e, t) {
                    return w.meanSquaredError(e, t)
                }, e.MSE = function (e, t) {
                    return w.meanSquaredError(e, t)
                }, e.mse = function (e, t) {
                    return w.meanSquaredError(e, t)
                }, r([i.doc({
                    heading: "Metrics",
                    namespace: "metrics",
                    useDocsFrom: "meanAbsoluteError"
                })], e.prototype, "meanAbsoluteError", null), r([i.doc({
                    heading: "Metrics",
                    namespace: "metrics",
                    useDocsFrom: "meanAbsolutePercentageError"
                })], e.prototype, "meanAbsolutePercentageError", null), r([i.doc({
                    heading: "Metrics",
                    namespace: "metrics",
                    useDocsFrom: "binaryAccuracy"
                })], e, "binaryAccuracy", null), r([i.doc({
                    heading: "Metrics",
                    namespace: "metrics",
                    useDocsFrom: "binaryCrossentropy"
                })], e, "binaryCrossentropy", null), r([i.doc({
                    heading: "Metrics",
                    namespace: "metrics",
                    useDocsFrom: "categoricalAccuracy"
                })], e, "categoricalAccuracy", null), r([i.doc({
                    heading: "Metrics",
                    namespace: "metrics",
                    useDocsFrom: "categoricalCrossentropy"
                })], e, "categoricalCrossentropy", null), r([i.doc({
                    heading: "Metrics",
                    namespace: "metrics",
                    useDocsFrom: "cosineProximity"
                })], e, "cosineProximity", null), r([i.doc({
                    heading: "Metrics",
                    namespace: "metrics",
                    useDocsFrom: "meanSquaredError"
                })], e, "meanSquaredError", null), e
            }();
            n.MetricExports = O;
            var k = function () {
                function e() {
                }

                return e.l1l2 = function (e) {
                    return new E.L1L2(e)
                }, e.l1 = function (e) {
                    return E.l1(e)
                }, e.l2 = function (e) {
                    return E.l2(e)
                }, r([i.doc({
                    heading: "Regularizers",
                    namespace: "regularizers",
                    useDocsFrom: "L1L2"
                })], e, "l1l2", null), r([i.doc({
                    heading: "Regularizers",
                    namespace: "regularizers",
                    useDocsFrom: "L1L2"
                })], e, "l1", null), r([i.doc({
                    heading: "Regularizers",
                    namespace: "regularizers",
                    useDocsFrom: "L1L2"
                })], e, "l2", null), e
            }();
            n.RegularizerExports = k
        }, {
            "./constraints": 103,
            "./engine/topology": 105,
            "./engine/training": 106,
            "./initializers": 110,
            "./layers/advanced_activations": 111,
            "./layers/convolutional": 112,
            "./layers/convolutional_depthwise": 113,
            "./layers/core": 114,
            "./layers/embeddings": 115,
            "./layers/merge": 116,
            "./layers/normalization": 117,
            "./layers/padding": 118,
            "./layers/pooling": 119,
            "./layers/recurrent": 120,
            "./layers/wrappers": 122,
            "./losses": 123,
            "./metrics": 124,
            "./models": 125,
            "./regularizers": 127,
            "@tensorflow/tfjs-core": 8
        }],
        109: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("./backend/tfjs_backend");
            n.backend = r;
            var i = e("./exports"), a = e("./callbacks");
            n.Callback = a.Callback, n.CallbackList = a.CallbackList, n.CustomCallback = a.CustomCallback;
            var o = e("./engine/training");
            n.Model = o.Model;
            var s = e("./layers/recurrent");
            n.RNN = s.RNN;
            var u = e("./models");
            n.Sequential = u.Sequential;
            var l = e("./types");
            n.SymbolicTensor = l.SymbolicTensor;
            var c = e("./version");
            n.version_layers = c.version, n.model = i.ModelExports.model, n.sequential = i.ModelExports.sequential, n.loadModel = i.ModelExports.loadModel, n.input = i.ModelExports.input, n.layers = i.LayerExports, n.constraints = i.ConstraintExports, n.initializers = i.InitializerExports, n.metrics = i.MetricExports, n.regularizers = i.RegularizerExports
        }, {
            "./backend/tfjs_backend": 100,
            "./callbacks": 101,
            "./engine/training": 106,
            "./exports": 108,
            "./layers/recurrent": 120,
            "./models": 125,
            "./types": 128,
            "./version": 133
        }],
        110: [function (e, t, n) {
            "use strict";

            function r(e) {
                if (null != e && n.VALID_FAN_MODE_VALUES.indexOf(e) < 0) throw new h.ValueError(e + " is not a valid FanMode.  Valid values as " + n.VALID_FAN_MODE_VALUES)
            }

            function i(e) {
                if (null != e && n.VALID_DISTRIBUTION_VALUES.indexOf(e) < 0) throw new h.ValueError(e + " is not a valid Distribution.  Valid values as " + n.VALID_DISTRIBUTION_VALUES)
            }

            function a(e, t) {
                void 0 === t && (t = "channelsLast");
                var n, r;
                if (p.checkDataFormat(t), 2 === e.length) n = e[0], r = e[1]; else if (-1 !== [3, 4, 5].indexOf(e.length)) {
                    if ("channelsFirst" === t) {
                        i = g.arrayProd(e, 2);
                        n = e[1] * i, r = e[0] * i
                    } else if ("channelsLast" === t) {
                        var i = g.arrayProd(e, 0, e.length - 2);
                        n = e[e.length - 2] * i, r = e[e.length - 1] * i
                    }
                } else {
                    var a = g.arrayProd(e);
                    n = Math.sqrt(a), r = Math.sqrt(a)
                }
                return [n, r]
            }

            function o(e, t) {
                return void 0 === t && (t = {}), f.deserializeKerasObject(e, f.ClassNameMap.getMap().pythonClassNameMap, t, "initializer")
            }

            var s = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), u = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var l = e("@tensorflow/tfjs-core"), c = e("./backend/tfjs_backend"), p = e("./common"), h = e("./errors"),
                d = e("./types"), f = e("./utils/generic_utils"), g = e("./utils/math_utils");
            f.SerializableEnumRegistry.register("mode", {
                fan_in: "fanIn",
                fan_out: "fanOut",
                fan_avg: "fanAvg"
            }), n.VALID_FAN_MODE_VALUES = ["fanIn", "fanOut", "fanAvg", void 0, null], n.checkFanMode = r, f.SerializableEnumRegistry.register("distribution", {
                normal: "normal",
                uniform: "uniform"
            }), n.VALID_DISTRIBUTION_VALUES = ["normal", "uniform", void 0, null], n.checkDistribution = i;
            var m = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return s(t, e), t.fromConfig = function (e, t) {
                    return new e(t)
                }, t.prototype.fromConfigUsesCustomObjects = function () {
                    return !1
                }, t.prototype.getConfig = function () {
                    return {}
                }, t = u([l.doc({heading: "Initializers", subheading: "Classes", namespace: "initializers"})], t)
            }(d.Serializable);
            n.Initializer = m;
            var v = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return s(t, e), t.prototype.getClassName = function () {
                    return "Zeros"
                }, t.prototype.apply = function (e, t) {
                    return c.zeros(e, t)
                }, t
            }(m);
            n.Zeros = v, f.ClassNameMap.register("Zeros", v);
            var y = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return s(t, e), t.prototype.getClassName = function () {
                    return "Ones"
                }, t.prototype.apply = function (e, t) {
                    return c.ones(e, t)
                }, t
            }(m);
            n.Ones = y, f.ClassNameMap.register("Ones", y);
            var b = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.value = t.value, n
                }

                return s(t, e), t.prototype.apply = function (e, t) {
                    return c.scalarTimesArray(l.scalar(this.value), c.ones(e, t))
                }, t.prototype.getClassName = function () {
                    return "Constant"
                }, t.prototype.getConfig = function () {
                    return {value: this.value}
                }, t
            }(m);
            n.Constant = b, f.ClassNameMap.register("Constant", b);
            var w = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.DEFAULT_MINVAL = -.05, n.DEFAULT_MAXVAL = .05, n.minval = t.minval || n.DEFAULT_MINVAL, n.maxval = t.maxval || n.DEFAULT_MAXVAL, n.seed = t.seed, n
                }

                return s(t, e), t.prototype.apply = function (e, t) {
                    return c.randomUniform(e, this.minval, this.maxval, t, this.seed)
                }, t.prototype.getClassName = function () {
                    return "RandomUniform"
                }, t.prototype.getConfig = function () {
                    return {minval: this.minval, maxval: this.maxval, seed: this.seed}
                }, t
            }(m);
            n.RandomUniform = w, f.ClassNameMap.register("RandomUniform", w);
            var x = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.DEFAULT_MEAN = 0, n.DEFAULT_STDDEV = .05, n.mean = t.mean || n.DEFAULT_MEAN, n.stddev = t.stddev || n.DEFAULT_STDDEV, n.seed = t.seed, n
                }

                return s(t, e), t.prototype.apply = function (e, t) {
                    return c.randomNormal(e, this.mean, this.stddev, t, this.seed)
                }, t.prototype.getClassName = function () {
                    return "RandomNormal"
                }, t.prototype.getConfig = function () {
                    return {mean: this.mean, stddev: this.stddev, seed: this.seed}
                }, t
            }(m);
            n.RandomNormal = x, f.ClassNameMap.register("RandomNormal", x);
            var A = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.DEFAULT_MEAN = 0, n.DEFAULT_STDDEV = .05, n.mean = t.mean || n.DEFAULT_MEAN, n.stddev = t.stddev || n.DEFAULT_STDDEV, n.seed = t.seed, n
                }

                return s(t, e), t.prototype.apply = function (e, t) {
                    return c.truncatedNormal(e, this.mean, this.stddev, t, this.seed)
                }, t.prototype.getClassName = function () {
                    return "TruncatedNormal"
                }, t.prototype.getConfig = function () {
                    return {mean: this.mean, stddev: this.stddev, seed: this.seed}
                }, t
            }(m);
            n.TruncatedNormal = A, f.ClassNameMap.register("TruncatedNormal", A);
            var E = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.gain = null != t.gain ? l.scalar(t.gain) : c.getScalar(1), n
                }

                return s(t, e), t.prototype.apply = function (e, t) {
                    if (2 !== e.length || e[0] !== e[1]) throw new h.ValueError("Identity matrix initializer can only be used for 2D square matrices.");
                    return c.scalarTimesArray(this.gain, c.eye(e[0]))
                }, t.prototype.getClassName = function () {
                    return "Identity"
                }, t.prototype.getConfig = function () {
                    return {gain: this.gain.get()}
                }, t
            }(m);
            n.Identity = E, f.ClassNameMap.register("Identity", E);
            var _ = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    if (t.scale < 0) throw new h.ValueError("scale must be a positive float. Got: " + t.scale);
                    return n.scale = null == t.scale ? 1 : t.scale, n.mode = t.mode, r(n.mode), n.distribution = t.distribution, i(n.distribution), n.seed = t.seed, n
                }

                return s(t, e), t.prototype.apply = function (e, t) {
                    var n = a(e), r = n[0], i = n[1], o = this.scale;
                    if ("fanIn" === this.mode ? o /= Math.max(1, r) : "fanOut" === this.mode ? o /= Math.max(1, i) : o /= Math.max(1, (r + i) / 2), "normal" === this.distribution) {
                        var s = Math.sqrt(o);
                        return c.truncatedNormal(e, 0, s, t, this.seed)
                    }
                    var u = Math.sqrt(3 * o);
                    return c.randomUniform(e, -u, u, t, this.seed)
                }, t.prototype.getClassName = function () {
                    return "VarianceScaling"
                }, t.prototype.getConfig = function () {
                    return {scale: this.scale, mode: this.mode, distribution: this.distribution, seed: this.seed}
                }, t
            }(m);
            n.VarianceScaling = _, f.ClassNameMap.register("VarianceScaling", _);
            var T = function (e) {
                function t(t) {
                    return e.call(this, {scale: 1, mode: "fanAvg", distribution: "uniform", seed: t.seed}) || this
                }

                return s(t, e), t
            }(_);
            n.GlorotUniform = T, f.ClassNameMap.register("GlorotUniform", T);
            var S = function (e) {
                function t(t) {
                    return e.call(this, {scale: 1, mode: "fanAvg", distribution: "normal", seed: t.seed}) || this
                }

                return s(t, e), t
            }(_);
            n.GlorotNormal = S, f.ClassNameMap.register("GlorotNormal", S);
            var C = function (e) {
                function t(t) {
                    return e.call(this, {scale: 2, mode: "fanIn", distribution: "normal", seed: t.seed}) || this
                }

                return s(t, e), t
            }(_);
            n.HeNormal = C, f.ClassNameMap.register("HeNormal", C);
            var O = function (e) {
                function t(t) {
                    return e.call(this, {scale: 1, mode: "fanIn", distribution: "normal", seed: t.seed}) || this
                }

                return s(t, e), t
            }(_);
            n.LeCunNormal = O, f.ClassNameMap.register("LeCunNormal", O);
            var k = function (e) {
                function t(t) {
                    var n = e.call(this) || this;
                    if (n.DEFAULT_GAIN = 1, n.gain = null == t.gain ? n.DEFAULT_GAIN : t.gain, n.seed = t.seed, null != n.seed) throw new h.NotImplementedError("Random seed is not implemented for Orthogonal Initializer yet.");
                    return n
                }

                return s(t, e), t.prototype.apply = function (e, t) {
                    if (2 !== e.length) throw new h.NotImplementedError("The Orthogonal Initializer does not support non-2D shapes yet.");
                    var n = e[0] >= e[1] ? e : [e[1], e[0]], r = c.randomNormal(n, 0, 1, d.DType.float32),
                        i = c.qr(r)[0];
                    return i.shape[1] > n[1] && (i = i.slice([0, 0], n)), e[0] < e[1] && (i = i.transpose()), c.scalarTimesArray(c.getScalar(this.gain), i)
                }, t.prototype.getClassName = function () {
                    return "Orthogonal"
                }, t.prototype.getConfig = function () {
                    return {gain: this.gain, seed: this.seed}
                }, t
            }(m);
            n.Orthogonal = k, f.ClassNameMap.register("Orthogonal", k), n.INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
                constant: "Constant",
                glorotNormal: "GlorotNormal",
                glorotUniform: "GlorotUniform",
                heNormal: "HeNormal",
                identity: "Identity",
                leCunNormal: "LeCunNormal",
                ones: "Ones",
                orthogonal: "Orthogonal",
                randomNormal: "RandomNormal",
                randomUniform: "RandomUniform",
                truncatedNormal: "TruncatedNormal",
                varianceScaling: "VarianceScaling",
                zeros: "Zeros"
            }, n.serializeInitializer = function (e) {
                return f.serializeKerasObject(e)
            }, n.getInitializer = function (e) {
                return "string" == typeof e ? o({
                    className: e in n.INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ? n.INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[e] : e,
                    config: {}
                }) : e instanceof m ? e : o(e)
            }
        }, {
            "./backend/tfjs_backend": 100,
            "./common": 102,
            "./errors": 107,
            "./types": 128,
            "./utils/generic_utils": 130,
            "./utils/math_utils": 131,
            "@tensorflow/tfjs-core": 8
        }],
        111: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("@tensorflow/tfjs-core"), a = e("../activations"), o = e("../backend/tfjs_backend"),
                s = e("../backend/tfjs_backend"), u = e("../engine/topology"), l = e("../errors"), c = e("../types"),
                p = e("../utils/generic_utils"), h = function (e) {
                    function t(t) {
                        var n = e.call(this, null == t ? {} : t) || this;
                        return n.DEFAULT_ALPHA = .3, null == t && (t = {}), n.alpha = null == t.alpha ? n.DEFAULT_ALPHA : t.alpha, n
                    }

                    return r(t, e), t.prototype.call = function (e, t) {
                        var n = p.getExactlyOneTensor(e);
                        return i.leakyRelu(n, this.alpha)
                    }, t.prototype.computeOutputShape = function (e) {
                        return e
                    }, t.prototype.getClassName = function () {
                        return "LeakyReLU"
                    }, t.prototype.getConfig = function () {
                        var t = {alpha: this.alpha}, n = e.prototype.getConfig.call(this);
                        return Object.assign(t, n), t
                    }, t
                }(u.Layer);
            n.LeakyReLU = h, p.ClassNameMap.register("LeakyReLU", h);
            var d = function (e) {
                function t(t) {
                    var n = e.call(this, null == t ? {} : t) || this;
                    if (n.DEFAULT_ALPHA = 1, null == t && (t = {}), null != t.alpha && t.alpha !== n.DEFAULT_ALPHA) throw new l.NotImplementedError("Non-default alpha value (" + t.alpha + ") is not supported by the ELU layer yet.");
                    return n.alpha = null == t.alpha ? n.DEFAULT_ALPHA : t.alpha, n
                }

                return r(t, e), t.prototype.call = function (e, t) {
                    var n = p.getExactlyOneTensor(e);
                    return i.elu(n)
                }, t.prototype.computeOutputShape = function (e) {
                    return e
                }, t.prototype.getClassName = function () {
                    return "ELU"
                }, t.prototype.getConfig = function () {
                    var t = {alpha: this.alpha}, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(u.Layer);
            n.ELU = d, p.ClassNameMap.register("ELU", d);
            var f = function (e) {
                function t(t) {
                    var n = e.call(this, null == t ? {} : t) || this;
                    return n.DEFAULT_THETA = 1, null == t && (t = {}), n.theta = null == t.theta ? n.DEFAULT_THETA : t.theta, n.thetaTensor = s.getScalar(n.theta), n
                }

                return r(t, e), t.prototype.call = function (e, t) {
                    var n = p.getExactlyOneTensor(e);
                    return n.mul(o.cast(n.greater(this.thetaTensor), c.DType.float32))
                }, t.prototype.computeOutputShape = function (e) {
                    return e
                }, t.prototype.getClassName = function () {
                    return "ThresholdedReLU"
                }, t.prototype.getConfig = function () {
                    var t = {theta: this.theta}, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(u.Layer);
            n.ThresholdedReLU = f, p.ClassNameMap.register("ThresholdedReLU", f);
            var g = function (e) {
                function t(t) {
                    var n = e.call(this, null == t ? {} : t) || this;
                    return n.DEFAULT_AXIS = 1, null == t && (t = {}), n.axis = null == t.theta ? n.DEFAULT_AXIS : t.theta, n
                }

                return r(t, e), t.prototype.call = function (e, t) {
                    var n = p.getExactlyOneTensor(e);
                    return a.softmax(n, this.axis)
                }, t.prototype.computeOutputShape = function (e) {
                    return e
                }, t.prototype.getClassName = function () {
                    return "Softmax"
                }, t.prototype.getConfig = function () {
                    var t = {axis: this.axis}, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(u.Layer);
            n.Softmax = g, p.ClassNameMap.register("Softmax", g)
        }, {
            "../activations": 98,
            "../backend/tfjs_backend": 100,
            "../engine/topology": 105,
            "../errors": 107,
            "../types": 128,
            "../utils/generic_utils": 130,
            "@tensorflow/tfjs-core": 8
        }],
        112: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("@tensorflow/tfjs-core"), a = e("../activations"), o = e("../backend/tfjs_backend"),
                s = e("../common"), u = e("../constraints"), l = e("../engine/topology"), c = e("../errors"),
                p = e("../initializers"), h = e("../regularizers"), d = e("../types"), f = e("../utils/conv_utils"),
                g = e("../utils/generic_utils"), m = function (e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        if (r.kernel = null, r.bias = null, r.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", r.DEFAULT_BIAS_INITIALIZER = "zeros", r.rank = t, 1 !== r.rank && 2 !== r.rank) throw new c.NotImplementedError("Convolution layer for rank other than 1 or 2 (" + r.rank + ") is not implemented yet.");
                        if (r.filters = n.filters, r.kernelSize = f.normalizeArray(n.kernelSize, t, "kernelSize"), r.strides = f.normalizeArray(null == n.strides ? 1 : n.strides, t, "strides"), r.padding = null == n.padding ? "valid" : n.padding, s.checkPaddingMode(r.padding), r.dataFormat = null == n.dataFormat ? "channelsLast" : n.dataFormat, s.checkDataFormat(r.dataFormat), r.dilationRate = null == n.dilationRate ? 1 : n.dilationRate, 1 === r.rank && Array.isArray(r.dilationRate) && 1 !== r.dilationRate.length) throw new c.ValueError("dilationRate must be a number or an array of a single number for 1D convolution, but received " + JSON.stringify(r.dilationRate));
                        if (2 === r.rank) if ("number" == typeof r.dilationRate) r.dilationRate = [r.dilationRate, r.dilationRate]; else if (2 !== r.dilationRate.length) throw new c.ValueError("dilationRate must be a number or array of two numbers for 2D convolution, but received " + JSON.stringify(r.dilationRate));
                        return r.activation = a.getActivation(n.activation), r.useBias = null == n.useBias || n.useBias, r.kernelInitializer = p.getInitializer(n.kernelInitializer || r.DEFAULT_KERNEL_INITIALIZER), r.biasInitializer = p.getInitializer(n.biasInitializer || r.DEFAULT_BIAS_INITIALIZER), r.kernelConstraint = u.getConstraint(n.kernelConstraint), r.biasConstraint = u.getConstraint(n.biasConstraint), r.kernelRegularizer = h.getRegularizer(n.kernelRegularizer), r.biasRegularizer = h.getRegularizer(n.biasRegularizer), r.activityRegularizer = h.getRegularizer(n.activityRegularizer), r
                    }

                    return r(t, e), t.prototype.build = function (e) {
                        e = g.getExactlyOneShape(e);
                        var t = "channelsFirst" === this.dataFormat ? 1 : e.length - 1;
                        if (null == e[t]) throw new c.ValueError("The channel dimension of the input should be defined. Found " + e[t]);
                        var n = e[t], r = this.kernelSize.concat([n, this.filters]);
                        this.kernel = this.addWeight("kernel", r, null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.useBias && (this.bias = this.addWeight("bias", [this.filters], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint)), this.inputSpec = [{
                            ndim: this.rank + 2,
                            axes: (i = {}, i[t] = n, i)
                        }], this.built = !0;
                        var i
                    }, t.prototype.call = function (e, t) {
                        e = g.getExactlyOneTensor(e);
                        var n, r = null == this.bias ? null : this.bias.read();
                        if (1 === this.rank) n = o.conv1dWithBias(e, this.kernel.read(), r, this.strides[0], this.padding, this.dataFormat, this.dilationRate); else if (2 === this.rank) n = o.conv2dWithBias(e, this.kernel.read(), r, this.strides, this.padding, this.dataFormat, this.dilationRate); else if (3 === this.rank) throw new c.NotImplementedError("3D convolution is not implemented yet.");
                        return null != this.activation && (n = this.activation(n)), n
                    }, t.prototype.computeOutputShape = function (e) {
                        e = g.getExactlyOneShape(e);
                        for (var t = [], n = "channelsLast" === this.dataFormat ? e.slice(1, e.length - 1) : e.slice(2), r = 0; r < n.length; ++r) {
                            var i = f.convOutputLength(n[r], this.kernelSize[r], this.padding, this.strides[r], "number" == typeof this.dilationRate ? this.dilationRate : this.dilationRate[r]);
                            t.push(i)
                        }
                        var a = [e[0]];
                        return "channelsLast" === this.dataFormat ? (a = a.concat(t)).push(this.filters) : (a.push(this.filters), a = a.concat(t)), a
                    }, t.prototype.getConfig = function () {
                        var t = {
                            rank: this.rank,
                            filters: this.filters,
                            kernelSize: this.kernelSize,
                            strides: this.strides,
                            padding: this.padding,
                            dataFormat: this.dataFormat,
                            dilationRate: this.dilationRate,
                            activation: a.serializeActivation(this.activation),
                            useBias: this.useBias,
                            kernelInitializer: p.serializeInitializer(this.kernelInitializer),
                            biasInitializer: p.serializeInitializer(this.biasInitializer),
                            kernelRegularizer: h.serializeRegularizer(this.kernelRegularizer),
                            biasRegularizer: h.serializeRegularizer(this.biasRegularizer),
                            activityRegularizer: h.serializeRegularizer(this.activityRegularizer),
                            kernelConstraint: u.serializeConstraint(this.kernelConstraint),
                            biasConstraint: u.serializeConstraint(this.biasConstraint)
                        }, n = e.prototype.getConfig.call(this);
                        return Object.assign(t, n), t
                    }, t
                }(l.Layer);
            n.Conv = m;
            var v = function (e) {
                function t(t) {
                    return e.call(this, 2, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Conv2D"
                }, t.prototype.getConfig = function () {
                    var t = e.prototype.getConfig.call(this);
                    return delete t.rank, t
                }, t
            }(m);
            n.Conv2D = v, g.ClassNameMap.register("Conv2D", v);
            var y = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    if (n.inputSpec = [new l.InputSpec({ndim: 4})], "same" !== n.padding && "valid" !== n.padding) throw new c.ValueError("Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode " + n.padding);
                    return n
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Conv2DTranspose"
                }, t.prototype.build = function (e) {
                    if (4 !== (e = g.getExactlyOneShape(e)).length) throw new c.ValueError("Input should have rank 4; Received input shape: " + JSON.stringify(e));
                    var t = "channelsFirst" === this.dataFormat ? 1 : e.length - 1;
                    if (null == e[t]) throw new c.ValueError("The channel dimension of the inputs should be defined. Found `None`.");
                    var n = e[t], r = this.kernelSize.concat([this.filters, n]);
                    this.kernel = this.addWeight("kernel", r, d.DType.float32, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.useBias && (this.bias = this.addWeight("bias", [this.filters], d.DType.float32, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint)), this.inputSpec = [new l.InputSpec({
                        ndim: 4,
                        axes: (i = {}, i[t] = n, i)
                    })], this.built = !0;
                    var i
                }, t.prototype.call = function (e, t) {
                    var n = this;
                    return i.tidy(function () {
                        var t = g.getExactlyOneTensor(e);
                        if (4 !== t.shape.length) throw new c.ValueError("Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-" + t.shape.length);
                        var r, a, s = t.shape, u = s[0];
                        "channelsFirst" === n.dataFormat ? (r = 2, a = 3) : (r = 1, a = 2);
                        var l = s[r], p = s[a], h = n.kernelSize[0], d = n.kernelSize[1], m = n.strides[0],
                            v = n.strides[1],
                            y = [u, f.deconvLength(l, m, h, n.padding), f.deconvLength(p, v, d, n.padding), n.filters];
                        "channelsLast" !== n.dataFormat && (t = o.transpose(t, [0, 2, 3, 1]));
                        var b = i.conv2dTranspose(t, n.kernel.read(), y, n.strides, n.padding);
                        return "channelsLast" !== n.dataFormat && (b = o.transpose(b, [0, 3, 1, 2])), null != n.bias && (b = o.biasAdd(b, n.bias.read(), n.dataFormat)), null != n.activation && (b = n.activation(b)), b
                    })
                }, t.prototype.computeOutputShape = function (e) {
                    var t, n, r, i = (e = g.getExactlyOneShape(e)).slice();
                    "channelsFirst" === this.dataFormat ? (t = 1, n = 2, r = 3) : (t = 3, n = 1, r = 2);
                    var a = this.kernelSize[0], o = this.kernelSize[1], s = this.strides[0], u = this.strides[1];
                    return i[t] = this.filters, i[n] = f.deconvLength(i[n], s, a, this.padding), i[r] = f.deconvLength(i[r], u, o, this.padding), i
                }, t.prototype.getConfig = function () {
                    var t = e.prototype.getConfig.call(this);
                    return delete t.dilationRate, t
                }, t
            }(v);
            n.Conv2DTranspose = y, g.ClassNameMap.register("Conv2DTranspose", y);
            var b = function (e) {
                function t(t, n) {
                    var r = e.call(this, t, n) || this;
                    if (r.DEFAULT_DEPTHWISE_INITIALIZER = "glorotUniform", r.DEFAULT_POINTWISE_INITIALIZER = "glorotUniform", r.depthwiseKernel = null, r.pointwiseKernel = null, null == n.filters) throw new c.ValueError("The `filters` configuration field is required by SeparableConv, but is unspecified.");
                    if (null != n.kernelInitializer || null != n.kernelRegularizer || null != n.kernelConstraint) throw new c.ValueError("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");
                    if (null != n.padding && "same" !== n.padding && "valid" !== n.padding) throw new c.ValueError("SeparableConv" + r.rank + "D supports only padding modes: 'same' and 'valid', but received " + JSON.stringify(n.padding));
                    return r.depthMultiplier = null == n.depthMultiplier ? 1 : n.depthMultiplier, r.depthwiseInitializer = p.getInitializer(n.depthwiseInitializer || r.DEFAULT_DEPTHWISE_INITIALIZER), r.depthwiseRegularizer = h.getRegularizer(n.depthwiseRegularizer), r.depthwiseConstraint = u.getConstraint(n.depthwiseConstraint), r.pointwiseInitializer = p.getInitializer(n.depthwiseInitializer || r.DEFAULT_POINTWISE_INITIALIZER), r.pointwiseRegularizer = h.getRegularizer(n.pointwiseRegularizer), r.pointwiseConstraint = u.getConstraint(n.pointwiseConstraint), r
                }

                return r(t, e), t.prototype.build = function (e) {
                    if ((e = g.getExactlyOneShape(e)).length < this.rank + 2) throw new c.ValueError("Inputs to SeparableConv" + this.rank + "D should have rank " + (this.rank + 2) + ", but received input shape: " + JSON.stringify(e));
                    var t = "channelsFirst" === this.dataFormat ? 1 : e.length - 1;
                    if (null == e[t] || e[t] < 0) throw new c.ValueError("The channel dimension of the inputs should be defined, but found " + JSON.stringify(e[t]));
                    for (var n = e[t], r = this.kernelSize.concat([n, this.depthMultiplier]), i = [], a = 0; a < this.rank; ++a) i.push(1);
                    i.push(n * this.depthMultiplier, this.filters);
                    this.depthwiseKernel = this.addWeight("depthwise_kernel", r, d.DType.float32, this.depthwiseInitializer, this.depthwiseRegularizer, !0, this.depthwiseConstraint), this.pointwiseKernel = this.addWeight("pointwise_kernel", i, d.DType.float32, this.pointwiseInitializer, this.pointwiseRegularizer, !0, this.pointwiseConstraint), this.useBias ? this.bias = this.addWeight("bias", [this.filters], d.DType.float32, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint) : this.bias = null, this.inputSpec = [new l.InputSpec({
                        ndim: this.rank + 2,
                        axes: (o = {}, o[t] = n, o)
                    })], this.built = !0;
                    var o
                }, t.prototype.call = function (e, t) {
                    e = g.getExactlyOneTensor(e);
                    var n;
                    if (1 === this.rank) throw new c.NotImplementedError("1D separable convolution is not implemented yet.");
                    return 2 === this.rank && ("channelsFirst" === this.dataFormat && (e = o.transpose(e, [0, 2, 3, 1])), n = i.separableConv2d(e, this.depthwiseKernel.read(), this.pointwiseKernel.read(), this.strides, this.padding, this.dilationRate, "NHWC")), this.useBias && (n = o.biasAdd(n, this.bias.read(), this.dataFormat)), null != this.activation && (n = this.activation(n)), "channelsFirst" === this.dataFormat && (n = o.transpose(n, [0, 3, 1, 2])), n
                }, t.prototype.getClassName = function () {
                    return "SeparableConv"
                }, t.prototype.getConfig = function () {
                    var t = e.prototype.getConfig.call(this);
                    return delete t.rank, delete t.kernelInitializer, delete t.kernelRegularizer, delete t.kernelConstraint, t.depthwiseInitializer = p.serializeInitializer(this.depthwiseInitializer), t.pointwiseInitializer = p.serializeInitializer(this.pointwiseInitializer), t.depthwiseRegularizer = h.serializeRegularizer(this.depthwiseRegularizer), t.pointwiseRegularizer = h.serializeRegularizer(this.pointwiseRegularizer), t.depthwiseConstraint = u.serializeConstraint(this.depthwiseConstraint), t.pointwiseConstraint = u.serializeConstraint(this.pointwiseConstraint), t
                }, t
            }(m);
            n.SeparableConv = b;
            var w = function (e) {
                function t(t) {
                    return e.call(this, 2, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "SeparableConv2D"
                }, t
            }(b);
            n.SeparableConv2D = w, g.ClassNameMap.register("SeparableConv2D", w);
            var x = function (e) {
                function t(t) {
                    var n = e.call(this, 1, t) || this;
                    return n.inputSpec = [{ndim: 3}], n
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Conv1D"
                }, t.prototype.getConfig = function () {
                    var t = e.prototype.getConfig.call(this);
                    return delete t.rank, delete t.dataFormat, t
                }, t
            }(m);
            n.Conv1D = x, g.ClassNameMap.register("Conv1D", x)
        }, {
            "../activations": 98,
            "../backend/tfjs_backend": 100,
            "../common": 102,
            "../constraints": 103,
            "../engine/topology": 105,
            "../errors": 107,
            "../initializers": 110,
            "../regularizers": 127,
            "../types": 128,
            "../utils/conv_utils": 129,
            "../utils/generic_utils": 130,
            "@tensorflow/tfjs-core": 8
        }],
        113: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../backend/tfjs_backend"), a = e("../constraints"), o = e("../errors"), s = e("../initializers"),
                u = e("../regularizers"), l = e("../utils/conv_utils"), c = e("../utils/generic_utils"),
                p = e("../utils/generic_utils"), h = function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.depthwiseKernel = null, n.depthMultiplier = null == t.depthMultiplier ? 1 : t.depthMultiplier, n.depthwiseInitializer = s.getInitializer(t.depthwiseInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.depthwiseConstraint = a.getConstraint(t.depthwiseConstraint), n.depthwiseRegularizer = u.getRegularizer(t.depthwiseRegularizer), n
                    }

                    return r(t, e), t.prototype.getClassName = function () {
                        return "DepthwiseConv2D"
                    }, t.prototype.build = function (e) {
                        if ((e = p.getExactlyOneShape(e)).length < 4) throw new o.ValueError("Inputs to DepthwiseConv2D should have rank 4. Received input shape: " + JSON.stringify(e) + ".");
                        var t = "channelsFirst" === this.dataFormat ? 1 : 3;
                        if (null == e[t] || e[t] < 0) throw new o.ValueError("The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (" + e[t] + ").");
                        var n = e[t], r = [this.kernelSize[0], this.kernelSize[1], n, this.depthMultiplier];
                        this.depthwiseKernel = this.addWeight("depthwise_kernel", r, null, this.depthwiseInitializer, this.depthwiseRegularizer, !0, this.depthwiseConstraint), this.useBias ? this.bias = this.addWeight("bias", [n * this.depthMultiplier], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint) : this.bias = null, this.built = !0
                    }, t.prototype.call = function (e, t) {
                        e = p.getExactlyOneTensor(e);
                        var n = i.depthwiseConv2d(e, this.depthwiseKernel.read(), this.strides, this.padding, this.dataFormat, null);
                        return this.useBias && (n = i.biasAdd(n, this.bias.read(), this.dataFormat)), null != this.activation && (n = this.activation(n)), n
                    }, t.prototype.computeOutputShape = function (e) {
                        e = p.getExactlyOneShape(e);
                        var t = "channelsFirst" === this.dataFormat ? e[2] : e[1],
                            n = "channelsFirst" === this.dataFormat ? e[3] : e[2],
                            r = "channelsFirst" === this.dataFormat ? e[1] * this.depthMultiplier : e[3] * this.depthMultiplier,
                            i = l.convOutputLength(t, this.kernelSize[0], this.padding, this.strides[0]),
                            a = l.convOutputLength(n, this.kernelSize[1], this.padding, this.strides[1]);
                        return "channelsFirst" === this.dataFormat ? [e[0], r, i, a] : [e[0], i, a, r]
                    }, t
                }(e("./convolutional").Conv2D);
            n.DepthwiseConv2D = h, c.ClassNameMap.register("DepthwiseConv2D", h)
        }, {
            "../backend/tfjs_backend": 100,
            "../constraints": 103,
            "../errors": 107,
            "../initializers": 110,
            "../regularizers": 127,
            "../utils/conv_utils": 129,
            "../utils/generic_utils": 130,
            "./convolutional": 112
        }],
        114: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("@tensorflow/tfjs-core"), a = e("../activations"), o = e("../backend/tfjs_backend"),
                s = e("../constraints"), u = e("../engine/topology"), l = e("../errors"), c = e("../initializers"),
                p = e("../regularizers"), h = e("../utils/generic_utils"), d = e("../utils/generic_utils"),
                f = e("../utils/math_utils"), g = function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.rate = Math.max(Math.min(t.rate, 1), 0), n.rateScalar = o.getScalar(n.rate), n.noiseShape = t.noiseShape, n.seed = t.seed, null != n.seed) throw new l.NotImplementedError("Non-default seed is not implemented in Dropout layer yet: " + n.seed);
                        return n.supportsMasking = !0, n
                    }

                    return r(t, e), t.prototype.getNoiseShape = function (e) {
                        if (null == this.noiseShape) return this.noiseShape;
                        for (var t = e.shape, n = [], r = 0; r < this.noiseShape.length; ++r) n.push(null == this.noiseShape[r] ? t[r] : this.noiseShape[r]);
                        return n
                    }, t.prototype.call = function (e, t) {
                        var n = this;
                        this.invokeCallHook(e, t);
                        var r = h.getExactlyOneTensor(e);
                        if (null != this.noiseShape && !i.util.arraysEqual(r.shape, this.noiseShape)) throw new l.NotImplementedError("Non-default noise shape is not implemented in Dropout layer yet: " + JSON.stringify(this.noiseShape));
                        if (0 < this.rate && this.rate < 1) {
                            var a = null != t.training && t.training, s = this.getNoiseShape(r);
                            return o.inTrainPhase(function () {
                                return o.dropout(r, n.rateScalar, s, n.seed)
                            }, function () {
                                return r
                            }, a)
                        }
                        return e
                    }, t.prototype.getClassName = function () {
                        return "Dropout"
                    }, t.prototype.getConfig = function () {
                        var t = {rate: this.rate, noiseShape: this.noiseShape, seed: this.seed},
                            n = e.prototype.getConfig.call(this);
                        return Object.assign(t, n), t
                    }, t
                }(u.Layer);
            n.Dropout = g, h.ClassNameMap.register("Dropout", g);
            var m = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    if (n.activation = null, n.useBias = !0, n.kernel = null, n.bias = null, n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", n.DEFAULT_BIAS_INITIALIZER = "zeros", null == t.batchInputShape && null == t.inputShape && null != t.inputDim) {
                        var r = null;
                        null != t.batchSize && (r = t.batchSize), n.batchInputShape = [r, t.inputDim]
                    }
                    return n.units = t.units, n.activation = a.getActivation(t.activation), null != t.useBias && (n.useBias = t.useBias), n.kernelInitializer = c.getInitializer(t.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.biasInitializer = c.getInitializer(t.biasInitializer || n.DEFAULT_BIAS_INITIALIZER), n.kernelConstraint = s.getConstraint(t.kernelConstraint), n.biasConstraint = s.getConstraint(t.biasConstraint), n.kernelRegularizer = p.getRegularizer(t.kernelRegularizer), n.biasRegularizer = p.getRegularizer(t.biasRegularizer), n.activityRegularizer = p.getRegularizer(t.activityRegularizer), n.inputSpec = [{minNDim: 2}], n
                }

                return r(t, e), t.prototype.build = function (e) {
                    var t = (e = h.getExactlyOneShape(e))[e.length - 1];
                    null == this.kernel && (this.kernel = this.addWeight("kernel", [t, this.units], null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.useBias && (this.bias = this.addWeight("bias", [this.units], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint))), this.inputSpec = [{
                        minNDim: 2,
                        axes: (n = {}, n[-1] = t, n)
                    }], this.built = !0;
                    var n
                }, t.prototype.computeOutputShape = function (e) {
                    var t = (e = h.getExactlyOneShape(e)).slice();
                    return t[t.length - 1] = this.units, t
                }, t.prototype.call = function (e, t) {
                    this.invokeCallHook(e, t);
                    var n = h.getExactlyOneTensor(e), r = o.dot(n, this.kernel.read());
                    return null != this.bias && (r = o.biasAdd(r, this.bias.read())), null != this.activation && (r = this.activation(r)), r
                }, t.prototype.getClassName = function () {
                    return "Dense"
                }, t.prototype.getConfig = function () {
                    var t = {
                        units: this.units,
                        activation: a.serializeActivation(this.activation),
                        useBias: this.useBias,
                        kernelInitializer: c.serializeInitializer(this.kernelInitializer),
                        biasInitializer: c.serializeInitializer(this.biasInitializer),
                        kernelRegularizer: p.serializeRegularizer(this.kernelRegularizer),
                        biasRegularizer: p.serializeRegularizer(this.biasRegularizer),
                        activityRegularizer: p.serializeRegularizer(this.activityRegularizer),
                        kernelConstraint: s.serializeConstraint(this.kernelConstraint),
                        biasConstraint: s.serializeConstraint(this.biasConstraint)
                    }, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(u.Layer);
            n.Dense = m, h.ClassNameMap.register("Dense", m);
            var v = function (e) {
                function t(t) {
                    var n = e.call(this, t || {}) || this;
                    return n.inputSpec = [{minNDim: 3}], n
                }

                return r(t, e), t.prototype.computeOutputShape = function (e) {
                    for (var t = 0, n = (e = h.getExactlyOneShape(e)).slice(1); t < n.length; t++) if (null == n[t]) throw new l.ValueError('The shape of the input to "Flatten" is not fully defined (got ' + e.slice(1) + '). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.');
                    return [e[0], f.arrayProd(e, 1)]
                }, t.prototype.getClassName = function () {
                    return "Flatten"
                }, t.prototype.call = function (e, t) {
                    return this.invokeCallHook(e, t), o.batchFlatten(h.getExactlyOneTensor(e))
                }, t
            }(u.Layer);
            n.Flatten = v, h.ClassNameMap.register("Flatten", v);
            var y = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.supportsMasking = !0, n.activation = a.getActivation(t.activation), n
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Activation"
                }, t.prototype.call = function (e, t) {
                    this.invokeCallHook(e, t);
                    var n = h.getExactlyOneTensor(e);
                    return this.activation(n)
                }, t
            }(u.Layer);
            n.Activation = y, h.ClassNameMap.register("Activation", y);
            var b = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.n = t.n, n.inputSpec = [{ndim: 2}], n
                }

                return r(t, e), t.prototype.computeOutputShape = function (e) {
                    return [e[0], this.n, e[1]]
                }, t.prototype.call = function (e, t) {
                    return e = d.getExactlyOneTensor(e), o.repeat(e, this.n)
                }, t.prototype.getClassName = function () {
                    return "RepeatVector"
                }, t.prototype.getConfig = function () {
                    var t = {n: this.n}, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(u.Layer);
            n.RepeatVector = b, h.ClassNameMap.register("RepeatVector", b);
            var w = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.targetShape = t.targetShape;
                    for (var r = 0; r < n.targetShape.length; ++r) n.isUnknown(n.targetShape[r]) && (n.targetShape[r] = null);
                    return n
                }

                return r(t, e), t.prototype.isUnknown = function (e) {
                    return e < 0 || null == e
                }, t.prototype.fixUnknownDimension = function (e, t) {
                    for (var n = "Total size of new array must be unchanged.", r = t.slice(), i = 1, a = null, o = 0; o < r.length; ++o) {
                        var s = r[o];
                        if (this.isUnknown(s)) {
                            if (null !== a) throw new l.ValueError("Can only specifiy one unknown dimension.");
                            a = o
                        } else i *= s
                    }
                    var u = f.arrayProd(e);
                    if (null !== a) {
                        if (0 === i || u % i != 0) throw new l.ValueError(n);
                        r[a] = u / i
                    } else if (u !== i) throw new l.ValueError(n);
                    return r
                }, t.prototype.computeOutputShape = function (e) {
                    for (var t = !1, n = 0; n < e.length; ++n) if (this.isUnknown(e[n])) {
                        t = !0;
                        break
                    }
                    return t ? e.slice(0, 1).concat(this.targetShape) : e.slice(0, 1).concat(this.fixUnknownDimension(e.slice(1), this.targetShape))
                }, t.prototype.getClassName = function () {
                    return "Reshape"
                }, t.prototype.call = function (e, t) {
                    this.invokeCallHook(e, t);
                    var n = h.getExactlyOneTensor(e), r = o.shape(n),
                        i = r.slice(0, 1).concat(this.fixUnknownDimension(r.slice(1), this.targetShape));
                    return o.reshape(n, i)
                }, t
            }(u.Layer);
            n.Reshape = w, h.ClassNameMap.register("Reshape", w)
        }, {
            "../activations": 98,
            "../backend/tfjs_backend": 100,
            "../constraints": 103,
            "../engine/topology": 105,
            "../errors": 107,
            "../initializers": 110,
            "../regularizers": 127,
            "../utils/generic_utils": 130,
            "../utils/math_utils": 131,
            "@tensorflow/tfjs-core": 8
        }],
        115: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../backend/tfjs_backend"), a = e("../constraints"), o = e("../engine/topology"),
                s = e("../errors"), u = e("../initializers"), l = e("../regularizers"), c = e("../utils/generic_utils"),
                p = e("../utils/generic_utils"), h = function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.embeddings = null, n.DEFAULT_EMBEDDINGS_INITIALIZER = "randomUniform", null == t.batchInputShape && null == t.inputShape) {
                            var r = null;
                            null != t.batchSize && (r = t.batchSize), null == t.inputLength ? n.batchInputShape = [r, null] : n.batchInputShape = [r].concat(c.toList(t.inputLength))
                        }
                        return n.inputDim = t.inputDim, n.outputDim = t.outputDim, n.embeddingsInitializer = u.getInitializer(t.embeddingsInitializer || n.DEFAULT_EMBEDDINGS_INITIALIZER), n.embeddingsRegularizer = l.getRegularizer(t.embeddingsRegularizer), n.activityRegularizer = l.getRegularizer(t.activityRegularizer), n.embeddingsConstraint = a.getConstraint(t.embeddingsConstraint), n.maskZero = t.maskZero, n.inputLength = t.inputLength, n
                    }

                    return r(t, e), t.prototype.build = function (e) {
                        this.embeddings = this.addWeight("embeddings", [this.inputDim, this.outputDim], this.dtype, this.embeddingsInitializer, this.embeddingsRegularizer, !0, this.embeddingsConstraint), this.built = !0
                    }, t.prototype.computeMask = function (e, t) {
                        throw new s.NotImplementedError("computeMask has not been implemented for Embedding yet")
                    }, t.prototype.computeOutputShape = function (e) {
                        if (e = c.getExactlyOneShape(e), null == this.inputLength) return e.concat([this.outputDim]);
                        var t = c.toList(this.inputLength);
                        if (t.length !== e.length - 1) throw new s.ValueError('"inputLength" is ' + this.inputLength + ", but received input shape has shape " + e);
                        for (var n = 0, r = 0; r < t.length; ++r) {
                            var i = t[r], a = e[r + 1];
                            if (null != i && null != a && i !== a) throw new s.ValueError('"inputLength" is ' + this.inputLength + ", but received input shape has shape " + e);
                            null == i && (t[n] = a), n++
                        }
                        return [e[0]].concat(t, [this.outputDim])
                    }, t.prototype.call = function (e, t) {
                        this.invokeCallHook(e, t);
                        var n = c.getExactlyOneTensor(e);
                        "int32" !== i.dtype(n) && (n = i.cast(n, "int32"));
                        var r = i.gather(this.embeddings.read(), n.as1D());
                        return i.reshape(r, p.getExactlyOneShape(this.computeOutputShape(n.shape)))
                    }, t.prototype.getClassName = function () {
                        return "Embedding"
                    }, t.prototype.getConfig = function () {
                        var t = {
                            inputDim: this.inputDim,
                            outputDim: this.outputDim,
                            embeddingsInitializer: u.serializeInitializer(this.embeddingsInitializer),
                            embeddingsRegularizer: l.serializeRegularizer(this.embeddingsRegularizer),
                            activityRegularizer: l.serializeRegularizer(this.activityRegularizer),
                            embeddingsConstraint: a.serializeConstraint(this.embeddingsConstraint),
                            maskZero: this.maskZero,
                            inputLength: this.inputLength
                        }, n = e.prototype.getConfig.call(this);
                        return Object.assign(t, n), t
                    }, t
                }(o.Layer);
            n.Embedding = h, c.ClassNameMap.register("Embedding", h)
        }, {
            "../backend/tfjs_backend": 100,
            "../constraints": 103,
            "../engine/topology": 105,
            "../errors": 107,
            "../initializers": 110,
            "../regularizers": 127,
            "../utils/generic_utils": 130
        }],
        116: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("@tensorflow/tfjs-core"), a = e("../backend/tfjs_backend"), o = e("../engine/topology"),
                s = e("../errors"), u = e("../utils/generic_utils"), l = e("../utils/math_utils"), c = function (e) {
                    function t(t) {
                        var n = e.call(this, t || {}) || this;
                        return n.supportsMasking = !0, n
                    }

                    return r(t, e), t.prototype.getClassName = function () {
                        return "Merge"
                    }, t.prototype.mergeFunction = function (e) {
                        throw new s.NotImplementedError
                    }, t.prototype.computeElementwiseOpOutputShape = function (e, t) {
                        if (null == e || null == t) return null;
                        if (e.length < t.length) return this.computeElementwiseOpOutputShape(t, e);
                        if (0 === t.length) return e;
                        for (var n = e.slice(0, e.length - t.length), r = 0; r < t.length; ++r) {
                            var i = e[e.length - t.length + r], a = t[r];
                            if (null == i || null == a || i < 0 || a < 0) n.push(null); else if (1 === i) n.push(a); else if (1 === a) n.push(i); else {
                                if (i !== a) throw new s.ValueError("Operands could not be broadcast together with shapes " + JSON.stringify(e) + " " + JSON.stringify(t));
                                n.push(i)
                            }
                        }
                        return n
                    }, t.prototype.build = function (e) {
                        if (Array.isArray(e) && !Array.isArray(e[0]) && (e = [u.getExactlyOneShape(e)]), (e = e).length < 2) throw new s.ValueError("A merge layer should be called on an Array of at least 2 inputs. Got " + e.length + " input(s).");
                        for (var t = [], n = 0, r = e; n < r.length; n++) null != (o = r[n]) && null !== o[0] && t.push(o[0]);
                        if ((t = u.unique(t)).length > 1) throw new s.ValueError("Can not merge tensors with different batch sizes. Got tensors with shapes: " + JSON.stringify(e) + ".");
                        for (var i = null == e[0] ? null : e[0].slice(1), a = 1; a < e.length; ++a) {
                            var o = null == e[a] ? null : e[a].slice(1);
                            i = this.computeElementwiseOpOutputShape(i, o)
                        }
                        var l = e.map(function (e) {
                            return e.length
                        });
                        -1 === e.indexOf(null) && 1 === u.unique(l).length ? this.reshapeRequired = !1 : this.reshapeRequired = !0
                    }, t.prototype.call = function (e, t) {
                        if (e = e, this.reshapeRequired) {
                            var n = [], r = e.map(function (e) {
                                return a.ndim(e)
                            });
                            if (-1 === r.indexOf(null)) {
                                for (var i = l.max(r), o = 0, s = e; o < s.length; o++) {
                                    for (var u = s[o], c = a.ndim(u), p = 0; p < i - c; ++p) u = a.expandDims(u, 1);
                                    n.push(u)
                                }
                                return this.mergeFunction(n)
                            }
                            for (var h = !1, d = 0, f = e; d < f.length; d++) {
                                u = f[d];
                                if (null == (c = a.ndim(u))) {
                                    var g = a.shape(u), m = g[0], v = g.slice(1).concat([m]),
                                        y = a.reshape(u, [m].concat(l.arrayProd(g.slice(1))));
                                    y = a.permuteDimensions(y, [1, 0]), y = a.reshape(y, v), n.push(y), h = !0
                                } else if (c > 1) {
                                    A = l.range(1, c).concat([0]);
                                    n.push(a.permuteDimensions(u, A)), h = !0
                                } else n.push(u)
                            }
                            var b = this.mergeFunction(n), w = a.ndim(b);
                            if (h) if (null == w) {
                                var x = a.shape(b), v = [m = x[x.length - 1]].concat(x.slice(0, x.length - 1));
                                b = a.reshape(a.permuteDimensions(a.reshape(b, [-1, m]), [1, 0]), v)
                            } else if (w > 1) {
                                var A = [w - 1].concat(l.range(0, w - 1));
                                b = a.permuteDimensions(b, A)
                            }
                            return b
                        }
                        return this.mergeFunction(e)
                    }, t.prototype.computeOutputShape = function (e) {
                        var t;
                        t = null == (e = e)[0] ? null : e[0].slice(1);
                        for (var n = 1; n < e.length; ++n) {
                            var r = null == e[n] ? null : e[n].slice(1);
                            t = this.computeElementwiseOpOutputShape(t, r)
                        }
                        for (var i = [], a = 0, o = e; a < o.length; a++) null != (r = o[a]) && null !== r[0] && i.push(r[0]);
                        return i = u.unique(i), t = 1 === i.length ? i.concat(t) : [null].concat(t)
                    }, t
                }(o.Layer);
            n.Merge = c;
            var p = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Add"
                }, t.prototype.mergeFunction = function (e) {
                    for (var t = a.zeros(e[0].shape), n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        t = a.add(t, i)
                    }
                    return t
                }, t
            }(c);
            n.Add = p, u.ClassNameMap.register("Add", p), n.add = function (e) {
                return Array.isArray(e) ? new p({}).apply(e) : new p(e)
            };
            var h = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Multiply"
                }, t.prototype.mergeFunction = function (e) {
                    for (var t = a.ones(e[0].shape), n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        t = a.multiply(t, i)
                    }
                    return t
                }, t
            }(c);
            n.Multiply = h, u.ClassNameMap.register("Multiply", h), n.multiply = function (e) {
                return Array.isArray(e) ? new h({}).apply(e) : new h(e)
            };
            var d = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Average"
                }, t.prototype.mergeFunction = function (e) {
                    for (var t = a.zeros(e[0].shape), n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        t = a.add(t, i)
                    }
                    return a.scalarTimesArray(a.getScalar(1 / e.length), t)
                }, t
            }(c);
            n.Average = d, u.ClassNameMap.register("Average", d), n.average = function (e) {
                return Array.isArray(e) ? new d({}).apply(e) : new d(e)
            };
            var f = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Maximum"
                }, t.prototype.mergeFunction = function (e) {
                    for (var t = e[0], n = 1; n < e.length; ++n) t = a.maximum(t, e[n]);
                    return t
                }, t
            }(c);
            n.Maximum = f, u.ClassNameMap.register("Maximum", f), n.maximum = function (e) {
                return Array.isArray(e) ? new f({}).apply(e) : new f(e)
            };
            var g = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Minimum"
                }, t.prototype.mergeFunction = function (e) {
                    for (var t = e[0], n = 1; n < e.length; ++n) t = a.minimum(t, e[n]);
                    return t
                }, t
            }(c);
            n.Minimum = g, u.ClassNameMap.register("Minimum", g), n.minimum = function (e) {
                return Array.isArray(e) ? new g({}).apply(e) : new g(e)
            };
            var m = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.DEFAULT_AXIS = -1, null == t && (t = {}), n.axis = null == t.axis ? n.DEFAULT_AXIS : t.axis, n.supportsMasking = !0, n.reshapeRequired = !1, n
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "Concatenate"
                }, t.prototype.build = function (e) {
                    if (!Array.isArray(e) || !Array.isArray(e[0]) || 1 === e.length) throw new s.ValueError("A `Concatenate` layer should be called on a list of at least 2 inputs");
                    for (var t = !0, n = 0, r = e = e; n < r.length; n++) if (null != (h = r[n])) {
                        t = !1;
                        break
                    }
                    if (!t) {
                        for (var a = [], o = 0; o < e.length; ++o) {
                            var u = e[o].slice();
                            u.splice(this.axis, 1);
                            for (var l = !1, c = 0, p = a; c < p.length; c++) {
                                var h = p[c];
                                if (i.util.arraysEqual(h, u)) {
                                    l = !0;
                                    break
                                }
                            }
                            l || a.push(u)
                        }
                        if (a.length > 1) throw new s.ValueError("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: " + JSON.stringify(e))
                    }
                }, t.prototype.mergeFunction = function (e) {
                    return a.concatenate(e, this.axis)
                }, t.prototype.computeOutputShape = function (e) {
                    if (!Array.isArray(e) || !Array.isArray(e[0])) throw new s.ValueError("A `Concatenate` layer should be called on a list of inputs.");
                    for (var t = e, n = t[0].slice(), r = this.axis < 0 ? n.length + this.axis : this.axis, i = 0, a = t.slice(1); i < a.length; i++) {
                        var o = a[i];
                        if (null == n[r] || null == o[r]) {
                            n[r] = null;
                            break
                        }
                        n[r] += o[r]
                    }
                    return n
                }, t
            }(c);
            n.Concatenate = m, u.ClassNameMap.register("Concatenate", m), n.concatenate = function (e) {
                return Array.isArray(e) ? new m({}).apply(e) : new m(e)
            }
        }, {
            "../backend/tfjs_backend": 100,
            "../engine/topology": 105,
            "../errors": 107,
            "../utils/generic_utils": 130,
            "../utils/math_utils": 131,
            "@tensorflow/tfjs-core": 8
        }],
        117: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("@tensorflow/tfjs-core"), a = e("../backend/tfjs_backend"), o = e("../constraints"),
                s = e("../engine/topology"), u = e("../errors"), l = e("../initializers"), c = e("../regularizers"),
                p = e("../utils/generic_utils"), h = e("../utils/math_utils"), d = function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.supportsMasking = !0, n.axis = null == t.axis ? -1 : t.axis, n.momentum = null == t.momentum ? .99 : t.momentum, n.epsilon = null == t.epsilon ? .001 : t.epsilon, n.center = null == t.center || t.center, n.scale = null == t.scale || t.scale, n.betaInitializer = l.getInitializer(t.betaInitializer || "zeros"), n.gammaInitializer = l.getInitializer(t.gammaInitializer || "ones"), n.movingMeanInitializer = l.getInitializer(t.movingMeanInitializer || "zeros"), n.movingVarianceInitializer = l.getInitializer(t.movingVarianceInitializer || "ones"), n.betaConstraint = o.getConstraint(t.betaConstraint), n.gammaConstraint = o.getConstraint(t.gammaConstraint), n.betaRegularizer = c.getRegularizer(t.betaRegularizer), n.gammaRegularizer = c.getRegularizer(t.gammaRegularizer), n.stepCount = 0, n
                    }

                    return r(t, e), t.prototype.build = function (e) {
                        e = p.getExactlyOneShape(e);
                        var t = this.axis >= 0 ? this.axis : this.axis + e.length, n = e[t];
                        if (null == n) throw new u.ValueError("Axis " + t + " of input tensor should have a defined dimension but the layer received an input with shape " + JSON.stringify(e) + ".");
                        this.inputSpec = [new s.InputSpec({ndim: e.length, axes: (i = {}, i[t] = n, i)})];
                        var r = [n];
                        this.scale && (this.gamma = this.addWeight("gamma", r, null, this.gammaInitializer, this.gammaRegularizer, !0, this.gammaConstraint)), this.center && (this.beta = this.addWeight("beta", r, null, this.betaInitializer, this.betaRegularizer, !0, this.betaConstraint)), this.movingMean = this.addWeight("moving_mean", r, null, this.movingMeanInitializer, null, !1), this.movingVariance = this.addWeight("moving_variance", r, null, this.movingVarianceInitializer, null, !1), this.built = !0;
                        var i
                    }, t.prototype.call = function (e, t) {
                        var n = this;
                        return i.tidy(function () {
                            var r = null != t.training && t.training, o = p.getExactlyOneTensor(e), s = a.shape(o),
                                u = s.length, l = h.range(0, u), c = n.axis >= 0 ? n.axis : n.axis + u;
                            l.splice(c, 1);
                            var d = p.pyListRepeat(1, u);
                            d[c] = s[c];
                            var f = l.slice();
                            f.sort();
                            var g = !i.util.arraysEqual(f, h.range(0, u).slice(0, u - 1));
                            if (!r) return function () {
                                if (g) {
                                    var e = a.reshape(n.movingMean.read(), d), t = a.reshape(n.movingVariance.read(), d),
                                        r = n.center ? a.reshape(n.beta.read(), d) : null,
                                        i = n.scale ? a.reshape(n.gamma.read(), d) : null;
                                    return a.batchNormalization(o, e, t, r, i, n.epsilon)
                                }
                                return a.batchNormalization(o, n.movingMean.read(), n.movingVariance.read(), null == n.beta ? null : n.beta.read(), null == n.gamma ? null : n.gamma.read(), n.epsilon)
                            }();
                            var m = a.normalizeBatchInTraining(o, n.gamma.read(), n.beta.read(), l, n.epsilon), v = m[0],
                                y = m[1], b = m[2], w = h.arrayProd(l.map(function (e) {
                                    return o.shape[e]
                                })), x = b.mul(a.getScalar(w / (w - (1 + n.epsilon))));
                            return function () {
                                n.stepCount++;
                                var e = i.movingAverage(n.movingMean.read(), y, n.momentum, n.stepCount);
                                n.movingMean.write(e);
                                var t = i.movingAverage(n.movingVariance.read(), x, n.momentum, n.stepCount);
                                n.movingVariance.write(t)
                            }(), v
                        })
                    }, t.prototype.getClassName = function () {
                        return "BatchNormalization"
                    }, t.prototype.getConfig = function () {
                        var t = {
                            axis: this.axis,
                            momentum: this.momentum,
                            epsilon: this.epsilon,
                            center: this.center,
                            scale: this.scale,
                            betaInitializer: l.serializeInitializer(this.betaInitializer),
                            gammaInitializer: l.serializeInitializer(this.gammaInitializer),
                            movingMeanInitializer: l.serializeInitializer(this.movingMeanInitializer),
                            movingVarianceInitializer: l.serializeInitializer(this.movingVarianceInitializer),
                            betaRegularizer: c.serializeRegularizer(this.betaRegularizer),
                            gammaRegularizer: c.serializeRegularizer(this.gammaRegularizer),
                            betaConstraint: o.serializeConstraint(this.betaConstraint),
                            gammaConstraint: o.serializeConstraint(this.gammaConstraint)
                        }, n = e.prototype.getConfig.call(this);
                        return Object.assign(t, n), t
                    }, t
                }(s.Layer);
            n.BatchNormalization = d, p.ClassNameMap.register("BatchNormalization", d)
        }, {
            "../backend/tfjs_backend": 100,
            "../constraints": 103,
            "../engine/topology": 105,
            "../errors": 107,
            "../initializers": 110,
            "../regularizers": 127,
            "../utils/generic_utils": 130,
            "../utils/math_utils": 131,
            "@tensorflow/tfjs-core": 8
        }],
        118: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../backend/common"), a = e("../backend/tfjs_backend"), o = e("../engine/topology"),
                s = e("../errors"), u = e("../utils/generic_utils"), l = function (e) {
                    function t(t) {
                        var n = this;
                        if (null == t && (t = {}), n = e.call(this, t) || this, n.dataFormat = null == t.dataFormat ? i.imageDataFormat() : t.dataFormat, null == t.padding) n.padding = [[1, 1], [1, 1]]; else if ("number" == typeof t.padding) n.padding = [[t.padding, t.padding], [t.padding, t.padding]]; else {
                            if (t.padding = t.padding, 2 !== t.padding.length) throw new s.ValueError("ZeroPadding2D expects padding to be a length-2 array, but received a length-" + t.padding.length + " array.");
                            var r = void 0, a = void 0;
                            if ("number" == typeof t.padding[0]) r = [t.padding[0], t.padding[0]], a = [t.padding[1], t.padding[1]]; else {
                                if (t.padding = t.padding, 2 !== t.padding[0].length) throw new s.ValueError("ZeroPadding2D expects height padding to be a length-2 array, but received a length-" + t.padding[0].length + " array.");
                                if (r = t.padding[0], 2 !== t.padding[1].length) throw new s.ValueError("ZeroPadding2D expects width padding to be a length-2 array, but received a length-" + t.padding[1].length + " array.");
                                a = t.padding[1]
                            }
                            n.padding = [r, a]
                        }
                        return n.inputSpec = [new o.InputSpec({ndim: 4})], n
                    }

                    return r(t, e), t.prototype.computeOutputShape = function (e) {
                        e = u.getExactlyOneShape(e);
                        var t, n;
                        return "channelsFirst" === this.dataFormat ? (t = null != e[2] && e[2] >= 0 ? e[2] + this.padding[0][0] + this.padding[0][1] : null, n = null != e[3] && e[3] >= 0 ? e[3] + this.padding[1][0] + this.padding[1][1] : null, [e[0], e[1], t, n]) : (t = null != e[1] && e[1] >= 0 ? e[1] + this.padding[0][0] + this.padding[0][1] : null, n = null != e[2] && e[2] >= 0 ? e[2] + this.padding[1][0] + this.padding[1][1] : null, [e[0], t, n, e[3]])
                    }, t.prototype.call = function (e, t) {
                        return a.spatial2dPadding(u.getExactlyOneTensor(e), this.padding, this.dataFormat)
                    }, t.prototype.getClassName = function () {
                        return "ZeroPadding2D"
                    }, t.prototype.getConfig = function () {
                        var t = {padding: this.padding, dataFormat: this.dataFormat}, n = e.prototype.getConfig.call(this);
                        return Object.assign(t, n), t
                    }, t
                }(o.Layer);
            n.ZeroPadding2D = l, u.ClassNameMap.register("ZeroPadding2D", l)
        }, {
            "../backend/common": 99,
            "../backend/tfjs_backend": 100,
            "../engine/topology": 105,
            "../errors": 107,
            "../utils/generic_utils": 130
        }],
        119: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../backend/tfjs_backend"), a = e("../common"), o = e("../engine/topology"),
                s = e("../engine/topology"), u = e("../errors"), l = e("../utils/conv_utils"),
                c = e("../utils/generic_utils"), p = function (e) {
                    function t(t) {
                        var n = this;
                        return null == t.poolSize && (t.poolSize = 2), n = e.call(this, t) || this, n.poolSize = [t.poolSize], n.strides = null == t.strides ? n.poolSize : [t.strides], n.padding = null == t.padding ? "valid" : t.padding, a.checkPaddingMode(n.padding), n.inputSpec = [new o.InputSpec({ndim: 3})], n
                    }

                    return r(t, e), t.prototype.computeOutputShape = function (e) {
                        return e = c.getExactlyOneShape(e), length = l.convOutputLength(e[1], this.poolSize[0], this.padding, this.strides[0]), [e[0], length, e[2]]
                    }, t.prototype.call = function (e, t) {
                        this.invokeCallHook(e, t), e = i.expandDims(c.getExactlyOneTensor(e), 2);
                        var n = this.poolingFunction(c.getExactlyOneTensor(e), [this.poolSize[0], 1], [this.strides[0], 1], this.padding, "channelsLast");
                        return i.squeeze(n, 2)
                    }, t.prototype.getConfig = function () {
                        var t = {poolSize: this.poolSize, padding: this.padding, strides: this.strides},
                            n = e.prototype.getConfig.call(this);
                        return Object.assign(t, n), t
                    }, t
                }(s.Layer);
            n.Pooling1D = p;
            var h = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "MaxPooling1D"
                }, t.prototype.poolingFunction = function (e, t, n, r, o) {
                    return a.checkDataFormat(o), a.checkPaddingMode(r), i.pool2d(e, t, n, r, o, "max")
                }, t
            }(p);
            n.MaxPooling1D = h, c.ClassNameMap.register("MaxPooling1D", h);
            var d = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "AveragePooling1D"
                }, t.prototype.poolingFunction = function (e, t, n, r, o) {
                    return a.checkDataFormat(o), a.checkPaddingMode(r), i.pool2d(e, t, n, r, o, "avg")
                }, t
            }(p);
            n.AveragePooling1D = d, c.ClassNameMap.register("AveragePooling1D", d);
            var f = function (e) {
                function t(t) {
                    var n = this;
                    return null == t.poolSize && (t.poolSize = [2, 2]), n = e.call(this, t) || this, n.poolSize = Array.isArray(t.poolSize) ? t.poolSize : [t.poolSize, t.poolSize], n.strides = null == t.strides ? n.poolSize : t.strides, n.padding = null == t.padding ? "valid" : t.padding, n.dataFormat = null == t.dataFormat ? "channelsLast" : t.dataFormat, a.checkDataFormat(n.dataFormat), a.checkPaddingMode(n.padding), n.inputSpec = [new o.InputSpec({ndim: 4})], n
                }

                return r(t, e), t.prototype.computeOutputShape = function (e) {
                    e = c.getExactlyOneShape(e);
                    var t = "channelsFirst" === this.dataFormat ? e[2] : e[1],
                        n = "channelsFirst" === this.dataFormat ? e[3] : e[2];
                    return t = l.convOutputLength(t, this.poolSize[0], this.padding, this.strides[0]), n = l.convOutputLength(n, this.poolSize[1], this.padding, this.strides[1]), "channelsFirst" === this.dataFormat ? [e[0], e[1], t, n] : [e[0], t, n, e[3]]
                }, t.prototype.call = function (e, t) {
                    return this.invokeCallHook(e, t), this.poolingFunction(c.getExactlyOneTensor(e), this.poolSize, this.strides, this.padding, this.dataFormat)
                }, t.prototype.getConfig = function () {
                    var t = {
                        poolSize: this.poolSize,
                        padding: this.padding,
                        strides: this.strides,
                        dataFormat: this.dataFormat
                    }, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(s.Layer);
            n.Pooling2D = f;
            var g = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "MaxPooling2D"
                }, t.prototype.poolingFunction = function (e, t, n, r, o) {
                    return a.checkDataFormat(o), a.checkPaddingMode(r), i.pool2d(e, t, n, r, o, "max")
                }, t
            }(f);
            n.MaxPooling2D = g, c.ClassNameMap.register("MaxPooling2D", g);
            var m = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "AveragePooling2D"
                }, t.prototype.poolingFunction = function (e, t, n, r, o) {
                    return a.checkDataFormat(o), a.checkPaddingMode(r), i.pool2d(e, t, n, r, o, "avg")
                }, t
            }(f);
            n.AveragePooling2D = m, c.ClassNameMap.register("AveragePooling2D", m);
            var v = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.inputSpec = [new o.InputSpec({ndim: 3})], n
                }

                return r(t, e), t.prototype.computeOutputShape = function (e) {
                    return [e[0], e[2]]
                }, t.prototype.call = function (e, t) {
                    throw new u.NotImplementedError
                }, t
            }(s.Layer);
            n.GlobalPooling1D = v;
            var y = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "GlobalAveragePooling1D"
                }, t.prototype.call = function (e, t) {
                    var n = c.getExactlyOneTensor(e);
                    return i.mean(n, 1)
                }, t
            }(v);
            n.GlobalAveragePooling1D = y, c.ClassNameMap.register("GlobalAveragePooling1D", y);
            var b = function (e) {
                function t(t) {
                    return e.call(this, t) || this
                }

                return r(t, e), t.prototype.getClassName = function () {
                    return "GlobalMaxPooling1D"
                }, t.prototype.call = function (e, t) {
                    var n = c.getExactlyOneTensor(e);
                    return i.max(n, 1)
                }, t
            }(v);
            n.GlobalMaxPooling1D = b, c.ClassNameMap.register("GlobalMaxPooling1D", b);
            var w = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.dataFormat = null == t.dataFormat ? "channelsLast" : t.dataFormat, a.checkDataFormat(n.dataFormat), n.inputSpec = [new o.InputSpec({ndim: 4})], n
                }

                return r(t, e), t.prototype.computeOutputShape = function (e) {
                    return e = e, "channelsLast" === this.dataFormat ? [e[0], e[3]] : [e[0], e[1]]
                }, t.prototype.call = function (e, t) {
                    throw new u.NotImplementedError
                }, t.prototype.getConfig = function () {
                    var t = {dataFormat: this.dataFormat}, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(s.Layer);
            n.GlobalPooling2D = w;
            var x = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return r(t, e), t.prototype.call = function (e, t) {
                    var n = c.getExactlyOneTensor(e);
                    return "channelsLast" === this.dataFormat ? i.mean(n, [1, 2]) : i.mean(n, [2, 3])
                }, t.prototype.getClassName = function () {
                    return "GlobalAveragePooling2D"
                }, t
            }(w);
            n.GlobalAveragePooling2D = x, c.ClassNameMap.register("GlobalAveragePooling2D", x);
            var A = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return r(t, e), t.prototype.call = function (e, t) {
                    var n = c.getExactlyOneTensor(e);
                    return "channelsLast" === this.dataFormat ? i.max(n, [1, 2]) : i.max(n, [2, 3])
                }, t.prototype.getClassName = function () {
                    return "GlobalMaxPooling2D"
                }, t
            }(w);
            n.GlobalMaxPooling2D = A, c.ClassNameMap.register("GlobalMaxPooling2D", A)
        }, {
            "../backend/tfjs_backend": 100,
            "../common": 102,
            "../engine/topology": 105,
            "../errors": 107,
            "../utils/conv_utils": 129,
            "../utils/generic_utils": 130
        }],
        120: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), i = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("@tensorflow/tfjs-core"), o = e("../activations"), s = e("../backend/tfjs_backend"),
                u = e("../constraints"), l = e("../engine/topology"), c = e("../engine/topology"), p = e("../errors"),
                h = e("../initializers"), d = e("../regularizers"), f = e("../types"), g = e("../utils/generic_utils"),
                m = e("../utils/math_utils"), v = e("./serialization"), y = function (e) {
                    function t(t) {
                        var n, r = e.call(this, t) || this;
                        if (null == t.cell) throw new p.ValueError("cell property is missing for the constructor of RNN.");
                        if (null == (n = Array.isArray(t.cell) ? new S({cells: t.cell}) : t.cell).stateSize) throw new p.ValueError("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");
                        return r.cell = n, r.returnSequences = null != t.returnSequences && t.returnSequences, r.returnState = null != t.returnState && t.returnState, r.goBackwards = null != t.goBackwards && t.goBackwards, r._stateful = null != t.stateful && t.stateful, r.unroll = null != t.unroll && t.unroll, r.supportsMasking = !0, r.inputSpec = [new l.InputSpec({ndim: 3})], r.stateSpec = null, r.states = null, r.numConstants = null, r
                    }

                    return r(t, e), t.prototype.getStates = function () {
                        if (null == this.states) {
                            var e = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
                            return m.range(0, e).map(function (e) {
                                return null
                            })
                        }
                        return this.states
                    }, t.prototype.setStates = function (e) {
                        this.states = e
                    }, t.prototype.computeOutputShape = function (e) {
                        g.isArrayOfShapes(e) && (e = e[0]), e = e;
                        var t = this.cell.stateSize;
                        Array.isArray(t) || (t = [t]);
                        var n, r = t[0];
                        if (n = this.returnSequences ? [e[0], e[1], r] : [e[0], r], this.returnState) {
                            for (var i = [], a = 0, o = t; a < o.length; a++) {
                                var s = o[a];
                                i.push([e[0], s])
                            }
                            return [n].concat(i)
                        }
                        return n
                    }, t.prototype.computeMask = function (e, t) {
                        throw new p.NotImplementedError("computeMask has not been implemented for RNN yet")
                    }, t.prototype.build = function (e) {
                        if (null != this.numConstants) throw new p.NotImplementedError("Constants support is not implemented in RNN yet.");
                        g.isArrayOfShapes(e) && (e = e[0]), e = e;
                        var t = this.stateful ? e[0] : null, n = e[e.length - 1];
                        this.inputSpec[0] = new l.InputSpec({shape: [t, null, n]});
                        var r = [e[0]].concat(e.slice(2));
                        this.cell.build(r);
                        var i;
                        if (i = Array.isArray(this.cell.stateSize) ? this.cell.stateSize : [this.cell.stateSize], null != this.stateSpec) {
                            if (!a.util.arraysEqual(this.stateSpec.map(function (e) {
                                return e.shape[e.shape.length - 1]
                            }), i)) throw new p.ValueError("An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=" + this.stateSpec + "; However cell.stateSize is " + this.cell.stateSize)
                        } else this.stateSpec = i.map(function (e) {
                            return new l.InputSpec({shape: [null, e]})
                        });
                        if (this.stateful) throw new p.NotImplementedError("stateful RNN layer is not implemented yet")
                    }, t.prototype.resetStates = function (e) {
                        if (!this.stateful) throw new p.AttributeError("Cannot call resetState() on an RNN Layer that is not stateful.");
                        var t = this.inputSpec[0].shape[0];
                        if (null == t) throw new p.ValueError("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");
                        if (null == this.states) Array.isArray(this.cell.stateSize) ? this.states = this.cell.stateSize.map(function (e) {
                            return s.zeros([t, e])
                        }) : this.states = [s.zeros([t, this.cell.stateSize])]; else if (null == e) Array.isArray(this.cell.stateSize) ? this.states = this.cell.stateSize.map(function (e) {
                            return s.zeros([t, e])
                        }) : this.states[0] = s.zeros([t, this.cell.stateSize]); else {
                            if (Array.isArray(e) || (e = [e]), e.length !== this.states.length) throw new p.ValueError("Layer " + this.name + " expects " + this.states.length + " state(s), but it received " + e.length + " state value(s). Input received: " + e);
                            for (var n = 0; n < this.states.length; ++n) {
                                var r = e[n],
                                    i = Array.isArray(this.cell.stateSize) ? this.cell.stateSize[n] : this.cell.stateSize,
                                    o = [t, i];
                                if (!a.util.arraysEqual(r.shape, o)) throw new p.ValueError("State " + n + " is incompatible with layer " + this.name + ": expected shape=" + o + ", received shape=" + r.shape);
                                this.states[n] = r
                            }
                        }
                    }, t.prototype.standardizeArgs = function (e, t, n) {
                        function r(e) {
                            return null == e || Array.isArray(e) ? e : [e]
                        }

                        if (Array.isArray(e)) {
                            if (null != t || null != n) throw new p.ValueError("When inputs is an array, neither initialState or constants should be provided");
                            null != this.numConstants && (n = e.slice(e.length - this.numConstants, e.length), e = e.slice(0, e.length - this.numConstants)), e.length > 1 && (t = e.slice(1, e.length)), e = e[0]
                        }
                        return t = r(t), n = r(n), {inputs: e, initialState: t, constants: n}
                    }, t.prototype.apply = function (t, n) {
                        var r = null == n ? null : n.initialState, i = null == n ? null : n.constants;
                        null == n && (n = {});
                        var a = this.standardizeArgs(t, r, i);
                        t = a.inputs, r = a.initialState, i = a.constants;
                        var o = [], s = [];
                        if (null != r) {
                            n.initialState = r, o = o.concat(r), this.stateSpec = [];
                            for (var u = 0, c = r; u < c.length; u++) {
                                var p = c[u];
                                this.stateSpec.push(new l.InputSpec({shape: p.shape}))
                            }
                            s = s.concat(this.stateSpec)
                        }
                        if (null != i && (n.constants = i, o = o.concat(i), this.numConstants = i.length), o[0] instanceof f.SymbolicTensor) {
                            var h = [t].concat(o), d = this.inputSpec.concat(s), g = this.inputSpec;
                            this.inputSpec = d;
                            var m = e.prototype.apply.call(this, h, n);
                            return this.inputSpec = g, m
                        }
                        return e.prototype.apply.call(this, t, n)
                    }, t.prototype.call = function (e, t) {
                        var n = this, r = null == t ? null : t.mask, i = null == t ? null : t.training,
                            a = null == t ? null : t.initialState;
                        if (e = g.getExactlyOneTensor(e), null == a) {
                            if (this.stateful) throw new p.NotImplementedError("stateful RNN layer is not implemented yet.");
                            a = this.getInitialState(e)
                        }
                        if (null != r) throw new p.NotImplementedError("Masking is not implemented for RNN yet");
                        var o = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
                        if (a.length !== o) throw new p.ValueError("RNN Layer has " + o + " state(s) but was passed " + a.length + " initial state(s).");
                        var u = e.shape[1];
                        this.unroll && console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");
                        var l = {training: i}, c = s.rnn(function (e, t) {
                            var r = n.cell.call([e].concat(t), l);
                            return [r[0], r.slice(1)]
                        }, e, a, this.goBackwards, null, null, this.unroll, u), h = c[0], d = c[1], f = c[2];
                        if (this.stateful) throw new p.NotImplementedError("stateful RNN layer is not implemented yet");
                        var m = this.returnSequences ? d : h;
                        return this.returnState ? [m].concat(f) : m
                    }, t.prototype.getInitialState = function (e) {
                        var t = s.zeros(e.shape);
                        return t = s.sum(t, [1, 2]), t = s.expandDims(t), Array.isArray(this.cell.stateSize) ? this.cell.stateSize.map(function (e) {
                            return e > 1 ? s.tile(t, [1, e]) : t
                        }) : this.cell.stateSize > 1 ? [s.tile(t, [1, this.cell.stateSize])] : [t]
                    }, Object.defineProperty(t.prototype, "trainableWeights", {
                        get: function () {
                            return this.trainable ? this.cell.trainableWeights : []
                        }, enumerable: !0, configurable: !0
                    }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
                        get: function () {
                            return this.trainable ? this.cell.nonTrainableWeights : this.cell.weights
                        }, enumerable: !0, configurable: !0
                    }), t.prototype.getClassName = function () {
                        return "RNN"
                    }, t.prototype.getConfig = function () {
                        var t = {
                            returnSequences: this.returnSequences,
                            returnState: this.returnState,
                            goBackwards: this.goBackwards,
                            stateful: this.stateful,
                            unroll: this.unroll
                        };
                        null != this.numConstants && (t.numConstants = this.numConstants);
                        var n = this.cell.getConfig();
                        t.cell = {className: this.cell.getClassName(), config: n};
                        var r = e.prototype.getConfig.call(this);
                        return Object.assign(t, r), t
                    }, t
                }(c.Layer);
            n.RNN = y, g.ClassNameMap.register("RNN", y);
            var b = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return r(t, e), t = i([a.doc({heading: "Layers", subheading: "Classes"})], t)
            }(c.Layer);
            n.RNNCell = b;
            var w = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.DEFAULT_ACTIVATION = "tanh", n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal", n.DEFAULT_BIAS_INITIALIZER = "zeros", n.units = t.units, n.activation = o.getActivation(null == t.activation ? n.DEFAULT_ACTIVATION : t.activation), n.useBias = null == t.useBias || t.useBias, n.kernelInitializer = h.getInitializer(t.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.recurrentInitializer = h.getInitializer(t.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER), n.biasInitializer = h.getInitializer(t.biasInitializer || n.DEFAULT_BIAS_INITIALIZER), n.kernelRegularizer = d.getRegularizer(t.kernelRegularizer), n.recurrentRegularizer = d.getRegularizer(t.recurrentRegularizer), n.biasRegularizer = d.getRegularizer(t.biasRegularizer), n.kernelConstraint = u.getConstraint(t.kernelConstraint), n.recurrentConstraint = u.getConstraint(t.recurrentConstraint), n.biasConstraint = u.getConstraint(t.biasConstraint), n.dropout = m.min([1, m.max([0, null == t.dropout ? 0 : t.dropout])]), n.recurrentDropout = m.min([1, m.max([0, null == t.recurrentDropout ? 0 : t.recurrentDropout])]), n.stateSize = n.units, n
                }

                return r(t, e), t.prototype.build = function (e) {
                    e = g.getExactlyOneShape(e), this.kernel = this.addWeight("kernel", [e[e.length - 1], this.units], null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.recurrentKernel = this.addWeight("recurrent_kernel", [this.units, this.units], null, this.recurrentInitializer, this.recurrentRegularizer, !0, this.recurrentConstraint), this.useBias ? this.bias = this.addWeight("bias", [this.units], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint) : this.bias = null, this.built = !0
                }, t.prototype.call = function (e, t) {
                    if (2 !== (e = e).length) throw new p.ValueError("SimpleRNNCell expects 2 input Tensors, got " + e.length + ".");
                    var n = e[1];
                    if (e = e[0], 0 !== this.dropout || 0 !== this.recurrentDropout) throw new p.NotImplementedError("Dropout is not implemented for SimpleRNNCell yet");
                    var r = s.dot(e, this.kernel.read());
                    null != this.bias && (r = s.biasAdd(r, this.bias.read()));
                    var i = s.add(r, s.dot(n, this.recurrentKernel.read()));
                    return null != this.activation && (i = this.activation(i)), [i, i]
                }, t.prototype.getClassName = function () {
                    return "SimpleRNNCell"
                }, t.prototype.getConfig = function () {
                    var t = {
                        units: this.units,
                        activation: o.serializeActivation(this.activation),
                        useBias: this.useBias,
                        kernelInitializer: h.serializeInitializer(this.kernelInitializer),
                        recurrentInitializer: h.serializeInitializer(this.recurrentInitializer),
                        biasInitializer: h.serializeInitializer(this.biasInitializer),
                        kernelRegularizer: d.serializeRegularizer(this.kernelRegularizer),
                        recurrentRegularizer: d.serializeRegularizer(this.recurrentRegularizer),
                        biasRegularizer: d.serializeRegularizer(this.biasRegularizer),
                        activityRegularizer: d.serializeRegularizer(this.activityRegularizer),
                        kernelConstraint: u.serializeConstraint(this.kernelConstraint),
                        recurrentConstraint: u.serializeConstraint(this.recurrentConstraint),
                        biasConstraint: u.serializeConstraint(this.biasConstraint),
                        dropout: this.dropout,
                        recurrentDropout: this.recurrentDropout
                    }, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(b);
            n.SimpleRNNCell = w, g.ClassNameMap.register("SimpleRNNCell", w);
            var x = function (e) {
                function t(t) {
                    return t.cell = new w(t), e.call(this, t) || this
                }

                return r(t, e), t.prototype.call = function (t, n) {
                    var r = null == n ? null : n.mask, i = null == n ? null : n.training,
                        a = null == n ? null : n.initialState;
                    return e.prototype.call.call(this, t, {mask: r, training: i, initialState: a})
                }, Object.defineProperty(t.prototype, "units", {
                    get: function () {
                        return this.cell.units
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "activation", {
                    get: function () {
                        return this.cell.activation
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "useBias", {
                    get: function () {
                        return this.cell.useBias
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelInitializer", {
                    get: function () {
                        return this.cell.kernelInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentInitializer", {
                    get: function () {
                        return this.cell.recurrentInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasInitializer", {
                    get: function () {
                        return this.cell.biasInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelRegularizer", {
                    get: function () {
                        return this.cell.kernelRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentRegularizer", {
                    get: function () {
                        return this.cell.recurrentRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasRegularizer", {
                    get: function () {
                        return this.cell.biasRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelConstraint", {
                    get: function () {
                        return this.cell.kernelConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentConstraint", {
                    get: function () {
                        return this.cell.recurrentConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasConstraint", {
                    get: function () {
                        return this.cell.biasConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "dropout", {
                    get: function () {
                        return this.cell.dropout
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentDropout", {
                    get: function () {
                        return this.cell.recurrentDropout
                    }, enumerable: !0, configurable: !0
                }), t.prototype.getClassName = function () {
                    return "SimpleRNN"
                }, t.prototype.getConfig = function () {
                    var t = {
                        units: this.units,
                        activation: o.serializeActivation(this.activation),
                        useBias: this.useBias,
                        kernelInitializer: h.serializeInitializer(this.kernelInitializer),
                        recurrentInitializer: h.serializeInitializer(this.recurrentInitializer),
                        biasInitializer: h.serializeInitializer(this.biasInitializer),
                        kernelRegularizer: d.serializeRegularizer(this.kernelRegularizer),
                        recurrentRegularizer: d.serializeRegularizer(this.recurrentRegularizer),
                        biasRegularizer: d.serializeRegularizer(this.biasRegularizer),
                        activityRegularizer: d.serializeRegularizer(this.activityRegularizer),
                        kernelConstraint: u.serializeConstraint(this.kernelConstraint),
                        recurrentConstraint: u.serializeConstraint(this.recurrentConstraint),
                        biasConstraint: u.serializeConstraint(this.biasConstraint),
                        dropout: this.dropout,
                        recurrentDropout: this.recurrentDropout
                    }, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(y);
            n.SimpleRNN = x, g.ClassNameMap.register("SimpleRNN", x);
            var A = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.DEFAULT_ACTIVATION = "tanh", n.DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid", n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal", n.DEFAULT_BIAS_INITIALIZER = "zeros", n.units = t.units, n.activation = o.getActivation(void 0 === t.activation ? n.DEFAULT_ACTIVATION : t.activation), n.recurrentActivation = o.getActivation(void 0 === t.activation ? n.DEFAULT_RECURRENT_ACTIVATION : t.recurrentActivation), n.useBias = null == t.useBias || t.useBias, n.kernelInitializer = h.getInitializer(t.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.recurrentInitializer = h.getInitializer(t.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER), n.biasInitializer = h.getInitializer(t.biasInitializer || n.DEFAULT_BIAS_INITIALIZER), n.kernelRegularizer = d.getRegularizer(t.kernelRegularizer), n.recurrentRegularizer = d.getRegularizer(t.recurrentRegularizer), n.biasRegularizer = d.getRegularizer(t.biasRegularizer), n.kernelConstraint = u.getConstraint(t.kernelConstraint), n.recurrentConstraint = u.getConstraint(t.recurrentConstraint), n.biasConstraint = u.getConstraint(t.biasConstraint), n.dropout = m.min([1, m.max([0, null == t.dropout ? 0 : t.dropout])]), n.recurrentDropout = m.min([1, m.max([0, null == t.recurrentDropout ? 0 : t.recurrentDropout])]), n.implementation = t.implementation, n.stateSize = n.units, n
                }

                return r(t, e), t.prototype.build = function (e) {
                    var t = (e = g.getExactlyOneShape(e))[e.length - 1];
                    this.kernel = this.addWeight("kernel", [t, 3 * this.units], null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.recurrentKernel = this.addWeight("recurrent_kernel", [this.units, 3 * this.units], null, this.recurrentInitializer, this.recurrentRegularizer, !0, this.recurrentConstraint), this.useBias ? this.bias = this.addWeight("bias", [3 * this.units], null, this.biasInitializer, this.biasRegularizer, !0, this.biasConstraint) : this.bias = null, this.built = !0
                }, t.prototype.call = function (e, t) {
                    if (0 !== this.dropout || 0 !== this.recurrentDropout) throw new p.NotImplementedError("Dropout is not implemented for GRUCell yet");
                    if (2 !== (e = e).length) throw new p.ValueError("GRUCell expects 2 input Tensors (inputs, h, c), got " + e.length + ".");
                    var n = e[1];
                    e = e[0];
                    var r, i, a;
                    if (1 === this.implementation) {
                        var o = s.sliceAlongLastAxis(this.kernel.read(), 0, this.units),
                            u = s.sliceAlongLastAxis(this.kernel.read(), this.units, this.units),
                            l = s.sliceAlongLastAxis(this.kernel.read(), 2 * this.units, this.units),
                            c = s.sliceAlongLastAxis(this.recurrentKernel.read(), 0, this.units),
                            h = s.sliceAlongLastAxis(this.recurrentKernel.read(), this.units, this.units),
                            d = s.sliceAlongLastAxis(this.recurrentKernel.read(), 2 * this.units, this.units), f = e,
                            g = e, m = e, v = s.dot(f, o), y = s.dot(g, u), b = s.dot(m, l);
                        if (this.useBias) {
                            var w = s.sliceAlongFirstAxis(this.bias.read(), 0, this.units),
                                x = s.sliceAlongFirstAxis(this.bias.read(), this.units, this.units),
                                A = s.sliceAlongFirstAxis(this.bias.read(), 2 * this.units, this.units);
                            v = s.biasAdd(v, w), y = s.biasAdd(y, x), b = s.biasAdd(b, A)
                        }
                        var E = n, _ = n, T = n;
                        r = this.recurrentActivation(s.add(v, s.dot(E, c))), i = this.recurrentActivation(s.add(y, s.dot(_, h))), a = this.activation(s.add(b, s.dot(s.multiply(i, T), d)))
                    } else {
                        var S = s.dot(e, this.kernel.read());
                        this.useBias && (S = s.biasAdd(S, this.bias.read()));
                        var C = s.dot(n, s.sliceAlongLastAxis(this.recurrentKernel.read(), 0, 2 * this.units)),
                            v = s.sliceAlongLastAxis(S, 0, this.units),
                            y = s.sliceAlongLastAxis(S, this.units, this.units),
                            O = s.sliceAlongLastAxis(C, 0, this.units),
                            k = s.sliceAlongLastAxis(C, this.units, this.units);
                        r = this.recurrentActivation(s.add(v, O)), i = this.recurrentActivation(s.add(y, k));
                        var b = s.sliceAlongLastAxis(S, 2 * this.units, this.units),
                            N = s.dot(s.multiply(i, n), s.sliceAlongLastAxis(this.recurrentKernel.read(), 2 * this.units, this.units));
                        a = this.activation(s.add(b, N))
                    }
                    var R = s.add(s.multiply(r, n), s.multiply(s.scalarPlusArray(s.getScalar(1), s.neg(r)), a));
                    return [R, R]
                }, t.prototype.getClassName = function () {
                    return "GRUCell"
                }, t.prototype.getConfig = function () {
                    var t = {
                        units: this.units,
                        activation: o.serializeActivation(this.activation),
                        useBias: this.useBias,
                        kernelInitializer: h.serializeInitializer(this.kernelInitializer),
                        recurrentInitializer: h.serializeInitializer(this.recurrentInitializer),
                        biasInitializer: h.serializeInitializer(this.biasInitializer),
                        kernelRegularizer: d.serializeRegularizer(this.kernelRegularizer),
                        recurrentRegularizer: d.serializeRegularizer(this.recurrentRegularizer),
                        biasRegularizer: d.serializeRegularizer(this.biasRegularizer),
                        activityRegularizer: d.serializeRegularizer(this.activityRegularizer),
                        kernelConstraint: u.serializeConstraint(this.kernelConstraint),
                        recurrentConstraint: u.serializeConstraint(this.recurrentConstraint),
                        biasConstraint: u.serializeConstraint(this.biasConstraint),
                        dropout: this.dropout,
                        recurrentDropout: this.recurrentDropout,
                        implementation: this.implementation
                    }, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(b);
            n.GRUCell = A, g.ClassNameMap.register("GRUCell", A);
            var E = function (e) {
                function t(t) {
                    return 0 === t.implementation && console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."), t.cell = new A(t), e.call(this, t) || this
                }

                return r(t, e), t.prototype.call = function (t, n) {
                    var r = null == n ? null : n.mask, i = null == n ? null : n.training,
                        a = null == n ? null : n.initialState;
                    return e.prototype.call.call(this, t, {mask: r, training: i, initialState: a})
                }, Object.defineProperty(t.prototype, "units", {
                    get: function () {
                        return this.cell.units
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "activation", {
                    get: function () {
                        return this.cell.activation
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "useBias", {
                    get: function () {
                        return this.cell.useBias
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelInitializer", {
                    get: function () {
                        return this.cell.kernelInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentInitializer", {
                    get: function () {
                        return this.cell.recurrentInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasInitializer", {
                    get: function () {
                        return this.cell.biasInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelRegularizer", {
                    get: function () {
                        return this.cell.kernelRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentRegularizer", {
                    get: function () {
                        return this.cell.recurrentRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasRegularizer", {
                    get: function () {
                        return this.cell.biasRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelConstraint", {
                    get: function () {
                        return this.cell.kernelConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentConstraint", {
                    get: function () {
                        return this.cell.recurrentConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasConstraint", {
                    get: function () {
                        return this.cell.biasConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "dropout", {
                    get: function () {
                        return this.cell.dropout
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentDropout", {
                    get: function () {
                        return this.cell.recurrentDropout
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "implementation", {
                    get: function () {
                        return this.cell.implementation
                    }, enumerable: !0, configurable: !0
                }), t.prototype.getClassName = function () {
                    return "GRU"
                }, t.prototype.getConfig = function () {
                    var t = {
                        units: this.units,
                        activation: o.serializeActivation(this.activation),
                        useBias: this.useBias,
                        kernelInitializer: h.serializeInitializer(this.kernelInitializer),
                        recurrentInitializer: h.serializeInitializer(this.recurrentInitializer),
                        biasInitializer: h.serializeInitializer(this.biasInitializer),
                        kernelRegularizer: d.serializeRegularizer(this.kernelRegularizer),
                        recurrentRegularizer: d.serializeRegularizer(this.recurrentRegularizer),
                        biasRegularizer: d.serializeRegularizer(this.biasRegularizer),
                        activityRegularizer: d.serializeRegularizer(this.activityRegularizer),
                        kernelConstraint: u.serializeConstraint(this.kernelConstraint),
                        recurrentConstraint: u.serializeConstraint(this.recurrentConstraint),
                        biasConstraint: u.serializeConstraint(this.biasConstraint),
                        dropout: this.dropout,
                        recurrentDropout: this.recurrentDropout,
                        implementation: this.implementation
                    }, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t.fromConfig = function (e, t) {
                    return 0 === t.implmentation && (t.implementation = 1), new e(t)
                }, t
            }(y);
            n.GRU = E, g.ClassNameMap.register("GRU", E);
            var _ = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.DEFAULT_ACTIVATION = "tanh", n.DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid", n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal", n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal", n.DEFAULT_BIAS_INITIALIZER = "zeros", n.units = t.units, n.activation = o.getActivation(void 0 === t.activation ? n.DEFAULT_ACTIVATION : t.activation), n.recurrentActivation = o.getActivation(void 0 === t.activation ? n.DEFAULT_RECURRENT_ACTIVATION : t.recurrentActivation), n.useBias = null == t.useBias || t.useBias, n.kernelInitializer = h.getInitializer(t.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER), n.recurrentInitializer = h.getInitializer(t.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER), n.biasInitializer = h.getInitializer(t.biasInitializer || n.DEFAULT_BIAS_INITIALIZER), n.unitForgetBias = t.unitForgetBias, n.kernelRegularizer = d.getRegularizer(t.kernelRegularizer), n.recurrentRegularizer = d.getRegularizer(t.recurrentRegularizer), n.biasRegularizer = d.getRegularizer(t.biasRegularizer), n.kernelConstraint = u.getConstraint(t.kernelConstraint), n.recurrentConstraint = u.getConstraint(t.recurrentConstraint), n.biasConstraint = u.getConstraint(t.biasConstraint), n.dropout = m.min([1, m.max([0, null == t.dropout ? 0 : t.dropout])]), n.recurrentDropout = m.min([1, m.max([0, null == t.recurrentDropout ? 0 : t.recurrentDropout])]), n.implementation = t.implementation, n.stateSize = [n.units, n.units], n
                }

                return r(t, e), t.prototype.build = function (e) {
                    var t = (e = g.getExactlyOneShape(e))[e.length - 1];
                    this.kernel = this.addWeight("kernel", [t, 4 * this.units], null, this.kernelInitializer, this.kernelRegularizer, !0, this.kernelConstraint), this.recurrentKernel = this.addWeight("recurrent_kernel", [this.units, 4 * this.units], null, this.recurrentInitializer, this.recurrentRegularizer, !0, this.recurrentConstraint);
                    var n;
                    if (this.useBias) {
                        if (this.unitForgetBias) {
                            var i = this.biasInitializer, a = this.units;
                            n = new (function (e) {
                                function t() {
                                    return null !== e && e.apply(this, arguments) || this
                                }

                                return r(t, e), t.prototype.apply = function (e, t) {
                                    var n = i.apply([a]), r = (new h.Ones).apply([a]), o = i.apply([2 * a]);
                                    return s.concatAlongFirstAxis(s.concatAlongFirstAxis(n, r), o)
                                }, t.prototype.getClassName = function () {
                                    return "CustomInit"
                                }, t
                            }(h.Initializer))
                        } else n = this.biasInitializer;
                        this.bias = this.addWeight("bias", [4 * this.units], null, n, this.biasRegularizer, !0, this.biasConstraint)
                    } else this.bias = null;
                    this.built = !0
                }, t.prototype.call = function (e, t) {
                    if (0 !== this.dropout || 0 !== this.recurrentDropout) throw new p.NotImplementedError("Dropout is not implemented for LSTMCell yet");
                    if (3 !== (e = e).length) throw new p.ValueError("LSTMCell expects 3 input Tensors (inputs, h, c), got " + e.length + ".");
                    var n = e[1], r = e[2];
                    e = e[0];
                    var i, a, o, u;
                    if (1 === this.implementation) {
                        var l = s.sliceAlongLastAxis(this.kernel.read(), 0, this.units),
                            c = s.sliceAlongLastAxis(this.kernel.read(), this.units, this.units),
                            h = s.sliceAlongLastAxis(this.kernel.read(), 2 * this.units, this.units),
                            d = s.sliceAlongLastAxis(this.kernel.read(), 3 * this.units, this.units),
                            f = s.sliceAlongLastAxis(this.recurrentKernel.read(), 0, this.units),
                            g = s.sliceAlongLastAxis(this.recurrentKernel.read(), this.units, this.units),
                            m = s.sliceAlongLastAxis(this.recurrentKernel.read(), 2 * this.units, this.units),
                            v = s.sliceAlongLastAxis(this.recurrentKernel.read(), 3 * this.units, this.units), y = e,
                            b = e, w = e, x = e, A = s.dot(y, l), E = s.dot(b, c), _ = s.dot(w, h), T = s.dot(x, d);
                        if (this.useBias) {
                            var S = s.sliceAlongFirstAxis(this.bias.read(), 0, this.units),
                                C = s.sliceAlongFirstAxis(this.bias.read(), this.units, this.units),
                                O = s.sliceAlongFirstAxis(this.bias.read(), 2 * this.units, this.units),
                                k = s.sliceAlongFirstAxis(this.bias.read(), 3 * this.units, this.units);
                            A = s.biasAdd(A, S), E = s.biasAdd(E, C), _ = s.biasAdd(_, O), T = s.biasAdd(T, k)
                        }
                        var N = n, R = n, I = n, z = n;
                        i = this.recurrentActivation(s.add(A, s.dot(N, f))), a = this.recurrentActivation(s.add(E, s.dot(R, g))), o = s.add(s.multiply(a, r), s.multiply(i, this.activation(s.add(_, s.dot(I, m))))), u = this.recurrentActivation(s.add(T, s.dot(z, v)))
                    } else {
                        var M = s.dot(e, this.kernel.read());
                        M = s.add(M, s.dot(n, this.recurrentKernel.read())), this.useBias && (M = s.biasAdd(M, this.bias.read()));
                        var D = s.sliceAlongLastAxis(M, 0, this.units),
                            P = s.sliceAlongLastAxis(M, this.units, this.units),
                            L = s.sliceAlongLastAxis(M, 2 * this.units, this.units),
                            F = s.sliceAlongLastAxis(M, 3 * this.units, this.units);
                        i = this.recurrentActivation(D), a = this.recurrentActivation(P), o = s.add(s.multiply(a, r), s.multiply(i, this.activation(L))), u = this.recurrentActivation(F)
                    }
                    var V = s.multiply(u, this.activation(o));
                    return [V, V, o]
                }, t.prototype.getClassName = function () {
                    return "LSTMCell"
                }, t.prototype.getConfig = function () {
                    var t = {
                        units: this.units,
                        activation: o.serializeActivation(this.activation),
                        useBias: this.useBias,
                        kernelInitializer: h.serializeInitializer(this.kernelInitializer),
                        recurrentInitializer: h.serializeInitializer(this.recurrentInitializer),
                        biasInitializer: h.serializeInitializer(this.biasInitializer),
                        unitForgetBias: this.unitForgetBias,
                        kernelRegularizer: d.serializeRegularizer(this.kernelRegularizer),
                        recurrentRegularizer: d.serializeRegularizer(this.recurrentRegularizer),
                        biasRegularizer: d.serializeRegularizer(this.biasRegularizer),
                        activityRegularizer: d.serializeRegularizer(this.activityRegularizer),
                        kernelConstraint: u.serializeConstraint(this.kernelConstraint),
                        recurrentConstraint: u.serializeConstraint(this.recurrentConstraint),
                        biasConstraint: u.serializeConstraint(this.biasConstraint),
                        dropout: this.dropout,
                        recurrentDropout: this.recurrentDropout,
                        implementation: this.implementation
                    }, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t
            }(b);
            n.LSTMCell = _, g.ClassNameMap.register("LSTMCell", _);
            var T = function (e) {
                function t(t) {
                    return 0 === t.implementation && console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."), t.cell = new _(t), e.call(this, t) || this
                }

                return r(t, e), t.prototype.call = function (t, n) {
                    var r = null == n ? null : n.mask, i = null == n ? null : n.training,
                        a = null == n ? null : n.initialState;
                    return e.prototype.call.call(this, t, {mask: r, training: i, initialState: a})
                }, Object.defineProperty(t.prototype, "units", {
                    get: function () {
                        return this.cell.units
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "activation", {
                    get: function () {
                        return this.cell.activation
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "useBias", {
                    get: function () {
                        return this.cell.useBias
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelInitializer", {
                    get: function () {
                        return this.cell.kernelInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentInitializer", {
                    get: function () {
                        return this.cell.recurrentInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasInitializer", {
                    get: function () {
                        return this.cell.biasInitializer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "unitForgetBias", {
                    get: function () {
                        return this.cell.unitForgetBias
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelRegularizer", {
                    get: function () {
                        return this.cell.kernelRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentRegularizer", {
                    get: function () {
                        return this.cell.recurrentRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasRegularizer", {
                    get: function () {
                        return this.cell.biasRegularizer
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "kernelConstraint", {
                    get: function () {
                        return this.cell.kernelConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentConstraint", {
                    get: function () {
                        return this.cell.recurrentConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "biasConstraint", {
                    get: function () {
                        return this.cell.biasConstraint
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "dropout", {
                    get: function () {
                        return this.cell.dropout
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "recurrentDropout", {
                    get: function () {
                        return this.cell.recurrentDropout
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "implementation", {
                    get: function () {
                        return this.cell.implementation
                    }, enumerable: !0, configurable: !0
                }), t.prototype.getClassName = function () {
                    return "LSTM"
                }, t.prototype.getConfig = function () {
                    var t = {
                        units: this.units,
                        activation: o.serializeActivation(this.activation),
                        useBias: this.useBias,
                        kernelInitializer: h.serializeInitializer(this.kernelInitializer),
                        recurrentInitializer: h.serializeInitializer(this.recurrentInitializer),
                        biasInitializer: h.serializeInitializer(this.biasInitializer),
                        unitForgetBias: this.unitForgetBias,
                        kernelRegularizer: d.serializeRegularizer(this.kernelRegularizer),
                        recurrentRegularizer: d.serializeRegularizer(this.recurrentRegularizer),
                        biasRegularizer: d.serializeRegularizer(this.biasRegularizer),
                        activityRegularizer: d.serializeRegularizer(this.activityRegularizer),
                        kernelConstraint: u.serializeConstraint(this.kernelConstraint),
                        recurrentConstraint: u.serializeConstraint(this.recurrentConstraint),
                        biasConstraint: u.serializeConstraint(this.biasConstraint),
                        dropout: this.dropout,
                        recurrentDropout: this.recurrentDropout,
                        implementation: this.implementation
                    }, n = e.prototype.getConfig.call(this);
                    return Object.assign(t, n), t
                }, t.fromConfig = function (e, t) {
                    return 0 === t.implmentation && (t.implementation = 1), new e(t)
                }, t
            }(y);
            n.LSTM = T, g.ClassNameMap.register("LSTM", T);
            var S = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.cells = t.cells, n
                }

                return r(t, e), Object.defineProperty(t.prototype, "stateSize", {
                    get: function () {
                        for (var e = [], t = 0, n = this.cells.slice().reverse(); t < n.length; t++) {
                            var r = n[t];
                            Array.isArray(r.stateSize) ? e.push.apply(e, r.stateSize) : e.push(r.stateSize)
                        }
                        return e
                    }, enumerable: !0, configurable: !0
                }), t.prototype.call = function (e, t) {
                    for (var n = (e = e).slice(1), r = [], i = 0, a = this.cells.slice().reverse(); i < a.length; i++) {
                        l = a[i];
                        Array.isArray(l.stateSize) ? r.push(n.splice(0, l.stateSize.length)) : r.push(n.splice(0, 1))
                    }
                    r.reverse();
                    for (var o, s = [], u = 0; u < this.cells.length; ++u) {
                        var l = this.cells[u];
                        n = r[u], o = 0 === u ? [e[0]].concat(n) : [o[0]].concat(n), o = l.call(o, t), s.push(o.slice(1))
                    }
                    n = [];
                    for (var c = 0, p = s.slice().reverse(); c < p.length; c++) {
                        var h = p[c];
                        n.push.apply(n, h)
                    }
                    return [o[0]].concat(n)
                }, t.prototype.build = function (e) {
                    g.isArrayOfShapes(e) && (e = e[0]), e = e;
                    for (var t, n = 0, r = this.cells; n < r.length; n++) {
                        var i = r[n];
                        i.build(e), t = Array.isArray(i.stateSize) ? i.stateSize[0] : i.stateSize, e = [e[0], t]
                    }
                    this.built = !0
                }, t.prototype.getClassName = function () {
                    return "StackedRNNCells"
                }, t.prototype.getConfig = function () {
                    for (var t = [], n = 0, r = this.cells; n < r.length; n++) {
                        var i = r[n];
                        t.push({className: this.getClassName(), config: i.getConfig()})
                    }
                    var a = {cells: t}, o = e.prototype.getConfig.call(this);
                    return Object.assign(a, o), a
                }, t.fromConfig = function (e, t, n) {
                    void 0 === n && (n = {});
                    for (var r = [], i = 0, a = t.cells; i < a.length; i++) {
                        var o = a[i];
                        r.push(v.deserialize(o, n))
                    }
                    return new e({cells: r})
                }, Object.defineProperty(t.prototype, "trainableWeights", {
                    get: function () {
                        if (!this.trainable) return [];
                        for (var e = [], t = 0, n = this.cells; t < n.length; t++) {
                            var r = n[t];
                            e.push.apply(e, r.trainableWeights)
                        }
                        return e
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
                    get: function () {
                        for (var e = [], t = 0, n = this.cells; t < n.length; t++) {
                            o = n[t];
                            e.push.apply(e, o.nonTrainableWeights)
                        }
                        if (!this.trainable) {
                            for (var r = [], i = 0, a = this.cells; i < a.length; i++) {
                                var o = a[i];
                                r.push.apply(r, o.trainableWeights)
                            }
                            return r.concat(e)
                        }
                        return e
                    }, enumerable: !0, configurable: !0
                }), t.prototype.getWeights = function () {
                    for (var e = [], t = 0, n = this.cells; t < n.length; t++) {
                        var r = n[t];
                        e.push.apply(e, r.weights)
                    }
                    return s.batchGetValue(e)
                }, t.prototype.setWeights = function (e) {
                    for (var t = [], n = 0, r = this.cells; n < r.length; n++) for (var i = r[n], a = i.weights.length, o = e.splice(a), u = 0; u < i.weights.length; ++u) t.push([i.weights[u], o[u]]);
                    s.batchSetValue(t)
                }, t
            }(b);
            n.StackedRNNCells = S, g.ClassNameMap.register("StackedRNNCells", S)
        }, {
            "../activations": 98,
            "../backend/tfjs_backend": 100,
            "../constraints": 103,
            "../engine/topology": 105,
            "../errors": 107,
            "../initializers": 110,
            "../regularizers": 127,
            "../types": 128,
            "../utils/generic_utils": 130,
            "../utils/math_utils": 131,
            "./serialization": 121,
            "@tensorflow/tfjs-core": 8
        }],
        121: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../utils/generic_utils");
            n.deserialize = function (e, t) {
                return void 0 === t && (t = {}), r.deserializeKerasObject(e, r.ClassNameMap.getMap().pythonClassNameMap, t, "layer")
            }
        }, {"../utils/generic_utils": 130}],
        122: [function (e, t, n) {
            "use strict";
            var r = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            Object.defineProperty(n, "__esModule", {value: !0});
            var i = e("../backend/tfjs_backend"), a = e("../engine/topology"), o = e("../errors"),
                s = e("../utils/generic_utils"), u = e("./serialization"), l = function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.layer = t.layer, n
                    }

                    return r(t, e), t.prototype.build = function (e) {
                        this.built = !0
                    }, Object.defineProperty(t.prototype, "trainable", {
                        get: function () {
                            return null != this.layer && this.layer.trainable
                        }, set: function (e) {
                            null != this.layer && (this.layer.trainable = e)
                        }, enumerable: !0, configurable: !0
                    }), Object.defineProperty(t.prototype, "trainableWeights", {
                        get: function () {
                            return this.layer.trainableWeights
                        }, enumerable: !0, configurable: !0
                    }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
                        get: function () {
                            return this.layer.nonTrainableWeights
                        }, enumerable: !0, configurable: !0
                    }), Object.defineProperty(t.prototype, "updates", {
                        get: function () {
                            return this.layer._updates
                        }, enumerable: !0, configurable: !0
                    }), Object.defineProperty(t.prototype, "losses", {
                        get: function () {
                            return this.layer.losses
                        }, enumerable: !0, configurable: !0
                    }), t.prototype.getWeights = function () {
                        return this.layer.getWeights()
                    }, t.prototype.setWeights = function (e) {
                        this.layer.setWeights(e)
                    }, t.prototype.getConfig = function () {
                        var t = {layer: {className: this.layer.getClassName(), config: this.layer.getConfig()}},
                            n = e.prototype.getConfig.call(this);
                        return Object.assign(t, n), t
                    }, t.fromConfig = function (e, t, n) {
                        void 0 === n && (n = {});
                        var r = t.layer, i = u.deserialize(r, n);
                        delete t.layer;
                        var a = {layer: i};
                        return Object.assign(a, t), new e(a)
                    }, t
                }(a.Layer);
            n.Wrapper = l;
            var c = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.supportsMasking = !0, n
                }

                return r(t, e), t.prototype.build = function (t) {
                    if ((t = s.getExactlyOneShape(t)).length < 3) throw new o.ValueError("TimeDistributed layer expects an input shape >= 3D, but received input shape " + JSON.stringify(t));
                    this.inputSpec = [{shape: t}];
                    var n = [t[0]].concat(t.slice(2));
                    this.layer.built || (this.layer.build(n), this.layer.built = !0), e.prototype.build.call(this, t)
                }, t.prototype.computeOutputShape = function (e) {
                    var t = [(e = s.getExactlyOneShape(e))[0]].concat(e.slice(2)), n = this.layer.computeOutputShape(t),
                        r = e[1];
                    return [n[0], r].concat(n.slice(1))
                }, t.prototype.call = function (e, t) {
                    var n = this;
                    e = s.getExactlyOneTensor(e);
                    return i.rnn(function (e, r) {
                        return [n.layer.call(e, t), []]
                    }, e, [], !1, null, null, !1, e.shape[1])[1]
                }, t.prototype.getClassName = function () {
                    return "TimeDistributed"
                }, t
            }(l);
            n.TimeDistributed = c, s.ClassNameMap.register("TimeDistributed", c);
            var p;
            !function (e) {
                e[e.SUM = 0] = "SUM", e[e.MUL = 1] = "MUL", e[e.CONCAT = 2] = "CONCAT", e[e.AVE = 3] = "AVE"
            }(p = n.BidirectionalMergeMode || (n.BidirectionalMergeMode = {})), s.SerializableEnumRegistry.register("merge_mode", {
                sum: p.SUM,
                mul: p.MUL,
                concat: p.CONCAT,
                ave: p.AVE
            });
            var h = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.forwardLayer = t.layer;
                    var r = t.layer.getConfig();
                    if (r.goBackwards = !0 !== r.goBackwards, n.backwardLayer = u.deserialize({
                        className: t.layer.getClassName(),
                        config: r
                    }), n.forwardLayer.name = "forward_" + n.forwardLayer.name, n.backwardLayer.name = "backward_" + n.backwardLayer.name, n.mergeMode = t.mergeMode, t.weights) throw new o.NotImplementedError("weights support is not implemented for Bidirectional layer yet.");
                    return n._stateful = t.layer.stateful, n.returnSequences = t.layer.returnSequences, n.returnState = t.layer.returnState, n.supportsMasking = !0, n._trainable = !0, n.inputSpec = t.layer.inputSpec, n
                }

                return r(t, e), Object.defineProperty(t.prototype, "trainable", {
                    get: function () {
                        return this._trainable
                    }, set: function (e) {
                        this._trainable = e, null != this.forwardLayer && (this.forwardLayer.trainable = e), null != this.backwardLayer && (this.backwardLayer.trainable = e)
                    }, enumerable: !0, configurable: !0
                }), t.prototype.getWeights = function () {
                    return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())
                }, t.prototype.setWeights = function (e) {
                    var t = e.length, n = Math.floor(t / 2);
                    this.forwardLayer.setWeights(e.slice(0, n)), this.backwardLayer.setWeights(e.slice(n))
                }, t.prototype.computeOutputShape = function (e) {
                    var t = this.forwardLayer.computeOutputShape(e);
                    Array.isArray(t) && Array.isArray(t[0]) || (t = [t]), t = t;
                    var n, r, i;
                    return this.returnState ? (i = t.slice(1), n = t[0]) : n = t[0], n = n, this.mergeMode === p.CONCAT ? (n[n.length - 1] *= 2, r = [n]) : r = null == this.mergeMode ? [n, n.slice()] : [n], this.returnState ? null == this.mergeMode ? r.concat(i).concat(i.slice()) : [n].concat(i).concat(i.slice()) : s.singletonOrArray(r)
                }, t.prototype.apply = function (t, n) {
                    var r = null;
                    if (null != n && (r = n.initialState), Array.isArray(t) && (r = t.slice(1), t = t[0]), null == r || 0 === r.length) return e.prototype.apply.call(this, t, n);
                    throw new o.NotImplementedError("The support for initial states is not implemented for Bidirectional layers yet.")
                }, t.prototype.call = function (e, t) {
                    if (null != t.mask) throw new o.NotImplementedError("The support for masking is not implemented for Bidirectional layers yet.");
                    if (null != t.initialState) throw new o.NotImplementedError("The support for initial states is not implemented for Bidirectional layers yet.");
                    var n, r = this.forwardLayer.call(e, t), a = this.backwardLayer.call(e, t);
                    this.returnState && (Array.isArray(r) && (n = r.slice(1).concat(a.slice(1))), r = r[0], a = a[0]), this.returnSequences && (a = i.reverse(a, 1));
                    var s;
                    return this.mergeMode === p.CONCAT ? s = i.concatenate([r, a]) : this.mergeMode === p.SUM ? s = i.add(r, a) : this.mergeMode === p.AVE ? s = i.scalarTimesArray(i.getScalar(.5), i.add(r, a)) : this.mergeMode === p.MUL ? s = i.multiply(r, a) : null == this.mergeMode && (s = [r, a]), this.returnState ? null == this.mergeMode ? s.concat(n) : [s].concat(n) : s
                }, t.prototype.resetStates = function (e) {
                    this.forwardLayer.resetStates(), this.backwardLayer.resetStates()
                }, t.prototype.build = function (e) {
                    var t = this;
                    i.nameScope(this.forwardLayer.name, function () {
                        t.forwardLayer.build(e)
                    }), i.nameScope(this.backwardLayer.name, function () {
                        t.backwardLayer.build(e)
                    }), this.built = !0
                }, Object.defineProperty(t.prototype, "trainableWeights", {
                    get: function () {
                        return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "nonTrainableWeights", {
                    get: function () {
                        return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)
                    }, enumerable: !0, configurable: !0
                }), t.prototype.getClassName = function () {
                    return "Bidirectional"
                }, t
            }(l);
            n.Bidirectional = h, s.ClassNameMap.register("Bidirectional", h)
        }, {
            "../backend/tfjs_backend": 100,
            "../engine/topology": 105,
            "../errors": 107,
            "../utils/generic_utils": 130,
            "./serialization": 121
        }],
        123: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return v.mean(v.square(v.subtract(t, e)), -1)
            }

            function i(e, t) {
                return v.mean(v.abs(v.subtract(t, e)), -1)
            }

            function a(e, t) {
                var n = v.subtract(e, t), r = v.clip(v.abs(e), v.epsilon(), Number.MAX_VALUE),
                    i = v.abs(v.divide(n, r));
                return v.scalarTimesArray(v.getScalar(100), v.mean(i, -1))
            }

            function o(e, t) {
                var n = v.getScalar(1), r = v.clip(t, v.epsilon(), Number.MAX_VALUE),
                    i = v.log(v.scalarPlusArray(n, r)), a = v.clip(e, v.epsilon(), Number.MAX_VALUE),
                    o = v.log(v.scalarPlusArray(n, a));
                return v.mean(v.square(v.subtract(i, o)), -1)
            }

            function s(e, t) {
                var n = v.getScalar(0), r = v.getScalar(1), i = v.maximum(n, v.subtract(r, v.multiply(e, t)));
                return v.mean(v.square(i), -1)
            }

            function u(e, t) {
                var n = v.getScalar(0), r = v.getScalar(1), i = v.maximum(n, v.subtract(r, v.multiply(e, t)));
                return v.mean(i, -1)
            }

            function l(e, t) {
                var n = v.getScalar(0), r = v.getScalar(1), i = v.sum(v.multiply(e, t), -1),
                    a = v.max(v.multiply(v.subtract(r, e), t), -1);
                return v.maximum(n, v.scalarPlusArray(r, v.subtract(a, i)))
            }

            function c(e, t) {
                var n = v.getScalar(Math.log(2)), r = v.subtract(t, e),
                    i = v.subtract(v.add(r, v.softplus(v.scalarTimesArray(v.getScalar(-2), r))), n);
                return v.mean(i, -1)
            }

            function p(e, t) {
                return v.categoricalCrossentropy(e, t)
            }

            function h(e, t) {
                return v.sparseCategoricalCrossentropy(e, t)
            }

            function d(e, t) {
                return v.mean(v.binaryCrossentropy(e, t), -1)
            }

            function f(e, t) {
                var n = v.clip(e, v.epsilon(), 1), r = v.clip(t, v.epsilon(), 1);
                return v.sum(v.multiply(e, v.log(v.divide(n, r))), -1)
            }

            function g(e, t) {
                var n = v.log(v.scalarPlusArray(v.getScalar(v.epsilon()), t));
                return v.mean(v.subtract(t, v.multiply(e, n)), -1)
            }

            function m(e, t) {
                var n = v.l2Normalize(e, -1), r = v.l2Normalize(t, -1), i = v.multiply(n, r);
                return v.neg(v.sum(i, -1))
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var v = e("./backend/tfjs_backend"), y = e("./errors");
            n.meanSquaredError = r, n.meanAbsoluteError = i, n.meanAbsolutePercentageError = a, n.meanSquaredLogarithmicError = o, n.squaredHinge = s, n.hinge = u, n.categoricalHinge = l, n.logcosh = c, n.categoricalCrossentropy = p, n.sparseCategoricalCrossentropy = h, n.binaryCrossentropy = d, n.kullbackLeiblerDivergence = f, n.poisson = g, n.cosineProximity = m, n.mse = r, n.MSE = r, n.mae = i, n.MAE = i, n.mape = a, n.MAPE = a, n.msle = o, n.MSLE = o, n.kld = f, n.KLD = f, n.cosine = m, n.get = function (e) {
                var t = {
                    meanSquaredError: r,
                    meanAbsoluteError: i,
                    meanAbsolutePercentageError: a,
                    meanSquaredLogarithmicError: o,
                    squaredHinge: s,
                    hinge: u,
                    categoricalHinge: l,
                    logcosh: c,
                    categoricalCrossentropy: p,
                    sparseCategoricalCrossentropy: h,
                    binaryCrossentropy: d,
                    kullbackLeiblerDivergence: f,
                    poisson: g,
                    cosineProximity: m
                };
                if ("string" == typeof e) {
                    if (e in t) return t[e];
                    throw new y.ValueError("Unknown loss " + e)
                }
                return e
            }
        }, {"./backend/tfjs_backend": 100, "./errors": 107}],
        124: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                var n = o.scalarTimesArray(o.getScalar(.5), a.onesLike(t)), r = o.cast(o.greater(t, n), e.dtype);
                return o.mean(o.equal(e, r), -1)
            }

            function i(e, t) {
                return o.cast(o.equal(o.argmax(e, -1), o.argmax(t, -1)), "float32")
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var a = e("@tensorflow/tfjs-core"), o = e("./backend/tfjs_backend"), s = e("./errors"), u = e("./losses");
            n.binaryAccuracy = r, n.categoricalAccuracy = i, n.binaryCrossentropy = function (e, t) {
                return o.mean(o.binaryCrossentropy(e, t), -1)
            }, n.sparseCategoricalAccuracy = function (e, t) {
                throw new s.NotImplementedError
            }, n.topKCategoricalAccuracy = function (e, t) {
                throw new s.NotImplementedError
            }, n.sparseTopKCategoricalAccuracy = function (e, t) {
                throw new s.NotImplementedError
            }, n.mse = u.meanSquaredError, n.MSE = u.meanSquaredError, n.mae = u.meanAbsoluteError, n.MAE = u.meanAbsoluteError, n.mape = u.meanAbsolutePercentageError, n.MAPE = u.meanAbsolutePercentageError, n.categoricalCrossentropy = u.categoricalCrossentropy, n.cosine = u.cosineProximity, n.sparseCategoricalCrossentropy = u.sparseCategoricalCrossentropy, n.get = function (e) {
                var t = {
                    binaryAccuracy: r,
                    categoricalAccuracy: i,
                    categoricalCrossentropy: n.categoricalCrossentropy,
                    sparseCategoricalCrossentropy: n.sparseCategoricalCrossentropy,
                    mse: n.mse,
                    MSE: n.MSE,
                    mae: n.mae,
                    MAE: n.MAE,
                    mape: n.mape,
                    MAPE: n.MAPE,
                    cosine: n.cosine
                };
                if ("string" == typeof e && e in t) return t[e];
                if ("string" != typeof e && null != e) return e;
                throw new s.ValueError("Unknown metric " + e)
            }
        }, {"./backend/tfjs_backend": 100, "./errors": 107, "./losses": 123, "@tensorflow/tfjs-core": 8}],
        125: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return o(this, void 0, void 0, function () {
                    var n, r, i, a, o, l, c, p, h, f;
                    return s(this, function (s) {
                        switch (s.label) {
                            case 0:
                                return null != (n = e.modelTopology).model_config && (n = n.model_config), r = g.convertPythonicToTs(n), i = d.deserialize(r, t), null == e.weightsManifest ? [3, 2] : [4, u.loadWeights(e.weightsManifest, e.pathPrefix, i.weights.map(function (e) {
                                    return e.originalName
                                }))];
                            case 1:
                                for (a = s.sent(), o = {}, l = 0, c = i.weights; l < c.length; l++) p = c[l], o[p.name] = a[p.originalName];
                                h = null, f = !0, i.loadWeights(o, h, f), s.label = 2;
                            case 2:
                                return [2, i]
                        }
                    })
                })
            }

            var i = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), a = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            }, o = this && this.__awaiter || function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : new n(function (t) {
                            t(e.value)
                        }).then(o, s)
                    }

                    u((r = r.apply(e, t || [])).next())
                })
            }, s = this && this.__generator || function (e, t) {
                function n(e) {
                    return function (t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, a && (o = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(a, n[1])).done) return o;
                        switch (a = 0, o && (n = [0, o.value]), n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return u.label++, {value: n[1], done: !1};
                            case 5:
                                u.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < o[1]) {
                                    u.label = o[1], o = n;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(n);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {value: n[0] ? n[1] : void 0, done: !0}
                }

                var i, a, o, s, u = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                    return this
                }), s
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var u = e("@tensorflow/tfjs-core"), l = e("./backend/tfjs_backend"), c = e("./engine/topology"),
                p = e("./engine/training"), h = e("./errors"), d = e("./layers/serialization"),
                f = e("./utils/generic_utils"), g = e("./utils/serialization_utils");
            n.modelFromJSON = r, n.loadModelInternal = function (e) {
                return o(this, void 0, void 0, function () {
                    var t, n;
                    return s(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return [4, fetch(e)];
                            case 1:
                                return t = i.sent(), [4, t.json()];
                            case 2:
                                if (null == (n = i.sent()).modelTopology) throw new h.ValueError('Missing field "modelTopology" from model JSON at path' + e);
                                if (null == n.weightsManifest) throw new h.ValueError('Missing field "weightsManifest" from model JSON at path' + e);
                                return n.pathPrefix = e.substring(0, e.lastIndexOf("/")), [2, r(n)]
                        }
                    })
                })
            };
            var m = function (e) {
                function t(t) {
                    var n = e.call(this, {inputs: [], outputs: []}) || this;
                    if (t = t || {}, n.trainable = !0, n._updatable = !0, n.built = !1, n.name = null != t.name ? t.name : l.getUid("sequential_"), null != t.layers) for (var r = 0, i = t.layers; r < i.length; r++) {
                        var a = i[r];
                        n.add(a)
                    }
                    return n
                }

                return i(t, e), n = t, t.prototype.getClassName = function () {
                    return "Sequential"
                }, t.prototype.add = function (e) {
                    if (0 === this.outputs.length) {
                        if (0 === e.inboundNodes.length) {
                            if (null == e.batchInputShape) throw new h.ValueError("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");
                            var t = c.Input({batchShape: e.batchInputShape, dtype: e.dtype, name: e.name + "_input"});
                            e.apply(t)
                        }
                        if (1 !== e.inboundNodes.length) throw new h.ValueError("A layer added to a Sequential model must not already be connected somewhere else. Model received layer " + e.name + " which has " + e.inboundNodes.length + " pre-existing inbound connections.");
                        if (1 !== e.inboundNodes[0].outputTensors.length) throw new h.ValueError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");
                        this.outputs = [e.inboundNodes[0].outputTensors[0]], this.inputs = c.getSourceInputs(this.outputs[0]), new c.Node({
                            outboundLayer: this,
                            inboundLayers: [],
                            nodeIndices: [],
                            tensorIndices: [],
                            inputTensors: this.inputs,
                            outputTensors: this.outputs,
                            inputMasks: f.pyListRepeat(null, this.inputs.length),
                            outputMasks: [null],
                            inputShapes: this.inputs.map(function (e) {
                                return e.shape
                            }),
                            outputShapes: this.outputs[0].shape
                        })
                    } else {
                        var n = e.apply(this.outputs[0]);
                        if (Array.isArray(n)) throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");
                        this.outputs = [n], this.inboundNodes[0].outputTensors = this.outputs, this.inboundNodes[0].outputShapes = [this.outputs[0].shape]
                    }
                    this.layers.push(e), this.built = !1
                }, t.prototype.pop = function () {
                    if (0 === this.layers.length) throw new TypeError("There are no layers in the model.");
                    if (this.layers.pop(), 0 === this.layers.length) this.outputs = [], this.inboundNodes = [], this.outboundNodes = []; else {
                        var e = this.layers.length - 1;
                        this.layers[e].outboundNodes = [], this.outputs = [this.layers[e].output], this.inboundNodes[0].outputTensors = this.outputs, this.inboundNodes[0].outputShapes = [this.outputs[0].shape]
                    }
                }, t.prototype.call = function (e, t) {
                    return null == this.model && this.build(), this.model.call(e, t)
                }, t.prototype.build = function (e) {
                    if (0 === this.inputs.length || 0 === this.outputs.length) throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");
                    this.model = new p.Model({
                        inputs: this.inputs,
                        outputs: this.outputs[0],
                        name: this.name + "_model"
                    }), this.model.trainable = this.trainable, this.model.updatable = this.updatable, this.supportsMasking = this.model.supportsMasking, this.inputLayers = this.model.inputLayers, this.inputLayersNodeIndices = this.model.inputLayersNodeIndices, this.inputLayersTensorIndices = this.model.inputLayersTensorIndices, this.outputLayers = this.model.outputLayers, this.outputLayersNodeIndices = this.model.outputLayersNodeIndices, this.outputLayersTensorIndices = this.model.outputLayersTensorIndices, this.nodesByDepth = this.model.nodesByDepth, this.containerNodes = this.model.containerNodes, this.outputNames = this.model.outputNames, this.inputNames = this.model.inputNames, this.built = !0
                }, t.prototype.setWeights = function (e) {
                    null == this.model && this.build(), this.model.setWeights(e)
                }, Object.defineProperty(t.prototype, "updatable", {
                    get: function () {
                        return this._updatable
                    }, set: function (e) {
                        this.built && (this.model.updatable = e), this._updatable = e
                    }, enumerable: !0, configurable: !0
                }), t.prototype.evaluate = function (e, t, n) {
                    if (void 0 === n && (n = {}), !this.built) throw new h.RuntimeError("The model needs to be compiled before being used.");
                    return this.model.evaluate(e, t, n)
                }, t.prototype.predict = function (e, t) {
                    return void 0 === t && (t = {}), null == this.model && this.build(), this.model.predict(e, t)
                }, t.prototype.predictOnBatch = function (e) {
                    return null == this.model && this.build(), this.model.predictOnBatch(e)
                }, t.prototype.compile = function (e) {
                    this.build(), this.model.compile(e), this.optimizer = this.model.optimizer, this.loss = this.model.loss, this.metrics = this.model.metrics, this.metricsTensors = this.model.metricsTensors, this.metricsNames = this.model.metricsNames
                }, t.prototype.fit = function (e, t, n) {
                    return void 0 === n && (n = {}), o(this, void 0, void 0, function () {
                        return s(this, function (r) {
                            if (!this.built) throw new h.RuntimeError("The model needs to be compiled before being used.");
                            return [2, this.model.fit(e, t, n)]
                        })
                    })
                }, t.fromConfig = function (e, t) {
                    var r = new e({});
                    if (!(r instanceof n)) throw new h.ValueError("Sequential.fromConfig called on non-Sequential input: " + r);
                    if (!(t instanceof Array)) throw new h.ValueError("Sequential.fromConfig called without an array of configs");
                    if (null == t[0].className || "Merge" === t[0].className) throw new h.ValueError("Legacy serialization format not supported yet.");
                    for (var i = 0, a = t; i < a.length; i++) {
                        var o = a[i], s = d.deserialize(o);
                        r.add(s)
                    }
                    return r
                }, t.prototype.getConfig = function () {
                    for (var e = [], t = 0, n = this.layers; t < n.length; t++) {
                        var r = n[t];
                        e.push({className: r.getClassName(), config: r.getConfig()})
                    }
                    return e
                }, a([u.doc({
                    heading: "Models",
                    subheading: "Classes"
                })], t.prototype, "add", null), a([u.doc({
                    heading: "Models",
                    subheading: "Classes",
                    configParamIndices: [2]
                })], t.prototype, "evaluate", null), a([u.doc({
                    heading: "Models",
                    subheading: "Classes",
                    configParamIndices: [1]
                })], t.prototype, "predict", null), a([u.doc({
                    heading: "Models",
                    subheading: "Classes",
                    configParamIndices: [2]
                })], t.prototype, "fit", null), t = n = a([u.doc({heading: "Models", subheading: "Classes"})], t);
                var n
            }(p.Model);
            n.Sequential = m, f.ClassNameMap.register("Sequential", m)
        }, {
            "./backend/tfjs_backend": 100,
            "./engine/topology": 105,
            "./engine/training": 106,
            "./errors": 107,
            "./layers/serialization": 121,
            "./utils/generic_utils": 130,
            "./utils/serialization_utils": 132,
            "@tensorflow/tfjs-core": 8
        }],
        126: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("@tensorflow/tfjs-core"), i = e("./backend/tfjs_backend"), a = e("./errors");
            n.getOptimizer = function (e) {
                var t = {
                    Adagrad: function () {
                        return r.train.adagrad(.01)
                    }, Adam: function () {
                        return r.train.adam(.001, .9, .999, i.epsilon())
                    }, RMSProp: function () {
                        return r.train.rmsprop(.001, .9, null, i.epsilon())
                    }, SGD: function () {
                        return r.train.sgd(.01)
                    }
                };
                if (t.adagrad = t.Adagrad, t.adam = t.Adam, t.rmsprop = t.RMSProp, t.sgd = t.SGD, e in t) return t[e]();
                throw new a.ValueError("Unknown Optimizer " + e)
            }
        }, {"./backend/tfjs_backend": 100, "./errors": 107, "@tensorflow/tfjs-core": 8}],
        127: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return void 0 === t && (t = {}), l.deserializeKerasObject(e, l.ClassNameMap.getMap().pythonClassNameMap, t, "regularizer")
            }

            var i = this && this.__extends || function () {
                var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function (t, n) {
                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), a = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var o = e("@tensorflow/tfjs-core"), s = e("./backend/tfjs_backend"), u = e("./types"),
                l = e("./utils/generic_utils"), c = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }

                    return i(t, e), t
                }(u.Serializable);
            n.Regularizer = c;
            var p = function (e) {
                function t(t) {
                    var n = e.call(this) || this, r = null == t || null == t.l1 ? .01 : t.l1,
                        i = null == t || null == t.l2 ? .01 : t.l2;
                    return n.hasL1 = 0 !== r, n.hasL2 = 0 !== i, n.l1 = s.getScalar(r), n.l2 = s.getScalar(i), n
                }

                return i(t, e), n = t, t.prototype.apply = function (e) {
                    var t = o.zeros([1]);
                    return this.hasL1 && (t = s.add(t, s.sum(s.scalarTimesArray(this.l1, s.abs(e))))), this.hasL2 && (t = s.add(t, s.sum(s.scalarTimesArray(this.l2, s.square(e))))), t.asScalar()
                }, t.prototype.getClassName = function () {
                    return "L1L2"
                }, t.prototype.getConfig = function () {
                    return {l1: this.l1.dataSync()[0], l2: this.l2.dataSync()[0]}
                }, t.fromConfig = function (e, t) {
                    return new n({l1: t.l1, l2: t.l2})
                }, t = n = a([o.doc({heading: "Regularizers", namespace: "regularizers"})], t);
                var n
            }(c);
            n.L1L2 = p, l.ClassNameMap.register("L1L2", p), n.l1 = function (e) {
                return new p({l1: null != e ? e.l1 : null, l2: 0})
            }, n.l2 = function (e) {
                return new p({l2: null != e ? e.l2 : null, l1: 0})
            }, n.REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {l1l2: "L1L2"}, n.serializeRegularizer = function (e) {
                return l.serializeKerasObject(e)
            }, n.deserializeRegularizer = r, n.getRegularizer = function (e) {
                return null == e ? null : "string" == typeof e ? r({
                    className: e in n.REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ? n.REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[e] : e,
                    config: {}
                }) : e instanceof c ? e : r(e)
            }
        }, {"./backend/tfjs_backend": 100, "./types": 128, "./utils/generic_utils": 130, "@tensorflow/tfjs-core": 8}],
        128: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.shape.toString() !== t.shape.toString()) throw new Error("Shape mismatch: " + JSON.stringify(e.shape) + " vs. " + JSON.stringify(t.shape))
            }

            function i(e) {
                return e instanceof p ? e.value() : e
            }

            var a = this && this.__decorate || function (e, t, n, r) {
                var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
                return a > 3 && o && Object.defineProperty(t, n, o), o
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var o, s = e("@tensorflow/tfjs-core"), u = e("./common");
            !function (e) {
                e.float32 = "float32", e.int32 = "int32", e.bool = "bool"
            }(o = n.DType || (n.DType = {}));
            var l = 0, c = function () {
                function e(e, t, n, r, i, a, o) {
                    this.dtype = e, this.shape = t, this.sourceLayer = n, this.inputs = r, this.callArgs = i, this.outputTensorIndex = o, this.id = l++, null != a && (this.originalName = u.getScopedTensorName(a), this.name = u.getUniqueTensorName(this.originalName))
                }

                return e = a([s.doc({heading: "Models", subheading: "Classes"})], e)
            }();
            n.SymbolicTensor = c;
            var p = function () {
                function e(e, t) {
                    this.dtype = o.float32, this.shape = e.shape, this.val = e, this.id = l++, null != t && (this.originalName = u.getScopedTensorName(t), this.name = u.getUniqueTensorName(this.originalName))
                }

                return e.prototype.value = function () {
                    return this.val
                }, e
            }();
            n.ConcreteTensor = p;
            var h = "Variable", d = function () {
                function e(e, t, n, r, a) {
                    void 0 === t && (t = o.float32), void 0 === n && (n = h), void 0 === r && (r = !0), void 0 === a && (a = null), this.dtype = null == t ? o.float32 : t, this.shape = e.shape, this.id = l++, n = null == n ? h : n, this.originalName = u.getScopedTensorName(n), this.name = u.getUniqueTensorName(this.originalName), this.trainable = r, this.constraint = a, this.val = s.variable(i(e), this.trainable, this.name, this.dtype)
                }

                return e.prototype.read = function () {
                    return this.val
                }, e.prototype.write = function (e) {
                    return r(this.val, e), this.val.assign(i(e)), null != this.constraint && this.val.assign(this.constraint.apply(this.val)), this
                }, e
            }();
            n.LayerVariable = d;
            var f = function () {
                return function () {
                }
            }();
            n.Serializable = f
        }, {"./common": 102, "@tensorflow/tfjs-core": 8}],
        129: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            var r = e("../errors"), i = e("./generic_utils"), a = e("./math_utils");
            n.normalizeArray = function (e, t, n) {
                if ("number" == typeof e) return i.pyListRepeat(e, t);
                if (e.length !== t) throw new r.ValueError("The " + n + " argument must be a tuple of " + t + " integers. Received: " + e.length + " elements.");
                for (var o = 0; o < t; ++o) {
                    var s = e[o];
                    if (!a.isInteger(s)) throw new r.ValueError("The " + n + " argument must be a tuple of " + t + " integers. Received: " + JSON.stringify(e) + " including a non-integer number " + s)
                }
                return e
            }, n.convOutputLength = function (e, t, n, r, i) {
                if (void 0 === i && (i = 1), null == e) return e;
                var a, o = t + (t - 1) * (i - 1);
                return a = "same" === n ? e : e - o + 1, Math.floor((a + r - 1) / r)
            }, n.deconvLength = function (e, t, n, i) {
                if (null == e) return null;
                if ("valid" === i) e = e * t + a.max([n - t, 0]); else {
                    if ("same" !== i) throw new r.ValueError("Unsupport padding mode: " + i + ".");
                    e *= t
                }
                return e
            }
        }, {"../errors": 107, "./generic_utils": 130, "./math_utils": 131}],
        130: [function (e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e : [e]
            }

            function i(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            var a = this && this.__assign || Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) {
                    t = arguments[n];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            };
            Object.defineProperty(n, "__esModule", {value: !0});
            var o = e("../errors"), s = e("../types");
            n.pyListRepeat = function (e, t) {
                if (Array.isArray(e)) {
                    for (var n = [], r = 0; r < t; r++) n = n.concat(e);
                    return n
                }
                return (n = new Array(t)).fill(e), n
            }, n.pyGetAttr = function (e, t, n) {
                if (t in e) return e[t];
                if (void 0 === n) throw new o.AttributeError("pyGetAttr: Attempting to get attribute " + t + "with no default value defined");
                return n
            }, n.pyNormalizeArrayIndex = function (e, t) {
                if (null == e || null == t) throw new o.ValueError("Must provide a valid array and index for pyNormalizeArrayIndex(). Got array " + e + " and index " + t + ".");
                var n = "Index " + t + " out of range for array of length " + e.length;
                if (t < 0) {
                    if (t < -e.length) throw new o.IndexError(n);
                    return e.length + t
                }
                if (t >= e.length) throw new o.IndexError(n);
                return t
            }, n.assert = function (e, t) {
                if (!e) throw new o.AssertionError(t)
            }, n.count = function (e, t) {
                for (var n = 0, r = 0, i = e; r < i.length; r++) i[r] === t && n++;
                return n
            };
            var u = function () {
                function e() {
                    this.pythonClassNameMap = {}
                }

                return e.getMap = function () {
                    return null == e.instance && (e.instance = new e), e.instance
                }, e.register = function (e, t) {
                    this.getMap().pythonClassNameMap[e] = [t, t.fromConfig]
                }, e
            }();
            n.ClassNameMap = u;
            var l = function () {
                function e() {
                    this.enumRegistry = {}
                }

                return e.getMap = function () {
                    return null == e.instance && (e.instance = new e), e.instance
                }, e.register = function (t, n) {
                    if (e.contains(t)) throw new o.ValueError("Attempting to register a repeated enum: " + t);
                    this.getMap().enumRegistry[t] = n
                }, e.contains = function (e) {
                    return e in this.getMap().enumRegistry
                }, e.lookup = function (e, t) {
                    return this.getMap().enumRegistry[e][t]
                }, e.reverseLookup = function (e, t) {
                    var n = this.getMap().enumRegistry[e];
                    for (var r in n) if (n[r] === t) return r;
                    throw new o.ValueError("Could not find serialization string for " + t)
                }, e
            }();
            n.SerializableEnumRegistry = l, n.singletonOrArray = function (e) {
                return 1 === e.length ? e[0] : e
            }, n.toList = r, n.objectListUid = function (e) {
                for (var t = "", n = 0, i = r(e); n < i.length; n++) {
                    var a = i[n];
                    if (null == a.id) throw new o.ValueError("Object " + a + " passed to objectListUid without an id");
                    "" !== t && (t += ", "), t += Math.abs(a.id)
                }
                return t
            }, n.isArrayOfShapes = function (e) {
                return Array.isArray(e) && Array.isArray(e[0])
            }, n.normalizeShapeList = function (e) {
                return 0 === e.length ? [] : Array.isArray(e[0]) ? e : [e]
            }, n.toSnakeCase = function (e) {
                var t = e.replace(/(.)([A-Z][a-z0-9]+)/g, "$1_$2").replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
                return "_" !== t[0] ? t : "private" + t
            }, n.toCamelCase = function (e) {
                return e.length <= 1 ? e : -1 === e.indexOf("_") ? e : e.replace(/[_]+(\w|$)/g, function (e, t) {
                    return t.toUpperCase()
                })
            };
            var c = {};
            n.serializeKerasObject = function (e) {
                return null === e || void 0 === e ? null : {className: e.getClassName(), config: e.getConfig()}
            }, n.deserializeKerasObject = function (e, t, n, r) {
                if (void 0 === t && (t = {}), void 0 === n && (n = {}), void 0 === r && (r = "object"), "string" == typeof e) {
                    var i = e, s = void 0;
                    if (i in n) s = n[i]; else if (i in c) s = c[i]; else if (null == (s = t[i])) throw new o.ValueError("Unknown " + r + ": " + e);
                    return s
                }
                var u = e;
                if (null == u.className || null == u.config) throw new o.ValueError(r + ": Improper config format: " + JSON.stringify(u) + ".\n'className' and 'config' must set.");
                var l = u.className, p = void 0, h = void 0;
                if (l in n ? (p = (T = n.get(l))[0], h = T[1]) : l in c ? (p = (S = c.className)[0], h = S[1]) : l in t && (p = (C = t[l])[0], h = C[1]), null == p) throw new o.ValueError("Unknown " + r + ": " + l);
                if (null != h) {
                    for (var d = {}, f = 0, g = Object.keys(c); f < g.length; f++) d[E = g[f]] = c[E];
                    for (var m = 0, v = Object.keys(n); m < v.length; m++) d[E = v[m]] = n[E];
                    u.config.customObjects = d;
                    for (var y = a({}, c), b = 0, w = Object.keys(n); b < w.length; b++) E = w[b], c[E] = n[E];
                    return _ = h(p, u.config), c = a({}, y), _
                }
                for (var y = a({}, c), x = 0, A = Object.keys(n); x < A.length; x++) {
                    var E = A[x];
                    c[E] = n[E]
                }
                var _ = new p(u.config);
                return c = a({}, y), _;
                var T, S, C
            }, n.getExactlyOneTensor = function (e) {
                var t;
                if (Array.isArray(e)) {
                    if (1 !== e.length) throw new o.ValueError("Expected Tensor length to be 1; got " + e.length);
                    t = e[0]
                } else t = e;
                return t
            }, n.getExactlyOneShape = function (e) {
                if (Array.isArray(e) && Array.isArray(e[0])) {
                    if (1 === e.length) return (e = e)[0];
                    throw new o.ValueError("Expected exactly 1 Shape; got " + e.length)
                }
                return e
            }, n.numberCompare = i, n.reverseNumberCompare = function (e, t) {
                return -1 * i(e, t)
            }, n.stringToDType = function (e) {
                switch (e) {
                    case"float32":
                        return s.DType.float32;
                    default:
                        throw new o.ValueError("Invalid dtype: " + e)
                }
            }, n.stringsEqual = function (e, t) {
                if (null == e || null == t) return e === t;
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
                return !0
            }, n.unique = function (e) {
                if (null == e) return e;
                for (var t = [], n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    -1 === t.indexOf(i) && t.push(i)
                }
                return t
            }, n.isObjectEmpty = function (e) {
                if (null == e) throw new o.ValueError("Invalid value in obj: " + JSON.stringify(e));
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0
            }
        }, {"../errors": 107, "../types": 128}],
        131: [function (e, t, n) {
            "use strict";

            function r(e) {
                return e = Array.isArray(e) ? new Float32Array(e) : e, s.tensor1d(e)
            }

            function i(e) {
                return o.sum(r(e)).dataSync()[0]
            }

            function a(e) {
                return i(e) / e.length
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var o = e("@tensorflow/tfjs-core"), s = e("@tensorflow/tfjs-core"), u = e("../errors");
            n.isInteger = function (e) {
                return e === parseInt(e.toString(), 10)
            }, n.arrayProd = function (e, t, n) {
                null == t && (t = 0), null == n && (n = e.length);
                for (var r = 1, i = t; i < n; ++i) r *= e[i];
                return r
            }, n.min = function (e) {
                return o.min(r(e)).dataSync()[0]
            }, n.max = function (e) {
                return o.max(r(e)).dataSync()[0]
            }, n.sum = i, n.mean = a, n.variance = function (e) {
                var t = o.sub(r(e), s.scalar(a(e)));
                return o.sum(o.mulStrict(t, t)).dataSync()[0] / e.length
            }, n.range = function (e, t) {
                if (t < e) throw new u.ValueError("end (" + t + ") < begin (" + e + ") is forbidden.");
                for (var n = [], r = e; r < t; ++r) n.push(r);
                return n
            }
        }, {"../errors": 107, "@tensorflow/tfjs-core": 8}],
        132: [function (e, t, n) {
            "use strict";

            function r(e, t, n) {
                return ("inboundNodes" === e || "outputLayers" === e || "inputLayers" === e) && 0 === t && "string" == typeof n
            }

            function i(e, t) {
                if (null === e) return null;
                if ("string" == typeof e) return s.toCamelCase(e);
                if ("number" == typeof e || "boolean" == typeof e) return e;
                if (e instanceof Array) {
                    for (var n = [], a = e.length, u = 0; u < a; ++u) {
                        var l = e[u];
                        r(t, u, l) ? n.push(l) : n.push(i(l, t))
                    }
                    return n
                }
                for (var c = {}, p = 0, h = Object.keys(e); p < h.length; p++) {
                    var d = h[p], f = e[d];
                    if ("name" === d && "string" == typeof f) c[d] = f; else {
                        var g = s.toCamelCase(d);
                        if (!s.SerializableEnumRegistry.contains(d) || "string" != typeof f && null != f) c[g] = i(f, g); else {
                            var m = s.SerializableEnumRegistry.lookup(d, f);
                            if (null == m) throw new o.ValueError("Unkown value " + f + " for " + d + " Enum");
                            c[g] = m
                        }
                    }
                }
                return c
            }

            function a(e, t) {
                if (null === e || void 0 === e) return null;
                if ("string" == typeof e) return s.toSnakeCase(e);
                if ("number" == typeof e || "boolean" == typeof e) return e;
                if (e instanceof Array) {
                    for (var n = [], i = e.length, o = 0; o < i; ++o) {
                        var u = e[o];
                        r(t, o, u) ? n.push(u) : n.push(a(u, t))
                    }
                    return n
                }
                for (var l = {}, c = 0, p = Object.keys(e); c < p.length; c++) {
                    var h = p[c], d = e[h], f = s.toSnakeCase(h);
                    if ("name" !== h && "className" !== h || "string" != typeof d) if (!s.SerializableEnumRegistry.contains(f) || "string" != typeof d && null != d) l[f] = a(d, h); else {
                        var g = s.SerializableEnumRegistry.reverseLookup(f, d);
                        l[f] = g
                    } else l[f] = d
                }
                return l
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var o = e("../errors"), s = e("../utils/generic_utils");
            n.convertPythonicToTs = i, n.convertTsToPythonic = a
        }, {"../errors": 107, "../utils/generic_utils": 130}],
        133: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            n.version = "0.5.0"
        }, {}],
        134: [function (e, t, n) {
        }, {}],
        135: [function (e, t, n) {
            var r = e("./lib/alea"), i = e("./lib/xor128"), a = e("./lib/xorwow"), o = e("./lib/xorshift7"),
                s = e("./lib/xor4096"), u = e("./lib/tychei"), l = e("./seedrandom");
            l.alea = r, l.xor128 = i, l.xorwow = a, l.xorshift7 = o, l.xor4096 = s, l.tychei = u, t.exports = l
        }, {
            "./lib/alea": 136,
            "./lib/tychei": 137,
            "./lib/xor128": 138,
            "./lib/xor4096": 139,
            "./lib/xorshift7": 140,
            "./lib/xorwow": 141,
            "./seedrandom": 142
        }],
        136: [function (e, t, n) {
            !function (e, t, n) {
                function r(e) {
                    var t = this, n = o();
                    t.next = function () {
                        var e = 2091639 * t.s0 + 2.3283064365386963e-10 * t.c;
                        return t.s0 = t.s1, t.s1 = t.s2, t.s2 = e - (t.c = 0 | e)
                    }, t.c = 1, t.s0 = n(" "), t.s1 = n(" "), t.s2 = n(" "), t.s0 -= n(e), t.s0 < 0 && (t.s0 += 1), t.s1 -= n(e), t.s1 < 0 && (t.s1 += 1), t.s2 -= n(e), t.s2 < 0 && (t.s2 += 1), n = null
                }

                function i(e, t) {
                    return t.c = e.c, t.s0 = e.s0, t.s1 = e.s1, t.s2 = e.s2, t
                }

                function a(e, t) {
                    var n = new r(e), a = t && t.state, o = n.next;
                    return o.int32 = function () {
                        return 4294967296 * n.next() | 0
                    }, o.double = function () {
                        return o() + 1.1102230246251565e-16 * (2097152 * o() | 0)
                    }, o.quick = o, a && ("object" == typeof a && i(a, n), o.state = function () {
                        return i(n, {})
                    }), o
                }

                function o() {
                    var e = 4022871197;
                    return function (t) {
                        t = t.toString();
                        for (var n = 0; n < t.length; n++) {
                            var r = .02519603282416938 * (e += t.charCodeAt(n));
                            r -= e = r >>> 0, e = (r *= e) >>> 0, e += 4294967296 * (r -= e)
                        }
                        return 2.3283064365386963e-10 * (e >>> 0)
                    }
                }

                t && t.exports ? t.exports = a : n && n.amd ? n(function () {
                    return a
                }) : this.alea = a
            }(0, "object" == typeof t && t, !1)
        }, {}],
        137: [function (e, t, n) {
            !function (e, t, n) {
                function r(e) {
                    var t = this, n = "";
                    t.next = function () {
                        var e = t.b, n = t.c, r = t.d, i = t.a;
                        return e = e << 25 ^ e >>> 7 ^ n, n = n - r | 0, r = r << 24 ^ r >>> 8 ^ i, i = i - e | 0, t.b = e = e << 20 ^ e >>> 12 ^ n, t.c = n = n - r | 0, t.d = r << 16 ^ n >>> 16 ^ i, t.a = i - e | 0
                    }, t.a = 0, t.b = 0, t.c = -1640531527, t.d = 1367130551, e === Math.floor(e) ? (t.a = e / 4294967296 | 0, t.b = 0 | e) : n += e;
                    for (var r = 0; r < n.length + 20; r++) t.b ^= 0 | n.charCodeAt(r), t.next()
                }

                function i(e, t) {
                    return t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t
                }

                function a(e, t) {
                    var n = new r(e), a = t && t.state, o = function () {
                        return (n.next() >>> 0) / 4294967296
                    };
                    return o.double = function () {
                        do {
                            var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === e);
                        return e
                    }, o.int32 = n.next, o.quick = o, a && ("object" == typeof a && i(a, n), o.state = function () {
                        return i(n, {})
                    }), o
                }

                t && t.exports ? t.exports = a : n && n.amd ? n(function () {
                    return a
                }) : this.tychei = a
            }(0, "object" == typeof t && t, !1)
        }, {}],
        138: [function (e, t, n) {
            !function (e, t, n) {
                function r(e) {
                    var t = this, n = "";
                    t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.next = function () {
                        var e = t.x ^ t.x << 11;
                        return t.x = t.y, t.y = t.z, t.z = t.w, t.w ^= t.w >>> 19 ^ e ^ e >>> 8
                    }, e === (0 | e) ? t.x = e : n += e;
                    for (var r = 0; r < n.length + 64; r++) t.x ^= 0 | n.charCodeAt(r), t.next()
                }

                function i(e, t) {
                    return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t
                }

                function a(e, t) {
                    var n = new r(e), a = t && t.state, o = function () {
                        return (n.next() >>> 0) / 4294967296
                    };
                    return o.double = function () {
                        do {
                            var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === e);
                        return e
                    }, o.int32 = n.next, o.quick = o, a && ("object" == typeof a && i(a, n), o.state = function () {
                        return i(n, {})
                    }), o
                }

                t && t.exports ? t.exports = a : n && n.amd ? n(function () {
                    return a
                }) : this.xor128 = a
            }(0, "object" == typeof t && t, !1)
        }, {}],
        139: [function (e, t, n) {
            !function (e, t, n) {
                function r(e) {
                    var t = this;
                    t.next = function () {
                        var e, n, r = t.w, i = t.X, a = t.i;
                        return t.w = r = r + 1640531527 | 0, n = i[a + 34 & 127], e = i[a = a + 1 & 127], n ^= n << 13, e ^= e << 17, n ^= n >>> 15, e ^= e >>> 12, n = i[a] = n ^ e, t.i = a, n + (r ^ r >>> 16) | 0
                    }, function (e, t) {
                        var n, r, i, a, o, s = [], u = 128;
                        for (t === (0 | t) ? (r = t, t = null) : (t += "\0", r = 0, u = Math.max(u, t.length)), i = 0, a = -32; a < u; ++a) t && (r ^= t.charCodeAt((a + 32) % t.length)), 0 === a && (o = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, a >= 0 && (o = o + 1640531527 | 0, i = 0 == (n = s[127 & a] ^= r + o) ? i + 1 : 0);
                        for (i >= 128 && (s[127 & (t && t.length || 0)] = -1), i = 127, a = 512; a > 0; --a) r = s[i + 34 & 127], n = s[i = i + 1 & 127], r ^= r << 13, n ^= n << 17, r ^= r >>> 15, n ^= n >>> 12, s[i] = r ^ n;
                        e.w = o, e.X = s, e.i = i
                    }(t, e)
                }

                function i(e, t) {
                    return t.i = e.i, t.w = e.w, t.X = e.X.slice(), t
                }

                function a(e, t) {
                    null == e && (e = +new Date);
                    var n = new r(e), a = t && t.state, o = function () {
                        return (n.next() >>> 0) / 4294967296
                    };
                    return o.double = function () {
                        do {
                            var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === e);
                        return e
                    }, o.int32 = n.next, o.quick = o, a && (a.X && i(a, n), o.state = function () {
                        return i(n, {})
                    }), o
                }

                t && t.exports ? t.exports = a : n && n.amd ? n(function () {
                    return a
                }) : this.xor4096 = a
            }(0, "object" == typeof t && t, !1)
        }, {}],
        140: [function (e, t, n) {
            !function (e, t, n) {
                function r(e) {
                    var t = this;
                    t.next = function () {
                        var e, n, r = t.x, i = t.i;
                        return e = r[i], e ^= e >>> 7, n = e ^ e << 24, e = r[i + 1 & 7], n ^= e ^ e >>> 10, e = r[i + 3 & 7], n ^= e ^ e >>> 3, e = r[i + 4 & 7], n ^= e ^ e << 7, e = r[i + 7 & 7], e ^= e << 13, n ^= e ^ e << 9, r[i] = n, t.i = i + 1 & 7, n
                    }, function (e, t) {
                        var n, r = [];
                        if (t === (0 | t)) r[0] = t; else for (t = "" + t, n = 0; n < t.length; ++n) r[7 & n] = r[7 & n] << 15 ^ t.charCodeAt(n) + r[n + 1 & 7] << 13;
                        for (; r.length < 8;) r.push(0);
                        for (n = 0; n < 8 && 0 === r[n]; ++n) ;
                        for (8 == n ? r[7] = -1 : r[n], e.x = r, e.i = 0, n = 256; n > 0; --n) e.next()
                    }(t, e)
                }

                function i(e, t) {
                    return t.x = e.x.slice(), t.i = e.i, t
                }

                function a(e, t) {
                    null == e && (e = +new Date);
                    var n = new r(e), a = t && t.state, o = function () {
                        return (n.next() >>> 0) / 4294967296
                    };
                    return o.double = function () {
                        do {
                            var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === e);
                        return e
                    }, o.int32 = n.next, o.quick = o, a && (a.x && i(a, n), o.state = function () {
                        return i(n, {})
                    }), o
                }

                t && t.exports ? t.exports = a : n && n.amd ? n(function () {
                    return a
                }) : this.xorshift7 = a
            }(0, "object" == typeof t && t, !1)
        }, {}],
        141: [function (e, t, n) {
            !function (e, t, n) {
                function r(e) {
                    var t = this, n = "";
                    t.next = function () {
                        var e = t.x ^ t.x >>> 2;
                        return t.x = t.y, t.y = t.z, t.z = t.w, t.w = t.v, (t.d = t.d + 362437 | 0) + (t.v = t.v ^ t.v << 4 ^ e ^ e << 1) | 0
                    }, t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.v = 0, e === (0 | e) ? t.x = e : n += e;
                    for (var r = 0; r < n.length + 64; r++) t.x ^= 0 | n.charCodeAt(r), r == n.length && (t.d = t.x << 10 ^ t.x >>> 4), t.next()
                }

                function i(e, t) {
                    return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t.v = e.v, t.d = e.d, t
                }

                function a(e, t) {
                    var n = new r(e), a = t && t.state, o = function () {
                        return (n.next() >>> 0) / 4294967296
                    };
                    return o.double = function () {
                        do {
                            var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === e);
                        return e
                    }, o.int32 = n.next, o.quick = o, a && ("object" == typeof a && i(a, n), o.state = function () {
                        return i(n, {})
                    }), o
                }

                t && t.exports ? t.exports = a : n && n.amd ? n(function () {
                    return a
                }) : this.xorwow = a
            }(0, "object" == typeof t && t, !1)
        }, {}],
        142: [function (e, t, n) {
            !function (n, r) {
                function i(e, t, i) {
                    var p = [],
                        h = u(s((t = 1 == t ? {entropy: !0} : t || {}).entropy ? [e, c(n)] : null == e ? l() : e, 3), p),
                        b = new a(p), w = function () {
                            for (var e = b.g(f), t = m, n = 0; e < v;) e = (e + n) * d, t *= d, n = b.g(1);
                            for (; e >= y;) e /= 2, t /= 2, n >>>= 1;
                            return (e + n) / t
                        };
                    return w.int32 = function () {
                        return 0 | b.g(4)
                    }, w.quick = function () {
                        return b.g(4) / 4294967296
                    }, w.double = w, u(c(b.S), n), (t.pass || i || function (e, t, n, i) {
                        return i && (i.S && o(i, b), e.state = function () {
                            return o(b, {})
                        }), n ? (r[g] = e, t) : e
                    })(w, h, "global" in t ? t.global : this == r, t.state)
                }

                function a(e) {
                    var t, n = e.length, r = this, i = 0, a = r.i = r.j = 0, o = r.S = [];
                    for (n || (e = [n++]); i < d;) o[i] = i++;
                    for (i = 0; i < d; i++) o[i] = o[a = b & a + e[i % n] + (t = o[i])], o[a] = t;
                    (r.g = function (e) {
                        for (var t, n = 0, i = r.i, a = r.j, o = r.S; e--;) t = o[i = b & i + 1], n = n * d + o[b & (o[i] = o[a = b & a + t]) + (o[a] = t)];
                        return r.i = i, r.j = a, n
                    })(d)
                }

                function o(e, t) {
                    return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
                }

                function s(e, t) {
                    var n, r = [], i = typeof e;
                    if (t && "object" == i) for (n in e) try {
                        r.push(s(e[n], t - 1))
                    } catch (e) {
                    }
                    return r.length ? r : "string" == i ? e : e + "\0"
                }

                function u(e, t) {
                    for (var n, r = e + "", i = 0; i < r.length;) t[b & i] = b & (n ^= 19 * t[b & i]) + r.charCodeAt(i++);
                    return c(t)
                }

                function l() {
                    try {
                        var e;
                        return p && (e = p.randomBytes) ? e = e(d) : (e = new Uint8Array(d), (h.crypto || h.msCrypto).getRandomValues(e)), c(e)
                    } catch (e) {
                        var t = h.navigator, r = t && t.plugins;
                        return [+new Date, h, r, h.screen, c(n)]
                    }
                }

                function c(e) {
                    return String.fromCharCode.apply(0, e)
                }

                var p, h = this, d = 256, f = 6, g = "random", m = r.pow(d, f), v = r.pow(2, 52), y = 2 * v, b = d - 1;
                if (r["seed" + g] = i, u(r.random(), n), "object" == typeof t && t.exports) {
                    t.exports = i;
                    try {
                        p = e("crypto")
                    } catch (e) {
                    }
                }
            }([], Math)
        }, {crypto: 134}],
        143: [function (e, t, n) {
            "use strict";

            function r(e) {
                for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t])
            }

            Object.defineProperty(n, "__esModule", {value: !0}), r(e("@tensorflow/tfjs-core")), r(e("@tensorflow/tfjs-layers"));
            var i = e("@tensorflow/tfjs-core"), a = e("@tensorflow/tfjs-layers"), o = e("./version");
            n.version = {"tfjs-core": i.version_core, "tfjs-layers": a.version_layers, tfjs: o.version}
        }, {"./version": 144, "@tensorflow/tfjs-core": 8, "@tensorflow/tfjs-layers": 109}],
        144: [function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {value: !0});
            n.version = "0.10.0"
        }, {}]
    }, {}, [143])(143)
});
