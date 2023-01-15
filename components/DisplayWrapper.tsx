import React from 'react'

interface Props {
  password: string | null
}

const DisplayWrapper: React.FC<Props> = ({password}) => {
  return (
    <div className="bg-dark-grey p-4 md:p-6 flex justify-between items-center mb-4">
      <h2 className={`text-white font-medium text-3xl leading-3xl ${password ? 'opacity-100' : 'opacity-25'}`}>
        {password}
      </h2>
    </div>
  )
}

export default DisplayWrapper
