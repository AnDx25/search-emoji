import { useMemo, useState } from "react"
import './mainComponent.css'
import mockData from '../../mockData'

// const mockData=[
//     {
//         title:"Happy",
//         symbol:"😀",
//         keywords:["happy","laughing","hihi","haha"]
//     },
//     {
//         title:"Sad",
//         symbol:"🙁",
//         keywords:["sad","depress","tensed","stressed"]
//     },
//     {
//         title:"Rage",
//         symbol:"😡",
//         keywords:["angry","rageful","burning","red face","mad","emotion","furious"]
//     },
//     {
//         title:"Angry",
//         symbol:"😠",
//         keywords:["angry","rageful","mad","emotion","furious"]   
//     },
    
// ]
const MainComponent=()=>{
   
    const [searchString,setSearchString]=useState('');
    const handleChangeSearchString=(event)=>{
        setSearchString(event.target.value)
    }
    const result=useMemo(()=>{
        return mockData.filter((value)=>{
            const {keywords}=value;
            return keywords.includes(searchString)
        })
    },[searchString])
   
    console.log(result)
    return(
        <div className="main-container">
            
            <input onChange={handleChangeSearchString}/>
            
            {
               
                result.map((data,index)=>(
                    <div key={index}>
                        <p id="emoji" key={index}>{data.symbol}<span>{data.title}</span></p>
                    </div>
                ))
            } 
        </div>
    )
}
export default MainComponent