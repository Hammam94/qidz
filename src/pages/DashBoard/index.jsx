import Section from '../../components/Section';
import pattern from '../../assets/pattern.svg';

import './style.css';

function DashBoard() {
  const items = [
    'asdasdasd asdasdasdasd asdasdasdasdasd dasdasdasdasd', 
    'asdasdasd asdasdasdasd asdasdasdasdasd dasdasdasdasd'];
  
    return (
    <div className="page-container" style={{backgroundImage: `url(${pattern})`, height: '100vh'}}>
      <Section title="Ambitie"/>
      <div id="row-container">
        <div className="first-child">
          <Section title="Doelstellingen"/>
        </div>
        <Section title="Strategie"/>
        <Section title="DashBoard"/>
        <Section title="Actieplan"/>
      </div>
    </div>
  );
}

export default DashBoard;
