const formularz = document.querySelector("#formularz");
const imie = document.querySelector("#imie");
const osoby = document.querySelector("#osoby");
const blad = document.querySelector("#blad");
const wynik = document.querySelector("#wynik");

formularz.addEventListener('submit', function(e){
    e.preventDefault();

    imieWartosc = (imie.value).trim();
    osobyWartosc = Number(osoby.value);

    if (imie.value == ''){
        blad.textContent = `Podaj imię i nazwisko.`;
        wynik.textContent = ``;

    } else if ((osobyWartosc < 1) || (osobyWartosc > 4)) {
        blad.textContent = `Liczba osób musi być od 1 do 4.`;
        wynik.textContent = ``;

    } else {
        blad.textContent = ``;
        wynik.textContent = `Zapisano: ${imieWartosc}. Liczba osób: ${osobyWartosc}.`;
    }
})