import React, { useState, useEffect } from 'react'

const ProductImg = ({ images = [] }) => {
  const [mainImg, setMainImg] = useState(
    images.length > 0 ? images[0].url : null
  )

  useEffect(() => {
    if (images.length > 0) {
      setMainImg(images[0].url)
    } else {
      setMainImg(null)
    }
  }, [images])

  return (
    <div className='flex gap-5 w-max'>
      <div className='gap-5 flex flex-col'>
        {images.length > 0 ? (
          images.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt=""
              className='cursor-pointer w-20 h-20 border shadow-lg'
              onClick={() => setMainImg(img.url)}
            />
          ))
        ) : (
          <p>No thumbnails available</p>
        )}
      </div>

      {mainImg ? (
        <img src={mainImg} alt="" className='w-[500px] border shadow-lg' />
      ) : (
        <p>No main image available</p>
      )}
    </div>
  )
}

export default ProductImg
