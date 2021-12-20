<template>
  <div id="nav">
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  padding: 1rem;
  box-sizing: border-box;
}

.text-center {
  text-align: center;
}

.btn {
  color: #000;
  background-color: #FBBB07;
  padding: 0.75rem;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid #FBBB07;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
}
</style>
