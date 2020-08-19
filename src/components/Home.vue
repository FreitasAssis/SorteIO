<template>
  <div class="home text-center">
    <h2>Bem vindo(a)!</h2>
    <p class="mt-5">
      Para passar o tempo... Faça sorteios personalizados, bingo ou simule jogos das lotéricas.<br>
      E se, por acaso, venha a ganhar algum jogo usando uma combinação tirada daqui, não custa nada uma doação singela para o desenvolvedor...<br>
      Aos poucos vou acrescentando outras modalidades, aceito sugestões.
    </p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
  display flex
  flex-direction column
  align-items center

.list_models
  width 75%
  margin 2em
  display flex
  flex-direction row
  align-items center
  justify-content space-evenly

.btn_choice
  width 6em
  height 3em
  background-color #fafafa

</style>
