! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            C = (new e.Error).stack;
        C && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[C] = "70ea131b-b33f-4b6d-946e-88559aa8dfba", e._sentryDebugIdIdentifier = "sentry-dbid-70ea131b-b33f-4b6d-946e-88559aa8dfba")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7958], {
        393: e => {
            e.exports = {
                "w-full": "LanguageSection_w-full__rq1z0",
                "w-fit": "LanguageSection_w-fit__0AgD6",
                "w-5/12": "LanguageSection_w-5__12__SYcRG",
                "w-7/12": "LanguageSection_w-7__12__Lxuo7",
                "h-full": "LanguageSection_h-full__lzQ6V",
                flex: "LanguageSection_flex__HVCrb",
                grow: "LanguageSection_grow__CviYw",
                "flex-1": "LanguageSection_flex-1__Q_7Ji",
                "shrink-0": "LanguageSection_shrink-0__a0Bws",
                "self-center": "LanguageSection_self-center__dimLy",
                "self-end": "LanguageSection_self-end__MWkg5",
                "items-center": "LanguageSection_items-center__qV07U",
                "justify-center": "LanguageSection_justify-center__w2qsV",
                "gap-xs": "LanguageSection_gap-xs__qXey2",
                "cursor-pointer": "LanguageSection_cursor-pointer__9RUFL",
                "touch-security-zone": "LanguageSection_touch-security-zone__9xpff",
                "touch-security-zone-always": "LanguageSection_touch-security-zone-always__Pbgyv",
                container: "LanguageSection_container__yme3q"
            }
        },
        2408: (e, C, t) => {
            "use strict";
            t.d(C, {
                A: () => i
            });
            var l = t(37876);
            let i = e => {
                let {
                    color: C
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("path", {
                        d: "M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z",
                        stroke: C,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M3 6L12.2571 13L21 6",
                        stroke: C,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }
        },
        2639: e => {
            e.exports = {
                "w-full": "LoginWithEmail_w-full__2CxHj",
                "w-fit": "LoginWithEmail_w-fit__pFu2L",
                "w-5/12": "LoginWithEmail_w-5__12__NoFs7",
                "w-7/12": "LoginWithEmail_w-7__12__tgr5z",
                "h-full": "LoginWithEmail_h-full__DiPa3",
                flex: "LoginWithEmail_flex__1QJm7",
                grow: "LoginWithEmail_grow__yRRli",
                "flex-1": "LoginWithEmail_flex-1__y5phq",
                "shrink-0": "LoginWithEmail_shrink-0__ybt3F",
                "self-center": "LoginWithEmail_self-center__IFdxC",
                "self-end": "LoginWithEmail_self-end__U_T3E",
                "items-center": "LoginWithEmail_items-center__nvb_U",
                "justify-center": "LoginWithEmail_justify-center__hdZWz",
                "gap-xs": "LoginWithEmail_gap-xs__AjlYn",
                "cursor-pointer": "LoginWithEmail_cursor-pointer__Fv_Gf",
                "touch-security-zone": "LoginWithEmail_touch-security-zone__nG5mg",
                "touch-security-zone-always": "LoginWithEmail_touch-security-zone-always__SygKm",
                loaderWrapper: "LoginWithEmail_loaderWrapper__RdUdU"
            }
        },
        2676: (e, C, t) => {
            "use strict";
            t.d(C, {
                OS: () => eG,
                Ol: () => S,
                yL: () => E
            });
            var l = t(37876),
                i = t(14232),
                s = t(77925),
                r = t(36271),
                a = t(40189),
                o = t.n(a),
                n = t(54704),
                c = t(88992),
                _ = t(91408),
                d = t(83031);
            let u = e => _.Yj().required(e("form-input_error_is-required")).matches(d.tf, e("form-input_email-format")).email(e("form-input_email-format")).max(80, e("form-input_email-too-long"));
            var h = t(71090),
                m = t(72668),
                p = t(84084);
            let f = e => {
                    let {
                        methods: C,
                        setError: t,
                        isSubmitting: i,
                        handleFieldOnBlur: s,
                        className: r,
                        onChange: a
                    } = e, {
                        trans: o
                    } = (0, n.m)(["common"]), {
                        register: c,
                        clearErrors: _
                    } = C;
                    return (0, l.jsx)(p.Y, { ...c("email", {
                            onChange: null != a ? a : () => {
                                _("email"), null == t || t(void 0)
                            }
                        }),
                        name: "email",
                        type: "email",
                        label: o("form-input_email_label"),
                        placeholder: o("form-input_email_placeholder"),
                        onBlur: e => s(e, "email"),
                        disabled: i,
                        clearIconAriaLabel: o("form-input_email_clear-aria-label"),
                        className: r
                    })
                },
                x = (0, i.forwardRef)((e, C) => {
                    let {
                        onSubmit: t,
                        error: r,
                        setError: a,
                        setIsLoading: o,
                        email: d
                    } = e, {
                        trans: p
                    } = (0, n.m)(["common"]), x = (0, h.t)(_.Ik({
                        email: u(p)
                    })), V = (0, c.mN)({
                        mode: "onBlur",
                        reValidateMode: "onBlur",
                        resolver: x
                    }), {
                        register: H,
                        getValues: L,
                        formState: g,
                        setValue: j
                    } = V;
                    (0, i.useEffect)(() => {
                        d && j("email", d)
                    }, [d, j]), (0, i.useImperativeHandle)(C, () => ({
                        getValues: L
                    }), [L]);
                    let w = g.isSubmitting,
                        M = V.handleSubmit(() => {
                            o(!0), t({
                                email: L().email
                            })
                        }),
                        y = async (e, C) => {
                            await H(C).onBlur(e)
                        };
                    return (0, i.useEffect)(() => {
                        (0, m.b0)(r) || V.setError("email", {
                            type: "manual",
                            message: p("form-input_error_generic-error")
                        })
                    }, [r, V]), (0, l.jsx)(c.Op, { ...V,
                        children: (0, l.jsxs)("form", {
                            onSubmit: M,
                            children: [(0, l.jsx)(f, {
                                methods: V,
                                setError: a,
                                isSubmitting: w,
                                handleFieldOnBlur: y
                            }), (0, l.jsx)(s.$n, {
                                type: "button",
                                size: "fullWidth",
                                onClick: M,
                                className: "mt-m",
                                isLoading: w,
                                children: p("password-recovery-form_button_get-code")
                            })]
                        })
                    })
                }),
                V = e => _.Yj().required(e("form-input_error_is-required")),
                H = e => _.Yj().required(e("common:form-input_error_is-required"));
            var L = t(2165),
                g = t(35004),
                j = t(12809);
            let w = e => {
                    let {
                        color: C
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("rect", {
                            width: "24",
                            height: "24",
                            rx: "12",
                            fill: C
                        }), (0, l.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "6",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            fill: "none"
                        }), (0, l.jsx)("path", {
                            d: "M8 8L16 16",
                            stroke: "#ffffff",
                            strokeWidth: "1",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                M = e => {
                    let {
                        methods: C,
                        isSubmitting: t,
                        onChange: i,
                        label: s,
                        placeholder: r
                    } = e, {
                        trans: a
                    } = (0, n.m)(["common"]), {
                        register: o
                    } = C;
                    return (0, l.jsx)(p.Y, { ...o("password", {
                            onChange: () => null == i ? void 0 : i()
                        }),
                        name: "password",
                        type: "password",
                        label: null != s ? s : a("form-input_password-label"),
                        placeholder: null != r ? r : a("form-input_password-placeholder"),
                        disabled: t
                    })
                },
                y = e => {
                    let {
                        methods: C,
                        isPasswordSubmitted: t,
                        setIsPasswordValid: r,
                        value: a,
                        setError: o,
                        className: c
                    } = e, {
                        trans: _
                    } = (0, n.m)(["common"]), [u, h] = (0, i.useState)({
                        minLength: !1,
                        hasNumber: !1,
                        hasLetter: !1
                    }), {
                        getValues: p,
                        clearErrors: f,
                        formState: x
                    } = C, V = x.isSubmitting;
                    (0, i.useEffect)(() => {
                        (0, m.b0)(a) || H(a)
                    }, [a]);
                    let H = e => {
                            let t = (0, d.fZ)(e),
                                l = !(0, d.H9)(e, 8) || !(0, d.yn)(e) || !(0, d.pb)(e) || t;
                            t ? C.setError("password", {
                                type: "manual",
                                message: _("form-input_error_no-special-characters")
                            }) : (f("password"), o(void 0)), h({
                                hasNumber: (0, d.yn)(e),
                                minLength: (0, d.H9)(e, 8),
                                hasLetter: (0, d.pb)(e)
                            }), r(!l)
                        },
                        L = e => e ? j.A : w,
                        y = e => t ? e ? "support-success-dark" : "support-error-dark" : e ? "support-success-dark" : "text-mid",
                        b = e => t ? e ? "support-success-dark" : "support-error-dark" : e ? "support-success-dark" : "mid";
                    return (0, l.jsxs)("div", {
                        "data-testid": "password-with-validators",
                        className: c,
                        children: [(0, l.jsx)(M, {
                            methods: C,
                            isSubmitting: V,
                            onChange: () => H(p().password),
                            label: _("form-input_new-password_label"),
                            placeholder: _("form-input_new-password_placeholder")
                        }), (0, l.jsxs)(g.s, {
                            direction: "column",
                            gap: "xxs",
                            className: "mt-xs",
                            children: [(0, l.jsx)(s.hf, {
                                icon: L(u.minLength),
                                iconSize: "l",
                                iconColor: y(u.minLength),
                                text: _("password-validator_minimum-length"),
                                fontStyle: "s-300",
                                fontColor: b(u.minLength),
                                gap: "xs"
                            }), (0, l.jsx)(s.hf, {
                                icon: L(u.hasNumber),
                                iconSize: "l",
                                iconColor: y(u.hasNumber),
                                text: _("password-validator_minimum-number"),
                                fontStyle: "s-300",
                                fontColor: b(u.hasNumber),
                                gap: "xs"
                            }), (0, l.jsx)(s.hf, {
                                icon: L(u.hasLetter),
                                iconSize: "l",
                                iconColor: y(u.hasLetter),
                                text: _("password-validator_minimum-letter"),
                                fontStyle: "s-300",
                                fontColor: b(u.hasLetter),
                                gap: "xs"
                            })]
                        })]
                    })
                },
                b = (0, i.forwardRef)((e, C) => {
                    let {
                        getFieldState: t,
                        formState: i
                    } = (0, c.xW)(), r = t(e.name, i).error;
                    return (0, l.jsx)(s.r4, { ...e,
                        ref: C,
                        error: r
                    })
                }),
                v = e => {
                    let {
                        methods: C,
                        setError: t,
                        isSubmitting: i,
                        autoFocus: s,
                        value: r,
                        className: a
                    } = e, {
                        trans: o
                    } = (0, n.m)(["common"]), {
                        register: c,
                        clearErrors: _,
                        setValue: d
                    } = C;
                    return (0, l.jsx)(b, { ...c("code"),
                        numberOfInputs: 6,
                        label: o("form-input_code-label"),
                        disabled: i,
                        className: a,
                        autoFocus: s,
                        setValue: (e, C) => d(e, C),
                        clearErrors: () => {
                            _("code"), null == t || t(void 0)
                        },
                        value: r
                    })
                },
                Z = (0, i.forwardRef)((e, C) => {
                    let {
                        onSubmit: t,
                        error: r,
                        setError: a,
                        setIsLoading: o,
                        codeAndPassword: u
                    } = e, {
                        trans: p
                    } = (0, n.m)(["common"]), [f, x] = (0, i.useState)(!1), [g, j] = (0, i.useState)(!1), w = (0, h.t)((e => _.Ik({
                        code: H(e),
                        password: V(e)
                    }))(p)), M = (0, c.mN)({
                        resolver: w
                    }), {
                        getValues: b,
                        formState: Z,
                        clearErrors: S,
                        setValue: E
                    } = M;
                    (0, i.useImperativeHandle)(C, () => ({
                        getValues: b
                    }), [b]);
                    let k = Z.isSubmitting,
                        R = () => {
                            x(!0);
                            let e = b().code,
                                C = b().password,
                                l = (e => {
                                    let C = (0, m.Im)(e) || 6 !== e.length;
                                    return C ? M.setError("code", {
                                        type: "manual",
                                        message: p("form-input_error_is-required")
                                    }) : (S("code"), a(void 0)), C
                                })(e),
                                i = (0, d.fZ)(C);
                            if (!g && !i) return void M.setError("password", {});
                            g && !l && (S(), a(void 0), M.handleSubmit(() => {
                                o(!0), t({
                                    code: e,
                                    password: C
                                })
                            })())
                        };
                    return (0, i.useEffect)(() => {
                        (0, m.b0)(u) || (x(!0), E("code", u.code), E("password", u.password))
                    }, [u]), (0, i.useEffect)(() => {
                        (0, m.b0)(r) || (0, m.Im)(r) || (r === L.j.INVALID_OTP ? M.setError("code", {
                            type: "manual",
                            message: p("form-input_error_invalid-otp")
                        }, {
                            shouldFocus: !1
                        }) : r === L.j.PASSWORD_POLICY_CHECK_FAILURE ? M.setError("password", {
                            type: "manual",
                            message: p("form-input_error_password-policy-check-failure")
                        }, {
                            shouldFocus: !1
                        }) : r === L.j.REGENERATE_OTP ? M.setError("password", {
                            type: "manual",
                            message: p("form-input_error_regenerate-otp")
                        }, {
                            shouldFocus: !1
                        }) : M.setError("password", {
                            type: "manual",
                            message: p("form-input_error_generic-error")
                        }, {
                            shouldFocus: !1
                        }))
                    }, [r]), (0, l.jsx)(c.Op, { ...M,
                        children: (0, l.jsxs)("form", {
                            onSubmit: R,
                            children: [(0, l.jsx)(v, {
                                methods: M,
                                isSubmitting: k,
                                autoFocus: (0, m.b0)(u),
                                value: null == u ? void 0 : u.code,
                                className: "mb-l"
                            }), (0, l.jsx)(y, {
                                methods: M,
                                isPasswordSubmitted: f,
                                setIsPasswordValid: j,
                                value: null == u ? void 0 : u.password,
                                setError: a
                            }), (0, l.jsx)(s.$n, {
                                type: "button",
                                size: "fullWidth",
                                onClick: R,
                                className: "mt-l",
                                isLoading: k,
                                children: p("form-input_change-password-button")
                            })]
                        })
                    })
                });
            var S = function(e) {
                    return e.LOGIN = "login", e.LOGIN_WITH_EMAIL = "loginWithMail", e.PASSWORD_RECOVERY_CODE_REQUEST = "passwordRecoveryCodeRequest", e.PASSWORD_RECOVERY_NEW_PASSWORD = "passwordRecoveryNewPassword", e.PASSWORD_RECOVERY_SUCCESS = "passwordRecoverySuccess", e.REGISTRATION_CODE = "registrationCode", e.REGISTRATION_SUCCESS = "registrationSuccess", e
                }({}),
                E = function(e) {
                    return e[e.LOGIN = 0] = "LOGIN", e[e.REGISTRATION = 1] = "REGISTRATION", e
                }({}),
                k = t(62938),
                R = t(82802),
                I = t(26227),
                N = t.n(I),
                B = t(15479),
                O = t.n(B),
                A = t(2408),
                P = t(34155),
                z = t(84640);
            let T = e => {
                    let {
                        email: C,
                        handleEdit: t,
                        onRequestCode: i,
                        withButton: r = !1,
                        isSendingNewCode: a = !1,
                        className: o
                    } = e, {
                        trans: c
                    } = (0, n.m)(["common"]);
                    return (0, l.jsxs)("div", {
                        className: (0, z.x)(O().emailForm, o),
                        children: [(0, l.jsx)(s.hf, {
                            icon: A.A,
                            fontStyle: "m-700",
                            text: c("login-form_your-email"),
                            iconSize: "l",
                            iconColor: "fill-neutral-04",
                            fontColor: "dark",
                            gap: "xs"
                        }), (0, l.jsxs)(g.s, {
                            justifyContent: "space-between",
                            direction: "column",
                            children: [(0, l.jsx)(s.EY, {
                                fontStyle: "m-500",
                                className: O().emailText,
                                children: C
                            }), (0, l.jsx)(P.v, {
                                onClick: t,
                                children: c("edit")
                            })]
                        }), r && (0, l.jsx)(s.$n, {
                            variant: "secondary",
                            type: "button",
                            size: "small",
                            className: O().button,
                            onClick: () => null == i ? void 0 : i({
                                email: C
                            }),
                            isLoading: a,
                            children: c("password-recovery-form_button_request-new-code")
                        })]
                    })
                },
                Y = () => {
                    let [e, C] = (0, i.useState)(!1), t = "6LfAoGMrAAAAAB8fLs8uilCCIyGMhO8zWvpHN5lf";
                    (0, i.useEffect)(() => {
                        let e = "recaptcha-enterprise";
                        if (document.getElementById(e)) return void C(!0);
                        let l = document.createElement("script");
                        l.id = e, l.src = "https://www.google.com/recaptcha/enterprise.js?render=".concat(t), l.async = !0, l.onload = () => C(!0), l.onerror = () => {
                            console.error("Failed to load reCAPTCHA Enterprise script")
                        }, document.body.appendChild(l)
                    }, [t]);
                    let l = (0, i.useCallback)(async C => {
                        var l;
                        return t ? e && (null == (l = window.grecaptcha) ? void 0 : l.enterprise) ? new Promise((e, l) => {
                            try {
                                window.grecaptcha.enterprise.ready(() => {
                                    window.grecaptcha.enterprise.execute(t, {
                                        action: C
                                    }).then(C => e(C)).catch(e => l(Error("Error executing reCAPTCHA: ".concat(e))))
                                })
                            } catch (e) {
                                l(Error("grecaptcha.enterprise.ready failed: ".concat(e)))
                            }
                        }) : null : "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    }, [e]);
                    return {
                        isReady: e,
                        execute: l
                    }
                },
                W = e => {
                    let {
                        email: C,
                        isPasswordRecoveryCodeRequestStep: t,
                        setCurrentEmail: r,
                        setNewPassword: a,
                        setNextStep: o,
                        setNotification: c
                    } = e, {
                        trans: _
                    } = (0, n.m)(["common"]), {
                        execute: d
                    } = Y(), [u, h] = (0, i.useState)(C), [p, f] = (0, i.useState)(!1), [V, H] = (0, i.useState)(!1), [j, w] = (0, i.useState)(void 0), [M, y] = (0, i.useState)(void 0), {
                        performMutation: b
                    } = (0, k.w)("handleGetPasswordCode", async e => {
                        t ? f(!0) : H(!0), h(e.email);
                        let C = await d("password_recovery");
                        if ((0, m.kZ)(C)) {
                            w(L.j.GENERIC_ERROR), f(!1);
                            return
                        }
                        let l = await R.k.resolve("getPasswordCode")(e.email, C);
                        if ("success" !== l) return void(t ? (w(l), f(!1)) : (c({
                            visible: !0,
                            title: _("form-input_error_generic-error"),
                            type: "error"
                        }), H(!1)));
                        w(void 0), c({
                            visible: !0,
                            title: _("password-recovery-modal_code-notification"),
                            type: "success"
                        }), o(S.PASSWORD_RECOVERY_NEW_PASSWORD), f(!1), H(!1)
                    }), {
                        performMutation: v
                    } = (0, k.w)("handleOnSubmit", async e => {
                        y(e);
                        let C = await R.k.resolve("createNewPassword")(u, e.password, e.code);
                        if ("success" !== C) {
                            w(C), f(!1);
                            return
                        }
                        w(void 0), a(e.password), r(u), o(S.PASSWORD_RECOVERY_SUCCESS), f(!1)
                    });
                    return (0, l.jsx)(l.Fragment, {
                        children: p ? (0, l.jsx)("div", {
                            className: N().loaderWrapper,
                            children: (0, l.jsx)(s.aH, {
                                variant: "gradient"
                            })
                        }) : (0, l.jsxs)("section", {
                            children: [(0, l.jsxs)(g.s, {
                                direction: "column",
                                gap: "xs",
                                className: "mb-m",
                                children: [(0, l.jsx)(s.EY, {
                                    fontStyle: "ml-700",
                                    children: _("password-recovery-modal_subtitle")
                                }), t ? (0, l.jsx)(s.EY, {
                                    fontStyle: "m-500",
                                    children: _("password-recovery-modal_email-description")
                                }) : (0, l.jsx)(s.EY, {
                                    fontStyle: "m-500",
                                    children: _("password-recovery-modal_code-description")
                                })]
                            }), t ? (0, l.jsx)(x, {
                                email: u,
                                onSubmit: b,
                                error: j,
                                setError: w,
                                setIsLoading: f
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(T, {
                                    email: u,
                                    handleEdit: () => o(S.PASSWORD_RECOVERY_CODE_REQUEST),
                                    onRequestCode: b,
                                    withButton: !0,
                                    isSendingNewCode: V,
                                    className: "mb-l"
                                }), (0, l.jsx)(Z, {
                                    onSubmit: v,
                                    error: j,
                                    setError: w,
                                    setIsLoading: f,
                                    codeAndPassword: M
                                })]
                            })]
                        })
                    })
                };
            var F = t(61810);
            let D = (0, i.forwardRef)((e, C) => {
                let {
                    onSubmit: t,
                    error: r,
                    setError: a,
                    setIsLoading: o
                } = e, {
                    trans: d
                } = (0, n.m)(["common"]), u = (0, h.t)(_.Ik({
                    password: V(d)
                })), p = (0, c.mN)({
                    resolver: u
                }), {
                    getValues: f,
                    formState: x,
                    clearErrors: H
                } = p;
                (0, i.useImperativeHandle)(C, () => ({
                    getValues: f
                }), [f]);
                let g = x.isSubmitting,
                    j = p.handleSubmit(() => {
                        o(!0), t({
                            password: f().password
                        })
                    });
                return (0, i.useEffect)(() => {
                    if (!(0, m.b0)(r)) {
                        if (r === L.j.CREDENTIALS_ERROR) return void p.setError("password", {
                            type: "manual",
                            message: d("form-input_error_credentials")
                        });
                        p.setError("password", {
                            type: "manual",
                            message: d("form-input_error_login-failed")
                        })
                    }
                }, [r, p]), (0, l.jsx)(c.Op, { ...p,
                    children: (0, l.jsxs)("form", {
                        onSubmit: j,
                        children: [(0, l.jsx)(M, {
                            methods: p,
                            isSubmitting: g,
                            onChange: () => {
                                H("password"), a(void 0)
                            }
                        }), (0, l.jsx)(s.$n, {
                            type: "button",
                            size: "fullWidth",
                            onClick: j,
                            className: "mt-l mb-l",
                            isLoading: g,
                            children: d("login-form_button_last-step")
                        })]
                    })
                })
            });
            var G = t(2639),
                q = t.n(G),
                U = t(65381);
            let Q = e => {
                    let {
                        handleChangePassword: C
                    } = e, {
                        trans: t
                    } = (0, n.m)(["common"]);
                    return (0, l.jsx)(g.s, {
                        justifyContent: "center",
                        children: (0, l.jsx)(P.v, {
                            onClick: C,
                            variant: "thickUnderline",
                            children: t("login-modal_forgot-password")
                        })
                    })
                },
                J = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("g", {
                        clipPath: "url(#clip0_552_300)",
                        children: [(0, l.jsx)("path", {
                            d: "M16.7633 -0.00278282C16.87 1.39057 16.4293 2.77064 15.5349 3.84435C15.1066 4.37703 14.5631 4.80559 13.9452 5.09775C13.3272 5.38991 12.6511 5.53805 11.9676 5.53102C11.924 4.86097 12.0129 4.1889 12.2292 3.55322C12.4455 2.91755 12.7849 2.33073 13.2281 1.82632C14.1346 0.793813 15.3968 0.140736 16.7633 -0.00278282Z",
                            fill: "black"
                        }), (0, l.jsx)("path", {
                            d: "M19.2559 10.1384C18.8018 10.9385 18.5574 11.8404 18.5456 12.7604C18.5467 13.7951 18.8524 14.8067 19.4245 15.6689C19.9966 16.5311 20.8099 17.2058 21.763 17.6088C21.3883 18.8261 20.8235 19.9764 20.0895 21.0172C19.1037 22.4917 18.0702 23.9323 16.4298 23.9589C15.6496 23.9769 15.123 23.7526 14.5743 23.5188C14.0019 23.275 13.4054 23.0209 12.472 23.0209C11.4822 23.0209 10.859 23.2832 10.258 23.5361C9.7386 23.7547 9.23575 23.9663 8.52708 23.9957C6.96486 24.0536 5.77095 22.4219 4.74939 20.9612C2.70758 17.9782 1.11769 12.5545 3.24916 8.86412C3.74123 7.97989 4.45395 7.2382 5.31788 6.71132C6.18182 6.18444 7.16751 5.89033 8.1789 5.85765C9.06493 5.83943 9.91513 6.18093 10.6605 6.48033C11.2306 6.7093 11.7393 6.91365 12.1559 6.91365C12.5222 6.91365 13.0167 6.71737 13.5931 6.48862C14.501 6.12827 15.612 5.68737 16.744 5.8062C17.6116 5.83334 18.461 6.06242 19.2245 6.47522C19.9881 6.88803 20.6449 7.47319 21.1428 8.18424C20.3591 8.66606 19.71 9.33829 19.2559 10.1384Z",
                            fill: "black"
                        })]
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "clip0_552_300",
                            children: (0, l.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white"
                            })
                        })
                    })]
                }),
                X = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("rect", {
                        width: "24",
                        height: "24"
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.7323 10.096H14.8191L14.5803 12.2599H12.7323V18.383H9.99356V12.2599H8.69149V10.096H9.99356V8.69618C9.99356 7.69388 10.5059 6.12766 12.7574 6.12766L14.7856 6.13502V8.23499H13.3129C13.0732 8.23499 12.7323 8.34635 12.7323 8.82403V10.096Z",
                        fill: "#3B5998"
                    }), (0, l.jsx)("mask", {
                        id: "mask0_552_292",
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "24",
                        height: "24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.7323 10.096H14.8191L14.5803 12.2599H12.7323V18.383H9.99356V12.2599H8.69149V10.096H9.99356V8.69618C9.99356 7.69388 10.5059 6.12766 12.7574 6.12766L14.7856 6.13502V8.23499H13.3129C13.0732 8.23499 12.7323 8.34635 12.7323 8.82403V10.096Z",
                            fill: "white"
                        })
                    }), (0, l.jsx)("g", {
                        mask: "url(#mask0_552_292)"
                    })]
                });
            var K = t(92684),
                $ = t(28691),
                ee = t.n($),
                eC = t(39126);
            let et = e => {
                    let {
                        isRegistration: C = !1,
                        setIsLoading: t,
                        onSSOLogin: i,
                        className: r
                    } = e, {
                        trans: a
                    } = (0, n.m)(["common"]), o = async e => {
                        t(!0), await i(e)
                    };
                    return (0, l.jsx)("div", {
                        className: r,
                        children: (0, l.jsxs)(g.s, {
                            direction: "column",
                            alignItems: "center",
                            className: "w-full",
                            children: [(0, l.jsx)(s.EY, {
                                fontStyle: "m-700",
                                className: "mt-xl mb-m",
                                children: a(C ? "login-modal_social-registration_title" : "login-modal_social-login_title")
                            }), (0, l.jsxs)(g.s, {
                                justifyContent: "center",
                                gap: "m",
                                children: [(0, l.jsx)("button", {
                                    className: ee().socialLoginButton,
                                    "aria-label": a("login-modal_social-login_google"),
                                    onClick: async () => {
                                        await o("CIAMB2CGoogle")
                                    },
                                    children: (0, l.jsx)(eC.I, {
                                        icon: K.A,
                                        size: "l"
                                    })
                                }), (0, l.jsx)("button", {
                                    className: ee().socialLoginButton,
                                    "aria-label": a("login-modal_social-login_facebook"),
                                    onClick: async () => {
                                        await o("CIAMB2CFacebook")
                                    },
                                    children: (0, l.jsx)(eC.I, {
                                        icon: X,
                                        size: "l"
                                    })
                                }), (0, l.jsx)("button", {
                                    className: ee().socialLoginButton,
                                    "aria-label": a("login-modal_social-login_apple"),
                                    onClick: async () => {
                                        await o("CIAMB2CApple")
                                    },
                                    children: (0, l.jsx)(eC.I, {
                                        icon: J,
                                        size: "l"
                                    })
                                })]
                            })]
                        })
                    })
                },
                el = e => {
                    let {
                        email: C,
                        isLoginWithEmailStep: t,
                        onLogin: r,
                        onSSOLogin: a,
                        onClose: o,
                        setNextStep: c
                    } = e, {
                        trans: _
                    } = (0, n.m)(["common"]), [d, u] = (0, i.useState)(!1), [h, m] = (0, i.useState)(void 0);
                    return (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_USER_GET, () => {
                        u(!1), o()
                    }), []), (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_LOGIN_CREDENTIALS_ERROR, () => {
                        m(L.j.CREDENTIALS_ERROR), u(!1)
                    }), []), (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_LOGIN_ERROR, () => {
                        m(L.j.LOGIN_ERROR), u(!1)
                    }), []), (0, l.jsx)(l.Fragment, {
                        children: d ? (0, l.jsx)("div", {
                            className: q().loaderWrapper,
                            children: (0, l.jsx)(s.aH, {
                                variant: "gradient"
                            })
                        }) : (0, l.jsxs)("section", {
                            children: [(0, l.jsx)(s.EY, {
                                as: "h2",
                                fontStyle: "ml-700",
                                className: "mb-mobile-m mb-tablet-m mb-laptop-l mb-desktop-l",
                                children: _("login-modal_subtitle")
                            }), t && (0, l.jsx)(T, {
                                email: C,
                                handleEdit: () => {
                                    var e;
                                    o(), m(void 0), u(!1), null == (e = document.getElementById("email")) || e.focus()
                                },
                                className: "mb-m"
                            }), (0, l.jsx)(D, {
                                onSubmit: e => {
                                    r({
                                        email: C,
                                        password: e.password
                                    })
                                },
                                error: h,
                                setError: m,
                                setIsLoading: u
                            }), (0, l.jsx)(Q, {
                                handleChangePassword: () => {
                                    c(S.PASSWORD_RECOVERY_CODE_REQUEST), u(!1)
                                }
                            }), (0, l.jsx)(et, {
                                setIsLoading: u,
                                onSSOLogin: a
                            })]
                        })
                    })
                };
            var ei = t(48192),
                es = t(25408),
                er = t.n(es);
            let ea = (0, i.forwardRef)((e, C) => {
                let {
                    onSubmit: t,
                    error: r,
                    setError: a,
                    setIsLoading: o,
                    email: d,
                    password: p
                } = e, {
                    trans: x
                } = (0, n.m)(["common"]), H = (0, h.t)((e => _.Ik({
                    email: u(e),
                    password: V(e)
                }))(x)), g = (0, c.mN)({
                    mode: "onBlur",
                    reValidateMode: "onBlur",
                    resolver: H
                }), {
                    register: j,
                    setValue: w,
                    getValues: y,
                    formState: b,
                    clearErrors: v
                } = g;
                (0, i.useEffect)(() => {
                    (0, m.b0)(d) || (0, m.b0)(p) || (w("email", d), w("password", p))
                }, [d, p, w]), (0, i.useImperativeHandle)(C, () => ({
                    getValues: y
                }), [y]);
                let Z = b.isSubmitting,
                    S = g.handleSubmit(() => {
                        o(!0), t({
                            email: y().email,
                            password: y().password
                        })
                    }),
                    E = async (e, C) => {
                        await j(C).onBlur(e)
                    };
                (0, i.useEffect)(() => {
                    if (!(0, m.b0)(r)) {
                        if (r === L.j.CREDENTIALS_ERROR) {
                            g.setError("email", {
                                type: "manual"
                            }), g.setError("password", {
                                type: "manual",
                                message: x("form-input_error_credentials")
                            });
                            return
                        }
                        g.setError("email", {
                            type: "manual"
                        }), g.setError("password", {
                            type: "manual",
                            message: x("form-input_error_login-failed")
                        })
                    }
                }, [r, g]);
                let k = () => {
                    v("email"), v("password"), a(void 0)
                };
                return (0, l.jsx)(c.Op, { ...g,
                    children: (0, l.jsxs)("form", {
                        onSubmit: S,
                        children: [(0, l.jsx)(f, {
                            methods: g,
                            isSubmitting: Z,
                            handleFieldOnBlur: E,
                            className: "mb-m",
                            onChange: k
                        }), (0, l.jsx)(M, {
                            methods: g,
                            isSubmitting: Z,
                            onChange: k
                        }), (0, l.jsx)(s.$n, {
                            type: "button",
                            size: "fullWidth",
                            onClick: S,
                            className: "mt-l mb-l",
                            isLoading: Z,
                            children: x("login-modal_login-form-header_button")
                        })]
                    })
                })
            });
            var eo = t(84529),
                en = t.n(eo),
                ec = t(84703);
            let e_ = e => {
                    let {
                        color: C
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            d: "M22.4217 4.43875L22.1974 8.41967C22.1511 9.24269 21.4464 9.87233 20.6234 9.82602C19.8003 9.77971 19.1707 9.07498 19.217 8.25196L19.379 5.46225L13.2945 11.5764C12.9321 11.9404 12.403 12.0833 11.9067 11.9514C11.4103 11.8196 11.0219 11.4329 10.8879 10.937C10.754 10.4412 10.8947 9.91157 11.2571 9.54762L15.8197 4.96296L14.7972 3.95C14.0622 3.22105 13.6153 2.25109 13.5389 1.21875",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                            d: "M7.2771 14.1553V17.0302",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                            d: "M3.68359 14.1553H10.8711",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2.29773 22.7803C2.0894 22.7801 1.89137 22.6897 1.75481 22.5323C1.61825 22.375 1.55656 22.1662 1.58569 21.96C1.99243 19.1294 4.41752 17.0278 7.27722 17.0278C10.1369 17.0278 12.562 19.1294 12.9688 21.96C12.9982 22.1662 12.9367 22.3751 12.8004 22.5326C12.664 22.6901 12.466 22.7808 12.2577 22.7812L2.29773 22.7803Z",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                ed = e => {
                    let {
                        color: C
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            d: "M23.5739 10.6758H2.42603C1.81131 10.6758 1.31299 11.1691 1.31299 11.7776V23.8982C1.31299 24.5067 1.81131 25 2.42603 25H23.5739C24.1886 25 24.6869 24.5067 24.6869 23.8982V11.7776C24.6869 11.1691 24.1886 10.6758 23.5739 10.6758Z",
                            fill: "white"
                        }), (0, l.jsx)("path", {
                            d: "M24.1652 4.16797H1.83478C1.37374 4.16797 1 4.53796 1 4.99437V23.9327C1 24.3891 1.37374 24.7591 1.83478 24.7591H24.1652C24.6263 24.7591 25 24.3891 25 23.9327V4.99437C25 4.53796 24.6263 4.16797 24.1652 4.16797Z",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                            d: "M1 10.5034H25",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                            d: "M7.3999 6.54376V1",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                            d: "M18.6001 6.54376V1",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                            d: "M17 14.4634L12.2 20.7991L9 17.6312",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                };
            var eu = t(77487),
                eh = t(53818);
            let em = () => {
                    let {
                        queryUtils: e,
                        query: C
                    } = (0, eh.Z)(), t = e.getRawParam("locale"), {
                        trans: i
                    } = (0, n.m)(["common"]);
                    return (0, l.jsxs)("div", {
                        className: en().container,
                        children: [(0, l.jsx)(s.EY, {
                            className: "mb-m",
                            fontStyle: "ml-700",
                            as: "p",
                            children: i("login-modal_login-form-links_title")
                        }), (0, l.jsx)(ep, {
                            icon: e_,
                            text: i("login-modal_login-form-links_check-in-online"),
                            viewBox: "square",
                            href: (e => {
                                if (!(0, m.b0)(e)) return "sl-si" === e.toLowerCase() || "pl-pl" === e.toLowerCase() ? "https://www.barcelo.com/en-ie/bhg/check-in/" : "https://www.barcelo.com/".concat(e.toLowerCase(), "/bhg/check-in/")
                            })(t)
                        }), (0, l.jsx)(s.cG, {
                            dir: "horizontal"
                        }), (0, l.jsx)(ep, {
                            icon: ed,
                            text: i("login-modal_login-form-links_manage-reservations"),
                            viewBox: "0 0 26 26",
                            href: (e => {
                                let {
                                    store: C,
                                    country: t,
                                    currency: l,
                                    locale: i,
                                    marketprice: s
                                } = e;
                                return "".concat(origin, "/management?store=").concat(C, "&country=").concat(t, "&locale=").concat(i, "&currency=").concat(l, "&marketprice=").concat(s)
                            })(C)
                        })]
                    })
                },
                ep = e => {
                    let {
                        icon: C,
                        text: t,
                        viewBox: i,
                        href: r
                    } = e, a = (0, ec.QD)().properties.isRTL;
                    return (0, l.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: r,
                        children: (0, l.jsxs)(g.s, {
                            className: "cursor-pointer",
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [(0, l.jsxs)("div", {
                                className: en().linkAction,
                                children: [(0, l.jsx)(eC.I, {
                                    flipHorizontally: a,
                                    size: "l",
                                    icon: C,
                                    viewBox: i
                                }), (0, l.jsx)(s.EY, {
                                    fontStyle: "m-300",
                                    children: t
                                })]
                            }), (0, l.jsx)(eC.I, {
                                flipHorizontally: a,
                                size: "l",
                                icon: eu.A
                            })]
                        })
                    })
                };
            var ef = t(61083),
                ex = t.n(ef);
            let eV = () => {
                    let {
                        trans: e
                    } = (0, n.m)(["common"]);
                    return (0, l.jsx)("div", {
                        className: ex().bannerContainer,
                        children: (0, l.jsxs)("div", {
                            className: ex().innerContainer,
                            children: [(0, l.jsx)(s.EY, {
                                fontStyle: "xl-700",
                                family: "normsPro",
                                className: "mb-xs",
                                as: "p",
                                children: e("password-recovery-modal_success_banner_title")
                            }), (0, l.jsx)(s.EY, {
                                fontStyle: "xl-500",
                                family: "barlowCondensed",
                                className: "mb-l",
                                as: "p",
                                uppercase: !0,
                                children: e("password-recovery-modal_success_banner_subtitle")
                            }), (0, l.jsx)("ul", {
                                className: ex().advantagesList,
                                children: ["password-recovery-modal_success_banner_advantages_1", "password-recovery-modal_success_banner_advantages_2", "password-recovery-modal_success_banner_advantages_3", "password-recovery-modal_success_banner_advantages_4"].map((C, t) => (0, l.jsx)("li", {
                                    children: (0, l.jsx)(s.EY, {
                                        fontStyle: "s-300",
                                        children: e(C)
                                    })
                                }, t))
                            })]
                        })
                    })
                },
                eH = e => {
                    let {
                        onLogin: C,
                        onClose: t,
                        setNextStep: r,
                        setRegistrationData: a,
                        onSSOLogin: o
                    } = e, {
                        trans: c
                    } = (0, n.m)(["common"]), [_, d] = (0, i.useState)(!1), [u, h] = (0, i.useState)(void 0), [m, p] = (0, i.useState)(void 0);
                    return (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_USER_GET, () => {
                        d(!1), t()
                    }), []), (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_LOGIN_CREDENTIALS_ERROR, () => {
                        h(L.j.CREDENTIALS_ERROR), d(!1)
                    }), []), (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_LOGIN_ERROR, () => {
                        h(L.j.LOGIN_ERROR), d(!1)
                    }), []), (0, i.useEffect)(() => {
                        a(void 0)
                    }, []), (0, l.jsx)(l.Fragment, {
                        children: _ ? (0, l.jsx)("div", {
                            className: er().loaderWrapper,
                            children: (0, l.jsx)(s.aH, {
                                variant: "gradient"
                            })
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsxs)("section", {
                                className: er().container,
                                children: [(0, l.jsx)(s.EY, {
                                    fontStyle: "ml-700",
                                    as: "h3",
                                    className: "mb-xs",
                                    children: c("login-modal_login-form-header_title")
                                }), (0, l.jsx)(s.EY, {
                                    fontStyle: "s-500",
                                    as: "p",
                                    className: "mb-l",
                                    children: c("login-modal_login-form-header_subtitle")
                                }), (0, l.jsx)(ea, {
                                    onSubmit: e => {
                                        p(e), C(e)
                                    },
                                    error: u,
                                    setError: h,
                                    setIsLoading: d,
                                    email: null == m ? void 0 : m.email,
                                    password: null == m ? void 0 : m.password
                                }), (0, l.jsx)(Q, {
                                    handleChangePassword: () => {
                                        r(S.PASSWORD_RECOVERY_CODE_REQUEST), d(!1)
                                    }
                                }), (0, l.jsx)(et, {
                                    setIsLoading: d,
                                    onSSOLogin: o
                                }), (0, l.jsx)("div", {
                                    className: "mt-xl mb-xl",
                                    children: (0, l.jsx)(em, {})
                                })]
                            }), (0, l.jsx)("section", {
                                children: (0, l.jsx)(eV, {})
                            })]
                        })
                    })
                };
            var eL = t(63261),
                eg = t.n(eL),
                ej = t(88904),
                ew = t.n(ej),
                eM = t(9163),
                ey = t(5523),
                eb = t(88523),
                ev = t(24712),
                eZ = t.n(ev);
            let eS = e => {
                    let {
                        generalConditionsUrl: C,
                        disabled: t,
                        register: i,
                        isRegistration: r
                    } = e;
                    return (0, l.jsx)("div", {
                        className: (0, z.x)(eZ().checkboxWrapper, "mt-m"),
                        children: (0, l.jsx)(eM.c, { ...i("registration"),
                            name: "registration",
                            disabled: t,
                            children: (0, l.jsx)(eb.H, {
                                i18nKey: r ? "common:register-form-checkbox_register-checkbox" : "new-reservation:personal-data_register-checkbox-revamp",
                                components: {
                                    regular: (0, l.jsx)(s.EY, {
                                        fontStyle: "s-300"
                                    }),
                                    conditions: (0, l.jsx)(s.N_, {
                                        fontStyle: "s-500",
                                        variant: "secondary",
                                        link: C,
                                        children: ""
                                    })
                                }
                            })
                        })
                    })
                },
                eE = (0, i.forwardRef)((e, C) => {
                    var t;
                    let {
                        onSubmit: r,
                        error: a,
                        setError: o,
                        setIsLoading: x,
                        registrationData: H,
                        checkIsEmailRegistered: g
                    } = e, {
                        trans: j
                    } = (0, n.m)(["common", "new-reservation"]), {
                        getRawParams: w
                    } = (0, eh.Z)(), [M, b] = (0, i.useState)(!1), [v, Z] = (0, i.useState)(!1), [S, E] = (0, i.useState)(!0), k = null == (t = w(["store"])) ? void 0 : t.store, R = (0, h.t)((e => _.Ik({
                        email: u(e),
                        name: _.Yj().required(e("form-input_error_is-required")).min(d.Ox, e("new-reservation:personal-data_form_name-too-short")).matches(d.pU, e("new-reservation:personal-data_form_name-invalid-characters")).matches(d.DQ, e("new-reservation:personal-data_form_name-invalid-characters")).max(40, e("new-reservation:personal-data_form_name-too-long")),
                        surname: _.Yj().required(e("form-input_error_is-required")).min(d.Ox, e("new-reservation:personal-data_form_surname-too-short")).matches(d.pU, e("new-reservation:personal-data_form_surname-invalid-characters")).matches(d.DQ, e("new-reservation:personal-data_form_surname-invalid-characters")).max(80, e("new-reservation:personal-data_form_surname-too-long")),
                        dateOfBirth: _.Yj().required(e("form-input_error_is-required")).test("date-of-birth-not-valid", e("form-input_error_date-not-valid"), e => F.g.now().isAfter(F.g.fromString(e)) && F.g.isValid(e)),
                        password: V(e),
                        privacyPolitics: _.lc().default(!1).oneOf([!0], e("new-reservation:personal-data_form_privacy-policy-should-be-accepted")).required(e("new-reservation:personal-data_form_privacy-policy-should-be-accepted")),
                        registration: _.lc().default(!1).oneOf([!0], e("new-reservation:personal-data_form_registration-should-be-accepted")).required(e("new-reservation:personal-data_form_registration-should-be-accepted"))
                    }))(j)), I = (0, c.mN)({
                        mode: "onBlur",
                        reValidateMode: "onBlur",
                        resolver: R
                    }), {
                        register: N,
                        setValue: B,
                        getValues: O,
                        formState: A,
                        clearErrors: P,
                        getFieldState: T
                    } = I;
                    (0, i.useImperativeHandle)(C, () => ({
                        getValues: O
                    }), [O]);
                    let Y = A.isSubmitting,
                        W = async (e, C) => {
                            await N(C).onBlur(e)
                        },
                        D = async e => {
                            if (await W(e, "email"), !(0, m.b0)(T("email").error)) return;
                            let C = O("email");
                            await G(C)
                        },
                        G = async e => {
                            await g(e) && I.setError("email", {
                                type: "manual",
                                message: j("form-input_error_email-already-registered")
                            }, {
                                shouldFocus: !1
                            })
                        },
                        q = async e => {
                            await W(e, "dateOfBirth"), (e => {
                                let C = e.target;
                                return !!C.validity.valid || (C.validity.valueMissing ? (I.setError("dateOfBirth", {
                                    type: "manual",
                                    message: j("form-input_error_date-of-birth_required")
                                }), !1) : !C.validity.badInput)
                            })(e) || I.setError("dateOfBirth", {
                                type: "manual",
                                message: j("form-input_error_date-not-valid")
                            })
                        },
                        U = async () => {
                            b(!0), await G(O().email);
                            let e = O().password,
                                C = (0, d.fZ)(e);
                            if ((0, m.O9)(T("email").error)) {
                                var t;
                                null == (t = document.getElementById("email")) || t.focus();
                                return
                            }
                            I.handleSubmit(() => {
                                if (!v && !C) return void I.setError("password", {});
                                x(!0), r({
                                    email: O().email,
                                    name: O().name,
                                    surname: O().surname,
                                    dateOfBirth: O().dateOfBirth,
                                    password: O().password,
                                    privacyPolitics: O().privacyPolitics,
                                    registration: O().registration
                                })
                            })()
                        },
                        Q = e => {
                            P(e), o(void 0)
                        };
                    return (0, i.useEffect)(() => {
                        H && (E(!1), B("email", H.email), B("name", H.name), B("surname", H.surname), B("dateOfBirth", H.dateOfBirth), B("password", H.password), B("privacyPolitics", H.privacyPolitics), B("registration", H.registration))
                    }, []), (0, i.useEffect)(() => {
                        (0, m.b0)(a) || (0, m.Im)(a) || a === L.j.GENERIC_ERROR && I.setError("password", {
                            type: "manual",
                            message: j("form-input_error_generic-error")
                        }, {
                            shouldFocus: !1
                        })
                    }, [a]), (0, l.jsx)(c.Op, { ...I,
                        children: (0, l.jsxs)("form", {
                            onSubmit: U,
                            children: [(0, l.jsx)(f, {
                                methods: I,
                                isSubmitting: Y,
                                handleFieldOnBlur: D,
                                className: "mb-m",
                                onChange: () => {
                                    Q("email")
                                }
                            }), (0, l.jsx)(p.Y, { ...N("name", {
                                    onChange: () => Q("name")
                                }),
                                name: "name",
                                label: j("form-input_name_label"),
                                onBlur: e => W(e, "name"),
                                disabled: Y,
                                className: "mt-m",
                                clearIconAriaLabel: j("form-input_name_clear-aria-label"),
                                placeholder: j("form-input_name_placeholder")
                            }), (0, l.jsx)(p.Y, { ...N("surname", {
                                    onChange: () => Q("surname")
                                }),
                                name: "surname",
                                label: j("form-input_surname_label"),
                                onBlur: e => W(e, "surname"),
                                disabled: Y,
                                className: "mt-m",
                                clearIconAriaLabel: j("form-input_surname_clear-aria-label"),
                                placeholder: j("form-input_surname_placeholder")
                            }), (0, l.jsx)(p.Y, { ...N("dateOfBirth", {
                                    onChange: () => {
                                        Q("dateOfBirth"), E((0, m.Im)(O().dateOfBirth))
                                    }
                                }),
                                name: "dateOfBirth",
                                type: "date",
                                label: j("form-input_date-of-birth_label"),
                                onBlur: e => q(e),
                                disabled: Y,
                                className: "mt-m",
                                inputClassName: (0, z.x)(ew().dateInput, S && ew().dateInputPlaceholder),
                                max: F.g.now().format("YYYY-MM-DD")
                            }), (0, l.jsx)(y, {
                                methods: I,
                                isPasswordSubmitted: M,
                                setIsPasswordValid: Z,
                                value: null == H ? void 0 : H.password,
                                setError: o,
                                className: "mt-m"
                            }), (0, l.jsx)(eM.c, { ...N("privacyPolitics"),
                                disabled: Y,
                                className: "mt-l",
                                name: "privacyPolitics",
                                children: (0, l.jsxs)(s.EY, {
                                    as: "div",
                                    fontStyle: "s-300",
                                    children: [j("register-form-checkbox_privacy-policy-text"), (0, l.jsx)(s.N_, {
                                        fontStyle: "s-500",
                                        variant: "secondary",
                                        link: (0, ey.hM)(k),
                                        children: j("register-form-checkbox_privacy-policy")
                                    })]
                                })
                            }), (0, l.jsx)(eS, {
                                generalConditionsUrl: (0, ey.TF)(k),
                                register: N,
                                disabled: Y,
                                isRegistration: !0
                            }), (0, l.jsx)(s.$n, {
                                type: "button",
                                size: "fullWidth",
                                onClick: U,
                                className: "mt-l",
                                isLoading: Y,
                                children: j("login-modal_registration-form-header_button")
                            })]
                        })
                    })
                });
            var ek = t(72511),
                eR = t(48711),
                eI = t(6240);
            let eN = e => {
                let {
                    setNextStep: C,
                    setCurrentEmail: t,
                    setNotification: r,
                    registrationData: a,
                    setRegistrationData: o,
                    onSSOLogin: c,
                    setUserIdentifier: _
                } = e, {
                    trans: d
                } = (0, n.m)(["common"]), {
                    queryUtils: u
                } = (0, eh.Z)(), {
                    execute: h
                } = Y(), p = u.getRawParam("country"), f = u.getRawParam("store"), x = (0, ec.QD)(), [V, H] = (0, i.useState)(!1), [g, j] = (0, i.useState)(void 0), {
                    showBoundary: w
                } = (0, ek.Md)(), M = async e => {
                    o(e);
                    let {
                        name: l,
                        surname: i,
                        dateOfBirth: s,
                        email: a,
                        password: n
                    } = e, c = await h("registration");
                    if ((0, m.kZ)(c)) {
                        j(L.j.GENERIC_ERROR), H(!1);
                        return
                    }
                    let u = await R.k.resolve("B2CRegister")({
                        name: l,
                        surname: i,
                        dateOfBirth: s,
                        email: a,
                        password: n,
                        country: null != p ? p : eI.J.country,
                        language: x.language,
                        store: null != f ? f : eI.J.store,
                        recaptchaCode: c
                    });
                    if ("success" !== u.status) {
                        j(L.j.GENERIC_ERROR), H(!1);
                        return
                    }
                    r({
                        visible: !0,
                        title: d("password-recovery-modal_code-notification"),
                        type: "success"
                    }), t(e.email), _(u.identifier), j(void 0), C(S.REGISTRATION_CODE), H(!1)
                }, y = async e => {
                    if ((0, m.Im)(e)) return !1;
                    try {
                        return await R.k.resolve("findUserExistsByEmail")(e), !0
                    } catch (e) {
                        var C;
                        if (e instanceof eR.pe && (null == (C = e.response) ? void 0 : C.status) === eR.kG.NotFound) return !1;
                        return w(e), !1
                    }
                };
                return (0, l.jsx)(l.Fragment, {
                    children: V ? (0, l.jsx)("div", {
                        className: eg().loaderWrapper,
                        children: (0, l.jsx)(s.aH, {
                            variant: "gradient"
                        })
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("section", {
                            className: eg().container,
                            children: [(0, l.jsx)(s.EY, {
                                fontStyle: "ml-700",
                                as: "h3",
                                className: "mb-xs",
                                children: d("login-modal_registration-form-header_title")
                            }), (0, l.jsx)(s.EY, {
                                fontStyle: "s-500",
                                as: "p",
                                className: "mb-l",
                                children: d("login-modal_registration-form-header_subtitle")
                            }), (0, l.jsx)(eE, {
                                onSubmit: M,
                                error: g,
                                setError: j,
                                setIsLoading: H,
                                registrationData: a,
                                checkIsEmailRegistered: y
                            }), (0, l.jsx)(et, {
                                className: "mb-xl",
                                isRegistration: !0,
                                setIsLoading: H,
                                onSSOLogin: c
                            })]
                        }), (0, l.jsx)("section", {
                            children: (0, l.jsx)(eV, {})
                        })]
                    })
                })
            };
            var eB = t(50647),
                eO = t.n(eB);
            let eA = (0, i.forwardRef)((e, C) => {
                    let {
                        onSubmit: t,
                        otpCode: r,
                        error: a,
                        setError: o,
                        setIsLoading: d,
                        setOtpCode: u
                    } = e, {
                        trans: p
                    } = (0, n.m)(["common"]), f = (0, h.t)(_.Ik({
                        code: H(p)
                    })), x = (0, c.mN)({
                        resolver: f
                    }), {
                        getValues: V,
                        formState: g,
                        clearErrors: j,
                        setValue: w,
                        setError: M
                    } = x;
                    (0, i.useImperativeHandle)(C, () => ({
                        getValues: V
                    }), [V]);
                    let y = g.isSubmitting,
                        b = () => {
                            let e = V().code;
                            (e => {
                                let C = (0, m.Im)(e) || 6 !== e.length;
                                return C ? M("code", {
                                    type: "manual",
                                    message: p("form-input_error_is-required")
                                }) : (j("code"), o(void 0)), C
                            })(e) || (j(), o(void 0), u(e), x.handleSubmit(() => {
                                d(!0), t({
                                    code: e
                                })
                            })())
                        };
                    return (0, i.useEffect)(() => {
                        (0, m.b0)(r) || w("code", r)
                    }, [r]), (0, i.useEffect)(() => {
                        if (!((0, m.b0)(a) || (0, m.Im)(a))) {
                            if (a === L.j.INVALID_OTP) return void M("code", {
                                type: "manual",
                                message: p("form-input_error_invalid-otp")
                            }, {
                                shouldFocus: !1
                            });
                            M("code", {
                                type: "manual",
                                message: p("form-input_error_generic-error")
                            }, {
                                shouldFocus: !1
                            })
                        }
                    }, [a]), (0, l.jsx)(c.Op, { ...x,
                        children: (0, l.jsxs)("form", {
                            onSubmit: b,
                            children: [(0, l.jsx)(v, {
                                methods: x,
                                isSubmitting: y,
                                autoFocus: (0, m.b0)(a) && (0, m.Im)(a),
                                value: r
                            }), (0, l.jsx)(s.$n, {
                                type: "button",
                                size: "fullWidth",
                                onClick: b,
                                className: "mt-m",
                                isLoading: y,
                                children: p("login-modal_registration-code-form_button")
                            })]
                        })
                    })
                }),
                eP = e => {
                    let {
                        email: C,
                        userIdentifier: t,
                        onLoginAfterRegistration: r,
                        onBack: a,
                        setNextStep: o
                    } = e, {
                        trans: c
                    } = (0, n.m)(["common"]), [_, d] = (0, i.useState)(!1), [u, h] = (0, i.useState)(void 0), [m, p] = (0, i.useState)(void 0), f = async e => {
                        await r({
                            userIdentifier: t,
                            otpCode: e.code
                        })
                    };
                    return (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_LOGIN, () => {
                        d(!1), o(S.REGISTRATION_SUCCESS)
                    }), []), (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_LOGIN_INVALID_OTP, () => {
                        h(L.j.INVALID_OTP), d(!1)
                    }), []), (0, i.useEffect)(() => R.k.resolve("eventsManager").on(U.u.B2C_LOGIN_ERROR, () => {
                        h(L.j.GENERIC_ERROR), d(!1)
                    }), []), (0, l.jsx)(l.Fragment, {
                        children: _ ? (0, l.jsx)("div", {
                            className: eO().loaderWrapper,
                            children: (0, l.jsx)(s.aH, {
                                variant: "gradient"
                            })
                        }) : (0, l.jsxs)("section", {
                            children: [(0, l.jsx)(s.EY, {
                                fontStyle: "ml-700",
                                as: "h3",
                                className: "mb-xs",
                                children: c("login-modal_registration-code-form_title")
                            }), (0, l.jsx)(s.EY, {
                                fontStyle: "s-500",
                                as: "p",
                                className: "mb-m",
                                children: c("login-modal_registration-code-form_subtitle")
                            }), (0, l.jsx)(T, {
                                email: C,
                                handleEdit: a,
                                className: "mb-m"
                            }), (0, l.jsx)(eA, {
                                onSubmit: f,
                                otpCode: m,
                                error: u,
                                setError: h,
                                setIsLoading: d,
                                setOtpCode: p
                            })]
                        })
                    })
                };
            var ez = t(82977),
                eT = t.n(ez);
            let eY = e => {
                let {
                    email: C,
                    className: t
                } = e, {
                    trans: i
                } = (0, n.m)(["common"]);
                return (0, l.jsxs)("div", {
                    className: (0, z.x)(eT().emailForm, t),
                    children: [(0, l.jsx)(s.hf, {
                        icon: A.A,
                        fontStyle: "m-700",
                        text: i("password-recovery-modal_success_email_title"),
                        iconSize: "l",
                        iconColor: "fill-neutral-04",
                        fontColor: "dark",
                        gap: "xs"
                    }), (0, l.jsx)(eb.H, {
                        i18nKey: "password-recovery-modal_register_success_email_subtitle",
                        components: {
                            regular: (0, l.jsx)(s.EY, {
                                fontStyle: "m-300"
                            }),
                            bold: (0, l.jsx)(s.EY, {
                                fontStyle: "m-500"
                            })
                        },
                        values: {
                            email: C
                        }
                    })]
                })
            };
            var eW = t(12509),
                eF = t.n(eW);
            let eD = e => {
                    let {
                        email: C,
                        password: t,
                        isRegistration: r,
                        registrationData: a,
                        onLogin: o,
                        onClose: c
                    } = e, {
                        trans: _
                    } = (0, n.m)(["common"]), [d, u] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        if (r) {
                            let {
                                name: e,
                                surname: t,
                                dateOfBirth: l
                            } = a;
                            R.k.resolve("analytics").actions.shared.registerAccount(C, e, t, l);
                            return
                        }
                        return R.k.resolve("eventsManager").on(U.u.B2C_USER_GET, () => {
                            u(!1), c()
                        })
                    }, []), (0, l.jsx)("div", {
                        className: eF().container,
                        children: (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(s.EY, {
                                fontStyle: "2xl-700",
                                className: r ? "mb-m" : "mb-xs",
                                as: "p",
                                children: _(r ? "password-recovery-modal_register_success_title" : "password-recovery-modal_success_title")
                            }), r ? (0, l.jsx)(eY, {
                                email: C
                            }) : (0, l.jsx)(s.EY, {
                                fontStyle: "m-300",
                                children: _("password-recovery-modal_success_subtitle")
                            }), (0, l.jsx)(s.$n, {
                                className: "mt-m",
                                onClick: () => {
                                    r ? c() : (u(!0), o({
                                        email: C,
                                        password: t
                                    }))
                                },
                                isLoading: d,
                                children: _("password-recovery-modal_success_continue")
                            })]
                        })
                    })
                },
                eG = (0, r.mP)(e => {
                    let {
                        email: C,
                        firstStep: t,
                        defaultTab: r,
                        onLogin: a,
                        onSSOLogin: c,
                        onLoginAfterRegistration: _,
                        onClose: d
                    } = e, {
                        trans: u
                    } = (0, n.m)(["common"]), [h, m] = (0, i.useState)(C), [p, f] = (0, i.useState)(), [x, V] = (0, i.useState)(null != r ? r : E.LOGIN), [H, L] = (0, i.useState)(t), [g, j] = (0, i.useState)({
                        visible: !1,
                        title: "",
                        type: "success"
                    }), [w, M] = (0, i.useState)(void 0), [y, b] = (0, i.useState)(void 0), v = H === S.LOGIN, Z = H === S.LOGIN_WITH_EMAIL, k = H === S.PASSWORD_RECOVERY_CODE_REQUEST, R = H === S.PASSWORD_RECOVERY_NEW_PASSWORD, I = H === S.PASSWORD_RECOVERY_SUCCESS, N = H === S.REGISTRATION_CODE, B = H === S.REGISTRATION_SUCCESS, O = !v && !Z && !B && !I, A = I || B;
                    (0, i.useEffect)(() => {
                        window.dispatchEvent(new CustomEvent("closeNotification"))
                    }, []);
                    let P = e => {
                            L(e)
                        },
                        z = () => {
                            k ? (t === S.LOGIN && V(E.LOGIN), P(t)) : R ? P(S.PASSWORD_RECOVERY_CODE_REQUEST) : I ? P(S.PASSWORD_RECOVERY_NEW_PASSWORD) : N && (V(E.REGISTRATION), P(S.LOGIN))
                        },
                        T = u(v || Z ? "login-modal_title" : "password-recovery-modal_title"),
                        Y = [{
                            title: u("login-modal_login-form-header_login-tab"),
                            container: (0, l.jsx)(eH, {
                                onLogin: a,
                                onSSOLogin: c,
                                onClose: d,
                                setNextStep: P,
                                setRegistrationData: M
                            })
                        }, {
                            title: u("login-modal_login-form-header_register-tab"),
                            container: (0, l.jsx)(eN, {
                                onSSOLogin: c,
                                setNextStep: P,
                                setCurrentEmail: m,
                                setNotification: j,
                                registrationData: w,
                                setRegistrationData: M,
                                setUserIdentifier: b
                            })
                        }],
                        D = (0, i.useCallback)(() => Z ? (0, l.jsx)(el, {
                            email: h,
                            isLoginWithEmailStep: Z,
                            onLogin: a,
                            onSSOLogin: c,
                            onClose: d,
                            setNextStep: P
                        }) : k || R ? (0, l.jsx)(W, {
                            email: h,
                            isPasswordRecoveryCodeRequestStep: k,
                            setCurrentEmail: m,
                            setNewPassword: f,
                            setNextStep: P,
                            setNotification: j
                        }) : I || B ? (0, l.jsx)(eD, {
                            email: h,
                            password: p,
                            onLogin: a,
                            onClose: d,
                            registrationData: w,
                            isRegistration: B
                        }) : N ? (0, l.jsx)(eP, {
                            email: h,
                            userIdentifier: y,
                            onBack: z,
                            setNextStep: P,
                            onLoginAfterRegistration: _
                        }) : void 0, [H]),
                        G = v || N || B ? (0, l.jsx)(ei.gf, {}) : void 0;
                    return (0, l.jsxs)(s.Y9, {
                        title: T,
                        size: "small",
                        "data-testid": "blogin-modal",
                        onClose: d,
                        withBackArrow: O,
                        onBackIconClick: z,
                        scrollable: !v,
                        customHeader: G,
                        children: [v ? (0, l.jsx)(s.tU, {
                            tabs: Y,
                            className: o().tabs,
                            defaultIndex: x
                        }) : (0, l.jsxs)("div", {
                            className: o().wrapper,
                            children: [(0, l.jsx)("div", {
                                className: o().container,
                                children: D()
                            }), A && (0, l.jsx)(eV, {})]
                        }), g.visible && (0, l.jsx)(s.Eg, {
                            ariaLabel: u("notification-".concat(g.type)),
                            title: g.title,
                            type: g.type,
                            variant: "dark",
                            isOpen: !0,
                            closeAutomaticallyAfter: F.g.seconds(10),
                            onClose: () => j({
                                visible: !1,
                                title: "",
                                type: "success"
                            }),
                            className: o().notification
                        })]
                    })
                })
        },
        5381: e => {
            e.exports = {
                "w-full": "SelectableItem_w-full__wm57X",
                "w-fit": "SelectableItem_w-fit__LzrvA",
                "w-5/12": "SelectableItem_w-5__12__WSu7P",
                "w-7/12": "SelectableItem_w-7__12__KYvpv",
                "h-full": "SelectableItem_h-full__qGwpX",
                flex: "SelectableItem_flex__4wn0x",
                grow: "SelectableItem_grow__rdJIX",
                "flex-1": "SelectableItem_flex-1__b4TbU",
                "shrink-0": "SelectableItem_shrink-0__S9rq0",
                "self-center": "SelectableItem_self-center__xE97V",
                "self-end": "SelectableItem_self-end__gTt2V",
                "items-center": "SelectableItem_items-center__Xqal7",
                "justify-center": "SelectableItem_justify-center__Ef2oJ",
                "gap-xs": "SelectableItem_gap-xs__f3Bpd",
                "cursor-pointer": "SelectableItem_cursor-pointer__ws0Ge",
                "touch-security-zone": "SelectableItem_touch-security-zone__6xCtp",
                "touch-security-zone-always": "SelectableItem_touch-security-zone-always__EV88G",
                selectableItem: "SelectableItem_selectableItem__xw6QY",
                selectedItem: "SelectableItem_selectedItem__DLg7x"
            }
        },
        10045: (e, C, t) => {
            "use strict";
            t.d(C, {
                M: () => a
            });
            var l = t(53818),
                i = t(5750),
                s = t(72668),
                r = t(82802);
            let a = e => {
                let {
                    queryUtils: C
                } = (0, l.Z)();
                e = e || C.getRawParam("hotel");
                let {
                    data: t,
                    isValidating: a
                } = (0, i.x)("hotel-checkIn-checkOut-time", (0, s.O9)(e) ? [e] : null, () => r.k.resolve("getCheckInAndCheckOutTime")(e));
                return {
                    hotelCheckInAndCheckOutTime: t,
                    isLoadingCheckInAndCheckOut: a
                }
            }
        },
        12509: e => {
            e.exports = {
                "w-full": "Success_w-full__FVQuQ",
                "w-fit": "Success_w-fit__zVioB",
                "w-5/12": "Success_w-5__12__he3xT",
                "w-7/12": "Success_w-7__12__BvXv0",
                "h-full": "Success_h-full__UPyLs",
                flex: "Success_flex__MlIZa",
                grow: "Success_grow__P5m1h",
                "flex-1": "Success_flex-1__IaG82",
                "shrink-0": "Success_shrink-0___49vu",
                "self-center": "Success_self-center__QP_kD",
                "self-end": "Success_self-end__I1pwj",
                "items-center": "Success_items-center__Cux2T",
                "justify-center": "Success_justify-center__gkyRY",
                "gap-xs": "Success_gap-xs__J6aJ5",
                "cursor-pointer": "Success_cursor-pointer__43jtQ",
                "touch-security-zone": "Success_touch-security-zone__fISE9",
                "touch-security-zone-always": "Success_touch-security-zone-always__u_uZn",
                container: "Success_container__H14zn"
            }
        },
        12809: (e, C, t) => {
            "use strict";
            t.d(C, {
                A: () => s,
                B: () => i
            });
            var l = t(37876);
            let i = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("rect", {
                        width: "22",
                        height: "22",
                        rx: "11",
                        fill: "#0F5317"
                    }), (0, l.jsx)("path", {
                        d: "M17 6.33337L9.88163 15.8245C9.71935 16.0411 9.47108 16.1765 9.20118 16.1957C8.93128 16.2149 8.66633 16.116 8.47501 15.9247L5 12.4497",
                        stroke: "#D9E8DB",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }),
                s = i
        },
        15479: e => {
            e.exports = {
                "w-full": "EmailSection_w-full__MNkpb",
                "w-fit": "EmailSection_w-fit__mtwKH",
                "w-5/12": "EmailSection_w-5__12__V_AKo",
                "w-7/12": "EmailSection_w-7__12__VhOEM",
                "h-full": "EmailSection_h-full__NO7LJ",
                flex: "EmailSection_flex__tDUn7",
                grow: "EmailSection_grow__BXdas",
                "flex-1": "EmailSection_flex-1____gE_",
                "shrink-0": "EmailSection_shrink-0__xyxZx",
                "self-center": "EmailSection_self-center__nqQVv",
                "self-end": "EmailSection_self-end__tt4d5",
                "items-center": "EmailSection_items-center__hTWCL",
                "justify-center": "EmailSection_justify-center__L4n2O",
                "gap-xs": "EmailSection_gap-xs__j5dNQ",
                "cursor-pointer": "EmailSection_cursor-pointer__z9MTu",
                "touch-security-zone": "EmailSection_touch-security-zone__LMjxN",
                "touch-security-zone-always": "EmailSection_touch-security-zone-always__5UnP1",
                emailForm: "EmailSection_emailForm__wSPTS",
                button: "EmailSection_button__Ke92V",
                emailText: "EmailSection_emailText__FHpL1"
            }
        },
        23977: e => {
            e.exports = {
                "w-full": "Ribbon_w-full__ouZc8",
                "w-fit": "Ribbon_w-fit__yFOm0",
                "w-5/12": "Ribbon_w-5__12__dwJbu",
                "w-7/12": "Ribbon_w-7__12__sHDtd",
                "h-full": "Ribbon_h-full__rdKVk",
                flex: "Ribbon_flex__azwMp",
                grow: "Ribbon_grow__R9HTo",
                "flex-1": "Ribbon_flex-1__1oowb",
                "shrink-0": "Ribbon_shrink-0__VgcO7",
                "self-center": "Ribbon_self-center__muF9_",
                "self-end": "Ribbon_self-end__kDHI_",
                "items-center": "Ribbon_items-center__aDAZV",
                "justify-center": "Ribbon_justify-center__WOs4d",
                "gap-xs": "Ribbon_gap-xs__Aoc9F",
                "cursor-pointer": "Ribbon_cursor-pointer__ahmqM",
                "touch-security-zone": "Ribbon_touch-security-zone__7cMAU",
                "touch-security-zone-always": "Ribbon_touch-security-zone-always__77p13",
                ribbonWrapper: "Ribbon_ribbonWrapper__qbUrb",
                ribbon: "Ribbon_ribbon__kzv_3"
            }
        },
        24712: e => {
            e.exports = {
                "w-full": "RegisterCheckbox_w-full__IKdeo",
                "w-fit": "RegisterCheckbox_w-fit__N5l8Q",
                "w-5/12": "RegisterCheckbox_w-5__12__V4ejP",
                "w-7/12": "RegisterCheckbox_w-7__12__R9V51",
                "h-full": "RegisterCheckbox_h-full__JP933",
                flex: "RegisterCheckbox_flex__Kv40y",
                grow: "RegisterCheckbox_grow__WQyUX",
                "flex-1": "RegisterCheckbox_flex-1___E9gt",
                "shrink-0": "RegisterCheckbox_shrink-0__BqYSW",
                "self-center": "RegisterCheckbox_self-center__hGjUU",
                "self-end": "RegisterCheckbox_self-end__hxuTa",
                "items-center": "RegisterCheckbox_items-center__SAm_e",
                "justify-center": "RegisterCheckbox_justify-center___vF8o",
                "gap-xs": "RegisterCheckbox_gap-xs__axQkQ",
                "cursor-pointer": "RegisterCheckbox_cursor-pointer__XSTbx",
                "touch-security-zone": "RegisterCheckbox_touch-security-zone__Z4SRr",
                "touch-security-zone-always": "RegisterCheckbox_touch-security-zone-always__qXcZe",
                checkboxWrapper: "RegisterCheckbox_checkboxWrapper__fB6UF"
            }
        },
        25379: e => {
            e.exports = {
                appContainer: "layout_appContainer__YbepL",
                mainContainer: "layout_mainContainer__QPpIM",
                mainContainerConfirmationPage: "layout_mainContainerConfirmationPage__Ui4o2"
            }
        },
        25408: e => {
            e.exports = {
                "w-full": "Login_w-full__lhRwI",
                "w-fit": "Login_w-fit___GsjG",
                "w-5/12": "Login_w-5__12__OpZfv",
                "w-7/12": "Login_w-7__12__C3G2z",
                "h-full": "Login_h-full__vdROy",
                flex: "Login_flex__JzQp1",
                grow: "Login_grow__VGzwN",
                "flex-1": "Login_flex-1__OLAVP",
                "shrink-0": "Login_shrink-0__lOL_8",
                "self-center": "Login_self-center__mwPIq",
                "self-end": "Login_self-end__mfQYP",
                "items-center": "Login_items-center__GOYJY",
                "justify-center": "Login_justify-center__OY4xC",
                "gap-xs": "Login_gap-xs__Dlwab",
                "cursor-pointer": "Login_cursor-pointer__Tqukk",
                "touch-security-zone": "Login_touch-security-zone__uJaaZ",
                "touch-security-zone-always": "Login_touch-security-zone-always__7EvDB",
                container: "Login_container__GL5AB",
                loaderWrapper: "Login_loaderWrapper__RPsIj"
            }
        },
        26227: e => {
            e.exports = {
                loaderWrapper: "PasswordRecovery_loaderWrapper__bFjyJ"
            }
        },
        28691: e => {
            e.exports = {
                "w-full": "SocialLogin_w-full__vPLq8",
                "w-fit": "SocialLogin_w-fit__ZSAGW",
                "w-5/12": "SocialLogin_w-5__12__YUuLd",
                "w-7/12": "SocialLogin_w-7__12__ms3AZ",
                "h-full": "SocialLogin_h-full__V8tMP",
                flex: "SocialLogin_flex__Uv9Ca",
                grow: "SocialLogin_grow__9Szfx",
                "flex-1": "SocialLogin_flex-1__kHHLg",
                "shrink-0": "SocialLogin_shrink-0__rnBFj",
                "self-center": "SocialLogin_self-center__zo8We",
                "self-end": "SocialLogin_self-end__njZlx",
                "items-center": "SocialLogin_items-center__bc_fp",
                "justify-center": "SocialLogin_justify-center__w4EGS",
                "gap-xs": "SocialLogin_gap-xs__ulTLJ",
                "cursor-pointer": "SocialLogin_cursor-pointer__7AU6u",
                "touch-security-zone": "SocialLogin_touch-security-zone__pQw15",
                "touch-security-zone-always": "SocialLogin_touch-security-zone-always__t0xLM",
                socialLoginButton: "SocialLogin_socialLoginButton__63I8H"
            }
        },
        34127: (e, C, t) => {
            "use strict";
            t.d(C, {
                m: () => m
            });
            var l = t(37876),
                i = t(14232),
                s = t(46239),
                r = t(50698),
                a = t(94882),
                o = t(47519),
                n = t.n(o),
                c = t(28980),
                _ = t(43239),
                d = t(35004),
                u = t(54704),
                h = t(84640);
            let m = e => {
                var C;
                let {
                    triggerElement: t,
                    triggerRef: o,
                    isTriggerElementDisabled: m = !1,
                    tooltipContent: p,
                    placement: f = "top",
                    arrowOffset: x,
                    yAxisOffset: V = 5,
                    triggerButton: H,
                    triggerElementAs: L = "button",
                    tooltipWrapperClassName: g,
                    tooltipArrowClassName: j,
                    tooltipTextClassName: w,
                    showAlways: M = !1,
                    showCloseButton: y = !0,
                    defaultOpen: b = !1,
                    variant: v = "default",
                    ariaLabel: Z
                } = e, [S, E] = (0, i.useState)(b), k = (0, i.useRef)(null), R = "default" === v, I = R ? 12 : 8, {
                    trans: N
                } = (0, u.m)(["new-reservation"]), {
                    refs: B,
                    floatingStyles: O,
                    context: A
                } = (0, s.we)({
                    open: S,
                    onOpenChange: E,
                    placement: f,
                    whileElementsMounted: r.ll,
                    middleware: [(0, a.cY)(I + V), (0, a.UU)(), (0, a.BN)(), (0, a.UE)({
                        element: k
                    })]
                }), P = (0, s.Mk)(A, {
                    move: !1
                }), z = (0, s.iQ)(A), T = (0, s.s9)(A), Y = (0, s.It)(A, {
                    role: "tooltip"
                }), {
                    getReferenceProps: W,
                    getFloatingProps: F
                } = (0, s.bv)([P, z, T, Y]);
                (0, i.useEffect)(() => {
                    b && E(!0)
                }, [b]), (0, i.useEffect)(() => {
                    (null == o ? void 0 : o.current) && B.setReference(o.current)
                }, [o, B]);
                let D = (null == H ? void 0 : H.ariaDisabled) || m,
                    G = "button" === L,
                    q = null != (C = null == H ? void 0 : H.tabIndex) ? C : G ? void 0 : 0,
                    U = (0, h.x)(n().tooltip, "default" !== v ? n()[v] : void 0, g);
                return (0, l.jsxs)(l.Fragment, {
                    children: [!o && t && (0, i.createElement)(L, {
                        ref: B.setReference,
                        ...W(),
                        className: null == H ? void 0 : H.className,
                        "aria-disabled": null != D && D,
                        ...Z && {
                            "aria-label": Z
                        },
                        "data-testid": null == H ? void 0 : H.testId,
                        onClick: null == H ? void 0 : H.onClick,
                        tabIndex: q,
                        ...G ? {
                            type: "button"
                        } : {
                            role: "button",
                            "aria-pressed": void 0
                        }
                    }, t), (0, l.jsx)(s.XF, {
                        children: (S || M) && (0, l.jsxs)("div", {
                            className: U,
                            ref: B.setFloating,
                            style: O,
                            ...F(),
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation()
                            },
                            children: [(0, l.jsxs)(d.s, {
                                gap: "xxs",
                                children: [(0, l.jsx)("label", {
                                    className: w,
                                    children: p
                                }), y && (0, l.jsx)("button", {
                                    onClick: () => E(!1),
                                    className: n().closeButton,
                                    children: (0, l.jsx)(_.I, {
                                        size: "m",
                                        color: "text-light",
                                        icon: c.U,
                                        ariaLabel: N("tooltip_close")
                                    })
                                })]
                            }), (0, l.jsx)(s.ie, {
                                className: j,
                                ref: k,
                                context: A,
                                height: I,
                                width: R ? 14 : 16,
                                fill: "light" === v ? "var(--b-color-bg-white)" : "var(--b-color-tooltip-background)",
                                staticOffset: x
                            })]
                        })
                    })]
                })
            }
        },
        36579: (e, C, t) => {
            "use strict";
            t.d(C, {
                w: () => x
            });
            var l = t(37876),
                i = t(77925),
                s = t(54704),
                r = t(5523),
                a = t(84640),
                o = t(45756),
                n = t.n(o),
                c = t(53818),
                _ = t(38251),
                d = t(97815),
                u = t(35004),
                h = t(39126),
                m = t(93599),
                p = t(25072),
                f = t(31212);
            let x = () => {
                var e;
                let {
                    trans: C
                } = (0, s.m)(["common"]), {
                    getRawParams: t
                } = (0, c.Z)(), o = null == (e = t(["store"])) ? void 0 : e.store, x = (0, r.up)(o), V = (0, r.hM)(o), H = (0, r.UL)(o), {
                    isAvailableRoomsStep: L,
                    isPaymentStep: g
                } = (0, _.l)(), {
                    mode: j
                } = (0, d.v1)();
                return (0, l.jsx)("footer", {
                    className: (0, a.x)(n().footer, "funnel" === j && !L && !g && n().footerWithMargin),
                    children: (0, l.jsxs)("div", {
                        className: n().content,
                        children: [(0, l.jsxs)("ul", {
                            className: n().menu,
                            children: [(0, l.jsx)("li", {
                                className: n().menuItem,
                                children: (0, l.jsx)(i.N_, {
                                    variant: "simple",
                                    link: x,
                                    children: C("footer_legal-notice")
                                })
                            }), (0, l.jsx)("li", {
                                className: n().menuItem,
                                children: (0, l.jsx)(i.N_, {
                                    variant: "simple",
                                    link: V,
                                    children: C("footer_private-policy")
                                })
                            }), (0, l.jsx)("li", {
                                className: n().menuItem,
                                children: (0, l.jsx)(i.N_, {
                                    variant: "simple",
                                    link: H,
                                    children: C("footer_cookies")
                                })
                            })]
                        }), (0, l.jsx)(f.$, {
                            tablet: !0,
                            mobile: !0,
                            children: (0, l.jsx)(i.cG, {
                                dir: "horizontal",
                                className: "mt-xs mb-xs"
                            })
                        }), (0, l.jsxs)(u.s, {
                            alignItems: "center",
                            gap: "xxs",
                            children: [(0, l.jsx)(h.I, {
                                icon: m.A,
                                size: "s"
                            }), (0, l.jsx)(p.E, {
                                fontStyle: "xxs-700",
                                color: "mid",
                                uppercase: !0,
                                children: C("footer_safe-payment")
                            })]
                        })]
                    })
                })
            }
        },
        37956: (e, C, t) => {
            "use strict";
            t.d(C, {
                Y: () => ec
            });
            var l = t(37876),
                i = t(94892),
                s = t.n(i),
                r = t(84640),
                a = t(63183),
                o = t(31212),
                n = t(25072),
                c = t(55147),
                _ = t(54704),
                d = t(35004),
                u = t(43239),
                h = t(77925),
                m = t(14232),
                p = t(64737),
                f = t.n(p),
                x = t(72668),
                V = t(79708),
                H = t(38282);
            let L = e => {
                    let {
                        user: C
                    } = e, {
                        isMobileOrTablet: t
                    } = (0, H.Q)(), i = t ? 24 : 32;
                    return (0, l.jsx)(a._, {
                        src: (0, V.Ej)(C.level),
                        alt: C.level,
                        width: i,
                        height: i,
                        quality: 100,
                        "data-testid": "my-barcelo-level-icon"
                    })
                },
                g = e => {
                    let {
                        color: C
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("circle", {
                            cx: "12",
                            cy: "7.9182",
                            r: "4.9182",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                            d: "M20 21.0539C18.8015 17.2876 15.596 14.7695 12 14.7695C8.404 14.7695 5.19852 17.2876 4 21.0539",
                            stroke: C,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                };
            var j = t(36271),
                w = t(45749);
            let M = (0, j.mP)(e => {
                let {
                    hasDiscount: C,
                    onClose: t,
                    onSubmit: i
                } = e, {
                    trans: s
                } = (0, _.m)(["new-reservation", "common"]), r = s("modal-loyalty-prices_".concat(C ? "with" : "without", "-discount_title")), a = s("modal-loyalty-prices_".concat(C ? "with" : "without", "-discount_description"));
                return (0, l.jsx)(h.aF, {
                    size: "s-m",
                    mobileStyle: "centered",
                    onClose: t,
                    title: r,
                    primaryButtonLabel: s("modal-loyalty-prices_cancel"),
                    secondaryButtonLabel: s("common:header_auth_logout"),
                    onPrimaryButtonClick: t,
                    onSecondaryButtonClick: i,
                    children: (0, l.jsx)(h.EY, {
                        fontStyle: "m-300",
                        as: "p",
                        children: a
                    })
                })
            });
            var y = t(51969),
                b = t(90565);
            let v = e => {
                let {
                    user: C,
                    onLogout: t
                } = e, {
                    trans: i
                } = (0, _.m)(["common"]), s = (0, m.useRef)(null), {
                    hasGroupCode: r
                } = (0, y.hD)(), {
                    openLogin: a
                } = (0, b.f)(), {
                    showModal: n,
                    hideModal: c
                } = (0, j.hS)(w.r), {
                    showModal: p,
                    hideModal: V
                } = (0, j.hS)(M), H = async () => {
                    (0, x.O9)(C) ? await n({
                        user: C,
                        onClose: c,
                        onLogout: async () => {
                            r ? (await t(), c()) : await p({
                                hasDiscount: (0, x.O9)(C.discount) && C.discount > 0,
                                onClose: V,
                                onSubmit: async () => {
                                    await t(), c(), V()
                                }
                            })
                        }
                    }): await a()
                };
                return (0, l.jsxs)("div", {
                    className: f().container,
                    children: [(0, l.jsx)(o.$, {
                        mobile: !0,
                        tablet: !0,
                        children: (0, l.jsx)("button", {
                            className: f().button,
                            onClick: H,
                            ref: s,
                            "data-testid": "mobile-login-button",
                            "aria-label": i("header_my-barcelo"),
                            children: (0, x.O9)(C) ? (0, l.jsx)(L, {
                                user: C
                            }) : (0, l.jsx)(u.I, {
                                icon: g,
                                size: "l",
                                color: "icon-light",
                                testId: "my-barcelo-icon"
                            })
                        })
                    }), (0, l.jsx)(o.$, {
                        laptop: !0,
                        desktop: !0,
                        children: (0, l.jsx)("button", {
                            className: f().button,
                            onClick: H,
                            ref: s,
                            "aria-label": i("header_my-barcelo"),
                            children: (0, x.O9)(C) ? (0, l.jsxs)(d.s, {
                                alignItems: "center",
                                gap: "xxs",
                                children: [(0, l.jsx)(L, {
                                    user: C
                                }), (0, l.jsxs)(h.EY, {
                                    fontStyle: "m-300",
                                    color: "light",
                                    children: [C.givenName, " ", C.familyName]
                                })]
                            }) : (0, l.jsxs)(d.s, {
                                "data-testid": "my-barcelo-login-icon",
                                alignItems: "center",
                                gap: "xs",
                                children: [(0, l.jsx)(u.I, {
                                    icon: g,
                                    size: "l",
                                    color: "icon-light"
                                }), (0, l.jsx)(h.EY, {
                                    fontStyle: "m-300",
                                    color: "light",
                                    children: i("header_my-barcelo-access_label")
                                })]
                            })
                        })
                    })]
                })
            };
            var Z = t(35959),
                S = t(73549),
                E = t(4519),
                k = t(61417),
                R = t(75918),
                I = t(5523),
                N = t(87424),
                B = t(4583),
                O = t(56109),
                A = t(84703),
                P = t(65067),
                z = t(53818);
            let T = e => {
                let {
                    color: C
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("ellipse", {
                        cx: "12",
                        cy: "12.3834",
                        rx: "9.58333",
                        ry: "9.2",
                        stroke: C,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M12 3.18335C9.35613 5.55833 7.90192 8.90884 8.0069 12.3834C7.90192 15.8579 9.35613 19.2084 12 21.5834",
                        stroke: C,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M12 3.18335C14.6438 5.55833 16.098 8.90884 15.9931 12.3834C16.098 15.8579 14.6438 19.2084 12 21.5834",
                        stroke: C,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M2.96289 9.31665H21.0339",
                        stroke: C,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M2.96289 15.45H21.0371",
                        stroke: C,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            };
            var Y = t(5381),
                W = t.n(Y);
            let F = e => {
                let {
                    primaryText: C,
                    secondaryText: t,
                    isSelected: i = !1,
                    onClick: s
                } = e;
                return (0, l.jsxs)("button", {
                    onClick: s,
                    "aria-pressed": i,
                    className: (0, r.x)(W().selectableItem, i && W().selectedItem),
                    children: [(0, l.jsx)(n.E, {
                        fontStyle: "m-700",
                        as: "p",
                        centered: !0,
                        children: C
                    }), (0, l.jsx)(n.E, {
                        fontStyle: "s-300",
                        color: "mid",
                        as: "p",
                        centered: !0,
                        children: t
                    })]
                })
            };
            var D = t(393),
                G = t.n(D);
            let q = e => {
                let {
                    currentLanguage: C,
                    onSelectLanguage: t
                } = e, {
                    availableLanguages: i
                } = (0, A.QD)();
                return (0, l.jsx)("div", {
                    className: G().container,
                    children: i.map(e => {
                        let [i, s] = e.description.split(" - ");
                        return (0, l.jsx)(F, {
                            primaryText: e.isRTL ? i : s,
                            secondaryText: e.isRTL ? s : i,
                            onClick: () => t(e.cbeLanguage),
                            isSelected: C === e.cbeLanguage
                        }, e.cbeLanguage)
                    })
                })
            };
            var U = t(86125),
                Q = t.n(U);
            let J = {
                    format: (e, C) => C("currency-name_".concat(e))
                },
                X = e => {
                    let {
                        currentCurrency: C,
                        onSelectCurrency: t
                    } = e, {
                        currencies: i
                    } = (0, P.H2)(), {
                        trans: s
                    } = (0, _.m)(["common"]), [r, a] = (0, m.useState)(""), o = ["EUR", "USD", "GBP", "MXN"], {
                        currencyList: c,
                        mostUsedCurrencies: d,
                        restOfCurrencies: u
                    } = (0, m.useMemo)(() => {
                        let e = Object.entries(i).map(e => {
                                let [C, {
                                    symbol: t,
                                    name: l
                                }] = e;
                                return {
                                    code: C,
                                    symbol: t,
                                    name: l
                                }
                            }),
                            C = [],
                            t = [];
                        return e.forEach(e => {
                            o.includes(e.code) ? C.push(e) : t.push(e)
                        }), {
                            currencyList: e,
                            mostUsedCurrencies: C,
                            restOfCurrencies: t.sort((e, C) => e.code.localeCompare(C.code))
                        }
                    }, [i]), p = c.filter(e => e.code.toLowerCase().includes(r.toLowerCase()) || e.symbol.toLowerCase().includes(r.toLowerCase()) || e.name.toLowerCase().includes(r.toLowerCase()));
                    return (0, l.jsxs)("div", {
                        className: Q().container,
                        children: [(0, l.jsx)(h.A_, {
                            name: "searchInput",
                            value: r,
                            className: "mb-l",
                            onChange: e => {
                                a(e.target.value)
                            },
                            onClearInput: () => {
                                a("")
                            },
                            placeholder: s("currency_section-search_input-placeholder"),
                            withSearchIcon: !0
                        }), (0, x.ko)(r) ? (0, l.jsx)("div", {
                            className: Q().currencyWrapper,
                            children: p.map(e => (0, l.jsx)(F, {
                                primaryText: "".concat(e.code, " - ").concat(e.symbol),
                                secondaryText: J.format(e.code, s),
                                onClick: () => t(e.code),
                                isSelected: e.code === C
                            }, e.code))
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: "mb-xs",
                                children: (0, l.jsx)(n.E, {
                                    fontStyle: "s-300",
                                    color: "mid",
                                    children: s("currency_section-most_used-currencies_title")
                                })
                            }), (0, l.jsx)("div", {
                                className: Q().currencyWrapper,
                                children: d.map(e => (0, l.jsx)(F, {
                                    primaryText: "".concat(e.code, " - ").concat(e.symbol),
                                    secondaryText: J.format(e.code, s),
                                    onClick: () => t(e.code),
                                    isSelected: e.code === C
                                }, e.code))
                            }), (0, l.jsx)("div", {
                                className: "mt-l mb-xs",
                                children: (0, l.jsx)(n.E, {
                                    fontStyle: "s-300",
                                    color: "mid",
                                    children: s("currency_section-all_currencies_title")
                                })
                            }), (0, l.jsx)("div", {
                                className: Q().currencyWrapper,
                                children: u.map(e => (0, l.jsx)(F, {
                                    primaryText: "".concat(e.code, " - ").concat(e.symbol),
                                    secondaryText: J.format(e.code, s),
                                    onClick: () => t(e.code),
                                    isSelected: e.code === C
                                }, e.code))
                            })]
                        })]
                    })
                };
            var K = t(82802);
            let $ = (0, j.mP)(e => {
                let {
                    onChange: C,
                    onClose: t
                } = e, i = (0, A.QD)(), {
                    queryUtils: s
                } = (0, z.Z)(), [r, a] = (0, m.useState)(!1), [o, n] = (0, m.useState)(i.language), [c, d] = (0, m.useState)(s.getCurrencyParam()), {
                    trans: u
                } = (0, _.m)(["common"]);
                return (0, l.jsx)(h.Y9, {
                    title: u("modal_change_language-currency_title"),
                    scrollable: !0,
                    primaryButtonLabel: u("modal_change_language-currency_button"),
                    onPrimaryButtonClick: () => {
                        a(!0);
                        let e = i.language,
                            l = s.getCurrencyParam(),
                            r = o !== e,
                            n = c !== l;
                        if (!r && !n) return void t();
                        let _ = K.k.resolve("analytics");
                        r && _.actions.header.clickLanguage(o), n && _.actions.header.clickCurrency(c), C(o, c), t()
                    },
                    isLoading: r,
                    children: (0, l.jsx)(h.tU, {
                        tabs: [{
                            title: u("modal_change_language-currency_language-tab"),
                            container: (0, l.jsx)(q, {
                                currentLanguage: o,
                                onSelectLanguage: e => {
                                    n(e)
                                }
                            })
                        }, {
                            title: u("modal_change_language-currency_currency-tab"),
                            container: (0, l.jsx)(X, {
                                currentCurrency: c,
                                onSelectCurrency: e => {
                                    d(e)
                                }
                            })
                        }]
                    })
                })
            });
            var ee = t(34127),
                eC = t(76213),
                et = t.n(eC);
            let el = e => {
                let {
                    onChange: C,
                    enableTooltip: t = !0
                } = e, {
                    trans: i
                } = (0, _.m)(["common"]), {
                    queryUtils: s
                } = (0, z.Z)(), r = (0, A.QD)(), {
                    getOldCurrencySymbol: a
                } = (0, P.H2)(), {
                    isMobileOrTablet: c
                } = (0, H.Q)(), d = s.getCurrencyParam(), h = a(d), {
                    showModal: p,
                    hideModal: f
                } = (0, j.hS)($), x = t && c && r.hasUnsupportedLocale, V = (0, m.useRef)(null);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("button", {
                        className: "touch-security-zone flex justify-center items-center gap-xs cursor-pointer",
                        "aria-label": i("header_change_language-currency"),
                        "data-quantum-language-code": r.language,
                        "data-quantum-currency-code": d,
                        onClick: () => {
                            p({
                                onChange: C,
                                onClose: f
                            })
                        },
                        children: [(0, l.jsx)("span", {
                            ref: V,
                            children: (0, l.jsx)(u.I, {
                                icon: T,
                                size: "l",
                                color: "icon-light"
                            })
                        }), (0, l.jsx)(o.$, {
                            laptop: !0,
                            desktop: !0,
                            children: (0, l.jsx)(n.E, {
                                fontStyle: "m-300",
                                color: "light",
                                children: i("header_change_language-currency_label", {
                                    language: r.properties.isoCode.toUpperCase(),
                                    currency: d === h ? d : "".concat(d, " ").concat(h)
                                })
                            })
                        })]
                    }), x && (0, l.jsx)(ee.m, {
                        triggerRef: V,
                        tooltipContent: i("header_locale-not-defined_tooltip"),
                        defaultOpen: !0,
                        showCloseButton: !0,
                        yAxisOffset: 16,
                        placement: "bottom-start",
                        tooltipWrapperClassName: et().tooltipWrapper
                    })]
                })
            };
            var ei = t(7338);
            let es = (0, j.mP)(() => {
                let {
                    hideModal: e
                } = (0, j.hS)(), {
                    trans: C
                } = (0, _.m)(["new-reservation"]);
                return (0, l.jsx)(h.aF, {
                    size: "s-m",
                    mobileStyle: "centered",
                    ariaLabel: C("confirm-exit-modal_aria-label"),
                    "data-quantum-modal": "ConfirmExitModal",
                    title: C("confirm-exit-modal_title"),
                    primaryButtonLabel: C("confirm-exit-modal_dismiss-button"),
                    onPrimaryButtonClick: e,
                    secondaryButtonLabel: C("confirm-exit-modal_exit-button"),
                    onSecondaryButtonClick: () => {
                        ei.C.toBarceloHome()
                    },
                    children: (0, l.jsx)(h.EY, {
                        as: "p",
                        fontStyle: "m-300",
                        color: "dark",
                        children: C("confirm-exit-modal_description")
                    })
                })
            });
            var er = t(67158),
                ea = t.n(er),
                eo = t(54737);
            let en = e => {
                    let {
                        couponId: C,
                        isVisible: t,
                        onClose: i
                    } = e, {
                        trans: s
                    } = (0, _.m)(["new-reservation"]);
                    return t ? (0, l.jsx)("div", {
                        role: "alert",
                        className: ea().container,
                        children: (0, l.jsx)(eo.f, {
                            className: (0, r.x)(ea().mainRibbonWrapper, ea().onlyMainRibbon),
                            onClose: i,
                            children: (0, l.jsx)(h.EY, {
                                fontStyle: "s-500",
                                className: ea().ribbonText,
                                children: s("header_group-code-ribbon_message", {
                                    couponId: C
                                })
                            })
                        })
                    }) : null
                },
                ec = e => {
                    var C;
                    let {
                        fastBooking: t,
                        user: i,
                        smallInMobile: d = !1,
                        hasToShowHotelName: p = !1,
                        onLogout: f
                    } = e, {
                        trans: V
                    } = (0, _.m)(["common"]), L = (0, c.D)(), {
                        isMobileOrTablet: g
                    } = (0, H.Q)(), {
                        callCenterCountryCode: w,
                        callCenterPhone: M,
                        callCenterFreePhone: b
                    } = (0, Z.p)(), {
                        navigate: A,
                        query: P,
                        reload: T
                    } = (0, z.Z)(), {
                        howCouponAppliesInAvailability: Y,
                        availabilityCoupon: W,
                        isGroupCodeRibbonVisible: F,
                        setIsGroupCodeRibbonVisible: D
                    } = (0, y.hD)(), {
                        isValidating: G
                    } = (0, E.ro)(), q = (0, k.Y)(), {
                        cart: U,
                        isCartValidating: Q
                    } = (0, R._$)(), {
                        showModal: J
                    } = (0, j.hS)(es), X = (0, x.O9)(t), K = () => {
                        S.z.actions.header.clickPhone()
                    }, $ = async (e, C) => {
                        await A.toSameWithReload({ ...P,
                            locale: e,
                            currency: C
                        }), T()
                    }, {
                        coupon: ee,
                        groupcode: eC,
                        invalidCoupon: et,
                        invalidGroupcode: ei
                    } = (0, m.useMemo)(() => {
                        var e, C;
                        return e = U, C = W, (0, B.V)(e) || (0, O.nA)(C) || {}
                    }, [U, W]), er = !G && (0, x.O9)(W) && W.isGroup() && "none" !== Y;
                    return (0, l.jsxs)("header", {
                        className: (0, r.x)(s().container, L && s().hidden),
                        "data-target-is-user-logged": (0, x.O9)(i),
                        "data-quantum-coupon": ee,
                        "data-quantum-groupcode": eC,
                        "data-quantum-landings1-invalidcoupon": et,
                        "data-quantum-landings1-invalidgroupcode": ei,
                        children: [(0, l.jsx)("div", {
                            className: (0, r.x)(s().header, d && s().smallHeader, X && s().withFastBooking),
                            children: (0, l.jsxs)("div", {
                                className: s().content,
                                children: [(0, l.jsxs)("div", {
                                    className: s().contentWrapper,
                                    children: [(0, l.jsx)("button", {
                                        onClick: () => {
                                            (0, x.O9)(U) || Q ? J() : window.location.href = (0, I.WE)()
                                        },
                                        className: "cursor-pointer",
                                        children: (C = g, (0, l.jsx)(a._, {
                                            src: "/assets/images/main-logo.svg",
                                            height: C ? 24 : 32,
                                            width: 91,
                                            alt: "barcelo-logo"
                                        }))
                                    }), p && (0, l.jsxs)(o.$, {
                                        tablet: !0,
                                        mobile: !0,
                                        children: [(0, l.jsx)(h.cG, {
                                            dir: "vertical",
                                            className: s().divider
                                        }), (0, l.jsx)(n.E, {
                                            fontStyle: "xs-300",
                                            color: "light",
                                            className: s().hotelName,
                                            children: null == q ? void 0 : q.name
                                        })]
                                    })]
                                }), (0, l.jsxs)("nav", {
                                    "aria-label": V("nav_main-navigation_aria-label"),
                                    children: [(0, l.jsx)(o.$, {
                                        mobile: !0,
                                        tablet: !0,
                                        children: (0, l.jsxs)("ul", {
                                            className: s().menu,
                                            children: [(0, l.jsx)("li", {
                                                children: (0, l.jsx)("a", {
                                                    "data-data-phone": w,
                                                    onClick: K,
                                                    href: "tel: ".concat(M),
                                                    title: V("header_call"),
                                                    className: "touch-security-zone flex items-center justify-center",
                                                    children: (0, l.jsx)(u.I, {
                                                        icon: N.E,
                                                        size: "l",
                                                        color: "icon-light"
                                                    })
                                                })
                                            }), (0, l.jsx)("li", {
                                                "data-testid": "language-currency-button",
                                                children: (0, l.jsx)(el, {
                                                    onChange: $
                                                })
                                            }), (0, l.jsx)("li", {
                                                children: (0, l.jsx)(v, {
                                                    user: i,
                                                    onLogout: f
                                                })
                                            })]
                                        })
                                    }), (0, l.jsx)(o.$, {
                                        laptop: !0,
                                        desktop: !0,
                                        children: (0, l.jsxs)("ul", {
                                            className: s().menu,
                                            children: [(0, l.jsxs)("li", {
                                                children: [(0, l.jsx)(n.E, {
                                                    as: "div",
                                                    fontStyle: "xs-300",
                                                    color: "light",
                                                    children: V("header_call")
                                                }), (0, l.jsx)("a", {
                                                    "data-data-phone": w,
                                                    onClick: K,
                                                    href: "tel:".concat(M),
                                                    title: V("header_call"),
                                                    children: (0, l.jsxs)(n.E, {
                                                        "data-data-phone": w,
                                                        as: "div",
                                                        fontStyle: "m-300",
                                                        color: "light",
                                                        children: [M, b]
                                                    })
                                                })]
                                            }), (0, l.jsx)("li", {
                                                children: (0, l.jsx)(el, {
                                                    onChange: $,
                                                    enableTooltip: !1
                                                })
                                            }), (0, l.jsx)("li", {
                                                children: (0, l.jsx)(v, {
                                                    user: i,
                                                    onLogout: f
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }), er && (0, l.jsx)(en, {
                            isVisible: F,
                            couponId: W.value,
                            onClose: () => {
                                D(!1)
                            }
                        }), t]
                    })
                }
        },
        40189: e => {
            e.exports = {
                "w-full": "B2CLoginModal_w-full__kilzB",
                "w-fit": "B2CLoginModal_w-fit__OFEVt",
                "w-5/12": "B2CLoginModal_w-5__12__ABSgU",
                "w-7/12": "B2CLoginModal_w-7__12__Npwl6",
                "h-full": "B2CLoginModal_h-full__NN8MH",
                flex: "B2CLoginModal_flex__LKgnr",
                grow: "B2CLoginModal_grow__FtNYh",
                "flex-1": "B2CLoginModal_flex-1__LTCcM",
                "shrink-0": "B2CLoginModal_shrink-0__J5EKN",
                "self-center": "B2CLoginModal_self-center__n_Rfe",
                "self-end": "B2CLoginModal_self-end__9n_To",
                "items-center": "B2CLoginModal_items-center__j2VxV",
                "justify-center": "B2CLoginModal_justify-center__V6gY6",
                "gap-xs": "B2CLoginModal_gap-xs__20CL_",
                "cursor-pointer": "B2CLoginModal_cursor-pointer__TGWXy",
                "touch-security-zone": "B2CLoginModal_touch-security-zone__ZehTO",
                "touch-security-zone-always": "B2CLoginModal_touch-security-zone-always__01Kjw",
                wrapper: "B2CLoginModal_wrapper__maDQU",
                container: "B2CLoginModal_container__oDwCd",
                notification: "B2CLoginModal_notification__2xEyG",
                tabs: "B2CLoginModal_tabs__Di63P"
            }
        },
        45749: (e, C, t) => {
            "use strict";
            t.d(C, {
                r: () => h
            });
            var l = t(37876),
                i = t(36271),
                s = t(54704),
                r = t(77925),
                a = t(48192),
                o = t(24799),
                n = t(91055),
                c = t.n(n);
            let _ = e => {
                let {
                    color: C
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("path", {
                        d: "M2 11.335H16.0019",
                        stroke: C,
                        strokeWidth: "1.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M12.668 14.669L16.0018 11.3353L12.668 8.00146",
                        stroke: C,
                        strokeWidth: "1.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, l.jsx)("path", {
                        d: "M4.27246 15.4211C6.16104 19.3008 10.4627 21.3805 14.6764 20.451C18.8901 19.5214 21.9176 15.8249 21.9985 11.5106C22.0794 7.19636 19.1928 3.38889 15.0169 2.30194C10.841 1.215 6.46435 3.1319 4.43159 6.93812",
                        stroke: C,
                        strokeWidth: "1.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            };
            var d = t(35004),
                u = t(84640);
            let h = (0, i.mP)(e => {
                let {
                    user: C,
                    onLogout: t,
                    onClose: i
                } = e, {
                    trans: n
                } = (0, s.m)(["common"]), h = (0, l.jsx)("div", {
                    children: (0, l.jsx)(a.Eq, {
                        size: "x-large",
                        userLevel: C.level,
                        variant: C.level !== o.Yn.Unique ? "dark" : "light"
                    })
                });
                return (0, l.jsxs)(r.Y9, {
                    title: "test",
                    size: "small",
                    "data-testid": "blogged-modal",
                    customHeader: h,
                    headerClassName: (0, u.x)(c().customHeader, c()[C.level]),
                    onClose: i,
                    children: [(0, l.jsxs)("div", {
                        className: c().userContainer,
                        children: [(0, l.jsx)(r.EY, {
                            as: "p",
                            fontStyle: "l-300",
                            color: C.level !== o.Yn.Unique ? "dark" : "light",
                            children: n("header_auth_greeting_v2")
                        }), (0, l.jsxs)(r.EY, {
                            as: "p",
                            fontStyle: "l-700",
                            className: "mb-m",
                            color: C.level !== o.Yn.Unique ? "dark" : "light",
                            children: [C.givenName, " ", C.familyName]
                        }), (0, l.jsx)(r.EY, {
                            as: "p",
                            fontStyle: "s-300",
                            family: "normsPro",
                            color: C.level !== o.Yn.Unique ? "dark" : "light",
                            uppercase: !0,
                            children: C.level
                        })]
                    }), (0, l.jsx)(d.s, {
                        direction: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: (0, l.jsx)("div", {
                            className: c().menuContainer,
                            children: (0, l.jsx)("button", {
                                className: c().logoutButton,
                                onClick: t,
                                children: (0, l.jsx)(r.hf, {
                                    icon: _,
                                    iconSize: "l",
                                    iconColor: "icon-dark",
                                    text: n("header_auth_logout"),
                                    fontStyle: "m-300",
                                    fontColor: "dark",
                                    gap: "xs"
                                })
                            })
                        })
                    })]
                })
            })
        },
        45756: e => {
            e.exports = {
                footer: "Footer_footer__j15u8",
                footerWithMargin: "Footer_footerWithMargin__fEXZT",
                content: "Footer_content__rQrZ7",
                menu: "Footer_menu__8M1iS",
                menuItem: "Footer_menuItem__oTGIY"
            }
        },
        47519: e => {
            e.exports = {
                "w-full": "Tooltip_w-full__m6FnD",
                "w-fit": "Tooltip_w-fit__E9YsV",
                "w-5/12": "Tooltip_w-5__12__bpRET",
                "w-7/12": "Tooltip_w-7__12__Ca1iz",
                "h-full": "Tooltip_h-full__3HikM",
                flex: "Tooltip_flex__Pb1f8",
                grow: "Tooltip_grow__ccQuY",
                "flex-1": "Tooltip_flex-1__XV7mg",
                "shrink-0": "Tooltip_shrink-0__aKioI",
                "self-center": "Tooltip_self-center__cZiSn",
                "self-end": "Tooltip_self-end__QO2vr",
                "items-center": "Tooltip_items-center__tyV_K",
                "justify-center": "Tooltip_justify-center__7moZ5",
                "gap-xs": "Tooltip_gap-xs__2GfTj",
                "cursor-pointer": "Tooltip_cursor-pointer__RWIi2",
                "touch-security-zone": "Tooltip_touch-security-zone__ZH4t5",
                "touch-security-zone-always": "Tooltip_touch-security-zone-always__LmTW3",
                tooltip: "Tooltip_tooltip__ek1Yg",
                closeButton: "Tooltip_closeButton__3Xpfs",
                light: "Tooltip_light__nZ3oJ"
            }
        },
        48192: (e, C, t) => {
            "use strict";
            t.d(C, {
                Eq: () => s,
                gf: () => r,
                nk: () => a
            });
            var l = t(37876),
                i = t(24799);
            let s = e => {
                    let {
                        size: C = "medium",
                        variant: t = "dark",
                        userLevel: s,
                        className: r
                    } = e, a = "var(--b-color-text-".concat(t, ")");
                    return "small" === C ? (0, l.jsxs)("svg", {
                        width: "137",
                        height: "16",
                        viewBox: "0 0 137 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: r,
                        "aria-label": "my Barcel\xf3 benefits",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_86_1580)",
                            children: [(0, l.jsx)("path", {
                                d: "M67.9872 2.08368C68.0031 2.0943 68.0229 2.09962 68.0422 2.09962H69.3219C69.3359 2.09962 69.3485 2.09769 69.361 2.09237C69.3736 2.08706 69.3861 2.07982 69.3948 2.07113L70.3901 1.13287L71.3853 0.194615C71.4012 0.17868 71.4119 0.158882 71.4172 0.137634C71.4225 0.116387 71.4205 0.0932084 71.4119 0.0719613C71.4032 0.0507141 71.3906 0.0328472 71.3727 0.0202921C71.3549 0.00773691 71.3336 0.000976562 71.3124 0.000976562H69.2828C69.2649 0.000976562 69.2471 0.00628827 69.2311 0.0135316C69.2152 0.020775 69.2026 0.0347789 69.192 0.0492656L68.5715 0.987521L67.9515 1.92578C67.9408 1.94364 67.9336 1.96296 67.9336 1.98276C67.9336 2.00256 67.937 2.02187 67.9461 2.04119C67.9548 2.05905 67.9693 2.07306 67.9853 2.08368H67.9872Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M71.7735 3.85255C71.0786 3.1258 70.0815 2.7168 68.8694 2.7168C67.6574 2.7168 66.6669 3.12725 65.974 3.85255C65.2825 4.5793 64.8914 5.62283 64.8914 6.89186C64.8914 8.1609 65.2825 9.19525 65.974 9.92055C66.6655 10.6439 67.6607 11.0529 68.8694 11.0529C70.0781 11.0529 71.0786 10.6439 71.7735 9.92055C72.4684 9.19718 72.8595 8.15559 72.8595 6.89186C72.8595 5.62814 72.4684 4.5793 71.7735 3.85255ZM70.2717 8.37965C70.0317 8.8524 69.6068 9.21698 68.8675 9.21698C68.1282 9.21698 67.7139 8.8524 67.4758 8.37965C67.2377 7.9069 67.1827 7.3255 67.1827 6.89186C67.1827 6.45823 67.2377 5.86959 67.4758 5.39539C67.7139 4.91926 68.1354 4.55275 68.8675 4.55275C69.5995 4.55275 70.0317 4.91878 70.2717 5.39539C70.5117 5.87152 70.5668 6.4563 70.5668 6.89186C70.5668 7.32743 70.5117 7.9069 70.2717 8.37965Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M63.7844 0.000579834H61.593C61.5592 0.000579834 61.5288 0.0145837 61.5075 0.0363138C61.4863 0.0594925 61.4718 0.0894317 61.4718 0.123234V10.7183C61.4718 10.7521 61.4858 10.784 61.5075 10.8072C61.5288 10.8304 61.5592 10.8444 61.593 10.8444H63.7844C63.8182 10.8444 63.8481 10.8304 63.8698 10.8072C63.8911 10.784 63.9056 10.7541 63.9056 10.7183V0.125166C63.9056 0.0913633 63.8916 0.0594925 63.8698 0.0382454C63.8486 0.0150667 63.8182 0.00251144 63.7844 0.00251144V0.000579834Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M28.6978 4.93457C29.1063 4.68588 29.4105 4.38166 29.6134 4.01901C29.8157 3.65636 29.9156 3.23528 29.9156 2.74997C29.9156 1.82379 29.6365 1.13615 29.0696 0.681272C28.5042 0.226389 27.6514 0.000396729 26.5031 0.000396729H21.6505C21.6167 0.000396729 21.5863 0.0144006 21.565 0.0361307C21.5438 0.0593094 21.5293 0.0892485 21.5293 0.123051V10.7181C21.5293 10.7519 21.5433 10.7838 21.565 10.807C21.5863 10.8302 21.6167 10.8442 21.6505 10.8442H26.647C27.5142 10.8442 28.4544 10.6346 29.1778 10.1314C29.9012 9.62681 30.4077 8.82859 30.4077 7.64841C30.4077 6.98347 30.2566 6.41125 29.9668 5.95298C29.6771 5.49424 29.2507 5.14945 28.6978 4.93457ZM24.0374 3.17492V2.06041H26.039C26.5296 2.06041 26.8884 2.14733 27.127 2.32696C27.365 2.5066 27.479 2.7804 27.479 3.15367C27.479 3.62304 27.3066 3.90746 27.0632 4.07454C26.8198 4.24162 26.5035 4.29136 26.2138 4.29136H24.0384V3.17492H24.0374ZM27.5123 8.47174C27.2544 8.68324 26.8652 8.78658 26.3427 8.78658H24.0374V6.12779H26.3852C26.8937 6.12779 27.2704 6.24175 27.521 6.47257C27.7716 6.70388 27.8962 7.05011 27.8962 7.51755C27.8962 7.94394 27.7682 8.26216 27.5104 8.47367L27.5123 8.47174Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M38.3862 5.02211C38.3862 4.2577 38.0998 3.68016 37.5329 3.29626C36.966 2.91044 36.1147 2.7168 34.9876 2.7168C33.9764 2.7168 33.1444 2.9283 32.5311 3.32089C31.9198 3.71541 31.5287 4.29295 31.3988 5.02694C31.3954 5.04288 31.3968 5.06074 31.3988 5.07668C31.4026 5.09262 31.4094 5.10855 31.4186 5.12111C31.4272 5.13511 31.4398 5.14622 31.4524 5.15491C31.4664 5.1636 31.4808 5.16891 31.4968 5.17278L32.5026 5.34324L33.5085 5.5137C33.5244 5.51756 33.5423 5.51563 33.5582 5.51176C33.5742 5.50838 33.5887 5.50114 33.6027 5.49052C33.6152 5.47989 33.6278 5.46734 33.6345 5.4514C33.6418 5.4374 33.6471 5.41953 33.6485 5.4036C33.6823 5.0535 33.7963 4.79564 34.0006 4.62663C34.2048 4.45762 34.4965 4.37601 34.8838 4.37601C35.2711 4.37601 35.5593 4.41319 35.767 4.5484C35.9746 4.68361 36.0905 4.9125 36.0905 5.29688C36.1045 5.57937 35.9485 5.74838 35.6549 5.86041C35.3614 5.97244 34.9316 6.03135 34.3965 6.09316C33.6712 6.17864 32.8571 6.2728 32.2211 6.61565C31.5866 6.9585 31.1298 7.55053 31.1211 8.6293C31.1211 9.3773 31.377 9.98381 31.8372 10.403C32.2974 10.8226 32.9643 11.0553 33.7852 11.0553C34.2633 11.0553 34.6916 10.9916 35.0755 10.8598C35.4594 10.7284 35.7969 10.5309 36.092 10.2663V10.332C36.092 10.3764 36.09 10.4281 36.0886 10.4918V10.7226C36.0886 10.7564 36.1026 10.7883 36.1243 10.8115C36.1456 10.8347 36.176 10.8487 36.2098 10.8487H38.2645C38.2983 10.8487 38.3287 10.8347 38.35 10.8115C38.3712 10.7883 38.3857 10.7584 38.3857 10.7226V5.02066L38.3862 5.02211ZM36.0929 7.47471V7.75189C36.0929 8.3048 35.9669 8.71526 35.7124 8.98712C35.4565 9.25899 35.0726 9.3942 34.5535 9.3942C34.1715 9.3942 33.8871 9.32466 33.7002 9.18269C33.5119 9.04072 33.4192 8.82729 33.4192 8.53949C33.4192 8.25168 33.4988 8.04163 33.6785 7.88034C33.8581 7.71857 34.1372 7.60847 34.5317 7.53363C34.61 7.51962 34.6901 7.50513 34.7698 7.49451C34.85 7.48196 34.9316 7.47133 35.0098 7.45878C35.2126 7.43029 35.4116 7.4018 35.5965 7.36268C35.7795 7.32357 35.9505 7.2719 36.0924 7.19753V7.47471H36.0929Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M59.3048 3.84008C58.9706 3.47212 58.5741 3.19156 58.1246 3.00275C57.6765 2.81443 57.1771 2.7164 56.6402 2.7164C55.501 2.7164 54.5179 3.15535 53.8196 3.89658C53.1209 4.63782 52.707 5.68134 52.707 6.89147C52.707 8.10159 53.1016 9.17554 53.7911 9.90567C54.4807 10.6343 55.4639 11.052 56.6402 11.052C57.4901 11.052 58.2076 10.8584 58.789 10.476C59.3704 10.094 59.8128 9.51984 60.117 8.7588C60.1242 8.74094 60.1276 8.72307 60.1257 8.70375C60.1257 8.68589 60.1204 8.66657 60.1097 8.65063C60.101 8.6347 60.0885 8.62021 60.074 8.60959C60.0595 8.59897 60.0421 8.59172 60.0243 8.58834L59.1749 8.44444L58.3255 8.30054C58.297 8.29523 58.2704 8.30054 58.2472 8.31454C58.2241 8.32855 58.2047 8.35028 58.1941 8.37684C58.114 8.58303 57.9242 8.7926 57.6644 8.95099C57.4051 9.10938 57.0762 9.21562 56.7155 9.21562C56.1771 9.21562 55.7715 9.08041 55.4909 8.8013C55.2099 8.52219 55.0519 8.09724 55.009 7.51971H59.9412C60.0692 7.51971 60.1846 7.46659 60.2681 7.38112C60.3517 7.29565 60.4033 7.17685 60.4033 7.04503V7.01992C60.4053 6.39264 60.3092 5.79338 60.1242 5.25302C59.9393 4.71267 59.664 4.23123 59.3081 3.84008L59.3048 3.83815V3.84008ZM56.5412 5.93534H55.0143C55.0462 5.71128 55.1316 5.36457 55.3624 5.07483C55.5933 4.7851 55.9704 4.55235 56.5837 4.55235C57.0048 4.55235 57.3249 4.65375 57.5649 4.87588C57.8049 5.09994 57.9647 5.44473 58.0681 5.93534H56.5412Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M77.2113 10.8549V2.91425H80.467C81.9533 2.91425 82.9171 3.87809 82.9171 5.01289C82.9171 5.80724 82.441 6.37415 81.9074 6.60111C82.4859 6.81648 83.3141 7.48577 83.3141 8.55199C83.3141 9.78867 82.2478 10.8549 80.6601 10.8549H77.2113ZM78.6296 6.11291H80.4331C81.0681 6.11291 81.4883 5.69328 81.4883 5.11478C81.4883 4.53627 81.0686 4.10505 80.4331 4.10505H78.6296V6.11291ZM78.6296 9.6636H80.6263C81.3637 9.6636 81.8852 9.13049 81.8852 8.4501C81.8852 7.76971 81.3637 7.2477 80.6263 7.2477H78.6296V9.6636Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M85.6324 10.8547V2.91406H91.3383V4.19565H87.0502V6.12432H90.4309V7.39528H87.0502V9.57312H91.4518V10.8547H85.6324Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M93.8175 10.8547V2.91406H95.0885L99.2515 8.44991H99.2858V2.91406H100.704V10.8547H99.4219L95.2696 5.31886H95.2242V10.8547H93.8175Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M103.118 10.8549V2.91425H108.823V4.19584H104.535V6.1245H107.916V7.39547H104.535V9.5733H108.937V10.8549H103.118Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M111.303 10.8549V2.91425H116.952V4.26392H112.721V6.36256H116.045V7.69003H112.721V10.8549H111.303Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M118.981 10.8549V2.91425H120.399V10.8549H118.981Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M124.92 10.8549V4.21853H122.571V2.91425H128.686V4.21853H126.338V10.8549H124.92H124.92Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M130.715 9.74323L131.645 8.84747C132.019 9.24392 132.655 9.70943 133.596 9.70943C134.538 9.70943 135.071 9.1879 135.071 8.62051C135.071 6.99848 130.976 7.92853 130.976 5.03601C130.976 3.78774 132.053 2.7785 133.732 2.7785C134.98 2.7785 135.887 3.36859 136.307 3.83362L135.389 4.74145C135.083 4.45799 134.515 4.04947 133.778 4.04947C132.882 4.04947 132.428 4.51401 132.428 5.03601C132.428 6.65853 136.512 5.728 136.512 8.62051C136.512 9.89147 135.423 10.9915 133.642 10.9915C132.179 10.9915 131.18 10.3217 130.715 9.74323H130.715Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M51.9202 8.05772C51.9115 8.04372 51.899 8.03116 51.8845 8.02199C51.8705 8.0133 51.856 8.00605 51.8381 8.00412L50.8767 7.84042L49.9153 7.67672C49.8993 7.67334 49.8834 7.67479 49.8674 7.67865C49.8515 7.68252 49.837 7.68928 49.825 7.6999C49.8124 7.71052 49.7998 7.72115 49.7931 7.73563C49.7858 7.74964 49.7791 7.76606 49.7771 7.78199C49.7308 8.10891 49.6226 8.46625 49.3913 8.74343C49.16 9.01916 48.8065 9.21424 48.2681 9.21424C47.6853 9.21424 47.2888 8.91727 47.0382 8.48363C46.7876 8.04806 46.6847 7.47584 46.6847 6.92148C46.6847 6.72398 46.704 6.13244 46.9175 5.58822C47.1309 5.04594 47.5375 4.55194 48.3111 4.55194C48.7196 4.55194 49.0378 4.65142 49.2691 4.8523C49.5 5.05318 49.6458 5.35547 49.7062 5.76255C49.7081 5.77848 49.7149 5.79442 49.7221 5.8089C49.7308 5.82291 49.7419 5.83546 49.754 5.84464C49.7665 5.85526 49.7825 5.86057 49.7965 5.86444C49.8124 5.86782 49.8283 5.86782 49.8443 5.86444L50.8308 5.69736L51.8174 5.53028C51.8512 5.52496 51.8777 5.50517 51.8956 5.48054C51.9135 5.45398 51.9221 5.42211 51.9168 5.38831C51.7889 4.57608 51.3712 3.90777 50.7453 3.44178C50.1195 2.97627 49.286 2.71503 48.3246 2.71503C47.1304 2.71503 46.1453 3.13466 45.4611 3.87927C44.7768 4.62389 44.391 5.69398 44.391 6.99343C44.391 8.18762 44.7908 9.20265 45.477 9.91733C46.1632 10.6335 47.1353 11.0497 48.2816 11.0497C49.2522 11.0497 50.0717 10.7851 50.6937 10.2906C51.3156 9.79661 51.7459 9.07131 51.9361 8.15044C51.9395 8.1345 51.9395 8.11663 51.9361 8.1007C51.9323 8.08476 51.9275 8.06883 51.9163 8.05434L51.9202 8.05821V8.05772Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M44.6001 2.8801C44.6001 2.86223 44.5948 2.8463 44.5861 2.83036C44.5774 2.81443 44.5663 2.80187 44.5542 2.78932C44.5417 2.77869 44.5257 2.77145 44.5079 2.76614C44.4422 2.74827 44.3765 2.73572 44.3142 2.72896C44.2519 2.72026 44.1896 2.7164 44.1293 2.7164C43.6015 2.7164 43.134 2.83181 42.7463 3.04332C42.359 3.25289 42.0495 3.55711 41.8399 3.93377V3.04863C41.8399 3.01483 41.8259 2.98296 41.8042 2.96171C41.7829 2.93853 41.7525 2.92597 41.7187 2.92597H39.7688C39.735 2.92597 39.705 2.93998 39.6833 2.96171C39.6621 2.98489 39.6476 3.01483 39.6476 3.04863V10.7198C39.6476 10.7536 39.6616 10.7855 39.6833 10.8087C39.7046 10.8319 39.735 10.8459 39.7688 10.8459H41.8201C41.8539 10.8459 41.8838 10.8319 41.9056 10.8087C41.9268 10.7855 41.9413 10.7556 41.9413 10.7198V7.26281C41.9413 6.50226 42.0958 5.92424 42.4015 5.53503C42.7072 5.14389 43.1674 4.94156 43.7753 4.92707C43.8 4.92707 43.8231 4.91838 43.8429 4.90389C43.8627 4.88989 43.8767 4.87009 43.8854 4.84691L44.2394 3.88886L44.5929 2.9308C44.5982 2.91487 44.6016 2.897 44.6001 2.87913V2.8801Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M10.2044 0.000530125C9.41342 0.000530125 8.75041 0.554888 8.58333 1.29612L8.57947 1.31399C8.57753 1.32462 8.57609 1.33524 8.57222 1.34586L7.08444 8.42165C7.08637 5.71795 7.08782 1.72058 7.08782 1.72058C7.08782 0.833516 6.41757 0.058477 5.53243 0.00342753C4.69365 -0.0496904 3.97897 0.520603 3.80465 1.29564L3.80127 1.31351C3.79934 1.32413 3.79789 1.33476 3.79403 1.34538L2.3101 8.4033V0.955204C2.3101 0.427405 1.88178 0.000530125 1.35543 0.000530125C0.82908 0.000530125 0.400757 0.426922 0.400757 0.955204V10.8501H2.30962V10.8361C2.30962 10.8361 2.313 10.8322 2.313 10.8308C2.313 10.8308 4.19338 1.9403 4.22718 1.75197C4.27885 1.46948 4.45124 1.27584 4.70331 1.27584C4.97517 1.27584 5.17944 1.47673 5.17944 1.75197V10.8414L7.07961 10.8487V10.8347H7.0883C7.0883 10.8347 8.97061 1.93692 9.00441 1.75052C9.05608 1.46803 9.22847 1.27439 9.48054 1.27439C9.75241 1.27439 9.95667 1.47528 9.95667 1.75052V10.8472H11.8655V1.66457C11.8655 0.74563 11.1209 0.00101312 10.202 0.00101312L10.2044 0.000530125Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M18.4889 0.000396729C17.9963 0.000396729 17.5666 0.337937 17.4507 0.815998L15.3926 8.81266C15.3926 8.81266 15.3892 8.80735 15.3873 8.80541C15.366 8.89958 15.3409 9.00292 15.3144 9.11302L15.1864 9.61232C15.1492 9.68717 15.0869 9.74222 15 9.74222C14.8793 9.74222 14.7813 9.64468 14.7813 9.52347V0.95507C14.7793 0.427272 14.3529 0.000396729 13.8251 0.000396729C13.2973 0.000396729 12.871 0.426789 12.871 0.95507V9.57562C12.871 10.3169 13.4306 10.9654 14.1704 11.0137C14.8619 11.0581 15.4535 10.5979 15.6138 9.96483L17.6487 2.10531V14.0105C17.6487 14.7305 17.1421 15.3756 16.4313 15.4823C15.5462 15.6137 14.7784 14.9241 14.7784 14.0641V12.4628C14.7784 11.935 14.352 11.5086 13.8237 11.5086C13.2954 11.5086 12.8695 11.935 12.8695 12.4628V12.6565C12.8695 14.4963 14.3752 16 16.2126 16C18.05 16 19.5503 14.4997 19.5561 12.6656V1.06903C19.5595 0.478941 19.0795 0.000879722 18.4894 0.000879722L18.4889 0.000396729Z",
                                fill: a
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_86_1580",
                                children: (0, l.jsx)("rect", {
                                    width: "136.4",
                                    height: "16",
                                    fill: "white",
                                    transform: "translate(0.400757)"
                                })
                            })
                        })]
                    }) : "large" === C ? (0, l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "205",
                        height: "24",
                        viewBox: "0 0 205 24",
                        fill: "none",
                        className: r,
                        "aria-label": "my Barcel\xf3 benefits",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_73590)",
                            children: [(0, l.jsx)("path", {
                                d: "M101.578 3.12601C101.602 3.14195 101.632 3.14991 101.661 3.14991H103.581C103.602 3.14991 103.62 3.14702 103.639 3.13905C103.658 3.13108 103.677 3.12022 103.69 3.10718L105.183 1.69979L106.676 0.292411C106.699 0.268508 106.715 0.238811 106.723 0.20694C106.731 0.175069 106.728 0.140301 106.715 0.10843C106.702 0.0765595 106.684 0.0497591 106.657 0.0309264C106.63 0.0120937 106.598 0.00195312 106.566 0.00195312H103.522C103.495 0.00195312 103.468 0.00992069 103.444 0.0207857C103.42 0.0316507 103.402 0.0526566 103.386 0.0743866L102.455 1.48177L101.525 2.88915C101.509 2.91595 101.498 2.94493 101.498 2.97462C101.498 3.00432 101.503 3.0333 101.517 3.06227C101.53 3.08907 101.552 3.11007 101.576 3.12601H101.578Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M107.259 5.77883C106.216 4.68871 104.721 4.0752 102.903 4.0752C101.085 4.0752 99.5989 4.69088 98.5595 5.77883C97.5223 6.86896 96.9355 8.43424 96.9355 10.3378C96.9355 12.2413 97.5223 13.7929 98.5595 14.8808C99.5967 15.9659 101.09 16.5794 102.903 16.5794C104.716 16.5794 106.216 15.9659 107.259 14.8808C108.301 13.7958 108.888 12.2334 108.888 10.3378C108.888 8.44221 108.301 6.86896 107.259 5.77883ZM105.006 12.5695C104.646 13.2786 104.009 13.8255 102.9 13.8255C101.791 13.8255 101.169 13.2786 100.812 12.5695C100.455 11.8603 100.373 10.9882 100.373 10.3378C100.373 9.68734 100.455 8.80438 100.812 8.09308C101.169 7.37889 101.802 6.82912 102.9 6.82912C103.998 6.82912 104.646 7.37816 105.006 8.09308C105.366 8.80728 105.449 9.68445 105.449 10.3378C105.449 10.9911 105.366 11.8603 105.006 12.5695Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M95.2755 0.000976562H91.9884C91.9377 0.000976562 91.8921 0.0219824 91.8602 0.0545775C91.8284 0.0893456 91.8066 0.134254 91.8066 0.184958V16.0776C91.8066 16.1283 91.8276 16.1761 91.8602 16.2109C91.8921 16.2456 91.9377 16.2666 91.9884 16.2666H95.2755C95.3262 16.2666 95.3711 16.2456 95.4037 16.2109C95.4356 16.1761 95.4573 16.1312 95.4573 16.0776V0.187855C95.4573 0.137152 95.4363 0.0893456 95.4037 0.0574749C95.3718 0.0227068 95.3262 0.00387397 95.2755 0.00387397V0.000976562Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M42.6453 7.40223C43.2581 7.0292 43.7145 6.57287 44.0187 6.02889C44.3222 5.48492 44.4721 4.8533 44.4721 4.12534C44.4721 2.73607 44.0534 1.70461 43.2031 1.02229C42.3549 0.339966 41.0757 0.000976562 39.3532 0.000976562H32.0744C32.0237 0.000976562 31.9781 0.0219824 31.9462 0.0545775C31.9143 0.0893456 31.8926 0.134254 31.8926 0.184958V16.0776C31.8926 16.1283 31.9136 16.1761 31.9462 16.2109C31.9781 16.2456 32.0237 16.2666 32.0744 16.2666H39.5691C40.87 16.2666 42.2803 15.9523 43.3653 15.1975C44.4504 14.4406 45.2102 13.2433 45.2102 11.473C45.2102 10.4756 44.9835 9.61725 44.5489 8.92986C44.1143 8.24174 43.4747 7.72456 42.6453 7.40223ZM35.6548 4.76276V3.09099H38.6571C39.3931 3.09099 39.9312 3.22137 40.2891 3.49082C40.6462 3.76028 40.8171 4.17097 40.8171 4.73089C40.8171 5.43494 40.5585 5.86157 40.1935 6.11219C39.8284 6.36281 39.354 6.43742 38.9194 6.43742H35.6562V4.76276H35.6548ZM40.8671 12.708C40.4803 13.0252 39.8965 13.1803 39.1127 13.1803H35.6548V9.19207H39.1765C39.9392 9.19207 40.5042 9.36301 40.8801 9.70924C41.2561 10.0562 41.4429 10.5755 41.4429 11.2767C41.4429 11.9163 41.251 12.3936 40.8642 12.7109L40.8671 12.708Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M57.1769 7.53317C57.1769 6.38655 56.7474 5.52024 55.897 4.9444C55.0466 4.36565 53.7696 4.0752 52.079 4.0752C50.5623 4.0752 49.3143 4.39245 48.3944 4.98134C47.4773 5.57312 46.8906 6.43942 46.6958 7.54041C46.6907 7.56432 46.6929 7.59112 46.6958 7.61502C46.7016 7.63892 46.7117 7.66283 46.7255 7.68166C46.7385 7.70266 46.7574 7.71932 46.7762 7.73236C46.7972 7.7454 46.8189 7.75337 46.8428 7.75916L48.3516 8.01485L49.8604 8.27054C49.8843 8.27634 49.9111 8.27344 49.935 8.26765C49.9589 8.26258 49.9807 8.25171 50.0017 8.23578C50.0205 8.21984 50.0393 8.20101 50.0495 8.1771C50.0603 8.1561 50.0683 8.1293 50.0705 8.1054C50.1212 7.58025 50.2921 7.19346 50.5985 6.93994C50.9049 6.68642 51.3424 6.56401 51.9233 6.56401C52.5042 6.56401 52.9367 6.61978 53.2481 6.8226C53.5596 7.02541 53.7334 7.36875 53.7334 7.94532C53.7544 8.36905 53.5205 8.62257 53.0801 8.79062C52.6397 8.95866 51.995 9.04703 51.1925 9.13975C50.1045 9.26795 48.8833 9.4092 47.9293 9.92348C46.9776 10.4378 46.2923 11.3258 46.2793 12.944C46.2793 14.0659 46.6632 14.9757 47.3535 15.6044C48.0438 16.2339 49.0441 16.583 50.2755 16.583C50.9925 16.583 51.635 16.4874 52.2109 16.2897C52.7867 16.0926 53.293 15.7964 53.7356 15.3995V15.498C53.7356 15.5646 53.7327 15.6421 53.7305 15.7377V16.0839C53.7305 16.1346 53.7515 16.1825 53.7841 16.2172C53.816 16.252 53.8616 16.273 53.9123 16.273H56.9944C57.0451 16.273 57.0907 16.252 57.1226 16.2172C57.1545 16.1825 57.1762 16.1375 57.1762 16.0839V7.531L57.1769 7.53317ZM53.7371 11.2121V11.6278C53.7371 12.4572 53.548 13.0729 53.1663 13.4807C52.7824 13.8885 52.2065 14.0913 51.4279 14.0913C50.8549 14.0913 50.4283 13.987 50.148 13.774C49.8655 13.5611 49.7264 13.2409 49.7264 12.8092C49.7264 12.3775 49.8459 12.0624 50.1154 11.8205C50.3848 11.5779 50.8035 11.4127 51.3953 11.3004C51.5126 11.2794 51.6329 11.2577 51.7524 11.2418C51.8726 11.2229 51.995 11.207 52.1124 11.1882C52.4166 11.1454 52.715 11.1027 52.9924 11.044C53.267 10.9854 53.5234 10.9078 53.7363 10.7963V11.2121H53.7371Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M88.5548 5.75975C88.0536 5.2078 87.4589 4.78696 86.7845 4.50375C86.1123 4.22126 85.3634 4.07422 84.5579 4.07422C82.8492 4.07422 81.3745 4.73264 80.3271 5.84449C79.279 6.95635 78.6582 8.52164 78.6582 10.3368C78.6582 12.152 79.25 13.7629 80.2843 14.8581C81.3187 15.9511 82.7934 16.5777 84.5579 16.5777C85.8327 16.5777 86.9091 16.2872 87.7812 15.7136C88.6533 15.1406 89.3168 14.2794 89.7731 13.1378C89.784 13.111 89.7891 13.0842 89.7862 13.0552C89.7862 13.0284 89.7782 12.9995 89.7623 12.9756C89.7492 12.9517 89.7304 12.9299 89.7087 12.914C89.6869 12.8981 89.6609 12.8872 89.6341 12.8821L88.36 12.6663L87.0858 12.4504C87.0431 12.4425 87.0033 12.4504 86.9685 12.4714C86.9337 12.4924 86.9048 12.525 86.8888 12.5649C86.7686 12.8742 86.4839 13.1885 86.0942 13.4261C85.7053 13.6637 85.212 13.823 84.6709 13.823C83.8633 13.823 83.2548 13.6202 82.834 13.2016C82.4124 12.7829 82.1756 12.1455 82.1111 11.2792H89.5095C89.7014 11.2792 89.8745 11.1995 89.9998 11.0713C90.1252 10.9431 90.2027 10.7649 90.2027 10.5672V10.5295C90.2056 9.58858 90.0614 8.68968 89.784 7.87915C89.5066 7.06862 89.0937 6.34646 88.5599 5.75975L88.5548 5.75685V5.75975ZM84.4094 8.90264H82.1191C82.1669 8.56654 82.2951 8.04647 82.6413 7.61187C82.9876 7.17727 83.5533 6.82814 84.4732 6.82814C85.1048 6.82814 85.585 6.98025 85.945 7.31344C86.305 7.64954 86.5448 8.16671 86.6998 8.90264H84.4094Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M115.416 16.2821V4.37109H120.299C122.529 4.37109 123.975 5.81687 123.975 7.51905C123.975 8.71059 123.261 9.56096 122.46 9.90139C123.328 10.2244 124.57 11.2284 124.57 12.8277C124.57 14.6827 122.971 16.2821 120.589 16.2821H115.416ZM117.543 9.16909H120.249C121.201 9.16909 121.831 8.53964 121.831 7.67189C121.831 6.80414 121.202 6.1573 120.249 6.1573H117.543V9.16909ZM117.543 14.4951H120.539C121.645 14.4951 122.427 13.6955 122.427 12.6749C122.427 11.6543 121.645 10.8713 120.539 10.8713H117.543V14.4951Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M128.047 16.2821V4.37109H136.606V6.29348H130.174V9.18647H135.245V11.0929H130.174V14.3597H136.776V16.2821H128.047Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M140.324 16.2821V4.37109H142.231L148.475 12.6749H148.527V4.37109H150.653V16.2821H148.731L142.502 7.97828H142.434V16.2821H140.324Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M154.273 16.2821V4.37109H162.832V6.29348H156.4V9.18647H161.471V11.0929H156.4V14.3597H163.002V16.2821H154.273Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M166.553 16.2821V4.37109H175.026V6.39561H168.679V9.54357H173.665V11.5348H168.679V16.2821H166.553Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M178.07 16.2821V4.37109H180.197V16.2821H178.07Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M186.978 16.2821V6.32752H183.455V4.37109H192.627V6.32752H189.105V16.2821H186.978H186.978Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M195.67 14.6151L197.065 13.2714C197.626 13.8661 198.58 14.5644 199.992 14.5644C201.404 14.5644 202.204 13.7821 202.204 12.931C202.204 10.4979 196.061 11.893 196.061 7.55424C196.061 5.68183 197.678 4.16797 200.196 4.16797C202.068 4.16797 203.428 5.05311 204.058 5.75064L202.681 7.11239C202.222 6.68721 201.37 6.07442 200.264 6.07442C198.921 6.07442 198.24 6.77123 198.24 7.55424C198.24 9.988 204.366 8.59221 204.366 12.931C204.366 14.8374 202.732 16.4875 200.061 16.4875C197.866 16.4875 196.367 15.4828 195.671 14.6151H195.67Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M77.4774 12.0863C77.4644 12.0653 77.4456 12.0465 77.4238 12.0327C77.4028 12.0197 77.3811 12.0088 77.3543 12.0059L75.9121 11.7604L74.47 11.5148C74.4461 11.5097 74.4222 11.5119 74.3983 11.5177C74.3744 11.5235 74.3526 11.5336 74.3345 11.5496C74.3157 11.5655 74.2969 11.5814 74.2867 11.6032C74.2759 11.6242 74.2657 11.6488 74.2628 11.6727C74.1933 12.1631 74.031 12.6991 73.6841 13.1149C73.3371 13.5285 72.8069 13.8211 71.9993 13.8211C71.125 13.8211 70.5303 13.3756 70.1544 12.7252C69.7785 12.0718 69.6242 11.2135 69.6242 10.3819C69.6242 10.0857 69.6532 9.19838 69.9733 8.38206C70.2935 7.56863 70.9034 6.82764 72.0638 6.82764C72.6765 6.82764 73.1539 6.97685 73.5008 7.27817C73.8471 7.5795 74.0658 8.03293 74.1564 8.64354C74.1593 8.66745 74.1694 8.69135 74.1803 8.71308C74.1933 8.73409 74.21 8.75292 74.2281 8.76668C74.2469 8.78262 74.2708 8.79058 74.2918 8.79638C74.3157 8.80145 74.3396 8.80145 74.3635 8.79638L75.8433 8.54576L77.3231 8.29514C77.3739 8.28717 77.4137 8.25747 77.4405 8.22053C77.4673 8.18069 77.4803 8.13289 77.4724 8.08218C77.2804 6.86385 76.6539 5.86137 75.7151 5.16239C74.7764 4.46413 73.5262 4.07227 72.084 4.07227C70.2927 4.07227 68.8151 4.70171 67.7887 5.81864C66.7623 6.93556 66.1836 8.54069 66.1836 10.4899C66.1836 12.2812 66.7833 13.8037 67.8126 14.8757C68.8419 15.9499 70.3 16.5743 72.0196 16.5743C73.4755 16.5743 74.7047 16.1774 75.6376 15.4356C76.5706 14.6946 77.2159 13.6067 77.5013 12.2254C77.5064 12.2015 77.5064 12.1747 77.5013 12.1508C77.4955 12.1269 77.4883 12.103 77.4716 12.0812L77.4774 12.087V12.0863Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M66.4991 4.31977C66.4991 4.29297 66.4911 4.26906 66.4781 4.24516C66.4651 4.22126 66.4484 4.20243 66.4303 4.18359C66.4114 4.16766 66.3875 4.15679 66.3607 4.14883C66.2622 4.12202 66.1637 4.10319 66.0703 4.09305C65.9768 4.08001 65.8834 4.07422 65.7929 4.07422C65.0012 4.07422 64.3 4.24733 63.7184 4.56459C63.1375 4.87895 62.6732 5.33529 62.3588 5.90027V4.57256C62.3588 4.52186 62.3378 4.47405 62.3052 4.44218C62.2733 4.40741 62.2277 4.38858 62.177 4.38858H59.2521C59.2014 4.38858 59.1565 4.40959 59.1239 4.44218C59.092 4.47695 59.0703 4.52186 59.0703 4.57256V16.0793C59.0703 16.1301 59.0913 16.1779 59.1239 16.2126C59.1558 16.2474 59.2014 16.2684 59.2521 16.2684H62.3291C62.3798 16.2684 62.4247 16.2474 62.4573 16.2126C62.4892 16.1779 62.5109 16.1329 62.5109 16.0793V10.8938C62.5109 9.75301 62.7427 8.88598 63.2012 8.30216C63.6597 7.71545 64.35 7.41196 65.2619 7.39023C65.2989 7.39023 65.3336 7.37719 65.3633 7.35546C65.393 7.33445 65.414 7.30475 65.4271 7.26999L65.958 5.8329L66.4882 4.39582C66.4962 4.37192 66.5013 4.34512 66.4991 4.31832V4.31977Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M14.9047 0.000795187C13.7182 0.000795187 12.7237 0.832332 12.4731 1.94419L12.4673 1.97099C12.4644 1.98692 12.4622 2.00286 12.4564 2.01879L10.2247 12.6325C10.2276 8.57693 10.2298 2.58088 10.2298 2.58088C10.2298 1.25027 9.22443 0.0877155 7.89673 0.0051413C6.63856 -0.0745356 5.56654 0.780905 5.30506 1.94346L5.29999 1.97026C5.29709 1.9862 5.29492 2.00213 5.28912 2.01807L3.06324 12.605V1.43281C3.06324 0.641108 2.42075 0.000795187 1.63123 0.000795187C0.841704 0.000795187 0.199219 0.640383 0.199219 1.43281V16.2752H3.06252V16.2542C3.06252 16.2542 3.06759 16.2484 3.06759 16.2462C3.06759 16.2462 5.88815 2.91045 5.93885 2.62796C6.01635 2.20422 6.27494 1.91376 6.65305 1.91376C7.06085 1.91376 7.36724 2.21509 7.36724 2.62796V16.2621L10.2175 16.273V16.252H10.2305C10.2305 16.252 13.054 2.90538 13.1047 2.62579C13.1822 2.20205 13.4408 1.91159 13.8189 1.91159C14.2267 1.91159 14.5331 2.21292 14.5331 2.62579V16.2708H17.3964V2.49686C17.3964 1.11844 16.2795 0.00151968 14.901 0.00151968L14.9047 0.000795187Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M27.3314 0.000976562C26.5926 0.000976562 25.9479 0.507287 25.7741 1.22438L22.687 13.2194C22.687 13.2194 22.6819 13.2114 22.679 13.2085C22.6472 13.3497 22.6095 13.5048 22.5697 13.6699L22.3777 14.4189C22.3219 14.5311 22.2285 14.6137 22.0981 14.6137C21.917 14.6137 21.77 14.4674 21.77 14.2856V1.43299C21.7671 0.641289 21.1275 0.000976562 20.3358 0.000976562C19.5441 0.000976562 18.9045 0.640565 18.9045 1.43299V14.3638C18.9045 15.4757 19.744 16.4485 20.8537 16.5209C21.891 16.5875 22.7783 15.8972 23.0187 14.9476L26.0711 3.15835V21.0161C26.0711 22.0961 25.3113 23.0638 24.245 23.2239C22.9173 23.4209 21.7656 22.3866 21.7656 21.0965V18.6946C21.7656 17.9029 21.1261 17.2633 20.3336 17.2633C19.5412 17.2633 18.9023 17.9029 18.9023 18.6946V18.9851C18.9023 21.7448 21.1608 24.0004 23.9169 24.0004C26.673 24.0004 28.9235 21.7499 28.9322 18.9988V1.60393C28.9373 0.718793 28.2173 0.00170105 27.3322 0.00170105L27.3314 0.000976562Z",
                                fill: a
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_73590",
                                children: (0, l.jsx)("rect", {
                                    width: "204.6",
                                    height: "24",
                                    fill: "white",
                                    transform: "translate(0.199219)"
                                })
                            })
                        })]
                    }) : "x-large" === C ? s === i.Yn.Essential ? (0, l.jsxs)("svg", {
                        width: "273",
                        height: "32",
                        viewBox: "0 0 273 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-label": "my Barcel\xf3 essential",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_48153)",
                            children: [(0, l.jsx)("path", {
                                d: "M139.728 4.13372C139.762 4.15502 139.801 4.16567 139.841 4.16567H142.474C142.502 4.16567 142.53 4.163 142.555 4.15236C142.58 4.14171 142.606 4.1284 142.625 4.10977L146.722 0.449978C146.756 0.418038 146.779 0.380775 146.787 0.338188C146.798 0.295601 146.795 0.250353 146.776 0.210428C146.756 0.170503 146.731 0.13324 146.694 0.109285C146.658 0.0853297 146.613 0.0720215 146.571 0.0720215H142.392C142.356 0.0720215 142.319 0.0826682 142.285 0.0959765C142.252 0.109285 142.226 0.138563 142.204 0.165179L139.65 3.82497C139.627 3.85957 139.613 3.89684 139.613 3.93676C139.613 3.97669 139.621 4.01395 139.638 4.05121C139.658 4.08581 139.686 4.11243 139.72 4.13372H139.723H139.728Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M144.429 16.4068C143.934 17.3277 143.06 18.0384 141.54 18.0384C140.02 18.0384 139.166 17.3277 138.677 16.4068C138.188 15.4859 138.072 14.352 138.072 13.5056C138.072 12.6592 138.185 11.512 138.677 10.5884C139.166 9.65948 140.034 8.94615 141.54 8.94615C143.046 8.94615 143.937 9.65948 144.429 10.5884C144.923 11.5173 145.036 12.6565 145.036 13.5056C145.036 14.3547 144.923 15.4832 144.429 16.4068ZM147.52 7.58072C146.089 6.16471 144.038 5.36621 141.543 5.36621C139.048 5.36621 137.01 6.16737 135.583 7.58072C134.161 8.99672 133.354 11.0329 133.354 13.5056C133.354 15.9783 134.158 17.9958 135.583 19.4092C137.005 20.8198 139.053 21.6157 141.543 21.6157C144.032 21.6157 146.089 20.8198 147.52 19.4092C148.95 17.9985 149.754 15.9676 149.754 13.5056C149.754 11.0435 148.95 8.99672 147.52 7.58072Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M131.079 0.0720215H126.569C126.499 0.0720215 126.437 0.0986377 126.395 0.141224C126.35 0.186473 126.322 0.24503 126.322 0.311572V20.9661C126.322 21.0326 126.35 21.0939 126.395 21.1391C126.44 21.1844 126.501 21.211 126.569 21.211H131.079C131.149 21.211 131.211 21.1844 131.253 21.1391C131.295 21.0939 131.326 21.0353 131.326 20.9661V0.314233C131.326 0.247691 131.298 0.186473 131.253 0.143887C131.208 0.0986383 131.146 0.0746827 131.079 0.0746827V0.0720215Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M56.4313 16.585C55.9002 16.9976 55.0994 17.1972 54.0232 17.1972H49.2799V12.0149H54.1131C55.1584 12.0149 55.934 12.2359 56.451 12.6883C56.968 13.1408 57.2237 13.8142 57.2237 14.7245C57.2237 15.555 56.9596 16.1751 56.4313 16.5877H56.4341L56.4313 16.585ZM49.2799 4.0885H53.3993C54.4081 4.0885 55.1472 4.25885 55.6389 4.60753C56.1278 4.9562 56.3639 5.4912 56.3639 6.21783C56.3639 7.13345 56.0098 7.68707 55.5068 8.0118C55.0067 8.33652 54.3547 8.435 53.759 8.435H49.2827V4.08584L49.2799 4.0885ZM58.8704 9.69131C59.7106 9.20688 60.3372 8.61333 60.7531 7.90799C61.169 7.20265 61.3741 6.3802 61.3741 5.4353C61.3741 3.63069 60.8009 2.28921 59.6319 1.40288C58.4686 0.516544 56.7123 0.074707 54.3491 0.074707H44.3624C44.2921 0.074707 44.2303 0.101324 44.1882 0.143911C44.1432 0.189159 44.1151 0.247716 44.1151 0.314257V20.9688C44.1151 21.0353 44.1432 21.0965 44.1882 21.1418C44.2331 21.187 44.295 21.2137 44.3624 21.2137H54.6442C56.4285 21.2137 58.3646 20.8038 59.8539 19.8243C61.3432 18.8395 62.3857 17.285 62.3857 14.9827C62.3857 13.6865 62.0738 12.5712 61.4781 11.6769C60.8824 10.7826 60.0028 10.1119 58.8676 9.69131H58.8704Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M74.0925 15.1824C74.0925 16.2604 73.834 17.0616 73.3085 17.5912C72.7831 18.1209 71.9906 18.3844 70.9228 18.3844C70.136 18.3844 69.5516 18.2487 69.1666 17.9719C68.7788 17.6951 68.5877 17.2798 68.5877 16.7182C68.5877 16.1566 68.7535 15.7494 69.1216 15.4326C69.4897 15.1186 70.0658 14.903 70.8779 14.7566C71.0381 14.73 71.2038 14.7007 71.3668 14.6794C71.5326 14.6554 71.6984 14.6341 71.8614 14.6102C72.2773 14.5543 72.6875 14.4984 73.0697 14.4239C73.4462 14.3467 73.7975 14.2482 74.0897 14.1018V15.1824H74.0925ZM78.8105 9.8591C78.8105 8.36857 78.2204 7.24269 77.0543 6.49476C75.8881 5.74417 74.1347 5.36621 71.8164 5.36621C69.7342 5.36621 68.0229 5.77877 66.7612 6.54533C65.5024 7.31455 64.6987 8.44044 64.4318 9.87241C64.4233 9.90435 64.4289 9.93895 64.4318 9.96823C64.4402 10.0002 64.4542 10.0295 64.4711 10.0561C64.4908 10.0827 64.5161 10.104 64.5414 10.1226C64.5695 10.1412 64.6004 10.1492 64.6341 10.1572L68.776 10.8226C68.8097 10.8306 68.8463 10.8253 68.8772 10.82C68.9109 10.812 68.939 10.7987 68.9699 10.7774C68.9952 10.7561 69.0205 10.7321 69.0345 10.7002C69.0486 10.6736 69.0598 10.639 69.0626 10.607C69.1329 9.92565 69.3661 9.42259 69.7876 9.09254C70.2091 8.7625 70.8076 8.6028 71.6057 8.6028C72.4037 8.6028 72.9966 8.67466 73.4237 8.93817C73.8509 9.20167 74.0897 9.64883 74.0897 10.3968C74.1178 10.9477 73.7975 11.2778 73.1933 11.496C72.5892 11.7143 71.704 11.8287 70.6025 11.9512C69.1104 12.1162 67.4356 12.2999 66.1262 12.9706C64.8195 13.6387 63.881 14.7938 63.8613 16.8966C63.8613 18.3551 64.3868 19.5369 65.3366 20.3541C66.2864 21.1712 67.6548 21.6263 69.3464 21.6263C70.3299 21.6263 71.2123 21.5012 72.0019 21.2457C72.7915 20.9902 73.4884 20.6043 74.0953 20.0879V20.2157C74.0953 20.3035 74.0925 20.402 74.0869 20.5271V20.9769C74.0869 21.0434 74.115 21.1046 74.16 21.1499C74.2049 21.1951 74.2667 21.2218 74.3342 21.2218H78.5632C78.6335 21.2218 78.6953 21.1951 78.7374 21.1499C78.7796 21.1046 78.8105 21.0461 78.8105 20.9769V9.86177V9.8591Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M113.031 11.6424C113.095 11.2059 113.272 10.5298 113.747 9.96557C114.222 9.4013 114.998 8.94615 116.259 8.94615C117.128 8.94615 117.785 9.14312 118.28 9.57697C118.774 10.0135 119.103 10.6869 119.314 11.6424H113.031ZM121.86 7.55676C121.171 6.84077 120.356 6.29247 119.432 5.92516C118.51 5.55785 117.482 5.36621 116.377 5.36621C114.034 5.36621 112.011 6.22327 110.572 7.66589C109.133 9.11118 108.282 11.1447 108.282 13.5029C108.282 15.8612 109.094 17.9559 110.513 19.3799C111.932 20.8012 113.955 21.6157 116.377 21.6157C118.125 21.6157 119.603 21.2377 120.8 20.4925C121.997 19.7445 122.908 18.6293 123.532 17.1441C123.546 17.1095 123.554 17.0749 123.551 17.0376C123.551 17.003 123.54 16.9658 123.518 16.9338C123.498 16.9019 123.473 16.8753 123.445 16.854C123.417 16.8327 123.38 16.8194 123.343 16.8114L119.848 16.2498C119.789 16.2391 119.735 16.2498 119.688 16.2764C119.64 16.303 119.601 16.3456 119.578 16.3988C119.412 16.8007 119.022 17.2106 118.488 17.5167C117.954 17.8228 117.277 18.0331 116.535 18.0331C115.428 18.0331 114.593 17.7696 114.014 17.2266C113.435 16.6836 113.109 15.8558 113.022 14.7273H123.172C123.436 14.7273 123.672 14.6235 123.846 14.4558C124.021 14.2881 124.125 14.0566 124.125 13.801V13.7531C124.127 12.5288 123.931 11.3629 123.551 10.3089C123.172 9.25491 122.604 8.31534 121.871 7.5541H121.863L121.86 7.55676Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M106.663 15.7787C106.643 15.752 106.618 15.7254 106.59 15.7094C106.561 15.6908 106.531 15.6775 106.494 15.6748L102.535 15.036C102.501 15.0281 102.47 15.0334 102.436 15.0387C102.403 15.0467 102.375 15.06 102.349 15.0813C102.324 15.1026 102.299 15.1239 102.285 15.1505C102.271 15.1771 102.257 15.2091 102.251 15.241C102.155 15.8798 101.933 16.5745 101.459 17.1148C100.984 17.6525 100.256 18.0331 99.1459 18.0331C97.946 18.0331 97.1311 17.4555 96.6141 16.6091C96.0971 15.76 95.8863 14.6448 95.8863 13.5641C95.8863 13.1809 95.9257 12.0257 96.3668 10.9664C96.8052 9.90968 97.6426 8.94615 99.2358 8.94615C100.076 8.94615 100.731 9.14046 101.208 9.53172C101.683 9.92299 101.984 10.5112 102.108 11.3071C102.11 11.339 102.127 11.3683 102.141 11.3975C102.161 11.4242 102.181 11.4508 102.206 11.4668C102.231 11.488 102.265 11.4987 102.293 11.504C102.327 11.512 102.358 11.512 102.391 11.504L106.452 10.8519C106.522 10.8413 106.576 10.804 106.612 10.7561C106.649 10.7029 106.668 10.6416 106.657 10.5751C106.393 8.9914 105.533 7.68985 104.246 6.78222C102.959 5.87459 101.242 5.36621 99.2639 5.36621C96.8052 5.36621 94.7792 6.18334 93.3714 7.63661C91.9636 9.08722 91.1683 11.174 91.1683 13.7079C91.1683 16.0368 91.9917 18.0145 93.4023 19.4065C94.8129 20.8039 96.8164 21.613 99.174 21.613C101.172 21.613 102.858 21.0967 104.136 20.1331C105.421 19.1696 106.303 17.7563 106.694 15.9623C106.702 15.9304 106.702 15.8958 106.694 15.8665C106.685 15.8372 106.674 15.8053 106.654 15.776L106.663 15.784V15.7787Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M91.5982 5.68563C91.5982 5.65103 91.587 5.61909 91.5701 5.58981C91.5533 5.56054 91.5308 5.53392 91.5055 5.50996C91.4802 5.48867 91.4465 5.47536 91.41 5.46472C91.2751 5.43011 91.1402 5.40616 91.0109 5.39285C90.8817 5.37422 90.7552 5.3689 90.6316 5.3689C89.5441 5.3689 88.5831 5.59514 87.7851 6.0077C86.987 6.41759 86.352 7.00848 85.9192 7.7431V6.01834C85.9192 5.9518 85.8911 5.89058 85.8462 5.848C85.8012 5.80275 85.7394 5.77879 85.6719 5.77879H81.6593C81.589 5.77879 81.5272 5.80541 81.485 5.848C81.4401 5.89324 81.412 5.9518 81.412 6.01834V20.9716C81.412 21.0381 81.4401 21.0993 81.485 21.1446C81.53 21.1898 81.5918 21.2165 81.6593 21.2165H85.8799C85.9501 21.2165 86.012 21.1898 86.0541 21.1446C86.0963 21.0993 86.1272 21.0408 86.1272 20.9716V14.2322C86.1272 12.7497 86.4447 11.6238 87.0741 10.8652C87.7036 10.104 88.6505 9.70741 89.901 9.6808C89.9516 9.6808 89.9993 9.66216 90.0387 9.63555C90.078 9.60893 90.1089 9.56901 90.1258 9.52376L91.5814 5.78944C91.5926 5.7575 91.601 5.7229 91.5954 5.6883L91.5982 5.68563Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M20.8094 0.0721937C19.1824 0.0721937 17.8168 1.15283 17.474 2.59812L17.4655 2.63272C17.4627 2.65401 17.4571 2.6753 17.4515 2.69393L14.3886 16.4867C14.3914 11.2166 14.397 3.42323 14.397 3.42323C14.397 1.69315 13.0173 0.183983 11.1964 0.0748549C9.4711 -0.0289501 7.99866 1.08363 7.64179 2.59279L7.63336 2.62739C7.63055 2.64869 7.62493 2.66998 7.61931 2.68861L4.56485 16.4468V1.92471C4.56485 0.894648 3.68251 0.064209 2.60066 0.064209C1.51881 0.064209 0.636475 0.894648 0.636475 1.92471V21.2138H4.56485V21.1872C4.56485 21.1872 4.57328 21.1792 4.57328 21.1765C4.57328 21.1765 8.44264 3.84644 8.51289 3.47913C8.61967 2.92816 8.97373 2.55021 9.49358 2.55021C10.0528 2.55021 10.4743 2.94147 10.4743 3.47913V21.1978L14.3858 21.2111V21.1845H14.4054C14.4054 21.1845 18.2804 3.83845 18.3479 3.47647C18.4547 2.9255 18.8087 2.54754 19.3286 2.54754C19.8877 2.54754 20.3092 2.93881 20.3092 3.47647V21.2085H24.2376V3.3141C24.2376 1.5228 22.7062 0.0721937 20.815 0.0721937H20.8094Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M37.8604 0.0720215C36.846 0.0720215 35.9608 0.729453 35.7248 1.6637L31.4901 17.2531C31.4901 17.2531 31.4817 17.2424 31.4789 17.2398C31.4339 17.4234 31.3833 17.6231 31.3299 17.8386L31.0658 18.8128C30.9899 18.9592 30.8607 19.0657 30.6808 19.0657C30.4307 19.0657 30.2312 18.874 30.2312 18.6398V1.93519C30.2284 0.905123 29.3489 0.0746827 28.2642 0.0746827C27.1796 0.0746827 26.3 0.905123 26.3 1.93519V18.741C26.3 20.1862 27.4521 21.4505 28.9752 21.5437C30.397 21.6315 31.6166 20.7319 31.9453 19.4995L36.135 4.17897V27.386C36.135 28.7887 35.0925 30.0477 33.6285 30.2553C31.8076 30.5108 30.2256 29.1667 30.2256 27.4898V24.3677C30.2256 23.3376 29.3489 22.5072 28.2614 22.5072C27.174 22.5072 26.2972 23.3376 26.2972 24.3677V24.7457C26.2972 28.3309 29.3967 31.2641 33.1789 31.2641C36.9612 31.2641 40.0494 28.3389 40.0606 24.7643V2.15344C40.069 1.0036 39.0799 0.0720215 37.866 0.0720215H37.8604Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M170.765 18.794H162.911V8.16602H170.605V9.24399H164.113V12.7201H169.323V13.7981H164.113V17.7161H170.765V18.794Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M179.459 18.9461C177.633 18.9461 176.27 18.0651 175.643 17.3518L176.478 16.5932C177.023 17.1708 178.018 17.8681 179.459 17.8681C181.19 17.8681 182.072 17.0191 182.072 15.9251C182.072 13.2528 175.966 14.6502 175.966 10.8839C175.966 9.33484 177.36 8.01465 179.622 8.01465C181.21 8.01465 182.395 8.74395 182.957 9.32153L182.14 10.0801C181.69 9.65424 180.825 9.09262 179.622 9.09262C178.034 9.09262 177.169 9.91242 177.169 10.8839C177.169 13.5562 183.292 12.1429 183.292 15.9251C183.292 17.5966 181.85 18.9461 179.462 18.9461H179.459Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M192.011 18.9461C190.184 18.9461 188.821 18.0651 188.195 17.3518L189.029 16.5932C189.574 17.1708 190.569 17.8681 192.011 17.8681C193.742 17.8681 194.624 17.0191 194.624 15.9251C194.624 13.2528 188.518 14.6502 188.518 10.8839C188.518 9.33484 189.912 8.01465 192.174 8.01465C193.761 8.01465 194.947 8.74395 195.509 9.32153L194.691 10.0801C194.242 9.65424 193.376 9.09262 192.174 9.09262C190.586 9.09262 189.721 9.91242 189.721 10.8839C189.721 13.5562 195.844 12.1429 195.844 15.9251C195.844 17.5966 194.402 18.9461 192.013 18.9461H192.011Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M209.484 18.794H201.63V8.16602H209.323V9.24399H202.832V12.7201H208.042V13.7981H202.832V17.7161H209.484V18.794Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M216.447 18.794H215.247V8.16602H216.287L223.165 16.7446H223.213V8.16602H224.416V18.794H223.373L216.48 10.2155H216.447V18.794Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M234.436 18.794H233.233V9.24399H229.676V8.16602H237.979V9.24399H234.436V18.794Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M244.463 8.16602H243.26V18.794H244.463V8.16602Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M254.884 9.53145L252.656 14.7696H257.129L254.918 9.53145H254.887H254.884ZM250.942 18.794H249.708L254.26 8.16602H255.589L260.142 18.794H258.843L257.576 15.8343H252.223L250.942 18.794Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M272.363 18.794H265.388V8.16602H266.591V17.7161H272.363V18.794Z",
                                fill: a
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_48153",
                                children: (0, l.jsx)("rect", {
                                    width: "272.8",
                                    height: "32",
                                    fill: "white",
                                    transform: "translate(0.0996094)"
                                })
                            })
                        })]
                    }) : s === i.Yn.Special ? (0, l.jsxs)("svg", {
                        width: "273",
                        height: "32",
                        viewBox: "0 0 273 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-label": "my Barcel\xf3 special",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_87887)",
                            children: [(0, l.jsx)("path", {
                                d: "M153.962 4.8598C153.999 4.88113 154.043 4.8918 154.086 4.8918H156.994C157.025 4.8918 157.056 4.88913 157.084 4.87847C157.112 4.8678 157.14 4.85447 157.162 4.8358L161.683 1.17478C161.72 1.14278 161.745 1.10545 161.755 1.06279C161.767 1.02012 161.764 0.97746 161.742 0.934797C161.72 0.892134 161.692 0.857471 161.652 0.833473C161.612 0.809475 161.562 0.796143 161.516 0.796143H156.904C156.864 0.796143 156.823 0.806808 156.786 0.820141C156.749 0.833473 156.721 0.862803 156.696 0.889468L153.878 4.5505C153.854 4.58516 153.838 4.62249 153.838 4.66249C153.838 4.70248 153.847 4.73981 153.866 4.77714C153.888 4.81181 153.919 4.83847 153.956 4.8598H153.959H153.962Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M159.15 17.1384C158.604 18.061 157.639 18.7703 155.96 18.7703C154.281 18.7703 153.338 18.061 152.798 17.1384C152.258 16.2158 152.131 15.0826 152.131 14.2373C152.131 13.3921 152.255 12.2455 152.798 11.3202C153.338 10.3923 154.297 9.6777 155.96 9.6777C157.624 9.6777 158.604 10.3923 159.15 11.3202C159.697 12.2481 159.821 13.3894 159.821 14.2373C159.821 15.0852 159.697 16.2158 159.15 17.1384ZM162.564 8.30981C160.984 6.89126 158.719 6.09399 155.966 6.09399C153.214 6.09399 150.964 6.89393 149.387 8.30981C147.817 9.72836 146.93 11.7629 146.93 14.2373C146.93 16.7118 147.817 18.7303 149.387 20.1435C150.958 21.554 153.22 22.3513 155.966 22.3513C158.713 22.3513 160.984 21.554 162.564 20.1435C164.144 18.7329 165.031 16.7011 165.031 14.2373C165.031 11.7735 164.144 9.72836 162.564 8.30981Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M144.413 0.798828H139.435C139.358 0.798828 139.289 0.825492 139.243 0.868155C139.193 0.913485 139.162 0.972147 139.162 1.03881V21.6984C139.162 21.7651 139.193 21.8264 139.243 21.8717C139.292 21.9171 139.361 21.9437 139.435 21.9437H144.413C144.49 21.9437 144.559 21.9171 144.605 21.8717C144.655 21.8264 144.686 21.7677 144.686 21.6984V1.04147C144.686 0.974813 144.655 0.913485 144.605 0.870822C144.556 0.825493 144.487 0.801494 144.413 0.801494V0.798828Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M62.0096 17.3174C61.4231 17.7307 60.5387 17.9307 59.3532 17.9307H54.1149V12.7445H59.4494C60.6038 12.7445 61.4603 12.9658 62.0282 13.4164C62.5961 13.8671 62.8816 14.5417 62.8816 15.4536C62.8816 16.2855 62.5899 16.9068 62.0065 17.3174H62.0096ZM54.1149 4.81716H58.6612C59.7753 4.81716 60.5914 4.98781 61.1314 5.33712C61.6714 5.68642 61.932 6.21971 61.932 6.94765C61.932 7.86224 61.541 8.41686 60.9886 8.74216C60.4363 9.06747 59.7163 9.16613 59.0584 9.16613H54.1149V4.81716ZM64.7033 10.4194C65.6311 9.93407 66.3232 9.34211 66.7824 8.63551C67.2417 7.9289 67.4683 7.10763 67.4683 6.16105C67.4683 4.35586 66.8352 3.01464 65.5473 2.12672C64.2626 1.23879 62.3261 0.798828 59.7163 0.798828H48.6935C48.6159 0.798828 48.5476 0.825492 48.5011 0.868155C48.4514 0.913485 48.4204 0.972147 48.4204 1.03881V21.6984C48.4204 21.7651 48.4514 21.8264 48.5011 21.8717C48.5507 21.9171 48.619 21.9437 48.6935 21.9437H60.0452C62.0158 21.9437 64.1509 21.5358 65.7956 20.5545C67.4403 19.5706 68.5885 18.0134 68.5885 15.7122C68.5885 14.4164 68.2441 13.2991 67.5862 12.4059C66.9283 11.5126 65.9601 10.838 64.7033 10.4194Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M81.504 15.9145C81.504 16.9918 81.2185 17.7944 80.6413 18.3223C80.0609 18.8529 79.1889 19.1169 78.0097 19.1169C77.1408 19.1169 76.4953 18.9809 76.0702 18.7036C75.6419 18.4263 75.4309 18.0103 75.4309 17.4477C75.4309 16.8851 75.614 16.4771 76.0205 16.1625C76.427 15.8478 77.0632 15.6319 77.96 15.4879C78.1369 15.4612 78.32 15.4319 78.5 15.4106C78.6831 15.3866 78.8662 15.3652 79.0462 15.3412C79.5055 15.2852 79.9585 15.2292 80.3775 15.1546C80.7933 15.0772 81.1812 14.9786 81.504 14.8319V15.9145ZM86.7113 10.5896C86.7113 9.09908 86.0596 7.97384 84.7717 7.22457C83.4839 6.47263 81.5505 6.09399 78.9903 6.09399C76.6939 6.09399 74.804 6.50729 73.4106 7.27256C72.0204 8.04316 71.1328 9.1684 70.838 10.6003C70.8287 10.6323 70.8349 10.6669 70.838 10.6963C70.8473 10.7283 70.8629 10.7576 70.8815 10.7816C70.9032 10.8083 70.9311 10.8296 70.9591 10.8483C70.9901 10.8643 71.0242 10.8749 71.0615 10.8829L75.6326 11.5495C75.6698 11.5575 75.7102 11.5522 75.7443 11.5469C75.7784 11.5415 75.8126 11.5255 75.8467 11.5042C75.8746 11.4829 75.9026 11.4589 75.9181 11.4269C75.9336 11.4002 75.946 11.3656 75.9491 11.3336C76.0267 10.6509 76.2843 10.147 76.7498 9.81902C77.2153 9.49104 77.8763 9.33106 78.7576 9.33106C79.6389 9.33106 80.2906 9.40305 80.7654 9.66703C81.2402 9.93101 81.5009 10.3763 81.5009 11.1256C81.5319 11.6775 81.1781 12.0055 80.5109 12.2241C79.8437 12.4428 78.8662 12.5575 77.6528 12.6774C76.005 12.8428 74.1554 13.0267 72.7093 13.696C71.2663 14.3653 70.2298 15.5199 70.2112 17.6237C70.2112 19.0822 70.7915 20.2635 71.8373 21.0821C72.8831 21.9007 74.3975 22.354 76.2626 22.354C77.3487 22.354 78.3231 22.2286 79.1951 21.9727C80.0672 21.7167 80.8337 21.3327 81.504 20.8154V20.9434C81.504 21.0287 81.5009 21.1301 81.4947 21.2554V21.706C81.4947 21.7727 81.5257 21.834 81.5753 21.8793C81.625 21.9247 81.6933 21.9513 81.7677 21.9513H86.4351C86.5126 21.9513 86.5809 21.9247 86.6275 21.8793C86.674 21.834 86.7082 21.7754 86.7082 21.706V10.587L86.7113 10.5896Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M124.491 12.3711C124.562 11.9338 124.758 11.2592 125.282 10.6939C125.807 10.1286 126.663 9.67529 128.056 9.67529C129.012 9.67529 129.741 9.87261 130.285 10.3072C130.831 10.7445 131.194 11.4165 131.427 12.3737H124.488L124.491 12.3711ZM134.238 8.28608C133.478 7.5688 132.578 7.02218 131.557 6.65421C130.539 6.28624 129.403 6.09692 128.184 6.09692C125.595 6.09692 123.361 6.95285 121.775 8.39807C120.19 9.84328 119.246 11.8778 119.246 14.2376C119.246 16.5974 120.143 18.6905 121.71 20.1171C123.277 21.5383 125.509 22.3516 128.184 22.3516C130.114 22.3516 131.746 21.9729 133.065 21.229C134.387 20.4851 135.393 19.3651 136.081 17.8799C136.097 17.8453 136.106 17.8106 136.103 17.7733C136.103 17.7386 136.091 17.7013 136.066 17.6693C136.044 17.6373 136.016 17.6106 135.985 17.5893C135.954 17.568 135.914 17.5546 135.874 17.5466L132.013 16.984C131.948 16.9733 131.889 16.984 131.836 17.0107C131.783 17.0373 131.74 17.08 131.715 17.1307C131.532 17.5333 131.101 17.9413 130.511 18.2506C129.921 18.5599 129.174 18.7679 128.354 18.7679C127.132 18.7679 126.21 18.5039 125.571 17.9599C124.931 17.416 124.575 16.5867 124.475 15.4615H135.681C135.973 15.4615 136.234 15.3575 136.423 15.1922C136.612 15.0268 136.73 14.7949 136.73 14.5362V14.4882C136.733 13.2643 136.516 12.0964 136.097 11.0432C135.678 9.98993 135.051 9.05134 134.244 8.28874H134.235L134.238 8.28608Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M117.458 16.5096C117.437 16.4829 117.409 16.4589 117.378 16.4403C117.347 16.4216 117.313 16.4083 117.272 16.4056L112.903 15.7683C112.866 15.7603 112.832 15.7657 112.794 15.771C112.757 15.779 112.726 15.7923 112.698 15.8137C112.67 15.835 112.642 15.8563 112.627 15.883C112.611 15.9096 112.596 15.9416 112.589 15.9736C112.484 16.6109 112.239 17.3069 111.714 17.8481C111.19 18.3841 110.386 18.7654 109.163 18.7654C107.838 18.7654 106.938 18.1868 106.371 17.3415C105.803 16.4936 105.567 15.3764 105.567 14.2938C105.567 13.9098 105.61 12.7552 106.094 11.694C106.578 10.6381 107.503 9.67283 109.26 9.67283C110.188 9.67283 110.911 9.86748 111.435 10.2594C111.959 10.6514 112.292 11.2407 112.428 12.0353C112.431 12.0673 112.45 12.0966 112.465 12.126C112.487 12.1526 112.509 12.1766 112.537 12.1953C112.565 12.2166 112.602 12.2273 112.633 12.2326C112.67 12.2406 112.704 12.2406 112.742 12.2326L117.223 11.582C117.3 11.5713 117.359 11.534 117.4 11.486C117.44 11.4354 117.462 11.3714 117.449 11.3047C117.157 9.72083 116.211 8.41694 114.787 7.51034C113.365 6.60109 111.472 6.0918 109.288 6.0918C106.575 6.0918 104.338 6.9104 102.783 8.36094C101.228 9.81415 100.353 11.8993 100.353 14.4324C100.353 16.7629 101.263 18.7414 102.82 20.1333C104.378 21.5305 106.588 22.3411 109.191 22.3411C111.395 22.3411 113.257 21.8238 114.672 20.8612C116.084 19.8986 117.061 18.4828 117.496 16.6882C117.505 16.6562 117.505 16.6216 117.496 16.5923C117.486 16.5603 117.474 16.5309 117.452 16.5016L117.462 16.5096H117.458Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M100.831 6.41423C100.831 6.37957 100.819 6.34757 100.8 6.31824C100.778 6.28624 100.757 6.26224 100.729 6.23825C100.701 6.21691 100.663 6.20358 100.623 6.19292C100.474 6.15825 100.325 6.13425 100.182 6.12092C100.04 6.10226 99.9001 6.09692 99.7635 6.09692C98.5657 6.09692 97.5012 6.3209 96.623 6.7342C95.7417 7.14217 95.0403 7.73679 94.5624 8.47006V6.74487C94.5624 6.67821 94.5314 6.61688 94.4817 6.57422C94.4321 6.52889 94.3638 6.50489 94.2893 6.50489H89.861C89.7834 6.50489 89.7151 6.53155 89.6686 6.57422C89.6189 6.61955 89.5879 6.67821 89.5879 6.74487V21.7036C89.5879 21.7703 89.6189 21.8316 89.6686 21.8769C89.7182 21.9223 89.7865 21.9489 89.861 21.9489H94.5221C94.5997 21.9489 94.6679 21.9223 94.7145 21.8769C94.7641 21.8316 94.7952 21.773 94.7952 21.7036V14.9629C94.7952 13.4803 95.1458 12.3524 95.841 11.5951C96.5361 10.8325 97.5819 10.4379 98.9629 10.4086C99.0187 10.4086 99.0715 10.3926 99.1149 10.3632C99.1584 10.3366 99.1925 10.2966 99.2111 10.2512L100.819 6.51556C100.831 6.48356 100.84 6.4489 100.834 6.41423H100.831Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M22.6843 0.798828C20.8875 0.798828 19.3824 1.8814 19.0007 3.32662L18.9914 3.36128C18.9883 3.38261 18.9821 3.40394 18.9759 3.42261L15.5964 17.2215C15.5996 11.9499 15.6058 4.15588 15.6058 4.15588C15.6058 2.42536 14.0821 0.916151 12.0711 0.806827C10.1657 0.702836 8.54272 1.81474 8.14551 3.32662L8.13619 3.36128C8.13309 3.38261 8.12688 3.40394 8.12068 3.42261L4.74743 17.1868V2.66001C4.74743 1.63076 3.773 0.798828 2.57824 0.798828C1.38348 0.798828 0.409058 1.63076 0.409058 2.66001V21.9544H4.74743V21.9277C4.74743 21.9277 4.75673 21.9197 4.75673 21.9171C4.75673 21.9171 9.02994 4.57985 9.10441 4.21188C9.22234 3.65992 9.61335 3.28395 10.1875 3.28395C10.805 3.28395 11.2705 3.67592 11.2705 4.21188V21.9357L15.5871 21.9491V21.9224H15.6089C15.6089 21.9224 19.8852 4.57185 19.9628 4.20654C20.0807 3.65459 20.4717 3.27862 21.0458 3.27862C21.6633 3.27862 22.1288 3.67059 22.1288 4.20654V21.9464H26.4672V4.04389C26.4672 2.25204 24.7759 0.798828 22.6874 0.798828H22.6843Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M41.5063 0.798828C40.3891 0.798828 39.4116 1.45744 39.1478 2.3907L34.4712 17.9841C34.4712 17.9841 34.4619 17.9734 34.4588 17.9707C34.4091 18.1547 34.3532 18.3547 34.2943 18.5707L34.0026 19.5439C33.9188 19.6906 33.776 19.7972 33.5774 19.7972C33.3043 19.7972 33.0809 19.6079 33.0809 19.3706V2.66001C33.0778 1.63076 32.1065 0.798828 30.9086 0.798828C29.7108 0.798828 28.7394 1.63076 28.7394 2.66001V19.4693C28.7394 20.9145 30.0118 22.1784 31.6906 22.2744C33.2609 22.3597 34.6046 21.4638 34.9708 20.2292L39.5947 4.90249V28.1165C39.5947 29.5191 38.4434 30.7777 36.8297 30.9856C34.8187 31.2416 33.0747 29.8977 33.0747 28.2205V25.0981C33.0747 24.0689 32.1065 23.237 30.9055 23.237C29.7045 23.237 28.7363 24.0689 28.7363 25.0981V25.4768C28.7363 29.0631 32.1561 31.9962 36.3331 31.9962C40.5101 31.9962 43.9175 29.0711 43.9299 25.4928V2.88132C43.9392 1.72942 42.8469 0.798828 41.5063 0.798828Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M183.577 19.645C181.56 19.645 180.055 18.7651 179.366 18.0505L180.288 17.2906C180.89 17.8665 181.985 18.5651 183.58 18.5651C185.492 18.5651 186.463 17.7145 186.463 16.6213C186.463 13.9468 179.72 15.3467 179.72 11.579C179.72 10.0298 181.259 8.70728 183.754 8.70728C185.507 8.70728 186.817 9.43521 187.434 10.0138L186.531 10.7738C186.035 10.3498 185.079 9.78718 183.754 9.78718C182.001 9.78718 181.048 10.6084 181.048 11.579C181.048 14.2535 187.807 12.8403 187.807 16.6213C187.807 18.2931 186.215 19.645 183.577 19.645Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M195.521 9.9393V14.4349H198.829C200.44 14.4349 201.572 13.4777 201.572 12.1871C201.572 10.8966 200.44 9.9393 198.829 9.9393H195.521ZM195.521 19.4932H194.193V8.86206H198.829C201.166 8.86206 202.901 10.3366 202.901 12.1871C202.901 14.0376 201.166 15.5122 198.829 15.5122H195.521V19.4905V19.4932Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M217.691 19.4932H209.017V8.85938H217.514V9.93928H210.345V13.4163H216.096V14.4962H210.345V18.4132H217.691V19.4932Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M229.244 19.645C225.688 19.645 222.855 17.2159 222.855 14.1762C222.855 11.1364 225.685 8.70728 229.244 8.70728C231.705 8.70728 233.493 9.86184 234.306 10.8324L233.35 11.4857C232.661 10.7098 231.314 9.78452 229.244 9.78452C226.43 9.78452 224.183 11.699 224.183 14.1735C224.183 16.6479 226.43 18.5625 229.244 18.5625C231.333 18.5625 232.729 17.5892 233.437 16.7999L234.393 17.4372C233.542 18.4398 231.755 19.6397 229.244 19.6397V19.645Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M241.776 8.85938H240.448V19.4905H241.776V8.85938Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M253.276 10.2273L250.815 15.4668H255.753L253.31 10.2273H253.276ZM248.925 19.4932H247.563L252.587 8.86206H254.055L259.079 19.4932H257.646L256.249 16.5308H250.337L248.922 19.4932H248.925Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M272.572 19.4932H264.873V8.85938H266.201V18.4132H272.572V19.4932Z",
                                fill: a
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_87887",
                                children: (0, l.jsx)("rect", {
                                    width: "272.8",
                                    height: "32",
                                    fill: "white",
                                    transform: "translate(0.0996094)"
                                })
                            })
                        })]
                    }) : s === i.Yn.Unique ? (0, l.jsxs)("svg", {
                        width: "273",
                        height: "32",
                        viewBox: "0 0 273 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-label": "my Barcel\xf3 unique",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_53659)",
                            children: [(0, l.jsx)("path", {
                                d: "M157.374 4.8598C157.412 4.88113 157.457 4.8918 157.501 4.8918H160.48C160.512 4.8918 160.544 4.88913 160.572 4.87847C160.601 4.8678 160.63 4.85447 160.652 4.8358L165.284 1.17478C165.322 1.14278 165.347 1.10545 165.357 1.06279C165.37 1.02012 165.367 0.97746 165.344 0.934797C165.322 0.892134 165.293 0.857471 165.252 0.833473C165.211 0.809475 165.16 0.796143 165.112 0.796143H160.388C160.347 0.796143 160.305 0.806808 160.267 0.820141C160.229 0.833473 160.2 0.862803 160.175 0.889468L157.288 4.5505C157.263 4.58516 157.247 4.62249 157.247 4.66249C157.247 4.70248 157.256 4.73981 157.275 4.77714C157.298 4.81181 157.329 4.83847 157.368 4.8598H157.371H157.374Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M162.687 17.1384C162.127 18.061 161.138 18.7703 159.419 18.7703C157.699 18.7703 156.735 18.061 156.179 17.1384C155.626 16.2158 155.495 15.0826 155.495 14.2373C155.495 13.3921 155.623 12.2455 156.179 11.3202C156.732 10.3923 157.714 9.6777 159.419 9.6777C161.123 9.6777 162.127 10.3923 162.687 11.3202C163.246 12.2481 163.373 13.3894 163.373 14.2373C163.373 15.0852 163.246 16.2158 162.687 17.1384ZM166.184 8.30981C164.566 6.89126 162.248 6.09399 159.425 6.09399C156.602 6.09399 154.3 6.89393 152.688 8.30981C151.079 9.72836 150.17 11.7629 150.17 14.2373C150.17 16.7118 151.079 18.7303 152.688 20.1435C154.297 21.554 156.614 22.3513 159.425 22.3513C162.235 22.3513 164.566 21.554 166.184 20.1435C167.802 18.7329 168.711 16.7011 168.711 14.2373C168.711 11.7735 167.802 9.72836 166.184 8.30981Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M147.592 0.798828H142.492C142.413 0.798828 142.343 0.825492 142.295 0.868155C142.244 0.913485 142.213 0.972147 142.213 1.03881V21.6984C142.213 21.7651 142.244 21.8264 142.295 21.8717C142.346 21.9171 142.416 21.9437 142.492 21.9437H147.592C147.671 21.9437 147.741 21.9171 147.789 21.8717C147.837 21.8264 147.872 21.7677 147.872 21.6984V1.04147C147.872 0.974813 147.84 0.913485 147.789 0.870822C147.738 0.825493 147.668 0.801494 147.592 0.801494V0.798828Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M63.1932 17.3174C62.5923 17.7307 61.6862 17.9307 60.4717 17.9307H55.1084V12.7445H60.5703C61.753 12.7445 62.6304 12.9658 63.2122 13.4164C63.794 13.8671 64.0833 14.5417 64.0833 15.4536C64.0833 16.2855 63.7845 16.9068 63.1868 17.3174H63.19H63.1932ZM55.1084 4.81716H59.766C60.9073 4.81716 61.7434 4.98781 62.2966 5.33712C62.8498 5.68642 63.1169 6.21971 63.1169 6.94765C63.1169 7.86224 62.7163 8.41686 62.1504 8.74216C61.5845 9.06747 60.8469 9.16613 60.1729 9.16613H55.1116V4.81716H55.1084ZM65.9527 10.4194C66.9033 9.93407 67.6123 9.34211 68.0828 8.63551C68.5533 7.9289 68.7854 7.10763 68.7854 6.16105C68.7854 4.35586 68.1368 3.01464 66.8175 2.12672C65.5013 1.23879 63.5174 0.798828 60.8469 0.798828H49.5575C49.478 0.798828 49.4081 0.825492 49.3604 0.868155C49.3095 0.913485 49.2777 0.972147 49.2777 1.03881V21.6984C49.2777 21.7651 49.3095 21.8264 49.3604 21.8717C49.4112 21.9171 49.4812 21.9437 49.5575 21.9437H61.1839C63.2027 21.9437 65.39 21.5358 67.0718 20.5545C68.7536 19.5706 69.9331 18.0134 69.9331 15.7122C69.9331 14.4164 69.5802 13.2991 68.9062 12.4059C68.2322 11.5126 67.2403 10.838 65.9527 10.4194Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M83.1618 15.9145C83.1618 16.9918 82.8693 17.7944 82.278 18.3223C81.6835 18.8529 80.7901 19.1169 79.582 19.1169C78.6918 19.1169 78.0306 18.9809 77.5982 18.7036C77.1595 18.4263 76.9433 18.0103 76.9433 17.4477C76.9433 16.8851 77.1309 16.4771 77.5473 16.1625C77.9638 15.8478 78.6155 15.6319 79.5312 15.4879C79.7124 15.4612 79.8999 15.4319 80.0843 15.4106C80.2719 15.3866 80.4595 15.3652 80.6439 15.3412C81.1144 15.2852 81.5786 15.2292 82.0078 15.1546C82.4338 15.0772 82.8312 14.9786 83.1618 14.8319V15.9145ZM88.4966 10.5896C88.4966 9.09908 87.8321 7.97384 86.5127 7.22457C85.1933 6.47263 83.2127 6.09399 80.5898 6.09399C78.2372 6.09399 76.3011 6.50729 74.8736 7.27256C73.4493 8.04316 72.5401 9.1684 72.238 10.6003C72.2285 10.6323 72.2348 10.6669 72.238 10.6963C72.2476 10.7283 72.2635 10.7576 72.2825 10.7816C72.3048 10.8083 72.3334 10.8296 72.362 10.8483C72.3938 10.8643 72.4288 10.8749 72.4669 10.8829L77.1499 11.5495C77.1881 11.5575 77.2294 11.5522 77.2644 11.5469C77.3025 11.5389 77.3343 11.5255 77.3693 11.5042C77.3979 11.4829 77.4265 11.4589 77.4424 11.4269C77.4583 11.4002 77.471 11.3656 77.4742 11.3336C77.5537 10.6509 77.8176 10.147 78.2944 9.81902C78.7713 9.49104 79.4485 9.33106 80.3514 9.33106C81.2543 9.33106 81.9219 9.40305 82.4084 9.66703C82.8916 9.93101 83.1618 10.3763 83.1618 11.1256C83.1936 11.6775 82.8312 12.0055 82.1477 12.2241C81.4641 12.4428 80.4658 12.5575 79.2196 12.6774C77.5314 12.8428 75.6366 13.0267 74.1583 13.696C72.6831 14.3653 71.6181 15.5199 71.599 17.6237C71.599 19.0822 72.1935 20.2635 73.2649 21.0821C74.3363 21.9007 75.8878 22.354 77.7985 22.354C78.9112 22.354 79.9063 22.2286 80.7997 21.9727C81.693 21.7167 82.4783 21.3327 83.165 20.8154V20.9434C83.165 21.0287 83.1618 21.1301 83.1555 21.2554V21.706C83.1555 21.7727 83.1873 21.834 83.2381 21.8793C83.289 21.9247 83.3589 21.9513 83.4352 21.9513H88.2168C88.2963 21.9513 88.3662 21.9247 88.4139 21.8793C88.4648 21.834 88.4966 21.7754 88.4966 21.706V10.587V10.5896Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M127.188 12.3711C127.261 11.9338 127.461 11.2592 127.999 10.6939C128.536 10.1286 129.413 9.67529 130.841 9.67529C131.82 9.67529 132.564 9.87261 133.123 10.3072C133.683 10.7445 134.055 11.4165 134.293 12.3737H127.188V12.3711ZM137.171 8.28608C136.392 7.5688 135.47 7.02218 134.424 6.65421C133.381 6.28624 132.221 6.09692 130.971 6.09692C128.32 6.09692 126.034 6.95285 124.409 8.39807C122.785 9.84328 121.821 11.8778 121.821 14.2376C121.821 16.5974 122.74 18.6905 124.346 20.1171C125.951 21.5383 128.237 22.3516 130.974 22.3516C132.952 22.3516 134.621 21.9729 135.975 21.229C137.326 20.4797 138.356 19.3651 139.065 17.8799C139.081 17.8453 139.091 17.8106 139.088 17.7733C139.088 17.7386 139.075 17.7013 139.049 17.6693C139.027 17.6373 138.999 17.6106 138.967 17.5893C138.935 17.568 138.894 17.5546 138.852 17.5466L134.897 16.984C134.831 16.9733 134.77 16.984 134.716 17.0107C134.662 17.0373 134.618 17.08 134.592 17.1307C134.405 17.5333 133.963 17.9413 133.359 18.2506C132.755 18.5599 131.988 18.7679 131.149 18.7679C129.897 18.7679 128.952 18.5039 128.301 17.9599C127.649 17.416 127.28 16.5867 127.178 15.4615H138.655C138.954 15.4615 139.221 15.3575 139.415 15.1922C139.609 15.0268 139.73 14.7949 139.73 14.5362V14.4882C139.733 13.2643 139.51 12.0964 139.081 11.0432C138.652 9.98993 138.01 9.05134 137.183 8.28874H137.174L137.171 8.28608Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M119.986 16.5096C119.964 16.4829 119.936 16.4589 119.904 16.4403C119.872 16.4243 119.837 16.4083 119.796 16.4056L115.319 15.7683C115.281 15.7603 115.246 15.7657 115.208 15.771C115.17 15.779 115.138 15.7923 115.11 15.8137C115.081 15.835 115.052 15.8563 115.036 15.883C115.021 15.9096 115.005 15.9416 114.998 15.9736C114.89 16.6109 114.639 17.3069 114.102 17.8481C113.564 18.3841 112.741 18.7654 111.488 18.7654C110.131 18.7654 109.209 18.1868 108.627 17.3415C108.045 16.4936 107.804 15.3764 107.804 14.2938C107.804 13.9098 107.848 12.7552 108.344 11.694C108.84 10.6381 109.788 9.67283 111.587 9.67283C112.538 9.67283 113.278 9.86748 113.816 10.2594C114.353 10.6514 114.693 11.2407 114.833 12.0353C114.836 12.0673 114.855 12.0966 114.871 12.126C114.893 12.1526 114.916 12.1766 114.944 12.1953C114.973 12.2166 115.011 12.2273 115.043 12.2326C115.081 12.2406 115.116 12.2406 115.154 12.2326L119.745 11.582C119.824 11.5713 119.885 11.534 119.926 11.486C119.967 11.4354 119.99 11.3714 119.977 11.3047C119.678 9.72083 118.708 8.41694 117.252 7.51034C115.796 6.60109 113.857 6.0918 111.619 6.0918C108.84 6.0918 106.548 6.9104 104.955 8.36094C103.362 9.81415 102.466 11.8993 102.466 14.4324C102.466 16.7629 103.397 18.7414 104.993 20.1333C106.589 21.5305 108.853 22.3411 111.52 22.3411C113.777 22.3411 115.685 21.8238 117.132 20.8612C118.578 19.8986 119.58 18.4828 120.021 16.6882C120.031 16.6562 120.031 16.6216 120.021 16.5923C120.012 16.5603 119.999 16.5309 119.977 16.5016L119.986 16.5096Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M102.956 6.41423C102.956 6.37957 102.943 6.34757 102.924 6.31824C102.902 6.28624 102.88 6.26224 102.851 6.23825C102.822 6.21691 102.784 6.20358 102.743 6.19292C102.59 6.15825 102.438 6.13425 102.291 6.12092C102.145 6.10492 102.002 6.09692 101.862 6.09692C100.635 6.09692 99.5477 6.3209 98.6448 6.7342C97.7419 7.14217 97.0234 7.73679 96.537 8.47006V6.74487C96.537 6.67821 96.5052 6.61688 96.4543 6.57422C96.4034 6.52889 96.3335 6.50489 96.2572 6.50489H91.7204C91.641 6.50489 91.571 6.53155 91.5233 6.57422C91.4725 6.61955 91.4407 6.67821 91.4407 6.74487V21.7036C91.4407 21.7703 91.4725 21.8316 91.5233 21.8769C91.5742 21.9223 91.6441 21.9489 91.7204 21.9489H96.4925C96.5719 21.9489 96.6419 21.9223 96.6896 21.8769C96.7404 21.8316 96.7722 21.773 96.7722 21.7036V14.9629C96.7722 13.4803 97.1315 12.3524 97.8436 11.5951C98.5558 10.8325 99.6272 10.4379 101.042 10.4086C101.099 10.4086 101.153 10.3926 101.198 10.3632C101.242 10.3339 101.277 10.2966 101.296 10.2512L102.943 6.51556C102.956 6.48356 102.965 6.4489 102.959 6.41423H102.956Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M22.9186 0.798828C21.0778 0.798828 19.5359 1.8814 19.148 3.32662L19.1385 3.36128C19.1353 3.38261 19.1289 3.40394 19.1226 3.42261L15.6604 17.2215C15.6636 11.9499 15.6699 4.15588 15.6699 4.15588C15.6699 2.42536 14.1121 0.916151 12.052 0.806827C10.0999 0.702836 8.43722 1.81474 8.03346 3.32662L8.02392 3.36128C8.02074 3.38261 8.01438 3.40394 8.00802 3.42261L4.55539 17.1868V2.66001C4.55539 1.63076 3.55711 0.798828 2.33311 0.798828C1.10911 0.798828 0.11084 1.63076 0.11084 2.66001V21.9544H4.55221V21.9277C4.55221 21.9277 4.56175 21.9197 4.56175 21.9171C4.56175 21.9171 8.93636 4.57985 9.01584 4.21188C9.13665 3.65992 9.53723 3.28395 10.1254 3.28395C10.758 3.28395 11.2349 3.67592 11.2349 4.21188V21.9357L15.6572 21.9491V21.9224H15.6795C15.6795 21.9224 20.0604 4.57185 20.1367 4.20654C20.2576 3.65459 20.6581 3.27862 21.2463 3.27862C21.879 3.27862 22.3558 3.67059 22.3558 4.20654V21.9464H26.7972V4.04389C26.7972 2.25204 25.0645 0.798828 22.9249 0.798828H22.9186Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M42.1981 0.798828C41.0536 0.798828 40.0521 1.45744 39.7819 2.3907L34.994 17.9841C34.994 17.9841 34.9844 17.9734 34.9813 17.9707C34.9304 18.1547 34.8732 18.3547 34.8128 18.5707L34.5139 19.5439C34.4281 19.6906 34.2818 19.7972 34.0784 19.7972C33.7986 19.7972 33.5697 19.6079 33.5697 19.3706V2.66001C33.5665 1.63076 32.5714 0.798828 31.3442 0.798828C30.1171 0.798828 29.122 1.63076 29.122 2.66001V19.4693C29.122 20.9145 30.4254 22.1784 32.1454 22.2744C33.7541 22.3597 35.1307 21.4638 35.5027 20.2292L40.2397 4.90249V28.1165C40.2397 29.5191 39.0602 30.7777 37.407 30.9856C35.3469 31.2416 33.5602 29.8977 33.5602 28.2205V25.0981C33.5602 24.0689 32.5682 23.237 31.3379 23.237C30.1075 23.237 29.1156 24.0689 29.1156 25.0981V25.4768C29.1156 29.0631 32.6191 31.9962 36.8952 31.9962C41.1712 31.9962 44.662 29.0711 44.6747 25.4928V2.88132C44.6842 1.72942 43.5652 0.798828 42.1917 0.798828H42.1981Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M188.779 19.6451C185.825 19.6451 183.651 17.8213 183.651 15.3308V8.85938H185.011V15.3308C185.011 17.2133 186.623 18.5652 188.782 18.5652C190.941 18.5652 192.568 17.184 192.568 15.3308V8.85938H193.929V15.3308C193.929 17.8213 191.755 19.6451 188.782 19.6451H188.779Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M202.548 19.4932H201.191V8.85938H202.367L210.143 17.4427H210.198V8.85938H211.558V19.4932H210.379L202.586 10.9099H202.548V19.4932Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M220.371 8.85938H219.01V19.4905H220.371V8.85938Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M233.51 18.5651C236.41 18.5651 238.692 16.6373 238.692 14.1761C238.692 11.715 236.41 9.78717 233.51 9.78717C230.611 9.78717 228.328 11.7017 228.328 14.1761C228.328 16.6506 230.63 18.5651 233.51 18.5651ZM239.71 20.6769C240.126 20.6769 240.454 20.6316 240.581 20.6023V21.6342C240.454 21.6635 240.126 21.7088 239.675 21.7088C237.246 21.7088 235.596 20.4636 235.017 19.4904C234.547 19.597 234.038 19.6423 233.514 19.6423C229.87 19.6423 226.971 17.2132 226.971 14.1735C226.971 11.1337 229.87 8.70459 233.514 8.70459C237.157 8.70459 240.056 11.1337 240.056 14.1735C240.056 16.3919 238.534 18.2745 236.34 19.1091C236.737 19.7917 237.917 20.6743 239.71 20.6743V20.6769Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M251.597 19.6451C248.643 19.6451 246.469 17.8213 246.469 15.3308V8.85938H247.829V15.3308C247.829 17.2133 249.441 18.5652 251.6 18.5652C253.759 18.5652 255.386 17.184 255.386 15.3308V8.85938H256.747V15.3308C256.747 17.8213 254.572 19.6451 251.6 19.6451H251.597Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M272.888 19.4932H264.009V8.85938H272.707V9.93928H265.366V13.4163H271.257V14.4962H265.366V18.4132H272.888V19.4932Z",
                                fill: a
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_53659",
                                children: (0, l.jsx)("rect", {
                                    width: "272.8",
                                    height: "32",
                                    fill: a,
                                    transform: "translate(0.0996094)"
                                })
                            })
                        })]
                    }) : (0, l.jsxs)("svg", {
                        width: "274",
                        height: "32",
                        viewBox: "0 0 274 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-label": "my Barcel\xf3 benefits",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_86_1573)",
                            children: [(0, l.jsx)("path", {
                                d: "M135.372 4.16736C135.404 4.18861 135.444 4.19923 135.483 4.19923H138.042C138.07 4.19923 138.095 4.19537 138.12 4.18475C138.145 4.17412 138.17 4.15964 138.188 4.14225L140.178 2.26574L142.169 0.389231C142.201 0.35736 142.222 0.317763 142.232 0.275269C142.243 0.232774 142.239 0.186417 142.222 0.143923C142.204 0.101428 142.179 0.0656944 142.144 0.0405841C142.108 0.0154738 142.065 0.00195312 142.023 0.00195312H137.964C137.928 0.00195312 137.892 0.0125765 137.86 0.0270632C137.828 0.0415499 137.803 0.0695577 137.782 0.0985311L136.541 1.97504L135.301 3.85155C135.28 3.88729 135.265 3.92592 135.265 3.96551C135.265 4.00511 135.272 4.04374 135.29 4.08237C135.308 4.11811 135.337 4.14612 135.369 4.16736H135.372Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M142.945 7.70511C141.555 6.25161 139.561 5.43359 137.137 5.43359C134.713 5.43359 132.732 6.25451 131.346 7.70511C129.963 9.15861 129.181 11.2457 129.181 13.7837C129.181 16.3218 129.963 18.3905 131.346 19.8411C132.729 21.2878 134.72 22.1059 137.137 22.1059C139.554 22.1059 141.555 21.2878 142.945 19.8411C144.335 18.3944 145.117 16.3112 145.117 13.7837C145.117 11.2563 144.335 9.15861 142.945 7.70511ZM139.941 16.7593C139.462 17.7048 138.612 18.434 137.133 18.434C135.654 18.434 134.826 17.7048 134.35 16.7593C133.874 15.8138 133.763 14.651 133.763 13.7837C133.763 12.9165 133.874 11.7392 134.35 10.7908C134.826 9.83852 135.669 9.10549 137.133 9.10549C138.597 9.10549 139.462 9.83755 139.941 10.7908C140.421 11.743 140.532 12.9126 140.532 13.7837C140.532 14.6549 140.421 15.8138 139.941 16.7593Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M126.967 0.00117493H122.584C122.517 0.00117493 122.456 0.0291827 122.413 0.0726428C122.371 0.119 122.342 0.178879 122.342 0.246483V21.4367C122.342 21.5043 122.37 21.568 122.413 21.6144C122.456 21.6607 122.517 21.6887 122.584 21.6887H126.967C127.035 21.6887 127.094 21.6607 127.138 21.6144C127.18 21.568 127.209 21.5081 127.209 21.4367V0.250346C127.209 0.182742 127.181 0.119 127.138 0.076506C127.095 0.0301486 127.035 0.00503814 126.967 0.00503814V0.00117493Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M56.7937 9.86912C57.6107 9.37174 58.2192 8.7633 58.6248 8.038C59.0295 7.3127 59.2294 6.47054 59.2294 5.49993C59.2294 3.64756 58.6712 2.27229 57.5373 1.36253C56.4064 0.452764 54.7008 0.000778198 52.4042 0.000778198H42.6991C42.6315 0.000778198 42.5706 0.028786 42.5281 0.0722461C42.4856 0.118604 42.4567 0.178482 42.4567 0.246086V21.4363C42.4567 21.5039 42.4847 21.5676 42.5281 21.614C42.5706 21.6603 42.6315 21.6883 42.6991 21.6883H52.692C54.4265 21.6883 56.3069 21.2692 57.7537 20.2628C59.2004 19.2536 60.2135 17.6572 60.2135 15.2968C60.2135 13.9669 59.9112 12.8225 59.3317 11.906C58.7523 10.9885 57.8995 10.2989 56.7937 9.86912ZM47.4729 6.34982V4.1208H51.4761C52.4573 4.1208 53.1749 4.29464 53.652 4.65391C54.1281 5.01318 54.356 5.56077 54.356 6.30732C54.356 7.24606 54.0113 7.81491 53.5245 8.14907C53.0378 8.48322 52.4052 8.5827 51.8257 8.5827H47.4749V6.34982H47.4729ZM54.4227 16.9435C53.907 17.3665 53.1285 17.5731 52.0836 17.5731H47.4729V12.2556H52.1686C53.1855 12.2556 53.9388 12.4835 54.4401 12.9451C54.9413 13.4077 55.1905 14.1002 55.1905 15.0351C55.1905 15.8879 54.9345 16.5243 54.4188 16.9473L54.4227 16.9435Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M76.1704 10.0442C76.1704 8.5154 75.5977 7.36033 74.4639 6.59253C73.3301 5.82087 71.6274 5.43359 69.3733 5.43359C67.3509 5.43359 65.6869 5.8566 64.4603 6.64178C63.2377 7.43083 62.4554 8.5859 62.1956 10.0539C62.1888 10.0858 62.1917 10.1215 62.1956 10.1534C62.2033 10.1852 62.2168 10.2171 62.2352 10.2422C62.2526 10.2702 62.2777 10.2924 62.3028 10.3098C62.3308 10.3272 62.3598 10.3378 62.3916 10.3456L64.4034 10.6865L66.4151 11.0274C66.4469 11.0351 66.4827 11.0313 66.5145 11.0235C66.5464 11.0168 66.5754 11.0023 66.6034 10.981C66.6285 10.9598 66.6536 10.9347 66.6671 10.9028C66.6816 10.8748 66.6923 10.8391 66.6952 10.8072C66.7628 10.107 66.9907 9.59128 67.3992 9.25325C67.8077 8.91523 68.3911 8.75201 69.1656 8.75201C69.9402 8.75201 70.5167 8.82638 70.932 9.0968C71.3473 9.36722 71.5791 9.825 71.5791 10.5938C71.6071 11.1587 71.2952 11.4968 70.708 11.7208C70.1208 11.9449 69.2612 12.0627 68.1911 12.1863C66.7405 12.3573 65.1122 12.5456 63.8403 13.2313C62.5713 13.917 61.6576 15.1011 61.6403 17.2586C61.6403 18.7546 62.1521 19.9676 63.0725 20.8059C63.9929 21.6452 65.3266 22.1107 66.9685 22.1107C67.9246 22.1107 68.7812 21.9832 69.549 21.7195C70.3168 21.4569 70.9919 21.0618 71.582 20.5326V20.6639C71.582 20.7528 71.5781 20.8561 71.5752 20.9836V21.4453C71.5752 21.5129 71.6032 21.5766 71.6467 21.623C71.6892 21.6693 71.75 21.6973 71.8177 21.6973H75.927C75.9946 21.6973 76.0555 21.6693 76.098 21.623C76.1405 21.5766 76.1695 21.5167 76.1695 21.4453V10.0413L76.1704 10.0442ZM71.5839 14.9494V15.5038C71.5839 16.6096 71.3319 17.4305 70.8229 17.9742C70.311 18.518 69.5432 18.7884 68.505 18.7884C67.7411 18.7884 67.1722 18.6493 66.7985 18.3654C66.4218 18.0814 66.2364 17.6546 66.2364 17.079C66.2364 16.5034 66.3958 16.0833 66.755 15.7607C67.1143 15.4371 67.6725 15.2169 68.4616 15.0673C68.618 15.0392 68.7783 15.0103 68.9377 14.989C69.098 14.9639 69.2612 14.9427 69.4177 14.9176C69.8233 14.8606 70.2212 14.8036 70.5911 14.7254C70.9571 14.6471 71.299 14.5438 71.583 14.3951V14.9494H71.5839Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M118.008 7.68019C117.339 6.94426 116.546 6.38314 115.647 6.00552C114.751 5.62887 113.752 5.43282 112.678 5.43282C110.4 5.43282 108.434 6.31071 107.037 7.79318C105.64 9.27565 104.812 11.3627 104.812 13.7829C104.812 16.2032 105.601 18.3511 106.98 19.8113C108.359 21.2687 110.326 22.1041 112.678 22.1041C114.378 22.1041 115.813 21.7168 116.976 20.9519C118.139 20.188 119.024 19.0397 119.632 17.5176C119.647 17.4819 119.653 17.4462 119.649 17.4075C119.649 17.3718 119.639 17.3332 119.618 17.3013C119.6 17.2694 119.575 17.2404 119.546 17.2192C119.517 17.1979 119.482 17.1835 119.447 17.1767L117.748 16.8889L116.049 16.6011C115.992 16.5905 115.939 16.6011 115.893 16.6291C115.846 16.6571 115.808 16.7006 115.786 16.7537C115.626 17.1661 115.246 17.5852 114.727 17.902C114.208 18.2188 113.551 18.4312 112.829 18.4312C111.752 18.4312 110.941 18.1608 110.38 17.6026C109.818 17.0444 109.502 16.1945 109.416 15.0394H119.28C119.536 15.0394 119.767 14.9332 119.934 14.7622C120.101 14.5913 120.205 14.3537 120.205 14.0901V14.0398C120.209 12.7853 120.016 11.5868 119.647 10.5061C119.277 9.42535 118.726 8.46247 118.014 7.68019L118.008 7.67632V7.68019ZM112.48 11.8707H109.427C109.49 11.4226 109.661 10.7292 110.123 10.1497C110.585 9.57022 111.339 9.10471 112.565 9.10471C113.408 9.10471 114.048 9.30752 114.528 9.75178C115.008 10.1999 115.328 10.8895 115.534 11.8707H112.48Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M153.821 21.7098V5.82851H160.332C163.305 5.82851 165.232 7.75621 165.232 10.0258C165.232 11.6145 164.28 12.7483 163.213 13.2022C164.37 13.633 166.026 14.9716 166.026 17.104C166.026 19.5774 163.894 21.7098 160.718 21.7098H153.821ZM156.657 12.2258H160.264C161.534 12.2258 162.375 11.3866 162.375 10.2296C162.375 9.07257 161.535 8.21013 160.264 8.21013H156.657V12.2258ZM156.657 19.3272H160.651C162.125 19.3272 163.168 18.261 163.168 16.9002C163.168 15.5394 162.125 14.4954 160.651 14.4954H156.657V19.3272Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M170.663 21.7094V5.82812H182.074V8.39131H173.498V12.2486H180.26V14.7906H173.498V19.1462H182.301V21.7094H170.663Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M187.033 21.7094V5.82812H189.575L197.901 16.8998H197.97V5.82812H200.805V21.7094H198.242L189.937 10.6377H189.847V21.7094H187.033Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M205.633 21.7098V5.82851H217.045V8.39169H208.469V12.249H215.23V14.791H208.469V19.1466H217.272V21.7098H205.633Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M222.005 21.7098V5.82851H233.303V8.52787H224.841V12.7252H231.488V15.3801H224.841V21.7098H222.005Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M237.36 21.7098V5.82851H240.195V21.7098H237.36Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M249.238 21.7098V8.43709H244.541V5.82851H256.771V8.43709H252.074V21.7098H249.239H249.238Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M260.828 19.4865L262.688 17.695C263.436 18.4879 264.707 19.4189 266.591 19.4189C268.474 19.4189 269.54 18.3758 269.54 17.241C269.54 13.997 261.349 15.8571 261.349 10.0721C261.349 7.57551 263.505 5.55703 266.862 5.55703C269.359 5.55703 271.172 6.73721 272.012 7.66726L270.176 9.48293C269.563 8.91601 268.428 8.09896 266.954 8.09896C265.162 8.09896 264.254 9.02804 264.254 10.0721C264.254 13.3171 272.422 11.456 272.422 17.241C272.422 19.783 270.244 21.983 266.682 21.983C263.756 21.983 261.758 20.6435 260.829 19.4865H260.828Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M103.239 16.1155C103.221 16.0875 103.196 16.0624 103.167 16.044C103.139 16.0266 103.11 16.0121 103.074 16.0083L101.151 15.6809L99.2286 15.3535C99.1967 15.3467 99.1648 15.3496 99.133 15.3573C99.1011 15.3651 99.0721 15.3786 99.048 15.3998C99.0229 15.4211 98.9978 15.4423 98.9842 15.4713C98.9697 15.4993 98.9562 15.5321 98.9524 15.564C98.8597 16.2178 98.6433 16.9325 98.1807 17.4869C97.7181 18.0383 97.0112 18.4285 95.9343 18.4285C94.7686 18.4285 93.9757 17.8346 93.4745 16.9673C92.9732 16.0962 92.7675 14.9517 92.7675 13.843C92.7675 13.448 92.8061 12.2649 93.233 11.1765C93.6599 10.0919 94.4731 9.1039 96.0203 9.1039C96.8373 9.1039 97.4738 9.30286 97.9364 9.70462C98.398 10.1064 98.6897 10.711 98.8104 11.5251C98.8143 11.557 98.8278 11.5889 98.8423 11.6178C98.8597 11.6458 98.8819 11.6709 98.906 11.6893C98.9311 11.7105 98.963 11.7212 98.991 11.7289C99.0229 11.7357 99.0547 11.7357 99.0866 11.7289L101.06 11.3947L103.033 11.0606C103.1 11.05 103.154 11.0104 103.189 10.9611C103.225 10.908 103.242 10.8442 103.232 10.7766C102.976 9.15219 102.14 7.81555 100.889 6.88358C99.6371 5.95256 97.9702 5.43008 96.0473 5.43008C93.6589 5.43008 91.6887 6.26934 90.3202 7.75857C88.9517 9.2478 88.1801 11.388 88.1801 13.9869C88.1801 16.3753 88.9797 18.4053 90.3521 19.8347C91.7245 21.2669 93.6686 22.0994 95.9614 22.0994C97.9026 22.0994 99.5415 21.5702 100.785 20.5812C102.029 19.5932 102.89 18.1426 103.27 16.3009C103.277 16.269 103.277 16.2333 103.27 16.2014C103.263 16.1696 103.253 16.1377 103.231 16.1087L103.239 16.1164V16.1155Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M88.5984 5.76021C88.5984 5.72448 88.5878 5.69261 88.5704 5.66074C88.553 5.62887 88.5308 5.60376 88.5066 5.57865C88.4815 5.5574 88.4497 5.54291 88.4139 5.53229C88.2826 5.49656 88.1512 5.47145 88.0267 5.45793C87.9021 5.44054 87.7775 5.43282 87.6568 5.43282C86.6012 5.43282 85.6663 5.66364 84.8908 6.08665C84.1162 6.5058 83.4971 7.11424 83.078 7.86755V6.09727C83.078 6.02967 83.05 5.96593 83.0065 5.92343C82.964 5.87707 82.9032 5.85196 82.8356 5.85196H78.9358C78.8682 5.85196 78.8083 5.87997 78.7648 5.92343C78.7223 5.96979 78.6934 6.02967 78.6934 6.09727V21.4397C78.6934 21.5073 78.7214 21.571 78.7648 21.6174C78.8073 21.6637 78.8682 21.6917 78.9358 21.6917H83.0384C83.106 21.6917 83.1659 21.6637 83.2093 21.6174C83.2518 21.571 83.2808 21.5111 83.2808 21.4397V14.5256C83.2808 13.0045 83.5899 11.8485 84.2012 11.0701C84.8125 10.2878 85.7329 9.88313 86.9488 9.85416C86.9981 9.85416 87.0445 9.83677 87.0841 9.8078C87.1237 9.77979 87.1517 9.7402 87.169 9.69384L87.877 7.77773L88.5839 5.86162C88.5945 5.82975 88.6013 5.79402 88.5984 5.75828V5.76021Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M19.8069 0.00106025C18.2249 0.00106025 16.8989 1.10978 16.5647 2.59225L16.557 2.62798C16.5531 2.64923 16.5502 2.67048 16.5425 2.69172L13.5669 16.8433C13.5708 11.4359 13.5737 3.44117 13.5737 3.44117C13.5737 1.66703 12.2332 0.116954 10.4629 0.00685506C8.78537 -0.0993808 7.35602 1.04121 7.00737 2.59128L7.00061 2.62702C6.99675 2.64826 6.99385 2.66951 6.98612 2.69076L4.01828 16.8066V1.91041C4.01828 0.85481 3.16163 0.00106025 2.10893 0.00106025C1.05623 0.00106025 0.199585 0.853844 0.199585 1.91041V21.7002H4.01731V21.6722C4.01731 21.6722 4.02407 21.6645 4.02407 21.6616C4.02407 21.6616 7.78482 3.8806 7.85243 3.50395C7.95577 2.93896 8.30055 2.55169 8.80469 2.55169C9.34842 2.55169 9.75695 2.95345 9.75695 3.50395V21.6828L13.5573 21.6973V21.6693H13.5747C13.5747 21.6693 17.3393 3.87384 17.4069 3.50105C17.5102 2.93607 17.855 2.54879 18.3591 2.54879C18.9029 2.54879 19.3114 2.95055 19.3114 3.50105V21.6944H23.1291V3.32914C23.1291 1.49126 21.6399 0.00202624 19.802 0.00202624L19.8069 0.00106025Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M36.3759 0.000778198C35.3908 0.000778198 34.5312 0.675859 34.2994 1.63198L30.1833 17.6253C30.1833 17.6253 30.1765 17.6147 30.1727 17.6108C30.1302 17.7991 30.0799 18.0058 30.0268 18.226L29.7709 19.2246C29.6965 19.3743 29.5719 19.4844 29.3981 19.4844C29.1567 19.4844 28.9606 19.2893 28.9606 19.0469V1.91013C28.9567 0.854528 28.104 0.000778198 27.0484 0.000778198C25.9928 0.000778198 25.14 0.853562 25.14 1.91013V19.1512C25.14 20.6337 26.2593 21.9307 27.7389 22.0273C29.1219 22.1162 30.305 21.1958 30.6256 19.9297L34.6954 4.21061V28.021C34.6954 29.4609 33.6823 30.7512 32.2607 30.9647C30.4904 31.2273 28.9548 29.8482 28.9548 28.1282V24.9256C28.9548 23.87 28.102 23.0173 27.0455 23.0173C25.9889 23.0173 25.1371 23.87 25.1371 24.9256V25.3129C25.1371 28.9925 28.1484 32 31.8232 32C35.498 32 38.4987 28.9993 38.5102 25.3313V2.13805C38.517 0.957866 37.557 0.00174418 36.3768 0.00174418L36.3759 0.000778198Z",
                                fill: a
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_86_1573",
                                children: (0, l.jsx)("rect", {
                                    width: "272.8",
                                    height: "32",
                                    fill: "white",
                                    transform: "translate(0.199585)"
                                })
                            })
                        })]
                    }) : (0, l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "155",
                        height: "18",
                        viewBox: "0 0 155 18",
                        fill: "none",
                        className: r,
                        "aria-label": "my Barcel\xf3 benefits",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_60378)",
                            children: [(0, l.jsx)("path", {
                                d: "M76.8103 2.34402C76.8282 2.35597 76.8505 2.36195 76.8722 2.36195H78.3118C78.3276 2.36195 78.3417 2.35977 78.3558 2.3538C78.37 2.34782 78.3841 2.33967 78.3939 2.32989L79.5135 1.27436L80.6332 0.21882C80.6511 0.200893 80.663 0.17862 80.669 0.154717C80.675 0.130814 80.6728 0.104737 80.663 0.0808344C80.6533 0.0569313 80.6391 0.036831 80.619 0.0227065C80.5989 0.00858196 80.575 0.000976562 80.5511 0.000976562H78.2678C78.2477 0.000976562 78.2276 0.00695224 78.2097 0.015101C78.1918 0.0232498 78.1777 0.0390042 78.1657 0.0553017L77.4676 1.11084L76.7701 2.16638C76.7581 2.18648 76.75 2.20821 76.75 2.23048C76.75 2.25275 76.7538 2.27448 76.7641 2.29621C76.7739 2.31631 76.7902 2.33207 76.8081 2.34402H76.8103Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M81.0705 4.33437C80.2888 3.51677 79.167 3.05664 77.8034 3.05664C76.4399 3.05664 75.3257 3.5184 74.5461 4.33437C73.7682 5.15196 73.3281 6.32593 73.3281 7.75359C73.3281 9.18125 73.7682 10.3449 74.5461 11.1609C75.324 11.9747 76.4437 12.4348 77.8034 12.4348C79.1632 12.4348 80.2888 11.9747 81.0705 11.1609C81.8523 10.3471 82.2923 9.17528 82.2923 7.75359C82.2923 6.3319 81.8523 5.15196 81.0705 4.33437ZM79.381 9.42735C79.111 9.95919 78.633 10.3693 77.8013 10.3693C76.9695 10.3693 76.5034 9.95919 76.2356 9.42735C75.9678 8.89551 75.9058 8.24143 75.9058 7.75359C75.9058 7.26575 75.9678 6.60353 76.2356 6.07006C76.5034 5.53441 76.9777 5.12208 77.8013 5.12208C78.6248 5.12208 79.111 5.53387 79.381 6.07006C79.651 6.6057 79.713 7.26358 79.713 7.75359C79.713 8.2436 79.651 8.89551 79.381 9.42735Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M72.0821 0.000488281H69.6168C69.5788 0.000488281 69.5446 0.0162427 69.5207 0.040689C69.4968 0.066765 69.4805 0.100447 69.4805 0.138474V12.058C69.4805 12.096 69.4962 12.1318 69.5207 12.1579C69.5446 12.184 69.5788 12.1997 69.6168 12.1997H72.0821C72.1201 12.1997 72.1538 12.184 72.1783 12.1579C72.2022 12.1318 72.2185 12.0982 72.2185 12.058V0.140647C72.2185 0.10262 72.2027 0.0667651 72.1783 0.042862C72.1544 0.016786 72.1201 0.00266134 72.0821 0.00266134V0.000488281Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M32.6095 5.55143C33.0691 5.27166 33.4113 4.92941 33.6395 4.52143C33.8671 4.11344 33.9796 3.63973 33.9796 3.09376C33.9796 2.05181 33.6656 1.27822 33.0278 0.766473C32.3916 0.25473 31.4323 0.000488281 30.1404 0.000488281H24.6813C24.6433 0.000488281 24.609 0.0162427 24.5851 0.040689C24.5612 0.066765 24.5449 0.100447 24.5449 0.138474V12.058C24.5449 12.096 24.5607 12.1318 24.5851 12.1579C24.609 12.184 24.6433 12.1997 24.6813 12.1997H30.3023C31.278 12.1997 32.3357 11.964 33.1495 11.3979C33.9633 10.8302 34.5331 9.93221 34.5331 8.6045C34.5331 7.85644 34.3631 7.21269 34.0372 6.69715C33.7112 6.18106 33.2315 5.79318 32.6095 5.55143ZM27.3666 3.57182V2.318H29.6183C30.1703 2.318 30.5739 2.41578 30.8423 2.61787C31.1101 2.81996 31.2383 3.12799 31.2383 3.54792C31.2383 4.07596 31.0444 4.39593 30.7706 4.5839C30.4968 4.77186 30.141 4.82782 29.815 4.82782H27.3677V3.57182H27.3666ZM31.2758 9.53075C30.9857 9.76869 30.5478 9.88495 29.9601 9.88495H27.3666V6.8938H30.0079C30.5799 6.8938 31.0036 7.02201 31.2856 7.28169C31.5675 7.5419 31.7077 7.93141 31.7077 8.45728C31.7077 8.93697 31.5637 9.29498 31.2736 9.53292L31.2758 9.53075Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M43.5092 5.65012C43.5092 4.79015 43.187 4.14043 42.5492 3.70854C41.9114 3.27448 40.9537 3.05664 39.6858 3.05664C38.5482 3.05664 37.6122 3.29458 36.9222 3.73625C36.2345 4.18008 35.7944 4.82981 35.6483 5.65555C35.6445 5.67348 35.6461 5.69358 35.6483 5.71151C35.6527 5.72944 35.6603 5.74736 35.6706 5.76149C35.6804 5.77724 35.6945 5.78974 35.7086 5.79952C35.7244 5.80929 35.7407 5.81527 35.7586 5.81962L36.8902 6.01138L38.0218 6.20315C38.0397 6.2075 38.0598 6.20532 38.0777 6.20098C38.0957 6.19718 38.112 6.18903 38.1277 6.17708C38.1418 6.16512 38.156 6.151 38.1636 6.13307C38.1717 6.11732 38.1777 6.09722 38.1793 6.07929C38.2173 5.68543 38.3456 5.39534 38.5753 5.2052C38.8051 5.01506 39.1333 4.92325 39.569 4.92325C40.0046 4.92325 40.329 4.96508 40.5626 5.11719C40.7962 5.2693 40.9265 5.5268 40.9265 5.95923C40.9423 6.27703 40.7668 6.46717 40.4365 6.59321C40.1062 6.71924 39.6227 6.78552 39.0208 6.85505C38.2048 6.95121 37.2889 7.05714 36.5735 7.44285C35.8596 7.82856 35.3457 8.49459 35.3359 9.70821C35.3359 10.5497 35.6239 11.232 36.1416 11.7036C36.6593 12.1757 37.4095 12.4375 38.3331 12.4375C38.8709 12.4375 39.3527 12.3658 39.7846 12.2175C40.2165 12.0697 40.5962 11.8475 40.9282 11.5498V11.6237C40.9282 11.6737 40.926 11.7318 40.9244 11.8035V12.0632C40.9244 12.1012 40.9401 12.1371 40.9646 12.1632C40.9885 12.1892 41.0227 12.205 41.0607 12.205H43.3723C43.4103 12.205 43.4445 12.1892 43.4684 12.1632C43.4923 12.1371 43.5086 12.1034 43.5086 12.0632V5.64849L43.5092 5.65012ZM40.9293 8.4093V8.72112C40.9293 9.34314 40.7875 9.80491 40.5012 10.1108C40.2132 10.4166 39.7814 10.5687 39.1974 10.5687C38.7677 10.5687 38.4477 10.4905 38.2374 10.3308C38.0256 10.1711 37.9213 9.93094 37.9213 9.60716C37.9213 9.28339 38.0109 9.04707 38.213 8.86563C38.4151 8.68364 38.7291 8.55978 39.1729 8.47557C39.2609 8.45982 39.3511 8.44352 39.4407 8.43157C39.5309 8.41744 39.6227 8.40549 39.7107 8.39137C39.9389 8.35932 40.1627 8.32726 40.3708 8.28326C40.5767 8.23926 40.769 8.18113 40.9287 8.09747V8.4093H40.9293Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M67.0416 4.3203C66.6657 3.90634 66.2196 3.59071 65.7139 3.3783C65.2097 3.16643 64.648 3.05615 64.0439 3.05615C62.7624 3.05615 61.6563 3.54997 60.8708 4.38386C60.0847 5.21775 59.6191 6.39171 59.6191 7.7531C59.6191 9.11449 60.063 10.3227 60.8387 11.1441C61.6145 11.9638 62.7206 12.4338 64.0439 12.4338C65 12.4338 65.8073 12.2159 66.4614 11.7857C67.1155 11.3559 67.6131 10.71 67.9553 9.85385C67.9635 9.83375 67.9673 9.81365 67.9651 9.79192C67.9651 9.77182 67.9591 9.75009 67.9472 9.73217C67.9374 9.71424 67.9233 9.69794 67.907 9.68599C67.8907 9.67404 67.8711 9.66589 67.851 9.66209L66.8955 9.5002L65.9399 9.33831C65.9078 9.33233 65.8779 9.33831 65.8519 9.35406C65.8258 9.36982 65.8041 9.39426 65.7921 9.42414C65.7019 9.65611 65.4884 9.89188 65.1962 10.0701C64.9044 10.2483 64.5345 10.3678 64.1287 10.3678C63.5229 10.3678 63.0666 10.2157 62.751 9.90166C62.4348 9.58766 62.2572 9.1096 62.2088 8.45987H67.7576C67.9016 8.45987 68.0314 8.40011 68.1254 8.30396C68.2194 8.2078 68.2775 8.07416 68.2775 7.92586V7.89761C68.2797 7.19192 68.1716 6.51775 67.9635 5.90985C67.7554 5.30195 67.4458 4.76033 67.0454 4.3203L67.0416 4.31813V4.3203ZM63.9326 6.67746H62.2148C62.2507 6.4254 62.3468 6.03534 62.6065 5.70939C62.8662 5.38344 63.2904 5.12159 63.9804 5.12159C64.4541 5.12159 64.8143 5.23568 65.0843 5.48557C65.3542 5.73764 65.5341 6.12552 65.6503 6.67746H63.9326Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M87.1875 12.2115V3.27832H90.8501C92.5222 3.27832 93.6066 4.36265 93.6066 5.63929C93.6066 6.53294 93.0709 7.17072 92.4706 7.42604C93.1214 7.66833 94.0531 8.42128 94.0531 9.62078C94.0531 11.012 92.8536 12.2115 91.0674 12.2115H87.1875ZM88.783 6.87682H90.8121C91.5264 6.87682 91.9991 6.40473 91.9991 5.75392C91.9991 5.1031 91.527 4.61798 90.8121 4.61798H88.783V6.87682ZM88.783 10.8713H91.0294C91.8589 10.8713 92.4456 10.2716 92.4456 9.50615C92.4456 8.74071 91.8589 8.15346 91.0294 8.15346H88.783V10.8713Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M96.6602 12.2115V3.27832H103.079V4.72011H98.2551V6.88986H102.058V8.31969H98.2551V10.7698H103.207V12.2115H96.6602Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M105.869 12.2115V3.27832H107.299L111.982 9.50615H112.021V3.27832H113.616V12.2115H112.174L107.503 5.98371H107.452V12.2115H105.869Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M116.332 12.2115V3.27832H122.751V4.72011H117.927V6.88986H121.73V8.31969H117.927V10.7698H122.879V12.2115H116.332Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M125.541 12.2115V3.27832H131.896V4.79671H127.136V7.15768H130.875V8.65108H127.136V12.2115H125.541Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M134.178 12.2115V3.27832H135.773V12.2115H134.178Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M140.859 12.2115V4.74564H138.217V3.27832H145.096V4.74564H142.454V12.2115H140.859H140.859Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M147.379 10.9613L148.425 9.95356C148.846 10.3996 149.561 10.9233 150.62 10.9233C151.68 10.9233 152.28 10.3366 152.28 9.69823C152.28 7.87345 147.672 8.91975 147.672 5.66568C147.672 4.26137 148.885 3.12598 150.773 3.12598C152.177 3.12598 153.198 3.78983 153.67 4.31298L152.637 5.33429C152.293 5.0154 151.654 4.55581 150.825 4.55581C149.817 4.55581 149.306 5.07842 149.306 5.66568C149.306 7.491 153.901 6.44416 153.901 9.69823C153.901 11.1281 152.676 12.3656 150.672 12.3656C149.026 12.3656 147.902 11.6121 147.379 10.9613H147.379Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M58.734 9.06473C58.7243 9.04898 58.7101 9.03485 58.6938 9.02453C58.6781 9.01475 58.6618 9.0066 58.6417 9.00443L57.5601 8.82027L56.4785 8.63611C56.4605 8.6323 56.4426 8.63393 56.4247 8.63828C56.4068 8.64262 56.3905 8.65023 56.3769 8.66218C56.3628 8.67413 56.3486 8.68608 56.341 8.70238C56.3329 8.71814 56.3253 8.73661 56.3231 8.75453C56.2709 9.12232 56.1493 9.52432 55.889 9.83615C55.6288 10.1463 55.2312 10.3658 54.6254 10.3658C53.9697 10.3658 53.5237 10.0317 53.2418 9.54388C52.9598 9.05387 52.8441 8.41011 52.8441 7.78646C52.8441 7.56427 52.8658 6.89879 53.106 6.28654C53.3461 5.67647 53.8035 5.12073 54.6738 5.12073C55.1334 5.12073 55.4914 5.23264 55.7516 5.45863C56.0113 5.68462 56.1753 6.0247 56.2432 6.48266C56.2454 6.50058 56.253 6.51851 56.2612 6.53481C56.2709 6.55056 56.2834 6.56469 56.297 6.57501C56.3111 6.58696 56.3291 6.59294 56.3448 6.59728C56.3628 6.60109 56.3807 6.60109 56.3986 6.59728L57.5085 6.40932L58.6183 6.22135C58.6564 6.21538 58.6862 6.1931 58.7063 6.1654C58.7264 6.13552 58.7362 6.09967 58.7302 6.06164C58.5863 5.14789 58.1164 4.39603 57.4123 3.87179C56.7083 3.3481 55.7706 3.0542 54.689 3.0542C53.3455 3.0542 52.2373 3.52628 51.4675 4.36398C50.6977 5.20167 50.2637 6.40552 50.2637 7.86741C50.2637 9.21087 50.7135 10.3528 51.4854 11.1568C52.2574 11.9624 53.351 12.4307 54.6407 12.4307C55.7326 12.4307 56.6545 12.133 57.3542 11.5767C58.0539 11.021 58.5379 10.205 58.752 9.16904C58.7558 9.15111 58.7558 9.13101 58.752 9.11308C58.7476 9.09515 58.7422 9.07723 58.7297 9.06093L58.734 9.06527V9.06473Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M50.4993 3.24031C50.4993 3.22021 50.4933 3.20229 50.4836 3.18436C50.4738 3.16643 50.4613 3.15231 50.4477 3.13818C50.4336 3.12623 50.4157 3.11808 50.3956 3.11211C50.3217 3.09201 50.2478 3.07788 50.1777 3.07028C50.1076 3.0605 50.0376 3.05615 49.9696 3.05615C49.3759 3.05615 48.85 3.18599 48.4138 3.42393C47.9781 3.6597 47.6299 4.00195 47.3941 4.42569V3.42991C47.3941 3.39188 47.3783 3.35603 47.3539 3.33212C47.33 3.30605 47.2958 3.29192 47.2577 3.29192H45.0641C45.0261 3.29192 44.9924 3.30768 44.9679 3.33212C44.944 3.3582 44.9277 3.39188 44.9277 3.42991V12.06C44.9277 12.098 44.9435 12.1339 44.9679 12.16C44.9918 12.186 45.0261 12.2018 45.0641 12.2018H47.3718C47.4098 12.2018 47.4435 12.186 47.468 12.16C47.4919 12.1339 47.5082 12.1002 47.5082 12.06V8.17086C47.5082 7.31524 47.682 6.66497 48.0259 6.22711C48.3698 5.78708 48.8875 5.55945 49.5714 5.54316C49.5992 5.54316 49.6252 5.53338 49.6475 5.51708C49.6698 5.50133 49.6855 5.47905 49.6953 5.45298L50.0935 4.37517L50.4912 3.29736C50.4971 3.27943 50.5009 3.25933 50.4993 3.23923V3.24031Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M11.8045 0.00059639C10.9146 0.00059639 10.1687 0.624249 9.98078 1.45814L9.97644 1.47824C9.97426 1.49019 9.97264 1.50214 9.96829 1.51409L8.29453 9.47436C8.29671 6.43269 8.29833 1.93566 8.29833 1.93566C8.29833 0.937705 7.5443 0.0657866 6.54852 0.00385597C5.60489 -0.0559017 4.80088 0.585678 4.60477 1.4576L4.60097 1.4777C4.59879 1.48965 4.59716 1.5016 4.59282 1.51355L2.92341 9.45371V1.0746C2.92341 0.480831 2.44154 0.00059639 1.8494 0.00059639C1.25725 0.00059639 0.775391 0.480287 0.775391 1.0746V12.2064H2.92286V12.1906C2.92286 12.1906 2.92667 12.1863 2.92667 12.1846C2.92667 12.1846 5.04209 2.18284 5.08011 1.97097C5.13824 1.65317 5.33218 1.43532 5.61576 1.43532C5.92161 1.43532 6.15141 1.66132 6.15141 1.97097V12.1966L8.2891 12.2047V12.189H8.29888C8.29888 12.189 10.4165 2.17903 10.4545 1.96934C10.5126 1.65154 10.7066 1.43369 10.9901 1.43369C11.296 1.43369 11.5258 1.65969 11.5258 1.96934V12.2031H13.6733V1.87264C13.6733 0.838833 12.8356 0.00113976 11.8018 0.00113976L11.8045 0.00059639Z",
                                fill: a
                            }), (0, l.jsx)("path", {
                                d: "M21.1245 0.000488281C20.5704 0.000488281 20.0869 0.380221 19.9566 0.91804L17.6412 9.91428C17.6412 9.91428 17.6374 9.90831 17.6352 9.90613C17.6113 10.0121 17.5831 10.1283 17.5532 10.2522L17.4093 10.8139C17.3674 10.8981 17.2973 10.96 17.1996 10.96C17.0637 10.96 16.9535 10.8503 16.9535 10.7139V1.0745C16.9513 0.480722 16.4716 0.000488281 15.8778 0.000488281C15.2841 0.000488281 14.8044 0.480179 14.8044 1.0745V10.7726C14.8044 11.6065 15.434 12.3361 16.2663 12.3904C17.0442 12.4404 17.7097 11.9227 17.89 11.2105L20.1793 2.36852V15.7618C20.1793 16.5718 19.6094 17.2976 18.8098 17.4177C17.814 17.5654 16.9502 16.7897 16.9502 15.8221V14.0207C16.9502 13.4269 16.4705 12.9473 15.8762 12.9473C15.2819 12.9473 14.8027 13.4269 14.8027 14.0207V14.2386C14.8027 16.3084 16.4966 18 18.5637 18C20.6307 18 22.3186 16.3122 22.3251 14.2489V1.2027C22.3289 0.53885 21.7889 0.00103165 21.1251 0.00103165L21.1245 0.000488281Z",
                                fill: a
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_60378",
                                children: (0, l.jsx)("rect", {
                                    width: "153.45",
                                    height: "18",
                                    fill: "white",
                                    transform: "translate(0.775391)"
                                })
                            })
                        })]
                    })
                },
                r = e => {
                    let {
                        variant: C = "dark",
                        userLevel: t,
                        size: s = "m"
                    } = e, r = "var(--b-color-text-".concat(C, ")");
                    return "large" === s ? t === i.Yn.Essential ? (0, l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "177",
                        height: "40",
                        viewBox: "0 0 177 40",
                        fill: "none",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3623_34998)",
                            children: [(0, l.jsx)("path", {
                                d: "M164.971 5.31401C165.01 5.33991 165.058 5.35285 165.105 5.35285H168.224C168.259 5.35285 168.289 5.34815 168.32 5.3352C168.35 5.32225 168.381 5.30459 168.402 5.28341L170.828 2.99636L173.254 0.70931C173.293 0.670467 173.319 0.622207 173.332 0.570416C173.345 0.518625 173.34 0.462125 173.319 0.410334C173.298 0.358543 173.267 0.314991 173.223 0.284387C173.18 0.253784 173.128 0.237305 173.076 0.237305H168.129C168.086 0.237305 168.042 0.250252 168.003 0.267909C167.964 0.285565 167.934 0.3197 167.908 0.355012L166.395 2.64206L164.884 4.92911C164.858 4.97266 164.84 5.01974 164.84 5.068C164.84 5.11626 164.849 5.16335 164.871 5.21043C164.892 5.25398 164.927 5.28812 164.966 5.31401H164.971Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M174.199 9.62394C172.505 7.85245 170.074 6.85547 167.12 6.85547C164.166 6.85547 161.751 7.85598 160.062 9.62394C158.377 11.3954 157.423 13.9391 157.423 17.0324C157.423 20.1258 158.377 22.647 160.062 24.415C161.748 26.1783 164.174 27.1752 167.12 27.1752C170.066 27.1752 172.505 26.1783 174.199 24.415C175.893 22.6518 176.846 20.1128 176.846 17.0324C176.846 13.952 175.893 11.3954 174.199 9.62394ZM170.538 20.659C169.953 21.8113 168.917 22.7 167.115 22.7C165.313 22.7 164.303 21.8113 163.723 20.659C163.143 19.5066 163.009 18.0894 163.009 17.0324C163.009 15.9754 163.143 14.5406 163.723 13.3847C164.303 12.2241 165.331 11.3307 167.115 11.3307C168.9 11.3307 169.953 12.2229 170.538 13.3847C171.123 14.5453 171.257 15.9707 171.257 17.0324C171.257 18.0941 171.123 19.5066 170.538 20.659Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M154.724 0.235552H149.383C149.3 0.235552 149.226 0.269687 149.175 0.322655C149.123 0.379155 149.087 0.452133 149.087 0.534528V26.3606C149.087 26.443 149.122 26.5207 149.175 26.5772C149.226 26.6337 149.3 26.6679 149.383 26.6679H154.724C154.807 26.6679 154.88 26.6337 154.933 26.5772C154.985 26.5207 155.02 26.4477 155.02 26.3606V0.538059C155.02 0.455664 154.986 0.377978 154.933 0.326187C154.881 0.269687 154.807 0.239083 154.724 0.239083V0.234375V0.235552Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M69.1997 12.2636C70.1955 11.6574 70.937 10.9159 71.4314 10.0319C71.9246 9.14793 72.1683 8.12152 72.1683 6.93857C72.1683 4.68095 71.4879 3.0048 70.106 1.896C68.7277 0.787197 66.649 0.236328 63.8499 0.236328H52.0215C51.9391 0.236328 51.865 0.270463 51.8132 0.323431C51.7614 0.379931 51.7261 0.452909 51.7261 0.535304V26.3614C51.7261 26.4438 51.7602 26.5215 51.8132 26.578C51.865 26.6345 51.9391 26.6686 52.0215 26.6686H64.2007C66.3147 26.6686 68.6064 26.1578 70.3697 24.9313C72.133 23.7012 73.3677 21.7555 73.3677 18.8788C73.3677 17.2579 72.9993 15.8631 72.293 14.7461C71.5868 13.6279 70.5474 12.7874 69.1997 12.2636ZM57.841 7.97439V5.25771H62.7199C63.9158 5.25771 64.7904 5.46958 65.3719 5.90745C65.9522 6.34533 66.2299 7.01272 66.2299 7.9226C66.2299 9.06671 65.8097 9.76001 65.2165 10.1673C64.6232 10.5745 63.8523 10.6958 63.146 10.6958H57.8433V7.97439H57.841ZM66.31 20.8845C65.6814 21.4001 64.7327 21.652 63.4591 21.652H57.8398V15.171H63.5627C64.8022 15.171 65.7203 15.4488 66.3312 16.0114C66.9421 16.5752 67.2458 17.4192 67.2458 18.5586C67.2458 19.598 66.9338 20.3737 66.3053 20.8892L66.31 20.8845Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M92.816 12.4748C92.816 10.6115 92.118 9.20372 90.7361 8.26795C89.3542 7.32747 87.279 6.85547 84.5317 6.85547C82.067 6.85547 80.0389 7.37103 78.544 8.32798C77.0538 9.28965 76.1004 10.6974 75.7837 12.4866C75.7755 12.5254 75.779 12.569 75.7837 12.6078C75.7932 12.6467 75.8096 12.6855 75.832 12.7161C75.8532 12.7502 75.8838 12.7773 75.9144 12.7985C75.9485 12.8197 75.9838 12.8326 76.0227 12.8421L78.4745 13.2576L80.9264 13.6731C80.9652 13.6825 81.0088 13.6778 81.0476 13.6684C81.0865 13.6601 81.1218 13.6425 81.1559 13.6166C81.1865 13.5907 81.2171 13.5601 81.2336 13.5212C81.2512 13.4871 81.2642 13.4435 81.2677 13.4047C81.3501 12.5513 81.6279 11.9228 82.1258 11.5108C82.6237 11.0988 83.3347 10.8999 84.2787 10.8999C85.2227 10.8999 85.9254 10.9905 86.4315 11.3201C86.9377 11.6497 87.2202 12.2076 87.2202 13.1446C87.2543 13.8331 86.8741 14.2451 86.1584 14.5182C85.4428 14.7913 84.3952 14.9349 83.091 15.0855C81.323 15.2939 79.3385 15.5234 77.7883 16.3591C76.2416 17.1949 75.1281 18.6379 75.1069 21.2675C75.1069 23.0908 75.7308 24.5692 76.8525 25.5909C77.9743 26.6138 79.5998 27.1811 81.6008 27.1811C82.7661 27.1811 83.8102 27.0258 84.746 26.7044C85.6817 26.3843 86.5045 25.9028 87.2237 25.2578V25.4179C87.2237 25.5262 87.219 25.6521 87.2155 25.8075V26.3701C87.2155 26.4525 87.2496 26.5302 87.3026 26.5867C87.3544 26.6432 87.4285 26.6773 87.5109 26.6773H92.5193C92.6017 26.6773 92.6759 26.6432 92.7277 26.5867C92.7795 26.5302 92.8148 26.4572 92.8148 26.3701V12.4713L92.816 12.4748ZM87.2272 18.4543V19.13C87.2272 20.4777 86.92 21.4782 86.2997 22.1409C85.6758 22.8036 84.7401 23.1332 83.4747 23.1332C82.5437 23.1332 81.8504 22.9637 81.3948 22.6176C80.9358 22.2716 80.7098 21.7513 80.7098 21.0498C80.7098 20.3482 80.904 19.8362 81.3419 19.4431C81.7797 19.0487 82.4601 18.7804 83.4218 18.5979C83.6124 18.5638 83.8078 18.5285 84.0021 18.5026C84.1975 18.472 84.3964 18.4461 84.5871 18.4155C85.0814 18.346 85.5664 18.2766 86.0172 18.1812C86.4633 18.0859 86.88 17.96 87.2261 17.7787V18.4543H87.2272Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M143.805 9.59354C142.991 8.69661 142.025 8.01273 140.929 7.5525C139.836 7.09344 138.619 6.85449 137.31 6.85449C134.534 6.85449 132.137 7.92445 130.435 9.73125C128.732 11.5381 127.723 14.0817 127.723 17.0314C127.723 19.9812 128.685 22.599 130.366 24.3787C132.047 26.1549 134.443 27.1731 137.31 27.1731C139.382 27.1731 141.131 26.7011 142.548 25.7688C143.966 24.8378 145.044 23.4382 145.785 21.5832C145.803 21.5396 145.811 21.4961 145.806 21.449C145.806 21.4054 145.794 21.3584 145.768 21.3195C145.746 21.2807 145.716 21.2454 145.681 21.2195C145.645 21.1936 145.603 21.1759 145.559 21.1677L143.489 20.8169L141.418 20.4661C141.349 20.4532 141.284 20.4661 141.228 20.5003C141.171 20.5344 141.124 20.5874 141.098 20.6521C140.903 21.1547 140.44 21.6656 139.807 22.0517C139.175 22.4377 138.373 22.6967 137.494 22.6967C136.182 22.6967 135.193 22.3671 134.509 21.6868C133.824 21.0064 133.439 19.9706 133.334 18.5628H145.357C145.669 18.5628 145.95 18.4333 146.154 18.225C146.357 18.0167 146.483 17.7271 146.483 17.4058V17.3445C146.488 15.8155 146.254 14.3548 145.803 13.0376C145.352 11.7205 144.681 10.547 143.814 9.59354L143.805 9.58883V9.59354ZM137.069 14.702H133.347C133.425 14.1559 133.633 13.3107 134.196 12.6045C134.758 11.8982 135.678 11.3309 137.173 11.3309C138.199 11.3309 138.979 11.5781 139.564 12.1195C140.149 12.6657 140.539 13.5061 140.791 14.702H137.069Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M125.805 19.8756C125.783 19.8415 125.753 19.8109 125.717 19.7885C125.683 19.7674 125.648 19.7497 125.604 19.745L123.261 19.346L120.917 18.9469C120.879 18.9387 120.84 18.9422 120.801 18.9516C120.762 18.9611 120.727 18.9775 120.697 19.0034C120.667 19.0293 120.636 19.0552 120.62 19.0905C120.602 19.1247 120.585 19.1647 120.581 19.2035C120.468 20.0004 120.204 20.8715 119.64 21.5471C119.076 22.2192 118.215 22.6947 116.902 22.6947C115.482 22.6947 114.515 21.9708 113.904 20.9138C113.293 19.8521 113.043 18.4573 113.043 17.106C113.043 16.6246 113.09 15.1827 113.61 13.8561C114.13 12.5343 115.121 11.3301 117.007 11.3301C118.003 11.3301 118.779 11.5726 119.342 12.0623C119.905 12.5519 120.261 13.2888 120.408 14.281C120.412 14.3199 120.429 14.3587 120.447 14.394C120.468 14.4282 120.495 14.4588 120.524 14.4811C120.555 14.507 120.594 14.52 120.628 14.5294C120.667 14.5376 120.705 14.5376 120.744 14.5294L123.149 14.1221L125.554 13.7149C125.636 13.7019 125.701 13.6537 125.745 13.5936C125.788 13.5289 125.809 13.4512 125.796 13.3688C125.484 11.389 124.466 9.7599 122.941 8.62403C121.415 7.48933 119.384 6.85254 117.04 6.85254C114.129 6.85254 111.728 7.87541 110.06 9.69046C108.392 11.5055 107.452 14.1139 107.452 17.2814C107.452 20.1923 108.426 22.6665 110.099 24.4085C111.772 26.1541 114.141 27.1688 116.935 27.1688C119.301 27.1688 121.299 26.5237 122.815 25.3184C124.331 24.1143 125.38 22.3463 125.843 20.1016C125.852 20.0628 125.852 20.0193 125.843 19.9804C125.834 19.9416 125.822 19.9027 125.795 19.8674L125.805 19.8768V19.8756Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M107.963 7.2545C107.963 7.21094 107.95 7.1721 107.929 7.13326C107.908 7.09441 107.881 7.06381 107.851 7.03321C107.821 7.00731 107.782 6.98965 107.738 6.97671C107.578 6.93316 107.418 6.90255 107.266 6.88607C107.114 6.86489 106.963 6.85547 106.816 6.85547C105.529 6.85547 104.39 7.13679 103.444 7.65235C102.5 8.16319 101.746 8.90475 101.235 9.82286V7.66529C101.235 7.5829 101.201 7.50521 101.148 7.45342C101.096 7.39692 101.022 7.36632 100.94 7.36632H96.1866C96.1042 7.36632 96.0312 7.40045 95.9782 7.45342C95.9264 7.50992 95.8911 7.5829 95.8911 7.66529V26.3642C95.8911 26.4466 95.9252 26.5243 95.9782 26.5808C96.03 26.6373 96.1042 26.6715 96.1866 26.6715H101.187C101.269 26.6715 101.342 26.6373 101.395 26.5808C101.447 26.5243 101.482 26.4513 101.482 26.3642V17.9376C101.482 16.0837 101.859 14.6747 102.604 13.726C103.349 12.7726 104.471 12.2794 105.953 12.2441C106.013 12.2441 106.069 12.2229 106.117 12.1876C106.166 12.1535 106.2 12.1052 106.221 12.0487L107.084 9.7134L107.945 7.37809C107.958 7.33925 107.967 7.29569 107.963 7.25214V7.2545Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M24.12 0.235667C22.192 0.235667 20.5759 1.58694 20.1686 3.39375L20.1592 3.4373C20.1545 3.4632 20.151 3.48909 20.1415 3.51499L16.515 20.7626C16.5197 14.1722 16.5232 4.42839 16.5232 4.42839C16.5232 2.26611 14.8894 0.376916 12.7319 0.24273C10.6873 0.113252 8.94524 1.50337 8.52032 3.39257L8.51208 3.43612C8.50737 3.46202 8.50384 3.48791 8.49442 3.51381L4.87728 20.7179V2.56156C4.87728 1.27502 3.83322 0.23449 2.55021 0.23449C1.26721 0.23449 0.223145 1.27384 0.223145 2.56156V26.6809H4.87611V26.6468C4.87611 26.6468 4.88434 26.6374 4.88434 26.6338C4.88434 26.6338 9.46786 4.96278 9.55025 4.50373C9.6762 3.81514 10.0964 3.34313 10.7108 3.34313C11.3735 3.34313 11.8714 3.8328 11.8714 4.50373V26.6597L16.5032 26.6774V26.6433H16.5244C16.5244 26.6433 21.1126 4.95454 21.195 4.5002C21.321 3.81161 21.7412 3.3396 22.3556 3.3396C23.0183 3.3396 23.5162 3.82926 23.5162 4.5002V26.6739H28.1692V4.29068C28.1692 2.05071 26.3541 0.235667 24.1142 0.235667H24.12Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M44.3143 0.235552C43.1137 0.235552 42.0661 1.05832 41.7836 2.22362L36.7669 21.7159C36.7669 21.7159 36.7587 21.703 36.7539 21.6983C36.7022 21.9278 36.6409 22.1797 36.5762 22.4481L36.2643 23.6651C36.1736 23.8476 36.0218 23.9818 35.8099 23.9818C35.5157 23.9818 35.2767 23.744 35.2767 23.4486V2.56144C35.272 1.27491 34.2327 0.234375 32.9461 0.234375C31.6596 0.234375 30.6202 1.27373 30.6202 2.56144V23.5745C30.6202 25.3813 31.9845 26.9621 33.7877 27.0798C35.4733 27.1881 36.9152 26.0664 37.306 24.5232L42.2662 5.36523V34.3847C42.2662 36.1397 41.0314 37.7123 39.2988 37.9724C37.1412 38.2926 35.2697 36.6117 35.2697 34.5154V30.6122C35.2697 29.3257 34.2303 28.2863 32.9426 28.2863C31.6549 28.2863 30.6167 29.3257 30.6167 30.6122V31.0842C30.6167 35.5689 34.2868 39.2343 38.7656 39.2343C43.2443 39.2343 46.9015 35.5771 46.9156 31.1066V2.83923C46.9238 1.40085 45.7538 0.235552 44.3154 0.235552H44.3143Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M51.7446 38.9426V31.2021H57.3075V32.4522H53.1265V34.332H56.4223V35.5703H53.1265V37.6937H57.4181V38.9437H51.7446V38.9426Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M62.8081 37.8601L63.7145 36.9855C64.0793 37.3728 64.6985 37.8259 65.6166 37.8259C66.5347 37.8259 67.0538 37.3174 67.0538 36.7642C67.0538 35.1834 63.0624 36.0897 63.0624 33.2695C63.0624 32.0536 64.1123 31.0684 65.7496 31.0684C66.9655 31.0684 67.8495 31.6439 68.2591 32.0971L67.3645 32.9811C67.0656 32.7045 66.5124 32.3066 65.7943 32.3066C64.9198 32.3066 64.4784 32.7598 64.4784 33.2683C64.4784 34.8491 68.4592 33.9428 68.4592 36.763C68.4592 38.0013 67.3987 39.0748 65.6625 39.0748C64.2359 39.0748 63.2625 38.4227 62.8081 37.8589V37.8601Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M73.8286 37.8601L74.735 36.9855C75.0999 37.3728 75.719 37.8259 76.6371 37.8259C77.5552 37.8259 78.0743 37.3174 78.0743 36.7642C78.0743 35.1834 74.0829 36.0897 74.0829 33.2695C74.0829 32.0536 75.1328 31.0684 76.7701 31.0684C77.986 31.0684 78.87 31.6439 79.2796 32.0971L78.3851 32.9811C78.0861 32.7045 77.5329 32.3066 76.8148 32.3066C75.9403 32.3066 75.4989 32.7598 75.4989 33.2683C75.4989 34.8491 79.4797 33.9428 79.4797 36.763C79.4797 38.0013 78.4192 39.0748 76.683 39.0748C75.2564 39.0748 74.283 38.4227 73.8286 37.8589V37.8601Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M85.4575 38.9426V31.2021H91.0204V32.4522H86.8394V34.332H90.1352V35.5703H86.8394V37.6937H91.131V38.9437H85.4587L85.4575 38.9426Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M97.1294 38.9426V31.2021H98.3677L102.426 36.599H102.459V31.2021H103.842V38.9426H102.593L98.5466 33.5457H98.5019V38.9426H97.1318H97.1294Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M111.797 38.9426V32.4734H109.507V31.2021H115.468V32.4734H113.179V38.9426H111.797Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M121.134 38.9426V31.2021H122.517V38.9426H121.134Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M128.12 38.9426L131.184 31.2021H132.709L135.761 38.9426H134.29L133.571 37.0404H130.276L129.546 38.9426H128.119H128.12ZM130.741 35.8245H133.108L131.936 32.717H131.914L130.741 35.8245Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M141.362 38.9426V31.2021H142.745V37.6713H146.439V38.9426H141.362Z",
                                fill: r
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3623_34998",
                                children: (0, l.jsx)("rect", {
                                    width: "177",
                                    height: "40",
                                    fill: "white"
                                })
                            })
                        })]
                    }) : t === i.Yn.Special ? (0, l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "177",
                        height: "40",
                        viewBox: "0 0 177 40",
                        fill: "none",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3623_47336)",
                            children: [(0, l.jsx)("path", {
                                d: "M164.971 5.31401C165.01 5.33991 165.059 5.35285 165.106 5.35285H168.225C168.259 5.35285 168.29 5.34815 168.32 5.3352C168.351 5.32225 168.381 5.30459 168.403 5.28341L170.829 2.99636L173.255 0.70931C173.293 0.670467 173.319 0.622207 173.332 0.570416C173.345 0.518625 173.34 0.462125 173.319 0.410334C173.298 0.358543 173.267 0.314991 173.224 0.284387C173.18 0.253784 173.129 0.237305 173.077 0.237305H168.13C168.086 0.237305 168.042 0.250252 168.004 0.267909C167.965 0.285565 167.934 0.3197 167.908 0.355012L166.396 2.64206L164.884 4.92911C164.858 4.97266 164.841 5.01974 164.841 5.068C164.841 5.11626 164.849 5.16335 164.871 5.21043C164.893 5.25398 164.928 5.28812 164.967 5.31401H164.971Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M174.199 9.62394C172.506 7.85245 170.075 6.85547 167.121 6.85547C164.166 6.85547 161.752 7.85598 160.063 9.62394C158.377 11.3954 157.424 13.9391 157.424 17.0324C157.424 20.1258 158.377 22.647 160.063 24.415C161.748 26.1783 164.174 27.1752 167.121 27.1752C170.067 27.1752 172.506 26.1783 174.199 24.415C175.893 22.6518 176.847 20.1128 176.847 17.0324C176.847 13.952 175.893 11.3954 174.199 9.62394ZM170.539 20.659C169.954 21.8113 168.918 22.7 167.116 22.7C165.314 22.7 164.304 21.8113 163.724 20.659C163.143 19.5066 163.009 18.0894 163.009 17.0324C163.009 15.9754 163.143 14.5406 163.724 13.3847C164.304 12.2241 165.331 11.3307 167.116 11.3307C168.9 11.3307 169.954 12.2229 170.539 13.3847C171.124 14.5453 171.258 15.9707 171.258 17.0324C171.258 18.0941 171.124 19.5066 170.539 20.659Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M154.725 0.235552H149.383C149.301 0.235552 149.227 0.269687 149.175 0.322655C149.123 0.379155 149.088 0.452133 149.088 0.534528V26.3606C149.088 26.443 149.122 26.5207 149.175 26.5772C149.227 26.6337 149.301 26.6679 149.383 26.6679H154.725C154.807 26.6679 154.88 26.6337 154.933 26.5772C154.985 26.5207 155.02 26.4477 155.02 26.3606V0.538059C155.02 0.455664 154.986 0.377978 154.933 0.326187C154.881 0.269687 154.807 0.239083 154.725 0.239083V0.234375V0.235552Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M69.2002 12.2636C70.196 11.6574 70.9375 10.9159 71.4319 10.0319C71.9251 9.14793 72.1687 8.12152 72.1687 6.93857C72.1687 4.68095 71.4884 3.0048 70.1065 1.896C68.7282 0.787197 66.6495 0.236328 63.8504 0.236328H52.022C51.9396 0.236328 51.8655 0.270463 51.8137 0.323431C51.7619 0.379931 51.7266 0.452909 51.7266 0.535304V26.3614C51.7266 26.4438 51.7607 26.5215 51.8137 26.578C51.8655 26.6345 51.9396 26.6686 52.022 26.6686H64.2012C66.3152 26.6686 68.6069 26.1578 70.3702 24.9313C72.1334 23.7012 73.3682 21.7555 73.3682 18.8788C73.3682 17.2579 72.9998 15.8631 72.2935 14.7461C71.5873 13.6279 70.5479 12.7874 69.2002 12.2636ZM57.8414 7.97439V5.25771H62.7204C63.9163 5.25771 64.7909 5.46958 65.3723 5.90745C65.9526 6.34533 66.2304 7.01272 66.2304 7.9226C66.2304 9.06671 65.8102 9.76001 65.217 10.1673C64.6237 10.5745 63.8527 10.6958 63.1465 10.6958H57.8438V7.97439H57.8414ZM66.3105 20.8845C65.6819 21.4001 64.7332 21.652 63.4596 21.652H57.8403V15.171H63.5632C64.8026 15.171 65.7208 15.4488 66.3317 16.0114C66.9426 16.5752 67.2462 17.4192 67.2462 18.5586C67.2462 19.598 66.9343 20.3737 66.3058 20.8892L66.3105 20.8845Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M92.8164 12.4748C92.8164 10.6115 92.1184 9.20372 90.7366 8.26795C89.3547 7.32747 87.2795 6.85547 84.5322 6.85547C82.0674 6.85547 80.0393 7.37103 78.5445 8.32798C77.0543 9.28965 76.1009 10.6974 75.7842 12.4866C75.776 12.5254 75.7795 12.569 75.7842 12.6078C75.7937 12.6467 75.8101 12.6855 75.8325 12.7161C75.8537 12.7502 75.8843 12.7773 75.9149 12.7985C75.949 12.8197 75.9843 12.8326 76.0232 12.8421L78.475 13.2576L80.9269 13.6731C80.9657 13.6825 81.0093 13.6778 81.0481 13.6684C81.0869 13.6601 81.1222 13.6425 81.1564 13.6166C81.187 13.5907 81.2176 13.5601 81.2341 13.5212C81.2517 13.4871 81.2647 13.4435 81.2682 13.4047C81.3506 12.5513 81.6284 11.9228 82.1263 11.5108C82.6242 11.0988 83.3351 10.8999 84.2792 10.8999C85.2232 10.8999 85.9259 10.9905 86.432 11.3201C86.9382 11.6497 87.2207 12.2076 87.2207 13.1446C87.2548 13.8331 86.8746 14.2451 86.1589 14.5182C85.4433 14.7913 84.3957 14.9349 83.0915 15.0855C81.3235 15.2939 79.339 15.5234 77.7888 16.3591C76.2421 17.1949 75.1286 18.6379 75.1074 21.2675C75.1074 23.0908 75.7313 24.5692 76.853 25.5909C77.9748 26.6138 79.6003 27.1811 81.6013 27.1811C82.7666 27.1811 83.8107 27.0258 84.7464 26.7044C85.6822 26.3843 86.505 25.9028 87.2242 25.2578V25.4179C87.2242 25.5262 87.2195 25.6521 87.2159 25.8075V26.3701C87.2159 26.4525 87.2501 26.5302 87.3031 26.5867C87.3548 26.6432 87.429 26.6773 87.5114 26.6773H92.5198C92.6022 26.6773 92.6764 26.6432 92.7282 26.5867C92.78 26.5302 92.8153 26.4572 92.8153 26.3701V12.4713L92.8164 12.4748ZM87.2277 18.4543V19.13C87.2277 20.4777 86.9205 21.4782 86.3002 22.1409C85.6763 22.8036 84.7406 23.1332 83.4752 23.1332C82.5442 23.1332 81.8509 22.9637 81.3953 22.6176C80.9363 22.2716 80.7103 21.7513 80.7103 21.0498C80.7103 20.3482 80.9045 19.8362 81.3424 19.4431C81.7802 19.0487 82.4606 18.7804 83.4222 18.5979C83.6129 18.5638 83.8083 18.5285 84.0025 18.5026C84.1979 18.472 84.3969 18.4461 84.5875 18.4155C85.0819 18.346 85.5669 18.2766 86.0177 18.1812C86.4638 18.0859 86.8805 17.96 87.2265 17.7787V18.4543H87.2277Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M143.806 9.59354C142.991 8.69661 142.025 8.01273 140.929 7.5525C139.837 7.09344 138.62 6.85449 137.311 6.85449C134.534 6.85449 132.138 7.92445 130.436 9.73125C128.732 11.5381 127.724 14.0817 127.724 17.0314C127.724 19.9812 128.685 22.599 130.366 24.3787C132.047 26.1549 134.444 27.1731 137.311 27.1731C139.383 27.1731 141.132 26.7011 142.549 25.7688C143.966 24.8378 145.044 23.4382 145.786 21.5832C145.803 21.5396 145.812 21.4961 145.807 21.449C145.807 21.4054 145.794 21.3584 145.768 21.3195C145.747 21.2807 145.716 21.2454 145.681 21.2195C145.646 21.1936 145.603 21.1759 145.56 21.1677L143.489 20.8169L141.419 20.4661C141.349 20.4532 141.285 20.4661 141.228 20.5003C141.172 20.5344 141.125 20.5874 141.099 20.6521C140.903 21.1547 140.441 21.6656 139.807 22.0517C139.175 22.4377 138.374 22.6967 137.494 22.6967C136.182 22.6967 135.193 22.3671 134.509 21.6868C133.824 21.0064 133.439 19.9706 133.335 18.5628H145.357C145.669 18.5628 145.951 18.4333 146.154 18.225C146.358 18.0167 146.484 17.7271 146.484 17.4058V17.3445C146.488 15.8155 146.254 14.3548 145.803 13.0376C145.353 11.7205 144.682 10.547 143.814 9.59354L143.806 9.58883V9.59354ZM137.07 14.702H133.348C133.425 14.1559 133.634 13.3107 134.196 12.6045C134.759 11.8982 135.678 11.3309 137.173 11.3309C138.2 11.3309 138.98 11.5781 139.565 12.1195C140.15 12.6657 140.54 13.5061 140.791 14.702H137.07Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M125.805 19.8756C125.784 19.8415 125.753 19.8109 125.718 19.7885C125.684 19.7674 125.648 19.7497 125.605 19.745L123.261 19.346L120.918 18.9469C120.879 18.9387 120.84 18.9422 120.801 18.9516C120.762 18.9611 120.727 18.9775 120.698 19.0034C120.667 19.0293 120.637 19.0552 120.62 19.0905C120.602 19.1247 120.586 19.1647 120.581 19.2035C120.468 20.0004 120.205 20.8715 119.641 21.5471C119.077 22.2192 118.215 22.6947 116.903 22.6947C115.482 22.6947 114.516 21.9708 113.905 20.9138C113.294 19.8521 113.043 18.4573 113.043 17.106C113.043 16.6246 113.09 15.1827 113.611 13.8561C114.131 12.5343 115.122 11.3301 117.008 11.3301C118.003 11.3301 118.779 11.5726 119.343 12.0623C119.906 12.5519 120.261 13.2888 120.408 14.281C120.413 14.3199 120.429 14.3587 120.447 14.394C120.468 14.4282 120.495 14.4588 120.525 14.4811C120.555 14.507 120.594 14.52 120.628 14.5294C120.667 14.5376 120.706 14.5376 120.745 14.5294L123.15 14.1221L125.554 13.7149C125.637 13.7019 125.701 13.6537 125.745 13.5936C125.789 13.5289 125.81 13.4512 125.797 13.3688C125.485 11.389 124.467 9.7599 122.941 8.62403C121.416 7.48933 119.384 6.85254 117.041 6.85254C114.13 6.85254 111.728 7.87541 110.061 9.69046C108.393 11.5055 107.452 14.1139 107.452 17.2814C107.452 20.1923 108.427 22.6665 110.099 24.4085C111.772 26.1541 114.141 27.1688 116.936 27.1688C119.302 27.1688 121.299 26.5237 122.815 25.3184C124.331 24.1143 125.38 22.3463 125.844 20.1016C125.852 20.0628 125.852 20.0193 125.844 19.9804C125.834 19.9416 125.823 19.9027 125.796 19.8674L125.805 19.8768V19.8756Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M107.964 7.2545C107.964 7.21094 107.951 7.1721 107.929 7.13326C107.908 7.09441 107.881 7.06381 107.852 7.03321C107.821 7.00731 107.782 6.98965 107.739 6.97671C107.579 6.93316 107.419 6.90255 107.267 6.88607C107.115 6.86489 106.963 6.85547 106.816 6.85547C105.529 6.85547 104.39 7.13679 103.445 7.65235C102.501 8.16319 101.746 8.90475 101.235 9.82286V7.66529C101.235 7.5829 101.201 7.50521 101.148 7.45342C101.097 7.39692 101.022 7.36632 100.94 7.36632H96.187C96.1046 7.36632 96.0317 7.40045 95.9787 7.45342C95.9269 7.50992 95.8916 7.5829 95.8916 7.66529V26.3642C95.8916 26.4466 95.9257 26.5243 95.9787 26.5808C96.0305 26.6373 96.1046 26.6715 96.187 26.6715H101.187C101.27 26.6715 101.343 26.6373 101.396 26.5808C101.447 26.5243 101.483 26.4513 101.483 26.3642V17.9376C101.483 16.0837 101.859 14.6747 102.604 13.726C103.35 12.7726 104.471 12.2794 105.953 12.2441C106.013 12.2441 106.07 12.2229 106.118 12.1876C106.166 12.1535 106.2 12.1052 106.222 12.0487L107.084 9.7134L107.946 7.37809C107.959 7.33925 107.967 7.29569 107.964 7.25214V7.2545Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M24.12 0.235667C22.192 0.235667 20.5759 1.58694 20.1686 3.39375L20.1592 3.4373C20.1545 3.4632 20.151 3.48909 20.1415 3.51499L16.515 20.7626C16.5197 14.1722 16.5232 4.42839 16.5232 4.42839C16.5232 2.26611 14.8894 0.376916 12.7319 0.24273C10.6873 0.113252 8.94524 1.50337 8.52032 3.39257L8.51208 3.43612C8.50737 3.46202 8.50384 3.48791 8.49442 3.51381L4.87728 20.7179V2.56156C4.87728 1.27502 3.83322 0.23449 2.55021 0.23449C1.26721 0.23449 0.223145 1.27384 0.223145 2.56156V26.6809H4.87611V26.6468C4.87611 26.6468 4.88434 26.6374 4.88434 26.6338C4.88434 26.6338 9.46786 4.96278 9.55025 4.50373C9.6762 3.81514 10.0964 3.34313 10.7108 3.34313C11.3735 3.34313 11.8714 3.8328 11.8714 4.50373V26.6597L16.5032 26.6774V26.6433H16.5244C16.5244 26.6433 21.1126 4.95454 21.195 4.5002C21.321 3.81161 21.7412 3.3396 22.3556 3.3396C23.0183 3.3396 23.5162 3.82926 23.5162 4.5002V26.6739H28.1692V4.29068C28.1692 2.05071 26.3541 0.235667 24.1142 0.235667H24.12Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M44.3148 0.235552C43.1141 0.235552 42.0666 1.05832 41.7841 2.22362L36.7674 21.7159C36.7674 21.7159 36.7591 21.703 36.7544 21.6983C36.7026 21.9278 36.6414 22.1797 36.5767 22.4481L36.2648 23.6651C36.1741 23.8476 36.0223 23.9818 35.8104 23.9818C35.5162 23.9818 35.2772 23.744 35.2772 23.4486V2.56144C35.2725 1.27491 34.2331 0.234375 32.9466 0.234375C31.6601 0.234375 30.6207 1.27373 30.6207 2.56144V23.5745C30.6207 25.3813 31.9849 26.9621 33.7882 27.0798C35.4738 27.1881 36.9157 26.0664 37.3065 24.5232L42.2667 5.36523V34.3847C42.2667 36.1397 41.0319 37.7123 39.2993 37.9724C37.1417 38.2926 35.2701 36.6117 35.2701 34.5154V30.6122C35.2701 29.3257 34.2308 28.2863 32.9431 28.2863C31.6554 28.2863 30.6172 29.3257 30.6172 30.6122V31.0842C30.6172 35.5689 34.2873 39.2343 38.766 39.2343C43.2448 39.2343 46.902 35.5771 46.9161 31.1066V2.83923C46.9243 1.40085 45.7543 0.235552 44.3159 0.235552H44.3148Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M51.1367 37.8601L52.0431 36.9855C52.408 37.3728 53.0271 37.8259 53.9452 37.8259C54.8633 37.8259 55.3824 37.3174 55.3824 36.7642C55.3824 35.1834 51.391 36.0897 51.391 33.2695C51.391 32.0536 52.4409 31.0684 54.0782 31.0684C55.2941 31.0684 56.1781 31.6439 56.5877 32.0971L55.6932 32.9811C55.3942 32.7045 54.841 32.3066 54.1229 32.3066C53.2484 32.3066 52.807 32.7598 52.807 33.2683C52.807 34.8491 56.7878 33.9428 56.7878 36.763C56.7878 38.0013 55.7273 39.0748 53.9911 39.0748C52.5645 39.0748 51.5911 38.4227 51.1367 37.8589V37.8601Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M62.7646 38.9426V31.2021H65.9392C67.4765 31.2021 68.5923 32.3192 68.5923 33.734C68.5923 35.1489 67.4753 36.2553 65.9392 36.2553H64.1477V38.9426H62.7646ZM64.1477 35.0064H65.918C66.6372 35.0064 67.2104 34.4426 67.2104 33.7352C67.2104 33.0278 66.636 32.4522 65.918 32.4522H64.1477V35.0064Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M74.4043 38.9426V31.2021H79.9671V32.4522H75.7862V34.332H79.082V35.5703H75.7862V37.6937H80.0778V38.9437H74.4043V38.9426Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M85.3691 35.0726C85.3691 32.8502 87.1489 31.0693 89.5054 31.0693C91.0862 31.0693 92.1703 31.8874 92.7223 32.5513L91.7712 33.3693C91.3298 32.8938 90.6648 32.33 89.5042 32.33C87.9658 32.33 86.7604 33.5459 86.7604 35.0726C86.7604 36.5992 87.9658 37.8151 89.5042 37.8151C90.6648 37.8151 91.3616 37.2513 91.8148 36.7416L92.7776 37.5609C92.202 38.2459 91.085 39.0758 89.5054 39.0758C87.1489 39.0758 85.3691 37.2949 85.3691 35.0726Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M98.5205 38.9426V31.2021H99.9036V38.9426H98.5205Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M105.507 38.9426L108.571 31.2021H110.096L113.149 38.9426H111.677L110.958 37.0404H107.663L106.934 38.9426H105.506H105.507ZM108.127 35.8245H110.494L109.322 32.717H109.3L108.127 35.8245Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M118.749 38.9426V31.2021H120.132V37.6713H123.826V38.9426H118.749Z",
                                fill: r
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3623_47336",
                                children: (0, l.jsx)("rect", {
                                    width: "177",
                                    height: "40",
                                    fill: "white"
                                })
                            })
                        })]
                    }) : t === i.Yn.Unique ? (0, l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "177",
                        height: "40",
                        viewBox: "0 0 177 40",
                        fill: "none",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3623_9065)",
                            children: [(0, l.jsx)("path", {
                                d: "M164.762 5.12356C164.801 5.14851 164.849 5.16098 164.896 5.16098H168.007C168.041 5.16098 168.071 5.15645 168.102 5.14397C168.132 5.1315 168.163 5.11449 168.184 5.09408L170.603 2.89063L173.022 0.687174C173.061 0.649751 173.087 0.603255 173.1 0.553357C173.113 0.503459 173.108 0.449025 173.087 0.399127C173.066 0.349229 173.035 0.307269 172.992 0.277784C172.948 0.248298 172.897 0.232422 172.845 0.232422H167.912C167.868 0.232422 167.825 0.244896 167.786 0.261907C167.747 0.278918 167.717 0.311805 167.691 0.345826L166.182 2.54928L164.675 4.75273C164.649 4.79469 164.632 4.84005 164.632 4.88655C164.632 4.93304 164.64 4.9784 164.662 5.02377C164.683 5.06573 164.719 5.09861 164.757 5.12356H164.762Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M173.966 9.27665C172.277 7.56991 169.853 6.60938 166.906 6.60938C163.96 6.60938 161.553 7.57331 159.868 9.27665C158.187 10.9834 157.236 13.4341 157.236 16.4143C157.236 19.3946 158.187 21.8237 159.868 23.5271C161.549 25.2259 163.968 26.1864 166.906 26.1864C169.845 26.1864 172.277 25.2259 173.966 23.5271C175.655 21.8283 176.606 19.3821 176.606 16.4143C176.606 13.4465 175.655 10.9834 173.966 9.27665ZM170.315 19.9083C169.732 21.0186 168.699 21.8748 166.902 21.8748C165.105 21.8748 164.097 21.0186 163.519 19.9083C162.94 18.7981 162.806 17.4327 162.806 16.4143C162.806 15.396 162.94 14.0136 163.519 12.8999C164.097 11.7818 165.122 10.921 166.902 10.921C168.681 10.921 169.732 11.7806 170.315 12.8999C170.899 14.0181 171.032 15.3914 171.032 16.4143C171.032 17.4372 170.899 18.7981 170.315 19.9083Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M154.543 0.230469H149.217C149.134 0.230469 149.06 0.263356 149.009 0.314388C148.957 0.368822 148.922 0.439133 148.922 0.518516V25.4006C148.922 25.48 148.956 25.5548 149.009 25.6093C149.06 25.6637 149.134 25.6966 149.217 25.6966H154.543C154.626 25.6966 154.698 25.6637 154.751 25.6093C154.803 25.5548 154.838 25.4845 154.838 25.4006V0.523053C154.838 0.443669 154.804 0.368822 154.751 0.318924C154.7 0.26449 154.626 0.235005 154.543 0.235005V0.230469Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M69.2547 11.8181C70.2478 11.2341 70.9873 10.5197 71.4803 9.668C71.9722 8.81633 72.2151 7.82744 72.2151 6.68773C72.2151 4.51263 71.5367 2.89774 70.1586 1.82947C68.784 0.761202 66.711 0.230469 63.9196 0.230469H52.1237C52.0416 0.230469 51.9676 0.263356 51.916 0.314388C51.8643 0.368822 51.8291 0.439133 51.8291 0.518516V25.4006C51.8291 25.48 51.8631 25.5548 51.916 25.6093C51.9676 25.6637 52.0416 25.6966 52.1237 25.6966H64.2694C66.3776 25.6966 68.6631 25.2044 70.4215 24.0228C72.1799 22.8377 73.4113 20.9631 73.4113 18.1915C73.4113 16.6299 73.0439 15.2861 72.3396 14.2099C71.6353 13.1325 70.5988 12.3228 69.2547 11.8181ZM57.9272 7.68569V5.06831H62.7927C63.9854 5.06831 64.8575 5.27244 65.4374 5.6943C66.0161 6.11617 66.2931 6.75917 66.2931 7.63579C66.2931 8.73808 65.8741 9.40603 65.2825 9.79841C64.6908 10.1908 63.922 10.3076 63.2177 10.3076H57.9295V7.68569H57.9272ZM66.3729 20.125C65.7461 20.6217 64.8 20.8644 63.5299 20.8644H57.926V14.6204H63.6332C64.8693 14.6204 65.7849 14.888 66.3941 15.4301C67.0033 15.9733 67.3061 16.7864 67.3061 17.8842C67.3061 18.8855 66.9951 19.6329 66.3683 20.1296L66.3729 20.125Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M92.8059 12.0214C92.8059 10.2262 92.1098 8.86984 90.7317 7.96828C89.3536 7.06217 87.2842 6.60742 84.5444 6.60742C82.0864 6.60742 80.0639 7.10413 78.5731 8.02611C77.087 8.95263 76.1362 10.3089 75.8205 12.0327C75.8122 12.0701 75.8158 12.1121 75.8205 12.1495C75.8299 12.1869 75.8463 12.2244 75.8686 12.2538C75.8897 12.2867 75.9202 12.3128 75.9508 12.3332C75.9848 12.3536 76.02 12.3661 76.0587 12.3752L78.5039 12.7755L80.949 13.1758C80.9877 13.1849 81.0311 13.1804 81.0699 13.1713C81.1086 13.1633 81.1438 13.1463 81.1779 13.1214C81.2084 13.0964 81.2389 13.0669 81.2553 13.0295C81.2729 12.9966 81.2858 12.9547 81.2894 12.9173C81.3715 12.0951 81.6486 11.4895 82.1451 11.0926C82.6416 10.6957 83.3506 10.504 84.2921 10.504C85.2335 10.504 85.9342 10.5913 86.439 10.9089C86.9437 11.2264 87.2255 11.7639 87.2255 12.6666C87.2595 13.33 86.8804 13.727 86.1667 13.9901C85.453 14.2532 84.4083 14.3915 83.1076 14.5367C81.3445 14.7374 79.3655 14.9585 77.8195 15.7637C76.2771 16.5689 75.1666 17.9592 75.1455 20.4927C75.1455 22.2493 75.7676 23.6737 76.8863 24.658C78.005 25.6435 79.626 26.1901 81.6216 26.1901C82.7837 26.1901 83.8249 26.0404 84.7581 25.7308C85.6913 25.4224 86.5118 24.9586 87.229 24.3371V24.4913C87.229 24.5957 87.2243 24.717 87.2208 24.8667V25.4088C87.2208 25.4882 87.2548 25.563 87.3076 25.6174C87.3593 25.6719 87.4332 25.7048 87.5154 25.7048H92.5101C92.5923 25.7048 92.6662 25.6719 92.7179 25.6174C92.7695 25.563 92.8047 25.4927 92.8047 25.4088V12.018L92.8059 12.0214ZM87.2325 17.7823V18.4333C87.2325 19.7317 86.9261 20.6957 86.3075 21.3341C85.6854 21.9726 84.7522 22.2901 83.4903 22.2901C82.5618 22.2901 81.8704 22.1268 81.4161 21.7934C80.9584 21.46 80.733 20.9588 80.733 20.2829C80.733 19.607 80.9267 19.1137 81.3633 18.7349C81.8 18.355 82.4785 18.0964 83.4375 17.9207C83.6277 17.8878 83.8225 17.8538 84.0162 17.8288C84.2111 17.7993 84.4094 17.7744 84.5996 17.7449C85.0926 17.678 85.5762 17.6111 86.0258 17.5192C86.4707 17.4274 86.8862 17.306 87.2313 17.1314V17.7823H87.2325Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M143.654 9.24635C142.842 8.3822 141.878 7.72332 140.786 7.27991C139.696 6.83763 138.482 6.60742 137.177 6.60742C134.408 6.60742 132.018 7.63827 130.321 9.37903C128.622 11.1198 127.616 13.5705 127.616 16.4124C127.616 19.2543 128.575 21.7764 130.251 23.4911C131.928 25.2024 134.318 26.1833 137.177 26.1833C139.243 26.1833 140.987 25.7286 142.401 24.8304C143.814 23.9334 144.889 22.585 145.629 20.7977C145.646 20.7558 145.655 20.7138 145.65 20.6685C145.65 20.6265 145.637 20.5811 145.611 20.5437C145.59 20.5063 145.559 20.4723 145.524 20.4473C145.489 20.4224 145.447 20.4054 145.403 20.3974L143.339 20.0595L141.274 19.7215C141.205 19.7091 141.14 19.7215 141.084 19.7544C141.027 19.7873 140.98 19.8383 140.955 19.9007C140.76 20.3849 140.298 20.8771 139.667 21.2491C139.036 21.6211 138.237 21.8705 137.36 21.8705C136.051 21.8705 135.065 21.553 134.383 20.8975C133.7 20.2421 133.316 19.2441 133.212 17.8878H145.201C145.513 17.8878 145.793 17.763 145.996 17.5623C146.199 17.3616 146.325 17.0826 146.325 16.773V16.714C146.33 15.2409 146.096 13.8336 145.646 12.5646C145.197 11.2956 144.528 10.1649 143.663 9.24635L143.654 9.24181V9.24635ZM136.936 14.167H133.225C133.302 13.6408 133.51 12.8265 134.071 12.1461C134.632 11.4657 135.549 10.9191 137.04 10.9191C138.063 10.9191 138.842 11.1572 139.425 11.6789C140.008 12.2051 140.397 13.0148 140.648 14.167H136.936Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M125.704 19.1526C125.683 19.1197 125.652 19.0902 125.617 19.0686C125.583 19.0482 125.548 19.0312 125.504 19.0267L123.167 18.6422L120.83 18.2578C120.791 18.2499 120.753 18.2533 120.714 18.2623C120.675 18.2714 120.64 18.2873 120.611 18.3122C120.58 18.3372 120.55 18.3621 120.533 18.3961C120.515 18.429 120.499 18.4676 120.494 18.505C120.382 19.2728 120.119 20.112 119.556 20.7629C118.994 21.4104 118.135 21.8686 116.826 21.8686C115.409 21.8686 114.446 21.1712 113.836 20.1528C113.227 19.1299 112.977 17.786 112.977 16.4841C112.977 16.0203 113.024 14.6311 113.543 13.353C114.062 12.0795 115.05 10.9194 116.931 10.9194C117.924 10.9194 118.697 11.153 119.259 11.6248C119.821 12.0965 120.175 12.8064 120.322 13.7624C120.326 13.7999 120.343 13.8373 120.361 13.8713C120.382 13.9042 120.409 13.9337 120.438 13.9552C120.469 13.9802 120.507 13.9926 120.541 14.0017C120.58 14.0097 120.619 14.0097 120.658 14.0017L123.056 13.6093L125.454 13.217C125.536 13.2045 125.601 13.158 125.644 13.1001C125.687 13.0378 125.709 12.9629 125.696 12.8835C125.385 10.9761 124.369 9.40656 122.848 8.31221C121.327 7.21899 119.301 6.60547 116.963 6.60547C114.061 6.60547 111.666 7.59095 110.003 9.33965C108.339 11.0884 107.401 13.6014 107.401 16.6531C107.401 19.4576 108.373 21.8414 110.041 23.5198C111.709 25.2016 114.072 26.1791 116.859 26.1791C119.218 26.1791 121.21 25.5576 122.722 24.3964C124.234 23.2363 125.28 21.5329 125.743 19.3703C125.751 19.3329 125.751 19.2909 125.743 19.2535C125.733 19.2161 125.721 19.1786 125.694 19.1446L125.704 19.1537V19.1526Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M107.911 6.99186C107.911 6.9499 107.898 6.91248 107.877 6.87506C107.856 6.83763 107.829 6.80815 107.799 6.77866C107.769 6.75371 107.73 6.7367 107.687 6.72423C107.527 6.68227 107.367 6.65278 107.216 6.63691C107.065 6.61649 106.913 6.60742 106.766 6.60742C105.483 6.60742 104.347 6.87846 103.405 7.37517C102.463 7.86735 101.711 8.5818 101.201 9.46635V7.38765C101.201 7.30826 101.167 7.23342 101.114 7.18352C101.063 7.12908 100.989 7.0996 100.907 7.0996H96.1667C96.0845 7.0996 96.0118 7.13249 95.9589 7.18352C95.9073 7.23795 95.8721 7.30826 95.8721 7.38765V25.4031C95.8721 25.4825 95.9061 25.5573 95.9589 25.6118C96.0106 25.6662 96.0845 25.6991 96.1667 25.6991H101.153C101.235 25.6991 101.308 25.6662 101.361 25.6118C101.413 25.5573 101.448 25.487 101.448 25.4031V17.2845C101.448 15.4983 101.823 14.1409 102.566 13.2268C103.31 12.3083 104.428 11.8331 105.906 11.7991C105.966 11.7991 106.022 11.7787 106.07 11.7446C106.118 11.7118 106.153 11.6653 106.174 11.6108L107.034 9.36089L107.893 7.11094C107.906 7.07351 107.914 7.03156 107.911 6.9896V6.99186Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M24.298 0.229761C22.3753 0.229761 20.7636 1.53165 20.3575 3.27241L20.3481 3.31437C20.3434 3.33931 20.3399 3.36426 20.3305 3.38921L16.7139 20.0064C16.7186 13.6569 16.7221 4.26923 16.7221 4.26923C16.7221 2.18599 15.0928 0.365846 12.9412 0.236565C10.9022 0.11182 9.16494 1.45113 8.74118 3.27127L8.73296 3.31323C8.72827 3.33818 8.72475 3.36313 8.71536 3.38808L5.10815 19.9633V2.47177C5.10815 1.23226 4.06696 0.229761 2.78747 0.229761C1.50799 0.229761 0.466797 1.23112 0.466797 2.47177V25.7095H5.10698V25.6766C5.10698 25.6766 5.11519 25.6675 5.11519 25.6641C5.11519 25.6641 9.68612 4.78522 9.76829 4.34295C9.89389 3.67953 10.3129 3.22478 10.9257 3.22478C11.5866 3.22478 12.0831 3.69654 12.0831 4.34295V25.6891L16.7021 25.7061V25.6732H16.7233C16.7233 25.6732 21.2989 4.77728 21.3811 4.33954C21.5067 3.67613 21.9257 3.22137 22.5385 3.22137C23.1993 3.22137 23.6959 3.69314 23.6959 4.33954V25.7027H28.3361V4.13768C28.3361 1.97959 26.526 0.230895 24.2922 0.230895L24.298 0.229761Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M44.4363 0.230469C43.239 0.230469 42.1943 1.02317 41.9126 2.14587L36.9097 20.9257C36.9097 20.9257 36.9015 20.9132 36.8968 20.9087C36.8451 21.1298 36.7841 21.3725 36.7195 21.631L36.4084 22.8037C36.3181 22.9794 36.1666 23.1087 35.9553 23.1087C35.6619 23.1087 35.4236 22.8796 35.4236 22.595V2.47248C35.4189 1.23297 34.3824 0.230469 33.0994 0.230469C31.8164 0.230469 30.7799 1.23183 30.7799 2.47248V22.7175C30.7799 24.4582 32.1404 25.9812 33.9387 26.0947C35.6196 26.199 37.0576 25.1182 37.4473 23.6315L42.3938 5.17377V33.1325C42.3938 34.8234 41.1625 36.3385 39.4346 36.5891C37.2829 36.8976 35.4165 35.2782 35.4165 33.2584V29.4979C35.4165 28.2584 34.38 27.2571 33.0959 27.2571C31.8117 27.2571 30.7764 28.2584 30.7764 29.4979V29.9527C30.7764 34.2734 34.4364 37.8048 38.9028 37.8048C43.3693 37.8048 47.0164 34.2813 47.0305 29.9742V2.73898C47.0387 1.35317 45.8719 0.230469 44.4375 0.230469H44.4363Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M51.7373 34.5179V30.0645H53.1166V34.5179C53.1166 35.6258 53.9547 36.4355 55.0464 36.4355C56.138 36.4355 56.9761 35.5827 56.9761 34.5179V30.0645H58.3554V34.5179C58.3554 36.3505 57.0102 37.6501 55.0464 37.6501C53.0825 37.6501 51.7373 36.3505 51.7373 34.5179Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M64.7324 37.5239V30.0664H65.9685L70.0159 35.266H70.0487V30.0664H71.428V37.5239H70.1826L66.1457 32.3243H66.1023V37.5239H64.7348H64.7324Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M77.917 37.5239V30.0664H79.2951V37.5239H77.917Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M93.7266 38.0354V39.1763C93.6385 39.1978 93.4284 39.2296 93.1972 39.2296C91.609 39.2296 90.495 38.3132 90.0982 37.6101C89.867 37.6419 89.6686 37.6532 89.4374 37.6532C87.0873 37.6532 85.3125 35.9374 85.3125 33.7963C85.3125 31.6553 87.0873 29.9395 89.4374 29.9395C91.7874 29.9395 93.5622 31.6541 93.5622 33.7963C93.5622 35.2672 92.7124 36.5555 91.4 37.1951C91.6547 37.5897 92.3156 38.0898 93.2418 38.0898C93.4507 38.0898 93.6385 38.0581 93.7277 38.0365L93.7266 38.0354ZM92.1724 33.7952C92.1724 32.3255 90.9598 31.1529 89.4374 31.1529C87.9149 31.1529 86.7012 32.3244 86.7012 33.7952C86.7012 35.2661 87.9149 36.4375 89.4374 36.4375C90.9598 36.4375 92.1724 35.2661 92.1724 33.7952Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M99.4531 34.5179V30.0645H100.832V34.5179C100.832 35.6258 101.671 36.4355 102.762 36.4355C103.854 36.4355 104.692 35.5827 104.692 34.5179V30.0645H106.071V34.5179C106.071 36.3505 104.726 37.6501 102.762 37.6501C100.798 37.6501 99.4531 36.3505 99.4531 34.5179Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M112.451 37.5239V30.0664H117.999V31.2708H113.829V33.0818H117.116V34.2748H113.829V36.3207H118.109V37.525H112.452L112.451 37.5239Z",
                                fill: r
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3623_9065",
                                children: (0, l.jsx)("rect", {
                                    width: "177",
                                    height: "40",
                                    fill: "white"
                                })
                            })
                        })]
                    }) : (0, l.jsxs)("svg", {
                        width: "177",
                        height: "40",
                        viewBox: "0 0 177 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_86_1559)",
                            children: [(0, l.jsx)("path", {
                                d: "M165.072 5.31372C165.111 5.33962 165.159 5.35257 165.206 5.35257H168.325C168.36 5.35257 168.39 5.34786 168.421 5.33491C168.451 5.32196 168.482 5.30431 168.503 5.28312L170.929 2.99606L173.355 0.709008C173.394 0.670165 173.42 0.621905 173.433 0.570113C173.446 0.518322 173.441 0.461823 173.42 0.410031C173.399 0.35824 173.368 0.314688 173.324 0.284084C173.281 0.25348 173.229 0.237001 173.177 0.237001H168.23C168.186 0.237001 168.143 0.249949 168.104 0.267605C168.065 0.285261 168.035 0.319397 168.009 0.354709L166.496 2.64176L164.985 4.92882C164.959 4.97237 164.941 5.01945 164.941 5.06771C164.941 5.11597 164.95 5.16306 164.972 5.21014C164.993 5.25369 165.028 5.28783 165.067 5.31372H165.072Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M174.3 9.62413C172.606 7.85263 170.175 6.85565 167.221 6.85565C164.267 6.85565 161.852 7.85616 160.163 9.62413C158.478 11.3956 157.524 13.9393 157.524 17.0326C157.524 20.126 158.478 22.6473 160.163 24.4152C161.849 26.1785 164.275 27.1755 167.221 27.1755C170.167 27.1755 172.606 26.1785 174.3 24.4152C175.994 22.652 176.947 20.113 176.947 17.0326C176.947 13.9522 175.994 11.3956 174.3 9.62413ZM170.639 20.6592C170.054 21.8116 169.018 22.7002 167.216 22.7002C165.414 22.7002 164.404 21.8116 163.824 20.6592C163.244 19.5068 163.11 18.0896 163.11 17.0326C163.11 15.9756 163.244 14.5408 163.824 13.3849C164.404 12.2243 165.432 11.3309 167.216 11.3309C169.001 11.3309 170.054 12.2231 170.639 13.3849C171.224 14.5455 171.358 15.9709 171.358 17.0326C171.358 18.0944 171.224 19.5068 170.639 20.6592Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M154.825 0.235737H149.484C149.401 0.235737 149.327 0.269872 149.275 0.322841C149.224 0.37934 149.188 0.452319 149.188 0.534714V26.3609C149.188 26.4433 149.222 26.521 149.275 26.5775C149.327 26.634 149.401 26.6681 149.484 26.6681H154.825C154.908 26.6681 154.981 26.634 155.034 26.5775C155.086 26.521 155.121 26.448 155.121 26.3609V0.538245C155.121 0.45585 155.087 0.378163 155.034 0.326372C154.982 0.269872 154.908 0.239268 154.825 0.239268V0.23456V0.235737Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M69.2997 12.2631C70.2955 11.6569 71.0371 10.9154 71.5314 10.0314C72.0246 9.14741 72.2683 8.121 72.2683 6.93804C72.2683 4.68041 71.5879 3.00426 70.2061 1.89546C68.8277 0.786651 66.749 0.235781 63.9499 0.235781H52.1215C52.0391 0.235781 51.9649 0.269916 51.9132 0.322884C51.8614 0.379384 51.826 0.452362 51.826 0.534758V26.3609C51.826 26.4433 51.8602 26.521 51.9132 26.5775C51.9649 26.634 52.0391 26.6682 52.1215 26.6682H64.3007C66.4147 26.6682 68.7065 26.1573 70.4697 24.9308C72.233 23.7008 73.4677 21.7551 73.4677 18.8783C73.4677 17.2575 73.0993 15.8626 72.3931 14.7456C71.6868 13.6274 70.6475 12.7869 69.2997 12.2631ZM57.9409 7.97387V5.25718H62.8199C64.0158 5.25718 64.8904 5.46905 65.4719 5.90692C66.0522 6.3448 66.33 7.0122 66.33 7.92207C66.33 9.06619 65.9097 9.75949 65.3165 10.1668C64.7233 10.574 63.9523 10.6953 63.246 10.6953H57.9433V7.97387H57.9409ZM66.41 20.884C65.7814 21.3996 64.8327 21.6515 63.5591 21.6515H57.9398V15.1705H63.6627C64.9022 15.1705 65.8203 15.4483 66.4312 16.0109C67.0421 16.5747 67.3458 17.4187 67.3458 18.5581C67.3458 19.5975 67.0338 20.3732 66.4053 20.8887L66.41 20.884Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M92.9179 12.475C92.9179 10.6117 92.2199 9.20392 90.838 8.26814C89.4562 7.32766 87.381 6.85565 84.6337 6.85565C82.1689 6.85565 80.1408 7.37121 78.6459 8.32817C77.1557 9.28984 76.2023 10.6976 75.8857 12.4868C75.8774 12.5256 75.881 12.5692 75.8857 12.608C75.8951 12.6469 75.9116 12.6857 75.9339 12.7163C75.9551 12.7504 75.9857 12.7775 76.0163 12.7987C76.0505 12.8199 76.0858 12.8328 76.1246 12.8423L78.5765 13.2578L81.0283 13.6733C81.0672 13.6827 81.1107 13.678 81.1496 13.6686C81.1884 13.6603 81.2237 13.6427 81.2578 13.6168C81.2884 13.5909 81.3191 13.5603 81.3355 13.5214C81.3532 13.4873 81.3661 13.4437 81.3697 13.4049C81.4521 12.5515 81.7299 11.923 82.2278 11.511C82.7257 11.099 83.4366 10.9001 84.3806 10.9001C85.3246 10.9001 86.0273 10.9907 86.5335 11.3203C87.0396 11.6499 87.3221 12.2078 87.3221 13.1448C87.3563 13.8333 86.9761 14.2453 86.2604 14.5184C85.5447 14.7915 84.4971 14.9351 83.193 15.0858C81.425 15.2941 79.4404 15.5236 77.8902 16.3593C76.3436 17.1951 75.23 18.6382 75.2089 21.2677C75.2089 23.091 75.8327 24.5694 76.9545 25.5911C78.0762 26.614 79.7018 27.1814 81.7028 27.1814C82.8681 27.1814 83.9121 27.026 84.8479 26.7047C85.7837 26.3845 86.6065 25.9031 87.3257 25.258V25.4181C87.3257 25.5264 87.321 25.6524 87.3174 25.8077V26.3704C87.3174 26.4528 87.3516 26.5304 87.4045 26.5869C87.4563 26.6434 87.5305 26.6776 87.6129 26.6776H92.6213C92.7037 26.6776 92.7779 26.6434 92.8297 26.5869C92.8814 26.5304 92.9168 26.4575 92.9168 26.3704V12.4715L92.9179 12.475ZM87.3292 18.4545V19.1302C87.3292 20.4779 87.022 21.4784 86.4017 22.1411C85.7778 22.8038 84.842 23.1334 83.5767 23.1334C82.6456 23.1334 81.9523 22.9639 81.4968 22.6179C81.0377 22.2718 80.8117 21.7515 80.8117 21.05C80.8117 20.3485 81.0059 19.8364 81.4438 19.4433C81.8817 19.049 82.562 18.7806 83.5237 18.5981C83.7144 18.564 83.9098 18.5287 84.104 18.5028C84.2994 18.4722 84.4983 18.4463 84.689 18.4157C85.1834 18.3463 85.6683 18.2768 86.1192 18.1815C86.5653 18.0861 86.982 17.9602 87.328 17.7789V18.4545H87.3292Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M143.906 9.59373C143.092 8.6968 142.126 8.01292 141.03 7.55268C139.937 7.09362 138.72 6.85468 137.411 6.85468C134.635 6.85468 132.238 7.92464 130.536 9.73145C128.833 11.5383 127.824 14.0819 127.824 17.0317C127.824 19.9814 128.786 22.5992 130.467 24.379C132.147 26.1552 134.544 27.1733 137.411 27.1733C139.483 27.1733 141.232 26.7013 142.649 25.7691C144.067 24.838 145.145 23.4385 145.886 21.5834C145.904 21.5399 145.912 21.4963 145.907 21.4492C145.907 21.4057 145.895 21.3586 145.869 21.3197C145.847 21.2809 145.817 21.2456 145.782 21.2197C145.746 21.1938 145.704 21.1761 145.66 21.1679L143.59 20.8171L141.519 20.4664C141.45 20.4534 141.385 20.4664 141.329 20.5005C141.272 20.5346 141.225 20.5876 141.199 20.6523C141.004 21.155 140.541 21.6658 139.908 22.0519C139.276 22.438 138.474 22.6969 137.595 22.6969C136.283 22.6969 135.294 22.3673 134.61 21.687C133.925 21.0066 133.54 19.9708 133.435 18.563H145.458C145.77 18.563 146.051 18.4336 146.255 18.2252C146.458 18.0169 146.584 17.7273 146.584 17.406V17.3448C146.589 15.8157 146.355 14.355 145.904 13.0378C145.453 11.7207 144.782 10.5472 143.915 9.59373L143.906 9.58902V9.59373ZM137.17 14.7022H133.448C133.526 14.1561 133.734 13.3109 134.297 12.6047C134.859 11.8984 135.779 11.3311 137.274 11.3311C138.3 11.3311 139.08 11.5783 139.665 12.1197C140.25 12.6659 140.64 13.5063 140.892 14.7022H137.17Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M125.906 19.8754C125.884 19.8412 125.854 19.8106 125.818 19.7883C125.784 19.7671 125.749 19.7494 125.705 19.7447L123.362 19.3457L121.018 18.9467C120.98 18.9384 120.941 18.942 120.902 18.9514C120.863 18.9608 120.828 18.9773 120.798 19.0032C120.768 19.0291 120.737 19.055 120.721 19.0903C120.703 19.1244 120.686 19.1644 120.682 19.2033C120.569 20.0002 120.305 20.8712 119.741 21.5468C119.177 22.2189 118.316 22.6945 117.003 22.6945C115.583 22.6945 114.616 21.9706 114.005 20.9136C113.394 19.8518 113.144 18.457 113.144 17.1057C113.144 16.6243 113.191 15.1824 113.711 13.8558C114.231 12.534 115.222 11.3298 117.108 11.3298C118.104 11.3298 118.88 11.5723 119.443 12.062C120.006 12.5516 120.362 13.2885 120.509 14.2807C120.513 14.3196 120.53 14.3584 120.548 14.3937C120.569 14.4279 120.596 14.4585 120.625 14.4809C120.656 14.5067 120.695 14.5197 120.729 14.5291C120.768 14.5374 120.806 14.5374 120.845 14.5291L123.25 14.1218L125.655 13.7146C125.737 13.7016 125.802 13.6534 125.846 13.5933C125.889 13.5286 125.91 13.4509 125.897 13.3685C125.585 11.3887 124.567 9.75961 123.042 8.62373C121.516 7.48903 119.485 6.85223 117.141 6.85223C114.23 6.85223 111.829 7.87511 110.161 9.69016C108.493 11.5052 107.553 14.1136 107.553 17.2811C107.553 20.192 108.527 22.6662 110.2 24.4083C111.872 26.1539 114.242 27.1685 117.036 27.1685C119.402 27.1685 121.4 26.5235 122.916 25.3182C124.432 24.114 125.481 22.3461 125.944 20.1014C125.953 20.0625 125.953 20.019 125.944 19.9801C125.935 19.9413 125.923 19.9025 125.896 19.8671L125.906 19.8766V19.8754Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M108.064 7.25468C108.064 7.21113 108.051 7.17228 108.03 7.13344C108.009 7.0946 107.982 7.06399 107.952 7.03339C107.922 7.00749 107.883 6.98984 107.839 6.97689C107.679 6.93334 107.519 6.90274 107.367 6.88626C107.215 6.86507 107.064 6.85565 106.916 6.85565C105.63 6.85565 104.491 7.13697 103.545 7.65253C102.601 8.16338 101.847 8.90494 101.336 9.82306V7.66548C101.336 7.58308 101.302 7.5054 101.249 7.45361C101.197 7.39711 101.123 7.3665 101.041 7.3665H96.2875C96.2051 7.3665 96.1321 7.40064 96.0792 7.45361C96.0274 7.51011 95.9921 7.58308 95.9921 7.66548V26.3645C95.9921 26.4469 96.0262 26.5246 96.0792 26.5811C96.131 26.6376 96.2051 26.6717 96.2875 26.6717H101.288C101.37 26.6717 101.443 26.6376 101.496 26.5811C101.548 26.5246 101.583 26.4516 101.583 26.3645V17.9378C101.583 16.0839 101.96 14.675 102.705 13.7262C103.45 12.7728 104.572 12.2796 106.054 12.2443C106.114 12.2443 106.17 12.2231 106.218 12.1878C106.267 12.1537 106.301 12.1054 106.322 12.0489L107.185 9.71359L108.046 7.37827C108.059 7.33943 108.068 7.29588 108.064 7.25233V7.25468Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M24.2201 0.235852C22.292 0.235852 20.6759 1.58713 20.2686 3.39394L20.2592 3.43749C20.2545 3.46339 20.251 3.48929 20.2416 3.51518L16.615 20.7629C16.6197 14.1724 16.6232 4.42859 16.6232 4.42859C16.6232 2.26631 14.9895 0.377101 12.8319 0.242915C10.7873 0.113437 9.04524 1.50356 8.62032 3.39277L8.61208 3.43632C8.60737 3.46221 8.60384 3.48811 8.59442 3.514L4.97727 20.7181V2.56175C4.97727 1.27521 3.93321 0.234675 2.6502 0.234675C1.36719 0.234675 0.32312 1.27403 0.32312 2.56175V26.6812H4.97609V26.647C4.97609 26.647 4.98433 26.6376 4.98433 26.6341C4.98433 26.6341 9.56786 4.96298 9.65026 4.50392C9.7762 3.81534 10.1964 3.34333 10.8109 3.34333C11.4735 3.34333 11.9714 3.83299 11.9714 4.50392V26.66L16.6032 26.6777V26.6435H16.6244C16.6244 26.6435 21.2127 4.95474 21.2951 4.50039C21.421 3.8118 21.8412 3.3398 22.4556 3.3398C23.1183 3.3398 23.6162 3.82946 23.6162 4.50039V26.6741H28.2692V4.29087C28.2692 2.0509 26.4542 0.235852 24.2142 0.235852H24.2201Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M44.4153 0.235737C43.2146 0.235737 42.1671 1.05851 41.8846 2.22382L36.8679 21.7162C36.8679 21.7162 36.8596 21.7032 36.8549 21.6985C36.8031 21.928 36.7419 22.1799 36.6772 22.4483L36.3653 23.6654C36.2746 23.8478 36.1228 23.982 35.9109 23.982C35.6166 23.982 35.3777 23.7443 35.3777 23.4488V2.56164C35.373 1.27509 34.3336 0.23456 33.0471 0.23456C31.7605 0.23456 30.7212 1.27392 30.7212 2.56164V23.5748C30.7212 25.3816 32.0854 26.9624 33.8887 27.0801C35.5743 27.1884 37.0162 26.0666 37.407 24.5235L42.3672 5.36543V34.385C42.3672 36.14 41.1324 37.7126 39.3997 37.9727C37.2422 38.2929 35.3706 36.612 35.3706 34.5157V30.6125C35.3706 29.3259 34.3313 28.2866 33.0435 28.2866C31.7558 28.2866 30.7177 29.3259 30.7177 30.6125V31.0845C30.7177 35.5692 34.3878 39.2346 38.8665 39.2346C43.3453 39.2346 47.0025 35.5774 47.0166 31.1069V2.83943C47.0248 1.40104 45.8548 0.235737 44.4164 0.235737H44.4153Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M51.8456 38.9428V31.2023H55.0202C56.468 31.2023 57.4096 32.1416 57.4096 33.2481C57.4096 34.0226 56.9447 34.5758 56.4256 34.7959C56.9894 35.0055 57.7957 35.6587 57.7957 36.6981C57.7957 37.9034 56.7563 38.9428 55.2085 38.9428H51.8456ZM53.2286 34.3216H54.9872C55.6063 34.3216 56.016 33.912 56.016 33.3481C56.016 32.7843 55.6063 32.3641 54.9872 32.3641H53.2286V34.3216ZM53.2286 37.7822H55.1743C55.8935 37.7822 56.4032 37.2631 56.4032 36.5992C56.4032 35.9353 55.8947 35.4268 55.1743 35.4268H53.2286V37.7822Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M63.8163 38.9428V31.2023H69.3791V32.4524H65.1982V34.3322H68.494V35.5705H65.1982V37.6939H69.4898V38.9439H63.8175L63.8163 38.9428Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M75.4882 38.9428V31.2023H76.7276L80.7862 36.5992H80.8191V31.2023H82.2022V38.9428H80.9533L76.9054 33.5459H76.8618V38.9428H75.4905H75.4882Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M88.7089 38.9428V31.2023H94.2717V32.4524H90.0908V34.3322H93.3866V35.5705H90.0908V37.6939H94.3824V38.9439H88.71L88.7089 38.9428Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M100.38 38.9428V31.2023H105.886V32.5183H101.762V34.5641H105.002V35.8577H101.762V38.9428H100.38Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M111.664 38.9428V31.2023H113.047V38.9428H111.664Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M121.018 38.9428V32.4736H118.728V31.2023H124.689V32.4736H122.401V38.9428H121.018Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M129.748 37.8598L130.654 36.9852C131.019 37.3725 131.638 37.8256 132.556 37.8256C133.475 37.8256 133.994 37.3171 133.994 36.7639C133.994 35.1831 130.002 36.0895 130.002 33.2692C130.002 32.0533 131.052 31.0681 132.689 31.0681C133.905 31.0681 134.789 31.6436 135.199 32.0968L134.304 32.9808C134.005 32.7042 133.452 32.3063 132.734 32.3063C131.86 32.3063 131.418 32.7595 131.418 33.268C131.418 34.8488 135.399 33.9425 135.399 36.7627C135.399 38.001 134.339 39.0745 132.602 39.0745C131.176 39.0745 130.202 38.4224 129.748 37.8586V37.8598Z",
                                fill: r
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_86_1559",
                                children: (0, l.jsx)("rect", {
                                    width: "177",
                                    height: "40",
                                    fill: "white",
                                    transform: "translate(0.0999756)"
                                })
                            })
                        })]
                    }) : t === i.Yn.Essential ? (0, l.jsxs)("svg", {
                        width: "107",
                        height: "24",
                        viewBox: "0 0 107 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-label": "my Barcel\xf3 essential",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_50156)",
                            children: [(0, l.jsx)("path", {
                                d: "M99.3831 3.1886C99.4064 3.20414 99.4353 3.21191 99.4636 3.21191H101.335C101.356 3.21191 101.374 3.20908 101.392 3.20131C101.411 3.19355 101.429 3.18295 101.442 3.17024L102.897 1.79801L104.353 0.425781C104.376 0.402475 104.392 0.373519 104.4 0.342445C104.407 0.31137 104.404 0.27747 104.392 0.246396C104.379 0.215321 104.361 0.18919 104.335 0.170828C104.308 0.152465 104.277 0.142578 104.246 0.142578H101.278C101.252 0.142578 101.226 0.150347 101.202 0.16094C101.179 0.171534 101.161 0.192015 101.145 0.213202L100.238 1.58543L99.3308 2.95766C99.3153 2.98379 99.3047 3.01204 99.3047 3.041C99.3047 3.06995 99.3096 3.0982 99.3231 3.12645C99.3358 3.15258 99.3569 3.17306 99.3803 3.1886H99.3831Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M104.92 5.77436C103.904 4.71147 102.445 4.11328 100.673 4.11328C98.8998 4.11328 97.4513 4.71359 96.4379 5.77436C95.4265 6.83726 94.8545 8.36345 94.8545 10.2195C94.8545 12.0755 95.4265 13.5882 96.4379 14.649C97.4492 15.707 98.9048 16.3051 100.673 16.3051C102.44 16.3051 103.904 15.707 104.92 14.649C105.936 13.5911 106.508 12.0677 106.508 10.2195C106.508 8.37122 105.936 6.83726 104.92 5.77436ZM102.723 12.3954C102.372 13.0868 101.751 13.62 100.67 13.62C99.5884 13.62 98.9825 13.0868 98.6343 12.3954C98.2861 11.704 98.2056 10.8537 98.2056 10.2195C98.2056 9.58525 98.2861 8.72434 98.6343 8.03081C98.9825 7.33445 99.599 6.79841 100.67 6.79841C101.74 6.79841 102.372 7.33375 102.723 8.03081C103.074 8.72716 103.155 9.58242 103.155 10.2195C103.155 10.8565 103.074 11.704 102.723 12.3954Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M93.2352 0.141331H90.0303C89.9809 0.141331 89.9364 0.161812 89.9053 0.193593C89.8742 0.227493 89.853 0.27128 89.853 0.320717V15.8164C89.853 15.8658 89.8735 15.9124 89.9053 15.9463C89.9364 15.9802 89.9809 16.0007 90.0303 16.0007H93.2352C93.2847 16.0007 93.3284 15.9802 93.3602 15.9463C93.3913 15.9124 93.4125 15.8686 93.4125 15.8164V0.322836C93.4125 0.273399 93.392 0.226787 93.3602 0.195712C93.3292 0.161812 93.2847 0.14345 93.2352 0.14345V0.140625V0.141331Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M41.9202 7.35799C42.5177 6.99427 42.9626 6.54934 43.2592 6.01895C43.5552 5.48856 43.7013 4.87272 43.7013 4.16295C43.7013 2.80837 43.2931 1.80268 42.464 1.1374C41.637 0.472123 40.3898 0.141602 38.7103 0.141602H31.6133C31.5639 0.141602 31.5194 0.162083 31.4883 0.193863C31.4572 0.227763 31.436 0.27155 31.436 0.320987V15.8167C31.436 15.8661 31.4565 15.9127 31.4883 15.9466C31.5194 15.9805 31.5639 16.001 31.6133 16.001H38.9208C40.1892 16.001 41.5643 15.6945 42.6222 14.9586C43.6802 14.2205 44.421 13.0531 44.421 11.3271C44.421 10.3546 44.2 9.51768 43.7762 8.84745C43.3525 8.17652 42.7289 7.67226 41.9202 7.35799ZM35.105 4.78444V3.15443H38.0323C38.7499 3.15443 39.2746 3.28156 39.6235 3.54428C39.9717 3.807 40.1384 4.20744 40.1384 4.75336C40.1384 5.43983 39.8862 5.85581 39.5303 6.10017C39.1743 6.34453 38.7117 6.41727 38.288 6.41727H35.1064V4.78444H35.105ZM40.1864 12.5305C39.8092 12.8398 39.24 12.991 38.4759 12.991H35.1043V9.10241H38.538C39.2817 9.10241 39.8326 9.26908 40.1991 9.60666C40.5656 9.94495 40.7478 10.4513 40.7478 11.135C40.7478 11.7586 40.5607 12.224 40.1836 12.5333L40.1864 12.5305Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M56.09 7.48488C56.09 6.3669 55.6712 5.52223 54.8421 4.96077C54.013 4.39648 52.7679 4.11328 51.1195 4.11328C49.6406 4.11328 48.4238 4.42262 47.5268 4.99679C46.6327 5.57379 46.0607 6.41846 45.8707 7.49195C45.8657 7.51525 45.8679 7.54138 45.8707 7.56469C45.8763 7.58799 45.8862 7.6113 45.8996 7.62966C45.9124 7.65014 45.9307 7.66639 45.9491 7.6791C45.9696 7.69181 45.9907 7.69958 46.0141 7.70523L47.4852 7.95453L48.9563 8.20384C48.9796 8.20949 49.0057 8.20666 49.029 8.20101C49.0523 8.19607 49.0735 8.18547 49.094 8.16994C49.1123 8.1544 49.1307 8.13604 49.1406 8.11273C49.1512 8.09225 49.159 8.06612 49.1611 8.04281C49.2105 7.53079 49.3772 7.15366 49.6759 6.90647C49.9747 6.65929 50.4012 6.53993 50.9676 6.53993C51.534 6.53993 51.9557 6.59431 52.2594 6.79206C52.563 6.98981 52.7325 7.32457 52.7325 7.88673C52.753 8.29989 52.5249 8.54707 52.0955 8.71092C51.6661 8.87477 51.0376 8.96093 50.255 9.05133C49.1943 9.17633 48.0035 9.31405 47.0734 9.81548C46.1454 10.3169 45.4773 11.1828 45.4646 12.7605C45.4646 13.8545 45.8389 14.7415 46.512 15.3545C47.185 15.9683 48.1603 16.3087 49.3609 16.3087C50.0601 16.3087 50.6866 16.2155 51.248 16.0226C51.8095 15.8306 52.3031 15.5417 52.7347 15.1547V15.2507C52.7347 15.3157 52.7318 15.3913 52.7297 15.4845V15.8221C52.7297 15.8715 52.7502 15.9181 52.782 15.952C52.8131 15.9859 52.8575 16.0064 52.907 16.0064H55.912C55.9615 16.0064 56.006 15.9859 56.037 15.952C56.0681 15.9181 56.0893 15.8743 56.0893 15.8221V7.48276L56.09 7.48488ZM52.7368 11.0726V11.478C52.7368 12.2866 52.5524 12.8869 52.1803 13.2845C51.8059 13.6822 51.2445 13.8799 50.4853 13.8799C49.9266 13.8799 49.5107 13.7782 49.2373 13.5706C48.9619 13.3629 48.8263 13.0508 48.8263 12.6299C48.8263 12.2089 48.9428 11.9017 49.2056 11.6658C49.4683 11.4292 49.8765 11.2682 50.4535 11.1588C50.5679 11.1383 50.6851 11.1171 50.8017 11.1016C50.9189 11.0832 51.0383 11.0677 51.1527 11.0493C51.4493 11.0076 51.7403 10.966 52.0108 10.9087C52.2784 10.8515 52.5284 10.776 52.7361 10.6672V11.0726H52.7368Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M86.6838 5.75573C86.1951 5.21757 85.6153 4.80725 84.9578 4.53111C84.3024 4.25567 83.5721 4.1123 82.7868 4.1123C81.1207 4.1123 79.6828 4.75428 78.6616 5.83836C77.6397 6.92244 77.0344 8.44863 77.0344 10.2185C77.0344 11.9883 77.6114 13.559 78.6199 14.6268C79.6285 15.6926 81.0664 16.3035 82.7868 16.3035C84.0298 16.3035 85.0792 16.0203 85.9296 15.4609C86.7799 14.9023 87.4268 14.0626 87.8717 12.9495C87.8823 12.9234 87.8873 12.8973 87.8844 12.869C87.8844 12.8429 87.8767 12.8146 87.8611 12.7913C87.8484 12.768 87.83 12.7468 87.8089 12.7313C87.7877 12.7158 87.7622 12.7052 87.7361 12.7002L86.4938 12.4898L85.2516 12.2793C85.2099 12.2715 85.171 12.2793 85.1371 12.2998C85.1032 12.3203 85.075 12.352 85.0595 12.3909C84.9422 12.6924 84.6647 12.999 84.2847 13.2306C83.9055 13.4622 83.4245 13.6176 82.8969 13.6176C82.1095 13.6176 81.5162 13.4199 81.1059 13.0117C80.6949 12.6035 80.4639 11.982 80.4011 11.1373H87.6146C87.8018 11.1373 87.9706 11.0596 88.0928 10.9346C88.215 10.8096 88.2905 10.6359 88.2905 10.4431V10.4063C88.2933 9.48893 88.1528 8.61248 87.8823 7.8222C87.6118 7.03191 87.2093 6.32779 86.6888 5.75573L86.6838 5.75291V5.75573ZM82.642 8.82082H80.4089C80.4555 8.49313 80.5805 7.98605 80.9181 7.5623C81.2556 7.13855 81.8072 6.79814 82.7041 6.79814C83.32 6.79814 83.7882 6.94646 84.1392 7.27133C84.4902 7.59902 84.724 8.10328 84.8751 8.82082H82.642Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M75.8833 11.9252C75.8706 11.9047 75.8522 11.8864 75.8311 11.8729C75.8106 11.8602 75.7894 11.8496 75.7633 11.8468L74.3571 11.6074L72.951 11.368C72.9277 11.363 72.9044 11.3651 72.8811 11.3708C72.8578 11.3764 72.8366 11.3863 72.8189 11.4019C72.8006 11.4174 72.7822 11.4329 72.7723 11.4541C72.7617 11.4746 72.7518 11.4986 72.749 11.5219C72.6812 12.0001 72.523 12.5227 72.1847 12.9281C71.8464 13.3313 71.3295 13.6166 70.542 13.6166C69.6896 13.6166 69.1097 13.1823 68.7432 12.5481C68.3767 11.9111 68.2262 11.0742 68.2262 10.2634C68.2262 9.97455 68.2545 9.10941 68.5666 8.31347C68.8788 7.52036 69.4735 6.79787 70.6049 6.79787C71.2023 6.79787 71.6678 6.94336 72.006 7.23716C72.3436 7.53095 72.5569 7.97306 72.6452 8.56842C72.648 8.59173 72.6579 8.61504 72.6685 8.63622C72.6812 8.6567 72.6975 8.67507 72.7151 8.68849C72.7335 8.70402 72.7568 8.71179 72.7773 8.71744C72.8006 8.72238 72.8239 8.72238 72.8472 8.71744L74.29 8.47308L75.7329 8.22872C75.7823 8.22095 75.8212 8.192 75.8473 8.15598C75.8734 8.11714 75.8861 8.07052 75.8784 8.02109C75.6912 6.83319 75.0803 5.85575 74.165 5.17422C73.2497 4.4934 72.0308 4.11133 70.6246 4.11133C68.8781 4.11133 67.4374 4.72505 66.4366 5.81408C65.4359 6.9031 64.8716 8.46814 64.8716 10.3686C64.8716 12.1152 65.4564 13.5997 66.4599 14.6449C67.4635 15.6923 68.8852 16.3011 70.5618 16.3011C71.9813 16.3011 73.1798 15.9141 74.0895 15.1909C74.9991 14.4684 75.6284 13.4076 75.9066 12.0608C75.9116 12.0375 75.9116 12.0114 75.9066 11.9881C75.901 11.9647 75.8939 11.9414 75.8777 11.9203L75.8833 11.9259V11.9252Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M65.1783 4.3527C65.1783 4.32657 65.1705 4.30326 65.1578 4.27995C65.1451 4.25665 65.1288 4.23829 65.1112 4.21992C65.0928 4.20439 65.0695 4.19379 65.0434 4.18602C64.9473 4.15989 64.8513 4.14153 64.7602 4.13164C64.6691 4.11893 64.578 4.11328 64.4897 4.11328C63.7178 4.11328 63.0341 4.28207 62.467 4.59141C61.9006 4.89792 61.4479 5.34285 61.1414 5.89372V4.59918C61.1414 4.54974 61.1209 4.50313 61.0891 4.47205C61.0581 4.43815 61.0136 4.41979 60.9641 4.41979H58.1123C58.0629 4.41979 58.0191 4.44027 57.9873 4.47205C57.9562 4.50595 57.9351 4.54974 57.9351 4.59918V15.8185C57.9351 15.868 57.9555 15.9146 57.9873 15.9485C58.0184 15.9824 58.0629 16.0029 58.1123 16.0029H61.1124C61.1619 16.0029 61.2057 15.9824 61.2374 15.9485C61.2685 15.9146 61.2897 15.8708 61.2897 15.8185V10.7626C61.2897 9.65022 61.5157 8.80485 61.9628 8.23562C62.4098 7.66356 63.0829 7.36765 63.972 7.34646C64.008 7.34646 64.0419 7.33375 64.0709 7.31256C64.0998 7.29208 64.1203 7.26312 64.133 7.22922L64.6507 5.82804L65.1677 4.42685C65.1755 4.40355 65.1804 4.37742 65.1783 4.35129V4.3527Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M14.8726 0.1414C13.7157 0.1414 12.7461 0.952167 12.5017 2.03625L12.4961 2.06238C12.4932 2.07792 12.4911 2.09345 12.4855 2.10899L10.3095 12.4576C10.3124 8.50331 10.3145 2.65704 10.3145 2.65704C10.3145 1.35967 9.33421 0.22615 8.03966 0.145638C6.81292 0.0679512 5.76768 0.902024 5.51273 2.03554L5.50778 2.06167C5.50496 2.07721 5.50284 2.09275 5.49719 2.10829L3.32691 12.4307V1.53694C3.32691 0.765013 2.70047 0.140694 1.93067 0.140694C1.16086 0.140694 0.534424 0.764306 0.534424 1.53694V16.0086H3.3262V15.9881C3.3262 15.9881 3.33114 15.9824 3.33114 15.9803C3.33114 15.9803 6.08125 2.97767 6.13069 2.70224C6.20626 2.28908 6.45839 2.00588 6.82704 2.00588C7.22466 2.00588 7.5234 2.29968 7.5234 2.70224V15.9958L10.3025 16.0064V15.986H10.3152C10.3152 15.986 13.0681 2.97273 13.1175 2.70012C13.1931 2.28697 13.4452 2.00376 13.8139 2.00376C14.2115 2.00376 14.5103 2.29756 14.5103 2.70012V16.0043H17.302V2.57441C17.302 1.23043 16.213 0.1414 14.869 0.1414H14.8726Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M26.9891 0.141331C26.2687 0.141331 25.6401 0.634995 25.4706 1.33417L22.4606 13.0296C22.4606 13.0296 22.4557 13.0218 22.4529 13.019C22.4218 13.1567 22.3851 13.3078 22.3462 13.4688L22.1591 14.1991C22.1047 14.3086 22.0136 14.3891 21.8864 14.3891C21.7099 14.3891 21.5665 14.2464 21.5665 14.0691V1.53687C21.5637 0.764943 20.9401 0.140625 20.1682 0.140625C19.3962 0.140625 18.7726 0.764237 18.7726 1.53687V14.1447C18.7726 15.2288 19.5912 16.1773 20.6731 16.2479C21.6845 16.3129 22.5496 15.6398 22.7841 14.7139L25.7602 3.21914V20.6308C25.7602 21.6838 25.0193 22.6274 23.9798 22.7835C22.6852 22.9756 21.5623 21.967 21.5623 20.7092V18.3673C21.5623 17.5954 20.9387 16.9718 20.166 16.9718C19.3934 16.9718 18.7705 17.5954 18.7705 18.3673V18.6505C18.7705 21.3413 20.9726 23.5406 23.6598 23.5406C26.3471 23.5406 28.5414 21.3463 28.5498 18.664V1.70354C28.5548 0.840511 27.8528 0.141331 26.9898 0.141331H26.9891Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M31.4473 23.3659V18.7217H34.785V19.4717H32.2764V20.5996H34.2539V21.3425H32.2764V22.6166H34.8514V23.3666H31.4473V23.3659Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M38.0854 22.7156L38.6293 22.1909C38.8482 22.4233 39.2197 22.6952 39.7705 22.6952C40.3214 22.6952 40.6329 22.3901 40.6329 22.0581C40.6329 21.1097 38.238 21.6535 38.238 19.9613C38.238 19.2318 38.868 18.6406 39.8504 18.6406C40.5799 18.6406 41.1103 18.986 41.3561 19.2579L40.8193 19.7883C40.6399 19.6223 40.308 19.3836 39.8772 19.3836C39.3525 19.3836 39.0876 19.6555 39.0876 19.9606C39.0876 20.9091 41.4761 20.3653 41.4761 22.0574C41.4761 22.8004 40.8398 23.4445 39.7981 23.4445C38.9421 23.4445 38.3581 23.0532 38.0854 22.7149V22.7156Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M44.6978 22.7156L45.2416 22.1909C45.4605 22.4233 45.832 22.6952 46.3829 22.6952C46.9337 22.6952 47.2452 22.3901 47.2452 22.0581C47.2452 21.1097 44.8503 21.6535 44.8503 19.9613C44.8503 19.2318 45.4803 18.6406 46.4627 18.6406C47.1922 18.6406 47.7226 18.986 47.9684 19.2579L47.4316 19.7883C47.2522 19.6223 46.9203 19.3836 46.4895 19.3836C45.9648 19.3836 45.6999 19.6555 45.6999 19.9606C45.6999 20.9091 48.0884 20.3653 48.0884 22.0574C48.0884 22.8004 47.4521 23.4445 46.4104 23.4445C45.5544 23.4445 44.9704 23.0532 44.6978 22.7149V22.7156Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M51.675 23.3659V18.7217H55.0128V19.4717H52.5042V20.5996H54.4817V21.3425H52.5042V22.6166H55.0791V23.3666H51.6758L51.675 23.3659Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M58.6782 23.3659V18.7217H59.4212L61.8563 21.9598H61.8761V18.7217H62.7059V23.3659H61.9566L59.5285 20.1278H59.5017V23.3659H58.6796H58.6782Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M67.4786 23.3659V19.4844H66.105V18.7217H69.6814V19.4844H68.3078V23.3659H67.4786Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M73.0811 23.3659V18.7217H73.9109V23.3659H73.0811Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M77.2724 23.3659L79.1108 18.7217H80.0261L81.8574 23.3659H80.9746L80.543 22.2246H78.5663L78.1284 23.3659H77.2717H77.2724ZM78.8452 21.4951H80.2655L79.5621 19.6306H79.5487L78.8452 21.4951Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M85.2175 23.3659V18.7217H86.0474V22.6032H88.2635V23.3659H85.2175Z",
                                fill: r
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_50156",
                                children: (0, l.jsx)("rect", {
                                    width: "106.2",
                                    height: "24",
                                    fill: "white",
                                    transform: "translate(0.400391)"
                                })
                            })
                        })]
                    }) : t === i.Yn.Special ? (0, l.jsxs)("svg", {
                        width: "107",
                        height: "24",
                        viewBox: "0 0 107 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-label": "my Barcel\xf3 special",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_35546)",
                            children: [(0, l.jsx)("path", {
                                d: "M99.3831 3.1886C99.4064 3.20414 99.4353 3.21191 99.4636 3.21191H101.335C101.356 3.21191 101.374 3.20908 101.392 3.20131C101.411 3.19355 101.429 3.18295 101.442 3.17024L102.897 1.79801L104.353 0.425781C104.376 0.402475 104.392 0.373519 104.4 0.342445C104.407 0.31137 104.404 0.27747 104.392 0.246396C104.379 0.215321 104.361 0.18919 104.335 0.170828C104.308 0.152465 104.277 0.142578 104.246 0.142578H101.278C101.252 0.142578 101.226 0.150347 101.202 0.16094C101.179 0.171534 101.161 0.192015 101.145 0.213202L100.238 1.58543L99.3308 2.95766C99.3153 2.98379 99.3047 3.01204 99.3047 3.041C99.3047 3.06995 99.3096 3.0982 99.3231 3.12645C99.3358 3.15258 99.3569 3.17306 99.3803 3.1886H99.3831Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M104.92 5.77436C103.904 4.71147 102.445 4.11328 100.673 4.11328C98.8998 4.11328 97.4513 4.71359 96.4379 5.77436C95.4265 6.83726 94.8545 8.36345 94.8545 10.2195C94.8545 12.0755 95.4265 13.5882 96.4379 14.649C97.4492 15.707 98.9048 16.3051 100.673 16.3051C102.44 16.3051 103.904 15.707 104.92 14.649C105.936 13.5911 106.508 12.0677 106.508 10.2195C106.508 8.37122 105.936 6.83726 104.92 5.77436ZM102.723 12.3954C102.372 13.0868 101.751 13.62 100.67 13.62C99.5884 13.62 98.9825 13.0868 98.6343 12.3954C98.2861 11.704 98.2056 10.8537 98.2056 10.2195C98.2056 9.58525 98.2861 8.72434 98.6343 8.03081C98.9825 7.33445 99.599 6.79842 100.67 6.79842C101.74 6.79842 102.372 7.33375 102.723 8.03081C103.074 8.72716 103.155 9.58242 103.155 10.2195C103.155 10.8565 103.074 11.704 102.723 12.3954Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M93.2352 0.141331H90.0303C89.9809 0.141331 89.9364 0.161812 89.9053 0.193593C89.8742 0.227493 89.853 0.27128 89.853 0.320717V15.8164C89.853 15.8658 89.8735 15.9124 89.9053 15.9463C89.9364 15.9802 89.9809 16.0007 90.0303 16.0007H93.2352C93.2847 16.0007 93.3284 15.9802 93.3602 15.9463C93.3913 15.9124 93.4125 15.8686 93.4125 15.8164V0.322836C93.4125 0.273399 93.392 0.226787 93.3602 0.195712C93.3292 0.161812 93.2847 0.14345 93.2352 0.14345V0.140625V0.141331Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M41.9202 7.35799C42.5177 6.99427 42.9626 6.54934 43.2592 6.01895C43.5552 5.48856 43.7013 4.87272 43.7013 4.16295C43.7013 2.80837 43.2931 1.80268 42.464 1.1374C41.637 0.472123 40.3898 0.141602 38.7103 0.141602H31.6133C31.5639 0.141602 31.5194 0.162083 31.4883 0.193863C31.4572 0.227763 31.436 0.27155 31.436 0.320987V15.8167C31.436 15.8661 31.4565 15.9127 31.4883 15.9466C31.5194 15.9805 31.5639 16.001 31.6133 16.001H38.9208C40.1892 16.001 41.5643 15.6945 42.6222 14.9586C43.6802 14.2205 44.421 13.0531 44.421 11.3271C44.421 10.3546 44.2 9.51768 43.7762 8.84745C43.3525 8.17652 42.7289 7.67226 41.9202 7.35799ZM35.105 4.78444V3.15443H38.0323C38.7499 3.15443 39.2746 3.28156 39.6235 3.54428C39.9717 3.807 40.1384 4.20744 40.1384 4.75336C40.1384 5.43983 39.8862 5.85581 39.5303 6.10017C39.1743 6.34453 38.7117 6.41727 38.288 6.41727H35.1064V4.78444H35.105ZM40.1864 12.5305C39.8092 12.8398 39.24 12.991 38.4759 12.991H35.1043V9.10241H38.538C39.2817 9.10241 39.8326 9.26908 40.1991 9.60666C40.5656 9.94495 40.7478 10.4513 40.7478 11.135C40.7478 11.7586 40.5607 12.224 40.1836 12.5333L40.1864 12.5305Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M56.0903 7.48488C56.0903 6.3669 55.6715 5.52223 54.8423 4.96077C54.0132 4.39648 52.7681 4.11328 51.1197 4.11328C49.6409 4.11328 48.424 4.42262 47.5271 4.99679C46.633 5.57379 46.0609 6.41846 45.8709 7.49195C45.866 7.51525 45.8681 7.54138 45.8709 7.56469C45.8766 7.58799 45.8865 7.6113 45.8999 7.62966C45.9126 7.65014 45.931 7.66639 45.9493 7.6791C45.9698 7.69181 45.991 7.69958 46.0143 7.70523L47.4854 7.95453L48.9565 8.20384C48.9798 8.20949 49.0059 8.20666 49.0292 8.20101C49.0526 8.19607 49.0737 8.18547 49.0942 8.16994C49.1126 8.1544 49.1309 8.13604 49.1408 8.11273C49.1514 8.09225 49.1592 8.06612 49.1613 8.04281C49.2108 7.53079 49.3774 7.15366 49.6762 6.90647C49.9749 6.65929 50.4015 6.53993 50.9679 6.53993C51.5343 6.53993 51.9559 6.59431 52.2596 6.79206C52.5633 6.98981 52.7328 7.32457 52.7328 7.88673C52.7533 8.29989 52.5251 8.54707 52.0958 8.71092C51.6664 8.87477 51.0378 8.96093 50.2553 9.05133C49.1945 9.17633 48.0038 9.31405 47.0737 9.81548C46.1457 10.3169 45.4776 11.1828 45.4648 12.7605C45.4648 13.8545 45.8391 14.7415 46.5122 15.3545C47.1852 15.9683 48.1606 16.3087 49.3612 16.3087C50.0604 16.3087 50.6868 16.2155 51.2483 16.0226C51.8097 15.8305 52.3034 15.5417 52.7349 15.1547V15.2507C52.7349 15.3157 52.7321 15.3913 52.73 15.4845V15.8221C52.73 15.8715 52.7504 15.9181 52.7822 15.952C52.8133 15.9859 52.8578 16.0064 52.9072 16.0064H55.9123C55.9617 16.0064 56.0062 15.9859 56.0373 15.952C56.0684 15.9181 56.0896 15.8743 56.0896 15.8221V7.48276L56.0903 7.48488ZM52.737 11.0726V11.478C52.737 12.2866 52.5527 12.8869 52.1805 13.2845C51.8062 13.6822 51.2447 13.8799 50.4855 13.8799C49.9269 13.8799 49.5109 13.7782 49.2376 13.5706C48.9622 13.3629 48.8266 13.0508 48.8266 12.6299C48.8266 12.2089 48.9431 11.9017 49.2058 11.6658C49.4685 11.4292 49.8767 11.2682 50.4537 11.1588C50.5681 11.1383 50.6854 11.1171 50.8019 11.1016C50.9192 11.0832 51.0385 11.0676 51.1529 11.0493C51.4495 11.0076 51.7405 10.966 52.011 10.9087C52.2787 10.8515 52.5287 10.776 52.7363 10.6672V11.0726H52.737Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M86.6836 5.75573C86.1948 5.21757 85.615 4.80725 84.9575 4.53111C84.3021 4.25567 83.5719 4.1123 82.7865 4.1123C81.1205 4.1123 79.6826 4.75428 78.6614 5.83836C77.6394 6.92244 77.0342 8.44863 77.0342 10.2185C77.0342 11.9883 77.6112 13.559 78.6197 14.6268C79.6282 15.6926 81.0661 16.3035 82.7865 16.3035C84.0295 16.3035 85.079 16.0203 85.9293 15.4609C86.7796 14.9023 87.4265 14.0626 87.8715 12.9495C87.8821 12.9234 87.887 12.8973 87.8842 12.869C87.8842 12.8429 87.8764 12.8146 87.8609 12.7913C87.8482 12.768 87.8298 12.7468 87.8086 12.7313C87.7874 12.7158 87.762 12.7052 87.7359 12.7002L86.4936 12.4898L85.2513 12.2793C85.2096 12.2715 85.1708 12.2793 85.1369 12.2998C85.103 12.3203 85.0747 12.352 85.0592 12.3909C84.942 12.6924 84.6644 12.999 84.2845 13.2306C83.9052 13.4622 83.4243 13.6176 82.8967 13.6176C82.1092 13.6176 81.516 13.4199 81.1057 13.0117C80.6946 12.6035 80.4637 11.982 80.4008 11.1373H87.6144C87.8016 11.1373 87.9703 11.0596 88.0925 10.9346C88.2147 10.8096 88.2903 10.6359 88.2903 10.4431V10.4063C88.2931 9.48893 88.1526 8.61248 87.8821 7.8222C87.6116 7.03191 87.209 6.32779 86.6885 5.75573L86.6836 5.75291V5.75573ZM82.6417 8.82082H80.4086C80.4552 8.49313 80.5802 7.98605 80.9178 7.5623C81.2554 7.13855 81.807 6.79814 82.7039 6.79814C83.3197 6.79814 83.788 6.94646 84.139 7.27133C84.49 7.59902 84.7237 8.10328 84.8749 8.82082H82.6417Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M75.8833 11.9252C75.8706 11.9047 75.8522 11.8864 75.8311 11.8729C75.8106 11.8602 75.7894 11.8496 75.7633 11.8468L74.3571 11.6074L72.951 11.368C72.9277 11.363 72.9044 11.3651 72.8811 11.3708C72.8578 11.3764 72.8366 11.3863 72.8189 11.4019C72.8006 11.4174 72.7822 11.4329 72.7723 11.4541C72.7617 11.4746 72.7518 11.4986 72.749 11.5219C72.6812 12.0001 72.523 12.5227 72.1847 12.9281C71.8464 13.3313 71.3295 13.6166 70.542 13.6166C69.6896 13.6166 69.1097 13.1823 68.7432 12.5481C68.3767 11.9111 68.2262 11.0742 68.2262 10.2634C68.2262 9.97455 68.2545 9.10941 68.5666 8.31347C68.8788 7.52036 69.4735 6.79787 70.6049 6.79787C71.2023 6.79787 71.6678 6.94336 72.006 7.23716C72.3436 7.53095 72.5569 7.97306 72.6452 8.56842C72.648 8.59173 72.6579 8.61504 72.6685 8.63622C72.6812 8.6567 72.6975 8.67507 72.7151 8.68849C72.7335 8.70402 72.7568 8.71179 72.7773 8.71744C72.8006 8.72238 72.8239 8.72238 72.8472 8.71744L74.29 8.47308L75.7329 8.22872C75.7823 8.22095 75.8212 8.192 75.8473 8.15598C75.8734 8.11714 75.8861 8.07052 75.8784 8.02109C75.6912 6.83319 75.0803 5.85575 74.165 5.17422C73.2497 4.4934 72.0308 4.11133 70.6246 4.11133C68.8781 4.11133 67.4374 4.72505 66.4366 5.81408C65.4359 6.9031 64.8716 8.46814 64.8716 10.3686C64.8716 12.1152 65.4564 13.5997 66.4599 14.6449C67.4635 15.6923 68.8852 16.3011 70.5618 16.3011C71.9813 16.3011 73.1798 15.9141 74.0895 15.1909C74.9991 14.4684 75.6284 13.4076 75.9066 12.0608C75.9116 12.0375 75.9116 12.0114 75.9066 11.9881C75.901 11.9647 75.8939 11.9414 75.8777 11.9203L75.8833 11.9259V11.9252Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M65.1783 4.3527C65.1783 4.32657 65.1705 4.30326 65.1578 4.27995C65.1451 4.25665 65.1288 4.23829 65.1112 4.21992C65.0928 4.20439 65.0695 4.19379 65.0434 4.18602C64.9473 4.15989 64.8513 4.14153 64.7602 4.13164C64.6691 4.11893 64.578 4.11328 64.4897 4.11328C63.7178 4.11328 63.0341 4.28207 62.467 4.59141C61.9006 4.89792 61.4479 5.34285 61.1414 5.89372V4.59918C61.1414 4.54974 61.1209 4.50313 61.0891 4.47205C61.0581 4.43815 61.0136 4.41979 60.9641 4.41979H58.1123C58.0629 4.41979 58.0191 4.44027 57.9873 4.47205C57.9562 4.50595 57.9351 4.54974 57.9351 4.59918V15.8185C57.9351 15.868 57.9555 15.9146 57.9873 15.9485C58.0184 15.9824 58.0629 16.0029 58.1123 16.0029H61.1124C61.1619 16.0029 61.2057 15.9824 61.2374 15.9485C61.2685 15.9146 61.2897 15.8708 61.2897 15.8185V10.7626C61.2897 9.65022 61.5157 8.80485 61.9628 8.23562C62.4098 7.66356 63.0829 7.36765 63.972 7.34646C64.008 7.34646 64.0419 7.33375 64.0709 7.31256C64.0998 7.29208 64.1203 7.26312 64.133 7.22922L64.6507 5.82804L65.1677 4.42685C65.1755 4.40355 65.1804 4.37742 65.1783 4.35129V4.3527Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M14.8723 0.1414C13.7155 0.1414 12.7458 0.952167 12.5015 2.03625L12.4958 2.06238C12.493 2.07792 12.4909 2.09345 12.4852 2.10899L10.3093 12.4576C10.3121 8.50331 10.3142 2.65704 10.3142 2.65704C10.3142 1.35967 9.33396 0.22615 8.03942 0.145638C6.81268 0.0679512 5.76744 0.902024 5.51248 2.03554L5.50754 2.06167C5.50471 2.07721 5.5026 2.09275 5.49695 2.10829L3.32666 12.4307V1.53694C3.32666 0.765013 2.70023 0.140694 1.93042 0.140694C1.16062 0.140694 0.53418 0.764306 0.53418 1.53694V16.0086H3.32596V15.9881C3.32596 15.9881 3.3309 15.9824 3.3309 15.9803C3.3309 15.9803 6.08101 2.97767 6.13045 2.70224C6.20601 2.28908 6.45814 2.00588 6.8268 2.00588C7.22441 2.00588 7.52316 2.29968 7.52316 2.70224V15.9958L10.3022 16.0064V15.986H10.3149C10.3149 15.986 13.0679 2.97273 13.1173 2.70012C13.1929 2.28697 13.445 2.00376 13.8137 2.00376C14.2113 2.00376 14.51 2.29756 14.51 2.70012V16.0043H17.3018V2.57441C17.3018 1.23043 16.2128 0.1414 14.8688 0.1414H14.8723Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M26.9891 0.141331C26.2687 0.141331 25.6401 0.634995 25.4706 1.33417L22.4606 13.0296C22.4606 13.0296 22.4557 13.0218 22.4529 13.019C22.4218 13.1567 22.3851 13.3078 22.3462 13.4688L22.1591 14.1991C22.1047 14.3086 22.0136 14.3891 21.8864 14.3891C21.7099 14.3891 21.5665 14.2464 21.5665 14.0691V1.53687C21.5637 0.764943 20.9401 0.140625 20.1682 0.140625C19.3962 0.140625 18.7726 0.764237 18.7726 1.53687V14.1447C18.7726 15.2288 19.5912 16.1773 20.6731 16.2479C21.6845 16.3129 22.5496 15.6398 22.7841 14.7139L25.7602 3.21914V20.6308C25.7602 21.6838 25.0193 22.6274 23.9798 22.7835C22.6852 22.9756 21.5623 21.967 21.5623 20.7092V18.3673C21.5623 17.5954 20.9387 16.9718 20.166 16.9718C19.3934 16.9718 18.7705 17.5954 18.7705 18.3673V18.6505C18.7705 21.3413 20.9726 23.5406 23.6598 23.5406C26.3471 23.5406 28.5414 21.3463 28.5498 18.664V1.70354C28.5548 0.840511 27.8528 0.141331 26.9898 0.141331H26.9891Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M31.082 22.7156L31.6258 22.1909C31.8448 22.4233 32.2163 22.6952 32.7671 22.6952C33.318 22.6952 33.6294 22.3901 33.6294 22.0581C33.6294 21.1096 31.2346 21.6535 31.2346 19.9613C31.2346 19.2318 31.8645 18.6406 32.8469 18.6406C33.5765 18.6406 34.1069 18.986 34.3526 19.2579L33.8159 19.7883C33.6365 19.6223 33.3046 19.3836 32.8738 19.3836C32.349 19.3836 32.0842 19.6555 32.0842 19.9606C32.0842 20.9091 34.4727 20.3653 34.4727 22.0574C34.4727 22.8004 33.8364 23.4445 32.7947 23.4445C31.9387 23.4445 31.3546 23.0532 31.082 22.7149V22.7156Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M38.0591 23.3659V18.7217H39.9638C40.8862 18.7217 41.5557 19.3919 41.5557 20.2408C41.5557 21.0897 40.8855 21.7536 39.9638 21.7536H38.8889V23.3659H38.0591ZM38.8889 21.0043H39.9511C40.3826 21.0043 40.7266 20.666 40.7266 20.2415C40.7266 19.8171 40.3819 19.4717 39.9511 19.4717H38.8889V21.0043Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M45.043 23.3659V18.7217H48.3807V19.4717H45.8721V20.5996H47.8496V21.3425H45.8721V22.6166H48.4471V23.3666H45.043V23.3659Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M51.6216 21.0435C51.6216 19.7101 52.6894 18.6416 54.1033 18.6416C55.0518 18.6416 55.7023 19.1324 56.0335 19.5308L55.4628 20.0216C55.198 19.7363 54.799 19.398 54.1026 19.398C53.1796 19.398 52.4564 20.1275 52.4564 21.0435C52.4564 21.9595 53.1796 22.6891 54.1026 22.6891C54.799 22.6891 55.2171 22.3508 55.489 22.045L56.0667 22.5365C55.7213 22.9476 55.0511 23.4455 54.1033 23.4455C52.6894 23.4455 51.6216 22.3769 51.6216 21.0435Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M59.5127 23.3659V18.7217H60.3425V23.3659H59.5127Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M63.7043 23.3659L65.5427 18.7217H66.458L68.2892 23.3659H67.4064L66.9749 22.2246H64.9982L64.5603 23.3659H63.7036H63.7043ZM65.2764 21.4951H66.6967L65.9933 19.6306H65.9798L65.2764 21.4951Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M71.6494 23.3659V18.7217H72.4792V22.6032H74.6954V23.3659H71.6494Z",
                                fill: r
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_35546",
                                children: (0, l.jsx)("rect", {
                                    width: "106.2",
                                    height: "24",
                                    fill: "white",
                                    transform: "translate(0.400391)"
                                })
                            })
                        })]
                    }) : t === i.Yn.Unique ? (0, l.jsxs)("svg", {
                        width: "107",
                        height: "24",
                        viewBox: "0 0 107 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-label": "my Barcel\xf3 unique",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_54257)",
                            children: [(0, l.jsx)("path", {
                                d: "M99.2579 3.07336C99.2811 3.08833 99.31 3.09581 99.3382 3.09581H101.205C101.225 3.09581 101.243 3.09309 101.262 3.0856C101.28 3.07812 101.298 3.06791 101.311 3.05566L102.762 1.73359L104.214 0.411523C104.237 0.389069 104.253 0.361172 104.261 0.331233C104.268 0.301294 104.265 0.268634 104.253 0.238695C104.24 0.208756 104.222 0.18358 104.196 0.165889C104.17 0.148198 104.139 0.138672 104.108 0.138672H101.148C101.121 0.138672 101.095 0.146157 101.072 0.156363C101.049 0.166569 101.031 0.186302 101.015 0.206715L100.11 1.52879L99.2057 2.85086C99.1903 2.87603 99.1797 2.90325 99.1797 2.93115C99.1797 2.95904 99.1846 2.98626 99.198 3.01348C99.2107 3.03865 99.2318 3.05839 99.255 3.07336H99.2579Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M104.78 5.56619C103.766 4.54214 102.312 3.96582 100.544 3.96582C98.7764 3.96582 97.3319 4.54418 96.3212 5.56619C95.3127 6.59023 94.7422 8.06063 94.7422 9.8488C94.7422 11.637 95.3127 13.0944 96.3212 14.1164C97.3298 15.1357 98.7814 15.712 100.544 15.712C102.307 15.712 103.766 15.1357 104.78 14.1164C105.793 13.0972 106.364 11.6295 106.364 9.8488C106.364 8.06812 105.793 6.59023 104.78 5.56619ZM102.59 11.9452C102.239 12.6113 101.62 13.1251 100.541 13.1251C99.4631 13.1251 98.8588 12.6113 98.5116 11.9452C98.1644 11.2791 98.0841 10.4598 98.0841 9.8488C98.0841 9.23777 98.1644 8.40833 98.5116 7.74015C98.8588 7.06925 99.4737 6.55281 100.541 6.55281C101.609 6.55281 102.239 7.06857 102.59 7.74015C102.94 8.41105 103.02 9.23505 103.02 9.8488C103.02 10.4625 102.94 11.2791 102.59 11.9452Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M93.1263 0.138672H89.9302C89.8809 0.138672 89.8365 0.158404 89.8055 0.189023C89.7745 0.221684 89.7534 0.263871 89.7534 0.3115V15.2408C89.7534 15.2884 89.7738 15.3333 89.8055 15.366C89.8365 15.3986 89.8809 15.4184 89.9302 15.4184H93.1263C93.1756 15.4184 93.2193 15.3986 93.251 15.366C93.282 15.3333 93.3031 15.2911 93.3031 15.2408V0.314222C93.3031 0.266592 93.2827 0.221684 93.251 0.191745C93.22 0.159085 93.1756 0.141394 93.1263 0.141394V0.138672Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M41.9529 7.09128C42.5488 6.74086 42.9925 6.31219 43.2883 5.80119C43.5834 5.29019 43.7292 4.69686 43.7292 4.01303C43.7292 2.70797 43.3221 1.73904 42.4952 1.09807C41.6705 0.457112 40.4267 0.138672 38.7519 0.138672H31.6743C31.625 0.138672 31.5807 0.158404 31.5497 0.189023C31.5187 0.221684 31.4976 0.263871 31.4976 0.3115V15.2408C31.4976 15.2884 31.518 15.3333 31.5497 15.366C31.5807 15.3986 31.625 15.4184 31.6743 15.4184H38.9618C40.2267 15.4184 41.598 15.123 42.653 14.414C43.7081 13.703 44.4469 12.5782 44.4469 10.9153C44.4469 9.97834 44.2264 9.17203 43.8038 8.5263C43.3813 7.8799 42.7594 7.39407 41.9529 7.09128ZM35.1564 4.6118V3.04138H38.0757C38.7913 3.04138 39.3146 3.16385 39.6625 3.41697C40.0098 3.67009 40.176 4.05589 40.176 4.58186C40.176 5.24324 39.9245 5.64401 39.5696 5.87944C39.2146 6.11487 38.7533 6.18495 38.3307 6.18495H35.1578V4.6118H35.1564ZM40.2239 12.0754C39.8478 12.3734 39.2801 12.5191 38.518 12.5191H35.1557V8.77262H38.58C39.3217 8.77262 39.871 8.9332 40.2365 9.25844C40.6021 9.58437 40.7838 10.0722 40.7838 10.7309C40.7838 11.3317 40.5971 11.7801 40.221 12.0781L40.2239 12.0754Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M56.084 7.2132C56.084 6.13609 55.6664 5.3223 54.8395 4.78136C54.0127 4.2377 52.771 3.96484 51.1271 3.96484C49.6523 3.96484 48.4388 4.26287 47.5444 4.81606C46.6527 5.37197 46.0822 6.18576 45.8928 7.22001C45.8878 7.24246 45.8899 7.26764 45.8928 7.29009C45.8984 7.31255 45.9083 7.335 45.9216 7.35269C45.9343 7.37242 45.9526 7.38807 45.9709 7.40032C45.9914 7.41257 46.0125 7.42005 46.0357 7.4255L47.5028 7.66569L48.9699 7.90588C48.9931 7.91132 49.0192 7.9086 49.0424 7.90316C49.0656 7.8984 49.0868 7.88819 49.1072 7.87322C49.1255 7.85825 49.1438 7.84056 49.1537 7.8181C49.1643 7.79837 49.172 7.7732 49.1741 7.75074C49.2234 7.25743 49.3896 6.89408 49.6876 6.65593C49.9855 6.41778 50.4109 6.30279 50.9757 6.30279C51.5406 6.30279 51.961 6.35519 52.2639 6.54571C52.5667 6.73622 52.7358 7.05875 52.7358 7.60037C52.7562 7.99842 52.5287 8.23657 52.1005 8.39443C51.6723 8.55229 51.0454 8.6353 50.2651 8.72239C49.2072 8.84283 48.0198 8.97551 47.0922 9.45862C46.1667 9.94172 45.5005 10.7759 45.4878 12.296C45.4878 13.35 45.8611 14.2046 46.5323 14.7952C47.2035 15.3865 48.1761 15.7145 49.3734 15.7145C50.0707 15.7145 50.6954 15.6246 51.2553 15.4389C51.8152 15.2538 52.3076 14.9755 52.7379 14.6026V14.6952C52.7379 14.7578 52.7351 14.8306 52.733 14.9204V15.2457C52.733 15.2933 52.7534 15.3382 52.7851 15.3708C52.8161 15.4035 52.8604 15.4232 52.9097 15.4232H55.9065C55.9558 15.4232 56.0002 15.4035 56.0312 15.3708C56.0622 15.3382 56.0833 15.296 56.0833 15.2457V7.21116L56.084 7.2132ZM52.74 10.6698V11.0603C52.74 11.8394 52.5562 12.4178 52.185 12.8009C51.8117 13.184 51.2518 13.3745 50.4947 13.3745C49.9376 13.3745 49.5227 13.2765 49.2502 13.0764C48.9755 12.8764 48.8403 12.5757 48.8403 12.1701C48.8403 11.7646 48.9565 11.4686 49.2185 11.2413C49.4805 11.0134 49.8876 10.8583 50.463 10.7528C50.5771 10.7331 50.694 10.7126 50.8102 10.6977C50.9271 10.68 51.0461 10.665 51.1602 10.6473C51.4561 10.6072 51.7462 10.567 52.016 10.5119C52.2829 10.4568 52.5322 10.384 52.7393 10.2792V10.6698H52.74Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M86.5931 5.5482C86.1057 5.02971 85.5275 4.63438 84.8718 4.36834C84.2182 4.10297 83.49 3.96484 82.7068 3.96484C81.0453 3.96484 79.6114 4.58335 78.5929 5.62781C77.5738 6.67227 76.9702 8.14267 76.9702 9.84782C76.9702 11.553 77.5456 13.0662 78.5514 14.095C79.5571 15.1218 80.9911 15.7104 82.7068 15.7104C83.9463 15.7104 84.9929 15.4375 85.8409 14.8986C86.6889 14.3604 87.334 13.5514 87.7777 12.479C87.7883 12.4539 87.7932 12.4287 87.7904 12.4015C87.7904 12.3763 87.7827 12.3491 87.7672 12.3266C87.7545 12.3042 87.7362 12.2838 87.7151 12.2688C87.6939 12.2538 87.6686 12.2436 87.6425 12.2388L86.4037 12.0361L85.1648 11.8333C85.1232 11.8258 85.0845 11.8333 85.0507 11.853C85.0169 11.8728 84.9887 11.9034 84.9732 11.9408C84.8563 12.2314 84.5795 12.5267 84.2006 12.7498C83.8224 12.973 83.3427 13.1227 82.8166 13.1227C82.0313 13.1227 81.4397 12.9322 81.0305 12.5389C80.6206 12.1456 80.3903 11.5468 80.3276 10.7331H87.5214C87.708 10.7331 87.8763 10.6582 87.9982 10.5378C88.12 10.4173 88.1954 10.25 88.1954 10.0642V10.0288C88.1982 9.14494 88.0581 8.30053 87.7883 7.53913C87.5186 6.77773 87.1171 6.09935 86.598 5.5482L86.5931 5.54548V5.5482ZM82.5624 8.50057H80.3354C80.3819 8.18486 80.5065 7.69631 80.8432 7.28805C81.1798 6.8798 81.7299 6.55183 82.6244 6.55183C83.2385 6.55183 83.7055 6.69472 84.0555 7.00772C84.4055 7.32343 84.6387 7.80926 84.7894 8.50057H82.5624Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M75.8223 11.4911C75.8096 11.4714 75.7913 11.4537 75.7702 11.4408C75.7498 11.4285 75.7286 11.4183 75.7026 11.4156L74.3003 11.1849L72.898 10.9543C72.8748 10.9495 72.8516 10.9516 72.8283 10.957C72.8051 10.9624 72.7839 10.972 72.7663 10.9869C72.748 11.0019 72.7297 11.0169 72.7199 11.0373C72.7093 11.057 72.6994 11.0802 72.6966 11.1026C72.629 11.5633 72.4712 12.0668 72.1339 12.4573C71.7965 12.8459 71.281 13.1208 70.4957 13.1208C69.6456 13.1208 69.0673 12.7023 68.7018 12.0913C68.3363 11.4775 68.1863 10.6712 68.1863 9.8901C68.1863 9.6118 68.2144 8.77828 68.5257 8.01143C68.837 7.24731 69.4301 6.55124 70.5583 6.55124C71.1542 6.55124 71.6183 6.69141 71.9557 6.97446C72.2923 7.25752 72.505 7.68347 72.5931 8.25707C72.5959 8.27952 72.6058 8.30198 72.6163 8.32239C72.629 8.34212 72.6452 8.35981 72.6628 8.37274C72.6811 8.38771 72.7044 8.3952 72.7248 8.40064C72.748 8.4054 72.7713 8.4054 72.7945 8.40064L74.2334 8.16521L75.6723 7.92978C75.7216 7.9223 75.7603 7.8944 75.7864 7.8597C75.8124 7.82228 75.8251 7.77737 75.8174 7.72974C75.6307 6.58526 75.0215 5.64355 74.1087 4.98693C73.196 4.331 71.9803 3.96289 70.5781 3.96289C68.8363 3.96289 67.3995 4.55418 66.4016 5.6034C65.4036 6.65262 64.8408 8.16045 64.8408 9.99148C64.8408 11.6742 65.424 13.1044 66.4248 14.1115C67.4256 15.1205 68.8434 15.7071 70.5154 15.7071C71.931 15.7071 73.1262 15.3342 74.0334 14.6374C74.9405 13.9414 75.5681 12.9194 75.8455 11.6218C75.8505 11.5993 75.8505 11.5742 75.8455 11.5517C75.8399 11.5292 75.8329 11.5068 75.8167 11.4864L75.8223 11.4918V11.4911Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M65.1467 4.19551C65.1467 4.17033 65.1389 4.14788 65.1262 4.12542C65.1136 4.10297 65.0974 4.08528 65.0798 4.06759C65.0614 4.05262 65.0382 4.04241 65.0121 4.03493C64.9164 4.00975 64.8206 3.99206 64.7297 3.98254C64.6389 3.97029 64.548 3.96484 64.46 3.96484C63.6902 3.96484 63.0084 4.12747 62.4428 4.42549C61.878 4.7208 61.4265 5.14947 61.1209 5.6802V4.43298C61.1209 4.38535 61.1004 4.34044 61.0688 4.3105C61.0378 4.27784 60.9934 4.26015 60.9441 4.26015H58.1001C58.0508 4.26015 58.0072 4.27988 57.9755 4.3105C57.9445 4.34316 57.9233 4.38535 57.9233 4.43298V15.2423C57.9233 15.2899 57.9438 15.3348 57.9755 15.3674C58.0064 15.4001 58.0508 15.4198 58.1001 15.4198H61.092C61.1413 15.4198 61.185 15.4001 61.2167 15.3674C61.2476 15.3348 61.2688 15.2926 61.2688 15.2423V10.3711C61.2688 9.2994 61.4942 8.48492 61.94 7.9365C62.3858 7.38535 63.057 7.10025 63.9437 7.07984C63.9796 7.07984 64.0134 7.06759 64.0423 7.04718C64.0712 7.02745 64.0916 6.99955 64.1043 6.96689L64.6205 5.61692L65.1361 4.26695C65.1438 4.2445 65.1488 4.21932 65.1467 4.19415V4.19551Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M14.9789 0.138442C13.8253 0.138442 12.8583 0.919573 12.6146 1.96403L12.6089 1.98921C12.6061 2.00417 12.604 2.01914 12.5984 2.03411L10.4284 12.0044C10.4312 8.1947 10.4334 2.56212 10.4334 2.56212C10.4334 1.31218 9.45579 0.220094 8.1648 0.142525C6.94143 0.0676779 5.89906 0.871263 5.64481 1.96335L5.63987 1.98852C5.63706 2.00349 5.63494 2.01846 5.62931 2.03343L3.46499 11.9786V1.48365C3.46499 0.73994 2.84027 0.138442 2.07258 0.138442C1.30489 0.138442 0.680176 0.73926 0.680176 1.48365V15.4263H3.46428V15.4066C3.46428 15.4066 3.46921 15.4011 3.46921 15.3991C3.46921 15.3991 6.21177 2.87172 6.26107 2.60635C6.33643 2.2083 6.58787 1.93545 6.95551 1.93545C7.35204 1.93545 7.64996 2.21851 7.64996 2.60635V15.414L10.4214 15.4242V15.4045H10.4341C10.4341 15.4045 13.1794 2.86696 13.2287 2.60431C13.3041 2.20626 13.5555 1.93341 13.9232 1.93341C14.3197 1.93341 14.6176 2.21647 14.6176 2.60431V15.4222H17.4017V2.4832C17.4017 1.18834 16.3157 0.139123 14.9754 0.139123L14.9789 0.138442Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M27.0622 0.138672C26.3438 0.138672 25.717 0.614291 25.5479 1.28791L22.5462 12.5558C22.5462 12.5558 22.5413 12.5483 22.5384 12.5456C22.5075 12.6783 22.4708 12.8239 22.4321 12.979L22.2455 13.6826C22.1912 13.788 22.1004 13.8656 21.9736 13.8656C21.7975 13.8656 21.6545 13.7282 21.6545 13.5574V1.48388C21.6517 0.74017 21.0298 0.138672 20.26 0.138672C19.4902 0.138672 18.8683 0.739489 18.8683 1.48388V13.6309C18.8683 14.6753 19.6846 15.5891 20.7636 15.6572C21.7722 15.7198 22.6349 15.0713 22.8688 14.1793L25.8367 3.10466V19.8799C25.8367 20.8944 25.0979 21.8035 24.0611 21.9539C22.7702 22.1389 21.6503 21.1673 21.6503 19.9554V17.6991C21.6503 16.9554 21.0284 16.3546 20.2579 16.3546C19.4874 16.3546 18.8662 16.9554 18.8662 17.6991V17.972C18.8662 20.5644 21.0622 22.6833 23.7421 22.6833C26.422 22.6833 28.6102 20.5692 28.6187 17.9849V1.64378C28.6236 0.812295 27.9235 0.138672 27.0629 0.138672H27.0622Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M31.4424 20.7111V18.0391H32.2699V20.7111C32.2699 21.3759 32.7728 21.8617 33.4278 21.8617C34.0828 21.8617 34.5857 21.35 34.5857 20.7111V18.0391H35.4132V20.7111C35.4132 21.8107 34.6061 22.5904 33.4278 22.5904C32.2495 22.5904 31.4424 21.8107 31.4424 20.7111Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M39.2397 22.5145V18.04H39.9814L42.4098 21.1598H42.4295V18.04H43.2571V22.5145H42.5098L40.0877 19.3948H40.0617V22.5145H39.2412H39.2397Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M47.1509 22.5145V18.04H47.9777V22.5145H47.1509Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M56.6363 22.8214V23.5059C56.5835 23.5189 56.4574 23.5379 56.3187 23.5379C55.3658 23.5379 54.6974 22.9881 54.4593 22.5663C54.3206 22.5853 54.2016 22.5921 54.0628 22.5921C52.6528 22.5921 51.5879 21.5626 51.5879 20.278C51.5879 18.9934 52.6528 17.9639 54.0628 17.9639C55.4728 17.9639 56.5377 18.9927 56.5377 20.278C56.5377 21.1605 56.0278 21.9335 55.2404 22.3172C55.3932 22.554 55.7898 22.8541 56.3455 22.8541C56.4708 22.8541 56.5835 22.835 56.637 22.8221L56.6363 22.8214ZM55.7038 20.2773C55.7038 19.3955 54.9763 18.6919 54.0628 18.6919C53.1493 18.6919 52.4211 19.3948 52.4211 20.2773C52.4211 21.1598 53.1493 21.8627 54.0628 21.8627C54.9763 21.8627 55.7038 21.1598 55.7038 20.2773Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M60.0723 20.7111V18.0391H60.8998V20.7111C60.8998 21.3759 61.4027 21.8617 62.0577 21.8617C62.7127 21.8617 63.2156 21.35 63.2156 20.7111V18.0391H64.0431V20.7111C64.0431 21.8107 63.236 22.5904 62.0577 22.5904C60.8794 22.5904 60.0723 21.8107 60.0723 20.7111Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M67.8711 22.5145V18.04H71.1996V18.7627H68.6979V19.8493H70.67V20.5651H68.6979V21.7926H71.2658V22.5152H67.8718L67.8711 22.5145Z",
                                fill: r
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_54257",
                                children: (0, l.jsx)("rect", {
                                    width: "106.2",
                                    height: "24",
                                    fill: r,
                                    transform: "translate(0.400391)"
                                })
                            })
                        })]
                    }) : (0, l.jsxs)("svg", {
                        width: "107",
                        height: "24",
                        viewBox: "0 0 107 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-label": "my Barcel\xf3 benefits",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_3570_48960)",
                            children: [(0, l.jsx)("path", {
                                d: "M99.3836 3.18861C99.4069 3.20415 99.4358 3.21192 99.4641 3.21192H101.336C101.356 3.21192 101.374 3.20909 101.393 3.20132C101.411 3.19356 101.43 3.18296 101.442 3.17025L102.898 1.79802L104.353 0.425782C104.377 0.402476 104.392 0.37352 104.4 0.342445C104.408 0.311371 104.405 0.277471 104.392 0.246396C104.38 0.215321 104.361 0.18919 104.335 0.170828C104.309 0.152466 104.278 0.142578 104.247 0.142578H101.278C101.252 0.142578 101.226 0.150347 101.203 0.160941C101.18 0.171534 101.161 0.192015 101.146 0.213203L100.238 1.58544L99.3313 2.95767C99.3158 2.9838 99.3052 3.01205 99.3052 3.04101C99.3052 3.06996 99.3101 3.09821 99.3235 3.12646C99.3363 3.15259 99.3574 3.17307 99.3807 3.18861H99.3836Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M104.92 5.77437C103.904 4.71147 102.446 4.11328 100.673 4.11328C98.9003 4.11328 97.4518 4.71359 96.4384 5.77437C95.427 6.83727 94.855 8.36346 94.855 10.2195C94.855 12.0755 95.427 13.5883 96.4384 14.649C97.4497 15.707 98.9053 16.3052 100.673 16.3052C102.441 16.3052 103.904 15.707 104.92 14.649C105.937 13.5911 106.509 12.0677 106.509 10.2195C106.509 8.37123 105.937 6.83727 104.92 5.77437ZM102.724 12.3954C102.373 13.0868 101.751 13.62 100.67 13.62C99.5889 13.62 98.983 13.0868 98.6348 12.3954C98.2866 11.704 98.2061 10.8537 98.2061 10.2195C98.2061 9.58526 98.2866 8.72435 98.6348 8.03082C98.983 7.33446 99.5995 6.79842 100.67 6.79842C101.741 6.79842 102.373 7.33376 102.724 8.03082C103.075 8.72718 103.155 9.58244 103.155 10.2195C103.155 10.8565 103.075 11.704 102.724 12.3954Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M93.2356 0.141331H90.0307C89.9812 0.141331 89.9367 0.161812 89.9057 0.193593C89.8746 0.227493 89.8534 0.27128 89.8534 0.320717V15.8164C89.8534 15.8659 89.8739 15.9125 89.9057 15.9464C89.9367 15.9803 89.9812 16.0008 90.0307 16.0008H93.2356C93.285 16.0008 93.3288 15.9803 93.3606 15.9464C93.3917 15.9125 93.4129 15.8687 93.4129 15.8164V0.322836C93.4129 0.273399 93.3924 0.226787 93.3606 0.195712C93.3295 0.161812 93.285 0.14345 93.2356 0.14345V0.140625V0.141331Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M41.9202 7.35801C42.5177 6.99429 42.9627 6.54936 43.2593 6.01897C43.5552 5.48858 43.7014 4.87273 43.7014 4.16296C43.7014 2.80838 43.2932 1.80269 42.464 1.13741C41.637 0.472124 40.3898 0.141602 38.7104 0.141602H31.6133C31.5639 0.141602 31.5194 0.162083 31.4883 0.193864C31.4572 0.227763 31.436 0.271551 31.436 0.320988V15.8167C31.436 15.8661 31.4565 15.9127 31.4883 15.9466C31.5194 15.9805 31.5639 16.001 31.6133 16.001H38.9208C40.1892 16.001 41.5643 15.6945 42.6222 14.9586C43.6802 14.2206 44.421 13.0532 44.421 11.3271C44.421 10.3546 44.2 9.5177 43.7762 8.84748C43.3525 8.17655 42.7289 7.67229 41.9202 7.35801ZM35.105 4.78445V3.15444H38.0324C38.7499 3.15444 39.2746 3.28156 39.6235 3.54429C39.9717 3.80701 40.1384 4.20745 40.1384 4.75338C40.1384 5.43985 39.8863 5.85583 39.5303 6.10019C39.1744 6.34455 38.7118 6.41729 38.288 6.41729H35.1064V4.78445H35.105ZM40.1864 12.5305C39.8093 12.8399 39.24 12.991 38.4759 12.991H35.1043V9.10243H38.538C39.2817 9.10243 39.8326 9.26911 40.1991 9.60669C40.5657 9.94498 40.7479 10.4514 40.7479 11.135C40.7479 11.7586 40.5607 12.224 40.1836 12.5334L40.1864 12.5305Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M56.0911 7.48489C56.0911 6.36691 55.6723 5.52224 54.8432 4.96077C54.0141 4.39649 52.769 4.11328 51.1206 4.11328C49.6417 4.11328 48.4249 4.42262 47.5279 4.99679C46.6338 5.5738 46.0618 6.41846 45.8718 7.49196C45.8668 7.51526 45.869 7.54139 45.8718 7.5647C45.8774 7.58801 45.8873 7.61131 45.9007 7.62967C45.9135 7.65015 45.9318 7.6664 45.9502 7.67911C45.9707 7.69182 45.9918 7.69959 46.0152 7.70524L47.4863 7.95455L48.9574 8.20385C48.9807 8.2095 49.0068 8.20668 49.0301 8.20103C49.0534 8.19608 49.0746 8.18549 49.0951 8.16995C49.1134 8.15441 49.1318 8.13605 49.1417 8.11274C49.1523 8.09226 49.1601 8.06613 49.1622 8.04283C49.2116 7.5308 49.3783 7.15366 49.677 6.90648C49.9758 6.65929 50.4023 6.53994 50.9688 6.53994C51.5352 6.53994 51.9568 6.59432 52.2605 6.79207C52.5642 6.98982 52.7337 7.32458 52.7337 7.88675C52.7541 8.2999 52.526 8.54708 52.0966 8.71093C51.6672 8.87478 51.0387 8.96094 50.2562 9.05134C49.1954 9.17635 48.0046 9.31407 47.0745 9.8155C46.1465 10.3169 45.4784 11.1828 45.4657 12.7605C45.4657 13.8545 45.84 14.7416 46.5131 15.3546C47.1861 15.9683 48.1614 16.3087 49.362 16.3087C50.0612 16.3087 50.6877 16.2155 51.2491 16.0227C51.8106 15.8306 52.3043 15.5417 52.7358 15.1547V15.2508C52.7358 15.3157 52.733 15.3913 52.7308 15.4845V15.8221C52.7308 15.8715 52.7513 15.9182 52.7831 15.9521C52.8142 15.986 52.8587 16.0064 52.9081 16.0064H55.9132C55.9626 16.0064 56.0071 15.986 56.0382 15.9521C56.0693 15.9182 56.0904 15.8744 56.0904 15.8221V7.48277L56.0911 7.48489ZM52.7379 11.0726V11.478C52.7379 12.2867 52.5536 12.887 52.1814 13.2846C51.8071 13.6822 51.2456 13.8799 50.4864 13.8799C49.9277 13.8799 49.5118 13.7782 49.2385 13.5706C48.963 13.363 48.8274 13.0508 48.8274 12.6299C48.8274 12.209 48.944 11.9017 49.2067 11.6659C49.4694 11.4293 49.8776 11.2682 50.4546 11.1588C50.569 11.1383 50.6863 11.1171 50.8028 11.1016C50.92 11.0832 51.0394 11.0677 51.1538 11.0493C51.4504 11.0076 51.7414 10.966 52.0119 10.9088C52.2795 10.8516 52.5296 10.776 52.7372 10.6672V11.0726H52.7379Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M86.6843 5.75671C86.1956 5.21855 85.6158 4.80823 84.9583 4.53208C84.3029 4.25665 83.5726 4.11328 82.7873 4.11328C81.1212 4.11328 79.6833 4.75526 78.6621 5.83934C77.6402 6.92343 77.0349 8.44962 77.0349 10.2195C77.0349 11.9893 77.6119 13.56 78.6204 14.6279C79.629 15.6936 81.0669 16.3045 82.7873 16.3045C84.0303 16.3045 85.0797 16.0213 85.9301 15.4619C86.7804 14.9033 87.4273 14.0636 87.8722 12.9505C87.8828 12.9244 87.8878 12.8983 87.8849 12.87C87.8849 12.8439 87.8772 12.8156 87.8616 12.7923C87.8489 12.769 87.8306 12.7478 87.8094 12.7323C87.7882 12.7168 87.7628 12.7062 87.7366 12.7012L86.4944 12.4908L85.2521 12.2803C85.2104 12.2725 85.1716 12.2803 85.1377 12.3008C85.1038 12.3213 85.0755 12.353 85.06 12.3919C84.9427 12.6934 84.6652 13 84.2852 13.2316C83.906 13.4633 83.425 13.6186 82.8974 13.6186C82.11 13.6186 81.5167 13.4209 81.1064 13.0127C80.6954 12.6045 80.4644 11.983 80.4016 11.1383H87.6152C87.8023 11.1383 87.9711 11.0606 88.0933 10.9356C88.2155 10.8106 88.291 10.6369 88.291 10.4441V10.4073C88.2939 9.48992 88.1533 8.61347 87.8828 7.82318C87.6123 7.0329 87.2098 6.32877 86.6893 5.75671L86.6843 5.75389V5.75671ZM82.6425 8.82181H80.4094C80.456 8.49412 80.581 7.98703 80.9186 7.56329C81.2561 7.13954 81.8077 6.79913 82.7046 6.79913C83.3205 6.79913 83.7887 6.94744 84.1397 7.27231C84.4907 7.60001 84.7245 8.10427 84.8756 8.82181H82.6425Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M75.8837 11.9252C75.871 11.9047 75.8526 11.8864 75.8315 11.873C75.811 11.8602 75.7898 11.8497 75.7637 11.8468L74.3575 11.6074L72.9514 11.368C72.9281 11.363 72.9048 11.3652 72.8815 11.3708C72.8582 11.3765 72.837 11.3864 72.8193 11.4019C72.801 11.4174 72.7826 11.433 72.7727 11.4542C72.7621 11.4746 72.7522 11.4986 72.7494 11.522C72.6816 12.0001 72.5234 12.5227 72.1851 12.9281C71.8468 13.3314 71.3298 13.6167 70.5424 13.6167C69.6899 13.6167 69.1101 13.1823 68.7436 12.5481C68.377 11.9111 68.2266 11.0742 68.2266 10.2634C68.2266 9.97457 68.2549 9.10942 68.567 8.31348C68.8792 7.52037 69.4738 6.79788 70.6052 6.79788C71.2027 6.79788 71.6681 6.94337 72.0064 7.23717C72.344 7.53096 72.5573 7.97307 72.6456 8.56844C72.6484 8.59174 72.6583 8.61505 72.6689 8.63624C72.6816 8.65672 72.6978 8.67508 72.7155 8.6885C72.7339 8.70404 72.7572 8.7118 72.7776 8.71745C72.801 8.7224 72.8243 8.7224 72.8476 8.71745L74.2904 8.47309L75.7333 8.22873C75.7827 8.22096 75.8216 8.19201 75.8477 8.15599C75.8738 8.11715 75.8865 8.07053 75.8788 8.0211C75.6916 6.83319 75.0807 5.85575 74.1654 5.17423C73.2501 4.49341 72.0312 4.11133 70.625 4.11133C68.8785 4.11133 67.4377 4.72505 66.437 5.81408C65.4362 6.90311 64.8719 8.46815 64.8719 10.3687C64.8719 12.1152 65.4567 13.5997 66.4603 14.645C67.4639 15.6923 68.8855 16.3011 70.5622 16.3011C71.9817 16.3011 73.1802 15.9141 74.0899 15.1909C74.9995 14.4684 75.6288 13.4076 75.907 12.0608C75.912 12.0375 75.912 12.0114 75.907 11.9881C75.9014 11.9648 75.8943 11.9415 75.8781 11.9203L75.8837 11.9259V11.9252Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M65.1789 4.3527C65.1789 4.32657 65.1711 4.30326 65.1584 4.27996C65.1457 4.25665 65.1295 4.23829 65.1118 4.21992C65.0935 4.20439 65.0701 4.19379 65.044 4.18602C64.948 4.15989 64.8519 4.14153 64.7608 4.13164C64.6697 4.11893 64.5786 4.11328 64.4903 4.11328C63.7184 4.11328 63.0348 4.28207 62.4676 4.59141C61.9012 4.89792 61.4485 5.34285 61.142 5.89372V4.59918C61.142 4.54974 61.1215 4.50313 61.0898 4.47205C61.0587 4.43815 61.0142 4.41979 60.9647 4.41979H58.1129C58.0635 4.41979 58.0197 4.44027 57.9879 4.47205C57.9569 4.50595 57.9357 4.54974 57.9357 4.59918V15.8186C57.9357 15.868 57.9561 15.9146 57.9879 15.9485C58.019 15.9824 58.0635 16.0029 58.1129 16.0029H61.1131C61.1625 16.0029 61.2063 15.9824 61.2381 15.9485C61.2691 15.9146 61.2903 15.8708 61.2903 15.8186V10.7626C61.2903 9.65024 61.5163 8.80486 61.9634 8.23563C62.4104 7.66357 63.0835 7.36766 63.9726 7.34647C64.0087 7.34647 64.0426 7.33376 64.0715 7.31257C64.1005 7.29209 64.121 7.26313 64.1337 7.22923L64.6513 5.82804L65.1683 4.42685C65.1761 4.40355 65.181 4.37742 65.1789 4.35129V4.3527Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M14.8725 0.1414C13.7156 0.1414 12.746 0.952169 12.5016 2.03625L12.496 2.06239C12.4931 2.07792 12.491 2.09346 12.4854 2.109L10.3094 12.4576C10.3123 8.50334 10.3144 2.65704 10.3144 2.65704C10.3144 1.35967 9.33411 0.22615 8.03956 0.145638C6.81282 0.067951 5.76757 0.902026 5.51262 2.03555L5.50768 2.06168C5.50485 2.07722 5.50273 2.09275 5.49708 2.10829L3.32679 12.4308V1.53694C3.32679 0.765015 2.70035 0.140694 1.93055 0.140694C1.16074 0.140694 0.534302 0.764308 0.534302 1.53694V16.0086H3.32609V15.9881C3.32609 15.9881 3.33103 15.9825 3.33103 15.9803C3.33103 15.9803 6.08115 2.97768 6.13058 2.70224C6.20615 2.28909 6.45828 2.00589 6.82694 2.00589C7.22456 2.00589 7.5233 2.29968 7.5233 2.70224V15.9959L10.3024 16.0065V15.986H10.3151C10.3151 15.986 13.068 2.97274 13.1175 2.70012C13.193 2.28697 13.4452 2.00377 13.8138 2.00377C14.2114 2.00377 14.5102 2.29757 14.5102 2.70012V16.0044H17.302V2.57441C17.302 1.23043 16.2129 0.1414 14.8689 0.1414H14.8725Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M26.9896 0.141331C26.2692 0.141331 25.6406 0.634996 25.4711 1.33418L22.4611 13.0296C22.4611 13.0296 22.4562 13.0218 22.4534 13.019C22.4223 13.1567 22.3856 13.3078 22.3467 13.4689L22.1596 14.1991C22.1052 14.3086 22.0141 14.3891 21.8869 14.3891C21.7104 14.3891 21.567 14.2464 21.567 14.0692V1.53687C21.5642 0.764945 20.9406 0.140625 20.1687 0.140625C19.3967 0.140625 18.7731 0.764239 18.7731 1.53687V14.1448C18.7731 15.2288 19.5917 16.1773 20.6736 16.2479C21.685 16.3129 22.5501 15.6399 22.7846 14.714L25.7607 3.21915V20.6309C25.7607 21.6839 25.0198 22.6275 23.9803 22.7835C22.6857 22.9756 21.5628 21.9671 21.5628 20.7093V18.3674C21.5628 17.5955 20.9392 16.9718 20.1665 16.9718C19.3939 16.9718 18.771 17.5955 18.771 18.3674V18.6506C18.771 21.3414 20.9731 23.5406 23.6603 23.5406C26.3476 23.5406 28.5419 21.3463 28.5504 18.664V1.70354C28.5553 0.840513 27.8533 0.141331 26.9903 0.141331H26.9896Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M31.4478 23.3659V18.7217H33.3525C34.2212 18.7217 34.7862 19.2853 34.7862 19.9491C34.7862 20.4138 34.5072 20.7458 34.1958 20.8778C34.534 21.0036 35.0178 21.3955 35.0178 22.0191C35.0178 22.7423 34.3942 23.3659 33.4655 23.3659H31.4478ZM32.2776 20.5932H33.3327C33.7042 20.5932 33.95 20.3475 33.95 20.0092C33.95 19.6709 33.7042 19.4187 33.3327 19.4187H32.2776V20.5932ZM32.2776 22.6696H33.445C33.8765 22.6696 34.1823 22.3581 34.1823 21.9598C34.1823 21.5615 33.8772 21.2564 33.445 21.2564H32.2776V22.6696Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M38.6301 23.3659V18.7217H41.9678V19.4717H39.4593V20.5996H41.4367V21.3426H39.4593V22.6166H42.0342V23.3666H38.6308L38.6301 23.3659Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M45.6333 23.3659V18.7217H46.377L48.8121 21.9598H48.8319V18.7217H49.6617V23.3659H48.9124L46.4836 20.1278H46.4575V23.3659H45.6347H45.6333Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M53.5657 23.3659V18.7217H56.9034V19.4717H54.3948V20.5996H56.3723V21.3426H54.3948V22.6166H56.9698V23.3666H53.5664L53.5657 23.3659Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M60.5682 23.3659V18.7217H63.8721V19.5113H61.3974V20.7387H63.3417V21.5149H61.3974V23.3659H60.5682Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M67.3387 23.3659V18.7217H68.1686V23.3659H67.3387Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M72.951 23.3659V19.4844H71.5774V18.7217H75.1538V19.4844H73.7809V23.3659H72.951Z",
                                fill: r
                            }), (0, l.jsx)("path", {
                                d: "M78.1892 22.7157L78.733 22.1909C78.9519 22.4233 79.3234 22.6952 79.8743 22.6952C80.4252 22.6952 80.7366 22.3901 80.7366 22.0581C80.7366 21.1097 78.3418 21.6535 78.3418 19.9613C78.3418 19.2318 78.9717 18.6406 79.9541 18.6406C80.6837 18.6406 81.2141 18.986 81.4598 19.2579L80.9231 19.7883C80.7437 19.6223 80.4118 19.3836 79.981 19.3836C79.4562 19.3836 79.1914 19.6555 79.1914 19.9606C79.1914 20.9091 81.5799 20.3653 81.5799 22.0574C81.5799 22.8004 80.9436 23.4445 79.9019 23.4445C79.0459 23.4445 78.4618 23.0532 78.1892 22.715V22.7157Z",
                                fill: r
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_3570_48960",
                                children: (0, l.jsx)("rect", {
                                    width: "106.2",
                                    height: "24",
                                    fill: "white",
                                    transform: "translate(0.400391)"
                                })
                            })
                        })]
                    })
                },
                a = e => {
                    let {
                        width: C,
                        height: t,
                        variant: i = "dark",
                        className: s,
                        "data-testid": r
                    } = e, a = "var(--b-color-text-".concat(i, ")");
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("svg", {
                            viewBox: "0 0 150 37",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            width: C,
                            height: t,
                            className: s,
                            "data-testid": r,
                            children: (0, l.jsxs)("g", {
                                id: "Vector",
                                children: [(0, l.jsx)("path", {
                                    d: "M139.747 4.29262C139.782 4.31282 139.82 4.32493 139.863 4.32493H142.507C142.535 4.32493 142.562 4.31887 142.588 4.30878C142.615 4.29868 142.637 4.28252 142.659 4.26435L146.772 0.398816C146.806 0.366503 146.829 0.32611 146.839 0.281679C146.849 0.237248 146.847 0.190797 146.828 0.146365C146.812 0.101934 146.782 0.065581 146.745 0.0413457C146.709 0.0150908 146.664 0.000953555 146.62 0.000953555H142.426C142.389 0.000953555 142.353 0.0110516 142.32 0.0272085C142.288 0.0433653 142.262 0.0696202 142.239 0.0999143L139.676 3.96544C139.654 3.99978 139.64 4.04017 139.638 4.08056C139.636 4.12095 139.644 4.16336 139.664 4.19972C139.684 4.23607 139.713 4.26636 139.747 4.28858V4.29262Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M147.573 7.93397C146.137 6.43744 144.073 5.59325 141.566 5.59325C139.06 5.59325 137.011 6.43744 135.582 7.93397C134.15 9.4305 133.343 11.5794 133.343 14.1927C133.343 16.8061 134.15 18.9368 135.582 20.4293C137.013 21.9198 139.07 22.7619 141.566 22.7619C144.062 22.7619 146.137 21.9218 147.573 20.4293C149.008 18.9388 149.82 16.796 149.82 14.1927C149.82 11.5895 149.011 9.4305 147.573 7.93397ZM144.468 17.2545C143.971 18.2279 143.093 18.9772 141.566 18.9772C140.039 18.9772 139.181 18.2279 138.688 17.2545C138.196 16.281 138.084 15.0854 138.084 14.1907C138.084 13.296 138.198 12.0863 138.688 11.1088C139.181 10.1293 140.051 9.37597 141.566 9.37597C143.081 9.37597 143.971 10.1313 144.468 11.1088C144.965 12.0883 145.078 13.292 145.078 14.1907C145.078 15.0894 144.965 16.281 144.468 17.2545Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M131.055 0.000953555H126.523C126.454 0.000953555 126.391 0.0292281 126.347 0.075679C126.302 0.12213 126.274 0.186757 126.274 0.257444V22.0753C126.274 22.146 126.302 22.2106 126.347 22.257C126.391 22.3035 126.454 22.3318 126.523 22.3318H131.055C131.124 22.3318 131.187 22.3035 131.232 22.257C131.276 22.2106 131.305 22.146 131.305 22.0753V0.257444C131.305 0.186757 131.276 0.12213 131.232 0.075679C131.187 0.0292281 131.124 0.000953555 131.055 0.000953555Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M58.5091 10.1616C59.3548 9.64862 59.9834 9.02456 60.4012 8.27731C60.8189 7.53005 61.0258 6.66364 61.0258 5.66595C61.0258 3.75944 60.4478 2.3437 59.2777 1.40458C58.1076 0.463444 56.3433 0.000953555 53.9666 0.000953555H43.9326C43.8636 0.000953555 43.8007 0.0292281 43.7561 0.075679C43.7115 0.12213 43.6831 0.186757 43.6831 0.257444V22.0753C43.6831 22.146 43.7115 22.2106 43.7561 22.257C43.8007 22.3035 43.8636 22.3318 43.9326 22.3318H54.2647C56.0574 22.3318 58.0022 21.9016 59.4967 20.8635C60.9913 19.8254 62.0397 18.1794 62.0397 15.7499C62.0397 14.3785 61.7274 13.2031 61.1292 12.26C60.531 11.3168 59.6488 10.6039 58.5071 10.1616H58.5091ZM48.8725 6.5364V4.24011H53.0115C54.0254 4.24011 54.7697 4.41783 55.2604 4.78944C55.7512 5.16105 55.9864 5.7225 55.9864 6.48995C55.9864 7.45735 55.6315 8.04303 55.1266 8.38636C54.6216 8.7297 53.9666 8.83068 53.3704 8.83068H48.8725V6.53438V6.5364ZM56.0574 17.4423C55.5241 17.8765 54.721 18.0906 53.6401 18.0906H48.8746V12.6134H53.7314C54.7818 12.6134 55.5626 12.8477 56.0817 13.3223C56.6009 13.7969 56.8544 14.5118 56.8544 15.4752C56.8544 16.3557 56.5907 17.0101 56.0594 17.4443L56.0574 17.4423Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M78.5408 10.3413C78.5408 8.76605 77.9486 7.57852 76.7765 6.78683C75.6024 5.99313 73.8462 5.59325 71.5141 5.59325C69.4233 5.59325 67.7016 6.02746 66.4362 6.83934C65.1708 7.65123 64.3617 8.84078 64.096 10.3535C64.0899 10.3878 64.0899 10.4221 64.096 10.4544C64.1041 10.4868 64.1163 10.5191 64.1366 10.5473C64.1548 10.5756 64.1792 10.5999 64.2076 10.616C64.2359 10.6342 64.2664 10.6463 64.2988 10.6524L68.456 11.3552C68.4905 11.3612 68.525 11.3592 68.5574 11.3511C68.5899 11.3431 68.6223 11.3269 68.6487 11.3067C68.6771 11.2845 68.6994 11.2582 68.7156 11.228C68.7318 11.1977 68.742 11.1633 68.746 11.129C68.815 10.406 69.0522 9.87683 69.472 9.52744C69.8918 9.17805 70.4961 9.01042 71.2991 9.01042C72.1022 9.01042 72.6943 9.08919 73.1263 9.36587C73.5582 9.64256 73.7975 10.1172 73.7975 10.9068C73.8279 11.4905 73.5035 11.8359 72.8971 12.0661C72.2908 12.2983 71.4005 12.4155 70.2974 12.5447C68.7967 12.7184 67.1135 12.9143 65.7995 13.6212C64.4854 14.3281 63.5424 15.5459 63.5242 17.7674C63.5242 19.3084 64.0514 20.5565 65.0045 21.4189C65.9556 22.2813 67.3326 22.7599 69.0319 22.7599C70.0216 22.7599 70.9078 22.6266 71.7007 22.358C72.4936 22.0874 73.1912 21.6814 73.8036 21.1361C73.8036 21.1563 73.8036 21.1786 73.8036 21.2008C73.8036 21.223 73.8036 21.2452 73.8036 21.2694C73.8036 21.3623 73.7996 21.4674 73.7975 21.5986C73.7975 21.7299 73.7935 21.8854 73.7935 22.0753C73.7935 22.146 73.8219 22.2106 73.8665 22.257C73.9111 22.3035 73.974 22.3318 74.0429 22.3318H78.2893C78.3583 22.3318 78.4212 22.3035 78.4658 22.257C78.5104 22.2106 78.5388 22.146 78.5388 22.0753V10.3413H78.5408ZM73.7996 15.3924V15.9639C73.7996 17.101 73.54 17.9472 73.0107 18.5066C72.4834 19.0681 71.6865 19.3427 70.6157 19.3427C69.8269 19.3427 69.2388 19.1993 68.8494 18.9065C68.4601 18.6137 68.2674 18.1734 68.2674 17.5816C68.2674 16.9899 68.4337 16.5577 68.8048 16.2245C69.1759 15.8912 69.7518 15.665 70.5691 15.5115C70.7293 15.4812 70.8956 15.455 71.0619 15.4287C71.2282 15.4045 71.3945 15.3803 71.5587 15.356C71.9785 15.2975 72.3902 15.2389 72.7714 15.1581C73.1526 15.0773 73.5014 14.9703 73.7975 14.8168V15.3883L73.7996 15.3924Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M121.794 7.90772C121.105 7.15036 120.281 6.57074 119.354 6.18297C118.428 5.79319 117.395 5.59325 116.284 5.59325C113.928 5.59325 111.894 6.49803 110.45 8.02485C109.006 9.55168 108.15 11.7005 108.15 14.1927C108.15 16.6849 108.967 18.8964 110.393 20.399C111.819 21.8996 113.853 22.7619 116.284 22.7619C118.042 22.7619 119.525 22.3641 120.725 21.5764C121.926 20.7868 122.842 19.6073 123.469 18.0401C123.483 18.0037 123.489 17.9654 123.487 17.927C123.485 17.8886 123.475 17.8523 123.455 17.8179C123.437 17.7836 123.41 17.7553 123.38 17.7331C123.349 17.7109 123.315 17.6968 123.276 17.6907L119.76 17.0969C119.703 17.0868 119.644 17.0969 119.596 17.1252C119.547 17.1535 119.509 17.1979 119.486 17.2524C119.32 17.6766 118.927 18.1088 118.391 18.4339C117.856 18.7591 117.174 18.9792 116.428 18.9792C115.317 18.9792 114.477 18.7005 113.897 18.1269C113.315 17.5513 112.991 16.6789 112.902 15.4893H123.098C123.362 15.4893 123.601 15.3803 123.773 15.2025C123.946 15.0248 124.053 14.7825 124.053 14.5118V14.4613C124.059 13.1688 123.858 11.9348 123.475 10.822C123.092 9.70921 122.522 8.71758 121.788 7.91378L121.794 7.90772ZM116.079 12.2236H112.922C112.987 11.7611 113.165 11.0482 113.644 10.4524C114.122 9.85664 114.899 9.37597 116.167 9.37597C117.039 9.37597 117.7 9.58399 118.196 10.0445C118.693 10.5049 119.026 11.2158 119.237 12.2256H116.079V12.2236Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M106.524 16.594C106.506 16.5658 106.479 16.5415 106.451 16.5213C106.422 16.5032 106.39 16.4911 106.358 16.485L102.383 15.8145C102.35 15.8084 102.316 15.8104 102.284 15.8185C102.251 15.8266 102.221 15.8407 102.194 15.8609C102.168 15.8811 102.144 15.9074 102.127 15.9357C102.111 15.9639 102.099 15.9962 102.093 16.0306C101.996 16.7031 101.772 17.4403 101.296 18.0098C100.819 18.5793 100.087 18.9792 98.974 18.9792C97.7674 18.9792 96.9481 18.3693 96.433 17.4726C95.9159 16.5779 95.7009 15.3964 95.7009 14.2533C95.7009 13.8454 95.7415 12.6275 96.1815 11.5087C96.6216 10.3918 97.4632 9.37597 99.0632 9.37597C99.9068 9.37597 100.566 9.57995 101.044 9.99397C101.523 10.408 101.823 11.03 101.949 11.8682C101.955 11.9025 101.965 11.9348 101.983 11.9631C102 11.9914 102.024 12.0176 102.05 12.0358C102.077 12.056 102.107 12.0701 102.14 12.0782C102.172 12.0863 102.204 12.0863 102.239 12.0822L106.315 11.3915C106.384 11.3794 106.441 11.3411 106.477 11.2885C106.514 11.236 106.532 11.1674 106.522 11.0987C106.256 9.42646 105.394 8.05111 104.101 7.0918C102.809 6.1345 101.085 5.59325 99.0956 5.59325C96.6257 5.59325 94.5917 6.45764 93.1762 7.99254C91.7607 9.52744 90.9617 11.7288 90.9617 14.4068C90.9617 16.8667 91.7891 18.955 93.2086 20.4293C94.6282 21.9036 96.6378 22.7619 99.0064 22.7619C101.014 22.7619 102.707 22.2187 103.995 21.2008C105.285 20.1829 106.169 18.6904 106.562 16.794C106.571 16.7597 106.571 16.7253 106.562 16.691C106.556 16.6567 106.542 16.6243 106.524 16.5961V16.594Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M91.3916 5.93052C91.3896 5.89417 91.3795 5.85984 91.3632 5.82752C91.347 5.79521 91.3227 5.76693 91.2963 5.74472C91.2679 5.7225 91.2375 5.70634 91.201 5.69827C91.0631 5.66393 90.9313 5.63768 90.7995 5.6195C90.6697 5.60133 90.5419 5.59325 90.4162 5.59325C89.3252 5.59325 88.3579 5.83156 87.5548 6.26578C86.7518 6.69797 86.113 7.32405 85.679 8.09958V6.27789C85.679 6.20721 85.6506 6.14258 85.606 6.09613C85.5614 6.04968 85.4985 6.0214 85.4296 6.0214H81.3981C81.3292 6.0214 81.2663 6.04968 81.2217 6.09613C81.1771 6.14258 81.1487 6.20721 81.1487 6.27789V22.0773C81.1487 22.148 81.1771 22.2126 81.2217 22.259C81.2663 22.3055 81.3292 22.3338 81.3981 22.3338H85.6385C85.7074 22.3338 85.7703 22.3055 85.8149 22.259C85.8595 22.2126 85.8879 22.148 85.8879 22.0773V14.9582C85.8879 13.391 86.2063 12.2034 86.841 11.3996C87.4758 10.5958 88.4228 10.1778 89.6821 10.1475C89.7328 10.1475 89.7815 10.1293 89.82 10.101C89.8606 10.0727 89.891 10.0323 89.9092 9.98185L91.3734 6.03958C91.3856 6.00525 91.3916 5.96889 91.3896 5.93456L91.3916 5.93052Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M20.2689 0.000953555C18.6304 0.000953555 17.2636 1.14203 16.9168 2.67087H16.9148L16.9067 2.70723C16.9026 2.72944 16.8985 2.75166 16.8925 2.77387L13.8161 17.3453C13.8202 11.7773 13.8242 3.54738 13.8242 3.54738C13.8263 1.71964 12.4412 0.12213 10.61 0.00701238C8.87412 -0.102046 7.3978 1.07337 7.03683 2.66886H7.03481L7.02669 2.70521C7.02264 2.72742 7.01858 2.74964 7.0125 2.77186L3.94428 17.305V1.96603C3.94631 0.881502 3.06214 0.000953555 1.97315 0.000953555C0.884167 0.000953555 0 0.881502 0 1.96603V22.3398H3.9463V22.3116C3.9463 22.3116 3.95239 22.3055 3.95442 22.3015C3.95442 22.3015 7.84394 3.99372 7.91492 3.60797C8.0224 3.02633 8.37728 2.62846 8.89845 2.62846C9.46018 2.62846 9.88199 3.04046 9.88199 3.60797V22.3257L13.8121 22.3419C13.8121 22.3419 13.8121 22.3318 13.8121 22.3136L13.8323 22.3176C13.8323 22.3176 17.7239 3.99372 17.7949 3.60797C17.9024 3.02633 18.2572 2.62846 18.7784 2.62846C19.3401 2.62846 19.7619 3.04046 19.7619 3.60797V22.3419H23.7082V3.42621C23.7082 1.53384 22.1691 0.000953555 20.2689 0.000953555Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M37.3986 0.000953555C36.3806 0.000953555 35.4924 0.695698 35.2511 1.68127L30.5687 19.7931C30.4916 19.9486 30.3638 20.0597 30.1813 20.0597C29.9319 20.0597 29.7291 19.8577 29.7291 19.6093V1.96603C29.7271 0.881502 28.8449 0.000953555 27.7539 0.000953555C26.6629 0.000953555 25.7808 0.881502 25.7808 1.96603V19.7184C25.7808 21.2452 26.9387 22.5802 28.4677 22.6791C29.8974 22.772 31.1223 21.8228 31.4508 20.5202L35.6607 4.33503V28.851C35.6607 30.3314 34.6143 31.6644 33.1441 31.8825C31.3149 32.1551 29.7271 30.7333 29.7271 28.9601V25.6641C29.7271 24.5796 28.8429 23.699 27.7539 23.699C26.6649 23.699 25.7808 24.5796 25.7808 25.6641V26.064C25.7808 29.8508 28.8916 32.9488 32.6939 32.9488C36.4962 32.9488 39.5949 29.8608 39.607 26.0842V2.20233C39.6091 0.986522 38.6194 0.000953555 37.3986 0.000953555Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M43.823 34.5362V26.3237H44.7065V34.5362H43.823Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M47.4767 33.0111V29.6674H46.4165V28.9048H47.0644C47.3825 28.9048 47.5356 28.7054 47.5356 28.3182V27.0276H48.3013V28.9048H49.5383V29.6674H48.3013V33.0111C48.3013 33.6094 48.5959 33.891 49.0671 33.891C49.2673 33.891 49.4676 33.8558 49.609 33.8088C49.6914 33.7737 49.7739 33.7502 49.8328 33.715V34.4776C49.7621 34.5128 49.6797 34.5362 49.5972 34.5714C49.4558 34.6184 49.2556 34.6536 49.0317 34.6536C48.054 34.6536 47.4767 34.0787 47.4767 33.0111Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M51.1917 28.7875V26.3237H51.9574V28.7875H51.1917Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M53.2569 33.6563L53.846 33.0697C53.952 33.2222 54.0816 33.363 54.2229 33.4803C54.4703 33.7033 54.8473 33.891 55.3185 33.891C56.1549 33.891 56.5554 33.4803 56.5554 32.9524C56.5554 31.6619 53.4925 32.3071 53.4925 30.3713C53.4925 29.5618 54.2465 28.7875 55.3774 28.7875C55.9782 28.7875 56.4141 28.9869 56.7321 29.1746C56.9089 29.2802 57.0738 29.4093 57.2034 29.5501L56.6143 30.1367C56.5319 30.0311 56.4259 29.9255 56.3081 29.8434C56.0842 29.7026 55.7897 29.5501 55.3774 29.5501C54.7295 29.5501 54.3172 29.9607 54.3172 30.3713C54.3172 31.6032 57.3801 30.9579 57.3801 32.9524C57.3801 33.891 56.6026 34.6536 55.3185 34.6536C54.6117 34.6536 54.0933 34.4072 53.7517 34.1608C53.5514 34.02 53.3865 33.8558 53.2569 33.6563Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M64.9743 34.5362V33.7737C64.8565 33.9379 64.7033 34.0904 64.5266 34.2195C64.2085 34.4424 63.7609 34.6536 63.1483 34.6536C61.9703 34.6536 61.1457 33.8323 61.1457 33.0111C61.1457 32.0725 61.7229 31.4859 62.7949 31.3099L64.9743 30.9579C64.9743 30.1249 64.397 29.5501 63.5606 29.5501C63.0541 29.5501 62.6653 29.7612 62.3944 29.9607C62.2412 30.0897 62.0999 30.2188 61.9703 30.3713L61.4402 29.8434C61.5933 29.6439 61.7818 29.4679 61.9938 29.3154C62.359 29.0456 62.8656 28.7875 63.5606 28.7875C64.8565 28.7875 65.7989 29.726 65.7989 30.9579V34.5362H64.9743ZM64.9743 32.0138V31.6619L63.0305 32.0138C62.3237 32.1429 61.9703 32.4831 61.9703 33.0111C61.9703 33.4803 62.3826 33.891 63.1483 33.891C64.2203 33.891 64.9743 33.1401 64.9743 32.0138Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M67.8549 34.5362V26.3237H68.6796V34.5362H67.8549Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M70.8028 34.5362V26.3237H71.6274V34.5362H70.8028Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M75.6406 36.8827V36.1201C75.6995 36.1436 75.7702 36.167 75.8291 36.1787C75.9469 36.2139 76.0765 36.2374 76.2296 36.2374C76.7597 36.2374 77.066 35.9558 77.2898 35.3575L77.5844 34.5362L75.2872 28.9048H76.1707L77.9967 33.4803L79.8226 28.9048H80.7061L78.1145 35.3575C77.6432 36.5307 77.1603 37 76.3474 37C76.1471 37 75.9822 36.9765 75.8409 36.9413C75.7584 36.9296 75.6995 36.9061 75.6406 36.8827Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M84.4197 34.6536C82.8294 34.6536 81.5335 33.363 81.5335 31.7205C81.5335 30.078 82.8294 28.7875 84.4197 28.7875C86.0101 28.7875 87.3059 30.078 87.3059 31.7205C87.3059 33.363 86.0101 34.6536 84.4197 34.6536ZM84.4197 33.891C85.5389 33.891 86.4813 32.9524 86.4813 31.7205C86.4813 30.4886 85.5389 29.5501 84.4197 29.5501C83.3006 29.5501 82.3582 30.4886 82.3582 31.7205C82.3582 32.9407 83.3006 33.891 84.4197 33.891Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M88.8972 32.1898V28.9048H89.7218V32.1898C89.7218 33.187 90.4286 33.891 91.3122 33.891C92.2546 33.891 93.0203 33.1401 93.0203 32.0138V28.9048H93.845V34.5362H93.0203V33.7737C92.9025 33.9379 92.7494 34.0904 92.5727 34.2195C92.2546 34.4424 91.807 34.6536 91.1944 34.6536C89.8985 34.6536 88.8972 33.6563 88.8972 32.1898Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M95.9061 34.5362V28.9048H96.7307V29.6674C96.8603 29.5149 97.0134 29.3624 97.1901 29.2333C97.5082 29.0104 97.9559 28.7875 98.6156 28.7875H98.8512V29.6087H98.4977C97.5553 29.6087 96.7307 30.3127 96.7307 31.4272V34.5362H95.9061Z",
                                    fill: a
                                }), (0, l.jsx)("path", {
                                    d: "M99.5548 33.6563L100.144 33.0697C100.25 33.2222 100.379 33.363 100.521 33.4803C100.768 33.7033 101.145 33.891 101.616 33.891C102.453 33.891 102.853 33.4803 102.853 32.9524C102.853 31.6619 99.7904 32.3071 99.7904 30.3713C99.7904 29.5618 100.544 28.7875 101.675 28.7875C102.276 28.7875 102.712 28.9869 103.03 29.1746C103.207 29.2802 103.372 29.4093 103.501 29.5501L102.912 30.1367C102.83 30.0311 102.724 29.9255 102.606 29.8434C102.382 29.7026 102.088 29.5501 101.675 29.5501C101.027 29.5501 100.615 29.9607 100.615 30.3713C100.615 31.6032 103.678 30.9579 103.678 32.9524C103.678 33.891 102.9 34.6536 101.616 34.6536C100.91 34.6536 100.391 34.4072 100.05 34.1608C99.8493 34.02 99.6843 33.8558 99.5548 33.6563Z",
                                    fill: a
                                })]
                            })
                        })
                    })
                }
        },
        50647: e => {
            e.exports = {
                "w-full": "RegistrationCode_w-full__dGsbl",
                "w-fit": "RegistrationCode_w-fit__MqmVB",
                "w-5/12": "RegistrationCode_w-5__12___vBrN",
                "w-7/12": "RegistrationCode_w-7__12__GiJF9",
                "h-full": "RegistrationCode_h-full__mKd1c",
                flex: "RegistrationCode_flex__KZhHM",
                grow: "RegistrationCode_grow__KYLaP",
                "flex-1": "RegistrationCode_flex-1__k6ryc",
                "shrink-0": "RegistrationCode_shrink-0__XOFf_",
                "self-center": "RegistrationCode_self-center__qxy5q",
                "self-end": "RegistrationCode_self-end__UxFeR",
                "items-center": "RegistrationCode_items-center__LvkI0",
                "justify-center": "RegistrationCode_justify-center__2rubu",
                "gap-xs": "RegistrationCode_gap-xs__4rfWY",
                "cursor-pointer": "RegistrationCode_cursor-pointer__eYAjo",
                "touch-security-zone": "RegistrationCode_touch-security-zone__lyiu4",
                "touch-security-zone-always": "RegistrationCode_touch-security-zone-always__kLELG",
                loaderWrapper: "RegistrationCode_loaderWrapper__a15aD"
            }
        },
        54737: (e, C, t) => {
            "use strict";
            t.d(C, {
                f: () => _
            });
            var l = t(37876);
            t(14232);
            var i = t(23977),
                s = t.n(i),
                r = t(54704),
                a = t(84640),
                o = t(39126),
                n = t(28980),
                c = t(72668);
            let _ = e => {
                let {
                    children: C,
                    className: t,
                    onClose: i
                } = e, {
                    trans: _
                } = (0, r.m)(["new-reservation"]), d = (0, c.O9)(i);
                return (0, l.jsx)("div", {
                    className: (0, a.x)(t, s().ribbonWrapper),
                    children: (0, l.jsxs)("div", {
                        className: s().ribbon,
                        children: [C, d && (0, l.jsx)("button", {
                            onClick: i,
                            className: "cursor-pointer",
                            children: (0, l.jsx)(o.I, {
                                size: "m",
                                icon: n.A,
                                ariaLabel: _("tooltip_close")
                            })
                        })]
                    })
                })
            }
        },
        55147: (e, C, t) => {
            "use strict";
            t.d(C, {
                D: () => s
            });
            var l = t(14232),
                i = t(38282);
            let s = () => {
                let [e, C] = (0, l.useState)(!1), t = (0, l.useRef)(0), s = (0, l.useRef)(0), {
                    media: r
                } = (0, i.Q)(), a = (0, l.useCallback)(() => {
                    if ("mobile" === r || "tablet" === r) return void C(!1);
                    let e = window.scrollY > t.current,
                        l = document.documentElement.scrollHeight !== s.current;
                    C(e || l), t.current = window.scrollY, s.current = document.documentElement.scrollHeight
                }, [r, C]);
                return (0, l.useEffect)(() => (window.addEventListener("scroll", a), () => {
                    window.removeEventListener("scroll", a)
                }), [a]), e
            }
        },
        61083: e => {
            e.exports = {
                "w-full": "ItsAllYoursBanner_w-full__PidA_",
                "w-fit": "ItsAllYoursBanner_w-fit__wlqIv",
                "w-5/12": "ItsAllYoursBanner_w-5__12__XwMvp",
                "w-7/12": "ItsAllYoursBanner_w-7__12__H3RIo",
                "h-full": "ItsAllYoursBanner_h-full__XC12V",
                flex: "ItsAllYoursBanner_flex__rSutZ",
                grow: "ItsAllYoursBanner_grow__pLYCH",
                "flex-1": "ItsAllYoursBanner_flex-1__pWwX4",
                "shrink-0": "ItsAllYoursBanner_shrink-0__XhwnE",
                "self-center": "ItsAllYoursBanner_self-center__5oOxb",
                "self-end": "ItsAllYoursBanner_self-end__txUmt",
                "items-center": "ItsAllYoursBanner_items-center__CxUht",
                "justify-center": "ItsAllYoursBanner_justify-center__4d8AO",
                "gap-xs": "ItsAllYoursBanner_gap-xs__xYnqS",
                "cursor-pointer": "ItsAllYoursBanner_cursor-pointer__E4h2g",
                "touch-security-zone": "ItsAllYoursBanner_touch-security-zone__1WcRr",
                "touch-security-zone-always": "ItsAllYoursBanner_touch-security-zone-always__QDLSz",
                bannerContainer: "ItsAllYoursBanner_bannerContainer__f_Py9",
                innerContainer: "ItsAllYoursBanner_innerContainer__cUKQ0",
                advantagesList: "ItsAllYoursBanner_advantagesList__yU5ah"
            }
        },
        61417: (e, C, t) => {
            "use strict";
            t.d(C, {
                Y: () => u
            });
            var l = t(5750),
                i = t(82802),
                s = t(64830),
                r = t(7338),
                a = t(53818),
                o = t(72668),
                n = t(84703),
                c = t(67579),
                _ = t(75918),
                d = t(97815);
            let u = e => {
                var C;
                let {
                    queryUtils: t
                } = (0, a.Z)(), u = (0, n.QD)(), {
                    cart: h
                } = (0, _._$)(), {
                    analyticsProcessType: m
                } = (0, d.v1)(), p = (0, o.O9)(h) ? h.hotelId : null != (C = null == e ? void 0 : e.id) ? C : t.getRawParam("hotel"), f = t.getRawParam("arrive"), x = t.getRawParam("depart"), V = t.getRawParam("child"), H = (0, o.O9)(V) && parseInt(V) > 0, L = t.getMarketPriceCodeParam(), g = u.properties.cmsLanguage, j = (0, o.O9)(p) && (0, o.O9)(g), {
                    data: w
                } = (0, l.x)("hotel-availability-options", j ? [p, g, H, L] : null, () => {
                    var C;
                    return i.k.resolve("getHotelById")({
                        hotelId: p,
                        language: g,
                        hasChildren: H,
                        process: m,
                        skipAnalytics: null != (C = null == e ? void 0 : e.skipAnalytics) && C,
                        marketprice: L
                    })()
                }, {
                    errorDefinitions: [{
                        error: s._,
                        handler: () => r.C.toHotelList(f, x)
                    }, {
                        error: c.l,
                        handler: () => t.removeParams(["child", "childages"])
                    }],
                    quietError: !0
                });
                return w
            }
        },
        63261: e => {
            e.exports = {
                "w-full": "Registration_w-full__PUm6I",
                "w-fit": "Registration_w-fit__QqmiE",
                "w-5/12": "Registration_w-5__12__7d0wf",
                "w-7/12": "Registration_w-7__12__vj_po",
                "h-full": "Registration_h-full__yKLQT",
                flex: "Registration_flex__aq4Gg",
                grow: "Registration_grow__Bn42t",
                "flex-1": "Registration_flex-1__qt7YF",
                "shrink-0": "Registration_shrink-0__ej0HU",
                "self-center": "Registration_self-center__CAqIz",
                "self-end": "Registration_self-end___PLyi",
                "items-center": "Registration_items-center__dFPi_",
                "justify-center": "Registration_justify-center__zFfvz",
                "gap-xs": "Registration_gap-xs__7vcr5",
                "cursor-pointer": "Registration_cursor-pointer__2tj96",
                "touch-security-zone": "Registration_touch-security-zone__MDI8i",
                "touch-security-zone-always": "Registration_touch-security-zone-always__0DJj6",
                container: "Registration_container__dcz6t",
                loaderWrapper: "Registration_loaderWrapper__eI5wM"
            }
        },
        64737: e => {
            e.exports = {
                "touch-security-zone": "MyBarceloLoginButton_touch-security-zone__uZUPm",
                "touch-security-zone-always": "MyBarceloLoginButton_touch-security-zone-always__NJ_9H",
                container: "MyBarceloLoginButton_container__9M0Ok",
                button: "MyBarceloLoginButton_button__4Qg6T"
            }
        },
        67158: e => {
            e.exports = {
                "w-full": "GroupCodeRibbon_w-full__3qrFp",
                "w-fit": "GroupCodeRibbon_w-fit__whZW_",
                "w-5/12": "GroupCodeRibbon_w-5__12__d1sW7",
                "w-7/12": "GroupCodeRibbon_w-7__12__GaF0v",
                "h-full": "GroupCodeRibbon_h-full__Fevk5",
                flex: "GroupCodeRibbon_flex__hp1Cb",
                grow: "GroupCodeRibbon_grow__Pb45U",
                "flex-1": "GroupCodeRibbon_flex-1__mXPqc",
                "shrink-0": "GroupCodeRibbon_shrink-0__WvZED",
                "self-center": "GroupCodeRibbon_self-center__sfXp4",
                "self-end": "GroupCodeRibbon_self-end__kzXD0",
                "items-center": "GroupCodeRibbon_items-center__cn3uT",
                "justify-center": "GroupCodeRibbon_justify-center__FIFlp",
                "gap-xs": "GroupCodeRibbon_gap-xs__p5otl",
                "cursor-pointer": "GroupCodeRibbon_cursor-pointer__isObk",
                "touch-security-zone": "GroupCodeRibbon_touch-security-zone__flJpJ",
                "touch-security-zone-always": "GroupCodeRibbon_touch-security-zone-always__cCr_X",
                container: "GroupCodeRibbon_container__koLQF",
                mainRibbonWrapper: "GroupCodeRibbon_mainRibbonWrapper__eGDux",
                onlyMainRibbon: "GroupCodeRibbon_onlyMainRibbon__cr1EX",
                ribbonText: "GroupCodeRibbon_ribbonText__4k5xB"
            }
        },
        76213: e => {
            e.exports = {
                tooltipWrapper: "LanguageCurrencyButton_tooltipWrapper__IT6zH"
            }
        },
        77263: (e, C, t) => {
            "use strict";
            t.d(C, {
                a: () => l,
                p: () => i
            });
            let l = e => {
                    let {
                        groupId: C,
                        id: t
                    } = e;
                    return "".concat(C).concat("-").concat(t)
                },
                i = e => {
                    let [C, t] = e.split("-");
                    return {
                        groupId: C,
                        id: t
                    }
                }
        },
        77487: (e, C, t) => {
            "use strict";
            t.d(C, {
                A: () => s,
                z: () => i
            });
            var l = t(37876);
            let i = e => {
                    let {
                        color: C
                    } = e;
                    return (0, l.jsx)("path", {
                        d: "M9 18.5L15.75 11.75L9 5",
                        stroke: C,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                },
                s = i
        },
        79708: (e, C, t) => {
            "use strict";
            t.d(C, {
                Ej: () => o,
                YM: () => c,
                cH: () => n,
                ht: () => a,
                pE: () => _
            });
            var l = t(77263);
            let i = {
                    VISA: "visa",
                    VISA_DEBIT: "visa-debit",
                    VISA_ELECTRON: "visa-electron",
                    AMEX: "american-express",
                    MASTER_DEBIT: "mastercard",
                    MASTER: "mastercard",
                    MAESTRO: "maestro",
                    PAYPAL: "paypal",
                    JCB: "jcb",
                    DINER_CLUB: "dinners-club",
                    DISCOVER: "discover",
                    UNION_PAY: "union-pay",
                    APPLE_PAY: "apple-pay",
                    GOOGLE_PAY: "google-pay",
                    WAFACASH: "wafacash"
                },
                s = {
                    VISA: "Visa",
                    VISA_DEBIT: "Visa Debit",
                    VISA_ELECTRON: "Visa Electron",
                    AMEX: "American Express",
                    MASTER_DEBIT: "Master Debit",
                    MASTER: "Master Card",
                    MAESTRO: "Maestro",
                    PAYPAL: "PayPal",
                    JCB: "JCB",
                    DINER_CLUB: "Diners Club",
                    DISCOVER: "Discover",
                    UNION_PAY: "UnionPay",
                    APPLE_PAY: "Apple Pay",
                    GOOGLE_PAY: "Google Pay",
                    WAFACASH: "Wafacash"
                },
                r = {
                    VISA: "visa",
                    VISA_DEBIT: "visa",
                    VISA_ELECTRON: "visa",
                    AMEX: "american-express",
                    MASTER_DEBIT: "mastercard",
                    MASTER: "mastercard",
                    MAESTRO: "maestro",
                    JCB: "jcb",
                    DINER_CLUB: "diners-club",
                    DISCOVER: "discover",
                    UNION_PAY: "unionpay"
                },
                a = e => {
                    var C;
                    return "/assets/images/payment-methods/".concat(null != (C = i[e]) ? C : "card", ".png")
                },
                o = e => "/assets/images/myBarcelo/".concat(e, ".png"),
                n = e => {
                    var C;
                    return null != (C = s[e]) ? C : ""
                },
                c = (e, C) => r[C] === e,
                _ = (e, C) => e.map(e => ({
                    id: e.id,
                    value: (0, l.a)({
                        id: e.id,
                        groupId: e.groupId
                    }),
                    label: ["VISA", "VISA_DEBIT", "MASTER", "MASTER_DEBIT"].includes(e.id) ? C("common:".concat(e.id)) : e.name,
                    iconSrc: a(e.id)
                }))
        },
        82977: e => {
            e.exports = {
                "w-full": "EmailSection_w-full__QrXZC",
                "w-fit": "EmailSection_w-fit__bYwYe",
                "w-5/12": "EmailSection_w-5__12__6YQ78",
                "w-7/12": "EmailSection_w-7__12__yYMgy",
                "h-full": "EmailSection_h-full__HyRli",
                flex: "EmailSection_flex__PoP9Q",
                grow: "EmailSection_grow__Q7V0A",
                "flex-1": "EmailSection_flex-1__x1qk8",
                "shrink-0": "EmailSection_shrink-0__KCVSy",
                "self-center": "EmailSection_self-center__ji6ck",
                "self-end": "EmailSection_self-end__MDPlD",
                "items-center": "EmailSection_items-center__w3rlE",
                "justify-center": "EmailSection_justify-center__cEnlT",
                "gap-xs": "EmailSection_gap-xs__wdnRD",
                "cursor-pointer": "EmailSection_cursor-pointer__6Dsdh",
                "touch-security-zone": "EmailSection_touch-security-zone__FbLJh",
                "touch-security-zone-always": "EmailSection_touch-security-zone-always__z4wzM",
                emailForm: "EmailSection_emailForm__elTup"
            }
        },
        84529: e => {
            e.exports = {
                "w-full": "LoginLinks_w-full__2_up8",
                "w-fit": "LoginLinks_w-fit__qDgeK",
                "w-5/12": "LoginLinks_w-5__12__h2oa7",
                "w-7/12": "LoginLinks_w-7__12__cQTRf",
                "h-full": "LoginLinks_h-full__FCpOq",
                flex: "LoginLinks_flex__udiia",
                grow: "LoginLinks_grow__HXxJB",
                "flex-1": "LoginLinks_flex-1__l0eap",
                "shrink-0": "LoginLinks_shrink-0__IDdvd",
                "self-center": "LoginLinks_self-center__ZQHs6",
                "self-end": "LoginLinks_self-end__Wqk4M",
                "items-center": "LoginLinks_items-center__qLTwm",
                "justify-center": "LoginLinks_justify-center__Z_nE0",
                "gap-xs": "LoginLinks_gap-xs__Ejdbn",
                "cursor-pointer": "LoginLinks_cursor-pointer__7JwAR",
                "touch-security-zone": "LoginLinks_touch-security-zone__EcK0S",
                "touch-security-zone-always": "LoginLinks_touch-security-zone-always__0KTjs",
                container: "LoginLinks_container__4uge4",
                linkAction: "LoginLinks_linkAction__vThhE"
            }
        },
        86125: e => {
            e.exports = {
                "w-full": "CurrencySection_w-full__Fw__Z",
                "w-fit": "CurrencySection_w-fit__lErvS",
                "w-5/12": "CurrencySection_w-5__12__FPbbn",
                "w-7/12": "CurrencySection_w-7__12___ky73",
                "h-full": "CurrencySection_h-full__gtoXx",
                flex: "CurrencySection_flex__Q9Qii",
                grow: "CurrencySection_grow__h16V2",
                "flex-1": "CurrencySection_flex-1__yj3ku",
                "shrink-0": "CurrencySection_shrink-0___uGXs",
                "self-center": "CurrencySection_self-center__l_PYQ",
                "self-end": "CurrencySection_self-end__ynp3F",
                "items-center": "CurrencySection_items-center__y_l1P",
                "justify-center": "CurrencySection_justify-center__zX5Dq",
                "gap-xs": "CurrencySection_gap-xs__oVZ3o",
                "cursor-pointer": "CurrencySection_cursor-pointer__5MXWx",
                "touch-security-zone": "CurrencySection_touch-security-zone__rEElT",
                "touch-security-zone-always": "CurrencySection_touch-security-zone-always__w0mQc",
                container: "CurrencySection_container__klsnW",
                currencyWrapper: "CurrencySection_currencyWrapper__geGls"
            }
        },
        88904: e => {
            e.exports = {
                "w-full": "Form_w-full__2gq0I",
                "w-fit": "Form_w-fit__J6gvD",
                "w-5/12": "Form_w-5__12__5_8J_",
                "w-7/12": "Form_w-7__12__tF8Ut",
                "h-full": "Form_h-full__zF9H_",
                flex: "Form_flex__HrtyS",
                grow: "Form_grow__Eiu50",
                "flex-1": "Form_flex-1__vvuPQ",
                "shrink-0": "Form_shrink-0__6yuS6",
                "self-center": "Form_self-center__cGIN6",
                "self-end": "Form_self-end__kgti8",
                "items-center": "Form_items-center__1fsiT",
                "justify-center": "Form_justify-center__BiR7A",
                "gap-xs": "Form_gap-xs__gfZQA",
                "cursor-pointer": "Form_cursor-pointer__0iFhh",
                "touch-security-zone": "Form_touch-security-zone__jg_0k",
                "touch-security-zone-always": "Form_touch-security-zone-always__MEnZH",
                dateInput: "Form_dateInput__pLlcw",
                dateInputPlaceholder: "Form_dateInputPlaceholder__eHIjJ"
            }
        },
        90565: (e, C, t) => {
            "use strict";
            t.d(C, {
                f: () => r
            });
            var l = t(36271),
                i = t(78416),
                s = t(2676);
            let r = () => {
                let {
                    handleB2CLogin: e,
                    handleB2CSSOLogin: C,
                    handleB2CLoginAfterRegistration: t
                } = (0, i.Jd)(), {
                    showModal: r,
                    hideModal: a,
                    visibleModal: o
                } = (0, l.hS)(s.OS), n = async (l, i) => {
                    await r({
                        firstStep: s.Ol.LOGIN,
                        defaultTab: l,
                        onLogin: async C => {
                            var t;
                            await e(C.email, C.password), await (null == i || null == (t = i.onLoginSuccess) ? void 0 : t.call(i))
                        },
                        onLoginAfterRegistration: async e => {
                            await t(e.userIdentifier, e.otpCode)
                        },
                        onSSOLogin: async e => {
                            var t;
                            await C(e), await (null == i || null == (t = i.onSSOLoginSuccess) ? void 0 : t.call(i))
                        },
                        onClose: a
                    })
                };
                return {
                    openLogin: async e => n(s.yL.LOGIN, e),
                    openRegistration: async e => n(s.yL.REGISTRATION, e),
                    openLoginWithEmail: async t => {
                        await r({
                            email: t,
                            firstStep: s.Ol.LOGIN_WITH_EMAIL,
                            onLogin: async C => {
                                await e(t, C.password)
                            },
                            onSSOLogin: async e => {
                                await C(e)
                            },
                            onClose: a
                        })
                    },
                    hideModal: a,
                    visibleModal: o
                }
            }
        },
        91055: e => {
            e.exports = {
                "w-full": "B2CLoggedModal_w-full__gkwtW",
                "w-fit": "B2CLoggedModal_w-fit__YYlKL",
                "w-5/12": "B2CLoggedModal_w-5__12__1EU3G",
                "w-7/12": "B2CLoggedModal_w-7__12__TObDS",
                "h-full": "B2CLoggedModal_h-full__qtlyJ",
                flex: "B2CLoggedModal_flex__1Jly6",
                grow: "B2CLoggedModal_grow__lRiKw",
                "flex-1": "B2CLoggedModal_flex-1__4q_Q_",
                "shrink-0": "B2CLoggedModal_shrink-0__S2qO_",
                "self-center": "B2CLoggedModal_self-center__9wjSj",
                "self-end": "B2CLoggedModal_self-end__mjE_D",
                "items-center": "B2CLoggedModal_items-center__5ZdL9",
                "justify-center": "B2CLoggedModal_justify-center__cnt8B",
                "gap-xs": "B2CLoggedModal_gap-xs__SObZF",
                "cursor-pointer": "B2CLoggedModal_cursor-pointer__y8_T6",
                "touch-security-zone": "B2CLoggedModal_touch-security-zone__A81Fi",
                "touch-security-zone-always": "B2CLoggedModal_touch-security-zone-always__lAOUK",
                customHeader: "B2CLoggedModal_customHeader__f4bAi",
                essential: "B2CLoggedModal_essential__dw_8X",
                special: "B2CLoggedModal_special__oA236",
                unique: "B2CLoggedModal_unique__Ud3y8",
                logoutButton: "B2CLoggedModal_logoutButton__h8bA8",
                userContainer: "B2CLoggedModal_userContainer__mV9e9",
                menuContainer: "B2CLoggedModal_menuContainer__LC0Sb"
            }
        },
        92684: (e, C, t) => {
            "use strict";
            t.d(C, {
                A: () => i
            });
            var l = t(37876);
            let i = () => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23.5199 12.2726C23.5199 11.4217 23.4436 10.6035 23.3017 9.81804H11.9999V14.4599H18.4581C18.1799 15.9599 17.3345 17.2308 16.0636 18.0817V21.0926H19.9417C22.2108 19.0035 23.5199 15.9271 23.5199 12.2726Z",
                    fill: "#4285F4"
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.9999 23.9997C15.2399 23.9997 17.9563 22.9252 19.9417 21.0925L16.0636 18.0815C14.989 18.8015 13.6145 19.227 11.9999 19.227C8.87448 19.227 6.22903 17.1161 5.28539 14.2797H1.27631V17.3888C3.25085 21.3106 7.30902 23.9997 11.9999 23.9997Z",
                    fill: "#34A853"
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.28539 14.2801C5.04539 13.5601 4.90902 12.791 4.90902 12.0001C4.90902 11.2092 5.04539 10.4401 5.28539 9.72007V6.61098H1.2763C0.463575 8.23098 -6.10352e-05 10.0637 -6.10352e-05 12.0001C-6.10352e-05 13.9364 0.463575 15.7692 1.2763 17.3892L5.28539 14.2801Z",
                    fill: "#FBBC05"
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.9999 4.77272C13.7617 4.77272 15.3436 5.37817 16.5872 6.56726L20.029 3.12545C17.9508 1.18909 15.2345 0 11.9999 0C7.30902 0 3.25085 2.68909 1.27631 6.6109L5.28539 9.71999C6.22903 6.88363 8.87448 4.77272 11.9999 4.77272Z",
                    fill: "#EA4335"
                })]
            })
        },
        93599: (e, C, t) => {
            "use strict";
            t.d(C, {
                A: () => i
            });
            var l = t(37876);
            let i = e => {
                let {
                    color: C
                } = e;
                return (0, l.jsx)("path", {
                    d: "M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11M5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13C3 11.8954 3.89543 11 5 11Z",
                    stroke: C,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            }
        },
        94892: e => {
            e.exports = {
                "w-full": "Header_w-full__jrgck",
                "w-fit": "Header_w-fit__pzNYz",
                "w-5/12": "Header_w-5__12__YBHJI",
                "w-7/12": "Header_w-7__12__l0hV6",
                "h-full": "Header_h-full__uDIL1",
                flex: "Header_flex__qngrb",
                grow: "Header_grow__k1Tpq",
                "flex-1": "Header_flex-1__ExpDB",
                "shrink-0": "Header_shrink-0__Biieq",
                "self-center": "Header_self-center__n1me3",
                "self-end": "Header_self-end__jus4k",
                "items-center": "Header_items-center__kUhN8",
                "justify-center": "Header_justify-center__k54fi",
                "gap-xs": "Header_gap-xs___B7X6",
                "cursor-pointer": "Header_cursor-pointer__eNikJ",
                "touch-security-zone": "Header_touch-security-zone__JmG45",
                "touch-security-zone-always": "Header_touch-security-zone-always__boyvB",
                container: "Header_container__CnqEd",
                hidden: "Header_hidden__B8ssE",
                header: "Header_header__69pp2",
                withFastBooking: "Header_withFastBooking__YA2fg",
                smallHeader: "Header_smallHeader__Wbk0I",
                contentWrapper: "Header_contentWrapper__IFlWE",
                hotelName: "Header_hotelName__ENEMd",
                content: "Header_content__gOOgL",
                menu: "Header_menu__v8HGh",
                divider: "Header_divider__RDSzB"
            }
        }
    }
]);