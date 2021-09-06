import { useState } from "react"


interface Foto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default function useListarFotos (quant_por_pagina: number) {
 
    const [fotos, setFotos] = useState<Foto[]>([])

    async function fetchFotos (numero_da_pagina: number) {

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