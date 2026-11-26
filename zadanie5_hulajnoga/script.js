const model = document.querySelector("#model");
const pokaz = document.querySelector("#pokaz");
const podglad = document.querySelector("#podglad");

pokaz.addEventListener('click', function(e){
    e.preventDefault();

    const modelWartosc = model.value;
    podglad.src = `./img/${modelWartosc}.svg`;
})