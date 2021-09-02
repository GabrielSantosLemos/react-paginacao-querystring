import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";

export default function usePaginacao() {

    const location = useLocation();
    const history = useHistory()

    const [paginaAtual, setPaginaAtual] = useState(obterPaginaAtual() || 1);

    function obterPaginaAtual() {
        const queryParams = qs.parse(location.search);
        const pagina = queryParams.pagina;
        return pagina ? Number(pagina) : undefined;
    }

    useEffect(() => {
        const queryParams = qs.parse(location.search);
        history.push({
            search: qs.stringify({
                ...queryParams,
                page: paginaAtual
            })
        })

    }, [paginaAtual]);

    return {
        setPaginaAtual,
        paginaAtual,
    };
}
