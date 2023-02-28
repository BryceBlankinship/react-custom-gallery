# react-custom-gallery
## An intuitive, simple, customizable react gallery

<i>With easy support for pre-selected images!</i>
<br></br>

```
npm install react-custom-gallery
```

<br>

## Demo with Storybook

```
npx storybook init

npm run storybook
```

<br>

## How to use

Here let's explore the example that inspired me to create this package. We have a dashboard of products, each product has an array of images that belong to it. The Gallery has an array of all the possible images.

💡 react-custom-gallery only requires you to supply arrays of image sources. This means you don't need to manage id's, or selected booleans!

Given the following input: 

```
    // all the possible images in our gallery
    const allImages = ["image1uri", "image2uri", "image3uri", "image4uri"];

    // the images for this specific item
    const preImages = ["image1uri", "image2uri"]; 
```

```
import CustomGallery from 'react-custom-gallery';

const [images, setImages] = useState([]);

// get all the images from the server
useEffect(() => {
    allImages = await axios.get('/gallery/all');
}, []);


// get the images for a specific item (optional)
useEffect(() => {
    thisProductImages = await axios.get('/product/images');
}, []);

return(
    <>
        <CustomGallery preSelectedImages={thisProductImages} images={allImages} onSelect={setImages} />
        {/** Display the selected images */}
        {images.map((image) => {
            if(image.isSelected === true){
                return <img src={image.src}></img>
            }
        })}
    </>
);
```

## With custom styling

```
containerStyle = {
    // can change the orientation from row to column using flex here, etc
}

selectedStyle = {
    // your styling here
}

unselectedStyle = {
    // your default styling here
}

<CustomGallery preSelectedImages={thisProductImages} images={allImages} onSelect={setImages} 
    containerStyle={containerStyle}
    selectedStyle={selectedStyle}
    unselectedStyle={unselectedStyle}
 />
```

<b>⭐️ If you found this package helpful, please give me a star!</b>