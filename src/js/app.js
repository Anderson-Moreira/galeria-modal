const galeriaModal = document.querySelector(".galeria-modal");
const galeriaModalImg = document.querySelector(".galeria-modal img");
const itemGaleria = document.querySelectorAll(".item-galeria");

function fecharGaleria(){
    galeriaModal.style.visibility = "hidden";
    galeriaModal.style.opacity = 0;
}

function abrirGaleria(src){
    console.log()
    galeriaModal.style.visibility = "visible";
    galeriaModal.style.opacity = 1;
    galeriaModalImg.style.transform = "scale(1)";
    galeriaModalImg.src = src;
}

itemGaleria.forEach(function (img){
    img.addEventListener('click', function (){
        const imgSrc = this.getAttribute('src');
        abrirGaleria(imgSrc);
    });
})
galeriaModal.addEventListener('click', fecharGaleria);