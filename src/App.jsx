import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dateselection from './Components/Dateselection'
import List from './Components/List'
import Search from './Components/Search'
import String_revesion from './Javascript/String_revesion'
import Array_revesions from './Javascript/Array_revesions'
import { useDispatch, useSelector } from 'react-redux'
import {  SearchApi, api, deleteApi, handleupdate, search as slicesearch} from './Redux/Reducer'

function App() {
 const [search,setsearch]=useState([])
 const [data,setdata]=useState([])
 const [upadtedata,setupdatedata]=useState();
 const [check,setcheck]=useState(false);
 const dispatch=useDispatch()
 const selector=useSelector(state=>state.counter)

 useEffect(()=>{
  dispatch(api())
 },[])
 const handleAdd=()=>{
  dispatch(SearchApi(search))
   
  
 }
 

 const handledelete=(id)=>{
  dispatch(deleteApi(id))
  
}
const handleEdit = (id, search) => {
  dispatch(handleupdate({id,search}))
  // const updatedData = data.map((item, i) => {
  //   if (i === id) {
  //     // Update the item at index 'id' with the new string 'search'
  //     return search;
  //   } else {
  //     // Return the item unchanged for other indexes
  //     return item;
  //   }
}


 const str="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus."
 console.log(str.split(" ").replace(str[1]," "))

  return (
   
    <section className="vh-100">
     <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card" id="list1" >
            <div className="card-body py-4 px-4 px-md-5">
  
              <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <i className="fas fa-check-square me-1"></i>
                <u>My Todo-s</u>
              </p>
             <Search setsearch={setsearch} handleAdd={handleAdd}/> 
            <input type="text"  onChange={(e)=>setsearch(e.target.value)}/>
             <input type="text"  onChange={(e)=>setsearch(e.target.value)}/> 
             <input type="text" /> 
              <hr className="my-4"/>
           <String_revesion/>
            <Array_revesions/>
             <Dateselection/> 
            <List setcheck={setcheck} data={data} handledelete={handledelete} handleEdit={handleEdit} search={search}/>
            
  
            </div>
          </div>
        </div>
      </div>
    </div> 
  </section>
  )
}

export default App;
