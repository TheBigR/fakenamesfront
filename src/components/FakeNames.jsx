import './fakeNames.css'
import fakeNameApi from '../api/arback'
import { useState } from 'react'

const FakeNamesTable = (fakeData) => {
  return (
    <table className="ui very basic celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rep</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(fakeData).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{fakeData[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const FakeNames = () => {
  const [names, setNames] = useState({ duration: null, names: null })

  const getNamesButtonHandler = async () => {
    const response = await fakeNameApi.get(`/getfakenames`)

    setNames({ duration: response.data.duration, names: response.data.values })
    return
  }

  return (
    <div className="ui fakeContainer">
      <div className="titleContainer">
        <h3> Fake Names App</h3>
      </div>
      <div className="durationContainer">
        {names.duration == null ? null : (
          <h3>it took {names.duration} seconds to fetch the data</h3>
        )}
      </div>
      <div className="namesContainer">
        {names.duration == null ? null : FakeNamesTable(names.names)}
      </div>

      <button className="ui button" onClick={getNamesButtonHandler}>
        Get Names
      </button>
    </div>
  )
}

export default FakeNames
