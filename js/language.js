const languageSet = ["en", "it", "ro", "ru"];

const navigation = {
    "en": ["About Us", "Catalog", "Contacts"],
    "it": ["Chi Siamo", "Catalogo", "Contatti"],
    "ro": ["Despre Noi", "Catalog", "Contacte"],
    "ru": ["О Нас", "Каталог", "Контакты"],
};

const articles = [];
articles[0] = new Array();
articles[1] = new Array();
articles[2] = new Array();
articles[3] = new Array();

articles[0]["en"] = {
    "title": 'What is Perle di Stelle <span class="upper-case">&#174;</span>  ?',
    0: 'Perle di Stelle<span class="upper-case">&#174;</span> is a handmade brand  made in Venice, which is characterized by a selection of unique jewelry collection , using Murano glass and real meteorites. We wanted to combine Venice with the immensity of the space.',
    1: 'Imagine being in the most beautiful and romantic city in the world, on a clear night you observe the stars and the moon reflected in the water on one of its canals or even better on its lagoon.',
    2: 'It is not easy to capture the essence and spirituality of such a fascinating painting and transform it into objects made to be worn. Perle di Stelle<span class="upper-case">&#174;</span> together with "Momylia" managed to do it. We have created jewels made with Murano glass, which are truly unique, involving science, craftsmanship and technology.',
    3: 'Thanks to a meticulous work, entirely handmade and consisting of a mix of glass, rocks from space and precious metals, we have created jewels with the intention of going beyond simple ornament.',
    4: 'All parts are manually assembled using quality elements, mostly 925 silver. Our brand ensures a lifetime guarantee on all creations. The jewels are also designed for lovers of craftsmanship thus you will never find two absolutely alike. The work is done by artisans who first acquired the necessary practice to combine Murano glass with extraterrestrial rock fragments, which are mostly older than our own planet.',
    5: 'The small fragments belong to meteorites classified and present on the Meteoritical Bulletin Database, of the Meteoritical Society (International Society for Meteoritics and Planetary Science).',
    6: 'Among the meteorites we are using for example are:',
    7: '✦ Meteorites fell in Chelyabinsk, Russia, on February 15, 2013. Fall became famous for the size and brightness of the fireball as well as for the multitude of videos on the internet. Over a ton of chondrite-type meteorites (LL5) fell in Chelyabinsk;',
    8: '✦ NWA 869 meteorites not seen falling, found in Northwest Africa in 2001. Type chondrites (L4-6);',
    9: '✦ NWA 11421 Meteorites also found in northwestern Africa and classified as lunar meteorites (Lunar feldspathic breccia). These meteorites are composed of rocks that come from the lunar highlands, that is, from the lighter areas, which can be seen by observing the Moon, even with the naked eye.',
};

articles[0]["ru"] = {
    "title": 'Что такое Perle di Stelle <span class="upper-case">&#174;</span>  ?',
    0: 'Perle di Stelle<span class="upper-case">&#174;</span> — это бренд ручной работы, сделанный в Венеции, который характеризуется использованием муранского стекла и настоящих метеоритов. Мы совмещяем Венецию с необъятностью пространства.',
    1: 'Представьте, что вы находитесь в самом красивом и романтичном городе мира. Ясной ночью наблюдаете за звездами и луной, отражающимися в воде одного из венецианских каналов или еще лучше в основной лагуне Венеции.',
    2: 'Не легко уловить суть и одухотворенность такой очаровательной картины и превратить ее в предметы, предназначенные для ношения. Perle di Stelle<span class="upper-case">&#174;</span> вместе с “Momylia” удалось это сделать. Мы создали драгоценности из муранского стекла, которые поистине уникальны и сочетают в себе науку, мастерство и технологии.',
    3: 'Благодаря кропотливой работе, выполненной вручную и состоящей из смеси стекла, камней из космоса и драгоценных металлов, мы создали драгоценности с намерением выйти за рамки простого орнамента.',
    4: 'Все детали собраны вручную с использованием качественных элементов из серебра 925 пробы. Наш бренд дает пожизненную гарантию на все изделия. Украшения также предназначены для любителей мастерства, поэтому вы никогда не найдете двух абсолютно одинаковых. Работа выполняется ремесленниками, которые впервые приобрели необходимую практику для соединения муранского стекла с фрагментами внеземных пород, которые в большинстве своем старше нашей планеты.',
    5: 'Небольшие фрагменты принадлежат метеоритам, классифицированные и присутствующим в базе данных метеоритного бюллетеня Международного общества метеоритики и планетологии (International Society for Meteoritics and Planetary Science).',
    6: 'Среди метеоритов, которые мы используем есть:',
    7: '✦ Метеориты, которые упали в Челябинске, Россия, 15 февраля 2013 года. Падение прославилось размером и яркостью огненного шара, а также множеством видеороликов в Интернете. В Челябинске упало более тонны метеоритов хондритового типа (LL5);',
    8: '✦ Метеориты NWA 869, не замеченные при падении, обнаружены в Северо-Западной Африке в 2001 г. Тип хондриты (L4-6);',
    9: '✦ NWA 11421 Метеориты обнаружены в северо-западной Африке и классифицируются как лунные метеориты (Lunar feldspathic breccia). Эти метеориты состоят из горных пород, пришедших с лунных нагорий, то есть из более светлых областей, которые можно увидеть, наблюдая за Луной, даже невооруженным глазом.',
};

articles[0]["ro"] = {
    "title": 'Ce este Perle di Stelle <span class="upper-case">&#174;</span>  ?',
    0: 'Perle di Stelle<span class="upper-case">&#174;</span> este un brand de confecții artizanale executate în Veneția, care se caracterizează prin crearea de colecții unice de bijuterii, folosind sticlă de Murano și meteoriți reali. Dorim să îmbinăm Veneția cu imensitatea spațiului.',
    1: 'Imaginați-vă că vă aflați în cel mai frumos și romantic oraș din lume, într-o noapte senină observați stelele și luna reflectate în apă pe unul dintre canalele Veneției sau chiar pe laguna sa.',
    2: 'Nu este ușor să captezi esența și spiritualitatea unui tablou atât de fascinant și să o transformi în obiecte făcute pentru a fi purtate. Perle di Stelle<span class="upper-case">&#174;</span> împreună cu "Momylia" au reușit să o facă. Am creat bijuterii din sticlă de Murano, care sunt cu adevărat unice, implicând știință, măiestrie și tehnologie.',
    3: 'Datorită unei lucrări minuțioase, realizată artizanal și constând dintr-un amestec de sticlă, roci din spațiu și metale prețioase, am creat bijuterii cu intenția de a trece dincolo de simplul ornament.',
    4: 'Toate piesele sunt asamblate manual folosind elemente de calitate, îndeosebi argint 925. Brandul nostru asigură o garanție pe viață pentru toate creațiile. Bijuteriile sunt concepute pentru iubitorii de măiestrie, astfel încât nu veți găsi niciodată două absolut la identice. Lucrarea este realizată de meșteri artizani cu o practică dobândită necesară de a combina sticla de Murano cu fragmente de rocă extraterestră.',
    5: 'Fragmentele mici aparțin unor meteoriți, care sunt în mare parte mai vechi decât propria noastră planetă, și clasificați în prezent în Baza de date a Buletinului Meteoritic, a Societății Internaționale de Științe Meteoritice și Planetare (International Society for Meteoritics and Planetary Science).',
    6: 'Printre meteoriții pe care îi folosim, de exemplu, se numără:',
    7: '✦ Meteoriți căzuți în Chelyabinsk, Rusia, pe 15 februarie 2013. Toamna a devenit celebră pentru dimensiunea și luminozitatea mingii de foc precum și pentru multitudinea de videoclipuri de pe Internet. Peste o tonă de meteoriți de tip condrită (LL5) au căzut în Celiabinsk;',
    8: '✦ Meteoriți NWA 869, care nu s-au văzut căzând, însă găsiți în Africa de Nord-Vest în 2001. Tipul condrite (L4-6);',
    9: '✦ NWA 11421 Meteoriți găsiți în nord-vestul Africii și clasificați ca meteoriți lunari (Lunar feldspathic breccia). Acești meteoriți sunt alcătuiți din roci, care provin din zonele înalte și luminoase a corpului ceresc Luna. Aceste zone pot fi văzute chiar cu ochiul liber.',
};

articles[0]["it"] = {
    "title": "Cos'è Perle di Stelle <span class='upper-case'>&#174;</span>  ?",
    0: "Perle di Stelle<span class='upper-case'>&#174;</span> si caratterizza per una selezione di gioielli unici, ideati e fatti a Venezia in modo artigianale, utilizzando vetro di Murano e vere meteoriti. Abbiamo voluto coniugare Venezia con l'immensità dello spazio.",
    1: "Immaginate di trovarvi nella città più bella e romantica al mondo, in una notte limpida e osservare le stelle e la luna riflesse nell'acqua di uno dei suoi canali o della sua laguna.",
    2: "Non è facile catturare l'essenza e la spiritualità di una situazione così affascinante e trasformarla in oggetti fatti per essere indossati. Perle di Stelle<span class='upper-case'>&#174;</span> insieme a Momylia ce l’hanno fatta,  creando gioielli in vetro di Murano, davvero unici, che coinvolgono scienza, artigianato e tecnologia.",
    3: "Grazie a un lavoro meticoloso, interamente fatto a mano e costituito da un mix di vetro, rocce provenienti dallo spazio e metalli preziosi, abbiamo creato gioielli con l'intento di andare oltre il semplice ornamento.",
    4: "Tutte le parti sono assemblate manualmente utilizzando elementi di qualità, principalmente argento 925. Il nostro marchio garantisce a vita tutte le sue creazioni. I gioielli sono pensati anche per gli amanti dell'artigianato, quindi non ne troverete mai due assolutamente uguali. Il lavoro è svolto da artigiani che per primi hanno acquisito la pratica necessaria per combinare il vetro di Murano con frammenti di roccia extraterrestre.",
    5: "I piccoli frammenti appartengono a meteoriti classificate e presenti sul Meteoritical Bulletin Database, della Meteoritical Society (International Society for Meteoritics and Planetary Science).",
    6: "Ad esempio, tra le meteoriti che stiamo utilizzando ci sono:",
    7: "✦ Meteoriti cadute a Chelyabinsk, Russia, il 15 febbraio 2013. L'evento è diventato famoso per le dimensioni e la luminosità della palla di fuoco vista da una moltitudine di persone, nonché per i numerosi video della caduta presenti su Internet. Oltre una tonnellata di meteoriti di tipo condrite (LL5) sono cadute presso la città di Chelyabinsk;",
    8: "✦ NWA 869 meteoriti non viste cadere, trovate nell'Africa nord-occidentale, nel 2001. Tipo condriti (L4-6);",
    9: "✦ NWA 11421 anche queste meteoriti sono state trovate  nell'Africa nordoccidentale e classificate come meteoriti lunari (breccia feldspatica lunare). Queste meteoriti sono composte di rocce che provengono dagli altopiani lunari, cioè dalle zone più chiare, che si possono vedere osservando la Luna, anche a occhio nudo.",
};

articles[1]["en"] = {
    "title": 'Material Warranty:',
    0: 'The meteorites we use are absolutely not dangerous for humans and radioactive level is similar or lower than the average of the most common terrestrial rocks.',
    1: 'The possible presence in the meteoritic material allergenic agents, such as nickel, are rendered harmless, because they are immersed in glass.',
    2: 'The metal material used for the assembly is all hypoallergenic, the small parts are in rhodium-plated or / and gold-plated 925 silver and complies with the European Regulation n.1907 / 2006 / EC (in acronym REACH and mod. EC Regulation n. 494/2011 ). For the same REACH it is compliant with the release of nickel: EN 1811: 2011.',
    3: 'PRECAUTIONS: Correct use of the product is recommended, strong shocks could break and make pearls sharp. In this case the jewel should not be worn, we decline any responsibility for the damage that could derive from it.',
    4: 'It is not a toy. Keep out of reach of children.',
    5: 'Owner of the Perle di Stelle<span class="upper-case">&#174;</span> brand is Adam Ecaterina.',
    6: 'Producer of the Perle di Stelle<span class="upper-case">&#174;</span> brand is Momylia di Rizzo Emilia, 3378 Cannaregio, 30121 Venice, Italy.',
};

articles[1]["ru"] = {
    "title": 'Гарантия Изделий:',
    0: 'Метеориты, которые мы используем, абсолютно не опасны для человека, а уровень радиоактивности такой же или ниже, чем в среднем у наиболее распространенных земных пород.',
    1: 'Возможное присутствие в метеоритном материале аллергенных веществ, таких как никель, обезвреживается, поскольку они глубоко погружены в стекло.',
    2: 'Металлический материал, используемый для сборки, полностью гипоаллергенен. Мелкие детали покрыты родием или/и позолочены серебром 925 пробы и соответствуют Европейскому регламенту № 1907 / 2006 / EC (в аббревиатуре REACH и мод. Регламент ЕС № 494/2011). По тому же REACH соответствует выпуску никеля: EN 1811:2011.',
    3: 'МЕРЫ ПРЕДОСТОРОЖНОСТИ: Рекомендуется правильное использование изделия. Избегать сильных ударов, которые могут их сломать и сделать жемчужины острыми. В этом случае украшения нельзя носить. Мы не несем ответственности за ущерб, который может быть нанесен ими.',
    4: 'Это не игрушка. Храните в недоступном для детей месте.',
    5: 'Владельцем бренда Perle di Stelle<span class="upper-case">&#174;</span> является Адам Екатерина.',
    6: 'Производителем бренда Perle di Stelle<span class="upper-case">&#174;</span> является Momylia di Milly Rizzo, 3378 Каннареджо, 30121 Венеция, Италия.',
};

articles[1]["ro"] = {
    "title": 'Garanția Produsului:',
    0: 'Meteoriții pe care îi folosim nu sunt periculoși pentru oameni, iar nivelul radioactiv este similar sau mai mic decât media celor mai comune roci terestre.',
    1: 'Prezența posibilă în materialul meteoritic a agenților alergeni, cum ar fi de exemplu nichelul, sunt absolut inofensivi, pe motiv că sunt scufundați adânc în sticlă.',
    2: 'Materialul metalic folosit la montaj este tot hipoalergenic. Piesele mici sunt din argint 925 rodiu sau/și aurit și respecta Regulamentul European nr.1907/2006/CE (in acronym REACH and mod. EC Regulation n. 494/2011). Pentru același REACH este în conformitate cu eliberarea de nichel: EN 1811: 2011.',
    3: 'PRECAUȚII: Se recomandă utilizarea corectă a produsului fără aplicarea unor șocuri puternice, care pot cauza deteriorări și perlele pot deveni ascuțite. In acest caz bijuteria nu trebuie purtata, ne declinam orice responsabilitate pentru daunele, care ar putea deriva din aceasta.',
    4: 'Aceste produse nu sunt jucăriii. A nu se lăsa la îndemâna copiilor.',
    5: 'Proprietarul mărcii Perle di Stelle<span class="upper-case">&#174;</span> este - Adam Ecaterina.',
    6: 'Producător al mărcii Perle di Stelle<span class="upper-case">&#174;</span> este Momylia di Rizzo Emilia, 3378 Cannaregio, 30121 Veneția, Italia.',
};

articles[1]["it"] = {
    "title": 'Garanzia sui materiali usati:',
    0: "Le meteoriti che utilizziamo non sono assolutamente pericolosi per l'uomo e il livello radioattivo è simile o inferiore alla media delle più comuni rocce terrestri.",
    1: "L'eventuale presenza nel materiale meteoritico di agenti allergenici, come il nichel, sono resi innocui, perché immersi nel vetro.",
    2: "Il materiale metallico utilizzato per l'assemblaggio è tutto anallergico, le minuterie sono in argento 925 rodiato o dorato ed è conforme al Regolamento Europeo n.1907/2006/CE (in sigla REACH e mod. Regolamento CE n. 494/2011). Per lo stesso REACH è conforme al rilascio di nichel: EN 1811:2011.",
    3: 'PRECAUZIONI: Si raccomanda un uso corretto del prodotto, forti urti potrebbero rompere le perle e renderle taglienti. In questo caso il gioiello non va indossato, si declina ogni responsabilità per i danni che ne potrebbero derivare.',
    4: 'Non è un giocattolo. Tenere fuori dalla portata dei bambini.',
    5: 'Titolare del marchio Perle di Stelle<span class="upper-case">&#174;</span>: Adam Ecaterina.',
    6: 'Produttore del marchio Perle di Stelle<span class="upper-case">&#174;</span>: Momylia di Milly Rizzo, 3378 Cannaregio, 30121 Venezia, Italia.',
};

articles[2]["en"] = {
    "title": 'A bit of science',
    0: "Most of the meteorites that fall on Earth are from asteroid origin, but there are also from the Moon and Mars. Here's how this is possible.",
    1: 'Over time, all planets, including ours, are subject to  large meteoroid impacts, the energy released by such impacts on the surface of rocky planets or satellites can be large enough to hurl rocks into space with a speed  higher than the escape velocity of the parent body, such rocks disperse in interplanetary space and gradually can also fall on the Earth. Therefore , from time to time, Martian and lunar meteorites fall, probably also from other planets. The certainty that the meteorite comes from Moon or from Mars is determined by a mineralogical comparison made with the lunar samples collected mainly by the astronauts from the Apollo missions or by the analyzes made by the space probes that went to Mars. In both cases, integration with information regarding isotopic abundance is what confirms the origin.',
    2: 'Maurizio Eltri',
    3: 'In the photo: Maurizio Eltri holding a lunar meteoite of over two hundred grams, (NWA11303), belonging to his collection of meteorites.',
};

articles[2]["ru"] = {
    "title": 'Немного науки',
    0: "Большинство метеоритов, падающих на Землю, имеют астероидное происхождение, но есть и метеориты с Луны и Марса. Как это возможно ?",
    1: 'Со временем все планеты, в том числе и наша, подвергаются ударам крупных метеоритов. Энергия, высвобождаемая при таких столкновениях с поверхностью каменистых планет или спутников, может быть достаточно большой, чтобы выбрасывать камни в космос со скоростью. Такие породы рассеиваются в межпланетном пространстве и постепенно могут упасть и на Землю. Поэтому время от времени падают марсианские и лунные метеориты, вероятно, и с других планет. Уверенность в том, что метеорит прилетел с Луны или с Марса, определяется минералогическим сравнением, сделанным с лунными образцами, собранными в основном астронавтами миссий «Аполлон», или анализами, сделанными космическими зондами, отправившимися на Марс. В обоих случаях интеграция с информацией об изотопном содержании подтверждает происхождение.',
    2: 'Маурицио Эльтри',
    3: 'На фото: Маурицио Эльтри держит в руках лунный метеорит весом более двухсот граммов (NWA11303), из личной коллекции метеоритов.',
};

articles[2]["ro"] = {
    "title": 'Un pic de știință',
    0: "Majoritatea meteoriților care cad pe Pământ sunt de origine asteroizi, dar sunt și de origine de pe Lună și Marte. Iată cum este posibil acest lucru.",
    1: 'De-a lungul timpului, toate planetele, inclusiv a noastră, sunt supuse unor impacturi mari de meteoriți. Energia eliberată de astfel de impacturi pe suprafața planetelor stâncoase sau a sateliților poate fi suficient de mare pentru a arunca pietre în spațiu cu o viteză mai mare decât viteza de evacuare a părintelui corp, astfel de roci se dispersează în spațiul interplanetar și pot cădea treptat și pe Pământ. Prin urmare, din când în când, meteoriți marțieni și lunari cad. Probabil sunt unii și de pe alte planete. Certitudinea, că meteoritul provine de pe Lună sau de pe Marte este determinată de o comparație mineralogică făcută cu probele lunare colectate în principal de astronauții din misiunile Apollo sau de analizele făcute de sondele spațiale, care au mers pe Marte. În ambele cazuri, integrarea cu informațiile privind abundența izotopică este cea care confirmă originea.',
    2: 'Maurizio Eltri',
    3: 'În fotografie: Maurizio Eltri ținând în mână un meteorit lunar de peste două sute de grame, (NWA11303), aparținând colecției sale de meteoriți.',
};

articles[2]["it"] = {
    "title": "Un po’ di scienza",
    0: "La maggior parte delle meteoriti che cadono sulla Terra sono di origine asteroidale, ma ce ne sono che provengono anche dalla Luna e da Marte. Ecco come questo è possibile.",
    1: "Nel corso del tempo, tutti i pianeti, compreso il nostro, sono soggetti a impatti con meteoroidi anche di grandi dimensioni, l'energia rilasciata da tali impatti sulla superficie di pianeti rocciosi o i loro satelliti, può essere abbastanza grande da scagliare rocce nello spazio con una velocità superiore alla velocità di fuga del corpo progenitore, tali rocce si disperdono nello spazio interplanetario e gradualmente possono cadere anche sulla Terra. Perciò, di tanto in tanto, cadono meteoriti marziane e lunari, probabilmente anche da altri pianeti. La certezza che la meteorite provenga dalla Luna o da Marte, è determinata dal confronto mineralogico fatto con i campioni lunari raccolti principalmente dagli astronauti dalle missioni Apollo o dalle analisi fatte dalle sonde spaziali, che sono andate su Marte. In entrambi i casi, l'integrazione con le informazioni sull'abbondanza isotopica è ciò che ne conferma l'origine.",
    2: 'Maurizio Eltri',
    3: 'Nella foto: Maurizio Eltri che osserva una meteoite lunare di oltre duecento grammi (NWA11303), appartenente alla sua collezione di meteoriti.',
};

articles[3]["en"] = {
    "title": '"Momylia" and Perle di Stelle <span class="upper-case">&#174;</span>',
    0: 'Perle di Stelle<span class="upper-case">&#174;</span> brand was born several years ago thanks to Maurizio Eltri passion about astronomy and the creativity of his wife Ecaterina Adam.',
    1: 'After months of work to study the adaptability of different types of meteorites on Murano glass, Maurizio and Ecaterina have found a very valid and irreplaceable collaboration with "Momylia" (Emilia Rizzo and Mauro Zennaro).',
    2: 'The true experts in the art of Venetian pearl making, Mauro and his wife Emilia immediately accepted with pleasure and enthusiasm the challenge of creating jewelry by incorporating extraterrestrial fragments into the glass.',
    3: 'Thanks to their great passion and over thirty years of experience in lampworking glass, guided by the wonderful idea they were pursuing, specifically to enclose a piece of the Universe within Murano glass, after some time they obtained truly brilliant results. This is the way it was born the union between Perle di Stelle<span class="upper-case">&#174;</span> and "Momylia".',
};

articles[3]["ru"] = {
    "title": '"Momylia" и Perle di Stelle <span class="upper-case">&#174;</span>',
    0: 'Бренд Perle di Stelle<span class="upper-case">&#174;</span> родился несколько лет назад благодаря увлечению Маурицио Эльтри астрономией и творчеству его жены Екатерины Адам.',
    1: 'После нескольких месяцев работы по изучению приспособляемости различных типов метеоритов к муранскому стеклу Маурицио и Екатерина нашли очень ценное и незаменимое сотрудничество с компанией “Momylia” (основатели компании Эмилия Риццо и Мауро Зеннаро).',
    2: 'Настоящие знатоки искусства изготовления венецианского жемчуга, Мауро и его жена Эмилия, с удовольствием и энтузиазмом сразу же приняли вызов создания ювелирных украшений, интегрируя в стекло осколки внеземных цивилизаций.',
    3: 'Благодаря их огромной страсти и более чем тридцатилетнему опыту в области художественной обработки стекла в пламени горелки, руководствуясь прекрасной идеей, которую они преследовали, а именно заключить частичку Вселенной в муранское стекло, через некоторое время они получили поистине блестящие результаты. Так родился союз Perle di Stelle<span class="upper-case">&#174;</span> и "Momylia".',
};

articles[3]["ro"] = {
    "title": '"Momylia" și Perle di Stelle <span class="upper-case">&#174;</span>',
    0: 'Brandul Perle di Stelle<span class="upper-case">&#174;</span> a luat naștere în urmă cu câțiva ani datorită pasiunii lui Maurizio Eltri pentru astronomie și creativității soției sale, Ecaterina Adam.',
    1: 'După luni de muncă comună în studierea adaptabilității integrării diferitelor tipuri de meteoriți în sticla de Murano, Maurizio și Ecaterina au găsit o colaborare validă și fructuoasă, de neînlocuit cu „Momylia” (Emilia Rizzo și Mauro Zennaro).',
    2: 'Adevărații experți în arta confecționării perlelor venețiene, Mauro și soția sa Emilia au acceptat imediat cu plăcere și entuziasm provocarea de a crea bijuterii prin încorporarea fragmentelor extraterestre în sticlă.',
    3: 'Datorită pasiunii lor mari și experienței de peste treizeci de ani în prelucrarea sticlei, ghidați de ideea minunată pe care o urmăreau, anume de a încadra o bucată de Univers în sticla de Murano, după ceva timp au obținut rezultate cu adevărat strălucitoare. Așa s-a născut uniunea dintre Perle di Stelle<span class="upper-case">&#174;</span> și „Momylia”.',
};

articles[3]["it"] = {
    "title": '"Momylia" e Perle di Stelle <span class="upper-case">&#174;</span>',
    0: "Il marchio Perle di Stelle<span class='upper-case'>&#174;</span> nasce diversi anni fa grazie alla passione di Maurizio Eltri per l'astronomia e alla creatività della moglie Ecaterina Adam.",
    1: "Dopo tanto tempo trascorso a studiare l'adattabilità di diversi tipi di meteoriti sul vetro di Murano, Maurizio ed Ecaterina hanno trovato una validissima e insostituibile collaborazione con 'Momylia' (Emilia Rizzo e Mauro Zennaro).",
    2: "Veri esperti nell'arte perlaia veneziana, Mauro e sua moglie Emilia, hanno sin da subito accettato con piacere ed entusiasmo la sfida di creare gioielli incorporando nel vetro frammenti extraterrestri.",
    3: "Grazie alla loro grande passione e a oltre trent'anni d’esperienza nella lavorazione del vetro a lume, guidati dalla meravigliosa idea che stavano portando avanti, cioè di racchiudere un pezzo di Universo all'interno del vetro di Murano. Dopo qualche tempo hanno ottenuto risultati davvero brillanti. Nasce così l'unione tra Perle di Stelle<span class='upper-case'>&#174;</span> e 'Momylia'.",
};
// console.log('ARTICLES', articles);

const contactsText = {
    "en": [
        "For order related and general enquiries, our customer experience team can be contacted:",
        "Telephone number:",
        "WhatsApp or Mobile:",
        "Alternatively, you can also email us at:",
        "If you would like to send correspondence by post, please write to:",
        "1.1. The “www.perledistelle.it” website is managed by the society “Momylia di Rizzo Emilia”. The head office is located in Venice, Cannaregio 3378-3378/A-3378/B, VAT number 03688960274 registered in Venice Business Registry with number VE-330031.",
        "The following general terms and conditions (“General Terms and Conditions”) regulate the relationship between the customer (“Customer”) and (“Momylia di Rizzo Emilia”, jointly “Parties”) for the purchase of “Momylia di Rizzo Emilia” products (“Products”) that will, from time to time, be available on the website for purchasing purpose. The original version of the General Terms and Conditions is in Italian.",
        "1.2. The online purchase through the following General Terms and Conditions on the website is only allowed to customers who have come of age.",
        "1.3. Momylia di Rizzo Emilia makes no commitment in relation to the verification of the above dictated requirements, the Customer is assuming any liability that may derive from the violation of point 1.2.",
        "2.1. In relation to the products that will be placed on the website “Momylia di RizzoEmilia” from time to time, the society reserves the right to vary the type, references and terms of the offer, also in relation to availability. The Customer will be informed if his order is not executable due to unavailability of the ordered product.",
        "2.2. “Momylia di Rizzo Emilia” verifies that all the information sheets relating to the products are correct. This action, however, does not guarantee the absolute absence of errors. Momylia underlines that all products are handmade and may have irregularities (even if they look similar, pieces will never be exactly the same). In the case of a Price mistake, Momylia will allow the Customer to reconfirm the purchase of Products at the correct price or to cancel the purchase.",
        "3.1. The essential characteristics of the Product and the Prices are shown in the offer related to each Product present on the website.",
        "3.2. To purchase the Products, you must follow the instructions on the website. Before proceeding to select the type of payment, and confirm the order, the Customer must have read and accepted the terms of the contribution for delivery costs, the General Terms and Conditions (including the conditions for exercising the right of withdrawal) and the statement on the protection of personal data (Privacy Policy).",
        "4.1. The Contract stipulated between the Customer and Momylia, is deemed to be concluded when the order forwarded by the Customer is received at the address of the website; provided that the purchase procedure reported on the site has been respected, that Momylia di Rizzo Emilia has received the payment from the Customer and that the availability of the product has been confirmed by Momylia.",
        "Momylia accepts no liability for any malfunctions of the data transmission network attributed to the network manager.",
        "4.2. By sending the order to Momylia di Rizzo Emilia, the Customer acknowledges and declares to have read and accepted in full and without conditions the terms for delivery costs, the General Terms and Conditions, the statement on the protection of personal data (Privacy Policy) and the operating conditions that regard the right of withdrawal.",
        "4.3. The purchase order form will be stored in the website database for the time necessary to fulfill orders.",
        "4.4. Momylia will send the customer an e-mail confirming that the order has been received.",
        "5.1 For each item the unit price is expressed in Euro (€), VAT included (Value Tax Added), net of shipping costs.",
        "All products are available for shipping. If due to unforeseen events there was a delay in the delivery of the products, the Customer will be promptly notified by e-mail, even in the case of temporary exhaustion of one or more products.",
        "6.1 Accepted payments:",
        "Credit cards available on the PayPal circuit.",
        "Bank transfer.",
        "Beneficiary: Momylia di Rizzo Emilia, IT42Q0306234210000002308204 codice - SWIFT MEDBITMMXX, Banca MEDIOLANUM",
        "7.1. For security reasons, the Products purchased on the website will only be delivered to the address indicated by customer.",
        "7.2. For each order placed on the website, Momylia issues an invoice for the goods shipped.",
        "For the issuance of the invoice, the information provided by the Customer at the time of the order are considered full and definitive. No changes will be possible after confirming the order.",
        "7.3. The Products purchased will be delivered by DHL courier to the address indicated by the Customer.",
        "Shipping is FREE IN ITALY for orders over 150 Euro.",
        "The products will be shipped within 2-3 business days and the delivery time depends on delivery place. Any changes to the above mentioned will be immediately communicated by e-mail to Customer.",
        "Momylia di Rizzo Emilia jewelery and fashion accessories ships to all countries. However there may be cases in which customs problems prevent the delivery of the ordered products. In such cases the customer will be informed by e-mail and refunded later.",
        "8.1. The sold products are not subject to imports or customs duties if the product is sold and delivered in Italy or in the European Union.",
        "Products to be delivered to non-EU countries may be subject to imports and/or customs duties, depending on the type of product and the country of destination. We cannot predict the costs that may be charged by the customs for the transit of goods.",
        "For more information, please contact your national customs office.",
        "Please note that costs relating to import and/or customs duties must be paid by the customer.",
        "9.1. The Customer has the right of withdrawal within 14 (fourteen) working days from the day when the order is received.",
        "Notification can be given within the deadline indicated above, by telegram, fax or e-mail. Shipping Costs related to the return of goods will be charged to the customer.",
        "Goods must be returned intact, in their original packaging, in perfect condition in conformity to how they were shipped from Momylia di Rizzo Emilia jewelery and fashion accessories.",
        "Packages sent with expenses to be paid by the recipient will not be accepted by Momylia di Rizzo Emilia jewelery and fashion accessories.",
        "The refund will be made with a payment to the Customer’s bank account within 30 days from receipt of the returned goods.",
        "Goods returned incomplete, damaged or dirty due to the Customer’s inexperience will not be refunded, and a credit equal to the price of the item originally ordered will not be issued.",
        "All contracts are intended as stipulated in Italy and are governed by Italian law.",
    ],
    "it": [
        "(italian 0) Per richieste generali e relative agli ordini, il nostro team di customer experience può essere contattato:",
        "(italian 1) Numero di telefono:",
        "(italian 2) WhatsApp o Cellulare:",
        "(italian 3) In alternativa, puoi anche inviarci un'e-mail a:",
        "(italian 4) Se desideri inviare corrispondenza per posta, scrivi a:",
        "(italian 5) 1.1. Il sito web momyliaperlebijoux.com è gestito dalla società Momylia di Rizzo Emilia. La sua sede principale è a Venezia Cannaregio 3378-3378/A-3378/B, P.IVA 03688960274 iscritta nel registro delle imprese di Venezia al n. VE-330031.",
        "(italian 6) Le presenti condizioni generali di contratto (le “Condizioni Generali”) disciplinano il rapporto tra il cliente (“Cliente”) e (“Momylia di Rizzo Emilia”, congiuntamente “Parti”) per l’acquisto dei prodotti della Momylia di Rizzo Emilia (“Prodotti”) di volta in volta a tal fine resi disponibili  sul sito web. La lingua del contratto è l’Italiano.",
        "(italian 7) 1.2. L’acquisto on-line per tramite delle presenti Condizioni Geneali sul sito è consentita ai clienti, che hanno raggiunto la maggiore età.",
        "(italian 8) 1.3. La Momylia di Rizzo Emilia non assume alcun impegno in ordine alla verifica dei requisiti sopra dettati assumendosi il Cliente, ogni responsabilità che possa derivare dalla violazione del punto 1.2.",
        "(italian 9) 2.1. Relativamente ai prodotti  che saranno di volta in volta immessi sul sito Momylia di Rizzo Emilia, la stessa si riserva di variare la tipologia, le referenze ed i termini dell’offerta, anche in relazione alle disponibilità. Il Cliente sarà informato qualora il suo ordine risulti non eseguibile per indisponibilità del prodotto ordinato.",
        "(italian 10) 2.2. La Momylia di Rizzo Emilia verifica che tutte le schede informative relative ai prodotti siano corrette. Senza tuttavia che ciò possa garantire l’assoluta assenza di errori.  La Momylia fa presente inoltre che tutti i prodotti sono fatti a mano e potrebbero presentare irregolarità  (mai nessun pezzo potrà essere uguale ad un altro anche pur di simile fattura). Nell’eventualità che venga riscontrato un errore di un Prezzo, La Momylia metterà il Cliente nella condizione di riconfermare l’acquisto dei Prodotti al Prezzo corretto oppure di cancellarlo.",
        "(italian 11) 3.1. Le caratteristiche essenziali del Prodotto e dei Prezzi sono riportati nell’offerta relativa a ciascun Prodotto presente nel Sito.",
        "(italian 12) 3.2. Per l’acquisto dei Prodotti dovrà seguire le istruzioni riportate nel sito. Il cliente dovrà aver letto e accettato i termine del contributo per le spese di consegna, le presenti Condizioni Generali (inclusive delle condizioni di esercizio del diritto di recesso) e il comunicato in tema di protezione dei dati personali (Privacy Policy), prima di proseguire nella selezione del tipo di pagamento desiderato e dare l’ordine.",
        "(italian 13) 4.1. Il Contratto stipulato tra il Cliente e la Momylia, s’intende concluso nel momento in cui l’ordine inoltrato dal Cliente sia pervenuto all’indirizzo del Sito a condizione che la procedura di acquisto riportata nel sito sia stata rispettata, che Momylia di Rizzo Emilia abbia ricevuto il pagamento da parte del Cliente e che sia stata confermata la disponibilità del prodotto da Momylia.",
        "(italian 14) La Momylia non risponde di malfunzionamento della rete di trasmissione dei dati imputabile al gestore.",
        "(italian 15) 4.2. Con l’invio dell’ordine a Momylia di Rizzo Emilia il Cliente riconosce e dichiara di aver letto ed accettato integralmente e senza condizioni i termini per le spese di consegna, le Condizioni Generali, il comunicato in tema dei dati personali (Privacy Policy) e le condizioni di esercizio del diritto di recesso.",
        "(italian 16) 4.3. Il modulo d’ordine d’acquisto sarà archiviato presso la banca dati del Sito per il periodo di tempo necessario all’evasione degli ordini.",
        "(italian 17) 4.4. La Momylia provvederà a trasmettere al cliente via e-mail una conferma di ricezione dell’ordine di acquisto inviato.",
        "(italian 18) 5.1. Per ciascuno articolo il prezzo unitario è espresso in Euro (€), IVA (Imposta sul Valore Aggiunto) inclusa e al netto delle spese di spedizione.",
        "(italian 19) Tutti i prodotti sono disponibili alla spedizione. Se a causa di imprevisti ci fosse un ritardo nella consegna dei prodotti, il Ciente verrà tempestivamente avvisato via e-mail, anche in caso di esurimento temporaneo di uno o più prodotti.",
        "(italian 20) 6.1. Pagamenti accettati:",
        "(italian 21) Carte di credito disponibili sul circuito PayPal.",
        "(italian 22) Bonifico bancario.",
        "(italian 23) Beneficiario: Momylia di Rizzo Emilia, IT42Q0306234210000002308204 codice - SWIFT MEDBITMMXX, Banca MEDIOLANUM",
        "(italian 24) 7.1. Per motivi di sicurezza, i Prodotti acquistati sul sito saranno consegnati all’indirizzo indicato dal cliente.",
        "(italian 25) 7.2. Per ogni ordine effettuato sul Sito, la Momylia emette fattura della merce spedita.",
        "(italian 26) Per l’emissone della fattura fanno piena e definitiva fede le informazioni fornite dal Cliente all’atto dell’ordine. Nessuna variazione sarà possibile dopo l’invio dell’ordine.",
        "(italian 27) 7.3. I Prodotti acquistati verrano consegnati mediante corriere DHL all’indirizzo indicato dal Cliente.",
        "(italian 28) La spedizione è GRATUITA IN ITALIA per ordini superiori a 150 Euro.",
        "(italian 29) I prodotti saranno spediti entro 2-3 giorni lavorativi e il tempo di consegna dipende dal luogo di consegna. Qualsiasi variazione a quanto sopra sarà comunicata immediatamente via e-mail al Cliente.",
        "(italian 30) Momylia di Rizzo EmIlia Bigiotteria e accessori Moda spedisce in tutti i paesi. Tuttavia posssono verificarsi dei casi in cui i problemi doganali impediscono la consegna dei prodotti ordinati. In tal caso il cliente sarà informato via e-mail e rimborsato in seguito.",
        "(italian 31) 8.1. I prodotti venduti non sono soggetti a importazioni o dazi doganali se il prodotto è venduto e consegnato in Italia o nell’Unione Europea.",
        "(italian 32) I prodotti da consegnare ai paesi extra UE possono essere soggetti a importazioni e/o diritti doganali, a seconda del tipo di prodotto e del paese di destinazione. Non possiamo prevedere gli eventuali costi che possono essere addebitati dalla dogana per il transito delle merci.",
        "(italian 33) Per ulteriori informazioni, contattare il proprio ufficio doganale nazionale.",
        "(italian 34) Tuttavia, i costi relativi all’importazione e/o ai dazi doganali devono essere pagati dal cliente.",
        "(italian 35) 9.1 Il Cliente ha diritto di recedere entro 14 (quattordici) giorni lavorativi dal giorno in cui viene ricevuto l’ordine.",
        "(italian 36) La notifica può essere data entro il termine sopra indicato, tramite telegramma, fax o e-mail. I costi di spedizione per la restituzione delle merci saranno a carico del Cliente.",
        "(italian 37) Le merci devono essere restituite intatte, nell’imballaggio originale, in perfette condizioni in conformità a come sono state spedite dalla Momylia di Rizzo Emilia Bigiotteria e accessori moda.",
        "(italian 38) Nessun pacco inviato con spese a carico del destinatario verrà accettato dalla Momylia di Rizzo Emilia Bigiotteria e accessori moda.",
        "(italian 39) Il rimborso sarà effettuato con un pagamento sul conto bancario del Cliente entro 30 giorni dal ricevimento della merce restituita.",
        "(italian 40) Le merci restituite incomplete, danneggiate o sporche a causa di imperizia del Cliente non verranno rimborsate né comunque sarà emesso un credito uguale al prezzo dell’articolo ordinato inizialmente.",
        "(italian 41) Tutti i contratti sono intesi come stipulati in Italia e sono disciplinati dalle legge italiana.",
    ],
    "ro": [
        "(rom 0) ",
        "(rom 1) ",
        "(rom 2) ",
        "(rom 3) ",
        "(rom 4) ",
        "(rom 5) ",
        "(rom 6) ",
        "(rom 7) ",
        "(rom 8) ",
        "(rom 9) ",
        "(rom 10) ",
        "(rom 11) ",
        "(rom 12) ",
        "(rom 13) ",
        "(rom 14) ",
        "(rom 15) ",
        "(rom 16) ",
        "(rom 17) ",
        "(rom 18) ",
        "(rom 19) ",
        "(rom 20) ",
        "(rom 21) ",
        "(rom 22) ",
        "(rom 23) ",
        "(rom 24) ",
        "(rom 25) ",
        "(rom 26) ",
        "(rom 27) ",
        "(rom 28) ",
        "(rom 29) ",
        "(rom 30) ",
        "(rom 31) ",
        "(rom 32) ",
        "(rom 33) ",
        "(rom 34) ",
        "(rom 35) ",
        "(rom 36) ",
        "(rom 37) ",
        "(rom 38) ",
        "(rom 39) ",
        "(rom 40) ",
        "(rom 41) ",
    ],
    "ru": [
        "(rus 0) ",
        "(rus 1) ",
        "(rus 2) ",
        "(rus 3) ",
        "(rus 4) ",
        "(rus 5) ",
        "(rus 6) ",
        "(rus 7) ",
        "(rus 8) ",
        "(rus 9) ",
        "(rus 10) ",
        "(rus 11) ",
        "(rus 12) ",
        "(rus 13) ",
        "(rus 14) ",
        "(rus 15) ",
        "(rus 16) ",
        "(rus 17) ",
        "(rus 18) ",
        "(rus 19) ",
        "(rus 20) ",
        "(rus 21) ",
        "(rus 22) ",
        "(rus 23) ",
        "(rus 24) ",
        "(rus 25) ",
        "(rus 26) ",
        "(rus 27) ",
        "(rus 28) ",
        "(rus 29) ",
        "(rus 30) ",
        "(rus 31) ",
        "(rus 32) ",
        "(rus 33) ",
        "(rus 34) ",
        "(rus 35) ",
        "(rus 36) ",
        "(rus 37) ",
        "(rus 38) ",
        "(rus 39) ",
        "(rus 40) ",
        "(rus 41) ",
    ],
};

const contactsTitle = {
    "en": [
        "GENERAL TERMS AND CONDITIONS OF SALE FOR ECOMMERCE MOMYLIA",
        "2. Products",
        "3. Methods of purchase",
        "4. Conclusion of contract",
        "5. Retail price",
        "6. Methods of payment",
        "7. Transport and delivery",
        "8. Import and customs duties",
        "9. Defects or returns",
    ],
    "it": [
        "CONDIZIONI GENERALI DI VENDITA PER L’ECOMMERCE MOMYLIA",
        "2. Prodotti",
        "3. Modalità di acquisto",
        "4. Conclusione del contratto",
        "5. Prezzo al dettaglio",
        "6. Modalità di pagamento",
        "7. Trasporto e consegna",
        "8. Importazione e dazi doganali",
        "9. Difetti o resi",
    ],
    "ro": [
        "Titlul 1",
        "Titlul 2",
        "Titlul 3",
        "Titlul 4",
        "Titlul 5",
        "Titlul 6",
        "Titlul 7",
        "Titlul 8",
        "Titlul 9",
    ],
    "ru": [
        "Заглавие 1",
        "Заглавие 2",
        "Заглавие 3",
        "Заглавие 4",
        "Заглавие 5",
        "Заглавие 6",
        "Заглавие 7",
        "Заглавие 8",
        "Заглавие 9",
    ],
}

const contactsInfo = {
    "en": [
        "<a href='tel: +390412750658'>+39 0 412750658</a>",
        "<a href='tel: +393402985363'>+39 3 402985363</a> - italian and english languages;",
        "<a href='tel: +393458137589'>+39 3 458137589</a> - romanian and russian languages.",
        "<a href='mailto:momylia@libero.it'>momylia@libero.it</a>",
        "Cannaregio 3378-3378/a-3378/b VENEZIA 30121, Italia",
        "CONTACT US BEFORE ORDER PAYMENT FOR DETAILS OF SHIPMENT ARRANGEMENTS.",
        "ITEMS WILL ONLY BE SHIPPED AFTER PAYMENT IS RECEIVED.",
        "ITEMS WILL ONLY BE SHIPPED AFTER PAYMENT IS RECEIVED.",
        "CONTACT US BEFORE ORDER PAYMENT FOR DETAILS OF SHIPMENT ARRANGEMENTS.",
        "ITEMS WILL ONLY BE SHIPPED AFTER PAYMENT IS RECEIVED.",
    ],
    "it": [
        "<a href='tel: +390412750658'>+39 0 412750658</a>",
        "<a href='tel: +393402985363'>+39 3 402985363</a> - lingue italiana e inglese;",
        "<a href='tel: +393458137589'>+39 3 458137589</a> - lingue rumeno e russo.",
        "<a href='mailto:momylia@libero.it'>momylia@libero.it</a>",
        "Cannaregio 3378-3378/a-3378/b VENEZIA 30121, Italia",
        "CONTATTACI PRIMA DEL PAGAMENTO DELL'ORDINE PER I DETTAGLI DEGLI ACCORDI DI SPEDIZIONE.",
        "GLI ARTICOLI SARANNO SPEDITI SOLO DOPO AVER RICEVUTO IL PAGAMENTO.",
        "GLI ARTICOLI SARANNO SPEDITI SOLO DOPO AVER RICEVUTO IL PAGAMENTO.",
        "CONTATTACI PRIMA DEL PAGAMENTO DELL'ORDINE PER I DETTAGLI DEGLI ACCORDI DI SPEDIZIONE.",
        "GLI ARTICOLI SARANNO SPEDITI SOLO DOPO AVER RICEVUTO IL PAGAMENTO.",
    ],
    "ro": [
        "Informație 1",
        "Informație 2",
        "Informație 3",
        "<a href='mailto:momylia@libero.it'>momylia@libero.it</a>",
        "Informație 5",
        "Informație 6",
        "Informație 7",
        "Informație 8",
        "Informație 9",
        "Informație 10",
    ],
    "ru": [
        "Информация 1",
        "Информация 2",
        "Информация 3",
        "<a href='mailto:momylia@libero.it'>momylia@libero.it</a>",
        "Информация 5",
        "Информация 6",
        "Информация 7",
        "Информация 8",
        "Информация 9",
        "Информация 10",
    ],
}


/* Identify browser language */
let userLang = navigator.language || navigator.userLanguage;
let languageValue = userLang.slice(0, 2);
console.log('1. Browser Language = ', languageValue);

/* Identify our previous application language settings */
var storedLanguage = localStorage.getItem("perlaLanguage");
console.log('2. Our stored Language = ', storedLanguage);

/*  verify if storedLanguage includes in languageSet = (en, it, ro, ru) */
var flag = languageSet.includes(storedLanguage);
console.log('flag = ', flag);

var selectedLanguage;

if (storedLanguage != null) {
    if (flag) selectedLanguage = storedLanguage
    else selectedLanguage = languageValue;
}
else {
    selectedLanguage = languageValue;
};

languageChange(selectedLanguage);

/*console.log('selectedLanguage = ', selectedLanguage);
localStorage.setItem("perlaLanguage", "ro");*/

function languageChange(lang) {
    console.log("inside function parameter = ", lang);

    localStorage.setItem("perlaLanguage", lang);
    let nav__list = document.querySelectorAll(".navbar__link");
    let elems = document.getElementsByName('selectLanguage');

    /* show checked Language nav */
    let index = languageSet.indexOf(lang);

    /* change navigation text (About Us, Catalog, Contacts) Language */
    for (i = 0; i < nav__list.length; i++) {
        // console.log(i, ' = ', nav__list[i].text);
        nav__list[i].text = navigation[lang][i];
        elems[index].checked = "checked";
        // console.log(i, ' = ', nav__list[i].text);
    };

    let article__list = document.querySelectorAll(".article");
    for (i = 0; i < article__list.length; i++) {

        let x = article__list[i].querySelectorAll(".article__paragraph");
        let y = article__list[i].querySelector(".article__title");
        y.innerHTML = articles[i][lang].title;
        // console.log('Title = ', y.textContent);
        // console.log('M= ', articles[i][lang][0]);

        for (j = 0; j < x.length; j++) {
            x[j].innerHTML = articles[i][lang][j];
            // console.log('X[', j, '] content = ', x[j].textContent);
        };

        // console.log(i, ' = ', nav__list[i].text);
        // nav__list[i].text = navigation[lang][i];
        // console.log(i, ' = ', x);
    };

    let contactsText__list = document.querySelectorAll(".contacts__text");
    let contactsTitle__list = document.querySelectorAll(".contacts__title");
    let contactsInfo__list = document.querySelectorAll(".contacts__info");

    for (i = 0; i < contactsText__list.length; i++) {
        contactsText__list[i].innerHTML = contactsText[lang][i];
    };

    for (i = 0; i < contactsTitle__list.length; i++) {
        contactsTitle__list[i].innerHTML = contactsTitle[lang][i];
    };

    for (i = 0; i < contactsInfo__list.length; i++) {
        contactsInfo__list[i].innerHTML = contactsInfo[lang][i];
    };

};
