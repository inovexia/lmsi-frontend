import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cart = ({ match }) => {
  false && console.log(match)
  return (
    <div className={'row'}>
      <div className={'col-8'}>
        <div className={'card mx-auto p-3 mb-2'}>
          <div className={'row'}>
            <div className={'col-3'}>
              <div
                style={{
                  height: '100px',
                  width: '100px',
                  backgroundColor: 'gray',
                  borderRadius: '50%'
                }}
              ></div>
            </div>
            <div className={'col-9'}>
              <p>Slot title</p>
              <p>Price</p>
              <p>Date & Time</p>
            </div>
          </div>
        </div>
        <div className={'card mx-auto p-3 mb-2'}>
          <div className={'row'}>
            <div className={'col-3'}>
              <div
                style={{
                  height: '100px',
                  width: '100px',
                  backgroundColor: 'gray',
                  borderRadius: '50%'
                }}
              ></div>
            </div>
            <div className={'col-9'}>
              <p>Slot title</p>
              <p>Price</p>
              <p>Date & Time</p>
            </div>
          </div>
        </div>
        <div className={'card mx-auto p-3'}>
          <div className={'row'}>
            <div className={'col-3'}>
              <div
                style={{
                  height: '100px',
                  width: '100px',
                  backgroundColor: 'gray',
                  borderRadius: '50%'
                }}
              ></div>
            </div>
            <div className={'col-9'}>
              <p>Slot title</p>
              <p>Price</p>
              <p>Date & Time</p>
            </div>
          </div>
        </div>
      </div>
      <div className={'col-4'}>
        <Card>
          <Card.Header>Booking Details</Card.Header>
          <Card.Body>
            <p>Slot Price: 50$</p>
            <p>Course Price: 20$</p>
            <p>Discount: -10$</p>
            <p>Coupon Apply</p>
            <p>Wallet Points: 20</p>
            <p>Total: 60</p>
          </Card.Body>
          <Card.Footer>
            <p>Total : 60$</p>
            <Link className={'btn btn-app me-3 mb-3'} to={'/app/checkout'}>
              checkout
            </Link>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default Cart
