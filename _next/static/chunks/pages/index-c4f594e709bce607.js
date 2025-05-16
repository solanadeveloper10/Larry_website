(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(4186);
        },
      ]);
    },
    554: function (e, n, t) {
      "use strict";
      var o = t(5893),
        r = t(7294),
        i = t(990),
        a = {
          container: {
            position: "relative",
            top: 0,
            left: 0,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            zIndex: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "scroll",
          },
          content: {
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          button: {
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#FFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          },
        };
      n.Z = function (e) {
        var n = e.isVisible,
          t = e.onClose,
          s = e.children,
          c = (0, r.useRef)(null);
        (0, r.useEffect)(
          function () {
            n &&
              i.p8.fromTo(
                c.current,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
              );
          },
          [n]
        );
        return n
          ? (0, o.jsx)("div", {
              ref: c,
              style: a.container,
              children: (0, o.jsxs)("div", {
                style: a.content,
                children: [
                  (0, o.jsx)("div", {
                    className:
                      "min-w-full flex h-15 justify-end items-center absolute top-0",
                    children: (0, o.jsxs)("button", {
                      onClick: function () {
                        i.p8.to(c.current, {
                          y: "100%",
                          opacity: 0,
                          duration: 0.5,
                          ease: "power3.in",
                          onComplete: t,
                        });
                      },
                      className: "!mr-6 pt-6",
                      children: [
                        "<- ",
                        (0, o.jsx)("u", { children: "go back into the room" }),
                      ],
                    }),
                  }),
                  s,
                ],
              }),
            })
          : null;
      };
    },
    4186: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t(4051),
        r = t.n(o),
        i = t(5893),
        a = t(7294),
        s = t(5152),
        c = t.n(s),
        l = t(554),
        u = t(9295),
        d = t(990),
        p = t(3989);
      function f(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
        return o;
      }
      function h(e, n, t, o, r, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (l) {
          return void t(l);
        }
        s.done ? n(c) : Promise.resolve(c).then(o, r);
      }
      function w(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (o, r) {
            var i = e.apply(n, t);
            function a(e) {
              h(i, o, r, a, s, "next", e);
            }
            function s(e) {
              h(i, o, r, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function m(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                r,
                i = [],
                a = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (o = t.next()).done) &&
                  (i.push(o.value), !n || i.length !== n);
                  a = !0
                );
              } catch (c) {
                (s = !0), (r = c);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return f(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return f(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var g = c()(
          function () {
            return t.e(456).then(t.bind(t, 8456));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8456];
              },
            },
            ssr: !1,
          }
        ),
        v = {
          outside: {
            loop: !0,
            delayTime: 0,
            frames: 56,
            speed: 0.1,
            repeatFrequency: 0,
            // mobile: !0,
            desktop: !0,
            basis: !0,
            mobileBasis: !0,
          },
          eric2: {
            loop: !1,
            delayTime: 0,
            frames: 155,
            speed: 0.3,
            repeatFrequency: 5,
            // mobile: !0,
            desktop: !0,
            basis: !0,
            mobileBasis: !1,
          },
          fozzy: {
            loop: !1,
            delayTime: 0,
            frames: 102,
            speed: 0.25,
            repeatFrequency: 5,
            // mobile: !0,
            desktop: !0,
            basis: !0,
            mobileBasis: !0,
          },
          girl: {
            loop: !1,
            delayTime: 0,
            frames: 212,
            speed: 0.25,
            repeatFrequency: 7,
            // mobile: !1,
            desktop: !0,
            basis: !0,
            mobileBasis: !0,
          },
          girlMobile: {
            loop: !1,
            delayTime: 0,
            frames: 55,
            speed: 0.25,
            repeatFrequency: 3,
            // mobile: !0,
            desktop: !1,
            mobileBasis: !0,
          },
          logo: {
            loop: !0,
            delayTime: 0,
            frames: 59,
            speed: 0.25,
            repeatFrequency: 0,
            // mobile: !0,
            desktop: !0,
            basis: !0,
            mobileBasis: !0,
          },
          muppets: {
            loop: !1,
            delayTime: 0,
            frames: 284,
            speed: 0.3,
            repeatFrequency: 5,
            // mobile: !1,
            desktop: !0,
            basis: !0,
            mobileBasis: !0,
          },
          muppetsMobile: {
            loop: !1,
            delayTime: 0,
            frames: 39,
            speed: 0.3,
            repeatFrequency: 5,
            // mobile: !0,
            desktop: !1,
            mobileBasis: !0,
          },
          cookies: {
            loop: !1,
            delayTime: 0,
            frames: 69,
            speed: 0.3,
            repeatFrequency: 4,
            // mobile: !0,
            desktop: !0,
            basis: !0,
            mobileBasis: !0,
          },
          buyopen: {
            loop: !1,
            delayTime: 0,
            frames: 108,
            speed: 0.3,
            repeatFrequency: 700,
            // mobile: !1,
            desktop: !0,
            basis: !0,
            mobileBasis: !0,
          },
        };
      n.default = function () {
        var e,
          n,
          o,
          s,
          c,
          f = 5120,
          h = 2160,
          y = { width: 3840, height: 2160 },
          x = (0, a.useState)(!1),
          b = x[0],
          k = x[1],
          j = (0, a.useState)(!0),
          F = j[0],
          E = j[1],
          S = (0, a.useState)(!1),
          C = S[0],
          P = S[1],
          _ = (0, a.useState)(!1),
          A = _[0],
          H = _[1],
          T = (0, a.useRef)(null),
          I = (0, a.useRef)(null),
          z = (0, a.useRef)(null),
          B = (0, a.useRef)(null),
          L = (0, a.useRef)(null),
          O = (Object.keys(v), {}),
          R = {},
          N = [
            "outside",
            "logo",
            "eric2",
            "cookies",
            "fozzy",
            "girlMobile",
            "muppetsMobile",
          ],
          W = {},
          K = {},
          M = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        (0, a.useEffect)(function () {
          var e = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          I.current &&
            (I.current.innerHTML = "\n                    <p>"
              .concat(
                e ? "Mobile Device Detected" : "Desktop Browser Detected",
                "</p>\n                    <p>User Agent: "
              )
              .concat(navigator.userAgent, "</p>\n                "));
        }, []),
          (0, a.useEffect)(function () {
            (y.height = window.innerWidth / 2.3703703703703702),
              (y.width = window.innerWidth),
              G(),
              t
                .e(933)
                .then(t.t.bind(t, 5933, 23))
                .then(function (e) {
                  e.load({
                    custom: {
                      families: ["HardcorePenRegular"],
                      urls: ["/fonts/hardcore_pen_regular.css"],
                    },
                    active: function () {
                      console.log("Fonts loaded!");
                    },
                  });
                });
            var e = (function () {
              var e = w(
                r().mark(function e() {
                  return r().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            p.Ge.loadTranscoder(
                              "/js/basis/basis_transcoder.js",
                              "/js/basis/basis_transcoder.wasm"
                            ).then(function () {
                              u.aNw.registerPlugin(p.Ge),
                                console.log("Basis transcoder initialized");
                            });
                          } catch (n) {
                            console.error(
                              "Error initializing Basis transcoder:",
                              n
                            );
                          }
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            return (
              e(),
              window.addEventListener("resize", se),
              window.addEventListener("mousemove", ce),
              function () {
                window.removeEventListener("resize", se),
                  window.removeEventListener("mousemove", ce);
              }
            );
          }, []);
        !(function () {
          var e = w(
            r().mark(function e() {
              return r().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          p.Ge.loadTranscoder(
                            "/js/basis/basis_transcoder.js",
                            "/js/basis/basis_transcoder.wasm"
                          )
                        );
                      case 3:
                        u.aNw.registerPlugin(p.Ge),
                          console.log("Basis transcoder initialized"),
                          (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Error initializing Basis transcoder:",
                            e.t0
                          );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
        })();
        var G = (function () {
            var t = w(
              r().mark(function t() {
                var o, i, a, s;
                return r().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        if (
                          ((o = /iPhone|iPad|iPod|Android/i.test(
                            navigator.userAgent
                          )),
                          (i = window.devicePixelRatio > 2),
                          (a = "/images/base-wide.webp"),
                          o &&
                            (a = i
                              ? "/images/base-wide_md.png"
                              : "/images/base-wide_md.webp"),
                          (s = document.getElementById("main")))
                        ) {
                          t.next = 10;
                          break;
                        }
                        return (
                          console.error('Element with id "main" not found!'),
                          t.abrupt("return")
                        );
                      case 10:
                        (e = new u.MxU({
                          width: y.width,
                          height: y.height,
                          backgroundColor: 0,
                          resizeTo: window,
                        })),
                          s.appendChild(e.view),
                          (M = o),
                          e.renderer.on("contextlost", function (e) {
                            e.preventDefault(),
                              console.warn(
                                "WebGL context lost. Attempting to restore..."
                              );
                          }),
                          e.renderer.on("contextrestored", function () {
                            console.log("WebGL context restored.");
                          }),
                          ((n = new u.W20()).cullable = !0),
                          e.stage.addChild(n),
                          e.loader.add("bgImage", a),
                          e.loader.load(
                            (function () {
                              var e = w(
                                r().mark(function e(n, t) {
                                  var o;
                                  return r().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              !(null === (o = t.bgImage) ||
                                              void 0 === o
                                                ? void 0
                                                : o.texture)
                                            ) {
                                              e.next = 16;
                                              break;
                                            }
                                            return (
                                              q(t.bgImage.texture),
                                              (e.prev = 3),
                                              (e.next = 6),
                                              Z()
                                            );
                                          case 6:
                                            ee(), J(), ae(), (e.next = 14);
                                            break;
                                          case 11:
                                            (e.prev = 11),
                                              (e.t0 = e.catch(3)),
                                              console.error(
                                                "Error during resource loading:",
                                                e.t0
                                              );
                                          case 14:
                                            e.next = 17;
                                            break;
                                          case 16:
                                            console.error(
                                              "Background image failed to load. Check the path or file existence."
                                            );
                                          case 17:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[3, 11]]
                                  );
                                })
                              );
                              return function (n, t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          ),
                          console.log(
                            "Renderer Type:",
                            e.renderer.type === u.N3k.WEBGL ? "WebGL" : "Canvas"
                          );
                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          q = function (e) {
            (s = new u.jyi(e)).anchor.set(0.5),
              (s.zIndex = -1),
              n.addChildAt(s, 0),
              ie();
          },
          Z = (function () {
            var n = w(
              r().mark(function n() {
                return r().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt(
                          "return",
                          new Promise(function (n, t) {
                            var o = e.loader,
                              r = M
                                ? "/images/glow_m.webp"
                                : "/images/glow.webp";
                            o.add("glow", r),
                              o.load(function (e, o) {
                                var r;
                                (
                                  null === (r = o.glow) || void 0 === r
                                    ? void 0
                                    : r.texture
                                )
                                  ? (console.log(
                                      "Glow texture loaded successfully."
                                    ),
                                    ne(),
                                    n(o))
                                  : (console.error(
                                      "Failed to load glow texture."
                                    ),
                                    t(
                                      new Error("Glow texture loading failed.")
                                    ));
                              }),
                              o.onError.add(function (e) {
                                console.error("Loader error:", e), t(e);
                              });
                          })
                        );
                      case 1:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          D = (function () {
            var n = w(
              r().mark(function n(t, o) {
                return r().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (!W[t]) {
                          n.next = 3;
                          break;
                        }
                        return (
                          console.log(
                            "Textures already cached for animation: ".concat(t)
                          ),
                          n.abrupt("return", W[t])
                        );
                      case 3:
                        return n.abrupt(
                          "return",
                          new Promise(function (n, r) {
                            var i, a;
                            e.loader.reset();
                            var s =
                              (M &&
                                (null === (i = v[t]) || void 0 === i
                                  ? void 0
                                  : i.mobileBasis)) ||
                              (!M &&
                                (null === (a = v[t]) || void 0 === a
                                  ? void 0
                                  : a.basis));
                            o.forEach(function (n) {
                              var o = s ? ".basis" : ".webp",
                                r = M
                                  ? "/images/motion/FINAL2/"
                                      .concat(t, "/spritesheet_part_")
                                      .concat(n, "_md")
                                      .concat(o)
                                  : "/images/motion/FINAL2/"
                                      .concat(t, "/spritesheet_part_")
                                      .concat(n)
                                      .concat(o);
                              e.loader.add(
                                M
                                  ? "".concat(t, "_part_").concat(n, "_md")
                                  : "".concat(t, "_part_").concat(n),
                                r
                              );
                            }),
                              e.loader.load(function (e, o) {
                                var i = Object.values(o).filter(function (e) {
                                  return e.error;
                                });
                                if (i.length > 0)
                                  return (
                                    console.error(
                                      "Some parts failed to load:",
                                      i
                                    ),
                                    r(new Error("Texture loading failed."))
                                  );
                                console.log(
                                  "Textures fully loaded and cached for animation: ".concat(
                                    t
                                  )
                                ),
                                  (W[t] = o),
                                  n(o);
                              });
                          })
                        );
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e, t) {
              return n.apply(this, arguments);
            };
          })(),
          J = (function () {
            var e = w(
              r().mark(function e() {
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), X();
                      case 2:
                        if (
                          (console.log(
                            "All textures loaded and animations created."
                          ),
                          E(!1),
                          void 0 !== M)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return $(), (e.next = 8), V();
                      case 8:
                        e.next = 11;
                        break;
                      case 10:
                        U();
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          U = function () {
            var e,
              n = Object.keys(v).filter(function (e) {
                var n = v[e];
                return M ? !0 === n.mobile : !0 === n.desktop;
              }),
              t = !0,
              o = !1,
              r = void 0;
            try {
              for (
                var i,
                  a = function (e, n) {
                    var t = n.value,
                      o = v[t],
                      r = R[t];
                    if (!r)
                      return (
                        console.warn("Animation ".concat(t, " not found.")),
                        { v: void 0 }
                      );
                    if (o.loop) (r.loop = !0), r.gotoAndPlay(0);
                    else {
                      var i = o.repeatFrequency,
                        a = function () {
                          (r.loop = !1),
                            r.gotoAndPlay(0),
                            (r.onComplete = function () {
                              r.stop(),
                                setTimeout(function () {
                                  a();
                                }, 1200 * i);
                            });
                        };
                      a();
                    }
                  },
                  s = n[Symbol.iterator]();
                !(t = (i = s.next()).done);
                t = !0
              ) {
                var c = a(0, i);
                if (
                  "object" ===
                  ((e = c) &&
                  "undefined" !== typeof Symbol &&
                  e.constructor === Symbol
                    ? "symbol"
                    : typeof e)
                )
                  return c.v;
              }
            } catch (l) {
              (o = !0), (r = l);
            } finally {
              try {
                t || null == s.return || s.return();
              } finally {
                if (o) throw r;
              }
            }
          },
          X = (function () {
            var e = w(
              r().mark(function e() {
                var t, o, i, a, s, c, l, u, d, p, f, h, w, m, g;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = Object.keys(v).filter(function (e) {
                            var n = v[e];
                            return M ? !0 === n.mobile : !0 === n.desktop;
                          })),
                            (o = !0),
                            (i = !1),
                            (a = void 0),
                            (e.prev = 2),
                            (s = t[Symbol.iterator]());
                        case 4:
                          if ((o = (c = s.next()).done)) {
                            e.next = 32;
                            break;
                          }
                          if (((l = c.value), (u = v[l]).frames && u.speed)) {
                            e.next = 10;
                            break;
                          }
                          return (
                            console.warn(
                              "Skipping ".concat(
                                l,
                                ": Missing frames or speed."
                              )
                            ),
                            e.abrupt("continue", 29)
                          );
                        case 10:
                          if (
                            ((d = "/images/motion/FINAL2/".concat(
                              l,
                              "/spritesheet.json"
                            )),
                            K[l])
                          ) {
                            e.next = 21;
                            break;
                          }
                          return (e.next = 14), fetch(d);
                        case 14:
                          if ((p = e.sent).ok) {
                            e.next = 18;
                            break;
                          }
                          return (
                            console.error(
                              "Failed to fetch JSON for ".concat(l)
                            ),
                            e.abrupt("continue", 29)
                          );
                        case 18:
                          return (e.next = 20), p.json();
                        case 20:
                          K[l] = e.sent;
                        case 21:
                          return (
                            (f = K[l]),
                            (h = Array.from(
                              new Set(
                                Object.values(f.frames).map(function (e) {
                                  return e.part;
                                })
                              )
                            )),
                            (e.next = 25),
                            D(l, h)
                          );
                        case 25:
                          (w = e.sent),
                            (m = u.speed),
                            (g = Q(f, w, l, m)) &&
                              (n.addChild(g), g.gotoAndStop(0));
                        case 29:
                          (o = !0), (e.next = 4);
                          break;
                        case 32:
                          e.next = 38;
                          break;
                        case 34:
                          (e.prev = 34),
                            (e.t0 = e.catch(2)),
                            (i = !0),
                            (a = e.t0);
                        case 38:
                          (e.prev = 38),
                            (e.prev = 39),
                            o || null == s.return || s.return();
                        case 41:
                          if (((e.prev = 41), !i)) {
                            e.next = 44;
                            break;
                          }
                          throw a;
                        case 44:
                          return e.finish(41);
                        case 45:
                          return e.finish(38);
                        case 46:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [2, 34, 38, 46],
                    [39, , 41, 45],
                  ]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Q = function (e, n, t, o) {
            var r = [];
            for (var i in e.frames) {
              var a = e.frames[i],
                s = M
                  ? "".concat(t, "_part_").concat(a.part, "_md")
                  : "".concat(t, "_part_").concat(a.part),
                c = n[s];
              if (c) {
                var l = c.texture.baseTexture,
                  d = a.frame,
                  p = M
                    ? new u.xEZ(
                        l,
                        new u.AeJ(0.5 * d.x, 0.5 * d.y, 0.5 * d.w, 0.5 * d.h)
                      )
                    : new u.xEZ(l, new u.AeJ(d.x, d.y, d.w, d.h));
                r.push(p);
              } else console.error("Texture resource not found for ".concat(s));
            }
            if (0 === r.length)
              return (
                console.error(
                  "No valid textures found for animation: ".concat(t)
                ),
                null
              );
            console.log(
              "Creating animation with "
                .concat(r.length, " frames for: ")
                .concat(t)
            );
            var w = new u.KgH(r);
            R[t] = w;
            var m = y.height / y.width,
              g = window.innerHeight / m,
              x = window.innerHeight / m,
              b = g / f,
              k = x / h,
              j = Math.min(b, k),
              F = f * j,
              E = h * j;
            (w.width = 0.75 * F),
              (w.height = E),
              w.position.set(w.width / 2, w.height / 2),
              w.anchor.set(0.5);
            var S = v[t];
            return (
              (w.zIndex = (null === S || void 0 === S ? void 0 : S.position)
                ? null === S || void 0 === S
                  ? void 0
                  : S.position
                : 0),
              (w.animationSpeed = o),
              (w.loop = !1),
              (w.onFrameChange = function () {
                (O[t] = "".concat(t, " - Frame: ").concat(w.currentFrame)),
                  he();
              }),
              w
            );
          },
          V = (function () {
            var e = w(
              r().mark(function e() {
                var n, t, o, i, a, s, c, l, u, d;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = ["outside", "logo"]),
                            (t = M ? N : playOrder),
                            (o = t.filter(function (e) {
                              return !n.includes(e);
                            }));
                        case 3:
                          0,
                            (i = o.sort(function () {
                              return Math.random() - 0.5;
                            })),
                            (a = !0),
                            (s = !1),
                            (c = void 0),
                            (e.prev = 6),
                            (l = i[Symbol.iterator]());
                        case 8:
                          if ((a = (u = l.next()).done)) {
                            e.next = 15;
                            break;
                          }
                          return (d = u.value), (e.next = 12), Y(d);
                        case 12:
                          (a = !0), (e.next = 8);
                          break;
                        case 15:
                          e.next = 21;
                          break;
                        case 17:
                          (e.prev = 17),
                            (e.t0 = e.catch(6)),
                            (s = !0),
                            (c = e.t0);
                        case 21:
                          (e.prev = 21),
                            (e.prev = 22),
                            a || null == l.return || l.return();
                        case 24:
                          if (((e.prev = 24), !s)) {
                            e.next = 27;
                            break;
                          }
                          throw c;
                        case 27:
                          return e.finish(24);
                        case 28:
                          return e.finish(21);
                        case 29:
                          console.log(
                            "Animation queue completed, restarting with new random order."
                          ),
                            (e.next = 3);
                          break;
                        case 32:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [6, 17, 21, 29],
                    [22, , 24, 28],
                  ]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          $ = function () {
            ["outside", "logo"].forEach(function (e) {
              var n = R[e];
              n
                ? ((n.loop = !0), n.gotoAndPlay(0))
                : console.warn(
                    "Animation ".concat(e, " not found for looping.")
                  );
            });
          },
          Y = (function () {
            var e = w(
              r().mark(function e(n) {
                var t;
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((t = R[n])) {
                          e.next = 4;
                          break;
                        }
                        return (
                          console.warn("Animation ".concat(n, " not found.")),
                          e.abrupt("return")
                        );
                      case 4:
                        return (
                          Object.keys(R).forEach(function (e) {
                            "outside" !== e &&
                              "logo" !== e &&
                              R[e] &&
                              R[e].stop();
                          }),
                          (t.loop = !1),
                          t.gotoAndPlay(0),
                          e.abrupt(
                            "return",
                            new Promise(function (e) {
                              t.onComplete = function () {
                                t.stop(), e();
                              };
                            })
                          )
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          ee = function () {
            n &&
              n.children.forEach(function (e) {
                e.isPolygon && (n.removeChild(e), e.destroy());
              });
            var e = {
                tiktok: {
                url: "#",
                jsonKey: "tiktok",
                color: "rgba(255, 0, 130, 0.67)",
              },
              x: {
                url: "https://x.com/LarryDopestar",
                jsonKey: "x",
                color: "rgba(0, 0, 0, 0.67)",
              },
              telegram: {
                url: "https://t.me/LarryDopestar",
                jsonKey: "telegram",
                color: "rgba(0, 136, 204, 0.67)",
              },
              coingecko: {
                url: "https://www.coingecko.com",
                jsonKey: "coingecko",
                color: "rgba(75, 204, 0, 0.67)",
              },
              coinmarket: {
                url: "https://coinmarketcap.com",
                jsonKey: "coinmarket",
                color: "rgba(0, 0, 255, 0.67)",
              },

              dexscreener: {
                url: "https://dexscreener.com/solana/56kyr8nulecwqmv3tjod63srbddhvmrz9am5ewvrdjmb",
                jsonKey: "dexscreener",
                color: "rgba(0, 0, 0, 0.67)",
              },
              dextools: {
                url: "https://www.dextools.io/app/en/solana/pair-explorer/56KyR8NuLeCWqmV3tjoD63SrBDDhVmrz9aM5ewVRdjmB?t=1747395020600",
                jsonKey: "dextools",
                color: "rgba(0, 200, 255, 0.67)",
              },
              buy: {
                url: "https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=T9jVwVLtdtpJrVK6SzHn2XuxuDafc5a5xxc9ygcpump",
                jsonKey: "buy",
                color: "rgba(255, 165, 0, 0.67)",
              },
            };
            fetch("/shapes/shapes2.json")
              .then(function (e) {
                return e.json();
              })
              .then(function (n) {
                window.innerHeight, window.innerHeight;
                var t = y.height / y.width,
                  o = window.innerHeight / t,
                  r = window.innerHeight / t,
                  i = o / f,
                  a = r / h,
                  s = Math.min(i, a);
                Object.entries(e).forEach(function (t) {
                  var o = m(t, 2),
                    r = o[0],
                    i = o[1],
                    a = i.url,
                    c = i.jsonKey;
                  if (a)
                    if (n[c] && n[c][0] && n[c][0].shape) {
                      var l = n[c][0].shape.map(function (e, n) {
                        return e * s;
                      });
                      console.log(
                        "Creating polygon for "
                          .concat(r, " with URL: ")
                          .concat(a)
                      ),
                        te(e, l, a, r);
                    } else
                      console.error(
                        "No shape data found in JSON for ".concat(r)
                      );
                  else
                    console.warn("Skipping ".concat(r, " as it has no URL."));
                });
              })
              .catch(function (e) {
                return console.error("Failed to load shapes.json", e);
              });
          },
          ne = function () {
            var t,
              o =
                null === (t = e.loader.resources.glow) || void 0 === t
                  ? void 0
                  : t.texture;
            if (!o)
              return (
                console.warn("Glow texture not available yet. Retrying..."),
                void setTimeout(ne, 100)
              );
            if (!c) {
              console.log("Glow texture is ready, creating glowSprite..."),
                (c = new u.jyi(o)).anchor.set(0.5),
                (c.visible = !0),
                n.addChild(c);
              y.height, y.width;
              (c.width = window.innerHeight / 0.421875),
                (c.height = window.innerHeight),
                c.position.set(c.width / 2, c.height / 2),
                d.ZP.to(c, {
                  alpha: 0.3,
                  duration: 2,
                  yoyo: !0,
                  repeat: -1,
                  delay: 2,
                  ease: "power1.inOut",
                });
            }
          },
          te = function (t, r, i, a) {
            var s = "dexscreener" === a;
            (o = new u.TCu()).isPolygon = !0;
            var l = t[a],
              p =
                (null === l || void 0 === l ? void 0 : l.color) ||
                "rgba(255, 255,createInteractivePolygon 255, 0.67)";
            if (
              (s
                ? (o.lineStyle(1, 2126290, 5e-4), o.beginFill(2126290, 5e-5))
                : (o.lineStyle(1, 16777215, 5e-5), o.beginFill(16777215, 3e-5)),
              o.drawPolygon(r),
              o.endFill(),
              "dexscreener" === a)
            ) {
              var f,
                h =
                  null === (f = e.loader.resources.glow) || void 0 === f
                    ? void 0
                    : f.texture;
              if (h) {
                n.removeChild(c),
                  (c = new u.jyi(h)).anchor.set(0.5),
                  (c.visible = !0),
                  n.addChild(c);
                y.height, y.width;
                (c.width = window.innerHeight / 0.421875),
                  (c.height = window.innerHeight),
                  c.position.set(c.width / 2, c.height / 2),
                  d.ZP.to(c, {
                    alpha: 0.3,
                    duration: 2,
                    yoyo: !0,
                    repeat: -1,
                    delay: 2,
                    ease: "power1.inOut",
                  });
              } else
                console.warn(
                  "Glow texture not available yet. It might be loading."
                );
            }
            (o.interactive = !0),
              (o.cursor = "pointer"),
              o.on("mouseover", function () {
                return oe(a, p);
              }),
              o.on("mouseout", re),
              M ||
                ("buy" === a &&
                  (o.on("mouseover", function () {
                    var e = R.buyopen;
                    e &&
                      ((e.loop = !1),
                      e.gotoAndPlay(25),
                      (e.onFrameChange = function () {
                        e.currentFrame >= 75 && e.gotoAndStop(75);
                      }),
                      (e.onComplete = null));
                  }),
                  o.on("mouseout", function () {
                    var e = R.buyopen;
                    e &&
                      ((e.loop = !1),
                      e.gotoAndPlay(e.currentFrame),
                      (e.onFrameChange = null),
                      (e.onComplete = function () {
                        e.gotoAndStop(0);
                      }));
                  }))),
              o.on("pointertap", function () {
                "about" === a ? (re(), k(!0)) : window.open(i, "_blank");
              }),
              n.addChild(o);
          },
          oe = function (e, n) {
            var t = document.getElementById("hover-text");
            t &&
              ((t.textContent = e),
              (t.style.background = "radial-gradient(circle, ".concat(
                n,
                " 0%, rgba(148,187,233,0) 30%)"
              )),
              (t.style.opacity = "1"),
              console.log(
                "radial-gradient(circle, ".concat(
                  n,
                  " 0%, rgba(148,187,233,0) 30%)"
                )
              ));
          },
          re = function () {
            var e = document.getElementById("hover-text");
            e && (e.style.opacity = "0");
          },
          ie = function () {
            y.height, y.width;
            (s.width = window.innerHeight / 0.421875),
              (s.height = window.innerHeight),
              s.position.set(s.width / 2, s.height / 2);
          },
          ae = function () {
            window.innerWidth / window.innerHeight < 2.37
              ? (n.position.set(window.innerWidth / 2, window.innerHeight / 2),
                n.pivot.set(window.innerWidth / 2, window.innerHeight / 2))
              : (n.pivot.set(n.width / 2, window.innerHeight / 2),
                n.position.set(e.renderer.width / 2, window.innerHeight / 2));
          },
          se = function () {
            (y.height = window.innerWidth / 2.3703703703703702),
              (y.width = window.innerWidth),
              ie(),
              c &&
                (y.height,
                y.width,
                (c.width = window.innerHeight / 0.421875),
                (c.height = window.innerHeight),
                c.position.set(c.width / 2, c.height / 2)),
              (function () {
                var e = y.height / y.width,
                  n = window.innerHeight / e,
                  t = window.innerHeight / e,
                  o = n / f,
                  r = t / h,
                  i = Math.min(o, r);
                Object.values(R).forEach(function (e) {
                  var n = f * i,
                    t = h * i;
                  (e.width = 0.75 * n),
                    (e.height = t),
                    e.position.set(e.width / 2, e.height / 2);
                });
              })(),
              ee(),
              ae();
          },
          ce = function (e) {
            var t = e.clientX,
              o = window.innerWidth / window.innerHeight,
              r = (n.width * n.scale.x) / 2,
              i = window.innerWidth / 2,
              a = r - i;
            if (o < 2.37)
              if (t < 0.75 * i) {
                var s = (0 / i) * 2 - o / 140;
                console.log(t);
                var c = a * s;
                n.position.x = i - c - 2;
              } else {
                var l = a * (((t - 0.75 * i) / i) * 0.75 * 2 - o / 140);
                n.position.x = i - l;
              }
          },
          le = 0,
          ue = 0,
          de = function (e) {
            (le = e.touches[0].clientX), (ue = le);
          },
          pe = function (e) {
            A || me();
            var t = (ue = e.touches[0].clientX) - le,
              o = window.innerWidth,
              r = n.width * n.scale.x,
              i = window.innerWidth / window.innerHeight,
              a = Math.min(0, (o - r) / 2 + window.innerWidth / i) - o / 2,
              s = Math.max(0, (r - o) / 2 + window.innerWidth),
              c = n.position.x + 1.2 * t;
            (n.position.x = Math.min(Math.max(c, -s), -a)), (le = ue);
          },
          fe = function () {
            (le = 0), (ue = 0);
          };
        (0, a.useEffect)(function () {
          return (
            window.addEventListener("touchstart", de),
            window.addEventListener("touchmove", pe),
            window.addEventListener("touchend", fe),
            function () {
              window.removeEventListener("touchstart", de),
                window.removeEventListener("touchmove", pe),
                window.removeEventListener("touchend", fe);
            }
          );
        }, []);
        var he = function () {
          var e = T.current;
          e && (e.innerHTML = Object.values(O).join("<br />"));
        };
        (0, a.useEffect)(
          function () {
            return (
              (B.current = d.ZP.timeline({ repeat: -1, repeatDelay: 1 })),
              B.current
                .to("#knock-text", {
                  scale: 1.2,
                  duration: 0.5,
                  ease: "elastic.out(1, 0.3)",
                })
                .to("#knock-text", {
                  rotation: 15,
                  x: 10,
                  yoyo: !0,
                  repeat: 1,
                  duration: 0.2,
                  ease: "power2.inOut",
                })
                .to("#knock-text", {
                  rotation: -15,
                  x: -10,
                  yoyo: !0,
                  repeat: 1,
                  duration: 0.2,
                  ease: "power2.inOut",
                })
                .to("#knock-text", {
                  scale: 1,
                  rotation: 0,
                  duration: 0.5,
                  ease: "elastic.out(1, 0.3)",
                })
                .to("#knock-text", { opacity: 0, duration: 0.5, delay: 0.5 })
                .to("#knock-text", { opacity: 1, duration: 0.5 }),
              function () {
                B.current && B.current.kill();
              }
            );
          },
          [F]
        );
        var we = function () {
          var e = document.getElementById("knock-container");
          e &&
            ((e.style.opacity = "0"),
            setTimeout(function () {
              (e.style.display = "none"), B.current && B.current.kill();
            }, 500)),
            z.current && z.current.play();
        };
        (0, a.useEffect)(
          function () {
            if (M && C) {
              var e = d.ZP.timeline({ repeat: -1, delay: 1 }),
                n = document.querySelector("#swipe-hand"),
                t = document.querySelector("#swipe-text");
              return (
                n &&
                  t &&
                  (e
                    .to(n, { x: 50, duration: 1, ease: "power1.inOut" })
                    .to(n, { x: -50, duration: 1, ease: "power1.inOut" })
                    .to(n, { x: 0, duration: 1, ease: "power1.inOut" })
                    .to(n, { opacity: 0, duration: 0.5 }, "-=0.5")
                    .to(n, { opacity: 1, duration: 0.5 }, "-=0.5"),
                  d.ZP.to(t, {
                    opacity: 1,
                    duration: 1,
                    yoyo: !0,
                    repeat: -1,
                  })),
                function () {
                  e.kill();
                }
              );
            }
          },
          [M, C]
        );
        var me = function (e) {
          console.log("First touch detected!"), H(!0);
          var n = L.current;
          n &&
            (console.log("Hiding swipe instruction..."),
            d.ZP.to(n, {
              opacity: 0,
              duration: 0.5,
              onComplete: function () {
                (n.style.display = "none"),
                  console.log("Swipe instruction hidden.");
              },
            }));
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            F &&
      (0, i.jsxs)("div", {
        className: "loading-screen",
        children: [
          (0, i.jsx)("div", { className: "spinner" }),
          (0, i.jsx)("div", { className: "spinner-image" }),
          (0, i.jsx)("div", {
            id: "load",
            children: [
              (0, i.jsx)("div", { children: "G" }),
              (0, i.jsx)("div", { children: "N" }),
              (0, i.jsx)("div", { children: "I" }),
              (0, i.jsx)("div", { children: "D" }),
              (0, i.jsx)("div", { children: "A" }),
              (0, i.jsx)("div", { children: "O" }),
              (0, i.jsx)("div", { children: "L" }),
            ],
          }),
        ],
      }),
            !F &&
              !C &&
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsxs)("div", {
                    id: "knock-container",
                    style: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -57%)",
                      zIndex: 2e3,
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "opacity 0.5s ease-out",
                    },
                    onClick: we,
                    children: [
                      (0, i.jsx)("h1", {
                        id: "knock-text",
                        style: {
                          fontFamily: "HardcorePenRegular",
                          fontSize: "65px",
                          color: "#FFD700",
                          textShadow: "0px 0px 15px #FFA500",
                          letterSpacing: "2px",
                          lineHeight: "60px",
                          opacity: 1,
                          marginRight: "-20%",
                        },
                        children: "Knock",
                      }),
                      (0, i.jsx)("h1", {
                        id: "knock-text",
                        style: {
                          fontFamily: "HardcorePenRegular",
                          fontSize: "65px",
                          color: "#FFD700",
                          textShadow: "0px 0px 15px #FFA500",
                          letterSpacing: "2px",
                          lineHeight: "45px",
                          opacity: 1,
                          marginRight: "40%",
                        },
                        children: "Knock",
                      }),
                      (0, i.jsx)("p", {
                        style: {
                          fontFamily: "HardcorePenRegular",
                          fontSize: "50px",
                          color: "#FFFFFF",
                          marginTop: "200px",
                          marginLeft: "-20%",
                        },
                        children: "Click to enter",
                      }),
                    ],
                  }),
                  (0, i.jsx)("video", {
                    ref: z,
                    style: {
                      backgroundImage: "url('/videos/placeholder.png')",
                      cursor: "pointer",
                      zIndex: "1000",
                    },
                    className:
                      "enter-video !w-[100vw] !min-h-[100vh] !bg-center !bg-cover",
                    src: M ? "/videos/enter2_m.mp4" : "/videos/enter2.mp4",
                    onClick: function (e) {
                      e.currentTarget.play(), we();
                    },
                    controls: !1,
                    autoPlay: !1,
                    preload: "true",
                    muted: !0,
                    playsInline: !0,
                    onTimeUpdate: function (e) {
                      e.currentTarget.currentTime >= 7.26 && P(!0);
                    },
                  }),
                ],
              }),
            (0, i.jsx)("div", {
              id: "hover-text",
              style: {
                position: "fixed",
                width: "100%",
                height: "100%",
                fontSize: "155px",
                color: "#ffffff",
                fontFamily: "HardcorePenRegular",
                pointerEvents: "none",
                opacity: 0.1,
                transition: "opacity 0.5s",
                zIndex: 2e3,
                background:
                  "radial-gradient(circle, rgba(58, 149, 45, 0.37) 0%, rgba(0, 0, 0, 0.17) 40%), rgba(148,187,233,0) 40%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }),
            (0, i.jsx)(l.Z, {
              isVisible: b,
              onClose: function () {
                return k(!1);
              },
              style: {
                height: "100%",
                width: "100%",
                position: "fixed",
                zIndex: "3000 !important",
              },
              children: (0, i.jsx)(g, {}),
            }),
            M &&
              C &&
              (0, i.jsx)("div", {
                ref: L,
                style: {
                  position: "fixed",
                  bottom: "20px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 2e3,
                  pointerEvents: "none",
                },
                children: (0, i.jsxs)("div", {
                  id: "swipe-instruction",
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#FFFFFF",
                    fontFamily: "HardcorePenRegular",
                    fontSize: "20px",
                    textAlign: "center",
                  },
                  children: [
                    (0, i.jsx)("div", {
                      id: "swipe-text",
                      style: {
                        opacity: 0,
                        marginBottom: "5px",
                        fontSize: "40px",
                      },
                      children: "Swipe to scroll the scene",
                    }),
                    (0, i.jsx)("div", {
                      id: "swipe-hand",
                      style: {
                        width: "50px",
                        height: "50px",
                        backgroundImage: "url('/images/hand-swipe.png')",
                        backgroundSize: "cover",
                        opacity: 1,
                      },
                    }),
                  ],
                }),
              }),
            (0, i.jsx)("div", {
              id: "main",
              style: {
                height: "100%",
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                display: C ? "block" : "none",
              },
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [166, 802, 295, 528, 989, 774, 888, 179], function () {
      return (n = 8312), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
