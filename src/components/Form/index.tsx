import { Image, TrashSimple } from "@phosphor-icons/react";

import {
    DeleteButton,
    FormContainer,
    FormContent,
    FormSubmit,
    ImagePost,
    InputMessage,
    SelectedImage,
    SubmitButton,
    UploudPhoto
} from "./styles";


import { PostProps } from "../../@types/post";
import { useState } from "react";

export interface NewPostProps {
    onCreatPost: (post: PostProps) => void
}

export function Form({onCreatPost}: NewPostProps) {
    const [creatorName, setCreatorName] = useState('');
    const [message, setMessage] = useState('');
    const [photo, setPhoto] = useState<string | null>(null);

    function handleCreateNewPost() {
        if(creatorName !== '' && message !== '') {
            onCreatPost({name: creatorName, message, photo})

            setCreatorName('')
            setMessage('')
            setPhoto(null)
        }
    }

    function handleDiscardNewPost() {
        setCreatorName('')
        setMessage('')
        setPhoto(null)
    }

    function handleFindImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return

        const file = e.target.files && e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleDiscardPhoto() {
        setPhoto(null)
    }    

    return (
        <FormContainer>
            {photo ?
                <SelectedImage>
                    <ImagePost src={photo} alt=""/>
                    <button onClick={handleDiscardPhoto}>
                        <TrashSimple size={24} color="#d65923"/>
                    </button>
                </SelectedImage>
                :
                <UploudPhoto htmlFor='pictureInput'>
                    <Image size={24}  color='#9f9f9f' />
                    <input
                        id="pictureInput"
                        type="file"
                        accept="image/*"
                        onChange={handleFindImage}
                    />
                </UploudPhoto>
                    
            }
                

            <FormContent>
                <input 
                    placeholder="Digite seu nome"
                    value={creatorName}
                    onChange={event => setCreatorName(event.target.value)}
                />
                <InputMessage
                    placeholder="Mensagem"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                />
            </FormContent>

            <FormSubmit>
                <DeleteButton
                    onClick={handleDiscardNewPost}
                >
                    Descartar
                </DeleteButton>

                <SubmitButton
                    onClick={handleCreateNewPost}
                    disabled={creatorName === '' || message === '' || photo === null}
                >
                    Publicar
                </SubmitButton>
            </FormSubmit>

        </FormContainer>
    )
}