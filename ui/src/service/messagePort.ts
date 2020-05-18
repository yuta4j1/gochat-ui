import io from "socket.io-client"

const baseUrl = "http://localhost:8080/"
const socket: SocketIOClient.Socket = io.connect(baseUrl)

socket.on("allPosts", function(msg: string) {

})

export function postMessage(msg: string): void {
    console.log(socket)
    if (!socket) {
        console.log("socket object is undefined.")
    }
    socket.emit("post", msg)
}