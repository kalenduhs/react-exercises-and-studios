import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ['Clean bathroom', 'Complete React 1 & 2', 'Meal Prep'];

      return(
         <div class="chores">
            <h3 className = {classes.choresHeading}>Today's Chores</h3>
            <ul>
               <li className = {classes.choresText}>{chores[0]}</li>
               <li className = {classes.choresText}>{chores[1]}</li>
               <li className = {classes.choresText}>{chores[2]}</li>
            </ul>
         </div>);
   }
}

export default ChoresList;