import React, { useState, useRef, useEffect } from 'react'
import categories from 'data/categories'
import Title from 'components/Title'
import favoriteCategories from 'data/favorite-categories'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Icon } from 'Icons'
import Category from 'components/CategoryItem'
import WideCategory from 'components/WideCategoryItem'

function Search() {

  const favoriteRef = useRef()
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  useEffect(() => {
    if(favoriteRef.current){

      const scrollHandle = () => {
          
          const isEnd = favoriteRef.current.scrollLeft + favoriteRef.current.offsetWidth === favoriteRef.current.scrollWidth
          
          const isBegin = favoriteRef.current.scrollLeft === 0
  
          setPrev(!isBegin)
          setNext(!isEnd)
      }
      scrollHandle()
        favoriteRef.current.addEventListener('scroll', scrollHandle)   
        
        return () => {
          favoriteRef?.current.removeEventListener('scroll', scrollHandle)
        }
    }
  }, [favoriteRef])

  const slideFavoriteNext = () => {
    favoriteRef.current.scrollLeft += 400
  }

  const slideFavoritePrev = () => {
    favoriteRef.current.scrollLeft -= 400
  }

  return (
    <>
      <section className='mb-8'>
        <Title title="En çok dinlediğin türler"/>
        <div className='relative'>
          {prev && <button className='absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white text-black flex items-center justify-center' onClick={slideFavoritePrev}><Icon name="prev"/></button>}
          {next && <button className='absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white text-black flex items-center justify-center' onClick={slideFavoriteNext}><Icon name="next"/></button>}
          <ScrollContainer 
          className='gap-x-6 scrollable flex overflow-x'
          innerRef={favoriteRef}>
            {favoriteCategories.map((category, index) => <WideCategory key={index}category={category} />)}
          </ScrollContainer>
        </div>
      </section>

      <section>
        <Title title="Hepsine göz at"/>
        <div className='grid grid-cols-6 gap-6'>
          {categories.map((category, index) => <Category key={index}category={category} />)}
        </div>
      </section>
    </>
  )
}

export default Search