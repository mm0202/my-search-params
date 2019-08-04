export default class MySearchParams {
    static update(key: string, value: string): boolean {
        const params = MySearchParams.toObject();
        params[key] = value;
        const url = "?" + Object.keys(params).map(
            (key: string) => key + "=" + params[key]).join("&");
        history.replaceState('', '', url);
        history.pushState('', '', url);

        return true;
    }

    static get(key: string): string {
        const params: any = MySearchParams.toObject();
        return params[key];
    }

    static toObject(): Object {
        let vars = {}, max: number, hash: any, array: any = "";
        let url = window.location.search;

        if (url.length === 0) {
            return vars;
        }
        hash = url.slice(1).split('&');
        max = hash.length;
        for (let i = 0; i < max; i++) {
            array = hash[i].split('=');
            vars[array[0]] = array[1];
        }

        return vars;
    }
}