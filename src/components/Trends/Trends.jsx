import {useSelector} from "react-redux";
import ActiveVideoCard from "../ActiveVideoCard/ActiveVideoCard";

const Trends = () => {
    const {trendVideos} = useSelector(state=>state)
    const cards = trendVideos.map(video=><ActiveVideoCard video={video}/>)
    return (
        <main>
            {cards}
        </main>)
}
export default Trends;