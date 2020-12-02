export class User {
  id: number;
  nom: string;
  prenom: string;
  username: string;
  telephone: number;
  password: emailField;
  email: emailField;
  level: number;
  // {
  //   0: 'teacher'
  //   7: 'terminale'
  //   6: 'sixieme'
  //   5: 'cinquieme'
  //   4: 'quatrieme'
  //   3: 'troisieme'
  //   2: 'seconde'
  //   1: 'premiere'
  // }
  is_visitor: boolean;
  is_student: boolean;
  is_teacher: boolean;
  is_admin: boolean;
}
