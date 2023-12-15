import caretPointingDownwards from './images/caret pointing upwards.png';
import bankLogo from './images/bankLogo.png';
import './BankAndCreditCardInformation.css';

/************************************************************************
 * BankAndCreditCardInformation.tsx:
 * 
 * BankAndCreditCardInformation component that will for displaying bank 
 * and credit card information. It includes the bank's name, the last four 
 * digits of the card, and the account balance. Visual elements such as 
 * logos and icons are used to enhance the user interface.
 * 
 ************************************************************************/
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
            <img className="recent_bank_logo" src={bankLogo} />
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