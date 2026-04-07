! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "438726a6-e07b-4b93-809c-287ea936f4ea", e._sentryDebugIdIdentifier = "sentry-dbid-438726a6-e07b-4b93-809c-287ea936f4ea")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8163], {
        41090: (e, a, t) => {
            t.d(a, {
                A: () => i
            });
            var r = t(72668);
            let i = e => {
                let {
                    cartRepository: a,
                    reservationStorageRepository: t
                } = e;
                return async (e, i, n) => {
                    let l = t.getReservationFields();
                    return (0, r.b0)(l) || (0, r.O9)(e) && (e => {
                        let a = (0, r.O9)(e.prices.total.converted) && e.prices.total.converted.currency === n,
                            t = e.itineraryNumber === l.itineraryNumber;
                        return a && t
                    })(e) || l.isPaid ? Promise.resolve(void 0) : await a.get(l.reservationId, l.itineraryNumber, i, n)
                }
            }
        },
        97582: (e, a, t) => {
            t.d(a, {
                g: () => h
            });
            var r = t(72668),
                i = t(25002),
                n = t(32371),
                l = t(48711),
                o = t(61810),
                s = t(86311),
                d = t(90251),
                c = t(25512);
            let u = e => {
                    var a, t, i;
                    return (0, r.b0)(e.cancellation) ? { ...(0, d.NR)((0, s.l)(e.average.base).currency)
                    } : {
                        id: e.cancellation.id,
                        cancellationType: g(e.cancellation, e.details.policies.cancellation),
                        penalty: e.cancellation.penalty ? (0, s.l)(e.cancellation.penalty) : (0, d._S)((0, s.l)(e.average.base).currency),
                        calculatedCharge: {
                            beforeDeadline: (0, c.f)(e.breakdown.cancellationBeforeDeadline, {
                                getConverted: !0
                            }),
                            afterDeadline: (0, c.f)(e.breakdown.cancellationAfterDeadline, {
                                getConverted: !0
                            })
                        },
                        applies: e.cancellation.applies,
                        deadline: e.cancellation.deadline ? o.g.fromString(e.cancellation.deadline, {
                            keepTimezone: !0
                        }) : void 0,
                        hotelUTC: (0, r.O9)(e.cancellation.deadline) ? o.g.getUTCOffsetFromISOString(e.cancellation.deadline) : "",
                        flexible: null != (t = null == (a = e.details.policies.cancellation) ? void 0 : a.flexible) && t,
                        relative: e.details.policies.cancellation ? {
                            penalty: null != (i = e.details.policies.cancellation.penalty) ? i : d.uQ,
                            deadline: e.details.policies.cancellation.deadline
                        } : d.lQ
                    }
                },
                g = (e, a) => (0, r.b0)(e) || (0, r.b0)(a) ? "free" : !a.flexible && (0, r.b0)(e.deadline) ? "non-refundable" : e.applies ? "policy" : "free",
                p = e => ({
                    id: e.guarantee.id,
                    type: y(e),
                    deposit: f(e),
                    pending: v(e),
                    daysBeforeCheckIn: e.details.policies.guarantee.daysBeforeCheckIn,
                    deadline: (0, r.O9)(e.guarantee.deadline) ? o.g.fromString(e.guarantee.deadline).toDate() : void 0,
                    prepay: e.details.policies.guarantee.prepay,
                    relative: {
                        deposit: e.details.policies.guarantee.deposit
                    }
                }),
                y = e => {
                    if (!e.details.policies.guarantee.prepay && (0, r.b0)(e.details.policies.guarantee.daysBeforeCheckIn) || !e.details.policies.guarantee.deposit) return {
                        key: "all-hotel"
                    };
                    if ((0, r.O9)(e.details.policies.guarantee.daysBeforeCheckIn) && e.details.policies.guarantee.daysBeforeCheckIn > 0) return {
                        key: "days-before-check-in",
                        value: e.details.policies.guarantee.daysBeforeCheckIn
                    };
                    if (0 === v(e).value) return {
                        key: "all-prepay"
                    };
                    let a = e.details.policies.guarantee.deposit.type,
                        t = e.details.policies.guarantee.deposit.value;
                    return {
                        key: "partial-".concat(a),
                        value: t
                    }
                },
                v = e => (0, r.O9)(e.breakdown.payAtHotel) ? (0, s.l)(e.breakdown.payAtHotel) : {
                    value: 0,
                    currency: (0, s.l)(e.average.base).currency
                },
                f = e => (0, r.O9)(e.guarantee.deposit) ? (0, s.l)(e.guarantee.deposit) : {
                    value: 0,
                    currency: (0, s.l)(e.average.base).currency
                };
            var m = t(83151),
                b = t(4190);
            let h = e => {
                    let {
                        availabilityApiClient: a,
                        analytics: t,
                        logger: d
                    } = e;
                    return {
                        all: async (e, g) => {
                            let {
                                market: y,
                                hotel: v,
                                checkIn: f,
                                checkOut: m,
                                adults: h,
                                children: O,
                                childrenAges: D,
                                currency: C,
                                membership: _,
                                coupons: I,
                                groupCode: x,
                                channel: S
                            } = e, k = {
                                market: y,
                                id: v,
                                start_date: o.g.fromDate(f).format("YYYY-MM-DD"),
                                end_date: o.g.fromDate(m).format("YYYY-MM-DD"),
                                adults: h,
                                children: O,
                                children_ages: D,
                                membership: _,
                                coupons: I,
                                group_code: x,
                                channel: (0, r.O9)(S) ? S : "WEB"
                            };
                            try {
                                let {
                                    hotel: e,
                                    stays: t
                                } = await a.authorized(g).get("/v1/hotels/".concat(encodeURIComponent(k.id), "/rooms"), {
                                    params: k,
                                    paramsSerializer: {
                                        serialize: e => (0, i.y)(e, D)
                                    },
                                    headers: {
                                        "X-CBE-Customer-Currency": C.toUpperCase()
                                    }
                                });
                                if (t.every(e => (0, r.Im)(e.rooms))) throw new n.S(n.C.HOTEL_AVAILABILITY_NOT_FOUND_ERROR, "Hotel ".concat(v, " not found"), void 0);
                                return ((e, a) => ({
                                    groupCode: (e => {
                                        let a = e.flatMap(e => e.rooms.flatMap(e => e.mealPlans.flatMap(e => e.rates.map(e => {
                                            let {
                                                groupCode: a
                                            } = e;
                                            return a
                                        }).filter(r.O9))));
                                        return (0, r.$1)(a)
                                    })(e),
                                    hotel: {
                                        id: a.id,
                                        name: a.name
                                    },
                                    stays: e.map(e => {
                                        let {
                                            rooms: a,
                                            details: t
                                        } = e;
                                        return {
                                            rooms: a.map(e => ({
                                                id: e.id,
                                                name: e.details.name,
                                                occupancy: e.details.occupancy,
                                                inventory: e.inventory,
                                                mealplans: e.mealPlans.map(e => ({
                                                    id: e.id,
                                                    name: e.details.name,
                                                    rates: e.rates.map(e => {
                                                        var a, t, i, n, l, d;
                                                        return {
                                                            id: e.id,
                                                            name: e.details.name,
                                                            description: e.details.description,
                                                            averageNightly: {
                                                                netPrice: (0, s.l)(e.average.base),
                                                                grossPrice: (0, s.l)(e.average.total),
                                                                netDiscount: (0, r.O9)(e.average.discount) ? (0, s.l)(e.average.discount.beforeTax) : void 0,
                                                                grossDiscount: (0, r.O9)(e.average.discount) ? (0, s.l)(e.average.discount.afterTax) : void 0,
                                                                originalNetPrice: (0, r.O9)(null == (a = e.average.original) ? void 0 : a.base) ? (0, s.l)(e.average.original.base) : void 0,
                                                                originalGrossPrice: (0, r.O9)(null == (t = e.average.original) ? void 0 : t.total) ? (0, s.l)(e.average.original.total) : void 0
                                                            },
                                                            total: {
                                                                netPrice: (0, s.l)(e.stay.base),
                                                                grossPrice: (0, s.l)(e.stay.total),
                                                                netDiscount: (0, r.O9)(e.stay.discount) ? (0, s.l)(e.stay.discount.beforeTax) : void 0,
                                                                grossDiscount: (0, r.O9)(e.stay.discount) ? (0, s.l)(e.stay.discount.afterTax) : void 0,
                                                                originalNetPrice: (0, r.O9)(null == (i = e.stay.original) ? void 0 : i.base) ? (0, s.l)(e.stay.original.base) : void 0,
                                                                originalGrossPrice: (0, r.O9)(null == (n = e.stay.original) ? void 0 : n.total) ? (0, s.l)(e.stay.original.total) : void 0
                                                            },
                                                            nightly: e.nightly.map(e => ({
                                                                date: o.g.fromString(e.date).toDate(),
                                                                base: (0, s.l)(e.base),
                                                                total: (0, s.l)(e.total)
                                                            })),
                                                            nonConvertedTotal: {
                                                                netPrice: (0, c.f)(e.stay.base, {
                                                                    getConverted: !1
                                                                }),
                                                                grossPrice: (0, c.f)(e.stay.total, {
                                                                    getConverted: !1
                                                                })
                                                            },
                                                            ...(0, r.O9)(null == (l = e.stay.original) ? void 0 : l.base) && (0, r.O9)(null == (d = e.stay.original) ? void 0 : d.total) && {
                                                                nonConvertedOriginalTotal: {
                                                                    netPrice: (0, c.f)(e.stay.original.base, {
                                                                        getConverted: !1
                                                                    }),
                                                                    grossPrice: (0, c.f)(e.stay.original.total, {
                                                                        getConverted: !1
                                                                    })
                                                                }
                                                            },
                                                            cancellation: u(e),
                                                            guarantee: p(e),
                                                            isApp: e.details.isApp,
                                                            isMember: e.details.isMember,
                                                            isMobile: e.details.isMobile,
                                                            isMostExpensive: e.isMostExpensive,
                                                            hasUSPCampaign: e.details.hasIncludedPackage,
                                                            isRelated: !1,
                                                            relatedRate: (0, r.O9)(e.related) ? (e => {
                                                                var a, t, i, n, l, d;
                                                                return {
                                                                    rate: {
                                                                        id: e.rate.id,
                                                                        isApp: !1,
                                                                        isMember: !1,
                                                                        isMobile: e.rate.details.isMobile,
                                                                        isRelated: !0,
                                                                        isMostExpensive: !1,
                                                                        name: e.rate.details.name,
                                                                        description: e.rate.details.description,
                                                                        hasUSPCampaign: e.rate.details.hasIncludedPackage,
                                                                        averageNightly: {
                                                                            netPrice: (0, s.l)(e.rate.average.base),
                                                                            grossPrice: (0, s.l)(e.rate.average.total),
                                                                            netDiscount: (0, r.O9)(e.rate.average.discount) ? (0, s.l)(e.rate.average.discount.beforeTax) : void 0,
                                                                            grossDiscount: (0, r.O9)(e.rate.average.discount) ? (0, s.l)(e.rate.average.discount.afterTax) : void 0,
                                                                            originalNetPrice: (0, r.O9)(null == (a = e.rate.average.original) ? void 0 : a.base) ? (0, s.l)(e.rate.average.original.base) : void 0,
                                                                            originalGrossPrice: (0, r.O9)(null == (t = e.rate.average.original) ? void 0 : t.total) ? (0, s.l)(e.rate.average.original.total) : void 0
                                                                        },
                                                                        total: {
                                                                            netPrice: (0, s.l)(e.rate.stay.base),
                                                                            grossPrice: (0, s.l)(e.rate.stay.total),
                                                                            netDiscount: (0, r.O9)(e.rate.stay.discount) ? (0, s.l)(e.rate.stay.discount.beforeTax) : void 0,
                                                                            grossDiscount: (0, r.O9)(e.rate.stay.discount) ? (0, s.l)(e.rate.stay.discount.afterTax) : void 0,
                                                                            originalNetPrice: (0, r.O9)(null == (i = e.rate.stay.original) ? void 0 : i.base) ? (0, s.l)(e.rate.stay.original.base) : void 0,
                                                                            originalGrossPrice: (0, r.O9)(null == (n = e.rate.stay.original) ? void 0 : n.total) ? (0, s.l)(e.rate.stay.original.total) : void 0
                                                                        },
                                                                        nightly: e.rate.nightly.map(e => ({
                                                                            date: o.g.fromString(e.date).toDate(),
                                                                            base: (0, s.l)(e.base),
                                                                            total: (0, s.l)(e.total)
                                                                        })),
                                                                        nonConvertedTotal: {
                                                                            netPrice: (0, c.f)(e.rate.stay.base, {
                                                                                getConverted: !1
                                                                            }),
                                                                            grossPrice: (0, c.f)(e.rate.stay.total, {
                                                                                getConverted: !1
                                                                            })
                                                                        },
                                                                        ...(0, r.O9)(null == (l = e.rate.stay.original) ? void 0 : l.base) && (0, r.O9)(null == (d = e.rate.stay.original) ? void 0 : d.total) && {
                                                                            nonConvertedOriginalTotal: {
                                                                                netPrice: (0, c.f)(e.rate.stay.original.base, {
                                                                                    getConverted: !1
                                                                                }),
                                                                                grossPrice: (0, c.f)(e.rate.stay.original.total, {
                                                                                    getConverted: !1
                                                                                })
                                                                            }
                                                                        },
                                                                        cancellation: u(e.rate),
                                                                        guarantee: p(e.rate),
                                                                        coupon: (0, r.$1)(e.rate.coupons)
                                                                    },
                                                                    association: e.association,
                                                                    convertedDifference: (0, r.O9)(e.convertedDifference) ? (0, c.f)(e.convertedDifference, {
                                                                        getConverted: !1
                                                                    }) : {
                                                                        value: 0,
                                                                        currency: e.rate.average.base.currency
                                                                    }
                                                                }
                                                            })(e.related) : void 0,
                                                            coupon: (0, r.$1)(e.coupons)
                                                        }
                                                    })
                                                }))
                                            })),
                                            details: {
                                                startDate: o.g.fromString(t.startDate).toDate(),
                                                endDate: o.g.fromString(t.endDate).toDate(),
                                                occupancy: t.occupancy
                                            },
                                            mealplanFilters: (0, r.hS)(a.flatMap(e => e.mealPlans.map(e => ({
                                                id: e.id,
                                                name: e.details.name
                                            }))), "id")
                                        }
                                    })
                                }))(t, e)
                            } catch (e) {
                                if (e instanceof l.pe) {
                                    var T, Y, M, w, E;
                                    if (P(e, t), (0, r.b0)(null == (Y = e.response) || null == (T = Y.data) ? void 0 : T.code)) throw e;
                                    throw new n.S(null == (M = e.response) ? void 0 : M.data.code, null != (E = null == (w = e.response) ? void 0 : w.data.message) ? E : "Unknown message", e)
                                }
                                throw e instanceof b.D && d.warning("Unauthorized error in availability request with token: " + g), e
                            }
                        },
                        extras: async e => {
                            let {
                                hotel: t,
                                checkIn: c,
                                checkOut: u,
                                adults: g,
                                children: p,
                                childrenAges: y,
                                roomIds: v,
                                rateIds: f,
                                ratesCurrencies: m,
                                currency: b
                            } = e, h = {
                                id: t,
                                start_date: o.g.fromDate(c).format("YYYY-MM-DD"),
                                end_date: o.g.fromDate(u).format("YYYY-MM-DD"),
                                adults: g,
                                children: p,
                                children_ages: y,
                                room_ids: v,
                                rate_ids: f,
                                rates_currencies: m
                            };
                            1 !== new Set([v, f, g, p].map(e => e.length)).size && d.error("Mismatched arrays length in extras availability request " + JSON.stringify(h, null, 2));
                            try {
                                let {
                                    data: e
                                } = await a.get("/v1/hotels/".concat(encodeURIComponent(h.id), "/extras"), {
                                    params: h,
                                    paramsSerializer: {
                                        serialize: e => (0, i.y)((0, r.cJ)(e, ["id"]), y)
                                    },
                                    headers: {
                                        "X-CBE-Customer-Currency": b.toUpperCase()
                                    }
                                });
                                return e.extras.map(e => {
                                    var a, t, i;
                                    let n = {
                                        id: e.id,
                                        type: e.type,
                                        rates: null != (t = e.rates) ? t : [],
                                        required: e.required,
                                        name: e.name,
                                        description: (0, r.VE)(null != (i = e.description) ? i : ""),
                                        maxQuantity: e.maxQuantity,
                                        imageUrl: e.imageUrl,
                                        featured: !!e.featured,
                                        category: e.category
                                    };
                                    return (e => "PER_UNITS_STAY" === e || "PER_UNITS_NIGHT" === e || "PER_PERSON_STAY" === e || "PER_PERSON_NIGHT" === e)(e.type) || (e => "PER_STAY" === e || "PER_NIGHT" === e)(e.type) ? { ...n,
                                        ...(0, r.O9)(e.price) && {
                                            price: {
                                                netPrice: (0, s.l)(e.price.stay.base),
                                                tax: {
                                                    percentage: e.price.stay.tax.percentage,
                                                    amount: (0, s.l)(e.price.stay.tax.amount)
                                                },
                                                grossPrice: (0, s.l)(e.price.stay.total)
                                            }
                                        }
                                    } : { ...n,
                                        ...(0, r.O9)(e.adultsPrice) && {
                                            adultsPrice: {
                                                netPrice: (0, s.l)(e.adultsPrice.stay.base),
                                                tax: {
                                                    percentage: e.adultsPrice.stay.tax.percentage,
                                                    amount: (0, s.l)(e.adultsPrice.stay.tax.amount)
                                                },
                                                grossPrice: (0, s.l)(e.adultsPrice.stay.total)
                                            }
                                        },
                                        ...(0, r.O9)(e.childrenPrice) && {
                                            childrenPrice: {
                                                netPrice: (0, s.l)(e.childrenPrice.stay.base),
                                                tax: {
                                                    percentage: e.childrenPrice.stay.tax.percentage,
                                                    amount: (0, s.l)(e.childrenPrice.stay.tax.amount)
                                                },
                                                grossPrice: (0, s.l)(e.childrenPrice.stay.total)
                                            }
                                        },
                                        ...(0, r.O9)(null == (a = e.restrictions) ? void 0 : a.age) && {
                                            ageRestrictions: (e => {
                                                let a = e.child,
                                                    t = e.adult;
                                                if (!((0, r.b0)(null == a ? void 0 : a.min) && (0, r.b0)(null == a ? void 0 : a.max) && (0, r.b0)(null == t ? void 0 : t.min))) return {
                                                    child: (0, r.O9)(null == a ? void 0 : a.min) && (0, r.O9)(null == a ? void 0 : a.max) ? a : void 0,
                                                    adult: (0, r.O9)(null == t ? void 0 : t.min) ? t : void 0
                                                }
                                            })(e.restrictions.age)
                                        }
                                    }
                                })
                            } catch (e) {
                                if (e instanceof l.pe) {
                                    var P, O, D, C;
                                    if ((null == (P = e.response) ? void 0 : P.status) === l.kG.NotFound || (null == (O = e.response) ? void 0 : O.status) === l.kG.BadGateway && (null == (C = e.response) || null == (D = C.data) ? void 0 : D.code) === n.C.AVAILABILITY_SERVICE_UNAVAILABLE_ERROR) return []
                                }
                                throw e
                            }
                        },
                        twoMonthsStatus: async e => {
                            let {
                                hotelId: t,
                                month: i,
                                market: n,
                                groupCode: s
                            } = e, c = m.D.getFirstDayAvailable().toDate(), u = o.g.fromDate(c > i ? c : i).format("YYYY-MM-DD"), g = o.g.fromDate(i).add(1, "month").endOfTime("month").format("YYYY-MM-DD");
                            try {
                                let {
                                    data: e
                                } = await a.get("/v1/hotels/".concat(encodeURIComponent(t), "/availability/by-dates"), {
                                    params: {
                                        start_date: u,
                                        end_date: g,
                                        market: n,
                                        group_code: s
                                    }
                                });
                                return e.dates.map(e => {
                                    var a, t;
                                    return {
                                        date: o.g.fromString(e.date).toDate(),
                                        priceRange: null != (a = e.priceRange) ? a : "EMPTY",
                                        restriction: {
                                            status: null != (t = e.restriction.status) ? t : "OPEN",
                                            quantity: (0, r.ko)(e.restriction.quantity) ? parseInt(e.restriction.quantity) : void 0
                                        }
                                    }
                                })
                            } catch (e) {
                                if (e instanceof l.pe) {
                                    var p;
                                    if ((null == (p = e.response) ? void 0 : p.status) === l.kG.NotFound) return []
                                }
                                return d.error(e), []
                            }
                        }
                    }
                },
                P = (e, a) => {
                    if ((0, r.b0)(e.response)) return void a.errors.availability({
                        code: e.code
                    });
                    let t = {
                        400: a.errors.availabilitySystem,
                        500: a.errors.availabilitySystem,
                        502: a.errors.availabilitySystem
                    }[e.response.status];
                    if ((0, r.O9)(t)) return void t({
                        code: e.code,
                        status: e.response.status
                    });
                    a.errors.availability({
                        code: e.code,
                        status: e.response.status,
                        data: e.response.data
                    })
                }
        }
    }
]);