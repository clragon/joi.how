import styled from 'styled-components';

const StyledSlider = styled.input.attrs({ type: 'range' })`
  appearance: none;

  width: 90%;
  margin: 6px 12px;
  height: 16px;
  background: transparent;
  border-radius: var(--border-radius);
  outline: none;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover,
  &:focus {
    outline: none;
    filter: brightness(1.2);
  }

  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: var(--border-radius);
    background: ${props => {
      const value = parseFloat(props.value?.toString() ?? '0');
      const min = parseFloat(props.min?.toString() ?? '0');
      const max = parseFloat(props.max?.toString() ?? '1');
      return `linear-gradient(to right, var(--primary) ${((value - min) / (max - min)) * 100}%, var(--background) ${((value - min) / (max - min)) * 100}%)`;
    }};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: var(--primary);
    filter: brightness(1.2);
    border-radius: 50%;
    margin-top: -4px;
  }
`;

type SliderProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> & {
  value: number;
  onChange: (value: number) => void;
};

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <StyledSlider
      type='range'
      value={value}
      onChange={e => onChange(parseFloat(e.target.value))}
      {...props}
    />
  );
};
