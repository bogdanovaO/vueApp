<template>
  <div id="app">
    <header>
    <h2 class="headerTitle">Documents</h2>
    <router-link
     class="linkToAddDocument"
          to="/add"
        >add new item +</router-link>
</header>
    <Items/>
  </div>

</template>
 
<script>
import "../style/style.sass";
export default {
  data () {
    return {
      componentName: 'app'

    }
  }
}
</script>

<style>
</style>
