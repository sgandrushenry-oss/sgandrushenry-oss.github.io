/* Set to the verified account endpoint after Sam completes registration. */
(() => {
  const endpoint = "";
  if (!endpoint || location.hostname !== "sgandrushenry-oss.github.io") return;
  if (navigator.globalPrivacyControl || navigator.doNotTrack === "1") return;
  let referrer = "";
  try { referrer = document.referrer ? new URL(document.referrer).origin : ""; } catch (_) {}
  window.goatcounter = {
    path: location.pathname === "/index.html" ? "/" : location.pathname,
    referrer: referrer,
    no_events: true
  };
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = endpoint;
  document.head.appendChild(script);
})();
