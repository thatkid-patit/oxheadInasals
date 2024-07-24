import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

import {
    MenuContainer,
    MenuContent,
    MenuTopline,
    MenuHeading,
    MenuList,
    MenuListItem,
    MenuImage,
    MenuName,
    MenuHr
} from './elements'

const Menu = ({$category, $setCategory}) => {

    const {category} = useContext(StoreContext);

  return (
    <MenuContainer id='menu'>
        <MenuContent>
            <MenuTopline>Explore Our Menu</MenuTopline>
            <MenuHeading>
                Dive into flavor with our sizzling steaks, juicy burgers, and succulent seafood
            </MenuHeading>
            <MenuList>
                {
                    category.map((categ, index) => {
                        
                        return (
                            <MenuListItem
                                onClick={()=>$setCategory(c =>c === categ.id ? 0 : categ.id)}
                                key={index}
                                >
                                <MenuImage
                                    className={$category===categ.id ? "active" : ""}
                                    src={categ.image} 
                                    alt={categ.name}
                                    />
                                <MenuName
                                    className={$category===categ.id ? "active" : ""}
                                    >{categ.name}</MenuName>
                            </MenuListItem>
                        )
                    })
                }
            </MenuList>
        </MenuContent>
        <MenuHr/>
    </MenuContainer>
  )
}

export default Menu
