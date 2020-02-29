{
  const el = document.querySelector('.content')

  const score = [80, 90, 40, 70]
  console.log(`Score: ${score}`)

  for (let i = 0; i < score.length ; i++) {
    el.insertAdjacentHTML('afterbegin', (`<h2>Score: ${score[i]}</h2>`) )
  }
}
