import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";

export default function usePaginacao() {

    const location = useLocation();
    const history = useHistory()

    const [paginaAtual, setPaginaAtual] = useState(getPaginaAtual() || 1);

    function getPaginaAtual() {
        const queryParams = qs.parse(location.search);
        const page = queryParams.page;
        return page ? Number(page) : undefined;
    }

    useEffect(() => {
        const queryParams = qs.parse(location.search);
        history.push({
            search: qs.stringify({
                ...queryParams,
                page: paginaAtual
            })
        })
        console.log("useEffect", location)

    }, [paginaAtual]);

    return {
        setPaginaAtual,
        paginaAtual,
    };
}

// useEffect(() => {
//     const queryParams = qs.parse(location.search);
//     console.log("teste", queryParams)
// }, [location.key])