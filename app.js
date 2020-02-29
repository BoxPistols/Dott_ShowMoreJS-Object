{
  const el = document.querySelector(".content");
  el.insertAdjacentHTML("beforeend", `<p>テスト：テスト${null}`);

  const numbers = [1, 4, 7, 8, 10];

  const evenNum = numbers.filter(num => {
    if (num % 2 === 0) {
      return true;
    } else return false;
  });

  el.insertAdjacentHTML("beforeend", `<h2>even：${evenNum}</h2>`);

}
