'use client'

import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";

const LightboxComponent = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const handleShowImage = (currIndex) => {
      setOpen(true)
      setIndex(currIndex)
    }

    return (
        <>
            {images.map(({ src }, index) => (
              <div key={index} onClick={() => handleShowImage(index)}>
                <img
                  className="h-40 w-full max-w-full rounded-lg object-cover object-center cursor-pointer hover:scale-105 transition-transform"
                  src={src}
                  alt="gallery-photo"
                />
              </div>
            ))}

            <Lightbox
                index={index}
                on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
                open={open}
                close={() => setOpen(false)}
                slides={images}
            />
        </>
    )
}

export default LightboxComponent