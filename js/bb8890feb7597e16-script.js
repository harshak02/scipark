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
  '{"env":"production","renderMode":"PUBLISH","fonts":["righteous","default",""],"colors":["#fdd27b"],"locale":"en-IN","language":"en","resellerId":1,"internalLinks":{"ba2b5902-cf30-4636-b144-c883a84609d8":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":null,"routePath":"/services"},"949404a6-8771-47e3-bfa9-63ff8d9c1427":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":"96f546ad-909c-443f-8e33-f9302e6057eb","routePath":"/services"},"809595b8-9bf8-4763-8973-ccf6fe132ecb":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":null,"routePath":"/services"},"e8959660-e584-4ab8-a332-b54367424867":{"pageId":"a857ece6-7734-4f07-a68c-4be479df804e","widgetId":null,"routePath":"/about-us"}},"isInternalPage":true,"navigationMap":{"9a0c8f9f-6ce9-40ea-b65b-831d41e9bf0f":{"isFlyoutMenu":false,"active":false,"pageId":"9a0c8f9f-6ce9-40ea-b65b-831d41e9bf0f","name":"STEMpedia","href":"/stempedia","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"8c2592d1-090d-4798-ac26-d413467db7eb":{"isFlyoutMenu":false,"active":false,"pageId":"8c2592d1-090d-4798-ac26-d413467db7eb","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"4f621dfa-0243-4ad4-b7aa-aed117fa2f21":{"isFlyoutMenu":false,"active":false,"pageId":"4f621dfa-0243-4ad4-b7aa-aed117fa2f21","href":"/m/no-access","target":"","visible":true,"requiresAuth":false,"tags":["NO_ACCESS"],"rel":"","type":"page","showInFooter":false},"096322c6-9213-4a64-8847-d02fcd7381c0":{"isFlyoutMenu":false,"active":false,"pageId":"096322c6-9213-4a64-8847-d02fcd7381c0","href":"/m/create-account","target":"","visible":true,"requiresAuth":false,"tags":["CREATE_ACCOUNT"],"rel":"","type":"page","showInFooter":false},"a857ece6-7734-4f07-a68c-4be479df804e":{"isFlyoutMenu":false,"active":false,"pageId":"a857ece6-7734-4f07-a68c-4be479df804e","name":"About Us","href":"/about-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"0f15b75b-43d7-4ccf-bacb-2d0950c109ef":{"isFlyoutMenu":false,"active":true,"pageId":"0f15b75b-43d7-4ccf-bacb-2d0950c109ef","name":"Privacy Policy","href":"/privacy-policy","target":"","visible":false,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":true},"f677dbaf-d839-4555-923b-1d5f1128e536":{"isFlyoutMenu":false,"active":false,"pageId":"f677dbaf-d839-4555-923b-1d5f1128e536","href":"/m/account","target":"","visible":true,"requiresAuth":true,"tags":["SHOW_ACCOUNT"],"rel":"","type":"page","showInFooter":false},"b54c27a6-e0ca-464e-b66a-bf8c0a3ab9be":{"isFlyoutMenu":false,"active":false,"pageId":"b54c27a6-e0ca-464e-b66a-bf8c0a3ab9be","href":"/m/login","target":"","visible":true,"requiresAuth":false,"tags":["LOGIN"],"rel":"","type":"page","showInFooter":false},"701fd90a-9d7b-47db-8c6b-84f92e910a85":{"isFlyoutMenu":false,"active":false,"pageId":"701fd90a-9d7b-47db-8c6b-84f92e910a85","href":"/m/reset","target":"","visible":true,"requiresAuth":false,"tags":["RESET_PASSWORD"],"rel":"","type":"page","showInFooter":false},"e6227563-94fd-48b4-99e4-2007c7533677":{"isFlyoutMenu":false,"active":false,"pageId":"e6227563-94fd-48b4-99e4-2007c7533677","name":"Contact Us","href":"/contact-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"fa3e4b48-d03f-4d1a-86b8-adb9c6e3c148":{"isFlyoutMenu":false,"active":false,"pageId":"fa3e4b48-d03f-4d1a-86b8-adb9c6e3c148","href":"/m/bookings","target":"","visible":true,"requiresAuth":true,"tags":["SHOW_BOOKINGS"],"rel":"","type":"page","showInFooter":false},"ce9118eb-8f5c-457c-bb90-56f8655b18ec":{"isFlyoutMenu":false,"active":false,"pageId":"ce9118eb-8f5c-457c-bb90-56f8655b18ec","href":"/m/create","target":"","visible":true,"requiresAuth":false,"tags":["CREATE_PASSWORD"],"rel":"","type":"page","showInFooter":false},"666e489a-7420-4b58-a82c-c0eac3c5339d":{"isFlyoutMenu":false,"active":false,"pageId":"666e489a-7420-4b58-a82c-c0eac3c5339d","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false},"45b86c0a-9b53-4513-8425-a1f054c802fc":{"isFlyoutMenu":false,"active":false,"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","name":"Services","href":"/services","target":"","visible":true,"requiresAuth":false,"tags":["APPOINTMENTS"],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#fdd27b","meta":{"primary":"rgb(253, 210, 123)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"righteous","description":"","tags":[],"meta":{"order":33,"primary":{"id":"righteous","name":"Righteous","url":"//fonts.googleapis.com/css?family=Righteous:400&display=swap","family":"\'Righteous\', serif, system-ui","size":14,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"4px"}},"alternate":{"id":"josefin-sans","name":"Josefin Sans","url":"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap","family":"\'Josefin Sans\', Arial, sans-serif","size":16,"weight":400,"weights":[400,600,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["vi-VN"],"meta":{"alternate":{"family":"Arial, sans-serif"}}},{"locales":["ja-JP"],"meta":{"alternate":{"family":"Josefin Sans, Meiryo, \'\u30E1\u30A4\u30EA\u30AA\', sans-serif"}}},{"locales":["ko-KR"],"meta":{"alternate":{"family":"Josefin Sans, \'\uAD74\uB9BC\', Gulim, \'\uAD74\uB9BC\uCCB4\', GulimChe, sans-serif"}}},{"locales":["th-TH"],"meta":{"alternate":{"family":"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif"}}},{"locales":["zh-CN","zh-SG"],"meta":{"alternate":{"family":"Josefin Sans, \'\u4E2D\u6613\u9ED1\u4F53\', SimHei, sans-serif"}}},{"locales":["zh-HK","zh-TW"],"meta":{"alternate":{"family":"Josefin Slab, \'\u5FAE\u8EDF\u6B63\u9ED1\u9AD4\', Microsoft JhengHei, sans-serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}}]}}},"theme":"Theme9","paintJob":"MVP"}'
);
Core.utils.deferBootstrap(
  {
    elId: "bs-1",
    componentName: "@widget/LAYOUT/bs-ComponentGoPay",
    props: JSON.parse(
      '{"appointmentsPageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","websiteId":"8e320b80-659d-4f80-b0ac-2aa5aa91f0c2","rootDomain":"godaddy.com","domainName":"xcelpv48.godaddysites.com","pageRoute":"/privacy-policy","isReseller":false,"staticContent":{"cartIcon":"Shopping Cart Icon"},"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
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
      '{"toggleId":"n-111205-navId-mobile","uniqueId":"n-111205","style":{"color":"highContrast",":hover":{"color":"highlight"},"@md":{"display":"none"}},"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
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
      '{"toggleId":"more-111216","label":"More","dataAid":"NAV_MORE","navBarId":"navBarId-111213","widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
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
    '{"navId":"nav-111215","logoImageId":"logo-111212","containerId":"navBarId-111213"}'
  )
);
Core.utils.deferBootstrap(
  {
    elId: "bs-4",
    componentName: "@widget/LAYOUT/bs-ComponentGoPay",
    props: JSON.parse(
      '{"appointmentsPageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","websiteId":"8e320b80-659d-4f80-b0ac-2aa5aa91f0c2","rootDomain":"godaddy.com","domainName":"xcelpv48.godaddysites.com","pageRoute":"/privacy-policy","isReseller":false,"staticContent":{"cartIcon":"Shopping Cart Icon"},"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
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
      '{"toggleId":"n-111205111229-membershipId-loggedout","renderCustomIcon":{"name":"account","size":28,"minTarget":true},"overrideIconStyle":{},"dataAid":"MEMBERSHIP_ICON_DESKTOP_RENDERED","hasHover":true,"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
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
      '{"toggleId":"n-111205111229-membershipId","renderCustomIcon":{"name":"account","size":28,"minTarget":true},"overrideIconStyle":{},"dataAid":"MEMBERSHIP_ICON_DESKTOP_RENDERED","hasHover":true,"widgetId":"717b079b-c907-4135-a552-f66c429109fa","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
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
  window.initMembership("n-111205111229", false);
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
    '{"uniqueId":"header_stickynav111206","anchorId":"header_stickynav-anchor111207","logoHeight":75,"hasAnimation":true}'
  )
);
!(function () {
  window.initMembership("n-111205", true);
})();
window.wsb["context-bs-7"] = JSON.parse(
  '{"env":"production","renderMode":"PUBLISH","fonts":["righteous","default",""],"colors":["#fdd27b"],"fontScale":"medium","locale":"en-IN","language":"en","resellerId":1,"internalLinks":{"ba2b5902-cf30-4636-b144-c883a84609d8":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":null,"routePath":"/services"},"949404a6-8771-47e3-bfa9-63ff8d9c1427":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":"96f546ad-909c-443f-8e33-f9302e6057eb","routePath":"/services"},"809595b8-9bf8-4763-8973-ccf6fe132ecb":{"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","widgetId":null,"routePath":"/services"},"e8959660-e584-4ab8-a332-b54367424867":{"pageId":"a857ece6-7734-4f07-a68c-4be479df804e","widgetId":null,"routePath":"/about-us"}},"isInternalPage":true,"navigationMap":{"9a0c8f9f-6ce9-40ea-b65b-831d41e9bf0f":{"isFlyoutMenu":false,"active":false,"pageId":"9a0c8f9f-6ce9-40ea-b65b-831d41e9bf0f","name":"STEMpedia","href":"/stempedia","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"8c2592d1-090d-4798-ac26-d413467db7eb":{"isFlyoutMenu":false,"active":false,"pageId":"8c2592d1-090d-4798-ac26-d413467db7eb","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"4f621dfa-0243-4ad4-b7aa-aed117fa2f21":{"isFlyoutMenu":false,"active":false,"pageId":"4f621dfa-0243-4ad4-b7aa-aed117fa2f21","href":"/m/no-access","target":"","visible":true,"requiresAuth":false,"tags":["NO_ACCESS"],"rel":"","type":"page","showInFooter":false},"096322c6-9213-4a64-8847-d02fcd7381c0":{"isFlyoutMenu":false,"active":false,"pageId":"096322c6-9213-4a64-8847-d02fcd7381c0","href":"/m/create-account","target":"","visible":true,"requiresAuth":false,"tags":["CREATE_ACCOUNT"],"rel":"","type":"page","showInFooter":false},"a857ece6-7734-4f07-a68c-4be479df804e":{"isFlyoutMenu":false,"active":false,"pageId":"a857ece6-7734-4f07-a68c-4be479df804e","name":"About Us","href":"/about-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"0f15b75b-43d7-4ccf-bacb-2d0950c109ef":{"isFlyoutMenu":false,"active":true,"pageId":"0f15b75b-43d7-4ccf-bacb-2d0950c109ef","name":"Privacy Policy","href":"/privacy-policy","target":"","visible":false,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":true},"f677dbaf-d839-4555-923b-1d5f1128e536":{"isFlyoutMenu":false,"active":false,"pageId":"f677dbaf-d839-4555-923b-1d5f1128e536","href":"/m/account","target":"","visible":true,"requiresAuth":true,"tags":["SHOW_ACCOUNT"],"rel":"","type":"page","showInFooter":false},"b54c27a6-e0ca-464e-b66a-bf8c0a3ab9be":{"isFlyoutMenu":false,"active":false,"pageId":"b54c27a6-e0ca-464e-b66a-bf8c0a3ab9be","href":"/m/login","target":"","visible":true,"requiresAuth":false,"tags":["LOGIN"],"rel":"","type":"page","showInFooter":false},"701fd90a-9d7b-47db-8c6b-84f92e910a85":{"isFlyoutMenu":false,"active":false,"pageId":"701fd90a-9d7b-47db-8c6b-84f92e910a85","href":"/m/reset","target":"","visible":true,"requiresAuth":false,"tags":["RESET_PASSWORD"],"rel":"","type":"page","showInFooter":false},"e6227563-94fd-48b4-99e4-2007c7533677":{"isFlyoutMenu":false,"active":false,"pageId":"e6227563-94fd-48b4-99e4-2007c7533677","name":"Contact Us","href":"/contact-us","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"fa3e4b48-d03f-4d1a-86b8-adb9c6e3c148":{"isFlyoutMenu":false,"active":false,"pageId":"fa3e4b48-d03f-4d1a-86b8-adb9c6e3c148","href":"/m/bookings","target":"","visible":true,"requiresAuth":true,"tags":["SHOW_BOOKINGS"],"rel":"","type":"page","showInFooter":false},"ce9118eb-8f5c-457c-bb90-56f8655b18ec":{"isFlyoutMenu":false,"active":false,"pageId":"ce9118eb-8f5c-457c-bb90-56f8655b18ec","href":"/m/create","target":"","visible":true,"requiresAuth":false,"tags":["CREATE_PASSWORD"],"rel":"","type":"page","showInFooter":false},"666e489a-7420-4b58-a82c-c0eac3c5339d":{"isFlyoutMenu":false,"active":false,"pageId":"666e489a-7420-4b58-a82c-c0eac3c5339d","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false},"45b86c0a-9b53-4513-8425-a1f054c802fc":{"isFlyoutMenu":false,"active":false,"pageId":"45b86c0a-9b53-4513-8425-a1f054c802fc","name":"Services","href":"/services","target":"","visible":true,"requiresAuth":false,"tags":["APPOINTMENTS"],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#fdd27b","meta":{"primary":"rgb(253, 210, 123)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"righteous","description":"","tags":[],"meta":{"order":33,"primary":{"id":"righteous","name":"Righteous","url":"//fonts.googleapis.com/css?family=Righteous:400&display=swap","family":"\'Righteous\', serif, system-ui","size":14,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"4px"}},"alternate":{"id":"josefin-sans","name":"Josefin Sans","url":"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap","family":"\'Josefin Sans\', Arial, sans-serif","size":16,"weight":400,"weights":[400,600,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["vi-VN"],"meta":{"alternate":{"family":"Arial, sans-serif"}}},{"locales":["ja-JP"],"meta":{"alternate":{"family":"Josefin Sans, Meiryo, \'\u30E1\u30A4\u30EA\u30AA\', sans-serif"}}},{"locales":["ko-KR"],"meta":{"alternate":{"family":"Josefin Sans, \'\uAD74\uB9BC\', Gulim, \'\uAD74\uB9BC\uCCB4\', GulimChe, sans-serif"}}},{"locales":["th-TH"],"meta":{"alternate":{"family":"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif"}}},{"locales":["zh-CN","zh-SG"],"meta":{"alternate":{"family":"Josefin Sans, \'\u4E2D\u6613\u9ED1\u4F53\', SimHei, sans-serif"}}},{"locales":["zh-HK","zh-TW"],"meta":{"alternate":{"family":"Josefin Slab, \'\u5FAE\u8EDF\u6B63\u9ED1\u9AD4\', Microsoft JhengHei, sans-serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}}]}}},"theme":"Theme9"}'
);
Core.utils.renderBootstrap({
  elId: "bs-7",
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
  .getElementById("page-111204")
  .addEventListener("click", function () {}, false);
