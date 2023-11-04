import React from 'react'
import './style.css'

export default function Features() {
    const detailsArray = [
        { heading: 'Multi-lingual voice cloning', description: 'Clone your own voice into 28 languages and utilize it to bring all your ideas to life. Simply type a speech text, and the avatar will narrate it using your voice.' },
        {heading:'Automated translations',description:'One-click video translation will help you reach a global audience. Translate your videos in available 75 languages.'},
        {heading:'AI Storyboard',description:'Perfect content creation tool for learning and development professionals. Craft a script, create a course outline, and turn it into engaging videos in just a few clicks.'}
    ]
    return (
        <div className='features_container'>
            <div className="features_upper_section">
                <h1 className='features_heading'>Features</h1>
                <span className='features_desc'>Create videos at scale faster. Made for teams of all sizes.</span>
            </div>
            <div className="features_main_section">
                {detailsArray.map(elem=><div className="features">
                    <div className="details_heading">{elem.heading}</div>
                    <div className="details_description">{elem.description}</div>
                    <div className="read_more">Read more <i className="fa-solid fa-arrow-right"></i></div>
                </div>)}
            </div>
        </div>
    )
}
