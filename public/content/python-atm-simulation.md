# Python ATM Simulation: Pankkiautomaattisimulaattori Pythonilla

Perusasioiden hallinta on ohjelmoinnissa kaiken perusta. Tässä projektissa rakennettiin selkeä ja toimintavarma **pankkiautomaattisimulaattori (ATM Simulation)** Python-kielellä. 

Sovellus tarjoaa tekstipohjaisen käyttöliittymäohjauksen, jossa käyttäjä voi tarkistaa saldonsa, tehdä talletuksia sekä nostaa rahaa reaaliajassa. Projektissa kiinnitettiin erityistä huomiota Syötteiden tarkistukseen (input validation) ja poikkeustilanteiden hallintaan (exception handling).

---

## 💻 Koodiesimerkki

Alla on sovelluksen ydinkoodi, joka pyörittää automaatin toimintalogiikkaa:

```python
def atm_simulator():
    saldo = 1000.0
    print("\nTervetuloa Pankkiautomaattiin!")

    while True:
        print("\nValitse toiminto:")
        print("1. Saldo")
        print("2. Talletus")
        print("3. Otto")
        print("4. Lopetus")
        
        valinta = input("Valitse (1-4): ")
        
        if valinta == '1':
            # Tarkistetaan saldo
            print(f"Saldosi on: {saldo:.2f} €")
        
        elif valinta == '2':
            # Talletus
            try:
                summa = float(input("Syötä tallettamasi summa: "))
                if summa > 0:
                    if summa > 10000:
                        print("Voit tallettaa enintään 10 000 euroa yhdellä kerralla.")
                    else:
                        saldo += summa
                        print(f"{summa:.2f} € Talletus onnistui!")
                else:
                    print("Syötä positiivinen numero")
            except ValueError:
                print("Virhe. Syötä numeerinen arvo.")

        elif valinta == '3':
            # Varon nosto
            try:
                summa = float(input("Kuinka paljon haluat nostaa? "))
                if summa > 0:
                    if summa % 5 != 0: # Modulo - varmistaa että summa on jaollinen viidellä
                        print("Yritä uudelleen. Voit nostaa vain seteleitä!")
                    elif saldo >= summa:
                        saldo -= summa
                        print(f"{summa:.2f} euron nosto onnistui.")
                    else:
                        print(f"Nosto epäonnistui. Varoja liian vähän. (Nostoyritys {summa:.2f}. Nykyinen saldo: {saldo:.2f})")
                else:
                    print("Syötä positiivinen numero.")
            except ValueError:
                print("Virhe. Syötä numeerinen arvo.")

        elif valinta == '4':
            # Exit
            print("Kiitos, että käytit pankkiautomaattia. Näkemiin!")
            break
        
        else:
            print("Virheellinen valinta. Yritä uudelleen!")

if __name__ == "__main__":
    atm_simulator()
```

---

## 🎯 Usecase: Miksi projekti rakennettiin?

Pankkiautomaatti on klassinen ohjelmointiharjoitus, koska se sisältää lähes kaikki tilapohjaisen sovelluslogiikan peruselementit: **valikkorakenteen, tilinhallinnan, raja-arvojen valvonnan ja poikkeustilanteiden käsittelyn**.

**Mitä sovelluksella voi tehdä?**
* **Saldon kysely:** Käyttäjä voi tarkistaa tilinsä senhetkisen saldon (oletuksena 1000.00 €).
* **Tallettaminen:** Mahdollistaa rahan tallettamisen tilille 10 000 euron kertatyyppisellä katolla.
* **Nostaminen:** Rahan nosto tililtä siten, että järjestelmä tarkistaa saldon riittävyyden sekä varmistaa, että nostettava summa on jaollinen 5 eurolla (setelivaatimus).
* **Virheiden estäminen:** Järjestelmä ei kaadu virheellisiin syötteisiin (kuten kirjaimiin numeroiden sijaan) eikä salli negatiivisia summia.

---

## 💡 Mitä opinkaan tätä rakentaessani?

Vaikka projekti on tiivis, se vahvisti tärkeitä ohjelmoinnin perusperiaatteita:

1. **Poikkeustilanteiden hallinta (`try-except`):**
   Opimpa käsittelemään `ValueError`-poikkeukset, jotta sovellus pysyy pystyssä, vaikka käyttäjä syöttäisi tekstiä numeroiden sijaan.
2. **Liiketoimintalogiikan ja raja-arvojen testaaminen (Business Rules & Validation):**
   * Modulo-operaattorin (`% 5`) hyödyntäminen setelijaoittelun varmistamiseksi.
   * Ylärajan (10 000 € talletusraja) ja alarajan (positiiviset luvut) asettaminen syötteille.
   * Ylinoston estäminen tarkistamalla `saldo >= summa`.
3. **Toistorakenteet ja tilanhallinta (`while`-silmukka):**
   Ikuisen silmukan (`while True`) hallinta siten, että sovellus pysyy käynnissä kunnes käyttäjä eksplisiittisesti valitsee lopetuksen (`break`).
4. **Merkkijonojen muotoilu (f-strings):**
   Datan siisti esittäminen käyttäjälle kahden desimaalin tarkkuudella (`{saldo:.2f}`).

---

## 📌 Yhteenveto

**Python ATM Simulation** on toimintavarma ja selkeästi jäsennelty pikkusovellus, joka esittelee ohjelmoinnin perusrakenteita käytännönläheisen esimerkin kautta. Se osoittaa kykyä kirjoittaa puhdasta, luettavaa ja virheet ennakoivaa koodia.

Osaamiseeni ja muihin projekteihini pääset tutustumaan osoitteessa:
👉 [juliusaalto.com](https://juliusaalto.com)

*Millaisia rajauksia tai jatko-ominaisuuksia (kuten PIN-koodin kyselyä tai tapahtumahistoriaa) sinä lisäisit tähän automaattiin?*
