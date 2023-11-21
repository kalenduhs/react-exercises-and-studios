import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: "Appetizer", value: 0}, {label: "Entree", value: 1}, {label: "Dessert", value: 2}];

   const [boardName, setName] = useState('no boards yet!')

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map(data => {
            return (
               <option value={data.label}>{data.label}</option>
            )
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
