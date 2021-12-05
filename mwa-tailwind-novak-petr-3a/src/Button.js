import React from 'react'

const DefaulBtn = (props) => {
    return (
        <div>
            <button
            className="px-4 py-2 bg-red-800 rounded-lg shadow-md hover:bg-yellow-300 hover:skew-x-2xl hover:text-gray-600 text-center transition-all duration-200">{props.text}</button>
   
        </div>
    )
}

export default DefaulBtn
