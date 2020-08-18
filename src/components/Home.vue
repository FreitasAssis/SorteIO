<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>
      Faça seu sorteio, bingo ou simule jogos das lotéricas. Aos poucos serão acrescentadas outras modalidades.
    </p>
    <h3>Boa sorte!</h3>
    <div class="list_models">
      <button class="btn_choice" @click= "chooseGame('bingo')">Bingo</button>
      <button class="btn_choice" @click= "chooseGame('megasena')">Megasena</button>
      <button class="btn_choice" @click= "chooseGame('lotomania')">Lotomania</button>
    </div>

    <Game name='Bingo' v-if="bingo" />

    <Game name='Megasena' :dezenas='dezenas' :min='min' :max='max' :min_vol='min_vol' :max_vol='max_vol' v-if="megasena" />

    <Game name = 'Lotomania' :dezenas='dezenas' :min='min' :max='max' :min_vol='min_vol' :max_vol='max_vol' v-if="lotomania" />

    <h3>Outros projetos:</h3>
    <ul>
      <li><a href="https://luiz-freitas.web.app/" target="_blank" rel="noopener">Site</a></li>
      <li><a href="https://onelink.to/boomer_cashback" target="_blank" rel="noopener">Aplicativo Boomer</a></li>
    </ul>
  </div>
</template>

<script>
import Game from './Game.vue'

export default {
  name: 'Home',
  components: { Game },
  props: {
    msg: String
  },
  data: () => {
    return {
      bingo: false,
      megasena: false,
      lotomania: false,
      dezenas: null,
      min: null,
      max: null,
      min_vol: null,
      max_vol: null
    }
  },
  methods: {
    chooseGame (game) {
      switch (game) {
        case 'bingo':
          this.bingo = true
          this.megasena = false
          this.lotomania = false
          break
        case 'megasena':
          this.bingo = false
          this.megasena = true
          this.lotomania = false
          this.dezenas = 6
          this.min = 1
          this.max = 15
          this.min_vol = 1
          this.max_vol = 60
          break
        case 'lotomania':
          this.bingo = false
          this.megasena = false
          this.lotomania = true
          this.dezenas = 50
          this.min = 1
          this.max = 50
          this.min_vol = 0
          this.max_vol = 100
          break
        default:
          this.megasena = false
          this.lotomania = false
          this.dezenas = 50
          this.min = 1
          this.max = 50
          this.min_vol = 0
          this.max_vol = 100
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

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
