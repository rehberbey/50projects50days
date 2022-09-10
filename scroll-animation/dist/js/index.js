const boxes = document.querySelectorAll(".box");
function isVisible(box) {
    const boxBottomCoord = box.getBoundingClientRect().bottom;
    const windowHeight = document.documentElement.clientHeight;
    return boxBottomCoord <= windowHeight;
}
function toggleShowBoxes() {
    for (const box of boxes) {
        if (isVisible(box)) {
            box.classList.add("show");
            continue;
        }
        box.classList.remove("show");
    }
}
toggleShowBoxes();
addEventListener("scroll", toggleShowBoxes);
export {};
//# sourceMappingURL=index.js.map