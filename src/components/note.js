import {MdDeleteForever} from 'react-icons/md';

const Note = ()=>{
    return(
        <div className="note">
            <span>This is First note!</span>
            <div className="note-footer">
                <small>13/04/2021</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
            
    )
}

export default Note;