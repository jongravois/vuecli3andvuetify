<template>
  <v-app>
    <v-toolbar
      app
      fixed
      color="primary"
      dark
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <div class="tw-bg-white tw-mx-auto tw-max-w-sm tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-mt-8">
        <div class="tw-sm:flex tw-sm:items-center tw-px-6 tw-py-4">
          <img
            class="tw-block tw-h-16 tw-sm:h-24 tw-rounded-full tw-mx-auto tw-mb-4 tw-sm:mb-0 tw-sm:mr-4 tw-sm:ml-0"
            src="https://files.uaminc.com/images/avatar_small/JonGravois.png"
            alt=""
          >
          <address-card></address-card>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import AddressCard from "./components/AddressCard";

export default {
  name: "App",
  components: {
    AddressCard
  },
  data() {
    return {
      //
    };
  }
};
</script>
