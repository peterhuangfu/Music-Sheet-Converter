import agent from './agent';

const Explore = {
  namespaced: true,
  state: {
    information: '',
    works: [],
    openWork: '',
  },
  mutations: {
    GETWORKS(state, payload) {
      state.works = payload;
    },
  },
  actions: {
    getAllWorks({ commit }, { time_range }) {
      agent
        .get(`explore/getPublicPDF?time_range=${time_range}`)
        .then(res => {
          commit('GETWORKS', res.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
    openWork({ commit }, { _id, path }) {
      agent
        .post(
          'explore/openpdf',
          { pdf_id: _id, file_path: path },
          { responseType: 'blob' }
        )
        .then(res => {
          var fileURL = window.URL.createObjectURL(
            new Blob([res.data], {
              type: 'application/pdf',
            })
          );
          var fileLink = document.createElement('a');
          window.open(fileURL);
        })
        .catch(err => {
          console.error(err);
        });
    },
    downloadWork({ commit }, { _id, path }) {
      agent
        .post(
          'explore/downloadpdf',
          { pdf_id: _id, file_path: path },
          { responseType: 'blob' }
        )
        .then(res => {
          var fileURL = window.URL.createObjectURL(
            new Blob([res.data], {
              type: 'application/pdf',
            })
          );
          var fileLink = document.createElement('a');

          fileLink.href = fileURL;
          fileLink.setAttribute('download', 'download.pdf');
          document.body.appendChild(fileLink);

          fileLink.click();
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  getters: {},
};

export default Explore;
