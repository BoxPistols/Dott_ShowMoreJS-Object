{
  const el = document.querySelector(".content");

  const otherScores = [22, 33, 44, 55]; // 他の配列追加
  const scores = [80, 90, 40, 70, ...otherScores]; // 末尾に配列追加

  for (let i = 0; i < scores.length; i++) {
    el.insertAdjacentHTML("beforeend", `<li>Score ${i + 1}: ${scores[i]}</li>`);
  }
  // 計算用の関数
  function sum(x, y, z, a) {
    el.insertAdjacentHTML("beforeend", `<h3> 合計： ${x + y + z + a}</h3>`);
  }
  sum(...scores);


  const [a,b, ...others] = scores
  el.insertAdjacentHTML("beforeend", `<h3> 分割代入： ${a} ${b} ${others}</h3>`);

  // scores.forEach(function(x) {
  //   document.write(x);
  // });
  //
  // const a = [1, 2, 3];
  // a.forEach((value, i) => {
  //   document.write(i, value);
  // });

}
