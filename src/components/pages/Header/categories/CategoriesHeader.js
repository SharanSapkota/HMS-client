import React from 'react'
import {useHistory} from 'react-router-dom'


function CategoriesHeader(props) {
    
    const history = useHistory();

    const nextPage = () => {
        history.push(`/${props.page}`)
    }

    return (
        <div>
            <div className = "color-r">
                {props.title}
                </div>

                <div >
                    <img className = "max-height-30" src ={props.imgLink} onClick = {nextPage}/>
                </div>
        </div>
    )
}

export default CategoriesHeader
