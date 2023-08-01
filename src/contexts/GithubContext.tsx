import { ReactNode, useCallback, useEffect, useState } from "react";
import { apiRepo, apiSearch, apiUser } from "../lib/axios";
import { createContext } from "use-context-selector";
import { repoName, userName } from "../utils/config";

interface UserPofileProps {
    name: string;
    login: string;
    avatar_url: string;
    html_url: string;
    company: string;
    bio: string;
    followers: string;
}

export interface IssuesRepoProps {
    id: number;
    title: string;
    body: string;
    created_at: Date;
}

interface GithubContextType {
    userProfile: UserPofileProps;
    issuesPost: IssuesRepoProps[];
    fetchIssueQuery: (q: string) => Promise<void>
    fetchIssuesFromRepo: () => Promise<void>
}

const UserProfileInitialValue: UserPofileProps = {
    name: '',
    login: '',
    avatar_url: '',
    html_url: '',
    company: '',
    bio: '',
    followers: '',
}


export const GithubContext = createContext({} as GithubContextType);

interface GithubContextProps {
    children: ReactNode;
}

export function GithubContextProvider({ children }: GithubContextProps) {

    const [userProfile, setUserProfile] = useState<UserPofileProps>(UserProfileInitialValue);
    const [issuesPost, setIssuesPost] = useState<IssuesRepoProps[]>([]);

    const fetchUserProfile = useCallback(async (user: string) => {

        const response = await apiUser.get(user);
        const { name, login, avatar_url, html_url, company, bio, followers }: UserPofileProps = await response.data;


        const userProfilefetchedValue: UserPofileProps = {
            name,
            login,
            avatar_url,
            html_url,
            company,
            bio,
            followers
        }

        setUserProfile(userProfilefetchedValue);

    }, []);

    const fetchIssuesFromRepo = useCallback(async () => {

        const response = await apiRepo.get(`/${userName}/${repoName}/issues`);
        const data = await response.data;

        const issuesPosts = data.map((item: any) => {
            return (
                {
                    id: item.number,
                    body: item.body,
                    title: item.title,
                    created_at: new Date(item.created_at),
                }
            )
        })

        setIssuesPost(issuesPosts);

    }, []);

    const fetchIssueQuery = useCallback(async (q: string) => {

        const response = await apiSearch.get('', {
            params: {
                q: `${q}+repo:${userName}/${repoName}`,
            }
        })

        const data = await response.data;

        console.log(data)

        if (data.total_count > 0) {
            const issuesPosts = await data.items.map((item: any) => {
                return (
                    {
                        id: item.number,
                        body: item.body,
                        title: item.title,
                        created_at: new Date(item.created_at),
                    }
                )
            })

            setIssuesPost(issuesPosts);
        }

    }, []);


    useEffect(() => {
        fetchUserProfile(userName);
        fetchIssuesFromRepo();
    }, [fetchUserProfile, fetchIssuesFromRepo])


    return (
        <GithubContext.Provider value={{ userProfile, issuesPost, fetchIssueQuery, fetchIssuesFromRepo }}>
            {children}
        </GithubContext.Provider>
    );
}