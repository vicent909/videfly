import React from "react";

export default function LinkProduk() {
  return (
    <div className="relative p-[6px] w-fit">
      <div className="link-produk w-fit bg-primary-violet-50 p-[10px] border-[2px] border-image-gradient-custom border-gradient ">
        <p className="font-nunito font-bold text-[64px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent bg-clip- border-transparent">
          Link Produk
        </p>
      </div>
      <div className="w-[12px] h-[12px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] absolute top-0 left-0 flex items-center justify-center">
        <div className="w-[8px] h-[8px] bg-white" />
      </div>
      <div className="w-[12px] h-[12px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] absolute top-0 right-0 flex items-center justify-center">
        <div className="w-[8px] h-[8px] bg-white" />
      </div>
      <div className="w-[12px] h-[12px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] absolute bottom-0 left-0 flex items-center justify-center">
        <div className="w-[8px] h-[8px] bg-white" />
      </div>
      <div className="w-[12px] h-[12px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] absolute bottom-0 right-0 flex items-center justify-center">
        <div className="w-[8px] h-[8px] bg-white" />
      </div>
    </div>
  );
}
