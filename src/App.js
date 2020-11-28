import React, {Component} from 'react';
import './App.css'
import TrBotContext from './TrBotContext.js'
import {Route} from 'react-router-dom'
import * as Tone from 'tone'
import LandingPage from './LandingPage/LandingPage'
import CreateAccount from './CreateAccount/CreateAccount';
import SavePattern from './SavePattern/SavePattern'
import Interface from './Interface/Interface'
import {allSampler} from './samplers.js'

class App extends Component {
  static contextType = TrBotContext

    constructor(props) {
        super(props);
        
        this.state = {
            patterns: [],
            patternSelect: 0,
            bpm: 120,
            volume: 100,
            kickSteps: [],
            snareSteps: [],
            hh1Steps: [],
            hh2Steps: [],
            clapSteps:[],
            percSteps: []
        }

    }

    createInstrSteps = (patternSelect) => {
      this.setState({
          kickSteps: this.state.patterns[patternSelect].kick_steps,
          snareSteps: this.state.patterns[patternSelect].snare_steps,
          hh1Steps: this.state.patterns[patternSelect].hh1_steps,
          hh2Steps: this.state.patterns[patternSelect].hh2_steps,
          clapSteps: this.state.patterns[patternSelect].clap_steps,
          percSteps: this.state.patterns[patternSelect].perc_steps,
      })
  }


  updatePatternSelect = (index) => {
      this.setState({
          patternSelect: index
      }, () => {
          this.createInstrSteps(this.state.patternSelect)
      }) 
      
  }

  updateBpm = (bpm) => {
      this.setState({
          bpm: bpm
      })
      Tone.Transport.bpm.value = this.state.bpm
  }

  updateVolume = (vol) => {
      this.setState({
          volume: vol,
      })
      this.gainControl()
  }

  gainControl = () => {
      allSampler.disconnect()
      const gain = new Tone.Gain(this.state.volume / 100 < .05 ? 0 : this.state.volume / 100 )
      allSampler.connect(gain)
      gain.toDestination()
  }


  updateStep = (stepIndex, value, instrument) => {
      
      switch (instrument) {
          case 'kick':
              const oldKickSteps = this.state.kickSteps;
              oldKickSteps[stepIndex] = 1 - value
              const newKickSteps = oldKickSteps

              this.setState({
                  kickSteps: newKickSteps
              })
              break;
          case 'snare':
              const oldSnareSteps = this.state.snareSteps;
              oldSnareSteps[stepIndex] = 1 - value
              const newSnareSteps = oldSnareSteps

              this.setState({
                  snareSteps: newSnareSteps
              })
              break;
          case 'hh1':
              const oldHh1Steps = this.state.hh1Steps;
              oldHh1Steps[stepIndex] = 1 - value
              const newHh1Steps = oldHh1Steps

              this.setState({
                  hh1Steps: newHh1Steps
              })
              break;
          case 'hh2':
              const oldHh2Steps = this.state.hh2Steps;
              oldHh2Steps[stepIndex] = 1 - value
              const newHh2Steps = oldHh2Steps
              
              this.setState({
                  hh2Steps: newHh2Steps
              })
              break;
          case 'clap':
              const oldClapSteps = this.state.clapSteps;
              oldClapSteps[stepIndex] = 1 - value
              const newClapSteps = oldClapSteps
              
              this.setState({
                  clapSteps: newClapSteps
              })
              break;
          case 'perc':
              const oldPercSteps = this.state.percSteps;
              oldPercSteps[stepIndex] = 1 - value
              const newPercSteps = oldPercSteps
              
              this.setState({
                  percSteps: newPercSteps
              })
              break;
          default:
              console.log('That row does not exist')
      }  
  }

  playSequencer = () => {
      console.log('Play')
      allSampler.disconnect()
      Tone.Transport.cancel()
      
      this.gainControl()

      const instrumentSeqs = [this.state.kickSteps, this.state.snareSteps, this.state.hh1Steps, this.state.hh2Steps, this.state.clapSteps, this.state.percSteps]
      const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4']
      let index = 0;

      Tone.start()                    
      Tone.Transport.scheduleRepeat(repeat, '16n')
      Tone.Transport.start()
      
      
      function repeat(time) {
          let step = index % 16;
          for (let i = 0; i < notes.length; i++) {  //replace notes with samplers
              //let sampler = samplers[i];
              let note = notes[i]
              let sequence = instrumentSeqs[i];
              if (sequence[step] === 1)allSampler.triggerAttackRelease([note], '16n', time) //allSampler with sampler
          }
          index++;
      }

  }

  stopSequencer = () => {
      console.log('Stop')
      Tone.Transport.stop()
      Tone.Transport.cancel()
      allSampler.disconnect()
  }

  savePattern = (patternData) => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(patternData)
    }

    fetch(`http://localhost:8000/api/patterns`, requestOptions)
          .then(response => {
              if(!response.ok) {
                  throw new Error('Could not save pattern')
              }
              return response.json()
          })
          .catch(err => console.log(err.message))

          console.log('Pattern Saved')

          this.state.patterns.push(patternData)
          
          this.setState({
            patterns: this.state.patterns
          })
  }

    componentDidMount() {

      fetch(`http://localhost:8000/api/patterns`)
          .then(response => {
              if(!response.ok) {
                  throw new Error('Could not retrieve patterns')
              }
              return response.json()
          })
          .then(responseJson => {
              this.setState({
                  patterns: responseJson
              })
          })
          .then(() => this.createInstrSteps(this.state.patternSelect))
          .catch(err => console.log(err.message))
      
  }

  render() {
    const contextValue = {
      patterns: this.state.patterns,
      patternSelect: this.state.patternSelect,
      bpm: this.state.bpm,
      volume: this.state.volume,
      kickSteps: this.state.kickSteps,
      snareSteps: this.state.snareSteps,
      hh1Steps: this.state.hh1Steps,
      hh2Steps: this.state.hh2Steps,
      clapSteps:this.state.clapSteps,
      percSteps: this.state.percSteps,
      updatePatternSelect: this.updatePatternSelect,
      updateBpm: this.updateBpm,
      updateVolume: this.updateVolume,
      updateStep: this.updateStep,
      playSequencer: this.playSequencer,
      stopSequencer: this.stopSequencer,
      savePattern: this.savePattern
  }

    return (
      <main className='App'>
        <TrBotContext.Provider value={contextValue}>
          <Route
            exact
            path={'/'}
            component={LandingPage}/>
          <Route
            exact
            path={'/createaccount'}
            component={CreateAccount}/>
          <Route
            exact
            path={'/trbot'}
            component={Interface}/>
          <Route
            exact
            path={'/savepattern'}
            component={SavePattern}/>
          </TrBotContext.Provider>
      </main>
    )
  }
}

export default App;
