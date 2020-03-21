const groupNumber = str => {
    let arr = []
    let number = str.match(/\d+/g).join("")
    if(number.length < 2) {
        return number
    } else {
        for(let i = 0; i < number.length; i += 3) {
            arr.push(number.substr(i, 3))
        }
        if(arr[arr.length-1].length === 1) {
            arr[arr.length-1] = arr[arr.length-2].charAt(2) + arr[arr.length-1]
            arr[arr.length-2] = arr[arr.length-2].charAt(0) + arr[arr.length-2].charAt(1)
        }
        return arr.join("-")
    }
}

// let test = groupNumber("993141 -1 1323 14-232")
// console.log(test)