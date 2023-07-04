import React,{useState} from 'react'
import './PropertyAminityes.css'
import Ac from './../../assets/AC.svg'
const PropertyAminityes = () => {
    
    const [aminityes, setaminityes] = useState([
        {id:1,'title':'kitchen',icon:'icon-svg'},
        {id:2,'title':'Wi-Fi',icon:'icon-svg'},
        {id:3,'title':'Pool',icon:'icon-svg'},
        {id:4,'title':'Dryer',icon:'icon-svg'},
        {id:6,'title':'Free parking on premises',icon:'icon-svg'},
        {id:8,'title':'Air conditioning',icon:'icon-svg'},
        {id:7,'title':'Washing machine',icon:'icon-svg'},
        {id:5,'title':'TV with standard cable/satellite',icon:'icon-svg'}
    ]);
    const hadleshow=()=>{
        aminityes.length>5?
        setaminityes([{id:1,'title':'kitchen',icon:'icon-svg'},
        {id:2,'title':'Wi-Fi',icon:'icon-svg'},
        {id:3,'title':'Pool',icon:'icon-svg'},]):
        setaminityes([{id:1,'title':'kitchen',icon:'icon-svg'},
        {id:2,'title':'Wi-Fi',icon:'icon-svg'},
        {id:3,'title':'Pool',icon:'icon-svg'},
        {id:4,'title':'Dryer',icon:'icon-svg'},
        {id:6,'title':'Free parking on premises',icon:'icon-svg'},
        {id:8,'title':'Air conditioning',icon:'icon-svg'},
        {id:7,'title':'Washing machine',icon:'icon-svg'},
        {id:5,'title':'TV with standard cable/satellite',icon:'icon-svg'}])
    }
  return (
    <div className='Property-aminityes'>
        <h4>
        What this place offers
        </h4>
        <div className='propert-aminityes-contnaer'>
            
            {aminityes.map((e)=> <div key={e.key} className='Propert-aminity-card'><img src={Ac}/> &nbsp; &nbsp; {e.title}</div>)}
        </div>
        <p onClick={hadleshow}>Show all 10 amenities</p>
    </div>
  )
}

export default PropertyAminityes
