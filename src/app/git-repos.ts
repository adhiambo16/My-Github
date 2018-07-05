export class Repos {
    public name: string;
    public html_url: string;
    public description: string;
    public created_at: Date;
    constructor(name, html_url, description, created_at) {
        this.name = name;
        this.html_url = html_url;
        this.description = description;
        this.created_at = created_at;
    }
}
