import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { MenuContainer } from './Menu.jsx'
import { ProductsContainer } from './Products.jsx'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <ProductsContainer/>
        <CarticonContainer/>
      </div>
    )
  }
}

reactMixin(App.prototype, PureRenderMixin)
