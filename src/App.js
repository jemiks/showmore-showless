import React, { useRef, useEffect, useState } from 'react';
import './style.css'

function App() {
  const [showMore, setShowMore] = useState(false)
  const [showText, setShowText] = useState(false)
  const testRef = useRef()

  useEffect(() => {
    if (testRef.current.scrollHeight > testRef.current.offsetHeight) setShowMore(true)
  }, [])

  const toggleShowText = () => setShowText((state) => !state)
  return (
    <div className="container">
      <p className={showText ? 'show-more' : "show-less"} ref={testRef}>Lorem Ipsum is simply dummy text of the printing
         and typesetting industry. Lorem Ipsum has
         been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it t
       . It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.xstt
          </p>
      {showMore && <button onClick={toggleShowText}>read {showText ? 'less' : 'more'}</button>}
    </div>
  );
}

export default App;
