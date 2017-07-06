export class News {
    fingerprint: Fingerprint
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    tags: string[];
    reactions: Reaction[];
    reactCount: number;
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
