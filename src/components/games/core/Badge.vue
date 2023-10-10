<template>
  <div>
    <v-row>
      <v-col class="text-center" cols="12">
        <v-avatar size="80">
          <v-img :src="avatar"></v-img>
        </v-avatar>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="my-2" :class="{ 'text-center' : textCenter }" cols="12">
        <h1 class="dm__secondary4--text subtitle-2 text-capitalize mb-3">
          {{ title }}
        </h1>
        <span class="dm__secondary4--text caption font-weight-light text-capitalize">
          {{ description }}
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-progress-linear striped color="dm__info" :value="progress" />
      </v-col>
    </v-row>
    <v-row>
      <v-col  :class="{ 'text-center' : textCenter }" cols="12">
        <span class="text-uppercase font-weight-bold caption">
          {{ lang(status) }}
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    props: {
        avatar: {
            default: '' ,
            type: String
        },
        title: {
            default: '' ,
            type: String
        },
        description: {
            default: '' ,
            type: String
        },
        progress: {
            default: 0 ,
            type: Number
        },
        status: {
            default: 'unlocked' ,
            type: String
        },
        textCenter: {
            default: false,
            type: Boolean
        }
    }
}
</script>