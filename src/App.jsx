import Header from './Header.jsx'
import './App.css'

function App() {
  const name = "Teboho"
  const products = [
    { id: 1, name: "Classic White Shirt", price: 350.00, quantity: 2 },
    { id: 2, name: "African Print Dress", price: 800.00, quantity: 1 },
    { id: 3, name: "Denim Jacket", price: 600.00, quantity: 1 },
  ]

  const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Header />
      <main className="container">
        <h1>Welcome, Mr/Mrs {name}</h1>
        <p>Discover premium fashion with Mpho Sefantsi Garments</p>

        <section className="products">
          <h2>Featured Products</h2>
          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>Price: M{product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
                <p><strong>Total: M{(product.price * product.quantity).toFixed(2)}</strong></p>
                <button className="btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section className="summary">
          <h2>Order Summary</h2>
          <p><strong>Total Price: M{total.toFixed(2)}</strong></p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </section>
      </main>
    </>
  )
}

export default App
