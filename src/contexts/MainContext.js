import React , {useState,createContext} from 'react';


export const MainContext = createContext();


const MainContextProvider = (props) =>{

    const [state,setState]=useState({})

    const [moves,setMoves] = useState(0);
    const [numOfDisks,setNumOfDisks]=useState(3);

    const generateArr = () =>{

        const colors=['orange','teal','indigo','red','green','blue']
        const sizes =[16,20,24,32,40,48];
        const hight=[20,16,12,10];
        const disks=[]

        for(let i=sizes.length-numOfDisks;i<sizes.length;i++)
        {
           disks.push({
               id:i,
               value:sizes[i],
               color:colors[i],
               height:hight[numOfDisks-3]
           })
        }
        
        setMoves(0);
        return disks
    }
    return (
        <MainContext.Provider value={{
            state,
            setState,
            moves,
            setMoves,
            numOfDisks,
            setNumOfDisks,
            generateArr,
        }}>

         {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;