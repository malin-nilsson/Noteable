import { watch } from "vue";

export function useWatchCharacters(input: any) {
  watch(input, (newValue) => {
    if (newValue.length === 100) {
    }
  });
}
