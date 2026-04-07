# Lomakkeiden virheilmoitusten parantaminen

## Liittyvä issue
#10 Käyttäjälle ei näy selkeitä virheilmoituksia lomakkeissa

## Ongelma
Käyttäjä ei saa aina selkeää palautetta siitä, miksi lomakkeen lähetys epäonnistui. Tämä voi tapahtua esimerkiksi kirjautumisessa, rekisteröinnissä tai tietojen muokkauksessa.

## Tavoite
Parantaa käytettävyyttä näyttämällä selkeät ja ymmärrettävät virheilmoitukset.

## Parannukset
- pakolliset kentät merkitään selkeästi
- tyhjistä kentistä näytetään virheilmoitus
- väärässä muodossa olevista arvoista annetaan palaute
- virheellinen kenttä korostetaan
- onnistuneesta toiminnosta näytetään vahvistusviesti

## Esimerkkejä virheilmoituksista
- "Sähköpostikenttä on pakollinen"
- "Salasanan tulee olla vähintään 8 merkkiä pitkä"
- "Virheellinen sähköpostiosoite"
- "Tallennus epäonnistui, yritä uudelleen"

## Hyväksymiskriteerit
- käyttäjä näkee mikä kenttä aiheuttaa virheen
- virheilmoitus näkyy lomakkeella selkeästi
- lomake ei lähetä puutteellisia tietoja
- onnistuneesta lähetyksestä näytetään palaute

## Testaustapa
1. Jätä pakollinen kenttä tyhjäksi
2. Syötä virheellinen sähköpostiosoite
3. Lähetä lomake
4. Tarkista, että oikea virheilmoitus näkyy oikeassa kohdassa
