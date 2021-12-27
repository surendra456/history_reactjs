import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {searchInput: ''}

  onSearchText = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const deletedHistoryList = this.initialHistoryList.filter(
      eachHistory => eachHistory.id !== id,
    )
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props

    const searchHistoryList = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const isNonEmpty = searchHistoryList.length === 0
    let elementItem
    if (isNonEmpty) {
      elementItem = <p className="no-item">There is no history to show</p>
    } else {
      elementItem = searchHistoryList.map(each => (
        <HistoryItem
          deleteHistory={this.deleteHistory}
          key={each.id}
          historyItem={each}
        />
      ))
    }

    return (
      <div className="container">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="search-button">
            <img
              className="search-logo"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <br />
            <input
              type="search"
              className="search-box"
              placeholder="Search history"
              onChange={this.onSearchText}
            />
          </div>
        </div>
        <div className="history-container">
          <ul className="list-items">{elementItem}</ul>
        </div>
      </div>
    )
  }
}

export default History
