"use client";
import { ChevronDown, Diamond } from "@/assets/SVG";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

export default function FAQComponent() {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto flex flex-col lg:flex-row py-[40px] lg:py-[88px] gap-[45px]">
      <div className=" lg:w-1/2 flex flex-col items-center lg:items-start">
        <div className="flex items-center border-[1px] px-[11px] py-[2px] gap-[7px] rounded-full border-primary-violet-500 cursor-pointer w-fit">
          <Diamond color="#703be7" width={13} height={13} />
          <p className="text-primary-violet-500 text-[12px] lg:text-[16px]">FAQ</p>
        </div>
        <p className="font-nunito font-extrabold text-[30px] lg:text-[48px] text-center lg:text-start">
          Pertanyaan Seputar Videfly
        </p>
        <p className="font-light text-[12px] lg:text-[18px] text-center lg:text-starttext-center lg:text-start pt-[15px]">
          Videfly punya berbagai pilihan paket harga yang sesuai dengan
          kebutuhan budget kamu
        </p>
      </div>
      <div className="lg:w-1/2">
        <Accordion
          variant="splitted"
          itemClasses={{
            title: "font-semibold text-[12px] lg:text-[18px] text-neutral-200",
            trigger: "px-0 p-[12px] lg:p-[22px] ",
            base: "p-0 shadow-navbar bg-neutral-100",
            content: 'px-[12px] pb-[12px] lg:px-[22px] lg:pb-[22px] text-[12px] lg:text-[18px]'
          }}
          className="gap-[25px] lg:gap-[40px]"
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Apa itu Videfly?"
            indicator={<ChevronDown color="#B0B0B0" />}
          >
            <p>
              Videfly adalah AI video content generator yang memudahkan bisnismu
              dalam mempromosikan produk secara efektif.
            </p>
            <br />
            <p>
              Cukup dengan memasukan link produk, videfly akan secara otomatis
              menghasilkan video berkualitas tinggi.
            </p>
            <br />
            <p>
              Selain itu, Videfly juga dilengkapi dengan fitur AI Avatar yang
              memungkinkanmu untuk memilik avatar yang sudah tersedua atau
              bahkan menciptakan avatar kustom sesuai keinginanmu.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Berapa biaya Videfly?"
            indicator={<ChevronDown color="#B0B0B0" />}
          >
            <p>
              Videfly menawarkan tiga paket yang disesuaikan dengan kebutuhan
              bisnismu:
              <br />
              <br />
              •⁠ ⁠Starter: Gratis (Rp 0) Ideal untuk pemula yang ingin mencoba
              fitur dasar tanpa biaya. Cocok untuk uji coba dan proyek skala
              kecil.
              <br />
              <br />
              •⁠ ⁠Booster: Rp 299.000 Pilihan tepat untuk bisnis yang ingin
              mengembangkan strategi pemasaran dengan fitur lebih canggih
              <br />
              <br />
              •⁠ ⁠Master: Rp 499.000 Paket lengkap untuk bisnis yang serius,
              dengan akses ke semua fitur premium untuk hasil yang lebih optimal
              dan profesional.
            </p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Bagaimana cara menggunakan Videfly?"
            indicator={<ChevronDown color="#B0B0B0" />}
          >
            <p>
              Menggunakan Videfly sangat mudah! Cukup ikuti langkah berikut:
              <br />
              <br />
              1. Daftar atau login ke akun Videfly.
              <br />
              2. Pilih fitur yang inginkamu gunakan, seperti URL to Video atau
              AI Avatar.
              <br />
              3. Masukkan link produk atau pilih opsi avatar.
              <br />
              4. Biarkan AI bekerja dan tunggu hingga video atau avatar selesai
              dibuat.
              <br />
              5. Unduh dan gunakan hasilnya untuk mempromosikan produkmu!
            </p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Bisakah Videfly membuat video produk untuk brand saya?"
            indicator={<ChevronDown color="#B0B0B0" />}
          >
            <p>
              Tentu saja! Videfly dirancang khusus untuk membantu bisnismu
              membuat video produk yang menarik dan profesional.
              <br />
              <br />
              Kamu bisa menggunakannya untuk berbagai jenis brand, baik besar
              maupun kecil. Dengan berbagai fitur AI yang canggih, Videfly
              memastikan video produkmu terlihat menonjol di pasar.
            </p>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title="Bisakah Videfly membuat video produk untuk brand saya?"
            indicator={<ChevronDown color="#B0B0B0" />}
          >
            <p>
              Videfly menawarkan dua kategori fitur utama:
              <br />
              <br />
              1. URL to Video
              <br />
              •⁠ AI Video Generation: Mengubah link produk menjadi video
              promosi yang menarik.
              <br />
              •⁠ AI Content Manager: Mengelola konten video dengan mudah dan
              efisien.
              <br />
              •⁠ AI Seller Assistant: Membantu dalam menciptakan video yang
              disesuaikan dengan strategi penjualanmu.
              <br />
              <br />
              2. AI Avatar
              <br />
              •⁠ Stock Avatar: Pilih dari berbagai avatar yang sudah tersedia.
              <br />
              •⁠ Studio Avatar: Kustomisasi avatar secara mendalam di studio
              kami.
              <br />
              •⁠ Instant Avatar: Buat avatar pribadi dengan cepat dan mudah.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
