import { writable } from "svelte/store";
import data from './data.json'

export const allComments = writable(data.comments);
export const currentUser = data.currentUser;