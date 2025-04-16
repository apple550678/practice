const $ = (e) => document.querySelector(e)

function changeImage(index) {
  $('.player > img').src = `./images/TKU${index}.png`
}

function showTKU60() {
  $('.menu1 > ul').innerHTML = [1, 2, 3, 4, 5]
    .map(
      (val) => `
  <li onclick="changeImage(${val})">
  <a href="#">淡江大戲 ${val}</a>
  </li>`
    )
    .join('')
}

function clearMenu1All() {
  $('.player > img').src = `./images/TKU3.png`
  $('.menu1 > ul').innerHTML = ``
}

let apple = 2
