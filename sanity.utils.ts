import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';
// import { createClient } from '@sanity/client';

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "5gm33j3r",
        dataset: "production",
        apiVersion: "2024-02-18",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

