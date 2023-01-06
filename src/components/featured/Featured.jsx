import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://i.postimg.cc/4NWYgjZw/Jaipur.jpg" alt="" className="featuredImg" role="presentation"  />
            <div className="featuredTitles">
                <h1>Jaipur</h1>
                <h2>10 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://i.postimg.cc/YqrvTtch/New-Delhi.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>10 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://i.postimg.cc/y6XJfkbM/Kerala.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Kerala</h1>
                <h2>10 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured