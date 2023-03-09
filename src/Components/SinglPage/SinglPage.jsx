import React, {useContext, useMemo } from 'react';
import { useParams } from "react-router";
import classes from './SinglPage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import BackButton from '../UI/Buttons/MyButton';
import { Context } from '../context';
import ReactPlayer from 'react-player';
const SingleOne = () => {
  const navigate = useNavigate();
  const params = useParams();
  const songs = useContext(Context);
  const tzitata = (imgLink) => {
    return (
      <div className={classes.tziTata}>
         {
        imgLink.includes('http') ? <img className={classes.tziTata} src={imgLink} width={80} alt="Цитаты" />
          : <p className={classes.tziTata}>{imgLink}</p>
      }
      </div>
    )
  }
  const audioSource = (linkAuidio, linkName) => {
    return (
      <div>
        <p>{linkName}</p>
        <audio controls className={linkAuidio ? '' : classes.mediaHidden}
          src={linkAuidio} type="audio/mpeg" />
      </div>
    )
  }

  const videoSource = (linkVideo, linkName) => {
    return (
        <div>
    <p>{linkName}</p>
    {linkVideo.includes('youtu.be') ? <ReactPlayer className={linkVideo ? '' : classes.mediaHidden.join(' ')} id={classes.videoFrame} url={linkVideo} controls={true} /> 
    :  <video className={[classes.videoBlock, linkVideo ? '' : classes.mediaHidden].join(' ')} src={linkVideo} controls={true} type="video/mp4" ></video>}
    </div>
    )
  }

  const currSings = useMemo(() => {
    // eslint-disable-next-line
    return songs.filter(songs => songs.id === params.id);

  }, [songs])
  const listContent = useMemo(() => {
    return currSings.map((currSing) =>
    <>
        <div className={classes.mediaSong} key={currSing.id}>
          <img className={classes.mediaImage} src={currSing.photo} width={80} alt={currSing.name} />
          <div className={classes.headerSong}>
            <h2>{currSing.name}</h2></div>
          <a className={[classes.linkTo, currSing.linkTo ? '' : classes.mediaHidden].join(' ')} href={currSing.linkTo} target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
          {tzitata(currSing.picture)}
          <div className=
            {
              classes.audioBlock
            }>
            {audioSource(currSing.audio1, currSing.audio_name1)}
            {audioSource(currSing.audio2, currSing.audio_name2)}
            {audioSource(currSing.audio3, currSing.audio_name3)}
          </div>
          
          {/* <div className={classes.tziTata}>
            <img className={classes.tziImage} src={currSing.picture_tzitata} width={80} alt="Цитаты" />
            <p>{currSing.picture}</p>
          </div> */}
          <div className= {[classes.videoBlock, currSing.video1 ? '' : classes.mediaHidden].join(' ')} 
            >
            {videoSource(currSing.video1, currSing.video_name1)}
            {videoSource(currSing.video2, currSing.video_name2)}
            {videoSource(currSing.video3, currSing.video_name3)}
          </div>
           
      </div>
       
       </>
    );

  }, [currSings])

  return (
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        {/* <YoutButton onClick={() => navigate("/playlist")}>плелист</YoutButton> */}
        <BackButton onClick={() => navigate("/cavers")}>Назад</BackButton>
        {listContent}
      </div>
    </div>
  )
}

export default SingleOne