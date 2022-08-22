const main = document.querySelector("main");
const progressContainer = main?.querySelector(
    ".progress-container"
) as HTMLDivElement;
const menu = main?.querySelector("menu");

const circles = progressContainer.querySelectorAll(".circle");

const prevBtn = menu?.querySelector("button#prev") as HTMLButtonElement;
const nextBtn = menu?.querySelector("button#next") as HTMLButtonElement;

class CircleEvent {
    private static readonly firstCircle = 1;

    /**
     * CurrentActiveCircle tanımlanmışsa, onu bir sayı olarak döndürün, aksi takdirde firstCircle'ı bir
     * sayı olarak döndürün.
     * @returns Geçerli etkin çevre.
     */
    protected static get currentActiveCircle(): number {
        let currentActiveCircle: number | string | undefined =
            progressContainer.dataset["currentActiveCircle"];

        if (currentActiveCircle) {
            return Number(currentActiveCircle);
        }

        currentActiveCircle = CircleEvent.firstCircle;

        return currentActiveCircle;
    }

    /**
     * Bu işlev, currentActiveCircle değişkenini daire parametresinin değerine ayarlar.
     * @param {number} circle - Şu anda etkin olan çevre.
     */
    protected static set currentActiveCircle(circle: number) {
        progressContainer.dataset["currentActiveCircle"] = String(circle);
    }

    /**
     * İşlev, mevcut aktif daireye ve toplam daire sayısına göre ilerleme çizgisi boyutunu hesaplar.
     */
    protected static calcProgressLine(): void {
        const result = `${
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            ((CircleEvent.currentActiveCircle - 1) / (circles.length - 1)) * 100
        }%`;

        document.documentElement.style.setProperty(
            "--progress-line-size",
            result
        );
    }

    /**
     * Mevcut aktif daire toplam daire sayısından azsa, bir sonraki daireye 'aktif' sınıfını ekleyin,
     * ilerleme çizgisini hesaplayın ve mevcut aktif daire toplam daire sayısına eşitse, sonraki
     * devreyi devre dışı bırakın. düğmesine basın ve önceki düğmeyi etkinleştirin.
     * @returns Sınıf örneği.
     */
    public nextCircleHandle(): this {
        if (CircleEvent.currentActiveCircle < circles.length) {
            progressContainer
                .querySelector(
                    `.circle:nth-child(${++CircleEvent.currentActiveCircle})`
                )
                ?.classList.add("active");

            CircleEvent.calcProgressLine();

            if (CircleEvent.currentActiveCircle === circles.length) {
                nextBtn.disabled = true;
            }

            prevBtn.disabled = false;
        }

        return this;
    }

    /**
     * Aktif sınıfı mevcut çemberden kaldırır ve ardından ilerleme çizgisini hesaplar.
     * @returns Sınıfın kendisi.
     */
    public prevCircleHandle(): this {
        if (CircleEvent.currentActiveCircle > CircleEvent.firstCircle) {
            progressContainer
                .querySelector(
                    `.circle:nth-child(${CircleEvent.currentActiveCircle--})`
                )
                ?.classList.remove("active");

            CircleEvent.calcProgressLine();

            if (CircleEvent.currentActiveCircle === CircleEvent.firstCircle) {
                prevBtn.disabled = true;
            }

            nextBtn.disabled = false;
        }

        return this;
    }
}

const circleEvent = new CircleEvent();

/* Düğmelerin HTMLButtonElements olup olmadığını kontrol etmek ve eğer öyleyse, onlara olay
dinleyicileri eklemektir. */
if (
    prevBtn instanceof HTMLButtonElement &&
    nextBtn instanceof HTMLButtonElement
) {
    nextBtn.onclick = circleEvent.nextCircleHandle.bind(circleEvent);
    prevBtn.onclick = circleEvent.prevCircleHandle.bind(circleEvent);
}
