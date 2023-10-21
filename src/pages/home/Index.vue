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
            <!-- <template v-slot:body-cell-config="props">
              <q-td :props="props">
              <q-btn icon="mode_settings" @click="onEdit()"></q-btn>
              </q-td>
            </template> -->
            <template v-slot:body-cell-edit="props">
              <q-td :props="props">
                <q-btn icon="mode_settings" to="/funcionarios"></q-btn>
                <q-btn icon="mode_edit" @click="onEdit()"></q-btn>
                <q-btn icon="delete" @click="onDelete()"></q-btn>
              </q-td>
            </template>
          </q-table>
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
    name: "DataInicial",
    align: "center",
    label: "Data de inicio",
    field: "dataInit",
    sortable: true,
  },
  {
    name: "DataFinal",
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
  {
    name: "config",
    align: "center",
    label: "Configuração",
    field: "Configuracao",
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
  },
  {
    name: "Na praia",
    dataInit: "20/10/2023",
    dataEnd: "21/10/2023",
    local: "ST de Clubes",
    contratante: "R2",
  },
];

export default defineComponent({
  name: "IndexPage",

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
    function onEdit() {
      this.$router.push("/cadastroevento");
    }
    // function onDelete(){

    // }
    return {
      submitting,
      submit,
      onEdit,
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
