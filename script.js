
const WHATSAPP_NUMBER = "966 54 661 4935";
const DEFAULT_WHATSAPP_NUMBER = "966546614935";

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {

const whatsappMessage =
        "مرحبًا، اطلعت على سيرتك الذاتية وأرغب في التواصل معك بشأن فرصة مهنية.";

const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

whatsappButton.href = whatsappURL;

 whatsappButton.addEventListener("click", function (event) {

if (WHATSAPP_NUMBER === DEFAULT_WHATSAPP_NUMBER) {
event.preventDefault();
 alert(
   "يرجى تعديل رقم واتساب في ملف script.js إلى رقمك الشخصي قبل استخدام الزر."
  );

        }

    });

}


const printButton = document.getElementById("printButton");

if (printButton) {

printButton.addEventListener("click", function () {

window.print();

});

}

console.log(
    "تم تحميل السيرة الذاتية بنجاح."
);