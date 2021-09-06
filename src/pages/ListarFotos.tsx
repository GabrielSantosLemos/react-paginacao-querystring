import { useEffect } from "react";
import useListarFotos from "../hooks/useListarFotos";
import usePaginacao from "../hooks/usePaginacao";

export default function ListarFotos() {

    const { fotos, fetchFotos } = useListarFotos(3);
    const { paginaAtual, setPaginaAtual } = usePaginacao()

    useEffect(() => {
        fetchFotos(paginaAtual);
    }, [paginaAtual]);

    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                }}
            >
                {fotos.map((foto) => (
                    <div key={foto.id}>
                        <img
                            style={{ maxWidth: "100%" }}
                            src={foto.url}
                            alt=""
                        />
                    </div>
                ))}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {Array(5)
                    .fill("")
                    .map((_, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setPaginaAtual(index + 1)}
                                disabled={index === paginaAtual - 1}
                            >
                                {index + 1}
                            </button>
                        );
                    })}
            </div>
        </>
    );
}
