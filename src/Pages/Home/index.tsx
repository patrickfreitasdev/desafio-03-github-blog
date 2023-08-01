import { Post } from "./Components/Post";
import { Profile } from "./Components/Profile";
import { SearchForm } from "./Components/SearchForm";
import { HomeContainer, PublicacoesContainer } from "./styles";
import { GithubContext } from "../../contexts/GithubContext";
import { useContextSelector } from "use-context-selector";

export function Home() {

    const issuesPost = useContextSelector(GithubContext, (context) => {
        return context.issuesPost
    });

    return (
        <HomeContainer>

            <Profile />
            <SearchForm />

            <PublicacoesContainer>
                {issuesPost.map((item) => {
                    return (
                        <Post
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            created_at={item.created_at}
                            body={item.body} />
                    )
                })}
            </PublicacoesContainer>

        </HomeContainer>
    )
}