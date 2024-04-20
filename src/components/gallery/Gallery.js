import photos from './photos.json'
import { useState } from 'react'
import './GalleryStyle.css'
import Photo from './Photo';

export default function Gallery() {
    const [images, setImages] = useState(photos);

    return (
        <div className='card gallery-card'>
            <div className='gallery-title'>תמונות ווידאו שנמצאו</div>
            <div className='galley-card-container'>
                <div className='gallery'>
                    {images.photos.slice(0,9).map((photo, index) => (
                        <Photo key={index} location={index} photo={photo}/>
                    ))}
                </div>
            </div>
            <div>
                <button className='gallery-button'>תמונות נוספות</button>
            </div>
        </div>
    )
}