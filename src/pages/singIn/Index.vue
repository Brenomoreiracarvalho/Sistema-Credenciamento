<template>
    <q-page class="flex flex-center">
      <div>
        <h1>SIngIn</h1>
        <!-- <q-input v-model="email" filled type="email" hint="Email" />
        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input> -->
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { ref } from 'vue'
  
  export default defineComponent({
    name: 'SingIn',
    setup () {
    return {
      isPwd: ref(true),

      email: ref('')
    }
  }
  })
  </script>
  