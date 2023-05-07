import React from 'react'
import './PageHeader.scss'

function PageHeader() {
    return (
        <header className='page-header'>
            <div>
                <h1>Travel Planner</h1>
                <img src='/location.svg' alt='Location icon'>
                </img>
            </div>
        </header>
    )
}

export default PageHeader