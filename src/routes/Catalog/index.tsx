import CatalogCard from '../../components/CatalogCard';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import './styles.css';

export default function Catalog() {
    return (
        <>
            <Header />
            <main>
                <section className="crst-container">
                    <SearchBar />
                    <div className="crst-catalog-cards crst-mt40">
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                    </div>
                </section>
            </main>
        </>
    );
}