export const post={
    name:"post",
    title:"Post",
    type:"document",

    fields: [
        {
            name:"title",
            title:"Title",
            type:"string",  
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug", 
            options:{ source:"title" } 
        },
        {
            name:"publishedAt",
            title:"Published at",
            type:"datetime",
        },
        {
            name:"excerpt",
            title:"Excerpt",
            type:"text",
        },
        {
            name:"body",
            title:"Body",
            type:"text",
        }
    ]
}

