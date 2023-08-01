import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileContent, ProfileContentBody, ProfileContentBodyData, ProfilePicture } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GithubContext } from "../../../../contexts/GithubContext";
import { useContextSelector } from "use-context-selector";


export function Profile() {

    const userProfile = useContextSelector(GithubContext, (context) => {
        return context.userProfile
    });

    return (
        <ProfileContainer>
            <ProfilePicture $avatar_url={userProfile.avatar_url} />
            <ProfileContent>
                <header>
                    <h1>{userProfile.name}</h1>
                    <a href={userProfile.html_url} target="_blank">Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </header>
                <ProfileContentBody>
                    <p>{userProfile.bio}</p>
                    <footer>
                        <ProfileContentBodyData href={userProfile.html_url} target="_blank">
                            <FontAwesomeIcon width={18} height={18} icon={faGithub} />
                            {userProfile.login}
                        </ProfileContentBodyData>
                        {userProfile.company && (
                            <ProfileContentBodyData href={userProfile.html_url} target="_blank">
                                <FontAwesomeIcon width={18} height={18} icon={faBuilding} />
                                {userProfile.company}
                            </ProfileContentBodyData>
                        )}
                        <ProfileContentBodyData href={userProfile.html_url} target="_blank">
                            <FontAwesomeIcon width={18} height={18} icon={faUserGroup} />
                            {userProfile.followers} Seguidores
                        </ProfileContentBodyData>
                    </footer>
                </ProfileContentBody>
            </ProfileContent>
        </ProfileContainer>
    )
}