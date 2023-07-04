import React, { useState } from 'react'
import './PropertyThingtoKnow.css'
const PropertyThingtoKnow = () => {
  const [show, setshow] = useState(true)
  return (
    <div className='property-things-comp'>
      <div className='property-thing-title'>
        <h4>Host Profile</h4>
        {/* <img alt='arr'/> */}
        {show?<svg onClick={()=>setshow(e=>!e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g id="down 5">
<g id="16">
<path id="Vector" d="M12.0041 16.0041C11.8725 16.0049 11.742 15.9796 11.6202 15.9299C11.4983 15.8801 11.3875 15.8068 11.2941 15.7141L5.29409 9.71409C5.10579 9.52579 5 9.27039 5 9.00409C5 8.73779 5.10579 8.4824 5.29409 8.29409C5.4824 8.10579 5.73779 8 6.00409 8C6.27039 8 6.52579 8.10579 6.71409 8.29409L12.0041 13.5941L17.2941 8.30409C17.4854 8.14027 17.7315 8.05466 17.9831 8.06438C18.2348 8.0741 18.4736 8.17843 18.6517 8.35653C18.8297 8.53462 18.9341 8.77336 18.9438 9.02504C18.9535 9.27671 18.8679 9.52279 18.7041 9.71409L12.7041 15.7141C12.5178 15.8988 12.2664 16.003 12.0041 16.0041Z" fill="black"/>
</g>
</g>
        </svg>:
        <svg  onClick={()=>setshow(e=>!e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g id="down 1">
<g id="16">
<path id="Vector" d="M11.9363 5.99591C12.0679 5.99515 12.1984 6.02037 12.3202 6.07014C12.4421 6.1199 12.5529 6.19323 12.6463 6.28591L18.6463 12.2859C18.8346 12.4742 18.9404 12.7296 18.9404 12.9959C18.9404 13.2622 18.8346 13.5176 18.6463 13.7059C18.458 13.8942 18.2026 14 17.9363 14C17.67 14 17.4146 13.8942 17.2263 13.7059L11.9363 8.40591L6.64634 13.6959C6.45504 13.8597 6.20896 13.9453 5.95728 13.9356C5.70561 13.9259 5.46687 13.8216 5.28877 13.6435C5.11068 13.4654 5.00635 13.2266 4.99663 12.975C4.98691 12.7233 5.07251 12.4772 5.23634 12.2859L11.2363 6.28591C11.4226 6.10116 11.674 5.99701 11.9363 5.99591Z" fill="black"/>
</g>
</g>
        </svg>}
      </div>
      {show&&<div className='property-thing-desc'>
        <div className='property-thing-desc-l'>
            <div className='property-thing-desc-l-row-1'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeCAMAAAD0W0NJAAAANlBMVEWVu9////+Rud6Mtt34+v3t8/mZvuC0zuidwOHy9vvn7/eiw+Pe6fS80+rS4fGsyebK3O7Z5fM4Gh+FAAAEoklEQVR4nO2c4bajKgyFNSgqiOD7v+yFtvZop1XYaHSt6/fzzJmZvQiJMWwpipubm5ubmxMg8YLOVvIJEQndGOeGwTnTaOF/cLamCVFYM1blgmo01v/B6ZAoBvWh7aVQDcXJcSbS/TdpE70+M8gkhzVxgUGepo+ar1H9iHFzjj4S47a4wHjGDiSKVOf18W9AKlSsurJUBbc+sZqxn/TMJZBcirqydKzLRzZNXVlaTn0ioqIsqRjDKxJDG3B8+touXV7XcqlLzYvX8nHtPoGoK0um6FKDyWN6+KZV5D94ajMhiRHoWo7lQ2PLFF0sbwMsuUvg1vObjyU3alRezaFOourKUjLIa3F5DM+19F7qD4auCq8rLJWFDC7P3PJueTnyLp4a1y4shcbl6ePVXf2hJpPfcScqDnkX71iu3u9tDmx/MXCou3ozHzNR/gbTlFmj8jjKnl8+MHXre0pQ4D0LQ7/yBJPHJA4Y3QbYxrdY5Ru4Yot1pHxnay1QWmq22XIhgMfuwDeZRxp6znMXkTwg5Tx2ASozW01+IBOXr2Pp499c+0Qy9YWI5yVohkjafYbfcZNQmlle0Zak1D7Ws+YX8Y8OxgfGXF9keOuTrF5x70RMb0D/QjbGpHTGxnsitvVV9kQX3+b6nbh2D31yNT/qk+xxNLnKSK48fd3knSJWExoVVr33lPhhgKx6/f4V/+tsLi9Bpp/veRLNp7M1eFub94o9Mqg3xJAk5KP57PVmAyf/Q6/wLbHy2uSfZ28aaXVOHmvkI6HNLJLzDpiEkNYY54yxcuGsnnfWvdFH7UK/vY1aNslL2yW9WfytpUmyU+aIPBGy+WJ39AFe/a/o66xSNXLfbUjC/Khvffv7fyLR/pi11WbPFVx9OPT6+1qQXLNc7/g4oY3OTjn98ZmBTxTtNryve42EIqahVTeYMEN55UVrhm67mdlnWhrvT+5q1feqjn4FHndYv7RXsjTyX+Ao4wBym+yGBj9BiyH3lC3naD6GzJHpsYuXvXwZhqk4ska6sZ9k4Iw5yUugTTSeLiO6RydGICM58JPleDIGkzLhixYUhU8mMxw18cAjGI6tl7H5ji8rAbi0pB+uIHSoPOJQV5ZgcHOscCmAbx05PscUwPMs5FgUAZyMH91MTYBNFXLmjQCek6NmpFTA0T1T4vrURdRxJS6YulyJC6auYOimnihIHlNmgDYI8FNDBEAegT4zBGDxuBqCANAU8NUVqLIgXzCjAF8+83TyT4B+HjWwIgBjXL6qDNVl4pSXnhrr58j7UidPCuBvmBHSv3smzSlPJ0eXq1cOAP1yjEdlN3np/TJvcJPl4V8spQMY6Ph6eey2EfSrkXQwi5pkagpGcHwr2uHwFayHldP+DUhIe+gWHKzMMxWEi/XG+oAaWNVjuKYvR9u0hkXjdu7+etfsePtdsAhYt88iVrWzxf63G5IQ1Ljx+12AkcrU6Br/7+ysbCaRpLamByRWvbFachj5whWZ2gy9inCDlFWn+sFo5gs1KVjOtG3M73CHUJrGL5nYJUMRjQ/EM+SPez0fN3s+wyj+9aOdxkPl+17Ua2i6ubm5ufmf8R/83Dvv4v2KpQAAAABJRU5ErkJggg=='alt='pfp'/>
                <div>
                    <h4>Hosted by Ravi</h4>
                    <p>Joined in August 2019</p>
                </div>
            </div>
            <div className='property-thing-desc-l-row-2'>
                <div className='property-thing-desc-l-r2-cont'>
                    <span>34 Reviews</span>
                    <span>Identity verified</span>
                </div>
                <p>Hi we are Ravi, your devoted hosts at Passambhati Villa - 
                    Cape Shark Villas.
                    This villa is a private holiday home, rented out through 
                    Cape Shark Villas.</p>
                <h4>During your stay</h4>
                <p>Cape shark Villas reception staff and our housekeeper 
                mon will be available daily, from 8 am to 5 pm during 
                your stay.</p>
            </div>
            
        </div>
        <div className='property-thing-desc-r'>
            <button>Contact host</button>
            <div>
                <p>Language: English</p>
                <p>Response rate: 100%</p>
                <p>Response time: Within a few hours</p>
            </div>
        </div>
      </div>}
    </div>
  )
}

export default PropertyThingtoKnow
