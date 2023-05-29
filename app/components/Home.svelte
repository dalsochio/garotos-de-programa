<script>
  import { navigate } from "svelte-native";
  import FeedCard from "./parts/FeedCard.svelte";
  import Item from "./Item.svelte";
</script>

<page enableSwipeBackNavigation={true}>
  <scrollView orientation="vertical">
    <flexboxLayout
      class="w-full bg-[#434343] flex-col items-center justify-center px-7 ios:px-32 py-4"
    >
      {#each Array(5) as _}
        <FeedCard goTo={Item} />
      {/each}
    </flexboxLayout>
  </scrollView>
</page>

<style>
  /* .info {
        font-size: 20;
    } */
</style>
