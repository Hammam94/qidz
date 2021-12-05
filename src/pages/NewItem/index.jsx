import { useParams } from 'react-router-dom';
import './style.css';
function NewItem() {
  let { id } = useParams();

  return (
    <div id="parent">

      <div id="new-item-container">
        <h3 className="new-item-title">Nieuw</h3>
        <p className="new-item-title"> kasjkdgajdfasvdghasfdvashkjfashdas</p>

        <label className="label"> Titel:</label>
        <input type="text" name="Titel" />
        
        <label className="label"> description:</label>
        <input type="text" name="description" />

        <button id="new-item-button">
          Toevoegan
        </button>
      </div>
    </div>
  );
}

export default NewItem;
