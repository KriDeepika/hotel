import Featured from "../../components/featured/Featured"
import Dest from "../../components/dest/Dest"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import "./home.css"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      < Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">POPULAR DESTINATIONS</h1>
        <Featured />
        <Dest />
        <h1 className="homeTitle">OUR ANCILLARY SERVICES</h1>
        <PropertyList />
        <h1 className="homeTitle">STORIES FROM THE HEART</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home