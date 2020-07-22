<template>
  <div class="home">
    <header>
      <h2 class="headerTitle">Documents</h2>
      <router-link class="linkToAddDocument" to="/">back to catalog</router-link>
    </header>
    <b-form-input type="text" v-model="title" placeholder="Enter your title"></b-form-input>
    <b-button v-on:click="addDocument" block class="deleteButton">
      <router-link to="/">add</router-link>
    </b-button>

    <div class="documents">
      <div v-for="document in documents" class="document-item"></div>
    </div>
  </div>
</template>

<script>
import "./Items.sass";
export default {
  computed: {
    documents() {
      console.log(this.$store.state.count);
      console.log(this.$store.state.documents);
      return this.$store.state.documents;
    }
  },
  methods: {
    addDocument() {
      return this.$store.commit("newDocument", { title: this.title });
    }
  }
};
</script>

