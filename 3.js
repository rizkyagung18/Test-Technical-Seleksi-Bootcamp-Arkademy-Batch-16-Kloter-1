const triangle = angka => {
    let total = ""
    if (angka !== NaN && angka >= 0) {
        for(let i = 0; i < angka; i++) {
            for(let j = 0; j <= i; j++) {
                total += "#"
            } total += "\n"
        }
    } else {
        total += "Parameter harus angka dan positif!"
    } return total
}

//console.log(triangle(5));
