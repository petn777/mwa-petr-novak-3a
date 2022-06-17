import React from 'react'

function FirstComp({photo})
{
  return(
    <div>
        <img className="h-16 w-16" src={photo} alt="x" />
        <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

    </div>
  );
}
export default FirstComp
