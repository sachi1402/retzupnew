import React ,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import './PropertDetails.css'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import PropertyImageCarasole from '../../components/PropertyImageCarasole/PropertyImageCarasole'
import PropertyDiscription from '../../components/PropertyDiscription/PropertyDiscription'
import PropertyRating from '../../components/PropertyRating/PropertyRating'
import ProertyRatingCarasole from '../../components/PropertRatingCarasole/ProertyRatingCarasole'
import PropertyAminityes from '../../components/PropertAminityes/PropertyAminityes';
import PropertySleepDetails from '../../components/PropertySleep/propertySleepDetails'
import PropertyThingtoKnow from '../../components/PropertyThingtoKnow/PropertyThingtoKnow'
import PropertyHoastProfile from '../../components/PropertyHoastProfile/PropertyHoastProfile'
import Nav from '../../components/Navbar2/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
const PropertDetails = () => {
  const id = useParams();
  const [propertyData, setpropertyData] = useState({});
  const Navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  console.log("Authentication State:", authState);

  useEffect(() => {
    if (authState?.token == null) {
      // if (!authState?.token == null) {
      console.log("Authentication 2State:", authState);
      Navigate("/login");
    }
  }, [authState, Navigate]);

  useEffect(() => {
    console.log('working property details')
    const fetchListingData = async () => {
      try {
        const authToken = authState.token; // Replace with your actual auth token
        console.log('id',id)
        const response = await fetch(`http://api.reztup.com/api/listing/1`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log('hi details try block okk',data);
          setpropertyData(data);
          console.log("Listing data:", data);
        } else {
          console.log("Failed to fetch listing data", authState);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchListingData();
  }, []);
  return (
    <>
    {/* <div style={{'height':'100px' ,'width':'100vw','background':'blue' }}>  </div> */}
    <Nav/>
    <div className="propertDetails">
    <div className="propertDetails-right">
        <div className="propertDetails-r-pageindex">
          Home&nbsp; {">"} Category - Farms &nbsp; {'>'}&nbsp; <span>Property Details</span>
        </div>
        <PropertyImageCarasole />
        <PropertyDiscription/>
        <PropertyRating/>
        <ProertyRatingCarasole/>
        <PropertyAminityes/>
        <PropertySleepDetails/>
        <PropertyThingtoKnow/>
        <PropertyHoastProfile/>
        <div className="map">
        <h4>Location</h4>
        <iframe
        title="Google Maps"
        width="70%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11278.342253824207!2d-122.41941555019331!3d37.774929684643814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a3d70f23b7%3A0xe07d52a78c4e367!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1621148452512!5m2!1sen!2s"
        allowFullScreen
      ></iframe>
        </div>
    </div>
    <div className="propertDetails-left">
      <PropertyCard id='p-card'/>
    </div>
    </div>
    </>
  )
}

export default PropertDetails
