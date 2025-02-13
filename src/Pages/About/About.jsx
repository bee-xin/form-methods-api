import { useContext } from "react";
import { NewContext } from "../../Components/Context/DataContext";

function About() {
  const { data } = useContext(NewContext);
  return (
    <div>
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

export default About;
