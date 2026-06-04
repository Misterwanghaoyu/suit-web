import * as bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  createdAt: string;
  isActive: boolean;
}

export type OmitUser = Omit<User, 'password'>;

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface UpdateUserInput {
  name?: string;
  role?: string;
  isActive?: boolean;
}

function readUsers(): User[] {
  try {
    const fileContent = fs.readFileSync(USERS_FILE, 'utf-8');
    return JSON.parse(fileContent) as User[];
  } catch (error) {
    return [];
  }
}

function writeUsers(users: User[]): void {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function getUserByEmail(email: string): User | null {
  const users = readUsers();
  return users.find(user => user.email === email) || null;
}

export function getUserById(id: string): User | null {
  const users = readUsers();
  return users.find(user => user.id === id) || null;
}

export async function createUser(input: CreateUserInput): Promise<User> {
  const users = readUsers();
  
  // Check if email already exists
  if (users.find(user => user.email === input.email)) {
    throw new Error('Email already exists');
  }
  
  const hashedPassword = await hashPassword(input.password);
  const newUser: User = {
    id: String(users.length + 1),
    email: input.email,
    password: hashedPassword,
    name: input.name,
    role: input.role,
    createdAt: new Date().toISOString(),
    isActive: true,
  };
  
  users.push(newUser);
  writeUsers(users);
  
  return newUser;
}

export function updateUser(id: string, input: UpdateUserInput): User | null {
  const users = readUsers();
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return null;
  }
  
  users[userIndex] = {
    ...users[userIndex],
    ...input,
  };
  
  writeUsers(users);
  return users[userIndex];
}

export function deleteUser(id: string): boolean {
  const users = readUsers();
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return false;
  }
  
  users.splice(userIndex, 1);
  writeUsers(users);
  return true;
}

export function getAllUsers(): Omit<User, 'password'>[] {
  const users = readUsers();
  return users.map(({ password, ...user }) => user); // Exclude password
}
