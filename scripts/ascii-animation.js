const animationContainer = document.querySelector(".ascii-animation");

const nRows = 23
const nCols = 25

animationContainer.style.gridTemplateColumns = `repeat(${nCols}, 15px)`
animationContainer.style.height = `${nRows*15}px`
animationContainer.querySelectorAll(".animation-column").forEach(col => {
    col.style.gridTemplateRows = `repeat(${nRows}, 15px)`
})

for (let i = 0; i < nCols; i++) {
    const row = document.createElement("div");
    row.classList.add("animation-column");
    animationContainer.appendChild(row)

    for (let i = 0; i < nRows; i++) {
        const col = document.createElement("div");
        col.classList.add("block");
        const x = Math.floor((Math.random() * 94) + 33);
        col.textContent = String.fromCharCode(x)
        row.appendChild(col)
    }
}

let hashMap = {};

for (let i = 0; i < nCols; i++) {
    hashMap[i] = [0, 0].slice();
}

for (let i = 0; i < nCols; i++) {
    const bound1 = Math.floor((Math.random() * 16))
    hashMap[i][0] = bound1

    let bound2 = bound1 + Math.floor((Math.random() * 6))

    if (bound2 <= nRows) {
        bound2 = nRows - bound2 
    }

    hashMap[i][1] = bound2

    for (let j = bound1; j < bound2; j++) {
        

        animationContainer.querySelectorAll(".animation-column")[i].querySelectorAll(".block")[j].style.color = "black"
    }
}

setInterval(doThing, 50);

function doThing() {
    for (let i = 0; i < nCols; i++) {
        if (hashMap[i][0] == nRows) {
            hashMap[i][0] = 0
        }

        if (hashMap[i][1] == nRows) {
            hashMap[i][1] = 0
        }
        
        if (hashMap[i][0] < nRows) {
            let colour = "rgb(31, 31, 94)"
            if (document.querySelector(".animation-column").classList.contains("dark")) {
                colour = "greenyellow"
            }
            animationContainer.querySelectorAll(".animation-column")[i].querySelectorAll(".block")[hashMap[i][0]].style.color = colour
            hashMap[i][0]++
        }
    
        if (hashMap[i][1] < nRows) {
            let colour = "white"
            if (document.querySelector(".animation-column").classList.contains("dark")) {
                colour = "black"
            }
            animationContainer.querySelectorAll(".animation-column")[i].querySelectorAll(".block")[hashMap[i][1]].style.color = colour
            hashMap[i][1]++
        }
    }
}