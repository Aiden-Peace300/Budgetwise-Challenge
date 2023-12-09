import caretPointingDownwards from './images/caret pointing downwards.png';
import bankLogo from './images/bankLogo.png';
import './BankAndCreditCardInformation.css';

export default function BankAndCreditCardInformation() {
  const bank = 'Bank of America';
  const lastFourDigitsOfCard = '... 4765';
  const balanceTitle= 'Balance';
  const balance = '$1,326.23';

  return (
    <div className="recent_bank_container">
      <div className="recent_bank_lable_container">
        <h3 className='recent_bank_title'>Bank & Credit Cards</h3>
      </div>
      <div className="bank_container">
        <div className="recent_bank_information">
          <div className='recent_bank_logo_container'>
            <img className="recent_bank_logo" style={{maxWidth: '3rem', maxHeight: '4rem'}} src={bankLogo} />
          </div>
          <div>
            <p className="recent_bank_item">{bank}</p>
            <p className="recent_bank_company">{lastFourDigitsOfCard}</p>
          </div>
        </div>
        <div className='recent_bank_details_container'>
          <div className="recent_bank_details">
            <p className="recent_bank_item">{balanceTitle}</p>
            <p className="recent_bank_company">{balance}</p>
          </div>
          <div>
            <img className="bank_caret_icon" src={caretPointingDownwards} alt="bank_caret_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}