// Importujemy bibliotekę React i funkcję useState, która pozwala zarządzać stanem komponentu
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Definiujemy stan dla imienia i nazwiska oraz numeru kursu
  const [name, setName] = useState(''); // Stan przechowujący imię i nazwisko
  const [courseNumber, setCourseNumber] = useState(''); // Stan przechowujący numer kursu

  // Tablica przechowująca dostępne kursy
  const courses = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];

  // Funkcja obsługująca zdarzenie zatwierdzenia formularza
  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiega domyślnemu odświeżeniu strony po wysłaniu formularza
    const courseIndex = parseInt(courseNumber) - 1; // Zamieniamy numer kursu na indeks tablicy (indeksowanie od 0)

    // Sprawdzamy, czy podany numer kursu jest poprawny (czy mieści się w granicach tablicy)
    if (courseIndex >= 0 && courseIndex < courses.length) {
      console.log(name); // Wyświetlamy imię i nazwisko w konsoli
      console.log(courses[courseIndex]); // Wyświetlamy nazwę wybranego kursu w konsoli
    } else {
      console.log("Nieprawidłowy numer kursu"); // Wyświetlamy komunikat o błędnym numerze kursu
    }
  };

  return (
    <div className="container mt-4">
      {/* Wyświetlamy liczbę kursów */}
      <h2>Liczba kursów: {courses.length}</h2>
      {/* Tworzymy listę numerowaną z kursami */}
      <ol>
        {courses.map((course, index) => (
          <li key={index}>{course}</li> // Iterujemy przez tablicę kursów i wyświetlamy każdy kurs
        ))}
      </ol>
      
      {/* Formularz do wprowadzania danych */}
      <form onSubmit={handleSubmit}>
        {/* Pole edycji dla imienia i nazwiska */}
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name} // Wartość pola jest równa wartości stanu 'name'
            onChange={(e) => setName(e.target.value)} // Aktualizacja stanu przy każdej zmianie wartości w polu
          />
        </div>
        
        {/* Pole numeryczne dla numeru kursu */}
        <div className="form-group">
          <label htmlFor="courseNumber">Numer kursu:</label>
          <input
            type="number"
            className="form-control"
            id="courseNumber"
            value={courseNumber} // Wartość pola jest równa wartości stanu 'courseNumber'
            onChange={(e) => setCourseNumber(e.target.value)} // Aktualizacja stanu przy każdej zmianie wartości w polu
          />
        </div>

        {/* Przycisk do zapisania do kursu */}
        <button type="submit" className="btn btn-primary mt-3">Zapisz do kursu</button>
      </form>
    </div>
  );
}

export default App;
