function BehindTheScenes() {
  return (
    <div className="bts-container">
      <h1>Behind The Scenes</h1>
      <div className="bts-grid">
        <div className="bts-card">
          <video src="bts1.mp4" controls />
          <div className="bts-info">
            <h3>Making of Film 1</h3>
            <p>A glimpse into the making of Film 1.</p>
          </div>
        </div>
        <div className="bts-card">
          <video src="bts2.mp4" controls />
          <div className="bts-info">
            <h3>Making of Film 2</h3>
            <p>A glimpse into the making of Film 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BehindTheScenes;