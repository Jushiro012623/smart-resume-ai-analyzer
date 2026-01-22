import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home/index.tsx"),
    route('/auth', "routes/auth/index.tsx"),
    route('/upload', "routes/upload/index.tsx"),
    route('/resume/:id', "routes/resume/index.tsx"),
    route('/wipe', "routes/wipe/index.tsx"),
] satisfies RouteConfig;
