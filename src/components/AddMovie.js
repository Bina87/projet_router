import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const AddMovie = ({handeladd}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [rating, setRating] = useState(1)
    const [image, setImage] = useState("")
    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    const handelrating=(r)=>setRating(r);

//addd card
const handelsubmit=(e)=>{
    e.preventDefault();
    const newMovie={
        id:Math.random(),
        name:name,
        rating:rating,
        date:date,
        image:image
    };
    handeladd(newMovie);
    closeModal();
};

    return (
        <div>
                 <button className="btn add-movie-btn" onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
          <form action="" className="" onSubmit={handelsubmit}>

            <label>Name</label>
            <input type="text" value={name} onChange={(e=>setName(e.target.value))} required/>
            <label>Date</label>
            <input type="date"  value={date} onChange={(e=>setDate(e.target.value))}required />
            <label>Rating</label>
            <StarRating rating={rating} handelrating={handelrating}/>
            <label>Image</label>
            <input type="URL" value={image}  onChange={(e=>setImage(e.target.value))} required/>
            <div>
                <button classeName="btn btn-primary" type="submit">Add</button>
                <button classeName="btn btn-primary" onClick={closeModal}>Cancel</button>
            </div>
          </form>
      </Modal>
        </div>
    )
}

export default AddMovie
