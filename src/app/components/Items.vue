<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col
      class="itemContainer"
        sm="auto"
        md="auto"
        lg="auto"
        xl="auto"
        v-for="(document, index) in documents"
      >
        <div class="documentItem">
          <div>{{ document.title }}</div>
          <div>{{ document.desc }}</div>
        </div>
            <b-button 
            v-on:click="removeDocument(index)"
             block
            href="#"
          class="deleteButton"

          >remove</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import "./Items.sass";
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  computed: {
    documents() {
        console.log(this.$store.state.documents)
      return this.$store.state.documents;
    }
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  },
  methods: {
    removeDocument(index) {
      return this.$store.commit("removeDocument", index);
    }
  }
};
</script>


