import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="item">
      <p className="time-accessed">{timeAccessed}</p>
      <img className="history-logo" src={logoUrl} alt="domain logo" />
      <p className="title">{title}</p>
      <p className="domain-url">{domainUrl}</p>
      <button
        className="delete-button"
        type="button"
        testid="delete"
        onClick={onDelete}
      >
        <img
          className="delete-image"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
