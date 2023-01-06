import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Hotel</li>
                <li className="fListItem">Places of Intrest</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Luxury Hotels</li>
                <li className="fListItem">Meetings & Events</li>
                <li className="fListItem">Timeless Weddings</li>
                <li className="fListItem">Royal Villas</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Unique Places to Stay</li>
                <li className="fListItem">Riviews</li>
                <li className="fListItem">Travel Communities</li>
                <li className="fListItem">Seasonal and Holiday Deals</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Customer Service</li>
                <li className="fListItem">Terms & Conditions</li>
                <li className="fListItem">How we work</li>
                <li className="fListItem">Privacy & Cookie Statement</li>
            </ul>
        </div>
        <div className="fText">
        Copyright © 2022 BAE-SUMAR.com™. All rights reserved.
        </div>
    </div>
  )
}

export default Footer