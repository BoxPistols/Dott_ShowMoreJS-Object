{
  const el = document.querySelector(".content");

  const otherScores = [22, 33, 44, 55]; // 他の配列追加
  const scores = [80, 90, 40, 70]; // 末尾に配列追加

  scores.forEach((x, index) =>{
    el.insertAdjacentHTML("beforeend", `<p> 評価：${index + 1} = ${x}</p>`);
  })
  // for (let i = 0; i < scores.length; i++) {
  //   el.insertAdjacentHTML("beforeend", `<li>Score ${i + 1}: ${scores[i]}</li>`);
  // }


}
