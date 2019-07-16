import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  renderList (){
    // console.log(this.props);
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
    render(){
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
export default connect(mapStateToProps)(SongList);