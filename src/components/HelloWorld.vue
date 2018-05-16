<template lang="pug">
.hello
  .hello-title {{ msg }}

  h4 vm-radio
  //- vm-button asd
  //- vm-radio(marker="1" :value="test" @input="testFunc" label="first")
  //- vm-radio(marker="2" :value="test" @input="testFunc" label="second")
  h4 asdasd
  test-radio(marker="1" :value="test" @input="testFunc" label="first")
  test-radio(marker="2" :value="test" @input="testFunc" label="second")

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  msg: string = 'Vue';
  test: string = '1';
  test2: string = '2';

  testFunc(tt) {
    console.log('asdas', tt)
    this.test = tt;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.hello {

  &-title {
    background: black;
  }
}

/* .hello-title {
  background: yellow;
} */

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
