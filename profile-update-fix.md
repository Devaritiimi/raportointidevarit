# Käyttäjäprofiilin muokkauksen korjaussuunnitelma

## Liittyvä issue
#8 Käyttäjäprofiilin muokkaus ei tallenna tietoja oikein

## Ongelma
Käyttäjä pystyy avaamaan profiilin muokkausnäkymän, mutta kaikkia muutettuja tietoja ei tallenneta oikein. Osa kentistä voi palautua vanhoihin arvoihin sivun uudelleenlatauksen jälkeen.

## Tavoite
Varmistaa, että käyttäjän päivittämät tiedot tallentuvat oikein ja näkyvät käyttöliittymässä heti tallennuksen jälkeen.

## Korjattavat asiat
- profiilin muokkauslomakkeen kenttien tarkistus
- tallennuslogiikan toiminnan varmistaminen
- onnistumisviestin näyttäminen käyttäjälle
- virheviestin näyttäminen epäonnistuneessa tallennuksessa

## Hyväksymiskriteerit
- käyttäjä voi päivittää nimensä
- käyttäjä voi päivittää sähköpostinsa tai muut profiilitietonsa
- tiedot tallentuvat pysyvästi
- sivun uudelleenlataus näyttää päivitetyt tiedot
- virhetilanteissa käyttäjälle näytetään selkeä ilmoitus

## Testaustapa
1. Avaa profiilisivu
2. Muokkaa yhtä tai useampaa kenttää
3. Tallenna muutokset
4. Päivitä sivu
5. Tarkista, että uudet tiedot näkyvät oikein
