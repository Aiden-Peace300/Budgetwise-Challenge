import './Transactions.css'
import caret_pointing_sideways from './images/recentTransactionsLogos/caret_pointing_sideways.png';


type CategoriesProps = {
  logo: any;
  item: string;
  color: string;
  company: string;
  priceOfItem: string;
  date: string;
}

const Transaction: React.FC<CategoriesProps> = ({ logo, item, color, company, priceOfItem, date }) => {
  return (
    <div className="transaction_container">
      <div className="recent_transactions_information">
        <div className='recent_transactions_logo_container'>
          <img className="recent_transactions_logo" style={{maxWidth: '3rem', maxHeight: '4rem', border: `4px solid ${color}`}} src={logo} />
        </div>
        <div>
          <p className="recent_transactions_item">{item}</p>
          <p className="recent_transactions_company">{company}</p>
        </div>
      </div>
      <div className='recent_transactions_details_container'>
        <div className="recent_transactions_details">
          <p className="recent_transactions_item">{priceOfItem}</p>
          <p className="recent_transactions_company">{date}</p>
        </div>
        <div>
          <img className="sideways_caret_icon" src={caret_pointing_sideways} alt="caret icon" />
        </div>
      </div>
    </div>
  );
}

export default Transaction;