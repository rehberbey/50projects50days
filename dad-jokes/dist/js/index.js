const jokeParagraph = document.getElementById("jokeParagraph");
const getJoke = document.getElementById("getJoke");
if (!(getJoke instanceof HTMLButtonElement &&
    jokeParagraph instanceof HTMLParagraphElement)) {
    throw new Error("getJoke ve/veya jokeParagraph elementleri bulunamadı!");
}
async function generateJoke() {
    try {
        const res = await fetch("https://icanhazdadjoke.com", {
            headers: {
                accept: "application/json",
            },
        });
        const jokeObj = await res.json();
        return jokeObj;
    }
    catch (error) {
        console.debug(error);
    }
    return undefined;
}
function writeJoke() {
    void generateJoke().then((jokeObj) => {
        jokeParagraph.innerText =
            jokeObj?.joke ??
                "Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy.";
    });
}
writeJoke();
getJoke.addEventListener("click", writeJoke);
export {};
//# sourceMappingURL=index.js.map