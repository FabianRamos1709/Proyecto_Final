import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #d50000;
    color: #FFF;
    padding: 15px;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'Sedan', sans-serif;
    font-weight: 700;
    text-align: center;
    width: 70%;
    margin: 30px auto;
    border: 1px solid #000;
    box-shadow: 0px 10px 10px black;
`

const Error = ({children}) => {
  return (
      <Texto> <i className="material-icons prefix">report</i>{children}<i className="material-icons prefix">report</i> </Texto>
  )
}

export default Error