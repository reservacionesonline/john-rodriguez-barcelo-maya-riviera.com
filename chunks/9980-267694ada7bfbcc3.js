! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            o = (new e.Error).stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "9972be1c-0752-4184-9b2f-5a524fd5b883", e._sentryDebugIdIdentifier = "sentry-dbid-9972be1c-0752-4184-9b2f-5a524fd5b883")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9980], {
        2159: (e, o, t) => {
            "use strict";
            t.d(o, {
                A: () => n,
                S: () => l
            });
            var a = t(37876);
            let l = e => {
                    let {
                        color: o
                    } = e;
                    return (0, a.jsx)("path", {
                        d: "M21.0003 5L10.3227 19.2367C10.0793 19.5615 9.70691 19.7646 9.30206 19.7935C8.89721 19.8223 8.49978 19.674 8.21279 19.387L3.00028 14.1745",
                        stroke: o,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2"
                    })
                },
                n = l
        },
        12291: (e, o, t) => {
            "use strict";
            t.d(o, {
                E: () => u
            });
            var a = t(5750),
                l = t(82802),
                n = t(53818),
                i = t(84703),
                s = t(72668),
                r = t(61810),
                c = t(14232),
                d = t(33720);
            let u = () => {
                var e;
                let {
                    queryUtils: o
                } = (0, n.Z)(), {
                    properties: {
                        cmsLanguage: t
                    }
                } = (0, i.QD)(), {
                    setWithBarceloExperience: u,
                    clearApplicationExperience: p
                } = (0, d.E)(), _ = o.getRawParam("hotel"), m = o.getRawParam("marketprice"), h = null != (e = o.getCouponParam()) ? e : o.getGroupCodeParam(), x = o.getRawParam("arrive"), f = o.getRawParam("depart"), y = (0, s.O9)(x) ? r.g.fromString(x).toDate() : void 0, v = (0, s.O9)(f) ? r.g.fromString(f).subtract(1, "day").toDate() : void 0, C = (0, s.O9)(_) && (0, s.O9)(m), {
                    data: g
                } = (0, a.x)("hotel-campaign", C && (0, s.O9)(h) ? [m, t, _, h] : null, () => l.k.resolve("getCampaignForCoupon")({
                    marketprice: m,
                    language: t,
                    hotelId: _,
                    promotionalCoupon: h
                })), {
                    data: j
                } = (0, a.x)("hotel-main-campaign", C ? [m, t, _] : null, () => l.k.resolve("getMainCampaign")({
                    marketprice: m,
                    language: t,
                    hotelId: _
                }));
                return (0, c.useEffect)(() => {
                    if ((0, s.b0)(g) || g.isBarceloExperienceActive) return void u();
                    p()
                }, [j, g, u, p]), {
                    couponCampaign: (0, s.O9)(y) && (0, s.O9)(v) && (0, s.O9)(g) && g.travelStart <= y && g.travelEnd >= v ? g : void 0,
                    mainCampaign: j
                }
            }
        },
        15327: e => {
            e.exports = {
                "w-full": "CouponFormContent_w-full__swDzs",
                "w-fit": "CouponFormContent_w-fit___txTr",
                "w-5/12": "CouponFormContent_w-5__12__Ui73r",
                "w-7/12": "CouponFormContent_w-7__12__C1vDy",
                "h-full": "CouponFormContent_h-full__uEwm_",
                flex: "CouponFormContent_flex__W3_QE",
                grow: "CouponFormContent_grow__ek4ze",
                "flex-1": "CouponFormContent_flex-1__mUVi_",
                "shrink-0": "CouponFormContent_shrink-0__TH8Ja",
                "self-center": "CouponFormContent_self-center__cGPji",
                "self-end": "CouponFormContent_self-end__d_HIk",
                "items-center": "CouponFormContent_items-center__9_Feo",
                "justify-center": "CouponFormContent_justify-center__QGKcW",
                "gap-xs": "CouponFormContent_gap-xs__p1jeA",
                "cursor-pointer": "CouponFormContent_cursor-pointer__e8tUo",
                "touch-security-zone": "CouponFormContent_touch-security-zone__gpsME",
                "touch-security-zone-always": "CouponFormContent_touch-security-zone-always__mCPGX",
                couponWrapper: "CouponFormContent_couponWrapper__3K5Jn"
            }
        },
        30257: (e, o, t) => {
            "use strict";
            t.d(o, {
                c: () => c
            });
            var a = t(53818),
                l = t(61417),
                n = t(72668),
                i = t(31240),
                s = t(57691),
                r = t(665);
            let c = () => {
                let {
                    queryUtils: e
                } = (0, a.Z)(), {
                    availabilityCriteria: o
                } = (0, i.E)(), t = (0, l.Y)(), c = (0, n.O9)(t) ? t.USPCampaigns : void 0, d = e.getUSPCampaignParam(), u = d ? null == c ? void 0 : c[d] : void 0, p = (0, s.Y)(null == o ? void 0 : o.checkIn, null == o ? void 0 : o.checkOut), _ = (0, n.O9)(u) && p > 0 ? (0, r.b)(u, p) : void 0;
                return {
                    hotelUSPCampaigns: c,
                    activeUSPCampaign: u,
                    applicableUSPCampaignBenefit: _,
                    USPCampaignIdFromUrl: d
                }
            }
        },
        37458: (e, o, t) => {
            "use strict";
            t.d(o, {
                F: () => s
            });
            var a = t(37876),
                l = t(14232),
                n = t(88992),
                i = t(77925);
            let s = (0, l.forwardRef)((e, o) => {
                let {
                    getFieldState: t,
                    formState: l
                } = (0, n.xW)(), s = t(e.name, l).error;
                return (0, a.jsx)(i.zM, { ...e,
                    error: s,
                    ref: o
                })
            })
        },
        41591: e => {
            e.exports = {
                "w-full": "AppliedCouponsSummary_w-full__w6ZR6",
                "w-fit": "AppliedCouponsSummary_w-fit__EJtNJ",
                "w-5/12": "AppliedCouponsSummary_w-5__12___ZKT6",
                "w-7/12": "AppliedCouponsSummary_w-7__12__QjMYA",
                "h-full": "AppliedCouponsSummary_h-full__UqhfC",
                flex: "AppliedCouponsSummary_flex__F0OMg",
                grow: "AppliedCouponsSummary_grow___O0ds",
                "flex-1": "AppliedCouponsSummary_flex-1__s458x",
                "shrink-0": "AppliedCouponsSummary_shrink-0__qZE1B",
                "self-center": "AppliedCouponsSummary_self-center__PQ0uI",
                "self-end": "AppliedCouponsSummary_self-end__AcqEn",
                "items-center": "AppliedCouponsSummary_items-center__hBS01",
                "justify-center": "AppliedCouponsSummary_justify-center__gXKRs",
                "gap-xs": "AppliedCouponsSummary_gap-xs__SDvAO",
                "cursor-pointer": "AppliedCouponsSummary_cursor-pointer__4DRQL",
                "touch-security-zone": "AppliedCouponsSummary_touch-security-zone__BjiJ8",
                "touch-security-zone-always": "AppliedCouponsSummary_touch-security-zone-always__m_JmW",
                appliedCouponsContainer: "AppliedCouponsSummary_appliedCouponsContainer__Ij_oG",
                couponTag: "AppliedCouponsSummary_couponTag__Hj3TB"
            }
        },
        47371: (e, o, t) => {
            "use strict";
            t.d(o, {
                B: () => a
            });
            let a = e => e.roomStays.some(e => e.rate.isMember)
        },
        77159: (e, o, t) => {
            "use strict";

            function a(e, o) {
                return o(e) !== e
            }
            t.d(o, {
                z: () => a
            })
        },
        80857: e => {
            e.exports = {
                "w-full": "CouponsEditorModal_w-full__F1Otr",
                "w-fit": "CouponsEditorModal_w-fit__KlNe5",
                "w-5/12": "CouponsEditorModal_w-5__12__k8mla",
                "w-7/12": "CouponsEditorModal_w-7__12__t_c0s",
                "h-full": "CouponsEditorModal_h-full__Wk8Y8",
                flex: "CouponsEditorModal_flex__hTpDe",
                grow: "CouponsEditorModal_grow__cSL_K",
                "flex-1": "CouponsEditorModal_flex-1__Pte9B",
                "shrink-0": "CouponsEditorModal_shrink-0__BPNBe",
                "self-center": "CouponsEditorModal_self-center__YX720",
                "self-end": "CouponsEditorModal_self-end__lK0Jp",
                "items-center": "CouponsEditorModal_items-center__Ot3AY",
                "justify-center": "CouponsEditorModal_justify-center__rL9aP",
                "gap-xs": "CouponsEditorModal_gap-xs__xQiPl",
                "cursor-pointer": "CouponsEditorModal_cursor-pointer__DGLvX",
                "touch-security-zone": "CouponsEditorModal_touch-security-zone__MxeVF",
                "touch-security-zone-always": "CouponsEditorModal_touch-security-zone-always__GdKdY",
                container: "CouponsEditorModal_container__ptACm",
                couponsSelectorContainer: "CouponsEditorModal_couponsSelectorContainer__yGd7J",
                couponsSelectorItemWrapper: "CouponsEditorModal_couponsSelectorItemWrapper__zNntA",
                selected: "CouponsEditorModal_selected__eObF6",
                formWrapper: "CouponsEditorModal_formWrapper__cB9n0",
                specialCodeSelect: "CouponsEditorModal_specialCodeSelect__h2GbG"
            }
        },
        97597: (e, o, t) => {
            "use strict";
            t.d(o, {
                Y: () => H
            });
            var a = t(37876),
                l = t(77925),
                n = t(36271),
                i = t(54704),
                s = t(80857),
                r = t.n(s),
                c = t(14232),
                d = t(88992),
                u = t(72944),
                p = t(11207),
                _ = t(72668),
                m = t(15327),
                h = t.n(m),
                x = t(99573),
                f = t.n(x),
                y = t(84640),
                v = t(43239),
                C = t(35004),
                g = t(28980),
                j = t(2159);
            let w = (0, c.forwardRef)((e, o) => {
                let {
                    label: t = "",
                    hint: n,
                    type: i = "text",
                    autoFocus: s = !1,
                    "data-testid": r,
                    ariaLabel: c,
                    className: d,
                    inputClassName: u,
                    onClearInput: p,
                    onChange: m,
                    onBlur: h,
                    name: x,
                    validationMessage: w,
                    min: b,
                    max: S,
                    maxLength: E,
                    minLength: F,
                    pattern: k,
                    required: W,
                    disabled: L = !1,
                    value: M,
                    showLoader: O = !1,
                    ...N
                } = e, I = !L && !(0, _.Im)(M), T = !L && !!(null == w ? void 0 : w.invalid), z = !L && !!(null == w ? void 0 : w.valid), A = w && (T || z);
                return (0, a.jsxs)("div", {
                    className: (0, y.x)(d, f().container),
                    children: [(0, a.jsxs)("label", {
                        htmlFor: x,
                        children: [(0, a.jsx)(l.EY, {
                            fontStyle: "m-700",
                            color: L ? "disabled" : "dark",
                            children: t
                        }), W && (0, a.jsx)(l.EY, {
                            fontStyle: "s-700",
                            color: "support-error-dark",
                            children: (0, a.jsx)("i", {
                                "aria-hidden": "true",
                                children: " *"
                            })
                        })]
                    }), (0, a.jsx)("input", { ...N,
                        "aria-label": c,
                        "data-testid": r,
                        id: x,
                        className: (0, y.x)(u, f().input, !!(null == w ? void 0 : w.invalid) && f().inputError, !!(null == w ? void 0 : w.valid) && f().inputValid),
                        type: i,
                        autoFocus: s,
                        onChange: m,
                        onBlur: e => {
                            null == h || h(e)
                        },
                        ref: o,
                        name: x,
                        min: b,
                        max: S,
                        maxLength: E,
                        minLength: F,
                        pattern: k,
                        required: W,
                        disabled: L,
                        value: M
                    }), A && (0, a.jsx)(C.s, {
                        alignItems: "flex-start",
                        className: "mt-xxs",
                        children: T ? (0, a.jsx)(l.EY, {
                            color: "support-error-dark",
                            fontStyle: "s-300",
                            ariaLabel: "notification-".concat(i),
                            "data-testid": "notification-icon-".concat(i),
                            children: null == w ? void 0 : w.invalid
                        }) : (0, a.jsxs)(C.s, {
                            direction: "row",
                            gap: "xs",
                            children: [(0, a.jsx)(v.I, {
                                size: "m",
                                color: "support-success",
                                icon: j.A
                            }), (0, a.jsx)(l.EY, {
                                color: "support-success",
                                fontStyle: "s-300",
                                ariaLabel: "notification-".concat(i),
                                "data-testid": "notification-icon-".concat(i),
                                children: w.valid
                            })]
                        })
                    }), (0, a.jsx)(l.EY, {
                        fontStyle: "s-300",
                        color: "mid",
                        className: f().helperText,
                        children: n
                    }), O ? (0, a.jsx)("div", {
                        className: f().iconWrapper,
                        "data-testid": "text-field-loader",
                        children: (0, a.jsx)(l.aH, {
                            variant: "gradient",
                            size: "l"
                        })
                    }) : I ? (0, a.jsx)("button", {
                        type: "button",
                        className: f().iconWrapper,
                        onMouseDown: e => {
                            e.preventDefault()
                        },
                        onClick: p,
                        "data-testid": "text-field-clear-button",
                        children: (0, a.jsx)(v.I, {
                            size: "l",
                            color: "interactive-primary-active",
                            icon: g.U
                        })
                    }) : null]
                })
            });
            var b = t(63853),
                S = t(32237),
                E = t(51969);
            let F = e => {
                let {
                    methods: o,
                    fieldName: t,
                    couponType: l,
                    revalidate: n = !1,
                    autoFocus: s = !0,
                    onValidateCoupon: r
                } = e, {
                    trans: p
                } = (0, i.m)(["new-reservation"]), m = (0, d.FH)({
                    name: t
                }), x = (0, c.useRef)(null), [f, y] = (0, c.useState)(!1), [v, C] = (0, c.useState)(void 0), {
                    couponValidationResult: g,
                    hideCouponNotification: j,
                    setCouponValidationResult: F
                } = (0, E.hD)();
                (0, c.useEffect)(() => {
                    let e = o.getValues(t) || "";
                    if (o.setValue("type", l), n && l === u.f.Promotional && !(0, _.Im)(e)) return void k(e);
                    L()
                }, [n]);
                let k = async e => {
                        if (l === u.f.Group) return;
                        if (e.length < 6) return void C(void 0);
                        if ((0, _.Im)(e)) return void L();
                        y(!0), j();
                        let {
                            type: o,
                            validity: t
                        } = await r(e);
                        o !== (null == g ? void 0 : g.type) && F({
                            type: o,
                            validity: t
                        }), o !== S.OM.VALID ? C({
                            invalid: p("edit-coupons_input_validation_invalid", {
                                coupon: e
                            })
                        }) : C(void 0), y(!1)
                    },
                    W = (0, b.YQ)(k, 1e3),
                    L = () => {
                        C(void 0)
                    },
                    {
                        ref: M,
                        ...O
                    } = o.register(t);
                return (0, a.jsx)(w, {
                    ref: e => {
                        M(e), x.current = e
                    },
                    ...O,
                    value: (0, _.O9)(m) ? m : "",
                    onClearInput: () => {
                        o.setValue(t, ""), L()
                    },
                    autoFocus: s,
                    name: t,
                    "data-testid": "coupon-input",
                    onBlur: e => {
                        o.setValue(t, e.target.value.trim())
                    },
                    onChange: e => {
                        var a, l;
                        let n = null == (a = x.current) ? void 0 : a.selectionStart,
                            {
                                validCoupon: i,
                                totalRemoveChars: s
                            } = (0, S.X2)(e.target.value);
                        o.setValue(t, i), (0, _.O9)(n) && !(0, _.kZ)(n) && (null == (l = x.current) || l.setSelectionRange(n - s, n - s)), W(i)
                    },
                    showLoader: f,
                    validationMessage: v,
                    maxLength: 25,
                    className: h().couponWrapper,
                    ariaLabel: p("new-reservation:coupons-form_pick-coupon-input_aria-label")
                })
            };
            var k = t(39126),
                W = t(12809),
                L = t(84703),
                M = t(34155),
                O = t(24463);
            let N = (0, n.mP)(e => {
                    let {
                        couponId: o,
                        onClose: t,
                        onContinue: n,
                        onCancel: s
                    } = e, {
                        trans: r
                    } = (0, i.m)(["new-reservation"]);
                    return (0, a.jsx)(l.aF, {
                        size: "s-m",
                        onClose: t,
                        mobileStyle: "centered",
                        title: r("available-rooms_coupons-summary_delete-code_confirm_title_v2", {
                            couponId: o
                        }),
                        primaryButtonLabel: r("available-rooms_coupons-summary_delete-code_confirm_delete"),
                        onPrimaryButtonClick: n,
                        secondaryButtonLabel: r("available-rooms_coupons-summary_delete-code_confirm_cancel"),
                        onSecondaryButtonClick: s,
                        children: (0, a.jsx)(l.EY, {
                            fontStyle: "m-300",
                            as: "p",
                            children: r("available-rooms_coupons-summary_delete-code_confirm_subtitle")
                        })
                    })
                }),
                I = e => {
                    let {
                        coupon: o,
                        onDeleteCoupon: t,
                        promotionalCoupon: s,
                        hasToShowDeleteLink: r = !0,
                        isSpecialCoupon: c = !1,
                        couponId: d
                    } = e, {
                        trans: p
                    } = (0, i.m)(["new-reservation"]), {
                        showModal: m,
                        hideModal: h
                    } = (0, n.hS)(N), x = (0, L.QD)().properties.isRTL, f = (0, _.O9)(o) && o.applies, y = async () => {
                        await m({
                            onClose: h,
                            onCancel: h,
                            onContinue: async () => {
                                h(), await t()
                            },
                            couponId: o.value
                        })
                    };
                    return f && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(C.s, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [(0, a.jsxs)(C.s, {
                                alignItems: "center",
                                gap: "xs",
                                children: [(0, a.jsx)(k.I, {
                                    flipHorizontally: x,
                                    size: "s",
                                    icon: W.A
                                }), (0, a.jsx)(l.EY, {
                                    fontStyle: "s-500",
                                    children: o.value
                                })]
                            }), r && (0, a.jsx)(M.v, {
                                className: "touch-security-zone-always",
                                onClick: y,
                                children: p("available-rooms_coupons-summary_delete-code")
                            })]
                        }), (0, a.jsx)(O.M, {
                            type: c ? "info" : "success",
                            className: "mt-xs",
                            text: p((0, _.O9)(s) ? "available-rooms_coupons-summary_add-code_active_v2" : o.type === u.f.Group ? "available-rooms_coupons-summary_add-group-code_applied" : c ? "available-rooms_coupons-summary_add-special-code_applied_".concat(d) : "available-rooms_coupons-summary_add-code_applied")
                        })]
                    })
                };
            var T = t(53818),
                z = t(41591),
                A = t.n(z),
                P = t(39098),
                Y = t(34127),
                D = t(38282);
            let B = (0, n.mP)(e => {
                let {
                    title: o,
                    description: t
                } = e;
                return (0, a.jsx)(l.aF, {
                    size: "s-m",
                    title: o,
                    withButtons: !1,
                    children: (0, a.jsx)(l.EY, {
                        fontStyle: "m-300",
                        as: "p",
                        children: t
                    })
                })
            });
            var G = t(29808);
            let V = e => {
                    let {
                        promotionalCoupon: o,
                        promotionalValidCoupon: t,
                        myBarceloRateSelected: n,
                        appRateSelected: s,
                        groupCode: r,
                        user: c,
                        mainCampaign: d,
                        isPromotionalCouponCombinedWithUserCoupon: u,
                        howCouponAppliesInAvailability: p,
                        USPCampaign: m,
                        hasToShowPrepayDiscount: h
                    } = e, {
                        trans: x
                    } = (0, i.m)(["new-reservation", "common"]), {
                        marketPrice: f
                    } = (0, G.At)(), v = (0, _.O9)(r), g = (0, _.O9)(m), j = (null == f ? void 0 : f.showPricePreviousToDiscount) && !v, w = (0, _.O9)(o) && o.applies || (0, _.O9)(t) && "none" !== p, b = (0, _.O9)(c) && (0, _.O9)(c.discount) && c.discount > 0 && !v && (!w || w && u), S = (0, _.O9)(d) && !v && !g;
                    return S || v || n || s || g || j || b || w ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.EY, {
                            as: "h2",
                            fontStyle: "m-500",
                            className: "mt-m",
                            children: x("available-rooms_coupons-summary_add-code_summary")
                        }), (0, a.jsx)("div", {
                            className: A().appliedCouponsContainer,
                            children: (0, a.jsxs)(C.s, {
                                direction: "column",
                                gap: "xs",
                                children: [!S && j && (0, a.jsx)(R, {
                                    title: x("available-rooms_pay-now_latam_discount"),
                                    description: x("available-rooms_pay-now_latam_discount_tooltip"),
                                    children: (0, a.jsx)(l.EY, {
                                        fontStyle: "s-500",
                                        as: "p",
                                        children: x("available-rooms_pay-now_latam_discount")
                                    })
                                }), S && (0, a.jsx)(R, {
                                    title: "".concat(x("coupons-summary_campaign_title"), " ").concat(null == d ? void 0 : d.title),
                                    description: x("coupons-summary_campaign_tooltip", {
                                        campaign: null == d ? void 0 : d.title
                                    }),
                                    children: (0, a.jsx)(l.EY, {
                                        fontStyle: "s-500",
                                        children: "".concat(x("coupons-summary_campaign_title"), " ").concat(null == d ? void 0 : d.title)
                                    })
                                }), v && (0, a.jsx)(R, {
                                    title: x("coupons-form_pick-coupon-select_values_group-code_editor"),
                                    description: x("coupons-summary_group-code_tooltip"),
                                    children: (0, a.jsx)(l.EY, {
                                        fontStyle: "s-500",
                                        "data-testid": "applied-group-code",
                                        children: r
                                    })
                                }), b && !v && (0, a.jsx)(R, {
                                    title: "".concat(x("coupons-summary_user-level_title_v2", {
                                        level: (0, _.ZH)(c.level)
                                    })),
                                    description: x("coupons-summary_user-level_tooltip"),
                                    children: (0, a.jsx)(l.EY, {
                                        fontStyle: "s-500",
                                        "data-testid": "applied-level-coupon",
                                        children: x("new-reservation:coupons-summary_user-level_title_v2", {
                                            level: (0, _.ZH)(c.level)
                                        })
                                    })
                                }), n && !s && (0, a.jsx)(R, {
                                    title: x("available-rooms_rate-switch_myBarcelo"),
                                    description: x("coupons-summary_my-barcelo_tooltip"),
                                    children: (0, a.jsx)(l.EY, {
                                        fontStyle: "s-500",
                                        children: x("available-rooms_rate-switch_myBarcelo")
                                    })
                                }), g && (0, a.jsx)(R, {
                                    title: m.title,
                                    description: x("coupons-summary_campaign_tooltip", {
                                        campaign: m.title
                                    }),
                                    children: (0, a.jsx)(l.EY, {
                                        fontStyle: "s-500",
                                        children: m.title
                                    })
                                }), s && (0, a.jsx)(R, {
                                    title: x("coupons-summary_app-rate_title"),
                                    description: x("coupons-summary_app-rate_tooltip"),
                                    children: (0, a.jsxs)(C.s, {
                                        gap: "xs",
                                        alignItems: "center",
                                        children: [(0, a.jsx)(l.EY, {
                                            fontStyle: "s-500",
                                            children: x("coupons-summary_app-rate_title")
                                        }), (0, a.jsx)(l.vw, {
                                            className: (0, y.x)(A().couponTag),
                                            children: (0, a.jsx)(l.EY, {
                                                fontStyle: "xs-500",
                                                children: x("coupons-summary_app-rate_percentage")
                                            })
                                        })]
                                    })
                                }), h && !v && (0, a.jsx)(R, {
                                    title: x("available-rooms_pay-now_discount"),
                                    description: x("available-rooms_pay-now_discount_tooltip"),
                                    children: (0, a.jsx)(l.EY, {
                                        fontStyle: "s-500",
                                        as: "p",
                                        children: x("available-rooms_pay-now_discount")
                                    })
                                }), w && (0, a.jsx)(R, {
                                    title: x("coupons-form_pick-coupon-select_values_promotional-code"),
                                    description: x("coupons-summary_promotional-coupon_tooltip"),
                                    children: (0, a.jsx)(C.s, {
                                        gap: "xs",
                                        alignItems: "center",
                                        children: (0, a.jsx)(l.EY, {
                                            fontStyle: "s-500",
                                            "data-testid": "applied-promotional-coupon",
                                            children: (0, _.O9)(t) ? null == t ? void 0 : t.id : null == o ? void 0 : o.name
                                        })
                                    })
                                })]
                            })
                        })]
                    }) : null
                },
                R = e => {
                    let {
                        title: o,
                        description: t,
                        children: l
                    } = e, {
                        isMobileOrTablet: i
                    } = (0, D.Q)(), {
                        showModal: s
                    } = (0, n.hS)(B), r = (0, L.QD)().properties.isRTL;
                    return (0, a.jsxs)(C.s, {
                        gap: "xs",
                        alignItems: "center",
                        children: [(0, a.jsx)(k.I, {
                            flipHorizontally: r,
                            icon: W.A,
                            size: "s"
                        }), l, i ? (0, a.jsx)("button", {
                            onClick: async () => {
                                await s({
                                    title: o,
                                    description: t
                                })
                            },
                            children: (0, a.jsx)(k.I, {
                                className: "cursor-pointer",
                                size: "l",
                                icon: P.A,
                                ariaLabel: t
                            })
                        }) : (0, a.jsx)(Y.m, {
                            tooltipContent: t,
                            triggerElement: (0, a.jsx)(k.I, {
                                className: "self-center",
                                size: "l",
                                icon: P.A,
                                ariaLabel: t
                            })
                        })]
                    })
                };
            var K = t(30257),
                Q = t(61417);
            let q = e => e.type === u.f.Promotional && e.applies,
                H = (0, n.mP)(e => {
                    let {
                        couponsMetadata: o,
                        onEditCoupon: t,
                        onClose: s,
                        onValidateCoupon: m,
                        user: h,
                        promotionalValidCoupon: x,
                        promotionalCoupon: f,
                        hasToShowGroupCodeDeleteCTA: v = !1,
                        myBarceloRateSelected: g,
                        appRateSelected: j,
                        mainCampaign: w,
                        isPromotionalCouponCombinedWithUserCoupon: b,
                        howCouponAppliesInAvailability: S,
                        hasToShowPrepayDiscount: E = !1
                    } = e, F = (0, Q.Y)(), k = null == F ? void 0 : F.specialDiscounts, {
                        trans: W
                    } = (0, i.m)(["new-reservation"]), {
                        navigate: L,
                        query: z,
                        queryUtils: A
                    } = (0, T.Z)(), [P, Y] = (0, c.useState)(!1), [D, B] = (0, c.useState)(void 0), {
                        showModal: G,
                        hideModal: R
                    } = (0, n.hS)(N), {
                        activeUSPCampaign: H
                    } = (0, K.c)(), Z = A.getRawParam("drawer"), X = null == o ? void 0 : o.map(e => e.coupon).filter(e => e.type !== u.f.Level), $ = (0, _.d5)(X), {
                        methods: ee
                    } = (e => {
                        let o = (0, _.O9)(e) ? {
                                type: e.type,
                                ...e.type === u.f.Promotional ? {
                                    promotionalCode: e.value
                                } : e.type === u.f.Special ? {
                                    specialCode: e.value
                                } : {
                                    groupCode: e.value
                                }
                            } : void 0,
                            t = (0, d.mN)({
                                defaultValues: o
                            });
                        return {
                            methods: t,
                            getCoupon: () => {
                                let e = t.getValues("promotionalCode"),
                                    o = t.getValues("groupCode");
                                return {
                                    promotionalCode: e,
                                    groupCode: o,
                                    specialCode: t.getValues("specialCode"),
                                    type: t.getValues("type")
                                }
                            }
                        }
                    })((0, _.O9)(X) && (0, _.O9)($) && $.applies ? {
                        value: $.value,
                        type: $.type
                    } : void 0);
                    (0, c.useEffect)(() => {
                        window.dispatchEvent(new CustomEvent("closeNotification"))
                    }, []);
                    let eo = async () => {
                            Y(!0), s(), await L.toAvailability({
                                query: { ...z,
                                    drawer: "addGroupCode"
                                }
                            }), Y(!1)
                        },
                        et = async () => {
                            Y(!0), ee.setValue("groupCode", ""), await G({
                                onClose: R,
                                onCancel: () => {
                                    Y(!1), R()
                                },
                                onContinue: async () => {
                                    R(), s(), await L.toAvailability({
                                        query: { ...z,
                                            drawer: null == $ ? void 0 : $.value
                                        }
                                    })
                                },
                                couponId: null == $ ? void 0 : $.value
                            }), Y(!1)
                        },
                        ea = async () => {
                            Y(!0), await G({
                                onClose: R,
                                onCancel: () => {
                                    Y(!1), R()
                                },
                                onContinue: async () => {
                                    R(), s(), await L.toAvailability({
                                        query: { ...z,
                                            drawer: null == H ? void 0 : H.title
                                        },
                                        parametersToRemove: ["uspcampaign", "valueadd"]
                                    })
                                },
                                couponId: null == H ? void 0 : H.title
                            }), Y(!1)
                        },
                        el = async (e, o) => {
                            if ("" === e.promotionalCode && o === u.f.Promotional || "" === e.groupCode && o === u.f.Group || "" === e.specialCode && o === u.f.Special) return void s();
                            await t({ ...e,
                                type: o
                            }), s()
                        },
                        en = async () => {
                            await t({
                                type: u.f.Empty,
                                promotionalCode: "",
                                groupCode: "",
                                specialCode: ""
                            }), s()
                        },
                        ei = (0, _.O9)($) && q($),
                        es = (0, _.O9)($) && (e => e.type === u.f.Group && e.applies)($),
                        er = (null == k ? void 0 : k.map(e => e.coupon)) || [],
                        ec = (0, _.O9)($) && ((e, o) => q(e) && -1 !== o.indexOf(e.value))($, er);
                    return (0, c.useEffect)(() => ei && !ec ? void B(u.f.Promotional) : ec ? void B(u.f.Special) : es || "addGroupCode" === Z ? void B(u.f.Group) : void((0, _.b0)(H) && B(u.f.Promotional)), [ei, es, ec, Z, H]), (0, a.jsx)(l.Y9, {
                        title: W("available-rooms_coupons-summary_title"),
                        scrollable: !0,
                        children: (0, a.jsxs)("div", {
                            className: r().container,
                            children: [(0, a.jsx)(l.EY, {
                                as: "h2",
                                fontStyle: "m-500",
                                className: "mb-xs",
                                children: W("available-rooms_coupons-summary_add-code_title_v2")
                            }), (0, a.jsx)(l.EY, {
                                as: "p",
                                fontStyle: "s-300",
                                children: W("available-rooms_coupons-summary_add-code_subtitle_v2")
                            }), (0, a.jsxs)("div", {
                                className: (0, y.x)(r().couponsSelectorContainer, "mt-m"),
                                children: [(0, a.jsx)(l.rt, {
                                    name: "coupon-selector",
                                    value: u.f.Promotional,
                                    label: W("coupons-summary_add-code_promotional"),
                                    onChange: () => B(u.f.Promotional),
                                    checked: D === u.f.Promotional,
                                    disabled: es || (0, _.O9)(H) || ec,
                                    className: (0, y.x)(r().couponsSelectorItemWrapper, D === u.f.Promotional && r().selected),
                                    dataTestId: "promotional-coupon",
                                    children: ei ? (0, a.jsx)(I, {
                                        coupon: $,
                                        promotionalCoupon: x,
                                        onDeleteCoupon: en
                                    }) : (0, a.jsx)(U, {
                                        handleEditCouponsSubmit: el,
                                        methods: ee,
                                        onValidateCoupon: m,
                                        type: u.f.Promotional,
                                        labelKey: "new-reservation:coupons-form_pick-coupon-select_label_v2",
                                        fieldName: "promotionalCode"
                                    })
                                }), (0, a.jsx)(l.rt, {
                                    name: "coupon-selector",
                                    value: u.f.Group,
                                    label: W("coupons-summary_add-code_group"),
                                    onChange: () => B(u.f.Group),
                                    checked: D === u.f.Group,
                                    disabled: ei || (0, _.O9)(H),
                                    className: (0, y.x)(r().couponsSelectorItemWrapper, D === u.f.Group && r().selected),
                                    children: es ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(I, {
                                            coupon: $,
                                            onDeleteCoupon: en,
                                            hasToShowDeleteLink: !v
                                        }), v && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(O.M, {
                                                type: "info",
                                                className: "mt-m",
                                                text: W("choose-payment_coupons-summary_add-group-code_applied")
                                            }), (0, a.jsx)(C.s, {
                                                justifyContent: "flex-start",
                                                children: (0, a.jsx)(l.$n, {
                                                    className: "mt-m",
                                                    size: {
                                                        mobile: "fullWidth",
                                                        laptop: "large"
                                                    },
                                                    onClick: et,
                                                    isLoading: P,
                                                    children: W("choose-payment_coupons-summary_add-group-code_applied_delete-code")
                                                })
                                            })]
                                        })]
                                    }) : v ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(O.M, {
                                            type: "info",
                                            text: W("choose-payment_coupons-summary_add-promotional-coupon-code_added")
                                        }), (0, a.jsx)(C.s, {
                                            justifyContent: "flex-start",
                                            children: (0, a.jsx)(l.$n, {
                                                className: "mt-m",
                                                size: {
                                                    mobile: "fullWidth",
                                                    laptop: "large"
                                                },
                                                onClick: eo,
                                                isLoading: P,
                                                children: W("coupons-form_submit")
                                            })
                                        })]
                                    }) : (0, a.jsx)(U, {
                                        handleEditCouponsSubmit: el,
                                        methods: ee,
                                        onValidateCoupon: m,
                                        type: u.f.Group,
                                        labelKey: "new-reservation:coupons-form_pick-group-code-select_label",
                                        fieldName: "groupCode",
                                        autoFocus: !1
                                    })
                                }), (0, a.jsx)(l.rt, {
                                    name: "coupon-selector",
                                    value: u.f.Special,
                                    label: W("coupons-summary_add-code_special"),
                                    onChange: () => B(u.f.Special),
                                    checked: D === u.f.Special,
                                    disabled: ei && !ec || es || 0 === er.length || (0, _.O9)(H),
                                    className: (0, y.x)(r().couponsSelectorItemWrapper, D === u.f.Special && r().selected),
                                    children: (() => {
                                        if (ec) {
                                            var e;
                                            let o = null == F || null == (e = F.specialDiscounts.find(e => e.coupon === (null == $ ? void 0 : $.value))) ? void 0 : e.id;
                                            return (0, a.jsx)(I, {
                                                coupon: $,
                                                onDeleteCoupon: en,
                                                isSpecialCoupon: !0,
                                                couponId: o
                                            })
                                        }
                                        let o = (null == F ? void 0 : F.specialDiscounts.map(e => ({
                                            label: W(e.nameKey),
                                            value: e.coupon
                                        }))) || [];
                                        return (0, a.jsx)(J, {
                                            handleEditCouponsSubmit: el,
                                            methods: ee,
                                            specialDiscountsOptions: o
                                        })
                                    })()
                                })]
                            }), (ei || es) && (0, a.jsx)(O.M, {
                                type: "info",
                                className: "mt-m",
                                text: W("coupons-summary_add-code_coupon-added")
                            }), (0, _.O9)(H) && (0, a.jsx)(O.M, {
                                type: "info",
                                className: "mt-m",
                                text: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(l.EY, {
                                        fontStyle: "s-500",
                                        className: "mb-xxs",
                                        as: "p",
                                        children: W("coupons-summary_add-code_usp-campaign-added", {
                                            campaign: null == H ? void 0 : H.title
                                        })
                                    }), (0, a.jsx)(M.v, {
                                        className: "touch-security-zone",
                                        onClick: ea,
                                        children: (0, a.jsx)(l.EY, {
                                            fontStyle: "m-500",
                                            className: "mb-xxs",
                                            as: "p",
                                            children: W("available-rooms_coupons-summary_delete-usp-campaign")
                                        })
                                    })]
                                })
                            }), (0, a.jsx)(V, {
                                promotionalValidCoupon: x,
                                promotionalCoupon: f,
                                groupCode: (0, p.WQ)(o),
                                myBarceloRateSelected: g,
                                appRateSelected: j,
                                user: h,
                                mainCampaign: w,
                                isPromotionalCouponCombinedWithUserCoupon: b,
                                howCouponAppliesInAvailability: S,
                                USPCampaign: H,
                                hasToShowPrepayDiscount: E
                            })]
                        })
                    })
                }),
                U = e => {
                    let {
                        handleEditCouponsSubmit: o,
                        methods: t,
                        onValidateCoupon: n,
                        type: s,
                        labelKey: c,
                        fieldName: u,
                        autoFocus: p
                    } = e, {
                        trans: _
                    } = (0, i.m)(["new-reservation"]);
                    return (0, a.jsx)("section", {
                        children: (0, a.jsx)(d.Op, { ...t,
                            children: (0, a.jsxs)("form", {
                                onSubmit: t.handleSubmit(e => o(e, s)),
                                children: [(0, a.jsx)(l.EY, {
                                    fontStyle: "s-500",
                                    className: "mb-xxs",
                                    as: "p",
                                    children: _(c)
                                }), (0, a.jsxs)("div", {
                                    className: r().formWrapper,
                                    children: [(0, a.jsx)(F, {
                                        methods: t,
                                        fieldName: u,
                                        couponType: s,
                                        revalidate: !0,
                                        onValidateCoupon: n,
                                        autoFocus: p
                                    }), (0, a.jsx)(l.$n, {
                                        size: {
                                            mobile: "smallFullWidth",
                                            laptop: "small"
                                        },
                                        children: _("common:button_add")
                                    })]
                                })]
                            })
                        })
                    })
                },
                J = e => {
                    let {
                        handleEditCouponsSubmit: o,
                        methods: t,
                        specialDiscountsOptions: n
                    } = e, s = "specialCode", {
                        trans: c
                    } = (0, i.m)(["new-reservation"]), p = (0, d.FH)({
                        control: t.control,
                        name: s
                    }), m = t.register(s);
                    return (0, a.jsx)("section", {
                        children: (0, a.jsx)(d.Op, { ...t,
                            children: (0, a.jsxs)("form", {
                                onSubmit: t.handleSubmit(e => o(e, u.f.Special)),
                                children: [(0, a.jsx)("div", {
                                    className: "mb-xxs",
                                    children: (0, a.jsx)(l.EY, {
                                        as: "span",
                                        fontStyle: "s-500",
                                        children: (0, a.jsx)("label", {
                                            htmlFor: s,
                                            children: c("coupons-summary_add-code_special_subtitle")
                                        })
                                    })
                                }), (0, a.jsxs)(C.s, {
                                    alignItems: "center",
                                    wrap: "wrap",
                                    gap: "xs",
                                    children: [(0, a.jsx)(l.zM, { ...m,
                                        className: r().specialCodeSelect,
                                        name: s,
                                        placeholder: c("coupons-summary_add-code_special_selector_default-value"),
                                        value: p,
                                        options: n,
                                        ariaLabel: c("coupons-summary_add-code_special_selector_aria-label"),
                                        defaultValue: "None"
                                    }), (0, _.O9)(p) && (0, a.jsx)(l.$n, {
                                        size: {
                                            mobile: "smallFullWidth",
                                            laptop: "small"
                                        },
                                        children: c("coupons-form_submit--special")
                                    })]
                                })]
                            })
                        })
                    })
                }
        },
        99573: e => {
            e.exports = {
                "w-full": "TextFieldWithLoader_w-full__Zqub9",
                "w-fit": "TextFieldWithLoader_w-fit__3lGBz",
                "w-5/12": "TextFieldWithLoader_w-5__12__2asJH",
                "w-7/12": "TextFieldWithLoader_w-7__12__barpK",
                "h-full": "TextFieldWithLoader_h-full__bYtuq",
                flex: "TextFieldWithLoader_flex__rXK5o",
                grow: "TextFieldWithLoader_grow__b3ukh",
                "flex-1": "TextFieldWithLoader_flex-1__27e8x",
                "shrink-0": "TextFieldWithLoader_shrink-0__hvaCt",
                "self-center": "TextFieldWithLoader_self-center__UBv6A",
                "self-end": "TextFieldWithLoader_self-end__KquRo",
                "items-center": "TextFieldWithLoader_items-center__kCRds",
                "justify-center": "TextFieldWithLoader_justify-center__xe5zc",
                "gap-xs": "TextFieldWithLoader_gap-xs__hrjAq",
                "cursor-pointer": "TextFieldWithLoader_cursor-pointer__PIW4X",
                "touch-security-zone": "TextFieldWithLoader_touch-security-zone__xOI5j",
                "touch-security-zone-always": "TextFieldWithLoader_touch-security-zone-always__TJz8f",
                container: "TextFieldWithLoader_container__mfPSb",
                iconWrapper: "TextFieldWithLoader_iconWrapper__MN876",
                input: "TextFieldWithLoader_input__UxXss",
                inputError: "TextFieldWithLoader_inputError__QIprb",
                inputValid: "TextFieldWithLoader_inputValid__8cu7X",
                helperText: "TextFieldWithLoader_helperText__vvBtl"
            }
        }
    }
]);