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
};

const mutations = {
  adicionarLancamento: (state, lancamento) =>
    state.lancamentos.unshift(lancamento),
};

export default {
  state,
  actions,
  mutations,
};
