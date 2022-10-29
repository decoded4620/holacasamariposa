export class CurrentPageTracker {
    private route: string = '/';

    constructor() {
    }

    public set(route: string) {
        this.route = route;
    }

    public get(): string {
        return this.route;
    }
}

export interface CurrentPageState {
    topContentHeight: number;
}

export const defaultCurrentPageTracker = new CurrentPageTracker();
export const defaultCurrentPageState: CurrentPageState = {
    topContentHeight: 64
};