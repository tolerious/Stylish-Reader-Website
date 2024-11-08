export function getApiUrls() {
  const hostname = useRuntimeConfig().public.apiServer;

  return {
    loginUrl: `${hostname}/login`,
    registerUrl: `${hostname}/create`,
  };
}
