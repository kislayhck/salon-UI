const Footer = () => {
  const year = new Date().getFullYear();

  const footerStyle = {
    background: 'black',
    color: 'white',
    padding: '10px',
  };

  return (
    <>
      <footer className="text-center text-capitalize mt-5" style={footerStyle}>
        copyright mysalon &copy; {year}
      </footer>
    </>
  );
};

export default Footer;
