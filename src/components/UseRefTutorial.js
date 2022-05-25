import React, {useRef} from 'react'

const UseRefTutorial = () => {
    const inputRef = useRef(null);

    function onClick() {
        inputRef.current.focus();
        inputRef.current.value = ''
    }

  return (
    <div>
        <h1>Steve</h1>
        <input type='text' placeholder='name..' ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRefTutorial