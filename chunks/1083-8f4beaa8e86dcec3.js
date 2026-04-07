! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e1eb0389-920e-447b-9cfe-1397f673f468", e._sentryDebugIdIdentifier = "sentry-dbid-e1eb0389-920e-447b-9cfe-1397f673f468")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1083], {
        665: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => l
            });
            var a = n(72668);
            let l = (e, t) => {
                let n = e.nights.filter(e => e.night <= t);
                if (!(0, a.Im)(n)) return n.reduce((e, t) => t.night > e.night ? t : e)
            }
        },
        11854: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var a = n(37876);
            let l = e => {
                let {
                    color: t
                } = e;
                return (0, a.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: t
                })
            }
        },
        12585: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => m
            });
            var a = n(37876),
                l = n(77925);
            let r = ["xxs", "xs", "s", "m", "ml", "l", "xl", "2xl", "3xl"],
                o = {
                    bold: 700,
                    mid: 500,
                    regular: 300
                },
                i = (e, t, n) => {
                    let a, l, i = r.indexOf(e),
                        c = r.indexOf("l");
                    return a = t && i >= c ? r[i - 2] : e, l = i <= c ? n : "bold", "".concat(a, "-").concat(o[l])
                },
                c = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bold",
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ("string" == typeof e) return i(e, n, t);
                    let a = e.mobile,
                        l = e.tablet || a,
                        r = e.laptop || l,
                        o = e.desktop || r;
                    return {
                        mobile: i(a, n, t),
                        tablet: i(l, n, t),
                        laptop: i(r, n, t),
                        desktop: i(o, n, t)
                    }
                };
            var s = n(51607),
                d = n.n(s),
                _ = n(76251),
                u = n(84640),
                p = n(72668);
            let m = e => {
                let {
                    fontStyle: t,
                    netPrice: n,
                    grossPrice: r,
                    showAlwaysGross: o,
                    showAlwaysNet: i,
                    round: s,
                    fontWeight: m = "bold",
                    strikethrough: f = !1,
                    isAbsolute: h = !0,
                    color: y = "dark",
                    withSymbol: g,
                    "data-testid": x,
                    className: b,
                    dataKey: v,
                    ariaLabel: w
                } = e, {
                    symbolBefore: k,
                    symbolAfter: A,
                    getSymbol: I,
                    formatValue: E
                } = (0, _.Z)(), j = I(r.currency), T = e => "3xl" === e ? "xs" : "xxs", S = () => {
                    if ("string" == typeof t) return (0, u.x)(d()["symbol-".concat(T(t), "-gap")], A && d()["symbol-after"], k && d()["symbol-before"]);
                    let e = T(t.mobile),
                        n = t.tablet ? T(t.tablet) : e,
                        a = t.laptop ? T(t.laptop) : n,
                        l = t.desktop ? T(t.desktop) : a;
                    return (0, u.x)(d()["mobile-symbol-".concat(e, "-gap")], d()["tablet-symbol-".concat(n, "-gap")], d()["laptop-symbol-".concat(a, "-gap")], d()["desktop-symbol-".concat(l, "-gap")], A && d()["symbol-after"], k && d()["symbol-before"])
                }, N = E(r, n, {
                    absolute: h,
                    showAlwaysGross: o,
                    showAlwaysNet: i,
                    roundUp: "up" === s,
                    roundOff: "off" === s
                }), C = "".concat(k ? j + " " : "").concat(N).concat(k ? "" : " " + j);
                return (0, a.jsxs)("span", {
                    className: (0, u.x)(b, d().container),
                    ...(0, p.O9)(v) && {
                        [v]: N
                    },
                    "aria-label": w || C,
                    children: [k && (0, a.jsx)(l.EY, {
                        className: S(),
                        color: y,
                        fontStyle: c(t, m, !0),
                        children: j
                    }), (0, a.jsxs)(l.EY, {
                        color: y,
                        fontStyle: c(t, m),
                        "data-testid": x,
                        children: ["plus" === g && "+ ", "minus" === g && "-", N]
                    }), A && (0, a.jsx)(l.EY, {
                        className: S(),
                        color: y,
                        fontStyle: c(t, m, !0),
                        children: j
                    }), f && (0, a.jsx)("div", {
                        className: (0, u.x)(d().strikethrough, d()["strikethrough-".concat(y)])
                    })]
                })
            }
        },
        24463: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => a.M
            });
            var a = n(60774)
        },
        27839: (e, t, n) => {
            "use strict";
            n.d(t, {
                i5: () => a.i,
                v_: () => a.v
            });
            var a = n(51504)
        },
        35750: (e, t, n) => {
            "use strict";
            n.d(t, {
                Kh: () => _,
                O3: () => s,
                QP: () => u,
                Se: () => p,
                dx: () => o,
                eg: () => g,
                gK: () => i,
                n6: () => d,
                r3: () => m,
                rR: () => h,
                x3: () => y,
                zz: () => c
            });
            var a = n(10184),
                l = n(82802);
            let r = () => l.k.resolve("envManager").getBaseImagesUrl(),
                o = e => {
                    let {
                        src: t,
                        width: n,
                        quality: l = 75
                    } = e, r = (0, a.sr)().FALLBACK_IMAGE, o = "?fmt=webp&wid=".concat(n, "&qlt=").concat(l);
                    return "".concat(t).concat(o, "&defaultImage=").concat(r)
                },
                i = () => "".concat(r()).concat("default-extra"),
                c = e => e.hotelImages.map((t, n) => ({
                    src: t,
                    alt: "Image ".concat(n + 1, " of hotel ").concat(e.name)
                })),
                s = e => (t, n) => {
                    let {
                        images: l
                    } = (0, a.aJ)(t, n);
                    return l.map((n, a) => ({
                        src: n,
                        alt: e("carousel_images_index", {
                            index: a + 1,
                            room: t.name
                        })
                    }))
                },
                d = (e, t) => ((e, t) => {
                    let {
                        images: n
                    } = (0, a.aJ)(e, t);
                    return n.map((t, n) => ({
                        src: t,
                        alt: "Image ".concat(n + 1, " of room ").concat(e.name)
                    }))
                })(e, t)[0],
                _ = e => {
                    let {
                        aspectRatio: t
                    } = e;
                    return e => {
                        let {
                            src: n,
                            width: l,
                            quality: r = 75
                        } = e, o = (0, a.MR)().FALLBACK_IMAGE, i = f(l, t), c = "?fmt=webp&wid=".concat(l, "&hei=").concat(i, "&qlt=").concat(r, "&fit=crop");
                        return "".concat(n).concat(c, "&defaultImage=").concat(o)
                    }
                },
                u = (e, t) => {
                    let {
                        services: n
                    } = (0, a.aJ)(e, t);
                    return n.map(e => {
                        let {
                            id: t,
                            text: n,
                            icon: a
                        } = e;
                        return {
                            id: t,
                            text: n,
                            icon: {
                                src: a,
                                alt: n
                            }
                        }
                    })
                },
                p = e => {
                    let {
                        src: t,
                        quality: n = 75
                    } = e, l = (0, a.MR)().SERVICE_SRC;
                    return "".concat(r()).concat(t).concat("?fmt=webp&qlt=".concat(n), "&defaultImage=").concat(l)
                },
                m = e => {
                    let {
                        src: t,
                        quality: n = 75,
                        width: a
                    } = e;
                    return p({
                        src: t,
                        quality: n,
                        width: a
                    }).replace("?fmt=webp", "?fmt=png8-alpha")
                },
                f = (e, t) => {
                    let {
                        width: n,
                        height: a
                    } = t;
                    return Math.round(e * a / n)
                },
                h = e => {
                    let {
                        src: t,
                        width: n,
                        quality: a = 75,
                        format: l = "webp"
                    } = e, o = "?fmt=".concat(l, "&wid=").concat(n, "&qlt=").concat(a, "&opac=100");
                    return "".concat(r()).concat(t).concat(o)
                },
                y = e => {
                    let {
                        src: t,
                        quality: n = 75
                    } = e;
                    return "".concat("https://www.barcelo.com").concat(t).concat("?fmt=webp&qlt=".concat(n))
                },
                g = e => {
                    let {
                        src: t
                    } = e;
                    return "".concat("https://www.barcelo.com").concat(t)
                }
        },
        39098: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var a = n(37876);
            let l = e => {
                let {
                    color: t
                } = e;
                return (0, a.jsx)("path", {
                    d: "M12 15.6V12M12 8.4H12.009M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                    stroke: t,
                    strokeWidth: "1.01",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            }
        },
        51504: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => u,
                v: () => _
            });
            var a = n(14232),
                l = n(72668),
                r = n(82802),
                o = n(99742);
            let i = {};
            async function c(e) {
                return (0, l.O9)(i[e]) ? i[e] : i[e] = s(e)
            }
            async function s(e) {
                return new Promise((t, n) => {
                    var a;
                    let i = (a = void(0, l.b0)(""), void 0 !== a) ? a : function(e) {
                        var t;
                        if (!(0, l.b0)(o.env.NEXT_PUBLIC_TARGET_EXPERIMENT_DETAIL) && 0 !== o.env.NEXT_PUBLIC_TARGET_EXPERIMENT_DETAIL.length) return null != (t = JSON.parse(o.env.NEXT_PUBLIC_TARGET_EXPERIMENT_DETAIL)[e]) ? t : void 0
                    }(e);
                    return (0, l.O9)(i) ? t(i) : (0, l.b0)(window.adobe) ? (r.k.resolve("logger").warning("window.adobe is undefined (".concat(e, ")")), t(void 0)) : void window.adobe.target.getOffer({
                        mbox: e,
                        success: function(n) {
                            if (0 === n.length) return t(void 0);
                            let a = n[0].content[0];
                            return r.k.resolve("logger").info("Target experiment :: offer", {
                                mbox: e,
                                content: a
                            }), t(a)
                        },
                        error: function(e, t) {
                            n({
                                status: e,
                                error: t
                            })
                        }
                    })
                })
            }

            function d(e) {
                let {
                    mbox: t,
                    variant: n = "",
                    eventName: a,
                    experimentName: l
                } = e;
                r.k.resolve("logger").info("Target Experiment :: startSendAnalyticsEvent", {
                    mbox: t,
                    variant: n,
                    eventName: a
                });
                let o = 0,
                    i = setInterval(function() {
                        "function" == typeof window.gtag ? (clearInterval(i), function(e) {
                            let {
                                mbox: t,
                                variant: n,
                                eventName: a,
                                experimentName: l
                            } = e;
                            if ("function" != typeof window.gtag) return r.k.resolve("logger").warning("ga o gtag undefined");
                            r.k.resolve("logger").info("Target experiment :: sendEventGA", {
                                mbox: t,
                                eventName: a,
                                variant: n
                            });
                            let o = l + (a.length > 0 ? " " + a : "");
                            window.gtag("config", "G-0FXFK8NDBB"), window.gtag("event", "target", {
                                event: "adobe target",
                                event_category: "adobe target",
                                event_action: o,
                                event_label: n
                            }), r.k.resolve("analytics").adobeTarget.experiment(l, n)
                        }({
                            mbox: t,
                            variant: n,
                            eventName: a,
                            experimentName: l
                        })) : o <= 1e4 ? o += 1e3 : clearInterval(i)
                    }, 1e3)
            }
            let _ = e => u(e, {
                    hasToSendStartAnalyticWhenShow: !0
                }),
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            hasToSendStartAnalyticWhenShow: !1,
                            isExperimentLaunchedManually: !1
                        },
                        [n, o] = (0, a.useState)(!1),
                        [i, s] = (0, a.useState)(!1),
                        [_, u] = (0, a.useState)(void 0),
                        [p, m] = (0, a.useState)(void 0),
                        [f, h] = (0, a.useState)(void 0),
                        y = async () => (0, l.b0)(e) || (0, l.Im)(e) ? void u("CONTROL") : (o(!0), c(e).then(n => {
                            (0, l.b0)(n) ? (s(!1), u("CONTROL")) : (s(!0), u(n.variant), m(n.testName), h(n.detail), t.hasToSendStartAnalyticWhenShow && d({
                                mbox: e,
                                eventName: "",
                                variant: n.variant,
                                experimentName: n.testName
                            }))
                        }).catch(e => {
                            s(!1), u("CONTROL"), h(void 0), console.error("getTargetOffer ERROR", e.status, e.error), r.k.resolve("logger").error(e.error)
                        }).finally(() => {
                            o(!1)
                        })),
                        g = (0, a.useCallback)(() => {
                            i && d({
                                mbox: e,
                                eventName: "",
                                variant: _,
                                experimentName: p
                            })
                        }, [p, i, e, _]);
                    return (0, a.useEffect)(() => {
                        ((0, l.b0)(e) || (0, l.Im)(e)) && r.k.resolve("logger").warning("useTargetExperiment: mbox is not defined in Vercel environment variables")
                    }, []), (0, a.useEffect)(() => {
                        (0, l.b0)(e) || (0, l.Im)(e) || t.isExperimentLaunchedManually || y()
                    }, []), {
                        loadExperiment: y,
                        isLoading: n,
                        isEnabled: i,
                        variantToShow: _,
                        experimentName: p,
                        detail: f,
                        sendStartAnalyticsEvent: g,
                        sendExperimentEvent: t => {
                            i && function(e) {
                                var t, n, a;
                                let {
                                    mbox: l,
                                    variant: o,
                                    eventName: i,
                                    experimentName: c
                                } = e;
                                d({
                                    mbox: l,
                                    variant: o,
                                    eventName: i,
                                    experimentName: c
                                }), t = "".concat(l, "-").concat(i), r.k.resolve("logger").info("Target Experiment :: trackEvent", {
                                    mbox: t
                                }), null == (a = window.adobe) || null == (n = a.target) || n.trackEvent({
                                    mbox: t
                                })
                            }({
                                mbox: e,
                                eventName: t,
                                variant: _,
                                experimentName: p
                            })
                        }
                    }
                }
        },
        51607: e => {
            e.exports = {
                container: "Price_container__MSwmL",
                strikethrough: "Price_strikethrough__X0cC_",
                "strikethrough-support-error": "Price_strikethrough-support-error__3nqYD",
                "strikethrough-support-error-dark": "Price_strikethrough-support-error-dark__eQvlF",
                "strikethrough-dark": "Price_strikethrough-dark__VKtxO",
                "symbol-xs-gap": "Price_symbol-xs-gap__YrKXY",
                "symbol-after": "Price_symbol-after__KItaB",
                "symbol-before": "Price_symbol-before__9an_0",
                "symbol-xxs-gap": "Price_symbol-xxs-gap__UudY4",
                "mobile-symbol-xs-gap": "Price_mobile-symbol-xs-gap__EaVQl",
                "mobile-symbol-xxs-gap": "Price_mobile-symbol-xxs-gap__6Z7AV",
                "tablet-symbol-xs-gap": "Price_tablet-symbol-xs-gap__Ee0pN",
                "tablet-symbol-xxs-gap": "Price_tablet-symbol-xxs-gap__b9m3m",
                "laptop-symbol-xs-gap": "Price_laptop-symbol-xs-gap__Sq2ZP",
                "laptop-symbol-xxs-gap": "Price_laptop-symbol-xxs-gap__KAXOq",
                "desktop-symbol-xs-gap": "Price_desktop-symbol-xs-gap__0_gxY",
                "desktop-symbol-xxs-gap": "Price_desktop-symbol-xxs-gap__8W0zk"
            }
        },
        57691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => r
            });
            var a = n(83151),
                l = n(72668);
            let r = (e, t) => (0, l.b0)(e) || (0, l.b0)(t) || e === t ? 0 : a.D.calculateNights(e, t)
        },
        59566: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => v,
                T: () => k
            });
            var a = n(37876),
                l = n(77925),
                r = n(54704),
                o = n(68388),
                i = n(76251),
                c = n(72668),
                s = n(59771),
                d = n(98713),
                _ = n.n(d),
                u = n(84640),
                p = n(35004),
                m = n(39126),
                f = n(11854);
            let h = e => {
                let {
                    details: t,
                    deadline: n,
                    todayIsBeforeDeadline: o = !0,
                    todayIsAfterDeadline: i = !1,
                    todayIsCheckInDay: s = !1,
                    isFlexibleCancellation: d = !1,
                    isHighlighted: h = !1
                } = e, {
                    trans: y
                } = (0, r.m)(["common"]);
                return (0, c.b0)(t) || (0, c.b0)(n) ? null : (0, a.jsxs)("div", {
                    className: "w-full mt-xs",
                    children: [(0, a.jsxs)(p.s, {
                        gap: "xs",
                        className: _().circleAndLineContainer,
                        children: [(0, a.jsx)(m.I, {
                            "data-testid": "icon-circle",
                            size: "s",
                            icon: f.A,
                            color: o ? "support-success-dark" : "support-error-dark"
                        }), (0, a.jsx)("div", {
                            "data-testid": "timeline-line",
                            className: (0, u.x)(_().line, o ? _().greenLine : _().redLine)
                        }), (0, a.jsxs)(p.s, {
                            direction: "column",
                            className: "w-full",
                            children: [(0, a.jsxs)(p.s, {
                                gap: "xs",
                                className: "mb-xxs",
                                children: [(0, a.jsx)(l.EY, {
                                    fontStyle: "s-500",
                                    children: y("cancellation_policy_breakdown_until")
                                }), (0, a.jsx)(l.EY, {
                                    fontStyle: "s-300",
                                    children: n
                                })]
                            }), (0, a.jsx)(l.EY, {
                                as: "p",
                                fontStyle: h ? "s-500" : "s-300",
                                color: h ? "support-success-dark" : "dark",
                                className: i ? _().strikethrough : void 0,
                                children: t.beforeDeadline
                            }), (0, a.jsx)(l.cG, {
                                dir: "horizontal",
                                className: "mt-xs mb-xs"
                            })]
                        })]
                    }), !d && (0, a.jsxs)(p.s, {
                        gap: "xs",
                        className: _().circleAndLineContainer,
                        children: [(0, a.jsx)(m.I, {
                            "data-testid": "icon-circle",
                            size: "s",
                            icon: f.A,
                            color: o ? "fill-neutral-03" : s ? "support-error-dark" : "support-success-dark"
                        }), (0, a.jsx)("div", {
                            "data-testid": "timeline-line",
                            className: (0, u.x)(_().line, i && !s && _().greenLine, s && _().redLine)
                        }), (0, a.jsxs)(p.s, {
                            direction: "column",
                            className: "w-full",
                            children: [(0, a.jsxs)(p.s, {
                                gap: "xs",
                                className: "mb-xxs",
                                children: [(0, a.jsx)(l.EY, {
                                    fontStyle: "s-500",
                                    children: y("cancellation_policy_breakdown_from")
                                }), (0, a.jsx)(l.EY, {
                                    fontStyle: "s-300",
                                    children: n
                                })]
                            }), t.afterDeadline.map(e => (0, a.jsx)(l.EY, {
                                as: "p",
                                fontStyle: "s-300",
                                className: s ? _().strikethrough : void 0,
                                children: e
                            }, e)), (0, a.jsx)(l.cG, {
                                dir: "horizontal",
                                className: "mt-xs mb-xs"
                            })]
                        })]
                    }), (0, a.jsxs)(p.s, {
                        gap: "xs",
                        children: [(0, a.jsx)(m.I, {
                            "data-testid": "icon-circle",
                            size: "s",
                            icon: f.A,
                            color: s ? "support-success-dark" : "fill-neutral-03"
                        }), (0, a.jsxs)(p.s, {
                            direction: "column",
                            className: "w-full",
                            children: [(0, a.jsx)(l.EY, {
                                fontStyle: "s-500",
                                children: y("cancellation_policy_breakdown_if-you-dont-show-up")
                            }), t.afterCheckIn.map(e => (0, a.jsx)(l.EY, {
                                as: "p",
                                fontStyle: "s-300",
                                children: e
                            }, e))]
                        })]
                    })]
                })
            };
            var y = n(78760),
                g = n(60774),
                x = n(61810),
                b = n(64783);
            let v = e => {
                let {
                    cancellation: t,
                    guarantee: n,
                    timeline: d,
                    checkIn: _,
                    cancellationTitle: u,
                    className: m,
                    titleFontStyle: f = "m-700",
                    detailsFontStyle: v = "m-300",
                    hasToShowBulletLine: w = !1,
                    hasToShowTimeline: k = !0,
                    isCancellationPage: A = !1
                } = e, {
                    trans: I
                } = (0, r.m)(["common"]), {
                    formatPrice: E
                } = (0, i.Z)(), j = "before-reservation" === d, T = (0, b.o)(null == t ? void 0 : t.deadline), S = "free" === t.cancellationType && x.g.isSameDay(T, _), N = null != u ? u : (0, o.m)(t, n, I), C = (0, y.Gv)(t, n, d, I, E, _), D = (0, y.t9)(t, n, I, E, _), Y = (0, c.O9)(t.deadline) ? t.deadline.format("D MMM YYYY") : void 0, M = !!(0, c.O9)(t.deadline) && x.g.now().isBefore(t.deadline), B = x.g.isSameDay(x.g.now().toDate(), _) && x.g.now().isBefore(x.g.fromDate(_)), L = "free" === t.cancellationType && 0 === n.deposit.value || (0, c.O9)(n.daysBeforeCheckIn) && n.daysBeforeCheckIn > 0;
                return A ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.EY, {
                        fontStyle: "m-700",
                        className: "mt-m",
                        children: I("common:cancellation_policy_title_policy")
                    }), (0, a.jsx)(g.M, {
                        type: "free" === t.cancellationType && 0 === n.deposit.value ? "success" : "warning",
                        text: C,
                        className: "mt-xs"
                    })]
                }) : (0, a.jsxs)(p.s, {
                    direction: "column",
                    gap: "xs",
                    className: m,
                    children: [w && "string" == typeof N ? (0, a.jsx)(s.D, {
                        fontColor: L ? "support-success-dark" : "dark",
                        fontStyle: "m-700",
                        text: N
                    }) : (0, a.jsx)(l.EY, {
                        fontStyle: f,
                        color: j && (0, c.b0)(u) && L ? "support-success" : "dark",
                        children: N
                    }), (0, a.jsx)(l.EY, {
                        as: "p",
                        fontStyle: v,
                        children: C
                    }), k && (0, a.jsx)(h, {
                        details: D,
                        deadline: Y,
                        todayIsBeforeDeadline: M,
                        todayIsAfterDeadline: !M,
                        todayIsCheckInDay: B,
                        isFlexibleCancellation: S,
                        isHighlighted: L
                    })]
                })
            };
            var w = n(31212);
            let k = () => (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(w.$, {
                    mobile: !0,
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(l.EA, {
                            className: "mb-s",
                            height: 30,
                            width: 200
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: "100%"
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: "100%"
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: "100%"
                        })]
                    })
                }), (0, a.jsx)(w.$, {
                    tablet: !0,
                    laptop: !0,
                    desktop: !0,
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(l.EA, {
                            className: "mb-s",
                            height: 30,
                            width: 200
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: 300
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: 340
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: 280
                        })]
                    })
                })]
            })
        },
        59771: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => c
            });
            var a = n(37876),
                l = n(77925),
                r = n(88503),
                o = n.n(r),
                i = n(84640);
            let c = e => {
                let {
                    text: t,
                    fontStyle: n = "m-700",
                    fontColor: r = "dark",
                    bulletColor: c = "primary",
                    className: s,
                    "data-testid": d
                } = e;
                return (0, a.jsxs)("div", {
                    className: (0, i.x)(s, o().container),
                    children: [(0, a.jsx)("div", {
                        className: (0, i.x)(o()["color-".concat(c)], o().bullet)
                    }), (0, a.jsx)(l.EY, {
                        fontStyle: n,
                        color: r,
                        "data-testid": d,
                        children: t
                    })]
                })
            }
        },
        60774: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => c
            });
            var a = n(37876),
                l = n(64647),
                r = n.n(l),
                o = n(84640),
                i = n(25072);
            let c = e => {
                let {
                    type: t,
                    text: n,
                    className: l,
                    ariaLabel: c,
                    "data-testid": s,
                    role: d = "alert"
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, o.x)(r().alertInlineWrapper, l),
                    "aria-label": c,
                    "data-testid": s,
                    children: (0, a.jsx)("div", {
                        className: (0, o.x)(r().alertInline, r()[t]),
                        children: (0, a.jsx)("div", {
                            role: d,
                            children: "string" == typeof n ? (0, a.jsx)(i.E, {
                                fontStyle: "s-500",
                                color: "success" === t ? "support-success-dark" : "dark",
                                children: n
                            }) : n
                        })
                    })
                })
            }
        },
        61442: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p,
                q: () => f
            });
            var a = n(37876),
                l = n(77925),
                r = n(35004),
                o = n(54704),
                i = n(68181),
                c = n(76251),
                s = n(59771),
                d = n(72668),
                _ = n(61810);
            let u = (e, t, n) => {
                    let {
                        deposit: a,
                        pending: l,
                        daysBeforeCheckIn: r,
                        deadline: o
                    } = e;
                    return {
                        "all-prepay": [{
                            token: "all-prepay",
                            options: {
                                price: t(a)
                            }
                        }],
                        "partial-percentage": [{
                            token: "deposit",
                            options: {
                                percentage: n,
                                price: t(a)
                            }
                        }, {
                            token: "pending-partial",
                            options: {
                                price: t(l)
                            }
                        }],
                        "all-hotel": [{
                            token: "all-hotel"
                        }],
                        "days-before-check-in": [{
                            token: "days-before-check-in",
                            options: {
                                days: r,
                                deadlineDay: _.g.fromDate(o).format("D MMMM"),
                                deadlineYear: _.g.fromDate(o).format("YYYY")
                            }
                        }],
                        "partial-days": []
                    }
                },
                p = e => {
                    let {
                        guarantee: t,
                        timeline: n,
                        guaranteeTitle: _,
                        className: p,
                        titleFontStyle: m = "m-700",
                        detailsFontStyle: f = "m-300",
                        hasToShowBulletLine: h = !1
                    } = e, {
                        trans: y
                    } = (0, o.m)(["common"]), {
                        formatPrice: g
                    } = (0, c.Z)(), x = null != _ ? _ : (0, i.d)(t, n, y), b = ((e, t) => {
                        let n = e.type.key,
                            a = e.type.value;
                        return "partial-percentage" === n && (0, d.b0)(a) ? [] : u(e, t, a)[n]
                    })(t, g).map(e => {
                        let {
                            token: t,
                            options: a
                        } = e;
                        return y("".concat("common:guarantee_policy", "_").concat(n, "_details_").concat(t, "_v2"), a)
                    });
                    return (0, a.jsxs)(r.s, {
                        direction: "column",
                        gap: "xs",
                        className: p,
                        children: [h ? (0, a.jsx)(s.D, {
                            fontStyle: "m-700",
                            text: x
                        }) : (0, a.jsx)(l.EY, {
                            fontStyle: m,
                            children: x
                        }), (0, a.jsx)(l.EY, {
                            fontStyle: f,
                            children: (0, a.jsx)("ul", {
                                children: b.map((e, t) => (0, a.jsx)("li", {
                                    children: e
                                }, t))
                            })
                        })]
                    })
                };
            var m = n(31212);
            let f = () => (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(m.$, {
                    mobile: !0,
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(l.EA, {
                            className: "mb-s",
                            height: 30,
                            width: 200
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: "100%"
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: "100%"
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: "100%"
                        })]
                    })
                }), (0, a.jsx)(m.$, {
                    tablet: !0,
                    laptop: !0,
                    desktop: !0,
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(l.EA, {
                            className: "mb-s",
                            height: 30,
                            width: 200
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: 280
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: 320
                        }), (0, a.jsx)(l.EA, {
                            height: 30,
                            width: 300
                        })]
                    })
                })]
            })
        },
        64647: e => {
            e.exports = {
                "w-full": "AlertInline_w-full__aOXIU",
                "w-fit": "AlertInline_w-fit__2QPfM",
                "w-5/12": "AlertInline_w-5__12__dPNDK",
                "w-7/12": "AlertInline_w-7__12__QJe7R",
                "h-full": "AlertInline_h-full__axyld",
                flex: "AlertInline_flex__vEKvT",
                grow: "AlertInline_grow___1MDT",
                "flex-1": "AlertInline_flex-1__GhRWu",
                "shrink-0": "AlertInline_shrink-0__NE7A7",
                "self-center": "AlertInline_self-center__XN8wa",
                "self-end": "AlertInline_self-end__FfogW",
                "items-center": "AlertInline_items-center__eQ04X",
                "justify-center": "AlertInline_justify-center__loOOI",
                "gap-xs": "AlertInline_gap-xs__hhGE2",
                "cursor-pointer": "AlertInline_cursor-pointer__QqO7_",
                "touch-security-zone": "AlertInline_touch-security-zone__53fZh",
                "touch-security-zone-always": "AlertInline_touch-security-zone-always__ihM_7",
                alertInlineWrapper: "AlertInline_alertInlineWrapper__YGB3t",
                alertInline: "AlertInline_alertInline__H8n_1",
                info: "AlertInline_info__Iv72z",
                warning: "AlertInline_warning__LehF6",
                success: "AlertInline_success__VSJ__",
                error: "AlertInline_error__LHZaW",
                neutral: "AlertInline_neutral__A5wMI"
            }
        },
        64783: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => r
            });
            var a = n(61810),
                l = n(72668);
            let r = e => {
                if (!(0, l.b0)(e)) return a.g.fromString(e.format("YYYY-MM-DD HH:mm")).toDate()
            }
        },
        68181: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => a
            });
            let a = (e, t, n) => {
                let a = e.type.key,
                    l = e.type.value;
                return n("".concat("common:guarantee_policy", "_").concat(t, "_title_").concat(a), l ? {
                    value: l
                } : void 0)
            }
        },
        68388: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => r
            });
            var a = n(72668);
            let l = "common:cancellation_policy",
                r = (e, t, n) => n("non-refundable" === e.cancellationType || (0, a.O9)(t.daysBeforeCheckIn) && 0 === t.daysBeforeCheckIn ? "".concat(l, "_title_non-refundable_v2") : "policy" === e.cancellationType || t.deposit.value > 0 && (0, a.b0)(t.daysBeforeCheckIn) ? "".concat(l, "_title_with-penalty_v2") : "free" === e.cancellationType && (0, a.O9)(t.daysBeforeCheckIn) && t.daysBeforeCheckIn > 0 ? "".concat(l, "_title_early_v2") : "".concat(l, "_title_free_v2"))
        },
        76251: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var a = n(84968),
                l = n(65067),
                r = n(84703),
                o = n(29808);
            let i = () => {
                let {
                    getCurrencySymbol: e
                } = (0, l.H2)(), {
                    marketPrice: t
                } = (0, o.At)(), n = (0, r.QD)(), i = null == n ? void 0 : n.currencyProperties.currencySymbolBeforeNumber, c = !(null == n ? void 0 : n.currencyProperties.currencySymbolBeforeNumber), s = null == t ? void 0 : t.netPrices, d = t => e(t), _ = (e, t, a) => ({ ...t,
                    currencySymbol: d((s && a ? a : e).currency),
                    currencySymbolBeforeNumber: !!i,
                    commaAsThousandsSeparator: !!(null == n ? void 0 : n.currencyProperties.commaAsThousandsSeparator),
                    isMarketWithNetPrice: s
                });
                return {
                    symbolBefore: i,
                    symbolAfter: c,
                    getSymbol: d,
                    formatPrice: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                absolute: !1,
                                showAlwaysGross: !1,
                                showAlwaysNet: !1,
                                roundUp: !1,
                                roundOff: !1
                            },
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return (0, a.$g)(e, _(e, t, n), n)
                    },
                    formatValue: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            absolute: !1,
                            showAlwaysGross: !1,
                            showAlwaysNet: !1,
                            roundUp: !1,
                            roundOff: !1
                        };
                        return (0, a.Fl)(e, t, _(e, n, t))
                    }
                }
            }
        },
        78760: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gv: () => i,
                gD: () => d,
                t9: () => c
            });
            var a = n(72668),
                l = n(61810),
                r = n(64783);
            let o = "common:cancellation_policy",
                i = (e, t, n, i, c, s) => {
                    let {
                        cancellationType: d,
                        hotelUTC: _,
                        deadline: u,
                        relative: p,
                        penalty: m
                    } = e, f = p.penalty.type, h = p.penalty.value, y = t.deposit.value > 0 ? "with-prepay" : "without-prepay", g = "before-cancellation" === n || "after-cancellation" === n;
                    if ((0, a.b0)(u) || "non-refundable" === d || 0 === t.daysBeforeCheckIn) return i("".concat(o, "_").concat(n, "_details_non-refundable_").concat(y));
                    let x = (0, r.o)(u);
                    if ("free" === d && l.g.isSameDay(x, s)) return i("".concat(o, "_").concat(n, "_details_").concat(d, "_without-prepay_before-deadline"), {
                        deadlineDay: u.format("D MMMM"),
                        deadlineYear: u.format("YYYY"),
                        deadlineHour: u.format("HH:mm"),
                        hotelUTC: _,
                        price: c(m),
                        count: h
                    });
                    if ("free" === d && (0, a.O9)(t.daysBeforeCheckIn) && t.daysBeforeCheckIn > 0) return i("".concat(o, "_").concat(n, "_details_").concat(d, "_").concat(f, "_without-prepay_before-deadline"), {
                        deadlineDay: u.format("D MMMM"),
                        deadlineYear: u.format("YYYY"),
                        deadlineHour: u.format("HH:mm"),
                        hotelUTC: _
                    });
                    let b = l.g.now().isBefore(u);
                    return "free" === d && b ? i("".concat(o, "_").concat(n, "_details_").concat(d, "_").concat(f, "_").concat(y, "_before-deadline"), {
                        deadlineDay: u.format("D MMMM"),
                        deadlineYear: u.format("YYYY"),
                        deadlineHour: u.format("HH:mm"),
                        hotelUTC: _,
                        price: c(m),
                        count: h
                    }) : "policy" === d ? i("".concat(o, "_").concat(n, "_details_").concat(d, "_").concat(f, "_").concat(y, "_after-deadline"), {
                        price: c(m),
                        count: h
                    }) : i(g ? "".concat(o, "_").concat(n, "_details_").concat(d, "_").concat(f, "_").concat(y, "_after-deadline") : "".concat(o, "_").concat(n, "_details_").concat(d, "_").concat(f, "_after-deadline"), {
                        total: c(m),
                        count: h
                    })
                },
                c = (e, t, n, a, l) => {
                    let r = s(e, t, a, l);
                    if (!r) return;
                    let {
                        beforeDeadline: i,
                        afterDeadline: c
                    } = r, {
                        token: d,
                        options: _
                    } = i;
                    return {
                        beforeDeadline: n("".concat(o, "_details_before_").concat(d, "_v2"), _),
                        afterDeadline: c.map(e => {
                            let {
                                token: t,
                                options: a
                            } = e;
                            return n("".concat(o, "_details_after_").concat(t, "_v2"), a)
                        }),
                        afterCheckIn: c.map(e => {
                            let {
                                token: t,
                                options: a
                            } = e;
                            return n("".concat(o, "_details_after_").concat(t, "_v2"), a)
                        })
                    }
                },
                s = (e, t, n, o) => {
                    if ("non-refundable" === e.cancellationType || (0, a.b0)(e.deadline)) return;
                    let i = (0, r.o)(e.deadline),
                        c = l.g.isSameDay(i, o),
                        s = (0, a.O9)(t.daysBeforeCheckIn),
                        d = e.penalty,
                        _ = t.deposit,
                        u = t.pending,
                        p = e.relative.penalty.value,
                        m = t.deposit.value > 0,
                        f = e.relative.penalty.type;
                    return s ? {
                        beforeDeadline: {
                            token: "early",
                            options: void 0
                        },
                        afterDeadline: [{
                            token: "deposit",
                            options: {
                                deposit: n(_)
                            }
                        }]
                    } : c ? {
                        beforeDeadline: {
                            token: "free",
                            options: void 0
                        },
                        afterDeadline: [{
                            token: "days-penalty",
                            options: {
                                penalty: n(d),
                                count: p
                            }
                        }]
                    } : m ? {
                        beforeDeadline: {
                            token: "deposit",
                            options: {
                                deposit: n(_)
                            }
                        },
                        afterDeadline: [{
                            token: "deposit",
                            options: {
                                deposit: n(_)
                            }
                        }, {
                            token: "".concat(f, "-penalty"),
                            options: {
                                penalty: n(d),
                                pending: n(u),
                                count: p
                            }
                        }]
                    } : {
                        beforeDeadline: {
                            token: "free",
                            options: void 0
                        },
                        afterDeadline: [{
                            token: "percentage" === f && 100 === p ? "total-penalty" : "".concat(f, "-penalty"),
                            options: {
                                penalty: n(d),
                                pending: n(u),
                                count: p
                            }
                        }]
                    }
                },
                d = (e, t, n, a) => {
                    let l = e.value > 0,
                        r = t.value > 0,
                        o = 0 === t.value,
                        i = t.value < 0,
                        c = "".concat("manage-reservation:cancellation_costs", "_").concat(n, "_details");
                    return l ? a(o ? "".concat(c, "_with-prepay_without-cost") : i ? "".concat(c, "_with-prepay_with-refund") : "".concat(c, "_with-prepay_with-cost")) : a(r ? "".concat(c, "_without-prepay_with-cost") : "".concat(c, "_without-prepay_without-cost"))
                }
        },
        84968: (e, t, n) => {
            "use strict";
            n.d(t, {
                $g: () => r,
                Fl: () => l,
                LN: () => a
            });
            let a = (e, t) => {
                    var n;
                    let a = Number(e.toFixed(2)).toString().split("."),
                        l = t.commaAsThousandsSeparator ? "," : ".",
                        r = t.commaAsThousandsSeparator ? "." : ",",
                        o = a[0],
                        i = (null != (n = a[1]) ? n : "").padEnd(2, "0");
                    return "".concat(o.replace(/\B(?=(\d{3})+(?!\d))/g, l)).concat(t.hasToSkipDecimals ? "" : r + i)
                },
                l = (e, t, n) => a(((e, t) => {
                    let n = t.absolute ? Math.abs(e) : e;
                    return n = t.roundUp ? Math.ceil(n) : n, n = t.roundOff ? Math.round(n) : n
                })(((e, t, n) => (null == n ? void 0 : n.showAlwaysGross) ? e : t && ((null == n ? void 0 : n.isMarketWithNetPrice) || (null == n ? void 0 : n.showAlwaysNet)) ? t : e)(e, t, n).value, n), {
                    commaAsThousandsSeparator: n.commaAsThousandsSeparator,
                    hasToSkipDecimals: n.roundUp || n.roundOff
                }),
                r = (e, t, n) => {
                    let a = l(e, n, t),
                        r = t.currencySymbol;
                    return t.currencySymbolBeforeNumber ? "".concat(r).concat("\xa0").concat(a) : "".concat(a).concat("\xa0").concat(r)
                }
        },
        88503: e => {
            e.exports = {
                container: "BulletLine_container__6iE_S",
                bullet: "BulletLine_bullet__3fBGE",
                "color-primary": "BulletLine_color-primary__Dq6z_",
                "color-dark": "BulletLine_color-dark__4xa44",
                "color-support-success": "BulletLine_color-support-success__Ynme9"
            }
        },
        98713: e => {
            e.exports = {
                "w-full": "CancellationTimeline_w-full__Or1lS",
                "w-fit": "CancellationTimeline_w-fit__iZUKu",
                "w-5/12": "CancellationTimeline_w-5__12__5xIHt",
                "w-7/12": "CancellationTimeline_w-7__12__VsXYe",
                "h-full": "CancellationTimeline_h-full__jo2tP",
                flex: "CancellationTimeline_flex__MiELX",
                grow: "CancellationTimeline_grow__H4_Z0",
                "flex-1": "CancellationTimeline_flex-1___RQTK",
                "shrink-0": "CancellationTimeline_shrink-0__wwqDS",
                "self-center": "CancellationTimeline_self-center__3sZ0H",
                "self-end": "CancellationTimeline_self-end__XZ9FF",
                "items-center": "CancellationTimeline_items-center__BKu7S",
                "justify-center": "CancellationTimeline_justify-center__QUQDQ",
                "gap-xs": "CancellationTimeline_gap-xs__HiQHM",
                "cursor-pointer": "CancellationTimeline_cursor-pointer__A2wvH",
                "touch-security-zone": "CancellationTimeline_touch-security-zone__Aa4BH",
                "touch-security-zone-always": "CancellationTimeline_touch-security-zone-always__G_Y8_",
                circleAndLineContainer: "CancellationTimeline_circleAndLineContainer__oi2Af",
                line: "CancellationTimeline_line__o787B",
                redLine: "CancellationTimeline_redLine__QfAkE",
                greenLine: "CancellationTimeline_greenLine__6JUxz",
                strikethrough: "CancellationTimeline_strikethrough__WscMh"
            }
        }
    }
]);