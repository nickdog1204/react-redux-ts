import {createAction} from "@reduxjs/toolkit";
import {ISong} from "../../models/song";


export const setSelectedSong = createAction<ISong>('SET_SELECTED_SONG');