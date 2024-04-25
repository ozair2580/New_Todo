import React from 'react';

const Search = ({setsearch,handleAdd}) => {
    return (
        <div className="pb-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row align-items-center">
              <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                onChange={(e)=>setsearch(e.target.value)}
                placeholder="Add new..."/>
              <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                  className="fas fa-calendar-alt fa-lg me-3"></i></a>
              <div>
                <button type="button" className="btn btn-primary" onClick={()=>handleAdd()}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Search;