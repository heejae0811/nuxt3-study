<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/auth">Login</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  margin-bottom: 30px;

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    a {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>