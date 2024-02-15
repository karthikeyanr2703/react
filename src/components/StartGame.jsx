import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
display: flex;
align-items: center;
height: 100vh;
margin: 0 auto;
width:50%;
 .content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
 }
`;
const Button =styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid transparent;
    transition: background-color 0.3s linear;

    &:hover{
        background-color: white;
        border:2px solid black;
        color: black;

    }
`

function StartGame() {
  return (
   <>
   <Container>
    <img src="https://t3.ftcdn.net/jpg/03/35/18/02/360_F_335180208_DN9gHHwmEltKxSB1BfE4YjqMvzZyHkwK.jpg" alt="" />
    <div className='content'>
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
    </div>
    </Container></>
  )
}

export default StartGame