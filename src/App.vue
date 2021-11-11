<template>
  <header>Inputs challenge</header>
  <ul>
    <li>
      <code>&lt;app-input>&lt;/app-input></code>
      <app-input></app-input>
    </li>
  </ul>
  <ul>
    <li>
      <code>&lt;app-input error>&lt;/app-input></code>
      <app-input error></app-input>
    </li>
  </ul>
  <ul>
    <li>
      <code>&lt;app-input disabled>&lt;/app-input></code>
      <app-input disabled></app-input>
    </li>
  </ul>
  <ul class="g-2">
    <li>
      <code>&lt;app-input helperText="Some interesting text">&lt;/app-input></code>
      <app-input helperText="Some interesting text"></app-input>
    </li>
    <li>
      <code>&lt;app-input helperText="Some interesting text" error>&lt;/app-input></code>
      <app-input helperText="Some interesting text" error></app-input>
    </li>
  </ul>
  <ul class="g-3">
    <li>
      <code>&lt;app-input startIcon="local_phone">&lt;/app-input></code>
      <app-input startIcon="local_phone"></app-input>
    </li>
    <li>
      <code
        >&lt;app-input startIcon="mail_outline"<br />
        error>&lt;/app-input></code
      >
      <app-input startIcon="mail_outline" error></app-input>
    </li>
    <li>
      <code
        >&lt;app-input startIcon="lock"<br />
        disabled>&lt;/app-input></code
      >
      <app-input startIcon="lock" disabled></app-input>
    </li>
  </ul>
  <ul class="g-3">
    <li>
      <code>&lt;app-input endIcon="local_phone">&lt;/app-input></code>
      <app-input endIcon="local_phone"></app-input>
    </li>
    <li>
      <code
        >&lt;app-input endIcon="mail_outline"<br />
        error>&lt;/app-input></code
      >
      <app-input endIcon="mail_outline" error></app-input>
    </li>
    <li>
      <code
        >&lt;app-input endIcon="lock"<br />
        disabled>&lt;/app-input></code
      >
      <app-input endIcon="lock" disabled></app-input>
    </li>
  </ul>
  <ul>
    <li>
      <code>&lt;app-input value="Text">&lt;/app-input></code>
      <app-input value="Text"></app-input>
    </li>
  </ul>
  <ul class="g-2">
    <li>
      <code>&lt;app-input size="sm">&lt;/app-input></code>
      <app-input size="sm"></app-input>
    </li>
    <li>
      <code>&lt;app-input size="md">&lt;/app-input></code>
      <app-input size="md"></app-input>
    </li>
  </ul>
  <ul>
    <li>
      <code>&lt;app-input fullWidth>&lt;/app-input></code>
      <app-input fullWidth></app-input>
    </li>
  </ul>
  <ul>
    <li>
      <code>&lt;app-input multiline rows="6">&lt;/app-input></code>
      <app-input multiline rows="6"></app-input>
    </li>
  </ul>
  <footer>Krzysztof Czapko @ DevChallenges.io</footer>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: inherit;
  font-family: inherit;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Poppins', sans-serif;
  color: #4f4f4f;
}

#app {
  width: 100%;
  max-width: 98rem;
  margin: 0 auto;
}

header {
  font-size: 2.4rem;
  margin: 0 0 4rem;
  padding: 2rem 0;
  border-bottom: 1px solid #ccc;
}

footer {
  margin: 4rem 0 0;
  padding: 2rem 0;
  border-top: 1px solid #ccc;
  color: #ccc;
  text-align: center;
  font-size: 1.4rem;
}

ul {
  list-style: none;
  display: grid;
  margin-bottom: 3rem;
}

.g-2 {
  grid-template-columns: 1fr 1fr;
}

.g-3 {
  grid-template-columns: repeat(3, 1fr);
}

li {
  display: grid;
  align-content: space-between;
  justify-items: start;
}

code {
  white-space: pre;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  display: block;
}
</style>
