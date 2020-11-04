<template>
  <div class="dark">
    <Nuxt />
  </div>
</template>

<style scoped lang="scss">
body {
  overflow: hidden;
}
.dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: black;
  color: white;
  padding: 10px;

  a {
    color: white;
  }
}

</style>
