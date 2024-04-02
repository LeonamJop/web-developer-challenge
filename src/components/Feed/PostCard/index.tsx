import { XCircle } from "@phosphor-icons/react";
import { Card, CardContent, CardCreator } from "./styles";

interface CardProps {
    id: string;
    name: string;
    message: string;
    photo: string;
    onDelete: (id: string) => void;
}

export function PostCard({id, name, message, photo, onDelete}: CardProps) {

    function handleDeleteCard() {
        onDelete(id)
    }

    return (
        <Card>
            <img src={photo} alt="" />

            <CardContent>
                <p>
                    {message}
                </p>

                <CardCreator>
                    <span>Enviado por</span>
                    <p>{name}</p>
                </CardCreator>
            </CardContent>

            <button onClick={handleDeleteCard}>
                <XCircle size={20} />
            </button>
        </Card>
    )
}