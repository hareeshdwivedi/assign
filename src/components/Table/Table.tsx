import React from 'react'
import './Header.css'

interface HeaderProps {
  selectAllState: 'checked' | 'unchecked' | 'intermediate'
  toggleSelectAll: () => void
  selectedCount: number
  onDownload: () => void
  isDownloadEnabled: boolean
}

const Header: React.FC<HeaderProps> = ({
  selectAllState,
  toggleSelectAll,
  selectedCount,
  onDownload,
  isDownloadEnabled
}) => {
  return (
    <div className='header-container'>
      <input
        type='checkbox'
        checked={selectAllState === 'checked'}
        ref={el => {
          if (el) el.indeterminate = selectAllState === 'intermediate'
        }}
        onChange={toggleSelectAll}
      />
      <span>
        {selectedCount > 0 ? `${selectedCount} Selected` : 'None Selected'}
      </span>
      <button disabled={!isDownloadEnabled} onClick={onDownload}>
        Download Selected
      </button>
    </div>
  )
}

export default Header
