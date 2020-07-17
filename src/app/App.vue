<template>
  <div id="hello">
    <h2>{{componentName}}</h2>
    <SearchLine/>
    <Items/>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      componentName: 'App'
    }
  }
}
</script>

<style>
</style>
