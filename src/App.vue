<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;900&display=swap');
@import './../node_modules/bulma/css/bulma.css';

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: #000;
  font-family: 'Heebo', Arial, Helvetica, sans-serif;
}

#app {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: #005beb;
  padding: 80px 0 32px;
}
</style>
