function counting() {
    let countstart = document.getElementById('inc')
    let update = countstart.innerText
    let updated = parseInt(update) + 1
     countstart.innerText = updated
    console.log("clicked...")
}
function decrement() {
    let countstart = document.getElementById('inc')
    let update = countstart.innerText
    let updated = update>0? parseInt(update) -1 : 0;
     countstart.innerText = updated
    console.log("clicked...")
}
function reset(){
    let countstart = document.getElementById('inc')
    countstart.innerText = 0
}
