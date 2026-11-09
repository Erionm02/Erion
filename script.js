/* ===== ORARI (ndrysho këtu) — minuta nga mesnata: 6*60 = 06:00 ===== */
const HOURS = { 0:[360,1080], 1:[360,1260], 2:[360,1260], 3:[360,1260], 4:[360,1260], 5:[360,1260], 6:[360,1260] }; // 0 = e diel
const TZ = "Europe/Belgrade"; // ora e Kosovës

/* ===== PRODUKTET: [foto, emoji, emri SQ, emri EN, përshkrimi SQ, përshkrimi EN, çmimi] ===== */
/* Foto: vendosi në folderin images/ me emrin e parë, p.sh. images/margherita.jpg */
const FOOD = [
 ["margherita","🍕","Pizza Margherita","Pizza Margherita","Salcë domatesh, mozzarella","Tomato sauce, mozzarella","3.00€"],
 ["pizza-mix","🍕","Pizza Mix","Pizza Mix","Suxhuk, kërpudha, djathë","Sausage, mushrooms, cheese","3.00€ - 4.00€"],
 ["mini-pizza","🍕","Mini Pizza","Mini Pizza","Pica të vogla me sallam dhe proshutë","Small pizzas with salami and ham","1.20€"],
 ["croissant","🥐","Croasanta","Croissants","Kroasanta të vegjël dhe të mëdhenj","Small and large croissants","0.40€ - 0.80€"],
 ["byrek","🥟","Byrek","Byrek","Mish ose djathë","Meat or cheese","1.50€"],
 ["pitalka","🥖","Pitalka","Pitalka","Të mëdha ose të vogla","Large or small","0.40€ - 0.60€"],
 ["flia","🥧","Flia","Flija","Përbërës të freskët","Fresh ingredients","1.50€"],
 ["mantia","🫓","Mantia","Mantia","Me mish","With meat","0.25€"],
 ["muffin","🧁","Maffin","Muffin","Me çokollatë","With chocolate","0.50€"],
 ["buke-sandwich","🥪","Bukë Sandwich","Sandwich bread","Bukë e gjatë","Long bread","0.20€"],
 ["buke-hamburger","🍔","Bukë Hamburgeri","Hamburger bun","Bukë rrethi","Round bun","0.20€"],
 ["kifle-sallam","🥐","Kifle me sallam","Salami roll","Kifle me sallam brenda","Roll filled with salami","0.60€"],
 ["kifle-vishlle","🥐","Kifle me vishlle","Vishlle roll","Kifle me vishlle në mes","Roll with vishlle in the middle","0.60€"],
 ["kifle-krem","🥐","Kifle me krem","Cream roll","Kifle me ajrokrem","Roll with airy cream","0.60€"],
 ["kifle-marmelade","🥐","Kifle me marmelatë","Jam roll","Kifle me marmelatë brenda","Roll filled with jam","0.60€"],
 ["kifle-djathe","🥐","Kifle me djathë","Cheese roll","Kifle me djathë brenda","Roll filled with cheese","0.60€"],
 ["gjysme-hene","🥐","Gjysmë Hëne","Half Moon","Kifle si hënë","Roll shaped like a half moon","0.40€"],
 ["gjevrek","🥯","Gjevrek","Gjevrek","Përbërës të freskët","Fresh ingredients","0.40€"],
 ["perec","🥨","Perec","Pretzel","Kifle të vogla","Small rolls","0.20€"],
 ["lisnato-vishnje","🍒","Lisnato Vishnje","Puff pastry, cherry","Kifle me vishnje","Pastry with cherry","1.00€"],
 ["lisnato-molle","🍎","Lisnato Mollë","Puff pastry, apple","Kifle me mollë","Pastry with apple","1.00€"],
 ["lisnato-djathe","🧀","Lisnato Djathë","Puff pastry, cheese","Kifle me djathë","Pastry with cheese","1.00€"],
 ["donut","🍩","Donut","Donut","Donut me plot shije!","Donut full of flavor!","0.60€"]
];
const DRINK = [
 ["redbull","🥤","Red Bull","Red Bull","","","2.00€"],
 ["coca-cola","🥤","Coca-Cola","Coca-Cola","","","1.00€"],
 ["fanta","🥤","Fanta","Fanta","","","1.00€"],
 ["schweppes","🥤","Schweppes","Schweppes","","","1.00€"],
 ["ice-tea","🥤","Ice Tea","Ice Tea","","","1.00€"],
 ["sprite","🥤","Sprite","Sprite","","","1.00€"],
 ["lengje","🧃","Lëngje","Juice","","","1.00€"],
 ["golden-eagle","🥤","Golden Eagle","Golden Eagle","","","1.00€"],
 ["fruti","🧃","Fruti","Fruti","","","0.50€"],
 ["jogurt","🥤","Jogurt","Yogurt","","","0.40€"],
 ["ayran","🥤","Ayran","Ayran","","","0.40€"]
];

/* ===== PËRKTHIMET ===== */
const T = {
  sq: {
    nHome:"Ballina", nMenu:"Menuja", nAbout:"Rreth nesh", nContact:"Kontakti",
    tabFood:"Ushqimet", tabDrink:"Pijet",
    aboutText:"Furra Arti është një furrë në lagjen Zhabar të Mitrovicës, në Rrugën Ulqinit. Hapet në orën 6 të mëngjesit.",
    hoursTitle:"Orari", todayTag:"Sot",
    days:["E diel","E hënë","E martë","E mërkurë","E enjte","E premte","E shtunë"],
    address:"Rruga Ulqinit, Zhabar, Mitrovicë", bCall:"Telefono", bRoute:"Shiko në Google Maps",
    open:"Hapur tani – Mbyllet në", closed:"Mbyllur tani – Hapet", today:"sot në", tomorrow:"nesër në",
    closesIn:"Mbyllet pas", opensIn:"Hapet pas", h:"orë", m:"minuta", now:"Ora në Kosovë:"
  },
  en: {
    nHome:"Home", nMenu:"Menu", nAbout:"About us", nContact:"Contact",
    tabFood:"Food", tabDrink:"Drinks",
    aboutText:"Furra Arti is a bakery in the Zhabar neighborhood of Mitrovica, on Ulqini Street. It opens at 6 in the morning.",
    hoursTitle:"Opening hours", todayTag:"Today",
    days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    address:"Ulqini Street, Zhabar, Mitrovica", bCall:"Call us", bRoute:"View on Google Maps",
    open:"Open now – Closes at", closed:"Closed now – Opens", today:"today at", tomorrow:"tomorrow at",
    closesIn:"Closes in", opensIn:"Opens in", h:"h", m:"min", now:"Kosovo time:"
  }
};
let lang = localStorage.getItem("lang") || "sq";
let tab = "food";

/* ===== LOGO 3D: shkronjat vijnë drejt ekranit dhe përsëriten ===== */
let idx = 0;
document.querySelectorAll("#logo3d .line").forEach(line => {
  const text = line.textContent;
  line.textContent = "";
  [...text].forEach(c => {
    const s = document.createElement("span");
    s.className = "ch";
    s.style.setProperty("--i", idx++);
    s.innerHTML = c === " " ? "&nbsp;" : c;
    line.appendChild(s);
  });
});

const fl = document.getElementById("floaters");
for (let i = 0; i < 14; i++) {
  const e = document.createElement("i");
  const sz = 8 + Math.random() * 26;
  e.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;` +
    `--z:${Math.round(Math.random()*500-250)}px;--t:${4+Math.random()*5}s`;
  fl.appendChild(e);
}
const stage = document.getElementById("stage");
document.getElementById("ballina").addEventListener("mousemove", e => {
  const x = (e.clientX / innerWidth - .5) * 14, y = (e.clientY / innerHeight - .5) * -10;
  stage.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* ===== MENUJA ===== */
function renderList() {
  const list = document.getElementById("list");
  const L = lang === "sq" ? 0 : 1;
  list.innerHTML = "";
  (tab === "food" ? FOOD : DRINK).forEach((p, i) => {
    const [slug, emoji, n0, n1, d0, d1, price] = p;
    const name = L ? n1 : n0, desc = L ? d1 : d0;
    const el = document.createElement("article");
    el.className = "item";
    el.style.setProperty("--d", Math.min(i * 0.04, 0.8) + "s");
    const th = document.createElement("div");
    th.className = "thumb";
    th.textContent = emoji;
    const img = new Image();
    img.alt = name; img.loading = "lazy";
    img.onload = () => { th.textContent = ""; th.appendChild(img); };
    img.src = `images/${slug}.jpg`;
    const tx = document.createElement("div");
    tx.innerHTML = `<h3></h3>${desc ? "<p></p>" : ""}`;
    tx.querySelector("h3").textContent = name;
    if (desc) tx.querySelector("p").textContent = desc;
    const pr = document.createElement("div");
    pr.className = "price"; pr.textContent = price;
    el.append(th, tx, pr);
    list.appendChild(el);
  });
}
document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => {
  tab = b.dataset.tab;
  document.querySelectorAll(".tab").forEach(x => x.classList.toggle("active", x === b));
  renderList();
}));

/* ===== Animacion sa herë që hyn në një slide ===== */
const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dots a")];
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    en.target.classList.toggle("in", en.isIntersecting);
    if (en.isIntersecting) {
      dots.forEach((d, i) => d.classList.toggle("on", slides[i] === en.target));
      if (en.target.id === "menuja") { en.target.scrollTop = 0; renderList(); }
    }
  });
}, { threshold: .55 });
slides.forEach(s => io.observe(s));

/* ===== Ora e Kosovës dhe statusi ===== */
function kosovo() {
  const p = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .formatToParts(new Date());
  const g = x => p.find(y => y.type === x).value;
  const h = +g("hour"), m = +g("minute");
  return { h, m, t: h * 60 + m, day: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(g("weekday")) };
}
const two = n => String(n).padStart(2, "0");
const fmt = min => `${two(Math.floor(min / 60))}:${two(min % 60)}`;
function dur(min) {
  const t = T[lang], h = Math.floor(min / 60), m = min % 60;
  return h ? `${h} ${t.h} ${m} ${t.m}` : `${m} ${t.m}`;
}
function renderStatus() {
  const t = T[lang], k = kosovo();
  const [o, c] = HOURS[k.day];
  const isOpen = k.t >= o && k.t < c;
  document.getElementById("dot").className = "dot " + (isOpen ? "open" : "closed");
  let status, count;
  if (isOpen) {
    status = `${t.open} ${fmt(c)}`;
    count = `${t.closesIn} ${dur(c - k.t)}`;
  } else {
    const before = k.t < o;
    const nextOpen = before ? o : HOURS[(k.day + 1) % 7][0];
    status = `${t.closed} ${before ? t.today : t.tomorrow} ${fmt(nextOpen)}`;
    count = `${t.opensIn} ${dur(before ? o - k.t : 1440 - k.t + nextOpen)}`;
  }
  document.getElementById("status").textContent = status;
  document.getElementById("count").textContent = `${count}  ·  ${t.now} ${two(k.h)}:${two(k.m)}`;
  document.querySelectorAll("#hours li").forEach(li => {
    const on = +li.dataset.day === k.day;
    li.classList.toggle("today", on);
    li.querySelector(".tg").textContent = on ? t.todayTag : "";
  });
}
function renderHours() {
  const ul = document.getElementById("hours");
  ul.innerHTML = "";
  [1,2,3,4,5,6,0].forEach(d => {
    const li = document.createElement("li");
    li.dataset.day = d;
    li.innerHTML = `<span>${T[lang].days[d]}</span><span class="tg"></span><b>${fmt(HOURS[d][0])} – ${fmt(HOURS[d][1])}</b>`;
    ul.appendChild(li);
  });
}

/* ===== Gjuha ===== */
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = T[lang][el.dataset.i18n];
    if (v) el.textContent = v;
  });
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  renderHours(); renderList(); renderStatus();
}
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.lang;
  localStorage.setItem("lang", lang);
  applyLang();
}));

applyLang();
setInterval(renderStatus, 1000);