
const durationInput = document.querySelector("#duration")
const startButtom = document.querySelector("#start")
const pauseButtom = document.querySelector("#pause")
const circle = document.querySelector("#circle")
const perimeter = circle.getAttribute("r") * 2 * Math.PI
circle.setAttribute("stroke-dasharray", perimeter)
let currentOffset = 0;
const timer = new Timer(durationInput, startButtom, pauseButtom, {
    onStart(totaldurationinput) {
        console.log("Start counting")
        totalduration = totaldurationinput
    },
    onTick(timeremain) {
        circle.setAttribute("stroke-dashoffset", -(perimeter - (perimeter / totalduration * timeremain)));

    },
    onComplete() {
        console.log("Timer completed")
    }
})
