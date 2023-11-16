import { useState } from 'react';
import Toggle from './Toggle.jsx';

const Nav = () => {

  const [ isChecked, setIsChecked ] = useState({
    'Museos': { checked: true, value: 'Museos'},
    'Actividades': { checked: true, value: 'Actividades'},
    'Ocio': { checked: true, value: 'Ocio'},
  });

  const handleChange = (event) => {
    setIsChecked({
      ...isChecked,
      [event.target.id]: {
        checked: event.target.checked,
        value: event.target.value
      }
    });
  };

  return (
    <nav className="h-14 w-max flex items-center ml-auto px-24 gap-5">
      <Toggle id="Museos" onChange={handleChange} checked={isChecked['Museos']?.checked || false}/>
      <Toggle id="Actividades" onChange={handleChange} checked={isChecked['Actividades']?.checked || false}/>
      <Toggle id="Ocio" onChange={handleChange} checked={isChecked['Ocio']?.checked || false}/>
    </nav>
  );
}

export default Nav;