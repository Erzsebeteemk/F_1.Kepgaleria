//JQuery-vel megadtam, hogy először a data0 objektumból vegye ki az infót.
//Attribútumot adtam a képnek, h2-nek és p-nek.
$(".kep").attr("src", data0.photo)
$("h2").attr("src", data0.title)
$("p").attr("src", data0.description)


let index = 0

let betoltofg = (index) => {
    $("kep").attr("src", kepadatoktomb[index].photo)
    $("h2").attr("src", kepadatoktomb[index].title)
    $("p").attr("src", kepadatoktomb[index].description)
}



/* Nyilakra kattintás befolyásolja az index értékét.
Eseményfigyelőben: a nyilakra kattintással beindul egy fg:
    az index változik +,-.
        ha a határt elérte, akkor mit tegyen,
    betöltőfg-nyel töltse be az új indexnek megfelelő képet.*/


/* Thumbnailekre kattintás befolyásolja az index értékét.
Eseményfigyelőben: a thumbnailre kattintással beindul egy fg:
    az index változik aszerint, hogy melyik thumbnail-re kattint a felhasználó,
    betöltőfg-nyel töltse be az új indexnek megfelelő képet.*/

    