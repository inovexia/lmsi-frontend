import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const InstitutePublic = () => {
  return (
    <div>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="white">
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Product</Nav.Link>
                <Nav.Link href="#pricing">Solution</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                <Nav.Link href="#pricing">Resources</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main className={'border border-bottom-2'}>
        <div className={'d-flex py-3 mx-5'}>
          <div
            style={{ width: '100px', height: '100px', backgroundColor: 'gray' }}
            className={'rounded-circle me-5'}
          ></div>
          <div>
            <p>Name</p>
            <p>Institute</p>
            <p>Role</p>
          </div>
        </div>
      </main>

      <div
        className={
          'd-flex justify-content-around py-3 border border-top-0 border-bottom-2'
        }
      >
        <a href="##">Slots</a>
        <a href="##">Courses</a>
        <a href="##">Profileinfo</a>
      </div>

      <section className={'border border-top-0 border-bottom-2'}>
        <div className={'row py-3 mx-5'}>
          <div className={'col-6'}>
            <p>Slots</p>
            <p>Courses</p>
            <p>Profile info</p>
          </div>
          <div className={'col-6 card p-3 bg-secondary text-white'}>
            <p>Slot title, SlotDescription</p>
            <p>Duration</p>
            <p>Price, Avalability</p>
            <p>Hosting Date&Time</p>
            <div className={'d-flex justify-content-end'}>
              <Button variant={'app'}>Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="row py-3 mx-3">
        <div className={'col-3'}>
          <div
            style={{ height: '150px', width: '200px' }}
            className="card bg-secondary"
          ></div>
        </div>
        <div className={'col-3'}>
          <div
            style={{ height: '150px', width: '200px' }}
            className="card bg-secondary"
          ></div>
        </div>
        <div className={'col-3'}>
          <div
            style={{ height: '150px', width: '200px' }}
            className="card bg-secondary"
          ></div>
        </div>
        <div className={'col-3'}>
          <div
            style={{ height: '150px', width: '200px' }}
            className="card bg-secondary"
          ></div>
        </div>
      </div>
      <footer className="bg-dark text-white p-3">
        <div className="d-flex justify-content-center">LMSI 2022 ©️</div>
      </footer>
    </div>
  )
}

export default InstitutePublic
