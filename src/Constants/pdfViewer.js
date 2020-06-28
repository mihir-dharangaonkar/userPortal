import { openWindow } from "../BasicComponents/WindowHelper"

export const viewInPopup = (file, documentTitle) => {
  const objectUrl = window.URL.createObjectURL(file)
  openWindow(objectUrl, documentTitle)
}
