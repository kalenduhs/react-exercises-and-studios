import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    const authorLink = 'https://www.joshuaweissman.com/post/homemade-texas-queso';
    const authorPhoto = 'https://imageio.forbes.com/specials-images/imageserve/612ced89280ceec30be9f803/Courtesy-of-Vicram-Chatterjee/0x0.jpg?format=jpg&crop=1477,1187,x0,y0,safe&width=960';
    const authorName = 'Joshua Weissman';

    return (
        <div className= {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Joshua Weissman" className= {styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render () {
        return (
            <div> 
                <div>
                    <h1>Homemade Queso Dip</h1>
                    <p>A tasty, easy, cheesy dip that everyone will love</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;