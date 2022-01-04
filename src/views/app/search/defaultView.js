import React from 'react'
import { Col, Row } from 'react-bootstrap'

import SearchCard from './SearchCard'

const Search = ({ match }) => {
  false && console.log(match)
  return (
    <div className={'search mt-5'}>
      <div className={'search-top d-flex justify-content-between'}>
        <h4>Recently Searched</h4>
        <span>View More</span>
      </div>
      <Row>
        {[...new Array(9)].map((_, i) => (
          <Col key={i} lg={4} md={6}>
            <SearchCard />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Search
