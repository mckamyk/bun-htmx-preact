// node_modules/preact/dist/preact.module.js
var v = function(n, l) {
  for (var u in l)
    n[u] = l[u];
  return n;
};
var p = function(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
};
var y = function(l, u, t) {
  var i, o, r, f = {};
  for (r in u)
    r == "key" ? i = u[r] : r == "ref" ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), typeof l == "function" && l.defaultProps != null)
    for (r in l.defaultProps)
      f[r] === undefined && (f[r] = l.defaultProps[r]);
  return d(l, f, i, o, null);
};
var d = function(n, t, i, o, r) {
  var f = { type: n, props: t, key: i, ref: o, __k: null, __: null, __b: 0, __e: null, __d: undefined, __c: null, __h: null, constructor: undefined, __v: r == null ? ++u : r };
  return r == null && l.vnode != null && l.vnode(f), f;
};
var k = function(n) {
  return n.children;
};
var b = function(n, l) {
  this.props = n, this.context = l;
};
var g = function(n, l) {
  if (l == null)
    return n.__ ? g(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u;l < n.__k.length; l++)
    if ((u = n.__k[l]) != null && u.__e != null)
      return u.__e;
  return typeof n.type == "function" ? g(n) : null;
};
var m = function(n) {
  var l, u;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, l = 0;l < n.__k.length; l++)
      if ((u = n.__k[l]) != null && u.__e != null) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    return m(n);
  }
};
var w = function(n) {
  (!n.__d && (n.__d = true) && i.push(n) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
};
var x = function() {
  var n, l, u, t, o, r, e, c, s;
  for (i.sort(f);n = i.shift(); )
    n.__d && (l = i.length, t = undefined, o = undefined, r = undefined, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = v({}, e)).__v = e.__v + 1, L(s, e, r, u.__n, s.ownerSVGElement !== undefined, e.__h != null ? [c] : null, t, c == null ? g(e) : c, e.__h, o), M(t, e, o), e.__e != c && m(e)), i.length > l && i.sort(f));
  x.__r = 0;
};
var P = function(n, l, u, t, i, o, r, f, e, a, v2) {
  var p2, y2, _, b2, m2, w2, x2, P2, C, H = 0, I = t && t.__k || s, T = I.length, j = T, z = l.length;
  for (u.__k = [], p2 = 0;p2 < z; p2++)
    (b2 = u.__k[p2] = (b2 = l[p2]) == null || typeof b2 == "boolean" || typeof b2 == "function" ? null : typeof b2 == "string" || typeof b2 == "number" || typeof b2 == "bigint" ? d(null, b2, null, null, b2) : h(b2) ? d(k, { children: b2 }, null, null, null) : b2.__b > 0 ? d(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) != null ? (b2.__ = u, b2.__b = u.__b + 1, (P2 = A(b2, I, x2 = p2 + H, j)) === -1 ? _ = c : (_ = I[P2] || c, I[P2] = undefined, j--), L(n, b2, _, i, o, r, f, e, a, v2), m2 = b2.__e, (y2 = b2.ref) && _.ref != y2 && (_.ref && O(_.ref, null, b2), v2.push(y2, b2.__c || m2, b2)), m2 != null && (w2 == null && (w2 = m2), (C = _ === c || _.__v === null) ? P2 == -1 && H-- : P2 !== x2 && (P2 === x2 + 1 ? H++ : P2 > x2 ? j > z - x2 ? H += P2 - x2 : H-- : H = P2 < x2 && P2 == x2 - 1 ? P2 - x2 : 0), x2 = p2 + H, typeof b2.type != "function" || P2 === x2 && _.__k !== b2.__k ? typeof b2.type == "function" || P2 === x2 && !C ? b2.__d !== undefined ? (e = b2.__d, b2.__d = undefined) : e = m2.nextSibling : e = S(n, m2, e) : e = $(b2, e, n), typeof u.type == "function" && (u.__d = e))) : (_ = I[p2]) && _.key == null && _.__e && (_.__e == e && (e = g(_)), q(_, _, false), I[p2] = null);
  for (u.__e = w2, p2 = T;p2--; )
    I[p2] != null && (typeof u.type == "function" && I[p2].__e != null && I[p2].__e == u.__d && (u.__d = I[p2].__e.nextSibling), q(I[p2], I[p2]));
};
var $ = function(n, l, u) {
  for (var t, i = n.__k, o = 0;i && o < i.length; o++)
    (t = i[o]) && (t.__ = n, l = typeof t.type == "function" ? $(t, l, u) : S(u, t.__e, l));
  return l;
};
var S = function(n, l, u) {
  return u == null || u.parentNode !== n ? n.insertBefore(l, null) : l == u && l.parentNode != null || n.insertBefore(l, u), l.nextSibling;
};
var A = function(n, l, u, t) {
  var { key: i, type: o } = n, r = u - 1, f = u + 1, e = l[u];
  if (e === null || e && i == e.key && o === e.type)
    return u;
  if (t > (e != null ? 1 : 0))
    for (;r >= 0 || f < l.length; ) {
      if (r >= 0) {
        if ((e = l[r]) && i == e.key && o === e.type)
          return r;
        r--;
      }
      if (f < l.length) {
        if ((e = l[f]) && i == e.key && o === e.type)
          return f;
        f++;
      }
    }
  return -1;
};
var H = function(n, l, u, t, i) {
  var o;
  for (o in u)
    o === "children" || o === "key" || (o in l) || T(n, o, null, u[o], t);
  for (o in l)
    i && typeof l[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || u[o] === l[o] || T(n, o, l[o], u[o], t);
};
var I = function(n, l, u) {
  l[0] === "-" ? n.setProperty(l, u == null ? "" : u) : n[l] = u == null ? "" : typeof u != "number" || a.test(l) ? u : u + "px";
};
var T = function(n, l, u, t, i) {
  var o;
  n:
    if (l === "style")
      if (typeof u == "string")
        n.style.cssText = u;
      else {
        if (typeof t == "string" && (n.style.cssText = t = ""), t)
          for (l in t)
            u && (l in u) || I(n.style, l, "");
        if (u)
          for (l in u)
            t && u[l] === t[l] || I(n.style, l, u[l]);
      }
    else if (l[0] === "o" && l[1] === "n")
      o = l !== (l = l.replace(/(PointerCapture)$|Capture$/, "$1")), l = (l.toLowerCase() in n) ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? z : j, o) : n.removeEventListener(l, o ? z : j, o);
    else if (l !== "dangerouslySetInnerHTML") {
      if (i)
        l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l !== "width" && l !== "height" && l !== "href" && l !== "list" && l !== "form" && l !== "tabIndex" && l !== "download" && l !== "rowSpan" && l !== "colSpan" && (l in n))
        try {
          n[l] = u == null ? "" : u;
          break n;
        } catch (n2) {
        }
      typeof u == "function" || (u == null || u === false && l[4] !== "-" ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
};
var j = function(n) {
  return this.l[n.type + false](l.event ? l.event(n) : n);
};
var z = function(n) {
  return this.l[n.type + true](l.event ? l.event(n) : n);
};
var L = function(n, u, t, i, o, r, f, e, c, s) {
  var a, p2, y2, d2, _, g2, m2, w2, x2, $2, C, S2, A2, H2, I2, T2 = u.type;
  if (u.constructor !== undefined)
    return null;
  t.__h != null && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);
  n:
    if (typeof T2 == "function")
      try {
        if (w2 = u.props, x2 = (a = T2.contextType) && i[a.__c], $2 = a ? x2 ? x2.props.value : a.__ : i, t.__c ? m2 = (p2 = u.__c = t.__c).__ = p2.__E : (("prototype" in T2) && T2.prototype.render ? u.__c = p2 = new T2(w2, $2) : (u.__c = p2 = new b(w2, $2), p2.constructor = T2, p2.render = B), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = $2, p2.__n = i, y2 = p2.__d = true, p2.__h = [], p2._sb = []), p2.__s == null && (p2.__s = p2.state), T2.getDerivedStateFromProps != null && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, T2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _ = p2.state, p2.__v = u, y2)
          T2.getDerivedStateFromProps == null && p2.componentWillMount != null && p2.componentWillMount(), p2.componentDidMount != null && p2.__h.push(p2.componentDidMount);
        else {
          if (T2.getDerivedStateFromProps == null && w2 !== d2 && p2.componentWillReceiveProps != null && p2.componentWillReceiveProps(w2, $2), !p2.__e && (p2.shouldComponentUpdate != null && p2.shouldComponentUpdate(w2, p2.__s, $2) === false || u.__v === t.__v)) {
            for (u.__v !== t.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function(n2) {
              n2 && (n2.__ = u);
            }), C = 0;C < p2._sb.length; C++)
              p2.__h.push(p2._sb[C]);
            p2._sb = [], p2.__h.length && f.push(p2);
            break n;
          }
          p2.componentWillUpdate != null && p2.componentWillUpdate(w2, p2.__s, $2), p2.componentDidUpdate != null && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _, g2);
          });
        }
        if (p2.context = $2, p2.props = w2, p2.__P = n, p2.__e = false, S2 = l.__r, A2 = 0, ("prototype" in T2) && T2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, S2 && S2(u), a = p2.render(p2.props, p2.state, p2.context), H2 = 0;H2 < p2._sb.length; H2++)
            p2.__h.push(p2._sb[H2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, S2 && S2(u), a = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++A2 < 25);
        p2.state = p2.__s, p2.getChildContext != null && (i = v(v({}, i), p2.getChildContext())), y2 || p2.getSnapshotBeforeUpdate == null || (g2 = p2.getSnapshotBeforeUpdate(d2, _)), P(n, h(I2 = a != null && a.type === k && a.key == null ? a.props.children : a) ? I2 : [I2], u, t, i, o, r, f, e, c, s), p2.base = u.__e, u.__h = null, p2.__h.length && f.push(p2), m2 && (p2.__E = p2.__ = null);
      } catch (n2) {
        u.__v = null, (c || r != null) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n2, u, t);
      }
    else
      r == null && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = N(t.__e, u, t, i, o, r, f, c, s);
  (a = l.diffed) && a(u);
};
var M = function(n, u, t) {
  for (var i = 0;i < t.length; i++)
    O(t[i], t[++i], t[++i]);
  l.__c && l.__c(u, n), n.some(function(u2) {
    try {
      n = u2.__h, u2.__h = [], n.some(function(n2) {
        n2.call(u2);
      });
    } catch (n2) {
      l.__e(n2, u2.__v);
    }
  });
};
var N = function(l, u, t, i, o, r, f, e, s) {
  var a, v2, y2, d2 = t.props, _ = u.props, k2 = u.type, b2 = 0;
  if (k2 === "svg" && (o = true), r != null) {
    for (;b2 < r.length; b2++)
      if ((a = r[b2]) && ("setAttribute" in a) == !!k2 && (k2 ? a.localName === k2 : a.nodeType === 3)) {
        l = a, r[b2] = null;
        break;
      }
  }
  if (l == null) {
    if (k2 === null)
      return document.createTextNode(_);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _.is && _), r = null, e = false;
  }
  if (k2 === null)
    d2 === _ || e && l.data === _ || (l.data = _);
  else {
    if (r = r && n.call(l.childNodes), v2 = (d2 = t.props || c).dangerouslySetInnerHTML, y2 = _.dangerouslySetInnerHTML, !e) {
      if (r != null)
        for (d2 = {}, b2 = 0;b2 < l.attributes.length; b2++)
          d2[l.attributes[b2].name] = l.attributes[b2].value;
      (y2 || v2) && (y2 && (v2 && y2.__html == v2.__html || y2.__html === l.innerHTML) || (l.innerHTML = y2 && y2.__html || ""));
    }
    if (H(l, _, d2, o, e), y2)
      u.__k = [];
    else if (P(l, h(b2 = u.props.children) ? b2 : [b2], u, t, i, o && k2 !== "foreignObject", r, f, r ? r[0] : t.__k && g(t, 0), e, s), r != null)
      for (b2 = r.length;b2--; )
        r[b2] != null && p(r[b2]);
    e || (("value" in _) && (b2 = _.value) !== undefined && (b2 !== l.value || k2 === "progress" && !b2 || k2 === "option" && b2 !== d2.value) && T(l, "value", b2, d2.value, false), ("checked" in _) && (b2 = _.checked) !== undefined && b2 !== l.checked && T(l, "checked", b2, d2.checked, false));
  }
  return l;
};
var O = function(n, u, t) {
  try {
    typeof n == "function" ? n(u) : n.current = u;
  } catch (n2) {
    l.__e(n2, t);
  }
};
var q = function(n, u, t) {
  var i, o;
  if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || O(i, null, u)), (i = n.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (n2) {
        l.__e(n2, u);
      }
    i.base = i.__P = null, n.__c = undefined;
  }
  if (i = n.__k)
    for (o = 0;o < i.length; o++)
      i[o] && q(i[o], u, t || typeof n.type != "function");
  t || n.__e == null || p(n.__e), n.__ = n.__e = n.__d = undefined;
};
var B = function(n, l, u) {
  return this.constructor(n, u);
};
var D = function(u, t, i) {
  var o, r, f, e;
  l.__ && l.__(u, t), r = (o = typeof i == "function") ? null : i && i.__k || t.__k, f = [], e = [], L(t, u = (!o && i || t).__k = y(k, null, [u]), r || c, c, t.ownerSVGElement !== undefined, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), M(f, u, e);
};
var E = function(n, l) {
  D(n, l, E);
};
var F = function(l, u, t) {
  var i, o, r, f, e = v({}, l.props);
  for (r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u)
    r == "key" ? i = u[r] : r == "ref" ? o = u[r] : e[r] = u[r] === undefined && f !== undefined ? f[r] : u[r];
  return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), d(l.type, e, i || l.key, o || l.ref, null);
};
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var h = Array.isArray;
n = s.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2;l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && o2.getDerivedStateFromError != null && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), i2.componentDidCatch != null && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return n2 != null && n2.constructor === undefined;
}, b.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), typeof n2 == "function" && (n2 = n2(v({}, u2), this.props)), n2 && v(u2, n2), n2 != null && this.__v && (l2 && this._sb.push(l2), w(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
}, b.prototype.render = k, i = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x.__r = 0, e = 0;

// node_modules/preact-custom-element/dist/preact-custom-element.esm.js
var r2 = function() {
  return (r2 = Object.assign || function(t2) {
    for (var e2 = 1;e2 < arguments.length; e2++) {
      var n2 = arguments[e2];
      for (var o2 in n2)
        Object.prototype.hasOwnProperty.call(n2, o2) && (t2[o2] = n2[o2]);
    }
    return t2;
  }).apply(this, arguments);
};
var i2 = function(t2) {
  this.getChildContext = function() {
    return t2.context;
  };
  var e2 = t2.children, n2 = function(t3, e3) {
    if (t3 == null)
      return {};
    var n3, o2, r3 = {}, i3 = Object.keys(t3);
    for (o2 = 0;o2 < i3.length; o2++)
      e3.indexOf(n3 = i3[o2]) >= 0 || (r3[n3] = t3[n3]);
    return r3;
  }(t2, ["context", "children"]);
  return F(e2, n2);
};
var a2 = function() {
  var o2 = new CustomEvent("_preact", { detail: {}, bubbles: true, cancelable: true });
  this.dispatchEvent(o2), this._vdom = y(i2, r2({}, this._props, { context: o2.detail.context }), function e(n2, o3) {
    if (n2.nodeType === 3)
      return n2.data;
    if (n2.nodeType !== 1)
      return null;
    var r3 = [], i3 = {}, a3 = 0, c2 = n2.attributes, l2 = n2.childNodes;
    for (a3 = c2.length;a3--; )
      c2[a3].name !== "slot" && (i3[c2[a3].name] = c2[a3].value, i3[s2(c2[a3].name)] = c2[a3].value);
    for (a3 = l2.length;a3--; ) {
      var p2 = e(l2[a3], null), d2 = l2[a3].slot;
      d2 ? i3[d2] = y(u2, { name: d2 }, p2) : r3[a3] = p2;
    }
    var h2 = o3 ? y(u2, null, r3) : r3;
    return y(o3 || n2.nodeName.toLowerCase(), i3, h2);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? E : D)(this._vdom, this._root);
};
var s2 = function(t2) {
  return t2.replace(/-(\w)/g, function(t3, e2) {
    return e2 ? e2.toUpperCase() : "";
  });
};
var c2 = function(t2, e2, r3) {
  if (this._vdom) {
    var i3 = {};
    i3[t2] = r3 = r3 == null ? undefined : r3, i3[s2(t2)] = r3, this._vdom = F(this._vdom, i3), D(this._vdom, this._root);
  }
};
var l2 = function() {
  D(this._vdom = null, this._root);
};
var u2 = function(e2, n2) {
  var o2 = this;
  return y("slot", r2({}, e2, { ref: function(t2) {
    t2 ? (o2.ref = t2, o2._listener || (o2._listener = function(t3) {
      t3.stopPropagation(), t3.detail.context = n2;
    }, t2.addEventListener("_preact", o2._listener))) : o2.ref.removeEventListener("_preact", o2._listener);
  } }));
};
function preact_custom_element_esm_default(t2, e2, n2, o2) {
  function r3() {
    var e3 = Reflect.construct(HTMLElement, [], r3);
    return e3._vdomComponent = t2, e3._root = o2 && o2.shadow ? e3.attachShadow({ mode: "open" }) : e3, e3;
  }
  return (r3.prototype = Object.create(HTMLElement.prototype)).constructor = r3, r3.prototype.connectedCallback = a2, r3.prototype.attributeChangedCallback = c2, r3.prototype.disconnectedCallback = l2, n2 = n2 || t2.observedAttributes || Object.keys(t2.propTypes || {}), r3.observedAttributes = n2, n2.forEach(function(t3) {
    Object.defineProperty(r3.prototype, t3, { get: function() {
      return this._vdom.props[t3];
    }, set: function(e3) {
      this._vdom ? this.attributeChangedCallback(t3, null, e3) : (this._props || (this._props = {}), this._props[t3] = e3, this.connectedCallback());
      var n3 = typeof e3;
      e3 != null && n3 !== "string" && n3 !== "boolean" && n3 !== "number" || this.setAttribute(t3, e3);
    } });
  }), customElements.define(e2 || t2.tagName || t2.displayName || t2.name, r3);
}

// node_modules/preact/hooks/dist/hooks.module.js
var d2 = function(t2, u3) {
  l.__h && l.__h(r3, t2, o2 || u3), o2 = 0;
  var i3 = r3.__H || (r3.__H = { __: [], __h: [] });
  return t2 >= i3.__.length && i3.__.push({ __V: c3 }), i3.__[t2];
};
var h2 = function(n2) {
  return o2 = 1, s3(B2, n2);
};
var s3 = function(n2, u3, i3) {
  var o2 = d2(t2++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i3 ? i3(u3) : B2(undefined, u3), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r3 = o2.t(t2, n3);
    t2 !== r3 && (o2.__N = [r3, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r3, !r3.u)) {
    var f2 = function(n3, t2, r3) {
      if (!o2.__c.__H)
        return true;
      var u4 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !c3 || c3.call(this, n3, t2, r3);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = undefined, t3 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o2.__c.props === n3) && (!c3 || c3.call(this, n3, t2, r3));
    };
    r3.u = true;
    var { shouldComponentUpdate: c3, componentWillUpdate: e2 } = r3;
    r3.componentWillUpdate = function(n3, t2, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = undefined, f2(n3, t2, r3), c3 = u4;
      }
      e2 && e2.call(this, n3, t2, r3);
    }, r3.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
};
var b2 = function() {
  for (var t2;t2 = f2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k2), t2.__H.__h.forEach(w2), t2.__H.__h = [];
      } catch (r3) {
        t2.__H.__h = [], l.__e(r3, t2.__v);
      }
};
var j2 = function(n2) {
  var t2, r3 = function() {
    clearTimeout(u3), g2 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  g2 && (t2 = requestAnimationFrame(r3));
};
var k2 = function(n2) {
  var t2 = r3, u3 = n2.__c;
  typeof u3 == "function" && (n2.__c = undefined, u3()), r3 = t2;
};
var w2 = function(n2) {
  var t2 = r3;
  n2.__c = n2.__(), r3 = t2;
};
var B2 = function(n2, t2) {
  return typeof t2 == "function" ? t2(n2) : t2;
};
var t2;
var r3;
var u3;
var i3;
var o2 = 0;
var f2 = [];
var c3 = [];
var e2 = l.__b;
var a3 = l.__r;
var v2 = l.diffed;
var l3 = l.__c;
var m2 = l.unmount;
l.__b = function(n2) {
  r3 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a3 && a3(n2), t2 = 0;
  var i4 = (r3 = n2.__c).__H;
  i4 && (u3 === r3 ? (i4.__h = [], r3.__h = [], i4.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c3, n3.__N = n3.i = undefined;
  })) : (i4.__h.forEach(k2), i4.__h.forEach(w2), i4.__h = [], t2 = 0)), u3 = r3;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var o3 = t3.__c;
  o3 && o3.__H && (o3.__H.__h.length && (f2.push(o3) !== 1 && i3 === l.requestAnimationFrame || ((i3 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c3 && (n2.__ = n2.__V), n2.i = undefined, n2.__V = c3;
  })), u3 = r3 = null;
}, l.__c = function(t3, r4) {
  r4.some(function(t4) {
    try {
      t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || w2(n2);
      });
    } catch (u4) {
      r4.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r4 = [], l.__e(u4, t4.__v);
    }
  }), l3 && l3(t3, r4);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var r4, u4 = t3.__c;
  u4 && u4.__H && (u4.__H.__.forEach(function(n2) {
    try {
      k2(n2);
    } catch (n3) {
      r4 = n3;
    }
  }), u4.__H = undefined, r4 && l.__e(r4, u4.__v));
};
var g2 = typeof requestAnimationFrame == "function";

// src/frontend/simple.component.tsx
var Simple = () => {
  const [counter, setCounter] = h2(1);
  return React.createElement(React.Fragment, null, React.createElement("div", null, "Counter: ", counter), React.createElement("button", {
    onClick: () => setCounter(counter + 1)
  }, "Add"));
};
preact_custom_element_esm_default(Simple, "simple-el");
