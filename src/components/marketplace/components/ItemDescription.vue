<template>
  <div>
    <template v-for="(description , index) in descriptions">
      <v-card flat :key="index + $uuid()">
        <v-card-text>
          <h1>
            <span
              class="subtitle-1 font-weight-bold text-capitalize dm__secondary4--text"
            >
              {{ description.title }}
            </span>
          </h1>
          <p class="text-justify caption font-weight-regular dm__secondary4--text" :key="index + $uuid()">
             {{ description.text }}
             <template v-for="(inclusion , index) in description.inclusions">
                 <span :key="index">
                     <v-icon color="dm__primary">mdi-check-bold</v-icon>
                 </span>
                 {{ inclusion }}
                 <br :key="index + $uuid()" />
             </template>   
          </p>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    descriptions: {
      type: Array,
      required: true,
    },
  },
};
</script>