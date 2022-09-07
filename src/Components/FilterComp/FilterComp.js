import { useState } from "react";

function FilterComp({onNameFilter,onDateFilter}) {

    const [filters, setFilters] = useState({
        name: "",
        from: "",
        to: "",
      });
    
      const handleInput = (field) => (event) => {
        const { value } = event.target;
    
        setFilters({
          ...filters,
          [field]: value,
        });
    
        switch (field) {
          case "name":
            onNameFilter(value);
            break;
          case "from":
            onDateFilter(value, "from");
            break;
          case "to":
            break;
          default:
            break;
        }
      };
  return (
   <>
   <div className="form-group">
        <div className="controls">
          <input
            type="text"
            id="name"
          value={filters.name}
          onChange={handleInput("name")}
            className="form-control"
            placeholder="Search Names Here..."
          />
          <div className="help-block with-errors"></div>
        </div>
      </div><br/>
      <br/>
      <div style={{ marginLeft: "350px" }}>
          From :{" "}
          <input
            type="date"
            id="createDate"
            name="createDate"
          onChange={handleInput("from")}

            
          />{" "}
          To :{" "}
          <input
            type="date"
            id="endDate"
          onChange={handleInput("to")}
          />
        </div>
        <br/>
      <br/>

   </>
  );
}

export default FilterComp;