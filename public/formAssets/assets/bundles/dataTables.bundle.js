!(function (n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], function (t) {
        return n(t, window, document);
      })
    : "object" == typeof exports
    ? (module.exports = function (t, e) {
        return (
          (t = t || window),
          (e =
            e ||
            ("undefined" != typeof window
              ? require("jquery")
              : require("jquery")(t))),
          n(e, t, t.document)
        );
      })
    : (window.DataTable = n(jQuery, window, document));
})(function (P, j, S, N) {
  "use strict";
  function f(t) {
    var e = parseInt(t, 10);
    return !isNaN(e) && isFinite(t) ? e : null;
  }
  function s(t, e, n) {
    var r = "string" == typeof t;
    return (
      !!h(t) ||
      (e && r && (t = J(t, e)),
      n && r && (t = t.replace(z, "")),
      !isNaN(parseFloat(t)) && isFinite(t))
    );
  }
  function n(t, e, n) {
    return (
      !!h(t) ||
      ((h((r = t)) || "string" == typeof r) && !!s(t.replace(V, ""), e, n)) ||
      null
    );
    var r;
  }
  function m(t, e, n, r) {
    var a = [],
      o = 0,
      i = e.length;
    if (r !== N) for (; o < i; o++) t[e[o]][n] && a.push(t[e[o]][n][r]);
    else for (; o < i; o++) a.push(t[e[o]][n]);
    return a;
  }
  function d(t, e) {
    var n,
      r = [];
    e === N ? ((e = 0), (n = t)) : ((n = e), (e = t));
    for (var a = e; a < n; a++) r.push(a);
    return r;
  }
  function _(t) {
    for (var e = [], n = 0, r = t.length; n < r; n++) t[n] && e.push(t[n]);
    return e;
  }
  function r(t, e) {
    return -1 !== this.indexOf(t, (e = e === N ? 0 : e));
  }
  var p,
    e,
    t,
    w = function (t, y) {
      if (this instanceof w) return P(t).DataTable(y);
      (y = t),
        (this.$ = function (t, e) {
          return this.api(!0).$(t, e);
        }),
        (this._ = function (t, e) {
          return this.api(!0).rows(t, e).data();
        }),
        (this.api = function (t) {
          return new U(t ? pe(this[p.iApiIndex]) : this);
        }),
        (this.fnAddData = function (t, e) {
          var n = this.api(!0),
            t = (
              Array.isArray(t) && (Array.isArray(t[0]) || P.isPlainObject(t[0]))
                ? n.rows
                : n.row
            ).add(t);
          return (e !== N && !e) || n.draw(), t.flatten().toArray();
        }),
        (this.fnAdjustColumnSizing = function (t) {
          var e = this.api(!0).columns.adjust(),
            n = e.settings()[0],
            r = n.oScroll;
          t === N || t ? e.draw(!1) : ("" === r.sX && "" === r.sY) || Qt(n);
        }),
        (this.fnClearTable = function (t) {
          var e = this.api(!0).clear();
          (t !== N && !t) || e.draw();
        }),
        (this.fnClose = function (t) {
          this.api(!0).row(t).child.hide();
        }),
        (this.fnDeleteRow = function (t, e, n) {
          var r = this.api(!0),
            t = r.rows(t),
            a = t.settings()[0],
            o = a.aoData[t[0][0]];
          return (
            t.remove(), e && e.call(this, a, o), (n !== N && !n) || r.draw(), o
          );
        }),
        (this.fnDestroy = function (t) {
          this.api(!0).destroy(t);
        }),
        (this.fnDraw = function (t) {
          this.api(!0).draw(t);
        }),
        (this.fnFilter = function (t, e, n, r, a, o) {
          var i = this.api(!0);
          (null === e || e === N ? i : i.column(e)).search(t, n, r, o),
            i.draw();
        }),
        (this.fnGetData = function (t, e) {
          var n,
            r = this.api(!0);
          return t !== N
            ? ((n = t.nodeName ? t.nodeName.toLowerCase() : ""),
              e !== N || "td" == n || "th" == n
                ? r.cell(t, e).data()
                : r.row(t).data() || null)
            : r.data().toArray();
        }),
        (this.fnGetNodes = function (t) {
          var e = this.api(!0);
          return t !== N
            ? e.row(t).node()
            : e.rows().nodes().flatten().toArray();
        }),
        (this.fnGetPosition = function (t) {
          var e = this.api(!0),
            n = t.nodeName.toUpperCase();
          return "TR" == n
            ? e.row(t).index()
            : "TD" == n || "TH" == n
            ? [(n = e.cell(t).index()).row, n.columnVisible, n.column]
            : null;
        }),
        (this.fnIsOpen = function (t) {
          return this.api(!0).row(t).child.isShown();
        }),
        (this.fnOpen = function (t, e, n) {
          return this.api(!0).row(t).child(e, n).show().child()[0];
        }),
        (this.fnPageChange = function (t, e) {
          t = this.api(!0).page(t);
          (e !== N && !e) || t.draw(!1);
        }),
        (this.fnSetColumnVis = function (t, e, n) {
          t = this.api(!0).column(t).visible(e);
          (n !== N && !n) || t.columns.adjust().draw();
        }),
        (this.fnSettings = function () {
          return pe(this[p.iApiIndex]);
        }),
        (this.fnSort = function (t) {
          this.api(!0).order(t).draw();
        }),
        (this.fnSortListener = function (t, e, n) {
          this.api(!0).order.listener(t, e, n);
        }),
        (this.fnUpdate = function (t, e, n, r, a) {
          var o = this.api(!0);
          return (
            (n === N || null === n ? o.row(e) : o.cell(e, n)).data(t),
            (a !== N && !a) || o.columns.adjust(),
            (r !== N && !r) || o.draw(),
            0
          );
        }),
        (this.fnVersionCheck = p.fnVersionCheck);
      var e,
        S = this,
        D = y === N,
        _ = this.length;
      for (e in (D && (y = {}),
      (this.oApi = this.internal = p.internal),
      w.ext.internal))
        e && (this[e] = Me(e));
      return (
        this.each(function () {
          var a = 1 < _ ? ge({}, y, !0) : y,
            o = 0,
            t = this.getAttribute("id"),
            i = !1,
            e = w.defaults,
            s = P(this);
          if ("table" != this.nodeName.toLowerCase())
            E(
              null,
              0,
              "Non-table node initialisation (" + this.nodeName + ")",
              2
            );
          else {
            Q(e),
              K(e.column),
              C(e, e, !0),
              C(e.column, e.column, !0),
              C(e, P.extend(a, s.data()), !0);
            for (var n = w.settings, o = 0, l = n.length; o < l; o++) {
              var r = n[o];
              if (
                r.nTable == this ||
                (r.nTHead && r.nTHead.parentNode == this) ||
                (r.nTFoot && r.nTFoot.parentNode == this)
              ) {
                var u = (a.bRetrieve !== N ? a : e).bRetrieve,
                  c = (a.bDestroy !== N ? a : e).bDestroy;
                if (D || u) return r.oInstance;
                if (c) {
                  r.oInstance.fnDestroy();
                  break;
                }
                return void E(r, 0, "Cannot reinitialise DataTable", 3);
              }
              if (r.sTableId == this.id) {
                n.splice(o, 1);
                break;
              }
            }
            (null !== t && "" !== t) ||
              ((t = "DataTables_Table_" + w.ext._unique++), (this.id = t));
            var d,
              f,
              h = P.extend(!0, {}, w.models.oSettings, {
                sDestroyWidth: s[0].style.width,
                sInstance: t,
                sTableId: t,
              }),
              p =
                ((h.nTable = this),
                (h.oApi = S.internal),
                (h.oInit = a),
                n.push(h),
                (h.oInstance = 1 === S.length ? S : s.dataTable()),
                Q(a),
                Z(a.oLanguage),
                a.aLengthMenu &&
                  !a.iDisplayLength &&
                  (a.iDisplayLength = (
                    Array.isArray(a.aLengthMenu[0])
                      ? a.aLengthMenu[0]
                      : a.aLengthMenu
                  )[0]),
                (a = ge(P.extend(!0, {}, e), a)),
                F(h.oFeatures, a, [
                  "bPaginate",
                  "bLengthChange",
                  "bFilter",
                  "bSort",
                  "bSortMulti",
                  "bInfo",
                  "bProcessing",
                  "bAutoWidth",
                  "bSortClasses",
                  "bServerSide",
                  "bDeferRender",
                ]),
                F(h, a, [
                  "asStripeClasses",
                  "ajax",
                  "fnServerData",
                  "fnFormatNumber",
                  "sServerMethod",
                  "aaSorting",
                  "aaSortingFixed",
                  "aLengthMenu",
                  "sPaginationType",
                  "sAjaxSource",
                  "sAjaxDataProp",
                  "iStateDuration",
                  "sDom",
                  "bSortCellsTop",
                  "iTabIndex",
                  "fnStateLoadCallback",
                  "fnStateSaveCallback",
                  "renderer",
                  "searchDelay",
                  "rowId",
                  ["iCookieDuration", "iStateDuration"],
                  ["oSearch", "oPreviousSearch"],
                  ["aoSearchCols", "aoPreSearchCols"],
                  ["iDisplayLength", "_iDisplayLength"],
                ]),
                F(h.oScroll, a, [
                  ["sScrollX", "sX"],
                  ["sScrollXInner", "sXInner"],
                  ["sScrollY", "sY"],
                  ["bScrollCollapse", "bCollapse"],
                ]),
                F(h.oLanguage, a, "fnInfoCallback"),
                L(h, "aoDrawCallback", a.fnDrawCallback, "user"),
                L(h, "aoServerParams", a.fnServerParams, "user"),
                L(h, "aoStateSaveParams", a.fnStateSaveParams, "user"),
                L(h, "aoStateLoadParams", a.fnStateLoadParams, "user"),
                L(h, "aoStateLoaded", a.fnStateLoaded, "user"),
                L(h, "aoRowCallback", a.fnRowCallback, "user"),
                L(h, "aoRowCreatedCallback", a.fnCreatedRow, "user"),
                L(h, "aoHeaderCallback", a.fnHeaderCallback, "user"),
                L(h, "aoFooterCallback", a.fnFooterCallback, "user"),
                L(h, "aoInitComplete", a.fnInitComplete, "user"),
                L(h, "aoPreDrawCallback", a.fnPreDrawCallback, "user"),
                (h.rowIdFn = A(a.rowId)),
                tt(h),
                h.oClasses),
              g =
                (P.extend(p, w.ext.classes, a.oClasses),
                s.addClass(p.sTable),
                h.iInitDisplayStart === N &&
                  ((h.iInitDisplayStart = a.iDisplayStart),
                  (h._iDisplayStart = a.iDisplayStart)),
                null !== a.iDeferLoading &&
                  ((h.bDeferLoading = !0),
                  (t = Array.isArray(a.iDeferLoading)),
                  (h._iRecordsDisplay = t
                    ? a.iDeferLoading[0]
                    : a.iDeferLoading),
                  (h._iRecordsTotal = t
                    ? a.iDeferLoading[1]
                    : a.iDeferLoading)),
                h.oLanguage),
              t =
                (P.extend(!0, g, a.oLanguage),
                g.sUrl
                  ? (P.ajax({
                      dataType: "json",
                      url: g.sUrl,
                      success: function (t) {
                        C(e.oLanguage, t),
                          Z(t),
                          P.extend(!0, g, t),
                          R(h, null, "i18n", [h]),
                          qt(h);
                      },
                      error: function () {
                        qt(h);
                      },
                    }),
                    (i = !0))
                  : R(h, null, "i18n", [h]),
                null === a.asStripeClasses &&
                  (h.asStripeClasses = [p.sStripeOdd, p.sStripeEven]),
                h.asStripeClasses),
              b = s.children("tbody").find("tr").eq(0),
              m =
                (-1 !==
                  P.inArray(
                    !0,
                    P.map(t, function (t, e) {
                      return b.hasClass(t);
                    })
                  ) &&
                  (P("tbody tr", this).removeClass(t.join(" ")),
                  (h.asDestroyStripes = t.slice())),
                []),
              t = this.getElementsByTagName("thead");
            if (
              (0 !== t.length && (_t(h.aoHeader, t[0]), (m = wt(h))),
              null === a.aoColumns)
            )
              for (d = [], o = 0, l = m.length; o < l; o++) d.push(null);
            else d = a.aoColumns;
            for (o = 0, l = d.length; o < l; o++) nt(h, m ? m[o] : null);
            st(h, a.aoColumnDefs, d, function (t, e) {
              rt(h, t, e);
            }),
              b.length &&
                ((f = function (t, e) {
                  return null !== t.getAttribute("data-" + e) ? e : null;
                }),
                P(b[0])
                  .children("th, td")
                  .each(function (t, e) {
                    var n,
                      r = h.aoColumns[t];
                    r.mData === t &&
                      ((n = f(e, "sort") || f(e, "order")),
                      (e = f(e, "filter") || f(e, "search")),
                      (null === n && null === e) ||
                        ((r.mData = {
                          _: t + ".display",
                          sort: null !== n ? t + ".@data-" + n : N,
                          type: null !== n ? t + ".@data-" + n : N,
                          filter: null !== e ? t + ".@data-" + e : N,
                        }),
                        rt(h, t)));
                  }));
            var v = h.oFeatures,
              t = function () {
                if (a.aaSorting === N) {
                  var t = h.aaSorting;
                  for (o = 0, l = t.length; o < l; o++)
                    t[o][1] = h.aoColumns[o].asSorting[0];
                }
                ue(h),
                  v.bSort &&
                    L(h, "aoDrawCallback", function () {
                      var t, n;
                      h.bSorted &&
                        ((t = I(h)),
                        (n = {}),
                        P.each(t, function (t, e) {
                          n[e.src] = e.dir;
                        }),
                        R(h, null, "order", [h, t, n]),
                        ie(h));
                    }),
                  L(
                    h,
                    "aoDrawCallback",
                    function () {
                      (h.bSorted || "ssp" === B(h) || v.bDeferRender) && ue(h);
                    },
                    "sc"
                  );
                var e = s.children("caption").each(function () {
                    this._captionSide = P(this).css("caption-side");
                  }),
                  n = s.children("thead"),
                  r =
                    (0 === n.length && (n = P("<thead/>").appendTo(s)),
                    (h.nTHead = n[0]),
                    s.children("tbody")),
                  n =
                    (0 === r.length && (r = P("<tbody/>").insertAfter(n)),
                    (h.nTBody = r[0]),
                    s.children("tfoot"));
                if (
                  (0 ===
                    (n =
                      0 === n.length &&
                      0 < e.length &&
                      ("" !== h.oScroll.sX || "" !== h.oScroll.sY)
                        ? P("<tfoot/>").appendTo(s)
                        : n).length || 0 === n.children().length
                    ? s.addClass(p.sNoFooter)
                    : 0 < n.length &&
                      ((h.nTFoot = n[0]), _t(h.aoFooter, h.nTFoot)),
                  a.aaData)
                )
                  for (o = 0; o < a.aaData.length; o++) x(h, a.aaData[o]);
                else
                  (!h.bDeferLoading && "dom" != B(h)) ||
                    lt(h, P(h.nTBody).children("tr"));
                (h.aiDisplay = h.aiDisplayMaster.slice()),
                  !(h.bInitialised = !0) === i && qt(h);
              };
            L(h, "aoDrawCallback", de, "state_save"),
              a.bStateSave ? ((v.bStateSave = !0), fe(h, 0, t)) : t();
          }
        }),
        (S = null),
        this
      );
    },
    l = {},
    c = /[\r\n\u2028]/g,
    V = /<.*?>/g,
    q =
      /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    X = new RegExp(
      "(\\" +
        [
          "/",
          ".",
          "*",
          "+",
          "?",
          "|",
          "(",
          ")",
          "[",
          "]",
          "{",
          "}",
          "\\",
          "$",
          "^",
          "-",
        ].join("|\\") +
        ")",
      "g"
    ),
    z = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    h = function (t) {
      return !t || !0 === t || "-" === t;
    },
    J = function (t, e) {
      return (
        l[e] || (l[e] = new RegExp(kt(e), "g")),
        "string" == typeof t && "." !== e
          ? t.replace(/\./g, "").replace(l[e], ".")
          : t
      );
    },
    k = function (t, e, n) {
      var r = [],
        a = 0,
        o = t.length;
      if (n !== N) for (; a < o; a++) t[a] && t[a][e] && r.push(t[a][e][n]);
      else for (; a < o; a++) t[a] && r.push(t[a][e]);
      return r;
    },
    $ = function (t) {
      if (t.length < 2) return !0;
      for (
        var e = t.slice().sort(), n = e[0], r = 1, a = e.length;
        r < a;
        r++
      ) {
        if (e[r] === n) return !1;
        n = e[r];
      }
      return !0;
    },
    G = function (t) {
      if ($(t)) return t.slice();
      var e,
        n,
        r,
        a = [],
        o = t.length,
        i = 0;
      t: for (n = 0; n < o; n++) {
        for (e = t[n], r = 0; r < i; r++) if (a[r] === e) continue t;
        a.push(e), i++;
      }
      return a;
    },
    Y = function (t, e) {
      if (Array.isArray(e)) for (var n = 0; n < e.length; n++) Y(t, e[n]);
      else t.push(e);
      return t;
    };
  function i(n) {
    var r,
      a,
      o = {};
    P.each(n, function (t, e) {
      (r = t.match(/^([^A-Z]+?)([A-Z])/)) &&
        -1 !== "a aa ai ao as b fn i m o s ".indexOf(r[1] + " ") &&
        ((a = t.replace(r[0], r[2].toLowerCase())),
        (o[a] = t),
        "o" === r[1] && i(n[t]));
    }),
      (n._hungarianMap = o);
  }
  function C(n, r, a) {
    var o;
    n._hungarianMap || i(n),
      P.each(r, function (t, e) {
        (o = n._hungarianMap[t]) === N ||
          (!a && r[o] !== N) ||
          ("o" === o.charAt(0)
            ? (r[o] || (r[o] = {}), P.extend(!0, r[o], r[t]), C(n[o], r[o], a))
            : (r[o] = r[t]));
      });
  }
  function Z(t) {
    var e,
      n = w.defaults.oLanguage,
      r = n.sDecimal;
    r && Oe(r),
      t &&
        ((e = t.sZeroRecords),
        !t.sEmptyTable &&
          e &&
          "No data available in table" === n.sEmptyTable &&
          F(t, t, "sZeroRecords", "sEmptyTable"),
        !t.sLoadingRecords &&
          e &&
          "Loading..." === n.sLoadingRecords &&
          F(t, t, "sZeroRecords", "sLoadingRecords"),
        t.sInfoThousands && (t.sThousands = t.sInfoThousands),
        (e = t.sDecimal) && r !== e && Oe(e));
  }
  Array.isArray ||
    (Array.isArray = function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    }),
    Array.prototype.includes || (Array.prototype.includes = r),
    String.prototype.trim ||
      (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }),
    String.prototype.includes || (String.prototype.includes = r),
    (w.util = {
      throttle: function (r, t) {
        var a,
          o,
          i = t !== N ? t : 200;
        return function () {
          var t = this,
            e = +new Date(),
            n = arguments;
          a && e < a + i
            ? (clearTimeout(o),
              (o = setTimeout(function () {
                (a = N), r.apply(t, n);
              }, i)))
            : ((a = e), r.apply(t, n));
        };
      },
      escapeRegex: function (t) {
        return t.replace(X, "\\$1");
      },
      set: function (r) {
        var f;
        return P.isPlainObject(r)
          ? w.util.set(r._)
          : null === r
          ? function () {}
          : "function" == typeof r
          ? function (t, e, n) {
              r(t, "set", e, n);
            }
          : "string" != typeof r ||
            (-1 === r.indexOf(".") &&
              -1 === r.indexOf("[") &&
              -1 === r.indexOf("("))
          ? function (t, e) {
              t[r] = e;
            }
          : ((f = function (t, e, n) {
              for (
                var r,
                  a,
                  o,
                  i,
                  s = dt(n),
                  n = s[s.length - 1],
                  l = 0,
                  u = s.length - 1;
                l < u;
                l++
              ) {
                if ("__proto__" === s[l] || "constructor" === s[l])
                  throw new Error("Cannot set prototype values");
                if (((r = s[l].match(ct)), (a = s[l].match(g)), r)) {
                  if (
                    ((s[l] = s[l].replace(ct, "")),
                    (t[s[l]] = []),
                    (r = s.slice()).splice(0, l + 1),
                    (i = r.join(".")),
                    Array.isArray(e))
                  )
                    for (var c = 0, d = e.length; c < d; c++)
                      f((o = {}), e[c], i), t[s[l]].push(o);
                  else t[s[l]] = e;
                  return;
                }
                a && ((s[l] = s[l].replace(g, "")), (t = t[s[l]](e))),
                  (null !== t[s[l]] && t[s[l]] !== N) || (t[s[l]] = {}),
                  (t = t[s[l]]);
              }
              n.match(g) ? t[n.replace(g, "")](e) : (t[n.replace(ct, "")] = e);
            }),
            function (t, e) {
              return f(t, e, r);
            });
      },
      get: function (a) {
        var o, f;
        return P.isPlainObject(a)
          ? ((o = {}),
            P.each(a, function (t, e) {
              e && (o[t] = w.util.get(e));
            }),
            function (t, e, n, r) {
              var a = o[e] || o._;
              return a !== N ? a(t, e, n, r) : t;
            })
          : null === a
          ? function (t) {
              return t;
            }
          : "function" == typeof a
          ? function (t, e, n, r) {
              return a(t, e, n, r);
            }
          : "string" != typeof a ||
            (-1 === a.indexOf(".") &&
              -1 === a.indexOf("[") &&
              -1 === a.indexOf("("))
          ? function (t, e) {
              return t[a];
            }
          : ((f = function (t, e, n) {
              var r, a, o;
              if ("" !== n)
                for (var i = dt(n), s = 0, l = i.length; s < l; s++) {
                  if (((d = i[s].match(ct)), (r = i[s].match(g)), d)) {
                    if (
                      ((i[s] = i[s].replace(ct, "")),
                      "" !== i[s] && (t = t[i[s]]),
                      (a = []),
                      i.splice(0, s + 1),
                      (o = i.join(".")),
                      Array.isArray(t))
                    )
                      for (var u = 0, c = t.length; u < c; u++)
                        a.push(f(t[u], e, o));
                    var d = d[0].substring(1, d[0].length - 1);
                    t = "" === d ? a : a.join(d);
                    break;
                  }
                  if (r) (i[s] = i[s].replace(g, "")), (t = t[i[s]]());
                  else {
                    if (null === t || t[i[s]] === N) return N;
                    t = t[i[s]];
                  }
                }
              return t;
            }),
            function (t, e) {
              return f(t, e, a);
            });
      },
    });
  var a = function (t, e, n) {
    t[e] !== N && (t[n] = t[e]);
  };
  function Q(t) {
    a(t, "ordering", "bSort"),
      a(t, "orderMulti", "bSortMulti"),
      a(t, "orderClasses", "bSortClasses"),
      a(t, "orderCellsTop", "bSortCellsTop"),
      a(t, "order", "aaSorting"),
      a(t, "orderFixed", "aaSortingFixed"),
      a(t, "paging", "bPaginate"),
      a(t, "pagingType", "sPaginationType"),
      a(t, "pageLength", "iDisplayLength"),
      a(t, "searching", "bFilter"),
      "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""),
      "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : "");
    var e = t.aoSearchCols;
    if (e)
      for (var n = 0, r = e.length; n < r; n++)
        e[n] && C(w.models.oSearch, e[n]);
  }
  function K(t) {
    a(t, "orderable", "bSortable"),
      a(t, "orderData", "aDataSort"),
      a(t, "orderSequence", "asSorting"),
      a(t, "orderDataType", "sortDataType");
    var e = t.aDataSort;
    "number" != typeof e || Array.isArray(e) || (t.aDataSort = [e]);
  }
  function tt(t) {
    var e, n, r, a;
    w.__browser ||
      ((w.__browser = e = {}),
      (a = (r = (n = P("<div/>")
        .css({
          position: "fixed",
          top: 0,
          left: -1 * P(j).scrollLeft(),
          height: 1,
          width: 1,
          overflow: "hidden",
        })
        .append(
          P("<div/>")
            .css({
              position: "absolute",
              top: 1,
              left: 1,
              width: 100,
              overflow: "scroll",
            })
            .append(P("<div/>").css({ width: "100%", height: 10 }))
        )
        .appendTo("body")).children()).children()),
      (e.barWidth = r[0].offsetWidth - r[0].clientWidth),
      (e.bScrollOversize =
        100 === a[0].offsetWidth && 100 !== r[0].clientWidth),
      (e.bScrollbarLeft = 1 !== Math.round(a.offset().left)),
      (e.bBounding = !!n[0].getBoundingClientRect().width),
      n.remove()),
      P.extend(t.oBrowser, w.__browser),
      (t.oScroll.iBarWidth = w.__browser.barWidth);
  }
  function et(t, e, n, r, a, o) {
    var i,
      s = r,
      l = !1;
    for (n !== N && ((i = n), (l = !0)); s !== a; )
      t.hasOwnProperty(s) &&
        ((i = l ? e(i, t[s], s, t) : t[s]), (l = !0), (s += o));
    return i;
  }
  function nt(t, e) {
    var n = w.defaults.column,
      r = t.aoColumns.length,
      n = P.extend({}, w.models.oColumn, n, {
        nTh: e || S.createElement("th"),
        sTitle: n.sTitle || (e ? e.innerHTML : ""),
        aDataSort: n.aDataSort || [r],
        mData: n.mData || r,
        idx: r,
      }),
      n = (t.aoColumns.push(n), t.aoPreSearchCols);
    (n[r] = P.extend({}, w.models.oSearch, n[r])), rt(t, r, P(e).data());
  }
  function rt(t, e, n) {
    function r(t) {
      return "string" == typeof t && -1 !== t.indexOf("@");
    }
    var e = t.aoColumns[e],
      a = t.oClasses,
      o = P(e.nTh),
      i =
        (e.sWidthOrig ||
          ((e.sWidthOrig = o.attr("width") || null),
          (u = (o.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/)) &&
            (e.sWidthOrig = u[1])),
        n !== N &&
          null !== n &&
          (K(n),
          C(w.defaults.column, n, !0),
          n.mDataProp === N || n.mData || (n.mData = n.mDataProp),
          n.sType && (e._sManualType = n.sType),
          n.className && !n.sClass && (n.sClass = n.className),
          n.sClass && o.addClass(n.sClass),
          P.extend(e, n),
          F(e, n, "sWidth", "sWidthOrig"),
          n.iDataSort !== N && (e.aDataSort = [n.iDataSort]),
          F(e, n, "aDataSort")),
        e.mData),
      s = A(i),
      l = e.mRender ? A(e.mRender) : null,
      u =
        ((e._bAttrSrc =
          P.isPlainObject(i) && (r(i.sort) || r(i.type) || r(i.filter))),
        (e._setter = null),
        (e.fnGetData = function (t, e, n) {
          var r = s(t, e, N, n);
          return l && e ? l(r, e, t, n) : r;
        }),
        (e.fnSetData = function (t, e, n) {
          return b(i)(t, e, n);
        }),
        "number" != typeof i && (t._rowReadObject = !0),
        t.oFeatures.bSort || ((e.bSortable = !1), o.addClass(a.sSortableNone)),
        -1 !== P.inArray("asc", e.asSorting)),
      n = -1 !== P.inArray("desc", e.asSorting);
    e.bSortable && (u || n)
      ? u && !n
        ? ((e.sSortingClass = a.sSortableAsc),
          (e.sSortingClassJUI = a.sSortJUIAscAllowed))
        : !u && n
        ? ((e.sSortingClass = a.sSortableDesc),
          (e.sSortingClassJUI = a.sSortJUIDescAllowed))
        : ((e.sSortingClass = a.sSortable), (e.sSortingClassJUI = a.sSortJUI))
      : ((e.sSortingClass = a.sSortableNone), (e.sSortingClassJUI = ""));
  }
  function H(t) {
    if (!1 !== t.oFeatures.bAutoWidth) {
      var e = t.aoColumns;
      te(t);
      for (var n = 0, r = e.length; n < r; n++)
        e[n].nTh.style.width = e[n].sWidth;
    }
    var a = t.oScroll;
    ("" === a.sY && "" === a.sX) || Qt(t), R(t, null, "column-sizing", [t]);
  }
  function O(t, e) {
    t = ot(t, "bVisible");
    return "number" == typeof t[e] ? t[e] : null;
  }
  function at(t, e) {
    (t = ot(t, "bVisible")), (e = P.inArray(e, t));
    return -1 !== e ? e : null;
  }
  function T(t) {
    var n = 0;
    return (
      P.each(t.aoColumns, function (t, e) {
        e.bVisible && "none" !== P(e.nTh).css("display") && n++;
      }),
      n
    );
  }
  function ot(t, n) {
    var r = [];
    return (
      P.map(t.aoColumns, function (t, e) {
        t[n] && r.push(e);
      }),
      r
    );
  }
  function it(t) {
    for (
      var e,
        n,
        r,
        a,
        o,
        i,
        s,
        l = t.aoColumns,
        u = t.aoData,
        c = w.ext.type.detect,
        d = 0,
        f = l.length;
      d < f;
      d++
    )
      if (((s = []), !(o = l[d]).sType && o._sManualType))
        o.sType = o._sManualType;
      else if (!o.sType) {
        for (e = 0, n = c.length; e < n; e++) {
          for (
            r = 0, a = u.length;
            r < a &&
            (s[r] === N && (s[r] = v(t, r, d, "type")),
            (i = c[e](s[r], t)) || e === c.length - 1) &&
            ("html" !== i || h(s[r]));
            r++
          );
          if (i) {
            o.sType = i;
            break;
          }
        }
        o.sType || (o.sType = "string");
      }
  }
  function st(t, e, n, r) {
    var a,
      o,
      i,
      s,
      l = t.aoColumns;
    if (e)
      for (a = e.length - 1; 0 <= a; a--)
        for (
          var u,
            c = (u = e[a]).targets !== N ? u.targets : u.aTargets,
            d = 0,
            f = (c = Array.isArray(c) ? c : [c]).length;
          d < f;
          d++
        )
          if ("number" == typeof c[d] && 0 <= c[d]) {
            for (; l.length <= c[d]; ) nt(t);
            r(c[d], u);
          } else if ("number" == typeof c[d] && c[d] < 0) r(l.length + c[d], u);
          else if ("string" == typeof c[d])
            for (i = 0, s = l.length; i < s; i++)
              ("_all" != c[d] && !P(l[i].nTh).hasClass(c[d])) || r(i, u);
    if (n) for (a = 0, o = n.length; a < o; a++) r(a, n[a]);
  }
  function x(t, e, n, r) {
    for (
      var a = t.aoData.length,
        o = P.extend(!0, {}, w.models.oRow, {
          src: n ? "dom" : "data",
          idx: a,
        }),
        i = ((o._aData = e), t.aoData.push(o), t.aoColumns),
        s = 0,
        l = i.length;
      s < l;
      s++
    )
      i[s].sType = null;
    t.aiDisplayMaster.push(a);
    e = t.rowIdFn(e);
    return (
      e !== N && (t.aIds[e] = o),
      (!n && t.oFeatures.bDeferRender) || mt(t, a, n, r),
      a
    );
  }
  function lt(n, t) {
    var r;
    return (t = t instanceof P ? t : P(t)).map(function (t, e) {
      return (r = bt(n, e)), x(n, r.data, e, r.cells);
    });
  }
  function v(t, e, n, r) {
    "search" === r ? (r = "filter") : "order" === r && (r = "sort");
    var a = t.iDraw,
      o = t.aoColumns[n],
      i = t.aoData[e]._aData,
      s = o.sDefaultContent,
      l = o.fnGetData(i, r, { settings: t, row: e, col: n });
    if (l === N)
      return (
        t.iDrawError != a &&
          null === s &&
          (E(
            t,
            0,
            "Requested unknown parameter " +
              ("function" == typeof o.mData
                ? "{function}"
                : "'" + o.mData + "'") +
              " for row " +
              e +
              ", column " +
              n,
            4
          ),
          (t.iDrawError = a)),
        s
      );
    if ((l !== i && null !== l) || null === s || r === N) {
      if ("function" == typeof l) return l.call(i);
    } else l = s;
    return null === l && "display" === r
      ? ""
      : "filter" === r && (e = w.ext.type.search)[o.sType]
      ? e[o.sType](l)
      : l;
  }
  function ut(t, e, n, r) {
    var a = t.aoColumns[n],
      o = t.aoData[e]._aData;
    a.fnSetData(o, r, { settings: t, row: e, col: n });
  }
  var ct = /\[.*?\]$/,
    g = /\(\)$/;
  function dt(t) {
    return P.map(t.match(/(\\.|[^\.])+/g) || [""], function (t) {
      return t.replace(/\\\./g, ".");
    });
  }
  var A = w.util.get,
    b = w.util.set;
  function ft(t) {
    return k(t.aoData, "_aData");
  }
  function ht(t) {
    (t.aoData.length = 0),
      (t.aiDisplayMaster.length = 0),
      (t.aiDisplay.length = 0),
      (t.aIds = {});
  }
  function pt(t, e, n) {
    for (var r = -1, a = 0, o = t.length; a < o; a++)
      t[a] == e ? (r = a) : t[a] > e && t[a]--;
    -1 != r && n === N && t.splice(r, 1);
  }
  function gt(n, r, t, e) {
    function a(t, e) {
      for (; t.childNodes.length; ) t.removeChild(t.firstChild);
      t.innerHTML = v(n, r, e, "display");
    }
    var o,
      i,
      s = n.aoData[r];
    if ("dom" !== t && ((t && "auto" !== t) || "dom" !== s.src)) {
      var l = s.anCells;
      if (l)
        if (e !== N) a(l[e], e);
        else for (o = 0, i = l.length; o < i; o++) a(l[o], o);
    } else s._aData = bt(n, s, e, e === N ? N : s._aData).data;
    (s._aSortData = null), (s._aFilterData = null);
    var u = n.aoColumns;
    if (e !== N) u[e].sType = null;
    else {
      for (o = 0, i = u.length; o < i; o++) u[o].sType = null;
      vt(n, s);
    }
  }
  function bt(t, e, n, r) {
    function a(t, e) {
      var n;
      "string" == typeof t &&
        -1 !== (n = t.indexOf("@")) &&
        ((n = t.substring(n + 1)), b(t)(r, e.getAttribute(n)));
    }
    function o(t) {
      (n !== N && n !== d) ||
        ((s = f[d]),
        (l = t.innerHTML.trim()),
        s && s._bAttrSrc
          ? (b(s.mData._)(r, l),
            a(s.mData.sort, t),
            a(s.mData.type, t),
            a(s.mData.filter, t))
          : h
          ? (s._setter || (s._setter = b(s.mData)), s._setter(r, l))
          : (r[d] = l)),
        d++;
    }
    var i,
      s,
      l,
      u = [],
      c = e.firstChild,
      d = 0,
      f = t.aoColumns,
      h = t._rowReadObject;
    r = r !== N ? r : h ? {} : [];
    if (c)
      for (; c; )
        ("TD" != (i = c.nodeName.toUpperCase()) && "TH" != i) ||
          (o(c), u.push(c)),
          (c = c.nextSibling);
    else for (var p = 0, g = (u = e.anCells).length; p < g; p++) o(u[p]);
    var e = e.firstChild ? e : e.nTr;
    return (
      e && (e = e.getAttribute("id")) && b(t.rowId)(r, e), { data: r, cells: u }
    );
  }
  function mt(t, e, n, r) {
    var a,
      o,
      i,
      s,
      l,
      u,
      c = t.aoData[e],
      d = c._aData,
      f = [];
    if (null === c.nTr) {
      for (
        a = n || S.createElement("tr"),
          c.nTr = a,
          c.anCells = f,
          a._DT_RowIndex = e,
          vt(t, c),
          s = 0,
          l = t.aoColumns.length;
        s < l;
        s++
      )
        (i = t.aoColumns[s]),
          ((o = (u = !n) ? S.createElement(i.sCellType) : r[s])._DT_CellIndex =
            { row: e, column: s }),
          f.push(o),
          (!u &&
            ((!i.mRender && i.mData === s) ||
              (P.isPlainObject(i.mData) && i.mData._ === s + ".display"))) ||
            (o.innerHTML = v(t, e, s, "display")),
          i.sClass && (o.className += " " + i.sClass),
          i.bVisible && !n
            ? a.appendChild(o)
            : !i.bVisible && n && o.parentNode.removeChild(o),
          i.fnCreatedCell &&
            i.fnCreatedCell.call(t.oInstance, o, v(t, e, s), d, e, s);
      R(t, "aoRowCreatedCallback", null, [a, d, e, f]);
    }
  }
  function vt(t, e) {
    var n = e.nTr,
      r = e._aData;
    n &&
      ((t = t.rowIdFn(r)) && (n.id = t),
      r.DT_RowClass &&
        ((t = r.DT_RowClass.split(" ")),
        (e.__rowc = e.__rowc ? G(e.__rowc.concat(t)) : t),
        P(n).removeClass(e.__rowc.join(" ")).addClass(r.DT_RowClass)),
      r.DT_RowAttr && P(n).attr(r.DT_RowAttr),
      r.DT_RowData && P(n).data(r.DT_RowData));
  }
  function yt(t) {
    var e,
      n,
      r,
      a = t.nTHead,
      o = t.nTFoot,
      i = 0 === P("th, td", a).length,
      s = t.oClasses,
      l = t.aoColumns;
    for (i && (n = P("<tr/>").appendTo(a)), c = 0, d = l.length; c < d; c++)
      (r = l[c]),
        (e = P(r.nTh).addClass(r.sClass)),
        i && e.appendTo(n),
        t.oFeatures.bSort &&
          (e.addClass(r.sSortingClass),
          !1 !== r.bSortable &&
            (e.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId),
            le(t, r.nTh, c))),
        r.sTitle != e[0].innerHTML && e.html(r.sTitle),
        ve(t, "header")(t, e, r, s);
    if (
      (i && _t(t.aoHeader, a),
      P(a).children("tr").children("th, td").addClass(s.sHeaderTH),
      P(o).children("tr").children("th, td").addClass(s.sFooterTH),
      null !== o)
    )
      for (var u = t.aoFooter[0], c = 0, d = u.length; c < d; c++)
        ((r = l[c]).nTf = u[c].cell), r.sClass && P(r.nTf).addClass(r.sClass);
  }
  function St(t, e, n) {
    var r,
      a,
      o,
      i,
      s,
      l,
      u,
      c,
      d,
      f = [],
      h = [],
      p = t.aoColumns.length;
    if (e) {
      for (n === N && (n = !1), r = 0, a = e.length; r < a; r++) {
        for (f[r] = e[r].slice(), f[r].nTr = e[r].nTr, o = p - 1; 0 <= o; o--)
          t.aoColumns[o].bVisible || n || f[r].splice(o, 1);
        h.push([]);
      }
      for (r = 0, a = f.length; r < a; r++) {
        if ((u = f[r].nTr)) for (; (l = u.firstChild); ) u.removeChild(l);
        for (o = 0, i = f[r].length; o < i; o++)
          if (((d = c = 1), h[r][o] === N)) {
            for (
              u.appendChild(f[r][o].cell), h[r][o] = 1;
              f[r + c] !== N && f[r][o].cell == f[r + c][o].cell;

            )
              (h[r + c][o] = 1), c++;
            for (; f[r][o + d] !== N && f[r][o].cell == f[r][o + d].cell; ) {
              for (s = 0; s < c; s++) h[r + s][o + d] = 1;
              d++;
            }
            P(f[r][o].cell).attr("rowspan", c).attr("colspan", d);
          }
      }
    }
  }
  function y(t, e) {
    (n = "ssp" == B((l = t))),
      (s = l.iInitDisplayStart) !== N &&
        -1 !== s &&
        ((l._iDisplayStart = !n && s >= l.fnRecordsDisplay() ? 0 : s),
        (l.iInitDisplayStart = -1));
    var n = R(t, "aoPreDrawCallback", "preDraw", [t]);
    if (-1 !== P.inArray(!1, n)) D(t, !1);
    else {
      var r = [],
        a = 0,
        o = t.asStripeClasses,
        i = o.length,
        s = t.oLanguage,
        l = "ssp" == B(t),
        u = t.aiDisplay,
        n = t._iDisplayStart,
        c = t.fnDisplayEnd();
      if (((t.bDrawing = !0), t.bDeferLoading))
        (t.bDeferLoading = !1), t.iDraw++, D(t, !1);
      else if (l) {
        if (!t.bDestroying && !e) return void Tt(t);
      } else t.iDraw++;
      if (0 !== u.length)
        for (var d = l ? t.aoData.length : c, f = l ? 0 : n; f < d; f++) {
          var h,
            p = u[f],
            g = t.aoData[p],
            b = (null === g.nTr && mt(t, p), g.nTr);
          0 !== i &&
            ((h = o[a % i]),
            g._sRowStripe != h &&
              (P(b).removeClass(g._sRowStripe).addClass(h),
              (g._sRowStripe = h))),
            R(t, "aoRowCallback", null, [b, g._aData, a, f, p]),
            r.push(b),
            a++;
        }
      else {
        e = s.sZeroRecords;
        1 == t.iDraw && "ajax" == B(t)
          ? (e = s.sLoadingRecords)
          : s.sEmptyTable && 0 === t.fnRecordsTotal() && (e = s.sEmptyTable),
          (r[0] = P("<tr/>", { class: i ? o[0] : "" }).append(
            P("<td />", {
              valign: "top",
              colSpan: T(t),
              class: t.oClasses.sRowEmpty,
            }).html(e)
          )[0]);
      }
      R(t, "aoHeaderCallback", "header", [
        P(t.nTHead).children("tr")[0],
        ft(t),
        n,
        c,
        u,
      ]),
        R(t, "aoFooterCallback", "footer", [
          P(t.nTFoot).children("tr")[0],
          ft(t),
          n,
          c,
          u,
        ]);
      l = P(t.nTBody);
      l.children().detach(),
        l.append(P(r)),
        R(t, "aoDrawCallback", "draw", [t]),
        (t.bSorted = !1),
        (t.bFiltered = !1),
        (t.bDrawing = !1);
    }
  }
  function u(t, e) {
    var n = t.oFeatures,
      r = n.bSort,
      n = n.bFilter;
    r && oe(t),
      n ? Lt(t, t.oPreviousSearch) : (t.aiDisplay = t.aiDisplayMaster.slice()),
      !0 !== e && (t._iDisplayStart = 0),
      (t._drawHold = e),
      y(t),
      (t._drawHold = !1);
  }
  function Dt(t) {
    for (
      var e,
        n,
        r,
        a,
        o,
        i,
        s,
        l = t.oClasses,
        u = P(t.nTable),
        u = P("<div/>").insertBefore(u),
        c = t.oFeatures,
        d = P("<div/>", {
          id: t.sTableId + "_wrapper",
          class: l.sWrapper + (t.nTFoot ? "" : " " + l.sNoFooter),
        }),
        f =
          ((t.nHolding = u[0]),
          (t.nTableWrapper = d[0]),
          (t.nTableReinsertBefore = t.nTable.nextSibling),
          t.sDom.split("")),
        h = 0;
      h < f.length;
      h++
    ) {
      if (((e = null), "<" == (n = f[h]))) {
        if (((r = P("<div/>")[0]), "'" == (a = f[h + 1]) || '"' == a)) {
          for (o = "", i = 2; f[h + i] != a; ) (o += f[h + i]), i++;
          "H" == o ? (o = l.sJUIHeader) : "F" == o && (o = l.sJUIFooter),
            -1 != o.indexOf(".")
              ? ((s = o.split(".")),
                (r.id = s[0].substr(1, s[0].length - 1)),
                (r.className = s[1]))
              : "#" == o.charAt(0)
              ? (r.id = o.substr(1, o.length - 1))
              : (r.className = o),
            (h += i);
        }
        d.append(r), (d = P(r));
      } else if (">" == n) d = d.parent();
      else if ("l" == n && c.bPaginate && c.bLengthChange) e = Jt(t);
      else if ("f" == n && c.bFilter) e = Ft(t);
      else if ("r" == n && c.bProcessing) e = Yt(t);
      else if ("t" == n) e = Zt(t);
      else if ("i" == n && c.bInfo) e = Bt(t);
      else if ("p" == n && c.bPaginate) e = $t(t);
      else if (0 !== w.ext.feature.length)
        for (var p = w.ext.feature, g = 0, b = p.length; g < b; g++)
          if (n == p[g].cFeature) {
            e = p[g].fnInit(t);
            break;
          }
      e && ((s = t.aanFeatures)[n] || (s[n] = []), s[n].push(e), d.append(e));
    }
    u.replaceWith(d), (t.nHolding = null);
  }
  function _t(t, e) {
    var n,
      r,
      a,
      o,
      i,
      s,
      l,
      u,
      c,
      d,
      f = P(e).children("tr");
    for (t.splice(0, t.length), a = 0, s = f.length; a < s; a++) t.push([]);
    for (a = 0, s = f.length; a < s; a++)
      for (r = (n = f[a]).firstChild; r; ) {
        if (
          "TD" == r.nodeName.toUpperCase() ||
          "TH" == r.nodeName.toUpperCase()
        )
          for (
            u = (u = +r.getAttribute("colspan")) && 0 !== u && 1 !== u ? u : 1,
              c =
                (c = +r.getAttribute("rowspan")) && 0 !== c && 1 !== c ? c : 1,
              l = (function (t, e, n) {
                for (var r = t[e]; r[n]; ) n++;
                return n;
              })(t, a, 0),
              d = 1 === u,
              i = 0;
            i < u;
            i++
          )
            for (o = 0; o < c; o++)
              (t[a + o][l + i] = { cell: r, unique: d }), (t[a + o].nTr = n);
        r = r.nextSibling;
      }
  }
  function wt(t, e, n) {
    var r = [];
    n || ((n = t.aoHeader), e && _t((n = []), e));
    for (var a = 0, o = n.length; a < o; a++)
      for (var i = 0, s = n[a].length; i < s; i++)
        !n[a][i].unique || (r[i] && t.bSortCellsTop) || (r[i] = n[a][i].cell);
    return r;
  }
  function Ct(a, t, n) {
    function e(t) {
      var e = a.jqXHR ? a.jqXHR.status : null;
      (null === t || ("number" == typeof e && 204 == e)) && It(a, (t = {}), []),
        (e = t.error || t.sError) && E(a, 0, e),
        (a.json = t),
        R(a, null, "xhr", [a, t, a.jqXHR]),
        n(t);
    }
    R(a, "aoServerParams", "serverParams", [t]),
      t &&
        Array.isArray(t) &&
        ((r = {}),
        (o = /(.*?)\[\]$/),
        P.each(t, function (t, e) {
          var n = e.name.match(o);
          n
            ? ((n = n[0]), r[n] || (r[n] = []), r[n].push(e.value))
            : (r[e.name] = e.value);
        }),
        (t = r));
    var r,
      o,
      i,
      s = a.ajax,
      l = a.oInstance,
      u =
        (P.isPlainObject(s) &&
          s.data &&
          ((u = "function" == typeof (i = s.data) ? i(t, a) : i),
          (t = "function" == typeof i && u ? u : P.extend(!0, t, u)),
          delete s.data),
        {
          data: t,
          success: e,
          dataType: "json",
          cache: !1,
          type: a.sServerMethod,
          error: function (t, e, n) {
            var r = R(a, null, "xhr", [a, null, a.jqXHR]);
            -1 === P.inArray(!0, r) &&
              ("parsererror" == e
                ? E(a, 0, "Invalid JSON response", 1)
                : 4 === t.readyState && E(a, 0, "Ajax error", 7)),
              D(a, !1);
          },
        });
    (a.oAjaxData = t),
      R(a, null, "preXhr", [a, t]),
      a.fnServerData
        ? a.fnServerData.call(
            l,
            a.sAjaxSource,
            P.map(t, function (t, e) {
              return { name: e, value: t };
            }),
            e,
            a
          )
        : a.sAjaxSource || "string" == typeof s
        ? (a.jqXHR = P.ajax(P.extend(u, { url: s || a.sAjaxSource })))
        : "function" == typeof s
        ? (a.jqXHR = s.call(l, t, e, a))
        : ((a.jqXHR = P.ajax(P.extend(u, s))), (s.data = i));
  }
  function Tt(e) {
    e.iDraw++,
      D(e, !0),
      Ct(e, xt(e), function (t) {
        At(e, t);
      });
  }
  function xt(t) {
    for (
      var e,
        n,
        r,
        a = t.aoColumns,
        o = a.length,
        i = t.oFeatures,
        s = t.oPreviousSearch,
        l = t.aoPreSearchCols,
        u = [],
        c = I(t),
        d = t._iDisplayStart,
        f = !1 !== i.bPaginate ? t._iDisplayLength : -1,
        h = function (t, e) {
          u.push({ name: t, value: e });
        },
        p =
          (h("sEcho", t.iDraw),
          h("iColumns", o),
          h("sColumns", k(a, "sName").join(",")),
          h("iDisplayStart", d),
          h("iDisplayLength", f),
          {
            draw: t.iDraw,
            columns: [],
            order: [],
            start: d,
            length: f,
            search: { value: s.sSearch, regex: s.bRegex },
          }),
        g = 0;
      g < o;
      g++
    )
      (n = a[g]),
        (r = l[g]),
        (e = "function" == typeof n.mData ? "function" : n.mData),
        p.columns.push({
          data: e,
          name: n.sName,
          searchable: n.bSearchable,
          orderable: n.bSortable,
          search: { value: r.sSearch, regex: r.bRegex },
        }),
        h("mDataProp_" + g, e),
        i.bFilter &&
          (h("sSearch_" + g, r.sSearch),
          h("bRegex_" + g, r.bRegex),
          h("bSearchable_" + g, n.bSearchable)),
        i.bSort && h("bSortable_" + g, n.bSortable);
    i.bFilter && (h("sSearch", s.sSearch), h("bRegex", s.bRegex)),
      i.bSort &&
        (P.each(c, function (t, e) {
          p.order.push({ column: e.col, dir: e.dir }),
            h("iSortCol_" + t, e.col),
            h("sSortDir_" + t, e.dir);
        }),
        h("iSortingCols", c.length));
    d = w.ext.legacy.ajax;
    return null === d ? (t.sAjaxSource ? u : p) : d ? u : p;
  }
  function At(t, n) {
    function e(t, e) {
      return n[t] !== N ? n[t] : n[e];
    }
    var r = It(t, n),
      a = e("sEcho", "draw"),
      o = e("iTotalRecords", "recordsTotal"),
      i = e("iTotalDisplayRecords", "recordsFiltered");
    if (a !== N) {
      if (+a < t.iDraw) return;
      t.iDraw = +a;
    }
    (r = r || []),
      ht(t),
      (t._iRecordsTotal = parseInt(o, 10)),
      (t._iRecordsDisplay = parseInt(i, 10));
    for (var s = 0, l = r.length; s < l; s++) x(t, r[s]);
    (t.aiDisplay = t.aiDisplayMaster.slice()),
      y(t, !0),
      t._bInitComplete || Xt(t, n),
      D(t, !1);
  }
  function It(t, e, n) {
    t =
      P.isPlainObject(t.ajax) && t.ajax.dataSrc !== N
        ? t.ajax.dataSrc
        : t.sAjaxDataProp;
    if (!n) return "data" === t ? e.aaData || e[t] : "" !== t ? A(t)(e) : e;
    b(t)(e, n);
  }
  function Ft(n) {
    function e(t) {
      i.f;
      var e = this.value || "";
      (o.return && "Enter" !== t.key) ||
        (e != o.sSearch &&
          (Lt(n, {
            sSearch: e,
            bRegex: o.bRegex,
            bSmart: o.bSmart,
            bCaseInsensitive: o.bCaseInsensitive,
            return: o.return,
          }),
          (n._iDisplayStart = 0),
          y(n)));
    }
    var t = n.oClasses,
      r = n.sTableId,
      a = n.oLanguage,
      o = n.oPreviousSearch,
      i = n.aanFeatures,
      s = '<input type="search" class="' + t.sFilterInput + '"/>',
      l = (l = a.sSearch).match(/_INPUT_/) ? l.replace("_INPUT_", s) : l + s,
      s = P("<div/>", {
        id: i.f ? null : r + "_filter",
        class: t.sFilter,
      }).append(P("<label/>").append(l)),
      t = null !== n.searchDelay ? n.searchDelay : "ssp" === B(n) ? 400 : 0,
      u = P("input", s)
        .val(o.sSearch)
        .attr("placeholder", a.sSearchPlaceholder)
        .on("keyup.DT search.DT input.DT paste.DT cut.DT", t ? ee(e, t) : e)
        .on("mouseup", function (t) {
          setTimeout(function () {
            e.call(u[0], t);
          }, 10);
        })
        .on("keypress.DT", function (t) {
          if (13 == t.keyCode) return !1;
        })
        .attr("aria-controls", r);
    return (
      P(n.nTable).on("search.dt.DT", function (t, e) {
        if (n === e)
          try {
            u[0] !== S.activeElement && u.val(o.sSearch);
          } catch (t) {}
      }),
      s[0]
    );
  }
  function Lt(t, e, n) {
    function r(t) {
      (o.sSearch = t.sSearch),
        (o.bRegex = t.bRegex),
        (o.bSmart = t.bSmart),
        (o.bCaseInsensitive = t.bCaseInsensitive),
        (o.return = t.return);
    }
    function a(t) {
      return t.bEscapeRegex !== N ? !t.bEscapeRegex : t.bRegex;
    }
    var o = t.oPreviousSearch,
      i = t.aoPreSearchCols;
    if ((it(t), "ssp" != B(t))) {
      jt(t, e.sSearch, n, a(e), e.bSmart, e.bCaseInsensitive, e.return), r(e);
      for (var s = 0; s < i.length; s++)
        Pt(t, i[s].sSearch, s, a(i[s]), i[s].bSmart, i[s].bCaseInsensitive);
      Rt(t);
    } else r(e);
    (t.bFiltered = !0), R(t, null, "search", [t]);
  }
  function Rt(t) {
    for (
      var e, n, r = w.ext.search, a = t.aiDisplay, o = 0, i = r.length;
      o < i;
      o++
    ) {
      for (var s = [], l = 0, u = a.length; l < u; l++)
        (n = a[l]),
          (e = t.aoData[n]),
          r[o](t, e._aFilterData, n, e._aData, l) && s.push(n);
      (a.length = 0), P.merge(a, s);
    }
  }
  function Pt(t, e, n, r, a, o) {
    if ("" !== e) {
      for (
        var i, s = [], l = t.aiDisplay, u = Nt(e, r, a, o), c = 0;
        c < l.length;
        c++
      )
        (i = t.aoData[l[c]]._aFilterData[n]), u.test(i) && s.push(l[c]);
      t.aiDisplay = s;
    }
  }
  function jt(t, e, n, r, a, o) {
    var i,
      s,
      l,
      u = Nt(e, r, a, o),
      a = t.oPreviousSearch.sSearch,
      o = t.aiDisplayMaster,
      c = [];
    if ((0 !== w.ext.search.length && (n = !0), (s = Wt(t)), e.length <= 0))
      t.aiDisplay = o.slice();
    else {
      for (
        (s ||
          n ||
          r ||
          a.length > e.length ||
          0 !== e.indexOf(a) ||
          t.bSorted) &&
          (t.aiDisplay = o.slice()),
          i = t.aiDisplay,
          l = 0;
        l < i.length;
        l++
      )
        u.test(t.aoData[i[l]]._sFilterRow) && c.push(i[l]);
      t.aiDisplay = c;
    }
  }
  function Nt(t, e, n, r) {
    return (
      (t = e ? t : kt(t)),
      n &&
        (t =
          "^(?=.*?" +
          P.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
            var e;
            return (t =
              '"' === t.charAt(0)
                ? (e = t.match(/^"(.*)"$/))
                  ? e[1]
                  : t
                : t).replace('"', "");
          }).join(")(?=.*?") +
          ").*$"),
      new RegExp(t, r ? "i" : "")
    );
  }
  var kt = w.util.escapeRegex,
    Ht = P("<div>")[0],
    Ot = Ht.textContent !== N;
  function Wt(t) {
    for (
      var e, n, r, a, o, i = t.aoColumns, s = !1, l = 0, u = t.aoData.length;
      l < u;
      l++
    )
      if (!(o = t.aoData[l])._aFilterData) {
        for (r = [], e = 0, n = i.length; e < n; e++)
          i[e].bSearchable
            ? "string" !=
                typeof (a = null === (a = v(t, l, e, "filter")) ? "" : a) &&
              a.toString &&
              (a = a.toString())
            : (a = ""),
            a.indexOf &&
              -1 !== a.indexOf("&") &&
              ((Ht.innerHTML = a), (a = Ot ? Ht.textContent : Ht.innerText)),
            a.replace && (a = a.replace(/[\r\n\u2028]/g, "")),
            r.push(a);
        (o._aFilterData = r), (o._sFilterRow = r.join("  ")), (s = !0);
      }
    return s;
  }
  function Mt(t) {
    return {
      search: t.sSearch,
      smart: t.bSmart,
      regex: t.bRegex,
      caseInsensitive: t.bCaseInsensitive,
    };
  }
  function Et(t) {
    return {
      sSearch: t.search,
      bSmart: t.smart,
      bRegex: t.regex,
      bCaseInsensitive: t.caseInsensitive,
    };
  }
  function Bt(t) {
    var e = t.sTableId,
      n = t.aanFeatures.i,
      r = P("<div/>", { class: t.oClasses.sInfo, id: n ? null : e + "_info" });
    return (
      n ||
        (t.aoDrawCallback.push({ fn: Ut, sName: "information" }),
        r.attr("role", "status").attr("aria-live", "polite"),
        P(t.nTable).attr("aria-describedby", e + "_info")),
      r[0]
    );
  }
  function Ut(t) {
    var e,
      n,
      r,
      a,
      o,
      i,
      s = t.aanFeatures.i;
    0 !== s.length &&
      ((i = t.oLanguage),
      (e = t._iDisplayStart + 1),
      (n = t.fnDisplayEnd()),
      (r = t.fnRecordsTotal()),
      (o = (a = t.fnRecordsDisplay()) ? i.sInfo : i.sInfoEmpty),
      a !== r && (o += " " + i.sInfoFiltered),
      (o = Vt(t, (o += i.sInfoPostFix))),
      null !== (i = i.fnInfoCallback) &&
        (o = i.call(t.oInstance, t, e, n, r, a, o)),
      P(s).html(o));
  }
  function Vt(t, e) {
    var n = t.fnFormatNumber,
      r = t._iDisplayStart + 1,
      a = t._iDisplayLength,
      o = t.fnRecordsDisplay(),
      i = -1 === a;
    return e
      .replace(/_START_/g, n.call(t, r))
      .replace(/_END_/g, n.call(t, t.fnDisplayEnd()))
      .replace(/_MAX_/g, n.call(t, t.fnRecordsTotal()))
      .replace(/_TOTAL_/g, n.call(t, o))
      .replace(/_PAGE_/g, n.call(t, i ? 1 : Math.ceil(r / a)))
      .replace(/_PAGES_/g, n.call(t, i ? 1 : Math.ceil(o / a)));
  }
  function qt(n) {
    var r,
      t,
      e,
      a = n.iInitDisplayStart,
      o = n.aoColumns,
      i = n.oFeatures,
      s = n.bDeferLoading;
    if (n.bInitialised) {
      for (
        Dt(n),
          yt(n),
          St(n, n.aoHeader),
          St(n, n.aoFooter),
          D(n, !0),
          i.bAutoWidth && te(n),
          r = 0,
          t = o.length;
        r < t;
        r++
      )
        (e = o[r]).sWidth && (e.nTh.style.width = M(e.sWidth));
      R(n, null, "preInit", [n]), u(n);
      i = B(n);
      ("ssp" == i && !s) ||
        ("ajax" == i
          ? Ct(n, [], function (t) {
              var e = It(n, t);
              for (r = 0; r < e.length; r++) x(n, e[r]);
              (n.iInitDisplayStart = a), u(n), D(n, !1), Xt(n, t);
            })
          : (D(n, !1), Xt(n)));
    } else
      setTimeout(function () {
        qt(n);
      }, 200);
  }
  function Xt(t, e) {
    (t._bInitComplete = !0),
      (e || t.oInit.aaData) && H(t),
      R(t, null, "plugin-init", [t, e]),
      R(t, "aoInitComplete", "init", [t, e]);
  }
  function zt(t, e) {
    e = parseInt(e, 10);
    (t._iDisplayLength = e), me(t), R(t, null, "length", [t, e]);
  }
  function Jt(r) {
    for (
      var t = r.oClasses,
        e = r.sTableId,
        n = r.aLengthMenu,
        a = Array.isArray(n[0]),
        o = a ? n[0] : n,
        i = a ? n[1] : n,
        s = P("<select/>", {
          name: e + "_length",
          "aria-controls": e,
          class: t.sLengthSelect,
        }),
        l = 0,
        u = o.length;
      l < u;
      l++
    )
      s[0][l] = new Option(
        "number" == typeof i[l] ? r.fnFormatNumber(i[l]) : i[l],
        o[l]
      );
    var c = P("<div><label/></div>").addClass(t.sLength);
    return (
      r.aanFeatures.l || (c[0].id = e + "_length"),
      c
        .children()
        .append(r.oLanguage.sLengthMenu.replace("_MENU_", s[0].outerHTML)),
      P("select", c)
        .val(r._iDisplayLength)
        .on("change.DT", function (t) {
          zt(r, P(this).val()), y(r);
        }),
      P(r.nTable).on("length.dt.DT", function (t, e, n) {
        r === e && P("select", c).val(n);
      }),
      c[0]
    );
  }
  function $t(t) {
    function c(t) {
      y(t);
    }
    var e = t.sPaginationType,
      d = w.ext.pager[e],
      f = "function" == typeof d,
      e = P("<div/>").addClass(t.oClasses.sPaging + e)[0],
      h = t.aanFeatures;
    return (
      f || d.fnInit(t, e, c),
      h.p ||
        ((e.id = t.sTableId + "_paginate"),
        t.aoDrawCallback.push({
          fn: function (t) {
            if (f)
              for (
                var e = t._iDisplayStart,
                  n = t._iDisplayLength,
                  r = t.fnRecordsDisplay(),
                  a = -1 === n,
                  o = a ? 0 : Math.ceil(e / n),
                  i = a ? 1 : Math.ceil(r / n),
                  s = d(o, i),
                  l = 0,
                  u = h.p.length;
                l < u;
                l++
              )
                ve(t, "pageButton")(t, h.p[l], l, s, o, i);
            else d.fnUpdate(t, c);
          },
          sName: "pagination",
        })),
      e
    );
  }
  function Gt(t, e, n) {
    var r = t._iDisplayStart,
      a = t._iDisplayLength,
      o = t.fnRecordsDisplay(),
      o =
        (0 === o || -1 === a
          ? (r = 0)
          : "number" == typeof e
          ? o < (r = e * a) && (r = 0)
          : "first" == e
          ? (r = 0)
          : "previous" == e
          ? (r = 0 <= a ? r - a : 0) < 0 && (r = 0)
          : "next" == e
          ? r + a < o && (r += a)
          : "last" == e
          ? (r = Math.floor((o - 1) / a) * a)
          : E(t, 0, "Unknown paging action: " + e, 5),
        t._iDisplayStart !== r);
    return (t._iDisplayStart = r), o && (R(t, null, "page", [t]), n && y(t)), o;
  }
  function Yt(t) {
    return P("<div/>", {
      id: t.aanFeatures.r ? null : t.sTableId + "_processing",
      class: t.oClasses.sProcessing,
    })
      .html(t.oLanguage.sProcessing)
      .insertBefore(t.nTable)[0];
  }
  function D(t, e) {
    t.oFeatures.bProcessing &&
      P(t.aanFeatures.r).css("display", e ? "block" : "none"),
      R(t, null, "processing", [t, e]);
  }
  function Zt(t) {
    var e = P(t.nTable),
      n = t.oScroll;
    if ("" === n.sX && "" === n.sY) return t.nTable;
    function r(t) {
      return t ? M(t) : null;
    }
    var a = n.sX,
      o = n.sY,
      i = t.oClasses,
      s = e.children("caption"),
      l = s.length ? s[0]._captionSide : null,
      u = P(e[0].cloneNode(!1)),
      c = P(e[0].cloneNode(!1)),
      d = e.children("tfoot"),
      f = "<div/>",
      u =
        (d.length || (d = null),
        P(f, { class: i.sScrollWrapper })
          .append(
            P(f, { class: i.sScrollHead })
              .css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: a ? r(a) : "100%",
              })
              .append(
                P(f, { class: i.sScrollHeadInner })
                  .css({
                    "box-sizing": "content-box",
                    width: n.sXInner || "100%",
                  })
                  .append(
                    u
                      .removeAttr("id")
                      .css("margin-left", 0)
                      .append("top" === l ? s : null)
                      .append(e.children("thead"))
                  )
              )
          )
          .append(
            P(f, { class: i.sScrollBody })
              .css({ position: "relative", overflow: "auto", width: r(a) })
              .append(e)
          )),
      f =
        (d &&
          u.append(
            P(f, { class: i.sScrollFoot })
              .css({ overflow: "hidden", border: 0, width: a ? r(a) : "100%" })
              .append(
                P(f, { class: i.sScrollFootInner }).append(
                  c
                    .removeAttr("id")
                    .css("margin-left", 0)
                    .append("bottom" === l ? s : null)
                    .append(e.children("tfoot"))
                )
              )
          ),
        u.children()),
      h = f[0],
      i = f[1],
      p = d ? f[2] : null;
    return (
      a &&
        P(i).on("scroll.DT", function (t) {
          var e = this.scrollLeft;
          (h.scrollLeft = e), d && (p.scrollLeft = e);
        }),
      P(i).css("max-height", o),
      n.bCollapse || P(i).css("height", o),
      (t.nScrollHead = h),
      (t.nScrollBody = i),
      (t.nScrollFoot = p),
      t.aoDrawCallback.push({ fn: Qt, sName: "scrolling" }),
      u[0]
    );
  }
  function Qt(n) {
    function t(t) {
      ((t = t.style).paddingTop = "0"),
        (t.paddingBottom = "0"),
        (t.borderTopWidth = "0"),
        (t.borderBottomWidth = "0"),
        (t.height = 0);
    }
    var e,
      r,
      a,
      o,
      i = n.oScroll,
      s = i.sX,
      l = i.sXInner,
      u = i.sY,
      i = i.iBarWidth,
      c = P(n.nScrollHead),
      d = c[0].style,
      f = c.children("div"),
      h = f[0].style,
      f = f.children("table"),
      p = n.nScrollBody,
      g = P(p),
      b = p.style,
      m = P(n.nScrollFoot).children("div"),
      v = m.children("table"),
      y = P(n.nTHead),
      S = P(n.nTable),
      D = S[0],
      _ = D.style,
      w = n.nTFoot ? P(n.nTFoot) : null,
      C = n.oBrowser,
      T = C.bScrollOversize,
      x = (k(n.aoColumns, "nTh"), []),
      A = [],
      I = [],
      F = [],
      L = p.scrollHeight > p.clientHeight;
    if (n.scrollBarVis !== L && n.scrollBarVis !== N)
      return (n.scrollBarVis = L), void H(n);
    (n.scrollBarVis = L),
      S.children("thead, tfoot").remove(),
      w &&
        ((L = w.clone().prependTo(S)), (R = w.find("tr")), (r = L.find("tr"))),
      (L = y.clone().prependTo(S)),
      (y = y.find("tr")),
      (e = L.find("tr")),
      L.find("th, td").removeAttr("tabindex"),
      s || ((b.width = "100%"), (c[0].style.width = "100%")),
      P.each(wt(n, L), function (t, e) {
        (a = O(n, t)), (e.style.width = n.aoColumns[a].sWidth);
      }),
      w &&
        W(function (t) {
          t.style.width = "";
        }, r),
      (c = S.outerWidth()),
      "" === s
        ? ((_.width = "100%"),
          T &&
            (S.find("tbody").height() > p.offsetHeight ||
              "scroll" == g.css("overflow-y")) &&
            (_.width = M(S.outerWidth() - i)),
          (c = S.outerWidth()))
        : "" !== l && ((_.width = M(l)), (c = S.outerWidth())),
      W(t, e),
      W(function (t) {
        var e = j.getComputedStyle
          ? j.getComputedStyle(t).width
          : M(P(t).width());
        I.push(t.innerHTML), x.push(e);
      }, e),
      W(function (t, e) {
        t.style.width = x[e];
      }, y),
      P(e).css("height", 0),
      w &&
        (W(t, r),
        W(function (t) {
          F.push(t.innerHTML), A.push(M(P(t).css("width")));
        }, r),
        W(function (t, e) {
          t.style.width = A[e];
        }, R),
        P(r).height(0)),
      W(function (t, e) {
        (t.innerHTML = '<div class="dataTables_sizing">' + I[e] + "</div>"),
          (t.childNodes[0].style.height = "0"),
          (t.childNodes[0].style.overflow = "hidden"),
          (t.style.width = x[e]);
      }, e),
      w &&
        W(function (t, e) {
          (t.innerHTML = '<div class="dataTables_sizing">' + F[e] + "</div>"),
            (t.childNodes[0].style.height = "0"),
            (t.childNodes[0].style.overflow = "hidden"),
            (t.style.width = A[e]);
        }, r),
      Math.round(S.outerWidth()) < Math.round(c)
        ? ((o =
            p.scrollHeight > p.offsetHeight || "scroll" == g.css("overflow-y")
              ? c + i
              : c),
          T &&
            (p.scrollHeight > p.offsetHeight ||
              "scroll" == g.css("overflow-y")) &&
            (_.width = M(o - i)),
          ("" !== s && "" === l) || E(n, 1, "Possible column misalignment", 6))
        : (o = "100%"),
      (b.width = M(o)),
      (d.width = M(o)),
      w && (n.nScrollFoot.style.width = M(o)),
      u || (T && (b.height = M(D.offsetHeight + i)));
    var L = S.outerWidth(),
      y =
        ((f[0].style.width = M(L)),
        (h.width = M(L)),
        S.height() > p.clientHeight || "scroll" == g.css("overflow-y")),
      R = "padding" + (C.bScrollbarLeft ? "Left" : "Right");
    (h[R] = y ? i + "px" : "0px"),
      w &&
        ((v[0].style.width = M(L)),
        (m[0].style.width = M(L)),
        (m[0].style[R] = y ? i + "px" : "0px")),
      S.children("colgroup").insertBefore(S.children("thead")),
      g.trigger("scroll"),
      (!n.bSorted && !n.bFiltered) || n._drawHold || (p.scrollTop = 0);
  }
  function W(t, e, n) {
    for (var r, a, o = 0, i = 0, s = e.length; i < s; ) {
      for (r = e[i].firstChild, a = n ? n[i].firstChild : null; r; )
        1 === r.nodeType && (n ? t(r, a, o) : t(r, o), o++),
          (r = r.nextSibling),
          (a = n ? a.nextSibling : null);
      i++;
    }
  }
  var Kt = /<.*?>/g;
  function te(t) {
    var e,
      n,
      r = t.nTable,
      a = t.aoColumns,
      o = t.oScroll,
      i = o.sY,
      s = o.sX,
      o = o.sXInner,
      l = a.length,
      u = ot(t, "bVisible"),
      c = P("th", t.nTHead),
      d = r.getAttribute("width"),
      f = r.parentNode,
      h = !1,
      p = t.oBrowser,
      g = p.bScrollOversize,
      b = r.style.width;
    for (b && -1 !== b.indexOf("%") && (d = b), D = 0; D < u.length; D++)
      null !== (e = a[u[D]]).sWidth &&
        ((e.sWidth = ne(e.sWidthOrig, f)), (h = !0));
    if (g || (!h && !s && !i && l == T(t) && l == c.length))
      for (D = 0; D < l; D++) {
        var m = O(t, D);
        null !== m && (a[m].sWidth = M(c.eq(D).width()));
      }
    else {
      var b = P(r).clone().css("visibility", "hidden").removeAttr("id"),
        v = (b.find("tbody tr").remove(), P("<tr/>").appendTo(b.find("tbody")));
      for (
        b.find("thead, tfoot").remove(),
          b.append(P(t.nTHead).clone()).append(P(t.nTFoot).clone()),
          b.find("tfoot th, tfoot td").css("width", ""),
          c = wt(t, b.find("thead")[0]),
          D = 0;
        D < u.length;
        D++
      )
        (e = a[u[D]]),
          (c[D].style.width =
            null !== e.sWidthOrig && "" !== e.sWidthOrig
              ? M(e.sWidthOrig)
              : ""),
          e.sWidthOrig &&
            s &&
            P(c[D]).append(
              P("<div/>").css({
                width: e.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1,
              })
            );
      if (t.aoData.length)
        for (D = 0; D < u.length; D++)
          (e = a[(n = u[D])]),
            P(re(t, n)).clone(!1).append(e.sContentPadding).appendTo(v);
      P("[name]", b).removeAttr("name");
      for (
        var y = P("<div/>")
            .css(
              s || i
                ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    right: 0,
                    overflow: "hidden",
                  }
                : {}
            )
            .append(b)
            .appendTo(f),
          S =
            (s && o
              ? b.width(o)
              : s
              ? (b.css("width", "auto"),
                b.removeAttr("width"),
                b.width() < f.clientWidth && d && b.width(f.clientWidth))
              : i
              ? b.width(f.clientWidth)
              : d && b.width(d),
            0),
          D = 0;
        D < u.length;
        D++
      ) {
        var _ = P(c[D]),
          w = _.outerWidth() - _.width(),
          _ = p.bBounding
            ? Math.ceil(c[D].getBoundingClientRect().width)
            : _.outerWidth();
        (S += _), (a[u[D]].sWidth = M(_ - w));
      }
      (r.style.width = M(S)), y.remove();
    }
    d && (r.style.width = M(d)),
      (!d && !s) ||
        t._reszEvt ||
        ((o = function () {
          P(j).on(
            "resize.DT-" + t.sInstance,
            ee(function () {
              H(t);
            })
          );
        }),
        g ? setTimeout(o, 1e3) : o(),
        (t._reszEvt = !0));
  }
  var ee = w.util.throttle;
  function ne(t, e) {
    if (!t) return 0;
    (t = P("<div/>")
      .css("width", M(t))
      .appendTo(e || S.body)),
      (e = t[0].offsetWidth);
    return t.remove(), e;
  }
  function re(t, e) {
    var n = ae(t, e);
    if (n < 0) return null;
    var r = t.aoData[n];
    return r.nTr ? r.anCells[e] : P("<td/>").html(v(t, n, e, "display"))[0];
  }
  function ae(t, e) {
    for (var n, r = -1, a = -1, o = 0, i = t.aoData.length; o < i; o++)
      (n = (n = (n = v(t, o, e, "display") + "").replace(Kt, "")).replace(
        /&nbsp;/g,
        " "
      )).length > r && ((r = n.length), (a = o));
    return a;
  }
  function M(t) {
    return null === t
      ? "0px"
      : "number" == typeof t
      ? t < 0
        ? "0px"
        : t + "px"
      : t.match(/\d$/)
      ? t + "px"
      : t;
  }
  function I(t) {
    function e(t) {
      t.length && !Array.isArray(t[0]) ? h.push(t) : P.merge(h, t);
    }
    var n,
      r,
      a,
      o,
      i,
      s,
      l,
      u = [],
      c = t.aoColumns,
      d = t.aaSortingFixed,
      f = P.isPlainObject(d),
      h = [];
    for (
      Array.isArray(d) && e(d),
        f && d.pre && e(d.pre),
        e(t.aaSorting),
        f && d.post && e(d.post),
        n = 0;
      n < h.length;
      n++
    )
      for (a = (o = c[(l = h[n][(r = 0)])].aDataSort).length; r < a; r++)
        (s = c[(i = o[r])].sType || "string"),
          h[n]._idx === N && (h[n]._idx = P.inArray(h[n][1], c[i].asSorting)),
          u.push({
            src: l,
            col: i,
            dir: h[n][1],
            index: h[n]._idx,
            type: s,
            formatter: w.ext.type.order[s + "-pre"],
          });
    return u;
  }
  function oe(t) {
    var e,
      n,
      r,
      a,
      c,
      d = [],
      u = w.ext.type.order,
      f = t.aoData,
      o = (t.aoColumns, 0),
      i = t.aiDisplayMaster;
    for (it(t), e = 0, n = (c = I(t)).length; e < n; e++)
      (a = c[e]).formatter && o++, ce(t, a.col);
    if ("ssp" != B(t) && 0 !== c.length) {
      for (e = 0, r = i.length; e < r; e++) d[i[e]] = e;
      o === c.length
        ? i.sort(function (t, e) {
            for (
              var n,
                r,
                a,
                o,
                i = c.length,
                s = f[t]._aSortData,
                l = f[e]._aSortData,
                u = 0;
              u < i;
              u++
            )
              if (
                0 !=
                (a =
                  (n = s[(o = c[u]).col]) < (r = l[o.col]) ? -1 : r < n ? 1 : 0)
              )
                return "asc" === o.dir ? a : -a;
            return (n = d[t]) < (r = d[e]) ? -1 : r < n ? 1 : 0;
          })
        : i.sort(function (t, e) {
            for (
              var n,
                r,
                a,
                o = c.length,
                i = f[t]._aSortData,
                s = f[e]._aSortData,
                l = 0;
              l < o;
              l++
            )
              if (
                ((n = i[(a = c[l]).col]),
                (r = s[a.col]),
                0 !==
                  (a = (u[a.type + "-" + a.dir] || u["string-" + a.dir])(n, r)))
              )
                return a;
            return (n = d[t]) < (r = d[e]) ? -1 : r < n ? 1 : 0;
          });
    }
    t.bSorted = !0;
  }
  function ie(t) {
    for (
      var e = t.aoColumns, n = I(t), r = t.oLanguage.oAria, a = 0, o = e.length;
      a < o;
      a++
    ) {
      var i = e[a],
        s = i.asSorting,
        l = i.ariaTitle || i.sTitle.replace(/<.*?>/g, ""),
        u = i.nTh;
      u.removeAttribute("aria-sort"),
        (i = i.bSortable
          ? l +
            ("asc" ===
            (0 < n.length && n[0].col == a
              ? (u.setAttribute(
                  "aria-sort",
                  "asc" == n[0].dir ? "ascending" : "descending"
                ),
                s[n[0].index + 1] || s[0])
              : s[0])
              ? r.sSortAscending
              : r.sSortDescending)
          : l),
        u.setAttribute("aria-label", i);
    }
  }
  function se(t, e, n, r) {
    function a(t, e) {
      var n = t._idx;
      return (n = n === N ? P.inArray(t[1], l) : n) + 1 < l.length
        ? n + 1
        : e
        ? null
        : 0;
    }
    var o,
      i = t.aoColumns[e],
      s = t.aaSorting,
      l = i.asSorting;
    "number" == typeof s[0] && (s = t.aaSorting = [s]),
      n && t.oFeatures.bSortMulti
        ? -1 !== (i = P.inArray(e, k(s, "0")))
          ? null === (o = null === (o = a(s[i], !0)) && 1 === s.length ? 0 : o)
            ? s.splice(i, 1)
            : ((s[i][1] = l[o]), (s[i]._idx = o))
          : (s.push([e, l[0], 0]), (s[s.length - 1]._idx = 0))
        : s.length && s[0][0] == e
        ? ((o = a(s[0])), (s.length = 1), (s[0][1] = l[o]), (s[0]._idx = o))
        : ((s.length = 0), s.push([e, l[0]]), (s[0]._idx = 0)),
      u(t),
      "function" == typeof r && r(t);
  }
  function le(e, t, n, r) {
    var a = e.aoColumns[n];
    be(t, {}, function (t) {
      !1 !== a.bSortable &&
        (e.oFeatures.bProcessing
          ? (D(e, !0),
            setTimeout(function () {
              se(e, n, t.shiftKey, r), "ssp" !== B(e) && D(e, !1);
            }, 0))
          : se(e, n, t.shiftKey, r));
    });
  }
  function ue(t) {
    var e,
      n,
      r,
      a = t.aLastSort,
      o = t.oClasses.sSortColumn,
      i = I(t),
      s = t.oFeatures;
    if (s.bSort && s.bSortClasses) {
      for (e = 0, n = a.length; e < n; e++)
        (r = a[e].src),
          P(k(t.aoData, "anCells", r)).removeClass(o + (e < 2 ? e + 1 : 3));
      for (e = 0, n = i.length; e < n; e++)
        (r = i[e].src),
          P(k(t.aoData, "anCells", r)).addClass(o + (e < 2 ? e + 1 : 3));
    }
    t.aLastSort = i;
  }
  function ce(t, e) {
    for (
      var n,
        r,
        a,
        o = t.aoColumns[e],
        i = w.ext.order[o.sSortDataType],
        s =
          (i && (n = i.call(t.oInstance, t, e, at(t, e))),
          w.ext.type.order[o.sType + "-pre"]),
        l = 0,
        u = t.aoData.length;
      l < u;
      l++
    )
      (r = t.aoData[l])._aSortData || (r._aSortData = []),
        (r._aSortData[e] && !i) ||
          ((a = i ? n[l] : v(t, l, e, "sort")),
          (r._aSortData[e] = s ? s(a) : a));
  }
  function de(n) {
    var t;
    n._bLoadingState ||
      ((t = {
        time: +new Date(),
        start: n._iDisplayStart,
        length: n._iDisplayLength,
        order: P.extend(!0, [], n.aaSorting),
        search: Mt(n.oPreviousSearch),
        columns: P.map(n.aoColumns, function (t, e) {
          return { visible: t.bVisible, search: Mt(n.aoPreSearchCols[e]) };
        }),
      }),
      (n.oSavedState = t),
      R(n, "aoStateSaveParams", "stateSaveParams", [n, t]),
      n.oFeatures.bStateSave &&
        !n.bDestroying &&
        n.fnStateSaveCallback.call(n.oInstance, n, t));
  }
  function fe(e, t, n) {
    var r;
    {
      if (e.oFeatures.bStateSave)
        return (
          (r = e.fnStateLoadCallback.call(e.oInstance, e, function (t) {
            he(e, t, n);
          })) !== N && he(e, r, n),
          !0
        );
      n();
    }
  }
  function he(n, t, e) {
    var r,
      a,
      o = n.aoColumns,
      i = ((n._bLoadingState = !0), n._bInitComplete ? new w.Api(n) : null);
    if (!t || !t.time) return (n._bLoadingState = !1), void e();
    var s = R(n, "aoStateLoadParams", "stateLoadParams", [n, t]);
    if (-1 !== P.inArray(!1, s)) return (n._bLoadingState = !1), void e();
    s = n.iStateDuration;
    if (0 < s && t.time < +new Date() - 1e3 * s)
      return (n._bLoadingState = !1), void e();
    if (t.columns && o.length !== t.columns.length)
      return (n._bLoadingState = !1), void e();
    if (
      ((n.oLoadedState = P.extend(!0, {}, t)),
      t.start !== N &&
        (null === i
          ? ((n._iDisplayStart = t.start), (n.iInitDisplayStart = t.start))
          : Gt(n, t.start / t.length)),
      t.length !== N && (n._iDisplayLength = t.length),
      t.order !== N &&
        ((n.aaSorting = []),
        P.each(t.order, function (t, e) {
          n.aaSorting.push(e[0] >= o.length ? [0, e[1]] : e);
        })),
      t.search !== N && P.extend(n.oPreviousSearch, Et(t.search)),
      t.columns)
    ) {
      for (r = 0, a = t.columns.length; r < a; r++) {
        var l = t.columns[r];
        l.visible !== N &&
          (i
            ? i.column(r).visible(l.visible, !1)
            : (o[r].bVisible = l.visible)),
          l.search !== N && P.extend(n.aoPreSearchCols[r], Et(l.search));
      }
      i && i.columns.adjust();
    }
    (n._bLoadingState = !1), R(n, "aoStateLoaded", "stateLoaded", [n, t]), e();
  }
  function pe(t) {
    var e = w.settings,
      t = P.inArray(t, k(e, "nTable"));
    return -1 !== t ? e[t] : null;
  }
  function E(t, e, n, r) {
    if (
      ((n =
        "DataTables warning: " +
        (t ? "table id=" + t.sTableId + " - " : "") +
        n),
      r &&
        (n +=
          ". For more information about this error, please see http://datatables.net/tn/" +
          r),
      e)
    )
      j.console && console.log && console.log(n);
    else {
      (e = w.ext), (e = e.sErrMode || e.errMode);
      if ((t && R(t, null, "error", [t, r, n]), "alert" == e)) alert(n);
      else {
        if ("throw" == e) throw new Error(n);
        "function" == typeof e && e(t, r, n);
      }
    }
  }
  function F(n, r, t, e) {
    Array.isArray(t)
      ? P.each(t, function (t, e) {
          Array.isArray(e) ? F(n, r, e[0], e[1]) : F(n, r, e);
        })
      : (e === N && (e = t), r[t] !== N && (n[e] = r[t]));
  }
  function ge(t, e, n) {
    var r, a;
    for (a in e)
      e.hasOwnProperty(a) &&
        ((r = e[a]),
        P.isPlainObject(r)
          ? (P.isPlainObject(t[a]) || (t[a] = {}), P.extend(!0, t[a], r))
          : n && "data" !== a && "aaData" !== a && Array.isArray(r)
          ? (t[a] = r.slice())
          : (t[a] = r));
    return t;
  }
  function be(e, t, n) {
    P(e)
      .on("click.DT", t, function (t) {
        P(e).trigger("blur"), n(t);
      })
      .on("keypress.DT", t, function (t) {
        13 === t.which && (t.preventDefault(), n(t));
      })
      .on("selectstart.DT", function () {
        return !1;
      });
  }
  function L(t, e, n, r) {
    n && t[e].push({ fn: n, sName: r });
  }
  function R(n, t, e, r) {
    var a = [];
    return (
      t &&
        (a = P.map(n[t].slice().reverse(), function (t, e) {
          return t.fn.apply(n.oInstance, r);
        })),
      null !== e &&
        ((t = P.Event(e + ".dt")), P(n.nTable).trigger(t, r), a.push(t.result)),
      a
    );
  }
  function me(t) {
    var e = t._iDisplayStart,
      n = t.fnDisplayEnd(),
      r = t._iDisplayLength;
    n <= e && (e = n - r),
      (e -= e % r),
      (t._iDisplayStart = e = -1 === r || e < 0 ? 0 : e);
  }
  function ve(t, e) {
    var t = t.renderer,
      n = w.ext.renderer[e];
    return P.isPlainObject(t) && t[e]
      ? n[t[e]] || n._
      : ("string" == typeof t && n[t]) || n._;
  }
  function B(t) {
    return t.oFeatures.bServerSide
      ? "ssp"
      : t.ajax || t.sAjaxSource
      ? "ajax"
      : "dom";
  }
  function ye(t, n) {
    if (Array.isArray(t))
      return P.map(t, function (t) {
        return ye(t, n);
      });
    if ("number" == typeof t) return [n[t]];
    var r = P.map(n, function (t, e) {
      return t.nTable;
    });
    return P(r)
      .filter(t)
      .map(function (t) {
        var e = P.inArray(this, r);
        return n[e];
      })
      .toArray();
  }
  function Se(a, o, t) {
    var e, n;
    t &&
      (e = new U(a)).one("draw", function () {
        t(e.ajax.json());
      }),
      "ssp" == B(a)
        ? u(a, o)
        : (D(a, !0),
          (n = a.jqXHR) && 4 !== n.readyState && n.abort(),
          Ct(a, [], function (t) {
            ht(a);
            for (var e = It(a, t), n = 0, r = e.length; n < r; n++) x(a, e[n]);
            u(a, o), D(a, !1);
          }));
  }
  function De(t, e, n, r, a) {
    for (
      var o,
        i,
        s,
        l,
        u = [],
        c = typeof e,
        d = 0,
        f = (e =
          e && "string" != c && "function" != c && e.length !== N ? e : [e])
          .length;
      d < f;
      d++
    )
      for (
        s = 0,
          l = (i =
            e[d] && e[d].split && !e[d].match(/[\[\(:]/)
              ? e[d].split(",")
              : [e[d]]).length;
        s < l;
        s++
      )
        (o = n("string" == typeof i[s] ? i[s].trim() : i[s])) &&
          o.length &&
          (u = u.concat(o));
    var h = p.selector[t];
    if (h.length) for (d = 0, f = h.length; d < f; d++) u = h[d](r, a, u);
    return G(u);
  }
  function _e(t) {
    return (
      (t = t || {}).filter && t.search === N && (t.search = t.filter),
      P.extend({ search: "none", order: "current", page: "all" }, t)
    );
  }
  function we(t) {
    for (var e = 0, n = t.length; e < n; e++)
      if (0 < t[e].length)
        return (
          (t[0] = t[e]),
          (t[0].length = 1),
          (t.length = 1),
          (t.context = [t.context[e]]),
          t
        );
    return (t.length = 0), t;
  }
  function Ce(o, t, e, n) {
    function i(t, e) {
      var n;
      if (Array.isArray(t) || t instanceof P)
        for (var r = 0, a = t.length; r < a; r++) i(t[r], e);
      else
        t.nodeName && "tr" === t.nodeName.toLowerCase()
          ? s.push(t)
          : ((n = P("<tr><td></td></tr>").addClass(e)),
            (P("td", n).addClass(e).html(t)[0].colSpan = T(o)),
            s.push(n[0]));
    }
    var s = [];
    i(e, n),
      t._details && t._details.detach(),
      (t._details = P(s)),
      t._detailsShow && t._details.insertAfter(t.nTr);
  }
  function Te(t, e) {
    var n = t.context;
    if (n.length && t.length) {
      var r = n[0].aoData[t[0]];
      if (r._details) {
        (r._detailsShow = e)
          ? (r._details.insertAfter(r.nTr), P(r.nTr).addClass("dt-hasChild"))
          : (r._details.detach(), P(r.nTr).removeClass("dt-hasChild")),
          R(n[0], null, "childRow", [e, t.row(t[0])]);
        var l = n[0],
          a = new U(l),
          r = ".dt.DT_details",
          e = "draw" + r,
          t = "column-visibility" + r,
          r = "destroy" + r,
          u = l.aoData;
        if ((a.off(e + " " + t + " " + r), k(u, "_details").length > 0)) {
          a.on(e, function (t, e) {
            if (l !== e) return;
            a.rows({ page: "current" })
              .eq(0)
              .each(function (t) {
                var e = u[t];
                if (e._detailsShow) e._details.insertAfter(e.nTr);
              });
          });
          a.on(t, function (t, e, n, r) {
            if (l !== e) return;
            var a,
              o = T(e);
            for (var i = 0, s = u.length; i < s; i++) {
              a = u[i];
              if (a._details)
                a._details.children("td[colspan]").attr("colspan", o);
            }
          });
          a.on(r, function (t, e) {
            if (l !== e) return;
            for (var n = 0, r = u.length; n < r; n++)
              if (u[n]._details) Le(a, n);
          });
        }
        Fe(n);
      }
    }
  }
  function xe(t, e, n, r, a) {
    for (var o = [], i = 0, s = a.length; i < s; i++) o.push(v(t, a[i], e));
    return o;
  }
  var Ae = [],
    o = Array.prototype,
    U = function (t, e) {
      if (!(this instanceof U)) return new U(t, e);
      function n(t) {
        var e, n, r, a;
        (t = t),
          (r = w.settings),
          (a = P.map(r, function (t, e) {
            return t.nTable;
          })),
          (t = t
            ? t.nTable && t.oApi
              ? [t]
              : t.nodeName && "table" === t.nodeName.toLowerCase()
              ? -1 !== (e = P.inArray(t, a))
                ? [r[e]]
                : null
              : t && "function" == typeof t.settings
              ? t.settings().toArray()
              : ("string" == typeof t ? (n = P(t)) : t instanceof P && (n = t),
                n
                  ? n
                      .map(function (t) {
                        return -1 !== (e = P.inArray(this, a)) ? r[e] : null;
                      })
                      .toArray()
                  : void 0)
            : []) && o.push.apply(o, t);
      }
      var o = [];
      if (Array.isArray(t)) for (var r = 0, a = t.length; r < a; r++) n(t[r]);
      else n(t);
      (this.context = G(o)),
        e && P.merge(this, e),
        (this.selector = { rows: null, cols: null, opts: null }),
        U.extend(this, this, Ae);
    },
    Ie =
      ((w.Api = U),
      P.extend(U.prototype, {
        any: function () {
          return 0 !== this.count();
        },
        concat: o.concat,
        context: [],
        count: function () {
          return this.flatten().length;
        },
        each: function (t) {
          for (var e = 0, n = this.length; e < n; e++)
            t.call(this, this[e], e, this);
          return this;
        },
        eq: function (t) {
          var e = this.context;
          return e.length > t ? new U(e[t], this[t]) : null;
        },
        filter: function (t) {
          var e = [];
          if (o.filter) e = o.filter.call(this, t, this);
          else
            for (var n = 0, r = this.length; n < r; n++)
              t.call(this, this[n], n, this) && e.push(this[n]);
          return new U(this.context, e);
        },
        flatten: function () {
          var t = [];
          return new U(this.context, t.concat.apply(t, this.toArray()));
        },
        join: o.join,
        indexOf:
          o.indexOf ||
          function (t, e) {
            for (var n = e || 0, r = this.length; n < r; n++)
              if (this[n] === t) return n;
            return -1;
          },
        iterator: function (t, e, n, r) {
          var a,
            o,
            i,
            s,
            l,
            u,
            c,
            d,
            f = [],
            h = this.context,
            p = this.selector;
          for (
            "string" == typeof t && ((r = n), (n = e), (e = t), (t = !1)),
              o = 0,
              i = h.length;
            o < i;
            o++
          ) {
            var g = new U(h[o]);
            if ("table" === e) (a = n.call(g, h[o], o)) !== N && f.push(a);
            else if ("columns" === e || "rows" === e)
              (a = n.call(g, h[o], this[o], o)) !== N && f.push(a);
            else if (
              "column" === e ||
              "column-rows" === e ||
              "row" === e ||
              "cell" === e
            )
              for (
                c = this[o],
                  "column-rows" === e && (u = Ie(h[o], p.opts)),
                  s = 0,
                  l = c.length;
                s < l;
                s++
              )
                (d = c[s]),
                  (a =
                    "cell" === e
                      ? n.call(g, h[o], d.row, d.column, o, s)
                      : n.call(g, h[o], d, o, s, u)) !== N && f.push(a);
          }
          return f.length || r
            ? (((t = (r = new U(h, t ? f.concat.apply([], f) : f))
                .selector).rows = p.rows),
              (t.cols = p.cols),
              (t.opts = p.opts),
              r)
            : this;
        },
        lastIndexOf:
          o.lastIndexOf ||
          function (t, e) {
            return this.indexOf.apply(this.toArray.reverse(), arguments);
          },
        length: 0,
        map: function (t) {
          var e = [];
          if (o.map) e = o.map.call(this, t, this);
          else
            for (var n = 0, r = this.length; n < r; n++)
              e.push(t.call(this, this[n], n));
          return new U(this.context, e);
        },
        pluck: function (e) {
          return this.map(function (t) {
            return t[e];
          });
        },
        pop: o.pop,
        push: o.push,
        reduce:
          o.reduce ||
          function (t, e) {
            return et(this, t, e, 0, this.length, 1);
          },
        reduceRight:
          o.reduceRight ||
          function (t, e) {
            return et(this, t, e, this.length - 1, -1, -1);
          },
        reverse: o.reverse,
        selector: null,
        shift: o.shift,
        slice: function () {
          return new U(this.context, this);
        },
        sort: o.sort,
        splice: o.splice,
        toArray: function () {
          return o.slice.call(this);
        },
        to$: function () {
          return P(this);
        },
        toJQuery: function () {
          return P(this);
        },
        unique: function () {
          return new U(this.context, G(this));
        },
        unshift: o.unshift,
      }),
      (U.extend = function (t, e, n) {
        if (n.length && e && (e instanceof U || e.__dt_wrapper))
          for (var r, a = 0, o = n.length; a < o; a++)
            (e[(r = n[a]).name] =
              "function" === r.type
                ? (function (e, n, r) {
                    return function () {
                      var t = n.apply(e, arguments);
                      return U.extend(t, t, r.methodExt), t;
                    };
                  })(t, r.val, r)
                : "object" === r.type
                ? {}
                : r.val),
              (e[r.name].__dt_wrapper = !0),
              U.extend(t, e[r.name], r.propExt);
      }),
      (U.register = e =
        function (t, e) {
          if (Array.isArray(t))
            for (var n = 0, r = t.length; n < r; n++) U.register(t[n], e);
          else
            for (
              var a = t.split("."), o = Ae, i = 0, s = a.length;
              i < s;
              i++
            ) {
              var l,
                u,
                c = (function (t, e) {
                  for (var n = 0, r = t.length; n < r; n++)
                    if (t[n].name === e) return t[n];
                  return null;
                })(
                  o,
                  (u = (l = -1 !== a[i].indexOf("()"))
                    ? a[i].replace("()", "")
                    : a[i])
                );
              c ||
                o.push(
                  (c = {
                    name: u,
                    val: {},
                    methodExt: [],
                    propExt: [],
                    type: "object",
                  })
                ),
                i === s - 1
                  ? ((c.val = e),
                    (c.type =
                      "function" == typeof e
                        ? "function"
                        : P.isPlainObject(e)
                        ? "object"
                        : "other"))
                  : (o = l ? c.methodExt : c.propExt);
            }
        }),
      (U.registerPlural = t =
        function (t, e, n) {
          U.register(t, n),
            U.register(e, function () {
              var t = n.apply(this, arguments);
              return t === this
                ? this
                : t instanceof U
                ? t.length
                  ? Array.isArray(t[0])
                    ? new U(t.context, t[0])
                    : t[0]
                  : N
                : t;
            });
        }),
      e("tables()", function (t) {
        return t !== N && null !== t ? new U(ye(t, this.context)) : this;
      }),
      e("table()", function (t) {
        var t = this.tables(t),
          e = t.context;
        return e.length ? new U(e[0]) : t;
      }),
      t("tables().nodes()", "table().node()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTable;
          },
          1
        );
      }),
      t("tables().body()", "table().body()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTBody;
          },
          1
        );
      }),
      t("tables().header()", "table().header()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTHead;
          },
          1
        );
      }),
      t("tables().footer()", "table().footer()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTFoot;
          },
          1
        );
      }),
      t("tables().containers()", "table().container()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTableWrapper;
          },
          1
        );
      }),
      e("draw()", function (e) {
        return this.iterator("table", function (t) {
          "page" === e
            ? y(t)
            : u(t, !1 === (e = "string" == typeof e ? "full-hold" !== e : e));
        });
      }),
      e("page()", function (e) {
        return e === N
          ? this.page.info().page
          : this.iterator("table", function (t) {
              Gt(t, e);
            });
      }),
      e("page.info()", function (t) {
        if (0 === this.context.length) return N;
        var e = this.context[0],
          n = e._iDisplayStart,
          r = e.oFeatures.bPaginate ? e._iDisplayLength : -1,
          a = e.fnRecordsDisplay(),
          o = -1 === r;
        return {
          page: o ? 0 : Math.floor(n / r),
          pages: o ? 1 : Math.ceil(a / r),
          start: n,
          end: e.fnDisplayEnd(),
          length: r,
          recordsTotal: e.fnRecordsTotal(),
          recordsDisplay: a,
          serverSide: "ssp" === B(e),
        };
      }),
      e("page.len()", function (e) {
        return e === N
          ? 0 !== this.context.length
            ? this.context[0]._iDisplayLength
            : N
          : this.iterator("table", function (t) {
              zt(t, e);
            });
      }),
      e("ajax.json()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].json;
      }),
      e("ajax.params()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].oAjaxData;
      }),
      e("ajax.reload()", function (e, n) {
        return this.iterator("table", function (t) {
          Se(t, !1 === n, e);
        });
      }),
      e("ajax.url()", function (e) {
        var t = this.context;
        return e === N
          ? 0 === t.length
            ? N
            : (t = t[0]).ajax
            ? P.isPlainObject(t.ajax)
              ? t.ajax.url
              : t.ajax
            : t.sAjaxSource
          : this.iterator("table", function (t) {
              P.isPlainObject(t.ajax) ? (t.ajax.url = e) : (t.ajax = e);
            });
      }),
      e("ajax.url().load()", function (e, n) {
        return this.iterator("table", function (t) {
          Se(t, !1 === n, e);
        });
      }),
      function (t, e) {
        var n,
          r = [],
          a = t.aiDisplay,
          o = t.aiDisplayMaster,
          i = e.search,
          s = e.order,
          e = e.page;
        if ("ssp" == B(t)) return "removed" === i ? [] : d(0, o.length);
        if ("current" == e)
          for (u = t._iDisplayStart, c = t.fnDisplayEnd(); u < c; u++)
            r.push(a[u]);
        else if ("current" == s || "applied" == s) {
          if ("none" == i) r = o.slice();
          else if ("applied" == i) r = a.slice();
          else if ("removed" == i) {
            for (var l = {}, u = 0, c = a.length; u < c; u++) l[a[u]] = null;
            r = P.map(o, function (t) {
              return l.hasOwnProperty(t) ? null : t;
            });
          }
        } else if ("index" == s || "original" == s)
          for (u = 0, c = t.aoData.length; u < c; u++)
            ("none" == i ||
              (-1 === (n = P.inArray(u, a)) && "removed" == i) ||
              (0 <= n && "applied" == i)) &&
              r.push(u);
        return r;
      }),
    Fe =
      (e("rows()", function (e, n) {
        e === N ? (e = "") : P.isPlainObject(e) && ((n = e), (e = "")),
          (n = _e(n));
        var t = this.iterator(
          "table",
          function (t) {
            return De(
              "row",
              e,
              function (n) {
                var t = f(n),
                  r = a.aoData;
                if (null !== t && !o) return [t];
                if (((i = i || Ie(a, o)), null !== t && -1 !== P.inArray(t, i)))
                  return [t];
                if (null === n || n === N || "" === n) return i;
                if ("function" == typeof n)
                  return P.map(i, function (t) {
                    var e = r[t];
                    return n(t, e._aData, e.nTr) ? t : null;
                  });
                if (n.nodeName)
                  return (
                    (t = n._DT_RowIndex),
                    (e = n._DT_CellIndex),
                    t !== N
                      ? r[t] && r[t].nTr === n
                        ? [t]
                        : []
                      : e
                      ? r[e.row] && r[e.row].nTr === n.parentNode
                        ? [e.row]
                        : []
                      : (t = P(n).closest("*[data-dt-row]")).length
                      ? [t.data("dt-row")]
                      : []
                  );
                if ("string" == typeof n && "#" === n.charAt(0)) {
                  var e = a.aIds[n.replace(/^#/, "")];
                  if (e !== N) return [e.idx];
                }
                t = _(m(a.aoData, i, "nTr"));
                return P(t)
                  .filter(n)
                  .map(function () {
                    return this._DT_RowIndex;
                  })
                  .toArray();
              },
              (a = t),
              (o = n)
            );
            var a, o, i;
          },
          1
        );
        return (t.selector.rows = e), (t.selector.opts = n), t;
      }),
      e("rows().nodes()", function () {
        return this.iterator(
          "row",
          function (t, e) {
            return t.aoData[e].nTr || N;
          },
          1
        );
      }),
      e("rows().data()", function () {
        return this.iterator(
          !0,
          "rows",
          function (t, e) {
            return m(t.aoData, e, "_aData");
          },
          1
        );
      }),
      t("rows().cache()", "row().cache()", function (n) {
        return this.iterator(
          "row",
          function (t, e) {
            t = t.aoData[e];
            return "search" === n ? t._aFilterData : t._aSortData;
          },
          1
        );
      }),
      t("rows().invalidate()", "row().invalidate()", function (n) {
        return this.iterator("row", function (t, e) {
          gt(t, e, n);
        });
      }),
      t("rows().indexes()", "row().index()", function () {
        return this.iterator(
          "row",
          function (t, e) {
            return e;
          },
          1
        );
      }),
      t("rows().ids()", "row().id()", function (t) {
        for (var e = [], n = this.context, r = 0, a = n.length; r < a; r++)
          for (var o = 0, i = this[r].length; o < i; o++) {
            var s = n[r].rowIdFn(n[r].aoData[this[r][o]]._aData);
            e.push((!0 === t ? "#" : "") + s);
          }
        return new U(n, e);
      }),
      t("rows().remove()", "row().remove()", function () {
        var d = this;
        return (
          this.iterator("row", function (t, e, n) {
            var r,
              a,
              o,
              i,
              s,
              l,
              u = t.aoData,
              c = u[e];
            for (u.splice(e, 1), r = 0, a = u.length; r < a; r++)
              if (
                ((l = (s = u[r]).anCells),
                null !== s.nTr && (s.nTr._DT_RowIndex = r),
                null !== l)
              )
                for (o = 0, i = l.length; o < i; o++)
                  l[o]._DT_CellIndex.row = r;
            pt(t.aiDisplayMaster, e),
              pt(t.aiDisplay, e),
              pt(d[n], e, !1),
              0 < t._iRecordsDisplay && t._iRecordsDisplay--,
              me(t);
            n = t.rowIdFn(c._aData);
            n !== N && delete t.aIds[n];
          }),
          this.iterator("table", function (t) {
            for (var e = 0, n = t.aoData.length; e < n; e++)
              t.aoData[e].idx = e;
          }),
          this
        );
      }),
      e("rows.add()", function (o) {
        var t = this.iterator(
            "table",
            function (t) {
              for (var e, n = [], r = 0, a = o.length; r < a; r++)
                (e = o[r]).nodeName && "TR" === e.nodeName.toUpperCase()
                  ? n.push(lt(t, e)[0])
                  : n.push(x(t, e));
              return n;
            },
            1
          ),
          e = this.rows(-1);
        return e.pop(), P.merge(e, t), e;
      }),
      e("row()", function (t, e) {
        return we(this.rows(t, e));
      }),
      e("row().data()", function (t) {
        var e = this.context;
        if (t === N)
          return e.length && this.length ? e[0].aoData[this[0]]._aData : N;
        var n = e[0].aoData[this[0]];
        return (
          (n._aData = t),
          Array.isArray(t) && n.nTr && n.nTr.id && b(e[0].rowId)(t, n.nTr.id),
          gt(e[0], this[0], "data"),
          this
        );
      }),
      e("row().node()", function () {
        var t = this.context;
        return (t.length && this.length && t[0].aoData[this[0]].nTr) || null;
      }),
      e("row.add()", function (e) {
        e instanceof P && e.length && (e = e[0]);
        var t = this.iterator("table", function (t) {
          return e.nodeName && "TR" === e.nodeName.toUpperCase()
            ? lt(t, e)[0]
            : x(t, e);
        });
        return this.row(t[0]);
      }),
      P(S).on("plugin-init.dt", function (t, e) {
        var n = new U(e),
          r =
            (n.on("stateSaveParams", function (t, e, n) {
              for (
                var r = e.rowIdFn, a = e.aoData, o = [], i = 0;
                i < a.length;
                i++
              )
                a[i]._detailsShow && o.push("#" + r(a[i]._aData));
              n.childRows = o;
            }),
            n.state.loaded());
        r &&
          r.childRows &&
          n
            .rows(
              P.map(r.childRows, function (t) {
                return t.replace(/:/g, "\\:");
              })
            )
            .every(function () {
              R(e, null, "requestChild", [this]);
            });
      }),
      w.util.throttle(function (t) {
        de(t[0]);
      }, 500)),
    Le = function (t, e) {
      var n = t.context;
      n.length &&
        (e = n[0].aoData[e !== N ? e : t[0]]) &&
        e._details &&
        (e._details.remove(),
        (e._detailsShow = N),
        (e._details = N),
        P(e.nTr).removeClass("dt-hasChild"),
        Fe(n));
    },
    Re = "row().child",
    Pe = Re + "()",
    je =
      (e(Pe, function (t, e) {
        var n = this.context;
        return t === N
          ? n.length && this.length
            ? n[0].aoData[this[0]]._details
            : N
          : (!0 === t
              ? this.child.show()
              : !1 === t
              ? Le(this)
              : n.length && this.length && Ce(n[0], n[0].aoData[this[0]], t, e),
            this);
      }),
      e([Re + ".show()", Pe + ".show()"], function (t) {
        return Te(this, !0), this;
      }),
      e([Re + ".hide()", Pe + ".hide()"], function () {
        return Te(this, !1), this;
      }),
      e([Re + ".remove()", Pe + ".remove()"], function () {
        return Le(this), this;
      }),
      e(Re + ".isShown()", function () {
        var t = this.context;
        return (
          (t.length && this.length && t[0].aoData[this[0]]._detailsShow) || !1
        );
      }),
      /^([^:]+):(name|visIdx|visible)$/),
    Ne =
      (e("columns()", function (n, r) {
        n === N ? (n = "") : P.isPlainObject(n) && ((r = n), (n = "")),
          (r = _e(r));
        var t = this.iterator(
          "table",
          function (t) {
            return (
              (e = n),
              (s = r),
              (l = (i = t).aoColumns),
              (u = k(l, "sName")),
              (c = k(l, "nTh")),
              De(
                "column",
                e,
                function (n) {
                  var r,
                    t = f(n);
                  if ("" === n) return d(l.length);
                  if (null !== t) return [0 <= t ? t : l.length + t];
                  if ("function" == typeof n)
                    return (
                      (r = Ie(i, s)),
                      P.map(l, function (t, e) {
                        return n(e, xe(i, e, 0, 0, r), c[e]) ? e : null;
                      })
                    );
                  var a = "string" == typeof n ? n.match(je) : "";
                  if (a)
                    switch (a[2]) {
                      case "visIdx":
                      case "visible":
                        var e,
                          o = parseInt(a[1], 10);
                        return o < 0
                          ? [
                              (e = P.map(l, function (t, e) {
                                return t.bVisible ? e : null;
                              }))[e.length + o],
                            ]
                          : [O(i, o)];
                      case "name":
                        return P.map(u, function (t, e) {
                          return t === a[1] ? e : null;
                        });
                      default:
                        return [];
                    }
                  if (n.nodeName && n._DT_CellIndex)
                    return [n._DT_CellIndex.column];
                  t = P(c)
                    .filter(n)
                    .map(function () {
                      return P.inArray(this, c);
                    })
                    .toArray();
                  if (t.length || !n.nodeName) return t;
                  t = P(n).closest("*[data-dt-column]");
                  return t.length ? [t.data("dt-column")] : [];
                },
                i,
                s
              )
            );
            var i, e, s, l, u, c;
          },
          1
        );
        return (t.selector.cols = n), (t.selector.opts = r), t;
      }),
      t("columns().header()", "column().header()", function (t, e) {
        return this.iterator(
          "column",
          function (t, e) {
            return t.aoColumns[e].nTh;
          },
          1
        );
      }),
      t("columns().footer()", "column().footer()", function (t, e) {
        return this.iterator(
          "column",
          function (t, e) {
            return t.aoColumns[e].nTf;
          },
          1
        );
      }),
      t("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", xe, 1);
      }),
      t("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator(
          "column",
          function (t, e) {
            return t.aoColumns[e].mData;
          },
          1
        );
      }),
      t("columns().cache()", "column().cache()", function (o) {
        return this.iterator(
          "column-rows",
          function (t, e, n, r, a) {
            return m(
              t.aoData,
              a,
              "search" === o ? "_aFilterData" : "_aSortData",
              e
            );
          },
          1
        );
      }),
      t("columns().nodes()", "column().nodes()", function () {
        return this.iterator(
          "column-rows",
          function (t, e, n, r, a) {
            return m(t.aoData, a, "anCells", e);
          },
          1
        );
      }),
      t("columns().visible()", "column().visible()", function (d, n) {
        var e = this,
          t = this.iterator("column", function (t, e) {
            if (d === N) return t.aoColumns[e].bVisible;
            var n,
              r,
              a = e,
              e = d,
              o = t.aoColumns,
              i = o[a],
              s = t.aoData;
            if (e === N) i.bVisible;
            else if (i.bVisible !== e) {
              if (e)
                for (
                  var l = P.inArray(!0, k(o, "bVisible"), a + 1),
                    u = 0,
                    c = s.length;
                  u < c;
                  u++
                )
                  (r = s[u].nTr),
                    (n = s[u].anCells),
                    r && r.insertBefore(n[a], n[l] || null);
              else P(k(t.aoData, "anCells", a)).detach();
              i.bVisible = e;
            }
          });
        return (
          d !== N &&
            this.iterator("table", function (t) {
              St(t, t.aoHeader),
                St(t, t.aoFooter),
                t.aiDisplay.length ||
                  P(t.nTBody).find("td[colspan]").attr("colspan", T(t)),
                de(t),
                e.iterator("column", function (t, e) {
                  R(t, null, "column-visibility", [t, e, d, n]);
                }),
                (n !== N && !n) || e.columns.adjust();
            }),
          t
        );
      }),
      t("columns().indexes()", "column().index()", function (n) {
        return this.iterator(
          "column",
          function (t, e) {
            return "visible" === n ? at(t, e) : e;
          },
          1
        );
      }),
      e("columns.adjust()", function () {
        return this.iterator(
          "table",
          function (t) {
            H(t);
          },
          1
        );
      }),
      e("column.index()", function (t, e) {
        var n;
        if (0 !== this.context.length)
          return (
            (n = this.context[0]),
            "fromVisible" === t || "toData" === t
              ? O(n, e)
              : "fromData" === t || "toVisible" === t
              ? at(n, e)
              : void 0
          );
      }),
      e("column()", function (t, e) {
        return we(this.columns(t, e));
      }),
      e("cells()", function (g, t, b) {
        if (
          (P.isPlainObject(g) &&
            (g.row === N ? ((b = g), (g = null)) : ((b = t), (t = null))),
          P.isPlainObject(t) && ((b = t), (t = null)),
          null === t || t === N)
        )
          return this.iterator("table", function (t) {
            return (
              (r = t),
              (t = g),
              (e = _e(b)),
              (d = r.aoData),
              (f = Ie(r, e)),
              (n = _(m(d, f, "anCells"))),
              (h = P(Y([], n))),
              (p = r.aoColumns.length),
              De(
                "cell",
                t,
                function (t) {
                  var e = "function" == typeof t;
                  if (null === t || t === N || e) {
                    for (o = [], i = 0, s = f.length; i < s; i++)
                      for (a = f[i], l = 0; l < p; l++)
                        (u = { row: a, column: l }),
                          e
                            ? ((c = d[a]),
                              t(
                                u,
                                v(r, a, l),
                                c.anCells ? c.anCells[l] : null
                              ) && o.push(u))
                            : o.push(u);
                    return o;
                  }
                  if (P.isPlainObject(t))
                    return t.column !== N &&
                      t.row !== N &&
                      -1 !== P.inArray(t.row, f)
                      ? [t]
                      : [];
                  var n = h
                    .filter(t)
                    .map(function (t, e) {
                      return {
                        row: e._DT_CellIndex.row,
                        column: e._DT_CellIndex.column,
                      };
                    })
                    .toArray();
                  return n.length || !t.nodeName
                    ? n
                    : (c = P(t).closest("*[data-dt-row]")).length
                    ? [{ row: c.data("dt-row"), column: c.data("dt-column") }]
                    : [];
                },
                r,
                e
              )
            );
            var r, e, a, o, i, s, l, u, c, d, f, n, h, p;
          });
        var r,
          a,
          o,
          i,
          e = b ? { page: b.page, order: b.order, search: b.search } : {},
          s = this.columns(t, e),
          l = this.rows(g, e),
          e = this.iterator(
            "table",
            function (t, e) {
              var n = [];
              for (r = 0, a = l[e].length; r < a; r++)
                for (o = 0, i = s[e].length; o < i; o++)
                  n.push({ row: l[e][r], column: s[e][o] });
              return n;
            },
            1
          ),
          e = b && b.selected ? this.cells(e, b) : e;
        return P.extend(e.selector, { cols: t, rows: g, opts: b }), e;
      }),
      t("cells().nodes()", "cell().node()", function () {
        return this.iterator(
          "cell",
          function (t, e, n) {
            t = t.aoData[e];
            return t && t.anCells ? t.anCells[n] : N;
          },
          1
        );
      }),
      e("cells().data()", function () {
        return this.iterator(
          "cell",
          function (t, e, n) {
            return v(t, e, n);
          },
          1
        );
      }),
      t("cells().cache()", "cell().cache()", function (r) {
        return (
          (r = "search" === r ? "_aFilterData" : "_aSortData"),
          this.iterator(
            "cell",
            function (t, e, n) {
              return t.aoData[e][r][n];
            },
            1
          )
        );
      }),
      t("cells().render()", "cell().render()", function (r) {
        return this.iterator(
          "cell",
          function (t, e, n) {
            return v(t, e, n, r);
          },
          1
        );
      }),
      t("cells().indexes()", "cell().index()", function () {
        return this.iterator(
          "cell",
          function (t, e, n) {
            return { row: e, column: n, columnVisible: at(t, n) };
          },
          1
        );
      }),
      t("cells().invalidate()", "cell().invalidate()", function (r) {
        return this.iterator("cell", function (t, e, n) {
          gt(t, e, r, n);
        });
      }),
      e("cell()", function (t, e, n) {
        return we(this.cells(t, e, n));
      }),
      e("cell().data()", function (t) {
        var e = this.context,
          n = this[0];
        return t === N
          ? e.length && n.length
            ? v(e[0], n[0].row, n[0].column)
            : N
          : (ut(e[0], n[0].row, n[0].column, t),
            gt(e[0], n[0].row, "data", n[0].column),
            this);
      }),
      e("order()", function (e, t) {
        var n = this.context;
        return e === N
          ? 0 !== n.length
            ? n[0].aaSorting
            : N
          : ("number" == typeof e
              ? (e = [[e, t]])
              : e.length &&
                !Array.isArray(e[0]) &&
                (e = Array.prototype.slice.call(arguments)),
            this.iterator("table", function (t) {
              t.aaSorting = e.slice();
            }));
      }),
      e("order.listener()", function (e, n, r) {
        return this.iterator("table", function (t) {
          le(t, e, n, r);
        });
      }),
      e("order.fixed()", function (e) {
        var t;
        return e
          ? this.iterator("table", function (t) {
              t.aaSortingFixed = P.extend(!0, {}, e);
            })
          : ((t = (t = this.context).length ? t[0].aaSortingFixed : N),
            Array.isArray(t) ? { pre: t } : t);
      }),
      e(["columns().order()", "column().order()"], function (r) {
        var a = this;
        return this.iterator("table", function (t, e) {
          var n = [];
          P.each(a[e], function (t, e) {
            n.push([e, r]);
          }),
            (t.aaSorting = n);
        });
      }),
      e("search()", function (e, n, r, a) {
        var t = this.context;
        return e === N
          ? 0 !== t.length
            ? t[0].oPreviousSearch.sSearch
            : N
          : this.iterator("table", function (t) {
              t.oFeatures.bFilter &&
                Lt(
                  t,
                  P.extend({}, t.oPreviousSearch, {
                    sSearch: e + "",
                    bRegex: null !== n && n,
                    bSmart: null === r || r,
                    bCaseInsensitive: null === a || a,
                  }),
                  1
                );
            });
      }),
      t("columns().search()", "column().search()", function (r, a, o, i) {
        return this.iterator("column", function (t, e) {
          var n = t.aoPreSearchCols;
          if (r === N) return n[e].sSearch;
          t.oFeatures.bFilter &&
            (P.extend(n[e], {
              sSearch: r + "",
              bRegex: null !== a && a,
              bSmart: null === o || o,
              bCaseInsensitive: null === i || i,
            }),
            Lt(t, t.oPreviousSearch, 1));
        });
      }),
      e("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null;
      }),
      e("state.clear()", function () {
        return this.iterator("table", function (t) {
          t.fnStateSaveCallback.call(t.oInstance, t, {});
        });
      }),
      e("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null;
      }),
      e("state.save()", function () {
        return this.iterator("table", function (t) {
          de(t);
        });
      }),
      (w.versionCheck = w.fnVersionCheck =
        function (t) {
          for (
            var e,
              n,
              r = w.version.split("."),
              a = t.split("."),
              o = 0,
              i = a.length;
            o < i;
            o++
          )
            if ((e = parseInt(r[o], 10) || 0) !== (n = parseInt(a[o], 10) || 0))
              return n < e;
          return !0;
        }),
      (w.isDataTable = w.fnIsDataTable =
        function (t) {
          var a = P(t).get(0),
            o = !1;
          return (
            t instanceof w.Api ||
            (P.each(w.settings, function (t, e) {
              var n = e.nScrollHead ? P("table", e.nScrollHead)[0] : null,
                r = e.nScrollFoot ? P("table", e.nScrollFoot)[0] : null;
              (e.nTable !== a && n !== a && r !== a) || (o = !0);
            }),
            o)
          );
        }),
      (w.tables = w.fnTables =
        function (e) {
          var t = !1,
            n =
              (P.isPlainObject(e) && ((t = e.api), (e = e.visible)),
              P.map(w.settings, function (t) {
                if (!e || P(t.nTable).is(":visible")) return t.nTable;
              }));
          return t ? new U(n) : n;
        }),
      (w.camelToHungarian = C),
      e("$()", function (t, e) {
        (e = this.rows(e).nodes()), (e = P(e));
        return P([].concat(e.filter(t).toArray(), e.find(t).toArray()));
      }),
      P.each(["on", "one", "off"], function (t, n) {
        e(n + "()", function () {
          var t = Array.prototype.slice.call(arguments),
            e =
              ((t[0] = P.map(t[0].split(/\s/), function (t) {
                return t.match(/\.dt\b/) ? t : t + ".dt";
              }).join(" ")),
              P(this.tables().nodes()));
          return e[n].apply(e, t), this;
        });
      }),
      e("clear()", function () {
        return this.iterator("table", function (t) {
          ht(t);
        });
      }),
      e("settings()", function () {
        return new U(this.context, this.context);
      }),
      e("init()", function () {
        var t = this.context;
        return t.length ? t[0].oInit : null;
      }),
      e("data()", function () {
        return this.iterator("table", function (t) {
          return k(t.aoData, "_aData");
        }).flatten();
      }),
      e("destroy()", function (d) {
        return (
          (d = d || !1),
          this.iterator("table", function (e) {
            var n,
              t = e.nTableWrapper.parentNode,
              r = e.oClasses,
              a = e.nTable,
              o = e.nTBody,
              i = e.nTHead,
              s = e.nTFoot,
              l = P(a),
              o = P(o),
              u = P(e.nTableWrapper),
              c = P.map(e.aoData, function (t) {
                return t.nTr;
              }),
              s =
                ((e.bDestroying = !0),
                R(e, "aoDestroyCallback", "destroy", [e]),
                d || new U(e).columns().visible(!0),
                u.off(".DT").find(":not(tbody *)").off(".DT"),
                P(j).off(".DT-" + e.sInstance),
                a != i.parentNode &&
                  (l.children("thead").detach(), l.append(i)),
                s &&
                  a != s.parentNode &&
                  (l.children("tfoot").detach(), l.append(s)),
                (e.aaSorting = []),
                (e.aaSortingFixed = []),
                ue(e),
                P(c).removeClass(e.asStripeClasses.join(" ")),
                P("th, td", i).removeClass(
                  r.sSortable +
                    " " +
                    r.sSortableAsc +
                    " " +
                    r.sSortableDesc +
                    " " +
                    r.sSortableNone
                ),
                o.children().detach(),
                o.append(c),
                d ? "remove" : "detach"),
              i =
                (l[s](),
                u[s](),
                !d &&
                  t &&
                  (t.insertBefore(a, e.nTableReinsertBefore),
                  l.css("width", e.sDestroyWidth).removeClass(r.sTable),
                  (n = e.asDestroyStripes.length) &&
                    o.children().each(function (t) {
                      P(this).addClass(e.asDestroyStripes[t % n]);
                    })),
                P.inArray(e, w.settings));
            -1 !== i && w.settings.splice(i, 1);
          })
        );
      }),
      P.each(["column", "row", "cell"], function (t, l) {
        e(l + "s().every()", function (o) {
          var i = this.selector.opts,
            s = this;
          return this.iterator(l, function (t, e, n, r, a) {
            o.call(
              s[l](e, "cell" === l ? n : i, "cell" === l ? i : N),
              e,
              n,
              r,
              a
            );
          });
        });
      }),
      e("i18n()", function (t, e, n) {
        var r = this.context[0],
          t = A(t)(r.oLanguage);
        return (
          t === N && (t = e),
          (t =
            n !== N && P.isPlainObject(t)
              ? t[n] !== N
                ? t[n]
                : t._
              : t).replace("%d", n)
        );
      }),
      (w.version = "1.11.5"),
      (w.settings = []),
      (w.models = {}),
      (w.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0,
        return: !1,
      }),
      (w.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1,
      }),
      (w.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null,
      }),
      (w.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (t) {
          return t
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (t) {
          try {
            return JSON.parse(
              (-1 === t.iStateDuration ? sessionStorage : localStorage).getItem(
                "DataTables_" + t.sInstance + "_" + location.pathname
              )
            );
          } catch (t) {
            return {};
          }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (t, e) {
          try {
            (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem(
              "DataTables_" + t.sInstance + "_" + location.pathname,
              JSON.stringify(e)
            );
          } catch (t) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
          oAria: {
            sSortAscending: ": activate to sort column ascending",
            sSortDescending: ": activate to sort column descending",
          },
          oPaginate: {
            sFirst: "First",
            sLast: "Last",
            sNext: "Next",
            sPrevious: "Previous",
          },
          sEmptyTable: "No data available in table",
          sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
          sInfoEmpty: "Showing 0 to 0 of 0 entries",
          sInfoFiltered: "(filtered from _MAX_ total entries)",
          sInfoPostFix: "",
          sDecimal: "",
          sThousands: ",",
          sLengthMenu: "Show _MENU_ entries",
          sLoadingRecords: "Loading...",
          sProcessing: "Processing...",
          sSearch: "Search:",
          sSearchPlaceholder: "",
          sUrl: "",
          sZeroRecords: "No matching records found",
        },
        oSearch: P.extend({}, w.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId",
      }),
      i(w.defaults),
      (w.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null,
      }),
      i(w.defaults.column),
      (w.models.oSettings = {
        oFeatures: {
          bAutoWidth: null,
          bDeferRender: null,
          bFilter: null,
          bInfo: null,
          bLengthChange: null,
          bPaginate: null,
          bProcessing: null,
          bServerSide: null,
          bSort: null,
          bSortMulti: null,
          bSortClasses: null,
          bStateSave: null,
        },
        oScroll: {
          bCollapse: null,
          iBarWidth: 0,
          sX: null,
          sXInner: null,
          sY: null,
        },
        oLanguage: { fnInfoCallback: null },
        oBrowser: {
          bScrollOversize: !1,
          bScrollbarLeft: !1,
          bBounding: !1,
          barWidth: 0,
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        jqXHR: null,
        json: N,
        oAjaxData: N,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
          return "ssp" == B(this)
            ? +this._iRecordsTotal
            : this.aiDisplayMaster.length;
        },
        fnRecordsDisplay: function () {
          return "ssp" == B(this)
            ? +this._iRecordsDisplay
            : this.aiDisplay.length;
        },
        fnDisplayEnd: function () {
          var t = this._iDisplayLength,
            e = this._iDisplayStart,
            n = e + t,
            r = this.aiDisplay.length,
            a = this.oFeatures,
            o = a.bPaginate;
          return a.bServerSide
            ? !1 === o || -1 === t
              ? e + r
              : Math.min(e + t, this._iRecordsDisplay)
            : !o || r < n || -1 === t
            ? r
            : n;
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null,
      }),
      (w.ext = p =
        {
          buttons: {},
          classes: {},
          builder: "-source-",
          errMode: "alert",
          feature: [],
          search: [],
          selector: { cell: [], column: [], row: [] },
          internal: {},
          legacy: { ajax: null },
          pager: {},
          renderer: { pageButton: {}, header: {} },
          order: {},
          type: { detect: [], search: {}, order: {} },
          _unique: 0,
          fnVersionCheck: w.fnVersionCheck,
          iApiIndex: 0,
          oJUIClasses: {},
          sVersion: w.version,
        }),
      P.extend(p, {
        afnFiltering: p.search,
        aTypes: p.type.detect,
        ofnSearch: p.type.search,
        oSort: p.type.order,
        afnSortData: p.order,
        aoFeatures: p.feature,
        oApi: p.internal,
        oStdClasses: p.classes,
        oPagination: p.pager,
      }),
      P.extend(w.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_desc_disabled",
        sSortableDesc: "sorting_asc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: "",
      }),
      w.ext.pager);
  function ke(t, e) {
    var n = [],
      r = Ne.numbers_length,
      a = Math.floor(r / 2);
    return (
      e <= r
        ? (n = d(0, e))
        : t <= a
        ? ((n = d(0, r - 2)).push("ellipsis"), n.push(e - 1))
        : (e - 1 - a <= t
            ? (n = d(e - (r - 2), e)).splice(0, 0, "ellipsis")
            : ((n = d(t - a + 2, t + a - 1)).push("ellipsis"),
              n.push(e - 1),
              n.splice(0, 0, "ellipsis")),
          n.splice(0, 0, 0)),
      (n.DT_el = "span"),
      n
    );
  }
  P.extend(Ne, {
    simple: function (t, e) {
      return ["previous", "next"];
    },
    full: function (t, e) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function (t, e) {
      return [ke(t, e)];
    },
    simple_numbers: function (t, e) {
      return ["previous", ke(t, e), "next"];
    },
    full_numbers: function (t, e) {
      return ["first", "previous", ke(t, e), "next", "last"];
    },
    first_last_numbers: function (t, e) {
      return ["first", ke(t, e), "last"];
    },
    _numbers: ke,
    numbers_length: 7,
  }),
    P.extend(!0, w.ext.renderer, {
      pageButton: {
        _: function (u, t, c, e, d, f) {
          function h(t, e) {
            for (
              var n,
                r,
                a = b.sPageButtonDisabled,
                o = function (t) {
                  Gt(u, t.data.action, !0);
                },
                i = 0,
                s = e.length;
              i < s;
              i++
            )
              if (((n = e[i]), Array.isArray(n))) {
                var l = P("<" + (n.DT_el || "div") + "/>").appendTo(t);
                h(l, n);
              } else {
                switch (((p = null), (g = n), (r = u.iTabIndex), n)) {
                  case "ellipsis":
                    t.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    (p = m.sFirst), 0 === d && ((r = -1), (g += " " + a));
                    break;
                  case "previous":
                    (p = m.sPrevious), 0 === d && ((r = -1), (g += " " + a));
                    break;
                  case "next":
                    (p = m.sNext),
                      (0 !== f && d !== f - 1) || ((r = -1), (g += " " + a));
                    break;
                  case "last":
                    (p = m.sLast),
                      (0 !== f && d !== f - 1) || ((r = -1), (g += " " + a));
                    break;
                  default:
                    (p = u.fnFormatNumber(n + 1)),
                      (g = d === n ? b.sPageButtonActive : "");
                }
                null !== p &&
                  (be(
                    P("<a>", {
                      class: b.sPageButton + " " + g,
                      "aria-controls": u.sTableId,
                      "aria-label": v[n],
                      "data-dt-idx": y,
                      tabindex: r,
                      id:
                        0 === c && "string" == typeof n
                          ? u.sTableId + "_" + n
                          : null,
                    })
                      .html(p)
                      .appendTo(t),
                    { action: n },
                    o
                  ),
                  y++);
              }
          }
          var p,
            g,
            n,
            b = u.oClasses,
            m = u.oLanguage.oPaginate,
            v = u.oLanguage.oAria.paginate || {},
            y = 0;
          try {
            n = P(t).find(S.activeElement).data("dt-idx");
          } catch (t) {}
          h(P(t).empty(), e),
            n !== N &&
              P(t)
                .find("[data-dt-idx=" + n + "]")
                .trigger("focus");
        },
      },
    }),
    P.extend(w.ext.type.detect, [
      function (t, e) {
        e = e.oLanguage.sDecimal;
        return s(t, e) ? "num" + e : null;
      },
      function (t, e) {
        if (t && !(t instanceof Date) && !q.test(t)) return null;
        var n = Date.parse(t);
        return (null !== n && !isNaN(n)) || h(t) ? "date" : null;
      },
      function (t, e) {
        e = e.oLanguage.sDecimal;
        return s(t, e, !0) ? "num-fmt" + e : null;
      },
      function (t, e) {
        e = e.oLanguage.sDecimal;
        return n(t, e) ? "html-num" + e : null;
      },
      function (t, e) {
        e = e.oLanguage.sDecimal;
        return n(t, e, !0) ? "html-num-fmt" + e : null;
      },
      function (t, e) {
        return h(t) || ("string" == typeof t && -1 !== t.indexOf("<"))
          ? "html"
          : null;
      },
    ]),
    P.extend(w.ext.type.search, {
      html: function (t) {
        return h(t)
          ? t
          : "string" == typeof t
          ? t.replace(c, " ").replace(V, "")
          : "";
      },
      string: function (t) {
        return !h(t) && "string" == typeof t ? t.replace(c, " ") : t;
      },
    });
  function He(t, e, n, r) {
    return 0 === t || (t && "-" !== t)
      ? ((t = e ? J(t, e) : t).replace &&
          (n && (t = t.replace(n, "")), r && (t = t.replace(r, ""))),
        +t)
      : -1 / 0;
  }
  function Oe(n) {
    P.each(
      {
        num: function (t) {
          return He(t, n);
        },
        "num-fmt": function (t) {
          return He(t, n, z);
        },
        "html-num": function (t) {
          return He(t, n, V);
        },
        "html-num-fmt": function (t) {
          return He(t, n, V, z);
        },
      },
      function (t, e) {
        (p.type.order[t + n + "-pre"] = e),
          t.match(/^html\-/) && (p.type.search[t + n] = p.type.search.html);
      }
    );
  }
  P.extend(p.type.order, {
    "date-pre": function (t) {
      t = Date.parse(t);
      return isNaN(t) ? -1 / 0 : t;
    },
    "html-pre": function (t) {
      return h(t)
        ? ""
        : t.replace
        ? t.replace(/<.*?>/g, "").toLowerCase()
        : t + "";
    },
    "string-pre": function (t) {
      return h(t)
        ? ""
        : "string" == typeof t
        ? t.toLowerCase()
        : t.toString
        ? t.toString()
        : "";
    },
    "string-asc": function (t, e) {
      return t < e ? -1 : e < t ? 1 : 0;
    },
    "string-desc": function (t, e) {
      return t < e ? 1 : e < t ? -1 : 0;
    },
  }),
    Oe(""),
    P.extend(!0, w.ext.renderer, {
      header: {
        _: function (a, o, i, s) {
          P(a.nTable).on("order.dt.DT", function (t, e, n, r) {
            a === e &&
              ((e = i.idx),
              o
                .removeClass(s.sSortAsc + " " + s.sSortDesc)
                .addClass(
                  "asc" == r[e]
                    ? s.sSortAsc
                    : "desc" == r[e]
                    ? s.sSortDesc
                    : i.sSortingClass
                ));
          });
        },
        jqueryui: function (a, o, i, s) {
          P("<div/>")
            .addClass(s.sSortJUIWrapper)
            .append(o.contents())
            .append(
              P("<span/>").addClass(s.sSortIcon + " " + i.sSortingClassJUI)
            )
            .appendTo(o),
            P(a.nTable).on("order.dt.DT", function (t, e, n, r) {
              a === e &&
                ((e = i.idx),
                o
                  .removeClass(s.sSortAsc + " " + s.sSortDesc)
                  .addClass(
                    "asc" == r[e]
                      ? s.sSortAsc
                      : "desc" == r[e]
                      ? s.sSortDesc
                      : i.sSortingClass
                  ),
                o
                  .find("span." + s.sSortIcon)
                  .removeClass(
                    s.sSortJUIAsc +
                      " " +
                      s.sSortJUIDesc +
                      " " +
                      s.sSortJUI +
                      " " +
                      s.sSortJUIAscAllowed +
                      " " +
                      s.sSortJUIDescAllowed
                  )
                  .addClass(
                    "asc" == r[e]
                      ? s.sSortJUIAsc
                      : "desc" == r[e]
                      ? s.sSortJUIDesc
                      : i.sSortingClassJUI
                  ));
            });
        },
      },
    });
  function We(t) {
    return "string" == typeof (t = Array.isArray(t) ? t.join(",") : t)
      ? t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
      : t;
  }
  function Me(e) {
    return function () {
      var t = [pe(this[w.ext.iApiIndex])].concat(
        Array.prototype.slice.call(arguments)
      );
      return w.ext.internal[e].apply(this, t);
    };
  }
  return (
    (w.render = {
      number: function (r, a, o, i, s) {
        return {
          display: function (t) {
            if ("number" != typeof t && "string" != typeof t) return t;
            var e = t < 0 ? "-" : "",
              n = parseFloat(t);
            if (isNaN(n)) return We(t);
            (n = n.toFixed(o)), (t = Math.abs(n));
            (n = parseInt(t, 10)),
              (t = o ? a + (t - n).toFixed(o).substring(2) : "");
            return (
              (e = 0 === n && 0 === parseFloat(t) ? "" : e) +
              (i || "") +
              n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r) +
              t +
              (s || "")
            );
          },
        };
      },
      text: function () {
        return { display: We, filter: We };
      },
    }),
    P.extend(w.ext.internal, {
      _fnExternApiFunc: Me,
      _fnBuildAjax: Ct,
      _fnAjaxUpdate: Tt,
      _fnAjaxParameters: xt,
      _fnAjaxUpdateDraw: At,
      _fnAjaxDataSrc: It,
      _fnAddColumn: nt,
      _fnColumnOptions: rt,
      _fnAdjustColumnSizing: H,
      _fnVisibleToColumnIndex: O,
      _fnColumnIndexToVisible: at,
      _fnVisbleColumns: T,
      _fnGetColumns: ot,
      _fnColumnTypes: it,
      _fnApplyColumnDefs: st,
      _fnHungarianMap: i,
      _fnCamelToHungarian: C,
      _fnLanguageCompat: Z,
      _fnBrowserDetect: tt,
      _fnAddData: x,
      _fnAddTr: lt,
      _fnNodeToDataIndex: function (t, e) {
        return e._DT_RowIndex !== N ? e._DT_RowIndex : null;
      },
      _fnNodeToColumnIndex: function (t, e, n) {
        return P.inArray(n, t.aoData[e].anCells);
      },
      _fnGetCellData: v,
      _fnSetCellData: ut,
      _fnSplitObjNotation: dt,
      _fnGetObjectDataFn: A,
      _fnSetObjectDataFn: b,
      _fnGetDataMaster: ft,
      _fnClearTable: ht,
      _fnDeleteIndex: pt,
      _fnInvalidate: gt,
      _fnGetRowElements: bt,
      _fnCreateTr: mt,
      _fnBuildHead: yt,
      _fnDrawHead: St,
      _fnDraw: y,
      _fnReDraw: u,
      _fnAddOptionsHtml: Dt,
      _fnDetectHeader: _t,
      _fnGetUniqueThs: wt,
      _fnFeatureHtmlFilter: Ft,
      _fnFilterComplete: Lt,
      _fnFilterCustom: Rt,
      _fnFilterColumn: Pt,
      _fnFilter: jt,
      _fnFilterCreateSearch: Nt,
      _fnEscapeRegex: kt,
      _fnFilterData: Wt,
      _fnFeatureHtmlInfo: Bt,
      _fnUpdateInfo: Ut,
      _fnInfoMacros: Vt,
      _fnInitialise: qt,
      _fnInitComplete: Xt,
      _fnLengthChange: zt,
      _fnFeatureHtmlLength: Jt,
      _fnFeatureHtmlPaginate: $t,
      _fnPageChange: Gt,
      _fnFeatureHtmlProcessing: Yt,
      _fnProcessingDisplay: D,
      _fnFeatureHtmlTable: Zt,
      _fnScrollDraw: Qt,
      _fnApplyToChildren: W,
      _fnCalculateColumnWidths: te,
      _fnThrottle: ee,
      _fnConvertToWidth: ne,
      _fnGetWidestNode: re,
      _fnGetMaxLenString: ae,
      _fnStringToCss: M,
      _fnSortFlatten: I,
      _fnSort: oe,
      _fnSortAria: ie,
      _fnSortListener: se,
      _fnSortAttachListener: le,
      _fnSortingClasses: ue,
      _fnSortData: ce,
      _fnSaveState: de,
      _fnLoadState: fe,
      _fnImplementState: he,
      _fnSettingsFromNode: pe,
      _fnLog: E,
      _fnMap: F,
      _fnBindAction: be,
      _fnCallbackReg: L,
      _fnCallbackFire: R,
      _fnLengthOverflow: me,
      _fnRenderer: ve,
      _fnDataSource: B,
      _fnRowAttributes: vt,
      _fnExtend: ge,
      _fnCalculateEnd: function () {},
    }),
    (((P.fn.dataTable = w).$ = P).fn.dataTableSettings = w.settings),
    (P.fn.dataTableExt = w.ext),
    (P.fn.DataTable = function (t) {
      return P(this).dataTable(t).api();
    }),
    P.each(w, function (t, e) {
      P.fn.DataTable[t] = e;
    }),
    w
  );
}),
  (function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (t) {
          return n(t, window, document);
        })
      : "object" == typeof exports
      ? (module.exports = function (t, e) {
          return (
            (t = t || window),
            (e && e.fn.dataTable) || (e = require("datatables.net")(t, e).$),
            n(e, 0, t.document)
          );
        })
      : n(jQuery, window, document);
  })(function (y, t, r, a) {
    "use strict";
    var o = y.fn.dataTable;
    return (
      y.extend(!0, o.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap",
      }),
      y.extend(o.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap5",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "form-select form-select-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item",
      }),
      (o.ext.renderer.pageButton.bootstrap = function (s, t, l, e, u, c) {
        function d(t, e) {
          for (
            var n,
              r,
              a = function (t) {
                t.preventDefault(),
                  y(t.currentTarget).hasClass("disabled") ||
                    p.page() == t.data.action ||
                    p.page(t.data.action).draw("page");
              },
              o = 0,
              i = e.length;
            o < i;
            o++
          )
            if (((r = e[o]), Array.isArray(r))) d(t, r);
            else {
              switch (((h = f = ""), r)) {
                case "ellipsis":
                  (f = "&#x2026;"), (h = "disabled");
                  break;
                case "first":
                  (f = b.sFirst), (h = r + (0 < u ? "" : " disabled"));
                  break;
                case "previous":
                  (f = b.sPrevious), (h = r + (0 < u ? "" : " disabled"));
                  break;
                case "next":
                  (f = b.sNext), (h = r + (u < c - 1 ? "" : " disabled"));
                  break;
                case "last":
                  (f = b.sLast), (h = r + (u < c - 1 ? "" : " disabled"));
                  break;
                default:
                  (f = r + 1), (h = u === r ? "active" : "");
              }
              f &&
                ((n = y("<li>", {
                  class: g.sPageButton + " " + h,
                  id:
                    0 === l && "string" == typeof r
                      ? s.sTableId + "_" + r
                      : null,
                })
                  .append(
                    y("<a>", {
                      href: "#",
                      "aria-controls": s.sTableId,
                      "aria-label": m[r],
                      "data-dt-idx": v,
                      tabindex: s.iTabIndex,
                      class: "page-link",
                    }).html(f)
                  )
                  .appendTo(t)),
                s.oApi._fnBindAction(n, { action: r }, a),
                v++);
            }
        }
        var f,
          h,
          n,
          p = new o.Api(s),
          g = s.oClasses,
          b = s.oLanguage.oPaginate,
          m = s.oLanguage.oAria.paginate || {},
          v = 0;
        try {
          n = y(t).find(r.activeElement).data("dt-idx");
        } catch (t) {}
        d(y(t).empty().html('<ul class="pagination"/>').children("ul"), e),
          n !== a &&
            y(t)
              .find("[data-dt-idx=" + n + "]")
              .trigger("focus");
      }),
      o
    );
  }),
  (function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (t) {
          return n(t, window, document);
        })
      : "object" == typeof exports
      ? (module.exports = function (t, e) {
          return (
            (t = t || window),
            (e && e.fn.dataTable) || (e = require("datatables.net")(t, e).$),
            n(e, t, t.document)
          );
        })
      : n(jQuery, window, document);
  })(function (p, g, i, f) {
    "use strict";
    function r(t, e) {
      if (!o.versionCheck || !o.versionCheck("1.10.10"))
        throw "DataTables Responsive requires DataTables 1.10.10 or newer";
      (this.s = { dt: new o.Api(t), columns: [], current: [] }),
        this.s.dt.settings()[0].responsive ||
          (e && "string" == typeof e.details
            ? (e.details = { type: e.details })
            : e && !1 === e.details
            ? (e.details = { type: !1 })
            : e && !0 === e.details && (e.details = { type: "inline" }),
          (this.c = p.extend(!0, {}, r.defaults, o.defaults.responsive, e)),
          (t.responsive = this)._constructor());
    }
    var o = p.fn.dataTable,
      d =
        (p.extend(r.prototype, {
          _constructor: function () {
            var r = this,
              a = this.s.dt,
              t = a.settings()[0],
              e = p(g).innerWidth(),
              t =
                ((a.settings()[0]._responsive = this),
                p(g).on(
                  "resize.dtr orientationchange.dtr",
                  o.util.throttle(function () {
                    var t = p(g).innerWidth();
                    t !== e && (r._resize(), (e = t));
                  })
                ),
                t.oApi._fnCallbackReg(
                  t,
                  "aoRowCreatedCallback",
                  function (t, e, n) {
                    -1 !== p.inArray(!1, r.s.current) &&
                      p(">td, >th", t).each(function (t) {
                        t = a.column.index("toData", t);
                        !1 === r.s.current[t] && p(this).css("display", "none");
                      });
                  }
                ),
                a.on("destroy.dtr", function () {
                  a.off(".dtr"),
                    p(a.table().body()).off(".dtr"),
                    p(g).off("resize.dtr orientationchange.dtr"),
                    a
                      .cells(".dtr-control")
                      .nodes()
                      .to$()
                      .removeClass("dtr-control"),
                    p.each(r.s.current, function (t, e) {
                      !1 === e && r._setColumnVis(t, !0);
                    });
                }),
                this.c.breakpoints.sort(function (t, e) {
                  return t.width < e.width ? 1 : t.width > e.width ? -1 : 0;
                }),
                this._classLogic(),
                this._resizeAuto(),
                this.c.details);
            !1 !== t.type &&
              (r._detailsInit(),
              a.on("column-visibility.dtr", function () {
                r._timer && clearTimeout(r._timer),
                  (r._timer = setTimeout(function () {
                    (r._timer = null),
                      r._classLogic(),
                      r._resizeAuto(),
                      r._resize(!0),
                      r._redrawChildren();
                  }, 100));
              }),
              a.on("draw.dtr", function () {
                r._redrawChildren();
              }),
              p(a.table().node()).addClass("dtr-" + t.type)),
              a.on("column-reorder.dtr", function (t, e, n) {
                r._classLogic(), r._resizeAuto(), r._resize(!0);
              }),
              a.on("column-sizing.dtr", function () {
                r._resizeAuto(), r._resize();
              }),
              a.on("preXhr.dtr", function () {
                var t = [];
                a.rows().every(function () {
                  this.child.isShown() && t.push(this.id(!0));
                }),
                  a.one("draw.dtr", function () {
                    r._resizeAuto(),
                      r._resize(),
                      a.rows(t).every(function () {
                        r._detailsDisplay(this, !1);
                      });
                  });
              }),
              a
                .on("draw.dtr", function () {
                  r._controlClass();
                })
                .on("init.dtr", function (t, e, n) {
                  "dt" === t.namespace &&
                    (r._resizeAuto(),
                    r._resize(),
                    p.inArray(!1, r.s.current) && a.columns.adjust());
                }),
              this._resize();
          },
          _columnsVisiblity: function (n) {
            for (
              var r = this.s.dt,
                t = this.s.columns,
                e = t
                  .map(function (t, e) {
                    return { columnIdx: e, priority: t.priority };
                  })
                  .sort(function (t, e) {
                    return t.priority !== e.priority
                      ? t.priority - e.priority
                      : t.columnIdx - e.columnIdx;
                  }),
                a = p.map(t, function (t, e) {
                  return !1 === r.column(e).visible()
                    ? "not-visible"
                    : (!t.auto || null !== t.minWidth) &&
                        (!0 === t.auto
                          ? "-"
                          : -1 !== p.inArray(n, t.includeIn));
                }),
                o = 0,
                i = 0,
                s = a.length;
              i < s;
              i++
            )
              !0 === a[i] && (o += t[i].minWidth);
            var l = r.settings()[0].oScroll,
              l = l.sY || l.sX ? l.iBarWidth : 0,
              u = r.table().container().offsetWidth - l - o;
            for (i = 0, s = a.length; i < s; i++)
              t[i].control && (u -= t[i].minWidth);
            var c = !1;
            for (i = 0, s = e.length; i < s; i++) {
              var d = e[i].columnIdx;
              "-" === a[d] &&
                !t[d].control &&
                t[d].minWidth &&
                (c || u - t[d].minWidth < 0 ? (a[d] = !(c = !0)) : (a[d] = !0),
                (u -= t[d].minWidth));
            }
            var f = !1;
            for (i = 0, s = t.length; i < s; i++)
              if (!t[i].control && !t[i].never && !1 === a[i]) {
                f = !0;
                break;
              }
            for (i = 0, s = t.length; i < s; i++)
              t[i].control && (a[i] = f), "not-visible" === a[i] && (a[i] = !1);
            return -1 === p.inArray(!0, a) && (a[0] = !0), a;
          },
          _classLogic: function () {
            function s(t, e, n, r) {
              var a, o, i;
              if (n) {
                if ("max-" === n)
                  for (a = l._find(e).width, o = 0, i = u.length; o < i; o++)
                    u[o].width <= a && d(t, u[o].name);
                else if ("min-" === n)
                  for (a = l._find(e).width, o = 0, i = u.length; o < i; o++)
                    u[o].width >= a && d(t, u[o].name);
                else if ("not-" === n)
                  for (o = 0, i = u.length; o < i; o++)
                    -1 === u[o].name.indexOf(r) && d(t, u[o].name);
              } else c[t].includeIn.push(e);
            }
            var l = this,
              u = this.c.breakpoints,
              r = this.s.dt,
              c = r
                .columns()
                .eq(0)
                .map(function (t) {
                  var e = this.column(t),
                    n = e.header().className,
                    t = r.settings()[0].aoColumns[t].responsivePriority,
                    e = e.header().getAttribute("data-priority");
                  return (
                    t === f && (t = e === f || null === e ? 1e4 : +e),
                    {
                      className: n,
                      includeIn: [],
                      auto: !1,
                      control: !1,
                      never: !!n.match(/\bnever\b/),
                      priority: t,
                    }
                  );
                }),
              d = function (t, e) {
                t = c[t].includeIn;
                -1 === p.inArray(e, t) && t.push(e);
              };
            c.each(function (t, a) {
              for (
                var e = t.className.split(" "), o = !1, n = 0, r = e.length;
                n < r;
                n++
              ) {
                var i = e[n].trim();
                if ("all" === i)
                  return (
                    (o = !0),
                    void (t.includeIn = p.map(u, function (t) {
                      return t.name;
                    }))
                  );
                if ("none" === i || t.never) return void (o = !0);
                if ("control" === i || "dtr-control" === i)
                  return (o = !0), void (t.control = !0);
                p.each(u, function (t, e) {
                  var n = e.name.split("-"),
                    r = new RegExp(
                      "(min\\-|max\\-|not\\-)?(" + n[0] + ")(\\-[_a-zA-Z0-9])?"
                    ),
                    r = i.match(r);
                  r &&
                    ((o = !0),
                    r[2] === n[0] && r[3] === "-" + n[1]
                      ? s(a, e.name, r[1], r[2] + r[3])
                      : r[2] !== n[0] || r[3] || s(a, e.name, r[1], r[2]));
                });
              }
              o || (t.auto = !0);
            }),
              (this.s.columns = c);
          },
          _controlClass: function () {
            var t, e, n;
            "inline" === this.c.details.type &&
              ((t = this.s.dt),
              (e = this.s.current),
              (n = p.inArray(!0, e)),
              t
                .cells(
                  null,
                  function (t) {
                    return t !== n;
                  },
                  { page: "current" }
                )
                .nodes()
                .to$()
                .filter(".dtr-control")
                .removeClass("dtr-control"),
              t
                .cells(null, n, { page: "current" })
                .nodes()
                .to$()
                .addClass("dtr-control"));
          },
          _detailsDisplay: function (t, e) {
            var n,
              r = this,
              a = this.s.dt,
              o = this.c.details;
            !o ||
              !1 === o.type ||
              (!0 !==
                (n = o.display(t, e, function () {
                  return o.renderer(a, t[0], r._detailsObj(t[0]));
                })) &&
                !1 !== n) ||
              p(a.table().node()).triggerHandler("responsive-display.dt", [
                a,
                t,
                n,
                e,
              ]);
          },
          _detailsInit: function () {
            var n = this,
              r = this.s.dt,
              t = this.c.details,
              a =
                ("inline" === t.type &&
                  (t.target = "td.dtr-control, th.dtr-control"),
                r.on("draw.dtr", function () {
                  n._tabIndexes();
                }),
                n._tabIndexes(),
                p(r.table().body()).on("keyup.dtr", "td, th", function (t) {
                  13 === t.keyCode &&
                    p(this).data("dtr-keyboard") &&
                    p(this).click();
                }),
                t.target),
              t = "string" == typeof a ? a : "td, th";
            (a === f && null === a) ||
              p(r.table().body()).on(
                "click.dtr mousedown.dtr mouseup.dtr",
                t,
                function (t) {
                  if (
                    p(r.table().node()).hasClass("collapsed") &&
                    -1 !==
                      p.inArray(
                        p(this).closest("tr").get(0),
                        r.rows().nodes().toArray()
                      )
                  ) {
                    if ("number" == typeof a) {
                      var e = a < 0 ? r.columns().eq(0).length + a : a;
                      if (r.cell(this).index().column !== e) return;
                    }
                    e = r.row(p(this).closest("tr"));
                    "click" === t.type
                      ? n._detailsDisplay(e, !1)
                      : "mousedown" === t.type
                      ? p(this).css("outline", "none")
                      : "mouseup" === t.type &&
                        p(this).trigger("blur").css("outline", "");
                  }
                }
              );
          },
          _detailsObj: function (n) {
            var r = this,
              a = this.s.dt;
            return p.map(this.s.columns, function (t, e) {
              if (!t.never && !t.control)
                return (
                  (t = a.settings()[0].aoColumns[e]),
                  {
                    className: t.sClass,
                    columnIndex: e,
                    data: a.cell(n, e).render(r.c.orthogonal),
                    hidden: a.column(e).visible() && !r.s.current[e],
                    rowIndex: n,
                    title:
                      null !== t.sTitle
                        ? t.sTitle
                        : p(a.column(e).header()).text(),
                  }
                );
            });
          },
          _find: function (t) {
            for (var e = this.c.breakpoints, n = 0, r = e.length; n < r; n++)
              if (e[n].name === t) return e[n];
          },
          _redrawChildren: function () {
            var n = this,
              r = this.s.dt;
            r.rows({ page: "current" }).iterator("row", function (t, e) {
              r.row(e);
              n._detailsDisplay(r.row(e), !0);
            });
          },
          _resize: function (n) {
            for (
              var t,
                r = this,
                e = this.s.dt,
                a = p(g).innerWidth(),
                o = this.c.breakpoints,
                i = o[0].name,
                s = this.s.columns,
                l = this.s.current.slice(),
                u = o.length - 1;
              0 <= u;
              u--
            )
              if (a <= o[u].width) {
                i = o[u].name;
                break;
              }
            var c = this._columnsVisiblity(i),
              d = ((this.s.current = c), !1);
            for (u = 0, t = s.length; u < t; u++)
              if (
                !1 === c[u] &&
                !s[u].never &&
                !s[u].control &&
                !1 == !e.column(u).visible()
              ) {
                d = !0;
                break;
              }
            p(e.table().node()).toggleClass("collapsed", d);
            var f = !1,
              h = 0;
            e
              .columns()
              .eq(0)
              .each(function (t, e) {
                !0 === c[e] && h++,
                  (!n && c[e] === l[e]) || ((f = !0), r._setColumnVis(t, c[e]));
              }),
              f &&
                (this._redrawChildren(),
                p(e.table().node()).trigger("responsive-resize.dt", [
                  e,
                  this.s.current,
                ]),
                0 === e.page.info().recordsDisplay &&
                  p("td", e.table().body()).eq(0).attr("colspan", h)),
              r._controlClass();
          },
          _resizeAuto: function () {
            var t,
              e,
              n,
              r,
              a,
              o = this.s.dt,
              i = this.s.columns;
            this.c.auto &&
              -1 !==
                p.inArray(
                  !0,
                  p.map(i, function (t) {
                    return t.auto;
                  })
                ) &&
              (p.isEmptyObject(d) ||
                p.each(d, function (t) {
                  t = t.split("-");
                  s(o, +t[0], +t[1]);
                }),
              o.table().node().offsetWidth,
              o.columns,
              (t = o.table().node().cloneNode(!1)),
              (e = p(o.table().header().cloneNode(!1)).appendTo(t)),
              (r = p(o.table().body()).clone(!1, !1).empty().appendTo(t)),
              (t.style.width = "auto"),
              (n = o
                .columns()
                .header()
                .filter(function (t) {
                  return o.column(t).visible();
                })
                .to$()
                .clone(!1)
                .css("display", "table-cell")
                .css("width", "auto")
                .css("min-width", 0)),
              p(r)
                .append(p(o.rows({ page: "current" }).nodes()).clone(!1))
                .find("th, td")
                .css("display", ""),
              (r = o.table().footer()) &&
                ((r = p(r.cloneNode(!1)).appendTo(t)),
                (a = o
                  .columns()
                  .footer()
                  .filter(function (t) {
                    return o.column(t).visible();
                  })
                  .to$()
                  .clone(!1)
                  .css("display", "table-cell")),
                p("<tr/>").append(a).appendTo(r)),
              p("<tr/>").append(n).appendTo(e),
              "inline" === this.c.details.type &&
                p(t).addClass("dtr-inline collapsed"),
              p(t).find("[name]").removeAttr("name"),
              p(t).css("position", "relative"),
              (a = p("<div/>")
                .css({ width: 1, height: 1, overflow: "hidden", clear: "both" })
                .append(t)).insertBefore(o.table().node()),
              n.each(function (t) {
                t = o.column.index("fromVisible", t);
                i[t].minWidth = this.offsetWidth || 0;
              }),
              a.remove());
          },
          _responsiveOnlyHidden: function () {
            var n = this.s.dt;
            return p.map(this.s.current, function (t, e) {
              return !1 === n.column(e).visible() || t;
            });
          },
          _setColumnVis: function (t, e) {
            var n = this.s.dt,
              e = e ? "" : "none";
            p(n.column(t).header()).css("display", e),
              p(n.column(t).footer()).css("display", e),
              n.column(t).nodes().to$().css("display", e),
              p.isEmptyObject(d) ||
                n
                  .cells(null, t)
                  .indexes()
                  .each(function (t) {
                    s(n, t.row, t.column);
                  });
          },
          _tabIndexes: function () {
            var t = this.s.dt,
              e = t.cells({ page: "current" }).nodes().to$(),
              n = t.settings()[0],
              r = this.c.details.target;
            e.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"),
              ("number" == typeof r
                ? t.cells(null, r, { page: "current" }).nodes().to$()
                : p(
                    (r =
                      "td:first-child, th:first-child" === r
                        ? ">td:first-child, >th:first-child"
                        : r),
                    t.rows({ page: "current" }).nodes()
                  )
              )
                .attr("tabIndex", n.iTabIndex)
                .data("dtr-keyboard", 1);
          },
        }),
        {});
    function s(t, e, n) {
      var r = e + "-" + n;
      if (d[r]) {
        for (
          var a = t.cell(e, n).node(),
            o = d[r][0].parentNode.childNodes,
            i = [],
            s = 0,
            l = o.length;
          s < l;
          s++
        )
          i.push(o[s]);
        for (var u = 0, c = i.length; u < c; u++) a.appendChild(i[u]);
        d[r] = f;
      }
    }
    r.defaults = {
      breakpoints: (r.breakpoints = [
        { name: "desktop", width: 1 / 0 },
        { name: "tablet-l", width: 1024 },
        { name: "tablet-p", width: 768 },
        { name: "mobile-l", width: 480 },
        { name: "mobile-p", width: 320 },
      ]),
      auto: !0,
      details: {
        display: (r.display = {
          childRow: function (t, e, n) {
            return e
              ? p(t.node()).hasClass("parent")
                ? (t.child(n(), "child").show(), !0)
                : void 0
              : t.child.isShown()
              ? (t.child(!1), p(t.node()).removeClass("parent"), !1)
              : (t.child(n(), "child").show(),
                p(t.node()).addClass("parent"),
                !0);
          },
          childRowImmediate: function (t, e, n) {
            return (!e && t.child.isShown()) || !t.responsive.hasHidden()
              ? (t.child(!1), p(t.node()).removeClass("parent"), !1)
              : (t.child(n(), "child").show(),
                p(t.node()).addClass("parent"),
                !0);
          },
          modal: function (o) {
            return function (t, e, n) {
              var r, a;
              e
                ? p("div.dtr-modal-content").empty().append(n())
                : ((r = function () {
                    a.remove(), p(i).off("keypress.dtr");
                  }),
                  (a = p('<div class="dtr-modal"/>')
                    .append(
                      p('<div class="dtr-modal-display"/>')
                        .append(
                          p('<div class="dtr-modal-content"/>').append(n())
                        )
                        .append(
                          p('<div class="dtr-modal-close">&times;</div>').click(
                            function () {
                              r();
                            }
                          )
                        )
                    )
                    .append(
                      p('<div class="dtr-modal-background"/>').click(
                        function () {
                          r();
                        }
                      )
                    )
                    .appendTo("body")),
                  p(i).on("keyup.dtr", function (t) {
                    27 === t.keyCode && (t.stopPropagation(), r());
                  })),
                o &&
                  o.header &&
                  p("div.dtr-modal-content").prepend(
                    "<h2>" + o.header(t) + "</h2>"
                  );
            };
          },
        }).childRow,
        renderer: (r.renderer = {
          listHiddenNodes: function () {
            return function (r, t, e) {
              var a = p('<ul data-dtr-index="' + t + '" class="dtr-details"/>'),
                o = !1;
              p.each(e, function (t, e) {
                var n;
                e.hidden &&
                  ((n = e.className ? 'class="' + e.className + '"' : ""),
                  p(
                    "<li " +
                      n +
                      ' data-dtr-index="' +
                      e.columnIndex +
                      '" data-dt-row="' +
                      e.rowIndex +
                      '" data-dt-column="' +
                      e.columnIndex +
                      '"><span class="dtr-title">' +
                      e.title +
                      "</span> </li>"
                  )
                    .append(
                      p('<span class="dtr-data"/>').append(
                        (function (t, e, n) {
                          var r = e + "-" + n;
                          if (d[r]) return d[r];
                          for (
                            var a = [],
                              o = t.cell(e, n).node().childNodes,
                              i = 0,
                              s = o.length;
                            i < s;
                            i++
                          )
                            a.push(o[i]);
                          return (d[r] = a);
                        })(r, e.rowIndex, e.columnIndex)
                      )
                    )
                    .appendTo(a),
                  (o = !0));
              });
              return !!o && a;
            };
          },
          listHidden: function () {
            return function (t, e, n) {
              n = p
                .map(n, function (t) {
                  var e = t.className ? 'class="' + t.className + '"' : "";
                  return t.hidden
                    ? "<li " +
                        e +
                        ' data-dtr-index="' +
                        t.columnIndex +
                        '" data-dt-row="' +
                        t.rowIndex +
                        '" data-dt-column="' +
                        t.columnIndex +
                        '"><span class="dtr-title">' +
                        t.title +
                        '</span> <span class="dtr-data">' +
                        t.data +
                        "</span></li>"
                    : "";
                })
                .join("");
              return (
                !!n &&
                p(
                  '<ul data-dtr-index="' + e + '" class="dtr-details"/>'
                ).append(n)
              );
            };
          },
          tableAll: function (r) {
            return (
              (r = p.extend({ tableClass: "" }, r)),
              function (t, e, n) {
                n = p
                  .map(n, function (t) {
                    return (
                      "<tr " +
                      (t.className ? 'class="' + t.className + '"' : "") +
                      ' data-dt-row="' +
                      t.rowIndex +
                      '" data-dt-column="' +
                      t.columnIndex +
                      '"><td>' +
                      t.title +
                      ":</td> <td>" +
                      t.data +
                      "</td></tr>"
                    );
                  })
                  .join("");
                return p(
                  '<table class="' +
                    r.tableClass +
                    ' dtr-details" width="100%"/>'
                ).append(n);
              }
            );
          },
        }).listHidden(),
        target: 0,
        type: "inline",
      },
      orthogonal: "display",
    };
    var t = p.fn.dataTable.Api;
    return (
      t.register("responsive()", function () {
        return this;
      }),
      t.register("responsive.index()", function (t) {
        return {
          column: (t = p(t)).data("dtr-index"),
          row: t.parent().data("dtr-index"),
        };
      }),
      t.register("responsive.rebuild()", function () {
        return this.iterator("table", function (t) {
          t._responsive && t._responsive._classLogic();
        });
      }),
      t.register("responsive.recalc()", function () {
        return this.iterator("table", function (t) {
          t._responsive &&
            (t._responsive._resizeAuto(), t._responsive._resize());
        });
      }),
      t.register("responsive.hasHidden()", function () {
        var t = this.context[0];
        return (
          !!t._responsive &&
          -1 !== p.inArray(!1, t._responsive._responsiveOnlyHidden())
        );
      }),
      t.registerPlural(
        "columns().responsiveHidden()",
        "column().responsiveHidden()",
        function () {
          return this.iterator(
            "column",
            function (t, e) {
              return (
                !!t._responsive && t._responsive._responsiveOnlyHidden()[e]
              );
            },
            1
          );
        }
      ),
      (r.version = "2.2.9"),
      (p.fn.dataTable.Responsive = r),
      (p.fn.DataTable.Responsive = r),
      p(i).on("preInit.dt.dtr", function (t, e, n) {
        "dt" === t.namespace &&
          (p(e.nTable).hasClass("responsive") ||
            p(e.nTable).hasClass("dt-responsive") ||
            e.oInit.responsive ||
            o.defaults.responsive) &&
          !1 !== (t = e.oInit.responsive) &&
          new r(e, p.isPlainObject(t) ? t : {});
      }),
      r
    );
  });
