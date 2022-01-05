import React, { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { AppContext } from 'src/AppContext'
import { TITLE_UPDATE } from 'src/constants/actions'
import SearchCard from './SearchCard'

const Search = ({ match }) => {
  const { updateAppStore } = useContext(AppContext),
    pageHeading = 'Search Result'

  useEffect(() => {
    updateAppStore({
      type: TITLE_UPDATE,
      payload: {
        pageHeading
      }
    })
  }, [updateAppStore])

  return (
    <>
      <div className={'search mt-5'}>
        <div className={'search-top d-flex justify-content-between'}>
          <h4>Recently Searched</h4>
          <span>View More</span>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={12}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}
        >
          {[...new Array(9)].map((_, i) => (
            <SwiperSlide key={i}>
              <SearchCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={'search mt-5'}>
        <div className={'search-top d-flex justify-content-between'}>
          <h4>Recommended</h4>
          <span>View More</span>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={12}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}
        >
          {[...new Array(9)].map((_, i) => (
            <SwiperSlide key={i}>
              <SearchCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Search
