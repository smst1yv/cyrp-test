import React, { useEffect } from 'react'
import './style.css'

const Paypal = () => {



  return (
    <>
      <div className="cardWrapper">
        <div className="cardBack"></div>
        <div className="moveRadialWrapper">
          <div className="moveRadial"></div>
          <div className="moveRadialPatternWrap">
            <div className="moveRadialPattern"></div>
          </div>
          <div className="chargeNameWrapper">
            <div className="chargeName">Credit / Debit Payments</div>
          </div>
          <div className="cardChipWrapper">
            <div className="cardChip"></div>
            <div className="cardChipFoil"></div>
          </div>
          <div className="tapToPayIcon">
            <div className="tapIcon">
              <i className="fa-solid fa-wifi"></i>
            </div>
          </div>
          <div className="cardNumberWrapper">
            <div className="cardNumber">5106 4618 1234 5678</div>
            <div className="cardNumberFoil"></div>
          </div>
          <div className="cardValidDateWrapper">
            <div className="cardValidDate">
              <span className="validText">Expires End </span>
                 01/01
              <span className="validTextTwo">Month/Year</span>
            </div>
          </div>
          <div className="cardUserNameWrapper">
            <div className="cardUserName">Name Surname</div>
            <div className="cardUserNameFoil"></div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Paypal
