class Fetch{
    async get(url,params){
        const {queryparams} = params || {};
        let queryString = "";
        if(queryparams){
            for(let query in queryparams){
                queryString+= `&${query}=${queryparams[query]}`;
            }
        }
        const response = await 
            fetch(`${url}?${queryString}`,params)
                .then(res=> {
                    return res.json();
                });
        return response;
    }
    post(){

    }

}

export default new Fetch();