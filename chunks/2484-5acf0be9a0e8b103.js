! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9421958a-51c8-4838-a784-d8a7e513a598", e._sentryDebugIdIdentifier = "sentry-dbid-9421958a-51c8-4838-a784-d8a7e513a598")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2484], {
        2104: (e, t, r) => {
            r.d(t, {
                a: () => o
            });
            var n = r(50406),
                a = r(96957);
            let o = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Js.UNKNOWN,
                    t = new CustomEvent("PaymentError", {
                        detail: {
                            paymentStatus: a.dX.ERROR,
                            statusCode: e
                        }
                    });
                n.A.emitToParent(t)
            }
        },
        6241: (e, t, r) => {
            r.d(t, {
                S: () => n
            });
            let n = e => {
                let {
                    availabilityRepository: t
                } = e;
                return e => t.twoMonthsStatus(e)
            }
        },
        26781: (e, t, r) => {
            r.d(t, {
                L: () => n
            });
            class n extends Error {
                constructor() {
                    super("Saved queries does not exist in the session storage")
                }
            }
        },
        35052: (e, t, r) => {
            r.d(t, {
                E: () => n
            });
            let n = e => {
                let {
                    reservationRepository: t,
                    reservationStorageRepository: r
                } = e;
                return async () => {
                    let e = r.getReservationFields();
                    await t.confirmationWithName(e.itineraryNumber)
                }
            }
        },
        41303: (e, t, r) => {
            r.d(t, {
                L: () => a,
                b: () => n
            });
            class n extends Error {
                constructor(e) {
                    super(e.toString()), this.type = e
                }
            }
            var a = function(e) {
                return e[e.EXPIRED_CART = 8] = "EXPIRED_CART", e
            }({})
        },
        46121: (e, t, r) => {
            r.d(t, {
                x: () => a
            });
            var n = r(72668);
            let a = e => {
                let {
                    paymentRepository: t,
                    reservationStorageRepository: r,
                    analytics: a
                } = e;
                return async (e, o, s, i) => {
                    let l = r.getReservationFields(),
                        d = await t.currentMethod(l.reservationId, l.itineraryNumber, o, s, i);
                    if (!(0, n.b0)(d)) return a.requests.currentPaymentMethod(d, e), d
                }
            }
        },
        58097: (e, t, r) => {
            r.d(t, {
                J: () => n
            });
            let n = e => {
                let {
                    paymentRepository: t,
                    reservationStorageRepository: r,
                    analytics: n
                } = e;
                return async e => {
                    let a = r.getReservationFields(),
                        o = await t.methods(a.reservationId, a.itineraryNumber, e);
                    return n.requests.paymentMethods(o), o
                }
            }
        },
        72232: (e, t, r) => {
            r.d(t, {
                c: () => a
            });
            var n = r(32237);
            let a = e => {
                let {
                    hotelRepository: t
                } = e;
                return async (e, r, a, o) => {
                    let s = await t.getCoupon(e, r);
                    return (0, n.mB)(s, a, o)
                }
            }
        },
        85630: (e, t, r) => {
            r.d(t, {
                p: () => u
            });
            var n = r(72668),
                a = r(48711),
                o = r(41303),
                s = r(4190),
                i = r(10139),
                l = r(96957),
                d = r(61810),
                c = r(2104);
            let u = e => {
                let {
                    reservationApiClient: t,
                    logger: r
                } = e, u = async (e, r, s, d, c) => {
                    var u, y, m, v, p, h, f, g, w, b;
                    let E = "".concat(origin, "/ingenico-callback/?hash=").concat(d),
                        D = {
                            callbacks: {
                                onAccepted: "".concat(E, "&paymentStatus=").concat(l.dX.ACCEPTED),
                                onDeclined: "".concat(E, "&paymentStatus=").concat(l.dX.DECLINED),
                                onCancelled: "".concat(E, "&paymentStatus=").concat(l.dX.CANCELLED),
                                onError: "".concat(E, "&paymentStatus=").concat(l.dX.ERROR),
                                onPending: "".concat(E, "&paymentStatus=").concat(l.dX.PENDING)
                            }
                        },
                        {
                            id: I,
                            groupId: R
                        } = s,
                        C = {
                            groupId: R,
                            id: I,
                            ...D
                        };
                    try {
                        let n = await t.modifiesReservation(r).authorized(c).post(e, C, {
                            headers: {
                                "X-CBE-BPAY": "true"
                            }
                        });
                        return {
                            redirectUrl: n.redirectUrl,
                            isValidForIframe: null != (u = n.isValidForIframe) && u
                        }
                    } catch (e) {
                        if (e instanceof a.pe) {
                            if ((0, n.b0)(null == (m = e.response) || null == (y = m.data) ? void 0 : y.code)) throw e;
                            if ((null == (v = e.response) ? void 0 : v.status) === 422 && (null == (h = e.response) || null == (p = h.data) ? void 0 : p.code) === 29) throw new i.X(null != (b = null == (w = e.response) || null == (g = w.data) ? void 0 : g.message) ? b : "Unknown error", i.b.EXPIRED);
                            throw new o.b(null == (f = e.response) ? void 0 : f.data.code)
                        }
                        throw e
                    }
                };
                return {
                    methods: async (e, r, n) => {
                        try {
                            let {
                                data: a
                            } = await t.modifiesReservation(r).authorized(n).get("/v1/reservations/".concat(e, "/payment-method-groups"), {
                                headers: {
                                    "X-CBE-BPAY": "true"
                                }
                            });
                            return a.reduce((e, t) => [...e.map(e => {
                                var t;
                                return { ...e,
                                    isValidForIframe: null != (t = e.isValidForIframe) && t
                                }
                            }), ...t.methods.map(e => {
                                var t;
                                return { ...e,
                                    isValidForIframe: null != (t = e.isValidForIframe) && t
                                }
                            })], [])
                        } catch (e) {
                            if (e instanceof a.pe) {
                                var o, s, l, d, c, u;
                                if ((null == (o = e.response) ? void 0 : o.status) === 422 && (null == (l = e.response) || null == (s = l.data) ? void 0 : s.code) === 29) throw new i.X(null != (u = null == (c = e.response) || null == (d = c.data) ? void 0 : d.message) ? u : "Unknown error", i.b.EXPIRED)
                            }
                            throw e
                        }
                    },
                    currentMethod: async (e, r, o, s, l) => {
                        try {
                            let {
                                data: a
                            } = await t.modifiesReservation(r).authorized(o).get("/v2/reservations/".concat(e, "/payments"));
                            return ((e, t, r) => {
                                let {
                                    payments: a,
                                    errorCount: o
                                } = e;
                                if ((0, n.Im)(a)) return;
                                let s = a.sort((e, t) => d.g.fromString(t.createdAt).toMilliseconds() - d.g.fromString(e.createdAt).toMilliseconds()),
                                    {
                                        id: i,
                                        methodId: l,
                                        token: c,
                                        cardInfo: u,
                                        status: y
                                    } = (0, n.b0)(t) || "funnel" === t ? s[0] : r ? s.slice().reverse().find(e => "APPROVED" === e.status) || s[s.length - 1] : s.find(e => "APPROVED" === e.status && ((0, n.O9)(e.token) && d.g.isAfterDay(new Date, new Date(e.token.expiration)) || (0, n.b0)(e.token))) || s[0],
                                    m = (null == u ? void 0 : u.display) || (null == c ? void 0 : c.display);
                                return (0, n.O9)(m) ? {
                                    id: i,
                                    methodId: l,
                                    status: y,
                                    token: {
                                        id: null == c ? void 0 : c.id,
                                        display: m,
                                        expiration: null == c ? void 0 : c.expiration
                                    },
                                    errorCount: o
                                } : {
                                    id: i,
                                    methodId: l,
                                    status: y,
                                    token: void 0,
                                    errorCount: o
                                }
                            })(a, s, l)
                        } catch (e) {
                            if (e instanceof a.pe) {
                                var c, u, y, m, v, p;
                                if ((null == (c = e.response) ? void 0 : c.status) === 422 && (null == (y = e.response) || null == (u = y.data) ? void 0 : u.code) === 29) throw new i.X(null != (p = null == (v = e.response) || null == (m = v.data) ? void 0 : m.message) ? p : "Unknown error", i.b.EXPIRED)
                            }
                            throw e
                        }
                    },
                    getPaymentErrorCount: async (e, r, a) => {
                        try {
                            var o;
                            let s = t;
                            (0, n.O9)(a) && (s = s.authorized(a));
                            let {
                                data: i
                            } = await s.modifiesReservation(r).get("/v2/reservations/".concat(e, "/payments"));
                            return null != (o = i.errorCount) ? o : 0
                        } catch (e) {
                            return 0
                        }
                    },
                    pay: async (e, t, r, n, a) => u("/v1/reservations/".concat(e, "/payments"), t, r, n, a),
                    payWithDlocal: async (e, r, n, o, s, i) => {
                        var d, u, y, m, v;
                        try {
                            let a = await t.modifiesReservation(r).authorized(i).patch("v1/reservations/".concat(e, "/payments/").concat(n), {
                                token: {
                                    id: o,
                                    customerConsent: s
                                },
                                callbacks: {}
                            }, {
                                headers: {
                                    "X-CBE-BPAY": "true"
                                }
                            });
                            return {
                                status: 200,
                                redirectUrl: a.redirectUrl,
                                isValidForIframe: null != (d = a.isValidForIframe) && d
                            }
                        } catch (e) {
                            if (e instanceof a.pe) return (0, c.a)((0, l.yN)(null == (y = e.response) || null == (u = y.data) ? void 0 : u.code)), {
                                status: null != (v = null == (m = e.response) ? void 0 : m.status) ? v : 500
                            };
                            throw e
                        }
                    },
                    getReservationPaymentStatus: async (e, a, o, i, l) => {
                        let d = (0, n.cJ)(l, ["orderNumber"]);
                        try {
                            if ((0, n.b0)(o)) {
                                let t = {
                                    ingenicoData: {
                                        orderNumber: l.orderNumber,
                                        paymentCurrency: l.paymentCurrency,
                                        statusCode: l.statusCode,
                                        paymentMethodCode: l.paymentMethodCode
                                    },
                                    sessionStorage: {
                                        reservationId: e,
                                        itineraryNumber: a,
                                        orderNumber: o
                                    }
                                };
                                return (0, n.b0)(l) ? r.info("No orderNumber and no ingenicoData - likely guaranteed by name: ".concat(JSON.stringify(t))) : r.warning("orderNumber is undefined but ingenicoData exists - possible cross-tab navigation: ".concat(JSON.stringify(t))), "INVALID"
                            }
                            return await t.modifiesReservation(a).authorized(i).post("/v1/reservations/".concat(e, "/payments/").concat(o, "/check"), d), "VALID"
                        } catch (e) {
                            if (e instanceof s.D) throw e;
                            return "INVALID"
                        }
                    },
                    addDeferredPaymentMethod: async (e, t, r, n, a) => u("/v2/reservations/".concat(e, "/wallet"), t, r, n, a)
                }
            }
        },
        98113: (e, t, r) => {
            r.d(t, {
                Y: () => o
            });
            var n = r(72668),
                a = r(26781);
            let o = e => {
                    let {
                        cryptography: t,
                        sessionStorageClient: r,
                        logger: i
                    } = e;
                    return {
                        getQuery: async e => {
                            let s = r.get("ingenicoQueries");
                            if ((0, n.b0)(s)) throw new a.L;
                            let l = await o({
                                cryptography: t,
                                sessionStorageClient: r,
                                logger: i
                            }).generateHash(s);
                            return e !== l ? void i.warning("New hash: ".concat(e, " is different than saved hash: ").concat(l)) : s
                        },
                        setQueries: e => {
                            r.set("ingenicoQueries", e)
                        },
                        generateHash: async e => {
                            let {
                                successQuery: r,
                                errorQuery: n
                            } = e;
                            return await t.encodeSha256("".concat(r).concat(n))
                        },
                        generateQueries: (e, t) => {
                            let r = s(new URLSearchParams(e)),
                                n = r.toString();
                            return r.set("paymentFormData", t), {
                                successQuery: n,
                                errorQuery: r.toString()
                            }
                        }
                    }
                },
                s = e => (e.delete("statusCode"), e.delete("paymentStatus"), e)
        }
    }
]);