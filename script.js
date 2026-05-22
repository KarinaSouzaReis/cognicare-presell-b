// === LINK DE AFILIADO ===
// Tipo: PRESELL → aponta pra página oficial do produtor com aff ID
// Rede: Digistore24 | Nickname: karinaSouzaReis
const AFFILIATE_LINK = "https://cognicarepro.com/d/order-now.php#aff=karinaSouzaReis";

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
        // GA4 event
        gtag("event", "cta_click", {
          event_category: "engagement",
          event_label: position
        });
        // Google Ads conversion
        gtag("event", "conversion", {
          send_to: "AW-948909355/Z9lmCIvO7a0cEKvqvMQD"
        });
      }
    });
  });
});
