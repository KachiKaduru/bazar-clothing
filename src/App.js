import Header from "./Header";
import CollectionSection from "./CollectionSection";
import Navigate from "./Navigate";
import Footer from "./Footer";
import "./main.css";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <CollectionSection />
      <Navigate />
      <Footer />
    </div>
  );
}

function Main() {
  return <h3 className="headd scroll-in">SHOP THE LATEST TRENDS WITH ZARA’S JUST IN COLLECTION</h3>;
}
