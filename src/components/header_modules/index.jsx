import React from 'react'
import logo from '../../assets/img/[LOGO].png'
import {
    StyledHeader,
    MenuContainer,
    StyledMenuButton,
    HeaderTitleContainer,
    Hamburguer,
    CloseButton
} from '../../style/styled-components'
import styled from 'styled-components'


const Header = (props) => {

    const handlerClick = () => {
        props.setMenuModules(!props.menuModules)
    }

    return (
        <StyledHeader>
            <MenuContainer>
                <StyledMenuButton onClick={handlerClick} setMenuModules={props.setMenuModules} menuModules={props.setMenuModules} >
                    {props.menuModules === false ? <Hamburguer /> : <CloseButton />}
                </StyledMenuButton>
            </MenuContainer>
            <HeaderTitleContainer>
                {/* <h1>Semana do Zero ao JavaScript</h1> */}
                <Logo src={logo} />
            </HeaderTitleContainer>
        </StyledHeader>
    )
}

export default Header

const Logo = styled.img`
    height: 20vmin;
`

