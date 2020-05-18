import React, { useState } from "react"
import SubmitButton from "./SubmitButton"
import MessageText from "./MessageTextbox"
import { postMessage } from "../service/messagePort"

const Root: React.FC<{}> = () => {
    const [message, setMessage] = useState("")

    const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    const submitEventCallback = () => {
        // メッセージを投稿する
        postMessage(message)
    }
    return (
        <div>
            <MessageText text={message} changeMessageCallback={setMessage} />
            <SubmitButton clickEventCallback={submitEventCallback}/>
        </div>
    )
}

export default Root