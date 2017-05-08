// @flow

import deepFreeze from 'deep-freeze';

import {
  getPeopleState,
  getIsDataCached,
  getNormalizedData,
  getEntities,
  getPeopleById,
  getPerson,
  getDenormalizedData
} from '../peopleSelectors';

describe('peopleSelectors tests', () => {

  it('returns people state from local', () => {
    const state = {
      foo: 'bar',
    }
    deepFreeze(state);

    expect(getPeopleState(state)).toBe(state);
  });

  it('returns people state from global', () => {
    const peopleReducer = {
      foo: 'bar'
    }
    const state = {
      peopleReducer,
      someOtherReducer: 'some state',
    }
    deepFreeze(state);

    expect(getPeopleState(state)).toBe(peopleReducer);
  });

  it('tests getIsDataCached', () => {
    const isDataCached = false;
    const state = {
      isDataCached
    }
    deepFreeze(state);

    expect(getIsDataCached(state)).toBe(isDataCached);
  });

  it('tests getNormalizedData', () => {
    const normalizedData = { someData: 'bar' };
    const state = {
      normalizedData
    }
    deepFreeze(state);

    expect(getNormalizedData(state)).toBe(normalizedData);
  });

  it('tests getEntities', () => {
    const entities = { x: 'y' };
    const normalizedData = { entities };
    const state = {
      normalizedData
    }
    deepFreeze(state);

    expect(getEntities(state)).toBe(entities);
  });

  it('tests getPeopleById', () => {
    const dataById = { '1': 'data' };
    const entities = { dataById };
    const normalizedData = { entities };
    const state = {
      normalizedData
    }
    deepFreeze(state);

    expect(getPeopleById(state)).toBe(dataById);
  });

  it('tests getPerson', () => {
    const dataById = { '1': 'data' };
    const entities = { dataById };
    const normalizedData = { entities };
    const state = {
      normalizedData
    }
    deepFreeze(state);

    expect(getPerson(state, '1')).toBe('data');
  });

  it('tests getDenormalizedData', () => {

    const normalizedData = {
      entities: {
        dataById: {
          '2': {
            id: '2',
            foo: 'bar'
          },
          '1': {
            id: '1',
            x: 'y'
          }
        }
      },
      result: ['2', '1']
    };

    const denormalizedData = [
      {
        id: '2',
        foo: 'bar'
      },
      {
        id: '1',
        x: 'y'
      }
    ];

    expect(getDenormalizedData.resultFunc(normalizedData))
      .toEqual(denormalizedData);
  });

});
