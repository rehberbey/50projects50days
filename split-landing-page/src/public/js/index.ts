const splitLeft = document.querySelector("section.split.left");
const splitRight = document.querySelector("section.split.right");

if (!(splitLeft instanceof HTMLElement && splitRight instanceof HTMLElement)) {
    throw new Error("split ögeleri bulunamadı!");
}

splitLeft.addEventListener("mouseenter", () => {
    splitRight.classList.add("shrink");
});

splitLeft.addEventListener("mouseleave", () => {
    splitRight.classList.remove("shrink");
});

splitRight.addEventListener("mouseenter", () => {
    splitLeft.classList.add("shrink");
});

splitRight.addEventListener("mouseleave", () => {
    splitLeft.classList.remove("shrink");
});

export {};
