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
    "title": 'What is "Perle di Stelle" ?',
    0: 'Perle di Stelle is a handmade brand  made in Venice, which is characterized by a selection of unique jewelry collection , using Murano glass and real meteorites. We wanted to combine Venice with the immensity of the space.',
    1: 'Imagine being in the most beautiful and romantic city in the world, on a clear night you observe the stars and the moon reflected in the water on one of its canals or even better on its lagoon.',
    2: 'It is not easy to capture the essence and spirituality of such a fascinating painting and transform it into objects made to be worn. Perle di Stelle together with Momylia managed to do it. We have created jewels made with Murano glass, which are truly unique, involving science, craftsmanship and technology.',
    3: 'Thanks to a meticulous work, entirely handmade and consisting of a mix of glass, rocks from space and precious metals, we have created jewels with the intention of going beyond simple ornament.',
    4: 'All parts are manually assembled using quality elements, mostly 925 silver. Our brand ensures a lifetime guarantee on all creations. The jewels are also designed for lovers of craftsmanship thus you will never find two absolutely alike. The work is done by artisans who first acquired the necessary practice to combine Murano glass with extraterrestrial rock fragments, which are mostly older than our own planet.',
    5: 'The small fragments belong to meteorites classified and present on the Meteoritical Bulletin Database, of the Meteoritical Society (International Society for Meteoritics and Planetary Science).',
    6: 'Among the meteorites we are using for example are:',
    7: '✦ Meteorites fell in Chelyabinsk, Russia, on February 15, 2013. Fall became famous for the size and brightness of the fireball as well as for the multitude of videos on the internet. Over a ton of chondrite-type meteorites (LL5) fell in Chelyabinsk;',
    8: '✦ NWA 869 meteorites not seen falling, found in Northwest Africa in 2001. Type chondrites (L4-6);',
    9: '✦ NWA 11421 Meteorites also found in northwestern Africa and classified as lunar meteorites (Lunar feldspathic breccia). These meteorites are composed of rocks that come from the lunar highlands, that is, from the lighter areas, which can be seen by observing the Moon, even with the naked eye.',
};

articles[0]["ru"] = {
    "title": 'Что такое "Perle di Stelle" ?',
    0: 'Perle di Stelle — это бренд ручной работы, сделанный в Венеции, который характеризуется использованием муранского стекла и настоящих метеоритов. Мы совмещяем Венецию с необъятностью пространства.',
    1: 'Представьте, что вы находитесь в самом красивом и романтичном городе мира. Ясной ночью наблюдаете за звездами и луной, отражающимися в воде одного из венецианских каналов или еще лучше в основной лагуне Венеции.',
    2: 'Не легко уловить суть и одухотворенность такой очаровательной картины и превратить ее в предметы, предназначенные для ношения. Perle di Stelle вместе с “Momylia” удалось это сделать. Мы создали драгоценности из муранского стекла, которые поистине уникальны и сочетают в себе науку, мастерство и технологии.',
    3: 'Благодаря кропотливой работе, выполненной вручную и состоящей из смеси стекла, камней из космоса и драгоценных металлов, мы создали драгоценности с намерением выйти за рамки простого орнамента.',
    4: 'Все детали собраны вручную с использованием качественных элементов из серебра 925 пробы. Наш бренд дает пожизненную гарантию на все изделия. Украшения также предназначены для любителей мастерства, поэтому вы никогда не найдете двух абсолютно одинаковых. Работа выполняется ремесленниками, которые впервые приобрели необходимую практику для соединения муранского стекла с фрагментами внеземных пород, которые в большинстве своем старше нашей планеты.',
    5: 'Небольшие фрагменты принадлежат метеоритам, классифицированные и присутствующим в базе данных метеоритного бюллетеня Международного общества метеоритики и планетологии (International Society for Meteoritics and Planetary Science).',
    6: 'Среди метеоритов, которые мы используем есть:',
    7: '✦ Метеориты, которые упали в Челябинске, Россия, 15 февраля 2013 года. Падение прославилось размером и яркостью огненного шара, а также множеством видеороликов в Интернете. В Челябинске упало более тонны метеоритов хондритового типа (LL5);',
    8: '✦ Метеориты NWA 869, не замеченные при падении, обнаружены в Северо-Западной Африке в 2001 г. Тип хондриты (L4-6);',
    9: '✦ NWA 11421 Метеориты обнаружены в северо-западной Африке и классифицируются как лунные метеориты (Lunar feldspathic breccia). Эти метеориты состоят из горных пород, пришедших с лунных нагорий, то есть из более светлых областей, которые можно увидеть, наблюдая за Луной, даже невооруженным глазом.',
};

articles[0]["ro"] = {
    "title": 'Ce este "Perle di Stelle" ?',
    0: 'Perle di Stelle este un brand de confecții artizanale executate în Veneția, care se caracterizează prin crearea de colecții unice de bijuterii, folosind sticlă de Murano și meteoriți reali. Dorim să îmbinăm Veneția cu imensitatea spațiului.',
    1: 'Imaginați-vă că vă aflați în cel mai frumos și romantic oraș din lume, într-o noapte senină observați stelele și luna reflectate în apă pe unul dintre canalele Veneției sau chiar pe laguna sa.',
    2: 'Nu este ușor să captezi esența și spiritualitatea unui tablou atât de fascinant și să o transformi în obiecte făcute pentru a fi purtate. Perle di Stelle împreună cu Momylia au reușit să o facă. Am creat bijuterii din sticlă de Murano, care sunt cu adevărat unice, implicând știință, măiestrie și tehnologie.',
    3: 'Datorită unei lucrări minuțioase, realizată artizanal și constând dintr-un amestec de sticlă, roci din spațiu și metale prețioase, am creat bijuterii cu intenția de a trece dincolo de simplul ornament.',
    4: 'Toate piesele sunt asamblate manual folosind elemente de calitate, îndeosebi argint 925. Brandul nostru asigură o garanție pe viață pentru toate creațiile. Bijuteriile sunt concepute pentru iubitorii de măiestrie, astfel încât nu veți găsi niciodată două absolut la identice. Lucrarea este realizată de meșteri artizani cu o practică dobândită necesară de a combina sticla de Murano cu fragmente de rocă extraterestră.',
    5: 'Fragmentele mici aparțin unor meteoriți, care sunt în mare parte mai vechi decât propria noastră planetă, și clasificați în prezent în Baza de date a Buletinului Meteoritic, a Societății Internaționale de Științe Meteoritice și Planetare (International Society for Meteoritics and Planetary Science).',
    6: 'Printre meteoriții pe care îi folosim, de exemplu, se numără:',
    7: '✦ Meteoriți căzuți în Chelyabinsk, Rusia, pe 15 februarie 2013. Toamna a devenit celebră pentru dimensiunea și luminozitatea mingii de foc precum și pentru multitudinea de videoclipuri de pe Internet. Peste o tonă de meteoriți de tip condrită (LL5) au căzut în Celiabinsk;',
    8: '✦ Meteoriți NWA 869, care nu s-au văzut căzând, însă găsiți în Africa de Nord-Vest în 2001. Tipul condrite (L4-6);',
    9: '✦ NWA 11421 Meteoriți găsiți în nord-vestul Africii și clasificați ca meteoriți lunari (Lunar feldspathic breccia). Acești meteoriți sunt alcătuiți din roci, care provin din zonele înalte și luminoase a corpului ceresc Luna. Aceste zone pot fi văzute chiar cu ochiul liber.',
};

articles[0]["it"] = {
    "title": "Cos'è Perle di Stelle ?",
    0: "Perle di Stelle si caratterizza per una selezione di gioielli unici, ideati e fatti a Venezia in modo artigianale, utilizzando vetro di Murano e vere meteoriti. Abbiamo voluto coniugare Venezia con l'immensità dello spazio.",
    1: "Immaginate di trovarvi nella città più bella e romantica al mondo, in una notte limpida e osservare le stelle e la luna riflesse nell'acqua di uno dei suoi canali o della sua laguna.",
    2: "Non è facile catturare l'essenza e la spiritualità di una situazione così affascinante e trasformarla in oggetti fatti per essere indossati. Perle di Selle® insieme a Momylia ce l’hanno fatta,  creando gioielli in vetro di Murano, davvero unici, che coinvolgono scienza, artigianato e tecnologia.",
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
    5: 'Owner of the Perle di Stelle brand is Adam Ecaterina.',
    6: 'Producer of the Perle di Stelle brand is Momylia di Rizzo Emilia, 3378 Cannaregio, 30121 Venice, Italy.',
};

articles[1]["ru"] = {
    "title": 'Гарантия Изделий:',
    0: 'Метеориты, которые мы используем, абсолютно не опасны для человека, а уровень радиоактивности такой же или ниже, чем в среднем у наиболее распространенных земных пород.',
    1: 'Возможное присутствие в метеоритном материале аллергенных веществ, таких как никель, обезвреживается, поскольку они глубоко погружены в стекло.',
    2: 'Металлический материал, используемый для сборки, полностью гипоаллергенен. Мелкие детали покрыты родием или/и позолочены серебром 925 пробы и соответствуют Европейскому регламенту № 1907 / 2006 / EC (в аббревиатуре REACH и мод. Регламент ЕС № 494/2011). По тому же REACH соответствует выпуску никеля: EN 1811:2011.',
    3: 'МЕРЫ ПРЕДОСТОРОЖНОСТИ: Рекомендуется правильное использование изделия. Избегать сильных ударов, которые могут их сломать и сделать жемчужины острыми. В этом случае украшения нельзя носить. Мы не несем ответственности за ущерб, который может быть нанесен ими.',
    4: 'Это не игрушка. Храните в недоступном для детей месте.',
    5: 'Владельцем бренда Perle di Stelle является Адам Екатерина.',
    6: 'Производителем бренда Perle di Stelle является Момилиа ди Риццо Эмилия, 3378 Каннареджо, 30121 Венеция, Италия.',
};

articles[1]["ro"] = {
    "title": 'Garanția Produsului:',
    0: 'Meteoriții pe care îi folosim nu sunt periculoși pentru oameni, iar nivelul radioactiv este similar sau mai mic decât media celor mai comune roci terestre.',
    1: 'Prezența posibilă în materialul meteoritic a agenților alergeni, cum ar fi de exemplu nichelul, sunt absolut inofensivi, pe motiv că sunt scufundați adânc în sticlă.',
    2: 'Materialul metalic folosit la montaj este tot hipoalergenic. Piesele mici sunt din argint 925 rodiu sau/și aurit și respecta Regulamentul European nr.1907/2006/CE (in acronym REACH and mod. EC Regulation n. 494/2011). Pentru același REACH este în conformitate cu eliberarea de nichel: EN 1811: 2011.',
    3: 'PRECAUȚII: Se recomandă utilizarea corectă a produsului fără aplicarea unor șocuri puternice, care pot cauza deteriorări și perlele pot deveni ascuțite. In acest caz bijuteria nu trebuie purtata, ne declinam orice responsabilitate pentru daunele, care ar putea deriva din aceasta.',
    4: 'Aceste produse nu sunt jucăriii. A nu se lăsa la îndemâna copiilor.',
    5: 'Proprietarul mărcii Perle di Stelle este - Adam Ecaterina.',
    6: 'Producător al mărcii Perle di Stelle este Momylia di Rizzo Emilia, 3378 Cannaregio, 30121 Veneția, Italia.',
};

articles[1]["it"] = {
    "title": 'Garanzia sui materiali usati:',
    0: "I meteoriti che utilizziamo non sono assolutamente pericolosi per l'uomo e il livello radioattivo è simile o inferiore alla media delle più comuni rocce terrestri.",
    1: "L'eventuale presenza nel materiale meteoritico di agenti allergenici, come il nichel, sono resi innocui, perché immersi nel vetro.",
    2: "Il materiale metallico utilizzato per l'assemblaggio è tutto anallergico, le minuterie sono in argento 925 rodiato o dorato ed è conforme al Regolamento Europeo n.1907/2006/CE (in sigla REACH e mod. Regolamento CE n. 494/2011). Per lo stesso REACH è conforme al rilascio di nichel: EN 1811:2011.",
    3: 'PRECAUZIONI: Si raccomanda un uso corretto del prodotto, forti urti potrebbero rompere le perle e renderle taglienti. In questo caso il gioiello non va indossato, si declina ogni responsabilità per i danni che ne potrebbero derivare.',
    4: 'Non è un giocattolo. Tenere fuori dalla portata dei bambini.',
    5: 'Titolare del marchio Perle di Stelle®: Adam Ecaterina.',
    6: 'Produttore del marchio Perle di Stelle: Momylia di Milly Rizzo, 3378 Cannaregio, 30121 Venezia, Italia.',
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
    1: "Nel corso del tempo, tutti i pianeti, compreso il nostro, sono soggetti a impatti con meteoroidi anche di grandi dimensioni, l'energia rilasciata da tali impatti sulla superficie di pianeti rocciosi o i loro satelliti, può essere abbastanza grande da scagliare rocce nello spazio con una velocità superiore alla velocità di fuga del corpo progenitore, tali rocce si disperdono nello spazio interplanetario e gradualmente possono cadere anche sulla Terra. Pertanto, di tanto in tanto, cadono meteoriti marziane e lunari, probabilmente anche da altri pianeti. La certezza che la meteorite provenga dalla Luna o da Marte, è determinata dal confronto mineralogico fatto con i campioni lunari raccolti principalmente dagli astronauti dalle missioni Apollo o dalle analisi fatte dalle sonde spaziali, che sono andate su Marte. In entrambi i casi, l'integrazione con le informazioni sull'abbondanza isotopica è ciò che ne conferma l'origine.",
    2: 'Maurizio Eltri',
    3: 'Nella foto: Maurizio Eltri che osserva una meteoite lunare di oltre duecento grammi (NWA11303), appartenente alla sua collezione di meteoriti.',
};

articles[3]["en"] = {
    "title": 'Momylia and "Perle di Stelle"',
    0: '"Perle di Stelle" brand was born several years ago thanks to Maurizio Eltri passion about astronomy and the creativity of his wife Ecaterina Adam.',
    1: 'After months of work to study the adaptability of different types of meteorites on Murano glass, Maurizio and Ecaterina have found a very valid and irreplaceable collaboration with "Momylia" (Emilia Rizzo and Mauro Zennaro).',
    2: 'The true experts in the art of Venetian pearl making, Mauro and his wife Emilia immediately accepted with pleasure and enthusiasm the challenge of creating jewelry by incorporating extraterrestrial fragments into the glass.',
    3: 'Thanks to their great passion and over thirty years of experience in lampworking glass, guided by the wonderful idea they were pursuing, specifically to enclose a piece of the Universe within Murano glass, after some time they obtained truly brilliant results. This is the way it was born the union between Perle di Stelle and "Momylia".',
};

articles[3]["ru"] = {
    "title": '"Momylia" и "Perle di Stelle"',
    0: 'Бренд Perle di Stelle<span class="upper-case">&#174;</span> родился несколько лет назад благодаря увлечению Маурицио Эльтри астрономией и творчеству его жены Екатерины Адам.',
    1: 'После нескольких месяцев работы по изучению приспособляемости различных типов метеоритов к муранскому стеклу Маурицио и Екатерина нашли очень ценное и незаменимое сотрудничество с компанией “Momylia” (основатели компании Эмилия Риццо и Мауро Зеннаро).',
    2: 'Настоящие знатоки искусства изготовления венецианского жемчуга, Мауро и его жена Эмилия, с удовольствием и энтузиазмом сразу же приняли вызов создания ювелирных украшений, интегрируя в стекло осколки внеземных цивилизаций.',
    3: 'Благодаря их огромной страсти и более чем тридцатилетнему опыту в области художественной обработки стекла в пламени горелки, руководствуясь прекрасной идеей, которую они преследовали, а именно заключить частичку Вселенной в муранское стекло, через некоторое время они получили поистине блестящие результаты. Так родился союз Perle di Stelle и "Momylia"..',
};

articles[3]["ro"] = {
    "title": '"Momylia" și "Perle di Stelle"',
    0: 'Brandul Perle di Stelle a luat naștere în urmă cu câțiva ani datorită pasiunii lui Maurizio Eltri pentru astronomie și creativității soției sale, Ecaterina Adam.',
    1: 'După luni de muncă comună în studierea adaptabilității integrării diferitelor tipuri de meteoriți în sticla de Murano, Maurizio și Ecaterina au găsit o colaborare validă și fructuoasă, de neînlocuit cu „Momylia” (Emilia Rizzo și Mauro Zennaro).',
    2: 'Adevărații experți în arta confecționării perlelor venețiene, Mauro și soția sa Emilia au acceptat imediat cu plăcere și entuziasm provocarea de a crea bijuterii prin încorporarea fragmentelor extraterestre în sticlă.',
    3: 'Datorită pasiunii lor mari și experienței de peste treizeci de ani în prelucrarea sticlei, ghidați de ideea minunată pe care o urmăreau, anume de a încadra o bucată de Univers în sticla de Murano, după ceva timp au obținut rezultate cu adevărat strălucitoare. Așa s-a născut uniunea dintre Perle di Stelle și „Momylia”.',
};

articles[3]["it"] = {
    "title": '"Momylia" e "Perle di Stelle"',
    0: "Il marchio Perle di Stelle® nasce diversi anni fa grazie alla passione di Maurizio Eltri per l'astronomia e alla creatività della moglie Ecaterina Adam.",
    1: "Dopo tanto tempo trascorso a studiare l'adattabilità di diversi tipi di meteoriti sul vetro di Murano, Maurizio ed Ecaterina hanno trovato una validissima e insostituibile collaborazione con 'Momylia' (Emilia Rizzo e Mauro Zennaro).",
    2: "Veri esperti nell'arte perlaia veneziana, Mauro e sua moglie Emilia, hanno sin da subito accettato con piacere ed entusiasmo la sfida di creare gioielli incorporando nel vetro frammenti extraterrestri.",
    3: "Grazie alla loro grande passione e a oltre trent'anni d’esperienza nella lavorazione del vetro a lume, guidati dalla meravigliosa idea che stavano portando avanti, cioè di racchiudere un pezzo di Universo all'interno del vetro di Murano. Dopo qualche tempo hanno ottenuto risultati davvero brillanti. Nasce così l'unione tra Perle di Stelle e 'Momylia'.",
};

console.log('ARTICLES', articles);

let languageValue = 'en';

function getLanguageValue() {
    let elems = document.getElementsByName('selectLanguage');

    for (i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            languageValue = elems[i].value;
            // console.log(i, ' = ', elems[i].value);
        };
    };

    let nav__list = document.querySelectorAll(".navbar__link");
    for (i = 0; i < nav__list.length; i++) {
        // console.log(i, ' = ', nav__list[i].text);
        nav__list[i].text = navigation[languageValue][i];
        // console.log(i, ' = ', nav__list[i].text);
    };

    let article__list = document.querySelectorAll(".article");
    for (i = 0; i < article__list.length; i++) {

        let x = article__list[i].querySelectorAll(".article__paragraph");
        let y = article__list[i].querySelector(".article__title");
        y.textContent = articles[i][languageValue].title;
        // console.log('Title = ', y.textContent);
        // console.log('M= ', articles[i][languageValue][0]);


        for (j = 0; j < x.length; j++) {
            x[j].textContent = articles[i][languageValue][j];
            // console.log('X[', j, '] content = ', x[j].textContent);
        };

        // console.log(i, ' = ', nav__list[i].text);
        // nav__list[i].text = navigation[languageValue][i];
        // console.log(i, ' = ', x);
    };

    console.log(navigation[languageValue]);
};
