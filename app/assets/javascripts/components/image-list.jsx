class ImageList extends React.Component {

  getDefaultProps() {
    return {
      images: []
    }
  }

  render() {
    return <div className="image-list">
      {this.renderImages()}
    </div>
  }

  renderImages() {
    return this.props.images.map(image =>
                                  <ImagePreview {...image} />
                                );
  }
}
