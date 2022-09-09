const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");
const loadingNumber = loadingText?.querySelector(".number");
let load = 0; /* Yükleme yüzdesi */
const loadEnd = 100; /* Yükleme bitiş yüzdesi */

if (
    !(
        bg instanceof HTMLElement &&
        loadingText instanceof HTMLElement &&
        loadingNumber instanceof HTMLElement
    )
) {
    throw new Error("Yükleme animasyonu için ögeler bulunamadı!");
}

function getBlurValue(filter: string): number {
    const matches = /(?<=blur\()\d+(?=px\))/iu.exec(filter);

    if (!matches)
        throw new Error("Blur değeri bulunamadı veya birimi px değil!");

    return Number(matches[0]);
}

const { filter: bgFilter } = getComputedStyle(bg);
const { opacity: loadingTextOpacity } = getComputedStyle(loadingText);

const blurNum = getBlurValue(bgFilter);
const opacityNum = parseFloat(loadingTextOpacity);

function calcDiscount(oldNumber: number, discountPercent: number): number {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return Number((oldNumber - (oldNumber * discountPercent) / 100).toFixed(2));
}

function loadSite(): void {
    load++;

    (bg as HTMLElement).style.filter = `blur(${calcDiscount(blurNum, load)}px)`;
    (loadingText as HTMLElement).style.opacity = `${calcDiscount(
        opacityNum,
        load
    )}`;

    (loadingNumber as HTMLElement).innerText = String(load);
}

let loadSiteTick: number;

function setupTick(): void {
    if (load === loadEnd) {
        clearTimeout(loadSiteTick);

        return;
    }

    const delay = 30;

    loadSiteTick = setTimeout(setupTick, delay);

    loadSite();
}

addEventListener("load", setupTick);
