import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Menu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="menuBar">
        <h1>WANEWORK</h1>
        <a href="#">MAGIC</a>
        <a href="#">MY FEED</a>
        <a href="#">TRENDING</a>
        <input type="text" name="name" placeholder="Find amazing products"></input>
      </div>
    )
  }
}

reactMixin(Menu.prototype, PureRenderMixin)
