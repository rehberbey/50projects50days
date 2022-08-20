const figureElements = document.querySelectorAll(
    "main#picture-gallery > figure",
);

let lastEl: HTMLElement | null = document.querySelector(
    "main#picture-gallery > figure.active",
);

figureElements.forEach((figure) => {
    figure.addEventListener("pointerdown", function makeLargeImage(event) {
        const current = event.currentTarget as HTMLElement | null;

        if (
            !current ||
            current.classList.contains("active") ||
            lastEl === current
        )
            return;

        lastEl?.classList.remove("active");

        lastEl = current;

        current.classList.add("active");
    });
});
