// Initialize a count-el as 0

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count

}




let saveEl = document.getElementById("save-el")

function save() {
    let countStr = count + "-"

    saveEl.textContent += countStr

    count = 0
    countEl.textContent = count

}