import React from 'react';

function List () {
  return (
      <> 
          <div className="checkbox">
              <input type="checkbox" className="checkboxInput" id="checkbox1" name="checkbox1"/>
              <label htmlFor="checkbox1"> checkbox1</label>   
          </div>
          <div className="checkbox">
              <input type="checkbox" className="checkboxInput" id="checkbox2" name="checkbox2"/>
              <label htmlFor="checkbox2"> checkbox2</label>   
          </div>
          <div className="checkbox">
              <input type="checkbox" className="checkboxInput" id="checkbox3" name="checkbox3"/>
              <label htmlFor="checkbox3"> checkbox2</label>   
          </div>
         
      </>
  )
}

export default List;