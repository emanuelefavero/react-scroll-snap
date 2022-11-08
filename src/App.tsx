import { useRef, useEffect } from 'react'
import createScrollSnap from 'scroll-snap'

function App() {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>

  function bindScrollSnap() {
    const currentContainer = containerRef.current
    const element: any = currentContainer
    createScrollSnap(
      element,
      {
        snapDestinationY: '90%',
      },
      () => console.log('snapped')
    )
  }

  useEffect(() => {
    bindScrollSnap()
  }, [])

  return (
    <div id='container' ref={containerRef}>
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

export default App
