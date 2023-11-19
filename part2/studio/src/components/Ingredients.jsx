import recipedata from "./recipe.json";


function IngredientList() {
  const list = recipedata.map(data => {
    return data.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });
  });

   return (
    <div>
      {list}
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 