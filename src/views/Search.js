import React from 'react'
import categories from 'data/categories'
import Title from 'components/Title'

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

function Search() {
  return (
    <>
      <section className='mb-4'>
        <Title title="En çok dinlediğin türler"/>
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