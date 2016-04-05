import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as productMovement from '../product-movement'

export class Carticon extends Component {
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

function mapStateToProps(state) {
  return {
    products: state.get('products')
  }
}

export const CarticonContainer = connect(mapStateToProps, productMovement)(Carticon)
Status API Training Shop Blog About
