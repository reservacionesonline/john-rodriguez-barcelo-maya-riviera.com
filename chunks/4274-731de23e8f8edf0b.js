! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "188cd98c-54b5-49b4-8716-a6ff433f7fcf", e._sentryDebugIdIdentifier = "sentry-dbid-188cd98c-54b5-49b4-8716-a6ff433f7fcf")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4274], {
        1463: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => i
            });
            var o = r(37876),
                a = r(77328),
                n = r.n(a),
                s = r(14232),
                l = r(54704);
            let i = e => {
                let {
                    activeTitleKey: t,
                    inactiveTitleKey: r
                } = e, {
                    trans: a
                } = (0, l.m)(["pages"]), [i, c] = (0, s.useState)(!0);
                return (0, s.useEffect)(() => {
                    let e = () => {
                        c(!document.hidden)
                    };
                    return c(!document.hidden), document.addEventListener("visibilitychange", e), () => {
                        document.removeEventListener("visibilitychange", e)
                    }
                }, [i]), (0, o.jsx)(n(), {
                    children: (0, o.jsx)("title", {
                        children: a(i ? t : r)
                    })
                })
            }
        },
        2134: e => {
            e.exports = {
                divider: "StepDivider_divider__uuzeF"
            }
        },
        6005: e => {
            e.exports = {
                "w-full": "ProgressBar_w-full__FI69d",
                "w-fit": "ProgressBar_w-fit__nbsx_",
                "w-5/12": "ProgressBar_w-5__12__Mhemd",
                "w-7/12": "ProgressBar_w-7__12__oTWup",
                "h-full": "ProgressBar_h-full__XvYBE",
                flex: "ProgressBar_flex__CEUJo",
                grow: "ProgressBar_grow__kBFda",
                "flex-1": "ProgressBar_flex-1__0PhjX",
                "shrink-0": "ProgressBar_shrink-0__ghSg3",
                "self-center": "ProgressBar_self-center__jc_fQ",
                "self-end": "ProgressBar_self-end__uwGxY",
                "items-center": "ProgressBar_items-center__U82MT",
                "justify-center": "ProgressBar_justify-center__VuE_t",
                "gap-xs": "ProgressBar_gap-xs__Yhu4u",
                "cursor-pointer": "ProgressBar_cursor-pointer__F0hzj",
                "touch-security-zone": "ProgressBar_touch-security-zone__pjIJY",
                "touch-security-zone-always": "ProgressBar_touch-security-zone-always__9yVUh",
                progressBar: "ProgressBar_progressBar__PnOq5",
                progress: "ProgressBar_progress___h15t",
                progressComplete: "ProgressBar_progressComplete__4WzHN"
            }
        },
        6379: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => j
            });
            var o = r(37876),
                a = r(77925),
                n = r(36271),
                s = r(54704),
                l = r(35004),
                i = r(68181),
                c = r(68388),
                _ = r(53818),
                u = r(61810),
                d = r(77528),
                m = r(84640),
                p = r(90313),
                g = r.n(p),
                f = r(2159),
                h = r(84703),
                b = r(3155),
                y = r(72668),
                x = r(61442),
                v = r(59566),
                w = r(88523);
            let j = (0, n.mP)(e => {
                let {
                    ratesPolicies: t,
                    currentSelectedRatePolicy: r,
                    reservedRoomPolicyDetails: n
                } = e, {
                    trans: p
                } = (0, s.m)(["new-reservation", "common"]), {
                    queryUtils: j
                } = (0, _.Z)(), C = (0, h.QD)(), S = j.getRawParam("arrive") || "", A = u.g.fromString(S).toDate(), N = C.properties.isRTL;
                return (0, o.jsx)(a.aF, {
                    withButtons: !1,
                    size: "s-m",
                    title: p("new-reservation:rate-policies-modal_title"),
                    "data-testid": "rate-policies-modal",
                    children: (0, y.O9)(t) && (0, y.O9)(r) ? t.map((e, t) => {
                        let n = r.id === e.id,
                            s = e.rate.cancellation,
                            _ = e.rate.guarantee,
                            u = (0, i.d)(_, "before-reservation", p),
                            h = (0, c.m)(s, _, p);
                        return (0, o.jsx)(d.n, {
                            title: p("".concat(u, " | ").concat(h)),
                            isOpenedByDefault: n,
                            className: (0, m.x)(g().accordion, t > 0 ? "mt-m" : "", n ? g().policySelected : ""),
                            customHeaderWithAccordionIcon: ((e, t) => (0, o.jsxs)(l.s, {
                                direction: "column",
                                gap: "xs",
                                children: [t && (0, o.jsx)(a.vw, {
                                    className: g().selectedTag,
                                    children: (0, o.jsx)(a.hf, {
                                        icon: f.A,
                                        fontStyle: "s-500",
                                        text: p("new-reservation:availability_room_rate_your-selection"),
                                        iconSize: "s",
                                        iconColor: "text-light",
                                        fontColor: "light",
                                        gap: "xs",
                                        rotateIcon: 180 * !!N
                                    })
                                }), (0, o.jsx)(b.p, {
                                    guarantee: e.rate.guarantee,
                                    cancellation: e.rate.cancellation,
                                    timeline: "before-reservation",
                                    fontStyle: "m-700"
                                })]
                            }))(e, n),
                            dataTestId: "rate-policy-accordion-".concat(t),
                            children: (0, o.jsxs)(l.s, {
                                direction: "column",
                                gap: "m",
                                children: [(0, o.jsx)(x.Z, {
                                    guarantee: _,
                                    timeline: "before-reservation",
                                    guaranteeTitle: p("common:guarantee_policy_title_policy"),
                                    titleFontStyle: "s-500",
                                    detailsFontStyle: "s-300",
                                    className: g().policy
                                }), (0, o.jsx)(v.Q, {
                                    cancellation: s,
                                    guarantee: _,
                                    timeline: "before-reservation",
                                    checkIn: A,
                                    cancellationTitle: p("common:cancellation_policy_title_policy"),
                                    titleFontStyle: "s-500",
                                    detailsFontStyle: "s-300",
                                    className: g().policy,
                                    hasToShowTimeline: !1
                                })]
                            })
                        }, t)
                    }) : (e => {
                        if ((0, y.b0)(e)) return null;
                        let {
                            guarantee: t,
                            cancellation: r
                        } = e, n = (0, i.d)(t, "before-reservation", p), s = (0, c.m)(r, t, p), _ = "free" === r.cancellationType && 0 === t.deposit.value;
                        return (0, o.jsxs)(l.s, {
                            direction: "column",
                            gap: "xl",
                            children: [(0, o.jsx)(x.Z, {
                                guarantee: t,
                                timeline: "before-reservation",
                                guaranteeTitle: p("common:guarantee_policy_title_policy_with-guarantee-type", {
                                    guaranteeType: n
                                })
                            }), (0, o.jsx)(v.Q, {
                                cancellation: r,
                                guarantee: t,
                                timeline: "before-reservation",
                                checkIn: A,
                                cancellationTitle: (0, o.jsx)(w.H, {
                                    i18nKey: "common:cancellation_policy_title_policy_with-cancellation-type",
                                    values: {
                                        cancellationType: s
                                    },
                                    components: {
                                        highlight: (0, o.jsx)(a.EY, {
                                            fontStyle: "m-700",
                                            color: _ ? "support-success" : "dark"
                                        })
                                    }
                                })
                            })]
                        })
                    })(n)
                })
            })
        },
        7861: e => {
            e.exports = {
                container: "ChildrenAgeSelectors_container__FLbP0"
            }
        },
        8995: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => E
            });
            var o = r(37876),
                a = r(77925),
                n = r(59503),
                s = r.n(n),
                l = r(88992),
                i = r(88523),
                c = r(14232),
                _ = r(72668);
            let u = (e, t, r, o) => {
                let a = null == r ? void 0 : r.map((e, t) => e.reduce((e, r, a) => ({ ...e,
                    ["childrenAge#".concat(o[t], "_").concat(a)]: r
                }), {}));
                return { ...e.reduce((e, t, r) => ({ ...e,
                        ["adults#".concat(o[r])]: t
                    }), {}),
                    ...t.reduce((e, t, r) => ({ ...e,
                        ["children#" + o[r]]: t
                    }), {}),
                    ...a && a.reduce((e, t) => ({ ...e,
                        ...t
                    }), {})
                }
            };
            var d = r(54704),
                m = r(35959),
                p = r(78777),
                g = r.n(p),
                f = r(35004),
                h = r(7861),
                b = r.n(h),
                y = r(37458),
                x = r(25072);
            let v = e => {
                let {
                    totalChildren: t,
                    maxChildAge: r,
                    formId: a,
                    roomUniqueId: n
                } = e, {
                    trans: s
                } = (0, d.m)(["common", "new-reservation"]), {
                    register: i,
                    getValues: c,
                    formState: u
                } = (0, l.xW)(), m = e => {
                    let t = "".concat(a, "#").concat(n, "_").concat(e),
                        r = u.touchedFields[t],
                        o = u.isSubmitted,
                        s = Object.keys(u.errors).length > 0,
                        l = u.errors[t];
                    return (r || o || s) && l
                };
                if (t <= 0) return null;
                let p = Array.from(Array(r + 1).keys()).map(e => ({
                        value: e.toString(),
                        label: e < 1 ? s("children-age-selector_less-than-one_value") : s("children-age-selector_over-one_value", {
                            age: e.toString()
                        })
                    })),
                    g = s("children-age-selector_default-value");
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(x.E, {
                        fontStyle: "m-700",
                        color: "mid",
                        as: "p",
                        className: "mt-l",
                        children: s("new-reservation:occupancy-form_child-age_title")
                    }), (0, o.jsx)("div", {
                        className: b().container,
                        children: [...Array(t)].map((e, l) => {
                            let u = i("".concat(a, "#").concat(n, "_").concat(l), {
                                value: ((e, t, r, o) => {
                                    if (!e) return o;
                                    let a = e[t];
                                    return !a || a > r ? o : a
                                })((() => {
                                    let e = [];
                                    for (let r = 0; r < t; r++) e.push(c()["".concat(a).concat(n).concat(r)]);
                                    return e.filter(e => (0, _.O9)(e))
                                })(), l, r, g),
                                validate: {
                                    isNumber: e => !isNaN(e)
                                }
                            });
                            return (0, o.jsxs)(f.s, {
                                direction: "column",
                                gap: "xxs",
                                children: [(0, o.jsx)("label", {
                                    htmlFor: "".concat(a, "#").concat(n, "_").concat(l),
                                    children: (0, o.jsx)(x.E, {
                                        fontStyle: "s-500",
                                        children: s("new-reservation:occupancy-form_child-age_label", {
                                            age: l + 1
                                        })
                                    })
                                }), (0, o.jsx)(y.F, { ...u,
                                    onChange: e => {
                                        e.stopPropagation(), u.onChange(e)
                                    },
                                    onClick: e => {
                                        e.stopPropagation()
                                    },
                                    placeholder: g,
                                    options: p,
                                    ariaLabel: s("children-age-selector_options_aria-label", {
                                        kidNumber: l + 1
                                    }),
                                    "aria-invalid": !!m(l),
                                    "aria-describedby": m(l) ? "child-age-error-".concat(l) : void 0
                                }), m(l) && (0, o.jsx)(x.E, {
                                    id: "child-age-error-".concat(l),
                                    "aria-live": "assertive",
                                    fontStyle: "s-300",
                                    color: "support-error-dark",
                                    children: s("new-reservation:occupancy-form_child-age-required")
                                })]
                            }, l)
                        })
                    })]
                })
            };
            var w = r(90671),
                j = r(84640),
                C = r(34155),
                S = r(62740),
                A = r(24463),
                N = r(77528);
            let P = e => {
                var t;
                let {
                    maxGuests: r,
                    maxChildren: n,
                    maxAdults: s,
                    maxChildAge: i,
                    showChildren: u,
                    roomIndex: m,
                    roomUniqueId: p,
                    numberOfUniqueIds: h,
                    expandedRoomId: b,
                    onDeleteRoom: y,
                    onOpenRoom: x
                } = e, {
                    setValue: P,
                    getValues: k,
                    watch: O,
                    unregister: E
                } = (0, l.xW)(), [R, T] = (0, c.useState)(!1), [B, M] = (0, c.useState)(!1), F = (0, c.useRef)(null), D = (0, c.useRef)(null), I = (0, c.useRef)(null);
                (0, c.useLayoutEffect)(() => {
                    var e;
                    let t = p === b;
                    T(t), t && (null == (e = F.current) ? void 0 : e.scrollIntoView) && F.current.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    })
                }, [p, b]);
                let {
                    trans: z
                } = (0, d.m)(["new-reservation"]), L = O("adults#".concat(p)), Y = O("children#".concat(p)), G = L + Y >= r, H = L >= s, V = Y >= n, W = L <= 1, U = Y <= 0;
                return (0, c.useEffect)(() => {
                    M(G), H && D.current && (D.current.tabIndex = -1, D.current.focus())
                }, [G]), (0, o.jsx)("div", {
                    className: (0, j.x)(g().container, !R && g().collapsedContainer),
                    ref: F,
                    onClick: e => {
                        e.preventDefault(), R ? x("") : x(p)
                    },
                    children: (0, o.jsx)(N.n, {
                        title: z("occupancy-form_room_title", {
                            roomNumber: m + 1
                        }),
                        isOpenedByDefault: b === p,
                        className: m !== h - 1 ? "mb-m" : "",
                        customHeaderWithAccordionIcon: (0, o.jsxs)(f.s, {
                            direction: "column",
                            gap: "xs",
                            children: [(0, o.jsx)(a.EY, {
                                fontStyle: "m-700",
                                color: "mid",
                                as: "p",
                                children: z("occupancy-form_room_title", {
                                    roomNumber: m + 1
                                })
                            }), b !== p && (0, o.jsx)(a.EY, {
                                fontStyle: "s-300",
                                color: "mid",
                                as: "p",
                                children: (0, w.t)({
                                    adultsList: [L],
                                    childrenList: [Y],
                                    trans: z,
                                    showRooms: !1,
                                    childrenAges: null == (t = Array.from({
                                        length: Y
                                    }).map((e, t) => k()["childrenAge#".concat(p, "_").concat(t)]).filter(e => (0, _.O9)(e))) ? void 0 : t.toString().replaceAll(",", ", ")
                                })
                            })]
                        }),
                        children: (0, o.jsxs)(o.Fragment, {
                            children: [R && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(A.M, {
                                    type: "neutral",
                                    text: z("occupancy-form_max-ocupancy_message", {
                                        maxGuests: r
                                    }),
                                    className: "mt-m mb-l"
                                }), B && (0, o.jsx)("div", {
                                    className: "visually-hidden",
                                    role: "alert",
                                    ref: D,
                                    children: z("occupancy-form_max-ocupancy_message", {
                                        maxGuests: r
                                    })
                                })]
                            }), R && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsxs)("div", {
                                    className: (0, j.x)(g().guestItem, "mb-m"),
                                    children: [(0, o.jsxs)(f.s, {
                                        direction: "column",
                                        children: [(0, o.jsx)(a.EY, {
                                            fontStyle: "m-700",
                                            children: z("occupancy-form_adults_title")
                                        }), u && (0, o.jsx)(a.EY, {
                                            fontStyle: "s-300",
                                            color: "mid",
                                            children: z("occupancy-form_adults_info", {
                                                maxChildAge: i + 1
                                            })
                                        })]
                                    }), (0, o.jsx)(S.p, {
                                        labelPrefix: z("guest-form_labelPrefix-adults"),
                                        counter: L,
                                        isMinusDisabled: W,
                                        isPlusDisabled: H || G,
                                        onMinusClick: e => {
                                            null == e || e.stopPropagation(), P("adults#".concat(p), k("adults#".concat(p)) - 1)
                                        },
                                        onPlusClick: e => {
                                            null == e || e.stopPropagation(), P("adults#".concat(p), k("adults#".concat(p)) + 1)
                                        }
                                    })]
                                }), H && (0, o.jsx)(A.M, {
                                    type: "info",
                                    text: z("occupancy-form_max-ocupancy-adults_message"),
                                    className: "mt-m mb-l"
                                }), u && (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsxs)("div", {
                                        className: g().guestItem,
                                        children: [(0, o.jsxs)(f.s, {
                                            direction: "column",
                                            children: [(0, o.jsx)(a.EY, {
                                                fontStyle: "m-700",
                                                children: z("occupancy-form_children_title")
                                            }), (0, o.jsx)(a.EY, {
                                                fontStyle: "s-300",
                                                color: "mid",
                                                children: z("occupancy-form_children_info", {
                                                    maxChildAge: i
                                                })
                                            })]
                                        }), (0, o.jsx)(S.p, {
                                            labelPrefix: z("guest-form_labelPrefix-children"),
                                            counter: Y,
                                            isMinusDisabled: U,
                                            isPlusDisabled: V || G,
                                            onMinusClick: e => {
                                                null == e || e.stopPropagation(), P("children#".concat(p), k("children#".concat(p)) - 1), E("childrenAge#".concat(p, "_").concat(k("children#".concat(p))))
                                            },
                                            onPlusClick: e => {
                                                null == e || e.stopPropagation(), P("children#".concat(p), k("children#".concat(p)) + 1)
                                            }
                                        })]
                                    }), V && (0, o.jsx)(A.M, {
                                        type: "info",
                                        text: z("occupancy-form_max-ocupancy-children_message"),
                                        className: "mt-m mb-l"
                                    }), (0, o.jsx)(v, {
                                        totalChildren: Y,
                                        maxChildAge: i,
                                        formId: "childrenAge",
                                        roomUniqueId: p
                                    })]
                                }), R && h > 1 && (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(a.cG, {
                                        dir: "horizontal",
                                        className: "mb-m mt-m"
                                    }), (0, o.jsx)(f.s, {
                                        justifyContent: "flex-end",
                                        children: (0, o.jsx)(C.v, {
                                            ref: I,
                                            onClick: e => {
                                                if (e.preventDefault(), 1 === h) return !1;
                                                y(p)
                                            },
                                            "data-testid": "delete-room-".concat(m),
                                            children: z("occupancy-form_room_delete")
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            };
            var k = r(36271),
                O = r(38251);
            let E = (0, k.mP)(e => {
                let {
                    childrenList: t,
                    adultsList: r,
                    childrenAges: n,
                    onClose: p,
                    hotel: g,
                    onSubmit: h
                } = e, {
                    trans: b
                } = (0, d.m)(["new-reservation"]), {
                    callCenterCountryCode: y,
                    callCenterPhone: x,
                    callCenterFreePhone: v
                } = (0, m.p)(), {
                    methods: w,
                    expandedRoomId: C,
                    uniqueIds: A,
                    canRemoveMoreRooms: N,
                    canAddMoreRooms: k,
                    hasErrors: E,
                    handleAddRoom: R,
                    handleDeleteRoom: T,
                    handleOpenRoom: B,
                    validateFields: M
                } = (e => {
                    let {
                        adultsList: t,
                        childrenList: r,
                        childrenAges: o
                    } = e, a = t.length, [n, s] = (0, c.useState)(() => Array.from({
                        length: a
                    }, () => (0, _.NF)())), [i, d] = (0, c.useState)(n[0]), m = (0, l.mN)({
                        mode: "onChange",
                        defaultValues: u(t, r, o, n)
                    }), p = () => JSON.stringify({
                        adults: t,
                        children: r,
                        childrenAges: o || [
                            []
                        ]
                    }) === JSON.stringify(g()), g = () => {
                        let {
                            adults: e,
                            children: t,
                            childrenAges: r
                        } = ((e, t) => {
                            let r = Object.keys(e).filter(e => t.includes(e.substring(e.indexOf("#") + 1, -1 !== e.lastIndexOf("_") ? e.lastIndexOf("_") : e.length))),
                                o = (0, _.Up)(e, r);
                            return {
                                adults: Object.keys(o).filter(e => e.includes("adults#")).map(t => e[t]),
                                children: Object.keys(o).filter(e => e.includes("children#")).map(t => e[t]),
                                childrenAges: t.map(t => Object.keys(e).filter(e => e.includes("childrenAge#".concat(t, "_"))).map(t => e[t]))
                            }
                        })(m.getValues(), n);
                        return {
                            adults: e,
                            children: t,
                            childrenAges: r
                        }
                    }, f = async () => {
                        if (!await m.trigger()) return;
                        let e = (0, _.NF)();
                        m.setValue("adults#".concat(e), 2), m.setValue("children#".concat(e), 0), b([...n, e]), d(e)
                    }, h = async e => {
                        await m.trigger() && d(e)
                    }, b = e => {
                        s(e), e.includes(i) || d("")
                    };
                    return {
                        methods: m,
                        uniqueIds: n,
                        expandedRoomId: i,
                        canRemoveMoreRooms: n.length > 1,
                        canAddMoreRooms: 10 !== n.length,
                        roomsNumber: n.length,
                        hasErrors: Object.keys(m.formState.errors).length > 0,
                        validateFields: (e, t) => {
                            m.handleSubmit(() => {
                                null == t || t();
                                let r = g();
                                p() || e(r)
                            })()
                        },
                        resetForm: () => {
                            m.reset(u(t, r, o, n))
                        },
                        areValuesSameAsOld: p,
                        getAllValues: g,
                        setExpandedRoomId: d,
                        handleAddRoom: f,
                        handleDeleteRoom: e => {
                            for (let t = 0; t < m.getValues("children#".concat(e)); t++) m.unregister("childrenAge#".concat(e, "_").concat(t));
                            b(n.filter(t => t !== e))
                        },
                        handleOpenRoom: h
                    }
                })({
                    adultsList: r,
                    childrenList: t,
                    childrenAges: n
                }), {
                    isAvailableRoomsStep: F
                } = (0, O.l)(), D = () => {
                    M(h, p)
                };
                return (0, o.jsx)(a.Y9, {
                    onClose: p,
                    "data-quantum-modal": "OccupancyModal",
                    title: b("occupancy-form_title"),
                    scrollable: !0,
                    primaryButtonLabel: b("occupancy-form_accept"),
                    onPrimaryButtonClick: D,
                    children: (0, o.jsxs)("div", {
                        className: s().container,
                        children: [!F && (0, o.jsx)(a.Fc, {
                            type: "info",
                            description: b("occupancy-form_alert-return-step-1"),
                            className: "mb-l"
                        }), (0, o.jsxs)(f.s, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            className: (0, j.x)(s().roomsCounterContainer, "w-full mb-m"),
                            children: [(0, o.jsx)(a.EY, {
                                fontStyle: "m-700",
                                children: b("occupancy-modal_rooms-counter_title")
                            }), (0, o.jsx)(S.p, {
                                counter: A.length,
                                labelPrefix: b("occupancy-modal_labelPrefix-rooms"),
                                isMinusDisabled: !N,
                                isPlusDisabled: !k,
                                onMinusClick: () => {
                                    T(A[A.length - 1])
                                },
                                onPlusClick: () => {
                                    R()
                                }
                            })]
                        }), (0, o.jsx)(l.Op, { ...w,
                            children: (0, o.jsx)("form", {
                                onSubmit: D,
                                noValidate: !0,
                                className: s().form,
                                children: (0, o.jsxs)("div", {
                                    children: [A.map((e, t) => (0, o.jsx)("div", {
                                        children: (0, o.jsx)(P, {
                                            maxGuests: g.guestOptions.maxGuests,
                                            maxChildren: g.guestOptions.maxChildren,
                                            maxAdults: g.guestOptions.maxAdults,
                                            maxChildAge: g.guestOptions.maxChildAge,
                                            showChildren: !g.isAdultsOnly,
                                            roomIndex: t,
                                            roomUniqueId: e,
                                            numberOfUniqueIds: A.length,
                                            expandedRoomId: C,
                                            hasErrors: E,
                                            onDeleteRoom: T,
                                            onOpenRoom: B
                                        })
                                    }, e)), !k && (0, o.jsx)(i.H, {
                                        i18nKey: "new-reservation:occupancy-form_guests_add-room_max-rooms",
                                        values: {
                                            phone: "".concat(x).concat(v)
                                        },
                                        components: {
                                            regular: (0, o.jsx)(a.EY, {
                                                className: "mt-xl mb-l",
                                                as: "p",
                                                fontStyle: "m-300",
                                                color: "mid"
                                            }),
                                            bold: (0, o.jsx)(a.EY, {
                                                "data-data-phone": y,
                                                fontStyle: "link",
                                                color: "mid"
                                            })
                                        }
                                    })]
                                })
                            })
                        })]
                    })
                })
            })
        },
        9061: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => y
            });
            var o = r(37876),
                a = r(99493),
                n = r.n(a),
                s = r(35004),
                l = r(77925),
                i = r(33045),
                c = r(54704),
                _ = r(53818),
                u = r(4583),
                d = r(75918),
                m = r(6005),
                p = r.n(m),
                g = r(84640);
            let f = e => {
                let {
                    currentStep: t
                } = e;
                return (0, o.jsx)("div", {
                    className: p().progressBar,
                    children: (0, o.jsx)("div", {
                        className: (0, g.x)(p().progress, 3 === t && p().progressComplete),
                        style: {
                            width: "".concat(t / 3 * 100, "%")
                        }
                    })
                })
            };
            var h = r(38251),
                b = r(84703);
            let y = e => {
                let {
                    currentStep: t
                } = e, {
                    trans: r
                } = (0, c.m)(["new-reservation"]), {
                    cart: a
                } = (0, d._$)(), {
                    navigate: m,
                    query: p
                } = (0, _.Z)(), g = (0, b.QD)().properties.isRTL, {
                    isAvailableRoomsStep: y,
                    isPersonalDataStep: x,
                    isPaymentStep: v
                } = (0, h.l)(), w = !y, j = async () => {
                    x && await m.toAvailability({
                        query: { ...p,
                            ...(0, u.V)(a)
                        },
                        parametersToRemove: ["drawer"]
                    }), v && await m.toPersonalData({
                        parametersToRemove: ["coupon", "drawer"]
                    })
                };
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(s.s, {
                        alignItems: "center",
                        justifyContent: w ? "space-between" : "flex-end",
                        className: n().container,
                        children: [w && (0, o.jsx)("button", {
                            className: "touch-security-zone-always",
                            onClick: j,
                            children: (0, o.jsx)(l.hf, {
                                className: "cursor-pointer",
                                icon: i.A,
                                iconSize: "s",
                                iconColor: "button-secondary-enabled",
                                text: r("booking-stepper_mobile_back"),
                                fontStyle: "s-500",
                                fontColor: "primary",
                                gap: "xxs",
                                rotateIcon: 180 * !!g
                            })
                        }), (0, o.jsx)(l.EY, {
                            fontStyle: "s-300",
                            color: "mid",
                            children: r("booking-stepper_mobile_info", {
                                step: t
                            })
                        })]
                    }), (0, o.jsx)(f, {
                        currentStep: t
                    })]
                })
            }
        },
        27165: e => {
            e.exports = {
                name: "Name_name__mpX_5",
                visited: "Name_visited__rBQgW",
                current: "Name_current__d5Lnh"
            }
        },
        33136: e => {
            e.exports = {
                wrapper: "Step_wrapper__cWCyH",
                disabled: "Step_disabled__sZt98",
                circle: "Step_circle__MPtuF",
                current: "Step_current__Q871q",
                visited: "Step_visited__fJXbT"
            }
        },
        34411: e => {
            e.exports = {
                container: "BookingStepper_container__KAosi"
            }
        },
        41867: e => {
            e.exports = {
                "w-full": "CampaignRibbon_w-full____Mj2",
                "w-fit": "CampaignRibbon_w-fit__0a9XX",
                "w-5/12": "CampaignRibbon_w-5__12___eqQy",
                "w-7/12": "CampaignRibbon_w-7__12__nWxE0",
                "h-full": "CampaignRibbon_h-full__Ksr3D",
                flex: "CampaignRibbon_flex___Qzg_",
                grow: "CampaignRibbon_grow__CFXVB",
                "flex-1": "CampaignRibbon_flex-1__mFFDm",
                "shrink-0": "CampaignRibbon_shrink-0__ChZNr",
                "self-center": "CampaignRibbon_self-center__PW4KP",
                "self-end": "CampaignRibbon_self-end__9zfFz",
                "items-center": "CampaignRibbon_items-center__CCO7l",
                "justify-center": "CampaignRibbon_justify-center__scohJ",
                "gap-xs": "CampaignRibbon_gap-xs__yfRoH",
                "cursor-pointer": "CampaignRibbon_cursor-pointer__W_qZw",
                "touch-security-zone": "CampaignRibbon_touch-security-zone__BnqIp",
                "touch-security-zone-always": "CampaignRibbon_touch-security-zone-always__TE6cY",
                container: "CampaignRibbon_container__6aC6x",
                mainRibbonWrapper: "CampaignRibbon_mainRibbonWrapper__0O2Sm",
                onlyMainRibbon: "CampaignRibbon_onlyMainRibbon__77wKe",
                couponRibbonWrapper: "CampaignRibbon_couponRibbonWrapper__Q7HMG",
                onlyCouponRibbon: "CampaignRibbon_onlyCouponRibbon__hg2v9",
                ribbonText: "CampaignRibbon_ribbonText__FR_LJ",
                highlightedText: "CampaignRibbon_highlightedText__s1Uqd",
                link: "CampaignRibbon_link__x79gB"
            }
        },
        43489: (e, t, r) => {
            "use strict";
            r.d(t, {
                L: () => g
            });
            var o = r(37876),
                a = r(45607),
                n = r.n(a),
                s = r(33045),
                l = r(77925),
                i = r(53818),
                c = r(72668),
                _ = r(54704),
                u = r(75918),
                d = r(4583),
                m = r(35004),
                p = r(38251);
            let g = e => {
                let {
                    className: t,
                    currentStep: r,
                    hasToShowMemberRatesTag: a
                } = e, {
                    trans: g
                } = (0, _.m)(["new-reservation", "common"]), {
                    cart: f
                } = (0, u._$)(), {
                    isAvailableRoomsStep: h,
                    isPersonalDataStep: b,
                    isPaymentStep: y
                } = (0, p.l)(), {
                    navigate: x,
                    back: v,
                    query: w
                } = (0, i.Z)(), j = async () => {
                    (0, c.b0)(r) && v(), b && await x.toAvailability({
                        query: { ...w,
                            ...(0, d.V)(f)
                        },
                        parametersToRemove: ["drawer"]
                    }), y && await x.toPersonalData({
                        parametersToRemove: ["coupon", "drawer"]
                    })
                }, C = (0, c.O9)(r);
                return (0, o.jsxs)("div", {
                    className: t,
                    children: [!h && (0, o.jsxs)(m.s, {
                        gap: "s",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        children: [(0, o.jsx)("button", {
                            className: n().backWrapper,
                            onClick: j,
                            children: (0, o.jsx)(l.hf, {
                                className: n().back,
                                icon: s.H,
                                iconSize: "s",
                                iconColor: "button-secondary-enabled",
                                text: g("booking-stepper_mobile_back"),
                                fontStyle: "s-500",
                                fontColor: "primary",
                                gap: "xs"
                            })
                        }), a && (0, o.jsx)(l.vw, {
                            className: n().bestPriceTag,
                            "data-testid": "best-price-tag",
                            children: (0, o.jsx)(l.EY, {
                                color: "light",
                                fontStyle: "xs-700",
                                children: g("common:fastbooking_best-price-guaranteed")
                            })
                        })]
                    }), C && (0, o.jsx)(l.EY, {
                        fontStyle: "s-500",
                        color: "mid",
                        children: g("booking-stepper_mobile_info", {
                            step: r
                        })
                    })]
                })
            }
        },
        45607: e => {
            e.exports = {
                backWrapper: "BookingStepperMobile_backWrapper__c89IX",
                back: "BookingStepperMobile_back__v4gCE",
                bestPriceTag: "BookingStepperMobile_bestPriceTag__KoLjz"
            }
        },
        57757: e => {
            e.exports = {
                "w-full": "AcceleratorTag_w-full__XAPLu",
                "w-fit": "AcceleratorTag_w-fit__fk3rX",
                "w-5/12": "AcceleratorTag_w-5__12__wo_42",
                "w-7/12": "AcceleratorTag_w-7__12__OL7JJ",
                "h-full": "AcceleratorTag_h-full__4NDnJ",
                flex: "AcceleratorTag_flex__AtSgV",
                grow: "AcceleratorTag_grow__tcBY3",
                "flex-1": "AcceleratorTag_flex-1__YeEoi",
                "shrink-0": "AcceleratorTag_shrink-0__BN_AV",
                "self-center": "AcceleratorTag_self-center__5lmnH",
                "self-end": "AcceleratorTag_self-end__Ds0ft",
                "items-center": "AcceleratorTag_items-center__0_wIU",
                "justify-center": "AcceleratorTag_justify-center__YtUz_",
                "gap-xs": "AcceleratorTag_gap-xs__zFYK2",
                "cursor-pointer": "AcceleratorTag_cursor-pointer__XUZd_",
                "touch-security-zone": "AcceleratorTag_touch-security-zone__WkXBB",
                "touch-security-zone-always": "AcceleratorTag_touch-security-zone-always__BNQN8",
                container: "AcceleratorTag_container__GVhKA",
                viewingNow: "AcceleratorTag_viewingNow__ULoG6"
            }
        },
        59503: e => {
            e.exports = {
                "w-full": "OccupancyModal_w-full__m8oNn",
                "w-fit": "OccupancyModal_w-fit__eH_yG",
                "w-5/12": "OccupancyModal_w-5__12__gnV8u",
                "w-7/12": "OccupancyModal_w-7__12__Mz_Ro",
                "h-full": "OccupancyModal_h-full__9wiSE",
                flex: "OccupancyModal_flex___w6XA",
                grow: "OccupancyModal_grow__8B3q0",
                "flex-1": "OccupancyModal_flex-1__quArb",
                "shrink-0": "OccupancyModal_shrink-0__ITcKh",
                "self-center": "OccupancyModal_self-center__raoR0",
                "self-end": "OccupancyModal_self-end__LYKRc",
                "items-center": "OccupancyModal_items-center__Xeg8z",
                "justify-center": "OccupancyModal_justify-center__UgUoG",
                "gap-xs": "OccupancyModal_gap-xs__4pcJC",
                "cursor-pointer": "OccupancyModal_cursor-pointer__IhrtH",
                "touch-security-zone": "OccupancyModal_touch-security-zone__QEX1A",
                "touch-security-zone-always": "OccupancyModal_touch-security-zone-always__pe2eG",
                container: "OccupancyModal_container__rUSMR",
                form: "OccupancyModal_form__SOA7g",
                roomsCounterContainer: "OccupancyModal_roomsCounterContainer__lF98H"
            }
        },
        62797: (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => u
            });
            var o = r(37876),
                a = r(57757),
                n = r.n(a),
                s = r(77925),
                l = r(43239);
            let i = e => {
                let {
                    color: t
                } = e;
                return (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.9997 3.50488C7.30527 3.50488 3.49969 7.31046 3.49969 12.0049C3.49969 16.6993 7.30527 20.5049 11.9997 20.5049C16.6941 20.5049 20.4997 16.6993 20.4997 12.0049C20.4997 7.31046 16.6941 3.50488 11.9997 3.50488ZM2.49969 12.0049C2.49969 6.75818 6.75299 2.50488 11.9997 2.50488C17.2464 2.50488 21.4997 6.75818 21.4997 12.0049C21.4997 17.2516 17.2464 21.5049 11.9997 21.5049C6.75299 21.5049 2.49969 17.2516 2.49969 12.0049ZM11.9997 8.29053C12.2758 8.29053 12.4997 8.51438 12.4997 8.79053V11.7978L16.3707 15.6697C16.566 15.8649 16.5659 16.1815 16.3706 16.3768C16.1754 16.572 15.8588 16.572 15.6635 16.3767L11.6461 12.3584C11.5905 12.3028 11.5508 12.2374 11.5268 12.1677C11.5119 12.1244 11.5028 12.0783 11.5003 12.0305C11.4999 12.022 11.4997 12.0134 11.4997 12.0048C11.4997 12.0047 11.4997 12.0046 11.4997 12.0045V8.79053C11.4997 8.51438 11.7236 8.29053 11.9997 8.29053Z",
                    fill: t
                })
            };
            var c = r(84640),
                _ = r(54704);
            let u = e => {
                let {
                    className: t,
                    variant: r,
                    quantity: a
                } = e, {
                    trans: u
                } = (0, _.m)(["new-reservation"]);
                return "none" === r ? null : (0, o.jsxs)("div", {
                    className: (0, c.x)(n().container, n()[r], t),
                    children: [(0, o.jsx)(l.I, {
                        icon: i,
                        size: "s",
                        color: "viewingNow" === r ? "icon-dark" : "support-error",
                        ariaLabel: u("available-rooms_accelerator_icon_label")
                    }), (0, o.jsx)(s.EY, {
                        fontStyle: {
                            mobile: "xs-500",
                            laptop: "s-500"
                        },
                        className: n()[r],
                        children: "lastRoom" === r ? u("available-rooms_accelerator_last-room") : "fewRooms" === r ? u("available-rooms_accelerator_few-rooms", {
                            rooms: a
                        }) : u("available-rooms_accelerator_viewing-now", {
                            viewers: a
                        })
                    })]
                })
            }
        },
        65946: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => c
            });
            var o = r(37876),
                a = r(12585),
                n = r(77925),
                s = r(35004),
                l = r(72668),
                i = r(88523);
            let c = e => {
                let {
                    grossPrice: t,
                    netPrice: r,
                    ariaLabel: c,
                    priceLabel: _,
                    customLabel: u,
                    strikeTextSize: d = "s",
                    round: m,
                    "data-testid": p
                } = e, g = (0, l.O9)(_) && !(0, l.Im)(_);
                return (0, o.jsx)(s.s, {
                    direction: "row",
                    alignItems: "baseline",
                    "data-testid": p,
                    children: g ? (0, o.jsx)(n.EY, {
                        fontStyle: (0, l.O9)(u) ? "s-500" : "xs-300",
                        color: "support-error-dark",
                        children: (0, l.O9)(u) ? (0, o.jsx)(i.H, {
                            i18nKey: u,
                            components: {
                                price: (0, o.jsx)(a.g, {
                                    fontStyle: "s",
                                    fontWeight: "mid",
                                    color: "support-error-dark",
                                    strikethrough: !0,
                                    grossPrice: t,
                                    netPrice: r,
                                    round: m,
                                    ariaLabel: c
                                })
                            }
                        }) : (0, o.jsx)(i.H, {
                            i18nKey: "new-reservation:available-rooms_average-per-night_strikethrough_".concat(_),
                            components: {
                                price: (0, o.jsx)(a.g, {
                                    fontStyle: "xs",
                                    fontWeight: "regular",
                                    color: "support-error-dark",
                                    strikethrough: !0,
                                    grossPrice: t,
                                    netPrice: r,
                                    round: m,
                                    ariaLabel: c
                                })
                            }
                        })
                    }) : (0, o.jsx)(a.g, {
                        fontStyle: d,
                        fontWeight: "regular",
                        color: "support-error-dark",
                        strikethrough: !0,
                        grossPrice: t,
                        netPrice: r,
                        round: m,
                        ariaLabel: c
                    })
                })
            }
        },
        66920: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => x
            });
            var o = r(37876),
                a = r(14232),
                n = r(41867),
                s = r.n(n),
                l = r(77925),
                i = r(88523),
                c = r(38282),
                _ = r(84640),
                u = r(54737),
                d = r(36271),
                m = r(53818),
                p = r(72668),
                g = r(54704),
                f = r(51969),
                h = r(32237),
                b = r(83151);
            let y = (0, d.mP)(e => {
                    let {
                        campaign: t,
                        onClose: r,
                        onCouponApply: a,
                        hasToShowButtons: n
                    } = e, {
                        trans: s
                    } = (0, g.m)(["new-reservation"]), i = s("coupon-ribbon-modal_title", {
                        campaignCoupon: t.coupon
                    }), c = s("coupon-ribbon-modal_subtitle", {
                        valueRate: t.discountPercentage
                    }), _ = b.D.formatDateToLocale(t.travelStart, "short"), u = b.D.formatDateToLocale(t.travelEnd, "short"), d = s("coupon-ribbon-modal_content-body", {
                        startDate: b.D.formatDateToLocale(t.availabilityStart, "short"),
                        endDate: b.D.formatDateToLocale(t.availabilityEnd, "short")
                    }), m = s("coupon-ribbon-modal_content-body", {
                        startDate: _,
                        endDate: u
                    });
                    return (0, o.jsxs)(l.aF, {
                        size: "s-m",
                        onClose: r,
                        mobileStyle: "centered",
                        title: i,
                        subtitle: c,
                        withButtons: n,
                        primaryButtonLabel: s("coupon-ribbon-modal_button"),
                        onPrimaryButtonClick: a,
                        children: [(0, o.jsx)(l.EY, {
                            fontStyle: "ml-700",
                            as: "p",
                            className: "mb-xs",
                            children: s("coupon-ribbon-modal_content-first-title")
                        }), (0, o.jsx)(l.EY, {
                            fontStyle: "m-300",
                            as: "p",
                            className: "mb-xl",
                            children: d
                        }), (0, o.jsx)(l.EY, {
                            fontStyle: "ml-700",
                            as: "p",
                            className: "mb-xs",
                            children: s("coupon-ribbon-modal_content-second-title")
                        }), (0, o.jsx)(l.EY, {
                            fontStyle: "m-300",
                            as: "p",
                            children: m
                        })]
                    })
                }),
                x = e => {
                    var t, r, n, b;
                    let {
                        mainCampaign: x,
                        isVisible: v,
                        variant: w = "default",
                        couponMessageKey: j,
                        onApplyCoupon: C
                    } = e, {
                        isMobileOrTablet: S
                    } = (0, c.Q)(), {
                        queryUtils: A
                    } = (0, m.Z)(), N = A.getCouponParam(), {
                        trans: P
                    } = (0, g.m)(["new-reservation"]), {
                        couponValidationResult: k,
                        availabilityCoupon: O
                    } = (0, f.hD)(), [E, R] = (0, a.useState)(void 0), {
                        showModal: T,
                        hideModal: B
                    } = (0, d.hS)(y);
                    if ((0, a.useEffect)(() => {
                            k && x.coupon === N && R(k)
                        }, [k, x.coupon, N]), !v) return null;
                    let M = x.coupon && (0, p.O9)(x.discountPercentage),
                        F = !!(x.coupon === N && (null == E ? void 0 : E.type) === h.OM.VALID && (null == O ? void 0 : O.applies)),
                        D = async () => {
                            await T({
                                onClose: B,
                                onCouponApply: async () => {
                                    C && await C(), B()
                                },
                                campaign: x,
                                hasToShowButtons: !F
                            })
                        };
                    return (0, o.jsxs)("div", {
                        role: "alert",
                        className: s().container,
                        children: [!F && "onlyCoupon" !== w && (0, o.jsx)(u.f, {
                            className: (0, _.x)(s().mainRibbonWrapper, !M && s().onlyMainRibbon),
                            children: (0, o.jsx)(l.EY, {
                                fontStyle: "s-500",
                                className: s().ribbonText,
                                children: P("new-reservation:header_campaign-ribbon_applied_message_v2", {
                                    campaign: null != (n = null == (t = x.title) ? void 0 : t.toUpperCase()) ? n : P("available-rooms_campaign-banner_active-fallback")
                                })
                            })
                        }), M && (0, o.jsx)(u.f, {
                            className: (0, _.x)(s().couponRibbonWrapper, (F || "onlyCoupon" === w) && s().onlyCouponRibbon),
                            children: (0, o.jsx)(l.EY, {
                                fontStyle: "s-500",
                                color: "light",
                                className: s().ribbonText,
                                children: (0, o.jsx)(i.H, {
                                    i18nKey: null != j ? j : F ? "new-reservation:header_promotional-campaign-ribon_applied_message_v2" : S ? "new-reservation:header_promotional-campaign-ribon_message_v3_mobile" : "new-reservation:header_promotional-campaign-ribon_message_v3",
                                    values: {
                                        value: x.discountPercentage,
                                        code: x.coupon,
                                        campaign: null != (b = null == (r = x.title) ? void 0 : r.toUpperCase()) ? b : P("available-rooms_campaign-banner_active-fallback")
                                    },
                                    components: {
                                        regular: (0, o.jsx)(l.EY, {
                                            fontStyle: "s-500",
                                            color: "light"
                                        }),
                                        highlight: (0, o.jsx)(l.EY, {
                                            fontStyle: "s-500",
                                            color: "light",
                                            className: s().highlightedText
                                        }),
                                        underline: (0, o.jsx)("span", {
                                            role: "button",
                                            tabIndex: 0,
                                            onClick: D,
                                            onKeyDown: e => {
                                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), D())
                                            },
                                            "data-testid": "open-coupon-modal",
                                            className: s().link,
                                            "aria-label": P("new-reservation:header_promotional-campaign-ribon_message_label", {
                                                coupon: x.coupon
                                            }),
                                            children: (0, o.jsx)(l.EY, {
                                                fontStyle: "s-500",
                                                color: "light"
                                            })
                                        })
                                    }
                                })
                            })
                        })]
                    })
                }
        },
        75110: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => a
            });
            var o = r(72668);
            let a = (e, t, r) => {
                if (1 === t) return {
                    variant: "lastRoom",
                    quantity: t
                };
                if (t > 1 && t <= 3) return {
                    variant: "fewRooms",
                    quantity: t
                };
                if (t > 3 && (0, o.O9)(r)) {
                    let t = r.find(t => t.roomTypeId === e);
                    if ((0, o.O9)(t) && t.count > 0) return {
                        variant: "viewingNow",
                        quantity: t.count
                    }
                }
                return {
                    variant: "none",
                    quantity: t
                }
            }
        },
        75877: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => R
            });
            var o = r(37876),
                a = r(14232),
                n = r(82802),
                s = r(65381),
                l = r(34411),
                i = r.n(l),
                c = r(54704),
                _ = r(33136),
                u = r.n(_),
                d = r(84640),
                m = r(43239),
                p = r(25072),
                g = r(2159);
            let f = e => {
                let {
                    visited: t,
                    isCurrent: r,
                    completed: a,
                    step: n,
                    disabled: s = !1
                } = e, l = r ? "light" : s ? "disabled" : t ? "secondary" : "dark", i = !a || r || t ? "icon-light" : "icon-dark";
                return (0, o.jsx)("div", {
                    "aria-hidden": !0,
                    className: (0, d.x)(u().circle, r && u().current, t && u().visited, s && u().disabled),
                    children: a ? (0, o.jsx)(m.I, {
                        size: "s",
                        color: i,
                        icon: g.S
                    }) : (0, o.jsx)(p.E, {
                        fontStyle: {
                            mobile: "s-500",
                            laptop: "m-500"
                        },
                        color: l,
                        children: n
                    })
                })
            };
            var h = r(27165),
                b = r.n(h);
            let y = e => {
                    let {
                        label: t,
                        className: r,
                        disabled: a,
                        isCurrent: n,
                        visited: s
                    } = e;
                    return (0, o.jsx)("span", {
                        "aria-hidden": !0,
                        className: (0, d.x)(b().name, r, n && b().current, s && b().visited),
                        style: {
                            color: "var(".concat(n ? "--b-color-text-dark" : a ? "--b-color-text-mid" : s ? "--b-color-stepper-enabled" : "--b-color-text-dark", ")")
                        },
                        "data-content": t,
                        children: t
                    })
                },
                x = e => {
                    let {
                        visited: t,
                        isCurrent: r,
                        completed: a,
                        disabled: n,
                        label: s,
                        stepId: l,
                        navigateToStep: i,
                        "data-testid": _
                    } = e, {
                        trans: m
                    } = (0, c.m)(["common"]);
                    return (0, o.jsxs)("button", {
                        type: "button",
                        className: n ? (0, d.x)(u().wrapper, u().disabled) : (0, d.x)(u().wrapper),
                        "data-testid": _,
                        onClick: () => i(l),
                        "aria-label": m("booking-stepper_step-label", {
                            step: l,
                            label: s
                        }),
                        "aria-current": r ? "step" : void 0,
                        children: [(0, o.jsx)(f, {
                            step: l,
                            visited: t,
                            isCurrent: r,
                            completed: a,
                            disabled: n
                        }), (0, o.jsx)(y, {
                            disabled: n,
                            visited: t,
                            isCurrent: r,
                            label: s
                        })]
                    })
                };
            var v = r(2134),
                w = r.n(v);
            let j = e => {
                    let {
                        disabled: t,
                        visited: r,
                        canNavigateToNextStep: a
                    } = e;
                    return (0, o.jsx)("div", {
                        className: w().divider,
                        style: {
                            backgroundColor: "var(".concat(r ? "--b-color-stepper-enabled" : a ? "--b-color-interactive-primary-enabled" : t ? "--b-color-interactive-primary-disabled" : "--b-color-text-dark", ")")
                        }
                    })
                },
                C = e => {
                    let {
                        steps: t
                    } = e, {
                        trans: r
                    } = (0, c.m)(["common", "new-reservation"]);
                    return (0, o.jsx)("nav", {
                        className: i().container,
                        "aria-label": r("available-rooms_booking-stepper_label"),
                        children: t.map((e, n) => {
                            let s = n + 1 < t.length;
                            return (0, o.jsxs)(a.Fragment, {
                                children: [(0, o.jsx)(x, {
                                    "data-testid": e["data-testid"],
                                    stepId: e.id,
                                    label: r(e.label),
                                    navigateToStep: e.navigateTo,
                                    disabled: !e.enabled,
                                    visited: e.visited,
                                    isCurrent: e.isCurrent,
                                    completed: e.completed,
                                    "aria-current": e.isCurrent && r("available-rooms_booking-stepper_current-step")
                                }), s && (0, o.jsx)(j, {
                                    disabled: !e.enabled,
                                    visited: e.visited,
                                    canNavigateToNextStep: e.canNavigateToNextStep
                                })]
                            }, e.id)
                        })
                    })
                };
            var S = r(53818),
                A = r(31715),
                N = r(75918),
                P = r(4583),
                k = r(9061),
                O = r(38251),
                E = r(51504);
            let R = e => {
                let {
                    currentStep: t
                } = e, [r, l] = (0, a.useState)(1), {
                    navigate: i,
                    query: c
                } = (0, S.Z)(), {
                    cart: _
                } = (0, N._$)(), {
                    variantToShow: u
                } = (0, E.i)("EX041-mbox-PRO"), {
                    isAvailableRoomsStep: d,
                    isPersonalDataStep: m,
                    isPaymentStep: p
                } = (0, O.l)();
                (0, a.useEffect)(() => n.k.resolve("eventsManager").on(s.u.RESET_PRE_RESERVE, () => {
                    l(A.s.AVAILABLE_ROOMS)
                }), []), (0, a.useLayoutEffect)(() => {
                    l(n.k.resolve("stepperManager").getMaxVisited())
                }, [t]);
                let g = n.k.resolve("stepperManager").checkMaxVisited(t, r),
                    f = e => n.k.resolve("stepperManager").canNavigateToStep(e, g, t),
                    h = e => {
                        ({
                            [A.s.AVAILABLE_ROOMS]: async () => await i.toAvailability({
                                query: { ...c,
                                    ...(0, P.V)(_)
                                },
                                parametersToRemove: ["drawer"]
                            }),
                            [A.s.PERSONAL_DATA]: async () => await i.toPersonalData({
                                parametersToRemove: ["coupon", "drawer"]
                            }),
                            [A.s.CHOOSE_PAYMENT]: async () => await i.toChoosePayment({
                                parametersToRemove: ["coupon", "drawer"]
                            })
                        })[e]()
                    },
                    b = [{
                        id: A.s.AVAILABLE_ROOMS,
                        label: "stepper_room",
                        enabled: f(A.s.AVAILABLE_ROOMS),
                        isCurrent: d,
                        visited: t > A.s.AVAILABLE_ROOMS,
                        completed: r > A.s.AVAILABLE_ROOMS,
                        canNavigateToNextStep: f(A.s.CHOOSE_PAYMENT),
                        navigateTo: () => h(A.s.AVAILABLE_ROOMS),
                        "data-testid": "step-room"
                    }, {
                        id: A.s.PERSONAL_DATA,
                        label: "stepper_personal-data",
                        enabled: f(A.s.PERSONAL_DATA),
                        isCurrent: m,
                        visited: t > A.s.PERSONAL_DATA,
                        canNavigateToNextStep: f(A.s.CHOOSE_PAYMENT),
                        completed: r > A.s.PERSONAL_DATA,
                        navigateTo: () => h(A.s.PERSONAL_DATA),
                        "data-testid": "step-personal-data"
                    }, {
                        id: A.s.CHOOSE_PAYMENT,
                        label: "stepper_payment-data",
                        enabled: f(A.s.CHOOSE_PAYMENT),
                        isCurrent: p,
                        visited: t > A.s.CHOOSE_PAYMENT,
                        completed: r > A.s.CHOOSE_PAYMENT,
                        canNavigateToNextStep: !1,
                        navigateTo: () => h(A.s.CHOOSE_PAYMENT),
                        "data-testid": "step-payment-data"
                    }];
                return "B" === u ? (0, o.jsx)(k.U, {
                    currentStep: t
                }) : (0, o.jsx)(C, {
                    steps: b
                })
            }
        },
        77528: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => m
            });
            var o = r(37876),
                a = r(86818),
                n = r.n(a),
                s = r(14232),
                l = r(25072),
                i = r(35004),
                c = r(72668),
                _ = r(77487),
                u = r(39126),
                d = r(84640);
            let m = e => {
                let {
                    children: t,
                    title: r,
                    fontStyle: a,
                    customHeader: m,
                    customHeaderWithAccordionIcon: p,
                    className: g,
                    isOpenedByDefault: f = !0,
                    dataTestId: h
                } = e, [b, y] = (0, s.useState)(f);
                return (0, s.useEffect)(() => {
                    y(f)
                }, [f]), (0, o.jsxs)("div", {
                    className: (0, d.x)(n().container, g),
                    "data-testid": h,
                    children: [(0, o.jsx)("button", {
                        onClick: () => {
                            y(!b)
                        },
                        type: "button",
                        className: (0, d.x)("cursor-pointer", "w-full"),
                        "aria-expanded": b,
                        children: (0, c.O9)(m) || (0, c.O9)(p) ? (0, c.O9)(m) ? m : (0, o.jsxs)(i.s, {
                            justifyContent: "space-between",
                            gap: "xs",
                            alignItems: "flex-start",
                            className: (0, d.x)("w-full", b && "mb-xs"),
                            children: [p, (0, o.jsx)(u.I, {
                                icon: _.A,
                                size: "l",
                                color: "fill-neutral-00",
                                rotate: b ? 270 : 90,
                                className: n().icon
                            })]
                        }) : (0, o.jsxs)(i.s, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            className: (0, d.x)("w-full", b && "mb-xs"),
                            children: [(0, o.jsx)(l.E, {
                                fontStyle: null != a ? a : "m-700",
                                children: r
                            }), (0, o.jsx)(u.I, {
                                icon: _.A,
                                size: "l",
                                color: "fill-neutral-00",
                                rotate: b ? 270 : 90,
                                className: n().icon
                            })]
                        })
                    }), b ? t : null]
                })
            }
        },
        78777: e => {
            e.exports = {
                "w-full": "GuestsForm_w-full__Far_H",
                "w-fit": "GuestsForm_w-fit__BJlBa",
                "w-5/12": "GuestsForm_w-5__12__77xUA",
                "w-7/12": "GuestsForm_w-7__12__Cakik",
                "h-full": "GuestsForm_h-full__972YU",
                flex: "GuestsForm_flex__2eHyC",
                grow: "GuestsForm_grow__3w6iw",
                "flex-1": "GuestsForm_flex-1__RX52H",
                "shrink-0": "GuestsForm_shrink-0__tHG11",
                "self-center": "GuestsForm_self-center__cbvdP",
                "self-end": "GuestsForm_self-end__sRD_H",
                "items-center": "GuestsForm_items-center__eM4Pg",
                "justify-center": "GuestsForm_justify-center__07bGa",
                "gap-xs": "GuestsForm_gap-xs__cHHk1",
                "cursor-pointer": "GuestsForm_cursor-pointer__Ck46_",
                "touch-security-zone": "GuestsForm_touch-security-zone__FP433",
                "touch-security-zone-always": "GuestsForm_touch-security-zone-always__6_sDD",
                container: "GuestsForm_container__sZS05",
                collapsedContainer: "GuestsForm_collapsedContainer__EzCXK",
                guestItem: "GuestsForm_guestItem__kNDHd",
                info: "GuestsForm_info__PUHri"
            }
        },
        80330: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => g
            });
            var o = r(14232),
                a = r(72668),
                n = r(82802),
                s = r(24799),
                l = r(36271),
                i = r(37876),
                c = r(77925),
                _ = r(54704),
                u = r(88523);
            let d = (0, l.mP)(e => {
                let {
                    callCenterCountryCode: t,
                    callCenterPhone: r,
                    callCenterFreePhone: o,
                    onHide: a
                } = e, {
                    trans: n
                } = (0, _.m)(["common"]);
                return (0, i.jsx)(c.aF, {
                    size: "s-m",
                    "data-quantum-modal": "UserLevelNotFoundWarningModal",
                    title: n("no-user-level-warning_title"),
                    mobileStyle: "centered",
                    primaryButtonLabel: n("no-user-level-warning_continue"),
                    onPrimaryButtonClick: a,
                    children: (0, i.jsxs)("section", {
                        children: [(0, i.jsx)(c.EY, {
                            fontStyle: "m-700",
                            as: "p",
                            className: "mb-m",
                            children: n("no-user-level-warning_subtitle")
                        }), (0, i.jsxs)(c.EY, {
                            fontStyle: "m-300",
                            as: "div",
                            className: "mb-xl",
                            children: [n("no-user-level-warning_message"), " ", (0, i.jsx)(u.H, {
                                i18nKey: "no-user-level-warning_call-us",
                                values: {
                                    phone: r
                                },
                                components: {
                                    regular: (0, i.jsx)(c.EY, {
                                        as: "p",
                                        fontStyle: {
                                            mobile: "s-300",
                                            desktop: "m-300"
                                        }
                                    }),
                                    bold: (0, i.jsx)(c.N_, {
                                        "data-data-phone": t,
                                        link: "tel:".concat(r),
                                        variant: "secondary",
                                        children: "".concat(o).concat(o)
                                    })
                                }
                            })]
                        })]
                    })
                })
            });
            var m = r(35959),
                p = r(78416);
            let g = () => {
                let {
                    user: e
                } = (0, p.Jd)(), {
                    showModal: t,
                    hideModal: r
                } = (0, l.hS)(d), {
                    callCenterCountryCode: i,
                    callCenterPhone: c,
                    callCenterFreePhone: _
                } = (0, m.p)(), u = (0, o.useCallback)(() => {
                    r(), n.k.resolve("sessionStorageClient").set("userLevelNotFoundWarningShowed", !0)
                }, [r]);
                (0, o.useEffect)(() => {
                    !(0, a.b0)(e) && e.level === s.Yn.NotFound && ((0, a.O9)(n.k.resolve("sessionStorageClient").get("userLevelNotFoundWarningShowed")) || t({
                        callCenterCountryCode: i,
                        callCenterPhone: c,
                        callCenterFreePhone: _,
                        onHide: u
                    }))
                }, [t, e, u])
            }
        },
        82044: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => i
            });
            var o = r(73549),
                a = r(53818),
                n = r(75918),
                s = r(72944),
                l = r(4583);
            let i = () => {
                let {
                    queryUtils: e,
                    navigate: t
                } = (0, a.Z)(), {
                    cart: r
                } = (0, n._$)();
                return {
                    modifyDates: async a => {
                        o.z.actions.shared.changeDates(a);
                        let n = e.buildDatesQuery(a);
                        await t.toAvailability({
                            query: { ...n,
                                ...(0, l.V)(r)
                            }
                        })
                    },
                    modifyGuests: async a => {
                        o.z.actions.shared.changeGuests(a);
                        let n = e.buildGuestsQuery(a);
                        await t.toAvailability({
                            query: { ...n,
                                ...(0, l.V)(r)
                            }
                        })
                    },
                    modifyCoupon: async r => {
                        let a = (e => (null == e ? void 0 : e.type) === s.f.Promotional ? null == e ? void 0 : e.promotionalCode : (null == e ? void 0 : e.type) === s.f.Special ? null == e ? void 0 : e.specialCode : null == e ? void 0 : e.groupCode)(r);
                        o.z.actions.shared.changeCoupon(a);
                        let n = e.buildCouponQuery(r);
                        await t.toAvailability({
                            query: n
                        })
                    }
                }
            }
        },
        86818: e => {
            e.exports = {
                "w-full": "Accordion_w-full__AXtZK",
                "w-fit": "Accordion_w-fit__ckq1z",
                "w-5/12": "Accordion_w-5__12__lgZSX",
                "w-7/12": "Accordion_w-7__12__dD46s",
                "h-full": "Accordion_h-full__zC4eQ",
                flex: "Accordion_flex__xNN8D",
                grow: "Accordion_grow__hA9BQ",
                "flex-1": "Accordion_flex-1__a_bhn",
                "shrink-0": "Accordion_shrink-0__94Vm3",
                "self-center": "Accordion_self-center__EMSC8",
                "self-end": "Accordion_self-end__S1lFB",
                "items-center": "Accordion_items-center__u0E9w",
                "justify-center": "Accordion_justify-center__GbHKm",
                "gap-xs": "Accordion_gap-xs__nmtmd",
                "cursor-pointer": "Accordion_cursor-pointer__h0R05",
                "touch-security-zone": "Accordion_touch-security-zone__oIUGb",
                "touch-security-zone-always": "Accordion_touch-security-zone-always__g4mYI",
                container: "Accordion_container__DXGoU",
                icon: "Accordion_icon__4olCH"
            }
        },
        90313: e => {
            e.exports = {
                accordion: "RatePoliciesModal_accordion__OCyTs",
                policySelected: "RatePoliciesModal_policySelected__glD1Q",
                selectedTag: "RatePoliciesModal_selectedTag___cpKJ",
                policy: "RatePoliciesModal_policy__xWHuP"
            }
        },
        90671: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => a
            });
            var o = r(72668);
            let a = e => {
                    let {
                        adultsList: t,
                        childrenList: r,
                        trans: a,
                        showRooms: s = !0,
                        childrenAges: l,
                        showRoomsFirst: i = !1
                    } = e, c = r.length > 0 && n(r) > 0;
                    return c || s ? !c && s ? a(i ? "new-reservation:occupancy-form_room_guests_resume-adults-with-rooms_first" : "new-reservation:occupancy-form_room_guests_resume-adults-with-rooms", {
                        adults: n(t),
                        rooms: t.length
                    }) : (0, o.O9)(l) ? a("new-reservation:occupancy-form_room_guests_resume-adults-with-childrenAges", {
                        adults: n(t),
                        children: n(r),
                        childrenAges: l
                    }) : s ? a(i ? "new-reservation:occupancy-form_room_guests_resume-adults-with-children-and-rooms_first" : "new-reservation:occupancy-form_room_guests_resume-adults-with-children-and-rooms", {
                        adults: n(t),
                        children: n(r),
                        rooms: t.length
                    }) : a("new-reservation:occupancy-form_room_guests_resume-adults-with-children", {
                        adults: n(t),
                        children: n(r)
                    }) : a("new-reservation:occupancy-form_room_guests_resume-adults", {
                        adults: n(t)
                    })
                },
                n = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0];
                    return e.reduce((e, t) => e + t, 0)
                }
        },
        99493: e => {
            e.exports = {
                "w-full": "ProgressBarStepper_w-full__teAsw",
                "w-fit": "ProgressBarStepper_w-fit__erOpl",
                "w-5/12": "ProgressBarStepper_w-5__12__M968i",
                "w-7/12": "ProgressBarStepper_w-7__12__3C_ZX",
                "h-full": "ProgressBarStepper_h-full__DpSGk",
                flex: "ProgressBarStepper_flex__NIJSL",
                grow: "ProgressBarStepper_grow__DcZvE",
                "flex-1": "ProgressBarStepper_flex-1__AJ1MF",
                "shrink-0": "ProgressBarStepper_shrink-0__K56TG",
                "self-center": "ProgressBarStepper_self-center__UTCeB",
                "self-end": "ProgressBarStepper_self-end__6slaE",
                "items-center": "ProgressBarStepper_items-center__BI5tT",
                "justify-center": "ProgressBarStepper_justify-center__OxCsx",
                "gap-xs": "ProgressBarStepper_gap-xs__VSyfN",
                "cursor-pointer": "ProgressBarStepper_cursor-pointer__XetCT",
                "touch-security-zone": "ProgressBarStepper_touch-security-zone__X7xTN",
                "touch-security-zone-always": "ProgressBarStepper_touch-security-zone-always__eMuZf",
                container: "ProgressBarStepper_container__knsHF"
            }
        }
    }
]);