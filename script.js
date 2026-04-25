// === LINK DE AFILIADO ===
// Tipo: PRESELL → aponta pra página oficial do produtor com aff ID
// Rede: BuyGoods | Aff ID: 298291
const AFFILIATE_LINK = "https://cognicarepro.com/?aff=298291";

document.addEventListener("DOMContentLoaded", () => {
  const ctas = document.querySelectorAll("a.cta-btn");
  ctas.forEach(cta => {
    cta.href = AFFILIATE_LINK;
    cta.setAttribute("rel", "nofollow noopener sponsored");
    cta.setAttribute("target", "_blank");
  });

  ctas.forEach(cta => {
    cta.addEventListener("click", () => {
      const position = cta.dataset.cta || "unknown";
      if (typeof gtag === "function") {
        gtag("event", "cta_click", {
          event_category: "engagement",
          event_label: position
        });
      }
    });
  });
});
