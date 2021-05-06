import React, { useCallback, useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import history from '../../history';
import apiClient from '../../apiClient';


import './records-list.styles.scss';

const RecordsList = ({ currentModel }) => {

    const [modelRecordsData, setModelRecordsData ] = useState({
        data: []
    })

    const [recordsLoaded, setRecordsLoaded] = useState(false);

    const getRecords = useCallback( () => {
        console.log('fetching data')
        apiClient.get(`/api/${currentModel}s`)
            .then( response => {
                setModelRecordsData(response.data)
                setRecordsLoaded(true);
            })
    },[currentModel])

    useEffect(() => {
        // if(currentModel){
            getRecords();
        // }
    },[getRecords])
    console.log('rendered')

    const handleRowEdit = (recordID) => {
        history.push(`/resources/${currentModel}/edit/${recordID}`)
    }

    const handleRowDelete = (recordID) => {

        apiClient.delete(`/api/${currentModel}/${recordID}`)
        .then( response => {
            console.log(response)
            if(response.data === 1) {
                    let newRecordsList = modelRecordsData.data.filter( product => product.id !== recordID)
                    setModelRecordsData({
                        ...modelRecordsData,
                        data: newRecordsList
                    })
                }
            })
    }
            
    let tableHeaders = modelRecordsData.data.length ? Object.keys(modelRecordsData.data[0]) : [];        
    let tableHeadersComponent = tableHeaders.map( headerName => <th>{headerName}</th>)

    let tableDataComponent = modelRecordsData.data.length ? modelRecordsData.data.map( data => {
        
        let cellData =  tableHeaders.map( header =>
            <td>{data[header]}</td>
        )

        return <tr>
            {
                cellData
            }
            <td><button onClick={() => handleRowEdit(data.id)}>Edit</button></td>
            <td><button onClick={() => handleRowDelete(data.id)}>Delete</button></td>
        </tr>
        })
    :
        null


    return (
        <section>
            {
                recordsLoaded ?
                    <div>
                        <Link to={`/resources/${currentModel}/create`}>
                            <button>Create new {currentModel}</button>
                        </Link>
                        <table >
                            <thead>
                                {
                                    modelRecordsData.data.length ?
                                        <tr>
                                            {
                                                tableHeadersComponent
                                            }
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    :
                                        null
                                }
                            </thead>
                            <tbody>
                                {
                                    tableDataComponent
                                }
                            </tbody>
                        </table>
                    </div>
                :
                    null
            }
        </section>
    )
}

export default RecordsList;