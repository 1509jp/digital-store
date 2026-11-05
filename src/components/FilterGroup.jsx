
import './FilterGroup.css';

function FilterGroup({
  title,
  inputType = 'checkbox',
  options = [],
  selectedValues = [],
  onChange
}) {
  function handleChange(value) {
    if (inputType === 'radio') {
      onChange([value]);
      return;
    }

    if (selectedValues.includes(value)) {
      onChange(
        selectedValues.filter((item) => item !== value)
      );
    } else {
      onChange([...selectedValues, value]);
    }
  }

  return (
    <div className="filter-group">
      <h3>{title}</h3>

      <div className="filter-group-options">
        {options.map((option) => (
          <label
            key={option.value}
            className="filter-group-option"
          >
            <input
              type={inputType}
              name={title}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;
