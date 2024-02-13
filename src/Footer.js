export default function Footer() {
  return (
    <footer>
      <div className="container scroll-in">
        <div className="foot top-side">
          <div className="productt">
            <h4>PRODUCT</h4>

            <li>
              <button>BAZAR World</button>
            </li>
            <li>
              <button>Women</button>
            </li>
            <li>
              <button>Men</button>
            </li>
          </div>

          <div className="company">
            <h4>COMPANY</h4>

            <li>
              <button>Fashion Shows</button>
            </li>
            <li>
              <button>Stories</button>
            </li>
            <li>
              <button>The House</button>
            </li>
            <li>
              <button>Work with us</button>
            </li>
          </div>

          <div className="assistance">
            <h4>ASSISTANCE</h4>

            <li>
              <button>Contact us</button>
            </li>
            <li>
              <button>Payment</button>
            </li>
            <li>
              <button>Delivery & Return</button>
            </li>
            <li>
              <button>FAQ</button>
            </li>
          </div>
        </div>

        <hr />

        <div className="foot bottom-side">
          <div className="follow">
            <h4>FOLLOW US</h4>
          </div>

          <div className="subscribe">
            <h4>SUBSCRIBE FOR EXCLUSIVE</h4>
            <form action="">
              <input className="email" type="email" placeholder="Your Email address" />
              <button>==&gt;</button>
            </form>
          </div>

          <div className="shipping">
            <li>
              Shipping To:
              <span className="country">
                <select name="" id="">
                  <option value="Canada">Canada</option>
                  <option value="Nigeria">Nigeria</option>
                </select>
              </span>
            </li>

            <li>
              Language:
              <span className="lang">
                <select name="" id="">
                  <option value="English">English</option>
                  <option value="Igbo">Igbo</option>
                </select>
              </span>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
}
