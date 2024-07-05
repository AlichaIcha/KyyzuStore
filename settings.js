// settings.js

// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "profile.jpg", // Path ke favicon
  title: "Kayyzu Store | Profile", // Judul halaman
  metaTitle: "Kayyzu || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website Kayyzu Store, Creator and Store", // Deskripsi meta untuk SEO
  metaKeywords: "Kayyzu, Kayyzu Store, profile Kayyzu, siapa Kayyzu?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "profile.png", // Path ke gambar profil
  name: "Kayyzu Store", // Nama profil
  occupation: "Creator and Store", // Pekerjaan atau jabatan
  location: "Bekasi, Jawa Barat, Indonesia", // Lokasi
  backgroundImage: "background.jpg", // Latar belakang halaman
  links: [
    { title: "GitHub", url: "https://github.com/AlichaIcha", icon: "fa-github" }, // Tautan GitHub
    { title: "Twitter", url: "https://twitter.com/ApDheri94512", icon: "fa-twitter" }, // Tautan Twitter
    { title: "Instagram", url: "https://www.instagram.com/fadlangenz", icon: "fa-instagram" }, // Tautan Instagram
    { title: "Telegram", url: "https://t.me/FadlanDev", icon: "fa-telegram" }, // Tautan Telegram
    { title: "Email", url: "mailto:dheriap248@gmail.com", icon: "fa-envelope" }, // Tautan Email
    { title: "WhatsApp", url: "https://wa.me/6281400346604?text=hai", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "YouTube", url: "https://youtube.com/@bfsgbyfadlangenzsubscribe6157", icon: "fa-youtube" } // Tautan YouTube
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur lokasi
document.getElementById('location').innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${profileSettings.location}`;

// Mengatur gambar latar belakang
document.body.style.backgroundImage = `url("${profileSettings.backgroundImage}")`;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  const linkElement = document.createElement('a');
  linkElement.href = link.url;
  linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
  linkBoxes.appendChild(linkElement);
});
