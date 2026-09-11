import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">Mpho Sefantsi Garments</div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="cart">
        🛒 Cart (0)
      </div>
    </header>
  )
}

export default Header
