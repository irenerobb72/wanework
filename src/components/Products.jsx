import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Products extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="products">
        <div class="products" id="productsa">
          <span class="productOne">
            <img src="img/cats.jpg" height="250" width="250">
            <div></div>
          </span>
          <span class="productTwo">
            <img src="img/model.jpg" height="250" width="250">
            <p>pretty cool stuff</p>
            <div></div>
          </span>
          <span class="productThree">
            <img src="img/dino.jpg" height="250" width="250">
            <p>roarrr!!! you shud buy me</p>
            <div></div>
          </span>
          <span class="productFour">
            <img src="img/hat.jpg" height="250" width="250">
            <p>youll be cute if you wear this</p>
            <div></div>
          </span>
          <span class="productFive">
            <img src="img/skirt.jpg" height="250" width="250">
            <p>A very nice skirt</p>
            <div></div>
          </span>
          <span class="productSix">
            <img src="img/sunglasses.jpg" height="250" with="250">
            <p>cute sunglasses please by because im broke</p>
            <div></div>
          </span>
        </div>
      </div>
    )
  }
}

reactMixin(Products.prototype, PureRenderMixin)
