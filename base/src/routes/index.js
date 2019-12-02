import loadable from "@/utils/loadable.js";

const Index = loadable(() => import("@/views/Index"));

const routes = [{ path: "/index", exact: true, name: "Index", component: Index, auth: [1] }];

export default routes;
