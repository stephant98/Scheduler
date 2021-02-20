import { useState } from 'react'

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if(replace) {
      setMode(newMode)
      const newHistory = history.slice(0, -1)
      setHistory([...newHistory, newMode])
      // [1, 2, 4]
    } else {
      setMode(newMode)
      const newHistory = [...history, newMode]
      setHistory(newHistory)
    }
  }

  function back() {
    if(history.length > 1){
      setHistory(history.slice(0, -1))
      setMode(history[history.length - 2])
      // [1, 2, 3]
    }
  }

  return { mode , transition, back};
}