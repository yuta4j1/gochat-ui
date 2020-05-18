import React from "react"
import styled from "styled-components"

const InputText = styled.input`
  
`

type Props = {
    text: string
    changeMessageCallback: (string) => void
}

const MessageTextbox: React.FC<Props> = props => {

    const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        props.changeMessageCallback(e.target.value)
    }

    return <><InputText value={props.text} onChange={textChangeHandler} /></>
}

export default MessageTextbox