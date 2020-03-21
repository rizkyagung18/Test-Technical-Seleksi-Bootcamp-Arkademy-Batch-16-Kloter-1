const longest = word => {
    let final = ""
    let words = word.split(" ")
    for(let i = 0; i < words.length;i++) {
        if(words[i].length > final.length) {
            final = words[i]
        }
    } return final
}

//console.log(longest("Halo Arkademian"))