import React from 'react'


const Entry = ({ data }) => {
  return (
    <div className='entry'>
      <a href={data.link_url}>
        {data.title}
      </a>
      <p
        style={{ fontSize: '14px' }}
      >
        {data.description}
      </p>
      <span className="entry_url">
        <p>{data.link_url}</p>
      </span>
    </div>
  )
}

export default Entry
