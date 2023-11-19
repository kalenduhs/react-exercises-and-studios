import recipedata from './recipe.json';
import './styling.css';

function RecipeImage() {
   const recipeImage = recipedata.map(data => {
    return <img key={data.name} src={recipeImage.recipeImage} alt={data.name} className='recipeImage' />
   });

   return (
    <div>
      {recipeImage}
    </div>
   )
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 