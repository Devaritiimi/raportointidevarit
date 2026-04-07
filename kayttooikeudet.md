# Käyttöoikeustasot ja roolien hallinta

**Liittyvä issue:** #7 Käyttöoikeustasot 

## Ongelma
Tällä hetkellä kaikilla käyttäjillä on samat oikeudet. Tämä on tietoturvariski, sillä arkaluontoiset tiedot kuten kaikkien kuljettajien raportit ja työtunnit eivät saa olla kaikkien saatavilla.

## Tavoite
Luoda järjestelmään kaksi selkeää käyttäjäroolia: **Kuljettaja** ja **Esimies (Admin)**. Sovelluksen on tunnistettava rooli kirjautumisen yhteydessä ja rajoitettava näkymiä sen mukaisesti.

## Määritellyt roolit

### 1. Kuljettaja
- **Oikeudet:**
    - Luo uusia raportteja (sis. kuva ja GPS).
    - Tarkastele omia aiempia raportteja.
    - Muokkaa omaa profiilia.
- **Rajoitukset:** Ei pääsyä muiden kuljettajien tietoihin tai koontiraportteihin.

### 2. Esimies (Admin)
- **Oikeudet:**
    - Kaikki kuljettajan oikeudet.
    - Näe kooste kaikista tehdyistä raporteista.
    - Lisää ja poista käyttäjiä (kuljettajia).
    - Muokkaa tai hylkää raportteja.

## Hyväksymiskriteerit
- [ ] Järjestelmä erottaa kirjautuneen käyttäjän roolin.
- [ ] "Admin-paneeli" näkyy vain Esimies-roolilla.
- [ ] Kuljettaja saa virheilmoituksen (403 Forbidden), jos hän yrittää hakea muiden raportteja URL-osoitteen kautta.