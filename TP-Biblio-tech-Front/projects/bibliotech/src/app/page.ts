export class Page {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public id_livre: number,
        public createdAt: Date,
        public updatedAt: Date
    ) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}