import readUserAction from "./read.user.action";
import { UserType, UserModel } from "./user.model";
import path from 'path';
import { promises as fs } from 'fs';

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();
  return users;
}

async function UserExists(id: number): Promise<boolean> {
  try {
    const users = await readUsers(); 
    return users.some(user => user.id === id); 
  } catch (error) {
    console.error('Error checking user exists:', error);
    throw new Error('Failed to check if user exists.');
  }
}

async function getTeamExperience(teamName: string): Promise<number> {
  const users = await readUsers(); 
  const teamUsers = users.filter(user => user.team === teamName); 
  const totalExperience = teamUsers.reduce((total, user) => total + user.years, 0); 
  return totalExperience; 
}

async function getPilots (faction: string): Promise<string[]> {
  const users = await readUsers();
  const pilots = users.filter(user => user.faction === faction); 
  return pilots.map(pilot=>pilot.name);
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, UserExists, getTeamExperience, getPilots};


