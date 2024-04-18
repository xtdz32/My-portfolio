// Code to set countdown timer until site is ready

let timer = document.getElementById("timer")
let launchDate = new Date("2024-04-29T00:00:00").getTime()
console.log(launchDate);

let Frank = setInterval(function(){
    let currentTime = new Date().getTime()
    let remainingTime = launchDate - currentTime

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor ((remainingTime % (1000 * 60)) / 1000)
    timer.innerHTML = `${days} Days: ${hours} Hours: ${minutes} Minutes: ${seconds} Seconds:`
    
}, 1000)
