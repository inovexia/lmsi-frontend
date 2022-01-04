import React from 'react'
import SearchCardImage from 'src/assets/images/SearchCard.png'

const SearchCard = () => {
  console.log(SearchCardImage)
  return (
    <div className={'search-card'}>
      <div className={'card-top'}>
        <img className={'img-fluid'} src={SearchCardImage} alt="SearchImage" />
      </div>
    </div>
  )
}

export default SearchCard
