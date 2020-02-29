{
  const el = document.querySelector(".content");
  // el.insertAdjacentHTML("beforeend", `<p>テスト：テスト${null}`);

  const point = {
    x: 100,
    y: 180,
    n: 120,
  };

  point.x = 120;
  point.z = 90;

  // delete point.z
  // console.log(point)

  el.insertAdjacentHTML("beforeEnd", `<p>キーからプロパティを取得：${point.z}`);

  for (var i = 0; i < Object.keys(point).length; i++) {
    el.insertAdjacentHTML(
      "beforeEnd",
      `<p>Object =
      ${Object.keys(point)[i]}:
      ${Object.values(point)[i]}`
    );
  }
}
