import React from "react";
import './GalleryStyle.css'

export default function Photo({photo}) {

    return (
         <img src={photo.url} alt="something" />
    )
}