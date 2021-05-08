import { createSelector } from 'reselect';

export const selectAdmin = state => state.admin;

export const selectRecords = createSelector(
    [selectAdmin],
    admin => admin.records
);

export const selectModelList = createSelector(
    [selectAdmin],
    admin => admin.modelList
);

export const selectCurrentModel = createSelector(
    [selectAdmin],
    admin => admin.currentModel
);

export const selectRecordsData = createSelector(
    [selectRecords],
    records => records.data
)

export const selectCurrentRecord = createSelector(
    [selectAdmin],
    admin => admin.currentRecord
);

export const selectHasLoaded = createSelector(
    [selectAdmin],
    admin => admin.hasLoaded
);

