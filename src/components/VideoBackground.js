import React, { Component } from 'react';
import VideoCover from 'react-video-cover';

const style = {
  width: '150vw',
  height: '150vh',
  position: 'fixed',
  margin: 'auto',
  top: '-25vh',
  left: '-25vw',
  zIndex: -2,
};
class VideoBackground extends Component {

  state = {
    resizeNotifier: () => {},
  }

  render() {
    const videoOptions = {
      src: '/vid_background.mp4',
      autoPlay: true,
      loop: true,
      muted: true
    };

    return (
      <div style={style} >
        <VideoCover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
        />
      </div>
    );
  }
}

export default VideoBackground;
