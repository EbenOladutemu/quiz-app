<template>
  <router-view/>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
#app {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  padding: 1rem;
  box-sizing: border-box;
  letter-spacing: 0.3px;
}

.p-1 {
  padding: 1rem;
}

.text-center {
  text-align: center;
}

.text-success {
  color: #3CAC70;
}

.text-danger {
  color: red;
}

.btn {
  color: #000;
  background-color: #FBBB07;
  padding: 0.75rem;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    opacity: 0.85;
  }
}
</style>
