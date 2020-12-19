import './App.css';
import React, { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    // { userName: 'Maciej', text: "Hey" },
    // { userName: "Dawid", text: "Helloł!" }
  ])
  const [userName, setUserName] = useState()


  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])



  useEffect(() => {
    setUserName(prompt('Wpisz swoje imię.'))
  }, [])


  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([
    //   ...messages,
    //   { userName: userName, message: input }
    // ])

    setInput('')

  }

  return (
    <div className="App">
      <div className="header">
        <img className="logo" src="https://pantag.pl//app/themes/stork/images/mess.jpg" alt="" />
        <h2>Witaj {userName}</h2>
      </div>

      <form className="app__form"  >
        <FormControl className="inputek">
          <Input
            className="inputHere"
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            onSubmit={e => setInput(e.target.value)}
            />
          <FormHelperText className="helpText" id="my-helper-text">Wpisz tutaj wiadomość</FormHelperText>
        </FormControl>
        <div type="submit" className="buttonSend">
          {/* <Button  disabled={!input} color="primary" onClick={sendMessage}>Wyślij</Button> */}
          <SendIcon type="submit"  size={44} variant="contained" disabled={!input} fontSize="large" color="primary" onClick={sendMessage} />
        </div>


      </form>
      <div className="whiteField"></div>

      <ul className="messages">
        <FlipMove>
          {messages.map(({ id, message }) => <Message
            key={id}
            username={userName}
            message={message}
          />
          )}
        </FlipMove>

      </ul>
    </div >

  );
}

export default App;
