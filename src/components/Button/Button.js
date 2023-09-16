import { StyledButton } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <StyledButton type={type} {...otherProps} data-isselected={selected}>
      {children}
    </StyledButton>
  );
};
