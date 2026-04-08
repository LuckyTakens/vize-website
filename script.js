// Ödev gereği 5 proje ve Türkçe değişken isimleri kullanıldı
const tumProjeler = [
    { id: 1, baslik: "E-Ticaret Paneli", kategori: "Web", resim: "https://picsum.photos/400/200?random=1", aciklama: "HTML/CSS tabanlı arayüz." },
    { id: 2, baslik: "Hava Durumu", kategori: "Mobil", resim: "https://picsum.photos/400/200?random=2", aciklama: "JS ile API kullanımı." },
    { id: 3, baslik: "Not Defteri", kategori: "Web", resim: "https://picsum.photos/400/200?random=3", aciklama: "Localstorage uygulaması." },
    { id: 4, baslik: "Hesap Makinesi", kategori: "Web", resim: "https://picsum.photos/400/200?random=4", aciklama: "Dinamik hesaplama aracı." },
    { id: 5, baslik: "Spor Uygulaması", kategori: "Mobil", resim: "https://picsum.photos/400/200?random=5", aciklama: "Mobil uyumlu spor takip." }
];

const projeKutusu = document.getElementById("proje-kutusu");

// map() kullanımı zorunluydu
function projeleriGoster(liste) {
    projeKutusu.innerHTML = liste.map(proje => `
        <div class="proje-kart">
            <img src="${proje.resim}" class="proje-resim">
            <div class="proje-icerik">
                <small style="color:orange">${proje.kategori}</small>
                <h3>${proje.baslik}</h3>
                <p>${proje.aciklama}</p>
            </div>
        </div>
    `).join('');
}

// filter() kullanımı zorunluydu
function projeFiltrele(kategoriIsmi) {
    if (kategoriIsmi === 'hepsi') {
        projeleriGoster(tumProjeler);
    } else {
        const filtrelenmisProjeler = tumProjeler.filter(p => p.kategori === kategoriIsmi);
        projeleriGoster(filtrelenmisProjeler);
    }
}

// Daktilo Efekti
const daktiloHedef = document.getElementById("daktilo-hedef");
const isim = "Berkay Öztürk";
let harfSirasi = 0;

function daktiloCalistir() {
    if (harfSirasi < isim.length) {
        daktiloHedef.innerHTML += isim.charAt(harfSirasi);
        harfSirasi++;
        setTimeout(daktiloCalistir, 150);
    }
}

// Tema Değiştirme
document.getElementById("tema-degistir").addEventListener("click", () => {
    document.body.classList.toggle("karanlik-tema");
});

window.onload = () => {
    projeleriGoster(tumProjeler);
    daktiloCalistir();
};
