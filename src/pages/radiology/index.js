import PageLayout from "@/Components/PageLayout";
import TableComponent from "@/Components/TableComponent";
import Image from "next/image";
import React from "react";

export default function index() {
  const headers = [
    {
      Header: "Kurum Adi",
      accessor: "kurumAdi",
      //   Cell: ({ row }) => <div>sdfasdf</div>,
    },
    {
      Header: "Radyo",
      accessor: "radyo",
      Cell: ({ row }) => (
        <div>
          <Image
            width={60}
            height={60}
            src={
              "https://images.unsplash.com/photo-1695653422881-6372da5e29e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      ),
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
      Header: "Rapor",
      accessor: "rapor",
      Cell: ({}) => (
        <div className="pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
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
      kurumAdi: "Acibadem",
      islemAdi: "Tam Kan Sayimi (Hemogram)",
      sonuc: 300,
      sonucBirimi: "ug/dL",
      referansDegeri:
        "< 200 * Karar Sinir : > 200 mg/dL Kardiyovasküler hastalk riski",
      rapor: "Goruntule",
      tarih: "03.10.2023",
    },
    {
      kurumAdi: "Acibadem",
      islemAdi: "Tam Kan Sayimi (Hemogram)",
      sonuc: 300,
      sonucBirimi: "ug/dL",
      referansDegeri:
        "< 200 * Karar Sinir : > 200 mg/dL Kardiyovasküler hastalk riski",
      rapor: "Goruntule",
      tarih: "03.10.2023",
    },
    {
      kurumAdi: "Acibadem",
      islemAdi: "Tam Kan Sayimi (Hemogram)",
      sonuc: 300,
      sonucBirimi: "ug/dL",
      referansDegeri:
        "< 200 * Karar Sinir : > 200 mg/dL Kardiyovasküler hastalk riski",
      rapor: "Goruntule",
      tarih: "03.10.2023",
    },
    {
      kurumAdi: "Acibadem",
      islemAdi: "Tam Kan Sayimi (Hemogram)",
      sonuc: 300,
      sonucBirimi: "ug/dL",
      referansDegeri:
        "< 200 * Karar Sinir : > 200 mg/dL Kardiyovasküler hastalk riski",
      rapor: "Goruntule",
      tarih: "03.10.2023",
    },
    {
      kurumAdi: "Acibadem",
      islemAdi: "Tam Kan Sayimi (Hemogram)",
      sonuc: 300,
      sonucBirimi: "ug/dL",
      referansDegeri:
        "< 200 * Karar Sinir : > 200 mg/dL Kardiyovasküler hastalk riski",
      rapor: "Goruntule",
      tarih: "03.10.2023",
    },
  ];

  return (
    <PageLayout>
      <div className="">
        <h5 className="text-2xl mb-4 uppercase">RADYOLOJİK GÖRÜNTÜLERİM</h5>
        <TableComponent columns={headers} data={data} />
      </div>
    </PageLayout>
  );
}