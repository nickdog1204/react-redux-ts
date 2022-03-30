import {RootState} from "../../../index";

export const selectSelectedSong = (state: RootState) => state.song.selectedSong;
export const selectSongList = (state: RootState) => state.song.songList;