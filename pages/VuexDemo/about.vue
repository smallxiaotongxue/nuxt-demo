<template>
  <div>
    <p>
      <button @click="$store.commit('increment')">
        {{ $store.state.counter }}
      </button><br>
      <NuxtLink to="/VuexDemo">
        Home
      </NuxtLink>
    </p>
  </div>
</template>
