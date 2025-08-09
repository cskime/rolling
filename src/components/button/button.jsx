import styled from "styled-components";
import BUTTON_SIZE from "./button-size";

const styles = {
  padding: {
    [BUTTON_SIZE.large]: "0 24px",
    [BUTTON_SIZE.medium]: "0 16px",
    [BUTTON_SIZE.small]: "0 16px",
    [BUTTON_SIZE.extraSmall]: "0 16px",
  },
  minWidth: {
    [BUTTON_SIZE.large]: "160px",
    [BUTTON_SIZE.medium]: "90px",
    [BUTTON_SIZE.small]: "90px",
    [BUTTON_SIZE.extraSmall]: "90px",
  },
  height: {
    [BUTTON_SIZE.large]: "56px",
    [BUTTON_SIZE.medium]: "40px",
    [BUTTON_SIZE.small]: "36px",
    [BUTTON_SIZE.extraSmall]: "28px",
  },
  fontSize: {
    [BUTTON_SIZE.large]: "18px",
    [BUTTON_SIZE.medium]: "16px",
    [BUTTON_SIZE.small]: "16px",
    [BUTTON_SIZE.extraSmall]: "14px",
  },
  fontWeight: {
    [BUTTON_SIZE.large]: "700",
    [BUTTON_SIZE.medium]: "400",
    [BUTTON_SIZE.small]: "400",
    [BUTTON_SIZE.extraSmall]: "400",
  },
  lineHeight: {
    [BUTTON_SIZE.large]: "28px",
    [BUTTON_SIZE.medium]: "26px",
    [BUTTON_SIZE.small]: "24px",
    [BUTTON_SIZE.extraSmall]: "20px",
  },
  borderRadius: {
    [BUTTON_SIZE.large]: "12px",
    [BUTTON_SIZE.medium]: "6px",
    [BUTTON_SIZE.small]: "6px",
    [BUTTON_SIZE.extraSmall]: "6px",
  },
};

const BaseButton = styled.button`
  border: none;
  cursor: pointer;
  padding: ${({ $size }) => styles.padding[$size]};
  font-size: ${({ $size }) => styles.fontSize[$size]};
  font-weight: ${({ $size }) => styles.fontWeight[$size]};
  line-height: ${({ $size }) => styles.lineHeight[$size]};
  border-radius: ${({ $size }) => styles.borderRadius[$size]};
  height: ${({ $size }) => styles.height[$size]};
  min-width: ${({ $size }) => styles.minWidth[$size]};
`;

/* Primary Button */

const StyledPrimaryButton = styled(BaseButton)`
  background-color: var(--color-purple-600);
  color: white;

  &:disabled {
    background-color: var(--color-gray-300);
  }

  &:hover {
    background-color: var(--color-purple-700);
  }

  &:active {
    background-color: var(--color-purple-800);
  }

  &:focus {
    background-color: var(--color-purple-800);
    border: 1px solid var(--color-purple-900);
  }
`;

function PrimaryButton({ title, size, ...props }) {
  return (
    <StyledPrimaryButton $size={size} {...props}>
      <span>{title}</span>
    </StyledPrimaryButton>
  );
}

/* Secondary Button */

const StyledSecondaryButton = styled(BaseButton)`
  background-color: white;
  color: var(--color-purple-700);
  border: 1px solid var(--color-purple-600);

  &:disabled {
    background-color: var(--color-gray-300);
    color: white;
    border: none;
  }

  &:hover {
    background-color: var(--color-purple-100);
    color: var(--color-purple-600);
    border: 1px solid var(--color-purple-700);
  }

  &:active {
    background-color: var(--color-purple-100);
    color: var(--color-purple-600);
    border: 1px solid var(--color-purple-800);
  }

  &:focus {
    border: 1px solid var(--color-purple-800);
  }
`;

function SecondaryButton({ title, size, ...props }) {
  return (
    <StyledSecondaryButton $size={size} {...props}>
      <span>{title}</span>
    </StyledSecondaryButton>
  );
}

export { PrimaryButton, SecondaryButton };
