const projeler = [
    { id: 1, baslik: "Üniversite Not Sistemi", kategori: "WEB", resim: "https://via.placeholder.com/400x200?text=Web+Projesi", aciklama: "Öğrenciler için not takip arayüzü." },
    { id: 2, baslik: "Hava Durumu Uygulaması", kategori: "MOBİL", resim: "https://via.placeholder.com/400x200?text=Mobil+Uygulama", aciklama: "Anlık hava durumu verileri." },
    { id: 3, baslik: "E-Ticaret Arayüzü", kategori: "WEB", resim: "https://via.placeholder.com/400x200?text=E-Ticaret", aciklama: "Modern alışveriş tasarımı." }
];

const projeKonteyner = document.getElementById("proje-listesi");
const daktiloHedef = document.getElementById("daktilo-metni");

function ekranaBas() {
    if (!projeKonteyner) return;
    projeKonteyner.innerHTML = projeler.map(p => `
        <div class="proje-kart">
            <img src="${p.resim}" class="proje-resim">
            <div class="proje-icerik">
                <span style="color: #ff8c00; font-size: 0.7rem; font-weight: bold;">${p.kategori}</span>
                <h3>${p.baslik}</h3>
                <p>${p.aciklama}</p>
            </div>
        </div>
    `).join('');
}

let i = 0;
const metin = "Berkay Öztürk";
function daktilo() {
    if (daktiloHedef && i < metin.length) {
        daktiloHedef.innerHTML += metin.charAt(i);
        i++;
        setTimeout(daktilo, 150);
    }
}

document.getElementById("tema-degistir").addEventListener("click", () => {
    document.body.classList.toggle("karanlik-tema");
});

window.onload = () => {
    ekranaBas();
    daktilo();
};
