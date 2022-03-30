import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  height: 100vh;
  background-size: cover;
  font-family: 'Roboto';
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vh;
  border: 1px solid #cbd2d9;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const Heading = styled.h1`
  color: #000000;
  font-size: 30px;
  font-weight: bold;
`

export const Paragraph = styled.p`
  color: #323f4b;
  font-size: 20px;
`

export const Input = styled.input``

export const Button = styled.button`
  color: #ffffff;
  background-color: #d946ef;
  font-size: 20px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
`
