class ImagePreview extends React.Component {

  getInitialState() {
    return {hovering: false};
  }

  render() {
    let displayTool = ( this.props.animated ) ? this.video() : this.image();

    return <div
      className="image-preview"
      onMouseEnter={this.mouseEntered()}
      onMouseLeave={this.mouseLeft()}>
      {displayTool}
    </div>;
  }

  image() {
    return <img src={this.props.link} />
  }

  video() {
    return <div>
      <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
        <source src={this.props.mp4} type='video/mp4'></source>
      </video>
    </div>
  }

  mouseEntered() {
    //this.setState({ hovering: true });
  }

  mouseLeft() {
    //this.setState({ hovering: false });
  }
}
