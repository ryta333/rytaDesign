import { useState, useEffect } from 'react'

// 自定义 hooks 
const useMousePositions = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    // 每次点击会添加一次, 因此点击调用的次数不是线性增加
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  return positions
}

export default useMousePositions
