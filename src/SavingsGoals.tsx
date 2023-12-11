import { FaPlus } from "react-icons/fa";
import './SavingsGoals.css';

export default function SavingsGoals() {
  const totalSavingsMsg = `Total savings: $300 of $3,000 `;
  const totalSavingsMsg1 = `by April 15, 2023`;

  return (
    <div className="saving_overall_container">
      <div className="saving_lable_container">
        <h3 className='saving_title'>Saving Goals</h3>
        <FaPlus />
      </div>
      <div className="saving_container">
        <div className="trip_container">
          <h3 className='saving_item'>Italy Trip</h3>
          <h3 className='saving_item'>See details</h3>
        </div>
        <div className="trip_container_details">
          <div className="saving_information">
            <div className="saving_progress_bar" style={{padding: "2.9rem 3.5rem"}}></div>
            <h1 className='saving_progress_green'>$300</h1>
            <p>of $600 saved</p>
            <p>this month</p>
          </div>
          <div className='saving_details_container'>
            <div className="saving_details">
              <span className="saving_item">{totalSavingsMsg}</span>
              <span className="saving_item">{totalSavingsMsg1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
