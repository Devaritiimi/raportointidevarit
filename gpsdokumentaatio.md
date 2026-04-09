# GPS-sijainnin automaattinen tallennus

**Liittyvä issue:** #5 Sijaintitietojen puuttuminen

## Ongelma
Raportit pitää pystyä kohdistamaan oikeaan paikkaan kartalla ilman, että kuskin tarvitsee kirjoittaa osoitetta käsin. Manuaalinen syöttö on hidasta ja altistaa virheille (esim. väärä kadunnumero).

## Tavoite
Hakea laitteen koordinaatit (leveys- ja pituusaste) automaattisesti taustalla heti, kun uusi raportti aloitetaan.

## Parannukset
- **Automaatio:** Koordinaatit haetaan ilman käyttäjän erillistä syöttöä.
- **Tarkkuus:** Käytetään laitteen parasta mahdollista paikannustarkkuutta.
- **Luotettavuus:** Järjestelmä kertoo käyttäjälle, jos sijaintia ei voida varmistaa.

## Hyväksymiskriteerit
- [ ] **Lupa-asetukset:** Sovellus pyytää käyttäjältä lupaa käyttää sijaintitietoja selaimen kautta.
- [ ] **Koordinaattien haku:** Sovellus hakee pituusasteen (longitude) ja leveysasteen (latitude) vähintään 10 metrin tarkkuudella.
- [ ] **Aikaleima:** Sijaintitiedon mukana tallentuu hetki, jolloin koordinaatit on haettu (timestamp).
- [ ] **Virhekäsittely:** Jos GPS-signaalia ei löydy tai käyttäjä kieltää sijainnin, sovellus antaa selkeän ilmoituksen (esim. "Sijaintia ei voitu hakea").
- [ ] **Tallennus raporttiin:** Koordinaatit linkittyvät automaattisesti lähetettävään raporttiin ja ne tallentuvat tietokantaan raportin mukana.