import React, { useEffect, useState } from 'react';

import apiClient from '../../apiClient';
import RecordsList from '../Records-list/records-list.component';

import './panel-view.styles.scss';

const PanelView = () => {


    const [modelList, setModelList] = useState();
    const [modelName, setModelName] = useState('');
    
    useEffect(() => {
            apiClient.get('/sanctum/csrf-cookie').then( response => {
                apiClient.get('/api/resources/index')
                    .then( response => {
                        setModelList(response.data)
                })
            })
    },[setModelList])


    const changeCurrentModel = (e) => {
        let model = e.target.value.toLowerCase();
        setModelName(model);
    }

    let modelsListComponent = modelList ? modelList.map( (name, index) => 
            <div key={index}>
                <button onClick={changeCurrentModel} value={`${name}`}> {`${name}`} </button>
            </div>)
        : 
            null
        

    return (
        <section className="panel-page">
                    <div className="panel-page__container">
                        <aside className="panel-page__models">
                            {
                                modelsListComponent
                            }
                        </aside>
                        {
                            modelName ?
                                <div className="panel-page__data">
                                    <div className="data-list__container">
                                        <div className="data__container">
                                            <RecordsList currentModel={modelName} />
                                        </div>
                                    </div>
                                </div>
                            :
                                null

                        }
                    </div>
        </section>
    )
}

export default PanelView;

