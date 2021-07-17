import React from "react"
import App from "./App.js"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Root = () => {
  toast.configure({
    autoClose: false,
    draggable: false,
    closeOnClick: false,
    position: "bottom-center",
  })
  return <App />
}

export default Root
