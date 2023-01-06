import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="https://i.postimg.cc/2SjXhPLs/fpImg1.jpg" alt="" className="fpImg" />
        <span className="fpName"> Taj Rambagh Palace </span>
        <span className="fpCity">Jaipur</span>
        <span className="fpRate">⭐⭐⭐⭐⭐</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://i.postimg.cc/FK8WtzCv/fp-Img2-Shimla.jpg" alt="" className="fpImg" />
        <span className="fpName">Wildflower Hall</span>
        <span className="fpCity">Shimla</span>
        <span className="fpRate">⭐⭐⭐⭐⭐</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://i.postimg.cc/C18vw09q/fp-Img3-Udaipur.jpg" alt="" className="fpImg" />
        <span className="fpName">Taj Lake Palace</span>
        <span className="fpCity">Udaipur</span>
        <span className="fpRate">⭐⭐⭐⭐⭐</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://i.postimg.cc/L5MxX7M0/fp-Img4-Delhi.jpg" alt="" className="fpImg" />
        <span className="fpName">The Leela Palace</span>
        <span className="fpCity">New Delhi</span>
        <span className="fpRate">⭐⭐⭐⭐⭐</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperties