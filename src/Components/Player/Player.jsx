import React, { useMemo } from 'react'
import { useState} from "react";
import classes from './PlayList.module.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import LoaderStrick from '../UI/Loader/LoaderStrick';
import { useContext } from 'react';
import { Context } from '../context';
const Player = ({ songError}) => {
    const [trackIndex, setTrackIndex] = useState(0);
    const songs = useContext(Context);
    const audiosongs1 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src= song.audio1;
         container.aud_name = song.audio_name1;
        return container;
    }
    )
    const audiosongs2 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src = song.audio2;
         container.aud_name = song.audio_name2;
        return container;
    }
    )
    const audiosongs3 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src = song.audio3;
         
         container.aud_name = song.audio_name3;
        return container;
    }
    ) 
    const audiosongs4 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src = song.video1;
         container.aud_name = song.video_name1;
        return container;
    }
    ) 
    const audiosongs5 = songs.map((song) => {
      const container = {};
       container.name = song.name;
       container.src = song.video2;
       container.aud_name = song.video_name2;
      return container;
  }
  ) 
  const audiosongs6 = songs.map((song) => {
    const container = {};
     container.name = song.name;
     container.src = song.video3;
     container.aud_name = song.video_name3;
    return container;
}
) 
    
    const audioList = useMemo(() => { 
      return  [...audiosongs1, ...audiosongs2, ...audiosongs3, ...audiosongs4, ...audiosongs5, ...audiosongs6]
 .filter(e => e.src !== '');
}, [songs])

  if (audioList.length === 0) {
        return <LoaderStrick/>
      }
      if (songError) 
return <h1 >Ошибка загрузки!{songError}</h1>
// console.log(audioList)
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
          currentTrack === 0 ? audioList.length - 1 : currentTrack - 1
        );
      };
      const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
          currentTrack < audioList.length - 1 ? currentTrack + 1 : 0
        );
      };
  return (
   
    <div className= {classes.player}>
    <h2>Нонстоп Трибьюта!</h2>
    <AudioPlayer className={classes.rap_container}
      style={{ borderRadius: "1rem" }}
      src={audioList[trackIndex].src}
      showSkipControls={true}
      showJumpControls={false}
      header={`Сейчас играет: ${audioList[trackIndex].name}`}
      footer= {`${audioList[trackIndex].aud_name}`}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
    />
  </div>
  )
}

export default Player