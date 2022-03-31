import React from "react";
import * as fromStore from '../store'

const {useAppSelector} = fromStore.hooks;
const {selectSelectedSong} = fromStore.selectors.song;

export const SongDetails: React.FC = () => {
    const song = useAppSelector(selectSelectedSong);
    return (
        <div>
            <h2>歌曲標題:{song.title}</h2>
            <p>
                標題：{song.title},
                <br/>
                長度: {song.duration}
            </p>

        </div>
    );
}