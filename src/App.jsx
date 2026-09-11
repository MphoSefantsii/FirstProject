import Header from './Header.jsx'
import './App.css'

function App() {
  const name = "Mpho"
  const price = 100
  const quantity = 4
  return(
    <>
    <Header/>
      <h1>Welcome, {name}</h1>
      <p>Learning and teaching React</p>
      <p>Total price is : {price * quantity}</p>
    </>
  )
}

export default App
