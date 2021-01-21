const cat = document.querySelectorAll(".fa-angle-right");
const search = document.querySelector("#search");
const result = document.querySelector(".result");
const contact = document.querySelector("#btn-contact");
const contact2 = document.querySelectorAll("#btn-contact span");
const dropdown = document.querySelector(".dropdown-content");

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

console.log(contact2);

search.addEventListener("click", function () {
  result.classList.toggle("active");
});

contact.addEventListener("click", function () {
  dropdown.classList.toggle("active");
  console.log(1);
});

cat.forEach((ele, index) => {
  cat[index].addEventListener("click", function () {
    cat[index].parentNode.parentNode.classList.toggle("active");
    cat[index].classList.toggle("rotate");
  });
});
