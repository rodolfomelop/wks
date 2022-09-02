<template>
  <div class="blocoLancamento">
    <div class="botoes">
        <button class="botaoRemover">
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
export default {
    name: "BlocoLancamento",
    props:{
        lancamento: Object,
    }
}
</script>


<style scoped>
.blocoLancamento {
  display: flex;
  background-color: white;
  border-radius: 20px;
  font-family: "padrao";
  padding: 20px;
  margin-bottom: 10px;
}
.botoes {
  width: 50%;
}
.imagemLancamento {
  width: 50px;
  vertical-align: middle;
}
.botaoRemover {
  border: none;
  outline: none;
  background-color: white;
  vertical-align: middle;
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
  width: 50%;
  float: right;
  text-align: right;
}
.descricaoPost span {
  display: block;
  font-size: 80%;
}
.titulo {
  font-family: "negrito";
  font-size: 200% !important;
}
</style>