# Salasanan hashaus etenemisprosessi

## Liittyvä ongelma
#3 Salasanojen hashaus ongelma

## Ongelma
Salasanat tallentuvat tällä hetkellä suoraan tietokantaan, mikä on suuri tietoturvariski.

## Tavoite
Hyödyntää Argon2id hash-funktiota turvallisuuden vuoksi.

## Korjattavat asiat
-	Salt: Käytä suolattuja tiivisteitä ja suorita haku aina vastaavalla ”constant-time” -verifioinnilla
-	Pepper: Tallennus Key vaultiin
-	Muistiksi hyvä asettaa 2GiB, iteraatioita 2 ja rinnakkaisuutta harkinnan mukaan 1-4.
-	Aseta yhden salasanan tarkistuksen kestoksi 300ms
-	Kirjautumisyrityksiä max 5 ennen kuin tili lukittuu

## Hyväksymiskriteerit
-	 Argon2id hash-funkio käytössä
-	Tietokantaan ei tallennu mitään salasanoihin liittyviä asioita
-	Mikään salasana ei logitu selväkielisenä virhelokeihin
-	Varmista, että sovellus käyttää HTTPS-yhteyttä
-	Kirjautumisyrityksiä max 5
