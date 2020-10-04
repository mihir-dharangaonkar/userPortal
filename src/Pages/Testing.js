const obj = [
  { id: "CH301", desc: "Fiest" },
  { id: "CH303", desc: "third" },
  { id: "CH302", desc: "second" },
  { id: "CH305", desc: "five" }
]

const newObj = { CH305: 0, CH306: 1, CH308: 2 }

const priority = obj.map((o) => {
  return { ...o, priority: newObj[o.id] }
})

console.log(priority.sort((a, b) => (a.priority > b.priority ? 1 : -1)))
