// === إعداداتك ===
// ضع رقم واتساب بصيغة دولية بدون + ولا 00
// مثال السعودية: 9665xxxxxxxx
const WHATSAPP_NUMBER = "966500000000";

function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// سنة الفوتر
document.getElementById("year").textContent = new Date().getFullYear();

// موبايل منيو
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
menuBtn?.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

// زر واتساب في الهيرو + الفلوت
const whatsBtn = document.getElementById("whatsBtn");
const floatWA = document.getElementById("floatWA");

const defaultMsg = "السلام عليكم، أبغى أطلب/أحجز. ممكن التفاصيل؟";
const defaultLink = waLink(defaultMsg);

if (whatsBtn) whatsBtn.href = defaultLink;
if (floatWA) floatWA.href = defaultLink;

// نموذج الطلب -> يفتح واتساب برسالة جاهزة
const form = document.getElementById("leadForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const service = (data.get("service") || "").toString().trim();
  const note = (data.get("note") || "").toString().trim();

  const msg =
`طلب جديد:
الاسم: ${name}
الجوال: ${phone}
الخدمة: ${service}
ملاحظات: ${note || "—"}`;

  window.open(waLink(msg), "_blank", "noopener,noreferrer");
});
