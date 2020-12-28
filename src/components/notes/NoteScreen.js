import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input type='text' placeholder='Some awesome title' className='notes__title-input'/>

                <textarea placeholder='What happend today?' className='notes_textarea' />
            </div>

            <div className='notes__image' >
                <img src='https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2020-05/star-wars-the-skywalker-saga-1280.png?h=c673cd1c&itok=m_ee5xuz' alt='imagen' />
            </div>
        </div>
    )
}
