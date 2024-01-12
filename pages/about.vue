<template>
  <div>
    <h2>About</h2>
    <p>
      The company itself is a very successful company. This is a great duty when
      it comes to pain, not to mention the trouble itself!
    </p>
    <p>
      The company itself is a very successful company. This is a great duty when
      it comes to pain, not to mention the trouble itself!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/INR");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
