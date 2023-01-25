function pagina(pag){

    var x1 = document.getElementById("art1");
    var x2 = document.getElementById("art2");
    var x3 = document.getElementById("art3");
    var x4 = document.getElementById("art4");

    switch(pag){
        case 0:
            x1.style.display = "block";
            x2.style.display = "none";
            x3.style.display = "none";
            x4.style.display = "none";
            break;
        case 1:
            x1.style.display = "none";
            x2.style.display = "block";
            x3.style.display = "none";
            x4.style.display = "none";
            break;
        case 2:
            x1.style.display = "none";
            x2.style.display = "none";
            x3.style.display = "block";
            x4.style.display = "none";
            break;
        case 3:
            x1.style.display = "none";
            x2.style.display = "none";
            x3.style.display = "none";
            x4.style.display = "block";
            break;
        default:
            break;
    }
}