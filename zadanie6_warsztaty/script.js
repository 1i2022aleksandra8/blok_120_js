const sprawdz = document.querySelector("#sprawdz");
const wolne = document.querySelector("#wolne");
const wynik = document.querySelector("#wynik");

sprawdz.addEventListener('click', function(e){
    e.preventDefault();

    const wolneWartosc = Number(wolne.value);
    
    if (wolneWartosc < 0){
        wynik.classList.remove("malo");
        wynik.textContent = `Podaj liczbę wolnych miejsc od zera wzwyż.`;

    } else if (wolneWartosc < 5){
        wynik.classList.add("malo");
        wynik.textContent = `Zostało mało miejsc: ${wolneWartosc}.`;

    } else {
        wynik.classList.remove("malo");
        wynik.textContent = `Wolnych miejsc: ${wolneWartosc}.`;
    }
})