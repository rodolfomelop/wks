<template>
  <div class="blocoLancamento">
    <div class="botoes">
        <button class="botaoRemover"
        @click="deletar(lancamento.id)">
            <img src="../img/lixeira.png" alt="Remover lançamento">
        </button>
    </div>

    <div class="descricaoPost">
        <span class="titulo">{{lancamento.titulo}}</span>
        <span>{{lancamento.descricao}}</span>
        <span>{{ new Date(lancamento.data).toLocaleDateString('pt-BR', {timeZone:"UTC"})}}</span>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";


export default {
  

  ...mapActions(['deletarLancamento']),

    name: "BlocoLancamento",
    props:{
        lancamento: Object,
    },
    methods:{
      
    deletar(index) {
      console.log(index)
       this.deletarLancamento(0);
      
    }
    }
}
</script>


<style scoped>
.blocoLancamento {
  display: flex;
  flex-direction:row-reverse;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  font-family: "padrao";
  padding: 20px;
  margin-bottom: 10px;
}
.botoes {
  width: 20%;
}
.imagemLancamento {
  width: 50px;
  vertical-align: middle;
}
.botaoRemover {
  border: none;
  outline: none;
  background-color: white;
  width: 50px;
  /* align-items: right; */
 
}
.botaoRemover:hover {
  cursor: pointer;
}
.botaoRemover img {
  width: 40px;
}
.botaoRemover img:active {
  filter: invert(100%);
}
.descricaoPost {
  width: 80%;

}
.descricaoPost span {
  display: block;
  font-size: 80%;
}
.titulo {
  text-align: left;
  font-family: "negrito";
  font-size: 200% !important;
}


</style>