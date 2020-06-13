<template>
  <div>
    <Navbar />
    <br />
    <Categories />
  </div>
</template>

<script>
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Categories,
    Navbar
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
