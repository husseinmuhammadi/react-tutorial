import React from "react";
import Logo from "./Logo";
import Accounts from "./Accounts";
import ProductContainer from "./productContainer";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-4" style={{ border: '1px solid blue' }}>
        <div className="col-7" style={{ border: '1px solid red' }}>
          <button className="btn btn-primary">Click me</button>
        </div>
        <div className="col-5" style={{ border: '1px solid' }}>
          <Logo />
        </div>
      </div>
      <ProductContainer />
    </div>
  )
}

export default App;