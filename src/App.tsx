import React from 'react'
import DataGrid from './components/DataGrid/DataGrid'
import './styles/global.css'

const App: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        left: '368px'
      }}
    >
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Datagrid</h1>
      <DataGrid />
    </div>
  )
}

export default App
