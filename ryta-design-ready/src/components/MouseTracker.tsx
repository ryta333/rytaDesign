import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    // 每次点击会添加一次, 因此点击调用的次数不是线性增加
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  )
}

export default MouseTracker
