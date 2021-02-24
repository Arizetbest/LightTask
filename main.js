// let light = document.getElementById("OnButton")
let TurnOff = document.getElementById("OnButton").addEventListener("click", () => {

    document.getElementById("image").src = "images/onlight.jpg"
})
document.getElementById("OffButton").addEventListener("dblclick", function() {
    document.getElementById("image").src = "images/offlight.jpg"
})