import PageLayout from "@/components/PageLayout";
import TableComponent from "@/components/TableComponent";
import React from "react";

export default function index() {
  const headers = [
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
        <h5 className="text-2xl mb-2 uppercase">TAHLİLLERİM</h5>
        <p className="mb-4 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <TableComponent columns={headers} data={data} />
      </div>
    </PageLayout>
  );
}
