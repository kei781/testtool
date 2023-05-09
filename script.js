import http from 'k6/http'
import { sleep } from 'k6'

export let options = {
  vus: 200,
  duration: '10s'
}
export default function () {
  http.post('http://121.134.241.225:8002/checkInfo')

}