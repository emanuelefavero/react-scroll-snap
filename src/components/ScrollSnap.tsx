import { useRef, useEffect } from 'react'
import createScrollSnap from 'scroll-snap'
import './ScrollSnap.css'

function ScrollSnap({ children }: { children: React.ReactNode }) {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>

  function bindScrollSnap() {
    const currentContainer = containerRef.current
    const element: any = currentContainer
    createScrollSnap(
      element,
      {
        // NOTE: THIS IS WHERE THE WINDOW WILL SNAP (at 100% the height of the viewport)
        // TIP: You can use a percentage or a pixel value
        // TIP: It is preferable to have children with a fixed height (e.g. all children of this component at 100vh, but you can also experiment with other values)
        snapDestinationY: '100vh',
      },
      () => console.log('snapped')
    )
  }

  useEffect(() => {
    bindScrollSnap()
  }, [])

  return (
    <div className='scrollSnapContainer' ref={containerRef}>
      {/* NOTE: HERE YOU CAN PUT PAGES (VIEWS, e.g. height: 100vh div's)  */}
      {children}
    </div>
  )
}

export default ScrollSnap
