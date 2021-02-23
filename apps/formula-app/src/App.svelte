<script>
  import Router from 'svelte-spa-router'

  import Home from './pages/Home.svelte'
  import LoginForm from './pages/SignupForm.svelte'
  import App2 from './pages/App2.svelte'
  import Table from './pages/Table.svelte'
  import TestGroup from './pages/TestGroup.svelte'

 const routes = {
   '/': Home,
   '/login-form': LoginForm,
   '/app2': App2,
   '/table': Table,
   '/group': TestGroup
 }
</script>

<Router {routes}/>

