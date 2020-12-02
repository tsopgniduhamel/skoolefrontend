import { Subject } from 'rxjs';
import { Comment } from './comment';

export class Course {
  id: number;
  title: string;
  level: number;
  author: User;
  keyworks: string[];
  rating: number;
  comments: Comment[];
}


get subjects
get Subject(title)
get users
get user(id | username)
get Level
get level(id)
