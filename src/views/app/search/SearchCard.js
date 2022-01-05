import React from 'react'
import SearchCardImage from 'src/assets/images/SearchCard.png'

const SearchCard = () => {
  // console.log(SearchCardImage)
  return (
    <div className={'search-card'}>
      <div className={'card-top'}>
        <img
          className={'img-fluid w-100'}
          src={SearchCardImage}
          alt="SearchImage"
        />
      </div>
      <div className="card-details">
        <span>Updated 01/02/2020</span>
        <h4>Javascript Begginer Course</h4>
      </div>
    </div>
  )
}

export default SearchCard
