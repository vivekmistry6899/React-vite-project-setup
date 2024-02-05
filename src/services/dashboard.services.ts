import AXIOS from '@/middleware/axios'

export const DASHBOARD_SERVICE = {

  async getList() {
    return await AXIOS.get(`list`)
  },

  async addList(data: { name: string }) {
    return await AXIOS.post(`list`, data)
  },
}
