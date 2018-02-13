import React from 'react';


class ContestantForm extends React.Component {
  constructor(props) {
    super(props)
    this.name = 'Name'
  }


  handleClick(e) {

  }

  updateAnswer(e) {

  }


  render() {
    return (
      <main>
        <div>{this.name}</div>
        <form>
          <input onChange={this.updateAnswer}></input>
          <button onClick={this.handleClick}>Is it Numberwang?</button>
        </form>
      </main>
    )
  }

}

export default ContestantForm;
