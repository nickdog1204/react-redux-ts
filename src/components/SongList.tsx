import React, {Fragment} from "react";
import {useAppSelector} from "../redux/app/hooks";

export const SongList: React.FC = () => {
    const songList = useAppSelector(state => state.songList);
    return (
        <Fragment>
            {songList.map(song => <h1>{song.title}</h1>)}

        </Fragment>
    )

}
export default SongList;