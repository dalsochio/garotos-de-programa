<script>
  import { navigate } from "svelte-native";
  import Login from "./Login.svelte";
  import Profile from "./Profile.svelte";

  let programmer = false;
  let customer = false;

  function onCheckedChange(type) {
    if (type == 1) {
      customer = true;
      programmer = false;
    } else {
      programmer = true;
      customer = false;
    }
  }
</script>

<page enableSwipeBackNavigation={true}>
  <flexboxLayout class="bg-zinc-950 flex-col items-center justify-center py-10">
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
        class="h-10 bg-zinc-300 rounded-xl mb-4 px-2 text-[#434343]"
        text=""
        secure="true"
      />
      <label text="Repetir senha:" class="text-zinc-50 mb-2 font-bold" />
      <textField
        class="h-10 bg-zinc-300 rounded-xl mb-4 px-2 text-[#434343]"
        text=""
        secure="true"
      />

      <gridLayout
        columns="auto, *"
        rows="*, *"
        class="float-left h-28 bg-[#434343]"
      >
        <switch
          bind:checked={programmer}
          row="0"
          col="0"
          class="text-white"
          on:checkedChange={() => onCheckedChange(0)}
        />

        <label
          text="Programador"
          class="ml-2 text-zinc-50 font-bold"
          row="0"
          col="1"
        />

        <switch
          bind:checked={customer}
          class="text-white"
          on:checkedChange={() => onCheckedChange(1)}
          row="1"
          col="0"
        />

        <label
          text="Cliente"
          class="ml-2 text-zinc-50 font-bold"
          row="1"
          col="1"
        />
      </gridLayout>

      <button
        class="w-9/ h-18 py-5 align-center bg-zinc-300 rounded-xl mb-8 text-[#434343]"
        text="CADASTRAR"
        on:tap={() => navigate({ page: Profile })}
      />
      <button
        class="w-full text-center text-gray-300 bg-transparent elevation-none font-bold text-xl"
        text="FAZER LOGIN"
        on:tap={() => navigate({ page: Login })}
      />
    </flexboxLayout>
  </flexboxLayout>
</page>
