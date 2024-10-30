import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './filme-info.css';

import api from '../../services/api';

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '0849abd766fa4d653689fad8442d1983',
            language: 'pt-BR',
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          //console.log(error);
          navigate('/', { replace: true });
          return;
        });
    }

    loadFilme();
    return () => {
      console.log('Componente foi desmontado');
    };
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem('filmes');
    let filmes = JSON.parse(minhaLista) || [];

    const hasFilme = filmes.some((filmeSalvo) => filmeSalvo.id === filme.id);

    if (hasFilme) {
      return toast.warn('Esse filme ja foi salvo');
    }

    filmes.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmes));
    toast.success('Filme salvo com sucesso!');
  }

  if (loading) {
    return <div className="filme-info">Loading...</div>;
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3> <br />
      <span>{filme.overview}</span> <br />
      <strong>Avaliação: {filme.vote_average.toFixed(1)} /10 </strong>
      <dir className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} trailer`}
          >
            Trailer
          </a>
        </button>
      </dir>
    </div>
  );
}

export default Filme;
