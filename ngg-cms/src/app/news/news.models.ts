export class News {
    constructor(authorName?: string) {
        this.authorName = authorName;
    }

    _id: string;
    fingerprint: Fingerprint
    title: string;
    description: string;
    image: string;
    authorName: string;
    tags: string[];
    reactions: Reaction[];
    // reactCount: number;
    clickCount: number;
}

export class Reaction {
    userID: string;
    isLike: boolean;
    comment: string;
    userDisplayName: string;
}

export class Fingerprint {
    userId: string;
    lastModifiedTime: Date;
    creationTime: Date;
}
