<frame>
    {#if logged}
        <Home />
    {:else}
        <SignUp />
    {/if}
</frame>

<script lang="ts">
    import { navigate } from 'svelte-native'
    import Home from './components/Home.svelte'
    import Login from './components/Login.svelte'

    import SignUp from './components/SignUp.svelte'

    let logged = false;

</script>