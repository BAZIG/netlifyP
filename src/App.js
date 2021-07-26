import React from "react"
import ReactDOM from "react-dom"
import { Text } from "react-native"
import Container from "./Container";

export default class App extends React.Component {
  render() {
    return <Container>
    <Text>Hello World</Text>
  </Container>
  }
}