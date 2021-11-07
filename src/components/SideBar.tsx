import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';
import { Content } from './Content';

// import './styles/global.scss';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ISideBarProps {
  selectedGenreId: number;
  handleClickButton(id: number): void;
}

export function SideBar({
  selectedGenreId,
  handleClickButton
}: ISideBarProps) {
  // Complete aqui
  // const [selectedGenreId, setSelectedGenreId] = useState(1);
  

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);




    
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
    

  

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>

      
    </>
  )
}