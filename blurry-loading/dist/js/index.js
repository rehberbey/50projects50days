const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");
const loadingNumber = loadingText?.querySelector(".number");
let load = 0;
const loadEnd = 100;
if (!(bg instanceof HTMLElement &&
    loadingText instanceof HTMLElement &&
    loadingNumber instanceof HTMLElement)) {
    throw new Error("Yükleme animasyonu için ögeler bulunamadı!");
}
function getBlurValue(filter) {
    const matches = /(?<=blur\()\d+(?=px\))/iu.exec(filter);
    if (!matches)
        throw new Error("Blur değeri bulunamadı veya birimi px değil!");
    return Number(matches[0]);
}
const { filter: bgFilter } = getComputedStyle(bg);
const { opacity: loadingTextOpacity } = getComputedStyle(loadingText);
const blurNum = getBlurValue(bgFilter);
const opacityNum = parseFloat(loadingTextOpacity);
function calcDiscount(oldNumber, discountPercent) {
    return Number((oldNumber - (oldNumber * discountPercent) / 100).toFixed(2));
}
function loadSite() {
    load++;
    bg.style.filter = `blur(${calcDiscount(blurNum, load)}px)`;
    loadingText.style.opacity = `${calcDiscount(opacityNum, load)}`;
    loadingNumber.innerText = String(load);
}
let loadSiteTick;
function setupTick() {
    if (load === loadEnd) {
        clearTimeout(loadSiteTick);
        return;
    }
    const delay = 30;
    loadSiteTick = setTimeout(setupTick, delay);
    loadSite();
}
addEventListener("load", setupTick);
export {};
//# sourceMappingURL=index.js.map