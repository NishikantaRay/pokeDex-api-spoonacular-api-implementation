const Recipes_container = document.getElementById('Recipes_container');
const Recipes_number = 12;

const fetchRecipes = async () => {
	for (let i = 1; i <= Recipes_number; i++) {
		await getRecipes(i);
	}
};


const getRecipes = async id => {
	const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=0a76bb8f541a4714bd927f93fbb69487`;
	const res = await fetch(url);
    const Recipes = await res.json();
    console.log(Recipes);
    createRecipesCard(Recipes);
};

function createRecipesCard(Recipes) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('Recipes');

	// const poke_types = pokemon.types.map(type => type.type.name);
	// const type = main_types.find(type => poke_types.indexOf(type) > -1);
	// const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	// const color = colors[type];
	
	// pokemonEl.style.backgroundColor = color;
    // alt="${name}"
    // <div class="info">
    //         <span class="number">#${pokemon.id
	// 						.toString()
	// 						.padStart(3, '0')}</span>
    //         <h3 class="name">${name}</h3>
    //         <small class="type">Type: <span>${type}</span></small>
    //     </div>
	const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://spoonacular.com/recipeImages/${Recipes.id}-556x370.jpg"  />
                        
        </div>
        
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	Recipes_container.appendChild(pokemonEl);
}

fetchRecipes();