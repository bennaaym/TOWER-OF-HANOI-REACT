import React,{useEffect,useContext} from 'react'
import MainFrame from './MainFrame';
import {MainContext} from '../contexts/MainContext'
const  Home = () => {
    
    const {state,setState,moves,setNumOfDisks,numOfDisks,generateArr} = useContext(MainContext);

    const handleChange =(e)=>{
        setNumOfDisks(e.target.value);
    }

    

    useEffect(() => {
        setState({
            ...state,
            start:{
                title:'start',
                disks:generateArr()
            },
        
            transition:{
                title:'transition',
                disks:[]
            },
    
            end:{
                title:'end',
                disks:[]
            }
            
        })
    }, [numOfDisks])

    useEffect(()=>{
        if(moves===Math.pow(2,numOfDisks)-1 && state['end'].disks.length === numOfDisks)
            alert('Congrats, you have solved the Tower of Hanoi using the minimum number of steps. Increase the number of disks to make the puzzle more difficult');
    },[moves])

    return (
        <>
            <h1 className=" text-center text-gray-400 mt-8  text-4xl font-semibold  capitalize tracking-wider">Tower of Hanoi</h1>
            <div className="row-start-2 row-end-8">
                <MainFrame/>
            </div>
            <div className="flex justify-center items-center space-x-24">
                <div>
                    <label htmlFor="pieces"  className="text-2xl  tracking-wide  text-gray-400">Pieces : </label>
                    <input 
                        onChange={handleChange}
                        id="pieces" className="px-2 py-2 rounded-md bg-gray-800 bg-opacity-50 text-gray-500" type="number" min="3" max="6" value={numOfDisks}/>
                </div>
                <span className="text-2xl  tracking-wide  text-gray-400 text-center">Moves : {moves}</span>
                <span className="text-2xl  tracking-wide  text-gray-400 text-center">
                    Expected : {Math.pow(2,numOfDisks)-1} <span className="text-sm" >(moves)</span>
                </span>
            </div>
        </>
    )
}


export default Home;