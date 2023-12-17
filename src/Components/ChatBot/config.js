import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Size nasıl destek olabilirim?`)],
  widgets: [
    {
      widgetName: "adviceList",
      widgetFunc: () => (
        <div className="p-3 rounded-[5px] bg-[#004892] text-white">
          <ul>
            <ol>
              1- Duygularını tanı: İlk adım duygularını tanımaktır. Kendini
              nasıl hissettiğini anlamak için zaman ayır. Duygularını
              etiketlemek ve onları ifade etmek, onları daha iyi anlamanı
              sağlar.
            </ol>
            <ol>
              2- Kendine nazik ol: Kendine karşı nazik olmayı öğren. Kendini
              eleştirmek yerine, kendini desteklemek için olumlu bir iç konuşma
              yap. Kendine iyi bakmak için ihtiyaçlarını göz ardı etme.
            </ol>
            <ol>
              3- Destek ara: Duygusal süreçlerle başa çıkmak zor olabilir, bu
              yüzden destek aramaktan çekinme. Güvendiğin bir arkadaş, aile
              üyesi veya bir terapistle konuşmak, duygusal yükünü
              hafifletebilir.
            </ol>
            <ol>
              4- Kendine zaman ayır: Kendine zaman ayırmak, duygusal iyi oluşunu
              destekler. Kendi ilgi alanlarına yönel, hobilerine zaman ayır ve
              kendinle ilgilen.
            </ol>
            <ol>
              5- Başa çıkma stratejileri kullan: Stresle başa çıkmak için etkili
              stratejiler kullan. Meditasyon, derin nefes alma, egzersiz yapma
              veya günlük tutma gibi aktiviteler, duygusal dengeyi sağlamana
              yardımcı olabilir.
            </ol>
            <ol>
              6- Olumlu bir destek ağı oluştur: Olumlu ve destekleyici
              insanlarla çevreni güçlendir. Negatif etkilerden uzak durmaya
              çalış ve pozitif ilişkiler kurmaya odaklan.
            </ol>
            <ol>
              7- Kendini kabul et: Kendini olduğun gibi kabul etmek önemlidir.
              Mükemmeliyetçilikten kaçın ve kendini olduğun gibi sev.
            </ol>
          </ul>
          <span>
            Unutma, herkesin duygusal süreçleri farklıdır ve herkesin kendi
            benzersiz yolları vardır. Kendine en uygun olanı bulmak için deneme
            yapmaktan çekinme.
          </span>
        </div>
      ),
    },
  ],
};

export default config;
