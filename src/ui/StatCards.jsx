import React from 'react'
import {BookOpen} from 'lucide-react'
import '../index.css'



const StatCards = ({ title, value ,icons:Icon,bgColor,iconColor}) => {
  return (
    <div className="bg-[var(--card)] mt-5 border border-[#292e31] px-4 py-4 m-1 rounded-xl w-full max-w-72 hover:bg-[var(--card-foreground)] transition-all duration-200">
      {/* Top row: Title + Icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold truncate">{title}</h1>
       <div className='flex p-2 rounded-md'
        style={{ backgroundColor: bgColor, color:iconColor }}
       >
              {Icon && <Icon size={18}  />}
       </div>

      </div>

      {/* Value centered below */}
      <div className="flex justify-start">
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className='mt-2'>
                 <p className=' flex justify-start text-[#707679]' >due 5 problems</p>
      </div>
    </div>
  )
}

export default StatCards

