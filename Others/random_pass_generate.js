function generateRandomPassword() {
    let pass = "";
    let nums = "0123456789".split("");
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
        ""
    );
    let specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/".split("");
    let randArray = nums.concat(letters).concat(specialChars);
    let RandLength = Math.floor(Math.random() * (18 - 16 + 1)) + 16;

    for (let i = 0; i < RandLength; i++) {
        pass = pass.concat(
            randArray[Math.floor(Math.random() * randArray.length)]
        );
    }

    return pass;
}

let result = generateRandomPassword();
console.log(result);
