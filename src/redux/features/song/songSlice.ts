import {ISong} from "../../../models/song";

export interface ISongState {
    songList: ISong[];
    selectedSong: ISong;
}