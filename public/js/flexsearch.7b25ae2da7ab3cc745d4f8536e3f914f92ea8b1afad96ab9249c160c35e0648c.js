(() => {
    var gt = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
    var U = gt(() => {});
    var a;
    function H(t) {
        return typeof t != 'undefined' ? t : !0;
    }
    function Z(t) {
        let e = Array(t);
        for (let n = 0; n < t; n++) e[n] = y();
        return e;
    }
    function y() {
        return Object.create(null);
    }
    function pt(t, e) {
        return e.length - t.length;
    }
    function v(t) {
        return typeof t == 'string';
    }
    function A(t) {
        return typeof t == 'object';
    }
    function W(t) {
        return typeof t == 'function';
    }
    function b(t, e) {
        var n = mt;
        if (t && (e && (t = J(t, e)), this.H && (t = J(t, this.H)), this.J && 1 < t.length && (t = J(t, this.J)), n || n === '')) {
            if (((e = t.split(n)), this.filter)) {
                (t = this.filter), (n = e.length);
                let i = [];
                for (let s = 0, r = 0; s < n; s++) {
                    let h = e[s];
                    h && !t[h] && (i[r++] = h);
                }
                t = i;
            } else t = e;
            return t;
        }
        return t;
    }
    var mt = /[\p{Z}\p{S}\p{P}\p{C}]+/u,
        yt = /[\u0300-\u036f]/g;
    function Q(t, e) {
        let n = Object.keys(t),
            i = n.length,
            s = [],
            r = '',
            h = 0;
        for (let o = 0, l, u; o < i; o++) (l = n[o]), (u = t[l]) ? ((s[h++] = x(e ? '(?!\\b)' + l + '(\\b|_)' : l)), (s[h++] = u)) : (r += (r ? '|' : '') + l);
        return r && ((s[h++] = x(e ? '(?!\\b)(' + r + ')(\\b|_)' : '(' + r + ')')), (s[h] = '')), s;
    }
    function J(t, e) {
        for (let n = 0, i = e.length; n < i && ((t = t.replace(e[n], e[n + 1])), t); n += 2);
        return t;
    }
    function x(t) {
        return new RegExp(t, 'g');
    }
    function tt(t) {
        let e = '',
            n = '';
        for (let i = 0, s = t.length, r; i < s; i++) (r = t[i]) !== n && (e += n = r);
        return e;
    }
    var at = { encode: et, F: !1, G: '' };
    function et(t) {
        return b.call(this, ('' + t).toLowerCase(), !1);
    }
    var nt = {},
        L = {};
    function it(t) {
        O(t, 'add'), O(t, 'append'), O(t, 'search'), O(t, 'update'), O(t, 'remove');
    }
    function O(t, e) {
        t[e + 'Async'] = function () {
            let n = this,
                i = arguments;
            var s = i[i.length - 1];
            let r;
            return (
                W(s) && ((r = s), delete i[i.length - 1]),
                (s = new Promise(function (h) {
                    setTimeout(function () {
                        n.async = !0;
                        let o = n[e].apply(n, i);
                        (n.async = !1), h(o);
                    });
                })),
                r ? (s.then(r), this) : s
            );
        };
    }
    function st(t, e, n, i) {
        let s = t.length,
            r = [],
            h,
            o,
            l = 0;
        i && (i = []);
        for (let u = s - 1; 0 <= u; u--) {
            let f = t[u],
                m = f.length,
                d = y(),
                p = !h;
            for (let c = 0; c < m; c++) {
                let g = f[c],
                    q = g.length;
                if (q)
                    for (let S = 0, k, w; S < q; S++)
                        if (((w = g[S]), h)) {
                            if (h[w]) {
                                if (!u) {
                                    if (n) n--;
                                    else if (((r[l++] = w), l === e)) return r;
                                }
                                (u || i) && (d[w] = 1), (p = !0);
                            }
                            if (i && ((k = (o[w] || 0) + 1), (o[w] = k), k < s)) {
                                let F = i[k - 2] || (i[k - 2] = []);
                                F[F.length] = w;
                            }
                        } else d[w] = 1;
            }
            if (i) h || (o = d);
            else if (!p) return [];
            h = d;
        }
        if (i)
            for (let u = i.length - 1, f, m; 0 <= u; u--) {
                (f = i[u]), (m = f.length);
                for (let d = 0, p; d < m; d++)
                    if (((p = f[d]), !h[p])) {
                        if (n) n--;
                        else if (((r[l++] = p), l === e)) return r;
                        h[p] = 1;
                    }
            }
        return r;
    }
    function xt(t, e) {
        let n = y(),
            i = y(),
            s = [];
        for (let r = 0; r < t.length; r++) n[t[r]] = 1;
        for (let r = 0, h; r < e.length; r++) {
            h = e[r];
            for (let o = 0, l; o < h.length; o++) (l = h[o]), n[l] && !i[l] && ((i[l] = 1), (s[s.length] = l));
        }
        return s;
    }
    function E(t) {
        (this.l = t !== !0 && t), (this.cache = y()), (this.h = []);
    }
    function rt(t, e, n) {
        A(t) && (t = t.query);
        let i = this.cache.get(t);
        return i || ((i = this.search(t, e, n)), this.cache.set(t, i)), i;
    }
    E.prototype.set = function (t, e) {
        if (!this.cache[t]) {
            var n = this.h.length;
            for (n === this.l ? delete this.cache[this.h[n - 1]] : n++, --n; 0 < n; n--) this.h[n] = this.h[n - 1];
            this.h[0] = t;
        }
        this.cache[t] = e;
    };
    E.prototype.get = function (t) {
        let e = this.cache[t];
        if (this.l && e && (t = this.h.indexOf(t))) {
            let n = this.h[t - 1];
            (this.h[t - 1] = this.h[t]), (this.h[t] = n);
        }
        return e;
    };
    var vt = { memory: { charset: 'latin:extra', D: 3, B: 4, m: !1 }, performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } }, match: { charset: 'latin:extra', G: 'reverse' }, score: { charset: 'latin:advanced', D: 20, B: 3, context: { depth: 3, D: 9 } }, default: {} };
    function ot(t, e, n, i, s, r, h, o) {
        setTimeout(function () {
            let l = t(n ? n + '.' + i : i, JSON.stringify(h));
            l && l.then ?
                l.then(function () {
                    e.export(t, e, n, s, r + 1, o);
                })
            :   e.export(t, e, n, s, r + 1, o);
        });
    }
    function C(t, e) {
        if (!(this instanceof C)) return new C(t);
        var n;
        if (t) {
            v(t) ? (t = vt[t]) : (n = t.preset) && (t = Object.assign({}, n[n], t)), (n = t.charset);
            var i = t.lang;
            v(n) && (n.indexOf(':') === -1 && (n += ':default'), (n = L[n])), v(i) && (i = nt[i]);
        } else t = {};
        let s,
            r,
            h = t.context || {};
        if (((this.encode = t.encode || (n && n.encode) || et), (this.register = e || y()), (this.D = s = t.resolution || 9), (this.G = e = (n && n.G) || t.tokenize || 'strict'), (this.depth = e === 'strict' && h.depth), (this.l = H(h.bidirectional)), (this.s = r = H(t.optimize)), (this.m = H(t.fastupdate)), (this.B = t.minlength || 1), (this.C = t.boost), (this.map = r ? Z(s) : y()), (this.A = s = h.resolution || 1), (this.h = r ? Z(s) : y()), (this.F = (n && n.F) || t.rtl), (this.H = (e = t.matcher || (i && i.H)) && Q(e, !1)), (this.J = (e = t.stemmer || (i && i.J)) && Q(e, !0)), (n = e = t.filter || (i && i.filter)))) {
            (n = e), (i = y());
            for (let o = 0, l = n.length; o < l; o++) i[n[o]] = 1;
            n = i;
        }
        (this.filter = n), (this.cache = (e = t.cache) && new E(e));
    }
    a = C.prototype;
    a.append = function (t, e) {
        return this.add(t, e, !0);
    };
    a.add = function (t, e, n, i) {
        if (e && (t || t === 0)) {
            if (!i && !n && this.register[t]) return this.update(t, e);
            if (((e = this.encode(e)), (i = e.length))) {
                let u = y(),
                    f = y(),
                    m = this.depth,
                    d = this.D;
                for (let p = 0; p < i; p++) {
                    let c = e[this.F ? i - 1 - p : p];
                    var s = c.length;
                    if (c && s >= this.B && (m || !f[c])) {
                        var r = I(d, i, p),
                            h = '';
                        switch (this.G) {
                            case 'full':
                                if (2 < s) {
                                    for (r = 0; r < s; r++)
                                        for (var o = s; o > r; o--)
                                            if (o - r >= this.B) {
                                                var l = I(d, i, p, s, r);
                                                (h = c.substring(r, o)), D(this, f, h, l, t, n);
                                            }
                                    break;
                                }
                            case 'reverse':
                                if (1 < s) {
                                    for (o = s - 1; 0 < o; o--) (h = c[o] + h), h.length >= this.B && D(this, f, h, I(d, i, p, s, o), t, n);
                                    h = '';
                                }
                            case 'forward':
                                if (1 < s) {
                                    for (o = 0; o < s; o++) (h += c[o]), h.length >= this.B && D(this, f, h, r, t, n);
                                    break;
                                }
                            default:
                                if ((this.C && (r = Math.min((r / this.C(e, c, p)) | 0, d - 1)), D(this, f, c, r, t, n), m && 1 < i && p < i - 1)) {
                                    for (s = y(), h = this.A, r = c, o = Math.min(m + 1, i - p), s[r] = 1, l = 1; l < o; l++)
                                        if ((c = e[this.F ? i - 1 - p - l : p + l]) && c.length >= this.B && !s[c]) {
                                            s[c] = 1;
                                            let g = this.l && c > r;
                                            D(this, u, g ? r : c, I(h + (i / 2 > h ? 0 : 1), i, p, o - 1, l - 1), t, n, g ? c : r);
                                        }
                                }
                        }
                    }
                }
                this.m || (this.register[t] = 1);
            }
        }
        return this;
    };
    function I(t, e, n, i, s) {
        return (
            n && 1 < t ?
                e + (i || 0) <= t ?
                    n + (s || 0)
                :   (((t - 1) / (e + (i || 0))) * (n + (s || 0)) + 1) | 0
            :   0
        );
    }
    function D(t, e, n, i, s, r, h) {
        let o = h ? t.h : t.map;
        (!e[n] || (h && !e[n][h])) && (t.s && (o = o[i]), h ? ((e = e[n] || (e[n] = y())), (e[h] = 1), (o = o[h] || (o[h] = y()))) : (e[n] = 1), (o = o[n] || (o[n] = [])), t.s || (o = o[i] || (o[i] = [])), (r && o.includes(s)) || ((o[o.length] = s), t.m && ((t = t.register[s] || (t.register[s] = [])), (t[t.length] = o))));
    }
    a.search = function (t, e, n) {
        n || (!e && A(t) ? ((n = t), (t = n.query)) : A(e) && (n = e));
        let i = [],
            s,
            r,
            h = 0;
        if (n) {
            (t = n.query || t), (e = n.limit), (h = n.offset || 0);
            var o = n.context;
            r = n.suggest;
        }
        if (t && ((t = this.encode('' + t)), (s = t.length), 1 < s)) {
            n = y();
            var l = [];
            for (let f = 0, m = 0, d; f < s; f++)
                if ((d = t[f]) && d.length >= this.B && !n[d])
                    if (this.s || r || this.map[d]) (l[m++] = d), (n[d] = 1);
                    else return i;
            (t = l), (s = t.length);
        }
        if (!s) return i;
        e || (e = 100), (o = this.depth && 1 < s && o !== !1), (n = 0);
        let u;
        o ? ((u = t[0]), (n = 1)) : 1 < s && t.sort(pt);
        for (let f, m; n < s; n++) {
            if (((m = t[n]), o ? ((f = V(this, i, r, e, h, s === 2, m, u)), (r && f === !1 && i.length) || (u = m)) : (f = V(this, i, r, e, h, s === 1, m)), f)) return f;
            if (r && n === s - 1) {
                if (((l = i.length), !l)) {
                    if (o) {
                        (o = 0), (n = -1);
                        continue;
                    }
                    return i;
                }
                if (l === 1) return ht(i[0], e, h);
            }
        }
        return st(i, e, h, r);
    };
    function V(t, e, n, i, s, r, h, o) {
        let l = [],
            u = o ? t.h : t.map;
        if ((t.s || (u = X(u, h, o, t.l)), u)) {
            let f = 0,
                m = Math.min(u.length, o ? t.A : t.D);
            for (let d = 0, p = 0, c, g; d < m && !((c = u[d]) && (t.s && (c = X(c, h, o, t.l)), s && c && r && ((g = c.length), g <= s ? ((s -= g), (c = null)) : ((c = c.slice(s)), (s = 0))), c && ((l[f++] = c), r && ((p += c.length), p >= i)))); d++);
            if (f) {
                if (r) return ht(l, i, 0);
                e[e.length] = l;
                return;
            }
        }
        return !n && l;
    }
    function ht(t, e, n) {
        return (t = t.length === 1 ? t[0] : [].concat.apply([], t)), n || t.length > e ? t.slice(n, n + e) : t;
    }
    function X(t, e, n, i) {
        return n ? ((i = i && e > n), (t = (t = t[i ? e : n]) && t[i ? n : e])) : (t = t[e]), t;
    }
    a.contain = function (t) {
        return !!this.register[t];
    };
    a.update = function (t, e) {
        return this.remove(t).add(t, e);
    };
    a.remove = function (t, e) {
        let n = this.register[t];
        if (n) {
            if (this.m) for (let i = 0, s; i < n.length; i++) (s = n[i]), s.splice(s.indexOf(t), 1);
            else T(this.map, t, this.D, this.s), this.depth && T(this.h, t, this.A, this.s);
            if ((e || delete this.register[t], this.cache)) {
                e = this.cache;
                for (let i = 0, s, r; i < e.h.length; i++) (r = e.h[i]), (s = e.cache[r]), s.includes(t) && (e.h.splice(i--, 1), delete e.cache[r]);
            }
        }
        return this;
    };
    function T(t, e, n, i, s) {
        let r = 0;
        if (t.constructor === Array)
            if (s) (e = t.indexOf(e)), e !== -1 ? 1 < t.length && (t.splice(e, 1), r++) : r++;
            else {
                s = Math.min(t.length, n);
                for (let h = 0, o; h < s; h++) (o = t[h]) && ((r = T(o, e, n, i, s)), i || r || delete t[h]);
            }
        else for (let h in t) (r = T(t[h], e, n, i, s)) || delete t[h];
        return r;
    }
    a.searchCache = rt;
    a.export = function (t, e, n, i, s, r) {
        let h = !0;
        typeof r == 'undefined' &&
            (h = new Promise((u) => {
                r = u;
            }));
        let o, l;
        switch (s || (s = 0)) {
            case 0:
                if (((o = 'reg'), this.m)) {
                    l = y();
                    for (let u in this.register) l[u] = 1;
                } else l = this.register;
                break;
            case 1:
                (o = 'cfg'), (l = { doc: 0, opt: this.s ? 1 : 0 });
                break;
            case 2:
                (o = 'map'), (l = this.map);
                break;
            case 3:
                (o = 'ctx'), (l = this.h);
                break;
            default:
                typeof n == 'undefined' && r && r();
                return;
        }
        return ot(t, e || this, n, o, i, s, l, r), h;
    };
    a.import = function (t, e) {
        if (e)
            switch ((v(e) && (e = JSON.parse(e)), t)) {
                case 'cfg':
                    this.s = !!e.opt;
                    break;
                case 'reg':
                    (this.m = !1), (this.register = e);
                    break;
                case 'map':
                    this.map = e;
                    break;
                case 'ctx':
                    this.h = e;
            }
    };
    it(C.prototype);
    function wt(t) {
        t = t.data;
        var e = self._index;
        let n = t.args;
        var i = t.task;
        switch (i) {
            case 'init':
                (i = t.options || {}), (t = t.factory), (e = i.encode), (i.cache = !1), e && e.indexOf('function') === 0 && (i.encode = Function('return ' + e)()), t ? (Function('return ' + t)()(self), (self._index = new self.FlexSearch.Index(i)), delete self.FlexSearch) : (self._index = new C(i));
                break;
            default:
                (t = t.id), (e = e[i].apply(e, n)), postMessage(i === 'search' ? { id: t, msg: e } : { id: t });
        }
    }
    var Y = 0;
    function j(t) {
        if (!(this instanceof j)) return new j(t);
        var e;
        t ? W((e = t.encode)) && (t.encode = e.toString()) : (t = {}), (e = (self || window)._factory) && (e = e.toString());
        let n = typeof window == 'undefined' && self.exports,
            i = this;
        (this.o = kt(e, n, t.worker)),
            (this.h = y()),
            this.o &&
                (n ?
                    this.o.on('message', function (s) {
                        i.h[s.id](s.msg), delete i.h[s.id];
                    })
                :   (this.o.onmessage = function (s) {
                        (s = s.data), i.h[s.id](s.msg), delete i.h[s.id];
                    }),
                this.o.postMessage({ task: 'init', factory: e, options: t }));
    }
    z('add');
    z('append');
    z('search');
    z('update');
    z('remove');
    function z(t) {
        j.prototype[t] = j.prototype[t + 'Async'] = function () {
            let e = this,
                n = [].slice.call(arguments);
            var i = n[n.length - 1];
            let s;
            return (
                W(i) && ((s = i), n.splice(n.length - 1, 1)),
                (i = new Promise(function (r) {
                    setTimeout(function () {
                        (e.h[++Y] = r), e.o.postMessage({ task: t, id: Y, args: n });
                    });
                })),
                s ? (i.then(s), this) : i
            );
        };
    }
    function kt(t, e, n) {
        let i;
        try {
            i =
                e ? new (U().Worker)(__dirname + '/node/node.js')
                : t ? new Worker(URL.createObjectURL(new Blob(['onmessage=' + wt.toString()], { type: 'text/javascript' })))
                : new Worker(v(n) ? n : 'worker/worker.js', { type: 'module' });
        } catch (s) {}
        return i;
    }
    function B(t) {
        if (!(this instanceof B)) return new B(t);
        var e = t.document || t.doc || t,
            n;
        (this.K = []), (this.h = []), (this.A = []), (this.register = y()), (this.key = ((n = e.key || e.id) && M(n, this.A)) || 'id'), (this.m = H(t.fastupdate)), (this.C = (n = e.store) && n !== !0 && []), (this.store = n && y()), (this.I = (n = e.tag) && M(n, this.A)), (this.l = n && y()), (this.cache = (n = t.cache) && new E(n)), (t.cache = !1), (this.o = t.worker), (this.async = !1), (n = y());
        let i = e.index || e.field || e;
        v(i) && (i = [i]);
        for (let s = 0, r, h; s < i.length; s++) (r = i[s]), v(r) || ((h = r), (r = r.field)), (h = A(h) ? Object.assign({}, t, h) : t), this.o && ((n[r] = new j(h)), n[r].o || (this.o = !1)), this.o || (n[r] = new C(h, this.register)), (this.K[s] = M(r, this.A)), (this.h[s] = r);
        if (this.C) for (t = e.store, v(t) && (t = [t]), e = 0; e < t.length; e++) this.C[e] = M(t[e], this.A);
        this.index = n;
    }
    function M(t, e) {
        let n = t.split(':'),
            i = 0;
        for (let s = 0; s < n.length; s++) (t = n[s]), 0 <= t.indexOf('[]') && (t = t.substring(0, t.length - 2)) && (e[i] = !0), t && (n[i++] = t);
        return i < n.length && (n.length = i), 1 < i ? n : n[0];
    }
    function _(t, e) {
        if (v(e)) t = t[e];
        else for (let n = 0; t && n < e.length; n++) t = t[e[n]];
        return t;
    }
    function N(t, e, n, i, s) {
        if (((t = t[s]), i === n.length - 1)) e[s] = t;
        else if (t)
            if (t.constructor === Array) for (e = e[s] = Array(t.length), s = 0; s < t.length; s++) N(t, e, n, i, s);
            else (e = e[s] || (e[s] = y())), (s = n[++i]), N(t, e, n, i, s);
    }
    function R(t, e, n, i, s, r, h, o) {
        if ((t = t[h]))
            if (i === e.length - 1) {
                if (t.constructor === Array) {
                    if (n[i]) {
                        for (e = 0; e < t.length; e++) s.add(r, t[e], !0, !0);
                        return;
                    }
                    t = t.join(' ');
                }
                s.add(r, t, o, !0);
            } else if (t.constructor === Array) for (h = 0; h < t.length; h++) R(t, e, n, i, s, r, h, o);
            else (h = e[++i]), R(t, e, n, i, s, r, h, o);
    }
    a = B.prototype;
    a.add = function (t, e, n) {
        if ((A(t) && ((e = t), (t = _(e, this.key))), e && (t || t === 0))) {
            if (!n && this.register[t]) return this.update(t, e);
            for (let i = 0, s, r; i < this.h.length; i++) (r = this.h[i]), (s = this.K[i]), v(s) && (s = [s]), R(e, s, this.A, 0, this.index[r], t, s[0], n);
            if (this.I) {
                let i = _(e, this.I),
                    s = y();
                v(i) && (i = [i]);
                for (let r = 0, h, o; r < i.length; r++)
                    if (((h = i[r]), !s[h] && ((s[h] = 1), (o = this.l[h] || (this.l[h] = [])), !n || !o.includes(t)) && ((o[o.length] = t), this.m))) {
                        let l = this.register[t] || (this.register[t] = []);
                        l[l.length] = o;
                    }
            }
            if (this.store && (!n || !this.store[t])) {
                let i;
                if (this.C) {
                    i = y();
                    for (let s = 0, r; s < this.C.length; s++) (r = this.C[s]), v(r) ? (i[r] = e[r]) : N(e, i, r, 0, r[0]);
                }
                this.store[t] = i || e;
            }
        }
        return this;
    };
    a.append = function (t, e) {
        return this.add(t, e, !0);
    };
    a.update = function (t, e) {
        return this.remove(t).add(t, e);
    };
    a.remove = function (t) {
        if ((A(t) && (t = _(t, this.key)), this.register[t])) {
            for (var e = 0; e < this.h.length && (this.index[this.h[e]].remove(t, !this.o), !this.m); e++);
            if (this.I && !this.m)
                for (let n in this.l) {
                    e = this.l[n];
                    let i = e.indexOf(t);
                    i !== -1 && (1 < e.length ? e.splice(i, 1) : delete this.l[n]);
                }
            this.store && delete this.store[t], delete this.register[t];
        }
        return this;
    };
    a.search = function (t, e, n, i) {
        n || (!e && A(t) ? ((n = t), (t = '')) : A(e) && ((n = e), (e = 0)));
        let s = [],
            r = [],
            h,
            o,
            l,
            u,
            f,
            m,
            d = 0;
        if (n)
            if (n.constructor === Array) (l = n), (n = null);
            else {
                if (((t = n.query || t), (l = (h = n.pluck) || n.index || n.field), (u = n.tag), (o = this.store && n.enrich), (f = n.bool === 'and'), (e = n.limit || e || 100), (m = n.offset || 0), u && (v(u) && (u = [u]), !t))) {
                    for (let c = 0, g; c < u.length; c++) (g = qt.call(this, u[c], e, m, o)) && ((s[s.length] = g), d++);
                    return d ? s : [];
                }
                v(l) && (l = [l]);
            }
        l || (l = this.h), (f = f && (1 < l.length || (u && 1 < u.length)));
        let p = !i && (this.o || this.async) && [];
        for (let c = 0, g, q, S; c < l.length; c++) {
            let k;
            if (((q = l[c]), v(q) || ((k = q), (q = k.field), (t = k.query || t), (e = k.limit || e), (o = k.enrich || o)), p)) p[c] = this.index[q].searchAsync(t, e, k || n);
            else {
                if ((i ? (g = i[c]) : (g = this.index[q].search(t, e, k || n)), (S = g && g.length), u && S)) {
                    let w = [],
                        F = 0;
                    f && (w[0] = [g]);
                    for (let P = 0, K, G; P < u.length; P++) (K = u[P]), (S = (G = this.l[K]) && G.length) && (F++, (w[w.length] = f ? [G] : G));
                    F && ((g = f ? st(w, e || 100, m || 0) : xt(g, w)), (S = g.length));
                }
                if (S) (r[d] = q), (s[d++] = g);
                else if (f) return [];
            }
        }
        if (p) {
            let c = this;
            return new Promise(function (g) {
                Promise.all(p).then(function (q) {
                    g(c.search(t, e, n, q));
                });
            });
        }
        if (!d) return [];
        if (h && (!o || !this.store)) return s[0];
        for (let c = 0, g; c < r.length; c++) {
            if (((g = s[c]), g.length && o && (g = lt.call(this, g)), h)) return g;
            s[c] = { field: r[c], result: g };
        }
        return s;
    };
    function qt(t, e, n, i) {
        let s = this.l[t],
            r = s && s.length - n;
        if (r && 0 < r) return (r > e || n) && (s = s.slice(n, n + e)), i && (s = lt.call(this, s)), { tag: t, result: s };
    }
    function lt(t) {
        let e = Array(t.length);
        for (let n = 0, i; n < t.length; n++) (i = t[n]), (e[n] = { id: i, doc: this.store[i] });
        return e;
    }
    a.contain = function (t) {
        return !!this.register[t];
    };
    a.get = function (t) {
        return this.store[t];
    };
    a.set = function (t, e) {
        return (this.store[t] = e), this;
    };
    a.searchCache = rt;
    a.export = function (t, e, n, i, s, r) {
        let h;
        if (
            (typeof r == 'undefined' &&
                (h = new Promise((o) => {
                    r = o;
                })),
            s || (s = 0),
            i || (i = 0),
            i < this.h.length)
        ) {
            let o = this.h[i],
                l = this.index[o];
            (e = this),
                setTimeout(function () {
                    l.export(t, e, s ? o : '', i, s++, r) || (i++, (s = 1), e.export(t, e, o, i, s, r));
                });
        } else {
            let o, l;
            switch (s) {
                case 1:
                    (o = 'tag'), (l = this.l), (n = null);
                    break;
                case 2:
                    (o = 'store'), (l = this.store), (n = null);
                    break;
                default:
                    r();
                    return;
            }
            ot(t, this, n, o, i, s, l, r);
        }
        return h;
    };
    a.import = function (t, e) {
        if (e)
            switch ((v(e) && (e = JSON.parse(e)), t)) {
                case 'tag':
                    this.l = e;
                    break;
                case 'reg':
                    (this.m = !1), (this.register = e);
                    for (let i = 0, s; i < this.h.length; i++) (s = this.index[this.h[i]]), (s.register = e), (s.m = !1);
                    break;
                case 'store':
                    this.store = e;
                    break;
                default:
                    t = t.split('.');
                    let n = t[0];
                    (t = t[1]), n && t && this.index[n].import(t, e);
            }
    };
    it(B.prototype);
    var St = { encode: ct, F: !1, G: '' },
        At = [x('[\xE0\xE1\xE2\xE3\xE4\xE5]'), 'a', x('[\xE8\xE9\xEA\xEB]'), 'e', x('[\xEC\xED\xEE\xEF]'), 'i', x('[\xF2\xF3\xF4\xF5\xF6\u0151]'), 'o', x('[\xF9\xFA\xFB\xFC\u0171]'), 'u', x('[\xFD\u0177\xFF]'), 'y', x('\xF1'), 'n', x('[\xE7c]'), 'k', x('\xDF'), 's', x(' & '), ' and '];
    function ct(t) {
        var e = (t = '' + t);
        return e.normalize && (e = e.normalize('NFD').replace(yt, '')), b.call(this, e.toLowerCase(), !t.normalize && At);
    }
    var Ct = { encode: ut, F: !1, G: 'strict' },
        Lt = /[^a-z0-9]+/,
        $ = { b: 'p', v: 'f', w: 'f', z: 's', x: 's', ß: 's', d: 't', n: 'm', c: 'k', g: 'k', j: 'k', q: 'k', i: 'e', y: 'e', u: 'o' };
    function ut(t) {
        t = ct.call(this, t).join(' ');
        let e = [];
        if (t) {
            let n = t.split(Lt),
                i = n.length;
            for (let s = 0, r, h = 0; s < i; s++)
                if ((t = n[s]) && (!this.filter || !this.filter[t])) {
                    r = t[0];
                    let o = $[r] || r,
                        l = o;
                    for (let u = 1; u < t.length; u++) {
                        r = t[u];
                        let f = $[r] || r;
                        f && f !== l && ((o += f), (l = f));
                    }
                    e[h++] = o;
                }
        }
        return e;
    }
    var jt = { encode: ft, F: !1, G: '' },
        Ft = [x('ae'), 'a', x('oe'), 'o', x('sh'), 's', x('th'), 't', x('ph'), 'f', x('pf'), 'f', x('(?![aeo])h(?![aeo])'), '', x('(?!^[aeo])h(?!^[aeo])'), ''];
    function ft(t, e) {
        return t && ((t = ut.call(this, t).join(' ')), 2 < t.length && (t = J(t, Ft)), e || (1 < t.length && (t = tt(t)), t && (t = t.split(' ')))), t || [];
    }
    var Ot = { encode: Bt, F: !1, G: '' },
        Dt = x('(?!\\b)[aeo]');
    function Bt(t) {
        return t && ((t = ft.call(this, t, !0)), 1 < t.length && (t = t.replace(Dt, '')), 1 < t.length && (t = tt(t)), t && (t = t.split(' '))), t || [];
    }
    L['latin:default'] = at;
    L['latin:simple'] = St;
    L['latin:balance'] = Ct;
    L['latin:advanced'] = jt;
    L['latin:extra'] = Ot;
    var dt = {
        Index: C,
        Document: B,
        Worker: j,
        registerCharset: function (t, e) {
            L[t] = e;
        },
        registerLanguage: function (t, e) {
            nt[t] = e;
        }
    };
    (function () {
        'use strict';
        let t = new dt.Document({ tokenize: 'forward', document: { id: 'id', index: [{ field: 'title' }, { field: 'tags' }, { field: 'content' }, { field: 'date', tokenize: 'strict', encode: !1 }], store: ['title', 'summary', 'date', 'permalink'] } });
        function e(r) {
            let h = document.querySelector('template').content,
                o = document.createDocumentFragment(),
                l = document.querySelector('.search-results');
            l.textContent = '';
            let u = Object.keys(r).length;
            if (u === 0 && query.value === '') document.querySelector('.search-no-results').classList.add('d-none'), document.querySelector('.search-no-recent').classList.remove('d-none');
            else if (u === 0 && query.value !== '') {
                document.querySelector('.search-no-recent').classList.add('d-none');
                let f = document.querySelector('.query-no-results');
                (f.innerText = query.value), document.querySelector('.search-no-results').classList.remove('d-none');
            } else document.querySelector('.search-no-recent').classList.add('d-none'), document.querySelector('.search-no-results').classList.add('d-none');
            for (let f in r) {
                let m = r[f],
                    d = h.cloneNode(!0),
                    p = d.querySelector('a'),
                    c = d.querySelector('time'),
                    g = d.querySelector('.content');
                (p.innerHTML = m.title), (p.href = m.permalink), (c.innerText = m.date), (g.innerHTML = m.summary), o.appendChild(d);
            }
            l.appendChild(o);
        }
        function n() {
            let r = document.querySelector('.search-text').value.trim(),
                o = t.search({ query: r, enrich: !0, limit: 99 }),
                l = {};
            o.forEach(function (u) {
                u.result.forEach(function (f) {
                    l[f.id] = f.doc;
                });
            }),
                e(l);
        }
        function i() {
            let r = document.querySelector('.search-form');
            r.addEventListener('submit', function (h) {
                h.preventDefault(), n();
            }),
                r.addEventListener('input', function () {
                    n();
                }),
                document.querySelector('.search-loading').classList.add('d-none'),
                document.querySelector('.search-input').classList.remove('d-none'),
                document.querySelector('.search-text').focus();
        }
        function s() {
            document.querySelector('.search-loading').classList.remove('d-none'),
                fetch('/search-index.json')
                    .then(function (r) {
                        return r.json();
                    })
                    .then(function (r) {
                        r.forEach(function (h) {
                            t.add(h);
                        });
                    });
        }
        s(), i();
    })();
})();
/*!
 * FlexSearch for Bootstrap based Thulite sites
 * Copyright 2021-2024 Thulite
 * Licensed under the MIT License
 * Based on https://github.com/frjo/hugo-theme-zen/blob/main/assets/js/search.js
 */
