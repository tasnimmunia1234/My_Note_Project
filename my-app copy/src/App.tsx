import React, { useState, useEffect } from "react";
import { Note, NoteType, LOCAL_KEY } from "./types";
import NoteForm from "./components/NoteForm";
import Header from "./Header";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNote] = useState<Note[]>(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectType, setSelectType] = useState<NoteType[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(notes));
  }, [notes]);

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

  // const editNote = (note: Note) => {
  //   setEditingId(note.id);
  //   setDescription(note.description);
  //   setTitle(note.title);
  //   setSelectType(note.types);
  // };

  const editNote = (id: string) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;
    setTitle(note.title);
    setDescription(note.description);
    setSelectType(note.types);
    setEditingId(note.id);
  };
  const deleteNote = (id: string) => {
    setNote((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      <Header />
      <NoteForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        selectType={selectType}
        checkedtype={checkedtype}
        saveNote={saveNote}
        reset={reset}
        editingId={editingId}
      />
      <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </>
  );
}

export default App;