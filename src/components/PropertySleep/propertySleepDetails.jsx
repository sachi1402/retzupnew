import React,{useState} from 'react'
import './propertySleepDetails.css'
const PropertySleepDetails = () => {
    const [beds, setbeds] = useState([{id:1,bedroom:'Bedroom 1',type:'1 Queen Bed'},{id:1,bedroom:'Bedroom 1',type:'1 Queen Bed'},{id:1,bedroom:'Bedroom 1',type:'1 Queen Bed'},{id:1,bedroom:'Bedroom 1',type:'1 Queen Bed'},{id:1,bedroom:'Bedroom 1',type:'1 Queen Bed'},{id:1,bedroom:'Bedroom 1',type:'1 Queen Bed'},{id:1,bedroom:'Bedroom 1',type:'1 Queen Bed'},{id:1,bedroom:'Bedroom 1',type:'1 Queen Bed'},]);

  return (
    <div className="property-Sleep-com">
      <h4>where you sleep</h4>
      <div className="property-Sleep-cont">
            {beds.map(e=><div key={e.id} className="property-Sleep-card">
                <h3>{e.bedroom}</h3>
                <p>{e.type}</p>
                </div>)}
      </div>
    </div>
  )
}

export default PropertySleepDetails
