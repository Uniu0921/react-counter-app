function Product({ name, price, image, quantity, setQuantity }) {
  return (
    <div
      style={{
        backgroundColor: "white",   // ← これ追加
        border: "1px solid gray",
        padding: "20px",
        width: "200px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
   <img
  src={image}
  alt={name}
  style={{
    width: "150px",
    height: "150px",       // ← 高さも固定
    objectFit: "cover",    // ← はみ出しをきれいに調整
    borderRadius: "8px"
  }}
/>

      <h3>{name}</h3>
      <p>価格: ¥{price}</p>

      <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
        −
      </button>

      <span style={{ margin: "0 15px" }}>{quantity}</span>

      <button onClick={() => setQuantity(quantity + 1)}>
        ＋
      </button>

      <p>小計: ¥{price * quantity}</p>
    </div>
  );
}

export default Product;
