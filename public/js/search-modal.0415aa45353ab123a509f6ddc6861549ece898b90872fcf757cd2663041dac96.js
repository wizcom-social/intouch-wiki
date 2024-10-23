(() => {
    var nn = Object.defineProperty,
        Lr = Object.defineProperties;
    var xr = Object.getOwnPropertyDescriptors;
    var tn = Object.getOwnPropertySymbols;
    var $r = Object.prototype.hasOwnProperty,
        Ir = Object.prototype.propertyIsEnumerable;
    var en = (i, t, e) => (t in i ? nn(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (i[t] = e)),
        H = (i, t) => {
            for (var e in t || (t = {})) $r.call(t, e) && en(i, e, t[e]);
            if (tn) for (var e of tn(t)) Ir.call(t, e) && en(i, e, t[e]);
            return i;
        },
        Ce = (i, t) => Lr(i, xr(t));
    var Pr = (i, t) => {
        for (var e in t) nn(i, e, { get: t[e], enumerable: !0 });
    };
    var Re = {};
    Pr(Re, { afterMain: () => cn, afterRead: () => on, afterWrite: () => dn, applyStyles: () => Bt, arrow: () => Se, auto: () => re, basePlacements: () => nt, beforeMain: () => an, beforeRead: () => rn, beforeWrite: () => un, bottom: () => L, clippingParents: () => oi, computeStyles: () => Ft, createPopper: () => pe, createPopperBase: () => An, createPopperLite: () => Tn, detectOverflow: () => j, end: () => ut, eventListeners: () => Kt, flip: () => $e, hide: () => Ie, left: () => C, main: () => ln, modifierPhases: () => li, offset: () => Pe, placements: () => oe, popper: () => Ot, popperGenerator: () => It, popperOffsets: () => Gt, preventOverflow: () => Me, read: () => sn, reference: () => ai, right: () => D, start: () => it, top: () => w, variationPlacements: () => Ne, viewport: () => se, write: () => fn });
    var w = 'top',
        L = 'bottom',
        D = 'right',
        C = 'left',
        re = 'auto',
        nt = [w, L, D, C],
        it = 'start',
        ut = 'end',
        oi = 'clippingParents',
        se = 'viewport',
        Ot = 'popper',
        ai = 'reference',
        Ne = nt.reduce(function (i, t) {
            return i.concat([t + '-' + it, t + '-' + ut]);
        }, []),
        oe = [].concat(nt, [re]).reduce(function (i, t) {
            return i.concat([t, t + '-' + it, t + '-' + ut]);
        }, []),
        rn = 'beforeRead',
        sn = 'read',
        on = 'afterRead',
        an = 'beforeMain',
        ln = 'main',
        cn = 'afterMain',
        un = 'beforeWrite',
        fn = 'write',
        dn = 'afterWrite',
        li = [rn, sn, on, an, ln, cn, un, fn, dn];
    function P(i) {
        return i ? (i.nodeName || '').toLowerCase() : null;
    }
    function y(i) {
        if (i == null) return window;
        if (i.toString() !== '[object Window]') {
            var t = i.ownerDocument;
            return (t && t.defaultView) || window;
        }
        return i;
    }
    function U(i) {
        var t = y(i).Element;
        return i instanceof t || i instanceof Element;
    }
    function $(i) {
        var t = y(i).HTMLElement;
        return i instanceof t || i instanceof HTMLElement;
    }
    function Wt(i) {
        if (typeof ShadowRoot == 'undefined') return !1;
        var t = y(i).ShadowRoot;
        return i instanceof t || i instanceof ShadowRoot;
    }
    function Mr(i) {
        var t = i.state;
        Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
                r = t.attributes[e] || {},
                s = t.elements[e];
            !$(s) ||
                !P(s) ||
                (Object.assign(s.style, n),
                Object.keys(r).forEach(function (o) {
                    var a = r[o];
                    a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? '' : a);
                }));
        });
    }
    function Rr(i) {
        var t = i.state,
            e = { popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' }, arrow: { position: 'absolute' }, reference: {} };
        return (
            Object.assign(t.elements.popper.style, e.popper),
            (t.styles = e),
            t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow),
            function () {
                Object.keys(t.elements).forEach(function (n) {
                    var r = t.elements[n],
                        s = t.attributes[n] || {},
                        o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : e[n]),
                        a = o.reduce(function (u, f) {
                            return (u[f] = ''), u;
                        }, {});
                    !$(r) ||
                        !P(r) ||
                        (Object.assign(r.style, a),
                        Object.keys(s).forEach(function (u) {
                            r.removeAttribute(u);
                        }));
                });
            }
        );
    }
    var Bt = { name: 'applyStyles', enabled: !0, phase: 'write', fn: Mr, effect: Rr, requires: ['computeStyles'] };
    function M(i) {
        return i.split('-')[0];
    }
    var tt = Math.max,
        Ct = Math.min,
        rt = Math.round;
    function jt() {
        var i = navigator.userAgentData;
        return i != null && i.brands && Array.isArray(i.brands) ?
                i.brands
                    .map(function (t) {
                        return t.brand + '/' + t.version;
                    })
                    .join(' ')
            :   navigator.userAgent;
    }
    function ae() {
        return !/^((?!chrome|android).)*safari/i.test(jt());
    }
    function G(i, t, e) {
        t === void 0 && (t = !1), e === void 0 && (e = !1);
        var n = i.getBoundingClientRect(),
            r = 1,
            s = 1;
        t && $(i) && ((r = (i.offsetWidth > 0 && rt(n.width) / i.offsetWidth) || 1), (s = (i.offsetHeight > 0 && rt(n.height) / i.offsetHeight) || 1));
        var o = U(i) ? y(i) : window,
            a = o.visualViewport,
            u = !ae() && e,
            f = (n.left + (u && a ? a.offsetLeft : 0)) / r,
            l = (n.top + (u && a ? a.offsetTop : 0)) / s,
            h = n.width / r,
            _ = n.height / s;
        return { width: h, height: _, top: l, right: f + h, bottom: l + _, left: f, x: f, y: l };
    }
    function Nt(i) {
        var t = G(i),
            e = i.offsetWidth,
            n = i.offsetHeight;
        return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: i.offsetLeft, y: i.offsetTop, width: e, height: n };
    }
    function le(i, t) {
        var e = t.getRootNode && t.getRootNode();
        if (i.contains(t)) return !0;
        if (e && Wt(e)) {
            var n = t;
            do {
                if (n && i.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            } while (n);
        }
        return !1;
    }
    function B(i) {
        return y(i).getComputedStyle(i);
    }
    function ci(i) {
        return ['table', 'td', 'th'].indexOf(P(i)) >= 0;
    }
    function k(i) {
        return ((U(i) ? i.ownerDocument : i.document) || window.document).documentElement;
    }
    function st(i) {
        return P(i) === 'html' ? i : i.assignedSlot || i.parentNode || (Wt(i) ? i.host : null) || k(i);
    }
    function pn(i) {
        return !$(i) || B(i).position === 'fixed' ? null : i.offsetParent;
    }
    function kr(i) {
        var t = /firefox/i.test(jt()),
            e = /Trident/i.test(jt());
        if (e && $(i)) {
            var n = B(i);
            if (n.position === 'fixed') return null;
        }
        var r = st(i);
        for (Wt(r) && (r = r.host); $(r) && ['html', 'body'].indexOf(P(r)) < 0; ) {
            var s = B(r);
            if (s.transform !== 'none' || s.perspective !== 'none' || s.contain === 'paint' || ['transform', 'perspective'].indexOf(s.willChange) !== -1 || (t && s.willChange === 'filter') || (t && s.filter && s.filter !== 'none')) return r;
            r = r.parentNode;
        }
        return null;
    }
    function et(i) {
        for (var t = y(i), e = pn(i); e && ci(e) && B(e).position === 'static'; ) e = pn(e);
        return e && (P(e) === 'html' || (P(e) === 'body' && B(e).position === 'static')) ? t : e || kr(i) || t;
    }
    function St(i) {
        return ['top', 'bottom'].indexOf(i) >= 0 ? 'x' : 'y';
    }
    function Dt(i, t, e) {
        return tt(i, Ct(t, e));
    }
    function hn(i, t, e) {
        var n = Dt(i, t, e);
        return n > e ? e : n;
    }
    function ce() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
    }
    function ue(i) {
        return Object.assign({}, ce(), i);
    }
    function fe(i, t) {
        return t.reduce(function (e, n) {
            return (e[n] = i), e;
        }, {});
    }
    var Vr = function (t, e) {
        return (t = typeof t == 'function' ? t(Object.assign({}, e.rects, { placement: e.placement })) : t), ue(typeof t != 'number' ? t : fe(t, nt));
    };
    function Hr(i) {
        var t,
            e = i.state,
            n = i.name,
            r = i.options,
            s = e.elements.arrow,
            o = e.modifiersData.popperOffsets,
            a = M(e.placement),
            u = St(a),
            f = [C, D].indexOf(a) >= 0,
            l = f ? 'height' : 'width';
        if (!(!s || !o)) {
            var h = Vr(r.padding, e),
                _ = Nt(s),
                d = u === 'y' ? w : C,
                g = u === 'y' ? L : D,
                m = e.rects.reference[l] + e.rects.reference[u] - o[u] - e.rects.popper[l],
                v = o[u] - e.rects.reference[u],
                T = et(s),
                N =
                    T ?
                        u === 'y' ?
                            T.clientHeight || 0
                        :   T.clientWidth || 0
                    :   0,
                S = m / 2 - v / 2,
                E = h[d],
                b = N - _[l] - h[g],
                A = N / 2 - _[l] / 2 + S,
                O = Dt(E, A, b),
                R = u;
            e.modifiersData[n] = ((t = {}), (t[R] = O), (t.centerOffset = O - A), t);
        }
    }
    function Wr(i) {
        var t = i.state,
            e = i.options,
            n = e.element,
            r = n === void 0 ? '[data-popper-arrow]' : n;
        r != null && ((typeof r == 'string' && ((r = t.elements.popper.querySelector(r)), !r)) || (le(t.elements.popper, r) && (t.elements.arrow = r)));
    }
    var Se = { name: 'arrow', enabled: !0, phase: 'main', fn: Hr, effect: Wr, requires: ['popperOffsets'], requiresIfExists: ['preventOverflow'] };
    function z(i) {
        return i.split('-')[1];
    }
    var Br = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
    function jr(i, t) {
        var e = i.x,
            n = i.y,
            r = t.devicePixelRatio || 1;
        return { x: rt(e * r) / r || 0, y: rt(n * r) / r || 0 };
    }
    function mn(i) {
        var t,
            e = i.popper,
            n = i.popperRect,
            r = i.placement,
            s = i.variation,
            o = i.offsets,
            a = i.position,
            u = i.gpuAcceleration,
            f = i.adaptive,
            l = i.roundOffsets,
            h = i.isFixed,
            _ = o.x,
            d = _ === void 0 ? 0 : _,
            g = o.y,
            m = g === void 0 ? 0 : g,
            v = typeof l == 'function' ? l({ x: d, y: m }) : { x: d, y: m };
        (d = v.x), (m = v.y);
        var T = o.hasOwnProperty('x'),
            N = o.hasOwnProperty('y'),
            S = C,
            E = w,
            b = window;
        if (f) {
            var A = et(e),
                O = 'clientHeight',
                R = 'clientWidth';
            if ((A === y(e) && ((A = k(e)), B(A).position !== 'static' && a === 'absolute' && ((O = 'scrollHeight'), (R = 'scrollWidth'))), (A = A), r === w || ((r === C || r === D) && s === ut))) {
                E = L;
                var I = h && A === b && b.visualViewport ? b.visualViewport.height : A[O];
                (m -= I - n.height), (m *= u ? 1 : -1);
            }
            if (r === C || ((r === w || r === L) && s === ut)) {
                S = D;
                var x = h && A === b && b.visualViewport ? b.visualViewport.width : A[R];
                (d -= x - n.width), (d *= u ? 1 : -1);
            }
        }
        var V = Object.assign({ position: a }, f && Br),
            Z = l === !0 ? jr({ x: d, y: m }, y(e)) : { x: d, y: m };
        if (((d = Z.x), (m = Z.y), u)) {
            var W;
            return Object.assign({}, V, ((W = {}), (W[E] = N ? '0' : ''), (W[S] = T ? '0' : ''), (W.transform = (b.devicePixelRatio || 1) <= 1 ? 'translate(' + d + 'px, ' + m + 'px)' : 'translate3d(' + d + 'px, ' + m + 'px, 0)'), W));
        }
        return Object.assign({}, V, ((t = {}), (t[E] = N ? m + 'px' : ''), (t[S] = T ? d + 'px' : ''), (t.transform = ''), t));
    }
    function Fr(i) {
        var t = i.state,
            e = i.options,
            n = e.gpuAcceleration,
            r = n === void 0 ? !0 : n,
            s = e.adaptive,
            o = s === void 0 ? !0 : s,
            a = e.roundOffsets,
            u = a === void 0 ? !0 : a,
            f = { placement: M(t.placement), variation: z(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === 'fixed' };
        t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, mn(Object.assign({}, f, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, mn(Object.assign({}, f, { offsets: t.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: u })))), (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
    }
    var Ft = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: Fr, data: {} };
    var De = { passive: !0 };
    function Kr(i) {
        var t = i.state,
            e = i.instance,
            n = i.options,
            r = n.scroll,
            s = r === void 0 ? !0 : r,
            o = n.resize,
            a = o === void 0 ? !0 : o,
            u = y(t.elements.popper),
            f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
            s &&
                f.forEach(function (l) {
                    l.addEventListener('scroll', e.update, De);
                }),
            a && u.addEventListener('resize', e.update, De),
            function () {
                s &&
                    f.forEach(function (l) {
                        l.removeEventListener('scroll', e.update, De);
                    }),
                    a && u.removeEventListener('resize', e.update, De);
            }
        );
    }
    var Kt = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: Kr, data: {} };
    var Yr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    function Yt(i) {
        return i.replace(/left|right|bottom|top/g, function (t) {
            return Yr[t];
        });
    }
    var Ur = { start: 'end', end: 'start' };
    function Le(i) {
        return i.replace(/start|end/g, function (t) {
            return Ur[t];
        });
    }
    function Lt(i) {
        var t = y(i),
            e = t.pageXOffset,
            n = t.pageYOffset;
        return { scrollLeft: e, scrollTop: n };
    }
    function xt(i) {
        return G(k(i)).left + Lt(i).scrollLeft;
    }
    function ui(i, t) {
        var e = y(i),
            n = k(i),
            r = e.visualViewport,
            s = n.clientWidth,
            o = n.clientHeight,
            a = 0,
            u = 0;
        if (r) {
            (s = r.width), (o = r.height);
            var f = ae();
            (f || (!f && t === 'fixed')) && ((a = r.offsetLeft), (u = r.offsetTop));
        }
        return { width: s, height: o, x: a + xt(i), y: u };
    }
    function fi(i) {
        var t,
            e = k(i),
            n = Lt(i),
            r = (t = i.ownerDocument) == null ? void 0 : t.body,
            s = tt(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
            o = tt(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
            a = -n.scrollLeft + xt(i),
            u = -n.scrollTop;
        return B(r || e).direction === 'rtl' && (a += tt(e.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: o, x: a, y: u };
    }
    function $t(i) {
        var t = B(i),
            e = t.overflow,
            n = t.overflowX,
            r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(e + r + n);
    }
    function xe(i) {
        return (
            ['html', 'body', '#document'].indexOf(P(i)) >= 0 ? i.ownerDocument.body
            : $(i) && $t(i) ? i
            : xe(st(i))
        );
    }
    function ft(i, t) {
        var e;
        t === void 0 && (t = []);
        var n = xe(i),
            r = n === ((e = i.ownerDocument) == null ? void 0 : e.body),
            s = y(n),
            o = r ? [s].concat(s.visualViewport || [], $t(n) ? n : []) : n,
            a = t.concat(o);
        return r ? a : a.concat(ft(st(o)));
    }
    function Ut(i) {
        return Object.assign({}, i, { left: i.x, top: i.y, right: i.x + i.width, bottom: i.y + i.height });
    }
    function Gr(i, t) {
        var e = G(i, !1, t === 'fixed');
        return (e.top = e.top + i.clientTop), (e.left = e.left + i.clientLeft), (e.bottom = e.top + i.clientHeight), (e.right = e.left + i.clientWidth), (e.width = i.clientWidth), (e.height = i.clientHeight), (e.x = e.left), (e.y = e.top), e;
    }
    function _n(i, t, e) {
        return (
            t === se ? Ut(ui(i, e))
            : U(t) ? Gr(t, e)
            : Ut(fi(k(i)))
        );
    }
    function zr(i) {
        var t = ft(st(i)),
            e = ['absolute', 'fixed'].indexOf(B(i).position) >= 0,
            n = e && $(i) ? et(i) : i;
        return U(n) ?
                t.filter(function (r) {
                    return U(r) && le(r, n) && P(r) !== 'body';
                })
            :   [];
    }
    function di(i, t, e, n) {
        var r = t === 'clippingParents' ? zr(i) : [].concat(t),
            s = [].concat(r, [e]),
            o = s[0],
            a = s.reduce(
                function (u, f) {
                    var l = _n(i, f, n);
                    return (u.top = tt(l.top, u.top)), (u.right = Ct(l.right, u.right)), (u.bottom = Ct(l.bottom, u.bottom)), (u.left = tt(l.left, u.left)), u;
                },
                _n(i, o, n)
            );
        return (a.width = a.right - a.left), (a.height = a.bottom - a.top), (a.x = a.left), (a.y = a.top), a;
    }
    function de(i) {
        var t = i.reference,
            e = i.element,
            n = i.placement,
            r = n ? M(n) : null,
            s = n ? z(n) : null,
            o = t.x + t.width / 2 - e.width / 2,
            a = t.y + t.height / 2 - e.height / 2,
            u;
        switch (r) {
            case w:
                u = { x: o, y: t.y - e.height };
                break;
            case L:
                u = { x: o, y: t.y + t.height };
                break;
            case D:
                u = { x: t.x + t.width, y: a };
                break;
            case C:
                u = { x: t.x - e.width, y: a };
                break;
            default:
                u = { x: t.x, y: t.y };
        }
        var f = r ? St(r) : null;
        if (f != null) {
            var l = f === 'y' ? 'height' : 'width';
            switch (s) {
                case it:
                    u[f] = u[f] - (t[l] / 2 - e[l] / 2);
                    break;
                case ut:
                    u[f] = u[f] + (t[l] / 2 - e[l] / 2);
                    break;
                default:
            }
        }
        return u;
    }
    function j(i, t) {
        t === void 0 && (t = {});
        var e = t,
            n = e.placement,
            r = n === void 0 ? i.placement : n,
            s = e.strategy,
            o = s === void 0 ? i.strategy : s,
            a = e.boundary,
            u = a === void 0 ? oi : a,
            f = e.rootBoundary,
            l = f === void 0 ? se : f,
            h = e.elementContext,
            _ = h === void 0 ? Ot : h,
            d = e.altBoundary,
            g = d === void 0 ? !1 : d,
            m = e.padding,
            v = m === void 0 ? 0 : m,
            T = ue(typeof v != 'number' ? v : fe(v, nt)),
            N = _ === Ot ? ai : Ot,
            S = i.rects.popper,
            E = i.elements[g ? N : _],
            b = di(U(E) ? E : E.contextElement || k(i.elements.popper), u, l, o),
            A = G(i.elements.reference),
            O = de({ reference: A, element: S, strategy: 'absolute', placement: r }),
            R = Ut(Object.assign({}, S, O)),
            I = _ === Ot ? R : A,
            x = { top: b.top - I.top + T.top, bottom: I.bottom - b.bottom + T.bottom, left: b.left - I.left + T.left, right: I.right - b.right + T.right },
            V = i.modifiersData.offset;
        if (_ === Ot && V) {
            var Z = V[r];
            Object.keys(x).forEach(function (W) {
                var bt = [D, L].indexOf(W) >= 0 ? 1 : -1,
                    At = [w, L].indexOf(W) >= 0 ? 'y' : 'x';
                x[W] += Z[At] * bt;
            });
        }
        return x;
    }
    function pi(i, t) {
        t === void 0 && (t = {});
        var e = t,
            n = e.placement,
            r = e.boundary,
            s = e.rootBoundary,
            o = e.padding,
            a = e.flipVariations,
            u = e.allowedAutoPlacements,
            f = u === void 0 ? oe : u,
            l = z(n),
            h =
                l ?
                    a ? Ne
                    :   Ne.filter(function (g) {
                            return z(g) === l;
                        })
                :   nt,
            _ = h.filter(function (g) {
                return f.indexOf(g) >= 0;
            });
        _.length === 0 && (_ = h);
        var d = _.reduce(function (g, m) {
            return (g[m] = j(i, { placement: m, boundary: r, rootBoundary: s, padding: o })[M(m)]), g;
        }, {});
        return Object.keys(d).sort(function (g, m) {
            return d[g] - d[m];
        });
    }
    function qr(i) {
        if (M(i) === re) return [];
        var t = Yt(i);
        return [Le(i), t, Le(t)];
    }
    function Xr(i) {
        var t = i.state,
            e = i.options,
            n = i.name;
        if (!t.modifiersData[n]._skip) {
            for (
                var r = e.mainAxis,
                    s = r === void 0 ? !0 : r,
                    o = e.altAxis,
                    a = o === void 0 ? !0 : o,
                    u = e.fallbackPlacements,
                    f = e.padding,
                    l = e.boundary,
                    h = e.rootBoundary,
                    _ = e.altBoundary,
                    d = e.flipVariations,
                    g = d === void 0 ? !0 : d,
                    m = e.allowedAutoPlacements,
                    v = t.options.placement,
                    T = M(v),
                    N = T === v,
                    S = u || (N || !g ? [Yt(v)] : qr(v)),
                    E = [v].concat(S).reduce(function (Ht, ct) {
                        return Ht.concat(M(ct) === re ? pi(t, { placement: ct, boundary: l, rootBoundary: h, padding: f, flipVariations: g, allowedAutoPlacements: m }) : ct);
                    }, []),
                    b = t.rects.reference,
                    A = t.rects.popper,
                    O = new Map(),
                    R = !0,
                    I = E[0],
                    x = 0;
                x < E.length;
                x++
            ) {
                var V = E[x],
                    Z = M(V),
                    W = z(V) === it,
                    bt = [w, L].indexOf(Z) >= 0,
                    At = bt ? 'width' : 'height',
                    K = j(t, { placement: V, boundary: l, rootBoundary: h, altBoundary: _, padding: f }),
                    J =
                        bt ?
                            W ? D
                            :   C
                        : W ? L
                        : w;
                b[At] > A[At] && (J = Yt(J));
                var Ae = Yt(J),
                    Tt = [];
                if (
                    (s && Tt.push(K[Z] <= 0),
                    a && Tt.push(K[J] <= 0, K[Ae] <= 0),
                    Tt.every(function (Ht) {
                        return Ht;
                    }))
                ) {
                    (I = V), (R = !1);
                    break;
                }
                O.set(V, Tt);
            }
            if (R)
                for (
                    var Te = g ? 3 : 1,
                        ii = function (ct) {
                            var ne = E.find(function (we) {
                                var yt = O.get(we);
                                if (yt)
                                    return yt.slice(0, ct).every(function (ni) {
                                        return ni;
                                    });
                            });
                            if (ne) return (I = ne), 'break';
                        },
                        ie = Te;
                    ie > 0;
                    ie--
                ) {
                    var ye = ii(ie);
                    if (ye === 'break') break;
                }
            t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
        }
    }
    var $e = { name: 'flip', enabled: !0, phase: 'main', fn: Xr, requiresIfExists: ['offset'], data: { _skip: !1 } };
    function gn(i, t, e) {
        return e === void 0 && (e = { x: 0, y: 0 }), { top: i.top - t.height - e.y, right: i.right - t.width + e.x, bottom: i.bottom - t.height + e.y, left: i.left - t.width - e.x };
    }
    function En(i) {
        return [w, D, L, C].some(function (t) {
            return i[t] >= 0;
        });
    }
    function Qr(i) {
        var t = i.state,
            e = i.name,
            n = t.rects.reference,
            r = t.rects.popper,
            s = t.modifiersData.preventOverflow,
            o = j(t, { elementContext: 'reference' }),
            a = j(t, { altBoundary: !0 }),
            u = gn(o, n),
            f = gn(a, r, s),
            l = En(u),
            h = En(f);
        (t.modifiersData[e] = { referenceClippingOffsets: u, popperEscapeOffsets: f, isReferenceHidden: l, hasPopperEscaped: h }), (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-reference-hidden': l, 'data-popper-escaped': h }));
    }
    var Ie = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Qr };
    function Zr(i, t, e) {
        var n = M(i),
            r = [C, w].indexOf(n) >= 0 ? -1 : 1,
            s = typeof e == 'function' ? e(Object.assign({}, t, { placement: i })) : e,
            o = s[0],
            a = s[1];
        return (o = o || 0), (a = (a || 0) * r), [C, D].indexOf(n) >= 0 ? { x: a, y: o } : { x: o, y: a };
    }
    function Jr(i) {
        var t = i.state,
            e = i.options,
            n = i.name,
            r = e.offset,
            s = r === void 0 ? [0, 0] : r,
            o = oe.reduce(function (l, h) {
                return (l[h] = Zr(h, t.rects, s)), l;
            }, {}),
            a = o[t.placement],
            u = a.x,
            f = a.y;
        t.modifiersData.popperOffsets != null && ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += f)), (t.modifiersData[n] = o);
    }
    var Pe = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Jr };
    function ts(i) {
        var t = i.state,
            e = i.name;
        t.modifiersData[e] = de({ reference: t.rects.reference, element: t.rects.popper, strategy: 'absolute', placement: t.placement });
    }
    var Gt = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: ts, data: {} };
    function hi(i) {
        return i === 'x' ? 'y' : 'x';
    }
    function es(i) {
        var t = i.state,
            e = i.options,
            n = i.name,
            r = e.mainAxis,
            s = r === void 0 ? !0 : r,
            o = e.altAxis,
            a = o === void 0 ? !1 : o,
            u = e.boundary,
            f = e.rootBoundary,
            l = e.altBoundary,
            h = e.padding,
            _ = e.tether,
            d = _ === void 0 ? !0 : _,
            g = e.tetherOffset,
            m = g === void 0 ? 0 : g,
            v = j(t, { boundary: u, rootBoundary: f, padding: h, altBoundary: l }),
            T = M(t.placement),
            N = z(t.placement),
            S = !N,
            E = St(T),
            b = hi(E),
            A = t.modifiersData.popperOffsets,
            O = t.rects.reference,
            R = t.rects.popper,
            I = typeof m == 'function' ? m(Object.assign({}, t.rects, { placement: t.placement })) : m,
            x = typeof I == 'number' ? { mainAxis: I, altAxis: I } : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
            V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            Z = { x: 0, y: 0 };
        if (A) {
            if (s) {
                var W,
                    bt = E === 'y' ? w : C,
                    At = E === 'y' ? L : D,
                    K = E === 'y' ? 'height' : 'width',
                    J = A[E],
                    Ae = J + v[bt],
                    Tt = J - v[At],
                    Te = d ? -R[K] / 2 : 0,
                    ii = N === it ? O[K] : R[K],
                    ie = N === it ? -R[K] : -O[K],
                    ye = t.elements.arrow,
                    Ht = d && ye ? Nt(ye) : { width: 0, height: 0 },
                    ct = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : ce(),
                    ne = ct[bt],
                    we = ct[At],
                    yt = Dt(0, O[K], Ht[K]),
                    ni = S ? O[K] / 2 - Te - yt - ne - x.mainAxis : ii - yt - ne - x.mainAxis,
                    wr = S ? -O[K] / 2 + Te + yt + we + x.mainAxis : ie + yt + we + x.mainAxis,
                    ri = t.elements.arrow && et(t.elements.arrow),
                    Or =
                        ri ?
                            E === 'y' ?
                                ri.clientTop || 0
                            :   ri.clientLeft || 0
                        :   0,
                    Yi = (W = V == null ? void 0 : V[E]) != null ? W : 0,
                    Cr = J + ni - Yi - Or,
                    Nr = J + wr - Yi,
                    Ui = Dt(d ? Ct(Ae, Cr) : Ae, J, d ? tt(Tt, Nr) : Tt);
                (A[E] = Ui), (Z[E] = Ui - J);
            }
            if (a) {
                var Gi,
                    Sr = E === 'x' ? w : C,
                    Dr = E === 'x' ? L : D,
                    wt = A[b],
                    Oe = b === 'y' ? 'height' : 'width',
                    zi = wt + v[Sr],
                    qi = wt - v[Dr],
                    si = [w, C].indexOf(T) !== -1,
                    Xi = (Gi = V == null ? void 0 : V[b]) != null ? Gi : 0,
                    Qi = si ? zi : wt - O[Oe] - R[Oe] - Xi + x.altAxis,
                    Zi = si ? wt + O[Oe] + R[Oe] - Xi - x.altAxis : qi,
                    Ji = d && si ? hn(Qi, wt, Zi) : Dt(d ? Qi : zi, wt, d ? Zi : qi);
                (A[b] = Ji), (Z[b] = Ji - wt);
            }
            t.modifiersData[n] = Z;
        }
    }
    var Me = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: es, requiresIfExists: ['offset'] };
    function mi(i) {
        return { scrollLeft: i.scrollLeft, scrollTop: i.scrollTop };
    }
    function _i(i) {
        return i === y(i) || !$(i) ? Lt(i) : mi(i);
    }
    function is(i) {
        var t = i.getBoundingClientRect(),
            e = rt(t.width) / i.offsetWidth || 1,
            n = rt(t.height) / i.offsetHeight || 1;
        return e !== 1 || n !== 1;
    }
    function gi(i, t, e) {
        e === void 0 && (e = !1);
        var n = $(t),
            r = $(t) && is(t),
            s = k(t),
            o = G(i, r, e),
            a = { scrollLeft: 0, scrollTop: 0 },
            u = { x: 0, y: 0 };
        return (n || (!n && !e)) && ((P(t) !== 'body' || $t(s)) && (a = _i(t)), $(t) ? ((u = G(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop)) : s && (u.x = xt(s))), { x: o.left + a.scrollLeft - u.x, y: o.top + a.scrollTop - u.y, width: o.width, height: o.height };
    }
    function ns(i) {
        var t = new Map(),
            e = new Set(),
            n = [];
        i.forEach(function (s) {
            t.set(s.name, s);
        });
        function r(s) {
            e.add(s.name);
            var o = [].concat(s.requires || [], s.requiresIfExists || []);
            o.forEach(function (a) {
                if (!e.has(a)) {
                    var u = t.get(a);
                    u && r(u);
                }
            }),
                n.push(s);
        }
        return (
            i.forEach(function (s) {
                e.has(s.name) || r(s);
            }),
            n
        );
    }
    function Ei(i) {
        var t = ns(i);
        return li.reduce(function (e, n) {
            return e.concat(
                t.filter(function (r) {
                    return r.phase === n;
                })
            );
        }, []);
    }
    function vi(i) {
        var t;
        return function () {
            return (
                t ||
                    (t = new Promise(function (e) {
                        Promise.resolve().then(function () {
                            (t = void 0), e(i());
                        });
                    })),
                t
            );
        };
    }
    function bi(i) {
        var t = i.reduce(function (e, n) {
            var r = e[n.name];
            return (e[n.name] = r ? Object.assign({}, r, n, { options: Object.assign({}, r.options, n.options), data: Object.assign({}, r.data, n.data) }) : n), e;
        }, {});
        return Object.keys(t).map(function (e) {
            return t[e];
        });
    }
    var vn = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
    function bn() {
        for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++) t[e] = arguments[e];
        return !t.some(function (n) {
            return !(n && typeof n.getBoundingClientRect == 'function');
        });
    }
    function It(i) {
        i === void 0 && (i = {});
        var t = i,
            e = t.defaultModifiers,
            n = e === void 0 ? [] : e,
            r = t.defaultOptions,
            s = r === void 0 ? vn : r;
        return function (a, u, f) {
            f === void 0 && (f = s);
            var l = { placement: 'bottom', orderedModifiers: [], options: Object.assign({}, vn, s), modifiersData: {}, elements: { reference: a, popper: u }, attributes: {}, styles: {} },
                h = [],
                _ = !1,
                d = {
                    state: l,
                    setOptions: function (T) {
                        var N = typeof T == 'function' ? T(l.options) : T;
                        m(),
                            (l.options = Object.assign({}, s, l.options, N)),
                            (l.scrollParents = {
                                reference:
                                    U(a) ? ft(a)
                                    : a.contextElement ? ft(a.contextElement)
                                    : [],
                                popper: ft(u)
                            });
                        var S = Ei(bi([].concat(n, l.options.modifiers)));
                        return (
                            (l.orderedModifiers = S.filter(function (E) {
                                return E.enabled;
                            })),
                            g(),
                            d.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!_) {
                            var T = l.elements,
                                N = T.reference,
                                S = T.popper;
                            if (bn(N, S)) {
                                (l.rects = { reference: gi(N, et(S), l.options.strategy === 'fixed'), popper: Nt(S) }),
                                    (l.reset = !1),
                                    (l.placement = l.options.placement),
                                    l.orderedModifiers.forEach(function (x) {
                                        return (l.modifiersData[x.name] = Object.assign({}, x.data));
                                    });
                                for (var E = 0; E < l.orderedModifiers.length; E++) {
                                    if (l.reset === !0) {
                                        (l.reset = !1), (E = -1);
                                        continue;
                                    }
                                    var b = l.orderedModifiers[E],
                                        A = b.fn,
                                        O = b.options,
                                        R = O === void 0 ? {} : O,
                                        I = b.name;
                                    typeof A == 'function' && (l = A({ state: l, options: R, name: I, instance: d }) || l);
                                }
                            }
                        }
                    },
                    update: vi(function () {
                        return new Promise(function (v) {
                            d.forceUpdate(), v(l);
                        });
                    }),
                    destroy: function () {
                        m(), (_ = !0);
                    }
                };
            if (!bn(a, u)) return d;
            d.setOptions(f).then(function (v) {
                !_ && f.onFirstUpdate && f.onFirstUpdate(v);
            });
            function g() {
                l.orderedModifiers.forEach(function (v) {
                    var T = v.name,
                        N = v.options,
                        S = N === void 0 ? {} : N,
                        E = v.effect;
                    if (typeof E == 'function') {
                        var b = E({ state: l, name: T, instance: d, options: S }),
                            A = function () {};
                        h.push(b || A);
                    }
                });
            }
            function m() {
                h.forEach(function (v) {
                    return v();
                }),
                    (h = []);
            }
            return d;
        };
    }
    var An = It();
    var rs = [Kt, Gt, Ft, Bt],
        Tn = It({ defaultModifiers: rs });
    var ss = [Kt, Gt, Ft, Bt, Pe, $e, Me, Se, Ie],
        pe = It({ defaultModifiers: ss });
    var dt = new Map(),
        Ai = {
            set(i, t, e) {
                dt.has(i) || dt.set(i, new Map());
                let n = dt.get(i);
                if (!n.has(t) && n.size !== 0) {
                    console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
                    return;
                }
                n.set(t, e);
            },
            get(i, t) {
                return (dt.has(i) && dt.get(i).get(t)) || null;
            },
            remove(i, t) {
                if (!dt.has(i)) return;
                let e = dt.get(i);
                e.delete(t), e.size === 0 && dt.delete(i);
            }
        },
        os = 1e6,
        as = 1e3,
        Ri = 'transitionend',
        Qn = (i) => (i && window.CSS && window.CSS.escape && (i = i.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), i),
        ls = (i) =>
            i == null ?
                `${i}`
            :   Object.prototype.toString
                    .call(i)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase(),
        cs = (i) => {
            do i += Math.floor(Math.random() * os);
            while (document.getElementById(i));
            return i;
        },
        us = (i) => {
            if (!i) return 0;
            let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(i),
                n = Number.parseFloat(t),
                r = Number.parseFloat(e);
            return !n && !r ? 0 : ((t = t.split(',')[0]), (e = e.split(',')[0]), (Number.parseFloat(t) + Number.parseFloat(e)) * as);
        },
        Zn = (i) => {
            i.dispatchEvent(new Event(Ri));
        },
        ot = (i) => (!i || typeof i != 'object' ? !1 : (typeof i.jquery != 'undefined' && (i = i[0]), typeof i.nodeType != 'undefined')),
        pt = (i) =>
            ot(i) ?
                i.jquery ?
                    i[0]
                :   i
            : typeof i == 'string' && i.length > 0 ? document.querySelector(Qn(i))
            : null,
        te = (i) => {
            if (!ot(i) || i.getClientRects().length === 0) return !1;
            let t = getComputedStyle(i).getPropertyValue('visibility') === 'visible',
                e = i.closest('details:not([open])');
            if (!e) return t;
            if (e !== i) {
                let n = i.closest('summary');
                if ((n && n.parentNode !== e) || n === null) return !1;
            }
            return t;
        },
        ht = (i) =>
            !i || i.nodeType !== Node.ELEMENT_NODE || i.classList.contains('disabled') ? !0
            : typeof i.disabled != 'undefined' ? i.disabled
            : i.hasAttribute('disabled') && i.getAttribute('disabled') !== 'false',
        Jn = (i) => {
            if (!document.documentElement.attachShadow) return null;
            if (typeof i.getRootNode == 'function') {
                let t = i.getRootNode();
                return t instanceof ShadowRoot ? t : null;
            }
            return (
                i instanceof ShadowRoot ? i
                : i.parentNode ? Jn(i.parentNode)
                : null
            );
        },
        Ye = () => {},
        ve = (i) => {
            i.offsetHeight;
        },
        tr = () => (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery') ? window.jQuery : null),
        Ti = [],
        fs = (i) => {
            document.readyState === 'loading' ?
                (Ti.length ||
                    document.addEventListener('DOMContentLoaded', () => {
                        for (let t of Ti) t();
                    }),
                Ti.push(i))
            :   i();
        },
        q = () => document.documentElement.dir === 'rtl',
        Q = (i) => {
            fs(() => {
                let t = tr();
                if (t) {
                    let e = i.NAME,
                        n = t.fn[e];
                    (t.fn[e] = i.jQueryInterface), (t.fn[e].Constructor = i), (t.fn[e].noConflict = () => ((t.fn[e] = n), i.jQueryInterface));
                }
            });
        },
        F = (i, t = [], e = i) => (typeof i == 'function' ? i(...t) : e),
        er = (i, t, e = !0) => {
            if (!e) {
                F(i);
                return;
            }
            let r = us(t) + 5,
                s = !1,
                o = ({ target: a }) => {
                    a === t && ((s = !0), t.removeEventListener(Ri, o), F(i));
                };
            t.addEventListener(Ri, o),
                setTimeout(() => {
                    s || Zn(t);
                }, r);
        },
        Bi = (i, t, e, n) => {
            let r = i.length,
                s = i.indexOf(t);
            return (
                s === -1 ?
                    !e && n ?
                        i[r - 1]
                    :   i[0]
                :   ((s += e ? 1 : -1), n && (s = (s + r) % r), i[Math.max(0, Math.min(s, r - 1))])
            );
        },
        ds = /[^.]*(?=\..*)\.|.*/,
        ps = /\..*/,
        hs = /::\d+$/,
        yi = {},
        yn = 1,
        ir = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
        ms = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
    function nr(i, t) {
        return (t && `${t}::${yn++}`) || i.uidEvent || yn++;
    }
    function rr(i) {
        let t = nr(i);
        return (i.uidEvent = t), (yi[t] = yi[t] || {}), yi[t];
    }
    function _s(i, t) {
        return function e(n) {
            return ji(n, { delegateTarget: i }), e.oneOff && c.off(i, n.type, t), t.apply(i, [n]);
        };
    }
    function gs(i, t, e) {
        return function n(r) {
            let s = i.querySelectorAll(t);
            for (let { target: o } = r; o && o !== this; o = o.parentNode) for (let a of s) if (a === o) return ji(r, { delegateTarget: o }), n.oneOff && c.off(i, r.type, t, e), e.apply(o, [r]);
        };
    }
    function sr(i, t, e = null) {
        return Object.values(i).find((n) => n.callable === t && n.delegationSelector === e);
    }
    function or(i, t, e) {
        let n = typeof t == 'string',
            r = n ? e : t || e,
            s = ar(i);
        return ms.has(s) || (s = i), [n, r, s];
    }
    function wn(i, t, e, n, r) {
        if (typeof t != 'string' || !i) return;
        let [s, o, a] = or(t, e, n);
        t in ir &&
            (o = ((g) =>
                function (m) {
                    if (!m.relatedTarget || (m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))) return g.call(this, m);
                })(o));
        let u = rr(i),
            f = u[a] || (u[a] = {}),
            l = sr(f, o, s ? e : null);
        if (l) {
            l.oneOff = l.oneOff && r;
            return;
        }
        let h = nr(o, t.replace(ds, '')),
            _ = s ? gs(i, e, o) : _s(i, o);
        (_.delegationSelector = s ? e : null), (_.callable = o), (_.oneOff = r), (_.uidEvent = h), (f[h] = _), i.addEventListener(a, _, s);
    }
    function ki(i, t, e, n, r) {
        let s = sr(t[e], n, r);
        s && (i.removeEventListener(e, s, !!r), delete t[e][s.uidEvent]);
    }
    function Es(i, t, e, n) {
        let r = t[e] || {};
        for (let [s, o] of Object.entries(r)) s.includes(n) && ki(i, t, e, o.callable, o.delegationSelector);
    }
    function ar(i) {
        return (i = i.replace(ps, '')), ir[i] || i;
    }
    var c = {
        on(i, t, e, n) {
            wn(i, t, e, n, !1);
        },
        one(i, t, e, n) {
            wn(i, t, e, n, !0);
        },
        off(i, t, e, n) {
            if (typeof t != 'string' || !i) return;
            let [r, s, o] = or(t, e, n),
                a = o !== t,
                u = rr(i),
                f = u[o] || {},
                l = t.startsWith('.');
            if (typeof s != 'undefined') {
                if (!Object.keys(f).length) return;
                ki(i, u, o, s, r ? e : null);
                return;
            }
            if (l) for (let h of Object.keys(u)) Es(i, u, h, t.slice(1));
            for (let [h, _] of Object.entries(f)) {
                let d = h.replace(hs, '');
                (!a || t.includes(d)) && ki(i, u, o, _.callable, _.delegationSelector);
            }
        },
        trigger(i, t, e) {
            if (typeof t != 'string' || !i) return null;
            let n = tr(),
                r = ar(t),
                s = t !== r,
                o = null,
                a = !0,
                u = !0,
                f = !1;
            s && n && ((o = n.Event(t, e)), n(i).trigger(o), (a = !o.isPropagationStopped()), (u = !o.isImmediatePropagationStopped()), (f = o.isDefaultPrevented()));
            let l = ji(new Event(t, { bubbles: a, cancelable: !0 }), e);
            return f && l.preventDefault(), u && i.dispatchEvent(l), l.defaultPrevented && o && o.preventDefault(), l;
        }
    };
    function ji(i, t = {}) {
        for (let [e, n] of Object.entries(t))
            try {
                i[e] = n;
            } catch (r) {
                Object.defineProperty(i, e, {
                    configurable: !0,
                    get() {
                        return n;
                    }
                });
            }
        return i;
    }
    function On(i) {
        if (i === 'true') return !0;
        if (i === 'false') return !1;
        if (i === Number(i).toString()) return Number(i);
        if (i === '' || i === 'null') return null;
        if (typeof i != 'string') return i;
        try {
            return JSON.parse(decodeURIComponent(i));
        } catch (t) {
            return i;
        }
    }
    function wi(i) {
        return i.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    var at = {
            setDataAttribute(i, t, e) {
                i.setAttribute(`data-bs-${wi(t)}`, e);
            },
            removeDataAttribute(i, t) {
                i.removeAttribute(`data-bs-${wi(t)}`);
            },
            getDataAttributes(i) {
                if (!i) return {};
                let t = {},
                    e = Object.keys(i.dataset).filter((n) => n.startsWith('bs') && !n.startsWith('bsConfig'));
                for (let n of e) {
                    let r = n.replace(/^bs/, '');
                    (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)), (t[r] = On(i.dataset[n]));
                }
                return t;
            },
            getDataAttribute(i, t) {
                return On(i.getAttribute(`data-bs-${wi(t)}`));
            }
        },
        Rt = class {
            static get Default() {
                return {};
            }
            static get DefaultType() {
                return {};
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!');
            }
            _getConfig(t) {
                return (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
            }
            _configAfterMerge(t) {
                return t;
            }
            _mergeConfigObj(t, e) {
                let n = ot(e) ? at.getDataAttribute(e, 'config') : {};
                return H(H(H(H({}, this.constructor.Default), typeof n == 'object' ? n : {}), ot(e) ? at.getDataAttributes(e) : {}), typeof t == 'object' ? t : {});
            }
            _typeCheckConfig(t, e = this.constructor.DefaultType) {
                for (let [n, r] of Object.entries(e)) {
                    let s = t[n],
                        o = ot(s) ? 'element' : ls(s);
                    if (!new RegExp(r).test(o)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${r}".`);
                }
            }
        },
        vs = '5.3.3',
        Y = class extends Rt {
            constructor(t, e) {
                super(), (t = pt(t)), t && ((this._element = t), (this._config = this._getConfig(e)), Ai.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
                Ai.remove(this._element, this.constructor.DATA_KEY), c.off(this._element, this.constructor.EVENT_KEY);
                for (let t of Object.getOwnPropertyNames(this)) this[t] = null;
            }
            _queueCallback(t, e, n = !0) {
                er(t, e, n);
            }
            _getConfig(t) {
                return (t = this._mergeConfigObj(t, this._element)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
            }
            static getInstance(t) {
                return Ai.get(pt(t), this.DATA_KEY);
            }
            static getOrCreateInstance(t, e = {}) {
                return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null);
            }
            static get VERSION() {
                return vs;
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`;
            }
            static eventName(t) {
                return `${t}${this.EVENT_KEY}`;
            }
        },
        Oi = (i) => {
            let t = i.getAttribute('data-bs-target');
            if (!t || t === '#') {
                let e = i.getAttribute('href');
                if (!e || (!e.includes('#') && !e.startsWith('.'))) return null;
                e.includes('#') && !e.startsWith('#') && (e = `#${e.split('#')[1]}`), (t = e && e !== '#' ? e.trim() : null);
            }
            return t ?
                    t
                        .split(',')
                        .map((e) => Qn(e))
                        .join(',')
                :   null;
        },
        p = {
            find(i, t = document.documentElement) {
                return [].concat(...Element.prototype.querySelectorAll.call(t, i));
            },
            findOne(i, t = document.documentElement) {
                return Element.prototype.querySelector.call(t, i);
            },
            children(i, t) {
                return [].concat(...i.children).filter((e) => e.matches(t));
            },
            parents(i, t) {
                let e = [],
                    n = i.parentNode.closest(t);
                for (; n; ) e.push(n), (n = n.parentNode.closest(t));
                return e;
            },
            prev(i, t) {
                let e = i.previousElementSibling;
                for (; e; ) {
                    if (e.matches(t)) return [e];
                    e = e.previousElementSibling;
                }
                return [];
            },
            next(i, t) {
                let e = i.nextElementSibling;
                for (; e; ) {
                    if (e.matches(t)) return [e];
                    e = e.nextElementSibling;
                }
                return [];
            },
            focusableChildren(i) {
                let t = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(',');
                return this.find(t, i).filter((e) => !ht(e) && te(e));
            },
            getSelectorFromElement(i) {
                let t = Oi(i);
                return t && p.findOne(t) ? t : null;
            },
            getElementFromSelector(i) {
                let t = Oi(i);
                return t ? p.findOne(t) : null;
            },
            getMultipleElementsFromSelector(i) {
                let t = Oi(i);
                return t ? p.find(t) : [];
            }
        },
        ei = (i, t = 'hide') => {
            let e = `click.dismiss${i.EVENT_KEY}`,
                n = i.NAME;
            c.on(document, e, `[data-bs-dismiss="${n}"]`, function (r) {
                if ((['A', 'AREA'].includes(this.tagName) && r.preventDefault(), ht(this))) return;
                let s = p.getElementFromSelector(this) || this.closest(`.${n}`);
                i.getOrCreateInstance(s)[t]();
            });
        },
        bs = 'alert',
        As = 'bs.alert',
        lr = `.${As}`,
        Ts = `close${lr}`,
        ys = `closed${lr}`,
        ws = 'fade',
        Os = 'show',
        Ue = class i extends Y {
            static get NAME() {
                return bs;
            }
            close() {
                if (c.trigger(this._element, Ts).defaultPrevented) return;
                this._element.classList.remove(Os);
                let e = this._element.classList.contains(ws);
                this._queueCallback(() => this._destroyElement(), this._element, e);
            }
            _destroyElement() {
                this._element.remove(), c.trigger(this._element, ys), this.dispose();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this);
                    if (typeof t == 'string') {
                        if (e[t] === void 0 || t.startsWith('_') || t === 'constructor') throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        };
    ei(Ue, 'close');
    Q(Ue);
    var Cs = 'button',
        Ns = 'bs.button',
        Ss = `.${Ns}`,
        Ds = '.data-api',
        Ls = 'active',
        Cn = '[data-bs-toggle="button"]',
        xs = `click${Ss}${Ds}`,
        Ge = class i extends Y {
            static get NAME() {
                return Cs;
            }
            toggle() {
                this._element.setAttribute('aria-pressed', this._element.classList.toggle(Ls));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this);
                    t === 'toggle' && e[t]();
                });
            }
        };
    c.on(document, xs, Cn, (i) => {
        i.preventDefault();
        let t = i.target.closest(Cn);
        Ge.getOrCreateInstance(t).toggle();
    });
    Q(Ge);
    var $s = 'swipe',
        ee = '.bs.swipe',
        Is = `touchstart${ee}`,
        Ps = `touchmove${ee}`,
        Ms = `touchend${ee}`,
        Rs = `pointerdown${ee}`,
        ks = `pointerup${ee}`,
        Vs = 'touch',
        Hs = 'pen',
        Ws = 'pointer-event',
        Bs = 40,
        js = { endCallback: null, leftCallback: null, rightCallback: null },
        Fs = { endCallback: '(function|null)', leftCallback: '(function|null)', rightCallback: '(function|null)' },
        ze = class i extends Rt {
            constructor(t, e) {
                super(), (this._element = t), !(!t || !i.isSupported()) && ((this._config = this._getConfig(e)), (this._deltaX = 0), (this._supportPointerEvents = !!window.PointerEvent), this._initEvents());
            }
            static get Default() {
                return js;
            }
            static get DefaultType() {
                return Fs;
            }
            static get NAME() {
                return $s;
            }
            dispose() {
                c.off(this._element, ee);
            }
            _start(t) {
                if (!this._supportPointerEvents) {
                    this._deltaX = t.touches[0].clientX;
                    return;
                }
                this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
            }
            _end(t) {
                this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), F(this._config.endCallback);
            }
            _move(t) {
                this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
                let t = Math.abs(this._deltaX);
                if (t <= Bs) return;
                let e = t / this._deltaX;
                (this._deltaX = 0), e && F(e > 0 ? this._config.rightCallback : this._config.leftCallback);
            }
            _initEvents() {
                this._supportPointerEvents ? (c.on(this._element, Rs, (t) => this._start(t)), c.on(this._element, ks, (t) => this._end(t)), this._element.classList.add(Ws)) : (c.on(this._element, Is, (t) => this._start(t)), c.on(this._element, Ps, (t) => this._move(t)), c.on(this._element, Ms, (t) => this._end(t)));
            }
            _eventIsPointerPenTouch(t) {
                return this._supportPointerEvents && (t.pointerType === Hs || t.pointerType === Vs);
            }
            static isSupported() {
                return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
            }
        },
        Ks = 'carousel',
        Ys = 'bs.carousel',
        Et = `.${Ys}`,
        cr = '.data-api',
        Us = 'ArrowLeft',
        Gs = 'ArrowRight',
        zs = 500,
        he = 'next',
        zt = 'prev',
        Xt = 'left',
        Fe = 'right',
        qs = `slide${Et}`,
        Ci = `slid${Et}`,
        Xs = `keydown${Et}`,
        Qs = `mouseenter${Et}`,
        Zs = `mouseleave${Et}`,
        Js = `dragstart${Et}`,
        to = `load${Et}${cr}`,
        eo = `click${Et}${cr}`,
        ur = 'carousel',
        ke = 'active',
        io = 'slide',
        no = 'carousel-item-end',
        ro = 'carousel-item-start',
        so = 'carousel-item-next',
        oo = 'carousel-item-prev',
        fr = '.active',
        dr = '.carousel-item',
        ao = fr + dr,
        lo = '.carousel-item img',
        co = '.carousel-indicators',
        uo = '[data-bs-slide], [data-bs-slide-to]',
        fo = '[data-bs-ride="carousel"]',
        po = { [Us]: Fe, [Gs]: Xt },
        ho = { interval: 5e3, keyboard: !0, pause: 'hover', ride: !1, touch: !0, wrap: !0 },
        mo = { interval: '(number|boolean)', keyboard: 'boolean', pause: '(string|boolean)', ride: '(boolean|string)', touch: 'boolean', wrap: 'boolean' },
        _e = class i extends Y {
            constructor(t, e) {
                super(t, e), (this._interval = null), (this._activeElement = null), (this._isSliding = !1), (this.touchTimeout = null), (this._swipeHelper = null), (this._indicatorsElement = p.findOne(co, this._element)), this._addEventListeners(), this._config.ride === ur && this.cycle();
            }
            static get Default() {
                return ho;
            }
            static get DefaultType() {
                return mo;
            }
            static get NAME() {
                return Ks;
            }
            next() {
                this._slide(he);
            }
            nextWhenVisible() {
                !document.hidden && te(this._element) && this.next();
            }
            prev() {
                this._slide(zt);
            }
            pause() {
                this._isSliding && Zn(this._element), this._clearInterval();
            }
            cycle() {
                this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
            }
            _maybeEnableCycle() {
                if (this._config.ride) {
                    if (this._isSliding) {
                        c.one(this._element, Ci, () => this.cycle());
                        return;
                    }
                    this.cycle();
                }
            }
            to(t) {
                let e = this._getItems();
                if (t > e.length - 1 || t < 0) return;
                if (this._isSliding) {
                    c.one(this._element, Ci, () => this.to(t));
                    return;
                }
                let n = this._getItemIndex(this._getActive());
                if (n === t) return;
                let r = t > n ? he : zt;
                this._slide(r, e[t]);
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(t) {
                return (t.defaultInterval = t.interval), t;
            }
            _addEventListeners() {
                this._config.keyboard && c.on(this._element, Xs, (t) => this._keydown(t)), this._config.pause === 'hover' && (c.on(this._element, Qs, () => this.pause()), c.on(this._element, Zs, () => this._maybeEnableCycle())), this._config.touch && ze.isSupported() && this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                for (let n of p.find(lo, this._element)) c.on(n, Js, (r) => r.preventDefault());
                let e = {
                    leftCallback: () => this._slide(this._directionToOrder(Xt)),
                    rightCallback: () => this._slide(this._directionToOrder(Fe)),
                    endCallback: () => {
                        this._config.pause === 'hover' && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), zs + this._config.interval)));
                    }
                };
                this._swipeHelper = new ze(this._element, e);
            }
            _keydown(t) {
                if (/input|textarea/i.test(t.target.tagName)) return;
                let e = po[t.key];
                e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
            }
            _getItemIndex(t) {
                return this._getItems().indexOf(t);
            }
            _setActiveIndicatorElement(t) {
                if (!this._indicatorsElement) return;
                let e = p.findOne(fr, this._indicatorsElement);
                e.classList.remove(ke), e.removeAttribute('aria-current');
                let n = p.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
                n && (n.classList.add(ke), n.setAttribute('aria-current', 'true'));
            }
            _updateInterval() {
                let t = this._activeElement || this._getActive();
                if (!t) return;
                let e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
                this._config.interval = e || this._config.defaultInterval;
            }
            _slide(t, e = null) {
                if (this._isSliding) return;
                let n = this._getActive(),
                    r = t === he,
                    s = e || Bi(this._getItems(), n, r, this._config.wrap);
                if (s === n) return;
                let o = this._getItemIndex(s),
                    a = (d) => c.trigger(this._element, d, { relatedTarget: s, direction: this._orderToDirection(t), from: this._getItemIndex(n), to: o });
                if (a(qs).defaultPrevented || !n || !s) return;
                let f = !!this._interval;
                this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(o), (this._activeElement = s);
                let l = r ? ro : no,
                    h = r ? so : oo;
                s.classList.add(h), ve(s), n.classList.add(l), s.classList.add(l);
                let _ = () => {
                    s.classList.remove(l, h), s.classList.add(ke), n.classList.remove(ke, h, l), (this._isSliding = !1), a(Ci);
                };
                this._queueCallback(_, n, this._isAnimated()), f && this.cycle();
            }
            _isAnimated() {
                return this._element.classList.contains(io);
            }
            _getActive() {
                return p.findOne(ao, this._element);
            }
            _getItems() {
                return p.find(dr, this._element);
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(t) {
                return (
                    q() ?
                        t === Xt ?
                            zt
                        :   he
                    : t === Xt ? he
                    : zt
                );
            }
            _orderToDirection(t) {
                return (
                    q() ?
                        t === zt ?
                            Xt
                        :   Fe
                    : t === zt ? Fe
                    : Xt
                );
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this, t);
                    if (typeof t == 'number') {
                        e.to(t);
                        return;
                    }
                    if (typeof t == 'string') {
                        if (e[t] === void 0 || t.startsWith('_') || t === 'constructor') throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        };
    c.on(document, eo, uo, function (i) {
        let t = p.getElementFromSelector(this);
        if (!t || !t.classList.contains(ur)) return;
        i.preventDefault();
        let e = _e.getOrCreateInstance(t),
            n = this.getAttribute('data-bs-slide-to');
        if (n) {
            e.to(n), e._maybeEnableCycle();
            return;
        }
        if (at.getDataAttribute(this, 'slide') === 'next') {
            e.next(), e._maybeEnableCycle();
            return;
        }
        e.prev(), e._maybeEnableCycle();
    });
    c.on(window, to, () => {
        let i = p.find(fo);
        for (let t of i) _e.getOrCreateInstance(t);
    });
    Q(_e);
    var _o = 'collapse',
        go = 'bs.collapse',
        be = `.${go}`,
        Eo = '.data-api',
        vo = `show${be}`,
        bo = `shown${be}`,
        Ao = `hide${be}`,
        To = `hidden${be}`,
        yo = `click${be}${Eo}`,
        Ni = 'show',
        Zt = 'collapse',
        Ve = 'collapsing',
        wo = 'collapsed',
        Oo = `:scope .${Zt} .${Zt}`,
        Co = 'collapse-horizontal',
        No = 'width',
        So = 'height',
        Do = '.collapse.show, .collapse.collapsing',
        Vi = '[data-bs-toggle="collapse"]',
        Lo = { parent: null, toggle: !0 },
        xo = { parent: '(null|element)', toggle: 'boolean' },
        qe = class i extends Y {
            constructor(t, e) {
                super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
                let n = p.find(Vi);
                for (let r of n) {
                    let s = p.getSelectorFromElement(r),
                        o = p.find(s).filter((a) => a === this._element);
                    s !== null && o.length && this._triggerArray.push(r);
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
            }
            static get Default() {
                return Lo;
            }
            static get DefaultType() {
                return xo;
            }
            static get NAME() {
                return _o;
            }
            toggle() {
                this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let t = [];
                if (
                    (this._config.parent &&
                        (t = this._getFirstLevelChildren(Do)
                            .filter((a) => a !== this._element)
                            .map((a) => i.getOrCreateInstance(a, { toggle: !1 }))),
                    (t.length && t[0]._isTransitioning) || c.trigger(this._element, vo).defaultPrevented)
                )
                    return;
                for (let a of t) a.hide();
                let n = this._getDimension();
                this._element.classList.remove(Zt), this._element.classList.add(Ve), (this._element.style[n] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
                let r = () => {
                        (this._isTransitioning = !1), this._element.classList.remove(Ve), this._element.classList.add(Zt, Ni), (this._element.style[n] = ''), c.trigger(this._element, bo);
                    },
                    o = `scroll${n[0].toUpperCase() + n.slice(1)}`;
                this._queueCallback(r, this._element, !0), (this._element.style[n] = `${this._element[o]}px`);
            }
            hide() {
                if (this._isTransitioning || !this._isShown() || c.trigger(this._element, Ao).defaultPrevented) return;
                let e = this._getDimension();
                (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`), ve(this._element), this._element.classList.add(Ve), this._element.classList.remove(Zt, Ni);
                for (let r of this._triggerArray) {
                    let s = p.getElementFromSelector(r);
                    s && !this._isShown(s) && this._addAriaAndCollapsedClass([r], !1);
                }
                this._isTransitioning = !0;
                let n = () => {
                    (this._isTransitioning = !1), this._element.classList.remove(Ve), this._element.classList.add(Zt), c.trigger(this._element, To);
                };
                (this._element.style[e] = ''), this._queueCallback(n, this._element, !0);
            }
            _isShown(t = this._element) {
                return t.classList.contains(Ni);
            }
            _configAfterMerge(t) {
                return (t.toggle = !!t.toggle), (t.parent = pt(t.parent)), t;
            }
            _getDimension() {
                return this._element.classList.contains(Co) ? No : So;
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                let t = this._getFirstLevelChildren(Vi);
                for (let e of t) {
                    let n = p.getElementFromSelector(e);
                    n && this._addAriaAndCollapsedClass([e], this._isShown(n));
                }
            }
            _getFirstLevelChildren(t) {
                let e = p.find(Oo, this._config.parent);
                return p.find(t, this._config.parent).filter((n) => !e.includes(n));
            }
            _addAriaAndCollapsedClass(t, e) {
                if (t.length) for (let n of t) n.classList.toggle(wo, !e), n.setAttribute('aria-expanded', e);
            }
            static jQueryInterface(t) {
                let e = {};
                return (
                    typeof t == 'string' && /show|hide/.test(t) && (e.toggle = !1),
                    this.each(function () {
                        let n = i.getOrCreateInstance(this, e);
                        if (typeof t == 'string') {
                            if (typeof n[t] == 'undefined') throw new TypeError(`No method named "${t}"`);
                            n[t]();
                        }
                    })
                );
            }
        };
    c.on(document, yo, Vi, function (i) {
        (i.target.tagName === 'A' || (i.delegateTarget && i.delegateTarget.tagName === 'A')) && i.preventDefault();
        for (let t of p.getMultipleElementsFromSelector(this)) qe.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
    Q(qe);
    var Nn = 'dropdown',
        $o = 'bs.dropdown',
        kt = `.${$o}`,
        Fi = '.data-api',
        Io = 'Escape',
        Sn = 'Tab',
        Po = 'ArrowUp',
        Dn = 'ArrowDown',
        Mo = 2,
        Ro = `hide${kt}`,
        ko = `hidden${kt}`,
        Vo = `show${kt}`,
        Ho = `shown${kt}`,
        pr = `click${kt}${Fi}`,
        hr = `keydown${kt}${Fi}`,
        Wo = `keyup${kt}${Fi}`,
        Qt = 'show',
        Bo = 'dropup',
        jo = 'dropend',
        Fo = 'dropstart',
        Ko = 'dropup-center',
        Yo = 'dropdown-center',
        Pt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Uo = `${Pt}.${Qt}`,
        Ke = '.dropdown-menu',
        Go = '.navbar',
        zo = '.navbar-nav',
        qo = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
        Xo = q() ? 'top-end' : 'top-start',
        Qo = q() ? 'top-start' : 'top-end',
        Zo = q() ? 'bottom-end' : 'bottom-start',
        Jo = q() ? 'bottom-start' : 'bottom-end',
        ta = q() ? 'left-start' : 'right-start',
        ea = q() ? 'right-start' : 'left-start',
        ia = 'top',
        na = 'bottom',
        ra = { autoClose: !0, boundary: 'clippingParents', display: 'dynamic', offset: [0, 2], popperConfig: null, reference: 'toggle' },
        sa = { autoClose: '(boolean|string)', boundary: '(string|element)', display: 'string', offset: '(array|string|function)', popperConfig: '(null|object|function)', reference: '(string|element|object)' },
        mt = class i extends Y {
            constructor(t, e) {
                super(t, e), (this._popper = null), (this._parent = this._element.parentNode), (this._menu = p.next(this._element, Ke)[0] || p.prev(this._element, Ke)[0] || p.findOne(Ke, this._parent)), (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
                return ra;
            }
            static get DefaultType() {
                return sa;
            }
            static get NAME() {
                return Nn;
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (ht(this._element) || this._isShown()) return;
                let t = { relatedTarget: this._element };
                if (!c.trigger(this._element, Vo, t).defaultPrevented) {
                    if ((this._createPopper(), 'ontouchstart' in document.documentElement && !this._parent.closest(zo))) for (let n of [].concat(...document.body.children)) c.on(n, 'mouseover', Ye);
                    this._element.focus(), this._element.setAttribute('aria-expanded', !0), this._menu.classList.add(Qt), this._element.classList.add(Qt), c.trigger(this._element, Ho, t);
                }
            }
            hide() {
                if (ht(this._element) || !this._isShown()) return;
                let t = { relatedTarget: this._element };
                this._completeHide(t);
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
            }
            _completeHide(t) {
                if (!c.trigger(this._element, Ro, t).defaultPrevented) {
                    if ('ontouchstart' in document.documentElement) for (let n of [].concat(...document.body.children)) c.off(n, 'mouseover', Ye);
                    this._popper && this._popper.destroy(), this._menu.classList.remove(Qt), this._element.classList.remove(Qt), this._element.setAttribute('aria-expanded', 'false'), at.removeDataAttribute(this._menu, 'popper'), c.trigger(this._element, ko, t);
                }
            }
            _getConfig(t) {
                if (((t = super._getConfig(t)), typeof t.reference == 'object' && !ot(t.reference) && typeof t.reference.getBoundingClientRect != 'function')) throw new TypeError(`${Nn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return t;
            }
            _createPopper() {
                if (typeof Re == 'undefined') throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let t = this._element;
                this._config.reference === 'parent' ? (t = this._parent)
                : ot(this._config.reference) ? (t = pt(this._config.reference))
                : typeof this._config.reference == 'object' && (t = this._config.reference);
                let e = this._getPopperConfig();
                this._popper = pe(t, this._menu, e);
            }
            _isShown() {
                return this._menu.classList.contains(Qt);
            }
            _getPlacement() {
                let t = this._parent;
                if (t.classList.contains(jo)) return ta;
                if (t.classList.contains(Fo)) return ea;
                if (t.classList.contains(Ko)) return ia;
                if (t.classList.contains(Yo)) return na;
                let e = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
                return (
                    t.classList.contains(Bo) ?
                        e ? Qo
                        :   Xo
                    : e ? Jo
                    : Zo
                );
            }
            _detectNavbar() {
                return this._element.closest(Go) !== null;
            }
            _getOffset() {
                let { offset: t } = this._config;
                return (
                    typeof t == 'string' ? t.split(',').map((e) => Number.parseInt(e, 10))
                    : typeof t == 'function' ? (e) => t(e, this._element)
                    : t
                );
            }
            _getPopperConfig() {
                let t = {
                    placement: this._getPlacement(),
                    modifiers: [
                        { name: 'preventOverflow', options: { boundary: this._config.boundary } },
                        { name: 'offset', options: { offset: this._getOffset() } }
                    ]
                };
                return (this._inNavbar || this._config.display === 'static') && (at.setDataAttribute(this._menu, 'popper', 'static'), (t.modifiers = [{ name: 'applyStyles', enabled: !1 }])), H(H({}, t), F(this._config.popperConfig, [t]));
            }
            _selectMenuItem({ key: t, target: e }) {
                let n = p.find(qo, this._menu).filter((r) => te(r));
                n.length && Bi(n, e, t === Dn, !n.includes(e)).focus();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this, t);
                    if (typeof t == 'string') {
                        if (typeof e[t] == 'undefined') throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
            static clearMenus(t) {
                if (t.button === Mo || (t.type === 'keyup' && t.key !== Sn)) return;
                let e = p.find(Uo);
                for (let n of e) {
                    let r = i.getInstance(n);
                    if (!r || r._config.autoClose === !1) continue;
                    let s = t.composedPath(),
                        o = s.includes(r._menu);
                    if (s.includes(r._element) || (r._config.autoClose === 'inside' && !o) || (r._config.autoClose === 'outside' && o) || (r._menu.contains(t.target) && ((t.type === 'keyup' && t.key === Sn) || /input|select|option|textarea|form/i.test(t.target.tagName)))) continue;
                    let a = { relatedTarget: r._element };
                    t.type === 'click' && (a.clickEvent = t), r._completeHide(a);
                }
            }
            static dataApiKeydownHandler(t) {
                let e = /input|textarea/i.test(t.target.tagName),
                    n = t.key === Io,
                    r = [Po, Dn].includes(t.key);
                if ((!r && !n) || (e && !n)) return;
                t.preventDefault();
                let s = this.matches(Pt) ? this : p.prev(this, Pt)[0] || p.next(this, Pt)[0] || p.findOne(Pt, t.delegateTarget.parentNode),
                    o = i.getOrCreateInstance(s);
                if (r) {
                    t.stopPropagation(), o.show(), o._selectMenuItem(t);
                    return;
                }
                o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
            }
        };
    c.on(document, hr, Pt, mt.dataApiKeydownHandler);
    c.on(document, hr, Ke, mt.dataApiKeydownHandler);
    c.on(document, pr, mt.clearMenus);
    c.on(document, Wo, mt.clearMenus);
    c.on(document, pr, Pt, function (i) {
        i.preventDefault(), mt.getOrCreateInstance(this).toggle();
    });
    Q(mt);
    var mr = 'backdrop',
        oa = 'fade',
        Ln = 'show',
        xn = `mousedown.bs.${mr}`,
        aa = { className: 'modal-backdrop', clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: 'body' },
        la = { className: 'string', clickCallback: '(function|null)', isAnimated: 'boolean', isVisible: 'boolean', rootElement: '(element|string)' },
        Xe = class extends Rt {
            constructor(t) {
                super(), (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null);
            }
            static get Default() {
                return aa;
            }
            static get DefaultType() {
                return la;
            }
            static get NAME() {
                return mr;
            }
            show(t) {
                if (!this._config.isVisible) {
                    F(t);
                    return;
                }
                this._append();
                let e = this._getElement();
                this._config.isAnimated && ve(e),
                    e.classList.add(Ln),
                    this._emulateAnimation(() => {
                        F(t);
                    });
            }
            hide(t) {
                if (!this._config.isVisible) {
                    F(t);
                    return;
                }
                this._getElement().classList.remove(Ln),
                    this._emulateAnimation(() => {
                        this.dispose(), F(t);
                    });
            }
            dispose() {
                this._isAppended && (c.off(this._element, xn), this._element.remove(), (this._isAppended = !1));
            }
            _getElement() {
                if (!this._element) {
                    let t = document.createElement('div');
                    (t.className = this._config.className), this._config.isAnimated && t.classList.add(oa), (this._element = t);
                }
                return this._element;
            }
            _configAfterMerge(t) {
                return (t.rootElement = pt(t.rootElement)), t;
            }
            _append() {
                if (this._isAppended) return;
                let t = this._getElement();
                this._config.rootElement.append(t),
                    c.on(t, xn, () => {
                        F(this._config.clickCallback);
                    }),
                    (this._isAppended = !0);
            }
            _emulateAnimation(t) {
                er(t, this._getElement(), this._config.isAnimated);
            }
        },
        ca = 'focustrap',
        ua = 'bs.focustrap',
        Qe = `.${ua}`,
        fa = `focusin${Qe}`,
        da = `keydown.tab${Qe}`,
        pa = 'Tab',
        ha = 'forward',
        $n = 'backward',
        ma = { autofocus: !0, trapElement: null },
        _a = { autofocus: 'boolean', trapElement: 'element' },
        Ze = class extends Rt {
            constructor(t) {
                super(), (this._config = this._getConfig(t)), (this._isActive = !1), (this._lastTabNavDirection = null);
            }
            static get Default() {
                return ma;
            }
            static get DefaultType() {
                return _a;
            }
            static get NAME() {
                return ca;
            }
            activate() {
                this._isActive || (this._config.autofocus && this._config.trapElement.focus(), c.off(document, Qe), c.on(document, fa, (t) => this._handleFocusin(t)), c.on(document, da, (t) => this._handleKeydown(t)), (this._isActive = !0));
            }
            deactivate() {
                this._isActive && ((this._isActive = !1), c.off(document, Qe));
            }
            _handleFocusin(t) {
                let { trapElement: e } = this._config;
                if (t.target === document || t.target === e || e.contains(t.target)) return;
                let n = p.focusableChildren(e);
                n.length === 0 ? e.focus()
                : this._lastTabNavDirection === $n ? n[n.length - 1].focus()
                : n[0].focus();
            }
            _handleKeydown(t) {
                t.key === pa && (this._lastTabNavDirection = t.shiftKey ? $n : ha);
            }
        },
        In = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
        Pn = '.sticky-top',
        He = 'padding-right',
        Mn = 'margin-right',
        ge = class {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                let t = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - t);
            }
            hide() {
                let t = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, He, (e) => e + t), this._setElementAttributes(In, He, (e) => e + t), this._setElementAttributes(Pn, Mn, (e) => e - t);
            }
            reset() {
                this._resetElementAttributes(this._element, 'overflow'), this._resetElementAttributes(this._element, He), this._resetElementAttributes(In, He), this._resetElementAttributes(Pn, Mn);
            }
            isOverflowing() {
                return this.getWidth() > 0;
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, 'overflow'), (this._element.style.overflow = 'hidden');
            }
            _setElementAttributes(t, e, n) {
                let r = this.getWidth(),
                    s = (o) => {
                        if (o !== this._element && window.innerWidth > o.clientWidth + r) return;
                        this._saveInitialAttribute(o, e);
                        let a = window.getComputedStyle(o).getPropertyValue(e);
                        o.style.setProperty(e, `${n(Number.parseFloat(a))}px`);
                    };
                this._applyManipulationCallback(t, s);
            }
            _saveInitialAttribute(t, e) {
                let n = t.style.getPropertyValue(e);
                n && at.setDataAttribute(t, e, n);
            }
            _resetElementAttributes(t, e) {
                let n = (r) => {
                    let s = at.getDataAttribute(r, e);
                    if (s === null) {
                        r.style.removeProperty(e);
                        return;
                    }
                    at.removeDataAttribute(r, e), r.style.setProperty(e, s);
                };
                this._applyManipulationCallback(t, n);
            }
            _applyManipulationCallback(t, e) {
                if (ot(t)) {
                    e(t);
                    return;
                }
                for (let n of p.find(t, this._element)) e(n);
            }
        },
        ga = 'modal',
        Ea = 'bs.modal',
        X = `.${Ea}`,
        va = '.data-api',
        ba = 'Escape',
        Aa = `hide${X}`,
        Ta = `hidePrevented${X}`,
        _r = `hidden${X}`,
        gr = `show${X}`,
        ya = `shown${X}`,
        wa = `resize${X}`,
        Oa = `click.dismiss${X}`,
        Ca = `mousedown.dismiss${X}`,
        Na = `keydown.dismiss${X}`,
        Sa = `click${X}${va}`,
        Rn = 'modal-open',
        Da = 'fade',
        kn = 'show',
        Si = 'modal-static',
        La = '.modal.show',
        xa = '.modal-dialog',
        $a = '.modal-body',
        Ia = '[data-bs-toggle="modal"]',
        Pa = { backdrop: !0, focus: !0, keyboard: !0 },
        Ma = { backdrop: '(boolean|string)', focus: 'boolean', keyboard: 'boolean' },
        _t = class i extends Y {
            constructor(t, e) {
                super(t, e), (this._dialog = p.findOne(xa, this._element)), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), (this._isShown = !1), (this._isTransitioning = !1), (this._scrollBar = new ge()), this._addEventListeners();
            }
            static get Default() {
                return Pa;
            }
            static get DefaultType() {
                return Ma;
            }
            static get NAME() {
                return ga;
            }
            toggle(t) {
                return this._isShown ? this.hide() : this.show(t);
            }
            show(t) {
                this._isShown || this._isTransitioning || c.trigger(this._element, gr, { relatedTarget: t }).defaultPrevented || ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Rn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
            }
            hide() {
                !this._isShown || this._isTransitioning || c.trigger(this._element, Aa).defaultPrevented || ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove(kn), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
            }
            dispose() {
                c.off(window, X), c.off(this._dialog, X), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new Xe({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
            }
            _initializeFocusTrap() {
                return new Ze({ trapElement: this._element });
            }
            _showElement(t) {
                document.body.contains(this._element) || document.body.append(this._element), (this._element.style.display = 'block'), this._element.removeAttribute('aria-hidden'), this._element.setAttribute('aria-modal', !0), this._element.setAttribute('role', 'dialog'), (this._element.scrollTop = 0);
                let e = p.findOne($a, this._dialog);
                e && (e.scrollTop = 0), ve(this._element), this._element.classList.add(kn);
                let n = () => {
                    this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), c.trigger(this._element, ya, { relatedTarget: t });
                };
                this._queueCallback(n, this._dialog, this._isAnimated());
            }
            _addEventListeners() {
                c.on(this._element, Na, (t) => {
                    if (t.key === ba) {
                        if (this._config.keyboard) {
                            this.hide();
                            return;
                        }
                        this._triggerBackdropTransition();
                    }
                }),
                    c.on(window, wa, () => {
                        this._isShown && !this._isTransitioning && this._adjustDialog();
                    }),
                    c.on(this._element, Ca, (t) => {
                        c.one(this._element, Oa, (e) => {
                            if (!(this._element !== t.target || this._element !== e.target)) {
                                if (this._config.backdrop === 'static') {
                                    this._triggerBackdropTransition();
                                    return;
                                }
                                this._config.backdrop && this.hide();
                            }
                        });
                    });
            }
            _hideModal() {
                (this._element.style.display = 'none'),
                    this._element.setAttribute('aria-hidden', !0),
                    this._element.removeAttribute('aria-modal'),
                    this._element.removeAttribute('role'),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove(Rn), this._resetAdjustments(), this._scrollBar.reset(), c.trigger(this._element, _r);
                    });
            }
            _isAnimated() {
                return this._element.classList.contains(Da);
            }
            _triggerBackdropTransition() {
                if (c.trigger(this._element, Ta).defaultPrevented) return;
                let e = this._element.scrollHeight > document.documentElement.clientHeight,
                    n = this._element.style.overflowY;
                n === 'hidden' ||
                    this._element.classList.contains(Si) ||
                    (e || (this._element.style.overflowY = 'hidden'),
                    this._element.classList.add(Si),
                    this._queueCallback(() => {
                        this._element.classList.remove(Si),
                            this._queueCallback(() => {
                                this._element.style.overflowY = n;
                            }, this._dialog);
                    }, this._dialog),
                    this._element.focus());
            }
            _adjustDialog() {
                let t = this._element.scrollHeight > document.documentElement.clientHeight,
                    e = this._scrollBar.getWidth(),
                    n = e > 0;
                if (n && !t) {
                    let r = q() ? 'paddingLeft' : 'paddingRight';
                    this._element.style[r] = `${e}px`;
                }
                if (!n && t) {
                    let r = q() ? 'paddingRight' : 'paddingLeft';
                    this._element.style[r] = `${e}px`;
                }
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
            }
            static jQueryInterface(t, e) {
                return this.each(function () {
                    let n = i.getOrCreateInstance(this, t);
                    if (typeof t == 'string') {
                        if (typeof n[t] == 'undefined') throw new TypeError(`No method named "${t}"`);
                        n[t](e);
                    }
                });
            }
        };
    c.on(document, Sa, Ia, function (i) {
        let t = p.getElementFromSelector(this);
        ['A', 'AREA'].includes(this.tagName) && i.preventDefault(),
            c.one(t, gr, (r) => {
                r.defaultPrevented ||
                    c.one(t, _r, () => {
                        te(this) && this.focus();
                    });
            });
        let e = p.findOne(La);
        e && _t.getInstance(e).hide(), _t.getOrCreateInstance(t).toggle(this);
    });
    ei(_t);
    Q(_t);
    var Ra = 'offcanvas',
        ka = 'bs.offcanvas',
        lt = `.${ka}`,
        Er = '.data-api',
        Va = `load${lt}${Er}`,
        Ha = 'Escape',
        Vn = 'show',
        Hn = 'showing',
        Wn = 'hiding',
        Wa = 'offcanvas-backdrop',
        vr = '.offcanvas.show',
        Ba = `show${lt}`,
        ja = `shown${lt}`,
        Fa = `hide${lt}`,
        Bn = `hidePrevented${lt}`,
        br = `hidden${lt}`,
        Ka = `resize${lt}`,
        Ya = `click${lt}${Er}`,
        Ua = `keydown.dismiss${lt}`,
        Ga = '[data-bs-toggle="offcanvas"]',
        za = { backdrop: !0, keyboard: !0, scroll: !1 },
        qa = { backdrop: '(boolean|string)', keyboard: 'boolean', scroll: 'boolean' },
        gt = class i extends Y {
            constructor(t, e) {
                super(t, e), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
            }
            static get Default() {
                return za;
            }
            static get DefaultType() {
                return qa;
            }
            static get NAME() {
                return Ra;
            }
            toggle(t) {
                return this._isShown ? this.hide() : this.show(t);
            }
            show(t) {
                if (this._isShown || c.trigger(this._element, Ba, { relatedTarget: t }).defaultPrevented) return;
                (this._isShown = !0), this._backdrop.show(), this._config.scroll || new ge().hide(), this._element.setAttribute('aria-modal', !0), this._element.setAttribute('role', 'dialog'), this._element.classList.add(Hn);
                let n = () => {
                    (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Vn), this._element.classList.remove(Hn), c.trigger(this._element, ja, { relatedTarget: t });
                };
                this._queueCallback(n, this._element, !0);
            }
            hide() {
                if (!this._isShown || c.trigger(this._element, Fa).defaultPrevented) return;
                this._focustrap.deactivate(), this._element.blur(), (this._isShown = !1), this._element.classList.add(Wn), this._backdrop.hide();
                let e = () => {
                    this._element.classList.remove(Vn, Wn), this._element.removeAttribute('aria-modal'), this._element.removeAttribute('role'), this._config.scroll || new ge().reset(), c.trigger(this._element, br);
                };
                this._queueCallback(e, this._element, !0);
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            _initializeBackDrop() {
                let t = () => {
                        if (this._config.backdrop === 'static') {
                            c.trigger(this._element, Bn);
                            return;
                        }
                        this.hide();
                    },
                    e = !!this._config.backdrop;
                return new Xe({ className: Wa, isVisible: e, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: e ? t : null });
            }
            _initializeFocusTrap() {
                return new Ze({ trapElement: this._element });
            }
            _addEventListeners() {
                c.on(this._element, Ua, (t) => {
                    if (t.key === Ha) {
                        if (this._config.keyboard) {
                            this.hide();
                            return;
                        }
                        c.trigger(this._element, Bn);
                    }
                });
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this, t);
                    if (typeof t == 'string') {
                        if (e[t] === void 0 || t.startsWith('_') || t === 'constructor') throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        };
    c.on(document, Ya, Ga, function (i) {
        let t = p.getElementFromSelector(this);
        if ((['A', 'AREA'].includes(this.tagName) && i.preventDefault(), ht(this))) return;
        c.one(t, br, () => {
            te(this) && this.focus();
        });
        let e = p.findOne(vr);
        e && e !== t && gt.getInstance(e).hide(), gt.getOrCreateInstance(t).toggle(this);
    });
    c.on(window, Va, () => {
        for (let i of p.find(vr)) gt.getOrCreateInstance(i).show();
    });
    c.on(window, Ka, () => {
        for (let i of p.find('[aria-modal][class*=show][class*=offcanvas-]')) getComputedStyle(i).position !== 'fixed' && gt.getOrCreateInstance(i).hide();
    });
    ei(gt);
    Q(gt);
    var Xa = /^aria-[\w-]*$/i,
        Ar = { '*': ['class', 'dir', 'id', 'lang', 'role', Xa], 'a': ['target', 'href', 'title', 'rel'], 'area': [], 'b': [], 'br': [], 'col': [], 'code': [], 'dd': [], 'div': [], 'dl': [], 'dt': [], 'em': [], 'hr': [], 'h1': [], 'h2': [], 'h3': [], 'h4': [], 'h5': [], 'h6': [], 'i': [], 'img': ['src', 'srcset', 'alt', 'title', 'width', 'height'], 'li': [], 'ol': [], 'p': [], 'pre': [], 's': [], 'small': [], 'span': [], 'sub': [], 'sup': [], 'strong': [], 'u': [], 'ul': [] },
        Qa = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']),
        Za = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Ja = (i, t) => {
            let e = i.nodeName.toLowerCase();
            return (
                t.includes(e) ?
                    Qa.has(e) ?
                        !!Za.test(i.nodeValue)
                    :   !0
                :   t.filter((n) => n instanceof RegExp).some((n) => n.test(e))
            );
        };
    function tl(i, t, e) {
        if (!i.length) return i;
        if (e && typeof e == 'function') return e(i);
        let r = new window.DOMParser().parseFromString(i, 'text/html'),
            s = [].concat(...r.body.querySelectorAll('*'));
        for (let o of s) {
            let a = o.nodeName.toLowerCase();
            if (!Object.keys(t).includes(a)) {
                o.remove();
                continue;
            }
            let u = [].concat(...o.attributes),
                f = [].concat(t['*'] || [], t[a] || []);
            for (let l of u) Ja(l, f) || o.removeAttribute(l.nodeName);
        }
        return r.body.innerHTML;
    }
    var el = 'TemplateFactory',
        il = { allowList: Ar, content: {}, extraClass: '', html: !1, sanitize: !0, sanitizeFn: null, template: '<div></div>' },
        nl = { allowList: 'object', content: 'object', extraClass: '(string|function)', html: 'boolean', sanitize: 'boolean', sanitizeFn: '(null|function)', template: 'string' },
        rl = { entry: '(string|element|function|null)', selector: '(string|element)' },
        Hi = class extends Rt {
            constructor(t) {
                super(), (this._config = this._getConfig(t));
            }
            static get Default() {
                return il;
            }
            static get DefaultType() {
                return nl;
            }
            static get NAME() {
                return el;
            }
            getContent() {
                return Object.values(this._config.content)
                    .map((t) => this._resolvePossibleFunction(t))
                    .filter(Boolean);
            }
            hasContent() {
                return this.getContent().length > 0;
            }
            changeContent(t) {
                return this._checkContent(t), (this._config.content = H(H({}, this._config.content), t)), this;
            }
            toHtml() {
                let t = document.createElement('div');
                t.innerHTML = this._maybeSanitize(this._config.template);
                for (let [r, s] of Object.entries(this._config.content)) this._setContent(t, s, r);
                let e = t.children[0],
                    n = this._resolvePossibleFunction(this._config.extraClass);
                return n && e.classList.add(...n.split(' ')), e;
            }
            _typeCheckConfig(t) {
                super._typeCheckConfig(t), this._checkContent(t.content);
            }
            _checkContent(t) {
                for (let [e, n] of Object.entries(t)) super._typeCheckConfig({ selector: e, entry: n }, rl);
            }
            _setContent(t, e, n) {
                let r = p.findOne(n, t);
                if (r) {
                    if (((e = this._resolvePossibleFunction(e)), !e)) {
                        r.remove();
                        return;
                    }
                    if (ot(e)) {
                        this._putElementInTemplate(pt(e), r);
                        return;
                    }
                    if (this._config.html) {
                        r.innerHTML = this._maybeSanitize(e);
                        return;
                    }
                    r.textContent = e;
                }
            }
            _maybeSanitize(t) {
                return this._config.sanitize ? tl(t, this._config.allowList, this._config.sanitizeFn) : t;
            }
            _resolvePossibleFunction(t) {
                return F(t, [this]);
            }
            _putElementInTemplate(t, e) {
                if (this._config.html) {
                    (e.innerHTML = ''), e.append(t);
                    return;
                }
                e.textContent = t.textContent;
            }
        },
        sl = 'tooltip',
        ol = new Set(['sanitize', 'allowList', 'sanitizeFn']),
        Di = 'fade',
        al = 'modal',
        We = 'show',
        ll = '.tooltip-inner',
        jn = `.${al}`,
        Fn = 'hide.bs.modal',
        me = 'hover',
        Li = 'focus',
        cl = 'click',
        ul = 'manual',
        fl = 'hide',
        dl = 'hidden',
        pl = 'show',
        hl = 'shown',
        ml = 'inserted',
        _l = 'click',
        gl = 'focusin',
        El = 'focusout',
        vl = 'mouseenter',
        bl = 'mouseleave',
        Al = { AUTO: 'auto', TOP: 'top', RIGHT: q() ? 'left' : 'right', BOTTOM: 'bottom', LEFT: q() ? 'right' : 'left' },
        Tl = { allowList: Ar, animation: !0, boundary: 'clippingParents', container: !1, customClass: '', delay: 0, fallbackPlacements: ['top', 'right', 'bottom', 'left'], html: !1, offset: [0, 6], placement: 'top', popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: '', trigger: 'hover focus' },
        yl = { allowList: 'object', animation: 'boolean', boundary: '(string|element)', container: '(string|element|boolean)', customClass: '(string|function)', delay: '(number|object)', fallbackPlacements: 'array', html: 'boolean', offset: '(array|string|function)', placement: '(string|function)', popperConfig: '(null|object|function)', sanitize: 'boolean', sanitizeFn: '(null|function)', selector: '(string|boolean)', template: 'string', title: '(string|element|function)', trigger: 'string' },
        Jt = class i extends Y {
            constructor(t, e) {
                if (typeof Re == 'undefined') throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(t, e), (this._isEnabled = !0), (this._timeout = 0), (this._isHovered = null), (this._activeTrigger = {}), (this._popper = null), (this._templateFactory = null), (this._newContent = null), (this.tip = null), this._setListeners(), this._config.selector || this._fixTitle();
            }
            static get Default() {
                return Tl;
            }
            static get DefaultType() {
                return yl;
            }
            static get NAME() {
                return sl;
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle() {
                if (this._isEnabled) {
                    if (((this._activeTrigger.click = !this._activeTrigger.click), this._isShown())) {
                        this._leave();
                        return;
                    }
                    this._enter();
                }
            }
            dispose() {
                clearTimeout(this._timeout), c.off(this._element.closest(jn), Fn, this._hideModalHandler), this._element.getAttribute('data-bs-original-title') && this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title')), this._disposePopper(), super.dispose();
            }
            show() {
                if (this._element.style.display === 'none') throw new Error('Please use show on visible elements');
                if (!(this._isWithContent() && this._isEnabled)) return;
                let t = c.trigger(this._element, this.constructor.eventName(pl)),
                    n = (Jn(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                if (t.defaultPrevented || !n) return;
                this._disposePopper();
                let r = this._getTipElement();
                this._element.setAttribute('aria-describedby', r.getAttribute('id'));
                let { container: s } = this._config;
                if ((this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(r), c.trigger(this._element, this.constructor.eventName(ml))), (this._popper = this._createPopper(r)), r.classList.add(We), 'ontouchstart' in document.documentElement)) for (let a of [].concat(...document.body.children)) c.on(a, 'mouseover', Ye);
                let o = () => {
                    c.trigger(this._element, this.constructor.eventName(hl)), this._isHovered === !1 && this._leave(), (this._isHovered = !1);
                };
                this._queueCallback(o, this.tip, this._isAnimated());
            }
            hide() {
                if (!this._isShown() || c.trigger(this._element, this.constructor.eventName(fl)).defaultPrevented) return;
                if ((this._getTipElement().classList.remove(We), 'ontouchstart' in document.documentElement)) for (let r of [].concat(...document.body.children)) c.off(r, 'mouseover', Ye);
                (this._activeTrigger[cl] = !1), (this._activeTrigger[Li] = !1), (this._activeTrigger[me] = !1), (this._isHovered = null);
                let n = () => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute('aria-describedby'), c.trigger(this._element, this.constructor.eventName(dl)));
                };
                this._queueCallback(n, this.tip, this._isAnimated());
            }
            update() {
                this._popper && this._popper.update();
            }
            _isWithContent() {
                return !!this._getTitle();
            }
            _getTipElement() {
                return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
            }
            _createTipElement(t) {
                let e = this._getTemplateFactory(t).toHtml();
                if (!e) return null;
                e.classList.remove(Di, We), e.classList.add(`bs-${this.constructor.NAME}-auto`);
                let n = cs(this.constructor.NAME).toString();
                return e.setAttribute('id', n), this._isAnimated() && e.classList.add(Di), e;
            }
            setContent(t) {
                (this._newContent = t), this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(t) {
                return this._templateFactory ? this._templateFactory.changeContent(t) : (this._templateFactory = new Hi(Ce(H({}, this._config), { content: t, extraClass: this._resolvePossibleFunction(this._config.customClass) }))), this._templateFactory;
            }
            _getContentForTemplate() {
                return { [ll]: this._getTitle() };
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
            }
            _initializeOnDelegatedTarget(t) {
                return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
            }
            _isAnimated() {
                return this._config.animation || (this.tip && this.tip.classList.contains(Di));
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(We);
            }
            _createPopper(t) {
                let e = F(this._config.placement, [this, t, this._element]),
                    n = Al[e.toUpperCase()];
                return pe(this._element, t, this._getPopperConfig(n));
            }
            _getOffset() {
                let { offset: t } = this._config;
                return (
                    typeof t == 'string' ? t.split(',').map((e) => Number.parseInt(e, 10))
                    : typeof t == 'function' ? (e) => t(e, this._element)
                    : t
                );
            }
            _resolvePossibleFunction(t) {
                return F(t, [this._element]);
            }
            _getPopperConfig(t) {
                let e = {
                    placement: t,
                    modifiers: [
                        { name: 'flip', options: { fallbackPlacements: this._config.fallbackPlacements } },
                        { name: 'offset', options: { offset: this._getOffset() } },
                        { name: 'preventOverflow', options: { boundary: this._config.boundary } },
                        { name: 'arrow', options: { element: `.${this.constructor.NAME}-arrow` } },
                        {
                            name: 'preSetPlacement',
                            enabled: !0,
                            phase: 'beforeMain',
                            fn: (n) => {
                                this._getTipElement().setAttribute('data-popper-placement', n.state.placement);
                            }
                        }
                    ]
                };
                return H(H({}, e), F(this._config.popperConfig, [e]));
            }
            _setListeners() {
                let t = this._config.trigger.split(' ');
                for (let e of t)
                    if (e === 'click')
                        c.on(this._element, this.constructor.eventName(_l), this._config.selector, (n) => {
                            this._initializeOnDelegatedTarget(n).toggle();
                        });
                    else if (e !== ul) {
                        let n = e === me ? this.constructor.eventName(vl) : this.constructor.eventName(gl),
                            r = e === me ? this.constructor.eventName(bl) : this.constructor.eventName(El);
                        c.on(this._element, n, this._config.selector, (s) => {
                            let o = this._initializeOnDelegatedTarget(s);
                            (o._activeTrigger[s.type === 'focusin' ? Li : me] = !0), o._enter();
                        }),
                            c.on(this._element, r, this._config.selector, (s) => {
                                let o = this._initializeOnDelegatedTarget(s);
                                (o._activeTrigger[s.type === 'focusout' ? Li : me] = o._element.contains(s.relatedTarget)), o._leave();
                            });
                    }
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                    c.on(this._element.closest(jn), Fn, this._hideModalHandler);
            }
            _fixTitle() {
                let t = this._element.getAttribute('title');
                t && (!this._element.getAttribute('aria-label') && !this._element.textContent.trim() && this._element.setAttribute('aria-label', t), this._element.setAttribute('data-bs-original-title', t), this._element.removeAttribute('title'));
            }
            _enter() {
                if (this._isShown() || this._isHovered) {
                    this._isHovered = !0;
                    return;
                }
                (this._isHovered = !0),
                    this._setTimeout(() => {
                        this._isHovered && this.show();
                    }, this._config.delay.show);
            }
            _leave() {
                this._isWithActiveTrigger() ||
                    ((this._isHovered = !1),
                    this._setTimeout(() => {
                        this._isHovered || this.hide();
                    }, this._config.delay.hide));
            }
            _setTimeout(t, e) {
                clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(t) {
                let e = at.getDataAttributes(this._element);
                for (let n of Object.keys(e)) ol.has(n) && delete e[n];
                return (t = H(H({}, e), typeof t == 'object' && t ? t : {})), (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
            }
            _configAfterMerge(t) {
                return (t.container = t.container === !1 ? document.body : pt(t.container)), typeof t.delay == 'number' && (t.delay = { show: t.delay, hide: t.delay }), typeof t.title == 'number' && (t.title = t.title.toString()), typeof t.content == 'number' && (t.content = t.content.toString()), t;
            }
            _getDelegateConfig() {
                let t = {};
                for (let [e, n] of Object.entries(this._config)) this.constructor.Default[e] !== n && (t[e] = n);
                return (t.selector = !1), (t.trigger = 'manual'), t;
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this, t);
                    if (typeof t == 'string') {
                        if (typeof e[t] == 'undefined') throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        };
    Q(Jt);
    var wl = 'popover',
        Ol = '.popover-header',
        Cl = '.popover-body',
        Nl = Ce(H({}, Jt.Default), { content: '', offset: [0, 8], placement: 'right', template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: 'click' }),
        Sl = Ce(H({}, Jt.DefaultType), { content: '(null|string|element|function)' }),
        Wi = class i extends Jt {
            static get Default() {
                return Nl;
            }
            static get DefaultType() {
                return Sl;
            }
            static get NAME() {
                return wl;
            }
            _isWithContent() {
                return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
                return { [Ol]: this._getTitle(), [Cl]: this._getContent() };
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this, t);
                    if (typeof t == 'string') {
                        if (typeof e[t] == 'undefined') throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        };
    Q(Wi);
    var Dl = 'scrollspy',
        Ll = 'bs.scrollspy',
        Ki = `.${Ll}`,
        xl = '.data-api',
        $l = `activate${Ki}`,
        Kn = `click${Ki}`,
        Il = `load${Ki}${xl}`,
        Pl = 'dropdown-item',
        qt = 'active',
        Ml = '[data-bs-spy="scroll"]',
        xi = '[href]',
        Rl = '.nav, .list-group',
        Yn = '.nav-link',
        kl = '.nav-item',
        Vl = '.list-group-item',
        Hl = `${Yn}, ${kl} > ${Yn}, ${Vl}`,
        Wl = '.dropdown',
        Bl = '.dropdown-toggle',
        jl = { offset: null, rootMargin: '0px 0px -25%', smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },
        Fl = { offset: '(number|null)', rootMargin: 'string', smoothScroll: 'boolean', target: 'element', threshold: 'array' },
        Je = class i extends Y {
            constructor(t, e) {
                super(t, e), (this._targetLinks = new Map()), (this._observableSections = new Map()), (this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element), (this._activeTarget = null), (this._observer = null), (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }), this.refresh();
            }
            static get Default() {
                return jl;
            }
            static get DefaultType() {
                return Fl;
            }
            static get NAME() {
                return Dl;
            }
            refresh() {
                this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());
                for (let t of this._observableSections.values()) this._observer.observe(t);
            }
            dispose() {
                this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(t) {
                return (t.target = pt(t.target) || document.body), (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin), typeof t.threshold == 'string' && (t.threshold = t.threshold.split(',').map((e) => Number.parseFloat(e))), t;
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll &&
                    (c.off(this._config.target, Kn),
                    c.on(this._config.target, Kn, xi, (t) => {
                        let e = this._observableSections.get(t.target.hash);
                        if (e) {
                            t.preventDefault();
                            let n = this._rootElement || window,
                                r = e.offsetTop - this._element.offsetTop;
                            if (n.scrollTo) {
                                n.scrollTo({ top: r, behavior: 'smooth' });
                                return;
                            }
                            n.scrollTop = r;
                        }
                    }));
            }
            _getNewObserver() {
                let t = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
                return new IntersectionObserver((e) => this._observerCallback(e), t);
            }
            _observerCallback(t) {
                let e = (o) => this._targetLinks.get(`#${o.target.id}`),
                    n = (o) => {
                        (this._previousScrollData.visibleEntryTop = o.target.offsetTop), this._process(e(o));
                    },
                    r = (this._rootElement || document.documentElement).scrollTop,
                    s = r >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = r;
                for (let o of t) {
                    if (!o.isIntersecting) {
                        (this._activeTarget = null), this._clearActiveClass(e(o));
                        continue;
                    }
                    let a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (s && a) {
                        if ((n(o), !r)) return;
                        continue;
                    }
                    !s && !a && n(o);
                }
            }
            _initializeTargetsAndObservables() {
                (this._targetLinks = new Map()), (this._observableSections = new Map());
                let t = p.find(xi, this._config.target);
                for (let e of t) {
                    if (!e.hash || ht(e)) continue;
                    let n = p.findOne(decodeURI(e.hash), this._element);
                    te(n) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, n));
                }
            }
            _process(t) {
                this._activeTarget !== t && (this._clearActiveClass(this._config.target), (this._activeTarget = t), t.classList.add(qt), this._activateParents(t), c.trigger(this._element, $l, { relatedTarget: t }));
            }
            _activateParents(t) {
                if (t.classList.contains(Pl)) {
                    p.findOne(Bl, t.closest(Wl)).classList.add(qt);
                    return;
                }
                for (let e of p.parents(t, Rl)) for (let n of p.prev(e, Hl)) n.classList.add(qt);
            }
            _clearActiveClass(t) {
                t.classList.remove(qt);
                let e = p.find(`${xi}.${qt}`, t);
                for (let n of e) n.classList.remove(qt);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this, t);
                    if (typeof t == 'string') {
                        if (e[t] === void 0 || t.startsWith('_') || t === 'constructor') throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        };
    c.on(window, Il, () => {
        for (let i of p.find(Ml)) Je.getOrCreateInstance(i);
    });
    Q(Je);
    var Kl = 'tab',
        Yl = 'bs.tab',
        Vt = `.${Yl}`,
        Ul = `hide${Vt}`,
        Gl = `hidden${Vt}`,
        zl = `show${Vt}`,
        ql = `shown${Vt}`,
        Xl = `click${Vt}`,
        Ql = `keydown${Vt}`,
        Zl = `load${Vt}`,
        Jl = 'ArrowLeft',
        Un = 'ArrowRight',
        tc = 'ArrowUp',
        Gn = 'ArrowDown',
        $i = 'Home',
        zn = 'End',
        Mt = 'active',
        qn = 'fade',
        Ii = 'show',
        ec = 'dropdown',
        Tr = '.dropdown-toggle',
        ic = '.dropdown-menu',
        Pi = `:not(${Tr})`,
        nc = '.list-group, .nav, [role="tablist"]',
        rc = '.nav-item, .list-group-item',
        sc = `.nav-link${Pi}, .list-group-item${Pi}, [role="tab"]${Pi}`,
        yr = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Mi = `${sc}, ${yr}`,
        oc = `.${Mt}[data-bs-toggle="tab"], .${Mt}[data-bs-toggle="pill"], .${Mt}[data-bs-toggle="list"]`,
        Ee = class i extends Y {
            constructor(t) {
                super(t), (this._parent = this._element.closest(nc)), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), c.on(this._element, Ql, (e) => this._keydown(e)));
            }
            static get NAME() {
                return Kl;
            }
            show() {
                let t = this._element;
                if (this._elemIsActive(t)) return;
                let e = this._getActiveElem(),
                    n = e ? c.trigger(e, Ul, { relatedTarget: t }) : null;
                c.trigger(t, zl, { relatedTarget: e }).defaultPrevented || (n && n.defaultPrevented) || (this._deactivate(e, t), this._activate(t, e));
            }
            _activate(t, e) {
                if (!t) return;
                t.classList.add(Mt), this._activate(p.getElementFromSelector(t));
                let n = () => {
                    if (t.getAttribute('role') !== 'tab') {
                        t.classList.add(Ii);
                        return;
                    }
                    t.removeAttribute('tabindex'), t.setAttribute('aria-selected', !0), this._toggleDropDown(t, !0), c.trigger(t, ql, { relatedTarget: e });
                };
                this._queueCallback(n, t, t.classList.contains(qn));
            }
            _deactivate(t, e) {
                if (!t) return;
                t.classList.remove(Mt), t.blur(), this._deactivate(p.getElementFromSelector(t));
                let n = () => {
                    if (t.getAttribute('role') !== 'tab') {
                        t.classList.remove(Ii);
                        return;
                    }
                    t.setAttribute('aria-selected', !1), t.setAttribute('tabindex', '-1'), this._toggleDropDown(t, !1), c.trigger(t, Gl, { relatedTarget: e });
                };
                this._queueCallback(n, t, t.classList.contains(qn));
            }
            _keydown(t) {
                if (![Jl, Un, tc, Gn, $i, zn].includes(t.key)) return;
                t.stopPropagation(), t.preventDefault();
                let e = this._getChildren().filter((r) => !ht(r)),
                    n;
                if ([$i, zn].includes(t.key)) n = e[t.key === $i ? 0 : e.length - 1];
                else {
                    let r = [Un, Gn].includes(t.key);
                    n = Bi(e, t.target, r, !0);
                }
                n && (n.focus({ preventScroll: !0 }), i.getOrCreateInstance(n).show());
            }
            _getChildren() {
                return p.find(Mi, this._parent);
            }
            _getActiveElem() {
                return this._getChildren().find((t) => this._elemIsActive(t)) || null;
            }
            _setInitialAttributes(t, e) {
                this._setAttributeIfNotExists(t, 'role', 'tablist');
                for (let n of e) this._setInitialAttributesOnChild(n);
            }
            _setInitialAttributesOnChild(t) {
                t = this._getInnerElement(t);
                let e = this._elemIsActive(t),
                    n = this._getOuterElement(t);
                t.setAttribute('aria-selected', e), n !== t && this._setAttributeIfNotExists(n, 'role', 'presentation'), e || t.setAttribute('tabindex', '-1'), this._setAttributeIfNotExists(t, 'role', 'tab'), this._setInitialAttributesOnTargetPanel(t);
            }
            _setInitialAttributesOnTargetPanel(t) {
                let e = p.getElementFromSelector(t);
                e && (this._setAttributeIfNotExists(e, 'role', 'tabpanel'), t.id && this._setAttributeIfNotExists(e, 'aria-labelledby', `${t.id}`));
            }
            _toggleDropDown(t, e) {
                let n = this._getOuterElement(t);
                if (!n.classList.contains(ec)) return;
                let r = (s, o) => {
                    let a = p.findOne(s, n);
                    a && a.classList.toggle(o, e);
                };
                r(Tr, Mt), r(ic, Ii), n.setAttribute('aria-expanded', e);
            }
            _setAttributeIfNotExists(t, e, n) {
                t.hasAttribute(e) || t.setAttribute(e, n);
            }
            _elemIsActive(t) {
                return t.classList.contains(Mt);
            }
            _getInnerElement(t) {
                return t.matches(Mi) ? t : p.findOne(Mi, t);
            }
            _getOuterElement(t) {
                return t.closest(rc) || t;
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this);
                    if (typeof t == 'string') {
                        if (e[t] === void 0 || t.startsWith('_') || t === 'constructor') throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        };
    c.on(document, Xl, yr, function (i) {
        ['A', 'AREA'].includes(this.tagName) && i.preventDefault(), !ht(this) && Ee.getOrCreateInstance(this).show();
    });
    c.on(window, Zl, () => {
        for (let i of p.find(oc)) Ee.getOrCreateInstance(i);
    });
    Q(Ee);
    var ac = 'toast',
        lc = 'bs.toast',
        vt = `.${lc}`,
        cc = `mouseover${vt}`,
        uc = `mouseout${vt}`,
        fc = `focusin${vt}`,
        dc = `focusout${vt}`,
        pc = `hide${vt}`,
        hc = `hidden${vt}`,
        mc = `show${vt}`,
        _c = `shown${vt}`,
        gc = 'fade',
        Xn = 'hide',
        Be = 'show',
        je = 'showing',
        Ec = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
        vc = { animation: !0, autohide: !0, delay: 5e3 },
        ti = class i extends Y {
            constructor(t, e) {
                super(t, e), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
            }
            static get Default() {
                return vc;
            }
            static get DefaultType() {
                return Ec;
            }
            static get NAME() {
                return ac;
            }
            show() {
                if (c.trigger(this._element, mc).defaultPrevented) return;
                this._clearTimeout(), this._config.animation && this._element.classList.add(gc);
                let e = () => {
                    this._element.classList.remove(je), c.trigger(this._element, _c), this._maybeScheduleHide();
                };
                this._element.classList.remove(Xn), ve(this._element), this._element.classList.add(Be, je), this._queueCallback(e, this._element, this._config.animation);
            }
            hide() {
                if (!this.isShown() || c.trigger(this._element, pc).defaultPrevented) return;
                let e = () => {
                    this._element.classList.add(Xn), this._element.classList.remove(je, Be), c.trigger(this._element, hc);
                };
                this._element.classList.add(je), this._queueCallback(e, this._element, this._config.animation);
            }
            dispose() {
                this._clearTimeout(), this.isShown() && this._element.classList.remove(Be), super.dispose();
            }
            isShown() {
                return this._element.classList.contains(Be);
            }
            _maybeScheduleHide() {
                this._config.autohide &&
                    (this._hasMouseInteraction ||
                        this._hasKeyboardInteraction ||
                        (this._timeout = setTimeout(() => {
                            this.hide();
                        }, this._config.delay)));
            }
            _onInteraction(t, e) {
                switch (t.type) {
                    case 'mouseover':
                    case 'mouseout': {
                        this._hasMouseInteraction = e;
                        break;
                    }
                    case 'focusin':
                    case 'focusout': {
                        this._hasKeyboardInteraction = e;
                        break;
                    }
                }
                if (e) {
                    this._clearTimeout();
                    return;
                }
                let n = t.relatedTarget;
                this._element === n || this._element.contains(n) || this._maybeScheduleHide();
            }
            _setListeners() {
                c.on(this._element, cc, (t) => this._onInteraction(t, !0)), c.on(this._element, uc, (t) => this._onInteraction(t, !1)), c.on(this._element, fc, (t) => this._onInteraction(t, !0)), c.on(this._element, dc, (t) => this._onInteraction(t, !1));
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    let e = i.getOrCreateInstance(this, t);
                    if (typeof t == 'string') {
                        if (typeof e[t] == 'undefined') throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        };
    ei(ti);
    Q(ti);
    (() => {
        'use strict';
        let i = document.getElementById('searchToggleMobile'),
            t = document.getElementById('searchToggleDesktop'),
            e = document.getElementById('searchModal'),
            n = document.getElementById('search-form'),
            r = document.getElementById('query'),
            s = document.getElementById('searchResults'),
            o = new _t(e, { focus: !0 });
        i.addEventListener('click', a), t.addEventListener('click', a);
        function a() {
            o.toggle(), document.querySelector('.search-no-recent').classList.remove('d-none');
        }
        document.addEventListener('keydown', u);
        function u(d) {
            d.ctrlKey && d.key === 'k' && (d.preventDefault(), o.show(), n.reset(), (s.textContent = ''), document.querySelector('.search-no-recent').classList.remove('d-none')), d.key === 'Escape' && (n.reset(), (s.textContent = ''), f && (h(f, 'selected'), (l = -1)), document.querySelector('.search-no-results').classList.add('d-none'));
        }
        document.addEventListener('click', function (d) {
            var g = e.contains(d.target);
            g || (n.reset(), (s.textContent = ''), document.querySelector('.search-no-results').classList.add('d-none')), f && (h(f, 'selected'), (l = -1));
        }),
            e.addEventListener('shown.bs.modal', () => {
                r.focus();
            });
        var f,
            l = -1;
        document.addEventListener(
            'keydown',
            function (d) {
                var g = s.getElementsByTagName('article').length - 1;
                if (d.key === 'ArrowDown')
                    if ((l++, f)) {
                        h(f, 'selected');
                        let m = s.getElementsByTagName('article')[l];
                        typeof m != 'undefined' && l <= g ? (f = m) : ((l = 0), (f = s.getElementsByTagName('article')[0])), _(f, 'selected');
                    } else (l = 0), (f = s.getElementsByTagName('article')[0]), _(f, 'selected');
                else if (d.key === 'ArrowUp')
                    if (f) {
                        h(f, 'selected'), l--;
                        let m = s.getElementsByTagName('article')[l];
                        typeof m != 'undefined' && l >= 0 ? (f = m) : ((l = g), (f = s.getElementsByTagName('article')[g])), _(f, 'selected');
                    } else (l = 0), (f = s.getElementsByTagName('article')[g]), _(f, 'selected');
            },
            !1
        );
        function h(d, g) {
            d.classList ? d.classList.remove(g) : (d.className = d.className.replace(new RegExp('(^|\\b)' + g.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')), f.querySelector('a').blur();
        }
        function _(d, g) {
            d.classList ? d.classList.add(g) : (d.className += ' ' + g), f.querySelector('a').focus();
        }
        s.addEventListener(
            'mouseover',
            () => {
                f && h(f, 'selected');
            },
            !1
        );
    })();
})();
/*!
 * Search modal for Bootstrap based Thulite sites
 * Copyright 2021-2024 Thulite
 * Licensed under the MIT License
 */
/*! Bundled license information:

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
