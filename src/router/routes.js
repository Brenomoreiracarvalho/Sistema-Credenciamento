const routes = [
  {
    path: "/",
    children: [
      { path: "", component: () => import("pages/singIn/Index.vue") },
      { path: "home", component: () => import("pages/home/Index.vue") },
      { path: "eventos", component: () => import("pages/eventos/Index.vue") },
      {
        path: "eventos/funcionarios",
        component: () => import("pages/eventos/Funcionarios.vue"),
      },
      {
        path: "cadastroevento",
        component: () => import("pages/eventos/CadastroEvento.vue"),
      },
      {
        path: "cadastrofuncionario",
        component: () => import("pages/eventos/CadastroFuncionario.vue"),
      },
      {
        path: "funcionarios",
        component: () => import("pages/eventos/Funcionarios.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
