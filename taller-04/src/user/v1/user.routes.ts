import { Router, Request, Response } from "express";
import { readUsers, UserExists, getTeamExperience, getPilots } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
const users = [{ id: 1, name: "Robin Restrepo", carrera: "Psicologia" }];

async function GetUsers(request: Request, response: Response) {
  try {
    const hobby = request.query.hobbies as string;
    if (!hobby) {
      return response.status(400).json({ message: 'Hobby is required.' });
    }
    const users = await readUsers();
    const filteredUsers = users.filter(user => user.hobbies.includes(hobby));

    if (filteredUsers.length === 0) {
      return response.status(404).json({ message: 'No users found with that hobby.' });
    }

    response.status(200).json({
      message: 'Success.',
      users: filteredUsers,
    });
  } catch (error) {
    response.status(500).json({ message: 'Error fetching users.' });
  }
}

async function CheckUserExists(request: Request, response: Response) {
  try {
    const id = parseInt(request.query.id as string); 
    if (isNaN(id)) {
      return response.status(400).json({ message: 'Valid ID is required.' });
    }
    
    const exists = await UserExists(id);
    if (exists) {
      return response.status(200).json({ message: `User with ID ${id} exists.` });
    } else {
      return response.status(404).json({ message: `User with ID ${id} does not exist.` });
    }
  } catch (error) {
    response.status(500).json({ message: 'Error checking user existence.' });
  }
}

async function GetTeamExperience(request: Request, response: Response) {
  try {
    const teamName = request.query.team as string; 
    if (!teamName) {
      return response.status(400).json({ message: 'Team name is required.' });
    }

    const totalExperience = await getTeamExperience(teamName); 
    response.status(200).json({
      message: 'Success.',
      team: teamName,
      totalExperience: totalExperience,
    });
  } catch (error) {
    response.status(500).json({ message: 'Error fetching team experience.' });
  }
}

async function GetByFaction(request: Request, response: Response) {
  try {
   const faction = request.query.faction as string;
   if (!faction) {
    return response.status(400).json({ message: 'faction is required.' });
  }
  const pilots = await getPilots(faction);
  response.status(200).json({
    message: 'Success',
    faction: faction,
    pilots: pilots
    });
  } catch (error) {
    response.status(500).json({ message: 'Error fetching faction.' });
  }
}

async function registerUser(request: Request, response: Response) {
  try {
    const { id, name, carrera } = request.body;

    if (!id || !name || !carrera) {
      return response.status(400).json({ message: 'All fields are required.' });
    }

    const existingUser = users.find(user => user.id === id);
    if (existingUser) {
      return response.status(409).json({ message: 'User already exists.' });
    }

    users.push({ id, name, carrera });
    response.status(201).json({ message: 'User registered successfully.', users });
  } catch (error) {
    response.status(500).json({ message: 'Error registering user.' });
  }
}

// DECLARE ENDPOINTS
// userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsers); 
userRoutes.get("/exists", CheckUserExists);
userRoutes.get("/team-experience", GetTeamExperience);
userRoutes.get("/by-faction", GetByFaction);
userRoutes.post("/",registerUser)

// EXPORT ROUTES
export default userRoutes;

