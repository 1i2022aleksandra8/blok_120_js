const poprzednie = document.querySelector("#poprzednie");
const nastepne = document.querySelector("#nastepne");
const numer = document.querySelector("#numer");
const zdjecie = document.querySelector("#zdjecie");
let zdjecieWartosc = 1;



poprzednie.addEventListener('click', function(e){
    e.preventDefault();
    zdjecieWartosc = zdjecieWartosc - 1;

    if (zdjecieWartosc == 0){
        zdjecieWartosc = 4;
    }

    zdjecie.src = `./img/praca${zdjecieWartosc}.svg`;
    numer.textContent = `Zdjęcie ${zdjecieWartosc} z 4`;
})



nastepne.addEventListener('click', function(e){
    e.preventDefault();
    zdjecieWartosc = zdjecieWartosc + 1;

    if (zdjecieWartosc == 5){
        zdjecieWartosc = 1;
    }

    zdjecie.src = `./img/praca${zdjecieWartosc}.svg`;
    numer.textContent = `Zdjęcie ${zdjecieWartosc} z 4`;
})