const collectionName = {
    "en": ['" Sky " Collection', '" Psyche " Collection', '" Universo " Collection', '" Moon " Collection', '" Meteora " Collection', '" Saturno " Collection', '" Space " Collection', '" Neptune " Collection', '" Rigel " Collection', '" Luna " Collection', '" Starman " Collection', '" Sun " Collection'],
    "it": ['Collezione " Sky "', 'Collezione " Psyche "', 'Collezione " Universo "', 'Collezione " Moon "', 'Collezione " Meteora "', 'Collezione " Saturno "', 'Collezione " Space "', 'Collezione " Neptune "', 'Collezione " Rigel "', 'Collezione " Luna "', 'Collezione " Starman "', 'Collezione " Sun "'],
    "ro": ['Colecția " Sky "', 'Colecția " Psyche "', 'Colecția " Universo "', 'Colecția " Moon "', 'Colecția " Meteora "', 'Colecția " Saturno "', 'Colecția " Space "', 'Colecția " Neptune "', 'Colecția " Rigel "', 'Colecția " Luna "', 'Colecția " Starman "', 'Colecția " Sun "'],
    "ru": ['Коллекция " Sky "', 'Коллекция " Psyche "', 'Коллекция " Universo "', 'Коллекция " Moon "', 'Коллекция " Meteora "', 'Коллекция " Saturno "', 'Коллекция " Space "', 'Коллекция " Neptune "', 'Коллекция " Rigel "', 'Коллекция " Luna "', 'Коллекция " Starman "', 'Коллекция " Sun "'],
};

const produceData = {
    "en": [
        '" Sky " Set', "Handmade with Murano glass in Venice, Italy", "<span>Price: </span>Press left/right arrows to see each piece in detail", "<span>Code: </span>SK0000", "<span>Brand: </span>Perle di Stelle<span class='upper-case'>&#174;</span> by Momylia", "<span>Collection: </span>Sky", "<span>Category: </span>Set", "<span>Length: </span>-", "<span>Weight: </span>-", "<span>Components: </span>Open hook components in 925 silver.", "<span>Description: </span>Handmade Murano glass spheres, inside meteorite granules, classified as meteorite NWA869 in the Meteoritical Bulletin Database of the Meteoritical Society",
    ],
    "it": [
        'La serie " Sky "', "Fatto a mano con vetro di Murano a Venezia, Italia", "<span>Prezzo: </span>Premere le frecce sinistra/destra per vedere ogni pezzo in dettaglio", "<span>Codice: </span>SK0000", "<span>Marca: </span>Perle di Stelle<span class='upper-case'>&#174;</span> by Momylia", "<span>Collezione: </span>Sky", "<span>Category: </span>La serie", "<span>Length: </span>-", "<span>Peso: </span>-", "<span>Componenti: </span>Componenti gancio aperto in argento 925.", "<span>Descrizione: </span>Sfere in vetro di Murano fatte a mano, all'interno di granuli di meteorite, classificate come meteorite NWA869 nel Database del Bollettino Meteoritico della Società Meteoritica",
    ],
    "ro": [
        'Garnitura " Sky "', "Confecționat artizanal cu sticla de Murano în Venetia, Italia", "<span>Preț: </span>Apăsați săgețile stânga/dreapta pentru a vedea fiecare piesă împarte", "<span>Cod: </span>SK0000", "<span>Marca: </span>Perle di Stelle<span class='upper-case'>&#174;</span> by Momylia", "<span>Colecția: </span>Sky", "<span>Categorie: </span>Garnitură", "<span>Lunghezza: </span>-", "<span>Greutate: </span>-", "<span>Componente: </span>Componentele de deschidere (cârlig) executate din argint 925.", "<span>Descriere: </span>Sferele din sticlă de Murano confecționate artizanal cu încorporarea granulelor de meteorit, clasificate, ca meteorit NWA869 în Baza de date Buletinul Meteoritic al Societății Meteoritice (Meteoritical Bulletin Database of the Meteoritical Society).",
    ],
    "ru": [
        'Комплект " Sky "', "Ручная работа из муранского стекла в Венеции, Италия", "<span>Цена: </span>Нажимайте стрелки влево/вправо, чтобы увидеть каждую деталь отдельно", "<span>Код: </span>SK0000", "<span>Брэнд: </span>Perle di Stelle<span class='upper-case'>&#174;</span> by Momylia", "<span>Коллекция: </span>Sky", "<span>Категория: </span>Комплект", "<span>Длина: </span>-", "<span>Вес: </span>-", "<span>Компоненты: </span>Компоненты для открытия (крючок) изготовлены из серебра 925 пробы.", "<span>Описание: </span>Сферы ручной работы из муранского стекла вкраплённые внутри гранулами метеорита, классифицированного как метеорит NWA869 в Базе Данных Метеоритного Бюллетеня Метеоритического Общества (Meteoritical Bulletin Database of the Meteoritical Society).",
    ],
};


function languageProduces(lang) {
    console.log('BINGO produces page language is:', lang);

    let collectionName__list = document.querySelectorAll(".collection__title");
    for (i = 0; i < collectionName__list.length; i++) {
        collectionName__list[i].innerHTML = collectionName[lang][i];
    };


    let produce__list = document.querySelectorAll(".slider__item-body p");
    for (i = 0; i < produce__list.length; i++) {
        //console.log('p[', i, ']= ', produce__list[i]);
        produce__list[i].innerHTML = produceData[lang][i];
    };
}