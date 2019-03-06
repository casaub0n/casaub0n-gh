import React from "react"
import ReactDOM from "react-dom"

const MySkill = () => {
  return <div>
    <h2>My Skill</h2>
      <ul>
        <li>Java</li>
        <li>Publish SubScribe(Redis)</li>
        <li>ShellScript</li>
        <li>JavaScript</li>
        <li>Linux</li>
      </ul>
  </div>
}

const Header = (props: { name: string }) => <h1>{props.name} Page</h1>

ReactDOM.render(<Header name="Casaub0n" />, document.querySelector(".header"))
ReactDOM.render(<MySkill />, document.querySelector(".mySkill"))
