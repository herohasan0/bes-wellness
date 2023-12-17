import Image from "next/image";
import React from "react";

export default function IllustrationSection() {
  return (
    <div className="w-[450px] h-[80vh] relative -ml-12">
      <Image fill src="/img/doctor-illustration.png" />
    </div>
  );
}
