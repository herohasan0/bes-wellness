import MetricsSection from "@/Components/MetricsSection";
import PageLayout from "@/Components/PageLayout";
import Image from "next/image";
import ScoreComponent from "@/Components/ScoreComponent";
import IllustrationSection from "@/Components/IllustrationSection";

export default function Home() {
  const Notifications = [
    {
      id: 0,
      text: "Tahlil sonuçlarınızı kontrol etmeyi unutmayın. Vitamin veya mineral eksiklikleri konusunda bir uzmana danışarak sağlıklı bir diyet planı oluşturabilirsiniz",
    },
    {
      id: 1,
      text: "Son tahlil raporunuzdaki değerlere göre, demir seviyeniz düşük olabilir. Demir açısından zengin besinleri tüketmeyi düşünün veya doktorunuza danışarak takviye alın.",
    },
    {
      id: 2,
      text: "Raporlarınıza göre, düzenli egzersiz yapmanız kalp sağlığınıza olumlu etki edebilir. Gün içinde kısa yürüyüşlere zaman ayırmayı deneyin",
    },
    {
      id: 3,
      text: "Kan basıncınızın yüksek olduğunu gösteren sonuçları değerlendirin. Tuz alımınızı azaltmak ve düzenli egzersiz yapmak, kan basıncınızı kontrol altında tutmaya yardımcı olabilir.",
    },
    {
      id: 4,
      text: "Son kan şekeri ölçümlerinize göre, şeker alımınızı gözden geçirin ve sağlıklı karbonhidratlara odaklanın. Diyabet riskinizi azaltmak için yaşam tarzınıza dikkat edin.",
    },
    {
      id: 5,
      text: "Tahlil sonuçlarınızda D vitamini eksikliği belirtileri görülüyor. Güneş ışığına maruz kalmak ve D vitamini takviyesi düşünmek sağlığınıza katkı sağlayabilir.",
    },
    {
      id: 6,
      text: "Son röntgen incelemesi sonuçlarına göre, belinizde hafif bir eğrilik tespit edildi. Düzenli sırt egzersizleri ve doğru duruş alışkanlıkları geliştirmek için fizyoterapistle görüşmeyi düşünün.",
    },
  ];

  const CustomLi = ({ text }) => {
    return <li className="text-sm my-2 list-disc">{text}</li>;
  };

  return (
    <PageLayout>
      <div className="">
        <h5 className="text-2xl mb-2 uppercase">KİŞİSEL BİLGİLER</h5>
        <p className="mb-4 text-sm text-gray-500">
          Sağlık her anınızda yanınızda! Kişisel ekranınız ile, kalp atış
          hızınızdan günlük adım sayınıza, nabzınızdan genel sağlık skorunuza
          kadar birçok önemli bilgiyi bulabilirsiniz. Sağlığınızı anında
          değerlendirerek, size özel sağlık önerileri ve aksiyonlar alarak daha
          sağlıklı bir yaşam için ilk adımınızı atın.
        </p>
      </div>

      <div className="flex">
        <IllustrationSection />
        <div className="w-full">
          <MetricsSection />
          <div className="flex mt-6 space-x-8">
            <ScoreComponent />
            <div>
              <label className="font-medium text-xl">Bildirimler</label>
              <div className="bg-white py-4 mt-2 h-[450px]">
                <ul className="px-8">
                  {Notifications.map((e) => (
                    <CustomLi key={e.id} text={e.text} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
