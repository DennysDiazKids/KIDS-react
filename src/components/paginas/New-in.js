import { useParams } from "react-router-dom";

export default function Newin() {
    let params = useParams();
    return <h2>Página {params.catid}</h2>;
}