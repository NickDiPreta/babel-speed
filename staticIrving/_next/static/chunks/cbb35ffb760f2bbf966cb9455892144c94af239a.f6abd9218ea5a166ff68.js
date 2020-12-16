;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [3],
  {
    '/0+H': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.isInAmpMode = s),
        (t.useAmp = function () {
          return s(r.default.useContext(o.AmpStateContext))
        })
      var i,
        r = (i = n('q1tI')) && i.__esModule ? i : { default: i },
        o = n('lwAK')
      function s() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          i = e.hybrid,
          r = void 0 !== i && i,
          o = e.hasQuery,
          s = void 0 !== o && o
        return n || (r && s)
      }
    },
    '3bhu': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var i = n('q1tI'),
        r = n.n(i),
        o = n('8Kt/'),
        s = n.n(o),
        a = r.a.createElement,
        l = function (e) {
          var t = e.title
          return a(
            'div',
            null,
            a(
              s.a,
              null,
              a('title', null, t),
              a('link', { rel: 'icon', href: '/static/perchlogo.svg' }),
              a('meta', { charSet: 'utf-8' }),
              a('meta', {
                name: 'viewport',
                content:
                  'initial-scale=1.0, minimum-scale=1.0,width=device-width',
              }),
              a('meta', {
                name: 'description',
                content:
                  "Build credit fast- all it takes is paying your rent. We'll handle the rest.",
              })
            )
          )
        }
    },
    '3niX': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.flush = function () {
          var e = o.cssRules()
          return o.flush(), e
        }),
        (t.default = void 0)
      var i,
        r = n('q1tI')
      var o = new ((i = n('SevZ')) && i.__esModule
          ? i
          : { default: i }
        ).default(),
        s = (function (e) {
          var t, n
          function i(t) {
            var n
            return ((n = e.call(this, t) || this).prevProps = {}), n
          }
          ;(n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (i.dynamic = function (e) {
              return e
                .map(function (e) {
                  var t = e[0],
                    n = e[1]
                  return o.computeId(t, n)
                })
                .join(' ')
            })
          var r = i.prototype
          return (
            (r.shouldComponentUpdate = function (e) {
              return (
                this.props.id !== e.id ||
                String(this.props.dynamic) !== String(e.dynamic)
              )
            }),
            (r.componentWillUnmount = function () {
              o.remove(this.props)
            }),
            (r.render = function () {
              return (
                this.shouldComponentUpdate(this.prevProps) &&
                  (this.prevProps.id && o.remove(this.prevProps),
                  o.add(this.props),
                  (this.prevProps = this.props)),
                null
              )
            }),
            i
          )
        })(r.Component)
      t.default = s
    },
    '5fIB': function (e, t, n) {
      var i = n('7eYB')
      e.exports = function (e) {
        if (Array.isArray(e)) return i(e)
      }
    },
    '6FwJ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var i = n('MX0m'),
        r = n.n(i),
        o = n('q1tI'),
        s = n.n(o).a.createElement,
        a = function () {
          return s(
            'div',
            { className: 'jsx-2481942636' },
            s('img', {
              src: '/static/perchlogo.svg',
              className: 'jsx-2481942636',
            }),
            s(r.a, { id: '2481942636' }, [
              'img.jsx-2481942636{height:24px;width:87px;}',
            ])
          )
        }
    },
    '8Kt/': function (e, t, n) {
      'use strict'
      n('oI91')
      ;(t.__esModule = !0), (t.defaultHead = u), (t.default = void 0)
      var i,
        r = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var t = c()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, r) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, r, o)
                : (n[r] = e[r])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n('q1tI')),
        o = (i = n('Xuae')) && i.__esModule ? i : { default: i },
        s = n('lwAK'),
        a = n('FYa8'),
        l = n('/0+H')
      function c() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (c = function () {
            return e
          }),
          e
        )
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [r.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              r.default.createElement('meta', {
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
          : t.type === r.default.Fragment
          ? e.concat(
              r.default.Children.toArray(t.props.children).reduce(function (
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
            var n = r.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                i = {}
              return function (r) {
                var o = !0
                if (
                  r.key &&
                  'number' !== typeof r.key &&
                  r.key.indexOf('$') > 0
                ) {
                  var s = r.key.slice(r.key.indexOf('$') + 1)
                  e.has(s) ? (o = !1) : e.add(s)
                }
                switch (r.type) {
                  case 'title':
                  case 'base':
                    t.has(r.type) ? (o = !1) : t.add(r.type)
                    break
                  case 'meta':
                    for (var a = 0, l = d.length; a < l; a++) {
                      var c = d[a]
                      if (r.props.hasOwnProperty(c))
                        if ('charSet' === c) n.has(c) ? (o = !1) : n.add(c)
                        else {
                          var u = r.props[c],
                            f = i[c] || new Set()
                          f.has(u) ? (o = !1) : (f.add(u), (i[c] = f))
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
            return r.default.cloneElement(e, { key: n })
          })
      }
      function h(e) {
        var t = e.children,
          n = (0, r.useContext)(s.AmpStateContext),
          i = (0, r.useContext)(a.HeadManagerContext)
        return r.default.createElement(
          o.default,
          {
            reduceComponentsToState: p,
            headManager: i,
            inAmpMode: (0, l.isInAmpMode)(n),
          },
          t
        )
      }
      h.rewind = function () {}
      var m = h
      t.default = m
    },
    '8oxB': function (e, t) {
      var n,
        i,
        r = (e.exports = {})
      function o() {
        throw new Error('setTimeout has not been defined')
      }
      function s() {
        throw new Error('clearTimeout has not been defined')
      }
      function a(e) {
        if (n === setTimeout) return setTimeout(e, 0)
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0)
        try {
          return n(e, 0)
        } catch (t) {
          try {
            return n.call(null, e, 0)
          } catch (t) {
            return n.call(this, e, 0)
          }
        }
      }
      !(function () {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : o
        } catch (e) {
          n = o
        }
        try {
          i = 'function' === typeof clearTimeout ? clearTimeout : s
        } catch (e) {
          i = s
        }
      })()
      var l,
        c = [],
        u = !1,
        f = -1
      function d() {
        u &&
          l &&
          ((u = !1), l.length ? (c = l.concat(c)) : (f = -1), c.length && p())
      }
      function p() {
        if (!u) {
          var e = a(d)
          u = !0
          for (var t = c.length; t; ) {
            for (l = c, c = []; ++f < t; ) l && l[f].run()
            ;(f = -1), (t = c.length)
          }
          ;(l = null),
            (u = !1),
            (function (e) {
              if (i === clearTimeout) return clearTimeout(e)
              if ((i === s || !i) && clearTimeout)
                return (i = clearTimeout), clearTimeout(e)
              try {
                i(e)
              } catch (t) {
                try {
                  return i.call(null, e)
                } catch (t) {
                  return i.call(this, e)
                }
              }
            })(e)
        }
      }
      function h(e, t) {
        ;(this.fun = e), (this.array = t)
      }
      function m() {}
      ;(r.nextTick = function (e) {
        var t = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        c.push(new h(e, t)), 1 !== c.length || u || a(p)
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array)
        }),
        (r.title = 'browser'),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ''),
        (r.versions = {}),
        (r.on = m),
        (r.addListener = m),
        (r.once = m),
        (r.off = m),
        (r.removeListener = m),
        (r.removeAllListeners = m),
        (r.emit = m),
        (r.prependListener = m),
        (r.prependOnceListener = m),
        (r.listeners = function (e) {
          return []
        }),
        (r.binding = function (e) {
          throw new Error('process.binding is not supported')
        }),
        (r.cwd = function () {
          return '/'
        }),
        (r.chdir = function (e) {
          throw new Error('process.chdir is not supported')
        }),
        (r.umask = function () {
          return 0
        })
    },
    '9kyW': function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n)
        return t >>> 0
      }
    },
    MX0m: function (e, t, n) {
      e.exports = n('3niX')
    },
    SevZ: function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0), (t.default = void 0)
      var i = o(n('9kyW')),
        r = o(n('bVZc'))
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var s = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            n = t.styleSheet,
            i = void 0 === n ? null : n,
            o = t.optimizeForSpeed,
            s = void 0 !== o && o,
            a = t.isBrowser,
            l = void 0 === a ? 'undefined' !== typeof window : a
          ;(this._sheet =
            i || new r.default({ name: 'styled-jsx', optimizeForSpeed: s })),
            this._sheet.inject(),
            i &&
              'boolean' === typeof s &&
              (this._sheet.setOptimizeForSpeed(s),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = l),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector())
        }
        var t = e.prototype
        return (
          (t.add = function (e) {
            var t = this
            void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (e, t) {
                    return (e[t] = 0), e
                  },
                  {}
                )))
            var n = this.getIdAndRules(e),
              i = n.styleId,
              r = n.rules
            if (i in this._instancesCounts) this._instancesCounts[i] += 1
            else {
              var o = r
                .map(function (e) {
                  return t._sheet.insertRule(e)
                })
                .filter(function (e) {
                  return -1 !== e
                })
              ;(this._indices[i] = o), (this._instancesCounts[i] = 1)
            }
          }),
          (t.remove = function (e) {
            var t = this,
              n = this.getIdAndRules(e).styleId
            if (
              ((function (e, t) {
                if (!e) throw new Error('StyleSheetRegistry: ' + t + '.')
              })(n in this._instancesCounts, 'styleId: `' + n + '` not found'),
              (this._instancesCounts[n] -= 1),
              this._instancesCounts[n] < 1)
            ) {
              var i = this._fromServer && this._fromServer[n]
              i
                ? (i.parentNode.removeChild(i), delete this._fromServer[n])
                : (this._indices[n].forEach(function (e) {
                    return t._sheet.deleteRule(e)
                  }),
                  delete this._indices[n]),
                delete this._instancesCounts[n]
            }
          }),
          (t.update = function (e, t) {
            this.add(t), this.remove(e)
          }),
          (t.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector())
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]]
                  })
                : [],
              n = this._sheet.cssRules()
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return n[e].cssText
                      })
                      .join(e._optimizeForSpeed ? '' : '\n'),
                  ]
                })
                .filter(function (e) {
                  return Boolean(e[1])
                })
            )
          }),
          (t.createComputeId = function () {
            var e = {}
            return function (t, n) {
              if (!n) return 'jsx-' + t
              var r = String(n),
                o = t + r
              return e[o] || (e[o] = 'jsx-' + (0, i.default)(t + '-' + r)), e[o]
            }
          }),
          (t.createComputeSelector = function (e) {
            void 0 === e && (e = /__jsx-style-dynamic-selector/g)
            var t = {}
            return function (n, i) {
              this._isBrowser || (i = i.replace(/\/style/gi, '\\/style'))
              var r = n + i
              return t[r] || (t[r] = i.replace(e, n)), t[r]
            }
          }),
          (t.getIdAndRules = function (e) {
            var t = this,
              n = e.children,
              i = e.dynamic,
              r = e.id
            if (i) {
              var o = this.computeId(r, i)
              return {
                styleId: o,
                rules: Array.isArray(n)
                  ? n.map(function (e) {
                      return t.computeSelector(o, e)
                    })
                  : [this.computeSelector(o, n)],
              }
            }
            return {
              styleId: this.computeId(r),
              rules: Array.isArray(n) ? n : [n],
            }
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (e, t) {
                return (e[t.id.slice(2)] = t), e
              }, {})
          }),
          e
        )
      })()
      t.default = s
    },
    Xuae: function (e, t, n) {
      'use strict'
      var i = n('mPvQ'),
        r = n('/GRZ'),
        o = n('i2R6'),
        s = (n('qXWd'), n('48fX')),
        a = n('tCBg'),
        l = n('T0f4')
      function c(e) {
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
            i = l(e)
          if (t) {
            var r = l(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return a(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var u = n('q1tI'),
        f = (function (e) {
          s(n, e)
          var t = c(n)
          function n(e) {
            var o
            return (
              r(this, n),
              ((o = t.call(this, e))._hasHeadManager = void 0),
              (o.emitChange = function () {
                o._hasHeadManager &&
                  o.props.headManager.updateHead(
                    o.props.reduceComponentsToState(
                      i(o.props.headManager.mountedInstances),
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
        })(u.Component)
      t.default = f
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO')
    },
    bVZc: function (e, t, n) {
      'use strict'
      ;(function (e) {
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        ;(t.__esModule = !0), (t.default = void 0)
        var i = 'undefined' !== typeof e && e.env && !0,
          r = function (e) {
            return '[object String]' === Object.prototype.toString.call(e)
          },
          o = (function () {
            function e(e) {
              var t = void 0 === e ? {} : e,
                n = t.name,
                o = void 0 === n ? 'stylesheet' : n,
                a = t.optimizeForSpeed,
                l = void 0 === a ? i : a,
                c = t.isBrowser,
                u = void 0 === c ? 'undefined' !== typeof window : c
              s(r(o), '`name` must be a string'),
                (this._name = o),
                (this._deletedRulePlaceholder =
                  '#' + o + '-deleted-rule____{}'),
                s(
                  'boolean' === typeof l,
                  '`optimizeForSpeed` must be a boolean'
                ),
                (this._optimizeForSpeed = l),
                (this._isBrowser = u),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0)
              var f =
                this._isBrowser &&
                document.querySelector('meta[property="csp-nonce"]')
              this._nonce = f ? f.getAttribute('content') : null
            }
            var t,
              o,
              a,
              l = e.prototype
            return (
              (l.setOptimizeForSpeed = function (e) {
                s(
                  'boolean' === typeof e,
                  '`setOptimizeForSpeed` accepts a boolean'
                ),
                  s(
                    0 === this._rulesCount,
                    'optimizeForSpeed cannot be when rules have already been inserted'
                  ),
                  this.flush(),
                  (this._optimizeForSpeed = e),
                  this.inject()
              }),
              (l.isOptimizeForSpeed = function () {
                return this._optimizeForSpeed
              }),
              (l.inject = function () {
                var e = this
                if (
                  (s(!this._injected, 'sheet already injected'),
                  (this._injected = !0),
                  this._isBrowser && this._optimizeForSpeed)
                )
                  return (
                    (this._tags[0] = this.makeStyleTag(this._name)),
                    (this._optimizeForSpeed = 'insertRule' in this.getSheet()),
                    void (
                      this._optimizeForSpeed ||
                      (i ||
                        console.warn(
                          'StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'
                        ),
                      this.flush(),
                      (this._injected = !0))
                    )
                  )
                this._serverSheet = {
                  cssRules: [],
                  insertRule: function (t, n) {
                    return (
                      'number' === typeof n
                        ? (e._serverSheet.cssRules[n] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      n
                    )
                  },
                  deleteRule: function (t) {
                    e._serverSheet.cssRules[t] = null
                  },
                }
              }),
              (l.getSheetForTag = function (e) {
                if (e.sheet) return e.sheet
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t]
              }),
              (l.getSheet = function () {
                return this.getSheetForTag(this._tags[this._tags.length - 1])
              }),
              (l.insertRule = function (e, t) {
                if (
                  (s(r(e), '`insertRule` accepts only strings'),
                  !this._isBrowser)
                )
                  return (
                    'number' !== typeof t &&
                      (t = this._serverSheet.cssRules.length),
                    this._serverSheet.insertRule(e, t),
                    this._rulesCount++
                  )
                if (this._optimizeForSpeed) {
                  var n = this.getSheet()
                  'number' !== typeof t && (t = n.cssRules.length)
                  try {
                    n.insertRule(e, t)
                  } catch (a) {
                    return (
                      i ||
                        console.warn(
                          'StyleSheet: illegal rule: \n\n' +
                            e +
                            '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                        ),
                      -1
                    )
                  }
                } else {
                  var o = this._tags[t]
                  this._tags.push(this.makeStyleTag(this._name, e, o))
                }
                return this._rulesCount++
              }),
              (l.replaceRule = function (e, t) {
                if (this._optimizeForSpeed || !this._isBrowser) {
                  var n = this._isBrowser ? this.getSheet() : this._serverSheet
                  if (
                    (t.trim() || (t = this._deletedRulePlaceholder),
                    !n.cssRules[e])
                  )
                    return e
                  n.deleteRule(e)
                  try {
                    n.insertRule(t, e)
                  } catch (o) {
                    i ||
                      console.warn(
                        'StyleSheet: illegal rule: \n\n' +
                          t +
                          '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                      ),
                      n.insertRule(this._deletedRulePlaceholder, e)
                  }
                } else {
                  var r = this._tags[e]
                  s(r, 'old rule at index `' + e + '` not found'),
                    (r.textContent = t)
                }
                return e
              }),
              (l.deleteRule = function (e) {
                if (this._isBrowser)
                  if (this._optimizeForSpeed) this.replaceRule(e, '')
                  else {
                    var t = this._tags[e]
                    s(t, 'rule at index `' + e + '` not found'),
                      t.parentNode.removeChild(t),
                      (this._tags[e] = null)
                  }
                else this._serverSheet.deleteRule(e)
              }),
              (l.flush = function () {
                ;(this._injected = !1),
                  (this._rulesCount = 0),
                  this._isBrowser
                    ? (this._tags.forEach(function (e) {
                        return e && e.parentNode.removeChild(e)
                      }),
                      (this._tags = []))
                    : (this._serverSheet.cssRules = [])
              }),
              (l.cssRules = function () {
                var e = this
                return this._isBrowser
                  ? this._tags.reduce(function (t, n) {
                      return (
                        n
                          ? (t = t.concat(
                              Array.prototype.map.call(
                                e.getSheetForTag(n).cssRules,
                                function (t) {
                                  return t.cssText === e._deletedRulePlaceholder
                                    ? null
                                    : t
                                }
                              )
                            ))
                          : t.push(null),
                        t
                      )
                    }, [])
                  : this._serverSheet.cssRules
              }),
              (l.makeStyleTag = function (e, t, n) {
                t &&
                  s(
                    r(t),
                    'makeStyleTag acceps only strings as second parameter'
                  )
                var i = document.createElement('style')
                this._nonce && i.setAttribute('nonce', this._nonce),
                  (i.type = 'text/css'),
                  i.setAttribute('data-' + e, ''),
                  t && i.appendChild(document.createTextNode(t))
                var o =
                  document.head || document.getElementsByTagName('head')[0]
                return n ? o.insertBefore(i, n) : o.appendChild(i), i
              }),
              (t = e),
              (o = [
                {
                  key: 'length',
                  get: function () {
                    return this._rulesCount
                  },
                },
              ]) && n(t.prototype, o),
              a && n(t, a),
              e
            )
          })()
        function s(e, t) {
          if (!e) throw new Error('StyleSheet: ' + t + '.')
        }
        t.default = o
      }.call(this, n('8oxB')))
    },
    cTJO: function (e, t, n) {
      'use strict'
      var i = n('zoAU'),
        r = n('7KCV')
      ;(t.__esModule = !0), (t.default = void 0)
      var o = r(n('q1tI')),
        s = n('elyg'),
        a = n('nOHt'),
        l = n('vNVm'),
        c = {}
      function u(e, t, n, i) {
        if ((0, s.isLocalURL)(t)) {
          e.prefetch(t, n, i).catch(function (e) {
            0
          })
          var r =
            i && 'undefined' !== typeof i.locale ? i.locale : e && e.locale
          c[t + '%' + n + (r ? '%' + r : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, a.useRouter)(),
          r = (n && n.pathname) || '/',
          f = o.default.useMemo(
            function () {
              var t = (0, s.resolveHref)(r, e.href, !0),
                n = i(t, 2),
                o = n[0],
                a = n[1]
              return {
                href: o,
                as: e.as ? (0, s.resolveHref)(r, e.as) : a || o,
              }
            },
            [r, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          h = e.children,
          m = e.replace,
          x = e.shallow,
          y = e.scroll,
          v = e.locale
        'string' === typeof h && (h = o.default.createElement('a', null, h))
        var g = o.Children.only(h),
          b = g && 'object' === typeof g && g.ref,
          w = (0, l.useIntersection)({ rootMargin: '200px' }),
          _ = i(w, 2),
          k = _[0],
          S = _[1],
          j = o.default.useCallback(
            function (e) {
              k(e),
                b &&
                  ('function' === typeof b
                    ? b(e)
                    : 'object' === typeof b && (b.current = e))
            },
            [b, k]
          )
        ;(0, o.useEffect)(
          function () {
            var e = S && t && (0, s.isLocalURL)(d),
              i = 'undefined' !== typeof v ? v : n && n.locale,
              r = c[d + '%' + p + (i ? '%' + i : '')]
            e && !r && u(n, d, p, { locale: i })
          },
          [p, d, S, v, t, n]
        )
        var C = {
          ref: j,
          onClick: function (e) {
            g.props &&
              'function' === typeof g.props.onClick &&
              g.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, i, r, o, a, l) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      (0, s.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == a && (a = i.indexOf('#') < 0),
                    t[r ? 'replace' : 'push'](n, i, {
                      shallow: o,
                      locale: l,
                    }).then(function (e) {
                      e && a && (window.scrollTo(0, 0), document.body.focus())
                    }))
                })(e, n, d, p, m, x, y, v)
          },
          onMouseEnter: function (e) {
            ;(0, s.isLocalURL)(d) &&
              (g.props &&
                'function' === typeof g.props.onMouseEnter &&
                g.props.onMouseEnter(e),
              u(n, d, p, { priority: !0 }))
          },
        }
        return (
          (e.passHref || ('a' === g.type && !('href' in g.props))) &&
            (C.href = (0, s.addBasePath)(
              (0, s.addLocale)(
                p,
                'undefined' !== typeof v ? v : n && n.locale,
                n && n.defaultLocale
              )
            )),
          o.default.cloneElement(g, C)
        )
      }
      t.default = f
    },
    gYMh: function (e, t, n) {
      'use strict'
      function i(e) {
        if (null == e) throw new TypeError('Cannot destructure undefined')
      }
      n.d(t, 'a', function () {
        return i
      })
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
      var i
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var r = ((i = n('q1tI')) && i.__esModule
        ? i
        : { default: i }
      ).default.createContext({})
      t.AmpStateContext = r
    },
    mPvQ: function (e, t, n) {
      var i = n('5fIB'),
        r = n('rlHP'),
        o = n('KckH'),
        s = n('kG2m')
      e.exports = function (e) {
        return i(e) || r(e) || o(e) || s()
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
    vNVm: function (e, t, n) {
      'use strict'
      var i = n('zoAU'),
        r = n('AroE')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !a,
            r = (0, o.useRef)(),
            c = (0, o.useState)(!1),
            u = i(c, 2),
            f = u[0],
            d = u[1],
            p = (0, o.useCallback)(
              function (e) {
                r.current && (r.current(), (r.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (r.current = (function (e, t, n) {
                        var i = (function (e) {
                            var t = e.rootMargin || '',
                              n = l.get(t)
                            if (n) return n
                            var i = new Map(),
                              r = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = i.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return (
                              l.set(
                                t,
                                (n = { id: t, observer: r, elements: i })
                              ),
                              n
                            )
                          })(n),
                          r = i.id,
                          o = i.observer,
                          s = i.elements
                        return (
                          s.set(e, t),
                          o.observe(e),
                          function () {
                            o.unobserve(e),
                              0 === s.size && (o.disconnect(), l.delete(r))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && d(e)
                        },
                        { rootMargin: t }
                      )))
              },
              [n, t, f]
            )
          return (
            (0, o.useEffect)(
              function () {
                a ||
                  f ||
                  (0, s.default)(function () {
                    return d(!0)
                  })
              },
              [f]
            ),
            [p, f]
          )
        })
      var o = n('q1tI'),
        s = r(n('0G5g')),
        a = 'undefined' !== typeof IntersectionObserver
      var l = new Map()
    },
    zdqp: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var i = [
        "main.jsx-2751233720{margin-left:100px;margin-right:100px;font-family:'Gilroy-Bold';}",
        'main.jsx-2751233720::-webkit-scrollbar{display:none;}',
        '.nav-top.jsx-2751233720{display:none;}',
        '.ellipse.jsx-2751233720{z-index:-100;}',
        '.cd-text.jsx-2751233720{color:#2c2261;}',
        '.ctaText.jsx-2751233720:visited{color:#907cff !important;}',
        '.title.jsx-2751233720{width:65%;height:auto;margin-left:10%;margin-top:15%;z-index:5;}',
        '.title.jsx-2751233720 section.jsx-2751233720{width:100%;max-width:768px;text-align:left;}',
        '.blockOne.jsx-2751233720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:588px;width:100vw;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}',
        '.blockTwo.jsx-2751233720{background-color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;margin-left:-100px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:441px;padding-left:100px;}',
        '.right-one.jsx-2751233720{width:894px;margin-left:50px;}',
        '.left-one.jsx-2751233720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:35vw;margin-top:5vh;margin-bottom:-8vh;}',
        '.left-one.jsx-2751233720>img.jsx-2751233720{width:40%;}',
        '.blockThree.jsx-2751233720{background-color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:705px;margin-left:-100px;margin-right:-100px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}',
        ".left-two.jsx-2751233720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:'Gilroy-Medium';font-weight:500;margin-left:100px;}",
        '.right-two.jsx-2751233720{width:533px;}',
        '.SFF-Block.jsx-2751233720{height:598px;margin-left:-100px;margin-right:-105px;padding-top:147px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:linear-gradient(rgba(240,237,255,0.25),white);}',
        '.SFF-Block.jsx-2751233720 span.jsx-2751233720{font-size:42px;color:#212121;}',
        '.button-container.jsx-2751233720{display:none;}',
        '.options-dropdown.jsx-2751233720{display:none;}',
        '.app-store-logo.jsx-2751233720{cursor:pointer;}',
        '.rent.jsx-2751233720{border:1px solid gray;}',
        "@media only screen and (max-width:600px){.button-container.jsx-2751233720{background-color:white;padding:0px;width:101vw;height:75px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:92vh;z-index:1000;}.sticky-button.jsx-2751233720{font-family:'Gilroy-Medium';background-color:#907cff;width:80vw;margin:auto;color:white;position:fixed;border-radius:20px;height:42px;border-style:none;z-index:1000;font-size:1.2rem;margin-bottom:5px;}.sticky-button.jsx-2751233720:hover{cursor:pointer;}.title.jsx-2751233720{margin:0;}main.jsx-2751233720{margin-left:0px;margin-right:0px;}.blockOne.jsx-2751233720{diplay:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-left:30px;}.right-one.jsx-2751233720{width:100vw;-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}.left-one.jsx-2751233720{margin-top:100px;width:315px;}.left-one.jsx-2751233720>img.jsx-2751233720{margin:0;}.blockTwo.jsx-2751233720{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding-bottom:60px;width:130vw;margin-top:85px;}.app-store-logo.jsx-2751233720{margin:auto;text-align:center;cursor:pointer;height:40px;}.blockThree.jsx-2751233720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding-top:90px;}.right-two.jsx-2751233720{margin-top:-50px;margin:auto;}.left-two.jsx-2751233720{margin-left:30px;width:315px;}.SFF-Block.jsx-2751233720{width:100vw;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-bottom:45px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Gilroy-Medium';-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:linear-gradient(180deg,rgba(240,237,255,0.25) 0%,#ffffff 77.6%,#ffffff 100%);margin:auto;}.SFF-Block.jsx-2751233720 span.jsx-2751233720{font-size:24px;font-weight:600;}.dropmenu-home.jsx-2751233720{font-family:'Gilroy-Medium';position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:black;height:30vh;width:102vw;background-color:white;z-index:40000;box-shadow:0px 2px 5px #e2e2e5;}.options-dropdown.jsx-2751233720{margin-top:40px;margin-left:-7px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:18px;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;}.nav-logo.jsx-2751233720{position:absolute;top:30px;left:30px;height:24px;text-align:justify;width:87px;}.burger-icon.jsx-2751233720{margin-top:1vh;margin-right:5vw;height:0.75em;}.pointer.jsx-2751233720:hover{cursor:poitner;}.nav-top.jsx-2751233720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.nav-top.jsx-2751233720>a.jsx-2751233720:hover{cursor:pointer;}.drop-menu.jsx-2751233720>button.jsx-2751233720{background-color:#907cff;border:none;border-radius:30px;color:white;width:75%;height:5vh;margin:auto;margin-left:10px;margin-bottom:2vh;font-size:1.5rem;font-family:'Gilroy-Medium';}.drop-menu.jsx-2751233720{width:100vw;}.x-icon.jsx-2751233720{position:absolute;top:30px;right:8px;height:1.8rem;margin-right:5vw;}.pointer.jsx-2751233720:hover{cursor:pointer;z-index:10000000;}}",
      ]
      i.__hash = '2751233720'
    },
  },
])
