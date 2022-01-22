import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler(){
      setShowModal(true);
  }

  function closeHandler(){
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {showModal && <Modal onCancel={closeHandler} onConfirm={closeHandler}/>}
      {showModal && <Backdrop onClose={closeHandler}/>}
    </div>
  );
}

export default Todo;
