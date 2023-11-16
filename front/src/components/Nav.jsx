import { useState } from 'react';
import Toggle from './Toggle.jsx';

const Nav = () => {

  const [ isChecked, setIsChecked ] = useState({
    "centre d'exposicions": { checked: true, value: "centre d'exposicions"},
    'centres patrimonials': { checked: true, value: 'centres patrimonials'},
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
      <Toggle id="centre d'exposicions" onChange={handleChange} checked={isChecked["centre d'exposicions"]?.checked || false}/>
      <Toggle id="centres patrimonials" onChange={handleChange} checked={isChecked['centres patrimonials']?.checked || false}/>
    </nav>
  );
}

export default Nav;