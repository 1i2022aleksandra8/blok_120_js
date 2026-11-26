const oblicz = document.querySelector("#oblicz");
const dni = document.querySelector("#dni");
const statyw = document.querySelector("#statyw");
const pilot = document.querySelector("#pilot");
const wynik = document.querySelector("#wynik");

oblicz.addEventListener('click', function(e){
    e.preventDefault();

    const dniWartosc = Number(dni.value);
    let Cena = dniWartosc * 35;

    if(statyw.checked){
        Cena = Cena + 20;
    }
    if(pilot.checked){
        Cena = Cena + 15;
    }
    if(dniWartosc <= 0){
        wynik.textContent = `Uzupełnij dane`;
    } else {
        wynik.textContent = `Do zapłaty: ${Cena} zł`;
    }
})