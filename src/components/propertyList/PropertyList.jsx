import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://i.postimg.cc/yx9PD9X6/Hotel.jpg" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Luxury Hotels</h1>
                <h2>50 Properties</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://i.postimg.cc/v86X2FFR/Meetings-Events.jpg" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Meetings & Events</h1>
                <h2>50 Properties</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://i.postimg.cc/Dyk6tjnS/Timeless-Weddings.png" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Timeless Weddings</h1>
                <h2>50 Properties</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://i.postimg.cc/T2HRJsMW/Villas.jpg" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Royal Villas</h1>
                <h2>50 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList