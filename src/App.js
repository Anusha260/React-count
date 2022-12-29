import React, { useState } from "react";
import "./App.css";

function App() {
  const list=[{name:"Anusha",age:22},{name:"Anu",age:21}]

return(
  <div>
    {
      list.map((event,index)=>{
        return(
          <div>
            <table>
              <th>Name</th>
              <th>Age</th>
              <tr>
                <ul>
                  <li>
                    <h1>{event.name}</h1>

                  </li>
                  <li>
                    <h1>{event.age}</h1>

                  </li>
                </ul>
              </tr>
            </table>
          </div>
        )
      })
    }

  </div>
)

}

export default App
