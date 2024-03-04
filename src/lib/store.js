import { goto } from "$app/navigation";

import {page} from "$app/stores"

function queryToObject(params){
    if (!params) {
        return
    }
    // parse query string
    const obj = {};
    // iterate over all keys
    for (const key of params.keys()) {
        if (params.getAll(key).length > 1) {
            obj[key] = params.getAll(key);
        } else {
            obj[key] = params.get(key);
        }
    }
    return obj;
}

export function createQueryStore(prop) {
    let query = undefined
    return {
        subscribe: h => {
            return page.subscribe(p=>{
                query = queryToObject(p.query)
                console.log(query)
                h(p ?? query['q'])
            })
        },
        set: v => {

            //query[prop] = v
            const urlSearchParams = new URLSearchParams(location.search)
            const g = `?${urlSearchParams.toString()}`
            goto(g, {keepfocus:true, replaceState:true, noscroll:true})


        },
    };
}