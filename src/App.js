import { useState } from "react";
import Product from "./Product";
import apple from "./images/apple.png";
import orange from "./images/mikan.png";
import banana from "./images/banana.png";

function App() {

  const [cart, setCart] = useState({
    apple: 0,
    orange: 0,
    banana: 0,
  });

  const prices = {
    apple: 120,
    orange: 100,
    banana: 150,
  };

  const total =
    cart.apple * prices.apple +
    cart.orange * prices.orange +
    cart.banana * prices.banana;

  return (
  <div style={{
    backgroundColor: "#d0f0ff",  // ← 水色
    minHeight: "100vh",
    padding: "40px"
  }}>
    <h1>フルーツショップTSUKAMOTO</h1>

    <div style={{ display: "flex", gap: "30px" }}>

        <Product
          name="りんご"
          price={prices.apple}
          image={apple}
          quantity={cart.apple}
          setQuantity={(value) =>
            setCart({ ...cart, apple: value })
          }
        />

        <Product
          name="みかん"
          price={prices.orange}
          image={orange}
          quantity={cart.orange}
          setQuantity={(value) =>
            setCart({ ...cart, orange: value })
          }
        />

        <Product
          name="バナナ"
          price={prices.banana}
          image={banana}
          quantity={cart.banana}
          setQuantity={(value) =>
            setCart({ ...cart, banana: value })
          }
        />
<div
  style={{
    display: "flex",
    gap: "30px",
    alignItems: "flex-start"   // ← これ重要
  }}
>

<div
  style={{
    backgroundColor: "white",
    border: "2px solid black",
    padding: "20px",
    width: "200px",
    borderRadius: "10px",
    textAlign: "center"
  }}
>
  <div style={{ fontSize: "22px", fontWeight: "bold" }}>
    合計
  </div>

  <div style={{ fontSize: "22px", fontWeight: "bold" }}>
    ¥{total}
  </div>
</div>
        </div>

      </div>
    </div>
  );
}

export default App;
