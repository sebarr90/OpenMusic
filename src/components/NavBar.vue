<template>
  <nav>
    <ul>
      <li><router-link to="/categoria/rap">Rap</router-link></li>
      <li><router-link to="/categoria/pop">Pop</router-link></li>
      <li><router-link to="/categoria/rock">Rock</router-link></li>
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
}
</style>
