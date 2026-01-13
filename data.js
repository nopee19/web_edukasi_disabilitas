// Bank Soal Terstruktur
// Format: questionBank[RangeUsia][ModeDisabilitas][Paket]

const questionBank = {
    // === USIA 6-8 TAHUN ===
    "6-8": {
        "tunarungu": { // Visual Focus, Simple Text
            "A": [
                { id: 1, q: "Manakah gambar 'Apel'?", options: ["🍎", "🍌", "🍇", "🥕"], correct: 0, feedback: "Betul! Itu Apel Merah." },
                { id: 2, q: "Warna langit adalah...", options: ["🟢 Hijau", "🔵 Biru", "🔴 Merah", "🟡 Kuning"], correct: 1, feedback: "Ya, langit cerah berwarna Biru." },
                { id: 3, q: "Hewan Kucing??", options: ["🐕", "🐈", "🐄", "🦆"], correct: 1, feedback: "Benar, itu Kucing lucu." },
                { id: 4, q: "Bentuk Bola?", options: ["Kotak 🟥", "Bulat ⚪", "Segitiga 🔺", "Bintang ⭐"], correct: 1, feedback: "Bola itu bulat." },
                { id: 5, q: "Mobil berjalan di...", options: ["Air", "Langit", "Jalan Raya", "Hutan"], correct: 2, feedback: "Mobil di jalan raya." }
            ],
            "B": [ /* Placeholder for B */
                { id: 1, q: "Mana Pisang?", options: ["🍎", "🍌", "🍇", "🥕"], correct: 1, feedback: "Pisang kuning." }
            ],
            "C": [ /* Placeholder for C */
                { id: 1, q: "Mana Anggur?", options: ["🍎", "🍌", "🍇", "🥕"], correct: 2, feedback: "Anggur ungu." }
            ]
        },
        "tunanetra": { // Audio Focus, Descriptive Text
            "A": [
                { id: 1, q: "Suara 'Mbek' adalah suara hewan...", options: ["Kambing", "Sapi", "Ayam", "Kucing"], correct: 0, feedback: "Kambing mengembik." },
                { id: 2, q: "Benda untuk melindungi dari hujan adalah...", options: ["Payung", "Sendok", "Buku", "Sepatu"], correct: 0, feedback: "Payung agar tidak basah." },
                { id: 3, q: "Es krim rasanya...", options: ["Panas dan Pedas", "Dingin dan Manis", "Pahit", "Asin"], correct: 1, feedback: "Es krim dingin dan manis." },
                { id: 4, q: "Kita mendengar menggunakan...", options: ["Mata", "Telinga", "Hidung", "Kaki"], correct: 1, feedback: "Telinga untuk mendengar." },
                { id: 5, q: "Sebelum makan kita harus...", options: ["Tidur", "Cuci Tangan", "Lari", "Menangis"], correct: 1, feedback: "Cuci tangan agar bersih." }
            ],
            "B": [], "C": []
        },
        "tunagrahita": { // Simple, Concrete
            "A": [
                { id: 1, q: "Ini buah apa? (Merah, Bulat)", options: ["Apel", "Pisang"], correct: 0, feedback: "Apel." },
                { id: 2, q: "Matahari ada di...", options: ["Atas (Langit)", "Bawah (Tanah)"], correct: 0, feedback: "Di langit." },
                { id: 3, q: "Ikan hidup di...", options: ["Air", "Tanah"], correct: 0, feedback: "Di air." },
                { id: 4, q: "Gula rasanya...", options: ["Manis", "Asin"], correct: 0, feedback: "Manis." },
                { id: 5, q: "Baju dipakai di...", options: ["Badan", "Kaki"], correct: 0, feedback: "Badan." }
            ],
            "B": [], "C": []
        },
        "adhd": { // Short, Clear, No Distraction
            "A": [
                { id: 1, q: "2 + 2 = ...", options: ["3", "4", "5", "6"], correct: 1, feedback: "4." },
                { id: 2, q: "Lawan kata 'Besar'?", options: ["Kecil", "Tinggi", "Luas", "Jauh"], correct: 0, feedback: "Kecil." },
                { id: 3, q: "Pagi hari matahari...", options: ["Terbit", "Terbenam", "Hilang", "Tidur"], correct: 0, feedback: "Terbit." },
                { id: 4, q: "Huruf awalan 'B'?", options: ["Ayam", "Bebek", "Cicak", "Domba"], correct: 1, feedback: "Bebek." },
                { id: 5, q: "5 - 2 = ...", options: ["2", "3", "4", "5"], correct: 1, feedback: "3." }
            ],
            "B": [], "C": []
        }
    },

    // === USIA 9-12 TAHUN ===
    "9-12": {
        "tunarungu": {
            "A": [
                { id: 1, q: "Rambu 'STOP' berbentuk...", options: ["Segitiga", "Segi Delapan", "Lingkaran", "Kotak"], correct: 1, feedback: "Segi delapan merah." },
                { id: 2, q: "Ibukota Indonesia (Baru)?", options: ["Jakarta", "Nusantara", "Bandung", "Surabaya"], correct: 1, feedback: "IKN Nusantara." },
                { id: 3, q: "3 x 4 = ...", options: ["7", "12", "10", "15"], correct: 1, feedback: "12." },
                { id: 4, q: "Tanaman butuh ... untuk tumbuh", options: ["Air & Matahari", "Pasir & Batu", "Api", "Semangka"], correct: 0, feedback: "Air dan Matahari." },
                { id: 5, q: "Alat musik yang dipetik?", options: ["Gitar", "Seruling", "Drum", "Terompet"], correct: 0, feedback: "Gitar." }
            ],
            "B": [], "C": []
        },
        "tunanetra": {
            "A": [
                { id: 1, q: "Bunyi sila pertama Pancasila?", options: ["Ketuhanan YME", "Kemanusiaan", "Persatuan", "Keadilan"], correct: 0, feedback: "Ketuhanan Yang Maha Esa." },
                { id: 2, q: "Jika kita berbuat salah, ucapkan...", options: ["Terima Kasih", "Maaf", "Permisi", "Halo"], correct: 1, feedback: "Maaf." },
                { id: 3, q: "Hewan berkaki empat yang menghasilkan susu...", options: ["Ayam", "Sapi", "Ular", "Ikan"], correct: 1, feedback: "Sapi." },
                { id: 4, q: "Presiden pertama Indonesia?", options: ["Soeharto", "Soekarno", "Habibie", "Jokowi"], correct: 1, feedback: "Ir. Soekarno." },
                { id: 5, q: "Air mendidih itu...", options: ["Dingin", "Panas", "Beku", "Keras"], correct: 1, feedback: "Panas." }
            ],
            "B": [], "C": []
        },
        "tunagrahita": {
            "A": [
                { id: 1, q: "Mau beli jajan pakai...", options: ["Uang", "Daun"], correct: 0, feedback: "Pakai uang." },
                { id: 2, q: "Kalau mengantuk kita...", options: ["Tidur", "Lari"], correct: 0, feedback: "Tidur." },
                { id: 3, q: "Cuci baju pakai...", options: ["Sabun", "Tanah"], correct: 0, feedback: "Sabun." },
                { id: 4, q: "Mandi sehari berapa kali?", options: ["2 Kali", "10 Kali"], correct: 0, feedback: "2 Kali cukup." },
                { id: 5, q: "Teman sakit kita...", options: ["Jenguk/Doakan", "Marahi"], correct: 0, feedback: "Doakan sembuh." }
            ],
            "B": [], "C": []
        },
        "adhd": {
            "A": [
                { id: 1, q: "Ibukota Jawa Barat?", options: ["Bandung", "Semarang", "Surabaya", "Medan"], correct: 0, feedback: "Bandung." },
                { id: 2, q: "50 + 25 = ...", options: ["65", "75", "85", "70"], correct: 1, feedback: "75." },
                { id: 3, q: "Proses air menjadi uap disebut...", options: ["Mencair", "Menguap", "Membeku", "Menyublim"], correct: 1, feedback: "Menguap." },
                { id: 4, q: "Bahasa Inggris 'Buku'?", options: ["Book", "Pen", "Bag", "Door"], correct: 0, feedback: "Book." },
                { id: 5, q: "Mata uang Indonesia?", options: ["Dollar", "Rupiah", "Ringgit", "Yen"], correct: 1, feedback: "Rupiah." }
            ],
            "B": [], "C": []
        }
    },

    // === USIA 13-15 TAHUN ===
    "13-15": {
        "tunarungu": {
            "A": [
                { id: 1, q: "Rumus Luas Persegi?", options: ["s x s", "p x l", "a x t", "phi x r^2"], correct: 0, feedback: "Sisi kali sisi." },
                { id: 2, q: "Planet terbesar?", options: ["Bumi", "Mars", "Jupiter", "Saturnus"], correct: 2, feedback: "Jupiter." },
                { id: 3, q: "Hari Kemerdekaan RI?", options: ["17 Agustus", "21 April", "10 November", "1 Juni"], correct: 0, feedback: "17 Agustus 1945." },
                { id: 4, q: "Simbol Oksigen?", options: ["O2", "H2O", "CO2", "N2"], correct: 0, feedback: "O2." },
                { id: 5, q: "Benua terluas?", options: ["Asia", "Afrika", "Eropa", "Australia"], correct: 0, feedback: "Asia." }
            ],
            "B": [], "C": []
        },
        "tunanetra": {
            "A": [
                { id: 1, q: "Siapa penemu lampu?", options: ["Edison", "Einstein", "Newton", "Bell"], correct: 0, feedback: "Thomas Alva Edison." },
                { id: 2, q: "Alat pernapasan manusia?", options: ["Paru-paru", "Insang", "Trakea", "Kulit"], correct: 0, feedback: "Paru-paru." },
                { id: 3, q: "Kerajaan Islam pertama di Indonesia?", options: ["Samudra Pasai", "Majapahit", "Kutai", "Demak"], correct: 0, feedback: "Samudra Pasai." },
                { id: 4, q: "Ciri-ciri pantun?", options: ["Bersajak a-b-a-b", "Bebas", "Tidak beraturan", "Panjang"], correct: 0, feedback: "Bersajak a-b-a-b." },
                { id: 5, q: "Lagu kebangsaan kita?", options: ["Indonesia Raya", "Padamu Negeri", "Garuda Pancasila", "Halo Bandung"], correct: 0, feedback: "Indonesia Raya." }
            ],
            "B": [], "C": []
        },
        "tunagrahita": {
            "A": [
                { id: 1, q: "Lampu Merah artinya...", options: ["Berhenti", "Jalan"], correct: 0, feedback: "Berhenti." },
                { id: 2, q: "Pagar makan...", options: ["Tanaman", "Nasi"], correct: 0, feedback: "Tanaman (Peribahasa)." },
                { id: 3, q: "Ibu Kota Indonesia?", options: ["Jakarta/Nusantara", "Bali"], correct: 0, feedback: "Jakarta/Nusantara." },
                { id: 4, q: "Uang Rp 2.000 warnanya...", options: ["Abu-abu", "Merah"], correct: 0, feedback: "Abu-abu." },
                { id: 5, q: "Kalau hujan bawa...", options: ["Payung", "Bantal"], correct: 0, feedback: "Payung." }
            ],
            "B": [], "C": []
        },
        "adhd": {
            "A": [
                { id: 1, q: "Fotosintesis terjadi pada...", options: ["Siang hari", "Malam hari", "Sore", "Subuh"], correct: 0, feedback: "Siang hari (butuh cahaya)." },
                { id: 2, q: "Akar dari 144?", options: ["10", "11", "12", "13"], correct: 2, feedback: "12." },
                { id: 3, q: "Negara kincir angin?", options: ["Belanda", "Jerman", "Inggris", "Prancis"], correct: 0, feedback: "Belanda." },
                { id: 4, q: "Organ pemompa darah?", options: ["Jantung", "Hati", "Ginjal", "Lambung"], correct: 0, feedback: "Jantung." },
                { id: 5, q: "Tari Kecak dari...", options: ["Bali", "Jawa", "Sumatra", "Papua"], correct: 0, feedback: "Bali." }
            ], "B": [], "C": []
        }
    }
};

// Helper to fill empty slots so app doesn't crash on demo
function getQuestions(age, mode, pkg) {
    // Try to get specific path
    const ageGroup = questionBank[age];
    if (!ageGroup) return [];

    const modeGroup = ageGroup[mode];
    if (!modeGroup) return [];

    const pkgGroup = modeGroup[pkg];
    if (pkgGroup && pkgGroup.length > 0) return pkgGroup;

    // Fallback: If Package B or C is empty, return A
    if (modeGroup["A"] && modeGroup["A"].length > 0) return modeGroup["A"];

    return [];
}