const el = document.querySelector(".content");
el.insertAdjacentHTML("beforeend", `<p>テスト： ${null}</p>`)

const d = new Date()


el.insertAdjacentHTML("beforeend", `<p>テスト： ${d}</p>`)
