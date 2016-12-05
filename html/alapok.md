# HTML Alapok

HTML (Hyper Text Markup Language) az a nyelv amivel a weboldalakat tudjuk leírni. Ez igazából nem programozási nyelv hanem leíró nyelv. Így nem tudunk dinamizmust bele vinni a weboldalainkba. Vagyis példáúl nem tudunk minden felhasználónak személyre szabott oldalt adni.

## Hogy kapok meg egy weboldalt?

![alt text](img/client-server.png)

Minden weboldalt egy szervertől kérünk el. A szerver kiszolgálja a mi kérésünket, és vissza adja a kért HTML-t.

## HTML feldolgozás

Mivel a HTML leíró nyelv ezért kell valami ami feldolgozza az általunk írt oldalt. Erre jók a böngészők. Egy böngésző nem csinál mást mint a szervertől megkapott oldalt feldolgozza. Vagyis felépít egy fát és minden elemet elhelyez benne. Majd ebből felépíti az oldalt, az az beszúrja az üres oldalra azokat az elemeket amiket mi leírtunk. (képek, gombok hivatkozások)

![](img/pic_htmltree.gif)

A html fájlok felépítése nagyon egyszerű. Az egész egy fához hasonlítható. A gyökér elem a <html> tag, ezen belül biztosan szerepel egy <head> és egy <body>. Ezeken belül viszont már tetszőleges a tartalom.

Tehát az alap:
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>        
    </body>
</html>
```

A DOCTYPE csak a html verziót jelenti, itt HTML 5.

## Tag-ek

Html-ben mindent **tag**-kel írunk le. A tagnek kell egy nyitó és egy csukó része.

pl.:
```html
<html>
</html>

 <p>My first paragraph.</p>
```

## Atríbutumok
A tageknek lehetnek attributumaik, az az megadhatunk speciális beállításokat. Pl:
- alt
- disabled
- href
- id
- src
- style
- title

## Elemek
Vegyük sorra a leggyakrabban használt elemeket.

### Címsorok
(http://www.w3schools.com/html/html_headings.asp)

### Paragrafusok
http://www.w3schools.com/html/html_paragraphs.asp

### Linkek
http://www.w3schools.com/html/html_links.asp

### Képek
http://www.w3schools.com/html/html_images.asp

### Táblázatok
http://www.w3schools.com/html/html_tables.asp

tr - sor
td - cella

### Listák
http://www.w3schools.com/html/html_lists.asp

# CSS

Ha szeretnék egyedivé tenni oldalunkat akkor CSS-t kell használnunk erről bővebben: [CSS](css.md)

# JS

Ha szeretnék kliens oldali dinamizmust vinni az oldalba akkor javascriptet kell használnunk, erről bővebben:
