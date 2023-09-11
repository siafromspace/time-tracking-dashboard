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
    Ellipsis: EllipsisIcon,
    Exercise: ExerciseIcon,
    Play: PlayIcon,
    Selfcare: SelfcareIcon,
    Social: SocialIcon,
    Study: StudyIcon,
    Work: WorkIcon,
  };

  const iconSrc = iconMap[title] || '';

  return (
    <div className='item'>
      <img src={iconSrc} alt={`${title} icon`}  />
      <div>
        <p>{title}</p>
        <img src="" alt="" />
      </div>
      <div>
        <p>{timeframe.current}</p>
        <p>{previous} - {timeframe.previous}</p>
      </div>
    </div>
  )
}
