function Card({things}){
    return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{things.plan}</h5>
            <h6 className="card-price text-center">${ things.fee}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={things.isUser?"":"test-muted"}><span className="fa-li"><i className={things.isUser?"fas fa-check":"fas fa-times"}></i></span>{things.user}</li>
              <li className={things.isStorage?"":"test-muted"}><span className="fa-li"><i className={things.isStorage?"fas fa-check":"fas fa-times"}></i></span>{things.storage}</li>
              <li className={things.isPiblicproject?"":"test-muted"}><span className="fa-li"><i className={things.isPiblicproject?"fas fa-check":"fas fa-times"}></i></span>{things.piblicproject}</li>
              <li className={things.isAcces?"":"test-muted"}><span className="fa-li"><i className={things.isAcces?"fas fa-check":"fas fa-times"}></i></span>{things.acces}</li>
              <li className={things.isPrivateproject?"":"test-muted"}><span className="fa-li"><i className={things.isPrivateproject?"fas fa-check":"fas fa-times"}></i></span>{things.privateproject}</li>
              <li className={things.isSupport?"":"test-muted"}><span className="fa-li"><i className={things.isSupport?"fas fa-check":"fas fa-times"}></i></span>{things.support}</li>
              <li className={things.isDomain?"":"test-muted"}><span className="fa-li"><i className={things.isDomain?"fas fa-check":"fas fa-times"}></i></span>{things.domain}</li>
              <li className={things.isStatus?"":"test-muted"}><span className="fa-li"><i className={things.isStatus?"fas fa-check":"fas fa-times"}></i></span>{things.status}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Card