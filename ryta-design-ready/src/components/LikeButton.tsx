import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
  //   可以单独拆开
  //   const [obj, setObj] = useState({ like: 0, on: true })
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  useEffect(() => {
    console.log(`document.title改变了`)
    document.title = `点击了${like}次 `
  }, [like])
  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1)
        }}
      >
        {like} 赞
      </button>
      <button
        onClick={() => {
          setOn(!on)
        }}
      >
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default LikeButton
