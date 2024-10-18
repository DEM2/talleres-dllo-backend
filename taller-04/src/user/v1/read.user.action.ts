import { UserModel, UserType } from "./user.model";
import fs from 'fs';
import {join} from 'path';

// DECLARE ACTION FUNCTION
async function readUserAction(): Promise<UserType[]> {
  try {
    const dataPath = join(__dirname, '../../../datos.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    const users: UserType[] = JSON.parse(rawData); 
    return users;
  } catch (error) {
    console.error('Error reading users data:', error);
    throw new Error('Failed to read user data.');
  }
}

// EXPORT ACTION FUNCTION
export default readUserAction;
