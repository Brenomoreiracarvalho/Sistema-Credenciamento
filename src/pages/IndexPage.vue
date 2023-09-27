<template>
  <div>
    <q-input v-model="email" filled type="email" hint="Login" />
    <q-input
      v-model="password"
      filled
      :type="isPwd ? 'password' : 'text'"
      hint="Password"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn
      type="submit"
      :loading="submitting"
      label="Save"
      class="q-mt-md"
      color="teal"
      @click="submit()"
    >
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const submitting = ref(false);
    function submit() {
      submitting.value = true;
      setTimeout(() => {
        submitting.value = false;
      }, 3000);
    }
    return {
      isPwd: ref(true),
      email: ref(""),
      submitting,
      submit,
    };
  },
});
</script>
