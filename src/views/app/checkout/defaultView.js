import React from 'react'

const Checkout = ({ match }) => {
  false && console.log(match)
  return (
    <div>
      <div className={'row mx-auto'}>
        <div className={'col-8'}>
          <div className={'card'}>
            <div className={'card-body'}>
              <ol className={'list-group list-group-numbered'}>
                <li className={'list-group-item d-flex gap-1'}>
                  <div className={'d-flex justify-content-between flex-grow-1'}>
                    <span>Slot Or Course title</span>
                    <span>Price</span>
                    <span>Date</span>
                  </div>
                </li>
                <li className={'list-group-item d-flex gap-1'}>
                  <div className={'d-flex justify-content-between flex-grow-1'}>
                    <span>Slot Or Course title</span>
                    <span>Price</span>
                    <span>Date</span>
                  </div>
                </li>
                <li className={'list-group-item d-flex gap-1'}>
                  <div className={'d-flex justify-content-between flex-grow-1'}>
                    <span>Slot Or Course title</span>
                    <span>Price</span>
                    <span>Date</span>
                  </div>
                </li>
                <li className={'list-group-item d-flex gap-1'}>
                  <div className={'d-flex justify-content-between flex-grow-1'}>
                    <span>Slot Or Course title</span>
                    <span>Price</span>
                    <span>Date</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className={'col-4'}>
          <div className={'card'}>
            <div className={'card-body'}>
              <p>Subtotal: 250$</p>
              <p>Tax or GST: 20$</p>
              <p>Coupon</p>
              <p>Total Amount: 300$</p>
            </div>
          </div>
        </div>
      </div>
      <div className={'my-3 d-flex justify-content-around'}>
        <h4>Choose Payment Option</h4>
        <div>
          <input className={'me-1'} type="checkbox" />
          <label>PayPal</label>
        </div>
        <div>
          <input className={'me-1'} type="checkbox" />
          <label>Stripe</label>
        </div>
        <div>
          <input className={'me-1'} type="checkbox" />
          <label>UPI</label>
        </div>
      </div>
      <div className={'card'}>
        <div className={'card-body'}>
          <h5>All is label:</h5>
          <div>
            <label className={'me-2'}>Credit/Debit Card Number CV</label>
            <input className={'me-1'} type="checkbox" />
          </div>
          <div>
            <button className={'btn btn-app'}>Pay 215$</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
