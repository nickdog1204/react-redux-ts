import React, {Fragment} from "react";
import * as fromStore from '../store'
const {useAppSelector} = fromStore.hooks;
const {selectSongList} = fromStore.selectors.song

export const SongList: React.FC = () => {
    const songList = useAppSelector(selectSongList);
    return (
        <Fragment>
            {songList.map(song => <h1>{song.title}</h1>)}

        </Fragment>
    )

}
export default SongList;