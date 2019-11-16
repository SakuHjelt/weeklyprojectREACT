import React, { Component } from 'react'
import { postEntry } from '../service/apiclient'
import './css/EntryForm.css'

export default class EntryForm extends Component {
    state = {title: '', descr: '', inprog: '', compl: '', timetom: '', timest: ''}
    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    }
    handleDescrChange = (e) => {
        this.setState({descr: e.target.value})
    }
    handleInprogChange = (e) => {
      this.setState({inprog: e.target.value})
  }
  handleComplChange = (e) => {
    this.setState({compl: e.target.value})
}
handleTimetomChange = (e) => {
  this.setState({timetom: e.target.value})
}
handleTimestChange = (e) => {
  this.setState({timest: e.target.value})
}
    handleCreateClick = e => {
        e.preventDefault();
        postEntry(this.state).then(response=> {
          this.setState({title: 'title', descr: 'descr', inprog: 'yes', compl: '05-05-1989', timetom: '5', timest: '04-04-1989'});
          this.props.history.push('/entries');
        })
    }
  render () {
    return (
      <div className="entryForm">
        <form>
          <p className="inputrow">
            <label className="formlabel" htmlFor='form_title'>Title</label>
            <br />
            <input className="forminput"
              type='text'
              placeholder='title'
              id='form_title'
              value={this.state.title}
              onChange={this.handleTitleChange}
              required='required'
            />
          </p>

          <p className="inputrow">
            <label className="formlabel" htmlFor='form_descr'>Description</label>
            <br />
            <textarea className="formdescrinput"
              type='text'
              placeholder='description'
              id='form_descr'
              value={this.state.descr}
              onChange={this.handleDescrChange}
              required='required'
            />
          </p>

          <p className="inputrow">
            <label className="formlabel" htmlFor='form_inprog'>In Progress?</label>
            <br />
            <input className="formradioinput"
              type='radio'
              placeholder='in progress?'
              id='form_inprog'
              value={this.state.inprog}
              onChange={this.handleInprogChange}
              required='required'
            />
            Yes
          </p>

          <p className="inputrow">
            <label className="formlabel" htmlFor='form_compl'>Completion Date</label>
            <br />
            <input className="forminput"
              type='date'
              placeholder='completion date'
              id='form_compl'
              value={this.state.compl}
              onChange={this.handleComplChange}
              required='required'
            />
          </p>

          <p className="inputrow">
            <label className="formlabel"  htmlFor='form_timetom'>Time To Master</label>
            <br />
            <input className="forminput"
              type='number'
              placeholder='time to master'
              id='form_timetom'
              value={this.state.timetom}
              onChange={this.handleTimetomChange}
              required='required'
            />
          </p>

          <p className="inputrow">
            <label className="formlabel" htmlFor='form_timest'>Time Started</label>
            <br />
            <input className="forminput"
              type='date'
              placeholder='Name'
              id='form_timest'
              autoComplete='off'
              value={this.state.timest}
              onChange={this.handleTimestChange}
              required='required'
            />
          </p>
          <p>
            <input className="createbutton"
              type='submit'
              value='Create'
              onClick={this.handleCreateClick}
            />
          </p>
        </form>
      </div>
    )
  }
}
