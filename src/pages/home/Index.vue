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
        <q-btn color="grey" label="EVENTOS" no-caps to="/eventos" />
        <q-btn color="grey" label="RELATÓRIOS" />

        <q-btn color="grey" label="CADASTRO" />
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
    <div>
      <div class="container">
        <div>
          <q-btn
            class="left"
            unelevated
            rounded
            color="primary"
            label="Novo Evento"
            to="/cadastroevento"
          >
            <q-icon name="add" />
          </q-btn>
        </div>
        <div>
          <q-input
            class="right"
            filled
            bottom-slots
            v-model="text"
            label="Pesquisar"
            counter
            :dense="dense"
          >
            <template v-slot:append>
              <q-icon
                v-if="text !== ''"
                name="close"
                @click="text = ''"
                class="cursor-pointer"
              />
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div>
      <div class="margin">
        <div class="q-pa-md">
          <q-table
            flat
            bordered
            title="Eventos"
            :rows="rows"
            :columns="columns"
            row-key="name"
            :selected-rows-label="getSelectedString"
            selection="multiple"
            v-model:selected="selected"
          >
          </q-table>
          <!-- <q-markup-table>
            <thead>
              <tr>
                <th class="text-center">
                  <q-checkbox v-model="val" />
                </th>
                <th class="text-center">{{ empresa }}</th>
                <th class="text-center">{{ assunto }}</th>
                <th class="text-center">{{ dataEnvio }}</th>
                <th class="text-center">{{ destino }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <q-checkbox v-model="val" />
                </td>
                <td class="text-center">{{ texto }}</td>
                <td class="text-center">{{ local }}</td>
                <td class="text-center">{{ dataEnv }}</td>
                <td class="text-center">{{ destinatario }}</td>
              </tr>
              <tr>
                <td class="text-center">
                  <q-checkbox v-model="value" />
                </td>
                <td class="text-center">{{ texto }}</td>
                <td class="text-center">{{ local }}</td>
                <td class="text-center">{{ dataEnv }}</td>
                <td class="text-center">{{ destinatario }}</td>
              </tr>
            </tbody>
          </q-markup-table> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

const columns = [
  {
    name: "desc",
    required: true,
    label: "Evento",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "Data Inicial",
    align: "center",
    label: "Data de inicio",
    field: "dataInit",
    sortable: true,
  },
  {
    name: "Data Final",
    align: "center",
    label: "Data de fim",
    field: "dataEnd",
    sortable: true,
  },
  {
    name: "local",
    align: "center",
    label: "Local",
    field: "local",
    sortable: true,
  },
  {
    name: "contratante",
    align: "center",
    label: "Contratante",
    field: "contratante",
  },
  { name: "edit", align: "center", label: "", field: "edit" },
];

const rows = [
  {
    name: "Tardezinha",
    dataInit: "17/10/2023",
    dataEnd: "18/10/2023",
    local: "Mané Garrincha",
    contratante: "Funn",
    edit: "edit",
  },
];

export default defineComponent({
  name: "IndexPage",
  // props: {
  //   texto: [],
  //   dataEnv: [],
  //   destinatario: [],
  //   local: [],
  //   empresa: [],
  //   assunto: [],
  //   dataEnvio: [],
  //   destino: [],
  // },
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
      dense: ref(false),
      selected,
      columns,
      rows,
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
