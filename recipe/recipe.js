const API_KEY = "0152c441a4c9415da644b3c9b15a9b7c";
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes) {
recipeListEl.innerHTML = ""
recipes.forEach((recipe) => {
  const recipeItemEl = document.createElement("li")
  recipeItemEl
})
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();
  return data.recipes;
}


async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes)
}

init();
