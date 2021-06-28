import React from 'react'
const MainImage = ({ src }) => {
    return (
        <div>
            <img src={src} width="100%" height="400" style={{ border: 'solid 2px black' }} />
        </div>
    )
}
export default MainImage;