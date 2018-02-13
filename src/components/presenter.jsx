import React from 'react';


class Presenter extends React.Component {
  constructor(props) {
    super(props)
    this.numberwang = ''
    this.turn = ['Julie', 'Simon']
    this.response = 'I once ate 18 cakes'
  }

  render() {
    return (
      <main>
        <div>{this.response}</div>
      </main>
    )
  }


}

export default Presenter;
