import { useSheetStore } from '@/stores/sheet'
import { mapActions, mapState, storeToRefs, mapStores, mapWritableState } from 'pinia'
export const sheetMixin = {
  setup() {
    const sheetStore = useSheetStore()
    return { sheetStore }
  },
  computed: {
    ...mapStores(useSheetStore),
    // ...mapWritableState(useSheetStore, ['selectAll'])F
  }
}
