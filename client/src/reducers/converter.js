import agent from './agent'

const Converter = {
  namespaced: true,
  state: {
    information: '',
    works: [],
  },
  mutations: {},
  actions: {
    save_music_information({ commit }, { title, description, ispublic, isseparate, isconvert }) {
      agent
        .post('convert/information',
        { file_path:"", title: title, description: description, ispublic: ispublic, isseparate: isseparate, isconvert: isconvert})
        .then(res => {
          console.log(res.status)
        })
        .catch(err => {
          console.error(err);
        });
    },
    save_music_file({ commit }, { file }) {
      agent
        .post('convert/music',
        { file:file },
        { responseType: 'blob' })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  getters: {},
};

export default Converter;
