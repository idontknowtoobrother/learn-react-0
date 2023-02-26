import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  const user = {
    fullname: "Jakkrit Chaopron",
    imgUrl: "https://media.discordapp.net/attachments/909065818237718608/1079248174784467104/270040687_734421277530170_7796251460781359228_n.jpg",
    imgSize: 150
  }

  let isShow = true

  return (
    // React Fragment
    <>  
      {
        isShow ? (
          <MyButton/>
        ) : (
          <></>
        )
      }

      {isShow && <MyButton/>}
      
      <h2>{user.fullname}</h2>
      <img className='avatar' src={user.imgUrl} width={user.imgSize} alt={'Photo of '+user.fullname} />
    </>
  )

}

export default App
