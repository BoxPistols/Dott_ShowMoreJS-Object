{
  const el = document.querySelector('.content')

  const otherScores = [22, 33, 44, 55] // 他の配列追加
  const scores = [80, 90, 40, 70, ...otherScores] // 末尾に配列追加
  console.log(`Score: ${scores}`)
  // scores.splice(0,1,120)
  // scores.push(111, 999)
  // scores.shift() // 単一

  for (let i = 0; i < scores.length ; i++) {
    el.insertAdjacentHTML('beforeend', (`<h2>Score ${i+1}: ${scores[i]}</h2>`) )
  }

  // 計算用の関数
  function sum(a, b, c, d){
    el.insertAdjacentHTML('beforeend', (`<h2> 合計： ${a + b + c + d}</h2>`) )
  }

  sum(...otherScores);
}
