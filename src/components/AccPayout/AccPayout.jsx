import React, { useState } from 'react'
import './AccPayout.css'
function AccPayout() {
    const [slicer, setslicer] = useState(true);
  return (
    <div className="AccPayout">
      <div className="AccPayout-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="41" viewBox="0 0 34 41" fill="none">
<g id="PayPal">
<path id="Vector" d="M32.3961 11.5592C34.0665 13.3631 34.3003 15.9355 33.699 19.0256C33.5314 19.8888 33.2968 20.7377 32.9974 21.5645C32.5051 23.0943 31.6585 24.4862 30.5265 25.6269C29.3945 26.7676 28.0091 27.6249 26.4831 28.1289C24.7322 28.7038 22.8971 28.9805 21.0545 28.9474H20.0857C19.7141 28.9471 19.3547 29.0802 19.0727 29.3223C18.7908 29.5644 18.605 29.8996 18.549 30.267L18.4655 30.7012L17.2462 38.4182V38.7356C17.1865 39.1044 16.9974 39.4398 16.7127 39.6817C16.4279 39.9235 16.0663 40.0559 15.6927 40.0551H9.01139C8.89074 40.0403 8.77466 39.9999 8.67095 39.9365C8.56723 39.8731 8.47828 39.7883 8.41007 39.6877C8.3336 39.5895 8.27912 39.4761 8.2503 39.355C8.22148 39.234 8.21901 39.1082 8.24303 38.9861L8.77754 35.6454L10.6483 23.7693V23.3852L12.7362 10.2229C12.7814 9.95793 12.8967 9.7099 13.0703 9.50466L13.254 9.28751C13.537 9.04201 13.8984 8.90575 14.273 8.90334H24.1781C25.2069 8.90582 26.2341 8.98398 27.2515 9.13718C27.8144 9.22987 28.372 9.35254 28.9218 9.50466L29.2893 9.62158C29.7567 9.76905 30.2096 9.95915 30.6423 10.1895C31.309 10.5299 31.9043 10.9948 32.3961 11.5592ZM7.12391 35.3782L8.99469 23.5188V23.1346L11.1327 10.0225C11.2454 9.25816 11.6301 8.56021 12.2163 8.05694C12.8024 7.55366 13.5505 7.27887 14.3231 7.28311H24.2282C25.3468 7.28908 26.4635 7.37842 27.5688 7.55036C28.1801 7.63425 28.7835 7.76833 29.3728 7.95124L29.7904 8.08487C30.1341 8.19956 30.4691 8.33912 30.7926 8.50246C30.8652 7.51936 30.7384 6.53173 30.4198 5.59886C30.1012 4.66599 29.5973 3.80713 28.9385 3.07386C27.2097 1.35006 24.9111 0.316588 22.4743 0.167471C21.4653 0.0502194 20.4501 -0.00556213 19.4343 0.000436929H6.97358C6.54776 -0.00099178 6.13541 0.149662 5.81081 0.425269C5.48621 0.700876 5.27067 1.08332 5.20302 1.50374L0.024974 34.4094C-0.00832466 34.5466 -0.00832466 34.6898 0.024974 34.827C0.0748638 35.0312 0.183874 35.2162 0.338366 35.3588C0.492858 35.5014 0.685972 35.5953 0.893549 35.6287H7.05709L7.12391 35.3782Z" fill="#F1450E"/>
</g>
</svg>
Payments & payouts
      </div>
      <div className="Acc-pay-slicer">
        <div className="Acc-pay-slicer-txt">
        <p onClick={e=>setslicer(e=>!e)}>Payments</p>
        <p onClick={e=>setslicer(e=>!e)}>Payouts</p>
        </div>
        <div className={`orange-bar ${slicer?'orange-bar-selected':''}`}></div>
      </div>
      {!slicer && <>
      <div className="Acc-pay-row1">
        <div>
            <h4>Your payments</h4>
            <p>Keep track of all your payments and refunds.</p>

        </div>
        <button>manage payments</button>
      </div>
      <div className="Acc-pay-row1">
        <div>
            <h4>Your payments</h4>
            <p>Keep track of all your payments and refunds.</p>

        </div>
        {/* <button>manage payments</button> */}
      </div>
      </>}
      {slicer&&<div>
        <div className="Acc-pay-row1">
        <div>
            <h4>How you’ll get paid</h4>
            <p>Add at least one payout method so we know where to send your money.</p>

        </div>
        <button>Set up payouts</button>
      </div>
        </div>}
    </div>
  )
}

export default AccPayout
