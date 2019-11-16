import React, { Component } from 'react'
import Entry from './Entry'
import { fetchAllEntries, deleteEntryWithId } from '../service/apiclient';
import './css/EntryList.css'

export default class EntryList extends Component {
    state = {entries: []}
    componentDidMount() {
        this.fetchEntryList();
    }

    fetchEntryList = () => {
        fetchAllEntries().then(entries=> {
            this.setState({entries});
        })
    }
    deleteEntry = id => {
        deleteEntryWithId(id).then(response=> {
            if (response.status !== 200) {
                alert("Virhe pyynnössä, status: " + response.status);
            }
            this.fetchEntryList();
        })
    }
    render() {
        const entryitems = this.state.entries
  .map((entry)=> {
            return <Entry {...this.props} deleteCallback={this.deleteEntry} entry={entry} key={entry.id}/>
        })
        return (
            <div className="entryList">
                <h2 className="entryListOtsikko">Entries:</h2>
        
                {entryitems}
            
            </div>
        )
    }
}

