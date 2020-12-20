import Navbar from "./parts/navbar/navbar";

export default function Product() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="product">
          <h1>Ini Product</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
