function Body() {
    return (
      <>
        <div
          className="page-features"
          xyz="fade flip-down stagger duration-10 delay-2 ease-out-back"
        >
          <div className="feature-item xyz-nested"></div>
          <div className="feature-item xyz-nested"></div>
          <div className="feature-item xyz-nested"></div>
        </div>
        <div
        className="page-section"
        xyz="fade small stagger delay-4 ease-in-out"
>
        <div className="section-left" xyz="fade left stagger">
          <div className="section-item xyz-nested"></div>
          <div className="section-item xyz-nested"></div>
          <div className="section-item xyz-nested"></div>
        </div>
        <div className="section-right xyz-nested" xyz="fade big delay-10"></div>
        </div>
      </>

    );
  }
  export default Body;