;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [4],
  {
    ZMKu: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return yr
      }),
        n.d(e, 'b', function () {
          return dr
        }),
        n.d(e, 'c', function () {
          return Sr
        })
      var r = n('mrSG'),
        i = n('eUsl'),
        o = n('Neuu'),
        a = n('82gj'),
        s = n('Ibe6'),
        u = n('q1tI'),
        c = n.n(u),
        l = function (t) {
          return 'object' === typeof t && t.hasOwnProperty('current')
        },
        f = (function () {
          function t() {
            this.subscriptions = new Set()
          }
          return (
            (t.prototype.add = function (t) {
              var e = this
              return (
                this.subscriptions.add(t),
                function () {
                  e.subscriptions.delete(t)
                }
              )
            }),
            (t.prototype.notify = function (t, e, n) {
              var i, o
              if (this.subscriptions.size)
                try {
                  for (
                    var a = Object(r.g)(this.subscriptions), s = a.next();
                    !s.done;
                    s = a.next()
                  ) {
                    ;(0, s.value)(t, e, n)
                  }
                } catch (u) {
                  i = { error: u }
                } finally {
                  try {
                    s && !s.done && (o = a.return) && o.call(a)
                  } finally {
                    if (i) throw i.error
                  }
                }
            }),
            (t.prototype.clear = function () {
              this.subscriptions.clear()
            }),
            t
          )
        })(),
        d = (function () {
          function t(t) {
            var e,
              n = this
            ;(this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new f()),
              (this.renderSubscribers = new f()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0),
                  (n.prev = n.current),
                  (n.current = t),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  e && n.renderSubscribers.notify(n.current)
                var r = Object(i.c)(),
                  o = r.delta,
                  a = r.timestamp
                n.lastUpdated !== a &&
                  ((n.timeDelta = o),
                  (n.lastUpdated = a),
                  i.b.postRender(n.scheduleVelocityCheck))
              }),
              (this.scheduleVelocityCheck = function () {
                return i.b.postRender(n.velocityCheck)
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated && (n.prev = n.current)
              }),
              this.set(t, !1),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))))
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t)
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear()
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t)
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e)
            }),
            (t.prototype.get = function () {
              return this.current
            }),
            (t.prototype.getPrevious = function () {
              return this.prev
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Object(o.x)(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0
            }),
            (t.prototype.start = function (t) {
              var e = this
              return (
                this.stop(),
                new Promise(function (n) {
                  e.stopAnimation = t(n)
                }).then(function () {
                  return e.clearAnimation()
                })
              )
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation()
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop()
            }),
            t
          )
        })()
      function p(t) {
        return new d(t)
      }
      var h = function (t) {
          return 1e3 * t
        },
        v = {
          linear: o.t,
          easeIn: o.o,
          easeInOut: o.p,
          easeOut: o.q,
          circIn: o.i,
          circInOut: o.j,
          circOut: o.k,
          backIn: o.c,
          backInOut: o.d,
          backOut: o.e,
          anticipate: o.b,
          bounceIn: o.f,
          bounceInOut: o.g,
          bounceOut: o.h,
        },
        m = function (t) {
          if (Array.isArray(t)) {
            Object(a.a)(
              4 === t.length,
              'Cubic bezier arrays must contain four numerical values.'
            )
            var e = Object(r.c)(t, 4),
              n = e[0],
              i = e[1],
              s = e[2],
              u = e[3]
            return Object(o.m)(n, i, s, u)
          }
          return 'string' === typeof t
            ? (Object(a.a)(void 0 !== v[t], "Invalid easing type '" + t + "'"),
              v[t])
            : t
        },
        g = function (t, e) {
          return (
            'zIndex' !== t &&
            (!('number' !== typeof e && !Array.isArray(e)) ||
              !('string' !== typeof e || !s.c.test(e) || e.startsWith('url(')))
          )
        },
        y = function (t) {
          return Array.isArray(t)
        },
        b = function () {
          return {
            type: 'spring',
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          }
        },
        x = function (t) {
          return {
            type: 'spring',
            stiffness: 550,
            damping: 0 === t ? 100 : 30,
            restDelta: 0.01,
            restSpeed: 10,
          }
        },
        j = function () {
          return { type: 'keyframes', ease: 'linear', duration: 0.3 }
        },
        O = function (t) {
          return { type: 'keyframes', duration: 0.8, values: t }
        },
        E = {
          x: b,
          y: b,
          z: b,
          rotate: b,
          rotateX: b,
          rotateY: b,
          rotateZ: b,
          scaleX: x,
          scaleY: x,
          scale: x,
          opacity: j,
          backgroundColor: j,
          color: j,
          default: x,
        }
      function w(t) {
        var e = t.yoyo,
          n = t.loop,
          i = t.flip,
          o = t.ease,
          a = t.times,
          s = Object(r.d)(t, ['yoyo', 'loop', 'flip', 'ease', 'times']),
          u = Object(r.a)({}, s)
        return (
          a && (u.offset = a),
          s.duration && (u.duration = h(s.duration)),
          s.repeatDelay && (u.repeatDelay = h(s.repeatDelay)),
          o &&
            (u.ease = (function (t) {
              return Array.isArray(t) && 'number' !== typeof t[0]
            })(o)
              ? o.map(m)
              : m(o)),
          'tween' === s.type && (u.type = 'keyframes'),
          e
            ? (u.repeatType = 'reverse')
            : n
            ? (u.repeatType = 'loop')
            : i && (u.repeatType = 'mirror'),
          (u.repeat = n || e || i || s.repeat),
          'spring' !== s.type && (u.type = 'keyframes'),
          u
        )
      }
      function C(t, e, n) {
        var i
        return (
          Array.isArray(e.to) &&
            ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = Object(r.e)(t.to)), (t.to[0] = t.from))
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from
            var e = Object(r.d)(t, [
              'when',
              'delay',
              'delayChildren',
              'staggerChildren',
              'staggerDirection',
              'repeat',
              'repeatType',
              'repeatDelay',
              'from',
            ])
            return !!Object.keys(e).length
          })(t) ||
            (t = Object(r.a)(
              Object(r.a)({}, t),
              (function (t, e) {
                var n
                return (
                  (n = y(e) ? O : E[t] || E.default),
                  Object(r.a)({ to: e }, n(e))
                )
              })(n, e.to)
            )),
          Object(r.a)(Object(r.a)({}, e), w(t))
        )
      }
      function S(t, e, n, i) {
        return (
          void 0 === i && (i = {}),
          e.start(function (u) {
            var c,
              l,
              f = (function (t, e, n, i, u) {
                var c,
                  l = (function (t, e) {
                    return t[e] || t.default || t
                  })(i, t),
                  f = null !== (c = l.from) && void 0 !== c ? c : e.get(),
                  d = g(t, n)
                'none' === f &&
                  d &&
                  'string' === typeof n &&
                  (f = s.c.getAnimatableNone(n))
                var p = g(t, f)
                return (
                  Object(a.b)(
                    p === d,
                    'You are trying to animate ' +
                      t +
                      ' from "' +
                      f +
                      '" to "' +
                      n +
                      '". ' +
                      f +
                      ' is not an animatable value - to enable this animation set ' +
                      f +
                      ' to a value animatable to ' +
                      n +
                      ' via the `style` property.'
                  ),
                  p && d && !1 !== l.type
                    ? function () {
                        var i = {
                          from: f,
                          to: n,
                          velocity: e.getVelocity(),
                          onComplete: u,
                          onUpdate: function (t) {
                            return e.set(t)
                          },
                        }
                        return 'inertia' === l.type || 'decay' === l.type
                          ? Object(o.r)(Object(r.a)(Object(r.a)({}, i), l))
                          : Object(o.a)(
                              Object(r.a)(Object(r.a)({}, C(l, i, t)), {
                                onUpdate: function (t) {
                                  var e
                                  i.onUpdate(t),
                                    null === (e = l.onUpdate) ||
                                      void 0 === e ||
                                      e.call(l, t)
                                },
                                onComplete: function () {
                                  var t
                                  i.onComplete(),
                                    null === (t = l.onComplete) ||
                                      void 0 === t ||
                                      t.call(l)
                                },
                              })
                            )
                      }
                    : function () {
                        var t
                        return (
                          e.set(n),
                          u(),
                          null ===
                            (t =
                              null === l || void 0 === l
                                ? void 0
                                : l.onComplete) ||
                            void 0 === t ||
                            t.call(l),
                          { stop: function () {} }
                        )
                      }
                )
              })(t, e, n, i, u),
              d = (function (t, e) {
                var n, r, i, o, a
                return null !==
                  (a =
                    null !==
                      (o =
                        null !==
                          (r =
                            null === (n = t[e]) || void 0 === n
                              ? void 0
                              : n.delay) && void 0 !== r
                          ? r
                          : null === (i = t.default) || void 0 === i
                          ? void 0
                          : i.delay) && void 0 !== o
                      ? o
                      : t.delay) && void 0 !== a
                  ? a
                  : 0
              })(i, t),
              p = function () {
                return (l = f())
              }
            return (
              d ? (c = setTimeout(p, h(d))) : p(),
              function () {
                clearTimeout(c), null === l || void 0 === l || l.stop()
              }
            )
          })
        )
      }
      var P = function (t) {
          return y(t) ? t[t.length - 1] || 0 : t
        },
        A = Object(r.a)(Object(r.a)({}, s.g), { transform: Math.round }),
        V = {
          color: s.b,
          backgroundColor: s.b,
          outlineColor: s.b,
          fill: s.b,
          stroke: s.b,
          borderColor: s.b,
          borderTopColor: s.b,
          borderRightColor: s.b,
          borderBottomColor: s.b,
          borderLeftColor: s.b,
          borderWidth: s.j,
          borderTopWidth: s.j,
          borderRightWidth: s.j,
          borderBottomWidth: s.j,
          borderLeftWidth: s.j,
          borderRadius: s.j,
          radius: s.j,
          borderTopLeftRadius: s.j,
          borderTopRightRadius: s.j,
          borderBottomRightRadius: s.j,
          borderBottomLeftRadius: s.j,
          width: s.j,
          maxWidth: s.j,
          height: s.j,
          maxHeight: s.j,
          size: s.j,
          top: s.j,
          right: s.j,
          bottom: s.j,
          left: s.j,
          padding: s.j,
          paddingTop: s.j,
          paddingRight: s.j,
          paddingBottom: s.j,
          paddingLeft: s.j,
          margin: s.j,
          marginTop: s.j,
          marginRight: s.j,
          marginBottom: s.j,
          marginLeft: s.j,
          rotate: s.d,
          rotateX: s.d,
          rotateY: s.d,
          rotateZ: s.d,
          scale: s.l,
          scaleX: s.l,
          scaleY: s.l,
          scaleZ: s.l,
          skew: s.d,
          skewX: s.d,
          skewY: s.d,
          distance: s.j,
          translateX: s.j,
          translateY: s.j,
          translateZ: s.j,
          x: s.j,
          y: s.j,
          z: s.j,
          perspective: s.j,
          transformPerspective: s.j,
          opacity: s.a,
          originX: s.i,
          originY: s.i,
          originZ: s.j,
          zIndex: A,
          fillOpacity: s.a,
          strokeOpacity: s.a,
          numOctaves: A,
        },
        T = [
          s.g,
          s.j,
          s.h,
          s.d,
          s.n,
          s.m,
          {
            test: function (t) {
              return 'auto' === t
            },
            parse: function (t) {
              return t
            },
          },
        ],
        L = function (t) {
          return function (e) {
            return e.test(t)
          }
        },
        B = function (t) {
          return T.find(L(t))
        },
        k = Object(r.e)(T, [s.b, s.c]),
        R = function (t) {
          return k.find(L(t))
        },
        M = function (t) {
          return V[t]
        },
        D = function (t, e) {
          return e && 'number' === typeof t ? e.transform(t) : t
        }
      function U(t) {
        return Array.isArray(t)
      }
      function F(t) {
        return 'string' === typeof t || U(t)
      }
      function I(t, e, n) {
        var i = {}
        return e
          ? ((i = (function (t) {
              return 'function' === typeof t
            })(e)
              ? e(
                  null !== n && void 0 !== n ? n : t.getVariantPayload(),
                  (function (t) {
                    var e = {}
                    return (
                      t.forEachValue(function (t, n) {
                        return (e[n] = t.get())
                      }),
                      e
                    )
                  })(t),
                  (function (t) {
                    var e = {}
                    return (
                      t.forEachValue(function (t, n) {
                        return (e[n] = t.getVelocity())
                      }),
                      e
                    )
                  })(t)
                )
              : e),
            Object(r.a)({ transition: t.getDefaultTransition() }, i))
          : i
      }
      function H(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, p(n))
      }
      function Y(t, e, n) {
        var i = (void 0 === n ? {} : n).priority,
          o = t.makeTargetAnimatable(I(t, e), !1),
          a = o.transitionEnd,
          s = void 0 === a ? {} : a,
          u = (o.transition, Object(r.d)(o, ['transitionEnd', 'transition']))
        for (var c in (u = Object(r.a)(Object(r.a)({}, u), s))) {
          var l = P(u[c])
          H(t, c, l), i || (t.baseTarget[c] = l)
        }
      }
      function X(t, e) {
        Object(r.e)(e)
          .reverse()
          .forEach(function (n) {
            var r
            Y(t, t.getVariant(n)),
              null === (r = t.variantChildren) ||
                void 0 === r ||
                r.forEach(function (t) {
                  X(t, e)
                })
          })
      }
      function z(t, e) {
        return Array.isArray(e)
          ? X(t, e)
          : 'string' === typeof e
          ? X(t, [e])
          : void Y(t, e)
      }
      function N(t, e, n) {
        var r,
          i,
          o,
          u = Object.keys(e).filter(function (e) {
            return !t.hasValue(e)
          }),
          c = u.length
        if (c)
          for (var l = 0; l < c; l++) {
            var f = u[l],
              d = e[f],
              h = null
            if ((Array.isArray(d) && (h = d[0]), null === h)) {
              var v =
                null !== (r = n[f]) && void 0 !== r ? r : t.readNativeValue(f)
              ;(h = void 0 !== v ? v : e[f]),
                Object(a.a)(
                  null !== h,
                  'No initial value for "' +
                    f +
                    '" can be inferred. Ensure an initial value for "' +
                    f +
                    '" is defined on the component.'
                )
            }
            'string' === typeof h && /^\-?\d*\.?\d+$/.test(h)
              ? (h = parseFloat(h))
              : !R(h) && s.c.test(d) && (h = s.c.getAnimatableNone(d)),
              t.addValue(f, p(h)),
              (null !== (i = (o = n)[f]) && void 0 !== i) || (o[f] = h),
              (t.baseTarget[f] = h)
          }
      }
      function W(t, e) {
        if (e) return (e[t] || e.default || e).from
      }
      function G(t, e, n) {
        var r,
          i,
          o = {}
        for (var a in t)
          o[a] =
            null !== (r = W(a, e)) && void 0 !== r
              ? r
              : null === (i = n.getValue(a)) || void 0 === i
              ? void 0
              : i.get()
        return o
      }
      function Z(t, e, n) {
        var i
        return (
          void 0 === n && (n = {}),
          n.priority && t.activeOverrides.add(n.priority),
          t.resetIsAnimating(n.priority),
          (i = U(e)
            ? (function (t, e, n) {
                var i = Object(r.e)(e)
                  .reverse()
                  .map(function (e) {
                    return _(t, e, n)
                  })
                return Promise.all(i)
              })(t, e, n)
            : F(e)
            ? _(t, e, n)
            : $(t, e, n)),
          t.onAnimationStart(),
          i.then(function () {
            return t.onAnimationComplete()
          })
        )
      }
      function _(t, e, n) {
        var i,
          o = (n && n.priority) || 0,
          a = t.getVariant(e),
          s = I(t, a, n && n.custom),
          u = s.transition || {},
          c = a
            ? function () {
                return $(t, s, n)
              }
            : function () {
                return Promise.resolve()
              },
          l = (
            null === (i = t.variantChildrenOrder) || void 0 === i
              ? void 0
              : i.size
          )
            ? function (r) {
                void 0 === r && (r = 0)
                var i = u.delayChildren
                return (function (t, e, n, r, i, o, a) {
                  void 0 === n && (n = 0)
                  void 0 === r && (r = 0)
                  void 0 === i && (i = 1)
                  void 0 === o && (o = 0)
                  var s = [],
                    u = (t.variantChildrenOrder.size - 1) * r,
                    c =
                      1 === i
                        ? function (t) {
                            return t * r
                          }
                        : function (t) {
                            return u - t * r
                          }
                  return (
                    Array.from(t.variantChildrenOrder).forEach(function (t, r) {
                      var i = _(t, e, {
                        priority: o,
                        delay: n + c(r),
                        custom: a,
                      })
                      s.push(i)
                    }),
                    Promise.all(s)
                  )
                })(
                  t,
                  e,
                  (void 0 === i ? 0 : i) + r,
                  u.staggerChildren,
                  u.staggerDirection,
                  o,
                  null === n || void 0 === n ? void 0 : n.custom
                )
              }
            : function () {
                return Promise.resolve()
              },
          f = u.when
        if (f) {
          var d = Object(r.c)('beforeChildren' === f ? [c, l] : [l, c], 2),
            p = d[0],
            h = d[1]
          return p().then(h)
        }
        return Promise.all([
          c(),
          l(null === n || void 0 === n ? void 0 : n.delay),
        ])
      }
      function $(t, e, n) {
        var i = void 0 === n ? {} : n,
          o = i.delay,
          a = void 0 === o ? 0 : o,
          s = i.priority,
          u = void 0 === s ? 0 : s,
          c = i.transitionOverride,
          l = i.custom,
          f = I(t, e, l)
        c && (f.transition = c)
        var d = t.makeTargetAnimatable(f),
          p = d.transitionEnd,
          h = d.transition,
          v = Object(r.d)(d, ['transitionEnd', 'transition'])
        u && (t.resolvedOverrides[u] = v)
        var m = []
        for (var g in v) {
          var y = t.getValue(g)
          if (y && v && void 0 !== v[g]) {
            var b = v[g]
            u || (t.baseTarget[g] = P(b)),
              t.isAnimating.has(g) ||
                (t.isAnimating.add(g),
                m.push(S(g, y, b, Object(r.a)({ delay: a }, h))))
          }
        }
        var x = Promise.all(m)
        return p
          ? x.then(function () {
              return Y(t, p, { priority: u })
            })
          : x
      }
      function q(t, e, n) {
        var r
        ;(t.overrides[n] = e),
          null === (r = t.variantChildren) ||
            void 0 === r ||
            r.forEach(function (t) {
              q(t, e, n)
            })
      }
      function K(t, e) {
        var n = t.overrides[e]
        if (n) return Z(t, n, { priority: e })
      }
      function J(t, e) {
        var n
        if (
          (null === (n = t.variantChildrenOrder) ||
            void 0 === n ||
            n.forEach(function (t) {
              J(t, e)
            }),
          t.overrides[e])
        ) {
          t.activeOverrides.delete(e)
          var r = Q(t)
          if ((t.resetIsAnimating(), r)) t.overrides[r] && K(t, r)
          var i = t.resolvedOverrides[e]
          if (i) {
            var o = {}
            for (var a in t.baseTarget)
              void 0 !== i[a] && (o[a] = t.baseTarget[a])
            t.onAnimationStart(),
              $(t, o).then(function () {
                t.onAnimationComplete()
              })
          }
        }
      }
      function Q(t) {
        return t.activeOverrides.size
          ? Math.max.apply(Math, Object(r.e)(Array.from(t.activeOverrides)))
          : 0
      }
      var tt = (function () {
        function t(t, e) {
          var n = this
          ;(this.children = new Set()),
            (this.baseTarget = {}),
            (this.overrides = []),
            (this.resolvedOverrides = []),
            (this.activeOverrides = new Set()),
            (this.isAnimating = new Set()),
            (this.latest = {}),
            (this.values = new Map()),
            (this.valueSubscriptions = new Map()),
            (this.config = {}),
            (this.isMounted = !1),
            (this.update = function () {
              return n.config.onUpdate(n.latest)
            }),
            (this.triggerRender = function () {
              return n.render()
            }),
            (this.ref = function (t) {
              t ? n.mount(t) : n.unmount(),
                n.externalRef &&
                  ('function' === typeof n.externalRef
                    ? n.externalRef(t)
                    : l(n.externalRef) && (n.externalRef.current = t))
            }),
            (this.parent = t),
            (this.rootParent = t ? t.rootParent : this),
            (this.treePath = t ? Object(r.e)(t.treePath, [t]) : []),
            (this.depth = t ? t.depth + 1 : 0),
            (this.externalRef = e)
        }
        return (
          (t.prototype.getVariantPayload = function () {
            return this.config.custom
          }),
          (t.prototype.getVariant = function (t) {
            var e
            return null === (e = this.config.variants) || void 0 === e
              ? void 0
              : e[t]
          }),
          (t.prototype.addVariantChild = function (t) {
            this.variantChildren || (this.variantChildren = new Set()),
              this.variantChildren.add(t)
          }),
          (t.prototype.addVariantChildOrder = function (t) {
            this.variantChildrenOrder ||
              (this.variantChildrenOrder = new Set()),
              this.variantChildrenOrder.add(t)
          }),
          (t.prototype.onAnimationStart = function () {
            var t, e
            null === (e = (t = this.config).onAnimationStart) ||
              void 0 === e ||
              e.call(t)
          }),
          (t.prototype.onAnimationComplete = function () {
            var t, e
            this.isMounted &&
              (null === (e = (t = this.config).onAnimationComplete) ||
                void 0 === e ||
                e.call(t))
          }),
          (t.prototype.getDefaultTransition = function () {
            return this.config.transition
          }),
          (t.prototype.resetIsAnimating = function (t) {
            var e
            void 0 === t && (t = 0),
              this.isAnimating.clear(),
              t < Q(this) && this.checkOverrideIsAnimating(t),
              null === (e = this.variantChildren) ||
                void 0 === e ||
                e.forEach(function (e) {
                  return e.resetIsAnimating(t)
                })
          }),
          (t.prototype.checkOverrideIsAnimating = function (t) {
            for (var e = this.overrides.length, n = t + 1; n < e; n++) {
              var r = this.resolvedOverrides[n]
              if (r) for (var i in r) this.isAnimating.add(i)
            }
          }),
          (t.prototype.subscribe = function (t) {
            var e = this
            return (
              this.children.add(t),
              function () {
                return e.children.delete(t)
              }
            )
          }),
          (t.prototype.hasValue = function (t) {
            return this.values.has(t)
          }),
          (t.prototype.addValue = function (t, e) {
            this.hasValue(t) && this.removeValue(t),
              this.values.set(t, e),
              this.setSingleStaticValue(t, e.get()),
              this.subscribeToValue(t, e)
          }),
          (t.prototype.removeValue = function (t) {
            var e
            null === (e = this.valueSubscriptions.get(t)) ||
              void 0 === e ||
              e(),
              this.valueSubscriptions.delete(t),
              this.values.delete(t),
              delete this.latest[t]
          }),
          (t.prototype.getValue = function (t, e) {
            var n = this.values.get(t)
            return (
              void 0 === n &&
                void 0 !== e &&
                ((n = new d(e)), this.addValue(t, n)),
              n
            )
          }),
          (t.prototype.forEachValue = function (t) {
            this.values.forEach(t)
          }),
          (t.prototype.getInstance = function () {
            return this.element
          }),
          (t.prototype.updateConfig = function (t) {
            void 0 === t && (t = {}), (this.config = Object(r.a)({}, t))
          }),
          (t.prototype.setSingleStaticValue = function (t, e) {
            this.latest[t] = e
          }),
          (t.prototype.setStaticValues = function (t, e) {
            if ('string' === typeof t) this.setSingleStaticValue(t, e)
            else for (var n in t) this.setSingleStaticValue(n, t[n])
          }),
          (t.prototype.scheduleRender = function () {
            i.b.render(this.triggerRender, !1, !0)
          }),
          (t.prototype.scheduleUpdateLayoutDelta = function () {
            i.b.preRender(this.rootParent.updateLayoutDelta, !1, !0)
          }),
          (t.prototype.subscribeToValue = function (t, e) {
            var n = this,
              r = e.onChange(function (e) {
                n.setSingleStaticValue(t, e),
                  n.element && n.config.onUpdate && i.b.update(n.update, !1, !0)
              }),
              o = e.onRenderRequest(function () {
                n.element && n.scheduleRender()
              })
            this.valueSubscriptions.set(t, function () {
              r(), o()
            })
          }),
          (t.prototype.mount = function (t) {
            Object(a.a)(
              !!t,
              'No ref found. Ensure components created with motion.custom forward refs using React.forwardRef'
            ),
              this.parent &&
                (this.removeFromParent = this.parent.subscribe(this)),
              (this.element = this.current = t)
          }),
          (t.prototype.unmount = function () {
            var t = this
            this.forEachValue(function (e, n) {
              return t.removeValue(n)
            }),
              i.a.update(this.update),
              i.a.render(this.render),
              this.removeFromParent && this.removeFromParent()
          }),
          t
        )
      })()
      function et(t) {
        return t
      }
      function nt(t) {
        var e = t.top
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        }
      }
      function rt(t) {
        return { x: Object(r.a)({}, t.x), y: Object(r.a)({}, t.y) }
      }
      var it = { translate: 0, scale: 1, origin: 0, originPoint: 0 }
      function ot() {
        return { x: Object(r.a)({}, it), y: Object(r.a)({}, it) }
      }
      var at = ['', 'X', 'Y', 'Z'],
        st = new Set(),
        ut = ['transformPerspective', 'x', 'y', 'z']
      function ct(t, e) {
        return ut.indexOf(t) - ut.indexOf(e)
      }
      ;['perspective', 'translate', 'scale', 'rotate', 'skew'].forEach(
        function (t) {
          var e = new Set(['rotate', 'skew']).has(t)
          at.forEach(function (n) {
            var r = t + n
            ut.push(r), e && st.add(r)
          })
        }
      )
      var lt = new Set(ut)
      function ft(t) {
        return lt.has(t)
      }
      var dt = new Set(['originX', 'originY', 'originZ'])
      function pt(t) {
        return dt.has(t)
      }
      var ht = {
        x: 'translateX',
        y: 'translateY',
        z: 'translateZ',
        transformPerspective: 'perspective',
      }
      function vt(t, e) {
        var n = t.x,
          r = t.y
        return (
          'translate3d(' +
          n.translate / e.x +
          'px, ' +
          r.translate / e.y +
          'px, 0) scale(' +
          n.scale +
          ', ' +
          r.scale +
          ')'
        )
      }
      var mt = vt(ot(), { x: 1, y: 1 })
      function gt(t) {
        return t.startsWith('--')
      }
      function yt(t) {
        return 'string' === typeof t && t.startsWith('var(--')
      }
      var bt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
      function xt(t, e, n) {
        void 0 === n && (n = 1),
          Object(a.a)(
            n <= 4,
            'Max CSS variable fallback depth detected in property "' +
              t +
              '". This may indicate a circular fallback dependency.'
          )
        var i = Object(r.c)(
            (function (t) {
              var e = bt.exec(t)
              if (!e) return [,]
              var n = Object(r.c)(e, 3)
              return [n[1], n[2]]
            })(t),
            2
          ),
          o = i[0],
          s = i[1]
        if (o) {
          var u = window.getComputedStyle(e).getPropertyValue(o)
          return u ? u.trim() : yt(s) ? xt(s, e, n + 1) : s
        }
      }
      function jt(t, e) {
        return (t / (e.max - e.min)) * 100
      }
      var Ot = {
          process: function (t, e) {
            if ('string' === typeof t) {
              if (!s.j.test(t)) return t
              t = parseFloat(t)
            }
            return jt(t, e.x) + '% ' + jt(t, e.y) + '%'
          },
        },
        Et = {
          borderRadius: Object(r.a)(Object(r.a)({}, Ot), {
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          }),
          borderTopLeftRadius: Ot,
          borderTopRightRadius: Ot,
          borderBottomLeftRadius: Ot,
          borderBottomRightRadius: Ot,
          boxShadow: {
            process: function (t, e, n, r) {
              var i = t,
                a = t.includes('var('),
                u = []
              a &&
                (t = t.replace(bt, function (t) {
                  return u.push(t), '_$css'
                }))
              var c = s.c.parse(t)
              if (c.length > 5) return i
              var l = s.c.createTransformer(t),
                f = 'number' !== typeof c[0] ? 1 : 0,
                d = n.x.scale * r.x,
                p = n.y.scale * r.y
              ;(c[0 + f] /= d), (c[1 + f] /= p)
              var h = Object(o.u)(d, p, 0.5)
              'number' === typeof c[2 + f] && (c[2 + f] /= h),
                'number' === typeof c[3 + f] && (c[3 + f] /= h)
              var v = l(c)
              if (a) {
                var m = 0
                v = v.replace('_$css', function () {
                  var t = u[m]
                  return m++, t
                })
              }
              return v
            },
          },
        }
      function wt(t, e, n, r, i, o, a, s, u, c, l, f) {
        var d = a.enableHardwareAcceleration,
          p = a.transformTemplate,
          h = a.allowTransformNone
        o.length = 0
        var v = !1,
          m = !1,
          g = !0
        for (var y in t) {
          var b = t[y],
            x = M(y),
            j = D(b, x)
          if (ft(y)) {
            if (((v = !0), (r[y] = j), o.push(y), !g)) continue
            b !== (void 0 !== x.default ? x.default : 0) && (g = !1)
          } else if (pt(y)) (i[y] = j), (m = !0)
          else if ('transform' !== y || 'function' !== typeof b) {
            var O = gt(y) ? n : e
            if (s && Et[y]) {
              var E = Et[y].process(b, f, u, l),
                w = Et[y].applyTo
              if (w) for (var C = w.length, S = 0; S < C; S++) O[w[S]] = E
              else O[y] = E
            } else O[y] = j
          }
        }
        s
          ? ((e.transform = vt(c, l)),
            e.transform === mt && (e.transform = ''),
            v &&
              ((e.transform +=
                ' ' +
                (function (t, e) {
                  var n = ''
                  e.sort(ct)
                  for (var r = e.length, i = 0; i < r; i++) {
                    var o = e[i]
                    st.has(o) && (n += o + '(' + t[o] + ') ')
                  }
                  return n
                })(r, o)),
              (e.transform = e.transform.trim())),
            p && (e.transform = p(r, e.transform)),
            (e.transformOrigin = (function (t) {
              var e = t.x,
                n = t.y
              return 100 * e.origin + '% ' + 100 * n.origin + '% 0'
            })(c)))
          : (v &&
              (e.transform = (function (t, e, n, r, i, o) {
                void 0 === i && (i = !0), void 0 === o && (o = !0)
                var a = ''
                e.sort(ct)
                for (var s = !1, u = e.length, c = 0; c < u; c++) {
                  var l = e[c]
                  ;(a += (ht[l] || l) + '(' + t[l] + ') '),
                    'z' === l && (s = !0)
                }
                return (
                  !s && i ? (a += 'translateZ(0)') : (a = a.trim()),
                  n ? (a = n(t, r ? '' : a)) : o && r && (a = 'none'),
                  a
                )
              })(r, o, p, g, d, h)),
            m &&
              (e.transformOrigin = (function (t) {
                var e = t.originX,
                  n = void 0 === e ? '50%' : e,
                  r = t.originY,
                  i = void 0 === r ? '50%' : r,
                  o = t.originZ
                return n + ' ' + i + ' ' + (void 0 === o ? 0 : o)
              })(i)))
      }
      function Ct(t, e) {
        ;(t.min = e.min), (t.max = e.max)
      }
      function St(t, e, n) {
        return n + e * (t - n)
      }
      function Pt(t, e, n, r, i) {
        return void 0 !== i && (t = St(t, i, r)), St(t, n, r) + e
      }
      function At(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = Pt(t.min, e, n, r, i)),
          (t.max = Pt(t.max, e, n, r, i))
      }
      function Vt(t, e) {
        var n = e.x,
          r = e.y
        At(t.x, n.translate, n.scale, n.originPoint),
          At(t.y, r.translate, r.scale, r.originPoint)
      }
      function Tt(t, e, n, i) {
        var a = Object(r.c)(i, 3),
          s = a[0],
          u = a[1],
          c = a[2]
        ;(t.min = e.min), (t.max = e.max)
        var l = void 0 !== n[c] ? n[c] : 0.5,
          f = Object(o.u)(e.min, e.max, l)
        At(t, n[s], n[u], f, n.scale)
      }
      var Lt = ['x', 'scaleX', 'originX'],
        Bt = ['y', 'scaleY', 'originY']
      function kt(t, e, n, r, i) {
        return (
          (t = St((t -= e), 1 / n, r)), void 0 !== i && (t = St(t, 1 / i, r)), t
        )
      }
      function Rt(t, e, n) {
        var i = Object(r.c)(n, 3),
          a = i[0],
          s = i[1],
          u = i[2]
        !(function (t, e, n, r, i) {
          void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5)
          var a = Object(o.u)(t.min, t.max, r) - e
          ;(t.min = kt(t.min, e, n, a, i)), (t.max = kt(t.max, e, n, a, i))
        })(t, e[a], e[s], e[u], e.scale)
      }
      function Mt(t, e, n) {
        return (
          void 0 === e && (e = 0),
          void 0 === n && (n = 0.01),
          Object(o.n)(t, e) < n
        )
      }
      function Dt(t) {
        return t.max - t.min
      }
      function Ut(t, e) {
        var n,
          r = 0.5,
          i = Dt(t),
          a = Dt(e)
        return (
          a > i
            ? (r = Object(o.w)(e.min, e.max - i, t.min))
            : i > a && (r = Object(o.w)(t.min, t.max - a, e.min)),
          (n = r),
          Object(o.l)(0, 1, n)
        )
      }
      function Ft(t, e, n, r) {
        ;(t.origin = void 0 === r ? Ut(e, n) : r),
          (t.originPoint = Object(o.u)(e.min, e.max, t.origin)),
          (t.scale = Dt(n) / Dt(e)),
          Mt(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = Object(o.u)(n.min, n.max, t.origin) - t.originPoint),
          Mt(t.translate) && (t.translate = 0)
      }
      function It(t, e, n, r) {
        Ft(t.x, e.x, n.x, r), Ft(t.y, e.y, n.y, r)
      }
      function Ht(t) {
        return [t('x'), t('y')]
      }
      function Yt(t, e) {
        return nt(
          (function (t, e) {
            var n = t.top,
              r = t.left,
              i = t.bottom,
              o = t.right
            void 0 === e && (e = et)
            var a = e({ x: r, y: n }),
              s = e({ x: o, y: i })
            return { top: a.y, left: a.x, bottom: s.y, right: s.x }
          })(t.getBoundingClientRect(), e)
        )
      }
      var Xt,
        zt = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
        ]),
        Nt = function (t) {
          return zt.has(t)
        },
        Wt = function (t, e) {
          t.set(e, !1), t.set(e)
        },
        Gt = function (t) {
          return t === s.g || t === s.j
        }
      !(function (t) {
        ;(t.width = 'width'),
          (t.height = 'height'),
          (t.left = 'left'),
          (t.right = 'right'),
          (t.top = 'top'),
          (t.bottom = 'bottom')
      })(Xt || (Xt = {}))
      var Zt = function (t, e) {
          return parseFloat(t.split(', ')[e])
        },
        _t = function (t, e) {
          return function (n, r) {
            var i = r.transform
            if ('none' === i || !i) return 0
            var o = i.match(/^matrix3d\((.+)\)$/)
            if (o) return Zt(o[1], e)
            var a = i.match(/^matrix\((.+)\)$/)
            return a ? Zt(a[1], t) : 0
          }
        },
        $t = new Set(['x', 'y', 'z']),
        qt = ut.filter(function (t) {
          return !$t.has(t)
        })
      var Kt = {
          width: function (t) {
            var e = t.x
            return e.max - e.min
          },
          height: function (t) {
            var e = t.y
            return e.max - e.min
          },
          top: function (t, e) {
            var n = e.top
            return parseFloat(n)
          },
          left: function (t, e) {
            var n = e.left
            return parseFloat(n)
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top
            return parseFloat(r) + (n.max - n.min)
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left
            return parseFloat(r) + (n.max - n.min)
          },
          x: _t(4, 13),
          y: _t(5, 14),
        },
        Jt = function (t, e, n, i) {
          void 0 === n && (n = {}),
            void 0 === i && (i = {}),
            (e = Object(r.a)({}, e)),
            (i = Object(r.a)({}, i))
          var o = Object.keys(e).filter(Nt),
            u = [],
            c = !1,
            l = []
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r)
              if (t.hasValue(r)) {
                var f,
                  d = n[r],
                  p = e[r],
                  h = B(d)
                if (y(p))
                  for (var v = p.length, m = null === p[0] ? 1 : 0; m < v; m++)
                    f
                      ? Object(a.a)(
                          B(p[m]) === f,
                          'All keyframes must be of the same type'
                        )
                      : ((f = B(p[m])),
                        Object(a.a)(
                          f === h || (Gt(h) && Gt(f)),
                          'Keyframes must be of the same dimension as the current value'
                        ))
                else f = B(p)
                if (h !== f)
                  if (Gt(h) && Gt(f)) {
                    var g = o.get()
                    'string' === typeof g && o.set(parseFloat(g)),
                      'string' === typeof p
                        ? (e[r] = parseFloat(p))
                        : Array.isArray(p) &&
                          f === s.j &&
                          (e[r] = p.map(parseFloat))
                  } else
                    (null === h || void 0 === h ? void 0 : h.transform) &&
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (0 === d || 0 === p)
                      ? 0 === d
                        ? o.set(f.transform(d))
                        : (e[r] = h.transform(p))
                      : (c ||
                          ((u = (function (t) {
                            var e = []
                            return (
                              qt.forEach(function (n) {
                                var r = t.getValue(n)
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith('scale') ? 1 : 0))
                              }),
                              e.length && t.render(),
                              e
                            )
                          })(t)),
                          (c = !0)),
                        l.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                        Wt(o, p))
              }
            }),
            l.length)
          ) {
            var f = (function (t, e, n) {
              var r = e.getBoundingBox(),
                i = e.getComputedStyle(),
                o = i.display,
                a = {
                  top: i.top,
                  left: i.left,
                  bottom: i.bottom,
                  right: i.right,
                  transform: i.transform,
                }
              'none' === o &&
                e.setStaticValues('display', t.display || 'block'),
                e.render()
              var s = e.getBoundingBox()
              return (
                n.forEach(function (n) {
                  var o = e.getValue(n)
                  Wt(o, Kt[n](r, a)), (t[n] = Kt[n](s, i))
                }),
                t
              )
            })(e, t, l)
            return (
              u.length &&
                u.forEach(function (e) {
                  var n = Object(r.c)(e, 2),
                    i = n[0],
                    o = n[1]
                  t.getValue(i).set(o)
                }),
              t.render(),
              { target: f, transitionEnd: i }
            )
          }
          return { target: e, transitionEnd: i }
        }
      function Qt(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(Nt)
        })(e)
          ? Jt(t, e, n, r)
          : { target: e, transitionEnd: r }
      }
      var te = function (t, e, n, i) {
          var o = (function (t, e, n) {
            var i,
              o = Object(r.d)(e, []),
              a = t.getInstance()
            if (!(a instanceof HTMLElement))
              return { target: o, transitionEnd: n }
            for (var s in (n && (n = Object(r.a)({}, n)),
            t.forEachValue(function (t) {
              var e = t.get()
              if (yt(e)) {
                var n = xt(e, a)
                n && t.set(n)
              }
            }),
            o)) {
              var u = o[s]
              if (yt(u)) {
                var c = xt(u, a)
                c &&
                  ((o[s] = c),
                  n && ((null !== (i = n[s]) && void 0 !== i) || (n[s] = u)))
              }
            }
            return { target: o, transitionEnd: n }
          })(t, e, i)
          return Qt(t, (e = o.target), n, (i = o.transitionEnd))
        },
        ee = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (
              (e.defaultConfig = {
                enableHardwareAcceleration: !0,
                allowTransformNone: !0,
              }),
              (e.style = {}),
              (e.reactStyle = {}),
              (e.vars = {}),
              (e.transform = {}),
              (e.transformOrigin = {}),
              (e.transformKeys = []),
              (e.config = e.defaultConfig),
              (e.isLayoutProjectionEnabled = !1),
              (e.layoutUpdateListeners = new f()),
              (e.layoutMeasureListeners = new f()),
              (e.viewportBoxUpdateListeners = new f()),
              (e.hasViewportBoxUpdated = !1),
              (e.targetBoxFinal = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              }),
              (e.treeScale = { x: 1, y: 1 }),
              (e.prevTreeScale = { x: 1, y: 1 }),
              (e.delta = ot()),
              (e.deltaFinal = ot()),
              (e.deltaTransform = mt),
              (e.stopLayoutAxisAnimation = {
                x: function () {},
                y: function () {},
              }),
              (e.isTargetBoxLocked = !1),
              (e.axisProgress = { x: p(0), y: p(0) }),
              (e.updateLayoutDelta = function () {
                e.isLayoutProjectionEnabled && e.box && e.updateLayoutDeltas(),
                  e.children.forEach(ne)
              }),
              e
            )
          }
          return (
            Object(r.b)(e, t),
            (e.prototype.removeValue = function (e) {
              t.prototype.removeValue.call(this, e),
                delete this.vars[e],
                delete this.style[e]
            }),
            (e.prototype.clean = function () {
              ;(this.style = {}), (this.vars = {}), (this.transform = {})
            }),
            (e.prototype.updateConfig = function (t) {
              void 0 === t && (t = {}),
                (this.config = Object(r.a)(
                  Object(r.a)({}, this.defaultConfig),
                  t
                ))
            }),
            (e.prototype.read = function (t) {
              return this.getComputedStyle()[t] || 0
            }),
            (e.prototype.addValue = function (e, n) {
              t.prototype.addValue.call(this, e, n),
                e.startsWith('rotate') && (this.layoutOrigin = 0.5)
            }),
            (e.prototype.readNativeValue = function (t) {
              if (ft(t)) {
                var e = M(t)
                return (e && e.default) || 0
              }
              return this.read(t)
            }),
            (e.prototype.makeTargetAnimatable = function (t, e) {
              void 0 === e && (e = !0)
              var n = t.transition,
                i = t.transitionEnd,
                o = Object(r.d)(t, ['transition', 'transitionEnd']),
                a = this.config.transformValues,
                s = G(o, n || {}, this)
              if (
                (a && (i && (i = a(i)), o && (o = a(o)), s && (s = a(s))), e)
              ) {
                N(this, o, s)
                var u = te(this, o, s, i)
                ;(i = u.transitionEnd), (o = u.target)
              }
              return Object(r.a)({ transition: n, transitionEnd: i }, o)
            }),
            (e.prototype.enableLayoutProjection = function () {
              this.isLayoutProjectionEnabled = !0
            }),
            (e.prototype.hide = function () {
              !1 !== this.isVisible &&
                ((this.isVisible = !1), this.scheduleRender())
            }),
            (e.prototype.show = function () {
              !0 !== this.isVisible &&
                ((this.isVisible = !0), this.scheduleRender())
            }),
            (e.prototype.onLayoutUpdate = function (t) {
              return this.layoutUpdateListeners.add(t)
            }),
            (e.prototype.onLayoutMeasure = function (t) {
              return this.layoutMeasureListeners.add(t)
            }),
            (e.prototype.onViewportBoxUpdate = function (t) {
              return this.viewportBoxUpdateListeners.add(t)
            }),
            (e.prototype.layoutReady = function (t) {
              this.layoutUpdateListeners.notify(
                this.box,
                this.prevViewportBox || this.box,
                t
              )
            }),
            (e.prototype.getBoundingBox = function () {
              var t = this.config.transformPagePoint
              return Yt(this.element, t)
            }),
            (e.prototype.getBoundingBoxWithoutTransforms = function () {
              var t,
                e,
                n = this.getBoundingBox()
              return (
                (t = n), (e = this.latest), Rt(t.x, e, Lt), Rt(t.y, e, Bt), n
              )
            }),
            (e.prototype.getComputedStyle = function () {
              return window.getComputedStyle(this.element)
            }),
            (e.prototype.snapshotBoundingBox = function () {
              ;(this.prevViewportBox = this.getBoundingBoxWithoutTransforms()),
                this.rebaseTargetBox(!1, this.prevViewportBox)
            }),
            (e.prototype.rebaseTargetBox = function (t, e) {
              var n = this
              void 0 === t && (t = !1), void 0 === e && (e = this.box)
              var r = this.axisProgress,
                i = r.x,
                o = r.y,
                a =
                  this.box &&
                  !this.isTargetBoxLocked &&
                  !i.isAnimating() &&
                  !o.isAnimating()
              ;(t || a) &&
                Ht(function (t) {
                  var r = e[t],
                    i = r.min,
                    o = r.max
                  n.setAxisTarget(t, i, o)
                })
            }),
            (e.prototype.measureLayout = function () {
              var t = this
              ;(this.box = this.getBoundingBox()),
                (this.boxCorrected = rt(this.box)),
                this.targetBox || (this.targetBox = rt(this.box)),
                this.layoutMeasureListeners.notify(
                  this.box,
                  this.prevViewportBox || this.box
                ),
                i.b.update(function () {
                  return t.rebaseTargetBox()
                })
            }),
            (e.prototype.lockTargetBox = function () {
              this.isTargetBoxLocked = !0
            }),
            (e.prototype.unlockTargetBox = function () {
              this.stopLayoutAnimation(), (this.isTargetBoxLocked = !1)
            }),
            (e.prototype.resetTransform = function () {
              var t = this.config.transformTemplate
              ;(this.element.style.transform = t ? t({}, '') : 'none'),
                this.scheduleRender()
            }),
            (e.prototype.setAxisTarget = function (t, e, n) {
              var r = this.targetBox[t]
              ;(r.min = e),
                (r.max = n),
                (this.hasViewportBoxUpdated = !0),
                this.rootParent.scheduleUpdateLayoutDelta()
            }),
            (e.prototype.startLayoutAxisAnimation = function (t, e) {
              var n,
                r = this,
                i = this.axisProgress[t],
                o = this.targetBox[t],
                a = o.min,
                s = o.max - a
              return (
                i.clearListeners(),
                i.set(a),
                i.set(a),
                i.onChange(function (e) {
                  return r.setAxisTarget(t, e, e + s)
                }),
                null === (n = this.animateMotionValue) || void 0 === n
                  ? void 0
                  : n.call(this, t, i, 0, e)
              )
            }),
            (e.prototype.stopLayoutAnimation = function () {
              var t = this
              Ht(function (e) {
                return t.axisProgress[e].stop()
              })
            }),
            (e.prototype.updateLayoutDeltas = function () {
              var t, e, n, r, i
              ;(t = this.boxCorrected),
                (e = this.box),
                Ct(t.x, e.x),
                Ct(t.y, e.y),
                this.parent &&
                  ((this.prevTreeScale.x = this.treeScale.x),
                  (this.prevTreeScale.y = this.treeScale.y),
                  (n = this.treeScale),
                  (r = this.parent.treeScale),
                  (i = this.parent.delta),
                  (n.x = r.x * i.x.scale),
                  (n.y = r.y * i.y.scale)),
                (function (t, e) {
                  for (var n = e.length, r = 0; r < n; r++) Vt(t, e[r].delta)
                })(this.boxCorrected, this.treePath),
                It(
                  this.delta,
                  this.boxCorrected,
                  this.targetBox,
                  this.layoutOrigin
                ),
                this.hasViewportBoxUpdated &&
                  this.viewportBoxUpdateListeners.notify(
                    this.targetBox,
                    this.delta
                  ),
                (this.hasViewportBoxUpdated = !1)
              var o = vt(this.delta, this.treeScale)
              ;(o === this.deltaTransform &&
                this.prevTreeScale.x === this.treeScale.x &&
                this.prevTreeScale.y === this.treeScale.y) ||
                this.scheduleRender(),
                (this.deltaTransform = o)
            }),
            (e.prototype.updateTransformDeltas = function () {
              var t, e, n
              this.isLayoutProjectionEnabled &&
                this.box &&
                ((t = this.targetBoxFinal),
                (e = this.targetBox),
                (n = this.latest),
                Tt(t.x, e.x, n, Lt),
                Tt(t.y, e.y, n, Bt),
                It(
                  this.deltaFinal,
                  this.boxCorrected,
                  this.targetBoxFinal,
                  this.layoutOrigin
                ))
            }),
            (e.prototype.build = function () {
              this.updateTransformDeltas(),
                void 0 !== this.isVisible &&
                  (this.style.visibility = this.isVisible
                    ? 'visible'
                    : 'hidden'),
                wt(
                  this.latest,
                  this.style,
                  this.vars,
                  this.transform,
                  this.transformOrigin,
                  this.transformKeys,
                  this.config,
                  this.isLayoutProjectionEnabled && !!this.box,
                  this.delta,
                  this.deltaFinal,
                  this.treeScale,
                  this.targetBoxFinal
                )
            }),
            (e.prototype.render = function () {
              for (var t in (this.build(),
              Object.assign(this.element.style, this.style),
              this.vars))
                this.element.style.setProperty(t, this.vars[t])
            }),
            e
          )
        })(tt),
        ne = function (t) {
          return t.updateLayoutDelta()
        }
      function re(t) {
        var e = Object(u.useRef)(null)
        return null === e.current && (e.current = t()), e.current
      }
      function ie(t, e, n) {
        return 'string' === typeof t ? t : s.j.transform(e + n * t)
      }
      var oe = function (t, e) {
          return s.j.transform(t * e)
        },
        ae = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        se = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
      var ue = { x: 0, y: 0, width: 0, height: 0 }
      function ce(t, e, n, i, o, a, s, u, c, l, f, d, p, h, v) {
        var m = t.attrX,
          g = t.attrY,
          y = t.originX,
          b = t.originY,
          x = t.pathLength,
          j = t.pathSpacing,
          O = void 0 === j ? 1 : j,
          E = t.pathOffset,
          w = void 0 === E ? 0 : E
        return (
          wt(
            Object(r.d)(t, [
              'attrX',
              'attrY',
              'originX',
              'originY',
              'pathLength',
              'pathSpacing',
              'pathOffset',
            ]),
            i,
            n,
            o,
            a,
            s,
            u,
            f,
            d,
            p,
            h,
            v
          ),
          i.transform && ((e.transform = i.transform), delete i.transform),
          (void 0 !== y || void 0 !== b || e.transform) &&
            (e.transformOrigin = (function (t, e, n) {
              return ie(e, t.x, t.width) + ' ' + ie(n, t.y, t.height)
            })(c || ue, void 0 !== y ? y : 0.5, void 0 !== b ? b : 0.5)),
          void 0 !== m && (i.x = m),
          void 0 !== g && (i.y = g),
          void 0 !== l &&
            void 0 !== x &&
            (function (t, e, n, r, i, o) {
              void 0 === r && (r = 1),
                void 0 === i && (i = 0),
                void 0 === o && (o = !0)
              var a = o ? ae : se
              t[a.offset] = oe(-i, e)
              var s = oe(n, e),
                u = oe(r, e)
              t[a.array] = s + ' ' + u
            })(i, l, x, O, w, !1),
          i
        )
      }
      var le = new Set([
          'baseFrequency',
          'diffuseConstant',
          'kernelMatrix',
          'kernelUnitLength',
          'keySplines',
          'keyTimes',
          'limitingConeAngle',
          'markerHeight',
          'markerWidth',
          'numOctaves',
          'targetX',
          'targetY',
          'surfaceScale',
          'specularConstant',
          'specularExponent',
          'stdDeviation',
          'tableValues',
          'viewBox',
        ]),
        fe = /([a-z])([A-Z])/g,
        de = function (t) {
          return t.replace(fe, '$1-$2').toLowerCase()
        },
        pe = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (
              (e.attrs = {}),
              (e.defaultConfig = { enableHardwareAcceleration: !1 }),
              (e.config = e.defaultConfig),
              e
            )
          }
          return (
            Object(r.b)(e, t),
            (e.prototype.mount = function (e) {
              t.prototype.mount.call(this, e), this.measure()
            }),
            (e.prototype.measure = function () {
              try {
                this.dimensions =
                  'function' === typeof this.element.getBBox
                    ? this.element.getBBox()
                    : this.element.getBoundingClientRect()
              } catch (t) {
                this.dimensions = { x: 0, y: 0, width: 0, height: 0 }
              }
              'path' === this.element.tagName &&
                (this.totalPathLength = this.element.getTotalLength())
            }),
            (e.prototype.clean = function () {
              t.prototype.clean.call(this), (this.attrs = {})
            }),
            (e.prototype.read = function (t) {
              return (t = le.has(t) ? t : de(t)), this.element.getAttribute(t)
            }),
            (e.prototype.build = function () {
              this.updateTransformDeltas(),
                ce(
                  this.latest,
                  this.style,
                  this.vars,
                  this.attrs,
                  this.transform,
                  this.transformOrigin,
                  this.transformKeys,
                  this.config,
                  this.dimensions,
                  this.totalPathLength,
                  this.isLayoutProjectionEnabled && !!this.box,
                  this.delta,
                  this.deltaFinal,
                  this.treeScale,
                  this.targetBoxFinal
                )
            }),
            (e.prototype.render = function () {
              for (var e in (t.prototype.render.call(this), this.attrs))
                this.element.setAttribute(le.has(e) ? e : de(e), this.attrs[e])
            }),
            e
          )
        })(ee)
      var he = new Set([
        'animate',
        'circle',
        'clipPath',
        'defs',
        'desc',
        'ellipse',
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feDropShadow',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
        'filter',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'textPath',
        'tspan',
        'use',
        'view',
      ])
      function ve(t) {
        return 'string' === typeof t && he.has(t)
      }
      var me = Object(u.createContext)(null),
        ge = Object(u.createContext)({ variantContext: {} })
      function ye() {
        return Object(u.useContext)(ge).variantContext
      }
      function be() {
        return Object(u.useContext)(ge).visualElement
      }
      var xe = new Set([
        'initial',
        'animate',
        'exit',
        'style',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'layout',
        'layoutId',
        'onLayoutAnimationComplete',
        'onViewportBoxUpdate',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        'drag',
        'dragControls',
        'dragListener',
        'dragConstraints',
        'dragDirectionLock',
        '_dragX',
        '_dragY',
        'dragElastic',
        'dragMomentum',
        'dragPropagation',
        'dragTransition',
        'onPan',
        'onPanStart',
        'onPanEnd',
        'onPanSessionStart',
        'onTap',
        'onTapStart',
        'onTapCancel',
        'whileHover',
        'whileTap',
        'onHoverEnd',
        'onHoverStart',
      ])
      function je(t) {
        return xe.has(t)
      }
      var Oe = function (t) {
        return !je(t)
      }
      try {
        var Ee = n('9uj6').default
        Oe = function (t) {
          return t.startsWith('on') ? !je(t) : Ee(t)
        }
      } catch (Pr) {}
      var we = function (t) {
        return t instanceof d
      }
      function Ce(t, e) {
        var n = e.layout,
          r = e.layoutId
        return ft(t) || pt(t) || ((n || void 0 !== r) && !!Et[t])
      }
      function Se(t, e, n, r, i) {
        for (var o in (void 0 === r && (r = !1), r && (t.reactStyle = {}), n)) {
          var a = n[o],
            s = !1
          if (we(a)) Ve.has(o) || (t.addValue(o, a), (s = !0))
          else if (Ce(o, i)) {
            if (t.hasValue(o)) {
              if (a !== e[o]) {
                if (we(e[o])) t.addValue(o, p(a))
                else t.getValue(o).set(a)
              }
            } else t.addValue(o, p(a))
            s = !0
          } else r && (t.reactStyle[o] = a)
          s && (e[o] = a)
        }
      }
      var Pe,
        Ae,
        Ve = new Set([]),
        Te = function () {
          return {}
        },
        Le = Object(u.createContext)({
          transformPagePoint: function (t) {
            return t
          },
          features: [],
          isStatic: !1,
        })
      function Be(t) {
        var e = t.animate,
          n = t.variants,
          r = t.inherit
        return void 0 === r ? !!n && !e : r
      }
      !(function (t) {
        ;(t[(t.Entering = 0)] = 'Entering'),
          (t[(t.Present = 1)] = 'Present'),
          (t[(t.Exiting = 2)] = 'Exiting')
      })(Pe || (Pe = {})),
        (function (t) {
          ;(t[(t.Hide = 0)] = 'Hide'), (t[(t.Show = 1)] = 'Show')
        })(Ae || (Ae = {}))
      var ke = {
          measureLayout: function (t) {
            return t.measureLayout()
          },
          layoutReady: function (t) {
            return t.layoutReady()
          },
        },
        Re = function (t, e) {
          return t.depth - e.depth
        }
      function Me() {
        var t = new Set()
        return {
          add: function (e) {
            return t.add(e)
          },
          flush: function (e) {
            var n = void 0 === e ? ke : e,
              r = n.measureLayout,
              i = n.layoutReady,
              o = Array.from(t).sort(Re)
            o.forEach(function (t) {
              return t.resetTransform()
            }),
              o.forEach(r),
              o.forEach(i),
              o.forEach(function (t) {
                t.isPresent && (t.presence = Pe.Present)
              }),
              t.clear()
          },
        }
      }
      function De(t) {
        return !!t.forceUpdate
      }
      var Ue = Object(u.createContext)(Me()),
        Fe = 'undefined' !== typeof window ? u.useLayoutEffect : u.useEffect
      function Ie() {
        var t = Object(u.useContext)(me)
        if (null === t) return [!0, null]
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          i = ze()
        Object(u.useEffect)(function () {
          return r(i)
        }, [])
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(i)
              },
            ]
          : [!0]
      }
      function He(t) {
        return null === t || t.isPresent
      }
      var Ye = 0,
        Xe = function () {
          return Ye++
        },
        ze = function () {
          return re(Xe)
        }
      function Ne(t, e) {
        void 0 === e && (e = !1)
        var n = Object(u.useRef)(!0)
        ;(!e || (e && n.current)) && t(), (n.current = !1)
      }
      function We(t) {
        return 'string' === typeof t || Array.isArray(t)
      }
      function Ge(t) {
        return 'object' === typeof t && 'function' === typeof t.start
      }
      function Ze(t, e) {
        var n = e.defaultFeatures,
          i = e.useVisualElement,
          o = e.render
        return Object(u.forwardRef)(function (e, a) {
          var s = Object(u.useContext)(Le).isStatic,
            c = i(t, e, s, a)
          !(function (t, e) {
            var n = re(Te)
            for (var r in n) {
              var i = Ce(r, e),
                o = void 0 !== e[r],
                a = e.style && void 0 !== e.style[r],
                s = o && we(e[r]),
                u = a && we(e.style[r])
              ;((i && !o && !a) || (!i && !s && !u)) &&
                (t.removeValue(r), delete n[r])
            }
            Se(t, n, e, !1, e),
              e.style && Se(t, n, e.style, !0, e),
              e.transformValues &&
                (t.reactStyle = e.transformValues(t.reactStyle))
          })(c, e)
          var l = (function (t, e, n) {
              var r,
                i,
                o = e.variants,
                a = e.initial,
                s = e.animate,
                c = e.whileTap,
                l = e.whileHover,
                f = ye(),
                d = f.parent,
                p = f.initial,
                h = f.animate,
                v = Object(u.useContext)(me),
                m = We(s) || We(c) || We(l) || Ge(s),
                g = o || m
              !1 !==
                (a =
                  null !==
                    (r = null === v || void 0 === v ? void 0 : v.initial) &&
                  void 0 !== r
                    ? r
                    : a) ||
                Ge(s) ||
                (a = s)
              var y = Object(u.useMemo)(
                function () {
                  return {
                    parent: g ? t : d,
                    initial: We(a) ? a : p,
                    animate: We(s) ? s : h,
                  }
                },
                [n ? a : null]
              )
              return (
                Ne(function () {
                  var e = a || p
                  e && z(t, e)
                }, !n),
                g && !m && (null === d || void 0 === d || d.addVariantChild(t)),
                He(v) &&
                  (null === (i = t.variantChildrenOrder) ||
                    void 0 === i ||
                    i.clear()),
                Object(u.useEffect)(function () {
                  g && (null === d || void 0 === d || d.addVariantChildOrder(t))
                }),
                Object(u.useEffect)(function () {
                  return (
                    (t.isMounted = !0),
                    function () {
                      var e
                      ;(t.isMounted = !1),
                        null ===
                          (e =
                            null === d || void 0 === d
                              ? void 0
                              : d.variantChildren) ||
                          void 0 === e ||
                          e.delete(t)
                    }
                  )
                }, []),
                Ne(function () {
                  t.forEachValue(function (e, n) {
                    t.baseTarget[n] = e.get()
                  })
                }, !0),
                y
              )
            })(c, e, s),
            f = (function (t, e, n, i) {
              var o = Object(u.useContext)(Le)
              if (e || 'undefined' === typeof window) return null
              for (
                var a = Object(r.e)(t, o.features), s = a.length, c = [], l = 0;
                l < s;
                l++
              ) {
                var f = a[l],
                  d = f.shouldRender,
                  p = f.key,
                  h = f.getComponent
                if (d(i)) {
                  var v = h(i)
                  v &&
                    c.push(
                      Object(u.createElement)(
                        v,
                        Object(r.a)({ key: p }, i, {
                          visualElement: n,
                          inherit: Be(i),
                        })
                      )
                    )
                }
              }
              return c
            })(n, s, c, e),
            d = Object(u.useMemo)(
              function () {
                return { visualElement: c, variantContext: l }
              },
              [c, l]
            ),
            p = o(t, e, c)
          return (
            (function (t) {
              var e = Object(u.useContext)(Ue)
              Fe(function () {
                return function () {
                  De(e) && e.remove(t)
                }
              }, [])
            })(c),
            Object(u.createElement)(
              u.Fragment,
              null,
              Object(u.createElement)(ge.Provider, { value: d }, p),
              f
            )
          )
        })
      }
      function _e(t) {
        var e = null
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null
            })
          )
        }
      }
      var $e = _e('dragHorizontal'),
        qe = _e('dragVertical')
      function Ke(t) {
        var e = !1
        if ('y' === t) e = qe()
        else if ('x' === t) e = $e()
        else {
          var n = $e(),
            r = qe()
          n && r
            ? (e = function () {
                n(), r()
              })
            : (n && n(), r && r())
        }
        return e
      }
      function Je(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r)
          }
        )
      }
      function Qe(t) {
        return 'undefined' !== typeof PointerEvent && t instanceof PointerEvent
          ? !('mouse' !== t.pointerType)
          : t instanceof MouseEvent
      }
      function tn(t) {
        return !!t.touches
      }
      var en = { pageX: 0, pageY: 0 }
      function nn(t, e) {
        void 0 === e && (e = 'page')
        var n = t.touches[0] || t.changedTouches[0] || en
        return { x: n[e + 'X'], y: n[e + 'Y'] }
      }
      function rn(t, e) {
        return void 0 === e && (e = 'page'), { x: t[e + 'X'], y: t[e + 'Y'] }
      }
      function on(t, e) {
        return (
          void 0 === e && (e = 'page'), { point: tn(t) ? nn(t, e) : rn(t, e) }
        )
      }
      function an(t) {
        return on(t, 'client')
      }
      var sn = function (t, e) {
          void 0 === e && (e = !1)
          var n,
            r = function (e) {
              return t(e, on(e))
            }
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent
                ;(!e || (e && 0 === t.button)) && n(t)
              })
            : r
        },
        un = 'undefined' !== typeof window,
        cn = {
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointercancel: 'mousecancel',
          pointerover: 'mouseover',
          pointerout: 'mouseout',
          pointerenter: 'mouseenter',
          pointerleave: 'mouseleave',
        },
        ln = {
          pointerdown: 'touchstart',
          pointermove: 'touchmove',
          pointerup: 'touchend',
          pointercancel: 'touchcancel',
        }
      function fn(t) {
        return un && null === window.onpointerdown
          ? t
          : un && null === window.ontouchstart
          ? ln[t]
          : un && null === window.onmousedown
          ? cn[t]
          : t
      }
      function dn(t, e, n, r) {
        return Je(t, fn(e), sn(n, 'pointerdown' === e), r)
      }
      function pn(t, e, n, r) {
        return (function (t, e, n, r) {
          Object(u.useEffect)(
            function () {
              var i = t.current
              if (n && i) return Je(i, e, n, r)
            },
            [t, e, n, r]
          )
        })(t, fn(e), n && sn(n, 'pointerdown' === e), r)
      }
      var hn = (function () {
        function t(t, e, n) {
          var a = this,
            s = (void 0 === n ? {} : n).transformPagePoint
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (a.lastMoveEvent && a.lastMoveEventInfo) {
                var t = gn(a.lastMoveEventInfo, a.history),
                  e = null !== a.startEvent,
                  n = Object(o.n)(t.offset, { x: 0, y: 0 }) >= 3
                if (e || n) {
                  var s = t.point,
                    u = Object(i.c)().timestamp
                  a.history.push(
                    Object(r.a)(Object(r.a)({}, s), { timestamp: u })
                  )
                  var c = a.handlers,
                    l = c.onStart,
                    f = c.onMove
                  e ||
                    (l && l(a.lastMoveEvent, t),
                    (a.startEvent = a.lastMoveEvent)),
                    f && f(a.lastMoveEvent, t)
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              ;(a.lastMoveEvent = t),
                (a.lastMoveEventInfo = vn(e, a.transformPagePoint)),
                Qe(t) && 0 === t.buttons
                  ? a.handlePointerUp(t, e)
                  : i.b.update(a.updatePoint, !0)
            }),
            (this.handlePointerUp = function (t, e) {
              a.end()
              var n = a.handlers.onEnd
              if (n) {
                var r = gn(vn(e, a.transformPagePoint), a.history)
                n && n(t, r)
              }
            }),
            !(tn(t) && t.touches.length > 1))
          ) {
            ;(this.handlers = e), (this.transformPagePoint = s)
            var u = vn(on(t), this.transformPagePoint),
              c = u.point,
              l = Object(i.c)().timestamp
            this.history = [Object(r.a)(Object(r.a)({}, c), { timestamp: l })]
            var f = e.onSessionStart
            f && f(t, gn(u, this.history)),
              (this.removeListeners = Object(o.v)(
                dn(window, 'pointermove', this.handlePointerMove),
                dn(window, 'pointerup', this.handlePointerUp),
                dn(window, 'pointercancel', this.handlePointerUp)
              ))
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              i.a.update(this.updatePoint)
          }),
          t
        )
      })()
      function vn(t, e) {
        return e ? { point: e(t.point) } : t
      }
      function mn(t, e) {
        return { x: t.x - e.x, y: t.y - e.y }
      }
      function gn(t, e) {
        var n = t.point
        return {
          point: n,
          delta: mn(n, bn(e)),
          offset: mn(n, yn(e)),
          velocity: xn(e, 0.1),
        }
      }
      function yn(t) {
        return t[0]
      }
      function bn(t) {
        return t[t.length - 1]
      }
      function xn(t, e) {
        if (t.length < 2) return { x: 0, y: 0 }
        for (
          var n = t.length - 1, r = null, i = bn(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > h(e)));

        )
          n--
        if (!r) return { x: 0, y: 0 }
        var o = (i.timestamp - r.timestamp) / 1e3
        if (0 === o) return { x: 0, y: 0 }
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o }
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
      }
      function jn(t, e, n) {
        var r = e.min,
          i = e.max
        return (
          void 0 !== r && t < r
            ? (t = n ? Object(o.u)(r, t, n) : Math.max(t, r))
            : void 0 !== i &&
              t > i &&
              (t = n ? Object(o.u)(i, t, n) : Math.min(t, i)),
          t
        )
      }
      function On(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        }
      }
      function En(t, e) {
        var n,
          i = e.min - t.min,
          o = e.max - t.max
        return (
          e.max - e.min < t.max - t.min &&
            ((i = (n = Object(r.c)([o, i], 2))[0]), (o = n[1])),
          { min: t.min + i, max: t.min + o }
        )
      }
      var wn,
        Cn = new WeakMap(),
        Sn = (function () {
          function t(t) {
            var e = t.visualElement
            ;(this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = e),
              this.visualElement.enableLayoutProjection(),
              Cn.set(e, this)
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = void 0 === e ? {} : e,
                i = r.snapToCursor,
                a = void 0 !== i && i,
                s = r.cursorProgress
              a && this.snapToCursor(t)
              var u = this.props.transformPagePoint
              this.panSession = new hn(
                t,
                {
                  onSessionStart: function () {
                    n.stopMotion()
                  },
                  onStart: function (t, e) {
                    var r,
                      i,
                      a = n.props,
                      u = a.drag,
                      c = a.dragPropagation
                    if (
                      !u ||
                      c ||
                      (n.openGlobalLock && n.openGlobalLock(),
                      (n.openGlobalLock = Ke(u)),
                      n.openGlobalLock)
                    ) {
                      n.prepareBoundingBox(),
                        n.visualElement.lockTargetBox(),
                        n.resolveDragConstraints()
                      var l = an(t).point
                      Ht(function (t) {
                        var e = n.visualElement.targetBox[t],
                          r = e.min,
                          i = e.max
                        n.cursorProgress[t] = s ? s[t] : Object(o.w)(r, i, l[t])
                        var a = n.getAxisMotionValue(t)
                        a && (n.originPoint[t] = a.get())
                      }),
                        (n.isDragging = !0),
                        (n.currentDirection = null),
                        null === (i = (r = n.props).onDragStart) ||
                          void 0 === i ||
                          i.call(r, t, e)
                    }
                  },
                  onMove: function (t, e) {
                    var r,
                      i,
                      o,
                      a,
                      s = n.props,
                      u = s.dragPropagation,
                      c = s.dragDirectionLock
                    if (u || n.openGlobalLock) {
                      var l = e.offset
                      if (c && null === n.currentDirection)
                        return (
                          (n.currentDirection = (function (t, e) {
                            void 0 === e && (e = 10)
                            var n = null
                            Math.abs(t.y) > e
                              ? (n = 'y')
                              : Math.abs(t.x) > e && (n = 'x')
                            return n
                          })(l)),
                          void (
                            null !== n.currentDirection &&
                            (null === (i = (r = n.props).onDirectionLock) ||
                              void 0 === i ||
                              i.call(r, n.currentDirection))
                          )
                        )
                      n.updateAxis('x', t, l),
                        n.updateAxis('y', t, l),
                        null === (a = (o = n.props).onDrag) ||
                          void 0 === a ||
                          a.call(o, t, e),
                        (wn = t)
                    }
                  },
                  onEnd: function (t, e) {
                    return n.stop(t, e)
                  },
                },
                { transformPagePoint: u }
              )
            }),
            (t.prototype.prepareBoundingBox = function () {
              var t = this.visualElement.getInstance(),
                e = t.style.transform
              this.visualElement.resetTransform(),
                this.visualElement.measureLayout(),
                (t.style.transform = e),
                this.visualElement.rebaseTargetBox(
                  !0,
                  this.visualElement.getBoundingBoxWithoutTransforms()
                )
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this,
                e = this.props.dragConstraints
              ;(this.constraints =
                !!e &&
                (l(e)
                  ? this.resolveRefConstraints(this.visualElement.box, e)
                  : (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right
                      return { x: On(t.x, r, o), y: On(t.y, n, i) }
                    })(this.visualElement.box, e))),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  Ht(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {}
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        )
                      })(t.visualElement.box[e], t.constraints[e]))
                  })
            }),
            (t.prototype.resolveRefConstraints = function (t, e) {
              var n = this.props,
                r = n.onMeasureDragConstraints,
                i = n.transformPagePoint,
                o = e.current
              Object(a.a)(
                null !== o,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              ),
                (this.constraintsBox = Yt(o, i))
              var s = (function (t, e) {
                return { x: En(t.x, e.x), y: En(t.y, e.y) }
              })(t, this.constraintsBox)
              if (r) {
                var u = r(
                  (function (t) {
                    var e = t.x,
                      n = t.y
                    return {
                      top: n.min,
                      bottom: n.max,
                      left: e.min,
                      right: e.max,
                    }
                  })(s)
                )
                ;(this.hasMutatedConstraints = !!u), u && (s = nt(u))
              }
              return s
            }),
            (t.prototype.cancelDrag = function () {
              ;(this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null))
            }),
            (t.prototype.stop = function (t, e) {
              var n
              this.visualElement.unlockTargetBox(),
                null === (n = this.panSession) || void 0 === n || n.end(),
                (this.panSession = null)
              var r = this.isDragging
              if ((this.cancelDrag(), r)) {
                var i = this.props,
                  o = i.dragMomentum,
                  a = i.dragElastic,
                  s = i.onDragEnd
                if (o || a) {
                  var u = e.velocity
                  this.animateDragEnd(u)
                }
                null === s || void 0 === s || s(t, e)
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this
              this.prepareBoundingBox(),
                Ht(function (n) {
                  var r = e.getAxisMotionValue(n)
                  if (r) {
                    var i = an(t).point,
                      o = e.visualElement.box,
                      a = o[n].max - o[n].min,
                      s = o[n].min + a / 2,
                      u = i[n] - s
                    ;(e.originPoint[n] = i[n]), r.set(u)
                  } else (e.cursorProgress[n] = 0.5), e.updateVisualElementAxis(n, t)
                })
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              if (Pn(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, n)
                  : this.updateVisualElementAxis(t, e)
            }),
            (t.prototype.updateAxisMotionValue = function (t, e) {
              var n = this.getAxisMotionValue(t)
              if (e && n) {
                var r = this.props.dragElastic,
                  i = this.originPoint[t] + e[t],
                  o = this.constraints ? jn(i, this.constraints[t], r) : i
                n.set(o)
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, e) {
              var n,
                r = this.props.dragElastic,
                i = this.visualElement.box[t],
                o = i.max - i.min,
                a = this.cursorProgress[t],
                s = (function (t, e, n, r, i) {
                  var o = t - e * n
                  return r ? jn(o, r, i) : o
                })(
                  an(e).point[t],
                  o,
                  a,
                  null === (n = this.constraints) || void 0 === n
                    ? void 0
                    : n[t],
                  r
                )
              this.visualElement.setAxisTarget(t, s, s + o)
            }),
            (t.prototype.updateProps = function (t) {
              var e = t.drag,
                n = void 0 !== e && e,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                c = void 0 !== u && u,
                l = t.dragElastic,
                f = void 0 === l ? 0.35 : l,
                d = t.dragMomentum,
                p = void 0 === d || d,
                h = Object(r.d)(t, [
                  'drag',
                  'dragDirectionLock',
                  'dragPropagation',
                  'dragConstraints',
                  'dragElastic',
                  'dragMomentum',
                ])
              this.props = Object(r.a)(
                {
                  drag: n,
                  dragDirectionLock: o,
                  dragPropagation: s,
                  dragConstraints: c,
                  dragElastic: f,
                  dragMomentum: p,
                },
                h
              )
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e = this.props,
                n = e.layout,
                r = e.layoutId,
                i = '_drag' + t.toUpperCase()
              return this.props[i]
                ? this.props[i]
                : n || void 0 !== r
                ? void 0
                : this.visualElement.getValue(t, 0)
            }),
            (t.prototype.animateDragEnd = function (t) {
              var e = this,
                n = this.props,
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = Ht(function (n) {
                  if (Pn(n, i, e.currentDirection)) {
                    var u = e.constraints ? e.constraints[n] : {},
                      c = a ? 200 : 1e6,
                      l = a ? 40 : 1e7,
                      f = Object(r.a)(
                        Object(r.a)(
                          {
                            type: 'inertia',
                            velocity: o ? t[n] : 0,
                            bounceStiffness: c,
                            bounceDamping: l,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        u
                      )
                    return e.getAxisMotionValue(n)
                      ? e.startAxisValueAnimation(n, f)
                      : e.visualElement.startLayoutAxisAnimation(n, f)
                  }
                })
              return Promise.all(u).then(function () {
                var t, n
                null === (n = (t = e.props).onDragTransitionEnd) ||
                  void 0 === n ||
                  n.call(t)
              })
            }),
            (t.prototype.stopMotion = function () {
              var t = this
              Ht(function (e) {
                var n = t.getAxisMotionValue(e)
                n ? n.stop() : t.visualElement.stopLayoutAnimation()
              })
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t)
              if (n) {
                var r = n.get()
                return n.set(r), n.set(r), S(t, n, 0, e)
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                e = this.props,
                n = e.drag,
                r = e.dragConstraints
              if (l(r) && this.constraintsBox) {
                this.stopMotion()
                var i = { x: 0, y: 0 }
                Ht(function (e) {
                  i[e] = Ut(t.visualElement.targetBox[e], t.constraintsBox[e])
                }),
                  this.prepareBoundingBox(),
                  this.resolveDragConstraints(),
                  Ht(function (e) {
                    if (Pn(e, n, null)) {
                      var r = (function (t, e, n) {
                          var r = t.max - t.min,
                            i = Object(o.u)(e.min, e.max - r, n)
                          return { min: i, max: i + r }
                        })(
                          t.visualElement.targetBox[e],
                          t.constraintsBox[e],
                          i[e]
                        ),
                        a = r.min,
                        s = r.max
                      t.visualElement.setAxisTarget(e, a, s)
                    }
                  })
              }
            }),
            (t.prototype.mount = function (t) {
              var e = this,
                n = dn(t.getInstance(), 'pointerdown', function (t) {
                  var n = e.props,
                    r = n.drag,
                    i = n.dragListener
                  r && (void 0 === i || i) && e.start(t)
                }),
                r = Je(window, 'resize', function () {
                  e.scalePoint()
                }),
                i = t.onLayoutUpdate(function () {
                  e.isDragging && e.resolveDragConstraints()
                }),
                o = t.prevSnapshot
              return (
                (null === o || void 0 === o ? void 0 : o.isDragging) &&
                  this.start(wn, { cursorProgress: o.cursorProgress }),
                function () {
                  null === n || void 0 === n || n(),
                    null === r || void 0 === r || r(),
                    null === i || void 0 === i || i(),
                    e.cancelDrag()
                }
              )
            }),
            t
          )
        })()
      function Pn(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t)
      }
      var An = function (t) {
          return function (e) {
            return t(e), null
          }
        },
        Vn = An(function (t) {
          var e = t.visualElement
          return (function (t, e) {
            var n = t.dragControls,
              i = Object(u.useContext)(Le).transformPagePoint,
              o = re(function () {
                return new Sn({ visualElement: e })
              })
            o.updateProps(
              Object(r.a)(Object(r.a)({}, t), { transformPagePoint: i })
            ),
              Object(u.useEffect)(
                function () {
                  return n && n.subscribe(o)
                },
                [o]
              ),
              Object(u.useEffect)(function () {
                return o.mount(e)
              }, [])
          })(Object(r.d)(t, ['visualElement']), e)
        }),
        Tn = {
          key: 'drag',
          shouldRender: function (t) {
            return !!t.drag || !!t.dragControls
          },
          getComponent: function () {
            return Vn
          },
        }
      function Ln(t) {
        return Object(u.useEffect)(function () {
          return function () {
            return t()
          }
        }, [])
      }
      var Bn = function (t, e) {
          return !!e && (t === e || Bn(t, e.parentElement))
        },
        kn = ['whileHover', 'whileTap', 'whileDrag'],
        Rn = function (t) {
          return kn.indexOf(t) + 1
        },
        Mn = Rn('whileTap')
      var Dn = Rn('whileHover'),
        Un = function (t) {
          return function (e, n) {
            Qe(e) && t(e, n)
          }
        }
      function Fn(t, e) {
        !(function (t, e) {
          var n = t.onPan,
            r = t.onPanStart,
            i = t.onPanEnd,
            o = t.onPanSessionStart,
            a = n || r || i || o,
            s = Object(u.useRef)(null),
            c = Object(u.useContext)(Le).transformPagePoint,
            l = {
              onSessionStart: o,
              onStart: r,
              onMove: n,
              onEnd: function (t, e) {
                ;(s.current = null), i && i(t, e)
              },
            }
          Object(u.useEffect)(function () {
            null !== s.current && s.current.updateHandlers(l)
          }),
            pn(
              e,
              'pointerdown',
              a &&
                function (t) {
                  s.current = new hn(t, l, { transformPagePoint: c })
                }
            ),
            Ln(function () {
              return s.current && s.current.end()
            })
        })(t, e),
          (function (t, e) {
            var n = t.onTap,
              r = t.onTapStart,
              i = t.onTapCancel,
              a = t.whileTap,
              s = n || r || i || a,
              c = Object(u.useRef)(!1),
              l = Object(u.useRef)(null)
            function f() {
              var t
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null)
            }
            a && q(e, a, Mn)
            var d = Object(u.useRef)(null)
            ;(d.current = function (t, r) {
              var o = e.getInstance()
              if ((f(), c.current && o)) {
                ;(c.current = !1), a && J(e, Mn)
                var s = Ke(!0)
                s &&
                  (s(),
                  Bn(o, t.target)
                    ? null === n || void 0 === n || n(t, r)
                    : null === i || void 0 === i || i(t, r))
              }
            }),
              pn(
                e,
                'pointerdown',
                s
                  ? function (t, n) {
                      f(),
                        (l.current = Object(o.v)(
                          dn(window, 'pointerup', function (t, e) {
                            var n
                            return null === (n = d.current) || void 0 === n
                              ? void 0
                              : n.call(d, t, e)
                          }),
                          dn(window, 'pointercancel', function (t, e) {
                            var n
                            return null === (n = d.current) || void 0 === n
                              ? void 0
                              : n.call(d, t, e)
                          })
                        )),
                        e.getInstance() &&
                          !c.current &&
                          ((c.current = !0),
                          null === r || void 0 === r || r(t, n),
                          a && K(e, Mn))
                    }
                  : void 0
              ),
              Ln(f)
          })(t, e),
          (function (t, e) {
            var n = t.whileHover,
              r = t.onHoverStart,
              i = t.onHoverEnd
            n && q(e, n, Dn),
              pn(
                e,
                'pointerenter',
                Un(function (t, i) {
                  null === r || void 0 === r || r(t, i), n && K(e, Dn)
                })
              ),
              pn(
                e,
                'pointerleave',
                Un(function (t, r) {
                  null === i || void 0 === i || i(t, r), n && J(e, Dn)
                })
              )
          })(t, e)
      }
      var In = [
          'onPan',
          'onPanStart',
          'onPanEnd',
          'onPanSessionStart',
          'onTap',
          'onTapStart',
          'onTapCancel',
          'whileTap',
          'whileHover',
          'onHoverStart',
          'onHoverEnd',
        ],
        Hn = An(function (t) {
          var e = t.visualElement
          Fn(Object(r.d)(t, ['visualElement']), e)
        }),
        Yn = {
          key: 'gestures',
          shouldRender: function (t) {
            return In.some(function (e) {
              return t.hasOwnProperty(e)
            })
          },
          getComponent: function () {
            return Hn
          },
        },
        Xn = (function () {
          function t() {
            ;(this.hasMounted = !1),
              (this.pendingAnimations = []),
              (this.subscribers = new Set())
          }
          return (
            (t.prototype.subscribe = function (t) {
              var e = this
              return (
                this.subscribers.add(t),
                function () {
                  return e.subscribers.delete(t)
                }
              )
            }),
            (t.prototype.start = function (t, e) {
              var n = this
              if (this.hasMounted) {
                var r = []
                return (
                  this.subscribers.forEach(function (n) {
                    var i = Z(n, t, { transitionOverride: e })
                    r.push(i)
                  }),
                  Promise.all(r)
                )
              }
              return new Promise(function (r) {
                n.pendingAnimations.push({ animation: [t, e], resolve: r })
              })
            }),
            (t.prototype.set = function (t) {
              return (
                Object(a.a)(
                  this.hasMounted,
                  'controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.'
                ),
                this.subscribers.forEach(function (e) {
                  z(e, t)
                })
              )
            }),
            (t.prototype.stop = function () {
              this.subscribers.forEach(function (t) {
                !(function (t) {
                  t.forEachValue(function (t) {
                    return t.stop()
                  })
                })(t)
              })
            }),
            (t.prototype.mount = function () {
              var t = this
              ;(this.hasMounted = !0),
                this.pendingAnimations.forEach(function (e) {
                  var n = e.animation,
                    i = e.resolve
                  t.start.apply(t, Object(r.e)(n)).then(i)
                })
            }),
            (t.prototype.unmount = function () {
              ;(this.hasMounted = !1), this.stop()
            }),
            t
          )
        })(),
        zn = An(function (t) {
          var e = t.animate,
            n = t.exit,
            i = t.visualElement,
            o = Object(r.c)(Ie(), 2),
            a = o[0],
            s = o[1],
            c = Object(u.useContext)(me),
            l = Object(u.useRef)(!1),
            f =
              void 0 !== (null === c || void 0 === c ? void 0 : c.custom)
                ? c.custom
                : t.custom
          Object(u.useEffect)(
            function () {
              a
                ? !l.current ||
                  !e ||
                  'boolean' === typeof e ||
                  e instanceof Xn ||
                  Z(i, e)
                : (!l.current && n && Z(i, n, { custom: f }).then(s),
                  (l.current = !0)),
                a && (l.current = !1)
            },
            [e, f, n, a, s, t]
          )
        }),
        Nn = {
          key: 'exit',
          shouldRender: function (t) {
            return !!t.exit && !Be(t)
          },
          getComponent: function () {
            return zn
          },
        }
      function Wn(t, e) {
        void 0 === e && (e = !1)
        t.transition
        var n = t.transitionEnd,
          i = Object(r.d)(t, ['transition', 'transitionEnd'])
        return e ? Object(r.a)(Object(r.a)({}, i), n) : i
      }
      var Gn = function (t) {
        var e,
          n = t instanceof d ? t.get() : t
        return Array.from(new Set((e = n) ? (Array.isArray(e) ? e : [e]) : []))
      }
      var Zn = {
          shouldRender: function (t) {
            return void 0 !== t.animate && !F(t.animate) && !Ge(t.animate)
          },
          Component: An(function (t) {
            var e = t.animate
            return (function (t, e, n) {
              var i = Object(u.useRef)(!0),
                o = Object(u.useRef)(null)
              o.current || (o.current = Wn(e, !0)),
                Object(u.useEffect)(
                  function () {
                    var a,
                      s,
                      u = {},
                      c = Wn(e),
                      l = Wn(e, !0)
                    for (var f in c) {
                      var d =
                          i.current &&
                          (!t.hasValue(f) || t.getValue(f).get() !== l[f]),
                        p = null !== l[f],
                        h =
                          ((a = o.current[f]),
                          void 0 !== (s = l[f]) &&
                            (Array.isArray(a) && Array.isArray(s)
                              ? !(function (t, e) {
                                  if (null === e) return !1
                                  var n = e.length
                                  if (n !== t.length) return !1
                                  for (var r = 0; r < n; r++)
                                    if (e[r] !== t[r]) return !1
                                  return !0
                                })(s, a)
                              : a !== s))
                      p && (h || d) && (u[f] = c[f])
                    }
                    ;(i.current = !1),
                      (o.current = Object(r.a)(Object(r.a)({}, o.current), l)),
                      Object.keys(u).length &&
                        Z(
                          t,
                          Object(r.a)(Object(r.a)({}, u), {
                            transition: e.transition || n,
                            transitionEnd: e.transitionEnd,
                          })
                        )
                  },
                  [e]
                )
            })(t.visualElement, e, t.transition)
          }),
        },
        _n = {
          shouldRender: function (t) {
            return (t.variants && !Ge(t.animate)) || F(t.animate)
          },
          Component: An(function (t) {
            var e = t.animate,
              n = t.inherit,
              r = void 0 === n || n
            return (function (t, e, n, r) {
              var i,
                o = Gn(n),
                a = ye(),
                s =
                  null === (i = a.parent) || void 0 === i
                    ? void 0
                    : i.isMounted,
                c = Object(u.useRef)(!1)
              Object(u.useEffect)(
                function () {
                  var n,
                    i,
                    u = !1
                  r
                    ? ((u = !!s), (o = Gn(a.animate)))
                    : (u =
                        c.current ||
                        ((n = Gn(e)), (i = o), n.join(',') !== i.join(','))),
                    u && Z(t, o),
                    (c.current = !0)
                },
                [o.join(',')]
              )
            })(t.visualElement, t.initial, e, r)
          }),
        },
        $n = {
          shouldRender: function (t) {
            return Ge(t.animate)
          },
          Component: An(function (t) {
            var e = t.animate
            return (function (t, e) {
              var n = Object(u.useMemo)(
                function () {
                  return e.subscribe(t)
                },
                [e]
              )
              Ln(function () {
                return null === n || void 0 === n ? void 0 : n()
              })
            })(t.visualElement, e)
          }),
        },
        qn = {
          key: 'animation',
          shouldRender: function () {
            return !0
          },
          getComponent: function (t) {
            return Zn.shouldRender(t)
              ? Zn.Component
              : _n.shouldRender(t)
              ? _n.Component
              : $n.shouldRender(t)
              ? $n.Component
              : void 0
          },
        }
      var Kn = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.frameTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
            (e.stopAxisAnimation = { x: void 0, y: void 0 }),
            (e.animate = function (t, n, i) {
              void 0 === i && (i = {})
              var o = i.originBox,
                a = i.targetBox,
                s = i.visibilityAction,
                u = i.shouldStackAnimate,
                c = Object(r.d)(i, [
                  'originBox',
                  'targetBox',
                  'visibilityAction',
                  'shouldStackAnimate',
                ]),
                l = e.props,
                f = l.visualElement,
                d = l.layout
              if (!1 === u) return e.safeToRemove()
              var p = Qn((n = o || n), (t = a || t)),
                h = Ht(function (r) {
                  if ('position' === d) {
                    var i = t[r].max - t[r].min
                    n[r].max = n[r].min + i
                  }
                  if (!f.isTargetBoxLocked)
                    return void 0 === s
                      ? p
                        ? e.animateAxis(r, t[r], n[r], c)
                        : f.setAxisTarget(r, t[r].min, t[r].max)
                      : void (s === Ae.Hide ? f.hide() : f.show())
                })
              return (
                f.render(),
                Promise.all(h).then(function () {
                  var t, n
                  null === (n = (t = e.props).onLayoutAnimationComplete) ||
                    void 0 === n ||
                    n.call(t),
                    f.isPresent ? (f.presence = Pe.Present) : e.safeToRemove()
                })
              )
            }),
            e
          )
        }
        return (
          Object(r.b)(e, t),
          (e.prototype.componentDidMount = function () {
            var t = this,
              e = this.props.visualElement
            ;(e.animateMotionValue = S),
              e.enableLayoutProjection(),
              (this.unsubLayoutReady = e.onLayoutUpdate(this.animate)),
              e.updateConfig(
                Object(r.a)(Object(r.a)({}, e.config), {
                  safeToRemove: function () {
                    return t.safeToRemove()
                  },
                })
              )
          }),
          (e.prototype.componentWillUnmount = function () {
            var t = this
            this.unsubLayoutReady(),
              Ht(function (e) {
                var n, r
                return null === (r = (n = t.stopAxisAnimation)[e]) ||
                  void 0 === r
                  ? void 0
                  : r.call(n)
              })
          }),
          (e.prototype.animateAxis = function (t, e, n, r) {
            var i,
              a,
              s = void 0 === r ? {} : r,
              u = s.transition,
              c = s.crossfadeOpacity
            null === (a = (i = this.stopAxisAnimation)[t]) ||
              void 0 === a ||
              a.call(i)
            var l,
              f = this.props.visualElement,
              d = this.frameTarget[t],
              p = f.axisProgress[t]
            p.clearListeners(),
              p.set(0),
              p.set(0),
              c && ((l = this.createCrossfadeAnimation(c)), f.show())
            var h = function () {
              var r = p.get() / 1e3
              !(function (t, e, n, r) {
                ;(t.min = Object(o.u)(e.min, n.min, r)),
                  (t.max = Object(o.u)(e.max, n.max, r))
              })(d, n, e, r),
                f.setAxisTarget(t, d.min, d.max),
                null === l || void 0 === l || l(r)
            }
            h(), f.updateLayoutDelta()
            var v = p.onChange(h),
              m = S(
                'x' === t ? 'layoutX' : 'layoutY',
                p,
                1e3,
                u || this.props.transition || er
              ).then(v)
            return (
              (this.stopAxisAnimation[t] = function () {
                p.stop(), v()
              }),
              m
            )
          }),
          (e.prototype.createCrossfadeAnimation = function (t) {
            var e = this.props.visualElement.getValue('opacity', 0)
            return function (n) {
              e.set(rr(Object(o.u)(0, 1, n))), t.set(ir(Object(o.u)(1, 0, n)))
            }
          }),
          (e.prototype.safeToRemove = function () {
            var t, e
            null === (e = (t = this.props).safeToRemove) ||
              void 0 === e ||
              e.call(t)
          }),
          (e.prototype.render = function () {
            return null
          }),
          e
        )
      })(u.Component)
      function Jn(t) {
        var e = Object(r.c)(Ie(), 2)[1]
        return Object(u.createElement)(
          Kn,
          Object(r.a)({}, t, { safeToRemove: e })
        )
      }
      function Qn(t, e) {
        return tr(t.x, e.x) || tr(t.y, e.y)
      }
      function tr(t, e) {
        return t.min !== e.min || t.max !== e.max
      }
      var er = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
      function nr(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(Object(o.w)(t, e, r))
        }
      }
      var rr = nr(0, 0.5, o.k),
        ir = nr(0.5, 0.95, o.t),
        or = {
          key: 'animate-layout',
          shouldRender: function (t) {
            return !!t.layout || !!t.layoutId
          },
          getComponent: function () {
            return Jn
          },
        },
        ar = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            Object(r.b)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.visualElement
              De(e) && e.register(n)
            }),
            (e.prototype.getSnapshotBeforeUpdate = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.visualElement
              return (
                De(e) ? e.syncUpdate() : (n.snapshotBoundingBox(), e.add(n)),
                null
              )
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props,
                e = t.syncLayout,
                n = t.visualElement
              De(e) || e.flush(), n.rebaseTargetBox()
            }),
            (e.prototype.render = function () {
              return null
            }),
            e
          )
        })(c.a.Component)
      function sr(t) {
        var e = Object(u.useContext)(Ue)
        return c.a.createElement(ar, Object(r.a)({}, t, { syncLayout: e }))
      }
      var ur = {
          key: 'measure-layout',
          shouldRender: function (t) {
            return !!t.drag || !!t.layout || !!t.layoutId
          },
          getComponent: function () {
            return sr
          },
        },
        cr = [ur, qn, Tn, Yn, Nn, or],
        lr = {
          useVisualElement: function (t, e, n, i) {
            var o = be(),
              a = re(function () {
                return new (ve(t) ? pe : ee)(o, i)
              })
            a.updateConfig(
              Object(r.a)(
                Object(r.a)(Object(r.a)({}, a.config), {
                  enableHardwareAcceleration: !n,
                }),
                e
              )
            ),
              (a.layoutId = e.layoutId)
            var s = Object(u.useContext)(me),
              c = null === s || s.isPresent
            a.isPresent = void 0 !== e.isPresent ? e.isPresent : c
            var l = null === s || void 0 === s ? void 0 : s.id
            return (
              (a.isPresenceRoot = !o || o.presenceId !== l),
              Object(u.useEffect)(
                function () {
                  if (e.onViewportBoxUpdate)
                    return a.onViewportBoxUpdate(e.onViewportBoxUpdate)
                },
                [e.onViewportBoxUpdate]
              ),
              a
            )
          },
          render: function (t, e, n) {
            var i =
              'string' === typeof t
                ? (function (t) {
                    var e = {}
                    for (var n in t) Oe(n) && (e[n] = t[n])
                    return e
                  })(e)
                : e
            n.clean(), n.build()
            var o = ve(t)
              ? (function (t) {
                  return Object(r.a)(Object(r.a)({}, t.attrs), {
                    style: Object(r.a)({}, t.reactStyle),
                  })
                })(n)
              : (function (t, e) {
                  var n = e.drag,
                    i = {
                      style: Object(r.a)(
                        Object(r.a)(Object(r.a)({}, t.reactStyle), t.style),
                        t.vars
                      ),
                    }
                  return (
                    n &&
                      ((i.draggable = !1),
                      (i.style.userSelect = 'none'),
                      (i.style.touchAction =
                        !0 === n ? 'none' : 'pan-' + ('x' === n ? 'y' : 'x'))),
                    i
                  )
                })(n, e)
            return Object(u.createElement)(
              t,
              Object(r.a)(Object(r.a)(Object(r.a)({}, i), { ref: n.ref }), o)
            )
          },
        }
      function fr(t) {
        var e = Object(r.a)(Object(r.a)({}, lr), { defaultFeatures: t })
        var n = new Map()
        return new Proxy(
          {
            custom: function (t) {
              return Ze(t, e)
            },
          },
          {
            get: function (t, r) {
              return 'custom' === r
                ? t.custom
                : (n.has(r) || n.set(r, Ze(r, e)), n.get(r))
            },
          }
        )
      }
      var dr = fr(cr)
      var pr = 0
      function hr() {
        var t = pr
        return pr++, t
      }
      var vr = function (t) {
        var e = t.children,
          n = t.initial,
          r = t.isPresent,
          i = t.onExitComplete,
          o = t.custom,
          a = t.presenceAffectsLayout,
          s = re(mr),
          c = re(hr),
          l = Object(u.useMemo)(
            function () {
              return {
                id: c,
                initial: n,
                isPresent: r,
                custom: o,
                onExitComplete: function (t) {
                  s.set(t, !0)
                  var e = !0
                  s.forEach(function (t) {
                    t || (e = !1)
                  }),
                    e && (null === i || void 0 === i || i())
                },
                register: function (t) {
                  return (
                    s.set(t, !1),
                    function () {
                      return s.delete(t)
                    }
                  )
                },
              }
            },
            a ? void 0 : [r]
          )
        return (
          Object(u.useMemo)(
            function () {
              s.forEach(function (t, e) {
                return s.set(e, !1)
              })
            },
            [r]
          ),
          Object(u.createElement)(me.Provider, { value: l }, e)
        )
      }
      function mr() {
        return new Map()
      }
      function gr(t) {
        return t.key || ''
      }
      var yr = function (t) {
        var e = t.children,
          n = t.custom,
          i = t.initial,
          o = void 0 === i || i,
          a = t.onExitComplete,
          s = t.exitBeforeEnter,
          c = t.presenceAffectsLayout,
          l = void 0 === c || c,
          f = (function () {
            var t = Object(u.useRef)(!1),
              e = Object(r.c)(Object(u.useState)(0), 2),
              n = e[0],
              i = e[1]
            return (
              Ln(function () {
                return (t.current = !0)
              }),
              Object(u.useCallback)(
                function () {
                  !t.current && i(n + 1)
                },
                [n]
              )
            )
          })(),
          d = Object(u.useContext)(Ue)
        De(d) && (f = d.forceUpdate)
        var p = Object(u.useRef)(!0),
          h = (function (t) {
            var e = []
            return (
              u.Children.forEach(t, function (t) {
                Object(u.isValidElement)(t) && e.push(t)
              }),
              e
            )
          })(e),
          v = Object(u.useRef)(h),
          m = Object(u.useRef)(new Map()).current,
          g = Object(u.useRef)(new Set()).current
        if (
          ((function (t, e) {
            t.forEach(function (t) {
              var n = gr(t)
              e.set(n, t)
            })
          })(h, m),
          p.current)
        )
          return (
            (p.current = !1),
            Object(u.createElement)(
              u.Fragment,
              null,
              h.map(function (t) {
                return Object(u.createElement)(
                  vr,
                  {
                    key: gr(t),
                    isPresent: !0,
                    initial: !!o && void 0,
                    presenceAffectsLayout: l,
                  },
                  t
                )
              })
            )
          )
        for (
          var y = Object(r.e)(h),
            b = v.current.map(gr),
            x = h.map(gr),
            j = b.length,
            O = 0;
          O < j;
          O++
        ) {
          var E = b[O]
          ;-1 === x.indexOf(E) ? g.add(E) : g.delete(E)
        }
        return (
          s && g.size && (y = []),
          g.forEach(function (t) {
            if (-1 === x.indexOf(t)) {
              var e = m.get(t)
              if (e) {
                var r = b.indexOf(t)
                y.splice(
                  r,
                  0,
                  Object(u.createElement)(
                    vr,
                    {
                      key: gr(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        m.delete(t), g.delete(t)
                        var e = v.current.findIndex(function (e) {
                          return e.key === t
                        })
                        v.current.splice(e, 1),
                          g.size || ((v.current = h), f(), a && a())
                      },
                      custom: n,
                      presenceAffectsLayout: l,
                    },
                    e
                  )
                )
              }
            }
          }),
          (y = y.map(function (t) {
            var e = t.key
            return g.has(e)
              ? t
              : Object(u.createElement)(
                  vr,
                  { key: gr(t), isPresent: !0, presenceAffectsLayout: l },
                  t
                )
          })),
          (v.current = y),
          Object(u.createElement)(
            u.Fragment,
            null,
            g.size
              ? y
              : y.map(function (t) {
                  return Object(u.cloneElement)(t)
                })
          )
        )
      }
      function br(t, e) {
        return e && t !== e.lead
          ? { visibilityAction: Ae.Hide }
          : e &&
            t.presence !== Pe.Entering &&
            t === e.lead &&
            e.lead !== e.prevLead
          ? { visibilityAction: Ae.Show }
          : (t.presence === Pe.Entering
              ? (n = null === e || void 0 === e ? void 0 : e.getFollowOrigin())
              : t.presence === Pe.Exiting &&
                (r = null === e || void 0 === e ? void 0 : e.getFollowTarget()),
            { originBox: n, targetBox: r })
        var n, r
      }
      function xr(t, e) {
        var n,
          r,
          i,
          o = {},
          a = e && e.lead,
          s = null === a || void 0 === a ? void 0 : a.presence
        return (
          e && t === a
            ? t.presence === Pe.Entering
              ? (o.originBox = e.getFollowOrigin())
              : t.presence === Pe.Exiting && (o.targetBox = e.getFollowTarget())
            : e &&
              t === e.follow &&
              ((o.transition = e.getLeadTransition()),
              s === Pe.Entering
                ? (o.targetBox = e.getLeadTarget())
                : s === Pe.Exiting && (o.originBox = e.getLeadOrigin())),
          (null === (n = null === e || void 0 === e ? void 0 : e.follow) ||
          void 0 === n
            ? void 0
            : n.isPresenceRoot) ||
          (null === a || void 0 === a ? void 0 : a.isPresenceRoot)
            ? (e && t !== a
                ? e && t === e.follow
                  ? a &&
                    s !== Pe.Entering &&
                    s === Pe.Exiting &&
                    (o.crossfadeOpacity =
                      null ===
                        (i = null === e || void 0 === e ? void 0 : e.lead) ||
                      void 0 === i
                        ? void 0
                        : i.getValue('opacity', 1))
                  : (o.visibilityAction = Ae.Hide)
                : t.presence === Pe.Entering &&
                  (o.crossfadeOpacity =
                    null ===
                      (r = null === e || void 0 === e ? void 0 : e.follow) ||
                    void 0 === r
                      ? void 0
                      : r.getValue('opacity', 0)),
              o)
            : o
        )
      }
      var jr = (function () {
        function t() {
          ;(this.order = []), (this.hasChildren = !1)
        }
        return (
          (t.prototype.add = function (t) {
            var e
            if ((this.order.push(t), this.snapshot)) {
              ;(t.prevSnapshot = this.snapshot),
                (t.prevViewportBox = this.snapshot.boundingBox)
              var n = this.snapshot.latestMotionValues
              for (var r in n)
                t.hasValue(r)
                  ? null === (e = t.getValue(r)) || void 0 === e || e.set(n[r])
                  : t.addValue(r, p(n[r]))
            }
            this.hasChildren = !0
          }),
          (t.prototype.remove = function (t) {
            var e = this.order.findIndex(function (e) {
              return t === e
            })
            ;-1 !== e && this.order.splice(e, 1)
          }),
          (t.prototype.updateLeadAndFollow = function () {
            ;(this.prevLead = this.lead), (this.prevFollow = this.follow)
            var t = Object(r.c)(
                (function (t, e) {
                  for (
                    var n = Object(r.c)(e, 2),
                      i = n[0],
                      o = n[1],
                      a = void 0,
                      s = 0,
                      u = void 0,
                      c = t.length,
                      l = !1,
                      f = c - 1;
                    f >= 0;
                    f--
                  ) {
                    var d = t[f]
                    if ((f === c - 1 && (l = d.isPresent), l)) a = d
                    else {
                      var p = t[f - 1]
                      p && p.isPresent && (a = d)
                    }
                    if (a) {
                      s = f
                      break
                    }
                  }
                  if ((a || (a = t[0]), (u = t[s - 1]), a))
                    for (f = s - 1; f >= 0; f--)
                      if ((d = t[f]).isPresent) {
                        u = d
                        break
                      }
                  return (
                    a !== i &&
                      !l &&
                      u === o &&
                      t.find(function (t) {
                        return t === i
                      }) &&
                      (a = i),
                    [a, u]
                  )
                })(this.order, [this.lead, this.follow]),
                2
              ),
              e = t[0],
              n = t[1]
            ;(this.lead = e), (this.follow = n)
          }),
          (t.prototype.updateSnapshot = function () {
            if (this.lead) {
              var t = {
                boundingBox: this.lead.prevViewportBox,
                latestMotionValues: {},
              }
              this.lead.forEachValue(function (e, n) {
                var r = e.get()
                ft(r) || (t.latestMotionValues[n] = r)
              })
              var e = Cn.get(this.lead)
              e &&
                e.isDragging &&
                ((t.isDragging = !0), (t.cursorProgress = e.cursorProgress)),
                (this.snapshot = t)
            }
          }),
          (t.prototype.isLeadPresent = function () {
            var t
            return (
              this.lead &&
              (null === (t = this.lead) || void 0 === t
                ? void 0
                : t.presence) !== Pe.Exiting
            )
          }),
          (t.prototype.getFollowOrigin = function () {
            var t
            return this.follow
              ? this.follow.prevViewportBox
              : null === (t = this.snapshot) || void 0 === t
              ? void 0
              : t.boundingBox
          }),
          (t.prototype.getFollowTarget = function () {
            var t
            return null === (t = this.follow) || void 0 === t ? void 0 : t.box
          }),
          (t.prototype.getLeadOrigin = function () {
            var t
            return null === (t = this.lead) || void 0 === t
              ? void 0
              : t.prevViewportBox
          }),
          (t.prototype.getLeadTarget = function () {
            var t
            return null === (t = this.lead) || void 0 === t ? void 0 : t.box
          }),
          (t.prototype.getLeadTransition = function () {
            var t
            return null === (t = this.lead) || void 0 === t
              ? void 0
              : t.config.transition
          }),
          t
        )
      })()
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.children = new Set()),
            (e.stacks = new Map()),
            (e.hasMounted = !1),
            (e.updateScheduled = !1),
            (e.renderScheduled = !1),
            (e.syncContext = Object(r.a)(Object(r.a)({}, Me()), {
              syncUpdate: function (t) {
                return e.scheduleUpdate(t)
              },
              forceUpdate: function () {
                ;(e.syncContext = Object(r.a)({}, e.syncContext)),
                  e.scheduleUpdate(!0)
              },
              register: function (t) {
                return e.addChild(t)
              },
              remove: function (t) {
                return e.removeChild(t)
              },
            })),
            e
          )
        }
        Object(r.b)(e, t),
          (e.prototype.componentDidMount = function () {
            ;(this.hasMounted = !0), this.updateStacks()
          }),
          (e.prototype.componentDidUpdate = function () {
            this.startLayoutAnimation()
          }),
          (e.prototype.shouldComponentUpdate = function () {
            return (this.renderScheduled = !0), !0
          }),
          (e.prototype.startLayoutAnimation = function () {
            var t = this
            this.renderScheduled = this.updateScheduled = !1
            var e = this.props.type
            this.children.forEach(function (t) {
              t.isPresent
                ? t.presence !== Pe.Entering &&
                  (t.presence =
                    t.presence === Pe.Exiting ? Pe.Entering : Pe.Present)
                : (t.presence = Pe.Exiting)
            }),
              this.updateStacks()
            var n = 'crossfade' === e ? xr : br,
              r = {
                measureLayout: function (t) {
                  return t.measureLayout()
                },
                layoutReady: function (e) {
                  var r = e.layoutId
                  e.layoutReady(n(e, t.getStack(r)))
                },
              }
            this.children.forEach(function (e) {
              return t.syncContext.add(e)
            }),
              this.syncContext.flush(r),
              this.stacks.forEach(function (t) {
                return (t.snapshot = void 0)
              })
          }),
          (e.prototype.updateStacks = function () {
            this.stacks.forEach(function (t) {
              return t.updateLeadAndFollow()
            })
          }),
          (e.prototype.scheduleUpdate = function (t) {
            void 0 === t && (t = !1),
              (!t && this.updateScheduled) ||
                ((this.updateScheduled = !0),
                this.children.forEach(function (t) {
                  return t.snapshotBoundingBox()
                }),
                this.stacks.forEach(function (t) {
                  return t.updateSnapshot()
                }),
                (!t && this.renderScheduled) ||
                  ((this.renderScheduled = !0), this.forceUpdate()))
          }),
          (e.prototype.addChild = function (t) {
            this.children.add(t),
              this.addToStack(t),
              (t.presence = this.hasMounted ? Pe.Entering : Pe.Present)
          }),
          (e.prototype.removeChild = function (t) {
            this.scheduleUpdate(),
              this.children.delete(t),
              this.removeFromStack(t)
          }),
          (e.prototype.addToStack = function (t) {
            var e = this.getStack(t.layoutId)
            null === e || void 0 === e || e.add(t)
          }),
          (e.prototype.removeFromStack = function (t) {
            var e = this.getStack(t.layoutId)
            null === e || void 0 === e || e.remove(t)
          }),
          (e.prototype.getStack = function (t) {
            if (void 0 !== t)
              return (
                !this.stacks.has(t) && this.stacks.set(t, new jr()),
                this.stacks.get(t)
              )
          }),
          (e.prototype.render = function () {
            return Object(u.createElement)(
              Ue.Provider,
              { value: this.syncContext },
              this.props.children
            )
          })
      })(u.Component)
      function Or() {
        return {
          scrollX: p(0),
          scrollY: p(0),
          scrollXProgress: p(0),
          scrollYProgress: p(0),
        }
      }
      Or()
      var Er = p(null)
      if ('undefined' !== typeof window)
        if (window.matchMedia) {
          var wr = window.matchMedia('(prefers-reduced-motion)'),
            Cr = function () {
              return Er.set(wr.matches)
            }
          wr.addListener(Cr), Cr()
        } else Er.set(!1)
      function Sr() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        Object(a.b)(
          t.length > 1,
          'useCycle syntax has changed. `useCycle([0, 1, 2])` becomes `useCycle(0, 1, 2)`'
        )
        var n = Object(u.useRef)(0),
          i = Object(r.c)(Object(u.useState)(t[n.current]), 2),
          s = i[0],
          c = i[1]
        return [
          s,
          function (e) {
            ;(n.current =
              'number' !== typeof e
                ? Object(o.y)(0, t.length, n.current + 1)
                : e),
              c(t[n.current])
          },
        ]
      }
      !(function () {
        function t() {
          this.componentControls = new Set()
        }
        ;(t.prototype.subscribe = function (t) {
          var e = this
          return (
            this.componentControls.add(t),
            function () {
              return e.componentControls.delete(t)
            }
          )
        }),
          (t.prototype.start = function (t, e) {
            this.componentControls.forEach(function (n) {
              n.start(t.nativeEvent || t, e)
            })
          }),
          (t.prototype.updateConstraints = function () {
            this.componentControls.forEach(function (t) {
              t.prepareBoundingBox(), t.resolveDragConstraints()
            })
          })
      })()
      !(function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.initialState = {}), e
        }
        Object(r.b)(e, t),
          (e.prototype.updateLayoutDelta = function () {}),
          (e.prototype.build = function () {}),
          (e.prototype.clean = function () {}),
          (e.prototype.makeTargetAnimatable = function (t) {
            var e = t.transition,
              n = t.transitionEnd,
              i = Object(r.d)(t, ['transition', 'transitionEnd'])
            return (
              N(this, i, G(i, e || {}, this)),
              Object(r.a)({ transition: e, transitionEnd: n }, i)
            )
          }),
          (e.prototype.getBoundingBox = function () {
            return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
          }),
          (e.prototype.readNativeValue = function (t) {
            return this.initialState[t] || 0
          }),
          (e.prototype.render = function () {
            this.build()
          })
      })(tt)
    },
  },
])
