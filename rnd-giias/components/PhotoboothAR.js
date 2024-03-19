'use client'

import 'aframe';
// import 'mind-ar/dist/mindar-face-aframe.prod.js';

const PhotoboohAR = () => {
    return (
        <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            <a-camera active="false" position="0 0 -4"></a-camera>
            <a-entity 
                // mindar-face-target="anchorIndex: 1"
            >
                <a-sphere color="green" radius="0.9"></a-sphere>
            </a-entity>
            <a-sky color="#ECECEC"></a-sky>
        </a-scene>
    )
}

export default PhotoboohAR;