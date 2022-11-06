class Timer {
    constructor(durationInput, startButtom, pauseButtom, callbacks) {
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.ontick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
        this.durationInput = durationInput;
        this.startButtom = startButtom;
        this.pauseButtom = pauseButtom;
        this.startButtom.addEventListener("click", this.start);
        this.pauseButtom.addEventListener("click", this.pause);

    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeleft)
        }
        this.tick();
        this.interval = setInterval(this.tick, 20)
    }
    pause = () => {
        clearInterval(this.interval);
    };
    tick = () => {

        if (this.timeleft <= 0) {
            this.pause()
            if (this.onComplete) { this.onComplete() }
        }
        else {
            if (this.ontick) {
                this.timeleft = parseFloat(this.durationInput.value) - 0.02;
                this.ontick(this.timeleft)
            }
        }

    }
    get timeleft() {
        return parseFloat(this.durationInput.value)
    }
    set timeleft(time) {
        this.durationInput.value = time.toFixed(2)
    }
}