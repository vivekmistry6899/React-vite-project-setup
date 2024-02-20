import AXIOS from '@/middleware/axios'
import queryString from 'query-string'

export const DASHBOARD_SERVICE = {
  async getList(filterData: { name: string }) {
    return await AXIOS.get(`courses/course?${queryString.stringify(filterData)}`)
  },
  async addList(data: { name: string }) {
    return await AXIOS.post(`list`, data)
  },
}


// ${queryString.stringify(courseData, {
//   arrayFormat: 'bracket',
// })}

// {
//   headers: {
//       'Content-Type': 'multipart/form-data',
//   },
// }