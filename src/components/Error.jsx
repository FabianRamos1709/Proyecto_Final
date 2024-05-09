import styled from "@emotion/styled"

const Texto = styled.div`
    margin-top: 20px;
    background-color: #d50000;
    color: #FFF;
    padding: 15px;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'Sedan', sans-serif;
    font-weight: 700;
    text-align: center;
    width: 60%;
    margin: 30px auto;
`

const Error = ({children}) => {
  return (
      <Texto> {children} </Texto>
  )
}

export default Error