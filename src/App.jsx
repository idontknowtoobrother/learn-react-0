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

  const users = [
    {
      id: 0,
      fullname: "cos9iwo",
      imgUrl: "https://media.discordapp.net/attachments/909065818237718608/1079248174784467104/270040687_734421277530170_7796251460781359228_n.jpg",
    },
    {
      id: 1,
      fullname: "lafiesta",
      imgUrl: "https://media.discordapp.net/attachments/909065818237718608/1079248174784467104/270040687_734421277530170_7796251460781359228_n.jpg",
    },
    {
      id: 2,
      fullname: "killpGOD",
      imgUrl: "https://media.discordapp.net/attachments/909065818237718608/1079248174784467104/270040687_734421277530170_7796251460781359228_n.jpg",
    },
  ]
  const listProfile = users.map(user => 
    <li key={user.id}>
      <h3>{user.fullname}</h3>
      <img className='avatar' src={user.imgUrl} width={64} alt={'Photo of '+user.fullname} />
    </li>
  ) 


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
      {listProfile}
    </>
  )

}

export default App
