export type NoteType = "Task" | "Work" | "Fun" | "Event" | "Meeting Note" | "Quote";

export interface Note {
  id: string;
  title: string;
  description: string;
  types: NoteType[];
}

export const Note_array: NoteType[] = ["Task","Work","Fun","Event","Meeting Note","Quote"];
export const LOCAL_KEY = "notes";
