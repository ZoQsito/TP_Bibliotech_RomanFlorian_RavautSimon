export class Livre {
    constructor(
        public id: number,
        public title: string,
        public resume: string,
        public image : string,
        public author: string,
        public createdAt: Date,
        public updatedAt: Date,
        public categories: number[],
    ) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}