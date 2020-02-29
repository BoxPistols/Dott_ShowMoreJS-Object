"use strict";

{
  const el = document.querySelector(".content");
  // el.insertAdjacentHTML("beforeend", `<p>テスト：テスト${null}`);

  const others = {
    r: 111,
    color: "red"
  };

  const point = {
    x: 100,
    y: 180,
    n: 120,
    ...others
  };

  point.x = 120;
  point.z = 90;

  // delete point.z
  // console.log(point)

  el.insertAdjacentHTML("beforeEnd", `<p>キーからプロパティを取得：${point.z}`);

  // for (var i = 0; i < Object.keys(point).length; i++) {
  //   el.insertAdjacentHTML(
  //     "beforeEnd",
  //     `<p>Obj：
  //     ${Object.keys(point)[i]}:
  //     ${Object.values(point)[i]}`
  //   );
  // }

  const keys = Object.keys(point);
  keys.forEach(key => {
    el.insertAdjacentHTML("beforeEnd", `<div class="fx"><p>Key：${key}</p> <p>Value：${point[key]}</p></div>`);
  });

}
