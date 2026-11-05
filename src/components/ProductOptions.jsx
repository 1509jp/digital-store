
import './ProductOptions.css';


function ProductOptions({
  title,
  options = [],
  radius,
  shape = 'square',
  type = 'text',
  selectedOption = null,
  onSelect = () => {}
}) {

  return (
    <div className="product-options">
      <h3>{title}</h3>

      <div className="product-options-list">
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={`product-option ${
              shape === 'circle' ? 'circle' : 'square'
            } ${
              selectedOption === option ? 'selected' : ''
            }`}
            onClick={() => onSelect(option)}
            
style={{
  ...(type === 'color'
    ? { backgroundColor: option }
    : {}),
  ...(radius != null
    ? { borderRadius: radius }
    : {})
}}

            aria-label={
              type === 'color'
                ? `Selecionar cor ${option}`
                : `Selecionar opção ${option}`
            }
            aria-pressed={selectedOption === option}
          >
            {type === 'text' ? option : ''}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductOptions;
