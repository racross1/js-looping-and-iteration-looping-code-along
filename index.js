// Code your solutions in this file
function writeCards(names, eventName) {
    let arr = []
    for (let i = 0; i < names.length; i++) {
        arr[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    }
    return arr
}

function countDown(int) {
    let i = int
    while (i > -1) {
        console.log(i)
        i--
    }

}