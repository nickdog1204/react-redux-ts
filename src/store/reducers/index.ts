import songReducer from '../slices/song/reducers'
import * as fromSong from '../slices/song';

const reducer = {
    song: fromSong.reducer
}
export default reducer;