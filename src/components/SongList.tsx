import React, {Fragment} from "react";
import * as fromStore from '../store'

const {useAppSelector, useAppDispatch} = fromStore.hooks;
const {selectSongList} = fromStore.selectors.song;


export const SongList: React.FC = () => {
    const songList = useAppSelector(selectSongList);
    const dispatch = useAppDispatch();
    const renderedList = songList.map(song => (
        <div className="item" key={song.title}>
            <div className="right floated content">
                <div className="ui button primary" onClick={() => {
                    dispatch(
                        fromStore.actions.song.setSelectedSong(song)
                    )
                }}>選擇
                </div>
            </div>
            <div className="content">
                {song.title}
            </div>
        </div>
    ))
    return (
        <div className="ui divided list">{renderedList}</div>
    )

}
export default SongList;