<script>
  import { navigate } from "svelte-native";

  export let compact = true;
  export let goTo;
</script>

<flexboxLayout
  class="w-10/12 min-h-20 mb-5 bg-black flex-col items-center justify-center rounded-[30dp] pt-4"
>
  <flexboxLayout
    class="w-10/12 min-h-20 mb-4 bg-black flex-col items-center justify-center rounded-[30dp]"
  >
    <label
      text="Website responsivo para loja"
      class="text-white text-lg font-bold"
    />
    <label text="Requisitante" class="text-white text-xs" />
    <label text="Lojas tudo ou nada (Ednaldo)" class="text-white" />
  </flexboxLayout>
  <flexboxLayout
    class="w-full min-h-20 bg-zinc-300 flex-col items-center justify-center rounded-b-[30dp] p-4"
  >
    <flexboxLayout
      class="w-10/12 min-h-20 mb-4 bg-[#AEAEAE] flex-col items-center justify-center rounded-[30dp] p-4 text-black"
    >
      <label text="Detalhes:" class="text-black font-bold" />

      <label
        class="text-justify mt-4"
        text="1) Deverá servir como catálogo dos meus produtos."
        textWrap="true"
      />
      <label
        class="text-justify"
        text="2) Deverá ter um sistema de compra com carrinho
        e cadastro de métodos de pagamento."
        textWrap="true"
      />
      <label
        class="text-justify"
        text="3) Cadastro de cliente para uso de cupons de desconto"
        fontStyle="italic"
        textWrap="true"
      />
    </flexboxLayout>
    <flexboxLayout
      class="w-10/12 min-h-20 bg-[#AEAEAE] flex-col items-center justify-center rounded-[30dp] p-4 text-black"
    >
        <label text="Requisitos:" class="text-black font-bold" />

        <label
        class="text-justify mt-4"
        text="1) HTML, CSS, JavaScript."
        textWrap="true"
        />
        <label
        class="text-justify"
        text="2) Seguir o design do site conforme o brandbook."
        textWrap="true"
        />
        <label
        class="text-justify"
        text="3) Desenvolvimento Rápido (prazo não longo)."
        fontStyle="italic"
        textWrap="true"
        />
    </flexboxLayout>
    {#if !compact}
      <flexboxLayout
        class="w-10/12 min-h-20 bg-[#AEAEAE] flex-col items-center justify-center rounded-[30dp] mt-4 p-4 text-black"
      >
        <label text="Mais informações" class="text-black font-bold" />


        <label
        class="text-justify mt-4"
        text="Telefone de contato: (47) 99999-9999"
        textWrap="true"
        />
        <label
            class="text-justify"
            text="E-mail: ednaldo.pereira@gmail.com"
            textWrap="true"
        />
        <label
            class="text-justify"
            text="Valores a combinar."
            fontStyle="italic"
            textWrap="true"
        />
      </flexboxLayout>
    {/if}

    <button
      on:tap={() => navigate({ page: goTo })}
      text={compact ? "Ver mais" : "Ver menos"}
      class="bg-black text-white text-md font-bold rounded-lg mt-4"
    />
  </flexboxLayout>
</flexboxLayout>
