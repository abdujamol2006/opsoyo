const darkmodeBtn = document.querySelector("#darkmodeBtn");
const darkmodeImg = document.querySelector("#darkmodeImg");
darkmodeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    darkmodeBtn.lastChild.textContent = "Light mode";
    darkmodeImg.setAttribute("src", "./images/sun.png");
  } else {
    document.body.classList.add("light");
    darkmodeBtn.lastChild.textContent = "Dark mode";
    darkmodeImg.setAttribute("src", "./images/moon.png");
  }
});
//Form
const searchInp = document.getElementById("searchInp");
const submitBtn = document.getElementById("submitBtn");
const productList = document.getElementById("productList");
submitBtn.addEventListener("click", () => {
  let text = searchInp.value;
  searchInp.value = "";
  productList.innerHTML += `<li>${text}</li>`;
});
let text = searchInp.value;
productList.addEventListener("dblclick", () => {
  productList.textContent = "";
});
