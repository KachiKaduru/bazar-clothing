import Collection from "./collection";
import "./images/image-1.png";
// const images = require.context("src/images", true);
// const imageList = images.keys().map((image) => images(image));

export default function CollectionSection() {
  return (
    <section className="collection-stn">
      <div className="container">
        <div className="sort">
          <p>Filters</p>
          <select name="sort" id="sort">
            <option value="">Sort By</option>
            <option value="tops">Tops</option>
            <option value="pants">Pants</option>
            <option value="footwears">Footwears</option>
            <option value="bags">Bags</option>
            <option value="gowns">Gowns</option>
          </select>
        </div>

        <CollectionsContainer />
      </div>
    </section>
  );
}

function CollectionsContainer() {
  return (
    <div className="collections-container">
      {Collection.map((item) => (
        <Item itemObj={item} />
      ))}
    </div>
  );
}

function Item({ itemObj }) {
  return (
    <div className="item">
      <div className="item-pic" style={{ backgroundColor: "goldenrod" }}></div>
      <div className="item-name">
        <p className="product">{itemObj.cloth} </p>
        <p className="price">N {Math.trunc(Number(itemObj.price) * 200)}.99</p>
      </div>
    </div>
  );
}
