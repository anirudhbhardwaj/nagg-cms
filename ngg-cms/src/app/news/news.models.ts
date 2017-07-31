export class News {
    _id: string;
    fingerprint: Fingerprint
    title: string;
    description: string;
    image: string;
    author: string;
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
