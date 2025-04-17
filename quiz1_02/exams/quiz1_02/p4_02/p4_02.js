import menu_xx from './data_02.js'

// 工具：快速選擇 DOM 元素
const $ = (selector) => document.querySelector(selector)

// 渲染分類按鈕（只呈現，不加功能）
function renderButtons(menu) {
  // 收集所有分類名稱
  const categories = ['all', ...new Set(menu.map((item) => item.category))]

  // 把每個分類轉成按鈕 HTML
  const btnHTML = categories
    .map((category) => {
      return `<button class="filter-btn" type="button">${category}</button>`
    })
    .join('')

  // 插入到畫面上 .btn-center 的位置
  $('.btn-center').innerHTML = btnHTML
}

// 渲染 menu 項目
function renderMenu(menu) {
  const menuHTML = menu
    .map((item) => {
      return `
        <article class="menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>
      `
    })
    .join('')

  // 插入資料到 .menu-center
  $('.menu-center').innerHTML = menuHTML
}

// 執行：渲染按鈕與 menu
renderButtons(menu_xx)
renderMenu(menu_xx)

// import menu_xx from './data_02.js'

// // 工具函式：快速選擇 DOM 元素
// const $ = (selector) => document.querySelector(selector)

// // 渲染分類按鈕（含互動功能）
// function renderButtons(menu) {
//   const categories = ['all', ...new Set(menu.map((item) => item.category))]
//   const btnHTML = categories
//     .map(
//       (category) => `
//     <button class="filter-btn" type="button" data-id="${category}">${category}</button>
//   `
//     )
//     .join('')
//   $('.btn-center').innerHTML = btnHTML

//   // 加上分類點擊事件
//   const buttons = document.querySelectorAll('.filter-btn')
//   buttons.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       const category = e.currentTarget.dataset.id
//       const filteredMenu =
//         category === 'all'
//           ? menu
//           : menu.filter((item) => item.category === category)
//       renderMenu(filteredMenu)
//     })
//   })
// }

// // 渲染菜單項目
// function renderMenu(menu) {
//   const menuHTML = menu
//     .map(
//       (item) => `
//     <article class="menu-item">
//       <img src="${item.img}" class="photo" alt="${item.title}" />
//       <div class="item-info">
//         <header>
//           <h4>${item.title}</h4>
//           <h4 class="price">$${item.price}</h4>
//         </header>
//         <p class="item-text">${item.desc}</p>
//       </div>
//     </article>
//   `
//     )
//     .join('')
//   $('.menu-center').innerHTML = menuHTML
// }

// // 一開始載入全部內容
// renderButtons(menu_xx)
// renderMenu(menu_xx)
