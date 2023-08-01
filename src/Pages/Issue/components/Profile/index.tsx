import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileContent, ProfileContentBody, ProfileContentBodyData } from "./styles";
import { faAngleLeft, faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContextSelector } from "use-context-selector";
import { GithubContext } from "../../../../contexts/GithubContext";
import { distanceOfCreatedAtFormatter } from "../../../../utils/formatter";

interface ProfileProps {
    url: string;
    title: string;
    user_login: string;
    comments: number;
    created_at?: Date;
}



export function Profile({url, title, user_login, comments, created_at = new Date()}: ProfileProps) {

    const userProfile = useContextSelector(GithubContext, (context) => {
        return context.userProfile
    });

    return (
        <ProfileContainer>
            <ProfileContent>
                <header>
                    <div>
                        <a href="/"><FontAwesomeIcon icon={faAngleLeft} /> Voltar</a>
                        <a href={url} target="_blank">Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </div>
                    <h1>{title}</h1>
                </header>
                <ProfileContentBody>
                    <footer>
                        <ProfileContentBodyData>
                            <FontAwesomeIcon width={18} height={18} icon={faGithub} />
                            {user_login}
                        </ProfileContentBodyData>
                        {userProfile.company && (
                            <ProfileContentBodyData>
                                <FontAwesomeIcon width={18} height={18} icon={faBuilding} />
                                {distanceOfCreatedAtFormatter(created_at)}
                            </ProfileContentBodyData>
                        )}
                        <ProfileContentBodyData>
                            <FontAwesomeIcon width={18} height={18} icon={faUserGroup} />
                            {comments} Comentários
                        </ProfileContentBodyData>
                    </footer>
                </ProfileContentBody>
            </ProfileContent>
        </ProfileContainer>
    )
}