const state = () => ({
  lancamentos: [
    {
      id: Math.random().toString(36).substr(2, 5),
      titulo: "Esse é um titulo",
      descricao: "Teria que ter uma descrição",
      data: "2020-09-30",
    },
    
  ],

  
});

const actions = {
  salvarLancamento: ({ commit }, lancamento) => {
    commit("adicionarLancamento", lancamento);
  },

  deletarLancamento: ({commit}, id) =>{
    commit('deletarLancamento', id);
  }

  
  
  
  
};

const mutations = {
  adicionarLancamento: (state, lancamento) =>
  state.lancamentos.unshift(lancamento),

  deletarLancamento: (state, id) =>
   state.lancamentos = state.lancamentos.filter(lancamento => lancamento.id !== id)
};

export default {
  state,
  actions,
  mutations,
};
