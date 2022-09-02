<template>
  <div>
    <img src="../img/logo.jpg" alt="logo">
    <span>BLOG</span>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Marca",
};
</script>

<style scoped>
    div{

        background-color: white;
        font-family: negrito;
        padding: 10px;
    }

    img{

        width: 40px;
        vertical-align: middle;
        margin-right: 10px;
    }

    span{
        color:var(--cor-destaque);
        font-size: 120%;
    }

</style>