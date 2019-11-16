import React, { Component } from 'react'
import EntryList from './EntryList'
import EntryForm from './EntryForm';

let entryarray;

export default class EntryBox extends Component {
    state = {entries: entryarray, nextid: 100}
    addEntry = entry => {
        entry.id = this.state.nextid;
        this.state.entries.push(entry);
        this.setState({nextid: this.state.nextid+1});
    }
    render() {
        return (
            <div className="entryBox">
                <EntryForm addCallback={this.addEntry}/>
                <EntryList entries={this.state.entries}/>
            </div>
        )
    }
}

entryarray =
    [{}];
