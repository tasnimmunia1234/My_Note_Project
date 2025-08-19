import React from "react";
import { Note } from "../types";

interface NoteItemProps {
  note: Note;
  editNote: (id: string) => void;
  deleteNote: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, editNote, deleteNote }) => (
  <div className="p-4 border border-gray-400 bg-blue-100 shadow-sm rounded-sm">
  <div className="flex justify-between items-center">
  <h3 className="text-lg font-bold">{note.title || "Title None"}</h3>
    <div className="flex space-x-2">
      <button
        onClick={() => editNote(note.id)}
        className="bg-blue-200 px-3 py-1 rounded"
      >
        Edit
      </button>
      <button
        onClick={() => deleteNote(note.id)}
        className="bg-red-200 px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  </div>

  <p className="description-scroll text-sm text-gray-600 pt-6 h-20 overflow-y-auto">{note.description || "Description none"}</p>

  <div className="mt-2 space-x-2">
    {note.types.map((t) => (
      <span
        key={t}
        className="px-2 py-1 bg-amber-100 text-xs border border-gray-300 rounded"
      >
        {t}
      </span>
    ))}
  </div>
</div>

);

export default NoteItem;
