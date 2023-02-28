import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageGallery from '../components/gallery';

import { useState } from 'react';

const stories = storiesOf('App Test', module);


stories.add('App', () => {

    const preImages = ["https://storage.googleapis.com/mellowdepot/fd0607c9f5cd2db6faf75fe558054e8ad298fcce3b94a864927d354935dcb68f.webp", "https://storage.googleapis.com/mellowdepot/a514fa13d3f50297f5059cb02cf9e61f4d19bb1ac710f65f4e0116780dc38f58.webp"]
    const allImages = ["https://storage.googleapis.com/mellowdepot/0c54c4618d134d6e0289bf532d5f9a0b7c6dda495edc96b050c9b306853089e0.webp", "https://storage.googleapis.com/mellowdepot/fd0607c9f5cd2db6faf75fe558054e8ad298fcce3b94a864927d354935dcb68f.webp", "https://storage.googleapis.com/mellowdepot/a514fa13d3f50297f5059cb02cf9e61f4d19bb1ac710f65f4e0116780dc38f58.webp"]

    const [images, setImages] = useState([]);

    return (<>
        {images.map((image) => {
            if (image.isSelected) {
                return <p>{image.src}</p>
            }
        })}
        <ImageGallery preSelectedImages={preImages} images={allImages} onPick={setImages} width={150} height={150} /></>)
});