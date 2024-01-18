import React, { useState, useContext } from 'react';


const ChecklistContext = React.createContext();


const ChecklistProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  
  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(item)) {
       
        return prevCheckedItems.filter((checkedItem) => checkedItem !== item);
      } else {
       
        return [...prevCheckedItems, item];
      }
    });
  };

  return (
    <ChecklistContext.Provider value={{ checkedItems, handleCheckboxChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};


const Checkbox = ({ item }) => {
  const { checkedItems, handleCheckboxChange } = useContext(ChecklistContext);

  return (
    <label>
      <input
        type="checkbox"
        checked={checkedItems.includes(item)}
        onChange={() => handleCheckboxChange(item)}
      />
      {item}
    </label>
  );
};


const Checklist = () => {
  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div>
      <h2>Checklist</h2>
      {items.map((item) => (
        <Checkbox key={item} item={item} />
      ))}
      <hr />
      <DisplayCheckedItems />
    </div>
  );
};


const DisplayCheckedItems = () => {
  const { checkedItems } = useContext(ChecklistContext);

  return (
    <div>
      <h3>Selected Options</h3>
      {checkedItems.length === 0 ? (
        <p>No options selected.</p>
      ) : (
        <ul>
          {checkedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


const Assignment = () => {
  return (
    <ChecklistProvider>
      <Checklist />
    </ChecklistProvider>
  );
};

export default Assignment;
