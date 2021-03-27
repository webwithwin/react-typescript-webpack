import React from 'react'
import ReactDOM from 'react-dom'

interface Props { text: string }

const Hello = (props: Props) => {
  return <h1>{props.text}</h1>
}

ReactDOM.render(
  <>
    <Hello text="Hello World" />
    <Hello text="Nice to meet you" />
  </>,
  document.getElementById('root')
)
