import { useEffect, useState } from 'react'
import reactLogo from './assets/n8n.png'
import viteLogo from './assets/insparisk.png'
import './App.css'
import axios from "axios"
function App() {
  const [count, setCount] = useState(0)
  const [activate, setActivate] = useState(true)
  const workflowId = 'BcrfXFltKSEbSiD1'

  const callUrl = () => {

    window.location.href = 'https://insparisk.app.n8n.cloud/form/phase2'
  }

  const checkWorkflow = async () => {
    try {
      const url = `${import.meta.env.VITE_N8N_API_URL}check`;
      
      const response = await axios.get(url);
      
      setTimeout(() => {
        console.log(response.data.active)
        setActivate(response.data.active)  
      }, 100);
    } catch (error) {
      console.error(error); // Log any errors
    }
  }

  useEffect(() => {
    checkWorkflow();
  }, [setActivate]);

  const changeSwitch = (e) => {
    let data = new FormData();
    data.append('id', workflowId);

    axios.post(`${import.meta.env.VITE_N8N_API_URL}${activate ? 'deactivate' : 'activate'}`, data, {
      headers: {
        'X-N8N-API-KEY': `${import.meta.env.VITE_N8N_API_KEY}`,
      }
    })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setActivate(prev => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Insparisk form</h1>
      <div className="card">
        <p>
          https://insparisk.app.n8n.cloud/form/phase2
        </p>
      </div>
      <div className="container">
        <div className="toggle-container">
          <span>Status</span>
          <label className="toggle-switch">
            <input type="checkbox" id="toggleSwitch" checked={activate} onChange={changeSwitch} />
            <span className="slider"></span>
          </label>
          <span>{activate ? 'On' : 'Off'}</span>
          <button className='call-button' onClick={callUrl}>Open form</button>
        </div>
      </div>
    </>
  )
}

export default App
