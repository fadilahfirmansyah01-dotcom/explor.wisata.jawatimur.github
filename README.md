# Website Wisata Jawa Timur

Website portal panduan pariwisata modern, interaktif, dan responsif yang berfokus **100% pada destinasi wisata di Jawa Timur**, mencakup 3 kategori utama:
1. **JelajahJatim** — Destinasi primadona & ikonik Jawa Timur (Gunung Bromo, Kawah Ijen Blue Fire, Air Terjun Tumpak Sewu, Taman Nasional Baluran, Air Terjun Madakaripura, Kota Wisata Batu & Museum Angkut, Taman Safari Prigen).
2. **PesonaLokal Jatim** — Wisata budaya daerah, desa wisata & *hidden gems* Jawa Timur (Desa Adat Osing Kemiren Banyuwangi, Situs Majapahit Trowulan Mojokerto, Kawah Wurung Bondowoso, Desa Wisata Pujon Kidul Malang, Kampung Warna-Warni Jodipan, Coban Rondo).
3. **Bahari & Pesisir** — Keindahan pantai eksotis & kepulauan Jawa Timur (Pantai Klayar & Pantai Kasap Pacitan, Pantai Teluk Asmara Malang Selatan, Tanjung Papuma Jember, Gili Iyang Pulau Oksigen Sumenep Madura, Pantai Sukamade Meru Betiri).

---

## 🌟 Fitur Utama Website

- **Katalog Lengkap Jawa Timur**: Seluruh 19 destinasi berasal dari berbagai wilayah Jawa Timur (Malang, Kota Batu, Probolinggo, Pasuruan, Banyuwangi, Bondowoso, Situbondo, Lumajang, Jember, Pacitan, Mojokerto, hingga Madura).
- **Pencarian Real-Time**: Ketik nama destinasi, kabupaten/kota, atau tag untuk memfilter secara instan.
- **Filter Kategori Instan**: Beralih cepat antara *Semua Wisata Jatim*, *JelajahJatim*, *PesonaLokal*, *Bahari & Pesisir*, dan *Favorit Saya*.
- **Modal Detail Interaktif**:
  - Foto resolusi tinggi & badge kategori
  - Rating bintang & ulasan wisatawan
  - Panduan kisaran tiket masuk 2026 untuk setiap destinasi & waktu kunjungan terbaik (*golden hours*); tarif perlu dikonfirmasi ke pengelola
  - Deskripsi lengkap & daya tarik utama (*highlights*)
  - Fasilitas pendukung (Jeep 4x4, masker respirator, pemandu, mushola, toilet)
  - Panduan membeli tiket dan tautan pencarian hotel/penginapan serta vila di sekitar destinasi
  - Tombol langsung navigasi ke **Google Maps**
  - Tombol simpan ke **Favorit (Wishlist)**
  - Tombol bagikan informasi wisata
- **Fitur Favorit (Wishlist)**: Menyimpan destinasi impian Anda di browser dengan `localStorage`.
- **Panduan Wisata Jawa Timur**: Tips menghadapi suhu dingin pegunungan Bromo/Ijen, waktu musim kemarau terbaik, SOP kawah aktif, dan etika adat suku Tengger & Osing.
- **Responsif & Ringan**: Tampilan optimal di HP, tablet, maupun layar PC/Laptop.

---

## 📂 Struktur File

```
website wisata/
│
├── index.html          # Halaman utama website Wisata Jawa Timur
├── README.md           # Dokumentasi proyek
├── css/
│   └── style.css       # Styling kustom, animasi, glassmorphism, dan badge kategori
└── js/
    ├── data.js         # Basis data lengkap destinasi wisata Jawa Timur & panduan
    └── app.js          # Logika aplikasi (filter, live search, modal detail, favorit, toast)
```

---

## 🚀 Cara Menjalankan Website

Cukup buka file `index.html` dengan cara:
- **Klik dua kali (Double-click)** file `index.html` di File Explorer, atau
- Buka via browser pilihan Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dsb).

## 🌐 Publikasikan dengan GitHub Pages

Workflow GitHub Actions tersedia di `.github/workflows/pages.yml`. Setelah workflow ini masuk ke repositori GitHub:

1. Buka repositori di GitHub, lalu pilih **Settings → Pages**.
2. Pada **Build and deployment**, pilih **GitHub Actions** sebagai sumber.
3. Kirim perubahan ke branch `main` atau `master`. Workflow akan menerbitkan situs secara otomatis.
4. Setelah workflow berhasil, buka **Settings → Pages** untuk melihat tautan situs. Biasanya formatnya `https://NAMA-PENGGUNA.github.io/NAMA-REPOSITORI/`.

Jika perintah `git` belum dikenali di PowerShell, pasang **Git for Windows**, pilih opsi agar Git tersedia dari command line, lalu buka ulang terminal sebelum menjalankan perintah Git.
