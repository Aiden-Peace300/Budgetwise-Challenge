import './BudgetDropdown.css'
import caretPointingDownwards from './images/caret pointing downwards.png';

export default function BudgetDropdown() {
  return (
    <div className="budgetDropdown_container">
        <h1>Monthly Budget</h1>
        <img className="caret_icon2" src={caretPointingDownwards} alt="caret_icon" />
    </div>
  );
}
