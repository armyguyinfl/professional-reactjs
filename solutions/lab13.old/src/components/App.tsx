import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredList, setFilteredList] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("/data/products.json");
        const json = await response.json();
        setProducts(json);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    shuffleArray(products);
  }, [products]);

  useEffect(() => {
    if (filterCriteria === "Books Starting with P") {
      const filtered = products.filter((product) =>
        product.title.startsWith("P")
      );
      setFilteredList(filtered);
    }
  }, [filterCriteria]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function addToCart(id) {
    let newItems = [...itemsInCart, id];
    setItemsInCart(newItems);
  }

  function removeFromCart(idToRemove) {
    let newItems = itemsInCart.filter((id) => id !== idToRemove);
    setItemsInCart(newItems);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <Header />
      <button onClick={()=>setFilterCriteria("Books Starting with P")}>
        Only Show Books Start with P
      </button>
      <Main
        products={filteredList ? filteredList : products}
        itemsInCart={itemsInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;
