import React, { useEffect, useState } from "react";

type NoteType = "A" | "B" | "C" | "D" | "E" | "F" | "G";

interface Note {
  id: string;
  title: string;
  description: string;
  types: NoteType[];
}

const Note_array: NoteType[] = ["A", "B", "C", "D", "E", "F", "G"];
const LOCAL_KEY = "notes"; // <- use consistent localStorage key

function App() {
  const [note, setNote] = useState<Note[]>(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectType, setSelectType] = useState<NoteType[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(note));
  }, [note]);

  const reset = () => {
    setTitle("");
    setDescription("");
    setSelectType([]);
    setEditingId(null);
  };

  const checkedtype = (t: NoteType) => {
    setSelectType((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const saveNote = () => {
    if (!title.trim() && !description.trim()) return;

    if (editingId) {
      setNote((prev) =>
        prev.map((n) =>
          n.id === editingId
            ? { ...n, title, description, types: selectType }
            : n
        )
      );
    } else {
      setNote((prev) => [
        { id: Date.now().toString(), title, description, types: selectType },
        ...prev,
      ]);
    }
    reset();
  };

  const editNote = (note: Note) => {
    setEditingId(note.id);
    setDescription(note.description);
    setTitle(note.title);
    setSelectType(note.types);
  };

  const deleteNote = (id: string) => {
    setNote((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      <div className="bg-gray-200 p-6">
        <h1 className="font-normal">Personal Notebook</h1>
      </div>

      <section className="container max-w-5xl mx-auto mt-6 p-6 border border-gray-300 rounded-sm shadow-sm">
        <div className="flex flex-col md:flex-row md:space-x-6">
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

          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={saveNote}
              className="bg-gray-300 text-black h-10 px-4 py-2 rounded"
            >
              {editingId ? "Update" : "Save"}
            </button>
            <button
              onClick={reset}
              className="bg-gray-300 px-4 h-10 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {note.map((note) => (
          <div
            key={note.id}
            className="bg-gray-200 p-4 rounded-sm border border-gray-300"
          >
            <div className="flex justify-between items-center mb-3 text-sm">
              <div className="text-gray-800 font-normal">{note.title}</div>
              <div className="space-x-2">
                <button
                  onClick={() => editNote(note)}
                  className="bg-green-400 text-black px-1 py-1 rounded-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="bg-pink-400 text-black px-0.5 py-1 rounded-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="border border-black p-3 h-24 overflow-auto bg-white text-sm">
              {note.description}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
