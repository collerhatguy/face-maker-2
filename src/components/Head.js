import React from 'react'

export default function Head({face}) {
    return (
        <div className="head-container">
            <div
                style={face.head} 
                class="head">
                <div
                    style={face.hair} 
                    class="hair">
                        <div style={{backgroundColor: face.hair.backgroundColor}} className="hair-piece"></div>
                        <div style={{backgroundColor: face.hair.backgroundColor}} className="hair-piece"></div>
                    <div 
                        style={face.hair} 
                        class="hair-corner">
                            <div style={{backgroundColor: face.hair.backgroundColor}} className="hair-corner-piece"></div>
                            <div style={{backgroundColor: face.hair.backgroundColor}} className="hair-corner-piece"></div>
                        </div>
                </div>
                <div 
                    style={face.brows} 
                    class="brows">
                    <div class="brow"></div>
                    <div class="brow"></div>
                </div>
                <div 
                    class="eyes">
                    <div 
                        style={face.eyes}
                        class="eye">
                        <div 
                            style={face.eyes.iris}
                            className="iris"></div>
                        <div className="pupil"></div>
                    </div>
                    <div 
                        style={face.eyes}
                        class="eye">
                        <div 
                            style={face.eyes.iris}
                            className="iris">
                        </div>
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
                    class="ears">
                    <div 
                        style={face.ears}
                        class="ear"></div>
                    <div 
                        style={face.ears}
                        class="ear"></div>
                </div>
            </div>
        </div>
    )
}
