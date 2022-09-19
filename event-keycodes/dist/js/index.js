const main = document.querySelector("main");
const propsEvent = new Set(["key", "keyCode", "code"]);
if (!main) {
    throw new Error("Main ögesi bulunamadı!");
}
addEventListener("keydown", (event) => {
    main.innerHTML = "";
    for (const prop of propsEvent) {
        let propValue = event[prop];
        propValue = propValue === " " ? "Space" : propValue;
        main.insertAdjacentHTML("beforeend", `<div class="key">${String(propValue)}<small>event.${prop}</small></div>`);
    }
});
export {};
//# sourceMappingURL=index.js.map