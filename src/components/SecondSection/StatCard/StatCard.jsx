import React from 'react'
import './StatCard.scss'

const StatCard = ({color, icon, title, body}) => {
  return (
    <div className={`StatCard col-4 color_${color}`}>
      <img src={icon} alt="icon"/>
      <p className="title">{title}</p>
      <p className="body">{body}</p>
    </div>
  )
}

export default StatCard
