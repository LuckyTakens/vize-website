const tumProjeler = [
    { id: 1, baslik: "Üniversite Not Sistemi", kategori: "web", resim: "https://via.placeholder.com/400x200?text=Web+Projesi", aciklama: "Öğrenciler için geliştirilmiş not takip arayüzü." },
    { id: 2, baslik: "Hava Durumu Uygulaması", kategori: "mobil", resim: "https://via.placeholder.com/400x200?text=Mobil+Uygulama", aciklama: "Anlık hava durumu verilerini sunan mobil tasarım." },
    { id: 3, baslik: "E-Ticaret Arayüzü", kategori: "web", resim: "https://via.placeholder.com/400x200?text=E-Ticaret", aciklama: "Modern alışveriş siteleri için UX tasarımı." },
    { id: 4, baslik: "Görev Yöneticisi", kategori: "web", resim: "https://via.placeholder.com/400x200?text=JS+Uygulama", aciklama: "Dinamik yapılacaklar listesi uygulaması." },
    { id: 5, baslik: "Portfolyo Web Sitesi", kategori: "web", resim: "https://via.placeholder.com/400x200?text=Portfolyo", aciklama: "Kişisel markanızı yansıtan modern portfolyo." }
];

// HTML Elemanlarını Seçme (Hata almamak için kontrol ekliyoruz)
const projeKonteyner = document.getElementById("proje-listesi");
const temaButonu = document.getElementById("tema-degistir");
const ozelImlecHtml = document.getElementById("ozel-imlec");
const daktiloHedefHtml = document.getElementById("daktilo-metni");
const yetenekCubuklari = document.querySelectorAll(".cubuk");

// Projeleri Listeleme Fonksiyonu
function projeleriEkranaBas(projeListesi) {
    if (!projeKonteyner) return; // Eğer HTML'de bu ID yoksa çalışma
    projeKonteyner.innerHTML = projeListesi.map(proje => `
        <div class="proje-kart">
            <img src="${proje.resim}" alt="${proje.baslik}" class="proje-resim">
            <div class="proje-icerik">
                <h3>${proje.baslik}</h3>
                <p>${proje.aciklama}</p>
                <span class="etiket" style="color: #ff8c00; font-weight: bold;">${proje.kategori.toUpperCase()}</span>
            </div>
        </div>
    `).join('');
}

// Filtreleme Fonksiyonu
function projeleriFiltrele(secilenKategori, event) {
    const butonlar = document.querySelectorAll(".filtre-btn");
    butonlar.forEach(btn => btn.classList.remove("aktif"));
    if (event) event.target.classList.add("aktif");

    if (secilenKategori === 'hepsi') {
        projeleriEkranaBas(tumProjeler);
    } else {
        const filtrelenmisProjeler = tumProjeler.filter(proje => proje.kategori === secilenKategori);
        projeleriEkranaBas(filtrelenmisProjeler);
    }
}

// Tema Değiştirme
if (temaButonu) {
    temaButonu.addEventListener("click", () => {
        document.body.classList.toggle("karanlik-tema");
        localStorage.setItem("tema", document.body.classList.contains("karanlik-tema") ? "karanlik" : "aydinlik");
    });
}

// Özel İmleç Takibi
if (ozelImlecHtml) {
    document.addEventListener("mousemove", (e) => {
        ozelImlecHtml.style.left = e.clientX + "px";
        ozelImlecHtml.style.top = e.clientY + "px";
    });
}

// Daktilo Efekti
const daktiloMetni = "Berkay Öztürk";
let harfIndeksi = 0;
function daktiloYaz() {
    if (daktiloHedefHtml && harfIndeksi < daktiloMetni.length) {
        daktiloHedefHtml.innerHTML += daktiloMetni.charAt(harfIndeksi);
        harfIndeksi++;
        setTimeout(daktiloYaz, 120);
    }
}

// Yetenek Çubukları Animasyonu
function yetenekleriGoster() {
    yetenekCubuklari.forEach(cubuk => {
        cubuk.style.width = cubuk.getAttribute("data-genislik");
    });
}

// Sayfa Kaydırma Takibi (Scroll)
window.addEventListener("scroll", () => {
    const yeteneklerBolumu = document.getElementById("yetenekler");
    if (yeteneklerBolumu && yeteneklerBolumu.getBoundingClientRect().top < window.innerHeight / 1.5) {
        yetenekleriGoster();
    }
});

// Sayfa Yüklendiğinde Çalışacaklar
window.onload = () => {
    projeleriEkranaBas(tumProjeler);
    daktiloYaz();
    if (localStorage.getItem("tema") === "karanlik") {
        document.body.classList.add("karanlik-tema");
    }
};
