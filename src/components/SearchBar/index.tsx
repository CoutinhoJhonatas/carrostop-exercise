import './styles.css';

export default function SearchBar() {
    return (
        <form className="crst-search-bar crst-mt40">
            <input type="text" placeholder="Digite sua busca" />
            <button>BUSCAR</button>
        </form>
    );
}