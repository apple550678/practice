import { data1 } from './data_02.js' // 引入資料

// $ 是簡化版的 querySelector
const $ = (e) => document.querySelector(e)

// 攝氏轉華氏
const cToF = (temp) => (temp * 9) / 5 + 32

// 渲染函式：將資料輸出到指定 class 的元素中
const render = (className, data) => {
  $(`.${className}`).innerHTML = `
    Array Statistics for ${className}<br>
    ${data.map((temp) => `${temp}°C = ${cToF(temp)}°F<br>`).join('')}
  `
}

// 初始資料輸出
render('result1', data1)

// 加入新資料
data1.push(31, 22, 45)

// 輸出更新後資料
render('result2', data1)
