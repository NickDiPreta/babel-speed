_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    '/0+H': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.isInAmpMode = u),
        (t.useAmp = function () {
          return u(a.default.useContext(o.AmpStateContext))
        })
      var r,
        a = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        o = n('lwAK')
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          a = void 0 !== r && r,
          o = e.hasQuery,
          u = void 0 !== o && o
        return n || (a && u)
      }
    },
    '3aas': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/lease-upload/[...slug]',
        function () {
          return n('L3Pv')
        },
      ])
    },
    '3bhu': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('q1tI'),
        a = n.n(r),
        o = n('8Kt/'),
        u = n.n(o),
        i = a.a.createElement,
        c = function (e) {
          var t = e.title
          return i(
            'div',
            null,
            i(
              u.a,
              null,
              i('title', null, t),
              i('link', { rel: 'icon', href: '/static/perchlogo.svg' }),
              i('meta', { charSet: 'utf-8' }),
              i('meta', {
                name: 'viewport',
                content:
                  'initial-scale=1.0, minimum-scale=1.0,width=device-width',
              }),
              i('meta', {
                name: 'description',
                content:
                  "Build credit fast- all it takes is paying your rent. We'll handle the rest.",
              })
            )
          )
        }
    },
    '5fIB': function (e, t, n) {
      var r = n('7eYB')
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e)
      }
    },
    '8Kt/': function (e, t, n) {
      'use strict'
      n('oI91')
      ;(t.__esModule = !0), (t.defaultHead = l), (t.default = void 0)
      var r,
        a = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var t = s()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, a) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, a, o)
                : (n[a] = e[a])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n('q1tI')),
        o = (r = n('Xuae')) && r.__esModule ? r : { default: r },
        u = n('lwAK'),
        i = n('FYa8'),
        c = n('/0+H')
      function s() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              a.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        )
      }
      function f(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t)
              },
              [])
            )
          : e.concat(t)
      }
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function p(e, t) {
        return e
          .reduce(function (e, t) {
            var n = a.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {}
              return function (a) {
                var o = !0
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  var u = a.key.slice(a.key.indexOf('$') + 1)
                  e.has(u) ? (o = !1) : e.add(u)
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type)
                    break
                  case 'meta':
                    for (var i = 0, c = d.length; i < c; i++) {
                      var s = d[i]
                      if (a.props.hasOwnProperty(s))
                        if ('charSet' === s) n.has(s) ? (o = !1) : n.add(s)
                        else {
                          var l = a.props[s],
                            f = r[s] || new Set()
                          f.has(l) ? (o = !1) : (f.add(l), (r[s] = f))
                        }
                    }
                }
                return o
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t
            return a.default.cloneElement(e, { key: n })
          })
      }
      function h(e) {
        var t = e.children,
          n = (0, a.useContext)(u.AmpStateContext),
          r = (0, a.useContext)(i.HeadManagerContext)
        return a.default.createElement(
          o.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: (0, c.isInAmpMode)(n),
          },
          t
        )
      }
      h.rewind = function () {}
      var m = h
      t.default = m
    },
    L3Pv: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('q1tI'),
        a = n.n(r),
        o = n('nOHt'),
        u = n('3bhu'),
        i = a.a.createElement
      t.default = function () {
        var e = Object(o.useRouter)().query.slug || []
        return i(
          a.a.Fragment,
          null,
          i(u.a, null),
          i('h1', null, 'UserID: ', e.join('/')),
          i('h1', null, 'LeaseID: ', e.join('/'))
        )
      }
    },
    Xuae: function (e, t, n) {
      'use strict'
      var r = n('mPvQ'),
        a = n('/GRZ'),
        o = n('i2R6'),
        u = (n('qXWd'), n('48fX')),
        i = n('tCBg'),
        c = n('T0f4')
      function s(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = c(e)
          if (t) {
            var a = c(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return i(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var l = n('q1tI'),
        f = (function (e) {
          u(n, e)
          var t = s(n)
          function n(e) {
            var o
            return (
              a(this, n),
              ((o = t.call(this, e))._hasHeadManager = void 0),
              (o.emitChange = function () {
                o._hasHeadManager &&
                  o.props.headManager.updateHead(
                    o.props.reduceComponentsToState(
                      r(o.props.headManager.mountedInstances),
                      o.props
                    )
                  )
              }),
              (o._hasHeadManager =
                o.props.headManager && o.props.headManager.mountedInstances),
              o
            )
          }
          return (
            o(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            n
          )
        })(l.Component)
      t.default = f
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
    },
    lwAK: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var a = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      t.AmpStateContext = a
    },
    mPvQ: function (e, t, n) {
      var r = n('5fIB'),
        a = n('rlHP'),
        o = n('KckH'),
        u = n('kG2m')
      e.exports = function (e) {
        return r(e) || a(e) || o(e) || u()
      }
    },
    oI91: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      }
    },
  },
  [['3aas', 0, 2, 1]],
])
