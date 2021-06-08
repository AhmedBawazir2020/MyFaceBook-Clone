import React from 'react'
import './Widgets.css'


function Widgets() {
    return (
        <div className="widgets">

            <iframe
                src="https://challenge-7a423.firebaseapp.com/"
                width="340"
                height="100%"
                style={{
                    border: "none", overflow:"hidden"
                }}
                scrolling="yes"
                frameBorder="0"
                allowFullScreen="true"
                allow="encrypted-media"
            ></iframe>

        </div>
    )
}

export default Widgets
