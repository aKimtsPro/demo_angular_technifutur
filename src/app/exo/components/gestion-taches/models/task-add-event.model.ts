import { Tache } from "./tache.model";

export interface TaskAddEvent {
    task: Tache,
    up: boolean
}