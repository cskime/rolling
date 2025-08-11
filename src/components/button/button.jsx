import styled from "styled-components";
import BUTTON_SIZE from "./button-size";

const styles = {
  minWidth: {
    [BUTTON_SIZE.large]: "160px",
    [BUTTON_SIZE.medium]: "90px",
    [BUTTON_SIZE.small]: "90px",
    [BUTTON_SIZE.extraSmall]: "90px",
  },
  height: (hasIcon) => ({
    [BUTTON_SIZE.large]: "56px",
    [BUTTON_SIZE.medium]: "40px",
    [BUTTON_SIZE.small]: "36px",
    [BUTTON_SIZE.extraSmall]: hasIcon ? "32px" : "28px",
  }),
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
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: 0 16px;
  font-size: ${({ $size }) => styles.fontSize[$size]};
  font-weight: ${({ $size }) => styles.fontWeight[$size]};
  line-height: ${({ $size }) => styles.lineHeight[$size]};
  border-radius: ${({ $size }) => styles.borderRadius[$size]};
  height: ${({ $size, $icon }) => styles.height($icon)[$size]};

  span {
    display: block;
    min-width: ${({ $size }) => styles.minWidth[$size]};
  }
`;

/* Primary Button */

const StyledPrimaryButton = styled(BaseButton)`
  padding: 0 24px;
  background-color: var(--color-purple-600);
  color: white;

  &:hover {
    background-color: var(--color-purple-700);
  }

  &:active {
    background-color: var(--color-purple-800);
  }

  &:focus {
    background-color: var(--color-purple-800);
    box-shadow: 0 0 0 1px var(--color-purple-900) inset;
  }

  &:disabled {
    background-color: var(--color-gray-300);
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
  box-shadow: 0 0 0 1px var(--color-purple-600) inset;

  &:hover {
    background-color: var(--color-purple-100);
    color: var(--color-purple-600);
    box-shadow: 0 0 0 1px var(--color-purple-700) inset;
  }

  &:active {
    background-color: var(--color-purple-100);
    color: var(--color-purple-600);
    box-shadow: 0 0 0 1px var(--color-purple-800) inset;
  }

  &:focus {
    box-shadow: 0 0 0 1px var(--color-purple-800) inset;
  }

  &:disabled {
    background-color: var(--color-gray-300);
    color: white;
    box-shadow: none;
  }
`;

function SecondaryButton({ title, size, ...props }) {
  return (
    <StyledSecondaryButton $size={size} {...props}>
      <span>{title}</span>
    </StyledSecondaryButton>
  );
}

/* Outlined Button */

const StyledOutlinedButton = styled(BaseButton)`
  background-color: white;
  color: var(--color-gray-900);
  box-shadow: 0 0 0 1px var(--color-gray-300) inset;
  padding: ${({ $title }) => ($title ? "0 16px" : "0 6px")};
  width: ${({ $icon, $size, $title }) =>
    $title ? "auto" : styles.height($icon)[$size]};

  &:hover {
    background-color: var(--color-gray-100);
  }

  &:active {
    background-color: var(--color-gray-100);
  }

  &:focus {
    box-shadow: 0 0 0 1px var(--color-gray-500) inset;
  }

  &:disabled {
    background-color: var(--color-gray-300);
    color: white;
    box-shadow: none;
  }
`;

const stylesWithIcon = {
  iconSize: {
    [BUTTON_SIZE.medium]: "24px",
    [BUTTON_SIZE.small]: "24px",
    [BUTTON_SIZE.extraSmall]: "20px",
  },
  gap: {
    [BUTTON_SIZE.medium]: "10px",
    [BUTTON_SIZE.small]: "4px",
    [BUTTON_SIZE.extraSmall]: "4px",
  },
};

const IconTitleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $size }) => stylesWithIcon.gap[$size]};
`;

const Icon = styled.div`
  width: ${({ $size }) => stylesWithIcon.iconSize[$size]};
  height: ${({ $size }) => stylesWithIcon.iconSize[$size]};

  img {
    width: 100%;
    height: 100%;

    ${({ $disabled }) =>
      $disabled
        ? "filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(5deg) brightness(105%) contrast(101%);"
        : ""}
  }
`;

function OutlinedButton({ title, icon, size, ...props }) {
  return (
    <StyledOutlinedButton $size={size} $title={title} $icon={icon} {...props}>
      {icon && size !== BUTTON_SIZE.large ? (
        <IconTitleContent $size={size}>
          <Icon $size={size} $disabled={props.disabled}>
            <img src={icon} alt="버튼 아이콘" />
          </Icon>
          {title && <div>{title}</div>}
        </IconTitleContent>
      ) : (
        <span>{title}</span>
      )}
    </StyledOutlinedButton>
  );
}

export { OutlinedButton, PrimaryButton, SecondaryButton };
