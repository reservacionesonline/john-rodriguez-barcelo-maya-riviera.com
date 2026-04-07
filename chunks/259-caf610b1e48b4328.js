! function() {
    try {
        var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new n.Error).stack;
        e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "def248be-5ed0-4fec-ac38-34b9493fc3d6", n._sentryDebugIdIdentifier = "sentry-dbid-def248be-5ed0-4fec-ac38-34b9493fc3d6")
    } catch (n) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [259], {
        259: (n, e, t) => {
            t.d(e, {
                Ay: () => n4
            });
            var r, o, u = t(40670),
                i = t(44501),
                c = t(14232),
                a = "data-focus-lock",
                f = "data-focus-lock-disabled";

            function d(n, e) {
                return "function" == typeof n ? n(e) : n && (n.current = e), n
            }
            var s = "undefined" != typeof window ? c.useLayoutEffect : c.useEffect,
                l = new WeakMap,
                v = {
                    width: "1px",
                    height: "0px",
                    padding: 0,
                    overflow: "hidden",
                    position: "fixed",
                    top: "1px",
                    left: "1px"
                },
                m = function() {
                    return (m = Object.assign || function(n) {
                        for (var e, t = 1, r = arguments.length; t < r; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                };
            Object.create;

            function p(n) {
                return n
            }

            function b(n, e) {
                void 0 === e && (e = p);
                var t = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return t.length ? t[t.length - 1] : n
                    },
                    useMedium: function(n) {
                        var o = e(n, r);
                        return t.push(o),
                            function() {
                                t = t.filter(function(n) {
                                    return n !== o
                                })
                            }
                    },
                    assignSyncMedium: function(n) {
                        for (r = !0; t.length;) {
                            var e = t;
                            t = [], e.forEach(n)
                        }
                        t = {
                            push: function(e) {
                                return n(e)
                            },
                            filter: function() {
                                return t
                            }
                        }
                    },
                    assignMedium: function(n) {
                        r = !0;
                        var e = [];
                        if (t.length) {
                            var o = t;
                            t = [], o.forEach(n), e = t
                        }
                        var u = function() {
                                var t = e;
                                e = [], t.forEach(n)
                            },
                            i = function() {
                                return Promise.resolve().then(u)
                            };
                        i(), t = {
                            push: function(n) {
                                e.push(n), i()
                            },
                            filter: function(n) {
                                return e = e.filter(n), t
                            }
                        }
                    }
                }
            }

            function h(n, e) {
                return void 0 === e && (e = p), b(n, e)
            }
            Object.create, "function" == typeof SuppressedError && SuppressedError;
            var y = h({}, function(n) {
                    return {
                        target: n.target,
                        currentTarget: n.currentTarget
                    }
                }),
                g = h(),
                E = h(),
                w = function(n) {
                    void 0 === n && (n = {});
                    var e = b(null);
                    return e.options = m({
                        async: !0,
                        ssr: !1
                    }, n), e
                }({
                    async: !0,
                    ssr: "undefined" != typeof document
                }),
                x = (0, c.createContext)(void 0),
                O = [],
                N = (0, c.forwardRef)(function(n, e) {
                    var t, r, o, u, m, p = (0, c.useState)(),
                        b = p[0],
                        h = p[1],
                        E = (0, c.useRef)(),
                        N = (0, c.useRef)(!1),
                        M = (0, c.useRef)(null),
                        I = (0, c.useState)({})[1],
                        k = n.children,
                        S = n.disabled,
                        T = void 0 !== S && S,
                        A = n.noFocusGuards,
                        D = void 0 !== A && A,
                        F = n.persistentFocus,
                        C = n.crossFrame,
                        _ = n.autoFocus,
                        P = (n.allowTextSelection, n.group),
                        L = n.className,
                        R = n.whiteList,
                        j = n.hasPositiveIndices,
                        W = n.shards,
                        G = void 0 === W ? O : W,
                        U = n.as,
                        B = n.lockProps,
                        q = n.sideCar,
                        H = n.returnFocus,
                        V = void 0 !== H && H,
                        K = n.focusOptions,
                        Y = n.onActivation,
                        z = n.onDeactivation,
                        J = (0, c.useState)({})[0],
                        Q = (0, c.useCallback)(function(n) {
                            var e = n.captureFocusRestore;
                            if (!M.current) {
                                var t, r = null == (t = document) ? void 0 : t.activeElement;
                                M.current = r, r !== document.body && (M.current = e(r))
                            }
                            E.current && Y && Y(E.current), N.current = !0, I()
                        }, [Y]),
                        X = (0, c.useCallback)(function() {
                            N.current = !1, z && z(E.current), I()
                        }, [z]),
                        Z = (0, c.useCallback)(function(n) {
                            var e = M.current;
                            if (e) {
                                var t = ("function" == typeof e ? e() : e) || document.body,
                                    r = "function" == typeof V ? V(t) : V;
                                if (r) {
                                    var o = "object" == typeof r ? r : void 0;
                                    M.current = null, n ? Promise.resolve().then(function() {
                                        return t.focus(o)
                                    }) : t.focus(o)
                                }
                            }
                        }, [V]),
                        $ = (0, c.useCallback)(function(n) {
                            N.current && y.useMedium(n)
                        }, []),
                        nn = g.useMedium,
                        ne = (0, c.useCallback)(function(n) {
                            E.current !== n && (E.current = n, h(n))
                        }, []),
                        nt = (0, i.A)(((m = {})[f] = T && "disabled", m[a] = P, m), void 0 === B ? {} : B),
                        nr = !0 !== D,
                        no = nr && "tail" !== D,
                        nu = (t = [e, ne], r = function(n) {
                            return t.forEach(function(e) {
                                return d(e, n)
                            })
                        }, (o = (0, c.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var n = o.value;
                                        n !== value && (o.value = value, o.callback(value, n))
                                    }
                                }
                            }
                        })[0]).callback = r, u = o.facade, s(function() {
                            var n = l.get(u);
                            if (n) {
                                var e = new Set(n),
                                    r = new Set(t),
                                    o = u.current;
                                e.forEach(function(n) {
                                    r.has(n) || d(n, null)
                                }), r.forEach(function(n) {
                                    e.has(n) || d(n, o)
                                })
                            }
                            l.set(u, t)
                        }, [t]), u),
                        ni = (0, c.useMemo)(function() {
                            return {
                                observed: E,
                                shards: G,
                                enabled: !T,
                                active: N.current
                            }
                        }, [T, N.current, G, b]);
                    return c.createElement(c.Fragment, null, nr && [c.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        tabIndex: T ? -1 : 0,
                        style: v
                    }), j ? c.createElement("div", {
                        key: "guard-nearest",
                        "data-focus-guard": !0,
                        tabIndex: T ? -1 : 1,
                        style: v
                    }) : null], !T && c.createElement(q, {
                        id: J,
                        sideCar: w,
                        observed: b,
                        disabled: T,
                        persistentFocus: void 0 !== F && F,
                        crossFrame: void 0 === C || C,
                        autoFocus: void 0 === _ || _,
                        whiteList: R,
                        shards: G,
                        onActivation: Q,
                        onDeactivation: X,
                        returnFocus: Z,
                        focusOptions: K,
                        noFocusGuards: D
                    }), c.createElement(void 0 === U ? "div" : U, (0, i.A)({
                        ref: nu
                    }, nt, {
                        className: L,
                        onBlur: nn,
                        onFocus: $
                    }), c.createElement(x.Provider, {
                        value: ni
                    }, k)), no && c.createElement("div", {
                        "data-focus-guard": !0,
                        tabIndex: T ? -1 : 0,
                        style: v
                    }))
                });

            function M(n, e) {
                return (M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
                    return n.__proto__ = e, n
                })(n, e)
            }
            N.propTypes = {};
            var I = t(10251),
                k = function(n) {
                    for (var e = Array(n.length), t = 0; t < n.length; ++t) e[t] = n[t];
                    return e
                },
                S = function(n) {
                    return Array.isArray(n) ? n : [n]
                },
                T = function(n) {
                    return Array.isArray(n) ? n[0] : n
                },
                A = function(n) {
                    if (n.nodeType !== Node.ELEMENT_NODE) return !1;
                    var e = window.getComputedStyle(n, null);
                    return !!e && !!e.getPropertyValue && ("none" === e.getPropertyValue("display") || "hidden" === e.getPropertyValue("visibility"))
                },
                D = function(n) {
                    return n.parentNode && n.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? n.parentNode.host : n.parentNode
                },
                F = function(n) {
                    return n === document || n && n.nodeType === Node.DOCUMENT_NODE
                },
                C = function(n, e) {
                    var t, r, o = n.get(e);
                    if (void 0 !== o) return o;
                    var u = (t = e, r = C.bind(void 0, n), !t || F(t) || !A(t) && !t.hasAttribute("inert") && r(D(t)));
                    return n.set(e, u), u
                },
                _ = function(n, e) {
                    var t, r = n.get(e);
                    if (void 0 !== r) return r;
                    var o = (t = _.bind(void 0, n), !e || !!F(e) || !!j(e) && t(D(e)));
                    return n.set(e, o), o
                },
                P = function(n) {
                    return n.dataset
                },
                L = function(n) {
                    return "INPUT" === n.tagName
                },
                R = function(n) {
                    return L(n) && "radio" === n.type
                },
                j = function(n) {
                    return ![!0, "true", ""].includes(n.getAttribute("data-no-autofocus"))
                },
                W = function(n) {
                    var e;
                    return !!(n && (null == (e = P(n)) ? void 0 : e.focusGuard))
                },
                G = function(n) {
                    return !W(n)
                },
                U = function(n) {
                    return !!n
                },
                B = function(n, e) {
                    var t = Math.max(0, n.tabIndex),
                        r = Math.max(0, e.tabIndex),
                        o = t - r,
                        u = n.index - e.index;
                    if (o) {
                        if (!t) return 1;
                        if (!r) return -1
                    }
                    return o || u
                },
                q = function(n, e, t) {
                    return k(n).map(function(n, e) {
                        var r = n.tabIndex < 0 && !n.hasAttribute("tabindex") ? 0 : n.tabIndex;
                        return {
                            node: n,
                            index: e,
                            tabIndex: t && -1 === r ? (n.dataset || {}).focusGuard ? 0 : -1 : r
                        }
                    }).filter(function(n) {
                        return !e || n.tabIndex >= 0
                    }).sort(B)
                },
                H = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",
                V = "".concat(H, ", [data-focus-guard]"),
                K = function(n, e) {
                    return k((n.shadowRoot || n).children).reduce(function(n, t) {
                        return n.concat(t.matches(e ? V : H) ? [t] : [], K(t))
                    }, [])
                },
                Y = function(n, e) {
                    var t;
                    return n instanceof HTMLIFrameElement && (null == (t = n.contentDocument) ? void 0 : t.body) ? z([n.contentDocument.body], e) : [n]
                },
                z = function(n, e) {
                    return n.reduce(function(n, t) {
                        var r, o = K(t, e),
                            u = (r = []).concat.apply(r, o.map(function(n) {
                                return Y(n, e)
                            }));
                        return n.concat(u, t.parentNode ? k(t.parentNode.querySelectorAll(H)).filter(function(n) {
                            return n === t
                        }) : [])
                    }, [])
                },
                J = function(n, e) {
                    return k(n).filter(function(n) {
                        return C(e, n)
                    }).filter(function(n) {
                        var e;
                        return !((L(e = n) || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled))
                    })
                },
                Q = function(n, e) {
                    return void 0 === e && (e = new Map), k(n).filter(function(n) {
                        return _(e, n)
                    })
                },
                X = function(n, e, t) {
                    return q(J(z(n, t), e), !0, t)
                },
                Z = function(n, e) {
                    return q(J(z(n), e), !1)
                },
                $ = function(n, e) {
                    return n.shadowRoot ? $(n.shadowRoot, e) : !!(void 0 !== Object.getPrototypeOf(n).contains && Object.getPrototypeOf(n).contains.call(n, e)) || k(n.children).some(function(n) {
                        var t;
                        if (n instanceof HTMLIFrameElement) {
                            var r = null == (t = n.contentDocument) ? void 0 : t.body;
                            return !!r && $(r, e)
                        }
                        return $(n, e)
                    })
                },
                nn = function(n) {
                    try {
                        return n()
                    } catch (n) {
                        return
                    }
                },
                ne = function(n) {
                    if (void 0 === n && (n = document), n && n.activeElement) {
                        var e = n.activeElement;
                        return e.shadowRoot ? ne(e.shadowRoot) : e instanceof HTMLIFrameElement && nn(function() {
                            return e.contentWindow.document
                        }) ? ne(e.contentWindow.document) : e
                    }
                },
                nt = function(n) {
                    void 0 === n && (n = document);
                    var e = ne(n);
                    return !!e && k(n.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some(function(n) {
                        return $(n, e)
                    })
                },
                nr = function(n) {
                    for (var e = new Set, t = n.length, r = 0; r < t; r += 1)
                        for (var o = r + 1; o < t; o += 1) {
                            var u = n[r].compareDocumentPosition(n[o]);
                            (u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && e.add(o), (u & Node.DOCUMENT_POSITION_CONTAINS) > 0 && e.add(r)
                        }
                    return n.filter(function(n, t) {
                        return !e.has(t)
                    })
                },
                no = function(n) {
                    return n.parentNode ? no(n.parentNode) : n
                },
                nu = function(n) {
                    return S(n).filter(Boolean).reduce(function(n, e) {
                        var t = e.getAttribute(a);
                        return n.push.apply(n, t ? nr(k(no(e).querySelectorAll("[".concat(a, '="').concat(t, '"]:not([').concat(f, '="disabled"])')))) : [e]), n
                    }, [])
                },
                ni = function(n, e) {
                    return void 0 === e && (e = ne(T(n).ownerDocument)), !!e && (!e.dataset || !e.dataset.focusGuard) && nu(n).some(function(n) {
                        var t;
                        return $(n, e) || (t = e, !!k(n.querySelectorAll("iframe")).some(function(n) {
                            return n === t
                        }))
                    })
                },
                nc = function(n, e) {
                    n && ("focus" in n && n.focus(e), "contentWindow" in n && n.contentWindow && n.contentWindow.focus())
                },
                na = function(n, e) {
                    if (R(n) && n.name) return e.filter(R).filter(function(e) {
                        return e.name === n.name
                    }).filter(function(n) {
                        return n.checked
                    })[0] || n;
                    return n
                },
                nf = function(n) {
                    var e = new Set;
                    return n.forEach(function(t) {
                        return e.add(na(t, n))
                    }), n.filter(function(n) {
                        return e.has(n)
                    })
                },
                nd = function(n) {
                    return n[0] && n.length > 1 ? na(n[0], n) : n[0]
                },
                ns = function(n, e) {
                    return n.indexOf(na(e, n))
                },
                nl = "NEW_FOCUS",
                nv = function(n, e, t, r, o) {
                    var u = n.length,
                        i = n[0],
                        c = n[u - 1],
                        a = W(r);
                    if (!(r && n.indexOf(r) >= 0)) {
                        var f = void 0 !== r ? t.indexOf(r) : -1,
                            d = o ? t.indexOf(o) : f,
                            s = o ? n.indexOf(o) : -1;
                        if (-1 === f) return -1 !== s ? s : nl;
                        if (-1 === s) return nl;
                        var l = f - d,
                            v = t.indexOf(i),
                            m = t.indexOf(c),
                            p = nf(t),
                            b = void 0 !== r ? p.indexOf(r) : -1,
                            h = o ? p.indexOf(o) : b,
                            y = p.filter(function(n) {
                                return n.tabIndex >= 0
                            }),
                            g = void 0 !== r ? y.indexOf(r) : -1,
                            E = o ? y.indexOf(o) : g;
                        if (!l && s >= 0 || 0 === e.length) return s;
                        var w = ns(n, e[0]),
                            x = ns(n, e[e.length - 1]);
                        if (f <= v && a && Math.abs(l) > 1) return x;
                        if (f >= m && a && Math.abs(l) > 1) return w;
                        if (l && Math.abs(g >= 0 && E >= 0 ? E - g : h - b) > 1) return s;
                        if (f <= v) return x;
                        if (f > m) return w;
                        if (l) return Math.abs(l) > 1 ? s : (u + s + l) % u
                    }
                },
                nm = function(n, e, t) {
                    var r = Q(n.map(function(n) {
                        return n.node
                    }).filter(function(n) {
                        var e, r = null == (e = P(n)) ? void 0 : e.autofocus;
                        return n.autofocus || void 0 !== r && "false" !== r || t.indexOf(n) >= 0
                    }));
                    return r && r.length ? nd(r) : nd(Q(e))
                },
                np = function(n, e) {
                    return void 0 === e && (e = []), e.push(n), n.parentNode && np(n.parentNode.host || n.parentNode, e), e
                },
                nb = function(n, e) {
                    for (var t = np(n), r = np(e), o = 0; o < t.length; o += 1) {
                        var u = t[o];
                        if (r.indexOf(u) >= 0) return u
                    }
                    return !1
                },
                nh = function(n, e, t) {
                    var r = S(n),
                        o = S(e),
                        u = r[0],
                        i = !1;
                    return o.filter(Boolean).forEach(function(n) {
                        i = nb(i || n, n) || i, t.filter(Boolean).forEach(function(n) {
                            var e = nb(u, n);
                            e && (i = !i || $(e, i) ? e : nb(e, i))
                        })
                    }), i
                },
                ny = function(n, e) {
                    return n.reduce(function(n, t) {
                        var r, o;
                        return n.concat((r = t, o = e, J(k(r.querySelectorAll("[".concat("data-autofocus-inside", "]"))).map(function(n) {
                            return z([n])
                        }).reduce(function(n, e) {
                            return n.concat(e)
                        }, []), o)))
                    }, [])
                },
                ng = function(n, e) {
                    var t = new Map;
                    return e.forEach(function(n) {
                        return t.set(n.node, n)
                    }), n.map(function(n) {
                        return t.get(n)
                    }).filter(U)
                },
                nE = function(n, e) {
                    var t = ne(S(n).length > 0 ? document : T(n).ownerDocument),
                        r = nu(n).filter(G),
                        o = nh(t || n, n, r),
                        u = new Map,
                        i = Z(r, u),
                        c = i.filter(function(n) {
                            return G(n.node)
                        });
                    if (c[0]) {
                        var a = Z([o], u).map(function(n) {
                                return n.node
                            }),
                            f = ng(a, c),
                            d = f.map(function(n) {
                                return n.node
                            }),
                            s = f.filter(function(n) {
                                return n.tabIndex >= 0
                            }).map(function(n) {
                                return n.node
                            }),
                            l = nv(d, s, a, t, e);
                        if (l === nl) {
                            var v = nm(i, s, ny(r, u)) || nm(i, d, ny(r, u));
                            return v ? {
                                node: v
                            } : void console.warn("focus-lock: cannot find any node to move focus into")
                        }
                        return void 0 === l ? l : f[l]
                    }
                },
                nw = 0,
                nx = !1,
                nO = function(n, e, t) {
                    void 0 === t && (t = {});
                    var r = nE(n, e);
                    if (!nx && r) {
                        if (nw > 2) {
                            console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), nx = !0, setTimeout(function() {
                                nx = !1
                            }, 1);
                            return
                        }
                        nw++, nc(r.node, t.focusOptions), nw--
                    }
                };

            function nN(n) {
                if (!n) return null;
                if ("undefined" == typeof WeakRef) return function() {
                    return n || null
                };
                var e = n ? new WeakRef(n) : null;
                return function() {
                    return (null == e ? void 0 : e.deref()) || null
                }
            }
            var nM = function(n) {
                    if (!n) return null;
                    for (var e = [], t = n; t && t !== document.body;) e.push({
                        current: nN(t),
                        parent: nN(t.parentElement),
                        left: nN(t.previousElementSibling),
                        right: nN(t.nextElementSibling)
                    }), t = t.parentElement;
                    return {
                        element: nN(n),
                        stack: e,
                        ownerDocument: n.ownerDocument
                    }
                },
                nI = function(n) {
                    if (n)
                        for (var e, t, r, o, u, i = n.stack, c = n.ownerDocument, a = new Map, f = 0; f < i.length; f++) {
                            var d = i[f],
                                s = null == (e = d.parent) ? void 0 : e.call(d);
                            if (s && c.contains(s)) {
                                for (var l = null == (t = d.left) ? void 0 : t.call(d), v = d.current(), m = s.contains(v) ? v : void 0, p = null == (r = d.right) ? void 0 : r.call(d), b = X([s], a), h = null != (u = null != (o = null != m ? m : null == l ? void 0 : l.nextElementSibling) ? o : p) ? u : l; h;) {
                                    for (var y = 0; y < b.length; y++) {
                                        var g = b[y];
                                        if (null == h ? void 0 : h.contains(g.node)) return g.node
                                    }
                                    h = h.nextElementSibling
                                }
                                if (b.length) return b[0].node
                            }
                        }
                },
                nk = function(n) {
                    var e = nM(n);
                    return function() {
                        return nI(e)
                    }
                },
                nS = function(n) {
                    var e = nu(n).filter(G),
                        t = q(z([nh(n, n, e)], !0), !0, !0),
                        r = z(e, !1);
                    return t.map(function(n) {
                        var e = n.node;
                        return {
                            node: e,
                            index: n.index,
                            lockItem: r.indexOf(e) >= 0,
                            guard: W(e)
                        }
                    })
                },
                nT = function(n, e, t) {
                    if (!n || !e) return console.error("no element or scope given"), {};
                    var r = S(e);
                    if (r.every(function(e) {
                            return !$(e, n)
                        })) return console.error("Active element is not contained in the scope"), {};
                    var o = t ? X(r, new Map) : Z(r, new Map),
                        u = o.findIndex(function(e) {
                            return e.node === n
                        });
                    if (-1 !== u) return {
                        prev: o[u - 1],
                        next: o[u + 1],
                        first: o[0],
                        last: o[o.length - 1]
                    }
                },
                nA = function(n, e) {
                    var t = e ? X(S(n), new Map) : Z(S(n), new Map);
                    return {
                        first: t[0],
                        last: t[t.length - 1]
                    }
                },
                nD = function(n, e, t) {
                    void 0 === e && (e = {});
                    var r, o = (r = e, Object.assign({
                            scope: document.body,
                            cycle: !0,
                            onlyTabbable: !0
                        }, r)),
                        u = nT(n, o.scope, o.onlyTabbable);
                    if (u) {
                        var i = t(u, o.cycle);
                        i && nc(i.node, o.focusOptions)
                    }
                },
                nF = function(n, e, t) {
                    var r, o = nA(n, null == (r = e.onlyTabbable) || r)[t];
                    o && nc(o.node, e.focusOptions)
                };

            function nC(n) {
                setTimeout(n, 1)
            }
            var n_ = function(n) {
                    return n && "current" in n ? n.current : n
                },
                nP = function() {
                    return document && document.activeElement === document.body
                },
                nL = null,
                nR = null,
                nj = function() {
                    return null
                },
                nW = null,
                nG = !1,
                nU = !1,
                nB = function(n, e) {
                    nW = {
                        observerNode: n,
                        portaledElement: e
                    }
                };

            function nq(n, e, t, r) {
                var o = null,
                    u = n;
                do {
                    var i = r[u];
                    if (i.guard) i.node.dataset.focusAutoGuard && (o = i);
                    else if (i.lockItem) {
                        if (u !== n) return;
                        o = null
                    } else break
                } while ((u += t) !== e);
                o && (o.node.tabIndex = 0)
            }
            var nH = function(n) {
                    return Z(n, new Map)
                },
                nV = function() {
                    var n = !1;
                    if (nL) {
                        var e = nL,
                            t = e.observed,
                            r = e.persistentFocus,
                            o = e.autoFocus,
                            u = e.shards,
                            i = e.crossFrame,
                            c = e.focusOptions,
                            a = e.noFocusGuards,
                            f = t || nW && nW.portaledElement;
                        if (nP() && nR && nR !== document.body && (!document.body.contains(nR) || !nH([(l = nR).parentNode]).some(function(n) {
                                return n.node === l
                            }))) {
                            var d = nj();
                            d && d.focus()
                        }
                        var s = document && document.activeElement;
                        if (f) {
                            var l, v = [f].concat(u.map(n_).filter(Boolean));
                            if ((!s || (nL.whiteList || function() {
                                    return !0
                                })(s)) && (r || function() {
                                    if (!(i ? !!nG : "meanwhile" === nG) || !a || !nR || nU) return !1;
                                    var n = nH(v),
                                        e = n.findIndex(function(n) {
                                            return n.node === nR
                                        });
                                    return 0 === e || e === n.length - 1
                                }() || !(nP() || nt()) || !nR && o) && (f && !(ni(v) || s && v.some(function(n) {
                                    return function n(e, t, r) {
                                        return t && (t.host === e && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && n(e, t.parentNode, r))
                                    }(s, n, n)
                                }) || nW && nW.portaledElement === s) && (document && !nR && s && !o ? (s.blur && s.blur(), document.body.focus()) : (n = nO(v, nR, {
                                    focusOptions: c
                                }), nW = {})), (nR = document && document.activeElement) !== document.body && (nj = nk(nR)), nG = !1), document && s !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                                var m = document && document.activeElement,
                                    p = nS(v),
                                    b = p.map(function(n) {
                                        return n.node
                                    }).indexOf(m);
                                b > -1 && (p.filter(function(n) {
                                    var e = n.guard,
                                        t = n.node;
                                    return e && t.dataset.focusAutoGuard
                                }).forEach(function(n) {
                                    return n.node.removeAttribute("tabIndex")
                                }), nq(b, p.length, 1, p), nq(b, -1, -1, p))
                            }
                        }
                    }
                    return n
                },
                nK = function(n) {
                    nV() && n && (n.stopPropagation(), n.preventDefault())
                },
                nY = function() {
                    return nC(nV)
                },
                nz = function() {
                    nU = !0
                },
                nJ = function() {
                    nU = !1, nG = "just", nC(function() {
                        nG = "meanwhile"
                    })
                },
                nQ = function() {
                    document.addEventListener("focusin", nK), document.addEventListener("focusout", nY), window.addEventListener("focus", nz), window.addEventListener("blur", nJ)
                },
                nX = function() {
                    document.removeEventListener("focusin", nK), document.removeEventListener("focusout", nY), window.removeEventListener("focus", nz), window.removeEventListener("blur", nJ)
                },
                nZ = {
                    moveFocusInside: nO,
                    focusInside: ni,
                    focusNextElement: function(n, e) {
                        void 0 === e && (e = {}), nD(n, e, function(n, e) {
                            var t = n.next,
                                r = n.first;
                            return t || e && r
                        })
                    },
                    focusPrevElement: function(n, e) {
                        void 0 === e && (e = {}), nD(n, e, function(n, e) {
                            var t = n.prev,
                                r = n.last;
                            return t || e && r
                        })
                    },
                    focusFirstElement: function(n, e) {
                        void 0 === e && (e = {}), nF(n, e, "first")
                    },
                    focusLastElement: function(n, e) {
                        void 0 === e && (e = {}), nF(n, e, "last")
                    },
                    captureFocusRestore: nk
                };
            y.assignSyncMedium(function(n) {
                var e = n.target,
                    t = n.currentTarget;
                t.contains(e) || nB(t, e)
            }), g.assignMedium(nY), E.assignMedium(function(n) {
                return n(nZ)
            });
            let n$ = (r = function(n) {
                return n.filter(function(n) {
                    return !n.disabled
                })
            }, o = function(n) {
                var e = n.slice(-1)[0];
                e && !nL && nQ();
                var t = nL,
                    r = t && e && e.id === t.id;
                nL = e, t && !r && (t.onDeactivation(), n.filter(function(n) {
                    return n.id === t.id
                }).length || t.returnFocus(!e)), e ? (nR = null, r && t.observed === e.observed || e.onActivation(nZ), nV(!0), nC(nV)) : (nX(), nR = null)
            }, function(n) {
                var e, t = [];

                function u() {
                    o(e = r(t.map(function(n) {
                        return n.props
                    })))
                }
                var i = function(r) {
                    function o() {
                        return r.apply(this, arguments) || this
                    }
                    o.prototype = Object.create(r.prototype), o.prototype.constructor = o, M(o, r), o.peek = function() {
                        return e
                    };
                    var i = o.prototype;
                    return i.componentDidMount = function() {
                        t.push(this), u()
                    }, i.componentDidUpdate = function() {
                        u()
                    }, i.componentWillUnmount = function() {
                        var n = t.indexOf(this);
                        t.splice(n, 1), u()
                    }, i.render = function() {
                        return c.createElement(n, this.props)
                    }, o
                }(c.PureComponent);
                return (0, I.A)(i, "displayName", "SideEffect(" + (n.displayName || n.name || "Component") + ")"), i
            })(function() {
                return null
            });
            var n0 = (0, c.forwardRef)(function(n, e) {
                    return c.createElement(N, (0, i.A)({
                        sideCar: n$,
                        ref: e
                    }, n))
                }),
                n1 = N.propTypes || {};
            n1.sideCar, (0, u.A)(n1, ["sideCar"]), n0.propTypes = {};
            let n4 = n0
        }
    }
]);