<template>
  <div>
    <h1>Blog</h1>
    <p>Descubra o que esta rolando de legal na internet</p>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
}
</script>

<style scoped>

    div{
        background-image: linear-gradient(to right, #4d13d1, #59abe3 );
        color: white;
        padding: 20px 20px 10px 20px;
    }

    h1 {
        font-family: "negrito";
        font-size: 300%;
    }

    p {
        font-family: "padrao";
        font-size: 150%;
    }

</style>