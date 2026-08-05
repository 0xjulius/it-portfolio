# Duunify –  Tekninen Arkkitehtuuri ja Toteutus

**Duunify** on moderni, suomalaisille työnhakijoille suunniteltu Mini-SaaS-alusta. Järjestelmä on rakennettu korvaamaan perinteiset, manuaalisesti ylläpidettävät Excel-taulukot älykkäällä ja automatisoidulla työkalulla, joka visualisoi koko hakuprosessin reaaliaikaisesti. Sovellus on toteutettu täysin suomeksi ja se tarjoaa saumattoman käyttökokemuksen niin työpöydällä kuin mobiilissakin.

---

## 1. Liiketoimintaongelma ja Käyttötapaukset (Use Cases)

Perinteinen työnhaku nojaa usein hajautettuihin Excel-taulukoihin, muistilappuihin tai sähköpostiviesteihin. Tämä aiheuttaa useita kriittisiä ongelmia:
* **Manuaalisen työn määrä:** Jokaisen hakemuksen tietojen (yritys, rooli, palkkatoive, kuvaus) kopioiminen käsin vie aikaa.
* **Prosessin hallitsemattomuus:** Haastattelujen, hakuaikojen ja jatkotoimenpiteiden unohdukset kesken prosessin.
* **Analytiikan puute:** Hakija ei näe kokonaiskuvaa hakumääristä, vastausprosenteista tai aktiivisuudesta ajan yli.

Duunify ratkaisee nämä haasteet rakentamalla järjestelmän seuraavien keskeisten käyttötapausten ympärille:

### UC-1: Automaattinen työpaikkailmoituksen tuonti ja ilmoitusdatan säilyvyys

* **Käyttäjä:** Työnhakija
* **Liiketoimintaongelma & Kriittinen riski:** 
  * **Manuaalinen kuormitus:** Ilmoituksen tietojen (yritys, rooli, palkkatoive, kuvaus) kopioiminen käsin on hidasta ja altista virheille kuormittavassa työnhaussa.
  * **Datahävikki ("404 - Sivua ei löydy" -ilmiö):** Työpaikkailmoitukset poistetaan verkkosivustoilta usein heti hakuajan päätyttyä tai haastattelukierroksen alkaessa. Jos hakija kutsutaan haastatteluun viikkoja myöhemmin, alkuperäinen linkki on rikki. Hakija ei enää näe ilmoituksen vaatimuksia, sovittuja palkkaraameja tai yksityiskohtia, jolloin haastatteluun valmistautuminen vaarantuu.
* **Ratkaisu:** 
  * Käyttäjä syöttää sovellukseen työpaikkailmoituksen URL-osoitteen (tuetut alustat: mm. Duunitori, Työmarkkinatori, Jobly).
  * Taustajärjestelmän rajapinta hakee sivun HTML-rakenteen ja jäsentää ilmoituksen metadatan sekä koko leipätekstin.
  * Automaatio täyttää kentät (*yritys, tehtävänimike, palkka, sijainti, jne*) ja tallentaa koko ilmoitustekstin sellaisenaan tietokantaan.
* **Saavutettu hyöty ja arvo:**
  * **Nollavaiva:** Poistaa manuaalisen näppäilyn ja madaltaa kynnystä tallentaa hakemuksia.
  * **Tietojen säilyvyystakuu (Data Persistence):** Hakijalla on aina hallussaan täydellinen, pysyvä kopio ilmoituksesta ulkoisen sivuston tilasta riippumatta. Tämä takaa tarkan valmistautumisen haastatteluun sekä luo pohjan ilmoitusdatan hyödyntämiselle jatkossa (esim. AI-pohjaiset haastattelukysymysgeneroinnit).

### UC-2: Hakemusten ja hakuprosessin elinkaaren hallinta
* **Käyttäjä:** Työnhakija
* **Ongelma:** Vaikeus hahmottaa, missä vaiheessa kukin hakemus on ja mitä liitteitä on lähetetty.
* **Ratkaisu:** Hakemusten tilaa seurataan selkeällä tilakoneella (*Tallennettu, Haettu, Haastattelu, Tarjous, Hylätty*). Hakemukseen voi liittää muistiinpanoja ja liitetiedostoja (CV, saatekirje).

### UC-3: Aikataulujen, haastattelujen ja muistutusten hallinta
* **Käyttäjä:** Työnhakija
* **Ongelma:** Päällekkäiset haastatteluvaraukset ja unohdetut hakuajan päättymispäivät.
* **Ratkaisu:** Keskitetty kalenterimoduuli yhdistää automaattisesti haastatteluajat, hakuaikojen takarajat ja käyttäjän omat muistutukset samaan kuukausi- ja minikalenterinäkymään.

### UC-4: Prosessin visuaalinen analytiikka ja toimintaloki
* **Käyttäjä:** Työnhakija
* **Ongelma:** Tuntuma työnhaun edistymisestä perustuu mutu-tuntumaan.
* **Ratkaisu:** Dashboard tarjoaa visuaaliset mittarit: GitHub-tyylinen aktiivisuusruudukko, statusjakaumat, maantieteellinen karttanäkymä sekä viikoittainen aktiivisuusindeksi. Toimintaloki tallentaa kaikki tapahtumat auditointia ja CSV-vientijärjestelmää varten.

### UC-5: Järjestelmän ylläpito ja turvallisuus (Admin & Security)
* **Käyttäjä:** Järjestelmänvalvoja (Admin)
* **Ongelma:** Väärinkäytökset, roskaposti ja valtuuttamaton pääsy suojattuihin resursseihin.
* **Ratkaisu:** Roolipohjainen pääsynhallinta (RBAC), käyttäjien porttikieltojärjestelmä (bänniprosessi) sekä automaattinen audit-lokitus tehdyistä muutoksista.

### UC-6: Kirjautumatonta kokeilua tukeva Demo-tila
* **Käyttäjä:** Potentiaalinen uusi käyttäjä
* **Ongelma:** Kynnys rekisteröityä palveluun ilman kokeilua on korkea.
* **Ratkaisu:** Täysin eristetty `/demo`-ympäristö, joka käyttää lokaalia valedataa (mock-data) ilman tietokantakutsuja.

## 1. Teknologiapino ja Infrastruktuuri

Duunifyn arkkitehtuuri nojaa vahvasti palvelinpuolen renderöintiin (SSR) ja moderniin React-ekosysteemiin. 

### 1.1 Frontend ja Käyttöliittymä
* **Kehys:** Next.js (App Router). Mahdollistaa React Server Components (RSC) -teknologian hyödyntämisen, mikä vähentää selaimelle lähetettävän JavaScriptin määrää ja nopeuttaa sivunlatauksia.
* **Kieli:** TypeScript. Takaa tyyppiturvallisuuden koko sovelluksen laajuisesti, vähentäen ajonaikaisia virheitä.
* **Tyylittely:** Tailwind CSS. Mahdollistaa modulaarisen ja responsiivisen suunnittelujärjestelmän (Design System) ylläpidon.
* **UI-Komponentit ja Tilailmoitukset:** Sonner globaaleihin toast-ilmoituksiin. 

### 1.2 Tietokanta ja Backend
* **Tietokantamoottori:** Supabase (PostgreSQL). Tarjoaa relaatiotietokannan, käyttäjäautentikaation (Auth) sekä tiedostojen tallennuksen (Storage) CV:itä ja liitteitä varten.
* **Datan jäsennys (Web Scraping):** Cheerio. Käytetään taustajärjestelmässä (API-reitit) työpaikkaportaalien HTML-rakenteen lukemiseen ja metadatan eristämiseen.
* **Sähköpostipalvelin:** Resend. Vastaa yhteydenottolomakkeen viestien luotettavasta välityksestä.

### 1.3 Analytiikka ja Visualisointi
* **Kaaviot:** Recharts. Vastaa Dashboardin monimutkaisista datavisualisoinneista, kuten hakemustrendeistä ja aktiivisuusruudukoista.
* **Kalenterinäkymä:** react-big-calendar. Mahdollistaa kuukausi- ja minikalenterinäkymät haastatteluiden ja hakuaikojen hallintaan.

---

## 2. Tietoturva ja Arkkitehtoniset Ratkaisut

Projekti sisältää useita edistyneitä ohjelmistosuunnittelun malleja tietoturvan ja datan eheyden varmistamiseksi.

### 2.1 Monitasoinen Supabase-arkkitehtuuri
Tietoturvasyistä tietokantayhteydet on eriytetty tiukasti kolmeen erilaiseen instanssiin:
1. **`lib/supabase.ts` (Selain):** Selainpuolen operaatioihin tarkoitettu instanssi, joka nojaa evästepohjaiseen istuntoon. Tämän instanssin oikeudet on rajattu tiukasti RLS-säännöillä.
2. **`lib/supabase-server.ts` (Palvelin):** Suojattu instanssi Next.js:n palvelinkomponenteille, joka osaa lukea ja kirjoittaa evästeitä turvallisesti palvelimella.
3. **`lib/supabase-admin.ts` (Service Role):** Täysin RLS-säännöt ohittava instanssi, jota käytetään vain ja ainoastaan suojatuissa backend-reiteissä (esim. järjestelmänvalvojan toiminnot, kuten käyttäjän tilin jäädytys). Tätä ei koskaan altisteta client-puolelle.

### 2.2 Tietokannan RLS (Row Level Security)
* Kaikki käyttäjiin liittyvä data (taulut `applications`, `calendar_events`, `application_history`, `profiles`, `deleted_applications_log`) on suojattu PostgreSQL:n sisäänrakennetulla RLS-mekanismilla.
* Tämä tarkoittaa, että vaikka hyökkääjä onnistuisi lähettämään suoran API-kutsun, tietokanta kieltäytyy palauttamasta muiden käyttäjien tietoja.

### 2.3 Porttikieltojen (Bännien) Hallinta ja Middleware
Järjestelmä sisältää vankan, monitasoisen suojan häiriköiviä käyttäjiä vastaan:
* **Profiilisynkronointi:** Tieto käyttäjän bännistä (`is_banned`, `banned_until`) tallennetaan suoraan `profiles`-tauluun, jotta se on nopeasti luettavissa.
* **Edge-tason suojaus:** Next.js:n `proxy.ts` (middleware) tarkistaa jokaisen pyynnön yhteydessä käyttäjän tilan. Estetyt käyttäjät ohjataan välittömästi `/banned`-reitille ennen kuin yhtäkään suojattua sivua renderöidään tai tietokantakyselyitä suoritetaan.
* **Kirjautumislogiikka:** `login/actions.ts` tarkistaa tilan heti onnistuneen salasanatarkistuksen jälkeen. Jos bänni on aktiivinen, järjestelmä tuhoaa istunnon välittömästi (`signOut`) paljastamatta bänniä ulkopuolisille.

---

## 3. Keskeiset Ominaisuudet ja Datan Käsittely

### 3.1 Automaattinen Datan Keruu (DOM Parsing)
* Käyttäjä voi syöttää työpaikkailmoituksen URL-osoitteen (esim. Duunitori, Työmarkkinatori, Jobly), jolloin `/api/parse-job/route.ts` hakee sivun sisällön.
* Cheerio etsii HTML:n seasta jäsennellyn JSON-LD -datan, josta järjestelmä poimii automaattisesti yrityksen nimen, tehtävänimikkeen, palkan, sijainnin ja hakuajan päättymisen. Tämä estää dynaamisten CSS-luokkien muutoksista johtuvat scraper-virheet.

### 3.2 Tietokannan Eheys ja Poistolokit
* Kun hakemus poistetaan, relaatiotietokannan `cascade`-sääntö poistaisi automaattisesti myös siihen liittyvän `application_history`-datan.
* Jotta analytiikka ja toimintaloki pysyvät tarkkoina, järjestelmä käyttää erillistä `deleted_applications_log`-taulua. Tämä taulu on irrallinen, joten tiedot säilyvät hakemuksen poistamisesta huolimatta.

### 3.3 Komponenttien Uudelleenkäytettävyys (Demo vs. Tuotanto)
* Järjestelmä tarjoaa kirjautumista vaatimattoman demo-tilan mock-datalla.
* Ominaisuus on toteutettu siististi Reactin propseilla: esimerkiksi komponentit `ActivityHeatmap.tsx` tai `LocationsChart.tsx` ottavat vastaan valinnaisen `demoData`-propin.
* Jos prop on läsnä, komponentti renderöi lokaalin mock-datan (`lib/demo-data.ts`); jos ei, se hakee oikean käyttäjän datan Supabasesta. Tämä poistaa koodin duplikoinnin tarpeen demo- ja tuotantoympäristöjen välillä.

---

## 4. Modulaarinen Hakemistorakenne

Koodikanta on jaettu loogisiin kokonaisuuksiin Next.js App Router -konvention mukaisesti:

* **`/app`**: Reititys ja näkymät. Sisältää suojatut sivut (`/dashboard`, `/applications`), hallintapaneelin (`/admin`), julkiset sivut (`/login`, `/contact`) sekä demoympäristön (`/demo`).
* **`/components`**: Jaettavat käyttöliittymäkomponentit.
  * `ui/`: Yleiset, uudelleenkäytettävät matalan tason komponentit (painikkeet, dialogit, skeleton-latauskuvakkeet).
  * Ominaisuuskohtaiset kansiot, kuten `admin/` (käyttäjätaulukot), `dashboard/` (tilastokortit ja kaaviot) sekä `calendar/` (tapahtumamodaalit).
* **`/lib`**: Ydinlogiikka, konfiguraatiot ja tietokantayhteydet (`supabase.ts`, `export-csv.ts`, `logger.ts`).
* **`/hooks`**: Sovelluskohtaiset React Hookit datan noutamiseen (esim. `useDashboard.ts`, `useApplications.ts`).
* **`/types`**: Keskitetyt TypeScript-rajapinnat (esim. `database.ts`, `application.ts`), jotka vastaavat Supabasen skeemaa.