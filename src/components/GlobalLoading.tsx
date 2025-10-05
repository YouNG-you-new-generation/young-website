"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GlobalLoading() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Minimum 0.3 saniye spinner göster
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Spinner + Logo kapsayıcı */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
        {/* Spinner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/young-logo.jpeg"
            alt="Young Logo"
            width={96}  // logonun gerçek boyutu
            height={96}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>

    </div>
  );
}
