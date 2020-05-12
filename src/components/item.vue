<template>
  <div>
    <h1>item</h1>
    <p>{{ myId }}</p>
    <p>{{ myP }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        myId: null,
        myP: null,
      };
    },
    created() {
      this.myId = this.$route.params.id;
      this.myP = this.$route.query.p;
    },
  };

</script>
