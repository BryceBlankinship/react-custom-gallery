import React from 'react'
import PropTypes from 'prop-types'

export default function Image({ src, isSelected, onImageClick, unselectedStyle, selectedStyle, width, height }) {

    const unSelected = unselectedStyle || {
        borderRadius: 4,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        cursor: 'pointer',
        objectFit: 'contain'
    }

    const selected = selectedStyle || {
        backgroundColor: 'lightgray',
        border: '3px green dashed',
        borderRadius: 4,

        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        cursor: 'pointer',
        objectFit: 'contain'
    }

    return (
        <img src={src} style={isSelected ? selected : unSelected} width={width || 75} height={height || 75} onClick={onImageClick} />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    isSelected: PropTypes.bool,
    onImageClick: PropTypes.func,
    unselectedStyle: PropTypes.object,
    selectedStyle: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
}