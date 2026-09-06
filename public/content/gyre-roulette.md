# Gyre Roulette – Tekninen arkkitehtuuri ja toteutus

**Gyre** on moderni, selaimessa toimiva 15-paikkainen rulettipeli, joka on rakennettu tarjoamaan visuaalisesti näyttävä ja interaktiivinen pelikokemus. Sovellus on suunniteltu puhtaasti viihdekäyttöön demo-krediiteillä ilman oikean rahan panoksia.

Alkuperäinen ydinidea oli luoda perinteistä kasinorulettia yksinkertaisempi, nopeatempoisempi peli (yksi pitkä kerroin, kaksi tasaista), ja paketoida se erittäin hiottuun, responsiiviseen ja audiovisuaalisesti palvelevaan käyttöliittymään.

---

# 1. Suunnitteluhaasteet ja käyttötapaukset

Selainpohjaisten pelien kehittäminen asettaa haasteita erityisesti suorituskyvyn, tilanhallinnan ja luotettavuuden suhteen. Animaatioiden tulee olla sulavia, äänten synkronisoituja ja tulosten aidosti satunnaisia.

Tämä aiheuttaa erityisesti kolme teknistä vaatimusta:

- **Tilan monimutkaisuus:** Panosten, saldon, historian ja pelivaiheiden (panostus vs. pyörintä) on pysyttävä täydellisesti synkronoituina.
- **Visuaalinen viiveettömyys:** DOM-päivitykset eivät saa katkaista rulettipyörän animaatiota.
- **Satunnaisuuden luotettavuus:** Käyttäjän on voitava luottaa siihen, että peli ei huijaa.

Gyre ratkaisee nämä ongelmat modernilla React-arkkitehtuurilla ja Web Crypto API:lla.

## UC-1: Puolueeton ja luotettava satunnaisuus (Provably Random)

**Ongelma:**
Tyypillinen selaimen `Math.random()` ei ole kryptografisesti turvallinen. Sen tuottamat luvut ovat ennustettavissa, mikä ei ole hyväksyttävää edes viihdekäyttöön tarkoitetussa onnenpelissä, sillä se syö pelin uskottavuutta.

**Ratkaisu:**
Käyttäjä ja peli luottavat täysin selaimen sisäänrakennettuun `crypto.getRandomValues()` -rajapintaan. Järjestelmä hakee satunnaisluvun CSPRNG (Cryptographically Secure Pseudorandom Number Generator) -moottorista ja varmistaa modulo-harhan (modulo bias) poistamisen erillisellä turvafunktiolla (`secureRandomInt`).

**Hyöty:**
Tulokset ovat täysin puolueettomia ja sattumanvaraisia. Tämä ominaisuus on nostettu esiin myös pelin käyttöliittymässä (Provably Random -merkki), mikä lisää pelaajan luottamusta järjestelmään.

---

## UC-2: Pelilogiikka ja panosten hallinta

Käyttäjä voi asettaa panoksia kolmelle eri värille:

- **Red (1–7):** 2x voittokerroin
- **Black (8–14):** 2x voittokerroin
- **Green (0):** 14x voittokerroin

Pelimoottorin tulee osata hallita useita samanaikaisia panoksia, vähentää ne saldosta reaaliajassa ja laskea voitot kierroksen päättyessä.

**Ratkaisu:**
Käytetään Reactin tilaa (`useState`) ja referenssejä (`useRef`), joiden avulla panosmäärät säilyvät muistissa ilman tarpeettomia uudelleenrenderöintejä pelin pyöriessä. Jos saldo ei riitä tai syöte on virheellinen, peli antaa visuaalisen virhepalautteen (välähdys) sallimatta panostusta.

---

## UC-3: Animaatioiden ja äänen synkronointi

Pelikokemuksen ydin on itse rulettipyörä.

**Ongelma:**
Pyörän on pyörittävä visuaalisesti tasaisesti tismalleen oikeaan kohtaan ja kestettävä tarkalleen 4.2 sekuntia. Samanaikaisesti taustaäänten (pyörintä ja lopputulos) täytyy tukea tätä illuusiota täydellisesti.

**Ratkaisu:**
Rulettipyörä toteutettiin leveänä flex-konteinerina (strip), jota liikutetaan CSS:n `transform: translateX()` -ominaisuudella ja kustomoidulla `cubic-bezier` -hidastuksella.
Tuloksen arvonta tapahtuu välittömästi napin painalluksesta, minkä jälkeen DOM rakentaa oikean lukujonon, jotta haluttu voittonumero asettuu aina keskelle.

Äänet on kytketty `useEffect`-elinkaarimetodeihin ja `useRef`-viittauksiin. Pyörimisääni käynnistetään spin-funktion alussa, ja tulosääni soitetaan tismalleen 4200 millisekuntia myöhemmin `setTimeout`-kutsulla.

---

## UC-4: Responsiivinen ja modulaarinen käyttöliittymä

Gyren tulee toimia saumattomasti niin mobiililaitteilla kuin työpöydällä.

Käyttöliittymä hyödyntää Tailwind CSS:n responsiivisia luokkia, jotta:

- Panosnapit (Clear, +1, +5, MAX jne.) asettuvat puhelimella tiiviiseen gridiin ja tietokoneella leveämpään riviin.
- Voittokorttien typografia skaalautuu näytön koon mukaan.
- Modaalit (säännöt ja lompakko) avautuvat siististi laitteesta riippumatta.

---

# 2. Teknologiapino

### 2.1 Frontend

- **React (Vite):** Gyre on rakennettu modernilla Reactilla, ja projektin paketoinnista vastaa Vite. Tämä mahdollistaa äärimmäisen nopean kehityssyklin (HMR) ja kevyen lopputuloksen selaimessa.
- **TypeScript:** Tuo peliin vahvan tyyppiturvallisuuden. Esimerkiksi panokset ja tulokset on sidottu tiukkoihin tyyppeihin, jolloin on mahdotonta asettaa panosta olemattomalle värille.
- **Tailwind CSS:** Koko sovelluksen visuaalinen ilme rakentuu Tailwindilla. Monimutkaiset gradientit, varjostukset (inset-shadows) ja lasiefektit (backdrop-blur) on luotu suoraan apuluokilla.
- **Framer Motion:** Käytetään käyttöliittymän mikrodynamiikkaan (esim. saldon rullaus, historiapalkin "pompahdus" ja 3D-hahmon leijunta).

---

# 3. Äänten hallinta ja Mykistyslogiikka

Selaimessa tapahtuvan äänentoiston rakentaminen on monimutkaista autoplay-rajoitusten ja renderöintisyklien vuoksi. Gyre sisältää globaalin taustamusiikin sekä komponenttitason ääniefektejä.

**Ratkaisu:**

- **App.tsx** hallitsee globaalia taustamusiikkia `bgMusicRef`-viittauksella.
- **GyreRoulette.tsx** ylläpitää omaa sisäistä `internalMuted`-tilaansa lokaalia mykistyspainiketta varten.
- Äänet ladataan vain kerran (`preload="auto"`) muistiin, ja nopeita efektejä kloonataan (`cloneNode`), jotta sama ääni voi soida useita kertoja päällekkäin.

---

# 4. Pelin elinkaari

Kierroksen tekninen prosessi etenee vaiheittain:

1.  **Odotustila:** Ajastin tikittää (15s).
2.  **Panostus:** Käyttäjä asettaa panoksen, jolloin se vähennetään saldosta ja tila (`wagers`) päivittyy.
3.  **Arvonta:** Ajastimen nollautuessa `secureRandomInt` arpoo tuloksen (0-14).
4.  **DOM Päivitys:** Lukujono rakennetaan siten, että arvottu tulos on oikeassa indeksissä.
5.  **Animaatio:** `transform: translateX` liikuttaa laattoja 4.2 sekuntia. Pyörimisääni soi.
6.  **Tulos:** Animaatio päättyy, voitonmaksu lasketaan, kortti välähtää ja tulosääni soi.
7.  **Uusi kierros:** Ajastin alkaa alusta.

---

# 5. Datan hallinta ja tila (State)

Kaikki data elää Reactin tilassa ilman erillistä tietokantaa. Keskeiset tilat ovat:

- `balance`: Käyttäjän nykyinen saldo.
- `wagers`: Panokset (Red, Green, Black).
- `history`: 15 viimeisimmän lopputuloksen taulukko.
- `outcomes`: Päättyneen kierroksen voittotiedot visuaalista palautetta varten.

---

# 6. Järjestelmän turvallisuus ja reunatapaukset

Vaikka kyseessä on demopeli, logiikka on rakennettu kestäväksi:

- **Panosten rajoitukset:** Ei negatiivisia summia, tekstisyötteitä tai yli saldon meneviä panoksia.
- **Tuplaklikkausten esto:** Spin-funktion käynnistyessä panosnapit deaktivoituvat ja uusi arvonta estetään kesken animaation.

---

# 7. Projektin Rakenne

Esimerkki Gyre Rouletten kansiorakenteesta:

```text
gyre-roulette/
│
├── src/
│   ├── App.tsx                     # Pääkomponentti, taustat ja globaali tila
│   ├── App.css                     # Kustomoidut CSS-animaatiot
│   │
│   ├── components/
│   │   ├── GyreRoulette.tsx        # Pelimoottori ja käyttöliittymän ydin
│   │   ├── CoinCanvas.tsx          # 3D-kolikon renderöinti
│   │   ├── GoldDust.tsx            # Visuaalinen hiukkasefekti
│   │   ├── RulesModal.tsx          # Säännöt-ponnahdusikkuna
│   │   └── DemoWalletModal.tsx     # Lompakon informaatio
│   │
│   └── assets/
│       └── bg2.png                 # Taustakuva
│
├── public/
│   └── sounds/
│       ├── tune.mp3                # Taustamusiikki
│       └── rolling.wav             # Rulettipyörän surina
│
├── tailwind.config.js              # Tailwindin teemamääritykset
└── tsconfig.json                   # TypeScript-konfiguraatio
```
