import './styles.css';
import carImg from '../../assets/car-card.png';
import ButtonBuy from '../ButtonBuy';

export default function CatalogCard() {
    return (
        <div className="crst-card">
            <div className="crst-catalog-card-top">
                <img src={carImg} alt="Carro" />
            </div>
            <div className="crst-catalog-card-bottom">
                <h3>Audi Supra TT</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi
                </p>
            </div>
            <div className="crst-mt40">
                <ButtonBuy />
            </div>
        </div>
    );
}