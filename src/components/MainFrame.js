import React,{useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import {DragDropContext} from 'react-beautiful-dnd';
import _ from 'lodash';
import Area from './Area';

const MainFrame = () => {

    const {state,setState,moves,setMoves}=useContext(MainContext);

    const onDragEnd=({source,destination})=>{
       
    

        if(!destination)
            return;
        

        const prevSrcElem=state[source.droppableId].disks[source.index-1];
        const srcElem=state[source.droppableId].disks[source.index];
        const destElem=state[destination.droppableId].disks[destination.index];
        console.log('src:',source,'\ndest:',destination);
        console.log('\n');
        console.log('srcElem :',srcElem,'\ndestElem :',destElem);
        let movable;
        if(prevSrcElem)
        {
           movable=false;
        }
        else
        {
            if(destElem)
            {
                if(srcElem.value<destElem.value)
                    movable=true;
                else
                    movable=false;
            }
            else{
                if(state[destination.droppableId].disks.length)
                    movable=false;
                else
                    movable=true;
            }
        }


        if(movable)
        {
            const tmpDisk = state[source.droppableId].disks[source.index];
        
            setState(prev=>{
                prev[source.droppableId].disks.splice(source.index,1);
                prev[destination.droppableId].disks.splice(destination.index,0,tmpDisk);
                setMoves(moves+1);
                return prev;
    
            })
        }
    }
    return (
        <div className=" md:grid grid-cols-3 gap-8 ">
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                {
                    _.map(state,(data,key)=>{
                        return(
                            <Area data={data} dataKey={key} key={key}/>
                        )
                    })
                }
            </DragDropContext>
        </div>
    )
}


export default MainFrame;