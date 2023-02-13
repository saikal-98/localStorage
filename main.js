// Local Storage. Classwork

// Задание №1
// Создайте  корзину с инпутами - продукт, категория, стоимость, доставка, значение которых будет автоматически сохраняться при каждом их изменении. Последнее введённое значение должно сохраняться если пользователь закроет и заново откроет страницу.
let product = document.querySelector(".product");
let category = document.querySelector(".category");
let price = document.querySelector(".price");
let delivery = document.querySelector(".delivery");
let save = document.querySelector(".save");
let list = document.querySelector(".list");
save.addEventListener("click", () => {
  if (
    !product.value.trim() ||
    !category.value.trim() ||
    !price.value.trim() ||
    !delivery.value.trim()
  ) {
    alert("заполните поле");
    return;
  }
  let obj = {
    product: product.value,
    category: category.value,
    price: price.value,
    delivery: delivery.value,
  };
  setItemToStorage(obj);
  createElement();
  product.value = "";
  category.value = "";
  price.value = "";
  delivery.value = "";
});
function setItemToStorage(task) {
  if (!localStorage.getItem("tasks-data")) {
    localStorage.setItem("tasks-data", "[]");
  }
  let data = JSON.parse(localStorage.getItem("tasks-data"));
  data.push(task);
  localStorage.setItem("tasks-data", JSON.stringify(data));
}
createElement();
function createElement() {
  let newData = JSON.parse(localStorage.getItem("tasks-data"));
  list.innerHTML = "";
  newData.forEach((item, index) => {
    let li = document.createElement("li");
    let btnDelete = document.createElement("button");
    let btnEdit = document.createElement("button");
    li.innerText = `${item.product}, ${item.category}, ${item.price}, ${item.delivery} `;
    btnDelete.innerText = "Delete";
    btnEdit.innerText = "Edit";
    li.append(btnDelete);
    li.append(btnEdit);
    list.append(li);

    btnDelete.addEventListener("click", () => {
      deleteElement(index);
    });
  });
}
function deleteElement(id) {
  let data = JSON.parse(localStorage.getItem("tasks-data"));
  data.splice(id, 1);
  localStorage.setItem("tasks-data", JSON.stringify(data));
  setItemToStorage();
}
// createElement();
let lastResult = JSON.parse(localStorage.getItem("tasks-data"));
// console.log(lastResult);
let last = lastResult[lastResult.length - 1];
product.value = last.product;
category.value = last.category;
price.value = last.price;
delivery.value = last.delivery;

// Задание №2
// Создайте форму обратной связи используя  селекторы, события и localStorage
// Например форма должна содержать поля - имя, имейл, сообщение, кнопки отправить и очистить

// let name = document.querySelector(".name");
// let post = document.querySelector(".post");
// let message = document.querySelector(".message");
// let send = document.querySelector(".send");
// let clear = document.querySelector(".clear");
// let list1 = document.querySelector(".list1");
// // console.log(name, post, message, send, clear);
// send.addEventListener("click", () => {
//   if (!name.value.trim() || !post.value.trim() || !message.value.trim()) {
//     alert("заполните поля");
//     return;
//   }
//   let obj = {
//     name: name.value,
//     post: post.value,
//     message: message.value,
//   };
//   setItemToStorage(obj);
//   createElement1();
// });
// function setItemToStorage(task) {
//   if (!localStorage.getItem("info")) {
//     localStorage.setItem("info", "[]");
//   }
//   let information = JSON.parse(localStorage.getItem("info"));
//   information.push(task);
//   localStorage.setItem("info", JSON.stringify(information));
// }
// function createElement1() {
//   newInfo = JSON.parse(localStorage.getItem("info"));
//   list1.innerHTML = "";
//   newInfo.forEach((item) => {
//     let li = document.createElement("li");
//     li.innerText = item.name + " " + item.post + " " + item.message + " ";
//     list1.append(li);
//   });
// }
// createElement1();
// clear.addEventListener("click", () => {
//   localStorage.clear();
// });

// ! Чтобы проверить первое задание закоментируйте второй, и так же со вторым
// ! спасибо за понимание :)
