<template>
  <div id="painelLancamento">
    <div id="formularioLancamento">
      <form @submit="salvar">

        <label for="titulo">Titulo</label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          required
          v-model="titulo"
        />

        <label for="descricao">Descrição</label>
        <textarea class="text-area"
          type="text-area"
          name="descricao"
          id="descricao"
          required
          v-model="descricao"
            />

        <label for="data">Data</label>
        <input type="date" name="data" id="data" required v-model="data" />

        <button>Postar</button>
      </form>
    </div>
    <div id="arealancamentos">
      <BlocoLancamento
        v-for="lancamento in lancamentos"
        :key="lancamento.id"
        :lancamento="lancamento"
      />
    </div>
    <div>
     <PainelResumo 
     :titulo="titulo"
     :descricao="descricao"
     :data="data"
     
     />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BlocoLancamento from "./BlocoLancamento.vue";
import Lancamento from "../models/Lancamento";
import PainelResumo from './PainelResumo.vue';



export default {
  name: "PainelLancamentos",
  data: () => {
    return {
      titulo: "",
      descricao: "",
      data: "",
    };
  },
  components: {
    BlocoLancamento,
    PainelResumo,
    
},
  computed: {
    ...mapState({
      lancamentos: (state) => state.moduloLancamentos.lancamentos,
    }),
  },

  methods: {
    ...mapActions(['salvarLancamento']),

    salvar(event) {
      event.preventDefault();
      const lancamento = new Lancamento(this.titulo, this.descricao, this.data);
      this.salvarLancamento(lancamento);
      this.limparFormulario();
    },
    
    limparFormulario() {
      this.titulo = "";
      this.descricao = "";
      this.data = "";
    },
  },
};
</script>

<style scope>
#painelLancamento {
  width: 40%;
  padding: 20px;
}

#formularioLancamento {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  font-family: "padrao";
}

input[type="text"],
input[type="date"],
button {
  display: block;
  margin-bottom: 10px;
}

.text-area{
  display: block;
  flex-grow: 1;
  padding-bottom: 10px;
}

#tiposLancamentos {
  margin-bottom: 10px;
  font-family: "negrito";
}

#tiposLancamento label {
  margin-right: 20px;
}

#tiposLancamentos label:first-of-type {
  color: #22a7f0;
}

#tiposLancamentos label:last-of-type {
  color: red;
}

#descricao {
  width: 70%;
}

button {
  background-color: var(--cor-destaque);
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 15px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
}

#titulo,
#descricao {
  height: 20px;
  font-family: "padrao";
  font-size: 100%;
}

#arealancamentos {
  margin-top: 30px;
}
</style>
