import { useState } from 'react'
import './App.css'

function App() {

  const initialState = {
    issueType: '',
    subject: '',
    message: ''
  }
  
  const [formState, setFormState] = useState(initialState)
  // listens for an event, in this case, a button click (can use evt or e)
  const handleSubmit = event => {
    // prevent page from erasing things when it is submitted in
    event.preventDefault()
    // we want our code to do something
    // for now we are comsole.log'ing but we could do all of our Stately functionality here
    console.log(formState)
    // clear the form AFTER our functionality is run
    setFormState(initialState)
  }

  const handleChange = event => setFormState({...formState, [event.target.id]: event.target.value})

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="issueType">Type of Issue:</label>
        <select id="issueType" onChange={handleChange} value={formState.issueType} >
          <option value="" disabled defaultValue>Select your issue</option>
          <option value="outage">Service Outage</option>
          <option value="billing">Billing</option>
          <option value="cancel">Cancel Service</option>
        </select>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id='subject' onChange={handleChange} value={formState.subject} />
        <label htmlFor="message">Message:</label>
        <textarea name="" id="message" cols="30" rows="10" onChange={handleChange} value={formState.message} ></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default App
