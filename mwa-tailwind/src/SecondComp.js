import React from 'react'

function SecondComp({photo1,txt,photo2,pp,ip})
{
  return(
    <div>
      <img className={ip} src={photo1} alt="x"/>
      <p className={pp}>{txt}</p>

      <img className={ip} src={photo2} alt="x"/>
      <p className={pp}>{txt}</p>
    </div>
  );
}
export default SecondComp
