// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'
class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {DestinationsList} = this.props
    const searchResults = DestinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div classNmae="app-container">
        <div classNmae="destinations-search-container">
          <h1 classNmae="heading">Destination Search</h1>
          <div classNmae="search-input-container">
            <input
              type="search"
              classNmae="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <Img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              classNmae="search-icon"
            />
          </div>
          <ul classNmae="destinations-list">
            {searchResults.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
