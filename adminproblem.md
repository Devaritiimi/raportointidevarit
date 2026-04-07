# Admin ei saa authentication ilmoitusta

## Liittyvä ongelma
#1 Admin ei pääse kirjautumaan

## Ongelma
Admin ei pääse kirjautumaan sisään sovellukseen, koska ei saa Authentication ilmoitusta puhelimeensa, eikä ole tapaa ohittaa sitä

## Tavoite
Saada työntekijät, muutkin kuin Admin, kirjautumaan sisälle muita keinoja käyttämällä

## Korjattavat asiat
- Luoda erikseen "En voi käyttää sovellustani juuri nyt"
- Käytä SMS-koodia, sillä kaikilla työntekijöillä on määritetty puhelinnumerot jokaista käyttäjää kohden

## Hyväksymiskriteerit
- Erillinen painike kirjautumissivustolla, jotta käyttäjä voi kirjautua ilman Auth-sovellusta tekstiviestin avulla
