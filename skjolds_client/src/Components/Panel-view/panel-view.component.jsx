import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RecordsList from '../Records-list/records-list.component';
import PageSpinner from '../Spinners/page-spinner.component';

import { fetchModelListStart, changeCurrentModel } from '../../Redux/admin/admin.actions';
import { selectModelList, selectCurrentModel, selectHasLoaded } from '../../Redux/admin/admin.select';

import './panel-view.styles.scss';

const PanelView = ({ modelList, currentModel, fetchModelListStart, changeCurrentModel, hasLoaded }) => {
    
    useEffect(() => {
        if(modelList.length === 0){
            fetchModelListStart()
        }
    },[modelList, fetchModelListStart])


    const handleModelChange = (e) => {
        let model = e.target.value.toLowerCase();


        if(currentModel !== model) {
            changeCurrentModel(model); // triggers redux saga action - fetches records for respective model
        }
    }

    let modelsListComponent = modelList ? modelList.map( (name, index) => 
            <div key={index} className={name.toLowerCase() === currentModel ? 'highlight' : ''}>
                <button onClick={handleModelChange} value={`${name}`}> {`${name}`} </button>
            </div>)
        : 
            null


    return (
        <section className="panel-page">
                    {
                        hasLoaded || modelList.length > 0 ?
                            <div className="panel-page__container">
                                <aside className="panel-page__models">
                                    {
                                        modelsListComponent
                                    }
                                </aside>
                                {
                                    currentModel ?
                                        <div className="panel-page__data">
                                            <RecordsList />
                                        </div>
                                    :
                                        null

                                }
                            </div>
                        :
                            <PageSpinner />
                    }
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    modelList: selectModelList,
    currentModel: selectCurrentModel,
    hasLoaded: selectHasLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchModelListStart: () => dispatch(fetchModelListStart()),
    changeCurrentModel: (modelName) => dispatch(changeCurrentModel(modelName))
})

export default connect(mapStateToProps, mapDispatchToProps)(PanelView);

