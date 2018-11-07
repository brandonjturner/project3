import api from '../../utils/API';

const qbs = {};
const qbIds = [];
const qbsArray = [];

api.getQBList()
  .then(res => {
    res.data.forEach((e, i) => {
      qbIds.push(`qb-${i + 1}`);
      e['id'] = `qb-${i + 1}`;
      qbsArray.push(e);
      qbs[`qb-${i + 1}`] = e;
    });
  })
  .catch(err => console.log(err));

const initialData = {
  qbs: qbs,
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'QB List',
      qbIds: qbIds
    },
    'column-2': {
      id: 'column-2',
      title: 'Info',
      qbIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2'],
}


export default initialData;