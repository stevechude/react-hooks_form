import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const EffectTutorial = () => {
    const [data, setData] = useState('');
    const [count, setCount] = useState(0)

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data[2].email)
            console.log('API was called.');
        });
    }, [count])

  return (
    <div>
        <h1>{count}</h1>
        Hello {data}
        <button onClick={() => {
            setCount(count + 1)
        }}>Click Me</button>
        </div>
  )
}

export default EffectTutorial