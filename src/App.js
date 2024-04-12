import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Card from './components/Card'

import './App.css'

class App extends Component {
  state = {data: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({data: updatedData})
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <h1>Travel Guide</h1>
        {data.length === 0 ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {data.map(each => (
              <Card key={each.id} listData={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
