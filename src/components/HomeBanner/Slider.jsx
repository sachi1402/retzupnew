import React,{useState,useEffect} from "react";
import "./slider.scss";

const Slider = () => {


  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let intervalId = null;
    if (autoplay) {
      intervalId = setInterval(moveRight, 3000);
    }
    return () => clearInterval(intervalId);
  }, [autoplay]);

  const moveLeft = () => {
    const sliderUl = document.querySelector('#slider ul');
    const slideWidth = document.querySelector('#slider ul li').offsetWidth;

    sliderUl.style.left = `${slideWidth}px`;
    sliderUl.insertBefore(
      sliderUl.lastChild,
      sliderUl.firstChild
    );

    setTimeout(() => {
      sliderUl.style.left = '';
    }, 200);
  };

  const moveRight = () => {
    const sliderUl = document.querySelector('#slider ul');
    const slideWidth = document.querySelector('#slider ul li').offsetWidth;

    sliderUl.style.left = `-${slideWidth}px`;
    sliderUl.appendChild(
      sliderUl.firstChild
    );

    setTimeout(() => {
      sliderUl.style.left = '';
    }, 0);
  };

  const handleCheckboxChange = () => {
    setAutoplay(!autoplay);
  };
  return (
      <div>
    {/* <h1>Incredibly Basic Slider</h1> */}
    <div id="slider">
      <a href="#" className="control_next" onClick={moveRight}>
        &gt;
      </a>
      <a href="#" className="control_prev" onClick={moveLeft}>
        &lt;
      </a>
      <ul   >
        <li style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?room')"}}>SLIDE 1</li>
        <li style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?travel')"}}>SLIDE 2</li>
        <li style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?home')"}}>SLIDE 3</li>
        <li style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?plane')"}}>SLIDE 4</li>
      </ul>
    </div>

    {/* <div className="slider_option">
      <input
        type="checkbox"
        id="checkbox"
        checked={autoplay}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox">Autoplay Slider</label>
    </div> */}
  </div>
  )
};

export default Slider;
