import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const _PHOTOS = [
    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FIMG_2024.JPG', width: 4, height: 3 },
    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FIMG_2039.JPG', width: 3, height: 4 },
    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FIMG_2075.JPG', width: 3, height: 4 },

    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FIMG_2090.JPG', width: 3, height: 4 },
    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FIMG_2115.JPG', width: 4, height: 3 },
    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FIMG_2125.JPG', width: 3, height: 4 },

    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FP1040215.JPG', width: 4, height: 3 },
    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FP1040228.JPG', width: 4, height: 3 },
    { src: 'http://lenovo-server.local:8081/nasphotos/rest/files?path=2013%2F1301+Deti%2FIMG_0672.JPG', width: 4, height: 3 }
];


class App extends React.Component {
    constructor() {
        super();
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openImageOrFolder = this.openImageOrFolder.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);

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
        this.setState({
            photos: _PHOTOS,
        });
    }
}

export default App;
