import React from 'react'
import "../css/Entry.css"
/**
 * 展示单个词条的信息，包含title，description，link
 * 
 * @typedef EntryProps
 * @property {Object} data 词条数据对象，包含
 */


const Entry = ({ data }) => {

  return (
    <div className='entry'>
      <a href={data.link_url}>
        {data.title}
      </a>
      <p
        style={{ fontSize: '14px' }}
      >
        {'  ' + data.description}
      </p>
      <span className="entry_url">
        <p>{data.link_url}</p>
      </span>
      <br></br>
    </div>
  )
}

export default Entry;