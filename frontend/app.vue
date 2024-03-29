<template>
  <div>
    <NuxtLoadingIndicator
      color="red"
      :duration="5000"
      :height="6"
      :throttle="0"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">

</script>
