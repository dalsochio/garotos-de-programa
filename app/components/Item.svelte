<script>
  import { navigate } from "svelte-native";
  import FeedCard from "./parts/FeedCard.svelte";
  import Home from "./Home.svelte";
</script>

<page enableSwipeBackNavigation={true}>
  <scrollView orientation="vertical">
    <flexboxLayout
      class="w-full bg-[#434343] flex-col items-center justify-center px-7 ios:px-32 py-4"
    >
      <FeedCard compact={false} goTo={Home} />
    </flexboxLayout>
  </scrollView>
</page>
