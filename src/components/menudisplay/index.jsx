import React, { useContext } from 'react'
import MenuCard from '../menucard'
import {
    MenuDisplayContainer,
    MenuDisplayContent,
    MenuDisplayTopline,
    MenuDisplayList
} from './elements'
import { StoreContext } from '../../context/StoreContext'

const MenuDisplay = ({$category}) => {

    const {products} = useContext(StoreContext);

  return (
    <MenuDisplayContainer>
        <MenuDisplayContent>
            <MenuDisplayTopline>Top dishes near you</MenuDisplayTopline>
            <MenuDisplayList>
                {
                    products.map((product, index)=> {
                        if($category === 0 || $category === product.category) {
                            return (
                                <MenuCard key={index}
                                    $id={product.id}
                                    $name={product.name}
                                    $categ={product.category}
                                    $desc={product.description}
                                    $price={product.price}
                                    $image={`https://oxheadapi.wd99p.com/${product.image}`}
                                />
                            )
                        }     
                    })
                }
            </MenuDisplayList>
        </MenuDisplayContent>
    </MenuDisplayContainer>
  )
}

export default MenuDisplay
