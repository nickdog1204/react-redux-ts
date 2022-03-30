import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {ISong} from "../../models/song";
import {setSelectedSong} from "../actions";

const initialState: ISong[] = [
    {title: '半獸人', duration: '3:15'},
    {title: '晴天', duration: '3:30'},
    {title: '今時待', duration: '3:35'},
    {title: '我就喜歡', duration: '2:56'},
    {title: '火紅的薩日朗', duration: '4:10'},
    {title: '空山新雨後', duration: '3:55'},
];

export const songListReducer = createReducer(initialState, builder => {
})

export const selectedSongReducer = createReducer(initialState[0], builder => {
    builder.addCase(setSelectedSong, (state, action) => {
        state = action.payload;
    })
    // builder.addDefaultCase((state, action) => {
    // })

})

export default combineReducers({
    songList: songListReducer,
    selectedSong: selectedSongReducer
});