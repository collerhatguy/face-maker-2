import React from 'react'

export default function Head({face}) {
    return (
        <div
            style={face.head} 
            class="head">
            <div
                style={face.hair} 
                class="hair">
                <div 
                    style={face.hair} 
                    class="hair-corner"></div>
            </div>
            <div 
                style={face.brows} 
                class="brows">
                <div class="brow"></div>
                <div class="brow"></div>
            </div>
            <div 
                class="eyes">
                <div class="eye">
                    <div className="iris"></div>
                    <div className="pupil"></div>
                </div>
                <div class="eye">
                    <div className="iris"></div>
                    <div className="pupil"></div>
                </div>
            </div>
            <div 
                style={face.nose}
                class="nose"></div>
            <div 
                style={face.mouth}
                class="mouth"></div>
            <div 
                style={face.ears}
                class="ears">
                <div class="ear"></div>
                <div class="ear"></div>
            </div>
      </div>
    )
}
