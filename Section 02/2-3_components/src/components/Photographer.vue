<template>
  <div class="photographer">
    Photo taken by: <a :href="link">{{name}}</a>
  </div>
</template>

<script>
export default {
  name: 'Photographer',
  props: [
    'link',
    'name'
  ]
}
</script>