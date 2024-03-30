import React from 'react'

const Chat = () => {
  return (
    <>
      <div className='container'>
        <h1 >Chat Here!</h1>
      </div>
      <div className='chat-container'>
        <ul id="messages"></ul>
        <form id="form" action="" style={{ background: 'rgba(0, 0, 0, 0.50)', borderRadius: '5px ', bottom: '0', marginBottom: '5px', padding: '0.25rem', position: 'fixed', display: 'flex', height: '3.5rem', boxSizing: 'border-box', backdropFilter: 'blur(10px)', width: '450px' }}>
          <input id="input" autoComplete="off" style={{ border: 'none', padding: '0 1rem', flexGrow: '1', borderRadius: '2rem', margin: '0.25rem' }} />
          <button style={{ background: '#333', border: 'none', padding: '0 1rem', margin: '0.25rem', borderRadius: '3px', outline: 'none', color: '#fff' }}>Send</button>
        </form>
      </div>
    </>
  )
}

export default Chat
