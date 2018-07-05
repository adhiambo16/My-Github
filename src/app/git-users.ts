export class Users {
    public name: string;
    public login: string;
    public avatar_url: string;
    public html_url: string;
    public public_repos: number;
    public hireable:  boolean;
    public created_at: Date;
    public followers: number;
    public following: number;
    constructor(name, login, avatar_url, html_url, public_repos, hireable, created_at, followers, following) {
        this.name = name;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.public_repos = public_repos;
        this.hireable = hireable;
        this.created_at = created_at;
        this.followers = followers;
        this.following = following;
    }
}
