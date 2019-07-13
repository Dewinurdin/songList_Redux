import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render (){
    return <div> Song List </div>
  }
};

// connect()(SongList) ==> connect function that return SongList function
export default connect()(SongList);