function OurWork() {
  return (
    <div className="work-container">
      <h1>Our Work</h1>
      <div className="work-grid">
        <div className="work-card">
          <video src="newfilm1.mp4" controls></video>
          <div className="work-info"></div>
          <h3>The Broken Promise</h3>
          <p>The Broken Promise is a heartfelt drama about love, regret, and second chances.</p>
        </div>
      </div>
      <div className="work-card">
          <video src="/newfilm2.mp4" controls></video>
          <div className="work-info">
            <h3>Another Film Title</h3>
            <p>Description of another amazing film.</p>
          </div>
        </div>
    </div>
  )
}

export default OurWork;