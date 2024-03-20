import { useState } from 'react'


function Counter(props) {
  const [globalCount, setglobalCount] = useState(0)





  
  const handleincrement = globalCount => globalCount + 1
  return (
    <div>

        <p>{props.person[0]}-{props.person[1]}</p>


        <p>Local</p>
      <button onClick={() => setglobalCount(handleincrement)}>{globalCount}</button>
        <p>Global</p>

        <h1>
            {props.asd}
        </h1>
        

    </div>
  )
}

export default Counter