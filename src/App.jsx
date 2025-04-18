import { useState } from 'react'
import './App.css'
import ModelViewer from './components/ModelViewer'

function App() {
  const [modelUrl, setModelUrl] = useState('')
  const [currentModelUrl, setCurrentModelUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCurrentModelUrl(modelUrl)
  }

  return (
    <div className="app-container">
      <h1>3D Model Viewer</h1>
      
      <form onSubmit={handleSubmit} className="url-form">
        <input
          type="text"
          value={modelUrl}
          onChange={(e) => setModelUrl(e.target.value)}
          placeholder="Enter 3D model URL (GLB/GLTF format)"
          className="url-input"
        />
        <button type="submit" className="submit-button">
          Load Model
        </button>
      </form>

      {currentModelUrl && (
        <div className="model-container">
          <ModelViewer modelUrl={currentModelUrl} />
        </div>
      )}
    </div>
  )
}

export default App
