import React from 'react'
import {Draggable} from 'react-beautiful-dnd';

const  Disk = ({disk,index}) => {

    return (
        <div>
            <Draggable draggableId={disk.id.toString()} index={index} key={disk.id.toString()}>
                {
                    (provided)=>{
                        return(
                            <div
                                key={disk.id}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="flex items-center justify-center"
                            >
                                <div 
                                    className={"w-"+disk.value+" bg-"+disk.color+"-400 rounded h-"+disk.height+" px-4 py-2"}>

                                </div>
                            </div>
                        )
                    }
                }
            </Draggable>
        </div>
    )
}

export default Disk;
