{
  const el = document.querySelector(".content");
  el.insertAdjacentHTML("beforeend", `<p>テスト：テスト${null}`);

  const numbers = [1, 4, 7, 8, 9, 10];

  // const evenNum = numbers.filter(num => {
  //   if (num % 2 === 0) {
  //     return true;
  //   } else return false;
  // });

  // 式自体を return
  // const evenNum = numbers.filter(num => {
  //   return num % 3 === 0;
  // });

  // さらに短く
  const evenNum = numbers.filter(num => num % 3 === 0)
  
  el.insertAdjacentHTML("beforeend", `<h2>even：${evenNum}</h2>`);
}
