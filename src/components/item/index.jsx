import add from '../../assets/add.svg';
import { useDrag } from 'react-dnd';

import './style.css'

const Item = ({ id, title }) => {
  
  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { id, title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <div id="item-container" ref={dragRef}>
      <div>{title}</div>
    </div>
  );
};

export default Item;