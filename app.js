"use strict";

{
  const el = document.querySelector(".content");
  // el.insertAdjacentHTML("beforeend", `<p>テスト：テスト${null}`);

  const str = "吉田かおり"
  // 文字数： str.length
  // 部分文字列： str.substring(2, 4)
  let end = str.length
  el.insertAdjacentHTML("beforeend", `<p>名前：
${str.substring(0, end - 1)}`);


/*------ join() split() --------*/
  const d = [2019, 11, 14];
  // 配列の連結UI
  el.insertAdjacentHTML("beforeend", `<p>日時： ${d} </p>`);
  el.insertAdjacentHTML("beforeend", `<p>日時 join('/')： ${d.join('/')} </p>`);
  el.insertAdjacentHTML("beforeend", `<p>日時 join('')： ${d.join('')} </p>`);

  const t = '17:08:24';
  el.insertAdjacentHTML("beforeend", `<p>時間： ${t} </p>`);
  el.insertAdjacentHTML("beforeend", `<p>時間 split(':')： ${t.split(':')} </p>`);

  const [hour, minute, second] = t.split(':');
  el.insertAdjacentHTML("beforeend", `<p>const [hour, minute, second] = t.split(':');</p><p>時間： ${hour}時${minute}分${second}秒 </p>`);

}
