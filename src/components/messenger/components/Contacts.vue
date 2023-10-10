<template>
  <v-list two-line dense>
    <v-list-item-group>
      <template
        v-for="(contact, index) in Object.assign([], contacts).filter((item) =>
          item.fullname.toLowerCase().includes(search.toLowerCase())
        )"
      >
        <v-list-item :key="index">
          <v-list-item-avatar class="mr-5">
            <v-img :src="contact.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ contact.fullname }}</v-list-item-title>
            <v-list-item-subtitle>{{
              contact.messages[0].message
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              {{
                (() => {
                  return contact.status === "active"
                    ? lang(`active now`)
                    : contact.timestamp;
                })()
              }}
            </v-list-item-action-text>
            <v-spacer></v-spacer>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
    props :{
        search : {
            Type: String,
            default: function(){
                return ""
            }
        }
    },
  data() {
    return {
      contacts: Object.assign(
        [],
        this.$store.getters["messenger/GET_CONTACTS"]
      ),
    }
  },
  computed: {
    _contacts() {
      return  Object.assign([] , this.$store.getters["messenger/GET_CONTACTS"]);
    }
  },
  watch: {
    _contacts: {
      handler: function (newValue) {
        this.$nextTick(() => {
          this.contacts =  Object.assign([],newValue);
        });
      },
      deep: true,
    }
  }
};
</script>