export const color = {
    white: 'rgb(255, 255, 255)',
    blue: '#2e8d9e',
    navyBlue: '#060b26',
    darkBlue: '#14426b'
  };
  
  export const textSize = {
    small: '20px',
    medium: '25px',
    header: '40px',
    smallTablet: '20px',
    mediumTablet: '23px',
  };
  
  const size = {
    mobileM: '375px',
    tablet: '768px',
    laptop: '1024px',
  };
  
  export const device = {
    mobileM: `(min-width: ${size.mobileM})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
  };
  
  
  export const themes = {
    color,
    textSize,
    device
  };