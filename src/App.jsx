import Header from './Header.jsx'
import './App.css'

function App() {
  const name = "Teboho"
  const price = 100.00
  const quantity = 4
  return(
    <>
    <Header/>
      <h1>Welcome,Mr/Mrs {name}</h1>
      <p>Learning and teaching React</p>
      <p>Total price is : {price * quantity}</p>
    </>
  )
}

export default App
