import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://i.postimg.cc/QdBPmj99/room.jpg" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">The Taj Mahal Palace</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
        India's First Luxury Hotel
        </span>
        <span className="siFeatures">
          • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          Lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Fabulous</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
        <span className="siTaxOp">Starting Price</span>
          <span className="siPrice">₹ 28000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;