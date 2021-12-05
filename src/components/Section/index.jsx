import add from '../../assets/add.svg';
import Item from '../item';
import { useDrop } from 'react-dnd';

import './style.css'
import { useState } from 'react';
const Section = ({title}) => {
  const [items, setItems] = useState([
    {id: 1, title: 'asdasdasd asdasdasdasd asdasdasdasdasd dasdasdasdasd'},
    {id: 2, title: 'asdasdasd asdasdasdasd asdasdasdasdasd dasdasdasdasd'}]);
  
    const [{ isOver }, dropRef] = useDrop({
    accept: 'item',
    drop: (item) => setItems([...items, item]),
    collect: (monitor) => ({
        isOver: monitor.isOver()
    })
  })

  const renderItems = () => items.map(item => <Item title={item.title} id={item.id}/>)

  return (
    <div id="container">
      <div id="conatiner-header">
          <h5 id="title">{title}</h5>
          <img src={add} id="add-icon"/>
      </div>
      <div id="container-items" ref={dropRef}>
        {renderItems()}
      </div>
    </div>
  );
};

export default Section;