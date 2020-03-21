const usernameCheck = username => {
    if(username.length < 5 || username.length > 7) {
        return false
    } else { 
        if(username.match(/([A-Z])/) || username.match(/([0-9])/) || username.match(/(\W|_)/)) {
            return false
        } else {
            return true
        }
    }
}

const passwordCheck = password => {
    if(password.length < 9 || password.length > 9) {
        return false
    } else {
        if(password.match(/([A-Z])/) && password.match(/([a-z])/) && password.match(/([0-9])/) && password.match(/(\u0040)/)) {
            return true
        } else {
            return false
        }
    }
}

// Untuk menjalankan :
//console.log(usernameCheck("diandra"))
// true
//console.log(passwordCheck("Kint4m@ni"))
// true