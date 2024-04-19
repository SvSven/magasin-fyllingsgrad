import './LoadingPage.css'

export const LoadingPage = () => (
  <section className="hero is-white is-fullheight">
    <div className="hero-body container is-flex is-justify-content-center">
      <div className="block">
        <p className="title">Loading...</p>
        <div className="loading-container">
          <div className="loading loading-1"></div>
          <div className="loading loading-2"></div>
          <div className="loading loading-3"></div>
        </div>
      </div>
    </div>
  </section>
)
