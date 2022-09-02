<template>
  <div id="painelResumo">
    <div class="resumoTitulo">
      <span class="titulo">Título</span>
      <span class="descricao">Descrição</span>
      <span class="data">Data</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "PainelResumo",
    computed: mapGetters([ ])
}
</script>

<style scoped>
#painelResumo{
  width: 60%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;

}

.resumoTitulo{
  text-align: center;
}

.resumoTitulo span{
  display: block;
  font-family: "negrito";
}

.titulo{
  font-size: 300%;
}

.descricao{
  font-size: 100%;
}

.data{
  font-size: 50%;
}

</style>