"use strict";

{
  const el = document.querySelector(".content");
  // el.insertAdjacentHTML("beforeend", `<p>テスト： ${null}</p>`);

  /*------ 数値計算 --------*/

  const scores = [10, 3, 9];

  // 形容の変数を置く
  let sum = 0;

  scores.forEach(score => {
    sum += score;
  });

  el.insertAdjacentHTML(
    "beforeend",
    `<p>forEach 計算：${scores.length}件：　合計 ${sum}</p>`
  );

  const avg = sum / scores.length;

  el.insertAdjacentHTML("beforeend", `<p>forEach 平均：${avg.toFixed(2)}</p>`);
  /*
    少数点 切り捨て Math.floor(avg)
    少数点 切り上げ Math.ceil(avg)
    少数点 四捨五入 Math.round(avg)
    少数点 num桁表示 avg.Math.toFixed(3)
  */

  /*
  console.log(Math.random()); 0以上1未満

  0, 1, 2
  Math.floor(Math.random() * 3)

  0, ..., n
  Math.floor(Math.random() * (n + 1))

  min, ..., max
  Math.floor(Math.random() * (max + 1 - min)) + min
  el.insertAdjacentHTML("beforeend", `<h3>ランダム</h3>`);
  console.log(Math.floor(Math.random() * 6) + 1);
*/

  el.insertAdjacentHTML(
    "beforeend",
    `<h3>サイコロ ランダム：　${Math.floor(Math.random() * 6) + 1}</h3>`
  );
}
