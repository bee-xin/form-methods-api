import { useContext, useEffect } from "react";
import axios from "axios";
import { NewContext } from "../../Components/Context/DataContext";

function Home() {
  const { data, setData } = useContext(NewContext);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 flex flex-wrap justify-center">
      {data ? (
        data.map((product) => (
          <div
            key={product.id}
            className="w-60 p-4 border rounded shadow text-center m-2"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />
            <h2 className="mt-2 text-base font-bold">{product.title}</h2>
            <p className="text-gray-600">Rs {product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default Home;
