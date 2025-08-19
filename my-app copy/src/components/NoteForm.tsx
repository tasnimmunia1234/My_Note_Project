import React from "react";
import { NoteType, Note_array } from "../types";

interface NoteFormProps {
  title: string;
  setTitle: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  selectType: NoteType[];
  checkedtype: (t: NoteType) => void;
  saveNote: () => void;
  reset: () => void;
  editingId: string | null;
}

const NoteForm: React.FC<NoteFormProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  selectType,
  checkedtype,
  saveNote,
  reset,
  editingId,
}) => (
  <section className="container max-w-5xl mx-auto mt-6 p-6 border border-gray-300 rounded-sm shadow-sm">
    <div className="flex flex-col md:flex-row md:space-x-6">
      {/* Left - Inputs */}
      <div className="flex-1 space-y-4">
        <input
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="max-w-5xl mx-auto mt-1 p-1 pl-3 border border-gray-300 bg-amber-100 rounded-sm"
        />
        <textarea
          placeholder="Note description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 bg-gray-200 rounded-sm border border-gray-300 h-32 resize-none"
        />
      </div>

      {/* Middle - Type selection */}
      <div className="flex-1 space-y-4 ml-4.5">
        <h2>Select Type</h2>
        <div className="space-y-2">
          {Note_array.map((t) => (
            <label
              key={t}
              className="flex space-x-4 items-center cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={selectType.includes(t)}
                onChange={() => checkedtype(t)}
                className="bg-gray-200 border border-gray-300"
              />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <button
          onClick={saveNote}
          className="bg-gray-300 text-black h-10 px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Save"}
        </button>
        <button onClick={reset} className="bg-gray-300 px-4 h-10 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  </section>
);

export default NoteForm;
