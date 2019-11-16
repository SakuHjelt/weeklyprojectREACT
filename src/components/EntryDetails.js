import React, { Component } from 'react'
import { fetchSingleEntry } from '../service/apiclient';
import {Link} from 'react-router-dom';
import './css/EntryDetails.css'

export default class EntryDetails extends Component {
    state = {entry: null}
    componentDidMount() {
        const id = this.props.match.params.id;
        fetchSingleEntry(id).then(entry=> {
            this.setState({entry});
        })
    }

    render() {
        if (!this.state.entry) {
            return <p>Loading...</p>
        }
        const {id, title, descr, inprog, compl, timetom, timest, history} = this.state.entry;
        return (
            <div className="singleEntry">
            <h1>Entry #{id}</h1>
            <h3>Details</h3>
            <div>
                Title:
                <p className="title">{title}</p>
                Description:
                <p className="descr">{descr}</p>
                In progress?
                <p className="inporg">{inprog}</p>
                Completion Date:
                <p className="compl">{compl}</p>
                Time To Master:
                <p className="timetom">{timetom}</p>
                Time Started:
                <p className="timest">{timest}</p>
            </div>
            <Link to="/entries"><button className="showallbutton">Show All</button></Link>
            </div>
        )
    }
}


// quotearray =
//     [
//         {
//         "id": 1,
//         "author": "Betoni-Jankko",
//         "quotetext": "Asia kunnossa."
//     },
//         {
//             "id": 2,
//             "author": "Timo Jutila",
//             "quotetext": "Mentiin eteenpäin."
//         },
//         {
//             "id": 3,
//             "author": "Seppo Räty",
//             "quotetext": "Saksa on hieno maa."
//         },
//         {
//             "id": 4,
//             "author": "Hippocrates",
//             "quotetext": "Ars Longa Vita Brevis."
//         },
//         {
//             "id": 5,
//             "author": "Urho Kalevi Kekkonen",
//             "quotetext": "...tunarit."
//         },
//         {
//             "id": 6,
//             "author": "Martti Ahtisaari",
//             "quotetext": "Peijoona soikoon."
//         },
//         {
//             "id": 7,
//             "author": "Bill Gates",
//             "quotetext": "Minä en näe, että graafisesta käyttöliittymästä olisi mitään hyötyä."
//         },
//         {
//             "id": 8,
//             "author": "Kyösti Kallio",
//             "quotetext": "Kuivettukoon käteni, joka tällaisen paperin on allekirjoittanut."
//         },
//         {
//             "id": 9,
//             "author": "Paavo Väyrynen",
//             "quotetext": "Jos te nyt valitsette väärän presidentin, niin minä muistan sen ikuisesti."
//         },
//     ];
