declare const main: HTMLElement | null;
declare const progressContainer: HTMLDivElement;
declare const menu: HTMLMenuElement | null | undefined;
declare const circles: NodeListOf<Element>;
declare const prevBtn: HTMLButtonElement;
declare const nextBtn: HTMLButtonElement;
declare class CircleEvent {
    private static readonly firstCircle;
    protected static get currentActiveCircle(): number;
    protected static set currentActiveCircle(circle: number);
    protected static calcProgressLine(): void;
    nextCircleHandle(): this;
    prevCircleHandle(): this;
}
declare const circleEvent: CircleEvent;
//# sourceMappingURL=index.d.ts.map