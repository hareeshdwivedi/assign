import React, { useState } from 'react'
import { filesData, FileData } from '../../data/filesData'
import TableHeader from '../Table/TableHeader'
import TableRow from '../Table/TableRow'
import Checkbox from '../Checkbox/Checkbox'
import { useSelection } from '../../hooks/useSelection'
import { areAllAvailable } from '../../utils/helpers'
import './DataGrid.css'

const DataGrid: React.FC = () => {
  const [data] = useState<FileData[]>(filesData)
  const { selectedItems, toggleSelection, toggleAll, isSelected } =
    useSelection(data, 'name')

  const handleDownload = () => {
    const selectedFiles = data.filter(file => selectedItems.has(file.name))
    if (selectedFiles.length === 0) {
      alert('No files selected.')
    } else {
      // Displaying name, path, and all other details of each selected file
      const formattedDetails = selectedFiles
        .map(file => `Name: ${file.name}\nPath: ${file.path}`)
        .join('\n\n')
      alert(`Selected Files:\n\n${formattedDetails}`)
    }
  }

  const allAvailable = areAllAvailable(selectedItems, data)
  const selectedCount = selectedItems.size

  return (
    <div className='datagrid-container'>
      <div className='header-container'>
        <div className='select-label'>
          <Checkbox
            checked={selectedItems.size === data.length}
            indeterminate={
              selectedItems.size > 0 && selectedItems.size < data.length
            }
            onChange={toggleAll}
          />
          <span>
            {selectedCount === 0
              ? 'None Selected'
              : `${selectedCount} Selected`}
          </span>
        </div>
        <button
          onClick={handleDownload}
          disabled={!allAvailable || selectedItems.size === 0}
        >
          Download Selected
        </button>
      </div>
      <table className='table'>
        <TableHeader />
        <tbody>
          {data.map(file => (
            <TableRow
              key={file.name}
              file={file}
              isSelected={isSelected(file)}
              toggleRowSelection={toggleSelection}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid
