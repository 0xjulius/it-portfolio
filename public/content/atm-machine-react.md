# Tekoäly koodaa, mutta kuka suunnittelee ulkoasun? – Keissitutkimus: React ATM -sovellus

Nykypäivänä kuka tahansa osaa generoida toimivaa koodia tekoälyn avulla. Annat ChatGPT:lle, Claudelle tai Cursorille reuna-ehdot, ja muutamassa sekunnissa sinulla on toimiva React-komponentti, tilanhallinta ja rajapintakutsut.

Koodin toimivuus ei kuitenkaan enää ole projekteissa se suurin pullonkaula. Suurin haaste tekoälyavustetussa ohjelmistokehityksessä on **ulkoasu ja käyttökokemus (UI/UX)**. 

Ilman tarkkaa visuaalista ohjausta tekoälyn generoimat sovellukset näyttävät usein alkeellisilta, geneerisiltä ja "kehittäjän tekemiltä" – harmailta laatikoilta, joista puuttuu viimeistely, animaatiot ja intuitiivinen hierarkia.

Tässä blogikirjoituksessa syvennymme projektiin **[atm-machine-react](https://github.com/0xjulius/atm-machine-react)** ja tarkastelemme, miten tekoälytyökaluja valjastettiin nimenomaan **visuaalisen ilmeen ja käyttökokemuksen hiomiseen**.

---

## Projektin tausta: Pankkiautomaatti Reactilla

`atm-machine-react` on interaktiivinen ja realistinen pankkiautomaattisimulaattori, joka on rakennettu **Reactilla**, **TypeScriptillä** ja **Tailwind CSS:llä**.

Sovelluksen ydintoimintoihin kuuluvat:
* **PIN-koodin syöttö ja todennus:** Turvallinen syöttö visualisoidulla näppäimistöllä.
* **Tilinäkymä ja saldo:** Reaaliaikainen saldon tarkistus ja tilitapahtumat.
* **Nostot ja talletukset:** Setelien valinta, reaaliaikainen saldon päivittyminen ja virtuaalinen kuitin tulostus.
* **Interaktiivinen käyttöliittymä:** Fyysisen automaatin ja digitaalisen näytön saumaton yhdistelmä.

Toiminnallisuuden koodaaminen React-stateilla ja hokeilla oli nopeaa aikaisemman pankki-automaattisovelluksen vuoksi joka toteutettiin pythonilla **[atm-machine](https://github.com/0xjulius/atm-machine)**, mutta miten sovelluksesta saatiin sellainen, että se **tuntuu** oikealta pankkiautomaatilta?

---

## Tärkein käyttötapaus (Use Case): Tekoäly visuaalisen ilmeen muotoilijana

### Ongelma: Geneerinen koodi = tylsä käyttöliittymä
Kun tekoälyä pyytää luomaan "ATM UI in React", lopputulos on yleensä yksinkertainen form-lomake, jossa on Muokkaa- ja Lähetä-painikkeet. Se täyttää tekniset vaatimukset, mutta ei herätä mitään tunteita eikä vastaa todellista käyttökokemusta.

### Ratkaisu: Tekoälytyökalujen hyödyntäminen UI/UX-suunnittelussa
`atm-machine-react` -projektissa tekoälyä käytettiin sparrauskumppanina ja muotoilijana seuraavilla osa-alueilla:

#### 1. Design Tokenit ja väripaletin hienosäätö
Tekoälyä ohjattiin luomaan selkeä mockup ja värihierarkia:
* Pankkiautomaatin näytön matala kontrasti vs. fysiikkapainikkeiden syvyysversiot.
* Tailwind CSS -luokkien hienosäätö: tummat taustat (`slate-900`), neon-sävyt näytön tilatiedoissa sekä hienovaraiset gradientit ja varjot (`shadow-2xl`, `backdrop-blur`).

#### 2. Tuntumataksonomia ja fyysisyys (Skeuomorfiset yksityiskohdat)
Oikeassa pankkiautomaatissa on fyysisiä elementtejä: näppäimistö, seteliaukko, kuitintulostin ja näyttö ruudunkehyksineen.
* Tekoälyn avulla suunniteltiin CSS-animaatioita ja mikrointeraktioita (esim. painikkeen painalluksen `active:translate-y-0.5` -vasteet ja kuitin liukuva esiintulo).
* Visuaaliset efekti-promptit auttoivat luomaan realistiset kiillot, metalliset reunat ja digitaalisen ruudun hohdon.

#### 3. Komponenttien layout-hierarkia
Sen sijaan että tekoälylle olisi sanottu "tee tämä sivu", sitä pyydettiin ryhmittelemään käyttöliittymä fyysisen laitteen logiikan mukaan:
* **Header / Status Bar:** Kortin tila ja verkko-yhteys.
* **Screen Display:** Sisältöalue, jossa dynaamiset vaihtoehdot linjautuvat sivunäppäinten kohdalle.
* **Keypad & Card Slot:** Tuntumapainikkeet ja kortin syöttöaukon visuaalinen indikaattori.

---

## Opit ja vinkit tekoälyavusteiseen UI-kehitykseen

Jos haluat nostada omat tekoälyprojektisi alkeellisesta prototyypistä ammattimaiseksi tuotteeksi, kokeile näitä periaatteita:

1. **Aloita mockupilla – Pakota tekoäly suunnittelijaksi**  
Älä aloita kirjoittamalla React-komponentteja tai tilanhallintalogiikkaa. Ensimmäisen askeleen pitää olla pelkkä ulkoasun ja fiiliksen lukkoon lyöminen.
   * **Konkreettinen toimintatapa:** Pyydä tekoälyä luomaan pelkkä visuaalinen prototyyppi tai kuva sivustostasi.
   * **Vältä geneeriset promptit:** Älä sano pelkästään *"Tee pankkiautomaatin UI"*. Anna tekoälylle tarkka visuaalinen rooli ja reunaehdot:
     > *"Toimi UI/UX-suunnittelijana. Suunnittele ja generoi minulle hieman retrohenkistä suomalaista fyysistä pankkiautomaattia mukaileva kuva pankkiautomaatin etupaneelista. Ulkoasun pitää tuntua heti aidolta pankkiautomaatilta, ei peruslomakkeelta."*
   * **Miksi tämä toimii?** Kun ulkoasun arvomaailma ja visuaalinen ilme on lyöty lukkoon ennen bisneslogiikan sotkemista mukaan, tekoäly ei pudota koodia takaisin oletusarvoisiin, harmaisiin ja tylsiin selainelementteihin.

2. **Älä pyydä vain koodia – pyydä tyyliä ja fiilistä:**  
   Vältä promptia: *"Create a balance sheet component."*  
   Käytä sen sijaan: *"Create a sleek, modern ATM dashboard using Tailwind CSS. Use dark slate tones, glowing green text for positive balance, subtle card borders, and smooth transition animations."*

3. **Hyödynnä tekoälyä Tailwind-asiantuntijana:**  
   Tekoäly hallitsee Tailwind CSS:n mikro-luokat erinomaisesti. Voit pyytää sitä lisäämään esimerkiksi neumorfisia tai glassmorfisia efektejä suoraan koodiin.

4. **Iteroi ulkoasua erillään logiikasta:**  
   Erota koodin toiminnallisuus ja visuaalinen kiillotus. Kun sovelluksen logic toimii, käytä tekoälyä pelkästään komponenttien renssointiin ja visuaaliseen hiomiseen.

---

## Yhteenveto

Lopputuloksena syntynyt **[atm-machine-react](https://github.com/0xjulius/atm-machine-react)** osoittaa, että koodin generointi on vain puolet yhtälöstä. Kun tekoäly valjastetaan mukaan myös **muotoiluun, animaatioihin ja UI-arkkitehtuuriin**, lopputuloksena on sovellus, joka ei pelkästään toimi – vaan myös näyttää ja tuntuu valmiilta tuotteelta.

Tutustu projektiin ja lähdekoodiin GitHubissa:  
👉 **[https://github.com/0xjulius/atm-machine-react](https://github.com/0xjulius/atm-machine-react)**
