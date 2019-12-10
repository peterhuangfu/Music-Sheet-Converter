import agent from './agent'

const Converter = {
  namespaced: true,
  state: {
    information: '',
    works: [],
  },
  mutations: {},
  actions: {
    save_music_information({ commit }, { path, file_title, file_description, file_ispublic}) {
      agent
        .post('convert/information',
        { file_path: path, title: file_title, description: file_description, ispublic: file_ispublic},
        { responseType: 'blob' })
    },
  },
  getters: {},
};

export default Converter;
