import { defineStore, storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
import { useLoginStore } from '@/store/login'

const loginStore = useLoginStore()
const { userInfo } = storeToRefs(loginStore)

export const useGlobalStore = defineStore('globalStore', () => {
  interface GlobalState {
    selectedVillageId?: number,
    selectedVillageName?: string
  }

  const global = reactive<GlobalState>({
    selectedVillageId: undefined,
    selectedVillageName: '',
  })

  interface Village {
    id: number,
    name: string
  }

  const setSelectedVillage = (payload: Village) => {
    global.selectedVillageId = payload.id
    global.selectedVillageName = payload.name
  }

  const getVillageId = () => {
    return global.selectedVillageId ? global.selectedVillageId : userInfo.value.villageId
  }
  const getVillageName = () => {
    return global.selectedVillageName ? global.selectedVillageName : userInfo.value.villageName
  }

  return {
    global,
    setSelectedVillage,
    getVillageId,
    getVillageName,
  }
})
