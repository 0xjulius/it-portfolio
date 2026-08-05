# Python Job Finder Telegram Bot: IT-työpaikkojen automaattinen skraapaus ja ilmoitus Telegramiin

Työnhaku voi olla aikaavievää, jos eri sivustoja joutuu päivittäin selaamaan käsin. Tätä helpottamaan rakennettiin **Python-pohjainen Telegram-botti**, joka skreippaa (web scraping) reaaliaikaisesti IT-alan avoimia työpaikkoja Duunitori.fi-palvelusta ja lähettää ne suoraan käyttäjän Telegram-chattiin kaupungin mukaan suodatettuna.

Sovellus hyödyntää `python-telegram-bot`-kirjastoa asynkroniseen viestintään sekä `BeautifulSoup`-kirjastoa HTML-sivujen jäsentämiseen.

---

## 🎯 Usecase: Miksi projekti rakennettiin?

Työpaikkailmoitusten seuraaminen useilta eri sivustosilta vaatii aikaa ja vaivaa. Projekti luotiin **automatisoimaan ja helpottamaan IT-alan työpaikkahakua**, tuomalla uusimmat ilmoitukset yhteen paikkaan – suoraan jokapäiväisessä käytössä olevaan viestisovellukseen.

**Mitä sovelluksella voi tehdä?**
* **Kaupunkikohtainen suodatus:** Käyttäjä voi valita tietyn kaupungin (esim. Vaasa, Tampere, Helsinki) tai hakea koko Suomen laajuudelta.
* **Automaattinen Web Scraping:** Botti hakee BeautifulSoupin avulla tuoreimmat vakituiset kokopäivätyöt IT-alalata.
* **Sivutuksen hallinta (Pagination):** Botti käy läpi useita hakutulossivuja automaattisesti.
* **Älykäs viestien paloittelu (Message Chunking):** Botti huomioi Telegram API:n 4096 merkin viestirajoituksen ja jakaa hakutulokset useampaan viestiin tarpeen mukaan.
* **Tuki yksityis- ja ryhmächateille:** Botti toimii sekä henkilökohtaisissa viesteissä että kanavilla/ryhmissä mention-tunnisteella.

---

## 💡 Mitä opinkaan tätä rakentaessani?

Tämän botin kehittäminen yhdisti asynkronisen ohjelmoinnin, web-skreippauksen ja API-integraatiot:

1. **Asynkroninen ohjelmointi (`asyncio` ja `async/await`):**
   Opimpa hallitsemaan viestiketjuja ja pyyntöjä ei-plokkaavasti, mikä takaa botin nopean reagoivuuden silloinkin, kun taustalla tehdään verko yli meneviä hakuja.
2. **HTML-rakenteen analysointi ja Web Scraping (`BeautifulSoup`):**
   Omien luokkanimien (`job-box`, `job-box__title` jne.) ja DOM-rakenteen tunnistaminen sekä datan siivoaminen (`.strip()`) luettavaan muotoon.
3. **Telegram API -rajat ja virheiden ennakointi:**
   Telegramin viestikohtaisen pituusrajan (4096 merkkiä) hallinta laskemalla merkkimääriä ennen viestin lähettämistä estää sovellusta kaatumasta laajoihin hakutuloksiin.
4. **Tietoturva ja ympäristömuuttujat (`python-dotenv`):**
   API-avainten (`TOKEN`) pitäminen erillään lähdekoodista `.env`-tiedoston avulla parhaiden käytäntöjen mukaisesti.

---

## 📌 Yhteenveto

**Python Job Finder Telegram Bot** on käytännöllinen työkalu, joka yhdistää automaation, hakurobotit ja helpon käyttökokemuksen. Se demonstroi vahvaa Python-osaamista asynkronisen koodin, verkkoaineistojen prosessoinnin ja API-integraatioiden parissa.

Muuta osaamistani ja projektejani löydät osoitteesta:
👉 [juliusaalto.com](https://juliusaalto.com)

*Pitäisikö laajentaa botin hakemaan ilmoituksia myös muista portaaleista, kuten LinkedInistä tai Monsterista?*
