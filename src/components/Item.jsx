import React from 'react'
import EllipsisIcon from "../assets/images/icon-ellipsis.svg"
import ExerciseIcon from "../assets/images/icon-exercise.svg"
import PlayIcon from "../assets/images/icon-play.svg"
import SelfcareIcon from "../assets/images/icon-self-care.svg"
import SocialIcon from "../assets/images/icon-social.svg"
import StudyIcon from "../assets/images/icon-study.svg"
import WorkIcon from "../assets/images/icon-work.svg"


export default function Item({title, timeframe, previous}) {
  const iconMap = {
    Exercise: ExerciseIcon,
    Play: PlayIcon,
    Selfcare: SelfcareIcon,
    Social: SocialIcon,
    Study: StudyIcon,
    Work: WorkIcon,
  };

  const iconSrc = iconMap[title] || '';

  const iconStyle = {
    Work: "hsl(15, 100%, 70%)",
    Play: "hsl(195, 74%, 62%)",
    Study: "hsl(348, 100%, 68%)",
    Exercise: "hsl(145, 58%, 55%)",
    Social: "hsl(264, 64%, 52%)",
    Selfcare: "hsl(43, 84%, 65%)"
  }

  const iconColor = iconStyle[title] || ''

  const style = {
    backgroundColor: iconColor
  }
  return (
    <div className='item'>
      <div className='image-bg' style={style}>
        <img src={iconSrc} alt={`${title} icon`}  />
      </div>
      <div className='item-title'>
        <p>{title}</p>
        <img src={EllipsisIcon} alt="ellipsis icon" />
      </div>
      <div className='item-timeframe'>
        <p className='current'>{timeframe.current}hrs</p>
        <p className='previous'>{previous} - {timeframe.previous}hrs</p>
      </div>
    </div>
  )
}
