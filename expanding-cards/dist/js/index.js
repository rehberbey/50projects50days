"use strict";
const figureElements = document.querySelectorAll("main#picture-gallery > figure");
let lastEl = document.querySelector("main#picture-gallery > figure.active");
figureElements.forEach((figure) => {
    figure.addEventListener("pointerdown", function makeLargeImage(event) {
        const current = event.currentTarget;
        if (!current ||
            current.classList.contains("active") ||
            lastEl === current)
            return;
        lastEl?.classList.remove("active");
        lastEl = current;
        current.classList.add("active");
    });
});
//# sourceMappingURL=index.js.map