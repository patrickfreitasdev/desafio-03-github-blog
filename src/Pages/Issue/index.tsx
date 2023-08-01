import { useNavigate, useParams } from "react-router-dom";
import { IssueContainer, IssueContainerBody } from "./styles";
import { Profile } from "./components/Profile";
import { useCallback, useEffect, useState } from "react";
import { apiRepo } from "../../lib/axios";
import { repoName, userName } from "../../utils/config";
import Markdown from "markdown-to-jsx";

interface IssuesProps {
    url: string;
    title: string;
    user_login: string;
    created_at?: Date;
    body: string;
    comments: number;
}

const IssueInitial = {
    url: '',
    title: '',
    user_login: '',
    body: '',
    comments: 0
}


export function Issue() {

    const { id } = useParams();
    const [issueContent, setIssueContent] = useState<IssuesProps>(IssueInitial)
    const navigate = useNavigate();

    const fetchIssueData = useCallback(async (id?: string) => {

        const data = await apiRepo.get(`${userName}/${repoName}/issues/${id}`)
            .then((response) => {
                return response.data
            })
            .catch(() => {
                navigate('/');
            })


        if (data.url) {

            const issueData = {
                url: data.html_url,
                title: data.title,
                user_login: data.user.login,
                created_at: new Date(data.created_at),
                body: data.body,
                comments: data.comments,
            }

            setIssueContent(issueData);

        } else {
            navigate('/');
        }

    }, [navigate]);

    useEffect(() => {
        fetchIssueData(id)
    }, [id, fetchIssueData]);

    return (
        <IssueContainer>
            <Profile
                url={issueContent.url}
                title={issueContent.title}
                user_login={issueContent.user_login}
                comments={issueContent.comments}
                created_at={issueContent.created_at}
            />
            <IssueContainerBody>
                <Markdown>{issueContent.body}</Markdown>
            </IssueContainerBody>
        </IssueContainer>
    )
}