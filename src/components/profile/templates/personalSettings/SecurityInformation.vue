<template>
  <v-card class="mb-5">
    <v-card-title>
      {{ lang(`About your profile`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`profile name`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg"
              hide-details
              :label="lang(`Tagline`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              hide-details
              :placeholder="lang(`write a little description about you`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
              <v-row>
                  <v-col cols="12">
                    <v-text-field
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`public email`)"
                    outlined
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`public website`)"
                    outlined
                    />
                  </v-col>
              </v-row>
          </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-select
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`country`)"
                    outlined
                >
                </v-select>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`city`)"
                    outlined
                >
                </v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-select
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`birthday`)"
                    outlined
                >
                </v-select>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`occupation`)"
                    outlined
                >
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-select
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`status`)"
                    outlined
                >
                </v-select>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`birthplace`)"
                    outlined
                >
                </v-select>
            </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
