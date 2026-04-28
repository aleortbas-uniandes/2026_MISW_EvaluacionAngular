export class Usuarios {
  id: number;
  username: string;
  name: string;
  email: string;

  constructor(id: number, username: string, name: string, email: string) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
  }
}