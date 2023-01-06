import "./dest.css"

const Dest = () => {
  return (
    <div className="dest">
        <div className="destItem">
            <img src="https://i.postimg.cc/RZqNVGZm/Shimla.png" alt="" className="destImg" />
            <div className="destTitles">
                <h1>Shimla</h1>
                <h2>10 Properties</h2>
            </div>
        </div>
        <div className="destItem">
            <img src="https://i.postimg.cc/Hn2VjhMY/Mumbai.png" alt="" className="destImg" />
            <div className="destTitles">
                <h1>Mumbai</h1>
                <h2>10 Properties</h2>
            </div>
        </div>
        <div className="destItem">
            <img src="https://i.postimg.cc/k49yZDxB/Goa.jpg" alt="" className="destImg" />
            <div className="destTitles">
                <h1>Goa</h1>
                <h2>10 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Dest