import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

import { createClient } from "@supabase/supabase-js";



export default [
index("./index.tsx"),

] satisfies RouteConfig;
