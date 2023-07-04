import React,{useState} from 'react'
import './AccAddPayment.css'
import Navbar from '../../components/Navbar2/Navbar';
const AccAddPayment = () => {

    const [selectedBank, setSelectedBank] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const bankNames = [
    'Bank A',
    'Bank B',
    'Bank C',
    'Bank D',
    'Bank E',
    // Add more bank names as needed
  ];

  const handleSelectBank = (bank) => {
    setSelectedBank(bank);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Navbar/>
    <svg  className="back-svg"xmlns="http://www.w3.org/2000/svg" width="13" height="26" viewBox="0 0 13 26" fill="none">
<path id="Vector" d="M13 24.4237L11.5984 26L-7.70853e-07 13L11.5984 8.31146e-07L13 1.56812L2.8099 13L13 24.4237Z" fill="black"/>
</svg>
    <div className="AccAddPayment">
      <div className="AccAddPayment-title">
        <h3>Let’s add a payout method</h3>
        <p>To start, let us know where you’d like us to send  your money.</p>
      </div>
      <div className="AccAddPayment-row-acc-slider">
        <div>
            <p>Personal account</p>
            <p>Company account</p>
        </div>
        <div className="AccAddPayment-orange o-selectd"></div>
      </div>
      <div className='AccAddPayment-form-cont'>
        <div className="AccAddPayment-form-top">
        <div className="AccAddPayment-input-cont">
            <label>Billing country/region <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
<path id="Vector" d="M24.4237 1.87966e-08L26 1.40156L13 13L9.70388e-07 1.40156L1.56812 2.91347e-07L13 10.1901L24.4237 1.87966e-08Z" fill="black"/>
</svg>
</span></label>
            <h3>india</h3>
        </div>
        <div className="AccAddPayment-input-cont">
            <label>Currency<span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
<path id="Vector" d="M24.4237 1.87966e-08L26 1.40156L13 13L9.70388e-07 1.40156L1.56812 2.91347e-07L13 10.1901L24.4237 1.87966e-08Z" fill="black"/>
</svg></span></label>
            {/* <input/> */}
            <h3>INR</h3>
        </div>
        <p><span>Click Here </span> for bank account registration guide</p>
      </div>
      </div>
      <div className="AccAddPayment-form-btm">
      <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
       <span> {selectedBank || 'Select a bank'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
<path id="Vector" d="M24.4237 1.87966e-08L26 1.40156L13 13L9.70388e-07 1.40156L1.56812 2.91347e-07L13 10.1901L24.4237 1.87966e-08Z" fill="black"/>
</svg>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {bankNames.map((bank, index) => (
            <li key={index} onClick={() => handleSelectBank(bank)}>
              {bank}
            </li>
          ))}
        </ul>
      )}
      </div>
      <input placeholder='Account Holder Name'  className='input-payout'/>
      <input placeholder='Account Number'  className='input-payout'/>
      <input placeholder='IFSC code'  className='input-payout'/>
      <input placeholder='Account Type'  className='input-payout'/>
      <button>Save</button>
      </div>
    </div>
    </>
  )
}

export default AccAddPayment
