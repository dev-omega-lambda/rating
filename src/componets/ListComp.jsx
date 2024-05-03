function ListComp() {
  const name = "React"
  const items = ["book", "calculator"]
  const boolVal = true

  return (
    <div>
      <h1>Hello {name}</h1>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span>First Test: {boolVal ? "true" : "false"}</span>
      <br />
      <span>Second Test: {boolVal && "true"}</span>
      <div dangerouslySetInnerHTML={createHTML()} />

    </div>
  )
}

function createHTML() {
  return {
    __html: '<buttom onclick=\'alert("Hello World");\'>hello</button>',
  }
}

export default ListComp