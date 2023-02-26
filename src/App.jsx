import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const user = {
    fullname: "Jakkrit Chaopron",
    imgUrl: "https://media.discordapp.net/attachments/909065818237718608/1079248174784467104/270040687_734421277530170_7796251460781359228_n.jpg",
    imgSize: 150
  }

  return (
    // React Fragment
    <>  
      <h2>{user.fullname}</h2>
      <img className='avatar' src={user.imgUrl} width={user.imgSize} alt={'Photo of '+user.fullname} />
    </>
  )

}

export default App
