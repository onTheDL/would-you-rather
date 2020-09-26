import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredCard extends Component {
  render() {
    return (
      <div>
        AnsweredCard ID: {this.props.ansId}
      </div>
    )
  }
}

export default connect()(AnsweredCard)
