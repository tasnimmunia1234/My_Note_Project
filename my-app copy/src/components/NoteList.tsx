import React from "react";
import { Note } from "../types";
import NoteItem from "./NoteItem";

interface NoteListProps {
  notes: Note[];
  editNote: (id: string) => void;
  deleteNote: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, editNote, deleteNote }) => (
  <section className="container grid mt-5 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {notes.map((n) => (
      <NoteItem key={n.id} note={n} editNote={editNote} deleteNote={deleteNote} />
    ))}
  </section>
);

export default NoteList;
