<template>
  <div>
    <h1>SIngIn</h1>
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

    <q-btn type="submit" color="primary" id="pdf" @click="submit()" no-caps
      ><b>{{ $t("buttons.download_pdf") }}</b></q-btn
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "SingIn",
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
