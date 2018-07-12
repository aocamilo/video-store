import React from 'react';
import Media from '../container/media';
import './playlist.css';

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return <Media openModal={props.handleOpenModal} id={item} key={item} />
        })
      }
    </div>
  )
}

export default Playlist;
