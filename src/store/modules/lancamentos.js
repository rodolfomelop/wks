

export const state = () => ({
        lancamentos: [
            {
                id: Math.random().toString(36).substr(2,5),
                titulo: "Aqui e o titulos" ,
                descricao: "Teria que ter uma descrição",
                data: "2020-09-30"
            },
          ],

    })

export const getters = () => ( {
        todosLancamentos: state => state.lancamentos
      
    })
export const actions = () => ( {
        salvarLancamento: ({ commit }, lancamento) => {
            commit("adicionarLancamento", lancamento);
        }
    })

export const mutations = () => ( {
        adicionarLancamento: 
            (state, lancamento) => state.lancamentos.unshift(lancamento)
    })

