import { useState } from "react"

export default function useListarItens (quant_por_pagina) {
 
    const [fotos, setFotos] = useState([])

    async function fetchFotos (numero_da_pagina) {

        const pagina = ((numero_da_pagina - 1 ) * quant_por_pagina) <= 0 ? 0 : ((numero_da_pagina - 1 ) * quant_por_pagina) 
        
        fetch(`http://jsonplaceholder.typicode.com/photos?_start=${pagina}&_limit=${quant_por_pagina}`)
        .then(res => res.json())
        .then(data => setFotos(data))
        .catch(window.alert)
    }

    return {
        fetchFotos,
        fotos
    }

}