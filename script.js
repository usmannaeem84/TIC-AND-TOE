const boxes = document.querySelectorAll(".box")
const restartBtn = document.querySelector(".restart")
const result = document.querySelector(".result");
const container = document.querySelector(".container")


const WinnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]]


let Turn = true;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (Turn) {
            box.innerHTML = "O"
            box.classList.add("yellow")
            Turn = false;
        } else {
            box.innerHTML = "X"
            box.classList.add("blue")
            Turn = true;
        }
        box.disabled = true
        checkWinner()
    })


})


function disable() {
    for (const box of boxes) {
        box.disabled = true
    }
}


function enable() {
    for (const box of boxes) {
        box.disabled = false
    }
   
}

function restart() {

    for (let box of boxes) {
        box.innerHTML = ""
       
    }
result.innerHTML=""
result.classList.add("hide")
    enable()
    
    
    
}


function checkWinner() {
    
    for (const pattern of WinnerPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disable()

       
                result.innerHTML = ` Congratsulation ! Winner is ${pos1Val}`
                result.classList.remove("hide")
                result.classList.add("Result")

            }
        }
    }

    restartBtn.addEventListener("click", restart)

}

