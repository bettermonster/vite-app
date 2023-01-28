import { useRouter } from 'vue-router';

export function useGo() {
  const { push } = useRouter();
  function go(url: string) {
    push(url);
  }
  return go;
}
