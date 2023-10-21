<template>
  <div class="q-pa-md">
    <div elevated class="container">
      <q-toolbar>
        <q-toolbar-title class="text-grey">CREDENCIAMENTO</q-toolbar-title>
        <q-space />

        <q-btn-dropdown
          flat
          round
          dense
          color="grey"
          icon="assignment_ind"
          label="Nome Usauario"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label @click="submit()">SAIR</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>

      <q-toolbar inset>
        <q-btn color="grey" label="MENU PRINCIPAL" no-caps to="/home" />
        <q-btn color="grey" label="RELATÓRIOS" />

        <q-btn color="grey" label="FUNCIONÁRIOS" no-cpas to="/funcionarios" />
        <q-btn-dropdown color="grey" label="OUTROS">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>ALTERAR EVENTOS</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>VALIDAÇÃO DETALHADA</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>LOG DE USUÁRIOS</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </div>
  </div>
  <div>
    <div class="q-pa-md">
      <div elevated class="container">
        <q-input outlined v-model="text" label="NOME DO FUNCIONÁRIO" />

        <q-space />

        <q-input outlined v-model="contract" label="EMPRESA CONTRATANTE" />

        <q-space />

        <q-input outlined v-model="cpf" label="CPF" />

        <q-space />

        <q-input outlined v-model="rg" label="RG" />

        <q-space />

        <div class="q-pa-md">
          DATA DE NASCIMENTO (DD/MM/YYYY)
          <div>
            <q-date v-model="model" />
          </div>
        </div>
        <div class="row justify-end">
          <q-btn
            type="submit"
            :loading="submitting"
            label="Save"
            class="q-mt-md"
            color="teal"
            @click="save()"
          >
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "CadastroEvento",
  methods: {
    save() {
      console.log(this.text);
      console.log(this.contract);
      console.log(this.cpf);
      console.log(this.rg);
      console.log(this.model);
      this.$router.push("/funcionarios");
    },
  },
  setup() {
    const selected = ref([]);
    const submitting = ref(false);
    function submit() {
      submitting.value = true;
      if (submitting.value === true) {
        this.$router.push("/");
      }
      setTimeout(() => {
        submitting.value = false;
      }, 3000);
    }
    return {
      submitting,
      submit,
      val: ref(false),
      value: ref(false),
      text: ref(""),
      contract: ref(""),
      cpf: ref(""),
      rg: ref(""),
      dense: ref(false),
      model: ref({ from: "", to: "" }),
    };
  },
});
</script>
<style>
.container {
  background-color: #f2f5fa;
}

.my-card {
  width: 100%;
}

.center {
  width: 100%;
  max-width: 250px;
  text-align: center;
}

.margin {
  margin-top: 7%;
}

.right {
  float: right;
  margin-right: 1%;
}

.left {
  float: left;
  margin-left: 1%;
  margin-top: 1%;
}
</style>
