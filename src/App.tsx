import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './App.css';
import { formattedDescription } from './textContent'; // Import the pre-formatted paragraphs

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setUploadSuccess(false);
    setUploadError(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const handleSend = async () => {
    if (file) {
      setUploading(true);
      setUploadError(null);

      const formData = new FormData();
      formData.append('file', file);

      try {
        await axios.post('http://localhost:3001/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setUploadSuccess(true);
        setFile(null);
      } catch (error) {
        setUploadError('Erreur lors de l\'envoi du fichier. Veuillez réessayer.');
        console.error('File upload error:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="container">
      <header>
        <h1>MTTV</h1>
        <div className="description-container">{formattedDescription}</div> {/* Render the imported paragraphs */}
      </header>
      <main>
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {file ? (
            <p>Fichier sélectionné : {file.name}</p>
          ) : isDragActive ? (
            <p>Glissez le fichier ici...</p>
          ) : (
            <p>Glissez-déposez votre bilan ici, ou cliquez pour le sélectionner.</p>
          )}
        </div>
        <aside className="file-info">
          <p>Types de fichiers acceptés : PDF, Word (.doc, .docx)</p>
          <p>Taille maximale du fichier : 5MB</p>
        </aside>

        {uploadSuccess && <p className="success-message">Fichier envoyé avec succès !</p>}
        {uploadError && <p className="error-message">{uploadError}</p>}

        <button onClick={handleSend} disabled={!file || uploading}>
          {uploading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </main>
      <footer>
        <p>&copy; 2025 MTTV. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
