import { marked } from "marked";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function removeMarkdown(text: string) {
    // Parse the markdown text
    const parsedText = marked(text,
        {
            mangle: false,
            headerIds: false
        });

    // Strip HTML tags from the parsed output using a regex
    const strippedText = parsedText.replace(/<[^>]+>/g, '');

    return strippedText;
}


export function distanceOfCreatedAtFormatter(created_at: Date) {

    return formatDistanceToNow(new Date(created_at), {
        addSuffix: true,
        locale: ptBR,
    })

}