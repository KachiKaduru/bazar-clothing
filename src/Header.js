export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="ends">
            <li>
              <button className="current">Women</button>
            </li>
            <li>
              <button>Men</button>
            </li>
            <li>
              <button>Kids</button>
            </li>
          </div>

          <div className="logo">
            <h2>BAZAR</h2>
          </div>

          <div className="ends">
            <li>
              <button>Search</button>
            </li>
            <li>
              <button>Account</button>
            </li>
            <li>
              <button>Cart</button>
            </li>
          </div>
        </nav>

        <div className="hero">
          <h1 className="hero-h1">READY TO WEAR</h1>
        </div>
      </div>
    </header>
  );
}
