
<template>
  <v-app class="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div style="width:50%">
        <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
      </div>
      <div class="d-flex align-center">
        <h1>SorteIO</h1>
      </div>
      <div style="width:50%" class="d-none d-sm-inline text-right">
        <v-btn
          href="https://luiz-freitas.web.app/"
          target="_blank"
          text
        >
          <span class="mr-2">Site do sesenvolvedor</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main class="text-center">

      <v-tabs centered v-if="menu" class="d-none d-md-inline">
        <v-tab @click="chooseGame('home')">Início</v-tab>
        <v-tab @click="chooseGame('nomes')">Sorteio de nomes</v-tab>
        <v-tab @click="chooseGame('bingo')">Bingo</v-tab>
        <v-tab @click="chooseGame('megasena')">Megasena</v-tab>
        <v-tab @click="chooseGame('lotomania')">Lotomania</v-tab>
      </v-tabs>

      <v-tabs vertical v-if="!menu" class="d-md-none">
        <v-tab @click="chooseGame('home')" class="tab_sm">Início</v-tab>
        <v-tab @click="chooseGame('nomes')" class="tab_sm">Sorteio de nomes</v-tab>
        <v-tab @click="chooseGame('bingo')" class="tab_sm">Bingo</v-tab>
        <v-tab @click="chooseGame('megasena')" class="tab_sm">Megasena</v-tab>
        <v-tab @click="chooseGame('lotomania')" class="tab_sm">Lotomania</v-tab>
      </v-tabs>

      <Home class="mt-10" v-if="home" />

      <Game name='Nomes' v-if="nomes" />

      <Game name='Bingo' v-if="bingo" />

      <Game name='Megasena' :dezenas='dezenas' :min='min' :max='max' :min_vol='min_vol' :max_vol='max_vol' v-if="megasena" />

      <Game name = 'Lotomania' :dezenas='dezenas' :min='min' :max='max' :min_vol='min_vol' :max_vol='max_vol' v-if="lotomania" />

      <h3>Boa sorte!</h3>

      <v-footer absolute>
        <a href="https://luiz-freitas.web.app/" target="_blank" rel="noopener">Contato</a>
        &copy; {{ new Date().getFullYear() }}
        <a href="https://onelink.to/boomer_cashback" target="_blank" rel="noopener">Boomer</a>
      </v-footer>

    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home'
import Game from './components/Game.vue'

export default {
  name: 'App',

  components: {
    Home, Game
  },

  data: () => ({
    menu: true,
    home: true,
    nomes: false,
    bingo: false,
    megasena: false,
    lotomania: false,
    dezenas: null,
    min: null,
    max: null,
    min_vol: null,
    max_vol: null
  }),
  methods: {
    chooseGame (game) {
      switch (game) {
        case 'nomes':
          this.home = false
          this.nomes = true
          this.bingo = false
          this.megasena = false
          this.lotomania = false
          break
        case 'bingo':
          this.home = false
          this.nomes = false
          this.bingo = true
          this.megasena = false
          this.lotomania = false
          break
        case 'megasena':
          this.home = false
          this.nomes = false
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
          this.home = false
          this.nomes = false
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
          this.home = true
          this.nomes = false
          this.bingo = false
          this.megasena = false
          this.lotomania = false
          this.dezenas = null
          this.min = null
          this.max = null
          this.min_vol = null
          this.max_vol = null
          break
      }
    }
  }
};
</script>
<style scoped lang="stylus">
.app
  height 100vh
.tab_sm
  align-self center
footer
  justify-content space-around
</style>
