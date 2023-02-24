export class Blog{
    _id!: string;
    blogTitle!: string;
    blogAuthor!: string;
    blogContent!: string;
    upVotes: number = 0;
    downVotes: number = 0;
}