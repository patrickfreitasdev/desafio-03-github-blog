
import { useEffect, useState } from "react";
import { IssuesRepoProps } from "../../../../contexts/GithubContext";
import { PostContainer } from "./styles";
import { distanceOfCreatedAtFormatter, removeMarkdown } from "../../../../utils/formatter";


export function Post({ id, title, created_at, body }: IssuesRepoProps) {

    const [plainText, setPlainText] = useState<string>(body);
    const [createdAt, setCreatedAt] = useState<string>();

    useEffect(() => {

        const newPlainText = removeMarkdown(body || '');
        const createdAtAux = distanceOfCreatedAtFormatter(new Date(created_at) || new Date());

        setPlainText(newPlainText);
        setCreatedAt(createdAtAux);

    }, [body, created_at])


    return (

        <PostContainer>
            <a href={`issue/${id}`}>
                <header>
                    <h2>{title}</h2>
                    <span>
                        {createdAt}
                    </span>
                </header>
                <div>
                    <p>
                        {plainText}
                    </p>
                </div>
            </a>
        </PostContainer>
    )
}