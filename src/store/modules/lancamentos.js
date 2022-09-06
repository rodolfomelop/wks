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

  deletarLancamento: ({ commit }, index) => {
    commit("deletar", index);
  },
  
};

const mutations = {
  adicionarLancamento: (state, lancamento) =>
  state.lancamentos.unshift(lancamento),

  deletar: (state, index) =>
  state.lancamentos.slice(index,1)
};

export default {
  state,
  actions,
  mutations,
};
