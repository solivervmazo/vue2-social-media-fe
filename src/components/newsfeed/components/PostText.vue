<template>
  <div class="dm-post-text">
    <v-row>
      <v-col class="pt-0 pb-6" cols="12">
        <p style="font-weight-regular text-justify text-wrap">
          {{ content }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    content : {
      type: String ,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.dm-post-text {
    font-size: 13px !important;
    color: #000;
}
</style>