"use client";

import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Image from "next/image";
import Link from "next/link";

export default function PrimeSidebarComponent() {
  const [visible, setVisible] = useState(false); // Başlangıçta kapalı

  return (
    <>
      {/* Hamburger menü: her boyutta görünür */}
      <Button
        icon="pi pi-bars"
        className="fixed top-4 left-4 z-[1001] p-button-rounded"
        onClick={() => setVisible(true)}
        aria-controls="sidebar"
        aria-expanded={visible}
      />

      {/* Sidebar */}
      <Sidebar
        id="sidebar"
        visible={visible}
        onHide={() => setVisible(false)}
        modal={true} // Overlay gibi açılacak
        className="bg-gray-100 shadow-md border-r w-64 h-full"
        style={{ zIndex: 1000 }} // Overlay üstte kalması için
      >
        <div className="flex flex-col h-full">
          {/* Header / Logo */}
          <div className="p-4 font-bold text-green-700 border-b flex items-center justify-center group">
            <Image
              src="/images/young-logo.jpeg"
              alt="Young Logo"
              width={48}
              height={48}
              className="rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
            />
          </div>

          {/* Menü */}
          <ul className="flex-1 p-4 space-y-2">
            {[
              { icon: "pi pi-home", label: "Ana  Sayfa", url: "/" },
              { icon: "pi pi-info-circle", label: "Hakkımızda", url: "/about" },
              { icon: "pi pi-briefcase", label: "Hizmetlerimiz", url: "/services" },
              { icon: "pi pi-calendar", label: "Programlar", url: "/programs" },
              { icon: "pi pi-phone", label: "İletişim", url: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                {item.url ? (
                  <Link
                    href={item.url}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 cursor-pointer"
                  >
                    <i className={`${item.icon} text-green-600`}></i>
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 cursor-pointer">
                    <i className={`${item.icon} text-green-600`}></i>
                    <span>{item.label}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="p-4 border-t text-center text-xs text-green-400">
            You New Generation © {new Date().getFullYear()}
          </div>
        </div>
      </Sidebar>
    </>
  );
}
