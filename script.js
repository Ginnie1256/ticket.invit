/*
 * jQuery JavaScript Library v1.3
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-01-13 12:50:31 -0500 (Tue, 13 Jan 2009)
 * Revision: 6104
 */
(function() {
    var l = this, g, x = l.jQuery, o = l.$, n = l.jQuery = l.$ = function(D, E) {
        return new n.fn.init(D,E)
    }
    , C = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/, f = /^.[^:#\[\.,]*$/;
    n.fn = n.prototype = {
        init: function(D, G) {
            D = D || document;
            if (D.nodeType) {
                this[0] = D;
                this.length = 1;
                this.context = D;
                return this
            }
            if (typeof D === "string") {
                var F = C.exec(D);
                if (F && (F[1] || !G)) {
                    if (F[1]) {
                        D = n.clean([F[1]], G)
                    } else {
                        var H = document.getElementById(F[3]);
                        if (H) {
                            if (H.id != F[3]) {
                                return n().find(D)
                            }
                            var E = n(H);
                            E.context = document;
                            E.selector = D;
                            return E
                        }
                        D = []
                    }
                } else {
                    return n(G).find(D)
                }
            } else {
                if (n.isFunction(D)) {
                    return n(document).ready(D)
                }
            }
            if (D.selector && D.context) {
                this.selector = D.selector;
                this.context = D.context
            }
            return this.setArray(n.makeArray(D))
        },
        selector: "",
        jquery: "1.3",
        size: function() {
            return this.length
        },
        get: function(D) {
            return D === g ? n.makeArray(this) : this[D]
        },
        pushStack: function(E, G, D) {
            var F = n(E);
            F.prevObject = this;
            F.context = this.context;
            if (G === "find") {
                F.selector = this.selector + (this.selector ? " " : "") + D
            } else {
                if (G) {
                    F.selector = this.selector + "." + G + "(" + D + ")"
                }
            }
            return F
        },
        setArray: function(D) {
            this.length = 0;
            Array.prototype.push.apply(this, D);
            return this
        },
        each: function(E, D) {
            return n.each(this, E, D)
        },
        index: function(D) {
            return n.inArray(D && D.jquery ? D[0] : D, this)
        },
        attr: function(E, G, F) {
            var D = E;
            if (typeof E === "string") {
                if (G === g) {
                    return this[0] && n[F || "attr"](this[0], E)
                } else {
                    D = {};
                    D[E] = G
                }
            }
            return this.each(function(H) {
                for (E in D) {
                    n.attr(F ? this.style : this, E, n.prop(this, D[E], F, H, E))
                }
            })
        },
        css: function(D, E) {
            if ((D == "width" || D == "height") && parseFloat(E) < 0) {
                E = g
            }
            return this.attr(D, E, "curCSS")
        },
        text: function(E) {
            if (typeof E !== "object" && E != null) {
                return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(E))
            }
            var D = "";
            n.each(E || this, function() {
                n.each(this.childNodes, function() {
                    if (this.nodeType != 8) {
                        D += this.nodeType != 1 ? this.nodeValue : n.fn.text([this])
                    }
                })
            });
            return D
        },
        wrapAll: function(D) {
            if (this[0]) {
                var E = n(D, this[0].ownerDocument).clone();
                if (this[0].parentNode) {
                    E.insertBefore(this[0])
                }
                E.map(function() {
                    var F = this;
                    while (F.firstChild) {
                        F = F.firstChild
                    }
                    return F
                }).append(this)
            }
            return this
        },
        wrapInner: function(D) {
            return this.each(function() {
                n(this).contents().wrapAll(D)
            })
        },
        wrap: function(D) {
            return this.each(function() {
                n(this).wrapAll(D)
            })
        },
        append: function() {
            return this.domManip(arguments, true, function(D) {
                if (this.nodeType == 1) {
                    this.appendChild(D)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(D) {
                if (this.nodeType == 1) {
                    this.insertBefore(D, this.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, false, function(D) {
                this.parentNode.insertBefore(D, this)
            })
        },
        after: function() {
            return this.domManip(arguments, false, function(D) {
                this.parentNode.insertBefore(D, this.nextSibling)
            })
        },
        end: function() {
            return this.prevObject || n([])
        },
        push: [].push,
        find: function(D) {
            if (this.length === 1 && !/,/.test(D)) {
                var F = this.pushStack([], "find", D);
                F.length = 0;
                n.find(D, this[0], F);
                return F
            } else {
                var E = n.map(this, function(G) {
                    return n.find(D, G)
                });
                return this.pushStack(/[^+>] [^+>]/.test(D) ? n.unique(E) : E, "find", D)
            }
        },
        clone: function(E) {
            var D = this.map(function() {
                if (!n.support.noCloneEvent && !n.isXMLDoc(this)) {
                    var H = this.cloneNode(true)
                      , G = document.createElement("div");
                    G.appendChild(H);
                    return n.clean([G.innerHTML])[0]
                } else {
                    return this.cloneNode(true)
                }
            });
            var F = D.find("*").andSelf().each(function() {
                if (this[h] !== g) {
                    this[h] = null
                }
            });
            if (E === true) {
                this.find("*").andSelf().each(function(H) {
                    if (this.nodeType == 3) {
                        return
                    }
                    var G = n.data(this, "events");
                    for (var J in G) {
                        for (var I in G[J]) {
                            n.event.add(F[H], J, G[J][I], G[J][I].data)
                        }
                    }
                })
            }
            return D
        },
        filter: function(D) {
            return this.pushStack(n.isFunction(D) && n.grep(this, function(F, E) {
                return D.call(F, E)
            }) || n.multiFilter(D, n.grep(this, function(E) {
                return E.nodeType === 1
            })), "filter", D)
        },
        closest: function(D) {
            var E = n.expr.match.POS.test(D) ? n(D) : null;
            return this.map(function() {
                var F = this;
                while (F && F.ownerDocument) {
                    if (E ? E.index(F) > -1 : n(F).is(D)) {
                        return F
                    }
                    F = F.parentNode
                }
            })
        },
        not: function(D) {
            if (typeof D === "string") {
                if (f.test(D)) {
                    return this.pushStack(n.multiFilter(D, this, true), "not", D)
                } else {
                    D = n.multiFilter(D, this)
                }
            }
            var E = D.length && D[D.length - 1] !== g && !D.nodeType;
            return this.filter(function() {
                return E ? n.inArray(this, D) < 0 : this != D
            })
        },
        add: function(D) {
            return this.pushStack(n.unique(n.merge(this.get(), typeof D === "string" ? n(D) : n.makeArray(D))))
        },
        is: function(D) {
            return !!D && n.multiFilter(D, this).length > 0
        },
        hasClass: function(D) {
            return !!D && this.is("." + D)
        },
        val: function(J) {
            if (J === g) {
                var D = this[0];
                if (D) {
                    if (n.nodeName(D, "option")) {
                        return (D.attributes.value || {}).specified ? D.value : D.text
                    }
                    if (n.nodeName(D, "select")) {
                        var H = D.selectedIndex
                          , K = []
                          , L = D.options
                          , G = D.type == "select-one";
                        if (H < 0) {
                            return null
                        }
                        for (var E = G ? H : 0, I = G ? H + 1 : L.length; E < I; E++) {
                            var F = L[E];
                            if (F.selected) {
                                J = n(F).val();
                                if (G) {
                                    return J
                                }
                                K.push(J)
                            }
                        }
                        return K
                    }
                    return (D.value || "").replace(/\r/g, "")
                }
                return g
            }
            if (typeof J === "number") {
                J += ""
            }
            return this.each(function() {
                if (this.nodeType != 1) {
                    return
                }
                if (n.isArray(J) && /radio|checkbox/.test(this.type)) {
                    this.checked = (n.inArray(this.value, J) >= 0 || n.inArray(this.name, J) >= 0)
                } else {
                    if (n.nodeName(this, "select")) {
                        var M = n.makeArray(J);
                        n("option", this).each(function() {
                            this.selected = (n.inArray(this.value, M) >= 0 || n.inArray(this.text, M) >= 0)
                        });
                        if (!M.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = J
                    }
                }
            })
        },
        html: function(D) {
            return D === g ? (this[0] ? this[0].innerHTML : null) : this.empty().append(D)
        },
        replaceWith: function(D) {
            return this.after(D).remove()
        },
        eq: function(D) {
            return this.slice(D, +D + 1)
        },
        slice: function() {
            return this.pushStack(Array.prototype.slice.apply(this, arguments), "slice", Array.prototype.slice.call(arguments).join(","))
        },
        map: function(D) {
            return this.pushStack(n.map(this, function(F, E) {
                return D.call(F, E, F)
            }))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        },
        domManip: function(J, M, L) {
            if (this[0]) {
                var I = (this[0].ownerDocument || this[0]).createDocumentFragment()
                  , F = n.clean(J, (this[0].ownerDocument || this[0]), I)
                  , H = I.firstChild
                  , D = this.length > 1 ? I.cloneNode(true) : I;
                if (H) {
                    for (var G = 0, E = this.length; G < E; G++) {
                        L.call(K(this[G], H), G > 0 ? D.cloneNode(true) : I)
                    }
                }
                if (F) {
                    n.each(F, y)
                }
            }
            return this;
            function K(N, O) {
                return M && n.nodeName(N, "table") && n.nodeName(O, "tr") ? (N.getElementsByTagName("tbody")[0] || N.appendChild(N.ownerDocument.createElement("tbody"))) : N
            }
        }
    };
    n.fn.init.prototype = n.fn;
    function y(D, E) {
        if (E.src) {
            n.ajax({
                url: E.src,
                async: false,
                dataType: "script"
            })
        } else {
            n.globalEval(E.text || E.textContent || E.innerHTML || "")
        }
        if (E.parentNode) {
            E.parentNode.removeChild(E)
        }
    }
    function e() {
        return +new Date
    }
    n.extend = n.fn.extend = function() {
        var I = arguments[0] || {}, G = 1, H = arguments.length, D = false, F;
        if (typeof I === "boolean") {
            D = I;
            I = arguments[1] || {};
            G = 2
        }
        if (typeof I !== "object" && !n.isFunction(I)) {
            I = {}
        }
        if (H == G) {
            I = this;
            --G
        }
        for (; G < H; G++) {
            if ((F = arguments[G]) != null) {
                for (var E in F) {
                    var J = I[E]
                      , K = F[E];
                    if (I === K) {
                        continue
                    }
                    if (D && K && typeof K === "object" && !K.nodeType) {
                        I[E] = n.extend(D, J || (K.length != null ? [] : {}), K)
                    } else {
                        if (K !== g) {
                            I[E] = K
                        }
                    }
                }
            }
        }
        return I
    }
    ;
    var b = /z-?index|font-?weight|opacity|zoom|line-?height/i
      , p = document.defaultView || {}
      , r = Object.prototype.toString;
    n.extend({
        noConflict: function(D) {
            l.$ = o;
            if (D) {
                l.jQuery = x
            }
            return n
        },
        isFunction: function(D) {
            return r.call(D) === "[object Function]"
        },
        isArray: function(D) {
            return r.call(D) === "[object Array]"
        },
        isXMLDoc: function(D) {
            return D.documentElement && !D.body || D.tagName && D.ownerDocument && !D.ownerDocument.body
        },
        globalEval: function(F) {
            F = n.trim(F);
            if (F) {
                var E = document.getElementsByTagName("head")[0] || document.documentElement
                  , D = document.createElement("script");
                D.type = "text/javascript";
                if (n.support.scriptEval) {
                    D.appendChild(document.createTextNode(F))
                } else {
                    D.text = F
                }
                E.insertBefore(D, E.firstChild);
                E.removeChild(D)
            }
        },
        nodeName: function(E, D) {
            return E.nodeName && E.nodeName.toUpperCase() == D.toUpperCase()
        },
        each: function(F, J, E) {
            var D, G = 0, H = F.length;
            if (E) {
                if (H === g) {
                    for (D in F) {
                        if (J.apply(F[D], E) === false) {
                            break
                        }
                    }
                } else {
                    for (; G < H; ) {
                        if (J.apply(F[G++], E) === false) {
                            break
                        }
                    }
                }
            } else {
                if (H === g) {
                    for (D in F) {
                        if (J.call(F[D], D, F[D]) === false) {
                            break
                        }
                    }
                } else {
                    for (var I = F[0]; G < H && J.call(I, G, I) !== false; I = F[++G]) {}
                }
            }
            return F
        },
        prop: function(G, H, F, E, D) {
            if (n.isFunction(H)) {
                H = H.call(G, E)
            }
            return typeof H === "number" && F == "curCSS" && !b.test(D) ? H + "px" : H
        },
        className: {
            add: function(D, E) {
                n.each((E || "").split(/\s+/), function(F, G) {
                    if (D.nodeType == 1 && !n.className.has(D.className, G)) {
                        D.className += (D.className ? " " : "") + G
                    }
                })
            },
            remove: function(D, E) {
                if (D.nodeType == 1) {
                    D.className = E !== g ? n.grep(D.className.split(/\s+/), function(F) {
                        return !n.className.has(E, F)
                    }).join(" ") : ""
                }
            },
            has: function(E, D) {
                return n.inArray(D, (E.className || E).toString().split(/\s+/)) > -1
            }
        },
        swap: function(G, F, H) {
            var D = {};
            for (var E in F) {
                D[E] = G.style[E];
                G.style[E] = F[E]
            }
            H.call(G);
            for (var E in F) {
                G.style[E] = D[E]
            }
        },
        css: function(F, D, H) {
            if (D == "width" || D == "height") {
                var J, E = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, I = D == "width" ? ["Left", "Right"] : ["Top", "Bottom"];
                function G() {
                    J = D == "width" ? F.offsetWidth : F.offsetHeight;
                    var L = 0
                      , K = 0;
                    n.each(I, function() {
                        L += parseFloat(n.curCSS(F, "padding" + this, true)) || 0;
                        K += parseFloat(n.curCSS(F, "border" + this + "Width", true)) || 0
                    });
                    J -= Math.round(L + K)
                }
                if (n(F).is(":visible")) {
                    G()
                } else {
                    n.swap(F, E, G)
                }
                return Math.max(0, J)
            }
            return n.curCSS(F, D, H)
        },
        curCSS: function(H, E, F) {
            var K, D = H.style;
            if (E == "opacity" && !n.support.opacity) {
                K = n.attr(D, "opacity");
                return K == "" ? "1" : K
            }
            if (E.match(/float/i)) {
                E = v
            }
            if (!F && D && D[E]) {
                K = D[E]
            } else {
                if (p.getComputedStyle) {
                    if (E.match(/float/i)) {
                        E = "float"
                    }
                    E = E.replace(/([A-Z])/g, "-$1").toLowerCase();
                    var L = p.getComputedStyle(H, null);
                    if (L) {
                        K = L.getPropertyValue(E)
                    }
                    if (E == "opacity" && K == "") {
                        K = "1"
                    }
                } else {
                    if (H.currentStyle) {
                        var I = E.replace(/\-(\w)/g, function(M, N) {
                            return N.toUpperCase()
                        });
                        K = H.currentStyle[E] || H.currentStyle[I];
                        if (!/^\d+(px)?$/i.test(K) && /^\d/.test(K)) {
                            var G = D.left
                              , J = H.runtimeStyle.left;
                            H.runtimeStyle.left = H.currentStyle.left;
                            D.left = K || 0;
                            K = D.pixelLeft + "px";
                            D.left = G;
                            H.runtimeStyle.left = J
                        }
                    }
                }
            }
            return K
        },
        clean: function(E, J, H) {
            J = J || document;
            if (typeof J.createElement === "undefined") {
                J = J.ownerDocument || J[0] && J[0].ownerDocument || document
            }
            if (!H && E.length === 1 && typeof E[0] === "string") {
                var G = /^<(\w+)\s*\/?>$/.exec(E[0]);
                if (G) {
                    return [J.createElement(G[1])]
                }
            }
            var F = []
              , D = []
              , K = J.createElement("div");
            n.each(E, function(O, Q) {
                if (typeof Q === "number") {
                    Q += ""
                }
                if (!Q) {
                    return
                }
                if (typeof Q === "string") {
                    Q = Q.replace(/(<(\w+)[^>]*?)\/>/g, function(S, T, R) {
                        return R.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? S : T + "></" + R + ">"
                    });
                    var N = n.trim(Q).toLowerCase();
                    var P = !N.indexOf("<opt") && [1, "<select multiple='multiple'>", "</select>"] || !N.indexOf("<leg") && [1, "<fieldset>", "</fieldset>"] || N.match(/^<(thead|tbody|tfoot|colg|cap)/) && [1, "<table>", "</table>"] || !N.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!N.indexOf("<td") || !N.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || !N.indexOf("<col") && [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] || !n.support.htmlSerialize && [1, "div<div>", "</div>"] || [0, "", ""];
                    K.innerHTML = P[1] + Q + P[2];
                    while (P[0]--) {
                        K = K.lastChild
                    }
                    if (!n.support.tbody) {
                        var M = !N.indexOf("<table") && N.indexOf("<tbody") < 0 ? K.firstChild && K.firstChild.childNodes : P[1] == "<table>" && N.indexOf("<tbody") < 0 ? K.childNodes : [];
                        for (var L = M.length - 1; L >= 0; --L) {
                            if (n.nodeName(M[L], "tbody") && !M[L].childNodes.length) {
                                M[L].parentNode.removeChild(M[L])
                            }
                        }
                    }
                    if (!n.support.leadingWhitespace && /^\s/.test(Q)) {
                        K.insertBefore(J.createTextNode(Q.match(/^\s*/)[0]), K.firstChild)
                    }
                    Q = n.makeArray(K.childNodes)
                }
                if (Q.nodeType) {
                    F.push(Q)
                } else {
                    F = n.merge(F, Q)
                }
            });
            if (H) {
                for (var I = 0; F[I]; I++) {
                    if (n.nodeName(F[I], "script") && (!F[I].type || F[I].type.toLowerCase() === "text/javascript")) {
                        D.push(F[I].parentNode ? F[I].parentNode.removeChild(F[I]) : F[I])
                    } else {
                        if (F[I].nodeType === 1) {
                            F.splice.apply(F, [I + 1, 0].concat(n.makeArray(F[I].getElementsByTagName("script"))))
                        }
                        H.appendChild(F[I])
                    }
                }
                return D
            }
            return F
        },
        attr: function(I, F, J) {
            if (!I || I.nodeType == 3 || I.nodeType == 8) {
                return g
            }
            var G = !n.isXMLDoc(I)
              , K = J !== g;
            F = G && n.props[F] || F;
            if (I.tagName) {
                var E = /href|src|style/.test(F);
                if (F == "selected" && I.parentNode) {
                    I.parentNode.selectedIndex
                }
                if (F in I && G && !E) {
                    if (K) {
                        if (F == "type" && n.nodeName(I, "input") && I.parentNode) {
                            throw "type property can't be changed"
                        }
                        I[F] = J
                    }
                    if (n.nodeName(I, "form") && I.getAttributeNode(F)) {
                        return I.getAttributeNode(F).nodeValue
                    }
                    if (F == "tabIndex") {
                        var H = I.getAttributeNode("tabIndex");
                        return H && H.specified ? H.value : I.nodeName.match(/^(a|area|button|input|object|select|textarea)$/i) ? 0 : g
                    }
                    return I[F]
                }
                if (!n.support.style && G && F == "style") {
                    return n.attr(I.style, "cssText", J)
                }
                if (K) {
                    I.setAttribute(F, "" + J)
                }
                var D = !n.support.hrefNormalized && G && E ? I.getAttribute(F, 2) : I.getAttribute(F);
                return D === null ? g : D
            }
            if (!n.support.opacity && F == "opacity") {
                if (K) {
                    I.zoom = 1;
                    I.filter = (I.filter || "").replace(/alpha\([^)]*\)/, "") + (parseInt(J) + "" == "NaN" ? "" : "alpha(opacity=" + J * 100 + ")")
                }
                return I.filter && I.filter.indexOf("opacity=") >= 0 ? (parseFloat(I.filter.match(/opacity=([^)]*)/)[1]) / 100) + "" : ""
            }
            F = F.replace(/-([a-z])/ig, function(L, M) {
                return M.toUpperCase()
            });
            if (K) {
                I[F] = J
            }
            return I[F]
        },
        trim: function(D) {
            return (D || "").replace(/^\s+|\s+$/g, "")
        },
        makeArray: function(F) {
            var D = [];
            if (F != null) {
                var E = F.length;
                if (E == null || typeof F === "string" || n.isFunction(F) || F.setInterval) {
                    D[0] = F
                } else {
                    while (E) {
                        D[--E] = F[E]
                    }
                }
            }
            return D
        },
        inArray: function(F, G) {
            for (var D = 0, E = G.length; D < E; D++) {
                if (G[D] === F) {
                    return D
                }
            }
            return -1
        },
        merge: function(G, D) {
            var E = 0, F, H = G.length;
            if (!n.support.getAll) {
                while ((F = D[E++]) != null) {
                    if (F.nodeType != 8) {
                        G[H++] = F
                    }
                }
            } else {
                while ((F = D[E++]) != null) {
                    G[H++] = F
                }
            }
            return G
        },
        unique: function(J) {
            var E = []
              , D = {};
            try {
                for (var F = 0, G = J.length; F < G; F++) {
                    var I = n.data(J[F]);
                    if (!D[I]) {
                        D[I] = true;
                        E.push(J[F])
                    }
                }
            } catch (H) {
                E = J
            }
            return E
        },
        grep: function(E, I, D) {
            var F = [];
            for (var G = 0, H = E.length; G < H; G++) {
                if (!D != !I(E[G], G)) {
                    F.push(E[G])
                }
            }
            return F
        },
        map: function(D, I) {
            var E = [];
            for (var F = 0, G = D.length; F < G; F++) {
                var H = I(D[F], F);
                if (H != null) {
                    E[E.length] = H
                }
            }
            return E.concat.apply([], E)
        }
    });
    var B = navigator.userAgent.toLowerCase();
    n.browser = {
        version: (B.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        safari: /webkit/.test(B),
        opera: /opera/.test(B),
        msie: /msie/.test(B) && !/opera/.test(B),
        mozilla: /mozilla/.test(B) && !/(compatible|webkit)/.test(B)
    };
    n.each({
        parent: function(D) {
            return D.parentNode
        },
        parents: function(D) {
            return n.dir(D, "parentNode")
        },
        next: function(D) {
            return n.nth(D, 2, "nextSibling")
        },
        prev: function(D) {
            return n.nth(D, 2, "previousSibling")
        },
        nextAll: function(D) {
            return n.dir(D, "nextSibling")
        },
        prevAll: function(D) {
            return n.dir(D, "previousSibling")
        },
        siblings: function(D) {
            return n.sibling(D.parentNode.firstChild, D)
        },
        children: function(D) {
            return n.sibling(D.firstChild)
        },
        contents: function(D) {
            return n.nodeName(D, "iframe") ? D.contentDocument || D.contentWindow.document : n.makeArray(D.childNodes)
        }
    }, function(D, E) {
        n.fn[D] = function(F) {
            var G = n.map(this, E);
            if (F && typeof F == "string") {
                G = n.multiFilter(F, G)
            }
            return this.pushStack(n.unique(G), D, F)
        }
    });
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(D, E) {
        n.fn[D] = function() {
            var F = arguments;
            return this.each(function() {
                for (var G = 0, H = F.length; G < H; G++) {
                    n(F[G])[E](this)
                }
            })
        }
    });
    n.each({
        removeAttr: function(D) {
            n.attr(this, D, "");
            if (this.nodeType == 1) {
                this.removeAttribute(D)
            }
        },
        addClass: function(D) {
            n.className.add(this, D)
        },
        removeClass: function(D) {
            n.className.remove(this, D)
        },
        toggleClass: function(E, D) {
            if (typeof D !== "boolean") {
                D = !n.className.has(this, E)
            }
            n.className[D ? "add" : "remove"](this, E)
        },
        remove: function(D) {
            if (!D || n.filter(D, [this]).length) {
                n("*", this).add([this]).each(function() {
                    n.event.remove(this);
                    n.removeData(this)
                });
                if (this.parentNode) {
                    this.parentNode.removeChild(this)
                }
            }
        },
        empty: function() {
            n(">*", this).remove();
            while (this.firstChild) {
                this.removeChild(this.firstChild)
            }
        }
    }, function(D, E) {
        n.fn[D] = function() {
            return this.each(E, arguments)
        }
    });
    function j(D, E) {
        return D[0] && parseInt(n.curCSS(D[0], E, true), 10) || 0
    }
    var h = "jQuery" + e()
      , u = 0
      , z = {};
    n.extend({
        cache: {},
        data: function(E, D, F) {
            E = E == l ? z : E;
            var G = E[h];
            if (!G) {
                G = E[h] = ++u
            }
            if (D && !n.cache[G]) {
                n.cache[G] = {}
            }
            if (F !== g) {
                n.cache[G][D] = F
            }
            return D ? n.cache[G][D] : G
        },
        removeData: function(E, D) {
            E = E == l ? z : E;
            var G = E[h];
            if (D) {
                if (n.cache[G]) {
                    delete n.cache[G][D];
                    D = "";
                    for (D in n.cache[G]) {
                        break
                    }
                    if (!D) {
                        n.removeData(E)
                    }
                }
            } else {
                try {
                    delete E[h]
                } catch (F) {
                    if (E.removeAttribute) {
                        E.removeAttribute(h)
                    }
                }
                delete n.cache[G]
            }
        },
        queue: function(E, D, G) {
            if (E) {
                D = (D || "fx") + "queue";
                var F = n.data(E, D);
                if (!F || n.isArray(G)) {
                    F = n.data(E, D, n.makeArray(G))
                } else {
                    if (G) {
                        F.push(G)
                    }
                }
            }
            return F
        },
        dequeue: function(G, F) {
            var D = n.queue(G, F)
              , E = D.shift();
            if (!F || F === "fx") {
                E = D[0]
            }
            if (E !== g) {
                E.call(G)
            }
        }
    });
    n.fn.extend({
        data: function(D, F) {
            var G = D.split(".");
            G[1] = G[1] ? "." + G[1] : "";
            if (F === g) {
                var E = this.triggerHandler("getData" + G[1] + "!", [G[0]]);
                if (E === g && this.length) {
                    E = n.data(this[0], D)
                }
                return E === g && G[1] ? this.data(G[0]) : E
            } else {
                return this.trigger("setData" + G[1] + "!", [G[0], F]).each(function() {
                    n.data(this, D, F)
                })
            }
        },
        removeData: function(D) {
            return this.each(function() {
                n.removeData(this, D)
            })
        },
        queue: function(D, E) {
            if (typeof D !== "string") {
                E = D;
                D = "fx"
            }
            if (E === g) {
                return n.queue(this[0], D)
            }
            return this.each(function() {
                var F = n.queue(this, D, E);
                if (D == "fx" && F.length == 1) {
                    F[0].call(this)
                }
            })
        },
        dequeue: function(D) {
            return this.each(function() {
                n.dequeue(this, D)
            })
        }
    });
    /*
 * Sizzle CSS Selector Engine - v0.9.1
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
    (function() {
        var N = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|[^[\]]+)+\]|\\.|[^ >+~,(\[]+)+|[>+~])(\s*,\s*)?/g
          , I = 0
          , F = Object.prototype.toString;
        var E = function(ae, S, aa, V) {
            aa = aa || [];
            S = S || document;
            if (S.nodeType !== 1 && S.nodeType !== 9) {
                return []
            }
            if (!ae || typeof ae !== "string") {
                return aa
            }
            var ab = [], ac, Y, ah, ag, Z, R, Q = true;
            N.lastIndex = 0;
            while ((ac = N.exec(ae)) !== null) {
                ab.push(ac[1]);
                if (ac[2]) {
                    R = RegExp.rightContext;
                    break
                }
            }
            if (ab.length > 1 && G.match.POS.exec(ae)) {
                if (ab.length === 2 && G.relative[ab[0]]) {
                    var U = "", X;
                    while ((X = G.match.POS.exec(ae))) {
                        U += X[0];
                        ae = ae.replace(G.match.POS, "")
                    }
                    Y = E.filter(U, E(/\s$/.test(ae) ? ae + "*" : ae, S))
                } else {
                    Y = G.relative[ab[0]] ? [S] : E(ab.shift(), S);
                    while (ab.length) {
                        var P = [];
                        ae = ab.shift();
                        if (G.relative[ae]) {
                            ae += ab.shift()
                        }
                        for (var af = 0, ad = Y.length; af < ad; af++) {
                            E(ae, Y[af], P)
                        }
                        Y = P
                    }
                }
            } else {
                var ai = V ? {
                    expr: ab.pop(),
                    set: D(V)
                } : E.find(ab.pop(), ab.length === 1 && S.parentNode ? S.parentNode : S);
                Y = E.filter(ai.expr, ai.set);
                if (ab.length > 0) {
                    ah = D(Y)
                } else {
                    Q = false
                }
                while (ab.length) {
                    var T = ab.pop()
                      , W = T;
                    if (!G.relative[T]) {
                        T = ""
                    } else {
                        W = ab.pop()
                    }
                    if (W == null) {
                        W = S
                    }
                    G.relative[T](ah, W, M(S))
                }
            }
            if (!ah) {
                ah = Y
            }
            if (!ah) {
                throw "Syntax error, unrecognized expression: " + (T || ae)
            }
            if (F.call(ah) === "[object Array]") {
                if (!Q) {
                    aa.push.apply(aa, ah)
                } else {
                    if (S.nodeType === 1) {
                        for (var af = 0; ah[af] != null; af++) {
                            if (ah[af] && (ah[af] === true || ah[af].nodeType === 1 && H(S, ah[af]))) {
                                aa.push(Y[af])
                            }
                        }
                    } else {
                        for (var af = 0; ah[af] != null; af++) {
                            if (ah[af] && ah[af].nodeType === 1) {
                                aa.push(Y[af])
                            }
                        }
                    }
                }
            } else {
                D(ah, aa)
            }
            if (R) {
                E(R, S, aa, V)
            }
            return aa
        };
        E.matches = function(P, Q) {
            return E(P, null, null, Q)
        }
        ;
        E.find = function(V, S) {
            var W, Q;
            if (!V) {
                return []
            }
            for (var R = 0, P = G.order.length; R < P; R++) {
                var T = G.order[R], Q;
                if ((Q = G.match[T].exec(V))) {
                    var U = RegExp.leftContext;
                    if (U.substr(U.length - 1) !== "\\") {
                        Q[1] = (Q[1] || "").replace(/\\/g, "");
                        W = G.find[T](Q, S);
                        if (W != null) {
                            V = V.replace(G.match[T], "");
                            break
                        }
                    }
                }
            }
            if (!W) {
                W = S.getElementsByTagName("*")
            }
            return {
                set: W,
                expr: V
            }
        }
        ;
        E.filter = function(S, ac, ad, T) {
            var Q = S, Y = [], ah = ac, V, ab;
            while (S && ac.length) {
                for (var U in G.filter) {
                    if ((V = G.match[U].exec(S)) != null) {
                        var Z = G.filter[U], R = null, X = 0, aa, ag;
                        ab = false;
                        if (ah == Y) {
                            Y = []
                        }
                        if (G.preFilter[U]) {
                            V = G.preFilter[U](V, ah, ad, Y, T);
                            if (!V) {
                                ab = aa = true
                            } else {
                                if (V === true) {
                                    continue
                                } else {
                                    if (V[0] === true) {
                                        R = [];
                                        var W = null, af;
                                        for (var ae = 0; (af = ah[ae]) !== g; ae++) {
                                            if (af && W !== af) {
                                                R.push(af);
                                                W = af
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (V) {
                            for (var ae = 0; (ag = ah[ae]) !== g; ae++) {
                                if (ag) {
                                    if (R && ag != R[X]) {
                                        X++
                                    }
                                    aa = Z(ag, V, X, R);
                                    var P = T ^ !!aa;
                                    if (ad && aa != null) {
                                        if (P) {
                                            ab = true
                                        } else {
                                            ah[ae] = false
                                        }
                                    } else {
                                        if (P) {
                                            Y.push(ag);
                                            ab = true
                                        }
                                    }
                                }
                            }
                        }
                        if (aa !== g) {
                            if (!ad) {
                                ah = Y
                            }
                            S = S.replace(G.match[U], "");
                            if (!ab) {
                                return []
                            }
                            break
                        }
                    }
                }
                S = S.replace(/\s*,\s*/, "");
                if (S == Q) {
                    if (ab == null) {
                        throw "Syntax error, unrecognized expression: " + S
                    } else {
                        break
                    }
                }
                Q = S
            }
            return ah
        }
        ;
        var G = E.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(P) {
                    return P.getAttribute("href")
                }
            },
            relative: {
                "+": function(T, Q) {
                    for (var R = 0, P = T.length; R < P; R++) {
                        var S = T[R];
                        if (S) {
                            var U = S.previousSibling;
                            while (U && U.nodeType !== 1) {
                                U = U.previousSibling
                            }
                            T[R] = typeof Q === "string" ? U || false : U === Q
                        }
                    }
                    if (typeof Q === "string") {
                        E.filter(Q, T, true)
                    }
                },
                ">": function(U, Q, V) {
                    if (typeof Q === "string" && !/\W/.test(Q)) {
                        Q = V ? Q : Q.toUpperCase();
                        for (var R = 0, P = U.length; R < P; R++) {
                            var T = U[R];
                            if (T) {
                                var S = T.parentNode;
                                U[R] = S.nodeName === Q ? S : false
                            }
                        }
                    } else {
                        for (var R = 0, P = U.length; R < P; R++) {
                            var T = U[R];
                            if (T) {
                                U[R] = typeof Q === "string" ? T.parentNode : T.parentNode === Q
                            }
                        }
                        if (typeof Q === "string") {
                            E.filter(Q, U, true)
                        }
                    }
                },
                "": function(S, Q, U) {
                    var R = "done" + (I++)
                      , P = O;
                    if (!Q.match(/\W/)) {
                        var T = Q = U ? Q : Q.toUpperCase();
                        P = L
                    }
                    P("parentNode", Q, R, S, T, U)
                },
                "~": function(S, Q, U) {
                    var R = "done" + (I++)
                      , P = O;
                    if (typeof Q === "string" && !Q.match(/\W/)) {
                        var T = Q = U ? Q : Q.toUpperCase();
                        P = L
                    }
                    P("previousSibling", Q, R, S, T, U)
                }
            },
            find: {
                ID: function(Q, R) {
                    if (R.getElementById) {
                        var P = R.getElementById(Q[1]);
                        return P ? [P] : []
                    }
                },
                NAME: function(P, Q) {
                    return Q.getElementsByName ? Q.getElementsByName(P[1]) : null
                },
                TAG: function(P, Q) {
                    return Q.getElementsByTagName(P[1])
                }
            },
            preFilter: {
                CLASS: function(S, Q, R, P, U) {
                    S = " " + S[1].replace(/\\/g, "") + " ";
                    for (var T = 0; Q[T]; T++) {
                        if (U ^ (" " + Q[T].className + " ").indexOf(S) >= 0) {
                            if (!R) {
                                P.push(Q[T])
                            }
                        } else {
                            if (R) {
                                Q[T] = false
                            }
                        }
                    }
                    return false
                },
                ID: function(P) {
                    return P[1].replace(/\\/g, "")
                },
                TAG: function(Q, P) {
                    for (var R = 0; !P[R]; R++) {}
                    return M(P[R]) ? Q[1] : Q[1].toUpperCase()
                },
                CHILD: function(P) {
                    if (P[1] == "nth") {
                        var Q = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(P[2] == "even" && "2n" || P[2] == "odd" && "2n+1" || !/\D/.test(P[2]) && "0n+" + P[2] || P[2]);
                        P[2] = (Q[1] + (Q[2] || 1)) - 0;
                        P[3] = Q[3] - 0
                    }
                    P[0] = "done" + (I++);
                    return P
                },
                ATTR: function(Q) {
                    var P = Q[1];
                    if (G.attrMap[P]) {
                        Q[1] = G.attrMap[P]
                    }
                    if (Q[2] === "~=") {
                        Q[4] = " " + Q[4] + " "
                    }
                    return Q
                },
                PSEUDO: function(T, Q, R, P, U) {
                    if (T[1] === "not") {
                        if (T[3].match(N).length > 1) {
                            T[3] = E(T[3], null, null, Q)
                        } else {
                            var S = E.filter(T[3], Q, R, true ^ U);
                            if (!R) {
                                P.push.apply(P, S)
                            }
                            return false
                        }
                    } else {
                        if (G.match.POS.test(T[0])) {
                            return true
                        }
                    }
                    return T
                },
                POS: function(P) {
                    P.unshift(true);
                    return P
                }
            },
            filters: {
                enabled: function(P) {
                    return P.disabled === false && P.type !== "hidden"
                },
                disabled: function(P) {
                    return P.disabled === true
                },
                checked: function(P) {
                    return P.checked === true
                },
                selected: function(P) {
                    P.parentNode.selectedIndex;
                    return P.selected === true
                },
                parent: function(P) {
                    return !!P.firstChild
                },
                empty: function(P) {
                    return !P.firstChild
                },
                has: function(R, Q, P) {
                    return !!E(P[3], R).length
                },
                header: function(P) {
                    return /h\d/i.test(P.nodeName)
                },
                text: function(P) {
                    return "text" === P.type
                },
                radio: function(P) {
                    return "radio" === P.type
                },
                checkbox: function(P) {
                    return "checkbox" === P.type
                },
                file: function(P) {
                    return "file" === P.type
                },
                password: function(P) {
                    return "password" === P.type
                },
                submit: function(P) {
                    return "submit" === P.type
                },
                image: function(P) {
                    return "image" === P.type
                },
                reset: function(P) {
                    return "reset" === P.type
                },
                button: function(P) {
                    return "button" === P.type || P.nodeName.toUpperCase() === "BUTTON"
                },
                input: function(P) {
                    return /input|select|textarea|button/i.test(P.nodeName)
                }
            },
            setFilters: {
                first: function(Q, P) {
                    return P === 0
                },
                last: function(R, Q, P, S) {
                    return Q === S.length - 1
                },
                even: function(Q, P) {
                    return P % 2 === 0
                },
                odd: function(Q, P) {
                    return P % 2 === 1
                },
                lt: function(R, Q, P) {
                    return Q < P[3] - 0
                },
                gt: function(R, Q, P) {
                    return Q > P[3] - 0
                },
                nth: function(R, Q, P) {
                    return P[3] - 0 == Q
                },
                eq: function(R, Q, P) {
                    return P[3] - 0 == Q
                }
            },
            filter: {
                CHILD: function(P, S) {
                    var V = S[1]
                      , W = P.parentNode;
                    var U = "child" + W.childNodes.length;
                    if (W && (!W[U] || !P.nodeIndex)) {
                        var T = 1;
                        for (var Q = W.firstChild; Q; Q = Q.nextSibling) {
                            if (Q.nodeType == 1) {
                                Q.nodeIndex = T++
                            }
                        }
                        W[U] = T - 1
                    }
                    if (V == "first") {
                        return P.nodeIndex == 1
                    } else {
                        if (V == "last") {
                            return P.nodeIndex == W[U]
                        } else {
                            if (V == "only") {
                                return W[U] == 1
                            } else {
                                if (V == "nth") {
                                    var Y = false
                                      , R = S[2]
                                      , X = S[3];
                                    if (R == 1 && X == 0) {
                                        return true
                                    }
                                    if (R == 0) {
                                        if (P.nodeIndex == X) {
                                            Y = true
                                        }
                                    } else {
                                        if ((P.nodeIndex - X) % R == 0 && (P.nodeIndex - X) / R >= 0) {
                                            Y = true
                                        }
                                    }
                                    return Y
                                }
                            }
                        }
                    }
                },
                PSEUDO: function(V, R, S, W) {
                    var Q = R[1]
                      , T = G.filters[Q];
                    if (T) {
                        return T(V, S, R, W)
                    } else {
                        if (Q === "contains") {
                            return (V.textContent || V.innerText || "").indexOf(R[3]) >= 0
                        } else {
                            if (Q === "not") {
                                var U = R[3];
                                for (var S = 0, P = U.length; S < P; S++) {
                                    if (U[S] === V) {
                                        return false
                                    }
                                }
                                return true
                            }
                        }
                    }
                },
                ID: function(Q, P) {
                    return Q.nodeType === 1 && Q.getAttribute("id") === P
                },
                TAG: function(Q, P) {
                    return (P === "*" && Q.nodeType === 1) || Q.nodeName === P
                },
                CLASS: function(Q, P) {
                    return P.test(Q.className)
                },
                ATTR: function(T, R) {
                    var P = G.attrHandle[R[1]] ? G.attrHandle[R[1]](T) : T[R[1]] || T.getAttribute(R[1])
                      , U = P + ""
                      , S = R[2]
                      , Q = R[4];
                    return P == null ? false : S === "=" ? U === Q : S === "*=" ? U.indexOf(Q) >= 0 : S === "~=" ? (" " + U + " ").indexOf(Q) >= 0 : !R[4] ? P : S === "!=" ? U != Q : S === "^=" ? U.indexOf(Q) === 0 : S === "$=" ? U.substr(U.length - Q.length) === Q : S === "|=" ? U === Q || U.substr(0, Q.length + 1) === Q + "-" : false
                },
                POS: function(T, Q, R, U) {
                    var P = Q[2]
                      , S = G.setFilters[P];
                    if (S) {
                        return S(T, R, Q, U)
                    }
                }
            }
        };
        for (var K in G.match) {
            G.match[K] = RegExp(G.match[K].source + /(?![^\[]*\])(?![^\(]*\))/.source)
        }
        var D = function(Q, P) {
            Q = Array.prototype.slice.call(Q);
            if (P) {
                P.push.apply(P, Q);
                return P
            }
            return Q
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes)
        } catch (J) {
            D = function(T, S) {
                var Q = S || [];
                if (F.call(T) === "[object Array]") {
                    Array.prototype.push.apply(Q, T)
                } else {
                    if (typeof T.length === "number") {
                        for (var R = 0, P = T.length; R < P; R++) {
                            Q.push(T[R])
                        }
                    } else {
                        for (var R = 0; T[R]; R++) {
                            Q.push(T[R])
                        }
                    }
                }
                return Q
            }
        }
        (function() {
            var Q = document.createElement("form")
              , R = "script" + (new Date).getTime();
            Q.innerHTML = "<input name='" + R + "'/>";
            var P = document.documentElement;
            P.insertBefore(Q, P.firstChild);
            if (!!document.getElementById(R)) {
                G.find.ID = function(T, U) {
                    if (U.getElementById) {
                        var S = U.getElementById(T[1]);
                        return S ? S.id === T[1] || S.getAttributeNode && S.getAttributeNode("id").nodeValue === T[1] ? [S] : g : []
                    }
                }
                ;
                G.filter.ID = function(U, S) {
                    var T = U.getAttributeNode && U.getAttributeNode("id");
                    return U.nodeType === 1 && T && T.nodeValue === S
                }
            }
            P.removeChild(Q)
        }
        )();
        (function() {
            var P = document.createElement("div");
            P.appendChild(document.createComment(""));
            if (P.getElementsByTagName("*").length > 0) {
                G.find.TAG = function(Q, U) {
                    var T = U.getElementsByTagName(Q[1]);
                    if (Q[1] === "*") {
                        var S = [];
                        for (var R = 0; T[R]; R++) {
                            if (T[R].nodeType === 1) {
                                S.push(T[R])
                            }
                        }
                        T = S
                    }
                    return T
                }
            }
            P.innerHTML = "<a href='#'></a>";
            if (P.firstChild.getAttribute("href") !== "#") {
                G.attrHandle.href = function(Q) {
                    return Q.getAttribute("href", 2)
                }
            }
        }
        )();
        if (document.querySelectorAll) {
            (function() {
                var P = E;
                E = function(T, S, Q, R) {
                    S = S || document;
                    if (!R && S.nodeType === 9) {
                        try {
                            return D(S.querySelectorAll(T), Q)
                        } catch (U) {}
                    }
                    return P(T, S, Q, R)
                }
                ;
                E.find = P.find;
                E.filter = P.filter;
                E.selectors = P.selectors;
                E.matches = P.matches
            }
            )()
        }
        if (document.documentElement.getElementsByClassName) {
            G.order.splice(1, 0, "CLASS");
            G.find.CLASS = function(P, Q) {
                return Q.getElementsByClassName(P[1])
            }
        }
        function L(Q, W, V, Z, X, Y) {
            for (var T = 0, R = Z.length; T < R; T++) {
                var P = Z[T];
                if (P) {
                    P = P[Q];
                    var U = false;
                    while (P && P.nodeType) {
                        var S = P[V];
                        if (S) {
                            U = Z[S];
                            break
                        }
                        if (P.nodeType === 1 && !Y) {
                            P[V] = T
                        }
                        if (P.nodeName === W) {
                            U = P;
                            break
                        }
                        P = P[Q]
                    }
                    Z[T] = U
                }
            }
        }
        function O(Q, V, U, Y, W, X) {
            for (var S = 0, R = Y.length; S < R; S++) {
                var P = Y[S];
                if (P) {
                    P = P[Q];
                    var T = false;
                    while (P && P.nodeType) {
                        if (P[U]) {
                            T = Y[P[U]];
                            break
                        }
                        if (P.nodeType === 1) {
                            if (!X) {
                                P[U] = S
                            }
                            if (typeof V !== "string") {
                                if (P === V) {
                                    T = true;
                                    break
                                }
                            } else {
                                if (E.filter(V, [P]).length > 0) {
                                    T = P;
                                    break
                                }
                            }
                        }
                        P = P[Q]
                    }
                    Y[S] = T
                }
            }
        }
        var H = document.compareDocumentPosition ? function(Q, P) {
            return Q.compareDocumentPosition(P) & 16
        }
        : function(Q, P) {
            return Q !== P && (Q.contains ? Q.contains(P) : true)
        }
        ;
        var M = function(P) {
            return P.documentElement && !P.body || P.tagName && P.ownerDocument && !P.ownerDocument.body
        };
        n.find = E;
        n.filter = E.filter;
        n.expr = E.selectors;
        n.expr[":"] = n.expr.filters;
        E.selectors.filters.hidden = function(P) {
            return "hidden" === P.type || n.css(P, "display") === "none" || n.css(P, "visibility") === "hidden"
        }
        ;
        E.selectors.filters.visible = function(P) {
            return "hidden" !== P.type && n.css(P, "display") !== "none" && n.css(P, "visibility") !== "hidden"
        }
        ;
        E.selectors.filters.animated = function(P) {
            return n.grep(n.timers, function(Q) {
                return P === Q.elem
            }).length
        }
        ;
        n.multiFilter = function(R, P, Q) {
            if (Q) {
                R = ":not(" + R + ")"
            }
            return E.matches(R, P)
        }
        ;
        n.dir = function(R, Q) {
            var P = []
              , S = R[Q];
            while (S && S != document) {
                if (S.nodeType == 1) {
                    P.push(S)
                }
                S = S[Q]
            }
            return P
        }
        ;
        n.nth = function(T, P, R, S) {
            P = P || 1;
            var Q = 0;
            for (; T; T = T[R]) {
                if (T.nodeType == 1 && ++Q == P) {
                    break
                }
            }
            return T
        }
        ;
        n.sibling = function(R, Q) {
            var P = [];
            for (; R; R = R.nextSibling) {
                if (R.nodeType == 1 && R != Q) {
                    P.push(R)
                }
            }
            return P
        }
        ;
        return;
        l.Sizzle = E
    }
    )();
    n.event = {
        add: function(H, E, G, J) {
            if (H.nodeType == 3 || H.nodeType == 8) {
                return
            }
            if (H.setInterval && H != l) {
                H = l
            }
            if (!G.guid) {
                G.guid = this.guid++
            }
            if (J !== g) {
                var F = G;
                G = this.proxy(F);
                G.data = J
            }
            var D = n.data(H, "events") || n.data(H, "events", {})
              , I = n.data(H, "handle") || n.data(H, "handle", function() {
                return typeof n !== "undefined" && !n.event.triggered ? n.event.handle.apply(arguments.callee.elem, arguments) : g
            });
            I.elem = H;
            n.each(E.split(/\s+/), function(L, M) {
                var N = M.split(".");
                M = N.shift();
                G.type = N.slice().sort().join(".");
                var K = D[M];
                if (n.event.specialAll[M]) {
                    n.event.specialAll[M].setup.call(H, J, N)
                }
                if (!K) {
                    K = D[M] = {};
                    if (!n.event.special[M] || n.event.special[M].setup.call(H, J, N) === false) {
                        if (H.addEventListener) {
                            H.addEventListener(M, I, false)
                        } else {
                            if (H.attachEvent) {
                                H.attachEvent("on" + M, I)
                            }
                        }
                    }
                }
                K[G.guid] = G;
                n.event.global[M] = true
            });
            H = null
        },
        guid: 1,
        global: {},
        remove: function(J, G, I) {
            if (J.nodeType == 3 || J.nodeType == 8) {
                return
            }
            var F = n.data(J, "events"), E, D;
            if (F) {
                if (G === g || (typeof G === "string" && G.charAt(0) == ".")) {
                    for (var H in F) {
                        this.remove(J, H + (G || ""))
                    }
                } else {
                    if (G.type) {
                        I = G.handler;
                        G = G.type
                    }
                    n.each(G.split(/\s+/), function(L, N) {
                        var P = N.split(".");
                        N = P.shift();
                        var M = RegExp("(^|\\.)" + P.slice().sort().join(".*\\.") + "(\\.|$)");
                        if (F[N]) {
                            if (I) {
                                delete F[N][I.guid]
                            } else {
                                for (var O in F[N]) {
                                    if (M.test(F[N][O].type)) {
                                        delete F[N][O]
                                    }
                                }
                            }
                            if (n.event.specialAll[N]) {
                                n.event.specialAll[N].teardown.call(J, P)
                            }
                            for (E in F[N]) {
                                break
                            }
                            if (!E) {
                                if (!n.event.special[N] || n.event.special[N].teardown.call(J, P) === false) {
                                    if (J.removeEventListener) {
                                        J.removeEventListener(N, n.data(J, "handle"), false)
                                    } else {
                                        if (J.detachEvent) {
                                            J.detachEvent("on" + N, n.data(J, "handle"))
                                        }
                                    }
                                }
                                E = null;
                                delete F[N]
                            }
                        }
                    })
                }
                for (E in F) {
                    break
                }
                if (!E) {
                    var K = n.data(J, "handle");
                    if (K) {
                        K.elem = null
                    }
                    n.removeData(J, "events");
                    n.removeData(J, "handle")
                }
            }
        },
        trigger: function(H, J, G, D) {
            var F = H.type || H;
            if (!D) {
                H = typeof H === "object" ? H[h] ? H : n.extend(n.Event(F), H) : n.Event(F);
                if (F.indexOf("!") >= 0) {
                    H.type = F = F.slice(0, -1);
                    H.exclusive = true
                }
                if (!G) {
                    H.stopPropagation();
                    if (this.global[F]) {
                        n.each(n.cache, function() {
                            if (this.events && this.events[F]) {
                                n.event.trigger(H, J, this.handle.elem)
                            }
                        })
                    }
                }
                if (!G || G.nodeType == 3 || G.nodeType == 8) {
                    return g
                }
                H.result = g;
                H.target = G;
                J = n.makeArray(J);
                J.unshift(H)
            }
            H.currentTarget = G;
            var I = n.data(G, "handle");
            if (I) {
                I.apply(G, J)
            }
            if ((!G[F] || (n.nodeName(G, "a") && F == "click")) && G["on" + F] && G["on" + F].apply(G, J) === false) {
                H.result = false
            }
            if (!D && G[F] && !H.isDefaultPrevented() && !(n.nodeName(G, "a") && F == "click")) {
                this.triggered = true;
                try {
                    G[F]()
                } catch (K) {}
            }
            this.triggered = false;
            if (!H.isPropagationStopped()) {
                var E = G.parentNode || G.ownerDocument;
                if (E) {
                    n.event.trigger(H, J, E, true)
                }
            }
        },
        handle: function(J) {
            var I, D;
            J = arguments[0] = n.event.fix(J || l.event);
            var K = J.type.split(".");
            J.type = K.shift();
            I = !K.length && !J.exclusive;
            var H = RegExp("(^|\\.)" + K.slice().sort().join(".*\\.") + "(\\.|$)");
            D = (n.data(this, "events") || {})[J.type];
            for (var F in D) {
                var G = D[F];
                if (I || H.test(G.type)) {
                    J.handler = G;
                    J.data = G.data;
                    var E = G.apply(this, arguments);
                    if (E !== g) {
                        J.result = E;
                        if (E === false) {
                            J.preventDefault();
                            J.stopPropagation()
                        }
                    }
                    if (J.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(G) {
            if (G[h]) {
                return G
            }
            var E = G;
            G = n.Event(E);
            for (var F = this.props.length, I; F; ) {
                I = this.props[--F];
                G[I] = E[I]
            }
            if (!G.target) {
                G.target = G.srcElement || document
            }
            if (G.target.nodeType == 3) {
                G.target = G.target.parentNode
            }
            if (!G.relatedTarget && G.fromElement) {
                G.relatedTarget = G.fromElement == G.target ? G.toElement : G.fromElement
            }
            if (G.pageX == null && G.clientX != null) {
                var H = document.documentElement
                  , D = document.body;
                G.pageX = G.clientX + (H && H.scrollLeft || D && D.scrollLeft || 0) - (H.clientLeft || 0);
                G.pageY = G.clientY + (H && H.scrollTop || D && D.scrollTop || 0) - (H.clientTop || 0)
            }
            if (!G.which && ((G.charCode || G.charCode === 0) ? G.charCode : G.keyCode)) {
                G.which = G.charCode || G.keyCode
            }
            if (!G.metaKey && G.ctrlKey) {
                G.metaKey = G.ctrlKey
            }
            if (!G.which && G.button) {
                G.which = (G.button & 1 ? 1 : (G.button & 2 ? 3 : (G.button & 4 ? 2 : 0)))
            }
            return G
        },
        proxy: function(E, D) {
            D = D || function() {
                return E.apply(this, arguments)
            }
            ;
            D.guid = E.guid = E.guid || D.guid || this.guid++;
            return D
        },
        special: {
            ready: {
                setup: A,
                teardown: function() {}
            }
        },
        specialAll: {
            live: {
                setup: function(D, E) {
                    n.event.add(this, E[0], c)
                },
                teardown: function(F) {
                    if (F.length) {
                        var D = 0
                          , E = RegExp("(^|\\.)" + F[0] + "(\\.|$)");
                        n.each((n.data(this, "events").live || {}), function() {
                            if (E.test(this.type)) {
                                D++
                            }
                        });
                        if (D < 1) {
                            n.event.remove(this, F[0], c)
                        }
                    }
                }
            }
        }
    };
    n.Event = function(D) {
        if (!this.preventDefault) {
            return new n.Event(D)
        }
        if (D && D.type) {
            this.originalEvent = D;
            this.type = D.type;
            this.timeStamp = D.timeStamp
        } else {
            this.type = D
        }
        if (!this.timeStamp) {
            this.timeStamp = e()
        }
        this[h] = true
    }
    ;
    function k() {
        return false
    }
    function t() {
        return true
    }
    n.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = t;
            var D = this.originalEvent;
            if (!D) {
                return
            }
            if (D.preventDefault) {
                D.preventDefault()
            }
            D.returnValue = false
        },
        stopPropagation: function() {
            this.isPropagationStopped = t;
            var D = this.originalEvent;
            if (!D) {
                return
            }
            if (D.stopPropagation) {
                D.stopPropagation()
            }
            D.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = t;
            this.stopPropagation()
        },
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k
    };
    var a = function(E) {
        var D = E.relatedTarget;
        while (D && D != this) {
            try {
                D = D.parentNode
            } catch (F) {
                D = this
            }
        }
        if (D != this) {
            E.type = E.data;
            n.event.handle.apply(this, arguments)
        }
    };
    n.each({
        mouseover: "mouseenter",
        mouseout: "mouseleave"
    }, function(E, D) {
        n.event.special[D] = {
            setup: function() {
                n.event.add(this, E, a, D)
            },
            teardown: function() {
                n.event.remove(this, E, a)
            }
        }
    });
    n.fn.extend({
        bind: function(E, F, D) {
            return E == "unload" ? this.one(E, F, D) : this.each(function() {
                n.event.add(this, E, D || F, D && F)
            })
        },
        one: function(F, G, E) {
            var D = n.event.proxy(E || G, function(H) {
                n(this).unbind(H, D);
                return (E || G).apply(this, arguments)
            });
            return this.each(function() {
                n.event.add(this, F, D, E && G)
            })
        },
        unbind: function(E, D) {
            return this.each(function() {
                n.event.remove(this, E, D)
            })
        },
        trigger: function(D, E) {
            return this.each(function() {
                n.event.trigger(D, E, this)
            })
        },
        triggerHandler: function(D, F) {
            if (this[0]) {
                var E = n.Event(D);
                E.preventDefault();
                E.stopPropagation();
                n.event.trigger(E, F, this[0]);
                return E.result
            }
        },
        toggle: function(F) {
            var D = arguments
              , E = 1;
            while (E < D.length) {
                n.event.proxy(F, D[E++])
            }
            return this.click(n.event.proxy(F, function(G) {
                this.lastToggle = (this.lastToggle || 0) % E;
                G.preventDefault();
                return D[this.lastToggle++].apply(this, arguments) || false
            }))
        },
        hover: function(D, E) {
            return this.mouseenter(D).mouseleave(E)
        },
        ready: function(D) {
            A();
            if (n.isReady) {
                D.call(document, n)
            } else {
                n.readyList.push(D)
            }
            return this
        },
        live: function(F, E) {
            var D = n.event.proxy(E);
            D.guid += this.selector + F;
            n(document).bind(i(F, this.selector), this.selector, D);
            return this
        },
        die: function(E, D) {
            n(document).unbind(i(E, this.selector), D ? {
                guid: D.guid + this.selector + E
            } : null);
            return this
        }
    });
    function c(G) {
        var D = RegExp("(^|\\.)" + G.type + "(\\.|$)")
          , F = true
          , E = [];
        n.each(n.data(this, "events").live || [], function(H, I) {
            if (D.test(I.type)) {
                var J = n(G.target).closest(I.data)[0];
                if (J) {
                    E.push({
                        elem: J,
                        fn: I
                    })
                }
            }
        });
        n.each(E, function() {
            if (!G.isImmediatePropagationStopped() && this.fn.call(this.elem, G, this.fn.data) === false) {
                F = false
            }
        });
        return F
    }
    function i(E, D) {
        return ["live", E, D.replace(/\./g, "`").replace(/ /g, "|")].join(".")
    }
    n.extend({
        isReady: false,
        readyList: [],
        ready: function() {
            if (!n.isReady) {
                n.isReady = true;
                if (n.readyList) {
                    n.each(n.readyList, function() {
                        this.call(document, n)
                    });
                    n.readyList = null
                }
                n(document).triggerHandler("ready")
            }
        }
    });
    var w = false;
    function A() {
        if (w) {
            return
        }
        w = true;
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                n.ready()
            }, false)
        } else {
            if (document.attachEvent) {
                document.attachEvent("onreadystatechange", function() {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        n.ready()
                    }
                });
                if (document.documentElement.doScroll && !l.frameElement) {
                    (function() {
                        if (n.isReady) {
                            return
                        }
                        try {
                            document.documentElement.doScroll("left")
                        } catch (D) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        n.ready()
                    }
                    )()
                }
            }
        }
        n.event.add(l, "load", n.ready)
    }
    n.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","), function(E, D) {
        n.fn[D] = function(F) {
            return F ? this.bind(D, F) : this.trigger(D)
        }
    });
    n(l).bind("unload", function() {
        for (var D in n.cache) {
            if (D != 1 && n.cache[D].handle) {
                n.event.remove(n.cache[D].handle.elem)
            }
        }
    });
    (function() {
        n.support = {};
        var E = document.documentElement
          , F = document.createElement("script")
          , J = document.createElement("div")
          , I = "script" + (new Date).getTime();
        J.style.display = "none";
        J.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
        var G = J.getElementsByTagName("*")
          , D = J.getElementsByTagName("a")[0];
        if (!G || !G.length || !D) {
            return
        }
        n.support = {
            leadingWhitespace: J.firstChild.nodeType == 3,
            tbody: !J.getElementsByTagName("tbody").length,
            objectAll: !!J.getElementsByTagName("object")[0].getElementsByTagName("*").length,
            htmlSerialize: !!J.getElementsByTagName("link").length,
            style: /red/.test(D.getAttribute("style")),
            hrefNormalized: D.getAttribute("href") === "/a",
            opacity: D.style.opacity === "0.5",
            cssFloat: !!D.style.cssFloat,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        F.type = "text/javascript";
        try {
            F.appendChild(document.createTextNode("window." + I + "=1;"))
        } catch (H) {}
        E.insertBefore(F, E.firstChild);
        if (l[I]) {
            n.support.scriptEval = true;
            delete l[I]
        }
        E.removeChild(F);
        if (J.attachEvent && J.fireEvent) {
            J.attachEvent("onclick", function() {
                n.support.noCloneEvent = false;
                J.detachEvent("onclick", arguments.callee)
            });
            J.cloneNode(true).fireEvent("onclick")
        }
        n(function() {
            var K = document.createElement("div");
            K.style.width = "1px";
            K.style.paddingLeft = "1px";
            document.body.appendChild(K);
            n.boxModel = n.support.boxModel = K.offsetWidth === 2;
            document.body.removeChild(K)
        })
    }
    )();
    var v = n.support.cssFloat ? "cssFloat" : "styleFloat";
    n.props = {
        "for": "htmlFor",
        "class": "className",
        "float": v,
        cssFloat: v,
        styleFloat: v,
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        tabindex: "tabIndex"
    };
    n.fn.extend({
        _load: n.fn.load,
        load: function(F, I, J) {
            if (typeof F !== "string") {
                return this._load(F)
            }
            var H = F.indexOf(" ");
            if (H >= 0) {
                var D = F.slice(H, F.length);
                F = F.slice(0, H)
            }
            var G = "GET";
            if (I) {
                if (n.isFunction(I)) {
                    J = I;
                    I = null
                } else {
                    if (typeof I === "object") {
                        I = n.param(I);
                        G = "POST"
                    }
                }
            }
            var E = this;
            n.ajax({
                url: F,
                type: G,
                dataType: "html",
                data: I,
                complete: function(L, K) {
                    if (K == "success" || K == "notmodified") {
                        E.html(D ? n("<div/>").append(L.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(D) : L.responseText)
                    }
                    if (J) {
                        E.each(J, [L.responseText, K, L])
                    }
                }
            });
            return this
        },
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? n.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password/i.test(this.type))
            }).map(function(D, E) {
                var F = n(this).val();
                return F == null ? null : n.isArray(F) ? n.map(F, function(H, G) {
                    return {
                        name: E.name,
                        value: H
                    }
                }) : {
                    name: E.name,
                    value: F
                }
            }).get()
        }
    });
    n.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(D, E) {
        n.fn[E] = function(F) {
            return this.bind(E, F)
        }
    });
    var q = e();
    n.extend({
        get: function(D, F, G, E) {
            if (n.isFunction(F)) {
                G = F;
                F = null
            }
            return n.ajax({
                type: "GET",
                url: D,
                data: F,
                success: G,
                dataType: E
            })
        },
        getScript: function(D, E) {
            return n.get(D, null, E, "script")
        },
        getJSON: function(D, E, F) {
            return n.get(D, E, F, "json")
        },
        post: function(D, F, G, E) {
            if (n.isFunction(F)) {
                G = F;
                F = {}
            }
            return n.ajax({
                type: "POST",
                url: D,
                data: F,
                success: G,
                dataType: E
            })
        },
        ajaxSetup: function(D) {
            n.extend(n.ajaxSettings, D)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: function() {
                return l.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest()
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        ajax: function(L) {
            L = n.extend(true, L, n.extend(true, {}, n.ajaxSettings, L));
            var V, E = /=\?(&|$)/g, Q, U, F = L.type.toUpperCase();
            if (L.data && L.processData && typeof L.data !== "string") {
                L.data = n.param(L.data)
            }
            if (L.dataType == "jsonp") {
                if (F == "GET") {
                    if (!L.url.match(E)) {
                        L.url += (L.url.match(/\?/) ? "&" : "?") + (L.jsonp || "callback") + "=?"
                    }
                } else {
                    if (!L.data || !L.data.match(E)) {
                        L.data = (L.data ? L.data + "&" : "") + (L.jsonp || "callback") + "=?"
                    }
                }
                L.dataType = "json"
            }
            if (L.dataType == "json" && (L.data && L.data.match(E) || L.url.match(E))) {
                V = "jsonp" + q++;
                if (L.data) {
                    L.data = (L.data + "").replace(E, "=" + V + "$1")
                }
                L.url = L.url.replace(E, "=" + V + "$1");
                L.dataType = "script";
                l[V] = function(W) {
                    U = W;
                    H();
                    K();
                    l[V] = g;
                    try {
                        delete l[V]
                    } catch (X) {}
                    if (G) {
                        G.removeChild(S)
                    }
                }
            }
            if (L.dataType == "script" && L.cache == null) {
                L.cache = false
            }
            if (L.cache === false && F == "GET") {
                var D = e();
                var T = L.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + D + "$2");
                L.url = T + ((T == L.url) ? (L.url.match(/\?/) ? "&" : "?") + "_=" + D : "")
            }
            if (L.data && F == "GET") {
                L.url += (L.url.match(/\?/) ? "&" : "?") + L.data;
                L.data = null
            }
            if (L.global && !n.active++) {
                n.event.trigger("ajaxStart")
            }
            var P = /^(\w+:)?\/\/([^\/?#]+)/.exec(L.url);
            if (L.dataType == "script" && F == "GET" && P && (P[1] && P[1] != location.protocol || P[2] != location.host)) {
                var G = document.getElementsByTagName("head")[0];
                var S = document.createElement("script");
                S.src = L.url;
                if (L.scriptCharset) {
                    S.charset = L.scriptCharset
                }
                if (!V) {
                    var N = false;
                    S.onload = S.onreadystatechange = function() {
                        if (!N && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                            N = true;
                            H();
                            K();
                            G.removeChild(S)
                        }
                    }
                }
                G.appendChild(S);
                return g
            }
            var J = false;
            var I = L.xhr();
            if (L.username) {
                I.open(F, L.url, L.async, L.username, L.password)
            } else {
                I.open(F, L.url, L.async)
            }
            try {
                if (L.data) {
                    I.setRequestHeader("Content-Type", L.contentType)
                }
                if (L.ifModified) {
                    I.setRequestHeader("If-Modified-Since", n.lastModified[L.url] || "Thu, 01 Jan 1970 00:00:00 GMT")
                }
                I.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                I.setRequestHeader("Accept", L.dataType && L.accepts[L.dataType] ? L.accepts[L.dataType] + ", */*" : L.accepts._default)
            } catch (R) {}
            if (L.beforeSend && L.beforeSend(I, L) === false) {
                if (L.global && !--n.active) {
                    n.event.trigger("ajaxStop")
                }
                I.abort();
                return false
            }
            if (L.global) {
                n.event.trigger("ajaxSend", [I, L])
            }
            var M = function(W) {
                if (I.readyState == 0) {
                    if (O) {
                        clearInterval(O);
                        O = null;
                        if (L.global && !--n.active) {
                            n.event.trigger("ajaxStop")
                        }
                    }
                } else {
                    if (!J && I && (I.readyState == 4 || W == "timeout")) {
                        J = true;
                        if (O) {
                            clearInterval(O);
                            O = null
                        }
                        Q = W == "timeout" ? "timeout" : !n.httpSuccess(I) ? "error" : L.ifModified && n.httpNotModified(I, L.url) ? "notmodified" : "success";
                        if (Q == "success") {
                            try {
                                U = n.httpData(I, L.dataType, L)
                            } catch (Y) {
                                Q = "parsererror"
                            }
                        }
                        if (Q == "success") {
                            var X;
                            try {
                                X = I.getResponseHeader("Last-Modified")
                            } catch (Y) {}
                            if (L.ifModified && X) {
                                n.lastModified[L.url] = X
                            }
                            if (!V) {
                                H()
                            }
                        } else {
                            n.handleError(L, I, Q)
                        }
                        K();
                        if (L.async) {
                            I = null
                        }
                    }
                }
            };
            if (L.async) {
                var O = setInterval(M, 13);
                if (L.timeout > 0) {
                    setTimeout(function() {
                        if (I) {
                            if (!J) {
                                M("timeout")
                            }
                            if (I) {
                                I.abort()
                            }
                        }
                    }, L.timeout)
                }
            }
            try {
                I.send(L.data)
            } catch (R) {
                n.handleError(L, I, null, R)
            }
            if (!L.async) {
                M()
            }
            function H() {
                if (L.success) {
                    L.success(U, Q)
                }
                if (L.global) {
                    n.event.trigger("ajaxSuccess", [I, L])
                }
            }
            function K() {
                if (L.complete) {
                    L.complete(I, Q)
                }
                if (L.global) {
                    n.event.trigger("ajaxComplete", [I, L])
                }
                if (L.global && !--n.active) {
                    n.event.trigger("ajaxStop")
                }
            }
            return I
        },
        handleError: function(E, G, D, F) {
            if (E.error) {
                E.error(G, D, F)
            }
            if (E.global) {
                n.event.trigger("ajaxError", [G, E, F])
            }
        },
        active: 0,
        httpSuccess: function(E) {
            try {
                return !E.status && location.protocol == "file:" || (E.status >= 200 && E.status < 300) || E.status == 304 || E.status == 1223
            } catch (D) {}
            return false
        },
        httpNotModified: function(F, D) {
            try {
                var G = F.getResponseHeader("Last-Modified");
                return F.status == 304 || G == n.lastModified[D]
            } catch (E) {}
            return false
        },
        httpData: function(I, G, F) {
            var E = I.getResponseHeader("content-type")
              , D = G == "xml" || !G && E && E.indexOf("xml") >= 0
              , H = D ? I.responseXML : I.responseText;
            if (D && H.documentElement.tagName == "parsererror") {
                throw "parsererror"
            }
            if (F && F.dataFilter) {
                H = F.dataFilter(H, G)
            }
            if (typeof H === "string") {
                if (G == "script") {
                    n.globalEval(H)
                }
                if (G == "json") {
                    H = l["eval"]("(" + H + ")")
                }
            }
            return H
        },
        param: function(D) {
            var F = [];
            function G(H, I) {
                F[F.length] = encodeURIComponent(H) + "=" + encodeURIComponent(I)
            }
            if (n.isArray(D) || D.jquery) {
                n.each(D, function() {
                    G(this.name, this.value)
                })
            } else {
                for (var E in D) {
                    if (n.isArray(D[E])) {
                        n.each(D[E], function() {
                            G(E, this)
                        })
                    } else {
                        G(E, n.isFunction(D[E]) ? D[E]() : D[E])
                    }
                }
            }
            return F.join("&").replace(/%20/g, "+")
        }
    });
    var m = {}
      , d = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    function s(E, D) {
        var F = {};
        n.each(d.concat.apply([], d.slice(0, D)), function() {
            F[this] = E
        });
        return F
    }
    n.fn.extend({
        show: function(I, K) {
            if (I) {
                return this.animate(s("show", 3), I, K)
            } else {
                for (var G = 0, E = this.length; G < E; G++) {
                    var D = n.data(this[G], "olddisplay");
                    this[G].style.display = D || "";
                    if (n.css(this[G], "display") === "none") {
                        var F = this[G].tagName, J;
                        if (m[F]) {
                            J = m[F]
                        } else {
                            var H = n("<" + F + " />").appendTo("body");
                            J = H.css("display");
                            if (J === "none") {
                                J = "block"
                            }
                            H.remove();
                            m[F] = J
                        }
                        this[G].style.display = n.data(this[G], "olddisplay", J)
                    }
                }
                return this
            }
        },
        hide: function(G, H) {
            if (G) {
                return this.animate(s("hide", 3), G, H)
            } else {
                for (var F = 0, E = this.length; F < E; F++) {
                    var D = n.data(this[F], "olddisplay");
                    if (!D && D !== "none") {
                        n.data(this[F], "olddisplay", n.css(this[F], "display"))
                    }
                    this[F].style.display = "none"
                }
                return this
            }
        },
        _toggle: n.fn.toggle,
        toggle: function(F, E) {
            var D = typeof F === "boolean";
            return n.isFunction(F) && n.isFunction(E) ? this._toggle.apply(this, arguments) : F == null || D ? this.each(function() {
                var G = D ? F : n(this).is(":hidden");
                n(this)[G ? "show" : "hide"]()
            }) : this.animate(s("toggle", 3), F, E)
        },
        fadeTo: function(D, F, E) {
            return this.animate({
                opacity: F
            }, D, E)
        },
        animate: function(H, E, G, F) {
            var D = n.speed(E, G, F);
            return this[D.queue === false ? "each" : "queue"](function() {
                var J = n.extend({}, D), L, K = this.nodeType == 1 && n(this).is(":hidden"), I = this;
                for (L in H) {
                    if (H[L] == "hide" && K || H[L] == "show" && !K) {
                        return J.complete.call(this)
                    }
                    if ((L == "height" || L == "width") && this.style) {
                        J.display = n.css(this, "display");
                        J.overflow = this.style.overflow
                    }
                }
                if (J.overflow != null) {
                    this.style.overflow = "hidden"
                }
                J.curAnim = n.extend({}, H);
                n.each(H, function(N, R) {
                    var Q = new n.fx(I,J,N);
                    if (/toggle|show|hide/.test(R)) {
                        Q[R == "toggle" ? K ? "show" : "hide" : R](H)
                    } else {
                        var P = R.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/)
                          , S = Q.cur(true) || 0;
                        if (P) {
                            var M = parseFloat(P[2])
                              , O = P[3] || "px";
                            if (O != "px") {
                                I.style[N] = (M || 1) + O;
                                S = ((M || 1) / Q.cur(true)) * S;
                                I.style[N] = S + O
                            }
                            if (P[1]) {
                                M = ((P[1] == "-=" ? -1 : 1) * M) + S
                            }
                            Q.custom(S, M, O)
                        } else {
                            Q.custom(S, R, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function(E, D) {
            var F = n.timers;
            if (E) {
                this.queue([])
            }
            this.each(function() {
                for (var G = F.length - 1; G >= 0; G--) {
                    if (F[G].elem == this) {
                        if (D) {
                            F[G](true)
                        }
                        F.splice(G, 1)
                    }
                }
            });
            if (!D) {
                this.dequeue()
            }
            return this
        }
    });
    n.each({
        slideDown: s("show", 1),
        slideUp: s("hide", 1),
        slideToggle: s("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    }, function(D, E) {
        n.fn[D] = function(F, G) {
            return this.animate(E, F, G)
        }
    });
    n.extend({
        speed: function(F, G, E) {
            var D = typeof F === "object" ? F : {
                complete: E || !E && G || n.isFunction(F) && F,
                duration: F,
                easing: E && G || G && !n.isFunction(G) && G
            };
            D.duration = n.fx.off ? 0 : typeof D.duration === "number" ? D.duration : n.fx.speeds[D.duration] || n.fx.speeds._default;
            D.old = D.complete;
            D.complete = function() {
                if (D.queue !== false) {
                    n(this).dequeue()
                }
                if (n.isFunction(D.old)) {
                    D.old.call(this)
                }
            }
            ;
            return D
        },
        easing: {
            linear: function(F, G, D, E) {
                return D + E * F
            },
            swing: function(F, G, D, E) {
                return ((-Math.cos(F * Math.PI) / 2) + 0.5) * E + D
            }
        },
        timers: [],
        timerId: null,
        fx: function(E, D, F) {
            this.options = D;
            this.elem = E;
            this.prop = F;
            if (!D.orig) {
                D.orig = {}
            }
        }
    });
    n.fx.prototype = {
        update: function() {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            (n.fx.step[this.prop] || n.fx.step._default)(this);
            if ((this.prop == "height" || this.prop == "width") && this.elem.style) {
                this.elem.style.display = "block"
            }
        },
        cur: function(E) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var D = parseFloat(n.css(this.elem, this.prop, E));
            return D && D > -10000 ? D : parseFloat(n.curCSS(this.elem, this.prop)) || 0
        },
        custom: function(H, G, F) {
            this.startTime = e();
            this.start = H;
            this.end = G;
            this.unit = F || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var D = this;
            function E(I) {
                return D.step(I)
            }
            E.elem = this.elem;
            n.timers.push(E);
            if (E() && n.timerId == null) {
                n.timerId = setInterval(function() {
                    var J = n.timers;
                    for (var I = 0; I < J.length; I++) {
                        if (!J[I]()) {
                            J.splice(I--, 1)
                        }
                    }
                    if (!J.length) {
                        clearInterval(n.timerId);
                        n.timerId = null
                    }
                }, 13)
            }
        },
        show: function() {
            this.options.orig[this.prop] = n.attr(this.elem.style, this.prop);
            this.options.show = true;
            this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());
            n(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = n.attr(this.elem.style, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(G) {
            var F = e();
            if (G || F >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                var D = true;
                for (var E in this.options.curAnim) {
                    if (this.options.curAnim[E] !== true) {
                        D = false
                    }
                }
                if (D) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        this.elem.style.display = this.options.display;
                        if (n.css(this.elem, "display") == "none") {
                            this.elem.style.display = "block"
                        }
                    }
                    if (this.options.hide) {
                        n(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var H in this.options.curAnim) {
                            n.attr(this.elem.style, H, this.options.orig[H])
                        }
                    }
                }
                if (D) {
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var I = F - this.startTime;
                this.state = I / this.options.duration;
                this.pos = n.easing[this.options.easing || (n.easing.swing ? "swing" : "linear")](this.state, I, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    n.extend(n.fx, {
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(D) {
                n.attr(D.elem.style, "opacity", D.now)
            },
            _default: function(D) {
                if (D.elem.style && D.elem.style[D.prop] != null) {
                    D.elem.style[D.prop] = D.now + D.unit
                } else {
                    D.elem[D.prop] = D.now
                }
            }
        }
    });
    if (document.documentElement.getBoundingClientRect) {
        n.fn.offset = function() {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                }
            }
            if (this[0] === this[0].ownerDocument.body) {
                return n.offset.bodyOffset(this[0])
            }
            var F = this[0].getBoundingClientRect()
              , I = this[0].ownerDocument
              , E = I.body
              , D = I.documentElement
              , K = D.clientTop || E.clientTop || 0
              , J = D.clientLeft || E.clientLeft || 0
              , H = F.top + (self.pageYOffset || n.boxModel && D.scrollTop || E.scrollTop) - K
              , G = F.left + (self.pageXOffset || n.boxModel && D.scrollLeft || E.scrollLeft) - J;
            return {
                top: H,
                left: G
            }
        }
    } else {
        n.fn.offset = function() {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                }
            }
            if (this[0] === this[0].ownerDocument.body) {
                return n.offset.bodyOffset(this[0])
            }
            n.offset.initialized || n.offset.initialize();
            var I = this[0], F = I.offsetParent, E = I, N = I.ownerDocument, L, G = N.documentElement, J = N.body, K = N.defaultView, D = K.getComputedStyle(I, null), M = I.offsetTop, H = I.offsetLeft;
            while ((I = I.parentNode) && I !== J && I !== G) {
                L = K.getComputedStyle(I, null);
                M -= I.scrollTop,
                H -= I.scrollLeft;
                if (I === F) {
                    M += I.offsetTop,
                    H += I.offsetLeft;
                    if (n.offset.doesNotAddBorder && !(n.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(I.tagName))) {
                        M += parseInt(L.borderTopWidth, 10) || 0,
                        H += parseInt(L.borderLeftWidth, 10) || 0
                    }
                    E = F,
                    F = I.offsetParent
                }
                if (n.offset.subtractsBorderForOverflowNotVisible && L.overflow !== "visible") {
                    M += parseInt(L.borderTopWidth, 10) || 0,
                    H += parseInt(L.borderLeftWidth, 10) || 0
                }
                D = L
            }
            if (D.position === "relative" || D.position === "static") {
                M += J.offsetTop,
                H += J.offsetLeft
            }
            if (D.position === "fixed") {
                M += Math.max(G.scrollTop, J.scrollTop),
                H += Math.max(G.scrollLeft, J.scrollLeft)
            }
            return {
                top: M,
                left: H
            }
        }
    }
    n.offset = {
        initialize: function() {
            if (this.initialized) {
                return
            }
            var K = document.body, E = document.createElement("div"), G, F, M, H, L, D, I = K.style.marginTop, J = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"cellpadding="0"cellspacing="0"><tr><td></td></tr></table>';
            L = {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            };
            for (D in L) {
                E.style[D] = L[D]
            }
            E.innerHTML = J;
            K.insertBefore(E, K.firstChild);
            G = E.firstChild,
            F = G.firstChild,
            H = G.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (F.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (H.offsetTop === 5);
            G.style.overflow = "hidden",
            G.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (F.offsetTop === -5);
            K.style.marginTop = "1px";
            this.doesNotIncludeMarginInBodyOffset = (K.offsetTop === 0);
            K.style.marginTop = I;
            K.removeChild(E);
            this.initialized = true
        },
        bodyOffset: function(D) {
            n.offset.initialized || n.offset.initialize();
            var F = D.offsetTop
              , E = D.offsetLeft;
            if (n.offset.doesNotIncludeMarginInBodyOffset) {
                F += parseInt(n.curCSS(D, "marginTop", true), 10) || 0,
                E += parseInt(n.curCSS(D, "marginLeft", true), 10) || 0
            }
            return {
                top: F,
                left: E
            }
        }
    };
    n.fn.extend({
        position: function() {
            var H = 0, G = 0, E;
            if (this[0]) {
                var F = this.offsetParent()
                  , I = this.offset()
                  , D = /^body|html$/i.test(F[0].tagName) ? {
                    top: 0,
                    left: 0
                } : F.offset();
                I.top -= j(this, "marginTop");
                I.left -= j(this, "marginLeft");
                D.top += j(F, "borderTopWidth");
                D.left += j(F, "borderLeftWidth");
                E = {
                    top: I.top - D.top,
                    left: I.left - D.left
                }
            }
            return E
        },
        offsetParent: function() {
            var D = this[0].offsetParent || document.body;
            while (D && (!/^body|html$/i.test(D.tagName) && n.css(D, "position") == "static")) {
                D = D.offsetParent
            }
            return n(D)
        }
    });
    n.each(["Left", "Top"], function(E, D) {
        var F = "scroll" + D;
        n.fn[F] = function(G) {
            if (!this[0]) {
                return null
            }
            return G !== g ? this.each(function() {
                this == l || this == document ? l.scrollTo(!E ? G : n(l).scrollLeft(), E ? G : n(l).scrollTop()) : this[F] = G
            }) : this[0] == l || this[0] == document ? self[E ? "pageYOffset" : "pageXOffset"] || n.boxModel && document.documentElement[F] || document.body[F] : this[0][F]
        }
    });
    n.each(["Height", "Width"], function(G, E) {
        var D = G ? "Left" : "Top"
          , F = G ? "Right" : "Bottom";
        n.fn["inner" + E] = function() {
            return this[E.toLowerCase()]() + j(this, "padding" + D) + j(this, "padding" + F)
        }
        ;
        n.fn["outer" + E] = function(I) {
            return this["inner" + E]() + j(this, "border" + D + "Width") + j(this, "border" + F + "Width") + (I ? j(this, "margin" + D) + j(this, "margin" + F) : 0)
        }
        ;
        var H = E.toLowerCase();
        n.fn[H] = function(I) {
            return this[0] == l ? document.compatMode == "CSS1Compat" && document.documentElement["client" + E] || document.body["client" + E] : this[0] == document ? Math.max(document.documentElement["client" + E], document.body["scroll" + E], document.documentElement["scroll" + E], document.body["offset" + E], document.documentElement["offset" + E]) : I === g ? (this.length ? n.css(this[0], H) : null) : this.css(H, typeof I === "string" ? I : I + "px")
        }
    })
}
)();
