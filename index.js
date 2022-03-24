const fs = require("fs");

if (!fs.existsSync("./MyFunnyFolder")) {
    fs.mkdir("./MyFunnyFolder", (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
} else {
    fs.rmdir("./MyFunnyFolder", (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
}

if (!fs.existsSync("./What/isThis.txt")) {
    fs.mkdir("./What", (err) => {
        if (err) {
            console.log(err)
            return
        }
    })

    fs.writeFile("./What/isThis.txt", "", (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
}