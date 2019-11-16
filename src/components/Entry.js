// import React, { Component } from 'react'

// export default class Quote extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Aikamme suuri ajattelija:{this.props.author}</p>
//                 <br />
//                 <p>Aforismi: {this.props.quote}</p>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'

import './css/Entry.css';

export default class Entry extends Component {
    poistaminut = () => {
        this.props.deleteCallback(this.props.entry.id);
    }
    showDetails = () => {
        this.props.history.push(`${this.props.match.url}/${this.props.entry.id}`);
    }
    render() {
        const {id, title, inprog, compl, timetom, timest, descr} = this.props.entry;
        return (
            <div className="Entry">
                <span className="entryid">{id}</span> <br/>
                Title:<p className="title">{title}</p>

                <p><input type="button" className="btn" variant="danger" onClick={this.poistaminut}value="Delete"/> 
                <input type="button" className="btn" variant="primary" onClick={this.showDetails} value="More Info"/>
                </p>
            </div>
        )
    }
}