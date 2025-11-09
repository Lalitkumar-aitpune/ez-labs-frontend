import './Services.css'
export default function Services(){const services=[{id:1,title:'Art Curation',icon:'🎨'},{id:2,title:'Branding',icon:'✨'},{id:3,title:'Film Production',icon:'🎬'}]
return(<section className="services" id="services"><h2>Our Services</h2><div className="services-grid">{services.map(s=><div key={s.id} className="service-card"><div className="service-icon">{s.icon}</div><h3>{s.title}</h3></div>)}</div></section>)}
