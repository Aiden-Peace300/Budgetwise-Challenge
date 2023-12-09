import './BudgetDropdown.css'
import caretPointingDownwards from './images/caret pointing downwards.png';
import { GoTriangleDown } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { TbDotsVertical } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import Categories from "./Categories.tsx";
import educationLogo from "./images/categorieLogos/educationLogo.png";
import entertainmentLogo from "./images/categorieLogos/entertainmentLogo.png";

export default function BudgetDropdown() {
  return (
    <>
      <div className='budgetDropdown_main_container'>
        <div className='budgetDropdown_title'>
          <div className="budgetDropdown_container">
              <h1>Monthly Budget</h1>
              <img className="caret_icon2" src={caretPointingDownwards} alt="caret_icon" />
          </div>
            <button className="budgetDropdown_container3">
              <p className="selected_month">April 2022</p>
              <GoTriangleDown className="dropdown_icon" />
            </button>
        </div>
        <div className="sharing_options">
          <CiShare2 className="share_icon" />
          <TbDotsVertical className="share_icon" />
          <FaPlus className="icon_color" />
        </div>
      </div>
      <div className='categories'>
      <p className="font margin_bottom" style={{ marginBottom: '2rem', marginLeft: '.5rem'}}>
        Categories
      </p>
        <Categories logo={educationLogo} title="Education" total={'100'} spent={'40'} color="#41AEB7"/>
        <Categories logo={entertainmentLogo} title="Entertainment" total={'50'} spent={'10'} color="#FF8301"/>
      </div>
    </>
  );
}
