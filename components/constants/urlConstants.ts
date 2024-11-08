const hostname = useRuntimeConfig().public.apiServer;
console.log("hostname", hostname);
export const login = `${hostname}/login`;
