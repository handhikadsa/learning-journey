'use client'

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import slides from "../data/slides"
import { useState } from "react";

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <PhotoAlbum
                layout="rows"
                photos={slides}
                targetRowHeight={150}
                onClick={({ index: current }) => setIndex(current)}
            />

            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </>
    )
}

export default Gallery