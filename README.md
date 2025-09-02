Dashboard PST 8200
==================================================
Dashboard Pelayanan Statistik Terpadu (PST) BPS Provinsi Maluku Utara

Ringkasan
--------------------------------------------------
Dashboard satu halaman berbasis HTML, CSS, dan JavaScript untuk menampilkan:
- Video latar belakang penuh (fullscreen background video)
- Jam digital animasi
- Slideshow gambar otomatis
- Video YouTube tersemat dengan autoplay
- Indikator strategis BPS (via API)
- Publikasi terbaru (via API BPS)
- BRS terbaru (via API BPS)
- Informasi layanan berganti otomatis
- Sistem antrian dengan suara notifikasi dan TTS
- Marquee teks berjalan untuk pengumuman

Struktur Folder
--------------------------------------------------
DashboardPST/
├── index.html             # Halaman utama
├── images/                # Gambar slideshow & logo
├── videos/                # Video background
├── sounds/                # Suara notifikasi
└── favicon.ico (opsional)

Teknologi
--------------------------------------------------
- HTML5, CSS3, JavaScript Vanilla
- Fetch API untuk komunikasi server
- window.speechSynthesis untuk TTS
- API Web BPS untuk indikator, publikasi, dan BRS
- Server internal untuk sistem antrian

Cara Menjalankan
--------------------------------------------------
1. Simpan aset multimedia di folder images/, videos/, dan sounds/.
2. Pastikan file videos/background.mp4 dan sounds/notif.mp3 tersedia.
3. Konfigurasikan endpoint antrian pada script JavaScript:
   fetch('https://<server>/get-antrian')
4. Pastikan server antrian mengembalikan JSON:
   { "nomor": "A001", "dipanggil": false }
5. Buka index.html di browser fullscreen atau pasang di server internal.

Catatan API BPS
--------------------------------------------------
- Menggunakan domain 8200 (Maluku Utara)
- Endpoint:
  - Indikator: /list/model/indicators/domain/8200/key/<API_KEY>/
  - Publikasi: /list/model/publication/domain/8200/key/<API_KEY>/
  - BRS: /list/model/pressrelease/domain/8200/key/<API_KEY>/

Fitur Tambahan (Opsional)
--------------------------------------------------
- Dashboard multi-halaman untuk grafik interaktif
- Mode tema (light/dark)
- Caching data offline sementara
- Panel admin untuk mengatur teks marquee dan konten slideshow

Lisensi
--------------------------------------------------
Tambahkan lisensi sesuai kebutuhan (MIT, Apache 2.0, dsb.)

