<script>
  import { navigate } from "svelte-native";

  import Home from "./components/Home.svelte";
  import Login from "./components/Login.svelte";
  import Profile from "./components/Profile.svelte";
</script>

<rootLayout height="100%" width="100%">
  <stackLayout>
    <flexboxLayout
      class="h-20 flex-row justify-between bg-black text-white w-full"
    >
      <label
        class="ml-6 font-bold"
        text="Home"
        on:tap={() => navigate({ page: Home })}
      />
      <label
        class="ml-6 font-bold"
        text="Profile"
        on:tap={() => navigate({ page: Profile })}
      />
      <label
        class="mr-6 font-bold"
        text="Sair"
        on:tap={() => navigate({ page: Login })}
      />
    </flexboxLayout>
    <frame height="100%">
      <Login />
    </frame>
  </stackLayout>
</rootLayout>
