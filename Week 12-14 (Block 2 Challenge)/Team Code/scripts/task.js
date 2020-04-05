export class Task {
    constructor(content) {
        this.id = + new Date(),
        this.content = content,
        this.done = false
    }
}