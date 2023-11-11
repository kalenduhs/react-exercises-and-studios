export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/61BWsc9eGbL._SL1500_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91-Dqdv3a8L._SL1500_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/917Bc9C1MlL._SL1500_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Woman in Me" />
         <img src={book2} alt="The Exchange: After The Firm" />
         <img src={book3} alt="Iron Flame (The Empyrean, 2)" />
      </div>      
   );
}