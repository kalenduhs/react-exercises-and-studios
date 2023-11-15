import './styles.css';

function Button() {

   function onLearnMore () {
      alert('Water is Wet');
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;