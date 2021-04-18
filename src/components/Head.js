import React from 'react'

export default function Head({face}) {
    return (
        <div class="head">
            <div
                style={face.hair} 
                class="hair">
                <div class="hair-corner"></div>
            </div>
            <div class="brows">
                <div class="brow"></div>
                <div class="brow"></div>
            </div>
            <div class="eyes">
                <div class="eye"></div>
                <div class="eye"></div>
            </div>
            <div class="nose"></div>
            <div class="mouth"></div>
            <div class="ears">
                <div class="ear"></div>
                <div class="ear"></div>
            </div>
      </div>
    )
}
