
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countString = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countString
    countEl.textContent = 0
    count = 0
    // NB: Make sure to not delete the existing content of the paragraph
   /* This was my personal solution
    count = 0
    countEl.textContent = count
    */
}


