const randomInteger = (min, max) =>
    Math.floor(Math.random() * (max + 1 - min) + min)

const set = {}

for (let i = 0; i < 100; i++) {
    let rand = randomInteger(0, 10)
    set[rand] ? set[rand]++ : (set[rand] = 1)
}

console.log(set)
