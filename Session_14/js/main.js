let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");
let resultArea = document.querySelector(".search-result");
let modalArea = document.querySelector(".recipe-modal");
let closeModalBtn = document.querySelector(".close-modal");
let info = document.querySelector("#info");
let loading = document.getElementById("loading");

searchBtn.addEventListener("click", getRecipes);
closeModalBtn.addEventListener("click", closeModal);

// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
let recepi_url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

function getRecipes() {
  loading.style.display = "block";
  resultArea.innerHTML = "";
  fetch(recepi_url + searchInput.value)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      drawReceipsData(data); // {meals: [{}, {}, {}]}
    });
}

function drawReceipsData(receips) {
  searchInput.value = "";
  loading.style.display = "none";
  if (receips.meals) {
    receips.meals.forEach(function (item) {
      resultArea.innerHTML += `
        <div class="result-item">
            <div class="search-img">
                <img src="${item.strMealThumb}" alt="" />
            </div>
            <div class="search-info">
                <h3>${item.strMeal}</h3>
                <a class="desc-item-btn" onclick="getReceipDetails(${item.idMeal})"> Get Description</a>
            </div>
        </div>
        `;
    });
  } else {
    resultArea.innerHTML = " No Data ";
  }
}

function getReceipDetails(id) {
  //   https://www.themealdb.com/api/json/v1/1/lookup.php?i=53016

  let desc_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  fetch(desc_url + id)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      drawRecipeInfo(data); // {meals: [{}]} // data.meals[0] // {meal: {}}
      modalArea.style.display = "block";
    });
}

function closeModal() {
  modalArea.style.display = "none";
}

function drawRecipeInfo(data) {
  let meal = data.meals[0];
  info.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <p>${meal.strInstructions}</p>
    <img src="${meal.strMealThumb}" alt="" />
    <a href="${meal.strYoutube}"> Youtube </a>
  `;
}
