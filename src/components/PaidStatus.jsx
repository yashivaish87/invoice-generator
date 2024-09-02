import React from 'react'

function PaidStatus({ type }) {
    const classNames = {
        paid :  ['text-[#33d69f] bg-[#33d69f0f]' , 'bg-[#33d69f]' ],
        pending : ['text-[#ff8f00] bg-[#ff8f000f]' , 'bg-[#ff8f00]'],
        draft : ['text-[#C2C2C2] bg-[#dfe3fa80]' , 'bg-[#C2C2C2]']
    }
  return (
        <div className={`${type === 'paid' ? classNames.paid[0] : type === 'pending' ? classNames.pending[0] : classNames.draft[0]} flex justify-center space-x-2 rounded-lg items-center px-4 py-2`}>
          <div className={` h-3 w-3 rounded-full ${type === 'paid' ? classNames.paid[1] : type === 'pending' ?classNames.pending[1] :classNames.draft[1] }`}></div>
              
          <p>{type}</p>
          
    </div>
  )
}

export default PaidStatus