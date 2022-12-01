import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const HeaderContainer = styled.header`
  width: 100vw;
  height: 100px;

  padding: 0px 30px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLogo = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: black;

  font-weight: bold;
`

const HeaderButton = styled(Link)`
  width: 100px;
  height: 100px;

  color: white;
  background: black;

  border-radius: 10px;

  cursor: pointer;
  text-decoration: none;
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">STEAMTRACKER for SKKU</HeaderLogo>
      <HeaderButton to="/wish">Wish List</HeaderButton>
    </HeaderContainer>
  )
}

export default Header