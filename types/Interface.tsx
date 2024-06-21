export interface Post{
    title: string;
    slug: {current:string};
    publishedAt: string;
    excerpt: string;
    _id: string;
    body:any;
    author:string;
    tags: { id: string; slug: string; name: string }[];

}

export interface Tag{
    name:string;
    title:string;
    slug:{ current : string };
    _id:string;
}

export interface Params{
    params:{slug:string};
    
}