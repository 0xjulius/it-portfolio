# Shop with Elon: Virtuaalisen shoppailusimulaattorin rakentaminen React `useState` -tilanhallinnalla

Mitä ostaisit, jos käytössäsi olisi maailman rikkaan ihmisen omaisuus? Tästä hauskasta ja visuaalisesta ideasta inspiroituneena rakennettiin **Shop with Elon** -verkkosovellus, jossa käyttäjä pääsee kuluttamaan Elon Muskin virtuaalista omaisuutta erilaisten tuotteiden ostamiseen reaaliajassa.

Projekti on rakennettu **Reactilla**, ja sen teknisenä ydintavoitteena oli hallita monimutkaistuvaa sovellustilaa (state management) tehokkaasti `useState`-koukun (hook) avulla ilman ulkopuolisia raskaita tilanhallintakirjastoja.

---

## 🎯 Usecase: Miksi projekti rakennettiin?

Virtuaaliset shoppailusimulaattorit ovat loistava tapa yhdistää viihdyttävä käyttäjäkokemus ja tekninen suorituskyky. Sovelluksen tavoitteena oli luoda **interaktiivinen ja välittömästi reagoiva käyttöliittymä**, jossa jokainen napin painallus päivittää koko sovelluksen tilan synkronoidusti.

**Mitä sovelluksella voi tehdä?**
* **Reaaliaikainen budjetin seuranta:** Käyttäjä näkee Elon Muskin kokonaisomaisuuden vähenevän (tai kasvavan) välittömästi jokaisen ostoksen tai myynnin yhteydessä.
* **Ostaminen ja myyminen:** Jokaisen tuotteen kohdalla voi lisätä tai vähentää määrää, mikä vaikuttaa suoraan kokonaissummaan ja jäljellä olevaan budjettiin.
* **Dynaminen kuitti / Ostoskori:** Sovellus laskee ostoskorin kokonaissumman, erittelee ostetut tuotteet ja näyttää kuinka monta prosenttia kokonaisomaisuudesta on kulutettu.
* **Responsiivinen ja visuaalinen käyttöliittymä:** Tuotteet on esitetty selkeinä kortteina tuotekuvineen ja hintoineen, ja näkymä mukautuu saumattomasti mobiili- ja työpöytänäytöille.

---

## 💡 Mitä opinkaan tätä rakentaessani?

Projektin parissa työskentely oli erinomainen tilaisuus syventää ymmärrystä Reactin ydinkonsepteista ja tilanhallinnasta:

1. **Reaktiivinen tilanhallinta Reactin `useState`-koukulla:**
   Opimpa hallitsemaan monimutkaista tilaa (kuten tuotemääriä ja jäljellä olevaa saldoa) siten, että tilan päivitys laukaisee vain tarvittavien UI-komponenttien uudelleenrenderöinnin (re-render).
2. **Taulukoiden ja olioiden muuttumaton käsittely (Immutability):**
   Reactissa tilaa ei saa muokata suoraan. Opimpa päivittämään ostoskorin ja tuotteiden tilat oikeaoppisesti hyödyntäen `map`-, `filter`- ja spread-operaattoreita (`...`).
3. **Johdetun tilan (Derived State) hyödyntäminen:**
   Kaikkea dataa ei tarvitse tallentaa erilliseen tilaan. Opimpa laskemaan kokonaiskulutuksen ja jäljellä olevan budjetin suoraan olemassa olevan tuotetilan pohjalta, mikä ehkäisee tilojen ajautumista epätahtiin.
4. **Käyttöliittymän suorituskyky ja interaktiivisuus:**
   Painikkeiden aktivointi ja deaktivointi (esim. myyntinapin disablointi, jos tuotetta ei ole ostettu, tai ostonapin disablointi, jos raha ei riitä) takaa virheettömän käyttäjäkokemuksen.

---

## 📌 Yhteenveto

**Shop with Elon** on interaktiivinen ja viihdyttävä React-sovellus, joka esittelee kirkkaasti Reactin tärkeimmän peruspilarin: **reaktiivisen käyttöliittymän ja tilanhallinnan saumattoman yhteispelin**.

Projektin lähdekoodiin ja ratkaisuihin pääset tutustumaan suoraan GitHubissani:
👉 [GitHub: 0xjulius/shop-with-elon-usestate](https://github.com/0xjulius/shop-with-elon-usestate)

Muita projektejani ja sertifikaattejani löydät osoitteesta:
👉 [juliusaalto.com](https://juliusaalto.com)

*Mitä sinä ostaisit ensin, jos käytössäsi olisi Elon Muskin pankkitili? Voitko keksiä sovellukseen uusia ominaisuuksia, kuten pörssiosakkeiden arvonmuutokset reaaliajassa?*
