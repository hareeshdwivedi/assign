import React from 'react'
import { FileData } from '../../data/filesData'

interface TableRowProps {
  file: FileData
  isSelected: boolean
  toggleRowSelection: (file: FileData) => void
}

const TableRow: React.FC<TableRowProps> = ({
  file,
  isSelected,
  toggleRowSelection
}) => {
  return (
    <tr>
      <td>
        <input
          type='checkbox'
          checked={isSelected}
          onChange={() => toggleRowSelection(file)}
        />
      </td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td>
        {file.status === 'available' && (
          <span className='status-dot available'></span>
        )}
        {file.status}
      </td>
    </tr>
  )
}

export default TableRow
