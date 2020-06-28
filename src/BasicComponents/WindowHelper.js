export const openWindow = (url, title) => {
  window.open(
    url,
    title,
    "directories=no,titlebar=no,locatin=no,status=no,menubar=no,scrollbars=no,resizable=yes"
  )
}
