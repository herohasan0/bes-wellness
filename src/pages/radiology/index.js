import PageLayout from "@/Components/PageLayout";
import TableComponent from "@/Components/TableComponent";
import Image from "next/image";
import React, { useState } from "react";
import OpenModal from "@/Components/OpenModal";
import SparklesIcon from "@/Components/Icons/SparklesIcon";

export default function Radiology() {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandle = () => {
    setIsOpen(false);
  };

  const headers = [
    {
      Header: "Tarih",
      accessor: "tarih",
    },
    {
      Header: "Ön İzleme",
      accessor: "radyo",
      Cell: ({ row }) => (
        <div>
          <Image width={60} height={60} src={"/rontgen-1.jpeg"} />
        </div>
      ),
    },

    {
      Header: "Kurum Adi",
      accessor: "kurumAdi",
      //   Cell: ({ row }) => <div>sdfasdf</div>,
    },

    {
      Header: "Açıklama",
      accessor: "islemAdi",
    },

    {
      Header: "Asistana Sor",
      accessor: "rapor",
      Cell: ({}) => (
        <div className="pl-6" onClick={() => setIsOpen(true)}>
          <SparklesIcon />
        </div>
      ),
    },
  ];

  const data = [
    {
      tarih: "03.10.2023",
      kurumAdi: "ISTANBUL ÖZEL SAFAK TIP MERKEZI",
      islemAdi: "Omurga kırığı",
    },
    {
      tarih: "15.06.2023",
      kurumAdi: "ISTANBUL HASEKI EGITIM VE ARASTIRMA HASTANESI",
      islemAdi: "BT, Beyin",
    },
    {
      tarih: "01.03.2023",
      kurumAdi: "KIRKLARELI EGITIM VE ARASTIRMA HASTANESI",
      islemAdi: "Vertebra grafi.",
    },
    {
      tarih: "03.10.2023",
      kurumAdi: "ISTANBUL ÖZEL SAFAK TIP MERKEZI",
      islemAdi: "Omurga kırığı",
    },
    {
      tarih: "03.10.2023",
      kurumAdi: "ISTANBUL ÖZEL SAFAK TIP MERKEZI",
      islemAdi: "Omurga kırığı",
    },
    {
      tarih: "03.10.2023",
      kurumAdi: "ISTANBUL ÖZEL SAFAK TIP MERKEZI",
      islemAdi: "Omurga kırığı",
    },
    {
      tarih: "03.10.2023",
      kurumAdi: "ISTANBUL ÖZEL SAFAK TIP MERKEZI",
      islemAdi: "Omurga kırığı",
    },
  ];

  return (
    <>
      <PageLayout>
        <div className="">
          <h5 className="text-2xl mb-2 uppercase">RADYOLOJİK GÖRÜNTÜLERİM</h5>
          <p className="mb-4 text-sm text-gray-500">
            Şeffaf bir bakış açısıyla sağlığınızı gözler önüne serin! Radyolojik
            görüntülerinizi bu ekranda kolayca gözden geçirin. Yenilikçi AI
            teknolojisi ile görüntülerin hızlı analizi, size anında sonuçlar
            sunarak sağlık durumunuz hakkında daha fazla bilgi edinmenizi
            sağlar.
          </p>
          <TableComponent columns={headers} data={data} />
        </div>
      </PageLayout>
      <OpenModal
        isOpen={isOpen}
        closeModalProp={closeHandle}
        title="Analiz Sonucu"
        maxWidth="w-[600px]"
        containerClassName="relative"
        className="!px-12 py-10"
      >
        <button
          className="absolute right-10 top-9 outline-0"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          x
        </button>
        <div className="text-sm flex items-center justify-center flex-col space-y-3 mt-3">
          <p>
            Öncelikle, ben bir yapay zeka modeliyim ve tıbbi bir uzman değilim.
            Bu nedenle, profesyonel bir tıbbi teşhis koymak için gerekli
            uzmanlığa ve lisansa sahip değilim, sizinle bu konuda herhangi bir
            bilgi paylaşamam. Şu anda gördüğünüz, bilgisayarınızın ekranından
            size sunulan radyoloji görüntüsü hakkında özel yapan bir yapay zeka
            tarafından yapılmıştır. Lomber (bel) omurga bölgesinin bir
            bilgisayarlı tomografi (BT) taramasının sagittal (yan) kesitinin
            görüntüsüdür. Gözle görülür omurların ve potansiyel tansiyal
            isaretlerin bir listesi şu şekilde olabilir:
          </p>
          <ol className="list-decimal">
            <li>
              Vertebra (omur) yapılarında, özellikle Lomber bölgede, belirgin
              düzensizlikler ve yapısal anomoliler görünmektedir. Bu durum,
              dejeneratif disk hastalığı, vertebra kırıkları veya enfeksiyon
              gibi durumlar düşündürebilir.
            </li>
            <li className="mt-3">
              İntervertebral disk alanlarında yükseklik azalması ve belki de
              disk dejenerasyonu işaret eden bulgular gözlemlenebilir. Bu tür
              bir dejenerasyon kronik sırt ağrısı, omurga stabilitesinde azalma
              veya sinir basısını gibi semptomlara yol açabilir.
            </li>
            <li className="mt-3">
              Omurga eğriliği (skolyoz veya lordoz gibi) göze çarpmaktadır. Bu,
              omurga problemleri ile bir şekilde eğilmesine veya dönmesine neden
              olabilir ve ağrı, hareket kısıtlılığı ve diğer nörolojik
              semptomlara yol açabilir.
            </li>
            <li className="mt-3">
              Belirli omurlar arasında, özellikle diskler üzerine oluşan
              posteriyor (arka) kısımında, potansiyel spinal stenoz veya
              kısalmış boşluklar bulunabilir ki bu durumlar da omurilik veya
              sinirler üzerine baskı yaparak ağrı, uyuşma veya diğer semptomlara
              neden olabilir.
            </li>
          </ol>
          <p>
            Bu bulgular ve diğer olası semptomlar, ilgili tıbbi testler (MR
            görüntüleme gibi) üzerinebilir. Ayrıca, bir medikal tedavi
            yapabilmek için, gerekli tıbbi müdahale ve tedavi yöntemleri tıbbi
            olarak tedavi edilemezler. Gerçek bir teşhis ve tedavi planı için
            lisanslı bir tıbbi uzmana danışmalısınız.
          </p>
        </div>
      </OpenModal>
    </>
  );
}
