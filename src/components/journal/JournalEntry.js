import React from 'react';

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://pm1.narvii.com/7278/ff83fbbe24ab7bacc7955f4fbdc54b882e6b8adbr1-236-236v2_128.jpg)',
                }}></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>Un nuevo día</p>
                <p className='journal__entry-content'>Quis eiusmod consequat reprehenderit in est incididunt nulla excepteur.</p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
