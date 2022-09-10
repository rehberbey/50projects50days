const boxes = document.querySelectorAll(".box");

/**
 * Kutunun altı, pencerenin yüksekliğinden küçük veya eşitse, kutu görünür.
 * @param {Element} box - Element - görünür olup olmadığını kontrol etmek istediğiniz element
 * @returns Boole değeri.
 */
function isVisible(box: Element): boolean {
    const boxBottomCoord = box.getBoundingClientRect().bottom;

    const windowHeight = document.documentElement.clientHeight;

    return boxBottomCoord <= windowHeight;
}

/**
 * Kutu görünüyorsa, ona 'show' sınıfını ekleyin, aksi takdirde 'show' sınıfını kaldırın.
 */
function toggleShowBoxes(): void {
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
