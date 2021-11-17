import {useRef, useState} from "react";
import './style.scss'

const ActiveVideoCard = (props) => {
    console.log(props)
    const {
        id,
        authorMeta,
        text,
        videoUrl,
        commentCount,
        diggCount,
        playCount,
        musicMeta,
        videoMeta
    } = props.video ?? {};
    const {musicName, musicAuthor, musicOriginal} = musicMeta ?? {}
    const {name, nickName, avatar} = authorMeta ?? {}
    const {width, height} = videoMeta ?? {}

    const musicRef = useRef(null);
    const videoRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false)

    const playVideo = () => {
        if (!isPlaying) {
            videoRef.current.play();
            setIsPlaying(true)
        } else {
            videoRef.current.pause();
            setIsPlaying(false)
        }

        //musicRef.current.play();
    }
    return (
        <div id={id} className="card">
            <img className="card__creator_ava" src={avatar} width="100px"/>

            <section className="info">
                <div className="info__author">
                    <span className="info__author--name">{name}</span>
                    <span className="info__author--nick">{nickName}</span>
                </div>
                <div className="info__video">
                    <span className="info__video--text">{text}</span>
                    <span className="info__video--music">
                        {!musicOriginal ?
                            `${musicAuthor} --- ${musicName}` :
                            `original music --- ${nickName}`
                        }
                    </span>
                </div>
            </section>

            <video onClick={playVideo} ref={videoRef} className="card__video" width={width} height={height}
                   loop>
                <source src={videoUrl}/>
                Error
            </video>
            <div className="card__metrics">
                <button className="card__metric">{playCount}</button>
                <button className="card__metric">{commentCount}</button>
                <button className="card__metric">{diggCount}</button>
            </div>
        </div>)
}
export default ActiveVideoCard