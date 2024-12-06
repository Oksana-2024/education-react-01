import Product from "./Product";
import products from "../products.json";

export default function App() {
  return (
    <div>
      <h1>Menu</h1>
      {products.map(({name, imgUrl, price}) => (
        <Product key={name} name={name} imgUrl={imgUrl} price={price} />
      ))}
    </div>
  );
}
