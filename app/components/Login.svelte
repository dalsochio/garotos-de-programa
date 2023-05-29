<script>
  import { navigate } from "svelte-native";
  import SignUp from "./SignUp.svelte";
  import Profile from "./Profile.svelte";
</script>

<page>
  <flexboxLayout class="bg-zinc-950 flex-col items-center justify-center">
    <label text="Garotos" class="text-zinc-50 text-center text-3xl font-bold" />
    <label text="de" class="text-zinc-50 text-center text-3xl font-bold" />
    <label
      text="Programa"
      class="text-zinc-50 text-center text-3xl mb-10 font-bold"
    />

    <flexboxLayout
      class="w-10/12 bg-[#434343] flex-col justify-center py-10 px-7 rounded-3xl"
    >
      <label text="Email:" class="text-zinc-50 mb-2 font-bold" />
      <textField
        class="h-10 bg-zinc-300 rounded-xl mb-4 px-2 text-[#434343]"
        text=""
      />
      <label text="Senha:" class="text-zinc-50 mb-2 font-bold" />
      <textField
        class="h-10 bg-zinc-300 rounded-xl mb-8 px-2 text-[#434343]"
        text=""
        secure="true"
      />
      <button
        class="w-9/12 py-5 align-center bg-zinc-300 rounded-xl mb-8 text-[#434343]"
        text="Entrar"
        on:tap={() => navigate({ page: Profile })}
      />
      <button
        class="w-full text-center text-gray-300 bg-transparent elevation-none font-bold text-xl"
        text="CADASTRAR"
        on:tap={() => navigate({ page: SignUp })}
      />
    </flexboxLayout>
  </flexboxLayout>
</page>

<style>
  /* .info {
        font-size: 20;
    } */
</style>
