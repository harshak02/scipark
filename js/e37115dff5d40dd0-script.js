window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb = window.wsb || {};
window.wsb["Theme9"] =
  window.wsb["Theme9"] ||
  window
    .radpack("@widget/LAYOUT/bs-layout9-Theme-publish-Theme")
    .then(function (t) {
      return new t.default();
    });
(window.onMembershipLogout = function () {
  window.location.assign("/m/logout");
}),
  (window.initMembership = function (e, i) {
    var n = {
        membershipSignOut: e + "-membership-sign-out",
        container: e + (i ? "-navId-mobile" : "-utility-menu"),
        signedOut: i
          ? ".membership-links-logged-out"
          : ".membership-icon-logged-out",
        signedIn: i
          ? ".membership-links-logged-in"
          : " .membership-icon-logged-in",
        signedInHeaderBlock: ".membership-header-logged-in",
      },
      o = document.getElementById(n.container),
      t = document.getElementById(n.membershipSignOut);
    if (!o || !t) return setTimeout(() => window.initMembership(e, i), 500);
    t.onclick = window.onMembershipLogout;
    for (
      var s = o.querySelector(n.signedOut),
        l = o.querySelector(n.signedIn),
        r = i && o.querySelector(n.signedInHeaderBlock),
        d = void 0,
        m = document.cookie.split(";"),
        a = 0;
      a < m.length;
      a++
    ) {
      for (var g = m[a]; " " === g.charAt(0); ) g = g.substring(1, g.length);
      if (0 === g.indexOf("info_c2=")) {
        var c = g.substring("info_c2=".length, g.length);
        d = c && JSON.parse(decodeURIComponent(c));
      }
    }
    var p = d && d.contactEmail;
    if (d) {
      (s.style.display = "none"), (l.style.display = "block");
      var u = o.querySelector("#" + e + "-membership-header");
      if (i) {
        var h = d && d.nameFirst,
          y = d && d.nameLast;
        (r.style.display = "block"),
          h && y && (u.textContent = [h, y].join(" "));
      }
      var b = o.querySelector("#" + e + "-membership-email");
      b &&
        ((b.textContent = p),
        (b.style["text-overflow"] = "ellipsis"),
        (b.style.overflow = "hidden"),
        (b.style["white-space"] = "nowrap"),
        (u.style["font-weight"] = "bold"));
    } else
      i && (r.style.display = "none"),
        (l.style.display = "none"),
        (s.style.display = "block");
  });
window.wsb["context-bs-1"] = JSON.parse(
  '{"env":"production","renderMode":"PUBLISH","fonts":["righteous","default",""],"colors":["#fdd27b"],"locale":"en-IN","language":"en","resellerId":1,"internalLinks":{"ba2b5902-cf30-4636-b144-c883a84609d8":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":null,"routePath":"/services"},"949404a6-8771-47e3-bfa9-63ff8d9c1427":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":"96f546ad-909c-443f-8e33-f9302e6057eb","routePath":"/services"},"809595b8-9bf8-4763-8973-ccf6fe132ecb":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":null,"routePath":"/services"},"e8959660-e584-4ab8-a332-b54367424867":{"pageId":"a857ece6-7734-4f07-a68c-4be479df804e","widgetId":null,"routePath":"/about-us"}},"isHomepage":true,"navigationMap":{"9a0c8f9f-6ce9-40ea-b65b-831d41e9bf0f":{"isFlyoutMenu":false,"active":false,"pageId":"9a0c8f9f-6ce9-40ea-b65b-831d41e9bf0f","name":"STEMpedia","href":"/stempedia","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"8c2592d1-090d-4798-ac26-d413467db7eb":{"isFlyoutMenu":false,"active":true,"pageId":"8c2592d1-090d-4798-ac26-d413467db7eb","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"4f621dfa-0243-4ad4-b7aa-aed117fa2f21":{"isFlyoutMenu":false,"active":false,"pageId":"4f621dfa-0243-4ad4-b7aa-aed117fa2f21","href":"/m/no-access","target":"","visible":true,"requiresAuth":false,"tags":["NO_ACCESS"],"rel":"","type":"page","showInFooter":false},"096322c6-9213-4a64-8847-d02fcd7381c0":{"isFlyoutMenu":false,"active":false,"pageId":"096322c6-9213-4a64-8847-d02fcd7381c0","href":"/m/create-account","target":"","visible":true,"requiresAuth":false,"tags":["CREATE_ACCOUNT"],"rel":"","type":"page","showInFooter":false},"a857ece6-7734-4f07-a68c-4be479df804e":{"isFlyoutMenu":false,"active":false,"pageId":"a857ece6-7734-4f07-a68c-4be479df804e","name":"About Us","href":"/about-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"0f15b75b-43d7-4ccf-bacb-2d0950c109ef":{"isFlyoutMenu":false,"active":false,"pageId":"0f15b75b-43d7-4ccf-bacb-2d0950c109ef","name":"Privacy Policy","href":"/privacy-policy","target":"","visible":false,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":true},"f677dbaf-d839-4555-923b-1d5f1128e536":{"isFlyoutMenu":false,"active":false,"pageId":"f677dbaf-d839-4555-923b-1d5f1128e536","href":"/m/account","target":"","visible":true,"requiresAuth":true,"tags":["SHOW_ACCOUNT"],"rel":"","type":"page","showInFooter":false},"b54c27a6-e0ca-464e-b66a-bf8c0a3ab9be":{"isFlyoutMenu":false,"active":false,"pageId":"b54c27a6-e0ca-464e-b66a-bf8c0a3ab9be","href":"/m/login","target":"","visible":true,"requiresAuth":false,"tags":["LOGIN"],"rel":"","type":"page","showInFooter":false},"701fd90a-9d7b-47db-8c6b-84f92e910a85":{"isFlyoutMenu":false,"active":false,"pageId":"701fd90a-9d7b-47db-8c6b-84f92e910a85","href":"/m/reset","target":"","visible":true,"requiresAuth":false,"tags":["RESET_PASSWORD"],"rel":"","type":"page","showInFooter":false},"e6227563-94fd-48b4-99e4-2007c7533677":{"isFlyoutMenu":false,"active":false,"pageId":"e6227563-94fd-48b4-99e4-2007c7533677","name":"Contact Us","href":"/contact-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"fa3e4b48-d03f-4d1a-86b8-adb9c6e3c148":{"isFlyoutMenu":false,"active":false,"pageId":"fa3e4b48-d03f-4d1a-86b8-adb9c6e3c148","href":"/m/bookings","target":"","visible":true,"requiresAuth":true,"tags":["SHOW_BOOKINGS"],"rel":"","type":"page","showInFooter":false},"ce9118eb-8f5c-457c-bb90-56f8655b18ec":{"isFlyoutMenu":false,"active":false,"pageId":"ce9118eb-8f5c-457c-bb90-56f8655b18ec","href":"/m/create","target":"","visible":true,"requiresAuth":false,"tags":["CREATE_PASSWORD"],"rel":"","type":"page","showInFooter":false},"666e489a-7420-4b58-a82c-c0eac3c5339d":{"isFlyoutMenu":false,"active":false,"pageId":"666e489a-7420-4b58-a82c-c0eac3c5339d","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false},"45b86c0a-9b53-4513-8425-a1f054c802fc":{"isFlyoutMenu":false,"active":false,"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","name":"Services","href":"/services","target":"","visible":true,"requiresAuth":false,"tags":["APPOINTMENTS"],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#fdd27b","meta":{"primary":"rgb(253, 210, 123)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"righteous","description":"","tags":[],"meta":{"order":33,"primary":{"id":"righteous","name":"Righteous","url":"//fonts.googleapis.com/css?family=Righteous:400&display=swap","family":"\'Righteous\', serif, system-ui","size":14,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"4px"}},"alternate":{"id":"josefin-sans","name":"Josefin Sans","url":"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap","family":"\'Josefin Sans\', Arial, sans-serif","size":16,"weight":400,"weights":[400,600,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["vi-VN"],"meta":{"alternate":{"family":"Arial, sans-serif"}}},{"locales":["ja-JP"],"meta":{"alternate":{"family":"Josefin Sans, Meiryo, \'\u30E1\u30A4\u30EA\u30AA\', sans-serif"}}},{"locales":["ko-KR"],"meta":{"alternate":{"family":"Josefin Sans, \'\uAD74\uB9BC\', Gulim, \'\uAD74\uB9BC\uCCB4\', GulimChe, sans-serif"}}},{"locales":["th-TH"],"meta":{"alternate":{"family":"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif"}}},{"locales":["zh-CN","zh-SG"],"meta":{"alternate":{"family":"Josefin Sans, \'\u4E2D\u6613\u9ED1\u4F53\', SimHei, sans-serif"}}},{"locales":["zh-HK","zh-TW"],"meta":{"alternate":{"family":"Josefin Slab, \'\u5FAE\u8EDF\u6B63\u9ED1\u9AD4\', Microsoft JhengHei, sans-serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}}]}}},"theme":"Theme9","paintJob":"MVP"}'
);
Core.utils.deferBootstrap(
  {
    elId: "bs-1",
    componentName: "@widget/LAYOUT/bs-ComponentGoPay",
    props: JSON.parse(
      '{"appointmentsPageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","websiteId":"8e320b80-659d-4f80-b0ac-2aa5aa91f0c2","rootDomain":"godaddy.com","domainName":"xcelpv48.godaddysites.com","pageRoute":"/","isReseller":false,"staticContent":{"cartIcon":"Shopping Cart Icon"},"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"widgetId":"717b079b-c907-4135-a552-f66c429109fa","widgetType":"HEADER","widgetPreset":"header9","group":"UtilitiesMenu","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/LAYOUT/bs-ComponentGoPay",
  },
  false
);
Core.utils.deferBootstrap(
  {
    elId: "bs-2",
    componentName: "@widget/LAYOUT/bs-Hamburger-Component",
    props: JSON.parse(
      '{"toggleId":"n-104748-navId-mobile","uniqueId":"n-104748","style":{"color":"highContrast",":hover":{"color":"highlight"},"@md":{"display":"none"}},"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"widgetId":"717b079b-c907-4135-a552-f66c429109fa","widgetType":"HEADER","widgetPreset":"header9","group":"Section","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/LAYOUT/bs-Hamburger-Component",
  },
  false
);
Core.utils.deferBootstrap(
  {
    elId: "bs-3",
    componentName: "@widget/LAYOUT/bs-LinkAwareComponent",
    props: JSON.parse(
      '{"toggleId":"more-104759","label":"More","dataAid":"NAV_MORE","navBarId":"navBarId-104756","widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"widgetId":"717b079b-c907-4135-a552-f66c429109fa","widgetType":"HEADER","widgetPreset":"header9","group":"Nav","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/LAYOUT/bs-LinkAwareComponent",
  },
  false
);
window.wsb["CalculateNavSpacing"] = function (e) {
  let {
    containerId: a,
    navId: n,
    logoImageId: l,
    inlineUtilitiesMenu: i,
    forceBreakpoint: o,
  } = e;
  let r, c, s, g, p, d, u;
  const y = document.getElementById(n);
  function m() {
    if (c || !y || !R(y)) return;
    (s = Array.from(y.children)),
      s.forEach(f),
      i && ((g = s.pop()), I(g)),
      (p = s.pop());
    const e = p.querySelector("ul");
    (d = e ? Array.from(e.children) : []),
      (y.style.whiteSpace = "normal"),
      (u = R(y.parentElement, "floor")),
      (y.style.whiteSpace = "nowrap"),
      window.requestAnimationFrame(b);
  }
  function b() {
    const e = s.map((e) => R(e));
    const t = g ? R(g) : 0,
      a = u - t;
    if (E(e) > a) {
      const t = R(p);
      for (let n = E(e); n + t > a; n -= e.pop());
      const n = e.length;
      h(s, 0, n, I),
        h(d, 0, n, w),
        h(s, n, s.length, w),
        h(d, n, s.length, I),
        I(p);
    } else s.forEach(I), w(p);
    window.dispatchEvent(new Event("NavItemsResized"));
  }
  function v() {
    (window.innerWidth < 1024 && o && o !== t.Q) ||
      (window.clearTimeout(r), (r = window.setTimeout(m, 50)));
  }
  function h(e, t, a, n) {
    e = e.slice(t, a).map(n).concat(e.slice(a));
  }
  function f(e) {
    (e.style.visibility = "hidden"),
      (e.style.display = ""),
      e.classList.remove("visible");
  }
  function w(e) {
    (e.style.display = "none"), e.classList.remove("visible");
  }
  function I(e) {
    (e.style.visibility = "visible"),
      (e.style.display = ""),
      e.classList.add("visible");
  }
  function E(e) {
    return e.reduce((e, t) => e + t, 0);
  }
  function R(e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ceil";
    return "ceil" === t
      ? Math.ceil(e.getBoundingClientRect().width)
      : Math.floor(e.getBoundingClientRect().width);
  }
  if ((v(), window.ResizeObserver)) {
    const e = new window.ResizeObserver(v);
    return (
      [document.getElementById(a), document.getElementById(l)].forEach(
        (t) => t && e.observe(t)
      ),
      () => {
        (c = !0), e.disconnect();
      }
    );
  }
  return (
    window.addEventListener("resize", v, { passive: !0 }),
    () => {
      (c = !0), window.removeEventListener("resize", v, { passive: !0 });
    }
  );
};
window.wsb["CalculateNavSpacing"](
  JSON.parse(
    '{"navId":"nav-104758","logoImageId":"logo-104755","containerId":"navBarId-104756"}'
  )
);
Core.utils.deferBootstrap(
  {
    elId: "bs-4",
    componentName: "@widget/LAYOUT/bs-ComponentGoPay",
    props: JSON.parse(
      '{"appointmentsPageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","websiteId":"8e320b80-659d-4f80-b0ac-2aa5aa91f0c2","rootDomain":"godaddy.com","domainName":"xcelpv48.godaddysites.com","pageRoute":"/","isReseller":false,"staticContent":{"cartIcon":"Shopping Cart Icon"},"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"widgetId":"717b079b-c907-4135-a552-f66c429109fa","widgetType":"HEADER","widgetPreset":"header9","group":"UtilitiesMenu","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/LAYOUT/bs-ComponentGoPay",
  },
  false
);
Core.utils.deferBootstrap(
  {
    elId: "bs-5",
    componentName: "@widget/LAYOUT/bs-FlyoutMenu-Component",
    props: JSON.parse(
      '{"toggleId":"n-104748104772-membershipId-loggedout","renderCustomIcon":{"name":"account","size":28,"minTarget":true},"overrideIconStyle":{},"dataAid":"MEMBERSHIP_ICON_DESKTOP_RENDERED","hasHover":true,"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"widgetId":"717b079b-c907-4135-a552-f66c429109fa","widgetType":"HEADER","widgetPreset":"header9","group":"UtilitiesMenu","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/LAYOUT/bs-FlyoutMenu-Component",
  },
  false
);
Core.utils.deferBootstrap(
  {
    elId: "bs-6",
    componentName: "@widget/LAYOUT/bs-FlyoutMenu-Component",
    props: JSON.parse(
      '{"toggleId":"n-104748104772-membershipId","renderCustomIcon":{"name":"account","size":28,"minTarget":true},"overrideIconStyle":{},"dataAid":"MEMBERSHIP_ICON_DESKTOP_RENDERED","hasHover":true,"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"widgetId":"717b079b-c907-4135-a552-f66c429109fa","widgetType":"HEADER","widgetPreset":"header9","group":"UtilitiesMenu","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/LAYOUT/bs-FlyoutMenu-Component",
  },
  false
);
!(function () {
  window.initMembership("n-104748104772", false);
})();
window.wsb["StickyNav"] = function (e) {
  let { uniqueId: t, logoHeight: o, hasAnimation: a, anchorId: n } = e;
  const r = o > 104 ? 120 : 80;
  let i,
    c,
    s,
    l,
    g = window.innerWidth < 768,
    d = 0;
  const u = () => {
      const e = Array.from(
        document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')
      ).find((e) => e.offsetHeight);
      if (!e) return null;
      const t = window.getComputedStyle(e);
      return (
        (s = t.getPropertyValue("box-shadow")),
        (l = t.getPropertyValue("margin-top")),
        e
      );
    },
    p = {
      i18nBar: document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),
      stickyNav: document.getElementById(t),
      stickyNavParent: document.querySelector("[data-stickynav-wrapper]"),
      logo: u(),
      freemiumAd: document.querySelector("[data-freemium-ad]"),
      anchor: document.getElementById(n),
    },
    y = () => {
      const { stickyNav: e, stickyNavParent: t } = p;
      let a = e.offsetHeight;
      g && e.offsetHeight < o && o <= 104 && (a = o),
        (t.style.height = `${a}px`);
    };
  new IntersectionObserver((e) =>
    e.forEach((e) => {
      let { isIntersecting: t } = e;
      return window.requestAnimationFrame(() =>
        ((e) => {
          if (c === e) return;
          const {
            stickyNav: t,
            logo: n,
            i18nBar: i,
            freemiumAd: u,
            stickyNavParent: h,
          } = p;
          (p.freemiumAd = u || document.querySelector("[data-freemium-ad]")),
            (d = d || p.freemiumAd?.offsetHeight),
            e && h && !h.style.height && y(),
            i && (i.style.display = e ? "none" : "flex"),
            n &&
              ((n.style.cssText = e
                ? `max-height:${g ? 50 : 64}px;box-shadow:none;margin-top:0px;`
                : `max-height:${g ? r : o}px;box-shadow:${s};margin-top:${l};`),
              "HEADER_LOGO_OVERHANG_CONTAINER" ===
                n.parentNode.getAttribute("data-aid") &&
                (n.parentNode.style.height = e ? "auto" : "1em")),
            (t.style.cssText = e
              ? `position:fixed;z-index:10000;left:0px;right:0px;top:${
                  d || 0
                }px;`
              : ""),
            a &&
              (e
                ? t.classList.add("sticky-animate", "x-c-bg")
                : t.classList.remove("sticky-animate", "x-c-bg")),
            (c = e);
        })(!t)
      );
    })
  ).observe(p.anchor);
  const h = /#[^\\?]*/;
  function m(e) {
    const t = (e.target.href.match(h)[0] || []).slice(1),
      o = document.getElementById(t);
    o && f(o);
  }
  function f(e) {
    const t = p.stickyNav.clientHeight;
    let o = e.offsetTop;
    const a = setInterval(() => {
      e.offsetTop === o
        ? (clearInterval(a), scrollTo({ top: e.offsetTop - t }))
        : (o = e.offsetTop);
    }, 300);
  }
  if (
    (Array.from(document.querySelectorAll("a"))
      .filter((e) => h.test(e.href))
      .forEach((e) => e.addEventListener("click", m)),
    window.location.hash)
  ) {
    const e = document.getElementById(window.location.hash.slice(1));
    e && f(e);
  }
  window.addEventListener(
    "resize",
    () => {
      clearTimeout(i),
        (i = setTimeout(() => {
          (g = window.innerWidth < 768), (p.logo = u()), y();
        }, 250));
    },
    { passive: !0 }
  );
};
window.wsb["StickyNav"](
  JSON.parse(
    '{"uniqueId":"header_stickynav104749","anchorId":"header_stickynav-anchor104750","logoHeight":75,"hasAnimation":true}'
  )
);
!(function () {
  window.initMembership("n-104748", true);
})();
window.wsb["DynamicFontScaler"] = function (e) {
  let t,
    {
      containerId: o,
      targetId: n,
      fontSizes: r,
      maxLines: a,
      prioritizeDefault: s,
    } = e;
  if ("undefined" == typeof document) return;
  const i = document.getElementById(o),
    c = document.getElementById(n);
  function l(e) {
    return (
      (function (e) {
        const t = parseInt(d(e, "padding-left") || 0, 10),
          o = parseInt(d(e, "padding-right") || 0, 10);
        return e.scrollWidth + t + o;
      })(e) <= i.clientWidth &&
      (function (e) {
        const t = e.offsetHeight,
          o = parseInt(d(e, "line-height"), 10) || 1;
        return Math.floor(t / o);
      })(e) <= a
    );
  }
  function p() {
    if (!i || !c || t === window.innerWidth) return;
    if (c.hasAttribute("data-font-scaled"))
      return void (function () {
        c.removeAttribute("data-last-size");
        const e = document.querySelector(`#${n}-style`);
        e && e.parentNode.removeChild(e);
      })();
    t = window.innerWidth;
    const e = Array.prototype.slice
      .call(i.querySelectorAll(`[data-scaler-id="scaler-${o}"]`))
      .sort(
        (e, t) =>
          r.indexOf(e.getAttribute("data-size")) -
          r.indexOf(t.getAttribute("data-size"))
      );
    if (i.clientWidth && e.length) {
      const t = i.style.width || "";
      (i.style.width = "100%"),
        e.forEach((e) => {
          (e.style.display = "inline-block"),
            (e.style.maxWidth = `${i.clientWidth}px`);
        });
      const o = (function (e) {
        return e.find(l) || e[e.length - 1];
      })(e);
      !(function (e) {
        e.forEach((e) => {
          (e.style.display = "none"), (e.style.maxWidth = "");
        });
      })(e),
        (i.style.width = t);
      const r = d(o, "font-size"),
        a = c.getAttribute("data-last-size");
      if (r && r !== a) {
        if (s) {
          const e = d(c, "font-size");
          if (parseInt(r, 10) >= parseInt(e, 10)) return;
        }
        c.setAttribute("data-last-size", r);
        let e = document.querySelector(`#${n}-style`);
        e ||
          ((e = document.createElement("style")),
          (e.id = `${n}-style`),
          document.head.appendChild(e)),
          (e.textContent = `#${c.id} { font-size: ${r} !important; }`);
      }
    }
  }
  function d(e, t) {
    return document.defaultView.getComputedStyle(e).getPropertyValue(t);
  }
  p(), window.addEventListener("resize", p);
};
window.wsb["DynamicFontScaler"](
  JSON.parse(
    '{"containerId":"tagline-container-104801","targetId":"dynamic-tagline-104802","fontSizes":["xxlarge","xlarge","large"],"maxLines":4}'
  )
);
window.wsb["context-bs-7"] = JSON.parse(
  '{"env":"production","renderMode":"PUBLISH","fonts":["righteous","default",""],"colors":["#fdd27b"],"fontScale":"medium","locale":"en-IN","language":"en","resellerId":1,"internalLinks":{"ba2b5902-cf30-4636-b144-c883a84609d8":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":null,"routePath":"/services"},"949404a6-8771-47e3-bfa9-63ff8d9c1427":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":"96f546ad-909c-443f-8e33-f9302e6057eb","routePath":"/services"},"809595b8-9bf8-4763-8973-ccf6fe132ecb":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":null,"routePath":"/services"},"e8959660-e584-4ab8-a332-b54367424867":{"pageId":"a857ece6-7734-4f07-a68c-4be479df804e","widgetId":null,"routePath":"/about-us"}},"isHomepage":true,"navigationMap":{"9a0c8f9f-6ce9-40ea-b65b-831d41e9bf0f":{"isFlyoutMenu":false,"active":false,"pageId":"9a0c8f9f-6ce9-40ea-b65b-831d41e9bf0f","name":"STEMpedia","href":"/stempedia","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"8c2592d1-090d-4798-ac26-d413467db7eb":{"isFlyoutMenu":false,"active":true,"pageId":"8c2592d1-090d-4798-ac26-d413467db7eb","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"4f621dfa-0243-4ad4-b7aa-aed117fa2f21":{"isFlyoutMenu":false,"active":false,"pageId":"4f621dfa-0243-4ad4-b7aa-aed117fa2f21","href":"/m/no-access","target":"","visible":true,"requiresAuth":false,"tags":["NO_ACCESS"],"rel":"","type":"page","showInFooter":false},"096322c6-9213-4a64-8847-d02fcd7381c0":{"isFlyoutMenu":false,"active":false,"pageId":"096322c6-9213-4a64-8847-d02fcd7381c0","href":"/m/create-account","target":"","visible":true,"requiresAuth":false,"tags":["CREATE_ACCOUNT"],"rel":"","type":"page","showInFooter":false},"a857ece6-7734-4f07-a68c-4be479df804e":{"isFlyoutMenu":false,"active":false,"pageId":"a857ece6-7734-4f07-a68c-4be479df804e","name":"About Us","href":"/about-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"0f15b75b-43d7-4ccf-bacb-2d0950c109ef":{"isFlyoutMenu":false,"active":false,"pageId":"0f15b75b-43d7-4ccf-bacb-2d0950c109ef","name":"Privacy Policy","href":"/privacy-policy","target":"","visible":false,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":true},"f677dbaf-d839-4555-923b-1d5f1128e536":{"isFlyoutMenu":false,"active":false,"pageId":"f677dbaf-d839-4555-923b-1d5f1128e536","href":"/m/account","target":"","visible":true,"requiresAuth":true,"tags":["SHOW_ACCOUNT"],"rel":"","type":"page","showInFooter":false},"b54c27a6-e0ca-464e-b66a-bf8c0a3ab9be":{"isFlyoutMenu":false,"active":false,"pageId":"b54c27a6-e0ca-464e-b66a-bf8c0a3ab9be","href":"/m/login","target":"","visible":true,"requiresAuth":false,"tags":["LOGIN"],"rel":"","type":"page","showInFooter":false},"701fd90a-9d7b-47db-8c6b-84f92e910a85":{"isFlyoutMenu":false,"active":false,"pageId":"701fd90a-9d7b-47db-8c6b-84f92e910a85","href":"/m/reset","target":"","visible":true,"requiresAuth":false,"tags":["RESET_PASSWORD"],"rel":"","type":"page","showInFooter":false},"e6227563-94fd-48b4-99e4-2007c7533677":{"isFlyoutMenu":false,"active":false,"pageId":"e6227563-94fd-48b4-99e4-2007c7533677","name":"Contact Us","href":"/contact-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"fa3e4b48-d03f-4d1a-86b8-adb9c6e3c148":{"isFlyoutMenu":false,"active":false,"pageId":"fa3e4b48-d03f-4d1a-86b8-adb9c6e3c148","href":"/m/bookings","target":"","visible":true,"requiresAuth":true,"tags":["SHOW_BOOKINGS"],"rel":"","type":"page","showInFooter":false},"ce9118eb-8f5c-457c-bb90-56f8655b18ec":{"isFlyoutMenu":false,"active":false,"pageId":"ce9118eb-8f5c-457c-bb90-56f8655b18ec","href":"/m/create","target":"","visible":true,"requiresAuth":false,"tags":["CREATE_PASSWORD"],"rel":"","type":"page","showInFooter":false},"666e489a-7420-4b58-a82c-c0eac3c5339d":{"isFlyoutMenu":false,"active":false,"pageId":"666e489a-7420-4b58-a82c-c0eac3c5339d","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false},"45b86c0a-9b53-4513-8425-a1f054c802fc":{"isFlyoutMenu":false,"active":false,"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","name":"Services","href":"/services","target":"","visible":true,"requiresAuth":false,"tags":["APPOINTMENTS"],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#fdd27b","meta":{"primary":"rgb(253, 210, 123)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"righteous","description":"","tags":[],"meta":{"order":33,"primary":{"id":"righteous","name":"Righteous","url":"//fonts.googleapis.com/css?family=Righteous:400&display=swap","family":"\'Righteous\', serif, system-ui","size":14,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"4px"}},"alternate":{"id":"josefin-sans","name":"Josefin Sans","url":"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap","family":"\'Josefin Sans\', Arial, sans-serif","size":16,"weight":400,"weights":[400,600,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["vi-VN"],"meta":{"alternate":{"family":"Arial, sans-serif"}}},{"locales":["ja-JP"],"meta":{"alternate":{"family":"Josefin Sans, Meiryo, \'\u30E1\u30A4\u30EA\u30AA\', sans-serif"}}},{"locales":["ko-KR"],"meta":{"alternate":{"family":"Josefin Sans, \'\uAD74\uB9BC\', Gulim, \'\uAD74\uB9BC\uCCB4\', GulimChe, sans-serif"}}},{"locales":["th-TH"],"meta":{"alternate":{"family":"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif"}}},{"locales":["zh-CN","zh-SG"],"meta":{"alternate":{"family":"Josefin Sans, \'\u4E2D\u6613\u9ED1\u4F53\', SimHei, sans-serif"}}},{"locales":["zh-HK","zh-TW"],"meta":{"alternate":{"family":"Josefin Slab, \'\u5FAE\u8EDF\u6B63\u9ED1\u9AD4\', Microsoft JhengHei, sans-serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}}]}}},"theme":"Theme9"}'
);
Core.utils.deferBootstrap(
  {
    elId: "bs-7",
    componentName: "@widget/REVIEWS/bs-Component",
    props: JSON.parse(
      '{"hasBgImage":true,"upgradeable":false,"preset":"reviews1","id":"39c16154-faf0-4197-9d8e-ef9780e5ef19","planType":"personal","market":"en-IN","publishDate":"2023-03-23T01:30:35.052Z","fbPageId":null,"gmbShowPendingMessage":false,"publishAfterLastUpgrade":false,"providerType":"gmb","isInternalPage":false,"isReseller":false,"accountId":"b11caa3b-9ff5-11ed-82c8-3417ebe7253b","viewDevice":null,"sectionTitle":"Testimonials","background":{"hasAlpha":true,"width":"100%","left":"0%","height":"100%","position":"50% 50%","scale":0.07941988950276244,"editedAspectRatio":"1.7679558011049723","imageDimension":null,"overlayAlpha":24,"colors":[{"hex":"#f5f5f4","rgb":[245,245,244],"hsluv":[85.87432021783205,0.7274728305493505,96.17977812812539],"distance":96.49106518956319},{"hex":"#f8d040","rgb":[248,208,64],"hsluv":[67.1196836008069,90.92086544126032,84.41430479469146],"distance":93.69283490437529},{"hex":"#f2cfac","rgb":[242,207,172],"hsluv":[50.7449683744285,62.82735964171329,84.94498251213552],"distance":91.36867672179137},{"hex":"#d6dbde","rgb":[214,219,222],"hsluv":[225.07800591880405,9.68052988867415,86.8081174390046],"distance":88.40138711097981},{"hex":"#b7dbe0","rgb":[183,219,224],"hsluv":[203.10807095083726,29.483285419102778,84.75670431908104],"distance":88.26922194696587},{"hex":"#d18a66","rgb":[209,138,102],"hsluv":[32.313224457688015,55.87262182693906,63.68208969251852],"distance":69.35911083203933},{"hex":"#da7233","rgb":[218,114,51],"hsluv":[28.902434763548865,86.23557887381718,58.92644663354916],"distance":67.63028906194073},{"hex":"#375a73","rgb":[55,90,115],"hsluv":[237.02175842153034,63.54246915538502,36.53018405200589],"distance":43.54282474093753},{"hex":"#1b4f6e","rgb":[27,79,110],"hsluv":[238.38023751193415,86.613555678646,31.567256370369492],"distance":40.89077926465613},{"hex":"#5c5957","rgb":[92,89,87],"hsluv":[46.08547934313735,4.948877360675452,37.889920973478],"distance":38.512823929943146},{"hex":"#032d57","rgb":[3,45,87],"hsluv":[252.2651640087392,97.4755317602775,18.210483085186944],"distance":28.658772827905636},{"hex":"#010101","rgb":[1,1,1],"hsluv":[0,1.9241939994479228e-12,0.2731038047237791],"distance":0.2731038047237791}],"top":"0%","oHeight":1448,"oWidth":2560,"filter":"NONE","image":"//img1.wsimg.com/isteam/ip/8e320b80-659d-4f80-b0ac-2aa5aa91f0c2/blob-8985a25.png","coordinates":{"x":0,"y":0},"rotation":"0"},"staticContent":{"txtPendingValidation":"Pending Validation","reviewTitle":"Title","add":"Add","doesNotRecommend":"Doesn\'t recommend","noWrittenReviews":"This customer did not write a review.","connectionSuccess":"Successfully Connected!","cantConnect":"Why can\'t I connect yet?","reviewDate":"Review Date","productReview":"{totalReviews} Product Review","viewAllProductReviews":"View All {totalReviews} Product Reviews","upgradeMessage":"Your site needs to have an online store to use {provider} reviews","productReviews":"{totalReviews} Product Reviews","goToProduct":"Go to {productName}","anonymous":"Anonymous","gmb3Days":"It may take up to 3 days to validate your business. Until then, reviews will not appear on your site.","noReviewsYet":"There are no reviews yet.","reviewerName":"Reviewer Name","basedOn":"Based on the opinion of {reviewCount} people","photo":"Photo","gmbAwaitingData":"We are waiting for data. Please check back later","reviewLink":"Review Link","basedOnOne":"Based on the opinion of 1 person","gmbUnderReview":"Google is reviewing your business info. We\'ll let you know when your listing is live.","gmbPublishMessage":"Your website needs to be published before connecting to Google My Business.","sourceMsgStatic":"Add reviews manually","manualReviews":"Reviews","ratingNone":"None","reviewRating":"Rating","percentRecommend":"{percent} recommend","connectMsg":"To show reviews on your site, connect your account to {provider}","twentyFourHourLag":"Data may take up to 24 hours to display.","recommends":"Recommends","reviewFirst":"Be the first to leave a review","review":"{totalReviews} Review","publishMessage":"Your website needs to be published before connecting to {provider}","sourceMsgDynamic":"Connect to external source","reviewBody":"Review","upgradeNow":"Add Store Now","viewMore":"View More","reviews":"{totalReviews} Reviews","cantConnectMsg":"Your website needs to be published before connecting to {provider}","comingSoon":"Reviews coming soon!","readFullReview":"Read full review","labelForDeleteManualReview":"Delete Review","gmbNoReviews":"You are successfully connected but there are no reviews yet.","connectBtnText":"Connect to {provider}","viewAllReviews":"View All {totalReviews} Reviews"},"websiteId":"8e320b80-659d-4f80-b0ac-2aa5aa91f0c2","sourceType":"dynamic","manualReviews":[{"photo":{},"title":"Title 1","body":"Review 1","rating":"0","name":"Anonymous","date":"1/29/2023"},{"photo":{},"title":"Title 2","body":"Review 2","rating":"0","name":"Anonymous","date":"1/29/2023"},{"photo":{},"title":"Title 3","body":"Review 3","rating":"0","name":"Anonymous","date":"1/29/2023"}],"widgetId":"39c16154-faf0-4197-9d8e-ef9780e5ef19","section":"alt","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"order":1,"widgetId":"39c16154-faf0-4197-9d8e-ef9780e5ef19","widgetType":"REVIEWS","widgetPreset":"reviews1","group":"Section","groupType":"Banner","section":"alt","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-7",
    radpack: "@widget/REVIEWS/bs-Component",
  },
  false
);
window.wsb["AccordionScript"] = function (e) {
  let { id: t } = e;
  const a = document.getElementById(t).querySelectorAll(".accordion-question");
  let o = !1;
  function r(e) {
    "true" === e.getAttribute("aria-expanded") && o
      ? e.setAttribute("aria-expanded", "false")
      : e.setAttribute("aria-expanded", "true"),
      (o = !1);
  }
  function l() {
    if (window.location.hash) {
      const e = document.getElementById(window.location.hash.substring(1)),
        t = null == e ? void 0 : e.querySelector(".accordion-question");
      t && r(t);
    }
  }
  function n(e) {
    (o = !0), r(e.currentTarget);
  }
  return (
    a.forEach((e) => {
      e.addEventListener("click", n);
    }),
    window.addEventListener("popstate", l),
    l(),
    () => {
      a.forEach((e) => {
        e.removeEventListener("click", n);
      }),
        window.removeEventListener("popstate", l);
    }
  );
};
window.wsb["AccordionScript"](
  JSON.parse('{"id":"1b5b86ce-c32d-4f56-9109-a9d7766c01f7104831"}')
);
Core.utils.deferBootstrap(
  {
    elId: "bs-8",
    componentName: "@widget/SUBSCRIBE/bs-subscribe2-subscribe-form",
    props: JSON.parse(
      '{"upgradeable":false,"preset":"subscribe2","id":"a890aa0b-1223-4e0a-bddf-c22fcb1420ce","isInternalPage":false,"websiteId":"8e320b80-659d-4f80-b0ac-2aa5aa91f0c2","accountId":"b11caa3b-9ff5-11ed-82c8-3417ebe7253b","hasNonCommercePlan":true,"couponToggleHidden":false,"sectionTitle":"Subscribe","staticContent":{"defaultButtonLabel":"Sign Up","emailPlaceholderText":"Email Address","verificationText":"To let us know it\'s really you and that you\'d like to receive emails from us, please click the link in the confirmation email we just sent you. You can unsubscribe from these emails at any time.","emailErrorMessage":"Please enter a valid email address."},"confirmationMessage":"Excellent! We\'re excited to send you our next update.","couponConfirmationMessage":"Thanks so much for signing up!","description":"Sign up to hear from us.","inputPlaceholder":"Email Address","subscribeButtonLabel":"Sign up","couponToggle":false,"couponDiscount":0,"couponDiscountMessage":"Use this coupon code {coupon_code} for {discount}% off your first purchase.","couponDescription":"Get 10% off your first purchase when you sign up for our newsletter!","widgetId":"a890aa0b-1223-4e0a-bddf-c22fcb1420ce","section":"alt","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"order":3,"widgetId":"a890aa0b-1223-4e0a-bddf-c22fcb1420ce","widgetType":"SUBSCRIBE","widgetPreset":"subscribe2","group":"Group","groupType":"Default","section":"alt","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-7",
    radpack: "@widget/SUBSCRIBE/bs-subscribe2-subscribe-form",
  },
  false
);
Core.utils.renderBootstrap({
  elId: "bs-9",
  componentName: "@widget/MESSAGING/bs-Component",
  props: JSON.parse(
    '{"config":{"formSubmitEndpoint":"/messaging","assetsHost":"https://img1.wsimg.com","assetsBasePath":"/isteam","contactsHost":"https://contacts.godaddy.com","conversationsWebHost":"https://conversations.godaddy.com","formSubmitHost":"https://contact.apps-api.instantpage.secureserver.net","generateUrlHost":"https://url-generator.apps.secureserver.net","vNextApiHost":"https://websites.api.godaddy.com","reamazeApiHost":"https://{{websiteId}}reamaze.godaddy.com","reamazeJsSource":"https://cdn.reamaze.com/assets/reamaze-loader.js","reamazeCookieJsSource":"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js"},"upgradeable":false,"preset":"messaging1","order":0,"id":"896ab808-5539-4cf4-aa7a-78dbdad72e08","isMobile":null,"websiteId":"8e320b80-659d-4f80-b0ac-2aa5aa91f0c2","accountId":"b11caa3b-9ff5-11ed-82c8-3417ebe7253b","isReseller":false,"domainName":"xcelpv48.godaddysites.com","staticContent":{"submitButtonLoadingLabel":"Sending","infoStartTitle":"Conversations","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","infoStartDesc":"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.","infoStartTag":"New","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","contactsLinkInfoMessaging":"Contacts from your website messaging form are captured in Connections.","defaultSubmitButtonLabel":"Send","endOfChat":"end of chat","infoConnectedDesc":"You are connected to the Conversations mobile app and are currently receiving all website messages there.","infoRecommendedTag":"Recommended","infoStartLink":"Get Started","phoneUsOnlyValidationErrorMessage":"Please enter a valid U.S. mobile phone number.","infoIncludedTag":"Included","infoPublishRequiredDesc":"A publish is needed in order to complete this first step of enabling this feature.","infoPendingLoginDesc":"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.","termsOfSerivce":"Terms of Service","infoUnavailableDesc":"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","privacyPolicyURL":"https://policies.google.com/privacy","infoUnavailableTitle":"Conversations","requiredValidationErrorMessage":"Please fill in this required field","infoUnavailableTag":"Unavailable","contactsLinkText":"Manage my contacts","privacyPolicy":"Privacy Policy","infoPublishRequiredLink":"Publish Now","infoPendingLoginLink":"Resend Link","infoConnectedTitle":"Conversations Mobile App","termsOfSerivceURL":"https://policies.google.com/terms","messagesRatesLegalDisclosure":"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.","emailMaxCountValidationErrorMessage":"Your email address is too long","infoConnectedTag":"Connected"},"businessName":"ScienceParks","reamazeBrandId":null,"emailConfirmationMessage":"We\'ve sent you a confirmation email, please click the link to verify your address.","recaptchaType":"V3","formFields":[{"keyName":"name","type":"SINGLE_LINE","label":"Name","validation":"required","required":true},{"keyName":"phone","type":"PHONE","label":"Mobile","validation":"phone","required":true},{"keyName":"email","type":"EMAIL","label":"Email","validation":"email","required":true,"replyTo":true},{"keyName":"message","type":"MULTI_LINE","label":"How can we help?","validation":"required","required":true},{"type":"SUBMIT","label":"Send"}],"cookieBannerEnabled":true,"notificationPreference":"EMAIL","formEmail":"patientcentriccare@gmail.com","welcomeMessage":"Hi! Let us know how we can help and we\u2019ll respond shortly.","formSuccessMessage":"Thanks for the message. We\'ll get back to you as soon as we can.","emailOptInEnabled":false,"emailOptInMessage":"Sign up to receive email updates, announcements, and more.","reamazePosition":"bottom-right","reamazeThemeColor":"#fdd27b","reamazePromptEnabled":true,"reamazePrompt":"Let me know if you have any questions!","reamazeConfirmationMessage":"Thanks! Your message has been submitted. We\'ll get back to you here or via email.","reamazeAvatarImage":"","reamazeDismissCarousel":false,"widgetId":"896ab808-5539-4cf4-aa7a-78dbdad72e08","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
  ),
  context: JSON.parse(
    '{"widgetId":"896ab808-5539-4cf4-aa7a-78dbdad72e08","widgetType":"MESSAGING","widgetPreset":"messaging1","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
  ),
  contextKey: "context-bs-7",
  radpack: "@widget/MESSAGING/bs-Component",
});
window.wsb["CookieBannerScript"] = function (e) {
  let { id: t, acceptCookie: o, dismissCookie: a } = e;
  const n = 864e5;
  let i, l, r;
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60;
    const o = new Date();
    o.setTime(o.getTime() + n * t);
    const a = `expires=${o.toUTCString()}`;
    document.cookie = `${e}=true;${a};path=/`;
  }
  function c(e) {
    return document.cookie.includes(e);
  }
  function p() {
    l && l.removeEventListener("click", g),
      r && r.removeEventListener("click", d),
      (i.style.display = "none");
  }
  function g(e) {
    e.preventDefault(), u(), s(a), s(o), p();
  }
  function d(e) {
    var t;
    e.preventDefault(),
      s(a),
      c(o) &&
        ((t = o),
        (document.cookie = `${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`)),
      p();
  }
  function u() {
    (window._allowCT = !0),
      window._allowCTListener && window._allowCTListener.forEach((e) => e());
  }
  c(o)
    ? u()
    : c(a) ||
      setTimeout(() => {
        (i = document.getElementById(`${t}-banner`)),
          (l = document.getElementById(`${t}-accept`)),
          (r = document.getElementById(`${t}-decline`)),
          l && l.addEventListener("click", g),
          r && r.addEventListener("click", d),
          (i.style.transform = "translateY(-500px)");
      }, 200);
};
window.wsb["CookieBannerScript"](
  JSON.parse(
    '{"id":"9c0639f8-1a4f-4716-9d1d-ce1104efa9ec","dismissCookie":"cookie_warning_dismissed","acceptCookie":"cookie_terms_accepted"}'
  )
);
document
  .getElementById("page-104747")
  .addEventListener("click", function () {}, false);
