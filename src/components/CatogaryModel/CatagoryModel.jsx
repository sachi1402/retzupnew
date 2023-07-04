import React from 'react'
import ReactDom from 'react-dom'
import './CatagoryModel.css'
const CatagoryModel = ({open,onClose}) => {
    
  if (!open) return null
  return ReactDom.createPortal(
    <>
    
    <div className='overlay' onClick={onClose}/>
    <div className='CatogaryModel'>
      <div className='CatogaryModel-top'>
      <h1>  Category List </h1>
      <svg/>
     </div>
     <div className='CatogaryModel-grid'>
     {[1,2,3,4,5,6,7].map(e=><div className='CatogaryModel-grid-itm ' key={e}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path id="Vector" d="M19.3571 3.14286V2.64286H18.8571H12.5714H12.0714V3.14286V9.42857V9.92857H12.5714H18.8571H19.3571V9.42857V3.14286ZM9.92857 3.14286V2.64286H9.42857H3.14286H2.64286V3.14286V9.42857V9.92857H3.14286H9.42857H9.92857V9.42857V3.14286ZM2.64286 18.8571V19.3571H3.14286H9.42857H9.92857V18.8571V12.5714V12.0714H9.42857H3.14286H2.64286V12.5714V18.8571ZM12.0714 18.8571V19.3571H12.5714H18.8571H19.3571V18.8571V12.5714V12.0714H18.8571H12.5714H12.0714V12.5714V18.8571ZM1.57143 0.5H20.4286C20.7127 0.5 20.9853 0.612882 21.1862 0.813814C21.3871 1.01475 21.5 1.28727 21.5 1.57143V20.4286C21.5 20.7127 21.3871 20.9853 21.1862 21.1862C20.9853 21.3871 20.7127 21.5 20.4286 21.5H1.57143C1.28727 21.5 1.01475 21.3871 0.813814 21.1862C0.612882 20.9853 0.5 20.7127 0.5 20.4286V1.57143C0.5 1.28727 0.612882 1.01475 0.813814 0.813814C1.01475 0.612882 1.28727 0.5 1.57143 0.5Z" stroke="black"/>
          </svg>      
            <h3>All Category</h3>
            <div className='selected-orange'></div>
        </div>)}
     </div>
    </div>
    </>
    ,
    document.getElementById('portal')
  )
}

export default CatagoryModel
