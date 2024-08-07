import React from 'react'
import { BsTrash } from "react-icons/bs"
import { BiEditAlt } from "react-icons/bi"
import axios from "axios"
import { baseUrl } from "../utils/constant"

const List = ({id,task,setUpdateUi,updateMode}) => {

    const removeTask = () => {
        axios.delete(`${baseUrl}/delete/${id}`).then((res) => {
            console.log(res);
            setUpdateUi((prevState) => !prevState)
        })
    }

  return (
    <li>
        {task}
        <div className='icon_holder'>
            <BiEditAlt className='icon' onClick={() => updateMode(id,task)}/>
            <BsTrash className='icon' onClick={removeTask}/>
        </div>
    </li>
  )
}

export default List