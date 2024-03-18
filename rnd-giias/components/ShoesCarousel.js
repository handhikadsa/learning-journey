'use client'

import { Fragment, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

const shoes = [
    {
        name: "Vans",
        src: "/images/vans.png"
    },
    {
        name: "Nike",
        src: "/images/nike.png"
    },
    {
        name: "NB",
        src: "/images/nb.png"
    }
]

const ShoesCarousel = () => {

    const [index, setIndex] = useState(0);

    const updateIndex = ({ index: current }) => setIndex(current);

    return (
        <div>
            <Lightbox
                styles={{ 
                    container: {backgroundColor: "transparent"}, 
                    button: { display: "none" },
                }}
                index={index}
                slides={shoes}
                plugins={[Inline]}
                on={{
                    view: updateIndex,
                }}
                carousel={{
                    padding: 0,
                    spacing: 0,
                    imageFit: "contain"
                }}
                inline={{
                    style: {
                        width: "100%",
                        maxWidth: "900px",
                        aspectRatio: "4 / 3",
                        margin: "0 auto",
                    },
                }}
            />

            <div className="flex justify-center items-center mt-10 gap-3">
                <div className={`${index == 0 ? "bg-black" : "bg-black/20"}  rounded-full p-1`}></div>
                <div className={`${index == 1 ? "bg-black" : "bg-black/20"}  rounded-full p-1`}></div>
                <div className={`${index == 2 ? "bg-black" : "bg-black/20"}  rounded-full p-1`}></div>
            </div>
        </div>
    );
}

export default ShoesCarousel;