import { getActivePinia } from "pinia";

export default function storeReset() {
  const activeStores = Object.keys(getActivePinia().state.value);

  activeStores.forEach((store) => {
    getActivePinia()._s.get(store).$reset();
  });
}
