import React, { useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
const List = ({handleEdit,search,setcheck,handledelete}) => {
  const {data,Error}=useSelector(state=>state.counter)
 console.log(data)
  useEffect(()=>{

  },[data,Error])
    
    return (
       <>
       {data&&data.map((item,id)=>
     
       <ul key={id} className="list-group list-group-horizontal rounded-0">
    
        <li
          className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">

          <div className="form-check">
            <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked2"
              aria-label="..."  />
          </div>
        </li>
        <li
          className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          <p className="lead fw-normal mb-0">{item.title}</p>
        </li>
        <li className="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
          <div
            className="py-2 px-3 me-2 border border-warning rounded-3 d-flex align-items-center bg-light">
            <p className="small mb-0">
              <a href="#!" data-mdb-toggle="tooltip" title="Due on date">
                <i className="fas fa-hourglass-half me-2 text-warning">warning</i>
              </a>
              28th Jun 2020
            </p>
          </div>
        </li>
        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div className="d-flex flex-row justify-content-end mb-1">
            <MdEdit  className="fas fa-pencil-alt me-3 text-info Edit" onClick={()=>handleEdit(id,search)}/>
               <MdDelete  className="fas fa-trash-alt text-danger Delete" onClick={()=> handledelete(item.id)}/>
          </div>
          <div className="text-end text-muted">
            <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
              <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>28th Jun 2020</p>
            </a>
          </div>
        </li>
      </ul>)}
      </>
    );
};

export default List;