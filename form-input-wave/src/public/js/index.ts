const labels: NodeListOf<HTMLLabelElement> = document.querySelectorAll(
    "#login-form > form > .form-control > label"
);
const delay = 50;

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map(
            (letter, index) =>
                `<span style="transition-delay: ${
                    index * delay
                }ms">${letter}</span>`
        )
        .join("");
});

export {};
