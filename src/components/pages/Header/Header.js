import React from 'react'
import './Header.css'
import CategoriesHeader from "./categories/CategoriesHeader"
import ImgLinks from '../ImgLinks.json'

function Header() {
  
    return (
        <>
        <div> 
            <img 
            className = "max-height-30"
             src = {ImgLinks.header}
              />

        </div>
        <div>
            Categories
        </div>
        <div>
            <CategoriesHeader title = "Breakfast" imgLink =  {ImgLinks.breakfast} page='breakfast' />
            <CategoriesHeader title = "Lunch" imgLink =  {ImgLinks.lunch} page='lunch'/>
            <CategoriesHeader title = "Dinner" imgLink =  {ImgLinks.header} page='dinner'/>
            <CategoriesHeader title = "Drinks" imgLink =  {ImgLinks.lunch} page='drinks'/>
        </div>
        

        </>
    )
}

export default Header
