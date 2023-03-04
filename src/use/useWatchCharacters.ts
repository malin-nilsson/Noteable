import { watch } from "vue";

export function useWatchCharacters(input: any, maxChars = 100) {
  watch(input, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`Only ${maxChars} characters allowed :)`);
    }
  });
}
