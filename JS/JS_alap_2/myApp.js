$(document).ready(function() {

    // IDE JÖHETNEK A SAJÁT MEGOLDÁSOK!!! //

		/*
		Az előző részek tartalmából:
			- komment
			- kiírás
			- szöveg / számok
			- változók
			- matek műveletek
		*/

		/*
		==== 1. Feladat - Logikai dolgok====
		*/

		/*
		|	Mivan akkor ha valamit elszeretnénk dönteni? Példáúl csak akkor szeretnénk valamit csinálni ha elötte teljesül valamilyen feltétel. (csak akkor láthatod az oldalt ha be vagy jelentkezve)
		| Az ilyen és ehhez hasonló problémákra vannak a logika értékek valamit a feltétel vizsgálat.
		*/

		/*
		| Logikai érték:
		| var x = true; <- igaz
		| var y = false; <- hamis
		|
		| ez a két opció van, fontos nem kell őket ""-közé tenni mert akkor szövegek lesznek...
		*/

		// hozzd létre a fenti változókat... írd ki őket

		/*
		==== 2. Feladat - Feltételek====
		*/

		/*
		| Tök jó hogy vannak nekünk a logikai adattypusunk de igazából nem tudjuk kihasználni, mert csak azt tudjuk eltárolni, hogy valami igaz és valami nem. Ahhoz hogy hasznukat vegyük kell még a
		| feltétel vizsgálat. Példa rá:
		*/

		var logikai_igaz = true
		var logikai_hamis = false

		if(logikai_igaz){
			write("az igaz még mindig igaz")
		}

		if(logikai_hamis){
			write("amíg nincs valami anomália az univerzumban addig ezt nem kéne látnod...")
		}

		/*
		| Így működnek a feltételek alapjáraton, megtudod mondani ha valami teljesül akkor történjen valami. De több minden történhet...
		*/

		if (true) {
			write("1. sor")
			write("2. sor")
			write("stb...")
		}

		/*
		| Oké megtudjuk nézni, hogy mivan ha valami igaz, na és azt hogy tudjuk elintézni, ha valami nem igaz és mégis szeretnénk vmit tenni.
		| Vegyük a következő példát, van egy változónk, ami azt tárolja, hogy a kedves felhasználó bevan-e jelentkezve... Ha igen köszönünk ha nem megkérjük h ugyan lépjen már be.
		*/

		var isUserLoggedIn = false

		if(isUserLoggedIn){
			write("Üdv az oldalon!")
		}else{
			write("Kérlek jelentkezz be!")
		}

		/*
		| Az else ágban tudjuk megadni hogy mi legyen akkor amikor nem telejesül egy feltétel. Ide is mehet több sor is.
		*/

		/*
		==== 3. Feladat - Logikai műveletek====
		*/

		/*
		| Adott a következő probléma szeretnénk, hogy csak akkor köszönjünk valakinek ha be van jelentkezve és épp nappal van. Különben a sötétben nem látjuk jól ki az és nem köszönünk ... :P
		| Ilyen jól szituált problémák megoldására van az 'ÉS' vagy angolul 'AND' művelet.
		|
		|	Az és művelet JS-ben a && jelöli ez ugyan olyan művelet mint az + vagy a -  tehát a két oldalára kell írni két logikai változót vagy értéket. És ugyan úgy működik mint egy összeadás...
		| Adott a két oldalán két szám(itt logikai érték) a +(most &&) pedig kiértékeli és vissza ad egy másik számot(logikai értéket).
		|
		| De mikor milyen értéket ad vissza?
		|
		|			|var x | var y | x && y|
		|			|------|-------|-------|
		|			| true | true  | true  |
		|			|------|-------|-------|
		|			| true | false | false |
		|			|------|-------|-------|
		|			| false| true  | false |
		|			|------|-------|-------|
		|			| false| false | false |
		|
		|
		|	A táblázatot soronként értelmezzük, tehát az ÉS csak akkor ad igazat vissza ha mindkét operandusa(az ami mellette áll) igaz, különben hamis.
		|
		*/

		// feladat valósítsd meg a fenti problémát: (segítségnek itt van egy kezdemény...)

		//var nappal_van = true
		//var isUserLoggedIn = true

		if (false) {
			write("Üdv kedves felhasználó, szép napunk van.")
		}

		/*
		| Ahogy matekban se csak az összeadás létezik így a logikai világban is vannak még műveletek, Mégpedig az VAGY (||) és a TAGADÁS (!).
		| Azt hogy mire használjuk majd késöbb most gyorsan nézzük meg hogyan működik.
		|
		|			|var x | var y | x || y|   !x   |
		|			|------|-------|-------|--------|
		|			| true | true  | true  |  false |
		|			|------|-------|-------|--------|
		|			| true | false | true  |	false |
		|			|------|-------|-------|--------|
		|			| false| true  | true  |	true  |
		|			|------|-------|-------|--------|
		|			| false| false | false | true   |
		|
		|
		|	Mint látod a vagy akkor ad igazat ha legalább az egyik operandusa igaz. A tagadásnál csak egy oprenadus van. Egyszerűen ha igaz volt akkor hamisat ad vissza, ha hamis akkor igazat.
		|
		*/

		// Old meg a feladatot: adott 2 változó ezek a következők:

		var nappal_van = true
		var delelott = false

		// csinálj egy olyan programot ami délelött "Szép napot" köszön, délután "Jó napot", este pedig "Jó estét"

		/*
		==== 3. Feladat - Logikai kiértékelés====
		*/

		/*
		| Na és hogyan kapunk logikai értékeket? Csak úgy hogy kézzel oda írjuk, hogy valami igaz vagy hamis? Persze, hogy nem... :)
		|
		|	Mivan akkor ha szeretnénk megnézni, hogy egy szám nagyobb-e 10-nél? de lehetne (kissebb, egyenlő stb...)
		| Ekkor jönnek a következő operátorok:
		| ==	equal to
		|	===	equal value and equal type
		|	!=	not equal
		|	!==	not equal value or not equal type
		|	>	greater than
		|	<	less than
		|	>=	greater than or equal to
		|	<=	less than or equal to
		|
		|
		*/

		// Na mi lesz a vége?
		var utopia_1 = 6 > 10
		var utopia_2 = !utopia_1
		var utopia_3 = utopia_1 || utopia_2
		var utopia_4 = utopia_3 === false

		// Ha már tippeltél akkor: write(utopia_4)

    // EZ ALÁ MÁR NE ÍRJ!!! //
});
