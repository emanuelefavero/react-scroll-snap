import React from 'react'
import createScrollSnap from 'scroll-snap'

class App extends React.Component {
  container: any = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    createScrollSnap(
      element,
      {
        snapDestinationY: '90%',
      },
      () => console.log('snapped')
    )
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    return (
      <div id='container' ref={this.container}>
        <div className='page first-page'>
          <div>I</div>
          <div className='hint'>scroll down</div>
        </div>
        <div className='page second-page'>
          <div>II</div>
        </div>
        <div className='page third-page'>
          <div>III</div>
        </div>
        <div className='page fourth-page'>
          <div>IV</div>
          <div className='hint'>scroll up</div>
        </div>
      </div>
    )
  }
}

export default App
