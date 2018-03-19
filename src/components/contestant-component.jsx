import React from 'react';
import ContestantForm from './contestantForm'
import Contestant from './contestant'
import '../css/contestantcomp.css'

class ContestantComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {playing: false}
  }


  render() {
    return (
      <main>
        {this.state.playing ? <Contestant/> : <ContestantForm/>}
        {this.state.playing ? <Contestant/> : <ContestantForm/>}
      </main>
    )
  }

}

export default ContestantComp;
