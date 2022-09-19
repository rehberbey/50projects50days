const jokeParagraph = document.getElementById("jokeParagraph");
const getJoke = document.getElementById("getJoke");

if (
    !(
        getJoke instanceof HTMLButtonElement &&
        jokeParagraph instanceof HTMLParagraphElement
    )
) {
    throw new Error("getJoke ve/veya jokeParagraph elementleri bulunamadı!");
}

type TJokeObj = {
    id: number;
    joke: string;
    status: number;
};

async function generateJoke(): Promise<TJokeObj | undefined> {
    try {
        const res = await fetch("https://icanhazdadjoke.com", {
            headers: {
                accept: "application/json",
            },
        });

        const jokeObj = await (res.json() as Promise<TJokeObj>);

        return jokeObj;
    } catch (error) {
        console.debug(error);
    }

    return undefined;
}

function writeJoke(): void {
    void generateJoke().then((jokeObj) => {
        (jokeParagraph as HTMLParagraphElement).innerText =
            jokeObj?.joke ??
            "Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy.";
    });
}

writeJoke();

getJoke.addEventListener("click", writeJoke);

export {};
