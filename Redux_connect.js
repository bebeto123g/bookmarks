import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { SwitchRoutes } from './Routes'
import { Sidebar } from './components/Sidebar'

import { fetchPhones } from './store/actions'

import './css/App.scss'

const App = ({ phones, fetchPhones }) => {
  useEffect(() => {
    console.log('effect')
    fetchPhones()
  }, [fetchPhones])

  return (
    <div className='App view-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <SwitchRoutes />
          </div>
        </div>
        <div className='row'>{JSON.stringify(phones)}</div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ phones }) => {
  return {
    phones,
  }
}
const mapDispatchToProps = {
  fetchPhones,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
