import React from 'react'

const BlogCard = ({ title, description, imgUrl }) => {
  return (
    <div className='img-card-container'>
      <div className="img-wrapper">
        <img src={imgUrl} alt="blog" className="card-image" />
      </div>
      <div className="img-card-overlay">
        <div className="img-card-overlay-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="secondary">
            <span>Read More</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard