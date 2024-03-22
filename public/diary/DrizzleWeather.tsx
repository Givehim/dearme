type IconProps = {
  className?: string;
};

export default function DrizzleWeather({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.5 21C10.0833 21 9.72933 20.8583 9.438 20.575C9.14667 20.2917 9.00067 19.9417 9 19.525C9 19.325 9.03767 19.1333 9.113 18.95C9.18833 18.7667 9.30067 18.6083 9.45 18.475L10.5 17.5L11.55 18.475C11.7 18.6083 11.8127 18.7667 11.888 18.95C11.9633 19.1333 12.0007 19.325 12 19.525C12 19.9417 11.8543 20.2917 11.563 20.575C11.2717 20.8583 10.9173 21 10.5 21ZM7.05 19.5L6 18.45L8.95 15.5L10 16.55L7.05 19.5ZM13.5 18L12 16.5L13.5 15L15 16.5L13.5 18ZM4.5 18L3 16.5L4.5 15L6 16.5L4.5 18ZM5.5 14C3.98333 14 2.68767 13.4627 1.613 12.388C0.538333 11.3133 0.000666667 10.0173 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.03767 1.354 6.963 0.812001C7.88833 0.270001 8.90067 -0.000665438 10 1.2285e-06C11.5 1.2285e-06 12.8043 0.479334 13.913 1.438C15.0217 2.39667 15.6923 3.59233 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5627 11.8127 18.688 12.688C17.8133 13.5633 16.7507 14.0007 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.471 2.21667 7.813 2.65C7.155 3.08333 6.659 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.68767 5.38767 3.013 6.063C2.33833 6.73833 2.00067 7.55067 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" />
    </svg>
  );
}