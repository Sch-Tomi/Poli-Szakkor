# CSS

A CSS egy másik leíró nyelv amivel megadhatjuk, hogy az eggyes html elemek hogy nézenek ki.

## Syntaxis

Egy szabály mindig egy selectorral kezdődik, vagyis megmondjuk hogy milyen elem(ek)re szeretnénk használni azt a szabályt. Ezután **{}-ben** megadjuk a szabályokat **;-vel** elválasztva. Egy szabálynak/beállításnak az értékét **: után** írhatjuk.

```css
selector {
    beállítás1: érték;
    beállítás2: érték;
}
```

Konkrét példa:
```css
p {
   text-align: center;
   color: red;
}
```


## Elemek elérése

Ahhoz hogy meghatározzuk melyik elemet is szeretnénk modosítani, meg kell tudnunk mondani melyik elemre gondolunk.A html-nél láttuk hogy egy faként is elképzelhetjük az oldalunkat. CSSnél csak a <body> ban lévőket érjük el. Ezen belül pedig gyalogolhatunk lefele az eggyes ágakon.

Tehát kiválaszhatom pl az összes linket

```css
a {

}
```
Vagy a diveket belüli paragrafusokat.
```css
div p {

}
```

De hivatkozhatok egy elem ID-ra is.
```css
#mystuff {

}
```

Vagy az osztályára
```css
.myclass{

}
```

### Class vagy ID

Mi a külömbség és mikor melyiket érdemes használni?
A külömbség a mennyiség. Egy osztályba végtelen elem tartozhat de egy ID csak egy elemé lehet.
Tehát ha több elemet szeretnénk beállítani egyszerre használjunk osztályt ha csak egyet akkor ID-t.

## Szabályok.

LÁSD: http://www.w3schools.com/css/default.asp

## Bootstrap

Ha nem szeretnéd újra feltalálni a kereket ;) Akkor framewrokoket akarsz majd használni. Mire jók ezek? Felgyorsítják a munkádat mert nem kell alapvető dolgokat megírnod. PL hogy mobilon és 32"monitoron is jól jelenjen meg az oldalad.

A bootStrap egy ilyen framework.
http://getbootstrap.com/
