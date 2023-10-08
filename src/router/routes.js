const routes = [
  {
    path: "/",
    children: [
      { path: "", component: () => import("pages/singIn/Index.vue") },
      { path: "home", component: () => import("pages/home/Index.vue") },
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
