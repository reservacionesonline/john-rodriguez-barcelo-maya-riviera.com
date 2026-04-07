! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c965a2e1-3dbd-4e1c-a142-d8d2785182d6", e._sentryDebugIdIdentifier = "sentry-dbid-c965a2e1-3dbd-4e1c-a142-d8d2785182d6")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6239], {
        46239: (e, t, n) => {
            let r;
            n.d(t, {
                ie: () => ee,
                XF: () => eb,
                s9: () => eL,
                we: () => eC,
                iQ: () => eT,
                Mk: () => ec,
                bv: () => eP,
                It: () => eM
            });
            var o = n(14232),
                i = n.t(o, 2),
                l = n(84974);

            function u(e) {
                let t = e.activeElement;
                for (;
                    (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null;) {
                    var n;
                    t = t.shadowRoot.activeElement
                }
                return t
            }

            function a(e, t) {
                if (!e || !t) return !1;
                let n = null == t.getRootNode ? void 0 : t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && (0, l.Ng)(n)) {
                    let n = t;
                    for (; n;) {
                        if (e === n) return !0;
                        n = n.parentNode || n.host
                    }
                }
                return !1
            }

            function c() {
                let e = navigator.userAgentData;
                return null != e && e.platform ? e.platform : navigator.platform
            }

            function s() {
                let e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? e.brands.map(e => {
                    let {
                        brand: t,
                        version: n
                    } = e;
                    return t + "/" + n
                }).join(" ") : navigator.userAgent
            }

            function f() {
                return /apple/i.test(navigator.vendor)
            }

            function d() {
                let e = /android/i;
                return e.test(c()) || e.test(s())
            }

            function p(e, t) {
                let n = ["mouse", "pen"];
                return t || n.push("", void 0), n.includes(e)
            }

            function v(e) {
                return (null == e ? void 0 : e.ownerDocument) || document
            }

            function m(e, t) {
                return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target))
            }

            function h(e) {
                return "composedPath" in e ? e.composedPath()[0] : e.target
            }
            var g = n(50698),
                y = n(94882),
                b = 'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                w = "undefined" == typeof Element,
                x = w ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                E = !w && Element.prototype.getRootNode ? function(e) {
                    var t;
                    return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e)
                } : function(e) {
                    return null == e ? void 0 : e.ownerDocument
                },
                R = function e(t, n) {
                    void 0 === n && (n = !0);
                    var r, o = null == t || null == (r = t.getAttribute) ? void 0 : r.call(t, "inert");
                    return "" === o || "true" === o || n && t && e(t.parentNode)
                },
                L = function(e) {
                    var t, n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, "contenteditable");
                    return "" === n || "true" === n
                },
                C = function(e, t, n) {
                    if (R(e)) return [];
                    var r = Array.prototype.slice.apply(e.querySelectorAll(b));
                    return t && x.call(e, b) && r.unshift(e), r = r.filter(n)
                },
                T = function e(t, n, r) {
                    for (var o = [], i = Array.from(t); i.length;) {
                        var l = i.shift();
                        if (!R(l, !1))
                            if ("SLOT" === l.tagName) {
                                var u = l.assignedElements(),
                                    a = e(u.length ? u : l.children, !0, r);
                                r.flatten ? o.push.apply(o, a) : o.push({
                                    scopeParent: l,
                                    candidates: a
                                })
                            } else {
                                x.call(l, b) && r.filter(l) && (n || !t.includes(l)) && o.push(l);
                                var c = l.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(l),
                                    s = !R(c, !1) && (!r.shadowRootFilter || r.shadowRootFilter(l));
                                if (c && s) {
                                    var f = e(!0 === c ? l.children : c.children, !0, r);
                                    r.flatten ? o.push.apply(o, f) : o.push({
                                        scopeParent: l,
                                        candidates: f
                                    })
                                } else i.unshift.apply(i, l.children)
                            }
                    }
                    return o
                },
                S = function(e) {
                    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
                },
                k = function(e) {
                    if (!e) throw Error("No node provided");
                    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || L(e)) && !S(e) ? 0 : e.tabIndex
                },
                A = function(e, t) {
                    var n = k(e);
                    return n < 0 && t && !S(e) ? 0 : n
                },
                P = function(e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
                },
                D = function(e) {
                    return "INPUT" === e.tagName
                },
                M = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n].checked && e[n].form === t) return e[n]
                },
                O = function(e) {
                    if (!e.name) return !0;
                    var t, n = e.form || E(e),
                        r = function(e) {
                            return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                        };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
                    else try {
                        t = r(e.name)
                    } catch (e) {
                        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                    }
                    var o = M(t, e.form);
                    return !o || o === e
                },
                N = function(e) {
                    return D(e) && "radio" === e.type && !O(e)
                },
                q = function(e) {
                    var t, n, r, o, i, l, u, a = e && E(e),
                        c = null == (t = a) ? void 0 : t.host,
                        s = !1;
                    if (a && a !== e)
                        for (s = !!(null != (n = c) && null != (r = n.ownerDocument) && r.contains(c) || null != e && null != (o = e.ownerDocument) && o.contains(e)); !s && c;) s = !!(null != (l = c = null == (i = a = E(c)) ? void 0 : i.host) && null != (u = l.ownerDocument) && u.contains(c));
                    return s
                },
                I = function(e) {
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        r = t.height;
                    return 0 === n && 0 === r
                },
                _ = function(e, t) {
                    var n = t.displayCheck,
                        r = t.getShadowRoot;
                    if ("hidden" === getComputedStyle(e).visibility) return !0;
                    var o = x.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                    if (x.call(o, "details:not([open]) *")) return !0;
                    if (n && "full" !== n && "legacy-full" !== n) {
                        if ("non-zero-area" === n) return I(e)
                    } else {
                        if ("function" == typeof r) {
                            for (var i = e; e;) {
                                var l = e.parentElement,
                                    u = E(e);
                                if (l && !l.shadowRoot && !0 === r(l)) return I(e);
                                e = e.assignedSlot ? e.assignedSlot : l || u === e.ownerDocument ? l : u.host
                            }
                            e = i
                        }
                        if (q(e)) return !e.getClientRects().length;
                        if ("legacy-full" !== n) return !0
                    }
                    return !1
                },
                F = function(e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t;) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var n = 0; n < t.children.length; n++) {
                                    var r = t.children.item(n);
                                    if ("LEGEND" === r.tagName) return !!x.call(t, "fieldset[disabled] *") || !r.contains(e)
                                }
                                return !0
                            }
                            t = t.parentElement
                        }
                    return !1
                },
                B = function(e, t) {
                    return !(t.disabled || R(t) || D(t) && "hidden" === t.type || _(t, e) || "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some(function(e) {
                        return "SUMMARY" === e.tagName
                    }) || F(t))
                },
                U = function(e, t) {
                    return !(N(t) || 0 > k(t)) && !!B(e, t)
                },
                W = function(e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return !!isNaN(t) || !!(t >= 0)
                },
                z = function e(t) {
                    var n = [],
                        r = [];
                    return t.forEach(function(t, o) {
                        var i = !!t.scopeParent,
                            l = i ? t.scopeParent : t,
                            u = A(l, i),
                            a = i ? e(t.candidates) : l;
                        0 === u ? i ? n.push.apply(n, a) : n.push(l) : r.push({
                            documentOrder: o,
                            tabIndex: u,
                            item: t,
                            isScope: i,
                            content: a
                        })
                    }), r.sort(P).reduce(function(e, t) {
                        return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                    }, []).concat(n)
                },
                H = function(e, t) {
                    return z((t = t || {}).getShadowRoot ? T([e], t.includeContainer, {
                        filter: U.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: W
                    }) : C(e, t.includeContainer, U.bind(null, t)))
                },
                V = n(98477);
            let $ = { ...i
                },
                j = $.useInsertionEffect || (e => e());

            function K(e) {
                let t = o.useRef(() => {});
                return j(() => {
                    t.current = e
                }), o.useCallback(function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null == t.current ? void 0 : t.current(...n)
                }, [])
            }
            var Y = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function X() {
                return (X = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            let Q = !1,
                Z = 0,
                J = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Z++,
                G = $.useId || function() {
                    let [e, t] = o.useState(() => Q ? J() : void 0);
                    return Y(() => {
                        null == e && t(J())
                    }, []), o.useEffect(() => {
                        Q = !0
                    }, []), e
                },
                ee = o.forwardRef(function(e, t) {
                    let {
                        context: {
                            placement: n,
                            elements: {
                                floating: r
                            },
                            middlewareData: {
                                arrow: i
                            }
                        },
                        width: l = 14,
                        height: u = 7,
                        tipRadius: a = 0,
                        strokeWidth: c = 0,
                        staticOffset: s,
                        stroke: f,
                        d,
                        style: {
                            transform: p,
                            ...v
                        } = {},
                        ...m
                    } = e, h = G();
                    if (!r) return null;
                    let y = 2 * c,
                        b = y / 2,
                        w = l / 2 * (-(a / 8) + 1),
                        x = u / 2 * a / 4,
                        [E, R] = n.split("-"),
                        L = g.iD.isRTL(r),
                        C = !!d,
                        T = "top" === E || "bottom" === E,
                        S = s && "end" === R ? "bottom" : "top",
                        k = s && "end" === R ? "right" : "left";
                    s && L && (k = "end" === R ? "left" : "right");
                    let A = (null == i ? void 0 : i.x) != null ? s || i.x : "",
                        P = (null == i ? void 0 : i.y) != null ? s || i.y : "",
                        D = d || "M0,0 H" + l + (" L" + (l - w)) + "," + (u - x) + (" Q" + l / 2 + "," + u + " " + w) + "," + (u - x) + " Z",
                        M = {
                            top: C ? "rotate(180deg)" : "",
                            left: C ? "rotate(90deg)" : "rotate(-90deg)",
                            bottom: C ? "" : "rotate(180deg)",
                            right: C ? "rotate(-90deg)" : "rotate(90deg)"
                        }[E];
                    return o.createElement("svg", X({}, m, {
                        "aria-hidden": !0,
                        ref: t,
                        width: C ? l : l + y,
                        height: l,
                        viewBox: "0 0 " + l + " " + (u > l ? u : l),
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            [k]: A,
                            [S]: P,
                            [E]: T || C ? "100%" : "calc(100% - " + y / 2 + "px)",
                            transform: "" + M + (null != p ? p : ""),
                            ...v
                        }
                    }), y > 0 && o.createElement("path", {
                        clipPath: "url(#" + h + ")",
                        fill: "none",
                        stroke: f,
                        strokeWidth: y + +!d,
                        d: D
                    }), o.createElement("path", {
                        stroke: y && !d ? m.fill : "none",
                        d: D
                    }), o.createElement("clipPath", {
                        id: h
                    }, o.createElement("rect", {
                        x: -b,
                        y: b * (C ? -1 : 1),
                        width: l + y,
                        height: l
                    })))
                }),
                et = o.createContext(null),
                en = o.createContext(null),
                er = () => {
                    var e;
                    return (null == (e = o.useContext(et)) ? void 0 : e.id) || null
                },
                eo = () => o.useContext(en);

            function ei(e) {
                return "data-floating-ui-" + e
            }

            function el(e) {
                let t = (0, o.useRef)(e);
                return Y(() => {
                    t.current = e
                }), t
            }
            let eu = ei("safe-polygon");

            function ea(e, t, n) {
                return n && !p(n) ? 0 : "number" == typeof e ? e : null == e ? void 0 : e[t]
            }

            function ec(e, t) {
                void 0 === t && (t = {});
                let {
                    open: n,
                    onOpenChange: r,
                    dataRef: i,
                    events: u,
                    elements: {
                        domReference: c,
                        floating: s
                    }
                } = e, {
                    enabled: f = !0,
                    delay: d = 0,
                    handleClose: m = null,
                    mouseOnly: h = !1,
                    restMs: g = 0,
                    move: y = !0
                } = t, b = eo(), w = er(), x = el(m), E = el(d), R = o.useRef(), L = o.useRef(-1), C = o.useRef(), T = o.useRef(-1), S = o.useRef(!0), k = o.useRef(!1), A = o.useRef(() => {}), P = o.useCallback(() => {
                    var e;
                    let t = null == (e = i.current.openEvent) ? void 0 : e.type;
                    return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
                }, [i]);
                o.useEffect(() => {
                    if (f) return u.on("openchange", e), () => {
                        u.off("openchange", e)
                    };

                    function e(e) {
                        let {
                            open: t
                        } = e;
                        t || (clearTimeout(L.current), clearTimeout(T.current), S.current = !0)
                    }
                }, [f, u]), o.useEffect(() => {
                    if (!f || !x.current || !n) return;

                    function e(e) {
                        P() && r(!1, e, "hover")
                    }
                    let t = v(s).documentElement;
                    return t.addEventListener("mouseleave", e), () => {
                        t.removeEventListener("mouseleave", e)
                    }
                }, [s, n, r, f, x, P]);
                let D = o.useCallback(function(e, t, n) {
                        void 0 === t && (t = !0), void 0 === n && (n = "hover");
                        let o = ea(E.current, "close", R.current);
                        o && !C.current ? (clearTimeout(L.current), L.current = window.setTimeout(() => r(!1, e, n), o)) : t && (clearTimeout(L.current), r(!1, e, n))
                    }, [E, r]),
                    M = K(() => {
                        A.current(), C.current = void 0
                    }),
                    O = K(() => {
                        if (k.current) {
                            let e = v(s).body;
                            e.style.pointerEvents = "", e.removeAttribute(eu), k.current = !1
                        }
                    });
                return o.useEffect(() => {
                    if (f && (0, l.vq)(c)) return n && c.addEventListener("mouseleave", u), null == s || s.addEventListener("mouseleave", u), y && c.addEventListener("mousemove", t, {
                        once: !0
                    }), c.addEventListener("mouseenter", t), c.addEventListener("mouseleave", o), () => {
                        n && c.removeEventListener("mouseleave", u), null == s || s.removeEventListener("mouseleave", u), y && c.removeEventListener("mousemove", t), c.removeEventListener("mouseenter", t), c.removeEventListener("mouseleave", o)
                    };

                    function e() {
                        return !!i.current.openEvent && ["click", "mousedown"].includes(i.current.openEvent.type)
                    }

                    function t(e) {
                        if (clearTimeout(L.current), S.current = !1, h && !p(R.current) || g > 0 && !ea(E.current, "open")) return;
                        let t = ea(E.current, "open", R.current);
                        t ? L.current = window.setTimeout(() => {
                            r(!0, e, "hover")
                        }, t) : r(!0, e, "hover")
                    }

                    function o(t) {
                        if (e()) return;
                        A.current();
                        let r = v(s);
                        if (clearTimeout(T.current), x.current && i.current.floatingContext) {
                            n || clearTimeout(L.current), C.current = x.current({ ...i.current.floatingContext,
                                tree: b,
                                x: t.clientX,
                                y: t.clientY,
                                onClose() {
                                    O(), M(), D(t, !0, "safe-polygon")
                                }
                            });
                            let e = C.current;
                            r.addEventListener("mousemove", e), A.current = () => {
                                r.removeEventListener("mousemove", e)
                            };
                            return
                        }
                        "touch" === R.current && a(s, t.relatedTarget) || D(t)
                    }

                    function u(t) {
                        !e() && i.current.floatingContext && (null == x.current || x.current({ ...i.current.floatingContext,
                            tree: b,
                            x: t.clientX,
                            y: t.clientY,
                            onClose() {
                                O(), M(), D(t)
                            }
                        })(t))
                    }
                }, [c, s, f, e, h, g, y, D, M, O, r, n, b, E, x, i]), Y(() => {
                    var e, t;
                    if (f && n && null != (e = x.current) && e.__options.blockPointerEvents && P()) {
                        let e = v(s).body;
                        if (e.setAttribute(eu, ""), e.style.pointerEvents = "none", k.current = !0, (0, l.vq)(c) && s) {
                            let e = null == b || null == (t = b.nodesRef.current.find(e => e.id === w)) || null == (t = t.context) ? void 0 : t.elements.floating;
                            return e && (e.style.pointerEvents = ""), c.style.pointerEvents = "auto", s.style.pointerEvents = "auto", () => {
                                c.style.pointerEvents = "", s.style.pointerEvents = ""
                            }
                        }
                    }
                }, [f, n, w, s, c, b, x, P]), Y(() => {
                    n || (R.current = void 0, M(), O())
                }, [n, M, O]), o.useEffect(() => () => {
                    M(), clearTimeout(L.current), clearTimeout(T.current), O()
                }, [f, c, M, O]), o.useMemo(() => {
                    if (!f) return {};

                    function e(e) {
                        R.current = e.pointerType
                    }
                    return {
                        reference: {
                            onPointerDown: e,
                            onPointerEnter: e,
                            onMouseMove(e) {
                                function t() {
                                    S.current || r(!0, e.nativeEvent, "hover")
                                }(!h || p(R.current)) && (n || 0 === g || (clearTimeout(T.current), "touch" === R.current ? t() : T.current = window.setTimeout(t, g)))
                            }
                        },
                        floating: {
                            onMouseEnter() {
                                clearTimeout(L.current)
                            },
                            onMouseLeave(e) {
                                D(e.nativeEvent, !1)
                            }
                        }
                    }
                }, [f, h, n, g, r, D])
            }

            function es(e, t) {
                let n = e.filter(e => {
                        var n;
                        return e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
                    }),
                    r = n;
                for (; r.length;) r = e.filter(e => {
                    var t;
                    return null == (t = r) ? void 0 : t.some(t => {
                        var n;
                        return e.parentId === t.id && (null == (n = e.context) ? void 0 : n.open)
                    })
                }), n = n.concat(r);
                return n
            }
            let ef = () => ({
                getShadowRoot: !0,
                displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
            });

            function ed(e, t) {
                let n = H(e, ef());
                "prev" === t && n.reverse();
                let r = n.indexOf(u(v(e)));
                return n.slice(r + 1)[0]
            }

            function ep(e, t) {
                let n = t || e.currentTarget,
                    r = e.relatedTarget;
                return !r || !a(n, r)
            }
            let ev = {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "fixed",
                whiteSpace: "nowrap",
                width: "1px",
                top: 0,
                left: 0
            };

            function em(e) {
                "Tab" === e.key && (e.target, clearTimeout(r))
            }
            let eh = o.forwardRef(function(e, t) {
                    let [n, r] = o.useState();
                    Y(() => (f() && r("button"), document.addEventListener("keydown", em), () => {
                        document.removeEventListener("keydown", em)
                    }), []);
                    let i = {
                        ref: t,
                        tabIndex: 0,
                        role: n,
                        "aria-hidden": !n || void 0,
                        [ei("focus-guard")]: "",
                        style: ev
                    };
                    return o.createElement("span", X({}, e, i))
                }),
                eg = o.createContext(null),
                ey = ei("portal");

            function eb(e) {
                let {
                    children: t,
                    id: n,
                    root: r = null,
                    preserveTabOrder: i = !0
                } = e, u = function(e) {
                    void 0 === e && (e = {});
                    let {
                        id: t,
                        root: n
                    } = e, r = G(), i = ew(), [u, a] = o.useState(null), c = o.useRef(null);
                    return Y(() => () => {
                        null == u || u.remove(), queueMicrotask(() => {
                            c.current = null
                        })
                    }, [u]), Y(() => {
                        if (!r || c.current) return;
                        let e = t ? document.getElementById(t) : null;
                        if (!e) return;
                        let n = document.createElement("div");
                        n.id = r, n.setAttribute(ey, ""), e.appendChild(n), c.current = n, a(n)
                    }, [t, r]), Y(() => {
                        if (!r || c.current) return;
                        let e = n || (null == i ? void 0 : i.portalNode);
                        e && !(0, l.vq)(e) && (e = e.current), e = e || document.body;
                        let o = null;
                        t && ((o = document.createElement("div")).id = t, e.appendChild(o));
                        let u = document.createElement("div");
                        u.id = r, u.setAttribute(ey, ""), (e = o || e).appendChild(u), c.current = u, a(u)
                    }, [t, n, r, i]), u
                }({
                    id: n,
                    root: r
                }), [a, c] = o.useState(null), s = o.useRef(null), f = o.useRef(null), d = o.useRef(null), p = o.useRef(null), v = !!a && !a.modal && a.open && i && !!(r || u);
                return o.useEffect(() => {
                    if (u && i && (null == a || !a.modal)) return u.addEventListener("focusin", e, !0), u.addEventListener("focusout", e, !0), () => {
                        u.removeEventListener("focusin", e, !0), u.removeEventListener("focusout", e, !0)
                    };

                    function e(e) {
                        u && ep(e) && ("focusin" === e.type ? function(e) {
                            e.querySelectorAll("[data-tabindex]").forEach(e => {
                                let t = e.dataset.tabindex;
                                delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
                            })
                        } : function(e) {
                            H(e, ef()).forEach(e => {
                                e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                            })
                        })(u)
                    }
                }, [u, i, null == a ? void 0 : a.modal]), o.createElement(eg.Provider, {
                    value: o.useMemo(() => ({
                        preserveTabOrder: i,
                        beforeOutsideRef: s,
                        afterOutsideRef: f,
                        beforeInsideRef: d,
                        afterInsideRef: p,
                        portalNode: u,
                        setFocusManagerState: c
                    }), [i, u])
                }, v && u && o.createElement(eh, {
                    "data-type": "outside",
                    ref: s,
                    onFocus: e => {
                        if (ep(e, u)) {
                            var t;
                            null == (t = d.current) || t.focus()
                        } else {
                            let e = ed(document.body, "prev") || (null == a ? void 0 : a.refs.domReference.current);
                            null == e || e.focus()
                        }
                    }
                }), v && u && o.createElement("span", {
                    "aria-owns": u.id,
                    style: ev
                }), u && (0, V.createPortal)(t, u), v && u && o.createElement(eh, {
                    "data-type": "outside",
                    ref: f,
                    onFocus: e => {
                        if (ep(e, u)) {
                            var t;
                            null == (t = p.current) || t.focus()
                        } else {
                            let t = ed(document.body, "next") || (null == a ? void 0 : a.refs.domReference.current);
                            null == t || t.focus(), (null == a ? void 0 : a.closeOnFocusOut) && (null == a || a.onOpenChange(!1, e.nativeEvent))
                        }
                    }
                }))
            }
            let ew = () => o.useContext(eg),
                ex = {
                    pointerdown: "onPointerDown",
                    mousedown: "onMouseDown",
                    click: "onClick"
                },
                eE = {
                    pointerdown: "onPointerDownCapture",
                    mousedown: "onMouseDownCapture",
                    click: "onClickCapture"
                },
                eR = e => {
                    var t, n;
                    return {
                        escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
                        outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n
                    }
                };

            function eL(e, t) {
                void 0 === t && (t = {});
                let {
                    open: n,
                    onOpenChange: r,
                    elements: {
                        reference: i,
                        domReference: u,
                        floating: c
                    },
                    dataRef: s
                } = e, {
                    enabled: f = !0,
                    escapeKey: d = !0,
                    outsidePress: p = !0,
                    outsidePressEvent: g = "pointerdown",
                    referencePress: y = !1,
                    referencePressEvent: b = "pointerdown",
                    ancestorScroll: w = !1,
                    bubbles: x,
                    capture: E
                } = t, R = eo(), L = K("function" == typeof p ? p : () => !1), C = "function" == typeof p ? L : p, T = o.useRef(!1), S = o.useRef(!1), {
                    escapeKey: k,
                    outsidePress: A
                } = eR(x), {
                    escapeKey: P,
                    outsidePress: D
                } = eR(E), M = K(e => {
                    var t;
                    if (!n || !f || !d || "Escape" !== e.key) return;
                    let o = null == (t = s.current.floatingContext) ? void 0 : t.nodeId,
                        i = R ? es(R.nodesRef.current, o) : [];
                    if (!k && (e.stopPropagation(), i.length > 0)) {
                        let e = !0;
                        if (i.forEach(t => {
                                var n;
                                if (null != (n = t.context) && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
                                    e = !1;
                                    return
                                }
                            }), !e) return
                    }
                    r(!1, "nativeEvent" in e ? e.nativeEvent : e, "escape-key")
                }), O = K(e => {
                    var t;
                    let n = () => {
                        var t;
                        M(e), null == (t = h(e)) || t.removeEventListener("keydown", n)
                    };
                    null == (t = h(e)) || t.addEventListener("keydown", n)
                }), N = K(e => {
                    var t;
                    let n = T.current;
                    T.current = !1;
                    let o = S.current;
                    if (S.current = !1, "click" === g && o || n || "function" == typeof C && !C(e)) return;
                    let i = h(e),
                        f = "[" + ei("inert") + "]",
                        d = v(c).querySelectorAll(f),
                        p = (0, l.vq)(i) ? i : null;
                    for (; p && !(0, l.eu)(p);) {
                        let e = (0, l.$4)(p);
                        if ((0, l.eu)(e) || !(0, l.vq)(e)) break;
                        p = e
                    }
                    if (d.length && (0, l.vq)(i) && !i.matches("html,body") && !a(i, c) && Array.from(d).every(e => !a(p, e))) return;
                    if ((0, l.sb)(i) && c) {
                        let t = i.clientWidth > 0 && i.scrollWidth > i.clientWidth,
                            n = i.clientHeight > 0 && i.scrollHeight > i.clientHeight,
                            r = n && e.offsetX > i.clientWidth;
                        if (n && "rtl" === (0, l.L9)(i).direction && (r = e.offsetX <= i.offsetWidth - i.clientWidth), r || t && e.offsetY > i.clientHeight) return
                    }
                    let y = null == (t = s.current.floatingContext) ? void 0 : t.nodeId,
                        b = R && es(R.nodesRef.current, y).some(t => {
                            var n;
                            return m(e, null == (n = t.context) ? void 0 : n.elements.floating)
                        });
                    if (m(e, c) || m(e, u) || b) return;
                    let w = R ? es(R.nodesRef.current, y) : [];
                    if (w.length > 0) {
                        let e = !0;
                        if (w.forEach(t => {
                                var n;
                                if (null != (n = t.context) && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
                                    e = !1;
                                    return
                                }
                            }), !e) return
                    }
                    r(!1, e, "outside-press")
                }), q = K(e => {
                    var t;
                    let n = () => {
                        var t;
                        N(e), null == (t = h(e)) || t.removeEventListener(g, n)
                    };
                    null == (t = h(e)) || t.addEventListener(g, n)
                });
                return o.useEffect(() => {
                    if (!n || !f) return;

                    function e(e) {
                        r(!1, e, "ancestor-scroll")
                    }
                    s.current.__escapeKeyBubbles = k, s.current.__outsidePressBubbles = A;
                    let t = v(c);
                    d && t.addEventListener("keydown", P ? O : M, P), C && t.addEventListener(g, D ? q : N, D);
                    let o = [];
                    return w && ((0, l.vq)(u) && (o = (0, l.v9)(u)), (0, l.vq)(c) && (o = o.concat((0, l.v9)(c))), !(0, l.vq)(i) && i && i.contextElement && (o = o.concat((0, l.v9)(i.contextElement)))), (o = o.filter(e => {
                        var n;
                        return e !== (null == (n = t.defaultView) ? void 0 : n.visualViewport)
                    })).forEach(t => {
                        t.addEventListener("scroll", e, {
                            passive: !0
                        })
                    }), () => {
                        d && t.removeEventListener("keydown", P ? O : M, P), C && t.removeEventListener(g, D ? q : N, D), o.forEach(t => {
                            t.removeEventListener("scroll", e)
                        })
                    }
                }, [s, c, u, i, d, C, g, n, r, w, f, k, A, M, P, O, N, D, q]), o.useEffect(() => {
                    T.current = !1
                }, [C, g]), o.useMemo(() => f ? {
                    reference: {
                        onKeyDown: M,
                        [ex[b]]: e => {
                            y && r(!1, e.nativeEvent, "reference-press")
                        }
                    },
                    floating: {
                        onKeyDown: M,
                        onMouseDown() {
                            S.current = !0
                        },
                        onMouseUp() {
                            S.current = !0
                        },
                        [eE[g]]: () => {
                            T.current = !0
                        }
                    }
                } : {}, [f, y, g, b, r, M])
            }

            function eC(e) {
                void 0 === e && (e = {});
                let {
                    nodeId: t
                } = e, n = function(e) {
                    let {
                        open: t = !1,
                        onOpenChange: n,
                        elements: r
                    } = e, i = G(), l = o.useRef({}), [u] = o.useState(() => (function() {
                        let e = new Map;
                        return {
                            emit(t, n) {
                                var r;
                                null == (r = e.get(t)) || r.forEach(e => e(n))
                            },
                            on(t, n) {
                                e.set(t, [...e.get(t) || [], n])
                            },
                            off(t, n) {
                                var r;
                                e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter(e => e !== n)) || [])
                            }
                        }
                    })()), a = null != er(), [c, s] = o.useState(r.reference), f = K((e, t, r) => {
                        l.current.openEvent = e ? t : void 0, u.emit("openchange", {
                            open: e,
                            event: t,
                            reason: r,
                            nested: a
                        }), null == n || n(e, t, r)
                    }), d = o.useMemo(() => ({
                        setPositionReference: s
                    }), []), p = o.useMemo(() => ({
                        reference: c || r.reference || null,
                        floating: r.floating || null,
                        domReference: r.reference
                    }), [c, r.reference, r.floating]);
                    return o.useMemo(() => ({
                        dataRef: l,
                        open: t,
                        onOpenChange: f,
                        elements: p,
                        events: u,
                        floatingId: i,
                        refs: d
                    }), [t, f, p, u, i, d])
                }({ ...e,
                    elements: {
                        reference: null,
                        floating: null,
                        ...e.elements
                    }
                }), r = e.rootContext || n, i = r.elements, [u, a] = o.useState(null), [c, s] = o.useState(null), f = (null == i ? void 0 : i.reference) || u, d = o.useRef(null), p = eo();
                Y(() => {
                    f && (d.current = f)
                }, [f]);
                let v = (0, y.we)({ ...e,
                        elements: { ...i,
                            ...c && {
                                reference: c
                            }
                        }
                    }),
                    m = o.useCallback(e => {
                        let t = (0, l.vq)(e) ? {
                            getBoundingClientRect: () => e.getBoundingClientRect(),
                            contextElement: e
                        } : e;
                        s(t), v.refs.setReference(t)
                    }, [v.refs]),
                    h = o.useCallback(e => {
                        ((0, l.vq)(e) || null === e) && (d.current = e, a(e)), ((0, l.vq)(v.refs.reference.current) || null === v.refs.reference.current || null !== e && !(0, l.vq)(e)) && v.refs.setReference(e)
                    }, [v.refs]),
                    g = o.useMemo(() => ({ ...v.refs,
                        setReference: h,
                        setPositionReference: m,
                        domReference: d
                    }), [v.refs, h, m]),
                    b = o.useMemo(() => ({ ...v.elements,
                        domReference: f
                    }), [v.elements, f]),
                    w = o.useMemo(() => ({ ...v,
                        ...r,
                        refs: g,
                        elements: b,
                        nodeId: t
                    }), [v, g, b, t, r]);
                return Y(() => {
                    r.dataRef.current.floatingContext = w;
                    let e = null == p ? void 0 : p.nodesRef.current.find(e => e.id === t);
                    e && (e.context = w)
                }), o.useMemo(() => ({ ...v,
                    context: w,
                    refs: g,
                    elements: b
                }), [v, g, b, w])
            }

            function eT(e, t) {
                void 0 === t && (t = {});
                let {
                    open: n,
                    onOpenChange: r,
                    events: i,
                    dataRef: p,
                    elements: {
                        domReference: m
                    }
                } = e, {
                    enabled: g = !0,
                    visibleOnly: y = !0
                } = t, b = o.useRef(!1), w = o.useRef(), x = o.useRef(!0);
                return o.useEffect(() => {
                    if (!g) return;
                    let e = (0, l.zk)(m);

                    function t() {
                        !n && (0, l.sb)(m) && m === u(v(m)) && (b.current = !0)
                    }

                    function r() {
                        x.current = !0
                    }
                    return e.addEventListener("blur", t), e.addEventListener("keydown", r, !0), () => {
                        e.removeEventListener("blur", t), e.removeEventListener("keydown", r, !0)
                    }
                }, [m, n, g]), o.useEffect(() => {
                    if (g) return i.on("openchange", e), () => {
                        i.off("openchange", e)
                    };

                    function e(e) {
                        let {
                            reason: t
                        } = e;
                        ("reference-press" === t || "escape-key" === t) && (b.current = !0)
                    }
                }, [i, g]), o.useEffect(() => () => {
                    clearTimeout(w.current)
                }, []), o.useMemo(() => g ? {
                    reference: {
                        onPointerDown(e) {
                            var t;
                            t = e.nativeEvent, !s().includes("jsdom/") && (!d() && 0 === t.width && 0 === t.height || d() && 1 === t.width && 1 === t.height && 0 === t.pressure && 0 === t.detail && "mouse" === t.pointerType || t.width < 1 && t.height < 1 && 0 === t.pressure && 0 === t.detail && "touch" === t.pointerType) || (x.current = !1)
                        },
                        onMouseLeave() {
                            b.current = !1
                        },
                        onFocus(e) {
                            if (b.current) return;
                            let t = h(e.nativeEvent);
                            if (y && (0, l.vq)(t)) try {
                                if (f() && c().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints) throw Error();
                                if (!t.matches(":focus-visible")) return
                            } catch (e) {
                                if (!x.current && !((0, l.sb)(t) && t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])"))) return
                            }
                            r(!0, e.nativeEvent, "focus")
                        },
                        onBlur(e) {
                            b.current = !1;
                            let t = e.relatedTarget,
                                n = (0, l.vq)(t) && t.hasAttribute(ei("focus-guard")) && "outside" === t.getAttribute("data-type");
                            w.current = window.setTimeout(() => {
                                var o;
                                let i = u(m ? m.ownerDocument : document);
                                (t || i !== m) && (a(null == (o = p.current.floatingContext) ? void 0 : o.refs.floating.current, i) || a(m, i) || n || r(!1, e.nativeEvent, "focus"))
                            })
                        }
                    }
                } : {}, [g, y, p, m, r])
            }
            let eS = "active",
                ek = "selected";

            function eA(e, t, n) {
                let r = new Map,
                    o = "item" === n,
                    i = e;
                if (o && e) {
                    let {
                        [eS]: t, [ek]: n, ...r
                    } = e;
                    i = r
                }
                return { ..."floating" === n && {
                        tabIndex: -1
                    },
                    ...i,
                    ...t.map(t => {
                        let r = t ? t[n] : null;
                        return "function" == typeof r ? e ? r(e) : null : r
                    }).concat(e).reduce((e, t) => (t && Object.entries(t).forEach(t => {
                        let [n, i] = t;
                        if (!(o && [eS, ek].includes(n)))
                            if (0 === n.indexOf("on")) {
                                if (r.has(n) || r.set(n, []), "function" == typeof i) {
                                    var l;
                                    null == (l = r.get(n)) || l.push(i), e[n] = function() {
                                        for (var e, t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                                        return null == (e = r.get(n)) ? void 0 : e.map(e => e(...o)).find(e => void 0 !== e)
                                    }
                                }
                            } else e[n] = i
                    }), e), {})
                }
            }

            function eP(e) {
                void 0 === e && (e = []);
                let t = e,
                    n = o.useCallback(t => eA(t, e, "reference"), t),
                    r = o.useCallback(t => eA(t, e, "floating"), t),
                    i = o.useCallback(t => eA(t, e, "item"), e.map(e => null == e ? void 0 : e.item));
                return o.useMemo(() => ({
                    getReferenceProps: n,
                    getFloatingProps: r,
                    getItemProps: i
                }), [n, r, i])
            }
            let eD = new Map([
                ["select", "listbox"],
                ["combobox", "listbox"],
                ["label", !1]
            ]);

            function eM(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    open: r,
                    floatingId: i
                } = e, {
                    enabled: l = !0,
                    role: u = "dialog"
                } = t, a = null != (n = eD.get(u)) ? n : u, c = G(), s = null != er();
                return o.useMemo(() => {
                    if (!l) return {};
                    let e = {
                        id: i,
                        ...a && {
                            role: a
                        }
                    };
                    return "tooltip" === a || "label" === u ? {
                        reference: {
                            ["aria-" + ("label" === u ? "labelledby" : "describedby")]: r ? i : void 0
                        },
                        floating: e
                    } : {
                        reference: {
                            "aria-expanded": r ? "true" : "false",
                            "aria-haspopup": "alertdialog" === a ? "dialog" : a,
                            "aria-controls": r ? i : void 0,
                            ..."listbox" === a && {
                                role: "combobox"
                            },
                            ..."menu" === a && {
                                id: c
                            },
                            ..."menu" === a && s && {
                                role: "menuitem"
                            },
                            ..."select" === u && {
                                "aria-autocomplete": "none"
                            },
                            ..."combobox" === u && {
                                "aria-autocomplete": "list"
                            }
                        },
                        floating: { ...e,
                            ..."menu" === a && {
                                "aria-labelledby": c
                            }
                        },
                        item(e) {
                            let {
                                active: t,
                                selected: n
                            } = e, r = {
                                role: "option",
                                ...t && {
                                    id: i + "-option"
                                }
                            };
                            switch (u) {
                                case "select":
                                    return { ...r,
                                        "aria-selected": t && n
                                    };
                                case "combobox":
                                    return { ...r,
                                        ...t && {
                                            "aria-selected": !0
                                        }
                                    }
                            }
                            return {}
                        }
                    }
                }, [l, u, a, r, i, c, s])
            }
        },
        50698: (e, t, n) => {
            n.d(t, {
                UE: () => Z,
                ll: () => K,
                rD: () => J,
                UU: () => Q,
                cY: () => Y,
                iD: () => $,
                BN: () => X
            });
            let r = Math.min,
                o = Math.max,
                i = Math.round,
                l = Math.floor,
                u = e => ({
                    x: e,
                    y: e
                }),
                a = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                c = {
                    start: "end",
                    end: "start"
                };

            function s(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function f(e) {
                return e.split("-")[0]
            }

            function d(e) {
                return e.split("-")[1]
            }

            function p(e) {
                return "x" === e ? "y" : "x"
            }

            function v(e) {
                return "y" === e ? "height" : "width"
            }
            let m = new Set(["top", "bottom"]);

            function h(e) {
                return m.has(f(e)) ? "y" : "x"
            }

            function g(e) {
                return e.replace(/start|end/g, e => c[e])
            }
            let y = ["left", "right"],
                b = ["right", "left"],
                w = ["top", "bottom"],
                x = ["bottom", "top"];

            function E(e) {
                return e.replace(/left|right|bottom|top/g, e => a[e])
            }

            function R(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function L(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }

            function C(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    l = h(t),
                    u = p(h(t)),
                    a = v(u),
                    c = f(t),
                    s = "y" === l,
                    m = o.x + o.width / 2 - i.width / 2,
                    g = o.y + o.height / 2 - i.height / 2,
                    y = o[a] / 2 - i[a] / 2;
                switch (c) {
                    case "top":
                        r = {
                            x: m,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: m,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: g
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: g
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (d(t)) {
                    case "start":
                        r[u] -= y * (n && s ? -1 : 1);
                        break;
                    case "end":
                        r[u] += y * (n && s ? -1 : 1)
                }
                return r
            }
            let T = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, u = i.filter(Boolean), a = await (null == l.isRTL ? void 0 : l.isRTL(t)), c = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: s,
                    y: f
                } = C(c, r, a), d = r, p = {}, v = 0;
                for (let n = 0; n < u.length; n++) {
                    let {
                        name: i,
                        fn: m
                    } = u[n], {
                        x: h,
                        y: g,
                        data: y,
                        reset: b
                    } = await m({
                        x: s,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: c,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    s = null != h ? h : s, f = null != g ? g : f, p = { ...p,
                        [i]: { ...p[i],
                            ...y
                        }
                    }, b && v <= 50 && (v++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (c = !0 === b.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects), {
                        x: s,
                        y: f
                    } = C(c, d, a)), n = -1)
                }
                return {
                    x: s,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function S(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: u,
                    strategy: a
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: f = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: v = 0
                } = s(t, e), m = R(v), h = u[p ? "floating" === d ? "reference" : "floating" : d], g = L(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(u.floating)),
                    boundary: c,
                    rootBoundary: f,
                    strategy: a
                })), y = "floating" === d ? {
                    x: r,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(u.floating)), w = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
                    x: 1,
                    y: 1
                }, x = L(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: u,
                    rect: y,
                    offsetParent: b,
                    strategy: a
                }) : y);
                return {
                    top: (g.top - x.top + m.top) / w.y,
                    bottom: (x.bottom - g.bottom + m.bottom) / w.y,
                    left: (g.left - x.left + m.left) / w.x,
                    right: (x.right - g.right + m.right) / w.x
                }
            }
            let k = new Set(["left", "top"]);
            async function A(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = f(n), u = d(n), a = "y" === h(n), c = k.has(l) ? -1 : 1, p = i && a ? -1 : 1, v = s(t, e), {
                    mainAxis: m,
                    crossAxis: g,
                    alignmentAxis: y
                } = "number" == typeof v ? {
                    mainAxis: v,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: v.mainAxis || 0,
                    crossAxis: v.crossAxis || 0,
                    alignmentAxis: v.alignmentAxis
                };
                return u && "number" == typeof y && (g = "end" === u ? -1 * y : y), a ? {
                    x: g * p,
                    y: m * c
                } : {
                    x: m * c,
                    y: g * p
                }
            }
            var P = n(84974);

            function D(e) {
                let t = (0, P.L9)(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = (0, P.sb)(e),
                    l = o ? e.offsetWidth : n,
                    u = o ? e.offsetHeight : r,
                    a = i(n) !== l || i(r) !== u;
                return a && (n = l, r = u), {
                    width: n,
                    height: r,
                    $: a
                }
            }

            function M(e) {
                return (0, P.vq)(e) ? e : e.contextElement
            }

            function O(e) {
                let t = M(e);
                if (!(0, P.sb)(t)) return u(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: l
                    } = D(t),
                    a = (l ? i(n.width) : n.width) / r,
                    c = (l ? i(n.height) : n.height) / o;
                return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), {
                    x: a,
                    y: c
                }
            }
            let N = u(0);

            function q(e) {
                let t = (0, P.zk)(e);
                return (0, P.Tc)() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : N
            }

            function I(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    l = M(e),
                    a = u(1);
                t && (r ? (0, P.vq)(r) && (a = O(r)) : a = O(e));
                let c = (void 0 === (o = n) && (o = !1), r && (!o || r === (0, P.zk)(l)) && o) ? q(l) : u(0),
                    s = (i.left + c.x) / a.x,
                    f = (i.top + c.y) / a.y,
                    d = i.width / a.x,
                    p = i.height / a.y;
                if (l) {
                    let e = (0, P.zk)(l),
                        t = r && (0, P.vq)(r) ? (0, P.zk)(r) : r,
                        n = e,
                        o = (0, P._m)(n);
                    for (; o && r && t !== n;) {
                        let e = O(o),
                            t = o.getBoundingClientRect(),
                            r = (0, P.L9)(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        s *= e.x, f *= e.y, d *= e.x, p *= e.y, s += i, f += l, n = (0, P.zk)(o), o = (0, P._m)(n)
                    }
                }
                return L({
                    width: d,
                    height: p,
                    x: s,
                    y: f
                })
            }

            function _(e, t) {
                let n = (0, P.CP)(e).scrollLeft;
                return t ? t.left + n : I((0, P.ep)(e)).left + n
            }

            function F(e, t, n) {
                void 0 === n && (n = !1);
                let r = e.getBoundingClientRect();
                return {
                    x: r.left + t.scrollLeft - (n ? 0 : _(e, r)),
                    y: r.top + t.scrollTop
                }
            }
            let B = new Set(["absolute", "fixed"]);

            function U(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = (0, P.zk)(e),
                        r = (0, P.ep)(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        u = 0,
                        a = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = (0, P.Tc)();
                        (!e || e && "fixed" === t) && (u = o.offsetLeft, a = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: u,
                        y: a
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = (0, P.ep)(e),
                        n = (0, P.CP)(e),
                        r = e.ownerDocument.body,
                        i = o(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        l = o(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        u = -n.scrollLeft + _(e),
                        a = -n.scrollTop;
                    return "rtl" === (0, P.L9)(r).direction && (u += o(t.clientWidth, r.clientWidth) - i), {
                        width: i,
                        height: l,
                        x: u,
                        y: a
                    }
                }((0, P.ep)(e));
                else if ((0, P.vq)(t)) r = function(e, t) {
                    let n = I(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = (0, P.sb)(e) ? O(e) : u(1),
                        l = e.clientWidth * i.x,
                        a = e.clientHeight * i.y;
                    return {
                        width: l,
                        height: a,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = q(e);
                    r = {
                        x: t.x - n.x,
                        y: t.y - n.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return L(r)
            }

            function W(e) {
                return "static" === (0, P.L9)(e).position
            }

            function z(e, t) {
                if (!(0, P.sb)(e) || "fixed" === (0, P.L9)(e).position) return null;
                if (t) return t(e);
                let n = e.offsetParent;
                return (0, P.ep)(e) === n && (n = n.ownerDocument.body), n
            }

            function H(e, t) {
                let n = (0, P.zk)(e);
                if ((0, P.Tf)(e)) return n;
                if (!(0, P.sb)(e)) {
                    let t = (0, P.$4)(e);
                    for (; t && !(0, P.eu)(t);) {
                        if ((0, P.vq)(t) && !W(t)) return t;
                        t = (0, P.$4)(t)
                    }
                    return n
                }
                let r = z(e, t);
                for (; r && (0, P.Lv)(r) && W(r);) r = z(r, t);
                return r && (0, P.eu)(r) && W(r) && !(0, P.sQ)(r) ? n : r || (0, P.gJ)(e) || n
            }
            let V = async function(e) {
                    let t = this.getOffsetParent || H,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = (0, P.sb)(t),
                                o = (0, P.ep)(t),
                                i = "fixed" === n,
                                l = I(e, !0, i, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                c = u(0);
                            if (r || !r && !i)
                                if (("body" !== (0, P.mq)(t) || (0, P.ZU)(o)) && (a = (0, P.CP)(t)), r) {
                                    let e = I(t, !0, i, t);
                                    c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
                                } else o && (c.x = _(o));
                            i && !r && o && (c.x = _(o));
                            let s = !o || r || i ? u(0) : F(o, a);
                            return {
                                x: l.left + a.scrollLeft - c.x - s.x,
                                y: l.top + a.scrollTop - c.y - s.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                $ = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: o
                        } = e, i = "fixed" === o, l = (0, P.ep)(r), a = !!t && (0, P.Tf)(t.floating);
                        if (r === l || a && i) return n;
                        let c = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            s = u(1),
                            f = u(0),
                            d = (0, P.sb)(r);
                        if ((d || !d && !i) && (("body" !== (0, P.mq)(r) || (0, P.ZU)(l)) && (c = (0, P.CP)(r)), (0, P.sb)(r))) {
                            let e = I(r);
                            s = O(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
                        }
                        let p = !l || d || i ? u(0) : F(l, c, !0);
                        return {
                            width: n.width * s.x,
                            height: n.height * s.y,
                            x: n.x * s.x - c.scrollLeft * s.x + f.x + p.x,
                            y: n.y * s.y - c.scrollTop * s.y + f.y + p.y
                        }
                    },
                    getDocumentElement: P.ep,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: i,
                            strategy: l
                        } = e, u = [..."clippingAncestors" === n ? (0, P.Tf)(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = (0, P.v9)(e, [], !1).filter(e => (0, P.vq)(e) && "body" !== (0, P.mq)(e)),
                                o = null,
                                i = "fixed" === (0, P.L9)(e).position,
                                l = i ? (0, P.$4)(e) : e;
                            for (;
                                (0, P.vq)(l) && !(0, P.eu)(l);) {
                                let t = (0, P.L9)(l),
                                    n = (0, P.sQ)(l);
                                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && B.has(o.position) || (0, P.ZU)(l) && !n && function e(t, n) {
                                    let r = (0, P.$4)(t);
                                    return !(r === n || !(0, P.vq)(r) || (0, P.eu)(r)) && ("fixed" === (0, P.L9)(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = (0, P.$4)(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), i], a = u[0], c = u.reduce((e, n) => {
                            let i = U(t, n, l);
                            return e.top = o(i.top, e.top), e.right = r(i.right, e.right), e.bottom = r(i.bottom, e.bottom), e.left = o(i.left, e.left), e
                        }, U(t, a, l));
                        return {
                            width: c.right - c.left,
                            height: c.bottom - c.top,
                            x: c.left,
                            y: c.top
                        }
                    },
                    getOffsetParent: H,
                    getElementRects: V,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = D(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: O,
                    isElement: P.vq,
                    isRTL: function(e) {
                        return "rtl" === (0, P.L9)(e).direction
                    }
                };

            function j(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }

            function K(e, t, n, i) {
                let u;
                void 0 === i && (i = {});
                let {
                    ancestorScroll: a = !0,
                    ancestorResize: c = !0,
                    elementResize: s = "function" == typeof ResizeObserver,
                    layoutShift: f = "function" == typeof IntersectionObserver,
                    animationFrame: d = !1
                } = i, p = M(e), v = a || c ? [...p ? (0, P.v9)(p) : [], ...(0, P.v9)(t)] : [];
                v.forEach(e => {
                    a && e.addEventListener("scroll", n, {
                        passive: !0
                    }), c && e.addEventListener("resize", n)
                });
                let m = p && f ? function(e, t) {
                        let n, i = null,
                            u = (0, P.ep)(e);

                        function a() {
                            var e;
                            clearTimeout(n), null == (e = i) || e.disconnect(), i = null
                        }
                        return ! function c(s, f) {
                            void 0 === s && (s = !1), void 0 === f && (f = 1), a();
                            let d = e.getBoundingClientRect(),
                                {
                                    left: p,
                                    top: v,
                                    width: m,
                                    height: h
                                } = d;
                            if (s || t(), !m || !h) return;
                            let g = l(v),
                                y = l(u.clientWidth - (p + m)),
                                b = {
                                    rootMargin: -g + "px " + -y + "px " + -l(u.clientHeight - (v + h)) + "px " + -l(p) + "px",
                                    threshold: o(0, r(1, f)) || 1
                                },
                                w = !0;

                            function x(t) {
                                let r = t[0].intersectionRatio;
                                if (r !== f) {
                                    if (!w) return c();
                                    r ? c(!1, r) : n = setTimeout(() => {
                                        c(!1, 1e-7)
                                    }, 1e3)
                                }
                                1 !== r || j(d, e.getBoundingClientRect()) || c(), w = !1
                            }
                            try {
                                i = new IntersectionObserver(x, { ...b,
                                    root: u.ownerDocument
                                })
                            } catch (e) {
                                i = new IntersectionObserver(x, b)
                            }
                            i.observe(e)
                        }(!0), a
                    }(p, n) : null,
                    h = -1,
                    g = null;
                s && (g = new ResizeObserver(e => {
                    let [r] = e;
                    r && r.target === p && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
                        var e;
                        null == (e = g) || e.observe(t)
                    })), n()
                }), p && !d && g.observe(p), g.observe(t));
                let y = d ? I(e) : null;
                return d && function t() {
                    let r = I(e);
                    y && !j(y, r) && n(), y = r, u = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    v.forEach(e => {
                        a && e.removeEventListener("scroll", n), c && e.removeEventListener("resize", n)
                    }), null == m || m(), null == (e = g) || e.disconnect(), g = null, d && cancelAnimationFrame(u)
                }
            }
            let Y = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            var n, r;
                            let {
                                x: o,
                                y: i,
                                placement: l,
                                middlewareData: u
                            } = t, a = await A(t, e);
                            return l === (null == (n = u.offset) ? void 0 : n.placement) && null != (r = u.arrow) && r.alignmentOffset ? {} : {
                                x: o + a.x,
                                y: i + a.y,
                                data: { ...a,
                                    placement: l
                                }
                            }
                        }
                    }
                },
                X = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: i,
                                placement: l
                            } = t, {
                                mainAxis: u = !0,
                                crossAxis: a = !1,
                                limiter: c = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...d
                            } = s(e, t), v = {
                                x: n,
                                y: i
                            }, m = await S(t, d), g = h(f(l)), y = p(g), b = v[y], w = v[g];
                            if (u) {
                                let e = "y" === y ? "top" : "left",
                                    t = "y" === y ? "bottom" : "right",
                                    n = b + m[e],
                                    i = b - m[t];
                                b = o(n, r(b, i))
                            }
                            if (a) {
                                let e = "y" === g ? "top" : "left",
                                    t = "y" === g ? "bottom" : "right",
                                    n = w + m[e],
                                    i = w - m[t];
                                w = o(n, r(w, i))
                            }
                            let x = c.fn({ ...t,
                                [y]: b,
                                [g]: w
                            });
                            return { ...x,
                                data: {
                                    x: x.x - n,
                                    y: x.y - i,
                                    enabled: {
                                        [y]: u,
                                        [g]: a
                                    }
                                }
                            }
                        }
                    }
                },
                Q = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var n, r, o, i, l;
                            let {
                                placement: u,
                                middlewareData: a,
                                rects: c,
                                initialPlacement: m,
                                platform: R,
                                elements: L
                            } = t, {
                                mainAxis: C = !0,
                                crossAxis: T = !0,
                                fallbackPlacements: k,
                                fallbackStrategy: A = "bestFit",
                                fallbackAxisSideDirection: P = "none",
                                flipAlignment: D = !0,
                                ...M
                            } = s(e, t);
                            if (null != (n = a.arrow) && n.alignmentOffset) return {};
                            let O = f(u),
                                N = h(m),
                                q = f(m) === m,
                                I = await (null == R.isRTL ? void 0 : R.isRTL(L.floating)),
                                _ = k || (q || !D ? [E(m)] : function(e) {
                                    let t = E(e);
                                    return [g(e), t, g(t)]
                                }(m)),
                                F = "none" !== P;
                            !k && F && _.push(... function(e, t, n, r) {
                                let o = d(e),
                                    i = function(e, t, n) {
                                        switch (e) {
                                            case "top":
                                            case "bottom":
                                                if (n) return t ? b : y;
                                                return t ? y : b;
                                            case "left":
                                            case "right":
                                                return t ? w : x;
                                            default:
                                                return []
                                        }
                                    }(f(e), "start" === n, r);
                                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(g)))), i
                            }(m, D, P, I));
                            let B = [m, ..._],
                                U = await S(t, M),
                                W = [],
                                z = (null == (r = a.flip) ? void 0 : r.overflows) || [];
                            if (C && W.push(U[O]), T) {
                                let e = function(e, t, n) {
                                    void 0 === n && (n = !1);
                                    let r = d(e),
                                        o = p(h(e)),
                                        i = v(o),
                                        l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                    return t.reference[i] > t.floating[i] && (l = E(l)), [l, E(l)]
                                }(u, c, I);
                                W.push(U[e[0]], U[e[1]])
                            }
                            if (z = [...z, {
                                    placement: u,
                                    overflows: W
                                }], !W.every(e => e <= 0)) {
                                let e = ((null == (o = a.flip) ? void 0 : o.index) || 0) + 1,
                                    t = B[e];
                                if (t && ("alignment" !== T || N === h(t) || z.every(e => h(e.placement) !== N || e.overflows[0] > 0))) return {
                                    data: {
                                        index: e,
                                        overflows: z
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let n = null == (i = z.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                if (!n) switch (A) {
                                    case "bestFit":
                                        {
                                            let e = null == (l = z.filter(e => {
                                                if (F) {
                                                    let t = h(e.placement);
                                                    return t === N || "y" === t
                                                }
                                                return !0
                                            }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = m
                                }
                                if (u !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                Z = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: i,
                            placement: l,
                            rects: u,
                            platform: a,
                            elements: c,
                            middlewareData: f
                        } = t, {
                            element: m,
                            padding: g = 0
                        } = s(e, t) || {};
                        if (null == m) return {};
                        let y = R(g),
                            b = {
                                x: n,
                                y: i
                            },
                            w = p(h(l)),
                            x = v(w),
                            E = await a.getDimensions(m),
                            L = "y" === w,
                            C = L ? "clientHeight" : "clientWidth",
                            T = u.reference[x] + u.reference[w] - b[w] - u.floating[x],
                            S = b[w] - u.reference[w],
                            k = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(m)),
                            A = k ? k[C] : 0;
                        A && await (null == a.isElement ? void 0 : a.isElement(k)) || (A = c.floating[C] || u.floating[x]);
                        let P = A / 2 - E[x] / 2 - 1,
                            D = r(y[L ? "top" : "left"], P),
                            M = r(y[L ? "bottom" : "right"], P),
                            O = A - E[x] - M,
                            N = A / 2 - E[x] / 2 + (T / 2 - S / 2),
                            q = o(D, r(N, O)),
                            I = !f.arrow && null != d(l) && N !== q && u.reference[x] / 2 - (N < D ? D : M) - E[x] / 2 < 0,
                            _ = I ? N < D ? N - D : N - O : 0;
                        return {
                            [w]: b[w] + _,
                            data: {
                                [w]: q,
                                centerOffset: N - q - _,
                                ...I && {
                                    alignmentOffset: _
                                }
                            },
                            reset: I
                        }
                    }
                }),
                J = (e, t, n) => {
                    let r = new Map,
                        o = {
                            platform: $,
                            ...n
                        },
                        i = { ...o.platform,
                            _c: r
                        };
                    return T(e, t, { ...o,
                        platform: i
                    })
                }
        },
        84974: (e, t, n) => {
            function r() {
                return "undefined" != typeof window
            }

            function o(e) {
                return u(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function i(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function l(e) {
                var t;
                return null == (t = (u(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function u(e) {
                return !!r() && (e instanceof Node || e instanceof i(e).Node)
            }

            function a(e) {
                return !!r() && (e instanceof Element || e instanceof i(e).Element)
            }

            function c(e) {
                return !!r() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement)
            }

            function s(e) {
                return !!r() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
            }
            n.d(t, {
                $4: () => S,
                CP: () => T,
                L9: () => C,
                Lv: () => v,
                Ng: () => s,
                Tc: () => E,
                Tf: () => h,
                ZU: () => d,
                _m: () => k,
                ep: () => l,
                eu: () => L,
                gJ: () => x,
                mq: () => o,
                sQ: () => w,
                sb: () => c,
                v9: () => function e(t, n, r) {
                    var o;
                    void 0 === n && (n = []), void 0 === r && (r = !0);
                    let l = function e(t) {
                            let n = S(t);
                            return L(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : c(n) && d(n) ? n : e(n)
                        }(t),
                        u = l === (null == (o = t.ownerDocument) ? void 0 : o.body),
                        a = i(l);
                    if (u) {
                        let t = k(a);
                        return n.concat(a, a.visualViewport || [], d(l) ? l : [], t && r ? e(t) : [])
                    }
                    return n.concat(l, e(l, [], r))
                },
                vq: () => a,
                zk: () => i
            });
            let f = new Set(["inline", "contents"]);

            function d(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = C(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !f.has(o)
            }
            let p = new Set(["table", "td", "th"]);

            function v(e) {
                return p.has(o(e))
            }
            let m = [":popover-open", ":modal"];

            function h(e) {
                return m.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }
            let g = ["transform", "translate", "scale", "rotate", "perspective"],
                y = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
                b = ["paint", "layout", "strict", "content"];

            function w(e) {
                let t = E(),
                    n = a(e) ? C(e) : e;
                return g.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || y.some(e => (n.willChange || "").includes(e)) || b.some(e => (n.contain || "").includes(e))
            }

            function x(e) {
                let t = S(e);
                for (; c(t) && !L(t);) {
                    if (w(t)) return t;
                    if (h(t)) break;
                    t = S(t)
                }
                return null
            }

            function E() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }
            let R = new Set(["html", "body", "#document"]);

            function L(e) {
                return R.has(o(e))
            }

            function C(e) {
                return i(e).getComputedStyle(e)
            }

            function T(e) {
                return a(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function S(e) {
                if ("html" === o(e)) return e;
                let t = e.assignedSlot || e.parentNode || s(e) && e.host || l(e);
                return s(t) ? t.host : t
            }

            function k(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }
        },
        94882: (e, t, n) => {
            n.d(t, {
                BN: () => p,
                UE: () => m,
                UU: () => v,
                cY: () => d,
                we: () => f
            });
            var r = n(50698),
                o = n(14232),
                i = n(98477),
                l = "undefined" != typeof document ? o.useLayoutEffect : function() {};

            function u(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!u(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !u(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function a(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function c(e, t) {
                let n = a(e);
                return Math.round(t * n) / n
            }

            function s(e) {
                let t = o.useRef(e);
                return l(() => {
                    t.current = e
                }), t
            }

            function f(e) {
                void 0 === e && (e = {});
                let {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: f = [],
                    platform: d,
                    elements: {
                        reference: p,
                        floating: v
                    } = {},
                    transform: m = !0,
                    whileElementsMounted: h,
                    open: g
                } = e, [y, b] = o.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                }), [w, x] = o.useState(f);
                u(w, f) || x(f);
                let [E, R] = o.useState(null), [L, C] = o.useState(null), T = o.useCallback(e => {
                    e !== P.current && (P.current = e, R(e))
                }, []), S = o.useCallback(e => {
                    e !== D.current && (D.current = e, C(e))
                }, []), k = p || E, A = v || L, P = o.useRef(null), D = o.useRef(null), M = o.useRef(y), O = null != h, N = s(h), q = s(d), I = s(g), _ = o.useCallback(() => {
                    if (!P.current || !D.current) return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: w
                    };
                    q.current && (e.platform = q.current), (0, r.rD)(P.current, D.current, e).then(e => {
                        let t = { ...e,
                            isPositioned: !1 !== I.current
                        };
                        F.current && !u(M.current, t) && (M.current = t, i.flushSync(() => {
                            b(t)
                        }))
                    })
                }, [w, t, n, q, I]);
                l(() => {
                    !1 === g && M.current.isPositioned && (M.current.isPositioned = !1, b(e => ({ ...e,
                        isPositioned: !1
                    })))
                }, [g]);
                let F = o.useRef(!1);
                l(() => (F.current = !0, () => {
                    F.current = !1
                }), []), l(() => {
                    if (k && (P.current = k), A && (D.current = A), k && A) {
                        if (N.current) return N.current(k, A, _);
                        _()
                    }
                }, [k, A, _, N, O]);
                let B = o.useMemo(() => ({
                        reference: P,
                        floating: D,
                        setReference: T,
                        setFloating: S
                    }), [T, S]),
                    U = o.useMemo(() => ({
                        reference: k,
                        floating: A
                    }), [k, A]),
                    W = o.useMemo(() => {
                        let e = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!U.floating) return e;
                        let t = c(U.floating, y.x),
                            r = c(U.floating, y.y);
                        return m ? { ...e,
                            transform: "translate(" + t + "px, " + r + "px)",
                            ...a(U.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: n,
                            left: t,
                            top: r
                        }
                    }, [n, m, U.floating, y.x, y.y]);
                return o.useMemo(() => ({ ...y,
                    update: _,
                    refs: B,
                    elements: U,
                    floatingStyles: W
                }), [y, _, B, U, W])
            }
            let d = (e, t) => ({ ...(0, r.cY)(e),
                    options: [e, t]
                }),
                p = (e, t) => ({ ...(0, r.BN)(e),
                    options: [e, t]
                }),
                v = (e, t) => ({ ...(0, r.UU)(e),
                    options: [e, t]
                }),
                m = (e, t) => ({ ...(e => ({
                        name: "arrow",
                        options: e,
                        fn(t) {
                            let {
                                element: n,
                                padding: o
                            } = "function" == typeof e ? e(t) : e;
                            return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? (0, r.UE)({
                                element: n.current,
                                padding: o
                            }).fn(t) : {} : n ? (0, r.UE)({
                                element: n,
                                padding: o
                            }).fn(t) : {}
                        }
                    }))(e),
                    options: [e, t]
                })
        }
    }
]);