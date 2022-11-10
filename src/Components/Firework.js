import React, {useEffect, useRef } from 'react';
import lottie from 'lottie-web'

const Firework = () => {
  
  const lottieContainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      // eslint-disable-next-line global-require
      animationData: require('../Animation/firework.json')
    })
  }, []) 


  return (
    <div className="lottieContainer" ref={lottieContainer}>
    
    </div>
  )
}

export default Firework
