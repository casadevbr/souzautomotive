const galerias = document.querySelectorAll(".galeria");
const arrowBtns = document.querySelectorAll(".galeria_de_servicos i");
const firstCardWidth = galerias[0].querySelector(".card_servico").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const galeria = btn.closest(".galeria_de_servicos").querySelector(".galeria");
        console.log(btn.id);
        galeria.scrollLeft += btn.id.includes("left") ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    const galeria = e.currentTarget;
    galeria.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = galeria.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    const galeria = e.currentTarget;
    galeria.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    galerias.forEach(galeria => galeria.classList.remove("dragging"));
}

galerias.forEach(galeria => {
    galeria.addEventListener("mousedown", dragStart);
    galeria.addEventListener("mousemove", dragging);
});

document.addEventListener("mouseup", dragStop);