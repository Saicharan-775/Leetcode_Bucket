import React from 'react'
import { User } from "lucide-react"
const button = ({icon: Icon,name}) => {
  return (
    <div>
        <button className="inline-flex items-center gap-2 bg-[#0d1113] border-1 border-[#3c3e41] hover:bg-[#171b1e] text-white font-medium px-4 py-2 rounded-xl shadow cursor-pointer">
            {name}
             {Icon && <Icon size={18} />}
             
        </button>
    </div>
  )
}

export default button