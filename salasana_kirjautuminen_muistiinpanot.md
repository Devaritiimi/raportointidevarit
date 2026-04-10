# Authentication Implementation Notes

## Kirjautumisprosessi
1. Käyttäjä syöttää tunnukset login-lomakkeeseen
2. Backend hakee käyttäjän tietokannasta
3. Salasana tarkistetaan hashia vasten
4. Session luodaan onnistuneen loginin jälkeen

## Salasanojen käsittely
- Salasanoja EI tallenneta selkokielisenä
- Käytetään hash-algoritmia (esim. bcrypt)
- Vertailu tehdään hash-funktiolla