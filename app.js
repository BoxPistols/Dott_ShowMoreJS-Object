{
  const el = document.querySelector('.content')

  const score = [1, 2, 3]
  console.log(`Score: ${score}`)

  for (let i = 0; i < score.length ; i++) {
    el.insertAdjacentHTML('afterbegin', (`<h2>Score: ${score[i]}</h2>`) )
  }
}
