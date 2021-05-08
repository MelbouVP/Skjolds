import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


import history from '../../history';

import ContainerSpinner from '../Spinners/container-spinner.component';

import { fetchRecordsStart, deleteRecordStart, fetchIndividualRecordStart } from '../../Redux/admin/admin.actions';
import { selectCurrentModel, selectHasLoaded, selectRecordsData } from '../../Redux/admin/admin.select';

import './records-list.styles.scss';

const RecordsList = ({ hasContentLoaded, currentModel, recordsData, deleteRecordStart, fetchIndividualRecordStart }) => {

    const handleRowEdit = (recordID) => {
        history.push(`/resources/${currentModel}/edit/${recordID}`);
        fetchIndividualRecordStart({ currentModel, recordID });
    }

    const handleRowDelete = (recordID) => {
        deleteRecordStart(recordID);
    }
            
    let tableHeaders = recordsData.length ? Object.keys(recordsData[0]) : [];        
    let tableHeadersComponent = tableHeaders.map( (headerName,index) => <th key={index} > {headerName}</th>)

    let tableDataComponent = recordsData.length ? recordsData.map( (data, index) => {
        
        let cellData =  tableHeaders.map( (header, index) =>
            <td key={index} >{data[header]}</td>
        )

        return <tr key={index}>
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
                hasContentLoaded ?
                    <div className="data-list__container">
                        <div className="data__container">
                            <Link to={`/resources/${currentModel}/create`}>
                                <button>Create new {currentModel}</button>
                            </Link>
                            <table >
                                <thead>
                                    {
                                        recordsData.length ?
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
                    </div>
                :
                    <ContainerSpinner />
            }
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    hasContentLoaded: selectHasLoaded,
    currentModel: selectCurrentModel,
    recordsData: selectRecordsData
})

const mapDispatchToProps = dispatch => ({
    fetchRecordsStart: (modelName) => dispatch(fetchRecordsStart(modelName)),
    deleteRecordStart: (recordID) => dispatch(deleteRecordStart(recordID)),
    fetchIndividualRecordStart: (recordID) => dispatch(fetchIndividualRecordStart(recordID))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecordsList);
