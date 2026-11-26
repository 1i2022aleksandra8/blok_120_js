const oblicz = document.querySelector("#oblicz");
const przyjazd = document.querySelector("#przyjazd");
const wyjazd = document.querySelector("#wyjazd");
const stawka = document.querySelector("#stawka");
const wynik = document.querySelector("#wynik");

oblicz.addEventListener('click', function(e){
    e.preventDefault();

    const wyjazdWartosc = Date.parse(wyjazd.value);
    const przyjazdWartosc = Date.parse(przyjazd.value);
    const stawkaWartosc = Number(stawka.value);

    let liczbaDob = wyjazdWartosc - przyjazdWartosc;
    liczbaDob = (liczbaDob / 1000 / 60 / 60 / 24);
    liczbaDob = Math.floor(liczbaDob, 0);

    const zaplata = liczbaDob * stawkaWartosc;

    if(liczbaDob < 0){
        wynik.textContent = `Data wyjazdu jest wcześniejsza niż data przyjazdu.`;
    } else {
        wynik.textContent = `Liczba dób: ${liczbaDob}. Do zapłaty ${zaplata} zł.`;
    }
})