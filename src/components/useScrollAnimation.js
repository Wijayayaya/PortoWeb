import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".slide-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Tambahkan kelas 'active' jika elemen masuk ke viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add("active");
        }
        // Hapus kelas 'active' hanya jika elemen keluar di atas viewport
        else if (rect.bottom > 0) {
          el.classList.remove("active");
        }
      });
    };

    // Pasang event listener
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
