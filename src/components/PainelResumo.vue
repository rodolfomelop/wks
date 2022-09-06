<template>
  <div id="painelResumo">
    <div class="resumoTitulo">
      <span class="titulo">{{titulo}}</span>
      <span class="descricao">{{descricao}}</span>
      <span class="data">{{data}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "PainelResumo",

    props: {
      titulo: {
        type: String,
        required: true
      },
      descricao: {
        type: String,
        required: true
      },
      data: {
        type: Date,
        required: true
      }


    },
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