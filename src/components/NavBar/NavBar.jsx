import React from 'react';
import SeccionLi from '../Seccions/index.jsx';
import secciones from './dataSecciones.jsx';

export default function NavBar() {

  return (
    <nav className="main__container__navbar">
      {secciones.map(({id, seccion, iconSvg, url }) => (
        <SeccionLi key={id} seccion={seccion} iconSvg={iconSvg}  url={url}/>
      ))}
    </nav>
  );
}