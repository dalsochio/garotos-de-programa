<script>
  import { navigate } from "svelte-native";
</script>

<page height="100%" enableSwipeBackNavigation={true}>
  <flexboxLayout
    class="w-full bg-[#434343] flex-col items-center justify-start"
  >
    <gridLayout
      columns="*, 10px, *"
      rows="*, 10px, *"
      class="w-10/12 py-4 h-52"
    >
      <flexboxLayout
        class="bg-black rounded-lg justify-center"
        row="0"
        col="0"
        rowSpan="3"
      >
        <label text="Imagem aqui" class="text-xs text-white font-light" />
      </flexboxLayout>
      <flexboxLayout class="bg-black justify-center rounded-lg" row="0" col="2">
        <label class="text-white">Nome do usuário </label>
      </flexboxLayout>
      <flexboxLayout class="bg-black justify-center rounded-lg" row="2" col="2">
        <label class="text-white">Especialização </label>
      </flexboxLayout>
    </gridLayout>

    <flexboxLayout
      class="bg-zinc-300 flex-col align-items w-10/12 py-8 px-4"
      style="border-radius: 60px"
    >
      <label text="Competencias" class="text-center font-bold" />

      <label
        class="text-justify mt-4"
        text="1) Ensino Superior em Desenvolvimento de sistemas."
        textWrap="true"
      />
      <label
        class="text-justify"
        text="2) Experiências com desenvolvimento WEB."
        textWrap="true"
      />
      <label
        class="text-justify"
        text="3) Conhecimento sobre banco de dados (mySQL e PostgreeSQL)."
        fontStyle="italic"
        textWrap="true"
      />
      <label text="Repositórios" class="mt-8 text-center font-bold" />
      <label class="text-center mt-4" text="https://github.com/userdeveloper" />

      <button
        class="w-full text-center text-white bg-black elevation-none font-bold text-lg rounded-xl mt-6"
        text="Atualizar informação"
      />
    </flexboxLayout>
  </flexboxLayout>
</page>
