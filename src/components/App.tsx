import SongList from "./SongList";
import React from "react";
import {SongDetails} from "./SongDetails";

const App: React.FC = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetails/>
                </div>

            </div>
        </div>
    )
}

export default App;