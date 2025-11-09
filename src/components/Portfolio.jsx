import './Portfolio.css'
export default function Portfolio(){const projects=[{id:1,title:'Films',description:'Creative visual storytelling through film production'}]
return(<section className="portfolio" id="portfolio"><h2>Portfolio</h2><div className="portfolio-grid">{projects.map(p=><div key={p.id} className="portfolio-item"><div className="portfolio-image"></div><h3>{p.title}</h3><p>{p.description}</p></div>)}</div></section>)}
