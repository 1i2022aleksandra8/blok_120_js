const oblicz = document.querySelector("#oblicz");
const sztuki = document.querySelector("#sztuki");
const nadruk = document.querySelector("#nadruk");
const wynik = document.querySelector("#wynik");

oblicz.addEventListener('click', function(e){
    e.preventDefault();

    const nadrukWartosc = Number(nadruk.value);
    const sztukiWartosc = Number(sztuki.value);
    
    if(nadrukWartosc == 0 || sztukiWartosc == 0){
        wynik.textContent = `Uzupełnij dane`;
    }
    else {
        const cena = nadrukWartosc * sztukiWartosc;
        wynik.textContent = `Do zapłaty: ${cena} zł`;
    }
})