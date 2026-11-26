import React, { useRef, useState } from 'react'
import './TodoEditor.css'
const TodoEditor = ({onCreate}) => {
  const [content, setContent]=useState('')
  const inputRef = useRef()

  const onChangeContent=(e)=>{
    setContent(e.target.value)
  }

  const onKeyDown=(e)=>{
    if(e.keyCode==13){
      onSubmit()
    }

  }

  const onSubmit=()=>{
    if(content===''){
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }
  return (
    <div className='Editor'>
        <input 
        type="text" 
        ref={inputRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder='구매해야 할 물건...'/>
        <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor