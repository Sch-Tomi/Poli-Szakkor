$(document).ready(function() {

    // IDE JÖHETNEK A SAJÁT MEGOLDÁSOK!!! // <--- EZEK A KOMMENTEK ha ilyenbe írsz valamit nem fog lefutni

		/*
		==== 1. Feladat - Helló világ ====
		*/

		/* (EZ A TÖBB SOROS KOMMENT...*)
		Kezdjük el használni a dolgokat. Mi lenne ha kitudnánk írni valamit a megoldásaim panelbe. Mondjuk köszönjünk a világnak!
		Ehhez a write() függvény kell használnunk. Ez a fügvény valamilyen adatokat vár amit megjeleníthet. Az adatokat a () közé kell beírni.
		*/ //(*...IDÁIG TART)

		// Ha szeretnéd kiírni, hogy heló világ akkor az egy szöveg lesz a szövegeket mindig '' vagy "" között adjuk meg. Vagyis Neked a "Helló világ!" szöveg kell
		// Próbáld meg átalakítani a következő sort, hogy azt írja ki helló világ.
		write("Helló Világ")

		// Ha kész vagy ne felejtsd el újra tölteni a weboldalt! Különben nem fog lefutni a változtatás! (ÉS ne felejtsd el elmenteni a fájlt!)


		/*
		==== 2. Feladat - Írj saját szöveget ====
		*/

		/*
		| Az elöbbieket felhasználva Köszönj magadnak!
		*/
		write("Szia Én!")
		/*
		| Most írj ki egy kérdést: ''Oda át is esik?,,
		*/
		write("Oda át is esik?")
		/*
		|	Írj valamit ami eszedbe jut! (Don't worry Be Happy)
		*/
		write("Don't worry Be Happy")
		/*
		==== 3. Feladat - Számok ====
		*/

		/*
		| Nem csak szövegek léteznek a világon, vannak számok is :) Ha számokat szeretnél ki írni akkor nem kell '' vagy "" használnod egyszerűen csak leírod a számot pl:
		| write(10) <- póbáld ki ezt
		*/
		// De mi a külömbség a szöveg meg a szám között kérdezhetnéd, hiszen a write('10') és a write(10) ugyan azt írja ki.
		// Nos igen látszólag! De ha vannak számok akkor vannak műveletek is(összeadás kivonás szorzás stb...)

		// Végezzünk egy összeadást!
		// adjuk össze a 10-et meg a 43-at
		write(10+43) //CSAK TÖRÖLD KI A KÉT // a sor elejáről !!!!
		// Most nézzük meg mivan ha szövegekként adnánk össze
	  write('10'+'43')

		// Azt hiszem látható a külömbség ha számként adod meg akkor tényleg összeadja ha szövegként akkor csak összefűzi a dolgokat.
		// Ez azért van mert a szövegeknél az + jel a két szöveg összefűzését jelenti(Erről majd késöbb)

		// VÉGEZD EL A KÖVETKEZŐ MŰVELETEK!

		// 10+2
		write(10+2)
		// 10*452
		write(10*452)
		// 66/3
		write(66/3)


		/*
		==== 4. Feladat - Szövegek műveletei====
		*/

		// Mint elöbb láttad, a szövegeknek is van + műveletük. Ezt hívjuk konkatenációnak vagy összefűzésnek

		// Próbáld ki hogy szavanként összefűzöd a következő mondatot!
		// Micimackó Malackával épp mézet Zabbant!

		// Csak nem ez lett belőle? MicimackóMalackávaléppmézetZabbant!
		// Igen igen, sajnos kellenének a szőközök is. Sebaj csak miden szó közé rakj egyet " " <- így
		write("Micimackó"+" "+"Malackával"+" "+"épp"+" "+"mézet"+" "+"Zabbant!")

		// Van más művelete is a szövegnek? Nos van de azokat már nem ilyen matematika művelet jellel hívjuk meg! Szóval a + az egyetlen ilyen rövid művelet!

		/*
		==== 5. Feladat - Változók====
		*/

		/*
		| Programozásban gyakran elő fordul, hogy szeretnénk egy egy számítást, szöveget többször felhasználni, de nincs kedvünk újra és újra kiszámítani, vagy leírni azt!
		| Ezért is használunk változókat, amikben szabadon eltárolhatunk dolgokat! változókat nagyon egyszerű létrehozni! Lásd:
		*/

		var azÉnPiciVáltozóm = "azÉnPiciVÁltozómÉrtéke"

		// Nem kell mást tenned mint a var kulcsóval létrehozni egy változót. var után jöhet az EGYEDI név amivel majd tudsz hivatkozni!
		// Az = jel azért van mert el akarunk tárolni valamit a változómban(külömben szegény üres marad...)
		// Az egyenlőség mögé bármit írhatunk (most még csak szöveget, számot és műveleteket)

		//Lesz itt pár változó és külömböző dolgokat kéne bele tenned! Azt ami fölé van írva!

		// Citromos
		var elsovaltozom = "Citromos"

		// Sör
		var alkoholosital = "Sör"

		// Add össze a 3 és 24-et
		var eredmeny1 = 3+24

		// Szorozd meg 4-et 67-al

		var eredmeny2 = 4*67

		// eredmény2-ből vond ki az eredmeny1-et
		var vegeredmeny = eredmeny2-eredmeny1


		/*
		| Tök jó csináltunk egy csomó változót, na de nem látjuk őket! :(
		| Hála az égnek mivel a változók is szövegek meg számok, ezért kitudjuk írni őket!
		*/

		// írd ki a végeremény-t
		write(vegeredmeny)

		// Ugye tudjuk hogy mivan az elsovaltozom és az alkoholosital változókban?! Szövegek persze... na ha szövegek akkor próbáljuk meg össze fűzni őket!
		// Írd ki a két említett változó segítségével hogy: Citromos Sör

		// Sikerült?! Ne feledd szóköz is kell :P
		write(elsovaltozom+" "+alkoholosital)

		/* +1 Izgi */
		// Írd ki a következő mondatot minél bonyolultabban! Használj sok változót és minden amit eddig tudsz!

		var a = 54
		var b = 22
		var c = 106-54+22
		var marcsika = "Marika Néni"
		var eves = "éves"

		// Marika néni 54-ben volt 22 éves, ezek szerint most már 84 éves.
		write(marcsika+" "+a+"-ben volt "+b+" "+eves+", ezek szerint most már "+c+" "+eves+".")

    // EZ ALÁ MÁR NE ÍRJ!!! //
});
