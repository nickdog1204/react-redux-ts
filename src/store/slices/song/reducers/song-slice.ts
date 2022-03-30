import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISong} from "../../../../models/song";

export interface ISongState {
    songList: ISong[];
    selectedSong: ISong;
}

const songList: ISong[] = [
    {title: '半獸人', duration: '3:15'},
    {title: '晴天', duration: '3:30'},
    {title: '今時待', duration: '3:35'},
    {title: '我就喜歡', duration: '2:56'},
    {title: '火紅的薩日朗', duration: '4:10'},
    {title: '空山新雨後', duration: '3:55'},
];

const initialState: ISongState = {
    songList,
    selectedSong: songList[0]
}
export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setSelectedSong(state, action: PayloadAction<ISong>) {
            state.selectedSong = action.payload
        }
    }
});

export const actions = songSlice.actions;
export const reducer = songSlice.reducer;