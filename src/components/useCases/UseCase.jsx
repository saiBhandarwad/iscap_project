import React from 'react'
import './style.css'

export default function UseCase() {
    const imgSrc = ['https://elai.io/wp-content/uploads/2023/11/LD.webp', 'https://elai.io/wp-content/uploads/2023/11/Marketing-videos.webp', 'https://elai.io/wp-content/uploads/2023/11/Marketing-videos-1.webp', 'https://elai.io/wp-content/uploads/2023/11/LD-1.webp']
    return (
        <div className='use_case_container'>
            <div className="usecase_upper_section">
                <h1 className='usecase_heading'>Use Cases</h1>
                <span className='usecase_desc'>Discover how Elai can empower your team to produce training videos at scale.</span>
            </div>
            <div className="usecase_img_container">
                {imgSrc.map((elem) => <div className="usecase_img">
                    <img src={elem} alt="image" />
                </div>)}

            </div>
            <div className="usecase_btn">
                <button>Create a free AI video <i className="fa-solid fa-greater-than"></i></button>
            </div>
        </div>
    )
}
