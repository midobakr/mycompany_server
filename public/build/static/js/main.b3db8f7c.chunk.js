(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
    [0], {
        106: function (e, t, n) {
            e.exports = {
                container: "getUser_container__3fhxj",
                box: "getUser_box__1CXRR",
                date: "getUser_date__1chwi",
                button: "getUser_button__1F-8l",
                holder: "getUser_holder__20soi"
            }
        },
        107: function (e, t, n) {
            e.exports = {
                container: "history_container__XgTLH"
            }
        },
        108: function (e, t, n) {
            e.exports = {
                loader: "spinner_loader__34qJB",
                load4: "spinner_load4__34OvA"
            }
        },
        109: function (e, t, n) {},
        21: function (e, t, n) {
            e.exports = {
                container: "form_container__1m_aK",
                title: "form_title__1kUvm",
                title2: "form_title2__1sRzn",
                input: "form_input__2AV46",
                formgroup: "form_formgroup__3CORH",
                checkmark: "form_checkmark__2cbpg",
                checked: "form_checked__2Fk_Y",
                errorMessage: "form_errorMessage__1P4it"
            }
        },
        229: function (e, t, n) {},
        230: function (e, t, n) {},
        231: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n(1),
                s = n.n(r),
                c = n(43),
                i = n.n(c),
                o = n(9),
                l = n(37),
                d = n(4),
                u = n(104),
                j = n(3),
                b = "SET_TOKEN",
                h = "LOG_IN",
                p = "REMOVE_TOKEN",
                O = "GET_DATA",
                m = "SET_USER",
                x = "SET_ATTENDANCE",
                f = "SHOW_BACKDROP",
                g = "HIDE_BACKDROP",
                v = "SET_ERRORS",
                y = "SET_HISTORY",
                _ = "SET_CONVERSATION",
                w = "SET_NOTIFICATION",
                k = "SET_ALL_USERS",
                A = "SET_MY_USER",
                N = "SET_REGISTEREDUSERS",
                S = "SET_MYINBOX",
                E = "SET_MYCHAT",
                C = n(7),
                D = n.n(C),
                I = n(10),
                M = function (e) {
                    for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/-/g, "+").replace(/_/g, "/"), n = window.atob(t), a = new Uint8Array(n.length), r = 0; r < n.length; ++r) a[r] = n.charCodeAt(r);
                    return a
                },
                U = function () {
                    var e = Object(I.a)(D.a.mark((function e() {
                        return D.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    "serviceWorker" in navigator && (Notification.requestPermission().then((function () {
                                        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
                                    })), navigator.serviceWorker.register("/serverWorker.js", {
                                        scope: "/"
                                    }).then(Object(I.a)(D.a.mark((function e() {
                                        var t, n;
                                        return D.a.wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, navigator.serviceWorker.ready;
                                                case 2:
                                                    return t = e.sent, e.next = 5, t.pushManager.getSubscription();
                                                case 5:
                                                    if (null !== (n = e.sent)) {
                                                        e.next = 10;
                                                        break
                                                    }
                                                    return e.next = 9, t.pushManager.subscribe({
                                                        userVisibleOnly: !0,
                                                        applicationServerKey: M("BGoYWF08O9yIeCH8ZB6jymtlhq54Wk8Lvit8i-UsMhJlh1el0UYiK0FsCTpQlM8wQ2G5ttLDzVNkByNZWtw-G4I")
                                                    });
                                                case 9:
                                                    n = e.sent;
                                                case 10:
                                                    fetch("/subscription", {
                                                        method: "POST",
                                                        headers: {
                                                            Authorization: localStorage.getItem("token"),
                                                            "Content-Type": "application/json"
                                                        },
                                                        body: JSON.stringify(n)
                                                    }).then((function () {
                                                        console.log("done")
                                                    }));
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function () {
                    var e = Object(I.a)(D.a.mark((function e() {
                        var t, n;
                        return D.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!("serviceWorker" in navigator)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 3, navigator.serviceWorker.ready;
                                case 3:
                                    return t = e.sent, e.next = 6, t.pushManager.getSubscription();
                                case 6:
                                    return n = e.sent, e.next = 9, fetch("/subscription", {
                                        method: "DELETE",
                                        headers: {
                                            Authorization: localStorage.getItem("token"),
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(n)
                                    }).then((function () {
                                        console.log("done")
                                    }));
                                case 9:
                                    localStorage.removeItem("token");
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                T = {
                    user: {},
                    logIn: !1,
                    token: "",
                    backdrop: !1,
                    loading: !1,
                    errors: "",
                    Attendance: null,
                    history: [],
                    conversation: {},
                    notification: [],
                    socket: "",
                    allUsers: [],
                    myUserInfo: "",
                    registeredUsers: [],
                    myInbox: [],
                    myChat: ""
                };
            var L = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case h:
                            return localStorage.setItem("token", t.payload), U(), Object(j.a)(Object(j.a)({}, e), {}, {
                                token: t.payload
                            });
                        case b:
                            return localStorage.setItem("token", t.payload), Object(j.a)(Object(j.a)({}, e), {}, {
                                token: t.payload
                            });
                        case "SET_DISPATCH":
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                socket: t.payload
                            });
                        case p:
                            return R(), Object(j.a)(Object(j.a)({}, e), {}, {
                                token: "",
                                user: {}
                            });
                        case O:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                backdrop: !0,
                                loading: !0,
                                errors: ""
                            });
                        case v:
                            return "invalid token" === t.payload.msg ? (localStorage.removeItem("token"), Object(j.a)(Object(j.a)({}, e), {}, {
                                loading: !1,
                                errors: t.payload,
                                token: ""
                            })) : Object(j.a)(Object(j.a)({}, e), {}, {
                                loading: !1,
                                errors: t.payload
                            });
                        case m:
                            return console.log("SET_USER", t.payload), Object(j.a)(Object(j.a)({}, e), {}, {
                                user: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case f:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                backdrop: !0
                            });
                        case g:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                backdrop: !1
                            });
                        case x:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                Attendance: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case y:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                history: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case _:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                conversation: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case w:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                notification: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case k:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                allUsers: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case A:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                myUserInfo: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case N:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                registeredUsers: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case S:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                myInbox: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        case E:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                myChat: t.payload,
                                backdrop: !1,
                                loading: !1
                            });
                        default:
                            return e
                    }
                },
                H = n(22),
                F = n(23),
                P = n(25),
                B = n(24),
                J = n(8),
                q = n(105),
                z = n(60),
                W = n.n(z),
                Y = n(5),
                K = n(61),
                G = n.n(K),
                V = n(62),
                Z = n.n(V);
            var Q = function (e) {
                return Object(a.jsx)("li", {
                    className: Z.a.sidebar_item,
                    onClick: function () {
                        e.setActive(e.path)
                    },
                    style: e.theActiveItem === e.path ? {
                        backgroundColor: "red"
                    } : {},
                    children: Object(a.jsx)(o.b, {
                        className: Z.a.Link,
                        to: e.path,
                        children: e.name
                    })
                })
            };
            var X = function (e) {
                    var t = e.username,
                        n = e.avatar,
                        s = Object(r.useState)(window.location.pathname),
                        c = Object(Y.a)(s, 2),
                        i = c[0],
                        o = c[1];
                    return console.log("activeItem==>", i), Object(a.jsxs)("div", {
                        className: G.a.container,
                        children: [Object(a.jsxs)("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: [Object(a.jsx)("img", {
                                style: {
                                    borderRadius: "50%"
                                },
                                src: "https://www.gravatar.com/avatar/".concat(n),
                                alt: "profile "
                            }), Object(a.jsx)("h2", {
                                style: {
                                    textAlign: "center"
                                },
                                children: t
                            })]
                        }), Object(a.jsxs)("ul", {
                            className: G.a.sidebar_list,
                            children: [Object(a.jsx)(Q, {
                                name: "Home",
                                path: "/",
                                setActive: o,
                                theActiveItem: i
                            }), Object(a.jsx)(Q, {
                                name: "All employees",
                                path: "/admin/allEmployees",
                                setActive: o,
                                theActiveItem: i
                            }), Object(a.jsx)(Q, {
                                name: "Registered employees",
                                path: "/admin/registeredUsers",
                                setActive: o,
                                theActiveItem: i
                            }), Object(a.jsx)(Q, {
                                name: "Absent employees",
                                path: "/admin/AbsentEmployees",
                                setActive: o,
                                theActiveItem: i
                            }), Object(a.jsx)(Q, {
                                name: "recieved requests",
                                path: "/admin/recievedRequests",
                                setActive: o,
                                theActiveItem: i
                            }), Object(a.jsx)(Q, {
                                name: "Send message",
                                path: "/admin/sendMessage",
                                setActive: o,
                                theActiveItem: i
                            })]
                        })]
                    })
                },
                $ = n(65),
                ee = n.n($);
            var te = function (e) {
                    var t = Object(d.c)();
                    return Object(a.jsx)("nav", {
                        className: ee.a.nav,
                        children: Object(a.jsxs)("ul", {
                            className: ee.a.nav_list,
                            children: [Object(a.jsx)("li", {
                                children: "profile"
                            }), Object(a.jsx)("li", {
                                onClick: function () {
                                    t({
                                        type: p
                                    }), localStorage.removeItem("token")
                                },
                                children: Object(a.jsx)(o.b, {
                                    to: "/",
                                    children: " log out"
                                })
                            })]
                        })
                    })
                },
                ne = function (e, t) {
                    return function () {
                        var n = Object(I.a)(D.a.mark((function n(a, r) {
                            var s;
                            return D.a.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return console.log("i am here ==>", r().token), a({
                                            type: O
                                        }), console.log("state", r()), n.prev = 3, n.next = 6, fetch(e, {
                                            method: "GET",
                                            headers: {
                                                Authorization: r().token
                                            }
                                        });
                                    case 6:
                                        if (!(s = n.sent).ok) {
                                            n.next = 17;
                                            break
                                        }
                                        return console.log("raw data==>", s.ok), n.next = 11, s.json();
                                    case 11:
                                        return s = n.sent, console.log(s), a({
                                            type: t,
                                            payload: s
                                        }), n.abrupt("return", s);
                                    case 17:
                                        return n.next = 19, s.json();
                                    case 19:
                                        throw s = n.sent;
                                    case 21:
                                        n.next = 27;
                                        break;
                                    case 23:
                                        n.prev = 23, n.t0 = n.catch(3), console.log("e======>", n.t0), n.t0.errors ? a({
                                            type: v,
                                            payload: n.t0.errors[0]
                                        }) : a({
                                            type: v,
                                            payload: {
                                                msg: "error"
                                            }
                                        });
                                    case 27:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [3, 23]
                            ])
                        })));
                        return function (e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                ae = n(66),
                re = n.n(ae);
            var se = Object(d.b)((function (e) {
                    return {
                        allUsers: e.allUsers
                    }
                }), (function (e) {
                    return {
                        getAllUsers: function () {
                            return e(ne("/dashboard/allEmployees", k))
                        }
                    }
                }))((function (e) {
                    var t = e.getAllUsers,
                        n = e.allUsers;
                    return Object(r.useEffect)((function () {
                        t()
                    }), [t]), Object(a.jsx)("div", {
                        className: re.a.dd,
                        children: n.map((function (e) {
                            return Object(a.jsxs)(o.b, {
                                to: "/admin/employee/".concat(e._id),
                                className: re.a.box,
                                children: [Object(a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        paddingRight: "10px"
                                    },
                                    children: e.name
                                }), Object(a.jsx)("img", {
                                    style: {
                                        borderRadius: "50%"
                                    },
                                    src: "https://www.gravatar.com/avatar/".concat(e.avatar),
                                    alt: "ff"
                                })]
                            })
                        }))
                    })
                })),
                ce = n(106),
                ie = n.n(ce),
                oe = ["sunday", "monday", "tuesday", "wendthday", "thrusday", "friday", "saturday"];
            var le = function (e) {
                    return Object(a.jsxs)("table", {
                        children: [Object(a.jsxs)("tr", {
                            children: [Object(a.jsx)("th", {
                                children: "date"
                            }), Object(a.jsx)("th", {
                                children: "time of leaving"
                            }), Object(a.jsx)("th", {
                                children: "time of arriving"
                            }), Object(a.jsx)("th", {
                                children: "day"
                            })]
                        }), e.history.map((function (e) {
                            var t = new Date(e.AttendAt),
                                n = new Date(e.LeftAt);
                            return Object(a.jsxs)("tr", {
                                children: [Object(a.jsxs)("td", {
                                    children: [Object(a.jsx)("span", {
                                        children: t.getFullYear()
                                    }), Object(a.jsxs)("span", {
                                        children: ["/", t.getMonth() + 1]
                                    }), Object(a.jsxs)("span", {
                                        children: ["/", t.getDate()]
                                    })]
                                }), Object(a.jsx)("td", {
                                    children: Object(a.jsx)("span", {
                                        children: n.getHours() ? n.getHours() > 12 ? n.getHours() - 12 + ":" + n.getMinutes() + " PM" : n.getHours() + ":" + n.getMinutes() + " AM" : ""
                                    })
                                }), Object(a.jsx)("td", {
                                    children: Object(a.jsx)("span", {
                                        children: t.getHours() > 12 ? t.getHours() - 12 + ":" + t.getMinutes() + "PM" : t.getHours() + ":" + t.getMinutes() + "AM"
                                    })
                                }), Object(a.jsx)("td", {
                                    children: oe[t.getDay()]
                                })]
                            })
                        }))]
                    })
                },
                de = n(46),
                ue = n(32),
                je = n.n(ue),
                be = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
                    return function () {
                        var a = Object(I.a)(D.a.mark((function a(r, s) {
                            var c, i;
                            return D.a.wrap((function (a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return r({
                                            type: O
                                        }), a.prev = 1, a.next = 4, fetch(e, {
                                            method: "POST",
                                            headers: {
                                                Authorization: s().token,
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(t)
                                        });
                                    case 4:
                                        if (!(c = a.sent).ok) {
                                            a.next = 14;
                                            break
                                        }
                                        return a.next = 8, c.json();
                                    case 8:
                                        return i = a.sent, console.log("okkkkkkkkkkkkkkkk"), r({
                                            type: n,
                                            payload: i
                                        }), a.abrupt("return", i);
                                    case 14:
                                        return a.next = 16, c.json();
                                    case 16:
                                        throw c = a.sent;
                                    case 18:
                                        a.next = 26;
                                        break;
                                    case 20:
                                        return a.prev = 20, a.t0 = a.catch(1), console.log("postError", a.t0), console.log("postError", a.t0.errors), r({
                                            type: v,
                                            payload: a.t0.errors[0]
                                        }), a.abrupt("return", a.t0.errors[0]);
                                    case 26:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [1, 20]
                            ])
                        })));
                        return function (e, t) {
                            return a.apply(this, arguments)
                        }
                    }()
                };
            var he = Object(d.b)((function (e) {
                    return {
                        myChat: e.myChat,
                        myID: e.user._id,
                        user: e.user,
                        socket: e.socket
                    }
                }), (function (e) {
                    return {
                        sendConversation: function (t) {
                            return e(be("/dashboard/send", t, E))
                        },
                        getConversation: function (t) {
                            return e(ne("/dashboard/myChat/" + t, E))
                        }
                    }
                }))((function (e) {
                    var t = e.getConversation,
                        n = e.sendConversation,
                        s = (e.myChat, e.myUser),
                        c = e.myID,
                        i = e.user,
                        o = e.socket,
                        l = Object(r.useRef)(null),
                        d = Object(r.useState)(""),
                        u = Object(Y.a)(d, 2),
                        j = u[0],
                        b = u[1],
                        h = Object(r.useState)([]),
                        p = Object(Y.a)(h, 2),
                        O = p[0],
                        m = p[1];
                    Object(r.useEffect)((function () {
                        o && o.on("recieve_message", (function (e) {
                            console.log("m4 3ady"), e.fromMe || document.querySelector("#audio").play(), m((function (t) {
                                return [].concat(Object(de.a)(t), [e])
                            })), console.log("hehehe ", e)
                        }))
                    }), [o]), Object(r.useEffect)((function () {
                        function e() {
                            return (e = Object(I.a)(D.a.mark((function e() {
                                var n;
                                return D.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t(s._id);
                                        case 2:
                                            n = e.sent, m(n.messages);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function () {
                            e.apply(this, arguments)
                        }()
                    }), [t, s._id]), Object(r.useEffect)((function () {
                        l.current.scroll(0, l.current.scrollHeight)
                    }));
                    var x = function (e) {
                        if (13 === e.keyCode || "click" === e.type) {
                            var t = {
                                from: c,
                                to: s._id,
                                avatar: i.avatar,
                                content: j,
                                name: i.name,
                                date: Date.now()
                            };
                            o.emit("send_message_to_employee", t), b(""), n({
                                id: s._id,
                                avatar: s.avatar,
                                name: s.name,
                                theMessage: j
                            })
                        }
                    };
                    return Object(a.jsxs)("div", {
                        className: je.a.container,
                        style: {
                            width: "100%",
                            textAlign: "center"
                        },
                        children: [Object(a.jsx)("div", {
                            ref: l,
                            className: je.a.holder,
                            children: O[0] ? O.map((function (e) {
                                return Object(a.jsxs)("div", {
                                    className: je.a.box,
                                    style: e.from === c ? {
                                        marginRight: "auto",
                                        marginLeft: 0
                                    } : {},
                                    children: [Object(a.jsx)("p", {
                                        style: {
                                            paddingBottom: "5px",
                                            borderBottom: "1px solid black"
                                        },
                                        children: e.name
                                    }), Object(a.jsx)("p", {
                                        children: e.content
                                    }), Object(a.jsx)("p", {
                                        className: je.a.date,
                                        children: new Date(e.date).toLocaleString()
                                    })]
                                })
                            })) : Object(a.jsx)("h1", {
                                style: {
                                    textAlign: "center"
                                },
                                children: "loading.."
                            })
                        }), Object(a.jsx)("textarea", {
                            onKeyUp: x,
                            value: j,
                            style: {
                                width: "50%",
                                margin: "0 auto",
                                borderRadius: "15px",
                                resize: "none"
                            },
                            onChange: function (e) {
                                b(e.target.value)
                            }
                        }), Object(a.jsx)("button", {
                            className: je.a.button,
                            onClick: x,
                            children: "Send"
                        })]
                    })
                })),
                pe = n(26),
                Oe = n.n(pe);
            var me = function (e) {
                    var t = e.user,
                        n = e.admin;
                    return console.log("Profile", t), Object(a.jsxs)("div", {
                        className: n ? "" : Oe.a.container,
                        children: [Object(a.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: Object(a.jsx)("img", {
                                style: {
                                    borderRadius: "50%",
                                    width: "25%"
                                },
                                src: "https://www.gravatar.com/avatar/".concat(t.avatar, "?s=500"),
                                alt: "profile "
                            })
                        }), Object(a.jsxs)("div", {
                            children: [Object(a.jsxs)("div", {
                                className: Oe.a.box,
                                children: [Object(a.jsx)("h2", {
                                    className: Oe.a.label,
                                    children: "your name:"
                                }), Object(a.jsx)("h2", {
                                    children: t.name
                                })]
                            }), Object(a.jsxs)("div", {
                                className: Oe.a.box,
                                children: [Object(a.jsx)("h2", {
                                    className: Oe.a.label,
                                    children: "your Email:"
                                }), Object(a.jsx)("h2", {
                                    children: t.email
                                })]
                            }), Object(a.jsxs)("div", {
                                className: Oe.a.box,
                                children: [Object(a.jsx)("h2", {
                                    className: Oe.a.label,
                                    children: "Date of Employment:"
                                }), Object(a.jsx)("h2", {
                                    children: new Date(t.dateOfEmployment).toLocaleDateString()
                                })]
                            })]
                        })]
                    })
                },
                xe = ["profile", "history", "messages"];
            var fe = Object(d.b)((function (e) {
                    return {
                        myUserInfo: e.myUserInfo
                    }
                }), (function (e) {
                    return {
                        getMyUser: function (t) {
                            return e(ne("/dashboard/employee/" + t, A))
                        }
                    }
                }))((function (e) {
                    var t = e.myUserInfo,
                        n = e.getMyUser,
                        s = Object(J.g)().id,
                        c = new URLSearchParams(Object(J.f)().search).get("active") || 0,
                        i = Object(r.useState)(+c),
                        o = Object(Y.a)(i, 2),
                        l = o[0],
                        d = o[1];
                    return Object(r.useEffect)((function () {
                        n(s)
                    }), [s, n]), t ? Object(a.jsxs)("div", {
                        className: ie.a.container,
                        children: [0 === l ? Object(a.jsx)(me, {
                            admin: !0,
                            user: t.employee
                        }) : "", 1 === l ? Object(a.jsx)(le, {
                            history: t.history || []
                        }) : "", 2 === l ? Object(a.jsx)(he, {
                            myUser: t.employee
                        }) : "", Object(a.jsxs)("button", {
                            onClick: function () {
                                d(2 !== l ? l + 1 : 0)
                            },
                            style: {
                                width: "50%",
                                height: "45px",
                                margin: "10px"
                            },
                            children: ["Go to ", xe[l + 1] || "profile"]
                        })]
                    }) : ""
                })),
                ge = n(47),
                ve = n.n(ge),
                ye = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thrusday", "Friday", "Saturday"];
            var _e = Object(d.b)((function (e) {
                    return {
                        registeredUsers: e.registeredUsers
                    }
                }), (function (e) {
                    return {
                        getRegisteredUsers: function (t) {
                            return e(ne("/dashboard/registeredUsers/" + t, N))
                        }
                    }
                }))((function (e) {
                    var t = e.registeredUsers,
                        n = e.getRegisteredUsers,
                        s = (new Date).toJSON().split("T")[0],
                        c = Object(r.useState)(s),
                        i = Object(Y.a)(c, 2),
                        o = i[0],
                        l = i[1];
                    Object(r.useEffect)((function () {
                        n(o)
                    }), [n, o]);
                    var d = function (e) {
                        var t = new Date(o);
                        return new Date(t.setDate(t.getDate() - e)).toJSON().split("T")[0]
                    };
                    return Object(a.jsxs)("div", {
                        className: ve.a.container,
                        children: [Object(a.jsxs)("div", {
                            style: {
                                display: "inline-block",
                                position: "relative"
                            },
                            children: [Object(a.jsx)("input", {
                                max: s,
                                onChange: function (e) {
                                    l(e.target.value)
                                },
                                type: "Date",
                                Value: o,
                                className: ve.a.dateInput
                            }), Object(a.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    right: "40px",
                                    bottom: "0",
                                    height: "30px"
                                },
                                children: ye[new Date(o).getDay()]
                            })]
                        }), Object(a.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                width: "50%",
                                margin: "0 auto"
                            },
                            children: [Object(a.jsx)("h3", {
                                style: {
                                    cursor: "pointer",
                                    visibility: s === o ? "hidden" : "visible"
                                },
                                onClick: function () {
                                    l(d(-1))
                                },
                                children: "next day"
                            }), Object(a.jsx)("h3", {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: function () {
                                    l(d(1))
                                },
                                children: "previous day"
                            })]
                        }), t[0] ? t.map((function (e) {
                            var t = new Date(e.AttendAt);
                            return Object(a.jsxs)("div", {
                                className: ve.a.box,
                                children: [Object(a.jsx)("img", {
                                    style: {
                                        borderRadius: "50%",
                                        width: "80px",
                                        height: "80px"
                                    },
                                    src: "https://www.gravatar.com/avatar/".concat(e.avatar),
                                    alt: "profile "
                                }), Object(a.jsx)("h2", {
                                    style: {
                                        textAlign: "center",
                                        width: "5em"
                                    },
                                    children: e.name
                                }), Object(a.jsx)("h2", {
                                    children: Object(a.jsx)("span", {
                                        children: t.getHours() > 12 ? t.getHours() - 12 + ":" + (t.getMinutes() < 10 ? "0" : "") + t.getMinutes() + " PM" : t.getHours() + ":" + (t.getMinutes() < 10 ? "0" : "") + t.getMinutes() + " AM"
                                    })
                                }), Object(a.jsxs)("h2", {
                                    children: [Object(a.jsx)("span", {
                                        children: t.getFullYear()
                                    }), Object(a.jsxs)("span", {
                                        children: ["/", t.getMonth() + 1]
                                    }), Object(a.jsxs)("span", {
                                        children: ["/", t.getDate()]
                                    })]
                                })]
                            })
                        })) : Object(a.jsx)("h3", {
                            style: {
                                textAlign: "center ",
                                margin: "auto"
                            },
                            children: "there is no Users registered on that day"
                        })]
                    })
                })),
                we = n(48),
                ke = n.n(we),
                Ae = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thrusday", "Friday", "Saturday"];
            var Ne = Object(d.b)((function (e) {
                    return {
                        allUsers: e.allUsers,
                        registeredUsers: e.registeredUsers
                    }
                }), (function (e) {
                    return {
                        getAllUsers: function () {
                            return e(ne("/dashboard/allEmployees", k))
                        },
                        getRegisteredUsers: function (t) {
                            return e(ne("/dashboard/registeredUsers/" + t, N))
                        }
                    }
                }))((function (e) {
                    var t = e.allUsers,
                        n = e.getAllUsers,
                        s = e.registeredUsers,
                        c = e.getRegisteredUsers,
                        i = (new Date).toJSON().split("T")[0],
                        o = Object(r.useState)(i),
                        l = Object(Y.a)(o, 2),
                        d = l[0],
                        u = l[1],
                        j = Object(r.useState)([]),
                        b = Object(Y.a)(j, 2),
                        h = b[0],
                        p = b[1];
                    Object(r.useEffect)((function () {
                        c(d)
                    }), [c, d]), Object(r.useEffect)((function () {
                        n()
                    }), [n]);
                    var O = function (e) {
                        var t = new Date(d);
                        return new Date(t.setDate(t.getDate() - e)).toJSON().split("T")[0]
                    };
                    return Object(r.useEffect)((function () {
                        var e = s.map((function (e) {
                                return e.user_id
                            })),
                            n = t.filter((function (t) {
                                return !e.includes(t._id)
                            }));
                        n = n.sort((function (e, t) {
                            return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                        })), p(n)
                    }), [t, s]), Object(a.jsxs)("div", {
                        className: ke.a.container,
                        children: [Object(a.jsxs)("div", {
                            style: {
                                display: "inline-block",
                                position: "relative"
                            },
                            children: [Object(a.jsx)("input", {
                                max: i,
                                onChange: function (e) {
                                    u(e.target.value)
                                },
                                type: "Date",
                                Value: d,
                                className: ke.a.dateInput
                            }), Object(a.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    right: "40px",
                                    bottom: "0",
                                    height: "30px"
                                },
                                children: Ae[new Date(d).getDay()]
                            })]
                        }), Object(a.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                width: "50%",
                                margin: "0 auto"
                            },
                            children: [Object(a.jsx)("h3", {
                                style: {
                                    cursor: "pointer",
                                    visibility: i === d ? "hidden" : "visible"
                                },
                                onClick: function () {
                                    u(O(-1))
                                },
                                children: "next day"
                            }), Object(a.jsx)("h3", {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: function () {
                                    u(O(1))
                                },
                                children: "previous day"
                            })]
                        }), h[0] ? h.map((function (e) {
                            return Object(a.jsxs)("div", {
                                className: ke.a.box,
                                children: [Object(a.jsx)("img", {
                                    style: {
                                        borderRadius: "50%",
                                        width: "80px",
                                        height: "80px"
                                    },
                                    src: "https://www.gravatar.com/avatar/".concat(e.avatar),
                                    alt: "profile "
                                }), Object(a.jsx)("h2", {
                                    style: {
                                        textAlign: "center",
                                        width: "5em"
                                    },
                                    children: e.name
                                })]
                            })
                        })) : Object(a.jsx)("h3", {
                            style: {
                                textAlign: "center ",
                                margin: "auto"
                            },
                            children: "there is no Users unRegistered on that day"
                        })]
                    })
                })),
                Se = n(67),
                Ee = n.n(Se);
            var Ce = Object(d.b)((function (e) {
                    return {
                        allUsers: e.allUsers
                    }
                }), (function (e) {
                    return {
                        getAllUsers: function () {
                            return e(ne("/dashboard/allEmployees", k))
                        }
                    }
                }))((function (e) {
                    var t = e.getAllUsers,
                        n = e.allUsers;
                    return Object(r.useEffect)((function () {
                        t()
                    }), [t]), Object(a.jsx)("div", {
                        className: Ee.a.dd,
                        children: n.map((function (e) {
                            return Object(a.jsxs)(o.b, {
                                to: "/admin/employee/".concat(e._id, "?active=2"),
                                className: Ee.a.box,
                                children: [Object(a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        paddingRight: "10px"
                                    },
                                    children: e.name
                                }), Object(a.jsx)("img", {
                                    style: {
                                        borderRadius: "50%"
                                    },
                                    src: "https://www.gravatar.com/avatar/".concat(e.avatar),
                                    alt: "ff"
                                })]
                            })
                        }))
                    })
                })),
                De = function (e) {
                    Object(P.a)(n, e);
                    var t = Object(B.a)(n);

                    function n() {
                        return Object(H.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(F.a)(n, [{
                        key: "componentDidMount",
                        value: function () {}
                    }, {
                        key: "render",
                        value: function () {
                            return Object(a.jsxs)("div", {
                                className: W.a.container,
                                children: [Object(a.jsx)(te, {}), Object(a.jsxs)("div", {
                                    className: W.a.body,
                                    children: [Object(a.jsx)(X, {
                                        username: this.props.user.name,
                                        avatar: this.props.user.avatar
                                    }), Object(a.jsxs)(J.c, {
                                        children: [Object(a.jsx)(J.a, {
                                            exact: !0,
                                            path: "/"
                                        }), Object(a.jsx)(J.a, {
                                            path: "/admin/allEmployees",
                                            children: Object(a.jsx)(se, {})
                                        }), Object(a.jsx)(J.a, {
                                            path: "/admin/employee/:id",
                                            children: Object(a.jsx)(fe, {})
                                        }), Object(a.jsx)(J.a, {
                                            path: "/admin/registeredUsers",
                                            children: Object(a.jsx)(_e, {})
                                        }), Object(a.jsx)(J.a, {
                                            path: "/admin/AbsentEmployees",
                                            children: Object(a.jsx)(Ne, {})
                                        }), Object(a.jsx)(J.a, {
                                            path: "/admin/recievedRequests"
                                        }), Object(a.jsx)(J.a, {
                                            path: "/admin/sendMessage",
                                            children: Object(a.jsx)(Ce, {})
                                        })]
                                    })]
                                })]
                            })
                        }
                    }]), n
                }(r.Component),
                Ie = Object(d.b)((function (e) {
                    return {
                        user: e.user
                    }
                }))(De);
            var Me = function (e) {
                    var t = e.xx,
                        n = e.setAllowed,
                        a = e.normalMode,
                        s = Object(r.useState)((new Date).toLocaleTimeString()),
                        c = Object(Y.a)(s, 2),
                        i = c[0],
                        o = c[1];
                    return Object(r.useEffect)((function () {
                        var e = setInterval((function () {
                            if (a) o((new Date).toLocaleTimeString());
                            else {
                                var e = +new Date - +new Date(t),
                                    r = Math.floor(e / 1e3 / 60 / 60);
                                r = r < 10 ? "0".concat(r) : r;
                                var s = new Date(e).getMinutes();
                                s = s < 10 ? "0" + s : s;
                                var c = new Date(e).getSeconds() + 1;
                                o(r + ":" + s + ":" + (c = c < 10 ? "0" + c : c)), r >= 8 && n(!1)
                            }
                        }), 1e3);
                        return function () {
                            clearInterval(e)
                        }
                    }), [t, n, a]), i
                },
                Ue = n(68),
                Re = n.n(Ue);
            var Te = Object(d.b)((function (e) {
                    return {
                        Attendance: e.Attendance,
                        user: e.user
                    }
                }))((function (e) {
                    var t = new Date,
                        n = (new Date).getTimezoneOffset(),
                        s = null,
                        c = e.dispatch;
                    return Object(r.useEffect)((function () {
                        console.log("hooooooooooo======>", e.Attendance), console.log("hooooooooooo======>", !!e.Attendance)
                    }), [e.Attendance]), Object(r.useEffect)((function () {
                        c(ne("/user/register", x))
                    }), [c, n]), e.Attendance && (s = new Date(e.Attendance.AttendAt)), Object(a.jsx)("div", {
                        className: Re.a.container,
                        children: e.Attendance ? Object(a.jsxs)("div", {
                            children: [Object(a.jsx)("h1", {
                                style: {
                                    textAlign: "center"
                                },
                                children: "you already registered today"
                            }), Object(a.jsxs)("div", {
                                className: Re.a.box,
                                children: [Object(a.jsx)("img", {
                                    style: {
                                        borderRadius: "50%"
                                    },
                                    src: "https://www.gravatar.com/avatar/".concat(e.user.avatar),
                                    alt: "profile "
                                }), Object(a.jsx)("h2", {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: e.Attendance.name
                                }), Object(a.jsx)("h2", {
                                    children: Object(a.jsx)("span", {
                                        children: s.getHours() > 12 ? s.getHours() - 12 + ":" + s.getMinutes() + " PM" : s.getHours() + ":" + s.getMinutes() + " AM"
                                    })
                                }), Object(a.jsxs)("h2", {
                                    children: [Object(a.jsx)("span", {
                                        children: s.getFullYear()
                                    }), Object(a.jsxs)("span", {
                                        children: ["/", s.getMonth() + 1]
                                    }), Object(a.jsxs)("span", {
                                        children: ["/", s.getDate()]
                                    })]
                                })]
                            })]
                        }) : Object(a.jsxs)(r.Fragment, {
                            children: [Object(a.jsx)("h1", {
                                style: {
                                    textAlign: "center"
                                },
                                children: Object(a.jsx)(Me, {
                                    normalMode: !0
                                })
                            }), Object(a.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: "1 0 0"
                                },
                                children: Object(a.jsx)("button", {
                                    onClick: function () {
                                        e.dispatch(be("/user/register", {
                                            date: n,
                                            hours: t.getHours(),
                                            minutes: t.getMinutes()
                                        }, x))
                                    },
                                    style: {
                                        width: "50%",
                                        margin: 0
                                    },
                                    children: "Regiester"
                                })
                            })]
                        })
                    })
                })),
                Le = n(69),
                He = n.n(Le);
            var Fe = Object(d.b)((function (e) {
                    return {
                        Attendance: e.Attendance,
                        user: e.user
                    }
                }))((function (e) {
                    var t, n, s = new Date,
                        c = (new Date).getTimezoneOffset(),
                        i = null,
                        o = e.dispatch,
                        l = Object(r.useState)(!0),
                        d = Object(Y.a)(l, 2),
                        u = d[0],
                        j = d[1];
                    return Object(r.useEffect)((function () {
                        o(ne("/user/registerOut", x))
                    }), [o]), e.Attendance && (i = new Date(e.Attendance.LeftAt)), null === e.Attendance ? Object(a.jsx)("h1", {
                        style: {
                            width: "100%",
                            textAlign: "center"
                        },
                        children: "you need to register in first"
                    }) : Object(a.jsx)("div", {
                        className: He.a.container,
                        children: (null === (t = e.Attendance) || void 0 === t ? void 0 : t.LeftAt) ? Object(a.jsxs)("div", {
                            children: [Object(a.jsx)("h1", {
                                style: {
                                    textAlign: "center"
                                },
                                children: "you already registered out today"
                            }), Object(a.jsxs)("div", {
                                className: He.a.box,
                                children: [Object(a.jsx)("img", {
                                    style: {
                                        borderRadius: "50%"
                                    },
                                    src: "https://www.gravatar.com/avatar/".concat(e.user.avatar),
                                    alt: "profile "
                                }), Object(a.jsx)("h2", {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: e.Attendance.name
                                }), Object(a.jsx)("h2", {
                                    children: Object(a.jsx)("span", {
                                        children: i.getHours() > 12 ? i.getHours() - 12 + ":" + i.getMinutes() + " PM" : i.getHours() + ":" + i.getMinutes() + " AM"
                                    })
                                }), Object(a.jsxs)("h2", {
                                    children: [Object(a.jsx)("span", {
                                        children: i.getFullYear()
                                    }), Object(a.jsxs)("span", {
                                        children: ["/", i.getMonth() + 1]
                                    }), Object(a.jsxs)("span", {
                                        children: ["/", i.getDate()]
                                    })]
                                })]
                            })]
                        }) : Object(a.jsxs)(r.Fragment, {
                            children: [Object(a.jsxs)("div", {
                                style: {
                                    textAlign: "center",
                                    flex: "0 0 25%"
                                },
                                children: [Object(a.jsx)("h1", {
                                    children: "Time at work "
                                }), Object(a.jsx)("h2", {
                                    children: Object(a.jsx)(Me, {
                                        setAllowed: j,
                                        xx: e.Attendance.AttendAt
                                    })
                                })]
                            }), Object(a.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: " 0 0 50%"
                                },
                                children: Object(a.jsx)("button", {
                                    disabled: u,
                                    onClick: function () {
                                        console.log(u), e.dispatch(be("/user/registerOut", {
                                            date: c,
                                            hours: s.getHours(),
                                            minutes: s.getMinutes()
                                        }, x))
                                    },
                                    style: {
                                        width: "50%",
                                        margin: 0
                                    },
                                    children: "Regiester"
                                })
                            }), Object(a.jsxs)("div", {
                                style: {
                                    flex: "0 0 25%"
                                },
                                children: [Object(a.jsx)("h2", {
                                    children: " you can register out after 8 hours"
                                }), Object(a.jsxs)("h2", {
                                    children: ["at ", new Date(+new Date(null === (n = e.Attendance) || void 0 === n ? void 0 : n.AttendAt) + 288e5).toLocaleTimeString(), " "]
                                })]
                            })]
                        })
                    })
                })),
                Pe = n(107),
                Be = n.n(Pe),
                Je = n(108),
                qe = n.n(Je);

            function ze(e) {
                var t = e.size,
                    n = e.color;
                return Object(a.jsx)("div", {
                    className: qe.a.loader,
                    style: {
                        fontSize: t,
                        color: n
                    }
                })
            }
            var We = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var Ye = Object(d.b)((function (e) {
                    return {
                        history: e.history
                    }
                }))((function (e) {
                    var t = e.dispatch,
                        n = new Date,
                        s = Object(r.useState)((new Date).getFullYear()),
                        c = Object(Y.a)(s, 2),
                        i = c[0],
                        o = c[1],
                        l = Object(r.useState)((new Date).getMonth()),
                        u = Object(Y.a)(l, 2),
                        j = u[0],
                        b = u[1],
                        h = Object(d.d)((function (e) {
                            return e.loading
                        }));
                    return Object(r.useEffect)((function () {
                        t(ne("/user/allrecords?year=".concat(i, "&month=").concat(j), y))
                    }), [t, i, j]), console.log("hitoryyy", e.history), Object(a.jsxs)("div", {
                        className: Be.a.container,
                        children: [Object(a.jsxs)("h1", {
                            style: {
                                textAlign: "center"
                            },
                            children: [i, " - ", We[j]]
                        }), Object(a.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                width: "50%",
                                margin: "0 auto"
                            },
                            children: [Object(a.jsx)("h3", {
                                style: {
                                    cursor: "pointer",
                                    visibility: n.getMonth() === j && n.getFullYear() === i ? "hidden" : "visible"
                                },
                                onClick: function () {
                                    var e = j + 1;
                                    e > 11 && (e = 0, o(i + 1)), b(e)
                                },
                                children: "next month"
                            }), Object(a.jsx)("div", {
                                style: {
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: h ? Object(a.jsx)(ze, {
                                    size: "5px",
                                    color: "blue"
                                }) : ""
                            }), Object(a.jsx)("h3", {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: function () {
                                    var e = j - 1;
                                    e < 0 && (e = 11, o(i - 1)), b(e)
                                },
                                children: "previous month"
                            })]
                        }), Object(a.jsx)(le, {
                            history: e.history
                        })]
                    })
                })),
                Ke = n(28),
                Ge = n.n(Ke);
            var Ve = Object(d.b)((function (e) {
                    return {
                        conversation: e.conversation,
                        user: e.user,
                        socket: e.socket
                    }
                }), (function (e) {
                    return {
                        sendConversation: function (t) {
                            return e(be("/conversation/send", t, _))
                        },
                        getConversation: function (t) {
                            return e(ne("/conversation", _))
                        }
                    }
                }))((function (e) {
                    var t = e.getConversation,
                        n = e.sendConversation,
                        s = (e.conversation, e.user),
                        c = e.socket,
                        i = s._id,
                        o = Object(r.useRef)(null),
                        l = Object(r.useState)(""),
                        d = Object(Y.a)(l, 2),
                        u = d[0],
                        j = d[1],
                        b = Object(r.useState)([]),
                        h = Object(Y.a)(b, 2),
                        p = h[0],
                        O = h[1];
                    Object(r.useEffect)((function () {
                        c && c.on("recieve_message_from_admin", (function (e) {
                            e.fromMe || document.querySelector("#audio").play(), console.log("3ady"), O((function (t) {
                                return [].concat(Object(de.a)(t), [e])
                            }))
                        }))
                    }), [c]), Object(r.useEffect)((function () {
                        function e() {
                            return (e = Object(I.a)(D.a.mark((function e() {
                                var n;
                                return D.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t();
                                        case 2:
                                            n = e.sent, O(n.messages);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function () {
                            e.apply(this, arguments)
                        }()
                    }), [t]), Object(r.useEffect)((function () {
                        o.current.scroll(0, o.current.scrollHeight)
                    }));
                    var m = function (e) {
                        if (13 === e.keyCode || "click" === e.type) {
                            var t = {
                                from: i,
                                avatar: s.avatar,
                                content: u,
                                name: s.name,
                                date: Date.now()
                            };
                            c.emit("send_message_to_admins", t), j(""), n({
                                theMessage: u
                            })
                        }
                    };
                    return Object(a.jsxs)("div", {
                        className: Ge.a.container,
                        children: [Object(a.jsx)("div", {
                            ref: o,
                            className: Ge.a.holder,
                            children: p[0] ? p.map((function (e) {
                                return Object(a.jsxs)("div", {
                                    className: Ge.a.box,
                                    style: e.from === i ? {
                                        marginRight: "auto",
                                        marginLeft: 0
                                    } : {},
                                    children: [Object(a.jsx)("p", {
                                        style: {
                                            paddingBottom: "5px",
                                            borderBottom: "1px solid black"
                                        },
                                        children: e.name
                                    }), Object(a.jsx)("p", {
                                        children: e.content
                                    }), Object(a.jsx)("p", {
                                        className: Ge.a.date,
                                        children: new Date(e.date).toLocaleString()
                                    })]
                                })
                            })) : Object(a.jsx)("h1", {
                                style: {
                                    textAlign: "center"
                                },
                                children: "loading.."
                            })
                        }), Object(a.jsx)("input", {
                            className: Ge.a.input,
                            type: "text",
                            onKeyUp: m,
                            value: u,
                            onChange: function (e) {
                                j(e.target.value)
                            }
                        }), Object(a.jsx)("button", {
                            className: Ge.a.button,
                            onClick: m,
                            children: "Send"
                        })]
                    })
                })),
                Ze = n(70),
                Qe = n.n(Ze),
                Xe = n(71),
                $e = n.n(Xe);
            var et = Object(d.b)((function (e) {
                    return {
                        notification: e.notification
                    }
                }))((function (e) {
                    var t = e.notification,
                        n = e.dispatch;
                    return console.log("notification", t), Object(r.useEffect)((function () {
                        n(ne("/user/getNotification", w))
                    }), [n]), Object(a.jsx)("div", {
                        className: $e.a.container,
                        children: t ? t.map((function (e, t) {
                            return Object(a.jsxs)("div", {
                                className: $e.a.box,
                                children: [Object(a.jsx)("span", {
                                    children: e.msg
                                }), Object(a.jsx)("span", {
                                    children: new Date(e.date).toLocaleString()
                                })]
                            }, t)
                        })) : ""
                    })
                })),
                tt = n(72),
                nt = n.n(tt),
                at = n(73),
                rt = n.n(at);
            var st = function (e) {
                var t = e.content;
                return Object(a.jsx)("li", {
                    className: rt.a.sidebar_item,
                    onClick: function () {
                        e.setActive(e.path)
                    },
                    style: e.theActiveItem === e.path ? {
                        backgroundColor: "red"
                    } : {},
                    children: Object(a.jsxs)(o.b, {
                        className: rt.a.Link,
                        to: e.path,
                        children: [e.name, Object(a.jsx)("span", {
                            style: {
                                position: "relative",
                                left: "20px",
                                borderRadius: "100%",
                                backgroundColor: "green",
                                fontSize: "20px",
                                width: "25px",
                                display: "inline-block",
                                textAlign: "center"
                            },
                            children: t
                        })]
                    })
                })
            };
            var ct = function (e) {
                    var t = e.username,
                        n = e.avatar,
                        s = e.newNotifications,
                        c = Object(r.useState)(window.location.pathname),
                        i = Object(Y.a)(c, 2),
                        o = i[0],
                        l = i[1];
                    return console.log("activeItem==>", o), Object(a.jsxs)("div", {
                        className: nt.a.container,
                        children: [Object(a.jsxs)("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: [Object(a.jsx)("img", {
                                style: {
                                    borderRadius: "50%"
                                },
                                src: "https://www.gravatar.com/avatar/".concat(n),
                                alt: "profile "
                            }), Object(a.jsx)("h2", {
                                onClick: function () {
                                    Notification.requestPermission().then(console.log)
                                },
                                style: {
                                    textAlign: "center"
                                },
                                children: t
                            })]
                        }), Object(a.jsxs)("ul", {
                            className: nt.a.sidebar_list,
                            children: [Object(a.jsx)(st, {
                                name: "My Profile",
                                path: "/",
                                setActive: l,
                                theActiveItem: o
                            }), Object(a.jsx)(st, {
                                name: "notification",
                                content: s,
                                path: "/notification",
                                setActive: l,
                                theActiveItem: o
                            }), Object(a.jsx)(st, {
                                name: "My History",
                                path: "/myhistory",
                                setActive: l,
                                theActiveItem: o
                            }), Object(a.jsx)(st, {
                                name: "Attendance registration",
                                path: "/Register",
                                setActive: l,
                                theActiveItem: o
                            }), Object(a.jsx)(st, {
                                name: "Leave",
                                path: "/leave",
                                setActive: l,
                                theActiveItem: o
                            }), Object(a.jsx)(st, {
                                name: "send",
                                path: "/send",
                                setActive: l,
                                theActiveItem: o
                            }), Object(a.jsx)(st, {
                                name: "admin",
                                path: "/admin",
                                setActive: l,
                                theActiveItem: o
                            })]
                        })]
                    })
                },
                it = function (e) {
                    Object(P.a)(n, e);
                    var t = Object(B.a)(n);

                    function n() {
                        return Object(H.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(F.a)(n, [{
                        key: "componentDidMount",
                        value: function () {
                            this.props.dispatch(ne("/user/me", m)), "serviceWorker" in navigator && navigator.serviceWorker.register("/serverWorker.js", {
                                scope: "/"
                            }).then((function () {
                                U(), console.log("working every timeeeeeeeeeeeeeeee")
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function () {
                            // var e = Object(q.io)('http://192.168.1.6:3333');
                            var e = Object(q.io)( {
                                query: {
                                    userId: this.props.user._id
                                }
                            });
                            console.log('ahooooooooooo ya 3m :(')
                            this.props.dispatch({
                                type: "SET_DISPATCH",
                                payload: e
                            });
                            //  console.log("=<<<<<<\n", e.connected);connected

                             console.log("=<<<<<<\n", e)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return Object(a.jsx)(r.Fragment, {
                                children: Object(a.jsxs)(J.c, {
                                    children: [Object(a.jsx)(J.a, {
                                        path: "/admin",
                                        children: Object(a.jsx)(Ie, {})
                                    }), Object(a.jsx)(J.a, {
                                        path: "/",
                                        children: Object(a.jsxs)("div", {
                                            className: Qe.a.container,
                                            children: [Object(a.jsx)(te, {}), Object(a.jsxs)("div", {
                                                className: Qe.a.body,
                                                children: [Object(a.jsx)(ct, {
                                                    username: this.props.user.name,
                                                    avatar: this.props.user.avatar,
                                                    newNotifications: this.props.user.newNotifications
                                                }), Object(a.jsx)(J.a, {
                                                    exact: !0,
                                                    path: "/notification",
                                                    children: Object(a.jsx)(et, {
                                                        notification: this.props.user.notification
                                                    })
                                                }), Object(a.jsx)(J.a, {
                                                    exact: !0,
                                                    path: "/",
                                                    children: Object(a.jsx)(me, {
                                                        user: this.props.user
                                                    })
                                                }), Object(a.jsx)(J.a, {
                                                    path: "/myhistory",
                                                    children: Object(a.jsx)(Ye, {})
                                                }), Object(a.jsx)(J.a, {
                                                    path: "/Register",
                                                    children: Object(a.jsx)(Te, {})
                                                }), Object(a.jsx)(J.a, {
                                                    path: "/leave",
                                                    children: Object(a.jsx)(Fe, {})
                                                }), Object(a.jsx)(J.a, {
                                                    path: "/send",
                                                    children: Object(a.jsx)(Ve, {})
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), n
                }(r.Component),
                ot = Object(d.b)((function (e) {
                    return {
                        user: e.user
                    }
                }))(it),
                lt = n(31),
                dt = n(27),
                ut = n.n(dt),
                jt = n(39),
                bt = n.n(jt),
                ht = n(21),
                pt = n.n(ht),
                Ot = n(109),
                mt = n.n(Ot);
            var xt = function (e) {
                var t = e.name,
                    n = e.onSubmit,
                    r = e.loading;
                return Object(a.jsxs)("button", {
                    className: mt.a.button,
                    onClick: n,
                    children: [t, r ? Object(a.jsx)("div", {
                        style: {
                            position: "absolute",
                            right: "20px",
                            top: "20px"
                        },
                        children: Object(a.jsx)(ze, {
                            size: "3px"
                        })
                    }) : ""]
                })
            };
            var ft = function (e) {
                    var t = this,
                        n = e.title,
                        r = e.items,
                        s = e.onSubmit,
                        c = e.id;
                    r.forEach((function (e) {
                        console.log(e.isInvalid)
                    }));
                    var i = Object(d.d)((function (e) {
                        return e.loading
                    }));
                    return Object(a.jsx)("div", {
                        className: pt.a.container,
                        children: Object(a.jsxs)("form", {
                            onSubmit: s,
                            children: [Object(a.jsxs)("h1", {
                                className: pt.a.title,
                                children: [n, " "]
                            }), Object(a.jsxs)("h2", {
                                id: "".concat(c, "title2"),
                                className: pt.a.title2,
                                children: ["Welcome ", "Log In" === n ? "back" : "", " to our Company"]
                            }), Object(a.jsx)("div", {
                                id: c,
                                children: r.map((function (e, n) {
                                    return Object(a.jsxs)("div", {
                                        className: pt.a.formgroup,
                                        children: [Object(a.jsxs)("label", {
                                            htmlFor: e.name,
                                            children: [e.name, ":"]
                                        }), Object(a.jsx)("input", {
                                            value: e.value,
                                            style: e.errorMsg ? {
                                                backgroundColor: "rgba(255 , 0 ,0 ,.2)"
                                            } : {},
                                            minLength: "password" === e.type ? "8" : "3",
                                            required: !0,
                                            onChange: e.saveInputData.bind(t, e.type),
                                            className: pt.a.input,
                                            type: 0 === e.type.search(/pass/) ? "password" : e.type,
                                            placeholder: e.placeholder
                                        }), Object(a.jsx)("input", {
                                            id: pt.a.checkmark,
                                            className: !e.errorMsg && e.value ? pt.a.checked : "",
                                            type: "checkbox",
                                            checked: "checked",
                                            readOnly: !0
                                        }), Object(a.jsx)("span", {
                                            className: pt.a.errorMessage,
                                            style: e.errorMsg ? {
                                                transform: "translateY(0px)",
                                                opacity: "1"
                                            } : {},
                                            children: e.errorMsg
                                        })]
                                    }, n)
                                }))
                            }), Object(a.jsx)(xt, {
                                name: n,
                                loading: i
                            })]
                        })
                    })
                },
                gt = n(74),
                vt = n.n(gt);

            function yt() {
                return Object(a.jsxs)("div", {
                    children: [Object(a.jsxs)("svg", {
                        className: vt.a.cloud1,
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 425.58 213.41",
                        children: [Object(a.jsx)("defs", {
                            children: Object(a.jsx)("style", {
                                children: ".cls-1{fill:#0860ff;}.cls-2{fill:#082453;}"
                            })
                        }), Object(a.jsx)("g", {
                            id: "Layer_2",
                            "data-name": "Layer 2",
                            children: Object(a.jsxs)("g", {
                                id: "Layer_2-2",
                                "data-name": "Layer 2",
                                children: [Object(a.jsx)("path", {
                                    className: "cls-1",
                                    d: "M.66,90.36q-.23-18-.47-36c4.06-3.53,9.51-8,16.2-13A269.24,269.24,0,0,1,40.87,25.59C63.1,12.68,74.1,6,86.59,2.91A99.32,99.32,0,0,1,112.87,0a64.39,64.39,0,0,1,14.76,1.8,54.54,54.54,0,0,1,17.64,8.28c2.31,1.26,5.78,3.24,9.84,5.88,6,3.87,9,6.45,12,8.64a80,80,0,0,0,23,11.52c8.71,2.63,15.58,2.38,25.44,1.92,38.19-1.78,36.31-3.76,49-2.88,5.89.41,25.52,2,43.68,12a172,172,0,0,1,16.32,10.56,150.13,150.13,0,0,1,15.36,12.48c10.22,9.54,14,14.32,15.84,17.28,2.74,4.3,4.11,6.45,3.87,7.76-1.73,9.6-57.4,6.33-89.31,5.68C140.08,98.3,84.7,132.74,5.35,92.79,3.26,91.74,1.6,90.86.66,90.36Z"
                                }), Object(a.jsx)("path", {
                                    className: "cls-2",
                                    d: "M423.06,213.16a99.61,99.61,0,0,0,2.45-26,100.62,100.62,0,0,0-8.93-37.72s-11.8-26.06-36.72-43.2a122.34,122.34,0,0,0-20.24-11,104.42,104.42,0,0,0-12.16-4.15,112.25,112.25,0,0,0-29.52-3.6c-22.44.11-30.25,6.27-43.2,7.2s-31.85-3.21-56.88-28.08a79.48,79.48,0,0,0-17.28-13A81.69,81.69,0,0,0,176.82,45c-5.26-1-11.43-2.27-19.44-1.44-2.14.22-5.54.7-21.6,6.48-9.52,3.42-16.92,6.35-20.88,7.92-9.58,3.81-12.3,5-23,9.36-23.38,9.5-32.59,12.86-42.48,15.12-5.72,1.31-10.83,2.06-11.52,2.16A150.48,150.48,0,0,1,21.3,86.08c-6.73.21-14.34,0-14.4,0h0c-3,0-4.94.39-6.12,1.08C.54,93.29.22,103,.06,114.88c-.12,9.51,0,12.35,0,34.56V212.8c11.16,0,27.89-.06,48.24,0,29.72.09,51.61.32,55.8.36C132.38,213.44,214.72,213.56,423.06,213.16Z"
                                })]
                            })
                        })]
                    }), Object(a.jsxs)("svg", {
                        className: vt.a.cloud2,
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 442.9 286.67",
                        children: [Object(a.jsx)("defs", {
                            children: Object(a.jsx)("style", {
                                children: ".cls-1{fill:#0860ff;}.cls-2{fill:#082453;}"
                            })
                        }), Object(a.jsx)("g", {
                            id: "Layer_2",
                            "data-name": "Layer 2",
                            children: Object(a.jsxs)("g", {
                                id: "Layer_3",
                                "data-name": "Layer 3",
                                children: [Object(a.jsx)("path", {
                                    className: "cls-1",
                                    d: "M409.14,243.39c0,1.67-.05,3.34-.08,5-2.59,2.28-6.23,5.33-10.8,8.64a173.76,173.76,0,0,1-15.84,10.08c-7.72,4.51-11.58,6.77-17.28,9.36a110,110,0,0,1-20.16,7.2c-6.19,1.52-14.12,3.46-24.48,2.88-13.34-.75-23.13-5.25-28.8-7.92a104.31,104.31,0,0,1-19.44-12.24c-7.59-5.73-8.29-7.5-18-15.12-8-6.25-11.95-9.38-16.56-11.52-10.46-4.87-20.15-5-25.92-5-8.5,0-9.56,1.39-26.64,3.6-10.81,1.4-16.21,2.1-23,2.16a123,123,0,0,1-35.28-5c-10.88-3-18.35-6.56-27.36-10.8-11.75-5.54-19.11-9-27.36-15.84-6.19-5.13-10.19-10.46-17.28-19.44A185.6,185.6,0,0,1,43.3,173.52a102.24,102.24,0,0,1-6.77-12.68A91.33,91.33,0,0,0,43.3,167c18.68,15.48,38.37,19.43,57.6,23,14.23,2.67,18.31,1.91,70.56,2.88,39.34.73,32.73,1.08,60.48,1.44,50.67.65,54.42-.77,72,1.44,12.73,1.6,37.85,4.75,61.92,15.84A135.4,135.4,0,0,1,409.14,243.39Z"
                                }), Object(a.jsx)("path", {
                                    className: "cls-2",
                                    d: "M442.9,0V279.36c-8,1.58-15.67-16.41-33.76-36a135.4,135.4,0,0,0-43.28-31.71c-24.07-11.09-49.19-14.24-61.92-15.84-17.58-2.21-21.33-.79-72-1.44-27.75-.36-21.14-.71-60.48-1.44-52.25-1-56.33-.21-70.56-2.88-19.23-3.61-38.92-7.56-57.6-23a91.33,91.33,0,0,1-6.77-6.2,109.13,109.13,0,0,1-19.15-26.92C8.31,116.74,5.94,102,3,83.52A229.47,229.47,0,0,1,.1,40.32,223.55,223.55,0,0,1,4.42,2.88Z"
                                })]
                            })
                        })]
                    })]
                })
            }
            var _t = function () {
                    var e = Object(r.useState)({
                            email: "",
                            password: ""
                        }),
                        t = Object(Y.a)(e, 2),
                        n = t[0],
                        s = t[1],
                        c = Object(r.useState)({}),
                        i = Object(Y.a)(c, 2),
                        l = i[0],
                        u = i[1],
                        b = Object(d.c)(),
                        p = function (e, t) {
                            var a = t.target.value,
                                r = Object.assign(l, function (e, t) {
                                    var n = {};
                                    switch (e) {
                                        case "email":
                                            ut.a.isEmail(t) ? n.email = "" : n.email = "invalid Email", "" === t && (n.email = "");
                                            break;
                                        case "password":
                                            ut.a.isLength(t, {
                                                min: 8
                                            }) ? n.password = "" : n.password = "short password", "" === t && (n.password = "")
                                    }
                                    return n
                                }(e, a));
                            u(r);
                            var c = Object.assign(n, Object(lt.a)({}, e, a));
                            s(Object(j.a)({}, c))
                        },
                        O = function () {
                            var e = Object(I.a)(D.a.mark((function e(t) {
                                var a;
                                return D.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !!Object.values(l).join("")) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 5, b(be("/login", {
                                                email: n.email,
                                                password: n.password
                                            }, h));
                                        case 5:
                                            a = e.sent, u(a);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(a.jsxs)("div", {
                        className: bt.a.container,
                        children: [Object(a.jsx)(ft, {
                            title: "Log In",
                            items: [{
                                name: "Email",
                                type: "email",
                                value: n.email,
                                placeholder: "Email address",
                                saveInputData: p,
                                errorMsg: l.email
                            }, {
                                name: "Password",
                                type: "password",
                                value: n.password,
                                placeholder: "your password",
                                saveInputData: p,
                                errorMsg: l.password
                            }],
                            onSubmit: O
                        }), Object(a.jsx)("h4", {
                            style: {
                                textAlign: "center"
                            }
                        }), Object(a.jsx)("h4", {
                            className: bt.a.note,
                            children: "Forget Password?"
                        }), Object(a.jsxs)("h4", {
                            className: bt.a.h4,
                            children: ["Don\u2019t have an account? ", Object(a.jsx)(o.b, {
                                className: bt.a.link,
                                to: "/signup",
                                children: "Create an Account"
                            })]
                        }), Object(a.jsx)(yt, {})]
                    })
                },
                wt = n(49),
                kt = n.n(wt);
            var At = Object(d.b)(null)((function (e) {
                    var t = Object(r.useState)({
                            username: "",
                            email: "",
                            password: "",
                            password2: ""
                        }),
                        n = Object(Y.a)(t, 2),
                        s = n[0],
                        c = n[1],
                        i = Object(r.useState)({}),
                        l = Object(Y.a)(i, 2),
                        d = l[0],
                        u = l[1],
                        b = function (e, t) {
                            var n = t.target.value,
                                a = Object.assign(d, function (e, t) {
                                    var n = {};
                                    switch (e) {
                                        case "username":
                                            ut.a.isLength(t, {
                                                min: 3
                                            }) ? n.username = "" : n.username = "too short", "" === t && (n.username = "");
                                            break;
                                        case "email":
                                            ut.a.isEmail(t) ? n.email = "" : n.email = "invalid Email", "" === t && (n.email = "");
                                            break;
                                        case "password":
                                            ut.a.isLength(t, {
                                                min: 8
                                            }) ? n.password = "" : n.password = "short password", "" === t && (n.password = "");
                                            break;
                                        case "password2":
                                            t !== s.password ? n.password2 = "No match" : n.password2 = "", "" === t && (n.password2 = "")
                                    }
                                    return n
                                }(e, n));
                            u(a);
                            var r = Object.assign(s, Object(lt.a)({}, e, n));
                            c(Object(j.a)({}, r))
                        },
                        h = function () {
                            var t = Object(I.a)(D.a.mark((function t(n) {
                                var a, r;
                                return D.a.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n.preventDefault(), !(a = !Object.values(d).join(""))) {
                                                t.next = 10;
                                                break
                                            }
                                            if (!a) {
                                                t.next = 9;
                                                break
                                            }
                                            return console.log("ok", a), t.next = 7, e.dispatch(be("/signup", s));
                                        case 7:
                                            r = t.sent, u(r);
                                        case 9:
                                            console.log("dddddd===>", s);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }();
                    return Object(a.jsxs)("div", {
                        className: kt.a.container,
                        children: [Object(a.jsx)(ft, {
                            title: "Sign Up",
                            id: "signUp",
                            items: [{
                                name: "username",
                                type: "username",
                                value: s.username,
                                placeholder: "username",
                                errorMsg: d.username,
                                saveInputData: b
                            }, {
                                name: "Email",
                                type: "email",
                                value: s.email,
                                placeholder: "Email address",
                                saveInputData: b,
                                errorMsg: d.email
                            }, {
                                name: "Password",
                                type: "password",
                                value: s.password,
                                placeholder: "your password",
                                saveInputData: b,
                                errorMsg: d.password
                            }, {
                                name: "confirm Password",
                                type: "password2",
                                value: s.password2,
                                placeholder: "write password again",
                                saveInputData: b,
                                errorMsg: d.password2
                            }],
                            onSubmit: h
                        }), Object(a.jsxs)("h4", {
                            className: kt.a.h4,
                            children: ["Already have an account? ", Object(a.jsx)(o.b, {
                                className: kt.a.link,
                                to: "/login",
                                children: "Log In"
                            })]
                        }), Object(a.jsx)(yt, {})]
                    })
                })),
                Nt = (n(229), function (e) {
                    Object(P.a)(n, e);
                    var t = Object(B.a)(n);

                    function n() {
                        var e;
                        Object(H.a)(this, n);
                        for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(r))).Components = [], e
                    }
                    return Object(F.a)(n, [{
                        key: "componentDidMount",
                        value: function () {
                            var e = localStorage.getItem("token");
                            e && this.props.set_token(e)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return this.props.token ? this.Components = [Object(a.jsx)(J.a, {
                                path: "/",
                                children: Object(a.jsx)(ot, {})
                            }, 1)] : this.Components = [Object(a.jsx)(J.a, {
                                path: "/signup",
                                render: function (e) {
                                    return Object(a.jsx)(At, Object(j.a)({}, e))
                                }
                            }, 2), Object(a.jsx)(J.a, {
                                path: "/",
                                render: function (e) {
                                    return Object(a.jsx)(_t, Object(j.a)({}, e))
                                }
                            }, 1)], Object(a.jsx)("div", {
                                className: "App",
                                children: Object(a.jsx)(J.c, {
                                    children: this.Components.map((function (e) {
                                        return e
                                    }))
                                })
                            })
                        }
                    }]), n
                }(r.Component)),
                St = Object(d.b)((function (e) {
                    return {
                        token: e.token,
                        showBackdrop: e.backdrop,
                        loading: e.loading,
                        errors: e.errors
                    }
                }), (function (e) {
                    return {
                        set_token: function (t) {
                            return e({
                                type: b,
                                payload: t
                            })
                        },
                        hideBackdrop: function () {
                            e({
                                type: g
                            })
                        }
                    }
                }))(Nt),
                Et = function (e) {
                    Object(P.a)(n, e);
                    var t = Object(B.a)(n);

                    function n(e) {
                        var a;
                        return Object(H.a)(this, n), (a = t.call(this, e)).state = {
                            hasError: !1
                        }, a
                    }
                    return Object(F.a)(n, [{
                        key: "componentDidCatch",
                        value: function (e, t) {
                            console.log("error", e, t)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return this.state.hasError ? Object(a.jsx)("h1", {
                                children: "Something went wrong."
                            }) : this.props.children
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function (e) {
                            return {
                                hasError: !0
                            }
                        }
                    }]), n
                }(s.a.Component),
                Ct = (n(230), Object(l.c)(L, Object(l.a)(u.a)));
            i.a.render(Object(a.jsx)(Et, {
                children: Object(a.jsx)(d.a, {
                    store: Ct,
                    children: Object(a.jsx)(o.a, {
                        children: Object(a.jsx)(St, {})
                    })
                })
            }), document.getElementById("root"))
        },
        26: function (e, t, n) {
            e.exports = {
                container: "profile_container__3quN1",
                box: "profile_box__3XwLB",
                label: "profile_label__12Nuh"
            }
        },
        28: function (e, t, n) {
            e.exports = {
                container: "send_container__24fnt",
                box: "send_box__3DxN7",
                date: "send_date__2wfR3",
                input: "send_input__qhS69",
                button: "send_button__3igh_",
                holder: "send_holder__1A_ST"
            }
        },
        32: function (e, t, n) {
            e.exports = {
                box: "textUser_box__2oCZi",
                date: "textUser_date__1dhGo",
                button: "textUser_button__bkzIB",
                holder: "textUser_holder__1q6c3"
            }
        },
        39: function (e, t, n) {
            e.exports = {
                container: "login_container__1Nts0",
                link: "login_link__3ARmh",
                h4: "login_h4__EKuY7",
                note: "login_note__3XBhF"
            }
        },
        47: function (e, t, n) {
            e.exports = {
                container: "registeredUsers_container__1wwWb",
                dateInput: "registeredUsers_dateInput__3zqaK",
                box: "registeredUsers_box__1SbmM"
            }
        },
        48: function (e, t, n) {
            e.exports = {
                container: "UnRegisterUsers_container__2DMKM",
                dateInput: "UnRegisterUsers_dateInput__1_wmp",
                box: "UnRegisterUsers_box__2RJRJ"
            }
        },
        49: function (e, t, n) {
            e.exports = {
                container: "signup_container__2xr-a",
                link: "signup_link__2Gu73",
                h4: "signup_h4__tBGEn"
            }
        },
        60: function (e, t, n) {
            e.exports = {
                container: "home_container__28s_W",
                body: "home_body__36C1i"
            }
        },
        61: function (e, t, n) {
            e.exports = {
                container: "sidebar_container__3hvz5",
                sidebar_list: "sidebar_sidebar_list__1tEgr"
            }
        },
        62: function (e, t, n) {
            e.exports = {
                sidebar_item: "sidebarItem_sidebar_item__3-4U-",
                Link: "sidebarItem_Link__Hg5Pv"
            }
        },
        65: function (e, t, n) {
            e.exports = {
                nav: "nav_nav__qNVVd",
                nav_list: "nav_nav_list__3dbRK"
            }
        },
        66: function (e, t, n) {
            e.exports = {
                box: "allUsers_box__2FJbu",
                dd: "allUsers_dd__212ug"
            }
        },
        67: function (e, t, n) {
            e.exports = {
                box: "SendMessage_box__jKlAb",
                dd: "SendMessage_dd__14D42"
            }
        },
        68: function (e, t, n) {
            e.exports = {
                container: "attend_container__2c9hR",
                box: "attend_box__3kzH3"
            }
        },
        69: function (e, t, n) {
            e.exports = {
                container: "logOut_container__2t6Ea",
                box: "logOut_box__Zkz0n"
            }
        },
        70: function (e, t, n) {
            e.exports = {
                container: "home_container__1Qb7C",
                body: "home_body__d3ABJ"
            }
        },
        71: function (e, t, n) {
            e.exports = {
                container: "Notification_container__3DFN5",
                box: "Notification_box__2OiR3"
            }
        },
        72: function (e, t, n) {
            e.exports = {
                container: "sidebar_container__1d-LQ",
                sidebar_list: "sidebar_sidebar_list__oPheb"
            }
        },
        73: function (e, t, n) {
            e.exports = {
                sidebar_item: "sidebarItem_sidebar_item__JJcqQ",
                Link: "sidebarItem_Link__1LJYw"
            }
        },
        74: function (e, t, n) {
            e.exports = {
                cloud1: "clouds_cloud1__11uGY",
                cloud2: "clouds_cloud2__3N3vq"
            }
        }
    },
    [
        [231, 1, 2]
    ]
]);
//# sourceMappingURL=main.b3db8f7c.chunk.js.map