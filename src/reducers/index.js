import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it That Way', duration: '1:45' },
  ];
};

// first argument, selectedSong = null --> to indicate that our application first starts up,  
//                                         it  won't have any selected song
// second argument, action from Action Creator

const selectedSongReducer = (selectedSong = null, action) => {
  // if action.type in action creator is equal to SONG_SELECTED
  if (action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};

// Export both reducers using combineReducers function from  Redux
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});