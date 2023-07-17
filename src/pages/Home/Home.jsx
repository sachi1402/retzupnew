import React, { useEffect, useState } from "react";
import "./home.scss";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/HomeBanner/Slider";
import Card from "../../components/Card/Card.jsx";
// import { fetchListingData } from "../../redux/Actions/ListingAction";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/index'
import Card2 from "../../components/test card/card2";


import img1 from './../../../public/temp propertimg/l1.png'
import img2 from './../../../public/temp propertimg/l2.png'
import img3 from './../../../public/temp propertimg/l3.png'
import img4 from './../../../public/temp propertimg/l4.png'
import CatagoryModel from "../../components/CatogaryModel/CatagoryModel";
import HomeCatbtn from "../../components/HomeCatBtn/HomeCatbtn";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
// import FilterModel from "../../components/FilterModel/FilterModel";
// import ModelFilter from "../../components/ModelFIlter/ModelFIlter"
// s

const Home = () => {
  const authState = useSelector((state) => state.auth);
  console.log("Authentication State:", authState);
  const [openMOdel, setopenMOdel] = useState(false); 
  const [openFilter, setopenFilter] = useState(false); 
  const [listingData, setListingData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    if (authState?.token == null) {
      // if (!authState?.token == null) {
      console.log("Authentication 2State:", authState);
      Navigate("/login");
    }
  }, [authState, Navigate]);

  // comppp show

  //   const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // compp

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const authToken = authState.token; // Replace with your actual auth token

        const response = await fetch("https://api.reztup.com/api/listing", {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setListingData(data);
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

  const rentals = [
    { title: "Cayucos, California, US", image: "https://picsum.photos/508/402", price: "60,284" },
    { title: "Texas, USA", image: "https://picsum.photos/500/202", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/550/303", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/600/304", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/700/305", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/900/301", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/200/302", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/303", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/304", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/305", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/301", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/302", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/303", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/304", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/305", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/305", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/305", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/305", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/305", price: "1,541" },
    { title: "Texas, USA", image: "https://picsum.photos/500/305", price: "1,541" },
  ];

  return (
    <>
    <div  className="home_main">
      
      <Navbar openfilters={()=>setOpenFilter(true)}  showanim={true}/>
    </div >
    {/* <div style={{height:"3vw"}}></div> */}
      {/* <div className=" container w-100    "> */}
      <Slider />
      
      <div  >
        <div className="home-card-container" id='homecardcont' >
        {/* {listingData && */}
          {rentals.map((e) => (
            <Card
              key={e.id}
              id={e.id}
              img={e.image} 
              // img='https://picsum.photos/500/305'
              loc="New York, USA"
              orignalprice={600}
              rating={4.5}
              discountedprice={80}
              Noreview={50}
              title={e.title}
              comment={e.comment}
              className='grad absolute w-full h-full rounded-b-[1.3rem]'
            />
            // <Card2 title='New York, USA' image='https://picsum.photos/500/300' price={200}/>
          ))}
        </div>
        </div>
        
        
        <HomeCatbtn clicked={()=>setopenMOdel(e=>!e)}/>
      {/* </div> */}
      <CatagoryModel open={openMOdel} onClose={()=>setopenMOdel(e=>!e)}/>
      <HomeFooter/>
      {/* {openFilter&&<FilterModel open={openFilter} onClose={()=>setopenFilter(e=>!e)}/>} */}
      {/* <FilterModel/> */}
      {/* <Footer/> */}
    </>
  );
};

export default Home;
