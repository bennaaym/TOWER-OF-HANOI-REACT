import React from 'react'
import {Droppable} from 'react-beautiful-dnd';
import Disk from './Disk';
const Area = ({data,dataKey}) => {
    return (
        <>
           <Droppable droppableId={dataKey}>
               {
                   (provided)=>{
                       return(
                           <div 
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="flex flex-col  justify-end  px-6 pt-4  h-64 border-b-gray-400 border-b-8 rounded"
                           >
                               {provided.placeholder}
                            {
                                data.disks.map((disk,index)=>{
                                    return <Disk disk={disk} index={index} key={disk.id}/>
                                })
                            }
            
                            </div>
                       )
                   }
               }
           </Droppable> 
        </>
    )
}


export default Area;