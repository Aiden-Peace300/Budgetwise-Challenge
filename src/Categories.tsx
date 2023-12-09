import React from 'react';
import './Categories.css';

interface CategoriesProps {
  logo: any
  title: string;
  total: number;
  spent: number;
  color: string;
}

const Categories: React.FC<CategoriesProps> = ({ logo, title, total, spent, color }) => {
  const progress = (spent / total) * 100;

  return (
    <div>
      <p className="font margin_bottom" style={{ marginBottom: '2rem' }}>
        Categories
      </p>
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between' }}>
          <div style={{display: 'flex', marginBottom: '.6rem'}}>
            <div style={{marginRight: '1rem'}}>
              <img style={{borderRadius: '50%', backgroundColor: color, padding: '.3rem', maxWidth: '3rem'}} src={logo} />
            </div>
            <div>
              <p className="font" style={{marginBottom: '.2rem'}}>{title}</p>
              <div>
                <p className='categories_font gray' style={{ display: 'inline' }}>{'spent '}</p>
                <p className='categories_font green' style={{ display: 'inline' }}>{`$${spent} `}</p>
                <p className='categories_font gray' style={{ display: 'inline' }}>{' of $' + total}</p>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p className='categories_font green' style={{marginBottom: '.2rem'}}>{`$${progress}`}</p>
            <p className='left_font gray' style={{marginLeft: '.35rem'}}>left</p>
          </div>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
