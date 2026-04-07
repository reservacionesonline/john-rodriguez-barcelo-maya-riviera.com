! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "781a0944-89b5-4809-ac55-2c07d0768dc8", e._sentryDebugIdIdentifier = "sentry-dbid-781a0944-89b5-4809-ac55-2c07d0768dc8")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5056], {
        17: (e, t, a) => {
            "use strict";
            a.d(t, {
                v: () => x
            });
            var s = a(37876),
                n = a(95908),
                r = a(77925),
                o = a(12585),
                i = a(54704),
                l = a(35004),
                c = a(84640),
                _ = a(37372),
                m = a(41698),
                d = a(7647),
                u = a.n(d),
                p = a(29808);
            let x = e => {
                let {
                    cart: t
                } = e, {
                    trans: a
                } = (0, i.m)(["common", "new-reservation"]), {
                    marketPrice: d
                } = (0, p.At)(), x = null == d ? void 0 : d.netPrices, h = (0, n.Dp)(t), g = h.length > 0, f = () => (0, s.jsxs)(l.s, {
                    direction: "column",
                    gap: "xs",
                    className: "w-full",
                    children: [(0, s.jsx)(m.d, {
                        description: "".concat(a("common:breakdown_taxes-and-fees_title"), " ").concat(a("common:breakdown_taxes-and-fees_percentage", {
                            percentage: (0, _.z)(t.roomStays[0].rate.total.taxes.percentage)
                        })),
                        value: (0, n.W2)(t),
                        color: "mid"
                    }), g && h.map((e, t) => (0, s.jsx)(m.d, {
                        description: "".concat(a("common:breakdown_taxes-and-fees_title"), " ").concat(a("common:breakdown_taxes-and-fees_percentage", {
                            percentage: (0, _.z)(e.taxPercentage)
                        })),
                        value: e.totalTaxesAmount,
                        color: "mid"
                    }, t))]
                });
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(l.s, {
                        direction: "column",
                        className: (0, c.x)(u().container, "w-full"),
                        children: [x && (0, s.jsxs)(s.Fragment, {
                            children: [f(), (0, s.jsx)(r.cG, {
                                dir: "horizontal",
                                className: "mt-m mb-m"
                            })]
                        }), (0, s.jsxs)(l.s, {
                            justifyContent: "space-between",
                            gap: "s",
                            className: "w-full",
                            children: [(0, s.jsx)(r.EY, {
                                fontStyle: "ml-700",
                                children: a("cart_total-stay")
                            }), (0, s.jsx)(o.g, {
                                fontStyle: "ml",
                                grossPrice: t.prices.total.converted,
                                showAlwaysGross: !0
                            })]
                        }), (0, s.jsx)(l.s, {
                            justifyContent: "flex-end",
                            className: "w-full mt-xxs",
                            children: (0, s.jsx)(r.EY, {
                                fontStyle: "xs-500",
                                children: a("cart_gross-taxes")
                            })
                        }), !x && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(r.cG, {
                                dir: "horizontal",
                                className: "mt-m mb-m"
                            }), f()]
                        })]
                    })
                })
            }
        },
        3983: (e, t, a) => {
            "use strict";
            a.d(t, {
                m: () => n
            });
            var s = a(84968);
            let n = (e, t) => "AMOUNT" === e.type ? t(e.fee) : "".concat((0, s.LN)(e.percentage, {
                commaAsThousandsSeparator: !1
            }), " %")
        },
        4603: e => {
            e.exports = {
                "w-full": "ReservationDetails_w-full__my_e9",
                "w-fit": "ReservationDetails_w-fit__ZS4_w",
                "w-5/12": "ReservationDetails_w-5__12__KpJ3K",
                "w-7/12": "ReservationDetails_w-7__12__24HOR",
                "h-full": "ReservationDetails_h-full__tPAc7",
                flex: "ReservationDetails_flex__5guOz",
                grow: "ReservationDetails_grow__N7x8N",
                "flex-1": "ReservationDetails_flex-1__PuuX1",
                "shrink-0": "ReservationDetails_shrink-0__Xiual",
                "self-center": "ReservationDetails_self-center__TgxEK",
                "self-end": "ReservationDetails_self-end___mHB2",
                "items-center": "ReservationDetails_items-center__U6uxo",
                "justify-center": "ReservationDetails_justify-center__bIFED",
                "gap-xs": "ReservationDetails_gap-xs__9kvX7",
                "cursor-pointer": "ReservationDetails_cursor-pointer__fzdZK",
                "touch-security-zone": "ReservationDetails_touch-security-zone__sr7K6",
                "touch-security-zone-always": "ReservationDetails_touch-security-zone-always__ao6_r",
                container: "ReservationDetails_container__CFaIe"
            }
        },
        5343: (e, t, a) => {
            "use strict";
            a.d(t, {
                N: () => b
            });
            var s = a(37876),
                n = a(99744),
                r = a(4603),
                o = a.n(r),
                i = a(35004),
                l = a(25072),
                c = a(95908),
                _ = a(90671),
                m = a(54704),
                d = a(34155),
                u = a(75918),
                p = a(38251);
            let x = e => {
                let {
                    cart: t,
                    onEdit: a
                } = e, {
                    isEditableCart: n
                } = (0, u._$)(), {
                    trans: r
                } = (0, m.m)(["new-reservation"]), {
                    adults: o,
                    children: x
                } = (0, c.Cn)(t), {
                    currentStep: h
                } = (0, p.l)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(l.E, {
                        fontStyle: "s-500-caps",
                        className: "mb-xs",
                        as: "p",
                        children: r("cart_reservation-details_occupancy-title")
                    }), (0, s.jsxs)(i.s, {
                        gap: "xs",
                        justifyContent: "space-between",
                        children: [(0, s.jsx)(l.E, {
                            fontStyle: "m-700",
                            children: (0, _.t)({
                                adultsList: o,
                                childrenList: x,
                                trans: r,
                                showRoomsFirst: !0
                            })
                        }), n && (0, s.jsx)(d.v, {
                            "data-quantum-user-action": "edit-stay-step".concat(h),
                            "data-testid": "edit-stay",
                            onClick: a,
                            children: r("your-stay_edit")
                        })]
                    })]
                })
            };
            var h = a(68196),
                g = a.n(h),
                f = a(11207),
                y = a(61810),
                j = a(10045);
            let v = e => {
                let {
                    cart: t,
                    onOpenModal: a
                } = e, {
                    trans: r
                } = (0, m.m)(["new-reservation", "common"]), {
                    isEditableCart: o
                } = (0, u._$)(), {
                    currentStep: c
                } = (0, p.l)(), {
                    checkInDate: _,
                    checkOutDate: x
                } = (0, f.d1)(t.checkIn, t.checkOut), {
                    hotelCheckInAndCheckOutTime: h,
                    isLoadingCheckInAndCheckOut: v
                } = (0, j.M)(), w = null == h ? void 0 : h.checkInTime, C = null == h ? void 0 : h.checkOutTime, b = (0, f.kR)(y.g.fromDate(t.checkIn).startOf("day"), y.g.fromDate(t.checkOut).startOf("day"));
                return v ? null : (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(i.s, {
                        direction: "row",
                        className: "mb-m",
                        children: [(0, s.jsxs)(i.s, {
                            direction: "column",
                            gap: "xxs",
                            className: "flex-1",
                            children: [(0, s.jsx)(l.E, {
                                fontStyle: "s-500-caps",
                                children: r("new-reservation:cart_reservation-details_dates_start-date")
                            }), (0, s.jsx)(l.E, {
                                fontStyle: "m-700",
                                capitalize: !0,
                                children: _
                            }), (0, s.jsx)(l.E, {
                                color: "mid",
                                fontStyle: "s-500",
                                children: r("common:check-in_from_v2", {
                                    hour: w
                                })
                            })]
                        }), (0, s.jsx)(n.c, {
                            dir: "vertical",
                            className: "ml-m mr-m"
                        }), (0, s.jsxs)(i.s, {
                            direction: "column",
                            gap: "xxs",
                            className: "flex-1",
                            children: [(0, s.jsx)(l.E, {
                                fontStyle: "s-500-caps",
                                children: r("new-reservation:cart_reservation-details_dates_end-date")
                            }), (0, s.jsx)(l.E, {
                                fontStyle: "m-700",
                                capitalize: !0,
                                children: x
                            }), (0, s.jsx)(l.E, {
                                color: "mid",
                                fontStyle: "s-500",
                                children: r("common:check-out_until_v2", {
                                    hour: C
                                })
                            })]
                        })]
                    }), (0, s.jsxs)(i.s, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        className: "mb-m",
                        children: [(0, s.jsx)(l.E, {
                            className: g().tag,
                            fontStyle: "xs-500",
                            children: r("common:number-of-nights", {
                                count: b
                            })
                        }), o && (0, s.jsx)(d.v, {
                            "data-quantum-user-action": "edit-dates-step".concat(c),
                            "data-testid": "edit-dates",
                            onClick: () => a("dates"),
                            children: r("new-reservation:your-stay_edit")
                        })]
                    })]
                })
            };
            var w = a(76583),
                C = a(17);
            let b = e => {
                let {
                    cart: t,
                    onEditOccupancy: a,
                    onEditDates: r,
                    hasToShowReservationHolder: i = !1,
                    hasToShowTotalDetails: l = !1
                } = e;
                return (0, s.jsxs)("div", {
                    className: o().container,
                    children: [(0, s.jsx)(v, {
                        cart: t,
                        onOpenModal: null != r ? r : () => {}
                    }), (0, s.jsx)(n.c, {
                        dir: "horizontal",
                        className: "mb-m"
                    }), (0, s.jsx)(x, {
                        cart: t,
                        onEdit: null != a ? a : () => {}
                    }), i && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(n.c, {
                            dir: "horizontal",
                            className: "mt-m mb-m"
                        }), (0, s.jsx)(w.l, {
                            cart: t
                        })]
                    }), l && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(n.c, {
                            dir: "horizontal",
                            className: "mt-m mb-m"
                        }), (0, s.jsx)(C.v, {
                            cart: t
                        })]
                    })]
                })
            }
        },
        7647: e => {
            e.exports = {
                container: "TotalDetails_container__2E4zk"
            }
        },
        8657: (e, t, a) => {
            "use strict";
            a.d(t, {
                q: () => i
            });
            var s = a(37876),
                n = a(63183),
                r = a(72668),
                o = a(35750);
            let i = e => {
                let {
                    src: t,
                    alt: a,
                    ...i
                } = e, l = (0, o.gK)(), c = (0, r.b0)(t) ? l : t;
                return (0, s.jsx)(n._, {
                    src: c,
                    defaultSrc: l,
                    alt: a,
                    ...i
                })
            }
        },
        8869: e => {
            e.exports = {
                container: "DiscountsAndCoupons_container__xPRmr",
                discountsWrapper: "DiscountsAndCoupons_discountsWrapper__4ZzvU",
                icon: "DiscountsAndCoupons_icon__qR_61"
            }
        },
        25187: (e, t, a) => {
            "use strict";
            a.d(t, {
                r: () => B
            });
            var s = a(37876),
                n = a(14232),
                r = a(11115),
                o = a(25072),
                i = a(35004),
                l = a(84640),
                c = a(36271),
                _ = a(34155),
                m = a(72668),
                d = a(33198),
                u = a(38251);
            let p = e => {
                let {
                    roomName: t,
                    roomStay: a,
                    className: n,
                    hotel: r
                } = e, {
                    showModal: p
                } = (0, c.hS)(d.z), {
                    isPersonalDataStep: x
                } = (0, u.l)(), h = async () => {
                    (0, m.b0)(r) || await p({
                        rooms: [a.room],
                        initialRoomIndex: 0,
                        hotel: r
                    })
                };
                return (0, s.jsx)(i.s, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    className: (0, l.x)(n, "mb-m"),
                    children: x ? (0, s.jsx)(_.v, {
                        onClick: h,
                        children: (0, s.jsx)(o.E, {
                            fontStyle: "ml-700",
                            color: "button-secondary",
                            children: t
                        })
                    }) : (0, s.jsx)(o.E, {
                        fontStyle: "ml-700",
                        children: t
                    })
                })
            };
            var x = a(12585),
                h = a(54704);
            let g = "common:occupancy";
            var f = a(45151),
                y = a.n(f),
                j = a(83151),
                v = a(3155),
                w = a(82802),
                C = a(75110),
                b = a(62938),
                S = a(62797),
                k = a(77925),
                N = a(38282),
                E = a(52301),
                R = a(85869),
                D = a(29808),
                P = a(6379),
                T = a(58111),
                I = a(96945),
                z = a(53818),
                O = a(65946);
            let M = e => {
                var t, a, n;
                let {
                    isOpen: r,
                    roomStay: d,
                    hotel: p,
                    checkIn: f,
                    checkOut: M,
                    roomStayHasExtras: H,
                    totalRooms: A,
                    currentRoomPosition: W,
                    isEditable: L
                } = e, {
                    trans: U
                } = (0, h.m)(["new-reservation", "common"]), {
                    showModal: Y
                } = (0, c.hS)(P.s), {
                    showModal: B,
                    removeModal: F
                } = (0, c.hS)(I.M), {
                    navigate: q
                } = (0, z.Z)(), {
                    currentStep: G,
                    isPersonalDataStep: K
                } = (0, u.l)(), {
                    marketPrice: Z
                } = (0, D.At)(), {
                    isMobileOrTablet: J
                } = (0, N.Q)(), {
                    variant: X,
                    quantity: $
                } = (e => {
                    let t = e.room.name,
                        {
                            performMutation: a
                        } = (0, b.w)("getReservationRoomInventory-".concat(t), w.k.resolve("getReservationRoomInventory")),
                        s = a(t);
                    return (0, C.C)(e.room.id, s)
                })(d), V = (0, R.q)(d), Q = null == p || null == (t = p.USPCampaigns) ? void 0 : t[V], ee = d.rate.hasUSPCampaign && (0, m.O9)(Q), et = "none" !== X, ea = d.rate.isApp && J, es = d.rate.isMobile && J, en = ee || ea || es || et, er = ((e, t, a) => 0 === t ? a("".concat(g, "_adults"), {
                    adults: e
                }) : a("".concat(g, "_adults-children"), {
                    adults: e,
                    children: t
                }))(d.occupancy.adults, d.occupancy.children, U), eo = d.rate.mealPlan.name, ei = d.rate.nightly, el = d.rate.total, ec = null == (a = d.savings) ? void 0 : a.reference, e_ = (0, m.O9)(ec) && el.netPrice.value !== ec.netPrice.value && el.grossPrice.value !== ec.grossPrice.value;
                return (0, s.jsxs)("div", {
                    "data-target-room-gross-price": el.grossPrice.value,
                    "data-target-room-net-price": null == (n = el.netPrice) ? void 0 : n.value,
                    "data-target-room-currency": el.grossPrice.currency,
                    children: [r && (0, s.jsxs)(s.Fragment, {
                        children: [en && (0, s.jsxs)(i.s, {
                            gap: "xs",
                            wrap: "wrap",
                            className: "mb-s",
                            children: [et && (0, s.jsx)(S.K, {
                                className: y().acceleratorTag,
                                variant: X,
                                quantity: $
                            }), ee && (0, s.jsx)(E.b, {
                                USPCampaign: Q,
                                checkIn: f,
                                checkOut: M
                            }), ea && (0, s.jsx)(k.vw, {
                                variant: "bold",
                                className: y().appTag,
                                children: (0, s.jsx)(o.E, {
                                    fontStyle: "xxs-700",
                                    color: "app",
                                    uppercase: !0,
                                    children: U("new-reservation:available-rooms_app-tag_title")
                                })
                            }), es && (0, s.jsx)(k.vw, {
                                variant: "light",
                                children: (0, s.jsx)(i.s, {
                                    alignItems: "center",
                                    gap: "xs",
                                    children: (0, s.jsx)(o.E, {
                                        fontStyle: "xxs-700",
                                        color: "unset",
                                        uppercase: !0,
                                        children: U("common:cart_summary_mobile-exclusive-rate_v2")
                                    })
                                })
                            })]
                        }), (0, s.jsx)(o.E, {
                            as: "p",
                            fontStyle: "m-500",
                            className: "mb-s",
                            children: eo
                        }), (0, s.jsx)("div", {
                            className: "mb-s",
                            children: (0, s.jsx)(v.p, {
                                guarantee: d.guarantee,
                                cancellation: d.cancellation,
                                fontStyle: "m-500",
                                timeline: "before-reservation"
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, l.x)(r && "mb-s"),
                        children: [(0, s.jsxs)(i.s, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "s",
                            children: [(0, s.jsx)(o.E, {
                                fontStyle: "m-700",
                                color: "dark",
                                children: er
                            }), (0, s.jsxs)(i.s, {
                                gap: "xxs",
                                children: [e_ && (0, s.jsx)(O.d, {
                                    "data-testid": "cart_previous_total-price",
                                    ariaLabel: U("available-rooms_previous-price"),
                                    strikeTextSize: "m",
                                    grossPrice: ec.grossPrice,
                                    netPrice: ec.netPrice
                                }), (0, s.jsx)(x.g, {
                                    netPrice: el.netPrice,
                                    grossPrice: el.grossPrice,
                                    fontStyle: "m"
                                })]
                            })]
                        }), (0, s.jsx)(i.s, {
                            justifyContent: "flex-end",
                            className: "mt-xxs",
                            children: (null == Z ? void 0 : Z.netPrices) && (0, s.jsx)(o.E, {
                                fontStyle: "xs-500",
                                children: U("common:cart_net-taxes")
                            })
                        })]
                    }), r && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(i.s, {
                            direction: "column",
                            as: "ul",
                            gap: "xxs",
                            children: ei.map((e, t) => (0, s.jsx)("li", {
                                className: "w-full",
                                children: (0, s.jsxs)(i.s, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "s",
                                    children: [(0, s.jsx)(o.E, {
                                        fontStyle: "s-300",
                                        color: "dark",
                                        children: j.D.formatDateToLocale(e.date, "long", "short")
                                    }), (0, s.jsx)(x.g, {
                                        netPrice: e.base,
                                        grossPrice: e.total,
                                        fontStyle: "s",
                                        fontWeight: "regular"
                                    })]
                                })
                            }, t))
                        }), (0, s.jsx)(i.s, {
                            justifyContent: "flex-end",
                            className: "mt-xs mb-xs",
                            children: (0, s.jsx)(o.E, {
                                as: "p",
                                fontStyle: "s-300",
                                color: "mid",
                                children: U("common:cart_room-details_remaks")
                            })
                        }), (L || K) && (0, s.jsxs)(i.s, {
                            justifyContent: "flex-start",
                            gap: "s",
                            alignItems: "center",
                            className: "mt-m",
                            children: [L && K && (0, s.jsx)(k.Wk, {
                                "data-quantum-user-action": "edit-room-step".concat(G),
                                "data-testid": "edit-room",
                                pathname: T.J.availability,
                                onBeforeNavigate: H ? e => {
                                    e.preventDefault(), B({
                                        onClose: F,
                                        onContinue: async () => {
                                            F(), await q.toAvailability()
                                        }
                                    })
                                } : void 0,
                                text: U("new-reservation:your-stay_edit"),
                                variant: "inlineLink",
                                fontStyle: "m-500",
                                routerParam: A > 1 ? {
                                    key: "roomStay",
                                    value: String(W - 1)
                                } : void 0
                            }), K && (0, s.jsx)(_.v, {
                                onClick: () => {
                                    Y({
                                        reservedRoomPolicyDetails: {
                                            guarantee: d.guarantee,
                                            cancellation: d.cancellation
                                        }
                                    })
                                },
                                children: (0, s.jsx)(o.E, {
                                    fontStyle: "m-500",
                                    color: "button-secondary",
                                    children: U("common:cart_view-conditions")
                                })
                            })]
                        })]
                    })]
                })
            };
            var H = a(75918),
                A = a(45962),
                W = a(97815);
            let L = e => {
                let {
                    extra: t,
                    onEditExtra: a,
                    isOpen: n
                } = e, {
                    trans: l
                } = (0, h.m)(["new-reservation", "common"]), {
                    marketPrice: d
                } = (0, D.At)(), {
                    showModal: p,
                    hideModal: g
                } = (0, c.hS)(A.p), {
                    isEditableCart: f
                } = (0, H._$)(), {
                    currentStep: j,
                    isPersonalDataStep: v
                } = (0, u.l)(), {
                    analyticsProcessType: C
                } = (0, W.v1)(), b = async () => {
                    (0, m.b0)(t) || await p({
                        name: t.name,
                        imageUrl: t.imageUrl,
                        description: t.description,
                        onClose: g
                    })
                };
                return (0, s.jsxs)("div", {
                    "data-testid": "extra-container",
                    className: y().extraContainer,
                    children: [(0, s.jsx)(i.s, {
                        alignItems: "stretch",
                        gap: "xs",
                        className: "mb-s w-full",
                        children: (0, s.jsxs)(i.s, {
                            direction: "column",
                            gap: "s",
                            className: "grow self-center",
                            children: [v ? (0, s.jsx)(_.v, {
                                onClick: b,
                                children: (0, s.jsx)(o.E, {
                                    as: "p",
                                    fontStyle: "ml-700",
                                    color: "button-secondary",
                                    children: t.name
                                })
                            }) : (0, s.jsx)(o.E, {
                                as: "p",
                                fontStyle: "ml-700",
                                children: t.name
                            }), n && (0, s.jsxs)("span", {
                                children: [(0, s.jsx)(o.E, {
                                    fontStyle: "m-500",
                                    color: "dark",
                                    children: l("new-reservation:reservation_extras-applied_guarantee-policy")
                                }), " | ", (0, s.jsx)(o.E, {
                                    fontStyle: "m-500",
                                    color: "support-success-dark",
                                    children: l("new-reservation:reservation_extras-applied_cancellation-policy")
                                })]
                            })]
                        })
                    }), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(i.s, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "s",
                            children: [(0, s.jsx)(o.E, {
                                fontStyle: "m-700",
                                color: "dark",
                                children: l("new-reservation:cart_extras_units", {
                                    units: (0, r.K3)(t)
                                })
                            }), (0, s.jsx)(x.g, {
                                netPrice: t.summary.netPrice,
                                grossPrice: t.summary.grossPrice,
                                fontStyle: "m"
                            })]
                        }), (null == d ? void 0 : d.netPrices) && (0, s.jsx)(i.s, {
                            justifyContent: "flex-end",
                            children: (0, s.jsx)(o.E, {
                                fontStyle: "xs-500",
                                children: l("common:cart_net-taxes")
                            })
                        })]
                    }), f && n && (0, s.jsx)(_.v, {
                        onClick: () => {
                            w.k.resolve("analytics").actions.extras.modifyExtraFromCart(t, C), a(t.id)
                        },
                        "data-quantum-user-action": "edit-extras-step".concat(j),
                        className: "mt-m",
                        children: (0, s.jsx)(o.E, {
                            fontStyle: "m-500",
                            color: "button-secondary",
                            children: l("new-reservation:your-stay_edit")
                        })
                    })]
                })
            };
            var U = a(77487),
                Y = a(39126);
            let B = e => {
                    let {
                        hotel: t,
                        roomStays: a,
                        checkIn: n,
                        checkOut: r,
                        onEditExtra: i
                    } = e, {
                        trans: l
                    } = (0, h.m)(["new-reservation"]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(o.E, {
                            as: "h2",
                            fontStyle: "l-700",
                            className: "mb-m",
                            children: l("cart_room-details_title")
                        }), a.map((e, o) => (0, s.jsx)(F, {
                            index: o,
                            hotel: t,
                            roomStays: a,
                            roomStay: e,
                            checkIn: n,
                            checkOut: r,
                            onEditExtra: i,
                            defaultOpen: 0 === o
                        }, o))]
                    })
                },
                F = e => {
                    let {
                        hotel: t,
                        roomStays: a,
                        roomStay: c,
                        index: _,
                        checkIn: d,
                        checkOut: u,
                        onEditExtra: x,
                        defaultOpen: g
                    } = e, {
                        trans: f
                    } = (0, h.m)(["new-reservation"]), {
                        isEditableCart: j
                    } = (0, H._$)(), v = c.extras.filter(r.do), w = a.some(e => e.extras.length > 0), [C, b] = (0, n.useState)(g);
                    return (0, s.jsxs)("div", {
                        className: (0, l.x)(y().container, "w-full "),
                        children: [(0, s.jsxs)(i.s, {
                            justifyContent: "space-between",
                            children: [(0, s.jsx)(p, {
                                totalRooms: a.length,
                                roomName: c.room.name,
                                hotel: t,
                                roomStay: c
                            }), (0, s.jsx)("button", {
                                className: y().toggleButton,
                                onClick: () => b(!C),
                                "data-testid": "toggle-room-details-button-".concat(_),
                                "aria-label": f(C ? "cart_room-details_toggle-button_hide-label" : "cart_room-details_toggle-button_show-label"),
                                "aria-expanded": C,
                                children: (0, s.jsx)(Y.I, {
                                    icon: U.z,
                                    size: "s",
                                    color: "bg-light",
                                    rotate: C ? 270 : 90,
                                    className: y().toogleIcon
                                })
                            })]
                        }), (0, s.jsx)(M, {
                            isOpen: C,
                            roomStay: c,
                            hotel: t,
                            checkIn: d,
                            checkOut: u,
                            roomStayHasExtras: w,
                            totalRooms: a.length,
                            currentRoomPosition: _ + 1,
                            isEditable: j
                        }), !(0, m.Im)(v) && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(k.cG, {
                                dir: "horizontal",
                                className: "mb-l mt-l"
                            }), (0, s.jsx)(o.E, {
                                as: "h3",
                                fontStyle: "s-500-caps",
                                className: "mb-m",
                                children: f("cart_room-details_included-extras-title")
                            }), v.map(e => (0, s.jsx)(L, {
                                extra: e,
                                onEditExtra: x,
                                isOpen: C
                            }, e.id))]
                        })]
                    })
                }
        },
        28707: (e, t, a) => {
            "use strict";
            a.d(t, {
                j: () => l
            });
            var s = a(37876),
                n = a(24463),
                r = a(95908),
                o = a(72668),
                i = a(54704);
            let l = e => {
                let {
                    cart: t
                } = e, {
                    trans: a
                } = (0, i.m)(["new-reservation"]), l = (0, r.Iw)(t);
                if ((0, o.b0)(l)) return null;
                let c = (0, o.O9)(l.deadline) ? a("new-reservation:safe-reservation_with-deadline", {
                    deadlineHour: l.deadline.format("HH:mm").toString(),
                    deadlineDay: l.deadline.format("D MMMM").toString(),
                    deadlineYear: l.deadline.format("YYYY").toString(),
                    hotelUTC: l.hotelUTC
                }) : a("new-reservation:safe-reservation_without-deadline");
                return (0, s.jsx)(n.M, {
                    type: "success",
                    text: c
                })
            }
        },
        29929: e => {
            e.exports = {
                "w-full": "CartDesktop_w-full__1_3Jj",
                "w-fit": "CartDesktop_w-fit__PFLWT",
                "w-5/12": "CartDesktop_w-5__12__T9jgN",
                "w-7/12": "CartDesktop_w-7__12__HDgxa",
                "h-full": "CartDesktop_h-full__htkp2",
                flex: "CartDesktop_flex__0_JVf",
                grow: "CartDesktop_grow__6nhHS",
                "flex-1": "CartDesktop_flex-1__PrmCZ",
                "shrink-0": "CartDesktop_shrink-0__QZeer",
                "self-center": "CartDesktop_self-center__SfXKt",
                "self-end": "CartDesktop_self-end__m6bn5",
                "items-center": "CartDesktop_items-center__5UiD1",
                "justify-center": "CartDesktop_justify-center__lg_Dy",
                "gap-xs": "CartDesktop_gap-xs__NaW7N",
                "cursor-pointer": "CartDesktop_cursor-pointer__Vc0Tu",
                "touch-security-zone": "CartDesktop_touch-security-zone__misU4",
                "touch-security-zone-always": "CartDesktop_touch-security-zone-always__BqR9C",
                container: "CartDesktop_container__65Dc8"
            }
        },
        33789: e => {
            e.exports = {
                container: "ExtrasInfoModal_container__O8QXi",
                imageContainer: "ExtrasInfoModal_imageContainer__ZIPhb",
                image: "ExtrasInfoModal_image__KBGTK"
            }
        },
        35714: (e, t, a) => {
            "use strict";
            a.d(t, {
                $: () => v
            });
            var s = a(37876),
                n = a(8869),
                r = a.n(n);
            a(14232);
            var o = a(12809),
                i = a(77925),
                l = a(12585),
                c = a(54704),
                _ = a(35004),
                m = a(43239),
                d = a(77487),
                u = a(84640),
                p = a(34155),
                x = a(72668),
                h = a(84703),
                g = a(88523),
                f = a(24463),
                y = a(83188),
                j = a(38251);
            let v = e => {
                    let {
                        cart: t,
                        couponsMetadata: a,
                        onOpenEditor: n,
                        hasCardStyle: o = !1,
                        hasTitle: v = !1
                    } = e, {
                        trans: C
                    } = (0, c.m)(["common", "new-reservation"]), b = (0, h.QD)(), {
                        isPaymentStep: S
                    } = (0, j.l)(), k = b.properties.isRTL, {
                        appliedGroupCoupon: N,
                        hasToShowHotelPromotion: E,
                        hasCampaignDiscount: R,
                        mainCampaign: D,
                        hasGroupCouponApplied: P,
                        hasMyBarceloRateSelected: T,
                        hasPrepayRates: I,
                        hasAppRateSelected: z,
                        hasPromotionalCouponsApplied: O,
                        hasPromotionalOrLevelDiscount: M,
                        hasNonCouponDiscountsApplied: H,
                        hasApplicableDiscounts: A,
                        couponsText: W,
                        cartSavings: L
                    } = (0, y.F)({
                        cart: t,
                        couponsMetadata: a
                    }), U = () => P || O ? C("new-reservation:choose-payment_coupons-summary_edit") : H ? C("new-reservation:cart_add-other-discounts_button-link") : C("new-reservation:cart_add-discounts_button-link"), Y = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(_.s, {
                            direction: "column",
                            className: "mb-xs",
                            gap: "xs",
                            children: [E ? R ? (0, s.jsx)(w, {
                                discount: "".concat(C("new-reservation:coupons-summary_campaign_title"), " ").concat(null == D ? void 0 : D.title),
                                isRTL: k
                            }) : (0, s.jsx)(w, {
                                discount: C("new-reservation:available-rooms_pay-now_latam_discount"),
                                isRTL: k
                            }) : null, T && (0, s.jsx)(w, {
                                discount: C("new-reservation:available-rooms_rate-switch_myBarcelo_discount"),
                                isRTL: k
                            }), I && (0, s.jsx)(w, {
                                discount: C("new-reservation:available-rooms_pay-now_discount"),
                                isRTL: k
                            }), z && (0, s.jsx)(w, {
                                discount: C("new-reservation:coupons-summary_app-rate_title"),
                                isRTL: k
                            }), P && (0, x.O9)(N) && (0, s.jsx)(w, {
                                discount: N,
                                isRTL: k
                            }), M && L && (0, s.jsx)(w, {
                                discount: W,
                                isRTL: k
                            })]
                        }), (0, x.O9)(L) && (0, s.jsx)(f.M, {
                            type: "success",
                            className: "mb-m",
                            text: (0, s.jsx)(g.H, {
                                i18nKey: "new-reservation:reservation_discounts_alert-current-total-savings",
                                components: {
                                    price: (0, s.jsx)(l.g, {
                                        fontStyle: "s",
                                        fontWeight: "bold",
                                        color: "support-success-dark",
                                        netPrice: L.netDiscount,
                                        grossPrice: L.grossDiscount
                                    })
                                }
                            })
                        })]
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [v && (0, s.jsx)(i.EY, {
                            as: "h2",
                            fontStyle: "l-700",
                            className: "mb-m",
                            children: C("new-reservation:reservation_discounts-applied")
                        }), (0, s.jsxs)("div", {
                            className: o ? r().container : "",
                            children: [(H || A || S) && (0, s.jsx)("button", {
                                className: (0, u.x)(r().discountsWrapper, S && "cursor-pointer", S && "touch-security-zone", "h-full"),
                                "aria-label": C("new-reservation:reservation_discounts-applied_v2"),
                                onClick: n,
                                children: (0, s.jsxs)(_.s, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "xl",
                                    className: "h-full touch-security-zone-always",
                                    children: [(0, s.jsx)(_.s, {
                                        alignItems: "baseline",
                                        gap: "xs",
                                        children: (0, s.jsx)(i.EY, {
                                            as: "h3",
                                            fontStyle: "s-500",
                                            color: "mid",
                                            uppercase: !0,
                                            children: C("new-reservation:reservation_discounts-applied_v2")
                                        })
                                    }), S && (0, s.jsx)(m.I, {
                                        className: r().icon,
                                        flipHorizontally: k,
                                        size: "s",
                                        icon: d.A,
                                        color: "bg-white"
                                    })]
                                })
                            }), A && Y, S && (0, s.jsx)(p.v, {
                                "aria-label": U(),
                                onClick: n,
                                "data-testid": "edit-coupons-button-link",
                                className: "cursor-pointer touch-security-zone-always mb-xs",
                                children: U()
                            })]
                        })]
                    })
                },
                w = e => {
                    let {
                        discount: t,
                        isRTL: a = !1
                    } = e, {
                        trans: n
                    } = (0, c.m)(["new-reservation"]);
                    return (0, s.jsxs)(_.s, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        className: "w-full",
                        children: [(0, s.jsx)(i.EY, {
                            fontStyle: "s-500",
                            children: t
                        }), (0, s.jsxs)(_.s, {
                            direction: "row",
                            gap: "xxs",
                            alignItems: "center",
                            children: [(0, s.jsx)(i.EY, {
                                fontStyle: "s-500",
                                color: "support-success-dark",
                                children: n("new-reservation:reservation_discounts_applied")
                            }), (0, s.jsx)(m.I, {
                                flipHorizontally: a,
                                icon: o.B,
                                size: "s"
                            })]
                        })]
                    })
                }
        },
        36011: e => {
            e.exports = {
                "w-full": "CartMobile_w-full___TLUw",
                "w-fit": "CartMobile_w-fit__b_okr",
                "w-5/12": "CartMobile_w-5__12__GJe4a",
                "w-7/12": "CartMobile_w-7__12__YQmw7",
                "h-full": "CartMobile_h-full__7_MTM",
                flex: "CartMobile_flex__nnY8k",
                grow: "CartMobile_grow__5kco9",
                "flex-1": "CartMobile_flex-1__70YGV",
                "shrink-0": "CartMobile_shrink-0__ITTyU",
                "self-center": "CartMobile_self-center__x47e2",
                "self-end": "CartMobile_self-end__ubzMu",
                "items-center": "CartMobile_items-center__xe6LP",
                "justify-center": "CartMobile_justify-center__bxwy1",
                "gap-xs": "CartMobile_gap-xs__EtUEA",
                "cursor-pointer": "CartMobile_cursor-pointer__mhJcv",
                "touch-security-zone": "CartMobile_touch-security-zone__7KEZQ",
                "touch-security-zone-always": "CartMobile_touch-security-zone-always__eF_px",
                container: "CartMobile_container__wDKGC",
                headerContainer: "CartMobile_headerContainer__PqC_4",
                leftColumn: "CartMobile_leftColumn__94myL",
                lineData: "CartMobile_lineData__Xgqim",
                date: "CartMobile_date__Hgfuc",
                rightColumn: "CartMobile_rightColumn__5xcXm",
                viewDetailsButton: "CartMobile_viewDetailsButton__XPwtW",
                bodyContainer: "CartMobile_bodyContainer__pYae8",
                isOpened: "CartMobile_isOpened__Pekxh",
                iconWrapper: "CartMobile_iconWrapper__ipHWW",
                cartContentHeader: "CartMobile_cartContentHeader__Sc1cS",
                buttonFooter: "CartMobile_buttonFooter__9SjZd"
            }
        },
        37372: (e, t, a) => {
            "use strict";
            a.d(t, {
                z: () => s
            });
            let s = e => {
                let [t, a] = e.split(".");
                return Number(a) > 0 ? e : t
            }
        },
        38653: (e, t, a) => {
            "use strict";
            a.d(t, {
                Bw: () => l,
                rr: () => i
            });
            var s = a(37876),
                n = a(14232),
                r = a(85992);
            let o = (0, n.createContext)({
                    isCartOpen: !1,
                    showNotification: !0,
                    showCart: () => null,
                    hideCart: () => null,
                    toggleCart: () => null,
                    shouldShowCartElements: !0,
                    hideCartElements: () => null
                }),
                i = e => {
                    let {
                        children: t
                    } = e, [a, i] = (0, n.useState)(!1), [l, c] = (0, n.useState)(!1), {
                        lockBodyScroll: _,
                        releaseBodyScroll: m
                    } = (0, r._)(), d = () => {
                        m(), i(!1)
                    };
                    return (0, n.useEffect)(() => d, []), (0, s.jsx)(o.Provider, {
                        value: {
                            isCartOpen: a,
                            showCart: () => {
                                c(!0), window.setTimeout(() => {
                                    _(), i(!0)
                                }, 0)
                            },
                            hideCart: d,
                            toggleCart: () => {
                                i(e => {
                                    let t = !e;
                                    return t ? _() : m(), t
                                })
                            },
                            shouldShowCartElements: l,
                            hideCartElements: () => {
                                a || window.setTimeout(() => c(!1), 0)
                            }
                        },
                        children: t
                    })
                },
                l = () => (0, n.useContext)(o)
        },
        39588: e => {
            e.exports = {
                "w-full": "CheckoutLayout_w-full__nC1fq",
                "w-fit": "CheckoutLayout_w-fit__kmBv1",
                "w-5/12": "CheckoutLayout_w-5__12__932pf",
                "w-7/12": "CheckoutLayout_w-7__12__S7Dvt",
                "h-full": "CheckoutLayout_h-full__zbYEF",
                flex: "CheckoutLayout_flex__HazRy",
                grow: "CheckoutLayout_grow__s8jAp",
                "flex-1": "CheckoutLayout_flex-1__yJq9d",
                "shrink-0": "CheckoutLayout_shrink-0__MSigS",
                "self-center": "CheckoutLayout_self-center__Idtvy",
                "self-end": "CheckoutLayout_self-end__j5rBp",
                "items-center": "CheckoutLayout_items-center__2NTWn",
                "justify-center": "CheckoutLayout_justify-center__QpA0M",
                "gap-xs": "CheckoutLayout_gap-xs__NRT6P",
                "cursor-pointer": "CheckoutLayout_cursor-pointer__kZvgy",
                "touch-security-zone": "CheckoutLayout_touch-security-zone___QCIi",
                "touch-security-zone-always": "CheckoutLayout_touch-security-zone-always__AZCZm",
                container: "CheckoutLayout_container__HPabA",
                bookingStepperWrapper: "CheckoutLayout_bookingStepperWrapper__azIIN",
                bookingStepperMobileWrapper: "CheckoutLayout_bookingStepperMobileWrapper__t3I1H",
                contentWrapper: "CheckoutLayout_contentWrapper__ag3T8",
                hasProgressBarStepper: "CheckoutLayout_hasProgressBarStepper__WaTtZ",
                progressBarStepperWrapper: "CheckoutLayout_progressBarStepperWrapper__Gx_rk",
                innerContentWrapper: "CheckoutLayout_innerContentWrapper__HyI0F",
                asideWrapper: "CheckoutLayout_asideWrapper__yM09p"
            }
        },
        41889: (e, t, a) => {
            "use strict";
            a.d(t, {
                c: () => o
            });
            var s = a(37876);
            a(14232);
            var n = a(56365),
                r = a.n(n);
            let o = () => (0, s.jsx)("div", {
                className: r().divider
            })
        },
        45151: e => {
            e.exports = {
                "w-full": "RoomsSummary_w-full__Hq3_r",
                "w-fit": "RoomsSummary_w-fit__bhe9Y",
                "w-5/12": "RoomsSummary_w-5__12__cjx5T",
                "w-7/12": "RoomsSummary_w-7__12___Cqar",
                "h-full": "RoomsSummary_h-full__5Uilk",
                flex: "RoomsSummary_flex__IBi95",
                grow: "RoomsSummary_grow__OaHCP",
                "flex-1": "RoomsSummary_flex-1__lhfRX",
                "shrink-0": "RoomsSummary_shrink-0__funuE",
                "self-center": "RoomsSummary_self-center__3vTSK",
                "self-end": "RoomsSummary_self-end__VerCR",
                "items-center": "RoomsSummary_items-center__szy0W",
                "justify-center": "RoomsSummary_justify-center__zJtOG",
                "gap-xs": "RoomsSummary_gap-xs__8OoXw",
                "cursor-pointer": "RoomsSummary_cursor-pointer__gv6Nt",
                "touch-security-zone": "RoomsSummary_touch-security-zone__dYRJT",
                "touch-security-zone-always": "RoomsSummary_touch-security-zone-always__TT_ku",
                container: "RoomsSummary_container__gwG_h",
                acceleratorTag: "RoomsSummary_acceleratorTag__GOSPU",
                imageWrapper: "RoomsSummary_imageWrapper__gRUtB",
                toggleButton: "RoomsSummary_toggleButton__03PbW",
                toogleIcon: "RoomsSummary_toogleIcon__QAwmo",
                appTag: "RoomsSummary_appTag__nobdm",
                extraContainer: "RoomsSummary_extraContainer__FnhAe"
            }
        },
        45962: (e, t, a) => {
            "use strict";
            a.d(t, {
                p: () => m
            });
            var s = a(37876),
                n = a(33789),
                r = a.n(n),
                o = a(77925),
                i = a(36271),
                l = a(91199),
                c = a(54704),
                _ = a(8657);
            let m = (0, i.mP)(e => {
                let {
                    name: t,
                    description: a,
                    onClose: n,
                    imageUrl: i
                } = e, {
                    trans: m
                } = (0, c.m)(["new-reservation"]);
                return (0, s.jsx)(o.aF, {
                    size: "l",
                    onClose: n,
                    ariaLabel: m("extras-modal_aria-label"),
                    title: t,
                    withButtons: !1,
                    "data-quantum-modal": "PerUnitExtrasModal",
                    children: (0, s.jsxs)("div", {
                        className: r().container,
                        tabIndex: -1,
                        role: "article",
                        children: [(0, s.jsx)("div", {
                            className: r().imageContainer,
                            children: (0, s.jsx)(_.q, {
                                className: r().image,
                                alt: t,
                                src: i,
                                fill: !0,
                                priority: !0,
                                sizes: "(max-width: ".concat(l.L.mobile.max, "px) 100vw, (max-width: ").concat(l.L.tablet.max, "px) 67vw, 500px"),
                                quality: 75
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(o.oz, {
                                content: a
                            })
                        })]
                    })
                })
            })
        },
        52301: (e, t, a) => {
            "use strict";
            a.d(t, {
                b: () => g
            });
            var s = a(37876);
            a(14232);
            var n = a(59171),
                r = a.n(n),
                o = a(77925),
                i = a(84640),
                l = a(39098),
                c = a(43239),
                _ = a(35004),
                m = a(34127),
                d = a(665),
                u = a(57691),
                p = a(72668),
                x = a(61810),
                h = a(54704);
            let g = e => {
                let {
                    USPCampaign: t,
                    withTooltip: a = !0,
                    withDescription: n = !1,
                    className: g,
                    checkIn: f,
                    checkOut: y
                } = e, {
                    trans: j
                } = (0, h.m)(["new-reservation"]), v = (0, u.Y)(x.g.fromDate(f).startOf("day"), x.g.fromDate(y).startOf("day")), w = (0, d.b)(t, v);
                return (0, p.b0)(w) ? null : (0, s.jsxs)(_.s, {
                    direction: "column",
                    gap: n ? "xs" : void 0,
                    children: [(0, s.jsxs)("div", {
                        className: r().wrapper,
                        children: [n && (0, s.jsx)(o.EY, {
                            fontStyle: "m-700",
                            color: "dark",
                            children: j("cart_value-add_added")
                        }), (0, s.jsx)(_.s, {
                            className: (0, i.x)(r().container, g, "w-full"),
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: (0, s.jsxs)(_.s, {
                                alignItems: "center",
                                gap: "xs",
                                children: [(0, s.jsx)(o.EY, {
                                    fontStyle: "xs-500",
                                    color: "light",
                                    uppercase: !0,
                                    as: "p",
                                    children: t.title
                                }), (0, s.jsx)(_.s, {
                                    alignItems: "center",
                                    gap: "xxs",
                                    justifyContent: "center",
                                    children: (0, s.jsx)(o.EY, {
                                        fontStyle: "xs-500",
                                        color: "light",
                                        children: w.nightLabel
                                    })
                                }), a && (0, s.jsx)(m.m, {
                                    placement: "top-end",
                                    triggerElement: (0, s.jsx)(c.I, {
                                        icon: l.A,
                                        size: "m",
                                        color: "icon-light",
                                        className: "cursor-pointer"
                                    }),
                                    tooltipWrapperClassName: r().tooltip,
                                    tooltipContent: (0, s.jsxs)(_.s, {
                                        direction: "column",
                                        gap: "xs",
                                        children: [(0, s.jsx)(o.EY, {
                                            fontStyle: "m-700",
                                            color: "light",
                                            className: "mb-xs",
                                            children: t.title
                                        }), (0, s.jsx)(o.EY, {
                                            fontStyle: "m-300",
                                            color: "light",
                                            children: w.benefits
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), n && (0, s.jsx)(o.EY, {
                        fontStyle: "m-300",
                        children: w.benefits
                    })]
                })
            }
        },
        55673: (e, t, a) => {
            "use strict";
            a.d(t, {
                t: () => m
            });
            var s = a(37876),
                n = a(60055),
                r = a.n(n),
                o = a(72668),
                i = a(63183),
                l = a(91199),
                c = a(77925),
                _ = a(38282);
            let m = e => {
                    let {
                        hotel: t,
                        hasToShowHotelImage: a = !0
                    } = e, {
                        isMobileOrTablet: n
                    } = (0, _.Q)();
                    return (0, o.b0)(t) ? (0, s.jsx)(d, {}) : (0, s.jsxs)("div", {
                        className: r().container,
                        children: [a && (0, s.jsx)("div", {
                            className: r().imageWrapper,
                            children: (0, s.jsx)(i._, {
                                alt: t.name,
                                src: t.image,
                                fill: !0,
                                priority: !0,
                                sizes: "(max-width: ".concat(l.L.tablet.max, "px) 128px,  400px"),
                                quality: 90
                            })
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)(c.EY, {
                                as: "h3",
                                fontStyle: n ? "ml-700" : "l-700",
                                children: t.name
                            }), !(0, o.Im)(t.destination) && (0, s.jsx)(c.EY, {
                                as: "p",
                                fontStyle: n ? "s-500" : "m-500",
                                className: "mt-xs",
                                children: t.destination
                            })]
                        })]
                    })
                },
                d = () => (0, s.jsxs)("div", {
                    className: r().container,
                    children: [(0, s.jsx)("div", {
                        className: r().imageWrapper,
                        children: (0, s.jsx)(c.EA, {
                            height: "100%"
                        })
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(c.EA, {
                            height: 16,
                            width: 250
                        }), (0, s.jsx)(c.EA, {
                            height: 14,
                            width: 150
                        })]
                    })]
                })
        },
        56365: e => {
            e.exports = {
                divider: "Divider_divider__VHap7"
            }
        },
        59171: e => {
            e.exports = {
                "w-full": "USPCampaignInfoTag_w-full__BkYgx",
                "w-fit": "USPCampaignInfoTag_w-fit__ihlkM",
                "w-5/12": "USPCampaignInfoTag_w-5__12__nynqf",
                "w-7/12": "USPCampaignInfoTag_w-7__12__EKHUJ",
                "h-full": "USPCampaignInfoTag_h-full__IosOT",
                flex: "USPCampaignInfoTag_flex__HPxU8",
                grow: "USPCampaignInfoTag_grow__AiHzI",
                "flex-1": "USPCampaignInfoTag_flex-1__zSYRq",
                "shrink-0": "USPCampaignInfoTag_shrink-0__LrNmu",
                "self-center": "USPCampaignInfoTag_self-center__GIjRn",
                "self-end": "USPCampaignInfoTag_self-end__NWe_x",
                "items-center": "USPCampaignInfoTag_items-center__L8hzy",
                "justify-center": "USPCampaignInfoTag_justify-center__aSAnk",
                "gap-xs": "USPCampaignInfoTag_gap-xs__Qtml6",
                "cursor-pointer": "USPCampaignInfoTag_cursor-pointer__G48Pd",
                "touch-security-zone": "USPCampaignInfoTag_touch-security-zone__tz2Xv",
                "touch-security-zone-always": "USPCampaignInfoTag_touch-security-zone-always__iBdwR",
                container: "USPCampaignInfoTag_container__s15pT",
                wrapper: "USPCampaignInfoTag_wrapper__AeQuC",
                tooltip: "USPCampaignInfoTag_tooltip__H1wYW"
            }
        },
        60055: e => {
            e.exports = {
                "w-full": "HotelDetails_w-full__YX2qp",
                "w-fit": "HotelDetails_w-fit__yc5ex",
                "w-5/12": "HotelDetails_w-5__12__w8I14",
                "w-7/12": "HotelDetails_w-7__12__qrKWL",
                "h-full": "HotelDetails_h-full___V6Sb",
                flex: "HotelDetails_flex__kyeuT",
                grow: "HotelDetails_grow__2Nbko",
                "flex-1": "HotelDetails_flex-1__N17_z",
                "shrink-0": "HotelDetails_shrink-0__9RWAm",
                "self-center": "HotelDetails_self-center__EECT0",
                "self-end": "HotelDetails_self-end__Uf6mU",
                "items-center": "HotelDetails_items-center__KyJKd",
                "justify-center": "HotelDetails_justify-center___I0vU",
                "gap-xs": "HotelDetails_gap-xs__q1tqj",
                "cursor-pointer": "HotelDetails_cursor-pointer__Wf0ra",
                "touch-security-zone": "HotelDetails_touch-security-zone__n0JZ6",
                "touch-security-zone-always": "HotelDetails_touch-security-zone-always__0AP2a",
                container: "HotelDetails_container__T7WaT",
                imageWrapper: "HotelDetails_imageWrapper__W4ch1"
            }
        },
        65056: (e, t, a) => {
            "use strict";
            a.d(t, {
                t: () => eY
            });
            var s = a(37876),
                n = a(31251),
                r = a(82802),
                o = a(41090);
            let i = {
                getRatePairs: (0, n.l8)(e => {
                    let {
                        ratePairStorageRepository: t
                    } = e;
                    return () => t.get()
                }),
                getCartWhenIsDifferent: (0, n.l8)(o.A),
                updateCommercialCommunications: (0, n.l8)(e => {
                    let {
                        contactRepository: t
                    } = e;
                    return async (e, a, s, n) => await t.updateCommercialCommunications(e, a, s, n)
                }),
                getCommercialCommunications: (0, n.l8)(e => {
                    let {
                        contactRepository: t
                    } = e;
                    return async e => await t.getCommercialCommunications(e)
                }),
                getReservationRoomInventory: (0, n.l8)(e => {
                    let {
                        roomsInventoryRepository: t
                    } = e;
                    return e => {
                        var a;
                        return null != (a = t.get()[e]) ? a : 1 / 0
                    }
                })
            };
            r.k.register(i);
            var l = a(77328),
                c = a.n(l),
                _ = a(53818),
                m = a(54704),
                d = a(58111),
                u = a(31212),
                p = a(84640),
                x = a(36579),
                h = a(39588),
                g = a.n(h),
                f = a(25379),
                y = a.n(f),
                j = a(72668),
                v = a(75918);
            let w = e => e.roomStays.reduce((e, t) => ({
                adults: [...e.adults, t.occupancy.adults],
                children: [...e.children, t.occupancy.children],
                childrenAges: [...e.childrenAges, t.occupancy.childrenAges]
            }), {
                adults: [],
                children: [],
                childrenAges: []
            });
            var C = a(75877),
                b = a(8995),
                S = a(36271),
                k = a(38653),
                N = a(36011),
                E = a.n(N),
                R = a(259),
                D = a(14232),
                P = a(77925),
                T = a(12585),
                I = a(43239),
                z = a(77487),
                O = a(95908),
                M = a(90671),
                H = a(83151),
                A = a(96693),
                W = a.n(A),
                L = a(11207),
                U = a(25187),
                Y = a(91363),
                B = a.n(Y),
                F = a(35004),
                q = a(24463),
                G = a(35714),
                K = a(17),
                Z = a(61417),
                J = a(77159),
                X = a(34127),
                $ = a(39098),
                V = a(76251),
                Q = a(3983),
                ee = a(65381),
                et = a(61810),
                ea = a(27306),
                es = a(33519),
                en = a(14022);
            let er = e => {
                    let {
                        cart: t,
                        guaranteeType: a,
                        couponsMetadata: n
                    } = e, {
                        trans: o
                    } = (0, m.m)(["common", "new-reservation"]), i = (0, es.z)(t), l = (0, ea.l)(t.roomStays);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(P.EY, {
                            as: "p",
                            fontStyle: "l-700",
                            className: "mb-m",
                            children: o("new-reservation:cart_price-summary_title")
                        }), (0, s.jsxs)("div", {
                            className: B().container,
                            children: [(0, s.jsx)(G.$, {
                                cart: t,
                                couponsMetadata: n,
                                onOpenEditor: () => {
                                    r.k.resolve("eventsManager").emit(ee.u.OPEN_COUPONS_EDITOR)
                                }
                            }), (0, s.jsx)(K.v, {
                                cart: t
                            }), (0, s.jsxs)("div", {
                                className: (0, p.x)(B().highlightSection, "mt-m"),
                                children: [!l && (0, s.jsx)(eo, {
                                    amount: t.prices.guarantee.deposit,
                                    guaranteeType: a
                                }), (0, s.jsx)(ei, {
                                    amount: t.prices.guarantee.pending,
                                    guaranteeType: a
                                }), !i && l && (0, s.jsx)(el, {
                                    amount: t.prices.guarantee.deposit,
                                    deadline: (0, en.v)(t.roomStays[0])
                                })]
                            }), (0, s.jsx)(e_, {
                                cart: t
                            }), (0, s.jsx)(ec, {})]
                        })]
                    })
                },
                eo = e => {
                    let {
                        amount: t,
                        guaranteeType: a
                    } = e, {
                        trans: n
                    } = (0, m.m)(["common"]);
                    return "all-hotel" === a ? null : (0, s.jsxs)(F.s, {
                        justifyContent: "space-between",
                        gap: "s",
                        alignItems: "center",
                        children: [(0, s.jsx)(P.EY, {
                            fontStyle: "s-700",
                            children: n("cart_summary_all-prepay")
                        }), (0, s.jsx)(T.g, {
                            fontStyle: "m",
                            fontWeight: "mid",
                            grossPrice: t,
                            showAlwaysGross: !0
                        })]
                    })
                },
                ei = e => {
                    let {
                        amount: t,
                        guaranteeType: a
                    } = e, {
                        trans: n
                    } = (0, m.m)(["common"]);
                    return "all-prepay" === a ? null : (0, s.jsxs)(F.s, {
                        justifyContent: "space-between",
                        gap: "s",
                        alignItems: "center",
                        className: "mt-xxs",
                        children: [(0, s.jsx)(P.EY, {
                            fontStyle: "s-500",
                            children: n("cart_summary_all-hotel")
                        }), (0, s.jsx)(T.g, {
                            fontStyle: "m",
                            fontWeight: "mid",
                            grossPrice: t,
                            showAlwaysGross: !0
                        })]
                    })
                },
                el = e => {
                    let {
                        amount: t,
                        deadline: a
                    } = e, {
                        trans: n
                    } = (0, m.m)(["common"]);
                    return (0, s.jsxs)(F.s, {
                        justifyContent: "space-between",
                        gap: "s",
                        alignItems: "center",
                        className: "mt-xs",
                        children: [(0, s.jsx)(P.EY, {
                            fontStyle: "s-500",
                            children: n("cart_summary_days-before-check-in", {
                                day: (0, j.O9)(a) && et.g.fromDate(a).format("DD/MM/YYYY")
                            })
                        }), (0, s.jsx)(T.g, {
                            fontStyle: "m",
                            fontWeight: "mid",
                            grossPrice: t,
                            showAlwaysGross: !0
                        })]
                    })
                },
                ec = () => {
                    let {
                        trans: e
                    } = (0, m.m)(["common"]), t = (0, Z.Y)(), {
                        formatPrice: a
                    } = (0, V.Z)();
                    if ((0, j.b0)(t) || (0, j.b0)(t.cityTax)) return null;
                    let n = "cart_tourist-taxes_indicator-".concat(t.cityTax.indicator);
                    return (0, J.z)(n, e) || (r.k.resolve("logger").warning("Translation not found for " + n), n = void 0), (0, s.jsx)("div", {
                        "data-target-tourist-tax": "container",
                        children: (0, s.jsxs)(F.s, {
                            direction: "column",
                            gap: "xxs",
                            className: "mt-m",
                            children: [(0, s.jsxs)(F.s, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "s",
                                className: "w-full",
                                children: [(0, s.jsxs)(F.s, {
                                    alignItems: "center",
                                    gap: "xxs",
                                    children: [(0, s.jsx)(P.EY, {
                                        fontStyle: "s-500",
                                        children: e("cart_tourist-tax_title")
                                    }), (0, s.jsx)(X.m, {
                                        tooltipContent: e("cart_tourist-tax_tooltip"),
                                        triggerElement: (0, s.jsx)(I.I, {
                                            icon: $.A,
                                            size: "l",
                                            color: "icon-dark"
                                        }),
                                        placement: "top-start",
                                        tooltipWrapperClassName: B().tooltip
                                    })]
                                }), (0, s.jsx)(P.EY, {
                                    fontStyle: "s-500",
                                    "data-target-tourist-tax": "value",
                                    children: (0, Q.m)(t.cityTax, a)
                                })]
                            }), (0, s.jsxs)(F.s, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "s",
                                className: "w-full",
                                children: [(0, s.jsx)(P.EY, {
                                    fontStyle: "xs-300",
                                    "data-target-tourist-tax": "description",
                                    children: e("cart_tourist-taxes_not-included")
                                }), (0, s.jsx)(P.EY, {
                                    fontStyle: "xs-500",
                                    className: B().touristTaxDescription,
                                    children: (0, j.O9)(n) ? e(n) : ""
                                })]
                            })]
                        })
                    })
                },
                e_ = e => {
                    let {
                        cart: t
                    } = e, {
                        trans: a
                    } = (0, m.m)(["new-reservation"]);
                    return t.prices.total.isSameCurrency ? null : (0, s.jsx)(q.M, {
                        type: "info",
                        className: "mt-m",
                        text: a("total_original-value-info", {
                            convertedCurrency: t.prices.total.converted.currency,
                            originalCurrency: t.prices.total.original.currency
                        })
                    })
                };
            var em = a(55673),
                ed = a(41889),
                eu = a(28707),
                ep = a(78416),
                ex = a(5343),
                eh = a(38251);
            let eg = e => {
                var t;
                let {
                    onOccupancyClick: a,
                    onDatesClick: n,
                    onEditExtra: o
                } = e, i = (0, D.useRef)(null), {
                    cart: l
                } = (0, v._$)(), {
                    user: c
                } = (0, ep.Jd)(), _ = (0, Z.Y)(), {
                    isPaymentStep: m
                } = (0, eh.l)(), d = (0, O.gc)(null != (t = null == l ? void 0 : l.roomStays) ? t : []);
                if ((0, D.useEffect)(() => {
                        d.length > 0 && (0, j.O9)(l) && r.k.resolve("logger").warning("Extras no aplicados - El hotel ".concat(l.hotelId, " tiene los siguientes extras que no aplican: ").concat(d.map(e => e.id).join(", ")))
                    }, [l, d, d.length]), (0, j.b0)(l) || (0, j.b0)(_)) return null;
                let u = (0, O.zj)(l),
                    p = (0, L.v1)(l.roomStays, c);
                return (0, s.jsxs)("div", {
                    className: W().container,
                    ref: i,
                    "data-testid": "cart-content",
                    "data-target": "cartContent",
                    children: [(0, s.jsx)("div", {
                        className: "mb-xs",
                        children: (0, s.jsx)(em.t, {
                            hotel: _
                        })
                    }), (0, s.jsx)("div", {
                        className: "mb-m",
                        children: (0, s.jsx)(eu.j, {
                            cart: l
                        })
                    }), (0, s.jsx)(ex.N, {
                        cart: l,
                        onEditOccupancy: a,
                        onEditDates: n,
                        hasToShowReservationHolder: m
                    }), (0, s.jsx)(ed.c, {}), (0, s.jsx)("div", {
                        className: "mb-m",
                        children: (0, s.jsx)(U.r, {
                            hotel: _,
                            roomStays: l.roomStays,
                            checkIn: l.checkIn,
                            checkOut: l.checkOut,
                            onEditExtra: o
                        })
                    }), (0, s.jsx)("div", {
                        "data-target-hotel-currency": l.prices.total.original.currency,
                        "data-target-user-currency": l.prices.total.converted.currency,
                        children: (0, s.jsx)(er, {
                            cart: l,
                            guaranteeType: u,
                            couponsMetadata: p
                        })
                    })]
                })
            };
            var ef = a(28980),
                ey = a(25072),
                ej = a(12291),
                ev = a(27839),
                ew = a(66920),
                eC = a(31715),
                eb = a(2302);
            let eS = e => {
                let {
                    onDatesClick: t,
                    onOccupancyClick: a,
                    onExtraClick: n,
                    onApplyCoupon: r
                } = e, {
                    trans: o
                } = (0, m.m)(["new-reservation"]), {
                    mainCampaign: i
                } = (0, ej.E)(), [l, c] = (0, D.useState)((0, j.O9)(i)), {
                    isPaymentStep: _
                } = (0, eh.l)(), d = (0, D.useRef)(null), x = (0, D.useRef)(null), h = (0, D.useRef)(null), {
                    cart: g,
                    isCartValidating: f
                } = (0, v._$)(), {
                    isCartOpen: y,
                    showCart: w,
                    hideCart: C,
                    shouldShowCartElements: b,
                    hideCartElements: S
                } = (0, k.Bw)(), {
                    currentStep: N
                } = (0, eh.l)(), {
                    variantToShow: A
                } = (0, ev.v_)("EX_CART_REVAMP_MOBILE-mbox-PRO");
                if ((0, D.useEffect)(() => {
                        c((0, j.O9)(i))
                    }, [i]), (0, j.b0)(g) || f) return (0, s.jsx)(u.$, {
                    tablet: !0,
                    mobile: !0,
                    children: (0, s.jsx)("div", {
                        children: (0, s.jsx)(P.EA, {
                            height: 84,
                            width: "100%"
                        })
                    })
                });
                let {
                    adults: W,
                    children: L
                } = (0, O.Cn)(g);
                if ((0, j.b0)(g) || 0 === g.roomStays.length) return null;
                let U = () => {
                        if (y) C(), window.setTimeout(() => {
                            var e;
                            return null == (e = x.current) ? void 0 : e.focus()
                        }, 0);
                        else {
                            var e, t;
                            w(), (0, j.O9)(null == (e = d.current) ? void 0 : e.scrollTo) && (null == (t = d.current) || t.scrollTo(0, 0)), window.setTimeout(() => {
                                var e, t;
                                null == (e = h.current) || e.setAttribute("tabindex", "-1"), null == (t = h.current) || t.focus()
                            }, 0)
                        }
                    },
                    Y = g.checkIn,
                    B = g.checkOut,
                    F = H.D.formatDateRangeToLocaleWithYearAndWeekDay({
                        checkIn: Y,
                        checkOut: B
                    }, "short"),
                    q = (0, eb.o)(g),
                    G = (0, j.O9)(null == i ? void 0 : i.coupon) && (0, j.O9)(q) && q.applies && q.name.toUpperCase() === i.coupon.toUpperCase(),
                    K = N === eC.s.CHOOSE_PAYMENT && (0, j.O9)(null == i ? void 0 : i.coupon) && !G;
                return (0, s.jsxs)(u.$, {
                    mobile: !0,
                    tablet: !0,
                    children: [(0, s.jsxs)("div", {
                        className: E().container,
                        "data-testid": "mobile-cart-container",
                        children: [(G || K) && (0, s.jsx)(ew.z, {
                            isVisible: l,
                            mainCampaign: i,
                            variant: G ? "onlyCoupon" : "default",
                            couponMessageKey: (() => {
                                let e = (0, eb.o)(g),
                                    t = (0, j.O9)(null == i ? void 0 : i.coupon) && (0, j.O9)(e) && e.applies && e.name.toUpperCase() === i.coupon.toUpperCase();
                                switch (N) {
                                    case eC.s.PERSONAL_DATA:
                                        return "new-reservation:personal-data_campaign-ribbon_message";
                                    case eC.s.CHOOSE_PAYMENT:
                                        if (t) return "new-reservation:choose-payment_campaign-ribbon_message_coupon-applied";
                                        return "new-reservation:header_promotional-campaign-ribon_message_v3_mobile";
                                    default:
                                        return "new-reservation:header_promotional-campaign-ribon_message_v3_mobile"
                                }
                            })(),
                            onApplyCoupon: N === eC.s.CHOOSE_PAYMENT ? r : void 0
                        }), ("B" !== A || "B" === A && !_) && (0, s.jsxs)("div", {
                            className: E().headerContainer,
                            onClick: U,
                            children: [(0, s.jsx)("div", {
                                className: E().leftColumn,
                                children: (0, s.jsxs)("ul", {
                                    children: [(0, s.jsx)("li", {
                                        className: (0, p.x)(E().lineData, E().date),
                                        children: F
                                    }), (0, s.jsx)("li", {
                                        className: E().lineData,
                                        children: (0, M.t)({
                                            adultsList: W,
                                            childrenList: L,
                                            trans: o,
                                            showRooms: !1
                                        })
                                    }), (0, s.jsx)("li", {
                                        className: E().lineData,
                                        children: o("occupancy-form_room_guests_resume-rooms", {
                                            rooms: W.length
                                        })
                                    })]
                                })
                            }), (0, s.jsxs)("div", {
                                className: E().rightColumn,
                                children: [(0, s.jsx)(T.g, {
                                    fontStyle: "l",
                                    color: "light",
                                    grossPrice: g.prices.total.converted,
                                    showAlwaysGross: !0
                                }), (0, s.jsxs)("button", {
                                    className: E().viewDetailsButton,
                                    "data-testid": "mobile-cart-toggle",
                                    ref: x,
                                    tabIndex: 0,
                                    children: [(0, s.jsx)("span", {
                                        className: "mr-xxs",
                                        children: o("new-reservation:cart_view-details")
                                    }), (0, s.jsx)(I.I, {
                                        icon: z.z,
                                        size: "l",
                                        color: "button-inverse-enabled"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, s.jsx)(s.Fragment, {
                        children: b && (0, s.jsx)(R.Ay, {
                            returnFocus: !0,
                            children: (0, s.jsxs)("div", {
                                ref: d,
                                role: "dialog",
                                "aria-modal": "true",
                                className: (0, p.x)(E().bodyContainer, y && E().isOpened),
                                onTransitionEnd: () => {
                                    S()
                                },
                                children: [(0, s.jsxs)("div", {
                                    className: E().cartContentHeader,
                                    ref: h,
                                    children: [(0, s.jsx)(ey.E, {
                                        as: "h3",
                                        fontStyle: "l-700",
                                        color: "dark",
                                        id: "cart-content-title",
                                        children: o("common:cart_reservation-summary")
                                    }), (0, s.jsx)("button", {
                                        className: E().iconWrapper,
                                        onClick: U,
                                        "aria-label": o("common:cart_close-button_title"),
                                        children: (0, s.jsx)(I.I, {
                                            size: "l",
                                            icon: ef.U
                                        })
                                    })]
                                }), (0, s.jsx)("div", {
                                    children: (0, s.jsx)(eg, {
                                        onDatesClick: t,
                                        onOccupancyClick: a,
                                        onEditExtra: n
                                    })
                                }), (0, s.jsx)("div", {
                                    className: E().buttonFooter,
                                    children: (0, s.jsx)(P.$n, {
                                        type: "button",
                                        size: "smallFullWidth",
                                        onClick: U,
                                        children: o("mobile-cart_footer-continue-button")
                                    })
                                })]
                            })
                        })
                    })]
                })
            };
            var ek = a(29929),
                eN = a.n(ek);
            let eE = e => {
                let {
                    onDatesClick: t,
                    onOccupancyClick: a,
                    onExtraClick: n
                } = e, {
                    cart: r,
                    isCartValidating: o
                } = (0, v._$)();
                return (0, j.b0)(r) || o ? (0, s.jsx)(u.$, {
                    laptop: !0,
                    desktop: !0,
                    children: (0, s.jsx)(P.EA, {
                        borderRadius: "1.5rem",
                        height: 570,
                        width: 420
                    })
                }) : (0, j.b0)(r) || 0 === r.roomStays.length ? null : (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(u.$, {
                        laptop: !0,
                        desktop: !0,
                        children: (0, s.jsx)("div", {
                            children: (0, s.jsx)("div", {
                                className: eN().container,
                                children: (0, s.jsx)(eg, {
                                    onDatesClick: t,
                                    onOccupancyClick: a,
                                    onEditExtra: n
                                })
                            })
                        })
                    })
                })
            };
            var eR = a(43489),
                eD = a(44428),
                eP = a(1463),
                eT = a(37956),
                eI = a(9061),
                ez = a(38282),
                eO = a(72944),
                eM = a(60641);
            let eH = e => {
                let {
                    view: t,
                    children: a,
                    user: n,
                    hotel: r,
                    onDatesSubmit: o,
                    onGuestsSubmit: i,
                    onLogout: l,
                    onEditExtra: h,
                    hasToShowMemberRatesTag: f
                } = e, {
                    trans: N
                } = (0, m.m)(["pages", "new-reservation"]), {
                    isMobileOrTablet: E
                } = (0, ez.Q)(), {
                    showModal: R,
                    hideModal: D
                } = (0, S.hS)(b.b), {
                    showModal: P,
                    hideModal: T
                } = (0, S.hS)(eD.o);
                (0, ev.v_)("EX_CART_REVAMP-mbox-PRO");
                let {
                    variantToShow: I
                } = (0, ev.i5)("EX041-mbox-PRO"), z = "B" === I, {
                    currentStep: O
                } = (0, eh.l)(), {
                    pathname: M,
                    queryUtils: H
                } = (0, _.Z)(), A = H.getMarketPriceCodeParam(), {
                    cart: W
                } = (0, v._$)(), {
                    hideCart: L
                } = (0, k.Bw)(), U = H.getGroupCodeParam(), {
                    mainCampaign: Y
                } = (0, ej.E)(), B = (0, j.O9)(Y), {
                    handleEditCoupon: F
                } = (0, eM.s)(), q = async () => {
                    (0, j.b0)(W) || (0, j.b0)(null == Y ? void 0 : Y.coupon) || await F({
                        type: eO.f.Promotional,
                        promotionalCode: Y.coupon,
                        groupCode: "",
                        specialCode: ""
                    })
                }, G = () => {
                    (0, j.b0)(r) || (0, j.b0)(W) || (R({
                        onClose: D,
                        onSubmit: i,
                        adultsList: w(W).adults,
                        childrenList: w(W).children,
                        childrenAges: w(W).childrenAges,
                        hotel: r
                    }), L())
                }, K = () => {
                    (0, j.b0)(W) || (P({
                        title: N("new-reservation:occupancy-form_dates_title-select_dates"),
                        checkIn: W.checkIn,
                        checkOut: W.checkOut,
                        onClose: T,
                        onSubmit: o,
                        hotelId: W.hotelId,
                        market: A,
                        groupCode: U
                    }), L())
                }, Z = (0, eb.o)(W), J = (0, j.O9)(null == Y ? void 0 : Y.coupon) && (0, j.O9)(Z) && Z.applies && Z.name.toUpperCase() === Y.coupon.toUpperCase(), X = O === eC.s.CHOOSE_PAYMENT && (0, j.O9)(null == Y ? void 0 : Y.coupon) && !J;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(eP.I, {
                        activeTitleKey: "choosePayment" === t ? "checkout-layout_page-title_active" : "personal-data_page-title_active",
                        inactiveTitleKey: "choosePayment" === t ? "checkout-layout_page-title_inactive" : "personal-data_page-title_inactive"
                    }), (0, s.jsx)(c(), {
                        children: (0, s.jsx)("meta", {
                            content: N("checkout-layout_page-title"),
                            property: "og:title"
                        }, "CheckoutBookingEngine")
                    }), (0, s.jsxs)("div", {
                        className: y().appContainer,
                        "data-quantum-itinerary-number": (0, j.O9)(W) ? W.itineraryNumber : void 0,
                        children: [(0, s.jsx)(eT.Y, {
                            user: n,
                            onLogout: l,
                            smallInMobile: !0,
                            hasToShowHotelName: !0
                        }), (0, s.jsx)(eS, {
                            onOccupancyClick: G,
                            onDatesClick: K,
                            onExtraClick: h,
                            onApplyCoupon: q
                        }), (J || X) && !E && (0, s.jsx)(ew.z, {
                            isVisible: B,
                            mainCampaign: Y,
                            variant: J ? "onlyCoupon" : "default",
                            couponMessageKey: (() => {
                                let e = (0, eb.o)(W),
                                    t = (0, j.O9)(null == Y ? void 0 : Y.coupon) && (0, j.O9)(e) && e.applies && e.name.toUpperCase() === Y.coupon.toUpperCase();
                                switch (O) {
                                    case eC.s.PERSONAL_DATA:
                                        return "new-reservation:personal-data_campaign-ribbon_message";
                                    case eC.s.CHOOSE_PAYMENT:
                                        if (t) return "new-reservation:choose-payment_campaign-ribbon_message_coupon-applied";
                                        return "new-reservation:header_promotional-campaign-ribon_message_v3";
                                    default:
                                        if (H.getCouponParam() === (null == Y ? void 0 : Y.coupon)) return "new-reservation:header_promotional-campaign-ribon_applied_message_v2";
                                        return "new-reservation:header_promotional-campaign-ribon_message_v3"
                                }
                            })(),
                            onApplyCoupon: O === eC.s.CHOOSE_PAYMENT ? q : void 0
                        }), !z && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(u.$, {
                                tablet: !0,
                                laptop: !0,
                                desktop: !0,
                                children: (0, s.jsx)("section", {
                                    className: g().bookingStepperWrapper,
                                    children: (0, s.jsx)(C.V, {
                                        currentStep: M === d.J.personalData ? 2 : 3
                                    })
                                })
                            }), (0, s.jsx)(u.$, {
                                mobile: !0,
                                children: (0, s.jsx)("section", {
                                    className: g().bookingStepperMobileWrapper,
                                    children: (0, s.jsx)(eR.L, {
                                        currentStep: M === d.J.personalData ? 2 : 3,
                                        hasToShowMemberRatesTag: f
                                    })
                                })
                            })]
                        }), (0, s.jsxs)("main", {
                            className: (0, p.x)(y().mainContainer, g().container),
                            children: [(0, s.jsx)("section", {
                                className: (0, p.x)(g().contentWrapper, z && g().hasProgressBarStepper),
                                children: (0, s.jsxs)("div", {
                                    className: g().innerContentWrapper,
                                    children: [z && (0, s.jsx)("div", {
                                        className: g().progressBarStepperWrapper,
                                        children: (0, s.jsx)(eI.U, {
                                            currentStep: M === d.J.personalData ? 2 : 3
                                        })
                                    }), a]
                                })
                            }), (0, s.jsx)("aside", {
                                className: g().asideWrapper,
                                children: (0, s.jsx)(eE, {
                                    onOccupancyClick: G,
                                    onDatesClick: K,
                                    onExtraClick: h
                                })
                            })]
                        }), (0, s.jsx)(x.w, {})]
                    })]
                })
            };
            var eA = a(80330),
                eW = a(82044),
                eL = a(62938),
                eU = a(20748);
            let eY = e => {
                let {
                    children: t,
                    view: a
                } = e, {
                    user: n,
                    handleB2CLogout: o
                } = (0, ep.Jd)(), {
                    modifyDates: i,
                    modifyGuests: l
                } = (0, eW.o)(), {
                    cart: c
                } = (0, v._$)();
                (0, eA.o)();
                let m = (0, Z.Y)({
                        id: null == c ? void 0 : c.hotelId
                    }),
                    {
                        navigate: d,
                        query: u,
                        currentView: p
                    } = (0, _.Z)(),
                    {
                        type: x
                    } = (0, eU.X)(),
                    h = async e => {
                        await d.toExtras({
                            query: { ...u,
                                extraId: e,
                                redirectView: p
                            }
                        })
                    },
                    {
                        performMutation: g
                    } = (0, eL.d)("handleLogout", async () => {
                        await o()
                    });
                return (0, D.useEffect)(() => r.k.resolve("eventsManager").on(ee.u.B2C_LOGOUT, g), [g]), (0, s.jsx)(eH, {
                    view: a,
                    onLogout: g,
                    user: n,
                    hotel: m,
                    onDatesSubmit: i,
                    onGuestsSubmit: l,
                    onEditExtra: h,
                    hasToShowMemberRatesTag: (0, j.O9)(x) && "allStandard" !== x,
                    children: t
                })
            }
        },
        68196: e => {
            e.exports = {
                tag: "ReservationDates_tag__XmNZo"
            }
        },
        76583: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => p
            });
            var s = a(37876),
                n = a(54704),
                r = a(35004),
                o = a(77925),
                i = a(39098),
                l = a(9880),
                c = a(84004),
                _ = a.n(c),
                m = a(78416),
                d = a(34127),
                u = a(39126);
            let p = e => {
                let {
                    cart: t
                } = e, {
                    trans: a
                } = (0, n.m)(["new-reservation"]), {
                    user: c
                } = (0, m.Jd)(), p = (0, l.c)(t, c);
                return (0, s.jsxs)(r.s, {
                    direction: "column",
                    children: [(0, s.jsx)(o.EY, {
                        fontStyle: "s-500-caps",
                        className: "mb-xs",
                        children: a("cart_reservation-details_holder-title")
                    }), (0, s.jsx)(r.s, {
                        children: (0, s.jsxs)(r.s, {
                            wrap: "wrap",
                            children: [(0, s.jsx)(o.EY, {
                                fontStyle: "m-700",
                                children: "".concat(null == p ? void 0 : p.name, " ").concat(null == p ? void 0 : p.surname)
                            }), (0, s.jsx)("span", {
                                className: _().dot
                            }), (0, s.jsxs)(r.s, {
                                alignItems: "center",
                                gap: "xxs",
                                children: [(0, s.jsx)(o.EY, {
                                    fontStyle: "m-700",
                                    children: null == p ? void 0 : p.email
                                }), (0, s.jsx)(d.m, {
                                    tooltipContent: a("holder-details_email_info"),
                                    tooltipWrapperClassName: _().tooltipWrapper,
                                    placement: "top-end",
                                    triggerElement: (0, s.jsx)(u.I, {
                                        className: "self-center",
                                        testId: "emailInfoIcon",
                                        size: "l",
                                        icon: i.A,
                                        ariaLabel: "email info button"
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        84004: e => {
            e.exports = {
                "w-full": "ReservationHolder_w-full__AbKOi",
                "w-fit": "ReservationHolder_w-fit__NJ4f2",
                "w-5/12": "ReservationHolder_w-5__12__3LSXq",
                "w-7/12": "ReservationHolder_w-7__12__1TZD7",
                "h-full": "ReservationHolder_h-full__N4o9u",
                flex: "ReservationHolder_flex__8sjHt",
                grow: "ReservationHolder_grow__W_YP9",
                "flex-1": "ReservationHolder_flex-1__0Z85r",
                "shrink-0": "ReservationHolder_shrink-0__GO6Ie",
                "self-center": "ReservationHolder_self-center__r5wEf",
                "self-end": "ReservationHolder_self-end__9GsUz",
                "items-center": "ReservationHolder_items-center__xpJqB",
                "justify-center": "ReservationHolder_justify-center__paps3",
                "gap-xs": "ReservationHolder_gap-xs__hUdDN",
                "cursor-pointer": "ReservationHolder_cursor-pointer__g4681",
                "touch-security-zone": "ReservationHolder_touch-security-zone__plg2G",
                "touch-security-zone-always": "ReservationHolder_touch-security-zone-always__kplh6",
                dot: "ReservationHolder_dot__AU4cW",
                tooltipWrapper: "ReservationHolder_tooltipWrapper__3hjKt"
            }
        },
        85869: (e, t, a) => {
            "use strict";
            a.d(t, {
                q: () => s
            });
            let s = e => {
                if (e.rate.hasUSPCampaign) {
                    var t;
                    return null != (t = e.rate.USPCampaignId) ? t : ""
                }
                return ""
            }
        },
        91363: e => {
            e.exports = {
                container: "TotalPayment_container__7GFNi",
                tooltip: "TotalPayment_tooltip__NCRJ3",
                touristTaxDescription: "TotalPayment_touristTaxDescription__XjH5c",
                highlightSection: "TotalPayment_highlightSection__dVpZW"
            }
        },
        96693: e => {
            e.exports = {
                "w-full": "CartContent_w-full__gpjfd",
                "w-fit": "CartContent_w-fit__Sf_lw",
                "w-5/12": "CartContent_w-5__12__bnlOS",
                "w-7/12": "CartContent_w-7__12__U4KkM",
                "h-full": "CartContent_h-full__18Ggu",
                flex: "CartContent_flex__xm0II",
                grow: "CartContent_grow__3rmYc",
                "flex-1": "CartContent_flex-1___pDWH",
                "shrink-0": "CartContent_shrink-0__OWdOf",
                "self-center": "CartContent_self-center__sYd0k",
                "self-end": "CartContent_self-end__cDBG6",
                "items-center": "CartContent_items-center__YupfN",
                "justify-center": "CartContent_justify-center__qSlKP",
                "gap-xs": "CartContent_gap-xs__wnyRG",
                "cursor-pointer": "CartContent_cursor-pointer__izWVa",
                "touch-security-zone": "CartContent_touch-security-zone__4RTZc",
                "touch-security-zone-always": "CartContent_touch-security-zone-always__Fv09o",
                container: "CartContent_container__qtvRa"
            }
        },
        96945: (e, t, a) => {
            "use strict";
            a.d(t, {
                M: () => i
            });
            var s = a(37876),
                n = a(77925),
                r = a(36271),
                o = a(54704);
            let i = (0, r.mP)(e => {
                let {
                    onClose: t,
                    onContinue: a
                } = e, {
                    trans: r
                } = (0, o.m)(["new-reservation"]);
                return (0, s.jsx)(n.aF, {
                    size: "s-m",
                    mobileStyle: "centered",
                    onClose: t,
                    title: r("back-to-step-one-modal_title"),
                    primaryButtonLabel: r("back-to-step-one-modal_continue"),
                    onPrimaryButtonClick: a,
                    secondaryButtonLabel: r("back-to-step-one-modal_cancel"),
                    onSecondaryButtonClick: t,
                    children: (0, s.jsx)(n.EY, {
                        as: "p",
                        fontStyle: "m-300",
                        className: "mb-xl",
                        children: r("back-to-step-one-modal_description")
                    })
                })
            })
        }
    }
]);