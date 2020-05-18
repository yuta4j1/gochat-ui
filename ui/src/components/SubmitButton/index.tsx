import * as React from "react"

type Props = {
    clickEventCallback: () => void
}

const SubmitButton: React.FC<Props> = props => {
    const clickEventHandler = () => {
        props.clickEventCallback()
    }
    return <button onClick={clickEventHandler}>{"送信"}</button>
}

export default SubmitButton