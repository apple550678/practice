let c1 = 12
let c2 = 20
let f1 = (c1 * 9) / 5 + 32
let f2 = (c1 * 9) / 5 + 32

const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')

result1.textContent = `${c1}℃ = ${f1}°F`
result2.textContent = `${c2}℃ = ${f2}°F`
