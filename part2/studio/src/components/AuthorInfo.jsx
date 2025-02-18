import recipedata from "./recipe.json";
import './styling.css';

function AuthorInfo() {
  const recipeAuthor = recipedata.map(data => {
    return <div key={data.name}>{data.author}</div>
  });

  const authorImage =recipedata.map(data => {
    return (
      <div key={data.name}>
        <img src={data.authorImage} alt={data.author} className="authorImage" />
      </div>
    );
  });

  const recipeWebsite = recipedata.map(data => {
    return <a key={data.name} href={data.website}>This is the Website</a>
  });


   return (
    <div>
      {authorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 