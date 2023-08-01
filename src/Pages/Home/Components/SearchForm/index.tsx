import { GithubContext } from "../../../../contexts/GithubContext";
import { FormContainer } from "./styles";
import { useContextSelector } from "use-context-selector";
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";

const newSearchFormSchema = z.object({
    q: z.string(),
})

type NewSearchFormInputs = z.infer<typeof newSearchFormSchema>;

export function SearchForm() {

    const issuesPost = useContextSelector(GithubContext, (context) => {
        return context.issuesPost;
    });

    const fetchIssueQuery = useContextSelector(GithubContext, (context) => {
        return context.fetchIssueQuery;
    });

    const fetchIssuesFromRepo = useContextSelector(GithubContext, (context) => {
        return context.fetchIssuesFromRepo;
    });


    const {
        register,
        handleSubmit,
        watch,
    } = useForm<NewSearchFormInputs>({
        resolver: zodResolver(newSearchFormSchema),
    });

    const watchQuery = watch("q");

    useEffect(() => {

        if (watchQuery?.length > 1) {
            fetchIssueQuery(watchQuery);
        } else {
            fetchIssuesFromRepo();
        }

    }, [watchQuery, fetchIssueQuery, fetchIssuesFromRepo])

    // Fetch on Submit
    function handleSearchFormSubmit(data: NewSearchFormInputs) {
        fetchIssueQuery(data.q);
    }

    return (
        <FormContainer onSubmit={handleSubmit(handleSearchFormSubmit)}>
            <header>
                <strong>Publicações</strong>
                <span>{issuesPost.length} publicações</span>
            </header>
            <input
                {...register('q')}
                placeholder="Buscar conteúdo"
            />
        </FormContainer>
    );
}