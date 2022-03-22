import React, { useState, useRef, useEffect } from 'react'
import categories from 'data/categories'
import Title from 'components/Title'
import favoriteCategories from 'data/favorite-categories'
import ScrollContainer from 'react-indiana-drag-scroll'

function Category({ category }) {
  return (
    <div 
    style={{'background': category.color}}
    className='rounded-md before:pt-[100%] before:block relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
          {category.title}
        </h3>
        <img className='absolute w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[7%] bottom-0 right-0 shadow-spotify' src={category.cover} alt="" />
      </div>
    </div>
  )
}

function WideCategory({ category }) {
  return (
    <div 
    style={{'background': category.color}}
    className='rounded-lg flex-shrink-0 relative w-[27.375rem] h-[13.75rem]'>
      <div className='absolute inset-0 overflow-hidden'>
        <h3 className='p-4 text-[2.5rem] tracking-tighter font-semibold'>
          {category.title}
        </h3>
        <img className='absolute w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[7%] bottom-0 right-0 shadow-spotify' src={category.cover} alt="" />
      </div>
    </div>
  )
}

function Search() {

  const favoriteRef = useRef()
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  useEffect(() => {
    if(favoriteRef.current){
        favoriteRef.current.addEventListener('scroll', () => {
        //console.log(favoriteRef.current.scrollLeft)
        const isEnd = favoriteRef.current.scrollLeft + favoriteRef.current.offsetWidth === favoriteRef.current.scrollWidth
        
        const isBegin = favoriteRef.current.scrollLeft === 0

        setPrev(!isBegin)
        setNext(!isEnd)
      })
      
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
      <section className='mb-4'>
        <Title title="En çok dinlediğin türler"/>
        {prev && <button onClick={slideFavoritePrev}>Prev</button>}
        {next && <button onClick={slideFavoriteNext}>Next</button>}
        <ScrollContainer 
        className='gap-x-6 scrollable flex overflow-x'
        innerRef={favoriteRef}>
          {favoriteCategories.map((category, index) => <WideCategory key={index}category={category} />)}
        </ScrollContainer>
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