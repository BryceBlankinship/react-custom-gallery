import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Image from './image.jsx'

export default function CustomGallery({ preSelectedImages, images, onSelect, containerStyle, selectedStyle, unselectedStyle, width, height }) {
    preSelectedImages = preSelectedImages.map((image) => ({ src: image, isSelected: true }));
    images = images.map((image) => ({ src: image, isSelected: false }));

    const [elements, setElements] = useState(images);

    useEffect(() => {
        images.map((img, i) => {
            preSelectedImages.map((pre) => {
                if(img.src === pre.src){
                    images[i].isSelected = !images[i].isSelected;
                }
            });
            setElements([...images]);
            onSelect([...images]);
        });
    }, []);

    const handleImageClick = (image) => {
        let imagesCopy = [...elements];

        imagesCopy.map((img, i) => {
            if (image === img) {
                imagesCopy[i].isSelected = !imagesCopy[i].isSelected;
            }
        })

        setElements([...imagesCopy]);
        onSelect([...imagesCopy]);
    }

    return (
        <div style={containerStyle || {}}>
            {elements.map((image, i) => {
                return (
                    <Image
                        src={image.src}
                        isSelected={image.isSelected}
                        onImageClick={() => handleImageClick(image)}
                        key={i + Math.random()}
                        selectedStyle={selectedStyle}
                        unselectedStyle={unselectedStyle}
                        width={width}
                        height={height}
                    />
                )
            })}
            {elements.map((element) => {
                return <p>{element.isSelected === true ? 'true' : 'false'}</p>
            })}
        </div>
    )
}

CustomGallery.propTypes = {
    preSelectedImages: PropTypes.array,
    images: PropTypes.array,
    multiple: PropTypes.bool,
    onSelect: PropTypes.func,
    containerStyle: PropTypes.object,
    selectedStyle: PropTypes.object,
    unselectedStyle: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
}