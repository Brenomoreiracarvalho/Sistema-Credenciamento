<template>
  <div class="container">
    <div class="box">
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
        label="ESQUECI A SENHA"
        class="q-mt-md"
        @click="forgotPassword()"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
      <q-btn
        type="submit"
        :loading="submitting"
        label="ENTRAR"
        class="q-mt-md"
        color="teal"
        @click="submit()"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
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
      if (submitting.value === true) {
        this.$router.push("/home");
      }
      setTimeout(() => {
        submitting.value = false;
      }, 3000);
    }
    function forgotPassword() {
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

<style>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
