<template>
    <div class="game">
        <h3>{{ name }}:</h3>
        <div v-if="name !== 'Bingo'">
            <div class="models">
                <p>Quantas dezenas quer que eu escolha?</p>
                <input type="number" :min=min :max=max v-model="dezenas" class="input_num">
                <button class="btn_action" @click= "play">Escolher</button>
            </div>
            <p v-if="numeros.length > 0">Números: {{ numeros }}</p>
        </div>
        <div v-else>
            <div class="models">
                <p>O sorteio vai de 01 até...</p>
                <input type="number" min="1" v-model="max_bingo" class="input_num">
                <button class="btn_action" @click= "bingo" v-if="numeros.length < max_bingo">Chamar</button>
            </div>
            <div v-if="numeros.length > 0">
                <p>Todas as "bolas" sorteadas: {{ numeros }}</p>
                <p>Foram chamadas {{ numeros.length }} bolas</p>
                <p><strong>Última "pedra" chamada: {{ sorted }}</strong></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    name: String,
    dezenas: Number,
    min: Number,
    max: Number,
    min_vol: Number,
    max_vol: Number
  },
  data: () => {
    return {
      numeros: [],
      max_bingo: null,
      sorted: null
    }
  },
  methods: {
    play () {
        let numeros = [Math.floor(Math.random() * this.max_vol) + this.min_vol]
        for (let i = 0; i < this.dezenas - 1;) {
            let num = Math.floor(Math.random() * this.max_vol) + this.min_vol
            if (!numeros.includes(num)) {
                numeros.push(num)
                i++
            }
        }
        this.numeros = numeros.sort((a, b) => {return a - b})
    },
    bingo () {
        for (let i = 0; i < this.max_bingo;) {
            let num = Math.floor(Math.random() * this.max_bingo) + 1
            if (!this.numeros.includes(num)) {
                this.sorted = num
                i++
            }
        }
        this.numeros.push(this.sorted)
        this.numeros.sort((a, b) => {return a - b})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

.game
  width 50%

.btn_action
  height 2em
  background-color #fafafa

.input_num
  height 1.5em
  width 3em
  margin 1em

.models
  display flex
  align-items center
  justify-content space-evenly
</style>
