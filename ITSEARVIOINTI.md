# Itsearviointi - Tab Media Controller

**Opiskelija:** Waltteri Westerholm  
**Päivämäärä:** [Palautuspäivä]  
**Arvosanatavoite:** 3

---

## 1. Projektin kuvaus ja tavoitteet

### Alkuperäinen suunnitelma


> Tavoitteenani oli luoda verkkoselain-laajennus jonka avulla käyttäjä pystyy säätämään erillisten välilehtien äänenvoimakkuus tasoja. Laajennuksen tulisi toimia Firefoxilla sekä Chromella.
> Taurilla rinnakkais-sovellus desktop käyttöä varten tietokoneen laajempaa medianhallintaa varten. (Jos aika riittää)

> Oppimistavoitteet:
    > - Verkkolaajennusten kehitys (manifest v3).
    > - Syventää modernien tekoälytyökalujen käyttöä kehitysprosessissa vastaamaan oikean työympäristön tapoja.
    > - Chrome Extension arkkitehtuurin ymmärtäminen (popup, background service worker, content scripts)
    > - Chrome-spesifisten API:den käyttö (tabs, storage, tabCapture)

### Toteutunut projekti
[Kirjoita tähän mitä todella toteutit]

**Esimerkki:**
> Toteutin toimivan verkkoselain-laajennuksen, joka sisältää:
> - Välilehtien listauksen ja tilan seurannan
> - Play/pause-kontrollit
> - Äänenvoimakkuuden säätö per välilehti
> - Mute/unmute toiminnallisuus
> 
> ** Tauri sovellus **


### Poikkeamat suunnitelmasta
[Mitä jäi tekemättä tai mitä lisäsit suunnitelman ulkopuolelta?]

**Esimerkki:**
> - Tauri desktop companion jäi prototyyppiasteelle aikataulun takia
> - Lisäsin visualisaation jota ei ollut alkuperäisessä suunnitelmassa
> - Chrome Web Store julkaisu jäi tekemättä

---

## 2. Käytetyt teknologiat ja oppiminen

### Uudet teknologiat

#### Chrome Extension Development (Manifest V3)
**Mitä opin:**
- [Background service workers vs content scripts]
- [Chrome API:en käyttö (tabs, storage, tabCapture)]
- AI työkalujen käyttöä oikea oppisesti


**Haasteet:**
- [Mikä oli vaikeaa?]
- [Miten ratkaisit ongelmat?]

**Esimerkki:**
> Opin Chrome Extension kolmiosaisen arkkitehtuurin (popup, background, content scripts) ja niiden välisen kommunikaation. Haastavin osa oli ymmärtää service workereiden elinkaari ja miten data säilyy niiden välillä. Ratkaisin tämän tutustumalla dokumentaatioon ja kokeilemalla eri lähestymistapoja.

#### Web Audio API
**Mitä opin:**
- [AudioContext, GainNode yms.]
- [Äänenvoimakkuuden manipulointi]
- [Audio routing]

**Haasteet:**
- [Mikä oli vaikeaa?]

#### TypeScript
**Mitä opin:**
- [Type safety, interfaces]
- [Chrome API typings]
- [Async/await patterns]

#### [Jos teit Tauri-osuuden] Tauri 2.0 + Rust
**Mitä opin:**

- [Tauri arkkitehtuuri]
- [Rust perusteet]
- [Frontend-backend kommunikaatio]

### AI-työkalujen käyttö

**Käytetyt työkalut:**
- GitHub Copilot
- Claude AI / ChatGPT
- [Muut työkalut]

**Miten käytin:**
[Ole rehellinen! Tämä on tärkeää.]

**Esimerkki:**
> Käytin GitHub Copilotia koodin kirjoittamisessa, mikä nopeutti kehitystä merkittävästi. Copilot auttoi erityisesti:
> - TypeScript syntaksin kanssa
> - Chrome API kutsujen muotoilussa
> - Boilerplate-koodin generoinnissa
> 
> Käytin Claude AI:ta:
> - Arkkitehtuurisuunnittelussa
> - Ongelmien debuggauksessa
> - Dokumentaation ymmärtämisessä
> 
> TÄRKEÄÄ: Vaikka AI-työkalut auttoivat, minun piti silti:
> - Ymmärtää Chrome Extension arkkitehtuuri
> - Debugata ongelmat itse
> - Tehdä suunnittelupäätökset
> - Validoida AI:n generoima koodi

**Oppimisen vaikutus:**
> AI-työkalut eivät vähentäneet oppimista, vaan muuttivat sen luonnetta. Keskityin konseptien ymmärtämiseen syntaksin muistamisen sijaan. Opin nopeammin, mutta silti syvällisesti.

---

## 3. Työprosessi ja aikataulu

### Työtuntien erittely

| Viikko | Tehtävä | Tunnit | Huomiot |
|--------|---------|--------|---------|
| Viikko 1 | Suunnittelu ja tutkimus | [X h] | Chrome API dokumentaatio, arkkitehtuuri |
| Viikko 2 | [Tehtävä] | [X h] | [Huomio] |
| Viikko 3 | Extension kehitys | [X h] | Copilot-avusteinen kehitys |
| Viikko 4 | [Tauri kehitys / Polish] | [X h] | [Huomio] |
| Viikko 5 | Dokumentaatio | [X h] | README, itsearviointi |

**Yhteensä: [XX] tuntia**

### Aikataulu vs. todellisuus

**Suunniteltu:** 80-100h, 5 viikkoa  
**Toteutunut:** [XX]h, [X] viikkoa

**Miksi aikataulu poikkesi:**
[Selitä rehellisesti]

**Esimerkki:**
> AI-työkalujen, erityisesti GitHub Copilotin, käyttö nopeutti koodauksen merkittävästi. Sen sijaan että olisin käyttänyt 60h koodin kirjoittamiseen, käytin ~20h. Tämä vapautti aikaa:
> - Syvempään dokumentaation tutkimiseen
> - Useamman arkkitehtuurivaihtoehdon kokeiluun
> - Paremman ymmärryksen saavuttamiseen
> 
> Töiden ja muiden kurssien takia aikataulu venyi alkuperäisestä suunnitelmasta.

### Työskentelytapa

[Miten työskentelit? Iteratiivinen, agile, jne.?]

**Esimerkki:**
> Työskentelytapa oli iteratiivinen:
> 1. Tutustuin dokumentaatioon
> 2. Prototyyppäsin pienen osan
> 3. Testasin toimivuuden
> 4. Refaktoroin ja paransin
> 5. Jatkoin seuraavaan ominaisuuteen

---

## 4. Haasteet ja ratkaisut

### Tekniset haasteet

#### Haaste 1: [Nimi]
**Ongelma:**
[Kuvaa ongelma]

**Ratkaisu:**
[Miten ratkaisit]

**Mitä opin:**
[Oppiminen]

**Esimerkki:**
> **Ongelma:** Chrome Extension service worker sammui säännöllisesti, mikä katkaisi audio streamit.
> 
> **Ratkaisu:** Tutustuin service worker lifecycle dokumentaatioon ja toteutin keep-alive mekanismin sekä state persistoinnin chrome.storage:en.
> 
> **Mitä opin:** Service workerit ovat event-driven ja niiden elinkaari on erilainen kuin perinteisillä background scripteillä.

#### Haaste 2: [Nimi]
[Toista sama rakenne]

### Ei-tekniset haasteet

**Aikataulutus:**
[Miten tasapainotit työn, opiskelun ja projektin?]

**Motivaatio:**
[Oliko vaikeita hetkiä? Miten pysyit motivoituneena?]

---

## 5. Tulokset ja saavutukset

### Mitä sain aikaan

**Toiminnallisuudet:**
- [x] Välilehtien listaus
- [x] Play/pause kontrollit
- [x] Volume control
- [x] Mute/unmute
- [x] Asetuksien tallennus
- [ ] [Jotain mitä ei valmistunut]

**Tekninen laatu:**
- TypeScript 100% (ei any-tyyppejä)
- Toimiva error handling
- Dokumentoitu koodi
- [Lisää omia mittareita]

**Portfolio-arvo:**
[Miten tämä auttaa työnhaussa?]

**Esimerkki:**
> Projekti osoittaa osaamistani:
> - Modern web development (TypeScript, Vite)
> - Browser extension development
> - Web Audio API
> - AI-työkalujen tehokasta hyödyntämistä
> - Itsenäistä ongelmanratkaisua
> 
> Voin käyttää tätä CV:ssä ja portfoliossa. [Jos julkaisit] Linkki Chrome Web Storeen on konkreettinen todiste osaamisesta.

### Mitä jäi tekemättä

[Ole rehellinen]

**Esimerkki:**
> - Tauri desktop companion jäi prototyyppiasteelle
> - Chrome Web Store julkaisu
> - Kattavat yksikkötestit
> - macOS/Linux tuki

**Miksi:**
> Aikataulun tiukkuus työn ja muiden kurssien takia. Keskityin toimivan ytimen tekemiseen laajan mutta keskeneräisen projektin sijaan.

---

## 6. Henkilökohtainen kehitys

### Vahvuudet

**Mitä osaan hyvin:**
- [Vahvuutesi]
- [Mikä sujui helposti?]

**Esimerkki:**
> - TypeScript ja modernit web-teknologiat
> - Dokumentaation lukeminen ja ymmärtäminen
> - AI-työkalujen hyödyntäminen tehokkaasti
> - Ongelmanratkaisu debuggaamalla

### Kehityskohteet

**Missä voisin parantaa:**
- [Heikkoutesi]
- [Mikä oli haastavaa?]

**Esimerkki:**
> - Rust-ohjelmointi (jos teit Taurin)
> - Aikataulutus ja työmäärän arviointi
> - Testivetoinen kehitys (TDD)
> - Commitien dokumentointi (vain 2 committia)

### Jatkokehitysideat

**Mitä tekisit toisin:**
[Oppiminen tulevaisuutta varten]

**Esimerkki:**
> - Aloittaisin aikaisemmin
> - Tekisin pienempiä, dokumentoituja committeja
> - Kirjaisin työtunnit alusta asti ylös
> - Tekisin testit kehityksen rinnalla

---

## 7. Arvosanan perustelu

**Tavoite:** [3/4/5]  
**Ehdotus:** [3/4/5]

### Miksi ansaitsen tämän arvosanan

**Arvosana 3 kriteerit:**
- [x] Projekti toimii
- [x] Käytetty uutta teknologiaa
- [x] 80-100h työtä (tai perustelu miksi vähemmän)
- [x] Dokumentaatio

**Arvosana 4 kriteerit:**
- [x] Kaikki yllä olevat
- [x] Teknisesti laadukas toteutus
- [x] Useampi uusi teknologia
- [ ] [Lisää omia]

**Arvosana 5 kriteerit:**
- [x] Kaikki yllä olevat
- [ ] Erityisen haastava projekti
- [ ] Portfolio-arvo
- [ ] [Lisää omia]

### Perustelut

[Kirjoita vapaamuotoisesti miksi ansaitset ehdottamasi arvosanan]

**Esimerkki arvosanalle 4:**

> Ehdotan arvosanaksi 4, koska:
> 
> **Tekninen toteutus:**
> - Opin kolme uutta teknologiaa (Chrome Extensions, Web Audio API, [Tauri])
> - Projekti on teknisesti toimiva ja laadukas
> - TypeScript hyödynnetty tehokkaasti type safetyn kanssa
> 
> **Oppimisprosessi:**
> - Opin tehokkaasti hyödyntämään AI-työkaluja
> - Ymmärsin konseptit syvällisesti, en vain kopioinut koodia
> - Ratkaisin haastavia ongelmia itsenäisesti
> 
> **Portfolio-arvo:**
> - Projekti on käyttökelpoinen ja esiteltävissä
> - Osoittaa modernia osaamista
> - Hyödynnettävissä työnhaussa
> 
> **Miksi ei 5:**
> - Tauri-osuus jäi kesken aikataulun takia
> - Työtunnit jäivät hieman alle tavoitteen (joskin AI-työkalut selittävät tämän)
> - Joitain suunniteltuja ominaisuuksia puuttuu
> 
> Olen tyytyväinen oppimisprosessiin ja tuloksiin. Projekti osoittaa kykyni oppia uutta nopeasti ja soveltaa sitä käytäntöön.

---

## 8. Reflektio ja tulevaisuus

### Mitä opin kurssista kokonaisuutena

[Ei vain projektista, vaan koko kurssista]

### Miten hyödynnän opittua tulevaisuudessa

[Työnhaku, muut projektit, jne.]

**Esimerkki:**
> - Voin mainita Chrome Extension kehityksen CV:ssä
> - Projekti toimii portfolio-työnä
> - Opin tehokasta AI-avusteista kehitystä (tärkeä taito tulevaisuudessa)
> - Web Audio API osaaminen avaa mahdollisuuksia audio-pohjaisiin projekteihin

### Kiitokset

[Valinnainen - kiitä opettajaa, kurssikavereita, jne.]

---

## Liitteet

- [Linkki GitHub repositoryyn]
- [Linkki Chrome Web Storeen (jos julkaistu)]
- [Screenshots]
- [Demo video (jos teit)]

---

**Allekirjoitus ja päivämäärä:**

[Nimi]  
[Päivämäärä]
