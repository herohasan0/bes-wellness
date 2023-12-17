import PaginationIcon from "@/Components/Icons/PaginationIcon";
import SparklesIcon from "@/Components/Icons/SparklesIcon";
import OpenModal from "@/Components/OpenModal";
import PageLayout from "@/Components/PageLayout";
import TableComponent from "@/Components/TableComponent";
import React, { useCallback, useState, Fragment } from "react";

export default function Analysis() {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandle = () => {
    setIsOpen(false);
  };

  const headers = [
    {
      // Make an expander cell
      Header: () => null, // No header
      id: "expander", // It needs an ID
      Cell: ({ row }) => (
        <span
          {...row.getToggleRowExpandedProps()}
          className="flex items-center justify-center "
        >
          {row.isExpanded ? (
            <div className="rotate-360">
              <PaginationIcon rotate_degree={90} />
            </div>
          ) : (
            <PaginationIcon />
          )}
        </span>
      ),
      width: 12,
      maxWidth: 12,
    },
    {
      Header: "Kurum Adi",
      accessor: "kurumAdi",
      //   Cell: ({ row }) => <div>sdfasdf</div>,
    },
    {
      Header: "Islem Adi",
      accessor: "islemAdi",
    },
    {
      Header: "Sonuc",
      accessor: "sonuc",
    },
    {
      Header: "Sonuç Birimi",
      accessor: "sonucBirimi",
    },
    {
      Header: "Referans Degeri",
      accessor: "referansDegeri",
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
    {
      Header: "Tarih",
      accessor: "tarih",
    },
  ];

  const data = [
    {
      kurumAdi: "ISTANBUL ÖZEL SAFAK TIP MERKEZI",
      islemAdi: "Ortalama eritrosit hacmi (MCV)",
      sonuc: 91,
      sonucBirimi: "g/dL",
      referansDegeri: "30 - 36",
      tarih: "03.10.2023",
    },
    {
      kurumAdi: "ISTANBUL HASEKI EGITIM VE ARASTIRMA HASTANESI",
      islemAdi: "Nötrofil orani (NEUT%)",
      sonuc: 65,
      sonucBirimi: "%",
      referansDegeri: "40,3 - 74,8",
      tarih: "01.08.2023",
    },
    {
      kurumAdi: "KIRKLARELI EGITIM VE ARASTIRMA HASTANESI",
      islemAdi: "Eozinofil orani (EO%)",
      sonuc: 0.2,
      sonucBirimi: "%",
      referansDegeri: "0 - 7",
      tarih: "01.05.2023",
    },
    {
      kurumAdi: "KUTAHYA EGITIM VE ARASTIRMA HASTANESI",
      islemAdi: "Lenfosit mutlak savis (LYMPH#)",
      sonuc: 0.99,
      sonucBirimi: "10*3/uL",
      referansDegeri: "0.03 - 0.7",
      tarih: "08.04.2023",
    },
    {
      kurumAdi: "ESKISEHIR EGITIM VE ARASTIRMA HASTANESI",
      islemAdi: "Bazofil mutlak sayisi (BASO#)",
      sonuc: 0.02,
      sonucBirimi: "g/dL",
      referansDegeri: "13 - 17.5",
      tarih: "03.03.2023",
    },
  ];

  const SubrowData = [
    {
      islemAdi: "Lökosit (WBC)",
      sonuc: "12.11",
      sonucBirimi: "10*3/uL",
      referansDegeri: "4.6 - 10.2",
    },
    {
      islemAdi: "Nötrofil orani (NEUT%)",
      sonuc: "73,2",
      sonucBirimi: "%",
      referansDegeri: "40,3 - 74,8",
    },
    {
      islemAdi: "Lenfosit orani (LYMPH%)",
      sonuc: "18.2",
      sonucBirimi: "%",
      referansDegeri: "12,2 - 47,1",
    },
    {
      islemAdi: "Monosit orani (MONO%)",
      sonuc: "8.2",
      sonucBirimi: "%",
      referansDegeri: "4.4 - 12.3",
    },
    {
      islemAdi: "Eozinofil orani (EO%)",
      sonuc: "0.2",
      sonucBirimi: "%",
      referansDegeri: "0 - 7",
    },
    {
      islemAdi: "Nötrofil mutlak say/Lenfosit mutlak",
      sonuc: "4.01",
      sonucBirimi: "%",
      referansDegeri: "0 - 1,2",
    },
    {
      islemAdi: "savI",
      sonuc: "0.2",
      sonucBirimi: "10*3/ul",
      referansDegeri: "1,82 - 7.42",
    },
    {
      islemAdi: "Bazofil orani (BASO%)",
      sonuc: "8,87",
      sonucBirimi: "10*3/uL",
      referansDegeri: "0.85 - 3",
    },
    {
      islemAdi: "Nötrofil mutlak savisI (NEUT#)",
      sonuc: "2.21",
      sonucBirimi: "10*3/uL",
      referansDegeri: "0.19 - 0.77",
    },
    {
      islemAdi: "Lenfosit mutlak savis (LYMPH#)",
      sonuc: "0.99",
      sonucBirimi: "10*3/uL",
      referansDegeri: "0.03 - 0.7",
    },
    {
      islemAdi: "Monosit mutlak savisi (MONO#)",
      sonuc: "0.02",
      sonucBirimi: "10*3/uL",
      referansDegeri: "0.01 - 0.2",
    },
    {
      islemAdi: "Eozinofil mutlak sayisi (EO#)",
      sonuc: "0.02",
      sonucBirimi: "10*6/uL",
      referansDegeri: "4.5 - 5.9",
    },
    {
      islemAdi: "Bazofil mutlak sayisi (BASO#)",
      sonuc: "0.02",
      sonucBirimi: "g/dL",
      referansDegeri: "13 - 17.5",
    },
    {
      islemAdi: "Eritrosit (RBC)",
      sonuc: "4.30",
      sonucBirimi: "%",
      referansDegeri: "40 - 52",
    },
    {
      islemAdi: "Hemoglobin (HGB)",
      sonuc: "13.4",
      sonucBirimi: "fl",
      referansDegeri: "80 - 97",
    },
    {
      islemAdi: "Hematokrit (HCT)",
      sonuc: "39.5",
      sonucBirimi: "pg",
      referansDegeri: "25 - 34",
    },
    {
      islemAdi: "Ortalama eritrosit hacmi (MCV)",
      sonuc: "91.9",
      sonucBirimi: "g/dL",
      referansDegeri: "30 - 36",
    },
    {
      islemAdi: "Ortalama eritrosit hemoglobini(MCH)",
      sonuc: "31.2",
      sonucBirimi: "10*3/uL",
      referansDegeri: "142 - 424",
    },
    {
      islemAdi: "Ortalama eritrosit hemoglobini(MCHC)",
      sonuc: "33,9",
      sonucBirimi: "fl",
      referansDegeri: "9.7 - 11.9",
    },
    {
      islemAdi: "Trombosit (PLT)",
      sonuc: "256",
      sonucBirimi: "fl",
      referansDegeri: "80 - 97",
    },
    {
      islemAdi: "Ortalama trombosit hacmi (MPV)",
      sonuc: "9.4",
      sonucBirimi: "fl",
      referansDegeri: "9.7 - 11.9",
    },
  ];

  const SubrowHeader = [
    {
      Header: "Islem Adi",
      accessor: "islemAdi",
    },
    {
      Header: "Sonuc",
      accessor: "sonuc",
    },
    {
      Header: "Sonuç Birimi",
      accessor: "sonucBirimi",
    },
    {
      Header: "Referans Degeri",
      accessor: "referansDegeri",
    },
  ];

  const renderSubTableComponent = useCallback(
    (row) => (
      <div className="p-8">
        <TableComponent data={SubrowData} columns={SubrowHeader} />
      </div>
    ),
    []
  );

  return (
    <>
      <PageLayout>
        <div className="">
          <h5 className="text-2xl mb-2 uppercase">TAHLİLLERİM</h5>
          <p className="mb-4 text-sm text-gray-500">
            Sağlığınızın detayları parmaklarınızın ucunda! Tahlillerim
            ekranında, tahlil raporlarınızı görüntüleyin ve Asistanıma Sor
            butonu ile AI tarafından anında analiz edilmesini sağlayın. Hızlı,
            güvenilir ve kolay bir şekilde sağlık durumunuz hakkında daha fazla
            bilgi edinin.
          </p>
          <TableComponent
            columns={headers}
            data={data}
            subRowComponenetHandler={renderSubTableComponent}
          />
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
            Bazofil oranınızın sonucu 10.2 olarak belirlenmiş ve referans
            aralığı 0 - 1.2 olarak verilmiştir. Sonucunuz referans aralığının
            üzerinde olduğu için, bazofil oranınız yüksek olarak
            değerlendirilebilir. Bu durum bazen alerjik reaksiyonlar,
            enfeksiyonlar veya bazı kan hastalıkları gibi durumlarla ilişkili
            olabilir. Ancak, kesin bir teşhis koymak için doktorunuzla
            görüşmeniz önemlidir. Doktorunuz, test sonuçlarınızı ve sağlık
            durumunuzu değerlendirerek size uygun bir tedavi planı önerebilir.
          </p>

          <p>
            Bazofil oranının referans aralığından yüksek olması, vücudunuzda
            bazofil adı verilen beyaz kan hücrelerinin normalden daha fazla
            olduğunu gösterebilir. Bazofiller, bağışıklık sisteminizin bir
            parçasıdır ve alerjik reaksiyonlar, enfeksiyonlar veya inflamasyon
            gibi durumlarda artabilirler.
          </p>

          <p>
            Ancak, sadece bazofil oranının yüksek olması tek başına bir teşhis
            koymak için yeterli değildir. Bu nedenle, bir doktorunuzla
            görüşmeniz ve daha fazla test yapılması gerekebilir. Doktorunuz,
            tıbbi geçmişinizi, semptomlarınızı ve diğer kan testi sonuçlarınızı
            değerlendirerek size daha kesin bir teşhis koyabilir.
          </p>

          <p>
            Unutmayın, herhangi bir sağlık sorunu hakkında kesin bir teşhis
            koymak için bir doktora danışmanız önemlidir. Bu sadece genel bilgi
            sağlamak amacıyla verilen bir yanıttır.
          </p>
        </div>
      </OpenModal>
    </>
  );
}
