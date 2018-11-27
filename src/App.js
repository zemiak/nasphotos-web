import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Config from './Config.js';

class App extends React.Component {
    constructor() {
        super();
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openImageOrFolder = this.openImageOrFolder.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.config = new Config();

        this.state = {
            photos: [],
            currentImage: 0
        }
    }

    openImageOrFolder(event, obj) {
        // decide:
        // - if this is a folder - open it
        // - if this is an image - open Lightbox

        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        return (
            <div>
                <Gallery photos={this.state.photos} onClick={this.openImageOrFolder} />
                <Lightbox images={this.state.photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }

    componentDidMount() {
        this.fetchRootFolders();
    }

    fetchRootFolders() {
        fetch(this.config.getFolderUrl(this.config.getRootFolderId()))
            .then(value => value.json())
            .then(value => this.setState({photos: value.items,}));
    }
}

export default App;
