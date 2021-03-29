import React, {useState} from 'react'
import {postFunction} from '../../../../../API/POST/Post'

function Drinks() {

    const [Value, setValue] = useState(
{
        "espresso" : "",
        "milkTea" : "",
        "tea" : ""
    }

    )

    const onSubmit = () => {
      postFunction(Value)
    }

    const onChangeHandler = e => {
        
        setValue({...Value,  [e.target.name]: e.target.value})
    }
console.log(Value)
    return (
        <>
        <div className = "heading1">
           Drinks
        </div>

        <div>


<label> Espresso</label>
<input type="checkbox" id="vehicle1" name="espresso" value="espresso" />
                 <label for="quantity">Qty:</label>
                <input type="number" id="quantity" name="espresso" value="espresso" min="1" max="20" onChange = {(e) => onChangeHandler(e)}/>
                            </div>
        <div>


<label> Milk Tea</label>
<input type="checkbox" id="vehicle1" name="milkTea" value="milkTea" onChange = {(e) => onChangeHandler(e)} />
                 <label for="quantity">Qty:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="20"  />
                            </div>
        <div>


<label> Tea</label>
<input type="checkbox" id="vehicle1" name="tea" value="tea" onChange = {(e) => onChangeHandler(e)} />
                 <label for="quantity">Qty:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="20"  />
                            </div>

<div>
    <button onClick={() => onSubmit()}>Submit</button>
</div>

        </>

    )
}

export default Drinks
