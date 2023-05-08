import { useState, useEffect, useRef } from 'react'

const useIsTyping = (delay=500) => {

  const [isTyping, setIsTyping] = useState(false)
  const typingTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleKeyDown = () => {
      if (typingTimeout) 
        clearTimeout(typingTimeout.current)

      setIsTyping(true)

      typingTimeout.current = setTimeout(() => {
        setIsTyping(false)
      }, delay)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [delay])

  return isTyping
}

export default useIsTyping
