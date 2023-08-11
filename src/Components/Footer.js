

// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/jay-patel-a604a820b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCdI%2BR7FURFmKigWlCzxWMA%3D%3D" target="_blank">
           Jay Patel
        </a>
        <i className="fa-solid fa-copyright"></i>{year}
         <strong>
           <i>Food<sup><sub>is</sub></sup>life</i>
         </strong>
    </div>
  );
};

export default Footer;