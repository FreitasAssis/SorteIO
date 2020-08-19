<template>
    <div class="my-5">
        <div v-if="name === 'Bingo'">
          <div class="models">
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-toolbar
                color="secondary"
                dark
              >
                <v-toolbar-title>{{ name }}</v-toolbar-title>
              </v-toolbar>

              <v-container fluid>
                <v-col dense class="align-center">
                  <v-text-field
                    type="number"
                    label="Quantas dezenas?"
                    v-model="max_bingo"
                    min="1"
                  ></v-text-field>
                  <v-btn class="my-2" small color="secondary"  v-if="numeros.length < max_bingo" @click="bingo">Sortear</v-btn>
                </v-col>
                <v-col v-if="numeros.length > 0">
                  <p>Todas as "bolas" sorteadas:<br>
                  {{ numeros }}</p>
                  <p>Foram chamadas {{ numeros.length }} bolas</p>
                  <h4>Última "pedra" chamada:<br>{{ sorted }}</h4>
                </v-col>
              </v-container>
            </v-card>
          </div>
        </div>
        <div v-else-if="name === 'Nomes'">
          <div class="models">
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-toolbar
                color="secondary"
                dark
              >
                <v-toolbar-title>{{ name }}</v-toolbar-title>
              </v-toolbar>

              <v-container fluid>
                <v-row dense class="align-center">
                  <v-text-field
                    type="text"
                    label="Primeiro item, pessoa ou número"
                    v-model="nome"
                    v-if="nomes.length === 0"
                    @keyup.enter="sendNames"
                    hint="'Enter para enviar'"
                  ></v-text-field>
                  <v-text-field
                    type="text"
                    label="Próximo item"
                    v-model="nome"
                    v-else
                    @keyup.enter="sendNames"
                    hint="'Enter para enviar'"
                  ></v-text-field>
                </v-row>
                <v-col v-if="nomes.length > 0" class="result">
                  <ul class="text-left">
                    <li v-for="n in nomes" :key="n">{{ n }}</li>
                  </ul>
                  <v-btn class="my-2" small color="secondary" @click="sortNames">Sortear</v-btn>
                  <h4 v-if="sorted">Sorteado(a):<br>{{ sorted }}</h4>
                </v-col>
              </v-container>
            </v-card>
          </div>
        </div>
        <div v-else>
          <div class="models">
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-toolbar
                color="secondary"
                dark
              >
                <v-toolbar-title>{{ name }}</v-toolbar-title>
              </v-toolbar>

              <v-container fluid>
                <v-row dense class="align-center">
                  <v-text-field
                    type="number"
                    label="Quantas dezenas?"
                    v-model="dezenas"
                    :min=min
                    :max=max
                  ></v-text-field>
                  <v-btn icon>
                    <v-icon color="primary" @click="play">mdi-send</v-icon>
                  </v-btn>
                </v-row>
                <v-row v-if="numeros.length > 0" class="result">
                  <div v-for="num in numeros" :key="num" class="mx-2" >
                    {{ num }}
                  </div>
                </v-row>
              </v-container>
            </v-card>
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
      nomes: [],
      nome: null,
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
    },
    sendNames () {
      this.nomes.push(this.nome)
      this.nome = null
    },
    sortNames () {
      this.sorted = this.nomes[Math.floor(Math.random() * this.nomes.length)]
      const i = this.nomes.indexOf(this.sorted)
      this.nomes.splice(i,  1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

.models
  display flex
  align-items center
  justify-content space-evenly

.result
  justify-content center
</style>
