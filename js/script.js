const cat = document.querySelectorAll(".fa-angle-right");
const search = document.querySelector("#search");
const result = document.querySelector(".result");
const contact = document.querySelector("#btn-contact");
const contact2 = document.querySelectorAll("#btn-contact span");
const dropdown = document.querySelector(".dropdown-content");
const mobibtn = document.querySelector("._button");
const mobile = document.querySelector(".menu-mobile");
const filter1 = document.querySelector(".dropdown-filter");
const filter1_1 = document.querySelector(".filter-trigger");
const filter1_content = document.querySelector(".dropdown-filter ul");
const see_store = document.querySelector(".product-stock-status a");
const see_store_content = document.querySelector(".product-status-expanding");

window.addEventListener("click", function (event) {
  if (event.target !== search && result.classList.contains("active") === true) {
    result.classList.toggle("active");
  }

  if (
    event.target !== contact &&
    event.target !== contact2[0] &&
    event.target !== contact2[1] &&
    dropdown.classList.contains("active") === true
  ) {
    dropdown.classList.toggle("active");
  }
});

search.addEventListener("click", function () {
  result.classList.toggle("active");
});

contact.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});

cat.forEach((ele, index) => {
  cat[index].addEventListener("click", function () {
    cat[index].parentNode.parentNode.classList.toggle("active");
    cat[index].classList.toggle("rotate");
  });
});

mobibtn.addEventListener("click", function () {
  mobile.classList.toggle("active");
});

// filter1.addEventListener("click", function () {
//   filter1_content.classList.toggle("active");
// });

see_store.addEventListener("click", function () {
  see_store_content.classList.toggle("active");
});
