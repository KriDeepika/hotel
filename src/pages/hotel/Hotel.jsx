import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft,faCircleArrowRight,faCircleXmark,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://i.postimg.cc/GpbPDvvP/1.jpg",
    },
    {
      src: "https://i.postimg.cc/FsJxXr9S/2.jpg",
    },
    {
      src: "https://i.postimg.cc/C11jPYPz/3.jpg",
    },
    {
      src: "https://i.postimg.cc/t43t7BnC/4.jpg",
    },
    {
      src: "https://i.postimg.cc/HxhbFKR3/5.jpg",
    },
    {
      src: "https://i.postimg.cc/CKJGsd43/6.jpg",
    },
  ]


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">The Taj Mahal Palace</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Apollo Bunder, Mumbai, Maharashtra, 400 001, India</span>
          </div>
          <span className="hotelDistance">
            Fabulous – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper" >
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              The Taj Mahal Palace opened in Mumbai, then Bombay, in 1903, giving birth to the country’s first harbour landmark.
                  The recently trademarked flagship hotel overlooks the majestic Gateway of India.
                  This legendary hotel in Mumbai has played host to kings, dignitaries and eminent personalities from across the globe, 
                  and is acknowledged as a world leader in hospitality. 
                  Each of the rooms 285 rooms & suites are a striking blend of nostalgic elegance, rich history and modern facilities. 
                  Strategically located in Mumbai’s prime historical and commercial hub, 
                  The Taj Mahal Palace is walking distance from Colaba Causeway, known for its touristy tiny roadside shops. 
                  The city’s financial hub, parliament, stadium, offices and shopping districts are all located within close proximity; 
                  as is a flourishing art and heritage precinct with must visit museums, art galleries, churches and synagogues. 

              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a night stay!</h1>
              <span>
                Located in the real heart of Mumbai, A place
                perfect for your stay!!!
              </span>
              <h2>
                <b>₹ 28000</b> (per night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        < MailList />
        < Footer />
      </div>
    </div>
  );
};

export default Hotel;