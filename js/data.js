// Data Destinasi Wisata Khusus Jawa Timur
// Kategori:
// - 'ikon'   : JelajahJatim (Destinasi Ikonik & Primadona Jatim)
// - 'lokal'  : PesonaLokal (Budaya Daerah, Desa Wisata & Hidden Gems Jatim)
// - 'bahari' : Bahari & Pesisir (Pantai Eksotis & Kepulauan Jatim)

const destinationsData = [
  // =========================================================================
  // --- 1. JELAJAH JATIM (DESTINASI IKONIK & PRIMADONA JAWA TIMUR) ---
  // =========================================================================
  {
    id: "gunung-bromo",
    category: "ikon",
    categoryLabel: "JelajahJatim",
    badge: "Ikon Dunia Jatim",
    name: "Gunung Bromo & Lautan Pasir",
    location: "TN Bromo Tengger Semeru (Probolinggo, Pasuruan, Malang)",
    province: "Jawa Timur",
    tag: "Gunung Berapi & Kaldera",
    rating: 4.9,
    reviewsCount: 12450,
    ticketPrice: "WNI: Rp54.000 weekday / Rp79.000 akhir pekan",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Keajaiban matahari terbit berlatar kaldera purba, lautan pasir berbisik, dan kawah aktif yang terus mengepulkan asap megah.",
    description: "Gunung Bromo (2.329 mdpl) adalah ikon pariwisata Jawa Timur yang mendunia. Berada di kawasan Taman Nasional Bromo Tengger Semeru, Bromo menyajikan lanskap dramatis berpadu dengan kearifan suku Tengger. Wisatawan dapat menaiki jeep 4x4 melintasi Lautan Pasir Berbisik, mendaki 250 anak tangga menuju bibir kawah aktif, serta mengagumi Bukit Teletubbies dan Pasir Berbisik.",
    highlights: [
      "Menyaksikan Golden Sunrise spektakuler dari Penanjakan 1, Kingkong Hill, atau Seruni Point",
      "Sensasi petualangan mengendarai Jeep 4x4 melintasi Lautan Pasir Berbisik",
      "Mendaki tangga menuju bibir kawah aktif vulkanik yang bergemuruh",
      "Panorama sabana rumput hijau di Bukit Teletubbies dan Bukit Widodaren",
      "Mengenal tradisi sakral Yadnya Kasada suku asli Tengger"
    ],
    facilities: ["Persewaan Jeep Hardtop 4x4", "Penyewaan Kuda Wisata", "Toko Jaket & Sarung Tangan", "Warung Kopi & Jagung Bakar", "Toilet & Mushola di Titik Sunrise"],
    bestTime: "Mei - Oktober (Musim kemarau, mulai pukul 03.00 WIB untuk berburu fajar)",
    mapsQuery: "Gunung+Bromo+Jawa+Timur"
  },
  {
    id: "kawah-ijen",
    category: "ikon",
    categoryLabel: "JelajahJatim",
    badge: "Fenomena Langka Dunia",
    name: "Kawah Ijen & Blue Fire",
    location: "Perbatasan Banyuwangi & Bondowoso",
    province: "Jawa Timur",
    tag: "Fenomena Api Biru & Kawah",
    rating: 4.9,
    reviewsCount: 8900,
    ticketPrice: "WNI: Rp20.000 weekday / Rp30.000 akhir pekan",
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Fenomena api biru alami (Blue Fire) yang hanya ada dua di dunia serta danau kawah asam berwarna toska terluas di bumi.",
    description: "Kawah Ijen (2.386 mdpl) adalah geopark global UNESCO yang memukau dunia. Daya tarik puncaknya adalah kobaran api biru (Blue Fire) elektrik di dasar kawah yang hanya dapat disaksikan pada kegelapan malam. Saat mentari terbit, permukaan danau kawah asam toska terbentang anggun dinaungi kabut solfatara dan ketangguhan para penambang belerang tradisional.",
    highlights: [
      "Menyaksikan langsung kobaran api biru (Blue Fire) langka dunia pada pukul 02.00 - 04.00 WIB",
      "Panorama fajar di danau kawah asam hijau toska terbesar di Pulau Jawa",
      "Menyaksikan etos perjuangan penambang belerang tradisional dengan pikulan bambu",
      "Jalur trekking asri Paltuding yang dihiasi pohon cantigi dan pakis purba"
    ],
    facilities: ["Penyewaan Masker Gas Resmi (Respirator)", "Taksi Ijen (Troli dorong pendakian)", "Pos Medis Paltuding", "Pemandu Berlisensi HPI", "Kantin & Pusat Informasi Geopark"],
    bestTime: "Juli - September (Mulai trekking pukul 01.30 WIB dari Pos Paltuding)",
    mapsQuery: "Kawah+Ijen+Banyuwangi"
  },
  {
    id: "tumpak-sewu",
    category: "ikon",
    categoryLabel: "JelajahJatim",
    badge: "Niagara van Java",
    name: "Air Terjun Tumpak Sewu",
    location: "Pronojiwo Lumajang & Ampelgading Malang",
    province: "Jawa Timur",
    tag: "Air Terjun Raksasa",
    rating: 4.9,
    reviewsCount: 6200,
    ticketPrice: "Rp10.000 (panorama) / Rp20.000 (turun ke lembah)",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Tirai air terjun melingkar setinggi 120 meter yang jatuh anggun ke lembah ngarai purba berlatar siluet Gunung Semeru.",
    description: "Sering dijuluki sebagai 'Niagara van Java', Tumpak Sewu menawarkan formasi air terjun bertirai melingkar tercantik di Indonesia. Dari gardu pandang atas Panorama, pengunjung disuguhkan pemandangan megah deretan mata air alami yang terjun ke jurang hijau. Bagi pecinta petualangan, rute turun ke dasar lembah menghadirkan akses menuju Goa Tetes dan Telaga Biru.",
    highlights: [
      "Pemandangan spektakuler gardu pandang atas Panorama berlatar puncak Gunung Semeru",
      "Trekking susur lembah ngarai yang memacu adrenalin",
      "Eksplorasi Goa Tetes dengan rembesan air dinding batuan stalaktit",
      "Spot fotografi lanskap kelas dunia yang sangat ikonik"
    ],
    facilities: ["Gardu Pandang Atas dengan Pagar Pengaman", "Jalur Tangga Bambu & Tali Baja", "Pemandu Lokal Trekking", "Warung Makanan & Minuman Hangat", "Area Parkir Motor & Mobil"],
    bestTime: "Pukul 07.00 - 10.00 WIB saat cahaya matahari pagi memecah kabut air",
    mapsQuery: "Air+Terjun+Tumpak+Sewu+Lumajang"
  },
  {
    id: "tn-baluran",
    category: "ikon",
    categoryLabel: "JelajahJatim",
    badge: "Africa van Java",
    name: "Taman Nasional Baluran",
    location: "Banyuputih, Situbondo & Banyuwangi",
    province: "Jawa Timur",
    tag: "Savana & Suaka Margasatwa",
    rating: 4.8,
    reviewsCount: 5400,
    ticketPrice: "WNI: Rp21.000 weekday / Rp31.000 hari libur",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Hamparan savana Bekol seluas ratusan hektar tempat kawanan banteng liar, rusa timor, merak hijau, dan monyet ekor panjang berkeliaran bebas.",
    description: "Taman Nasional Baluran menghadirkan nuansa alam liar benua Afrika di ujung timur Pulau Jawa. Di Savana Bekol, Anda akan melihat lanskap padang rumput berlatar Gunung Baluran yang gagah dengan pohon-pohon akasia khas. Tak jauh dari padang savana, terdapat Pantai Bama yang berpasir putih jernih dan hutan bakau dengan titian jembatan kayu estetik.",
    highlights: [
      "Menara pengamatan Savana Bekol untuk melihat kawanan rusa dan banteng Jawa",
      "Pohon eksotis mirip Acacia Afrika yang sangat fotogenik",
      "Pantai Bama berpasir putih jernih dengan kera abu-abu yang ramah",
      "Jelajah titian kayu mangrove menyusuri hutan bakau pesisir pantai"
    ],
    facilities: ["Wisma Penginapan Taman Nasional", "Kantin Savana Bekol", "Menara Pandang Satwa", "Penyewaan Kano Pantai Bama", "Area Parkir Wisata Luas"],
    bestTime: "Agustus - Oktober (Musim kemarau saat savana menguning eksotis mirip padang Afrika)",
    mapsQuery: "Taman+Nasional+Baluran+Situbondo"
  },
  {
    id: "madakaripura",
    category: "ikon",
    categoryLabel: "JelajahJatim",
    badge: "Pertapaan Gajah Mada",
    name: "Air Terjun Madakaripura",
    location: "Lumbang, Kab. Probolinggo",
    province: "Jawa Timur",
    tag: "Air Terjun Bertirai Abadi",
    rating: 4.8,
    reviewsCount: 3800,
    ticketPrice: "Domestik sekitar Rp22.000; pemandu/ojek terpisah",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Air terjun tertinggi di Pulau Jawa (200 meter) yang berada di dalam ceruk tebing silinder melingkar mirip tirai hujan abadi.",
    description: "Madakaripura adalah air terjun spektakuler setinggi 200 meter yang terselubung di celah ngarai sempit lereng Gunung Bromo. Konon kawasan ini adalah tanah perdikan hadiah Raja Hayam Wuruk untuk tempat bersemedi dan moksa Mahapatih Gajah Mada. Sensasi berjalan di bawah tetesan air tebing melingkar menghadirkan kesegaran mistis nan megah.",
    highlights: [
      "Sensasi basah kuyup berjalan di bawah tirai tetesan air tebing melingkar",
      "Kemegahan air terjun utama setinggi 200 meter yang menjulang vertikal",
      "Patung Mahapatih Gajah Mada di gerbang kawasan wisata",
      "Udara sejuk alami di antara himpitan tebing batu andesit purba"
    ],
    facilities: ["Penyewaan Jas Hujan & Kantong HP Waterproof", "Layanan Ojek Menuju Gerbang", "Pemandu Lokal Berlisensi", "Ruang Bilas & Toilet Bersih", "Warung Makanan & Minuman"],
    bestTime: "Pagi pukul 07.30 - 11.00 WIB untuk cuaca cerah dan debit air ideal",
    mapsQuery: "Air+Terjun+Madakaripura+Probolinggo"
  },
  {
    id: "kota-batu",
    category: "ikon",
    categoryLabel: "JelajahJatim",
    badge: "Kota Wisata Pegunungan",
    name: "Kota Wisata Batu & Museum Angkut",
    location: "Kota Batu (Malang Raya)",
    province: "Jawa Timur",
    tag: "Wisata Rekreasi, Seni & Edukasi",
    rating: 4.8,
    reviewsCount: 11200,
    ticketPrice: "Sekitar Rp110.000 (weekday & akhir pekan)",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Pusat rekreasi keluarga di dataran tinggi berhawa sejuk dengan museum transportasi terlengkap di Asia Tenggara dan agrowisata apel.",
    description: "Terletak di lembah antara Gunung Panderman, Arjuno, dan Welirang, Kota Batu adalah destinasi liburan keluarga terfavorit di Jawa Timur. Museum Angkut menyajikan lebih dari 300 unit kendaraan antik dan modern dari Eropa, Amerika, hingga Batavia kuno dalam zona tematik megah. Wisatawan juga dapat menikmati kebun apel petik sendiri dan atraksi Jatim Park Group.",
    highlights: [
      "Zona tematik dunia interaktif di Museum Angkut (Batavia, Hollywood, Gangster Town)",
      "Sensasi memetik buah apel segar langsung dari pohon di kebun petani lokal",
      "Pasar Apung Nusantara dengan kuliner tradisional dari berbagai suku",
      "Pemandangan malam gemerlap city light dari ketinggian Alun-alun Batu"
    ],
    facilities: ["Food Court Pasar Apung", "Penyewaan Kostum Foto Tematik", "Akses Ramah Kursi Roda & Stroller", "Pusat Oleh-oleh Khas Malang-Batu", "Area Parkir Sangat Luas"],
    bestTime: "Buka pukul 12.00 - 20.00 WIB, cocok dinikmati bersama seluruh anggota keluarga",
    mapsQuery: "Museum+Angkut+Kota+Batu"
  },
  {
    id: "taman-safari-prigen",
    category: "ikon",
    categoryLabel: "JelajahJatim",
    badge: "Konservasi & Edukasi",
    name: "Taman Safari Indonesia II Prigen",
    location: "Prigen, Pasuruan",
    province: "Jawa Timur",
    tag: "Satwa Liar & Rekreasi Alam",
    rating: 4.8,
    reviewsCount: 7600,
    ticketPrice: "Mulai sekitar Rp130.000 weekday / Rp145.000 akhir pekan",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Taman safari alam terbuka terluas di Asia yang berada di lereng Gunung Arjuno dengan ribuan satwa dari 5 benua.",
    description: "Taman Safari Prigen membentang seluas 350 hektar di ketinggian 800 mdpl lereng Gunung Arjuno, menjadikannya salah satu suaka safari alam terbuka terbesar di Asia. Wisatawan dapat menjelajahi habitat satwa liar seperti singa, harimau, gajah sumatera, jerapah, dan zebra langsung dari dalam kendaraan pribadi atau bus safari berpenyejuk udara.",
    highlights: [
      "Pengalaman Safari Journey menyusuri zona Amerika, Afrika, dan Asia",
      "Interaksi langsung memberi makan jerapah di Baobab Safari Resort",
      "Pertunjukan edukasi lumba-lumba, burung pemangsa, dan gajah sumatera",
      "Wahana air Safari Water World berhawa pegunungan yang sejuk"
    ],
    facilities: ["Bus Safari Ber-AC", "Baobab Safari Resort", "Restoran dengan View Satwa Liar", "Pusat Suvenir & Edukasi Satwa", "Masjid & Area Parkir Roda Empat"],
    bestTime: "Pagi hari pukul 08.30 - 13.00 WIB saat satwa aktif bergerak mencari makan",
    mapsQuery: "Taman+Safari+Indonesia+2+Jatim"
  },

  // =========================================================================
  // --- 2. PESONA LOKAL JATIM (BUDAYA, DESA WISATA & HIDDEN GEMS) ---
  // =========================================================================
  {
    id: "desa-osing-kemiren",
    category: "lokal",
    categoryLabel: "PesonaLokal",
    badge: "Warisan Budaya Asli",
    name: "Desa Adat Osing Kemiren",
    location: "Glagah, Kab. Banyuwangi",
    province: "Jawa Timur",
    tag: "Adat Osing & Tari Gandrung",
    rating: 4.8,
    reviewsCount: 2400,
    ticketPrice: "Umumnya gratis masuk desa; tur dan pertunjukan berbayar",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Pusat pelestarian suku asli Banyuwangi (Wong Osing) dengan rumah adat Tikel Balung, Tari Gandrung, dan tradisi sangrai kopi Kopai.",
    description: "Desa Adat Kemiren adalah rumah bagi suku Osing, keturunan warga kerajaan Blambangan kuno. Di sini, Anda dapat melihat arsitektur rumah adat kayu dengan atap Tikel Balung dan Baresan yang sarat filosofi. Masyarakatnya menjaga tradisi sakral Tumpeng Sewu, tradisi jemur kasur serentak (Mepe Kasur), serta racikan kopi sangrai tradisional 'Kopai Osing'.",
    highlights: [
      "Menyaksikan pertunjukan magis Tari Gandrung dan musik tradisional Barong Osing",
      "Mencicipi kopi khas 'Kopai Osing' yang disangrai dengan wajan tanah liat",
      "Melihat arsitektur rumah adat kayu khas Osing berusia lebih dari satu abad",
      "Kuliner autentik Pecel Pitik (ayam kampung bakar berbalur bumbu parutan kelapa pedas gurih)"
    ],
    facilities: ["Homestay Rumah Adat Osing", "Kedai Kopi Kopai Osing", "Sanggar Tari & Musik Tradisional", "Pemandu Adat Budaya", "Pusat Kerajinan Batik Gajah Oling"],
    bestTime: "Kapan saja sepanjang tahun, khususnya saat tradisi Mepe Kasur di bulan Dzulhijjah",
    mapsQuery: "Desa+Adat+Kemiren+Banyuwangi"
  },
  {
    id: "trowulan-majapahit",
    category: "lokal",
    categoryLabel: "PesonaLokal",
    badge: "Ibukota Kerajaan Kuno",
    name: "Situs Sejarah Majapahit Trowulan",
    location: "Trowulan, Kab. Mojokerto",
    province: "Jawa Timur",
    tag: "Sejarah Nusantara & Candi Bata Merah",
    rating: 4.7,
    reviewsCount: 3100,
    ticketPrice: "Sekitar Rp3.000 dewasa / Rp1.500 anak per situs",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Satu-satunya situs peninggalan kota metropolitan kuno era kerajaan Majapahit abad ke-13 dengan candi bata merah megah.",
    description: "Trowulan di Mojokerto dipercaya para arkeolog sebagai ibukota kemaharajaan Majapahit yang pernah menyatukan Nusantara. Kawasan cagar budaya seluas 100 km persegi ini menyimpan deretan mahakarya arsitektur bata merah tanpa semen seperti Candi Bajang Ratu (gerbang anggun beratap tajuk), Candi Tikus (petirtaan kerajaan bawah tanah), Candi Brahu, dan Kolam Segaran.",
    highlights: [
      "Kemegahan gerbang bata merah Paduraksa Candi Bajang Ratu",
      "Menelusuri keunikan petirtaan pemandian suci kerajaan di Candi Tikus",
      "Melihat koleksi artefak emas, terakota, dan arca di Museum Purbakala Majapahit",
      "Waduk kuno Kolam Segaran dan Patung Buddha Tidur raksasa di Maha Vihara Mojopahit"
    ],
    facilities: ["Museum Purbakala Majapahit", "Area Parkir Bus & Mobil", "Pemandu Sejarah Arkeologi", "Pusat Kerajinan Patung Batu & Kuningan", "Pusat Kuliner Sambal Wader Khas Segaran"],
    bestTime: "Pagi pukul 08.00 - 11.00 WIB atau sore pukul 15.00 - 17.00 WIB untuk pencahayaan foto terbaik",
    mapsQuery: "Candi+Bajang+Ratu+Trowulan+Mojokerto"
  },
  {
    id: "kawah-wurung",
    category: "lokal",
    categoryLabel: "PesonaLokal",
    badge: "Bukit Teletubbies Jatim",
    name: "Kawah Wurung Bondowoso",
    location: "Kalianyar, Sempol / Ijen, Kab. Bondowoso",
    province: "Jawa Timur",
    tag: "Perbukitan Savana Hijau",
    rating: 4.8,
    reviewsCount: 2750,
    ticketPrice: "Sekitar Rp10.000 - Rp15.000 per orang",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Kaldera kawah mati yang berubah menjadi bentangan perbukitan sabana hijau mirip perbukitan padang rumput Selandia Baru.",
    description: "Sesuai namanya dalam bahasa Jawa 'Wurung' yang berarti gagal atau tidak jadi, Kawah Wurung adalah kawah vulkanik purba yang tidak memiliki danau asam maupun kepulan belerang. Sebaliknya, seluruh cekungan kawah sedalam ratusan meter diselimuti padang rumput hijau menakjubkan yang bergelombang layaknya bukit Teletubbies.",
    highlights: [
      "Pemandangan spektakuler perbukitan meliuk-liuk di kawasan 'Bukit Cincin'",
      "Spot bersepeda downhill dan camping di tengah savana berhawa sejuk",
      "Pemandangan latar Gunung Ijen dan perkebunan kopi arabika Java Raung",
      "Kesejukan udara pegunungan di ketinggian 1.500 mdpl"
    ],
    facilities: ["Spot Foto Gardu Pandang", "Penyewaan ATV & Sepeda Gunung", "Area Camping Ground", "Toilet & Mushola", "Warung Kopi Arabika Bondowoso"],
    bestTime: "Desember - Mei saat musim hujan usai dan seluruh bukit hijau zamrud",
    mapsQuery: "Kawah+Wurung+Bondowoso"
  },
  {
    id: "desa-pujon-kidul",
    category: "lokal",
    categoryLabel: "PesonaLokal",
    badge: "Desa Wisata Harmoni",
    name: "Desa Wisata Pujon Kidul",
    location: "Pujon, Kab. Malang",
    province: "Jawa Timur",
    tag: "Agrowisata Sawah & Tradisi",
    rating: 4.7,
    reviewsCount: 5100,
    ticketPrice: "Sekitar Rp15.000 per orang (cek ketentuan voucher konsumsi)",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Kafe sawah ikonik dengan jembatan bambu di tengah hamparan padi hijau berlatar pegunungan sejuk Dorowati.",
    description: "Desa Wisata Pujon Kidul di barat Kota Batu sukses menyulap lahan persawahan desa menjadi agrowisata terpadu berbasis kearifan lokal. Ikon utamanya adalah Kafe Sawah dengan saung-saung kayu terapung di antara terasering sawah. Pengunjung dapat menikmati aneka masakan ndeso khas Jawa Timuran, belajar memerah susu sapi, serta petik sayuran organik.",
    highlights: [
      "Menikmati kuliner tradisional di atas saung bambu tengah persawahan asri",
      "Spot foto jembatan kayu dan bunga celosia dengan latar Gunung Dorowati",
      "Aktivitas edukasi peternakan sapi perah dan pengolahan susu murni",
      "Sensasi petualangan mengendarai ATV di jalur tanah pedesaan"
    ],
    facilities: ["Restoran Tradisional Prasmanan", "Spot Foto Instagrammable", "Penyewaan Kuda & ATV", "Pasar Sayur & Oleh-oleh Hasil Tani", "Toilet & Mushola"],
    bestTime: "Pagi pukul 08.00 - 11.00 WIB saat kabut pagi perlahan membuka panorama bukit",
    mapsQuery: "Desa+Wisata+Pujon+Kidul+Malang"
  },
  {
    id: "kampung-jodipan",
    category: "lokal",
    categoryLabel: "PesonaLokal",
    badge: "Kreativitas Komunitas",
    name: "Kampung Warna-Warni Jodipan (KWJ)",
    location: "Blimbing, Kota Malang",
    province: "Jawa Timur",
    tag: "Seni Jalanan & Mural Kreatif",
    rating: 4.6,
    reviewsCount: 3900,
    ticketPrice: "Sekitar Rp5.000 per orang",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Pemukiman bantaran Sungai Brantas yang disulap menjadi kanvas raksasa beraneka warna dengan jembatan kaca pertama di Jawa Timur.",
    description: "Kampung Warna-Warni Jodipan adalah contoh inspiratif revitalisasi kawasan bantaran sungai menjadi ikon wisata urban kota Malang. Setiap dinding, atap rumah, hingga lorong tangga dicat dengan warna-warni cerah berhiaskan ratusan lukisan mural 3 dimensi. Pengunjung dapat menyeberangi Jembatan Kaca Ngalam yang menghubungkan Jodipan dengan Kampung Tridi.",
    highlights: [
      "Menyusuri lorong-lorong pemukiman penuh mural 3D dan payung warna-warni",
      "Sensasi memacu adrenalin melintasi Jembatan Kaca di atas Sungai Brantas",
      "Spot foto arsitektur warna-warni bergaya mirip favela Rio de Janeiro",
      "Mencicipi aneka jajanan tradisional yang dijual langsung warga lokal"
    ],
    facilities: ["Jembatan Kaca Ngalam", "Spot Foto Payung Terbang", "Kios Kerajinan Tangan Lokal", "Toilet Warga Bersih", "Dekat dengan Stasiun Malang Kotabaru"],
    bestTime: "Pagi pukul 08.00 - 10.00 WIB atau sore pukul 15.30 WIB saat sinar matahari hangat",
    mapsQuery: "Kampung+Warna+Warni+Jodipan+Malang"
  },
  {
    id: "coban-rondo",
    category: "lokal",
    categoryLabel: "PesonaLokal",
    badge: "Air Terjun & Labirin",
    name: "Air Terjun Coban Rondo & Taman Labirin",
    location: "Pujon, Kab. Malang",
    province: "Jawa Timur",
    tag: "Air Terjun Hutan Pinus",
    rating: 4.7,
    reviewsCount: 4800,
    ticketPrice: "Rp35.000 weekday / Rp40.000 akhir pekan (belum termasuk wahana)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Air terjun alami setinggi 84 meter di tengah sejuknya rimba pinus lereng Gunung Panderman lengkap dengan labirin hijau.",
    description: "Coban Rondo menyajikan udara dingin menyegarkan di ketinggian 1.135 mdpl. Air terjun setinggi 84 meter ini bersumber dari mata air Cemoro Pintu di lereng Gunung Kawi. Selain menikmati gemuruh air terjun, wisatawan dapat mencoba serunya tantangan mencari jalan keluar di Taman Labirin tanaman pagar hijau serta mencoba wahana flying fox.",
    highlights: [
      "Keindahan air terjun utama Coban Rondo setinggi 84 meter yang deras",
      "Keseruan memecahkan rute jalan keluar di Taman Labirin tanaman hidup",
      "Jalan santai dinaungi rindangnya kanopi pohon pinus menjulang tinggi",
      "Wahana petualangan flying fox, berkuda, dan panahan (archery)"
    ],
    facilities: ["Taman Labirin Hijau", "Camping Ground Hutan Pinus", "Wahana Outbound & Flying Fox", "Warung Makanan Khas Malang", "Mushola & Toilet"],
    bestTime: "Pagi hari pukul 08.00 - 12.00 WIB untuk udara sejuk bebas kabut",
    mapsQuery: "Air+Terjun+Coban+Rondo+Malang"
  },

  // =========================================================================
  // --- 3. BAHARI & PESISIR JATIM (PANTAI EKSOTIS & KEPULAUAN) ---
  // =========================================================================
  {
    id: "pantai-klayar",
    category: "bahari",
    categoryLabel: "Bahari & Pesisir",
    badge: "Seruling Samudera",
    name: "Pantai Klayar & Karang Bolong",
    location: "Donorojo, Kab. Pacitan",
    province: "Jawa Timur",
    tag: "Pantai Karang Samudera Hindia",
    rating: 4.8,
    reviewsCount: 6100,
    ticketPrice: "Sekitar Rp15.000 per orang",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Garis pantai pasir putih luas dengan formasi tebing karang mirip Sphinx Mesir dan fenomena semburan air 'Seruling Samudera'.",
    description: "Pacitan terkenal sebagai 'Kota 1001 Goa' dan memiliki garis pantai selatan terindah di Jawa Timur. Pantai Klayar memikat dengan bentukan tebing karang alami yang menyerupai patung Sphinx di Giza. Fenomena paling unik adalah 'Seruling Samudera', di mana hempasan ombak Samudera Hindia menekan celah rongga karang dan menyemburkan air laut setinggi 10 meter disertai siulan alami yang khas.",
    highlights: [
      "Fenomena Seruling Samudera yang menyembur vertikal ke udara menghasilkan bunyi unik",
      "Formasi tebing karang raksasa alami yang menyerupai patung Sphinx",
      "Menjelajahi garis pantai pasir putih luas dengan mengendarai ATV",
      "Pemandangan ombak biru Samudera Hindia yang dramatis dari atas bukit karang"
    ],
    facilities: ["Penyewaan ATV Pantai", "Deretan Warung Es Kelapa Muda & Ikan Bakar", "Gazebo Tepi Tebing", "Kamar Mandi Bilas Bersih", "Area Parkir Wisata Luas"],
    bestTime: "Sore pukul 15.30 - 17.30 WIB untuk menikmati pemandangan matahari tenggelam ke samudera",
    mapsQuery: "Pantai+Klayar+Pacitan"
  },
  {
    id: "teluk-asmara",
    category: "bahari",
    categoryLabel: "Bahari & Pesisir",
    badge: "Raja Ampat-nya Malang",
    name: "Pantai Teluk Asmara",
    location: "Tambakrejo, Sumbermanjing Wetan, Kab. Malang",
    province: "Jawa Timur",
    tag: "Teluk Pulau Karang & Pantai Pasir Putih",
    rating: 4.8,
    reviewsCount: 3600,
    ticketPrice: "Sekitar Rp15.000 per orang",
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Gugusan bukit karang hijau di perairan laut toska yang tenang, dijuluki miniatur Raja Ampat di pesisir Malang Selatan.",
    description: "Pantai Teluk Asmara adalah permata tersembunyi di jalur lintas selatan (JLS) Malang. Keunikan utamanya adalah deretan pulau-pulau karang kecil berselimut vegetasi hijau di tengah teluk yang melindungi bibir pantai dari gelombang liar Samudera Hindia. Dari gardu pandang bukit, pemandangannya menyerupai lanskap karst Piaynemo di Raja Ampat.",
    highlights: [
      "Gardu pandang bukit untuk mengabadikan gugusan pulau karang mini ala Raja Ampat",
      "Ombak tepi pantai yang relatif tenang dan ramah untuk berenang maupun snorkeling",
      "Camping ground asri di bawah rindangnya jajaran pohon cemara udang",
      "Kejernihan air laut bergradasi warna toska bening dan pasir putih bersih"
    ],
    facilities: ["Spot Camping & Persewaan Tenda", "Gardu Pandang Sunset & Sunrise", "Kamar Bilas Air Tawar", "Warung Makanan Segar", "Area Parkir Beraspal"],
    bestTime: "Pagi pukul 06.00 - 10.00 WIB atau sore saat sunset mewarnai teluk",
    mapsQuery: "Pantai+Teluk+Asmara+Malang"
  },
  {
    id: "pantai-papuma",
    category: "bahari",
    categoryLabel: "Bahari & Pesisir",
    badge: "Pasir Putih Malikan",
    name: "Tanjung Papuma (Pantai Pasir Putih Malikan)",
    location: "Wuluhan, Kab. Jember",
    province: "Jawa Timur",
    tag: "Tanjung Karang & Hutan Lindung",
    rating: 4.8,
    reviewsCount: 4200,
    ticketPrice: "Sekitar Rp12.500 - Rp25.000 (promo dan hari kunjungan dapat berbeda)",
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Tanjung daratan menjorok ke Samudera Hindia dengan 7 karang raksasa pemecah ombak dan pasir putih selembut tepung.",
    description: "Tanjung Papuma (Pasir Putih Malikan) di pesisir selatan Jember memadukan keelokan pasir putih lembut dengan benteng batuan karang raksasa di tengah laut seperti Karang Kresna dan Karang Kodok. Dikelilingi hutan lindung tropis yang dihuni monyet abu-abu dan rangkong, pengunjung dapat naik ke puncak bukit Siti Hinggil untuk melihat panorama tanjung 360 derajat.",
    highlights: [
      "Tujuh karang raksasa (Siti Hinggil) yang memecah deburan ombak samudera",
      "Hamparan pasir putih lembut yang kontras dengan bebatuan karang hitam legam",
      "Pemandangan 360 derajat teluk dan samudera dari gardu pandang Siti Hinggil",
      "Kuliner ikan bakar segar langsung dari perahu nelayan tradisional Payangan"
    ],
    facilities: ["Resort & Penginapan Tepi Pantai", "Gardu Pandang Siti Hinggil", "Pusat Kuliner Ikan Bakar", "Camping Ground", "Penyewaan Perahu Wisata"],
    bestTime: "Mei - September, khususnya saat senja menyelimuti siluet batu karang",
    mapsQuery: "Pantai+Papuma+Jember"
  },
  {
    id: "gili-iyang",
    category: "bahari",
    categoryLabel: "Bahari & Pesisir",
    badge: "Pulau Oksigen Tertinggi",
    name: "Pulau Gili Iyang Sumenep",
    location: "Dungkek, Kab. Sumenep (Madura)",
    province: "Jawa Timur",
    tag: "Wisata Kesehatan & Bahari",
    rating: 4.7,
    reviewsCount: 1650,
    ticketPrice: "Masuk pulau umumnya gratis; perahu sekitar Rp10.000 - Rp20.000 sekali jalan",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Pulau kecil di timur Madura dengan kadar konsentrasi oksigen terbaik ke-2 di dunia (21,5%), terkenal bikin awet muda.",
    description: "Berdasarkan penelitian LAPAN dan Balai Besar Kekarantinaan Kesehatan, Pulau Gili Iyang di Sumenep Madura dinobatkan memiliki kandungan oksigen alami tertinggi kedua di bumi setelah Laut Mati Yordania. Berkat kualitas udara murni tanpa polusi ini, rata-rata warga pulau hidup sehat dan berusia di atas 100 tahun. Pulau ini juga memiliki tebing karang laut dan Gua Candi yang menawan.",
    highlights: [
      "Menghirup udara dengan kadar oksigen alami terbaik di Indonesia (21,5%)",
      "Interaksi dengan sesepuh lokal yang berusia lebih dari 100 tahun namun tetap bugar",
      "Menjelajahi Gua Karst Mahakarya dan Gua Candi di tepi laut",
      "Pesona tebing karang Batu Canggah yang menghadap langsung laut lepas Flores"
    ],
    facilities: ["Homestay Warga Gili Iyang", "Penyewaan Motor Odong-Odong Keliling Pulau", "Pemandu Lokal Sumenep", "Perahu Motor Penyeberangan", "Kedai Kelapa Muda Segar"],
    bestTime: "April - Oktober saat ombak Selat Madura dan Laut Flores tenang",
    mapsQuery: "Gili+Iyang+Sumenep"
  },
  {
    id: "pantai-sukamade",
    category: "bahari",
    categoryLabel: "Bahari & Pesisir",
    badge: "Suaka Penyu Raksasa",
    name: "Pantai Sukamade Meru Betiri",
    location: "TN Meru Betiri, Pesanggaran, Kab. Banyuwangi",
    province: "Jawa Timur",
    tag: "Konservasi Penyu & Hutan Hujan",
    rating: 4.8,
    reviewsCount: 1950,
    ticketPrice: "Sekitar Rp10.000 - Rp15.000; pemandu dan kendaraan terpisah",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Suaka alam liar tempat penyu hijau raksasa bertelur di malam hari dan pengalaman melepas anak penyu (tukik) ke laut lepas.",
    description: "Pantai Sukamade terletak di pedalaman Taman Nasional Meru Betiri yang masih sangat alami. Dijuluki sebagai segitiga pendaratan penyu dunia, pantai ini hampir setiap malam disinggahi penyu laut raksasa seperti penyu hijau (Chelonia mydas), penyu sisik, dan penyu belimbing untuk bertelur di pasir pantai. Di pagi hari, wisatawan diajak melepas bayi penyu (tukik) kembali ke samudera lepas.",
    highlights: [
      "Tur malam hari bersama ranger menyusuri pantai melihat penyu bertelur secara alami",
      "Pelepasan ratusan anak penyu (tukik) ke lautan bebas saat matahari terbit",
      "Petualangan menyeberangi sungai dan hutan tropis Meru Betiri dengan Jeep 4x4",
      "Suasana malam yang sunyi senyap bebas dari sinyal dan polusi cahaya kota"
    ],
    facilities: ["Wisma / Mess Peneliti Taman Nasional", "Hatchery (Penangkaran Telur Penyu)", "Ranger Pendamping Malam Hari", "Persewaan Jeep 4x4 Offroad", "Kantin Sederhana"],
    bestTime: "November - Maret saat puncak musim penyu bertelur terbanyak",
    mapsQuery: "Pantai+Sukamade+Banyuwangi"
  },
  {
    id: "pantai-kasap",
    category: "bahari",
    categoryLabel: "Bahari & Pesisir",
    badge: "Raja Ampat Pacitan",
    name: "Pantai Kasap & Kali Cokel",
    location: "Pringkuku, Kab. Pacitan",
    province: "Jawa Timur",
    tag: "Gugusan Karang & Susur Sungai",
    rating: 4.7,
    reviewsCount: 2900,
    ticketPrice: "Sekitar Rp10.000 (pantai); susur Kali Cokel sekitar Rp20.000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Panorama bukit karang pemecah ombak yang mirip pulau karst Papua, dipadukan wisata susur sungai tropis Kali Cokel mirip Sungai Amazon.",
    description: "Pantai Kasap adalah salah satu surga tersembunyi di pesisir Pacitan. Dari puncak gardu pandang bukitnya, pengunjung disuguhi hamparan pulau-pulau karang kecil yang dihantam deburan ombak putih Samudera Hindia. Tepat di samping pantai, terdapat muara Kali Cokel berair hijau jernih di mana wisatawan dapat menaiki perahu motor menyusuri rimbunnya hutan pohon kelapa.",
    highlights: [
      "Gardu pandang bukit karang dengan lanskap mini Raja Ampat Pacitan",
      "Petualangan susur sungai Kali Cokel menaiki perahu di bawah kanopi kelapa",
      "Pasir putih lembut yang masih asri dan relatif sepi wisatawan",
      "Spot foto sunset dari puncak tebing yang berhadapan langsung dengan samudra"
    ],
    facilities: ["Perahu Susur Sungai Kali Cokel", "Gardu Pandang Tebing", "Penyewaan Stand Up Paddleboard (SUP)", "Warung Kelapa Muda", "Toilet & Parkir"],
    bestTime: "Pagi pukul 07.00 - 10.00 WIB untuk susur sungai tenang atau sore untuk sunset",
    mapsQuery: "Pantai+Kasap+Pacitan"
  }
];

// Panduan Khusus Wisata Jawa Timur
const travelTips = [
  {
    icon: "mountain",
    title: "Persiapan Suhu Dingin Pegunungan",
    description: "Kawasan Bromo, Ijen, dan Kota Batu memiliki suhu malam hingga subuh yang bisa mencapai 3°C - 10°C (bahkan fenomena frost / embun upas). Siapkan jaket tebal windproof, sarung tangan, syal wol, dan masker hangat."
  },
  {
    icon: "compass",
    title: "Waktu Emas Kunjungan (Musim Kemarau)",
    description: "Bulan Mei hingga Oktober adalah golden period di Jawa Timur. Anda akan mendapatkan pemandangan kawah Bromo dan Ijen tanpa tertutup kabut hujan, savana Baluran yang menguning eksotis ala Afrika, serta ombak pantai selatan yang cerah."
  },
  {
    icon: "shield",
    title: "SOP Keselamatan Kawah & Ngarai",
    description: "Saat trekking ke kawah aktif (Kawah Ijen), wajib gunakan masker respirator gas belerang berstandar resmi. Untuk trekking ke dasar lembah Tumpak Sewu atau Madakaripura, kenakan sandal gunung anti-selip dan jas hujan."
  },
  {
    icon: "heart",
    title: "Hormati Kearifan Suku Tengger & Osing",
    description: "Masyarakat suku Tengger di Bromo dan Wong Osing di Banyuwangi sangat menjunjung kesakralan alam dan tradisi leluhur. Hindari menginjak sesajen upacara adat dan selalu bersikap ramah serta sopan saat berkunjung."
  }
];

// Testimoni Wisatawan Eksplorasi Jawa Timur
const testimonialsData = [
  {
    name: "Dimas Anggara",
    origin: "Surabaya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    destination: "Gunung Bromo & Tumpak Sewu (JelajahJatim)",
    rating: 5,
    comment: "Sebagai warga Jatim, website ini benar-benar merangkum keindahan provinsi kami secara luar biasa! Info jam terbaik Bromo dan estimasi harga sewa jeep sangat membantu perjalanan keluarga saya kemarin."
  },
  {
    name: "Anisa Kartika",
    origin: "Jakarta Selatan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    destination: "Desa Adat Osing Kemiren (PesonaLokal)",
    rating: 5,
    comment: "Kategori Pesona Lokal membawa saya ke Kemiren Banyuwangi. Mencicipi pecel pitik asli dan kopi kopai di rumah adat kayu tua adalah pengalaman budaya paling berkesan dalam hidup saya."
  },
  {
    name: "Fajar Wicaksono",
    origin: "Yogyakarta",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    destination: "Pantai Klayar & Kasap (Bahari & Pesisir)",
    rating: 5,
    comment: "Pacitan ternyata punya pantai kelas dunia! Formasi karang Pantai Klayar dan seruling samudera membuat saya terpukau. Website ini sangat praktis, responsif, dan tombol Google Maps-nya sangat akurat."
  }
];
