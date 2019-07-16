import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList (){
    // console.log(this.props);
    // map song props from redux
    return this.props.songs.map((song) => {
      // returning jsx mapping function
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              // run selectSong action creator and iterating song that is clicked
              onClick={() => this.props.selectSong(song)}
            >
                Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
    render(){
      // console.log(this.props);
      return <div className="ui divided list">{this.renderList()}</div>
  }
};

// always gets the first argument of state
const mapStateToProps = state => {
  // console.log(state);
  // always returns object that is going to show up as props inside of our component
  return { songs: state.songs };
}

// connect()(SongList) ==> connect function that return SongList function
// selectSong argument is taken from selectSong action creator and send it dispatch
// then pass it to our render method as props
export default connect(mapStateToProps, { selectSong })(SongList);