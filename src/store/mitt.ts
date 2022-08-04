import { defineStore } from 'pinia'
import mitt from 'mitt'

type Events = {
  // [SNAPSHOT_DELETE_INDEX]: string,
  // [RUBBISH_DELETE_INDEX]: string,
  // [RUBBISH_UPLOAD_SUCCESS]: void,
  // [HOME_CHOOSE_VILLAGE]: { id: number, name: string }
}

export const useMittStore = defineStore('mittStore', () => {
  const emitter = mitt<Events>()
  return {
    emitter,
  }
})
