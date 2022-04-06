import { useState, useEffect } from 'react';



const getBreakpoint = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width > 1050) return "lg";
    if(width > 768) return "md";
    if(width > 576) return "sm";
    if(width > 0) return "xs";
    
}

function useCurrentWidth() {
  let [width, setWidth] = useState(getBreakpoint());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getBreakpoint())
    };
    
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}

export default useCurrentWidth