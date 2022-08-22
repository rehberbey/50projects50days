"use strict";
const main = document.querySelector("main");
const progressContainer = main?.querySelector(".progress-container");
const menu = main?.querySelector("menu");
const circles = progressContainer.querySelectorAll(".circle");
const prevBtn = menu?.querySelector("button#prev");
const nextBtn = menu?.querySelector("button#next");
class CircleEvent {
    static firstCircle = 1;
    static get currentActiveCircle() {
        let currentActiveCircle = progressContainer.dataset["currentActiveCircle"];
        if (currentActiveCircle) {
            return Number(currentActiveCircle);
        }
        currentActiveCircle = CircleEvent.firstCircle;
        return currentActiveCircle;
    }
    static set currentActiveCircle(circle) {
        progressContainer.dataset["currentActiveCircle"] = String(circle);
    }
    static calcProgressLine() {
        const result = `${((CircleEvent.currentActiveCircle - 1) / (circles.length - 1)) * 100}%`;
        document.documentElement.style.setProperty("--progress-line-size", result);
    }
    nextCircleHandle() {
        if (CircleEvent.currentActiveCircle < circles.length) {
            progressContainer
                .querySelector(`.circle:nth-child(${++CircleEvent.currentActiveCircle})`)
                ?.classList.add("active");
            CircleEvent.calcProgressLine();
            if (CircleEvent.currentActiveCircle === circles.length) {
                nextBtn.disabled = true;
            }
            prevBtn.disabled = false;
        }
        return this;
    }
    prevCircleHandle() {
        if (CircleEvent.currentActiveCircle > CircleEvent.firstCircle) {
            progressContainer
                .querySelector(`.circle:nth-child(${CircleEvent.currentActiveCircle--})`)
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
if (prevBtn instanceof HTMLButtonElement &&
    nextBtn instanceof HTMLButtonElement) {
    nextBtn.onclick = circleEvent.nextCircleHandle.bind(circleEvent);
    prevBtn.onclick = circleEvent.prevCircleHandle.bind(circleEvent);
}
//# sourceMappingURL=index.js.map