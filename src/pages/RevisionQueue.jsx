import React from 'react'
import Button from "../ui/button"
import {reviewcards} from "../constants/constants"// getting review cards data  from constants
 import {ClipboardClock,RefreshCcw,Play} from "lucide-react"
import StatCards from '../ui/StatCards'
import ProgressBar from '../ui/Progressbar'
import RevisonProblemCard from '../ui/RevisonProblemCard'

const RevisionQueue = () => {


  return (
    <div className='mt-2 '>
        <div className='flex justify-between'> 
            <div className='flex  gap-2'>
              <div>
                      <div className='bg-[#143748] text-[#1990cd] rounded-lg p-2 m-2'>
                        <ClipboardClock size={28}/>
                </div>
              </div>
                
             <div>
                   <h1 className='text-3xl font-medium'>Today's Revision Queue</h1>
                   <p className='text-[var(--muted-foreground)]'>5 problems remaining • ~2h 15m estimated</p>
             </div>
            
            </div>
             
             <div className='flex gap-6 '>
            <Button name="Refresh Queue" icon={RefreshCcw} />
            <Button name ="Start Session" icon ={Play}/>
            </div>
        </div>
        {/* Stat cards  */}
        <div className="flex justify-center-safe">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px] px-2">
            {reviewcards.map((card, idx) => (
              <StatCards
                key={idx}
                title={card.title}
                value={card.value}
                icons={card.icons}
                bgColor={card.bgColor}
                iconColor={card.iconColor}
              />
            ))}
              </div>
         </div>
       {/* Session Progress */}
       <div className='bg-[var(--card)] w-full h-32 mt-3 rounded-lg p-4 m-2'>
         <div className='flex justify-between'>
          <div>
            <h1> Session Progress </h1>
          </div>
           <div className='flex'>
            <h1>3/5 Problems</h1>
           </div>
         </div>
         <div className='mt-4'>
          <ProgressBar value={70} max={100}/>
         </div>
         <div>
          <div className='flex justify-between text-[var(--muted-foreground)] mt-4'>
            <p >Started</p>
            <p>70% completed</p>
            <p>Finished</p>
          </div>
         </div>
       </div>
       {/* Revison Queue */}
     <div className='p-4 m-2 w-7xl'>
      <div className='flex justify-between p-2'>
        <div className='flex'>
             <h1 className='text-4xl'>Revison Queue</h1>
        </div>
        <div className='flex p-4'>
          <p className='text-[var(--muted-foreground)]'>Ordered by priority (Strict problems first)</p>
        </div>
      </div>
      <div className='w-7xl justify-center'>
                <RevisonProblemCard bucket="Strict" level="Medium" title="Pascals Triangle" name="pascals-triangle"/>
                <RevisonProblemCard bucket="Strict" level="Hard" title="Trapping Rain Water" name="trapping-rain-water"/>
                <RevisonProblemCard bucket="Normal" level="Easy"  title="Two Sum" name="two-sum"/>
             
      </div>
      
       
     </div>
         
       
    </div>
  )
}

export default RevisionQueue;