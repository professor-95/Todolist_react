import React, { useState } from 'react'
import { SiAddthis, SiD } from "react-icons/si";

const App = () => {
  let [item, setItem] = useState("")
  let [list, setList] = useState([])
  const btnClick = () => {
    list.push(item)
    setList([...list])
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-9/12 h-screen '>
        <h1 className='text-slate-700 font-bold text-5xl mt-5 text-center'>
          Add Your Todo Here...
        </h1>
        <div class="input-group mb-3 mt-3">
          <input type="text" class="form-control" placeholder="Enter your text.." onChange={(e) => { setItem(e.target.value) }} aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={btnClick}>Add</button>
        </div>
          <h3 className='text-1xl font-semibold'>Made with love by <span className='font-extrabold'>Mahdi Khan</span></h3>

        {
          list.length != 0 ?
            <div>
              <table class="table">
                <tbody>
                  <thead className=''>
                    <tr className=''>
                      <th scope="col" className='text-3xl'>No.</th>
                      <td scope="col" className='text-3xl'>ToDo's</td>
                    </tr>
                  </thead>
                </tbody>
                <tbody>
                  <tr className=''>
                    {
                      list.map((index, i) => {
                        return (
                          <tr>
                            <th scope='column' className='text-[20px] font-semibold text-slate-800'>{i + "."}</th>
                            <td className='text-[20px] font-semibold text-slate-800'>{index}</td>
                          </tr>
                        )
                      })
                    }
                  </tr>
                </tbody>
              </table>
            </div> :
            <div>

            </div>
        }

      </div>
    </div >
  )
}

export default App