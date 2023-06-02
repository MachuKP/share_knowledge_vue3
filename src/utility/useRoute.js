// --router--
import { router } from '../router/index'

export default function useRoute() {
    function gotoUrl(url, params)  {
        if (!params) {
            params = {}
        }
        router.push({name: url, params: params})
    }

    return {
        gotoUrl
    }
}