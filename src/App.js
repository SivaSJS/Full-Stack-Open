import React, { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1)
  const badHandler = () => setBad(bad + 1)
 
  return (
    <div className = "App"> 
      <Button
      text1 = 'good'
      text2 = 'neutral'
      text3 = 'bad'
      goodHandler = {goodHandler}
      neutralHandler = {neutralHandler}
      badHandler = {badHandler}
      
      />
      <Statistics  
      
      text1 = {good}
      text2 = {neutral}
      text3 = {bad}
      
      />
    
    </div>
  )
}

export default App