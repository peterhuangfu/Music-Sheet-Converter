import agent from './agent';

const Converter = {
  namespaced: true,
  state: {
    information: '',
    file_path: '',
    file_name: '',
  },
  mutations: {
    GETFILEPATH(state, payload) {
      state.file_path = payload;
    },
    GETFILENAME(state, payload) {
      state.file_name = payload;
    },
  },
  actions: {
    save_music_information(
      { commit },
      {
        title,
        description,
        ispublic,
        isseparate,
        isconvert,
        file_path,
        file_name,
      }
    ) {
      agent
        .post('convert/information', {
          file_path: '',
          title: title,
          description: description,
          ispublic: ispublic,
          isseparate: isseparate,
          isconvert: isconvert,
          file_path: file_path,
          file_name: file_name,
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    save_music_file({ commit }, { file }) {
      agent
        .post('convert/music', { file: file }, { responseType: 'blob' })
        .then(res => {
          commit('GETFILEPATH', res.data.message.file_path);
          commit('GETFILENAME', res.data.message.file_name);
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  getters: {},
};

export default Converter;
