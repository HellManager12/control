const doall = () => {
  let L, k, m, v, u, result;
  L = document.getElementById("L").value / 100;
  k = document.getElementById("k").value;
  m = document.getElementById("m").value;
  v = document.getElementById("v").value;
  u = document.getElementById("u").value;
  result = formula(L, k, m, v, u);
  doresult(L, k, m, v, u, result);
  // Вместо алерт сделать функцию вывода результата
  // Завтра не сделаешь чмом будешь, тупица
};
// не забыть первести см в метры
const formula = (L, k, m, v, u) => {
  const g = 10;
  const pi = 3.14;
  let result = (L * k - u * m * g) / (k - 4 * (pi ** 2 * v ** 2 * m));
  result = Math.round(result * 100) / 100;
  return result;
};

const doresult = (L, k, m, v, u, result) => {
  const g = 10;
  document.body.appendChild(blockvivod);
  blockvivod.appendChild(table);
  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  table.appendChild(tr1);
  td4.innerHTML =
    "L = " +
    L * 100 +
    " См" +
    "<br>" +
    "k = " +
    k +
    " Н/М" +
    "<br>" +
    "m = " +
    m +
    " кг" +
    "<br>" +
    "v = " +
    v +
    " Гц" +
    "<br>" +
    "u = " +
    u;
  tr2.appendChild(td4);
  td5.innerHTML = L + " М";
  tr2.appendChild(td5);
  td6.innerHTML =
    '<img src="fizika112.svg"> <p>R<sub>min</sub> = (kL-umg)/(k-4π<sup>2</sup>v<sup>2</sup>m) = (' +
    k +
    "*" +
    L +
    " - " +
    u +
    "*" +
    m +
    "*" +
    g +
    ")/(" +
    k +
    " - 4*3.14<sup>2</sup>*" +
    v +
    "<sup>2</sup>*" +
    m +
    ")" +
    " ≈ " +
    result +
    "</p>";
  tr2.appendChild(td6);
  table.appendChild(tr2);
  p.innerHTML = "Ответ: ≈ " + result + " М";
  blockvivod.appendChild(p);
};
const blockvivod = document.createElement("div");
blockvivod.setAttribute("class", "vivod");
const table = document.createElement("table");
table.setAttribute("id", "tablichka");
const tr1 = document.createElement("tr");
const tr2 = document.createElement("tr");
const td1 = document.createElement("th");
td1.setAttribute("class", "tdtop tdleft");
td1.innerHTML = "Дано ";
const td2 = document.createElement("th");
td2.setAttribute("class", "tdtop tdleft");
td2.innerHTML = "Си ";
const td3 = document.createElement("th");
td3.setAttribute("class", "tdtop ");
td3.innerHTML = "Решение ";
const td4 = document.createElement("td");
td4.setAttribute("class", "tdleft");
const td5 = document.createElement("td");
td5.setAttribute("class", "tdleft");
const td6 = document.createElement("td");
const p = document.createElement("p");
//поставить в ксс границу снизу и справа, и заполнить все данными, подключить картинку я думаю не сложно
